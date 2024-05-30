import { useIsRTL } from '@hooks/useIsRTL';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { isRTL } = useIsRTL();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      {isRTL ? (
        <button
          className="bg-primary text-white font-bold border-none cursor-pointer rounded-full px-2"
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
      ) : (
        <button
          className="bg-primary text-white font-bold border-none cursor-pointer rounded-full px-2"
          onClick={() => changeLanguage('ar')}
        >
          AR
        </button>
      )}
    </div>
  );
};
