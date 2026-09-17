import { Head } from 'vite-react-ssg';
import { useLang } from '@/i18n';
import { buildPath } from '@/utils/paths';
import { Button } from '@/components/ui/Button';
import styles from './NotFound.module.css';

export function NotFound() {
  const { lang, t } = useLang();

  return (
    <div className={`container ${styles.wrap}`}>
      <Head>
        <title>{t.notFound.title}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>{t.notFound.title}</h1>
      <p className={styles.body}>{t.notFound.body}</p>
      <Button to={buildPath(lang)}>{t.notFound.cta}</Button>
    </div>
  );
}
