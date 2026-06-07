import { Trans, useTranslation } from 'react-i18next';

function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="flex w-full max-w-4xl flex-col py-3">
      <span className="text-accent text-xs font-medium uppercase">{t('eyebrow')}</span>
      <h1 className="font-title text-text mb-2 text-6xl leading-16 font-medium tracking-tight italic">
        <Trans
          i18nKey="title"
          components={{
            color: <span className="text-accent" />,
            br: <br className="block md:hidden" />,
          }}
        />
      </h1>
      <p className="text-text-muted max-w-xl text-lg leading-snug">{t('heroText')}</p>
    </section>
  );
}

export default HeroSection;
