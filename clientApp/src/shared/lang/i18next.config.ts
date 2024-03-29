import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

i18next
  .use(detector)
  .use(resourcesToBackend((language, namespace, callback) => {
    import(`../../lang/${language}/${namespace}.json`)
      .then((resources) => {
        callback(null, resources);
      })
      .catch((error) => {
        callback(error, null);
      });
  }))
  .use(initReactI18next)
  .init({
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: ['en', 'fr'],
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
export default i18next;