export default function Hero({ headline, subtext }) {
    return (
      <section className="p-8 bg-blue-100 mb-4">
        <h1 className="text-3xl font-bold">{headline}</h1>
        <p>{subtext}</p>
      </section>
    );
  }
  