import FormColumn from './FormColumn';

function InputSection() {
  return (
    <section className="border-border bg-surface w-full max-w-4xl rounded-2xl border px-8 py-7">
      <form className="flex gap-8">
        <FormColumn size="small" />
        <FormColumn size="big" />
      </form>
    </section>
  );
}

export default InputSection;
