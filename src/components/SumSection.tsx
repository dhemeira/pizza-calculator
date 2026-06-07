import SumColumn from './SumColumn';

function SumSection() {
  return (
    <section className="flex w-full max-w-4xl flex-col gap-4 sm:flex-row">
      <SumColumn size="small" />
      <SumColumn size="big" />
    </section>
  );
}

export default SumSection;
