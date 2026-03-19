import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Schedule = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const scheduleItems = [
    {
      title: "Opening",
      time: "12:00 PM",
      description:
        "Kicking off the hackathon with introductions and an overview of the day",
    },
    {
      title: "Hackathon Starts",
      time: "1:00 PM",
      description: "Beginner Workshops",
    },
    {
      title: "Lunch (Pizza)",
      time: "1:30 PM",
      description: "Pizza will be provided for all participants",
    },
    {
      title: "Hacking Ends",
      time: "5:00 PM",
      description: "All projects must be submitted!",
    },
    {
      title: "Project Judging",
      time: "5:30 PM",
      description:
        "Judges will review all projects and select winners",
    },
    {
      title: "Closing Ceremony",
      time: "6:00 PM",
      description:
        "Winners announced and wrap-up",
    },
  ];

  return (
    <section className="py-16 px-6 bg-beige text-center">
      <h1 className="text-purple font-rubikOne text-5xl font-bold mb-12">Schedule</h1>
      <h2 className="text-charcoal text-2xl font-semibold mb-8"> Saturday May 23, 2026</h2>

      <div className="max-w-4xl mx-auto relative">

        {/* LEFT TIMELINE LINE */}
        <div className="absolute left-4 top-0 bottom-0 w-2 bg-charcoal rounded"></div>

        {scheduleItems.map((item, index) => (
          <div key={index} className="relative mb-6">

            <div className="absolute left-0 top-1/4 -translate-y-1/2 w-8 h-8 bg-beige"></div>

            {/* CARD */}
            <div
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="ml-10 bg-orange text-white rounded-2xl px-6 py-5 flex justify-between items-center cursor-pointer hover:scale-[1.01] transition"
            >
              <span>
                {item.title} – {item.time}
              </span>

              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* DROPDOWN */}
            {openIndex === index && (
              <div className="ml-10 bg-white text-black rounded-b-2xl px-6 py-4 text-left">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};