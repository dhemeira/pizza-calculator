import TotalsCard from './TotalsCard';

function PizzaTotals() {
  return (
    <section className="flex w-full max-w-4xl flex-col gap-4 sm:flex-row">
      <TotalsCard size="small" />
      <TotalsCard size="big" />
    </section>
  );
}

export default PizzaTotals;
