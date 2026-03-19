export const Faq = () => {
  const faqItems = [
    {
      question: "Who can participate in the hackathon?",
      answer:
        "The hackathon is open to all high school students, regardless of experience level. Whether you're a coding pro or just starting out, we welcome you to join us for a day of creativity and learning!",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "Bring your laptop, charger, and any materials you think will help you during the hackathon. We also recommend bringing a notebook and pen for jotting down ideas!",
    },
    {
      question: "Will there be food provided?",
      answer:
        "Yes! We will provide snacks, pizza, and drinks throughout the day.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-beige text-center">
      <h1 className="text-orange font-rubikOne text-5xl font-bold mb-12">
        FAQ
      </h1>
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="ml-10 bg-charcoal text-white rounded-2xl px-6 py-5 flex justify-between items-center cursor-pointer hover:scale-[1.01] transition"
        >
          <h2 className="text-charcoal text-2xl font-semibold mb-4">
            {item.question}
          </h2>
          <p className="text-lg text-bluegray">{item.answer}</p>
        </div>
      ))}
    </section>
  );
};
