export const Faq = () => {
  const faqItems = [
    {
      question: "Who can participate in the hackathon?",
      answer:
        "The hackathon is open to all high school students, regardless of experience level. Whether you're a coding pro or just starting out, we welcome you to join us for a day of creativity and learning!",
    },
    {
      question: "Do I need experience?",
      answer:
        "No! Before the hackathon, we will be hosting workshops to help beginners get started with programming.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "Bring your laptop, charger, and any materials you think will help you during the hackathon.",
    },
    {
      question: "Will there be food provided?",
      answer:
        "Yes! We will provide snacks, pizza, and drinks throughout the day.",
    },

    {
      question: "Will there be prizes?",
      answer:
        "Yes! Prizes will be given to the top 3 projects rated based on creativity, originality, and technical complexity",
    },
  ];

  return (
    <section id="faq" className="py-16 px-6 text-center scroll-mt-10">
      <h1 className="text-orange font-rubikOne text-5xl font-bold mb-12">
        FAQ
      </h1>
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="ml-10 mb-4 bg-white text-white rounded-2xl px-6 py-5 flex justify-between items-center cursor-pointer transition"
        >
          <h2 className="text-charcoal text-2xl font-semibold mb-4">
            {item.question}
          </h2>
          <p className=" items-center ml-2 text-lg text-bluegray">
            {item.answer}
          </p>
        </div>
      ))}
    </section>
  );
};
