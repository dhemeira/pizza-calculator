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
      <div className="border-border bg-surface relative flex h-9 w-24 gap-0 rounded-full border">
        <span
          className="bg-accent absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full transition-transform duration-300 ease-in-out"
          style={{ transform: translateX }}
        />
        {keys.map((lng) => (
          <button
            key={lng}
            className={
              'vertical-center z-10 w-full rounded-full py-1 text-center text-base font-medium transition-colors duration-300 ease-in-out ' +
              (i18n.resolvedLanguage === lng ? 'text-surface ' : 'text-text ') +
              (lng === 'en' ? ' pl-1' : 'pr-1')
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
