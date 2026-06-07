import FormColumn from './FormColumn';

function InputSection() {
  return (
    <section className="border-border bg-surface w-full max-w-4xl rounded-2xl border p-4 sm:px-8 sm:py-7">
      <form className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        <FormColumn size="small" />
        <hr className="text-border w-full sm:hidden" />
        <FormColumn size="big" />
      </form>
    </section>
  );
}

export default InputSection;
