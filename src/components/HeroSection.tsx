import { Trans, useTranslation } from 'react-i18next';

function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col py-3">
      <span className="text-accent uppercase font-medium text-xs">{t('eyebrow')}</span>
      <h1 className="text-text font-title font-medium text-6xl italic leading-16 tracking-tight mb-2">
        <Trans i18nKey="title" components={{ color: <span className="text-accent" /> }} />
      </h1>
      <p className="text-text-muted max-w-xl text-lg leading-snug">{t('heroText')}</p>
    </section>
  );
}

export default HeroSection;
