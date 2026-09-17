import { useState, type FormEvent } from 'react';
import { useLang } from '@/i18n';
import { Button } from './Button';
import { Icon } from './Icon';
import styles from './ContactForm.module.css';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactFormProps {
  productName?: string;
}

export function ContactForm({ productName }: ContactFormProps) {
  const { t } = useLang();
  const [values, setValues] = useState<FormValues>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function validate(v: FormValues): FormErrors {
    const next: FormErrors = {};
    if (!v.name.trim()) next.name = t.forms.required;
    if (!v.email.trim()) next.email = t.forms.required;
    else if (!EMAIL_RE.test(v.email.trim())) next.email = t.forms.invalidEmail;
    if (!v.message.trim()) next.message = t.forms.required;
    else if (v.message.trim().length < 10) next.message = t.forms.tooShort;
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');
    // No backend is connected yet — this simulates submission so the frontend
    // flow (validation → sending → success) is fully wired for a future API.
    window.setTimeout(() => setStatus('sent'), 700);
  }

  function reset() {
    setValues({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setStatus('idle');
  }

  if (status === 'sent') {
    return (
      <div className={styles.success} role="status">
        <Icon name="CheckCircle2" className={styles.successIcon} />
        <p className={styles.successTitle}>{t.contact.formSuccessTitle}</p>
        <p className={styles.successBody}>{t.contact.formSuccessBody}</p>
        <Button variant="secondary" onClick={reset}>
          {t.contact.formAnother}
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {productName ? <p className={styles.notice}>{t.contact.formProductNotice(productName)}</p> : null}

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-name">
            {t.contact.formName}
          </label>
          <input
            id="contact-name"
            className={`${styles.input} ${errors.name ? styles.invalid : ''}`}
            type="text"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
          {errors.name ? (
            <p className={styles.error} id="contact-name-error" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-email">
            {t.contact.formEmail}
          </label>
          <input
            id="contact-email"
            className={`${styles.input} ${errors.email ? styles.invalid : ''}`}
            type="email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
          {errors.email ? (
            <p className={styles.error} id="contact-email-error" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-phone">
          {t.contact.formPhone} <span className={styles.optional}>{t.contact.formPhoneOptional}</span>
        </label>
        <input
          id="contact-phone"
          className={styles.input}
          type="tel"
          value={values.phone}
          onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-message">
          {t.contact.formMessage}
        </label>
        <textarea
          id="contact-message"
          className={`${styles.textarea} ${errors.message ? styles.invalid : ''}`}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message ? (
          <p className={styles.error} id="contact-message-error" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" iconEnd="Send" disabled={status === 'sending'}>
        {status === 'sending' ? t.contact.formSending : t.contact.formSubmit}
      </Button>
    </form>
  );
}
