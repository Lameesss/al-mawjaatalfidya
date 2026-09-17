// Bilingual product catalog mirroring the real Medical Equipment, Medical
// Furniture, and Medical Supplies sections. Each product has a name (en/ar)
// and a local image under /public/products. Descriptions and key features are
// generated per category via templates in getLocalized() to keep the data lean
// while still presenting rich bilingual content.
import type { CategoryId } from './categories';
import type { Lang } from '@/i18n';

const img = (file: string) => `/products/${file}`;

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface Product {
  id: string;
  category: CategoryId;
  image: string;
  name: LocalizedText;
  description?: LocalizedText;
  features?: { en: string[]; ar: string[] };
}

export const products: Product[] = [
  // ───────────────────────── Medical Equipment ─────────────────────────
  { id: 'xray-system', category: 'equipment', image: img('1711998746.png'), name: { en: 'X-Ray System', ar: 'نظام أشعة سينية' } },
  { id: 'x501-xray', category: 'equipment', image: img('1711999137.png'), name: { en: 'X-501 X-Ray', ar: 'جهاز أشعة سينية X-501' } },
  { id: 'xray-lamp', category: 'equipment', image: img('1711999476.png'), name: { en: 'X-Ray Lamp', ar: 'مصباح أشعة سينية' } },
  { id: 'dp10-ultrasound', category: 'equipment', image: img('1711999732.png'), name: { en: 'DP-10 Diagnostic Ultrasound', ar: 'جهاز موجات فوق صوتية تشخيصي DP-10' } },
  { id: 'ultrasound-system', category: 'equipment', image: img('1712000196.png'), name: { en: 'Ultrasound System', ar: 'نظام موجات فوق صوتية' } },
  { id: 'linear-transducer', category: 'equipment', image: img('1712000436.png'), name: { en: 'Linear Transducer', ar: 'مجس خطي' } },
  { id: 'dp20-ultrasound', category: 'equipment', image: img('1712000588.png'), name: { en: 'DP-20 Diagnostic Ultrasound', ar: 'جهاز موجات فوق صوتية تشخيصي DP-20' } },
  { id: 'ultrasound-printer-multiformat', category: 'equipment', image: img('1712000734.png'), name: { en: 'Ultrasound Printer – Multiformat Diagnostic', ar: 'طابعة موجات فوق صوتية – تشخيصية متعددة الصيغ' } },
  { id: 'ultrasound-printer-bw', category: 'equipment', image: img('1712000873.png'), name: { en: 'Ultrasound Printer – Black & White', ar: 'طابعة موجات فوق صوتية – أبيض وأسود' } },
  { id: 'mindray-ultrasound-trolley', category: 'equipment', image: img('1712001028.png'), name: { en: 'Trolley for Mindray Ultrasound', ar: 'عربة لجهاز موجات Mindray' } },
  { id: 'hb112-color-doppler', category: 'equipment', image: img('1712001073.png'), name: { en: 'HB112 Cardiac 4D Color Doppler', ar: 'جهاز دوبلر ملوّن رباعي الأبعاد للقلب HB112' } },
  { id: 'sh100-urine-analyzer', category: 'equipment', image: img('1712020279.png'), name: { en: 'SH100 Automated Urine Chemistry Analyzer', ar: 'محلل كيمياء البول الآلي SH100' } },
  { id: 'centrifuge-4000', category: 'equipment', image: img('1712020303.png'), name: { en: 'Centrifuge 4000RPM 6×20ml', ar: 'جهاز طرد مركزي 4000 دورة 6×20 مل' } },
  { id: 'lmc4000-centrifuge', category: 'equipment', image: img('1712020425.png'), name: { en: 'LMC-4000 Low Speed Benchtop Centrifuge', ar: 'جهاز طرد مركزي مكتبي منخفض السرعة LMC-4000' } },
  { id: 'amsco-3085-table', category: 'equipment', image: img('1712020494.png'), name: { en: 'AMSCO-3085 SP Surgical Table', ar: 'طاولة جراحية AMSCO-3085 SP' } },
  { id: 'orthopedics-tractor-rack', category: 'equipment', image: img('1712020908.png'), name: { en: 'Orthopedics Tractor Rack', ar: 'حامل شد عظمي' } },
  { id: 'ua1020-bp-monitor', category: 'equipment', image: img('1712020974.png'), name: { en: 'UA-1020 Upper Arm Blood Pressure Monitor', ar: 'جهاز قياس ضغط الدم للذراع UA-1020' } },
  { id: 'ceiling-led-surgical-light', category: 'equipment', image: img('1712021017.png'), name: { en: 'Ceiling LED Surgical Light WYLED 700/500M', ar: 'ضوء جراحي LED معلّق بالسقف WYLED 700/500M' } },
  { id: 'examination-lamps', category: 'equipment', image: img('1712021117.png'), name: { en: 'Examination Lamps', ar: 'مصابيح فحص' } },
  { id: 'shadowless-led-light', category: 'equipment', image: img('1712021414.png'), name: { en: 'Shadowless Operating LED Cold Light', ar: 'ضوء جراحي LED بارد بدون ظل' } },
  { id: 'electric-operating-table', category: 'equipment', image: img('1712021442.png'), name: { en: 'Electric Operating Table', ar: 'طاولة عمليات كهربائية' } },
  { id: 'oxygen-pressure-regulator', category: 'equipment', image: img('1712021469.png'), name: { en: 'Oxygen Pressure Regulator Diaphragm', ar: 'منظّم ضغط الأكسجين الغشائي' } },
  { id: 'iv-stand-4-hooks', category: 'equipment', image: img('1712021584.png'), name: { en: 'IV Stand with 4 Hooks', ar: 'حامل محاليل وريدية بأربع خطافات' } },
  { id: 'patient-turning-device', category: 'equipment', image: img('1712302123.png'), name: { en: 'Multi-Functional Patient Turning Device', ar: 'جهاز تقليب المريض متعدد الوظائف' } },
  { id: 'electric-suction-machine', category: 'equipment', image: img('1714221307.jpg'), name: { en: 'Electric Suction Machine – Double Piston Pump', ar: 'جهاز شفط كهربائي – مضخة مكبسية مزدوجة' } },
  { id: 'anti-bolus-infusion-pump', category: 'equipment', image: img('1714221435.jpg'), name: { en: 'Anti-Bolus Infusion Pump', ar: 'مضخة تسريب مضادة للجرعة المفاجئة' } },
  { id: 'uterine-manipulator-set', category: 'equipment', image: img('1714221483.jpg'), name: { en: 'Cup Type Uterine Manipulator Set', ar: 'طقم محرّك رحم نوع كأس لجراحة النساء' } },
  { id: 'uterus-morcellator-set', category: 'equipment', image: img('1714221576.jpg'), name: { en: 'Uterus Cutting Morcellator Instruments Set', ar: 'طقم أدوات مفرمة قطع الرحم النسائية' } },
  { id: 'hysteroscopy-set', category: 'equipment', image: img('1714221724.jpg'), name: { en: 'Hysteroscopy Gynecology Set', ar: 'طقم تنظير الرحم النسائي' } },
  { id: 'cataract-surgery-set', category: 'equipment', image: img('1714221724.jpg'), name: { en: 'Reusable Cataract Eye Micro Surgery Set (21 pcs)', ar: 'طقم أدوات جراحة الساد الدقيقة 21 قطعة (قابل لإعادة الاستخدام)' } },

  // ───────────────────────── Medical Furniture ─────────────────────────
  { id: 'multi-height-manual-bed', category: 'furniture', image: img('1712023088.png'), name: { en: 'Multi-Height Manual Patient Bed', ar: 'سرير مريض يدوي متعدد الارتفاعات' } },
  { id: '4-motor-hospital-bed', category: 'furniture', image: img('1712023125.png'), name: { en: '4 Motors Hospital Patient Bed', ar: 'سرير مستشفى بأربعة محركات' } },
  { id: 'abs-double-crank-bed', category: 'furniture', image: img('1712023158.png'), name: { en: 'ABS Double Crank Bed', ar: 'سرير بمرفقين ABS' } },
  { id: 'examination-bed-backrest', category: 'furniture', image: img('1712023192.png'), name: { en: 'Examination Bed with Back Rest', ar: 'سرير فحص بمسند ظهر' } },
  { id: 'examination-bed', category: 'furniture', image: img('1712023232.png'), name: { en: 'Examination Bed', ar: 'سرير فحص' } },
  { id: 'anti-decubitus-mattress', category: 'furniture', image: img('1712023276.png'), name: { en: 'Medical Anti-Decubitus Mattress', ar: 'مرتبة طبية مضادة لقرح الفراش' } },
  { id: 'manual-wheelchair', category: 'furniture', image: img('1712023307.png'), name: { en: 'Manual Wheelchair', ar: 'كرسي متحرك يدوي' } },
  { id: 'electric-wheelchair-6004', category: 'furniture', image: img('1712023386.png'), name: { en: 'Electric Wheelchair MK-6004', ar: 'كرسي متحرك كهربائي MK-6004' } },
  { id: 'electric-wheelchair-6002a', category: 'furniture', image: img('1712023427.png'), name: { en: 'Electric Wheelchair MK-6002A', ar: 'كرسي متحرك كهربائي MK-6002A' } },
  { id: 'aluminum-walker-wheels', category: 'furniture', image: img('1712023489.png'), name: { en: 'Aluminum Walker with Wheels', ar: 'مشاية ألمنيوم بعجلات' } },
  { id: 'aluminum-crutch', category: 'furniture', image: img('1712023517.png'), name: { en: 'Aluminum Crutch', ar: 'عكاز ألمنيوم' } },
  { id: 'elbow-crutch', category: 'furniture', image: img('1712023574.png'), name: { en: 'Elbow Crutch', ar: 'عكاز مرفقي' } },
  { id: 'nursing-trolley', category: 'furniture', image: img('1712023857.png'), name: { en: 'Nursing Trolley', ar: 'عربة تمريض' } },
  { id: 'anaesthetic-trolley', category: 'furniture', image: img('1712023705.png'), name: { en: 'Anaesthetic Trolley', ar: 'عربة تخدير' } },
  { id: 'emergency-trolley', category: 'furniture', image: img('1712023745.png'), name: { en: 'Emergency Trolley', ar: 'عربة طوارئ' } },
  { id: 'treatment-trolley-1-draw', category: 'furniture', image: img('1712023819.png'), name: { en: 'Treatment Trolley with One Drawer', ar: 'عربة علاج بدرج واحد' } },
  { id: 'stainless-three-layer-trolley', category: 'furniture', image: img('1712023911.png'), name: { en: 'Stainless Steel Detachable Three-Layer Trolley', ar: 'عربة ستانلس ستيل ثلاثية الطبقات قابلة للفك' } },
  { id: 'instrument-trolley', category: 'furniture', image: img('1712023965.png'), name: { en: 'Instrument Trolley 540×370×90cm', ar: 'عربة أدوات 540×370×90 سم' } },
  { id: 'folding-screen-3', category: 'furniture', image: img('1712024032.png'), name: { en: 'Folding Screen 3 Folds', ar: 'ساتر قابل للطي 3 طيات' } },
  { id: 'folding-screen-4', category: 'furniture', image: img('1712024032.png'), name: { en: 'Folding Screen 4 Folds', ar: 'ساتر قابل للطي 4 طيات' } },
  { id: 'commode-chair', category: 'furniture', image: img('1712199169.png'), name: { en: 'Commode Chair', ar: 'كرسي مرحاض' } },
  { id: 'walking-stick-4-legs', category: 'furniture', image: img('1712303337.png'), name: { en: 'Walking Stick with Four Legs', ar: 'عصا مشي بأربع أرجل' } },
  { id: 'over-bed-rolling-table', category: 'furniture', image: img('1712303436.png'), name: { en: 'Adjustable Over-Bed Rolling Table', ar: 'طاولة سرير متحركة قابلة للتعديل' } },
  { id: 'dl158-fridge', category: 'furniture', image: img('1712303576.png'), name: { en: 'DL-158 Liter Freestanding Fridge', ar: 'ثلاجة مستقلة 158 لتر DL' } },
  { id: 'instrument-cabinet', category: 'furniture', image: img('1712303611.png'), name: { en: 'Medical Instrument Cabinet', ar: 'خزانة أدوات طبية' } },

  // ───────────────────────── Medical Supplies ─────────────────────────
  { id: 'pbt-bandage', category: 'supplies', image: img('1712024960.png'), name: { en: 'PBT Bandage', ar: 'ضمادة PBT' } },
  { id: 'non-woven-self-adhesive', category: 'supplies', image: img('1712025005.png'), name: { en: 'Non-Woven Self-Adhesive Bandage', ar: 'ضمادة لاصقة ذاتياً غير منسوجة' } },
  { id: 'conforming-bandage', category: 'supplies', image: img('1712025032.png'), name: { en: 'Conforming Bandage', ar: 'ضمادة مطابقة' } },
  { id: 'ice-bandage', category: 'supplies', image: img('1712025060.png'), name: { en: 'Ice Bandage', ar: 'ضمادة ثلجية' } },
  { id: 'type-h-hemostatic-bandage', category: 'supplies', image: img('1712025148.png'), name: { en: 'Type H Hemostatic Bandage', ar: 'ضمادة مرقئة نوع H' } },
  { id: 'jumbo-gauze-roll', category: 'supplies', image: img('1712025207.png'), name: { en: 'Jumbo Gauze Roll', ar: 'لفة شاش كبيرة' } },
  { id: 'cast-padding-bandage', category: 'supplies', image: img('1712025234.png'), name: { en: 'Orthopedics Cast Padding Medical Bandage', ar: 'ضمادة حشو الجبيرة العظمية' } },
  { id: 'sports-medical-tape', category: 'supplies', image: img('1712025275.png'), name: { en: 'Cotton Rigid Sports Medical Tape (Zinc Oxide)', ar: 'شريط طبي رياضي قطني صلب بأكسيد الزنك' } },
  { id: 'non-woven-wound-dressing', category: 'supplies', image: img('1712025333.png'), name: { en: 'Non-Woven Wound Dressing', ar: 'ضماد جروح غير منسوج' } },
  { id: 'coverall', category: 'supplies', image: img('1712025370.png'), name: { en: 'Protective Coverall', ar: 'بدلة واقية كاملة' } },
  { id: 'isolation-gown', category: 'supplies', image: img('1712025398.png'), name: { en: 'Disposable Isolation Gown', ar: 'عباءة عزل للاستخدام مرة واحدة' } },
  { id: 'kn95-facemask', category: 'supplies', image: img('1712197982.png'), name: { en: 'KN95 Face Mask', ar: 'كمامة KN95' } },
  { id: 'nitrile-gloves', category: 'supplies', image: img('1712198086.png'), name: { en: 'Nitrile Gloves', ar: 'قفازات نيتريل' } },
  { id: 'medical-alcohol', category: 'supplies', image: img('1712198120.png'), name: { en: 'Medical Alcohol', ar: 'كحول طبي' } },
  { id: 'hand-sanitizers', category: 'supplies', image: img('1712198156.png'), name: { en: 'Hand Sanitizers', ar: 'معقّمات اليدين' } },
  { id: 'luer-lock-syringe', category: 'supplies', image: img('1712198187.png'), name: { en: 'Luer Lock Syringe', ar: 'محقنة لوير لوك' } },
  { id: 'high-polymer-splint', category: 'supplies', image: img('1712198259.png'), name: { en: 'High Polymer Splint', ar: 'جبيرة بوليمر عالية' } },
  { id: 'disposable-tourniquet', category: 'supplies', image: img('1712198330.png'), name: { en: 'Disposable Medical Tourniquet', ar: 'عاصبة طبية للاستخدام مرة واحدة' } },
  { id: 'heated-breathing-circuit', category: 'supplies', image: img('1712198392.png'), name: { en: 'Heated Disposable Breathing Circuit', ar: 'دائرة تنفس مُدفّأة للاستخدام مرة واحدة' } },
  { id: 'surgical-ligation-clips', category: 'supplies', image: img('1712198426.png'), name: { en: 'Disposable Surgical Ligation Clips', ar: 'مشابك ربط جراحية للاستخدام مرة واحدة' } },
  { id: 'ostomy-bag', category: 'supplies', image: img('1712198453.png'), name: { en: 'Ostomy Bag', ar: 'كيس فغر' } },
  { id: 'infusion-bag', category: 'supplies', image: img('1712198481.png'), name: { en: '500ml / 1000ml Infusion Bag', ar: 'كيس تسريب 500/1000 مل' } },
  { id: 'arm-cast-cover', category: 'supplies', image: img('1712198507.png'), name: { en: 'Arm Cast Cover', ar: 'غطاء جبيرة الذراع' } },
  { id: 'silicon-baby-inhaler', category: 'supplies', image: img('1712198545.png'), name: { en: 'Silicon Baby Inhaler', ar: 'جهاز استنشاق سيليكون للأطفال' } },
  { id: 'first-aid-kit-hd803', category: 'supplies', image: img('1712198593.png'), name: { en: 'First Aid Kit HD803', ar: 'حقيبة إسعافات أولية HD803' } },
  { id: 'first-aid-kit-hd805', category: 'supplies', image: img('1712198630.png'), name: { en: 'First Aid Kit HD805', ar: 'حقيبة إسعافات أولية HD805' } },
  { id: 'first-aid-kit-hd807', category: 'supplies', image: img('1712198679.png'), name: { en: 'First Aid Kit HD807', ar: 'حقيبة إسعافات أولية HD807' } },
  { id: 'first-aid-kit-hd809', category: 'supplies', image: img('1712198752.png'), name: { en: 'First Aid Kit HD809', ar: 'حقيبة إسعافات أولية HD809' } },
  { id: 'first-aid-kit-hd815', category: 'supplies', image: img('1712198914.png'), name: { en: 'First Aid Kit HD815', ar: 'حقيبة إسعافات أولية HD815' } },
  { id: 'adjustable-neck-brace', category: 'supplies', image: img('1712302344.png'), name: { en: 'Adjustable Neck Brace', ar: 'دعامة رقبة قابلة للتعديل' } },
  { id: 'cotton-crepe-bandage', category: 'supplies', image: img('1714125419.jpg'), name: { en: 'Cotton Crepe Bandage', ar: 'ضمادة كريب قطنية' } },
  { id: 'blood-collection-bag', category: 'supplies', image: img('1714125512.jpg'), name: { en: 'Blood Collection Bag with Leukocyte Filter', ar: 'كيس جمع الدم بمرشح كريات بيضاء' } },
  { id: 'disposable-stomach-tube', category: 'supplies', image: img('1714134617.jpg'), name: { en: 'Disposable Stomach Tube', ar: 'أنبوب معدة للاستخدام مرة واحدة' } },
  { id: 'wound-protector-retractor', category: 'supplies', image: img('1714134898.jpg'), name: { en: 'Surgical Incision Wound Protector Retractor', ar: 'واقي ومباعد جرح الشق الجراحي' } },
  { id: 'suture-practice-pad', category: 'supplies', image: img('1714134984.jpg'), name: { en: 'Surgical Suture Practice Skin Pad Set', ar: 'طقم وسادة جلد للتدريب على الخياطة الجراحية' } },
  { id: 'wooden-tongue-depressor', category: 'supplies', image: img('1714135027.jpg'), name: { en: 'Sterile & Non-Sterile Wooden Tongue Depressor', ar: 'خافض لسان خشبي معقّم وغير معقّم' } },
  { id: 'medical-ice-bag', category: 'supplies', image: img('1714135054.jpg'), name: { en: 'Medical Ice Bag', ar: 'كيس ثلج طبي' } },
  { id: 'wound-closure-device', category: 'supplies', image: img('1714135075.jpeg'), name: { en: 'Wound Closure Device', ar: 'جهاز إغلاق الجروح' } },
  { id: 'paraffin-gauze', category: 'supplies', image: img('1714135303.jpg'), name: { en: 'Paraffin Gauze', ar: 'شاش بارافين' } },
  { id: 'tubular-bandage', category: 'supplies', image: img('1714135148.jpg'), name: { en: 'Medical Tubular Bandage (Stockinette)', ar: 'ضمادة أنبوبية طبية (ستوكينيت)' } },
  { id: 'athletic-foam-tape', category: 'supplies', image: img('1714135171.jpg'), name: { en: 'Athletic Foam Tape', ar: 'شريط رغوي رياضي' } },
  { id: 'kinesio-tape', category: 'supplies', image: img('1714135206.jpg'), name: { en: 'Kinesio Tape', ar: 'شريط كينيسيو' } },
  { id: 'slimming-stickers', category: 'supplies', image: img('1714135240.jpg'), name: { en: 'Shaping Slimming Stickers', ar: 'لصقات تنحيف وتشكيل' } },
  { id: 'military-bandage', category: 'supplies', image: img('1714135262.jpg'), name: { en: 'Military Bandage', ar: 'ضمادة عسكرية' } },
  { id: 'alcohol-pad', category: 'supplies', image: img('1714135280.jpg'), name: { en: 'Alcohol Pad', ar: 'مسحة كحول' } },
];

