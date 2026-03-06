import { Outlet } from "react-router";
import { ConfigProvider } from 'antd';
import { useState, useEffect } from 'react';
import i18n from '@/i18n';
import { getCurrentLocale } from '@/utils/changeLang';
import "@/assets/style/app.css";

export default function App() {
  const [locale, setLocale] = useState(getCurrentLocale());

  useEffect(() => {
    const handleLanguageChange = () => {
      setLocale(getCurrentLocale());
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <ConfigProvider locale={locale}>
      <Outlet />
    </ConfigProvider>
  );
}
