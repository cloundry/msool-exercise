import { useTranslation } from 'react-i18next';

export function Intro() {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row rounded-[32px] overflow-hidden">
        <div className="flex flex-col flex-1 justify-center bg-lightGray p-8 md:pt-16 md:pe-16">
          <h1 className="text-primary font-semibold mt-0 mb-2 text-[24px] sm:text-[32px] lg:text-[40px]">
            {t('INTEGRATED_PLATFORM')}
          </h1>
          <p className="mb-12 text-subText">
            {t('INTEGRATED_PLATFORM_SUBTEXT')}
          </p>
          <div className="flex gap-4 w-full text-base">
            <button className="flex justify-center items-center flex-1 bg-primary hover:bg-[#3521a2] rounded-2xl text-white px-[22px] py-2 uppercase cursor-pointer font-bold">
              {t('FREE_TRIAL')}
            </button>
            <button className="flex justify-center flex-1 cursor-pointer font-bold text-primary hover:bg-[#eeebff] hover:border-primary border-[#5b3fff80] border-2 border-solid bg-transparent items-center rounded-2xl px-[22px] py-2">
              {t('PLANS')}
            </button>
          </div>
        </div>
        <div className="bg-bgPrimary flex-1">
          <img
            src="./calender.svg"
            alt="calendar"
            className="w-full md:-ms-16 md:w-[calc(100%+44px)]"
          />
        </div>
      </div>
    </section>
  );
}
