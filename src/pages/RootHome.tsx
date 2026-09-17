import { SiteLayout } from '@/components/layout/SiteLayout';
import { RootRedirectToSavedLang } from '@/components/RootRedirectToSavedLang';
import { Home } from './Home';

// The canonical English entry point ("/"). Renders identical content to
// "/en" for crawlers and first-time visitors; only adds a client-side
// redirect for a returning visitor who previously chose Arabic.
export function RootHome() {
  return (
    <SiteLayout lang="en">
      <RootRedirectToSavedLang />
      <Home />
    </SiteLayout>
  );
}
