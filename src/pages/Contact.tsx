import { useSearchParams } from 'react-router-dom';
import { useLang } from '@/i18n';
import { contactInfo, hasAnyContactDetail } from '@/data/contact';
import { getLocalized, getProduct } from '@/data/products';
import { Seo } from '@/components/Seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/ui/ContactForm';
import { Icon } from '@/components/ui/Icon';
import styles from './Contact.module.css';

export function Contact() {
  const { lang, t } = useLang();
  const [searchParams] = useSearchParams();

  const productId = searchParams.get('product');
  const product = productId ? getProduct(productId) : undefined;
  const productName = product ? getLocalized(product, lang).localizedName : undefined;

  const showDetails = hasAnyContactDetail(contactInfo);

  return (
    <>
      <Seo title={t.contact.metaTitle} description={t.contact.metaDescription} />

      <section className={styles.hero}>
        <div className="container">
          <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} center as="h1" />
        </div>
      </section>

      <div className="container">
        <div className={styles.grid}>
          <div className={styles.infoCard}>
            <p className={styles.infoTitle}>{t.contact.infoTitle}</p>

            {showDetails ? (
              <>
                {contactInfo.phone ? (
                  <div className={styles.infoRow}>
                    <Icon name="Phone" className={styles.infoIcon} />
                    <div>
                      <p className={styles.infoLabel}>{t.contact.phoneLabel}</p>
                      <a className={styles.infoValue} href={`tel:${contactInfo.phone}`}>
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                ) : null}
                {contactInfo.whatsapp ? (
                  <div className={styles.infoRow}>
                    <Icon name="MessageCircle" className={styles.infoIcon} />
                    <div>
                      <p className={styles.infoLabel}>{t.contact.whatsappLabel}</p>
                      <a className={styles.infoValue} href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
                        {contactInfo.whatsapp}
                      </a>
                    </div>
                  </div>
                ) : null}
                {contactInfo.email ? (
                  <div className={styles.infoRow}>
                    <Icon name="Mail" className={styles.infoIcon} />
                    <div>
                      <p className={styles.infoLabel}>{t.contact.emailLabel}</p>
                      <a className={styles.infoValue} href={`mailto:${contactInfo.email}`}>
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                ) : null}
                {contactInfo.address ? (
                  <div className={styles.infoRow}>
                    <Icon name="MapPin" className={styles.infoIcon} />
                    <div>
                      <p className={styles.infoLabel}>{t.contact.addressLabel}</p>
                      <p className={styles.infoValue}>{contactInfo.address[lang]}</p>
                    </div>
                  </div>
                ) : null}
                {contactInfo.hours ? (
                  <div className={styles.infoRow}>
                    <Icon name="Clock" className={styles.infoIcon} />
                    <div>
                      <p className={styles.infoLabel}>{t.contact.hoursLabel}</p>
                      <p className={styles.infoValue}>{contactInfo.hours[lang]}</p>
                    </div>
                  </div>
                ) : null}
              </>
            ) : (
              <div className={styles.comingSoon}>
                <Icon name="Clock" className={styles.comingSoonIcon} />
                <p className={styles.comingSoonTitle}>{t.contact.comingSoonTitle}</p>
                <p className={styles.comingSoonBody}>{t.contact.comingSoonBody}</p>
              </div>
            )}
          </div>

          <div className={styles.formCard}>
            <p className={styles.formTitle}>{t.contact.formTitle}</p>
            <ContactForm productName={productName} />
          </div>
        </div>
      </div>
    </>
  );
}
