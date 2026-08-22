import React, { createContext, useContext, useState } from 'react';

const translations = {
  EN: {
    sectors: "Sectors",
    solutions: "Solutions",
    products: "Products",
    technologies: "Technologies",
    services: "Services",
    company: "Company",
    designer: "DESIGNER",
    signIn: "Sign In / Register",
    logout: "Logout",
    search: "Search",
    heroTitle: "Laser, Ion & Electron Beam Lithography Systems",
    heroSubtitle: "High-precision nanostructure fabrication for semiconductor, photonics, and quantum optics.",
    exploreSolutions: "Explore Solutions",
    requestTrial: "Request Demo",
    learnMore: "Learn More",
    applications: "Sectors & Applications",
    processControl: "Process Control",
    mixAndMatch: "Mix and Match",
    patterning: "Patterning",
    contactUs: "Contact Us",
    footerCopyright: "© 2024 LBLFIBEBL GmbH. All rights reserved.",
  },
  DE: {
    sectors: "Branchen",
    solutions: "Lösungen",
    products: "Produkte",
    technologies: "Technologien",
    services: "Services",
    company: "Unternehmen",
    designer: "DESIGNER",
    signIn: "Anmelden / Registrieren",
    logout: "Abmelden",
    search: "Suche",
    heroTitle: "Laser-, Ionen- & Elektronenstrahl-Lithographiesysteme",
    heroSubtitle: "Hochpräzise Nanostrukturierung für Halbleiter, Photonik und Quantenoptik.",
    exploreSolutions: "Lösungen entdecken",
    requestTrial: "Demo anfordern",
    learnMore: "Mehr erfahren",
    applications: "Branchen & Anwendungen",
    processControl: "Prozesskontrolle",
    mixAndMatch: "Mix and Match",
    patterning: "Mustererzeugung",
    contactUs: "Kontaktieren Sie uns",
    footerCopyright: "© 2024 LBLFIBEBL GmbH. Alle Rechte vorbehalten.",
  },
  ZH: {
    sectors: "行业领域",
    solutions: "解决方案",
    products: "产品系列",
    technologies: "核心技术",
    services: "技术服务",
    company: "关于公司",
    designer: "设计器引擎",
    signIn: "登录 / 注册",
    logout: "退出登录",
    search: "全局搜索",
    heroTitle: "激光、离子束与电子束光刻系统",
    heroSubtitle: "面向半导体、光子学及量子光学的亚纳米级微纳加工系统。",
    exploreSolutions: "探索解决方案",
    requestTrial: "申请演示",
    learnMore: "了解更多",
    applications: "领域与应用",
    processControl: "过程控制",
    mixAndMatch: "混合匹配光刻",
    patterning: "纳图案加工",
    contactUs: "联系我们",
    footerCopyright: "© 2024 LBLFIBEBL GmbH. 保留所有权利。",
  },
  JA: {
    sectors: "セクター",
    solutions: "ソリューション",
    products: "製品情報",
    technologies: "テクノロジー",
    services: "サービス",
    company: "会社情報",
    designer: "デザイナー",
    signIn: "ログイン / 登録",
    logout: "ログアウト",
    search: "検索",
    heroTitle: "レーザー・イオン・電子ビームリソグラフィシステム",
    heroSubtitle: "半導体、フォトニクス、量子光学向けの超高精度ナノ加工ソリューション。",
    exploreSolutions: "ソリューションを見る",
    requestTrial: "デモをリクエスト",
    learnMore: "詳細を見る",
    applications: "分野とアプリケーション",
    processControl: "プロセス制御",
    mixAndMatch: "ミックス＆マッチ",
    patterning: "パターニング",
    contactUs: "お問い合わせ",
    footerCopyright: "© 2024 LBLFIBEBL GmbH. All rights reserved.",
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lblfibebl_lang') || 'EN';
  });

  const changeLanguage = (newLang) => {
    if (translations[newLang]) {
      setLang(newLang);
      localStorage.setItem('lblfibebl_lang', newLang);
    }
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations['EN']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t, languages: Object.keys(translations) }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
