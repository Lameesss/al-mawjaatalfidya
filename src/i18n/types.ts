export interface WhyItem {
  title: string;
  body: string;
}

export interface CategoryCopy {
  name: string;
  shortDescription: string;
  intro: string;
}

export interface Dictionary {
  common: {
    brandName: string;
    tagline: string;
    viewDetails: string;
    viewProduct: string;
    requestInfo: string;
    contactUs: string;
    explore: string;
    learnMore: string;
    backToHome: string;
    allCategory: string;
    skipToContent: string;
    close: string;
  };
  nav: {
    home: string;
    products: string;
    categories: string;
    about: string;
    contact: string;
    menuLabel: string;
    languageLabel: string;
  };
  home: {
    eyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    statsProductsLabel: string;
    statsCategoriesLabel: string;
    statsSourcingLabel: string;
    statsSupportLabel: string;
    categoryCount: (count: number) => string;
    categoriesEyebrow: string;
    categoriesTitle: string;
    categoriesSubtitle: string;
    featuredEyebrow: string;
    featuredTitle: string;
    featuredSubtitle: string;
    featuredCta: string;
    equipmentEyebrow: string;
    equipmentTitle: string;
    equipmentBody: string;
    equipmentCta: string;
    motherChildEyebrow: string;
    motherChildTitle: string;
    motherChildBody: string;
    motherChildCta: string;
    whyEyebrow: string;
    whyTitle: string;
    whyItems: WhyItem[];
    aboutTeaserEyebrow: string;
    aboutTeaserTitle: string;
    aboutTeaserBody: string;
    aboutTeaserCta: string;
    ctaTitle: string;
    ctaBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metaTitle: string;
    metaDescription: string;
  };
  products: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    searchLabel: string;
    resultsCount: (count: number) => string;
    emptyTitle: string;
    emptyBody: string;
    emptyReset: string;
  };
  product: {
    breadcrumbProducts: string;
    categoryLabel: string;
    featuresTitle: string;
    relatedTitle: string;
    requestInfo: string;
    notFoundTitle: string;
    notFoundBody: string;
  };
  category: {
    breadcrumbCategories: string;
    productsInCategory: (count: number) => string;
    relatedCategoriesTitle: string;
    ctaTitle: string;
    ctaButton: string;
    notFoundTitle: string;
    notFoundBody: string;
    items: {
      equipment: CategoryCopy;
      furniture: CategoryCopy;
      supplies: CategoryCopy;
    };
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    whatWeImportEyebrow: string;
    whatWeImportTitle: string;
    statement: string;
    valuesEyebrow: string;
    valuesTitle: string;
    values: WhyItem[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    infoTitle: string;
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    addressLabel: string;
    hoursLabel: string;
    comingSoonTitle: string;
    comingSoonBody: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formPhoneOptional: string;
    formMessage: string;
    formProductNotice: (name: string) => string;
    formSubmit: string;
    formSending: string;
    formSuccessTitle: string;
    formSuccessBody: string;
    formAnother: string;
  };
  forms: {
    required: string;
    invalidEmail: string;
    tooShort: string;
  };
  footer: {
    tagline: string;
    quickLinksTitle: string;
    categoriesTitle: string;
    contactTitle: string;
    rights: string;
  };
  notFound: {
    title: string;
    body: string;
    cta: string;
  };
}
