import i18n from 'i18next';

const lngs: Record<string, { displayName: string }> = {
  en: { displayName: 'EN' },
  hu: { displayName: 'HU' },
};

function LangPicker() {
  const keys = Object.keys(lngs);
  const activeIndex = keys.indexOf(i18n.resolvedLanguage ?? 'en');
  const translateX = `translateX(${String(activeIndex * 100)}%)`;
  return (
    <div className="flex w-full justify-end">
      <div className="relative flex h-9 w-24 gap-0 rounded-full border border-border bg-surface p-1">
        <span
          className="absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-accent transition-transform duration-300 ease-in-out"
          style={{ transform: translateX }}
        />
        {keys.map((lng) => (
          <button
            key={lng}
            className={
              'vertical-center z-10 w-full rounded-full text-center text-base font-medium transition-colors duration-300 ease-in-out ' +
              (i18n.resolvedLanguage === lng ? 'text-surface' : 'text-text')
            }
            onClick={() => {
              void i18n.changeLanguage(lng);
            }}>
            {lngs[lng].displayName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LangPicker;
