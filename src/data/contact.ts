// Real contact details have not been provided yet. Every field below is left
// empty on purpose — do not fill these with placeholder/fake values. The
// Contact page and footer only render a row when its value is non-empty, and
// fall back to a "details coming soon" message when everything is empty. Fill
// in real values here once available; no other files need to change.
export interface ContactInfo {
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: LocalizedAddress;
  hours?: LocalizedText;
  socials?: SocialLink[];
  mapEmbedUrl?: string;
}

export interface LocalizedText {
  en: string;
  ar: string;
}

export type LocalizedAddress = LocalizedText;

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export const contactInfo: ContactInfo = {
  phone: '00218923368089',
  email: 'Info@almawjaatalfidya.com',
};

export function hasAnyContactDetail(info: ContactInfo): boolean {
  return Boolean(
    info.phone || info.whatsapp || info.email || info.address || info.hours || (info.socials && info.socials.length > 0),
  );
}
