export default function TextBlock({ headline, subtext }) {
  return (
    <section className="p-6 bg-white border mb-4">
      <h2 className="text-xl font-semibold">{headline}</h2>
      <p>{subtext}</p>
    </section>
  );
}