// Per-category description + feature templates (EN/AR). `{name}` is replaced
// with the localized product name.
const templates: Record<CategoryId, { desc: LocalizedText; features: { en: string[]; ar: string[] } }> = {
  equipment: {
    desc: {
      en: 'Professional {name} engineered for accurate diagnostics and dependable clinical performance, sourced from certified international manufacturers.',
      ar: '{name} احترافي مصمم لتشخيص دقيق وأداء سريري موثوق، يتم توريده من مصنّعين دوليين معتمدين.',
    },
    features: {
      en: ['Certified medical-grade quality', 'Precise, reliable performance', 'Easy operation & maintenance', 'Backed by full technical support'],
      ar: ['جودة طبية معتمدة', 'أداء دقيق وموثوق', 'تشغيل وصيانة سهلة', 'مدعوم بدعم فني كامل'],
    },
  },
  furniture: {
    desc: {
      en: 'Durable, ergonomic {name} built for patient comfort and the everyday demands of modern healthcare facilities.',
      ar: '{name} متين ومريح مصمم لراحة المريض ولمتطلبات منشآت الرعاية الصحية الحديثة اليومية.',
    },
    features: {
      en: ['Sturdy, durable construction', 'Ergonomic patient comfort', 'Easy to clean & maintain', 'Designed for daily clinical use'],
      ar: ['تصنيع متين ومعمّر', 'راحة مريحة للمريض', 'سهل التنظيف والصيانة', 'مصمم للاستخدام السريري اليومي'],
    },
  },
  supplies: {
    desc: {
      en: 'High-quality {name} manufactured to international safety standards for safe, hygienic, everyday clinical use.',
      ar: '{name} عالي الجودة مصنّع وفق معايير السلامة الدولية للاستخدام السريري اليومي الآمن والصحي.',
    },
    features: {
      en: ['International safety standards', 'Sterile, hygienic materials', 'Consistent quality control', 'Reliable everyday performance'],
      ar: ['معايير سلامة دولية', 'مواد معقّمة وصحية', 'رقابة جودة ثابتة', 'أداء يومي موثوق'],
    },
  },
};

