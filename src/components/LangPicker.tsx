import i18n from 'i18next';

const lngs: Record<string, { displayName: string }> = {
  en: { displayName: 'EN' },
  hu: { displayName: 'HU' },
};

function LangPicker() {
  return (
    <div className="flex gap-2">
      {Object.keys(lngs).map((lng) => (
        <button
          className={
            'px-2 py-1 border rounded ' +
            (i18n.resolvedLanguage === lng
              ? 'bg-blue-500 text-white font-bold'
              : 'bg-surface text-gray-700 font-normal')
          }
          key={lng}
          onClick={() => {
            void i18n.changeLanguage(lng);
          }}>
          {lngs[lng].displayName}
        </button>
      ))}
    </div>
  );
}

export default LangPicker;
