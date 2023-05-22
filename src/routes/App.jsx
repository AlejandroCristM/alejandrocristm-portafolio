import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'containers/Layout';
import Home from 'pages/Home';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslations from 'locales/es.json';
import enTranslations from 'locales/en.json';

function App() {
  useEffect(() => {
    i18next.use(initReactI18next).init({
      resources: {
        es: {
          translation: esTranslations,
        },
        en: {
          translation: enTranslations,
        },
      },
      lng: 'es', // Default language (Spanish)
      fallbackLng: 'en', // Fallback language (English)
      interpolation: {
        escapeValue: false,
      },
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