export interface LocalizedProduct extends Product {
  localizedName: string;
  localizedDescription: string;
  localizedFeatures: string[];
}

export function getLocalized(product: Product, lang: Lang): LocalizedProduct {
  const pick = (field?: LocalizedText) => (field && (field[lang] || field.en)) || '';
  const name = pick(product.name);
  const tpl = templates[product.category] || templates.equipment;

  const description = product.description
    ? pick(product.description)
    : (tpl.desc[lang] || tpl.desc.en).replace('{name}', name);

  const features = product.features
    ? product.features[lang] || product.features.en
    : tpl.features[lang] || tpl.features.en;

  return {
    ...product,
    localizedName: name,
    localizedDescription: description,
    localizedFeatures: features,
  };
}

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: CategoryId): Product[] {
  return products.filter((product) => product.category === category);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
}

// Data-driven lookup for the real mother & child items in the catalog (kept
// as a filter rather than a hardcoded list so any future product whose id or
// English name references "baby"/"child"/"infant" is picked up automatically).
const MOTHER_CHILD_PATTERN = /baby|infant|child/i;

export function getMotherChildProducts(): Product[] {
  return products.filter((product) => MOTHER_CHILD_PATTERN.test(product.id) || MOTHER_CHILD_PATTERN.test(product.name.en));
}
