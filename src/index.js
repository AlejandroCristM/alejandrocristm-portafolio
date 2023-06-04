import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';

import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import esTranslations from 'locales/es.json';
import enTranslations from 'locales/en.json';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
