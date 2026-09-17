import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LANG_STORAGE_KEY } from '@/i18n';

// The pre-rendered "/" is always the full English homepage (for crawlers and
// first-time visitors). This client-only enhancement sends a returning
// visitor who previously chose Arabic straight to "/ar" — it never runs
// during the SSG build, so it has no effect on the static markup itself.
export function RootRedirectToSavedLang() {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'ar') {
        navigate('/ar', { replace: true });
      }
    } catch {
      // localStorage unavailable — stay on the English default.
    }
  }, [navigate]);

  return null;
}
