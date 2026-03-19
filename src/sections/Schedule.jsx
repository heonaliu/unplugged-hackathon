import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Schedule = () => {
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
        "Judges will review all projects and select winners based on creativity, technical complexity, and presentation",
    },
    {
      title: "Closing Ceremony",
      time: "6:00 PM",
      description:
        "Judges will review all projects and select winners based on creativity, technical complexity, and presentation",
    },
  ];

  return (
    <section className="py-10 px-6 text-center">
      <h1 className="text-5xl font-bold mb-12">Schedule</h1>
      <div className="max-w-4xl mx-auto relative">
        <div>
          {scheduleItems.map((item, index) => (
            <div key={index} className="mb-8 text-left">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-2xl font-bold">{item.time}</span>
                <h2 className="text-2xl font-bold">{item.title}</h2>
              </div>
              <p className="text-lg text-bluegray">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
