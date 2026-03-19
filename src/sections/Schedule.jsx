import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Schedule = () => {

  const scheduleItems = [
    {
      title: "Opening",
      time: "12:00 PM",
      description: "Kicking off the hackathon with introductions and an overview of the day"
    },
    {
      title: "Hackathon Starts",
      time: "1:00 PM",
      description: "Beginner Workshops"
    },
    {
      title: "Lunch (Pizza)",
      time: "1:30 PM",
      description: "Pizza will be provided for all participants"
    },
    {
      title: "Hacking Ends",
      time: "5:00 PM",
      description: "All projects must be submitted!"
    },
    {
      title: "Project Judging",
      time: "5:30 PM",
      description: "Judges will review all projects and select winners based on creativity, technical complexity, and presentation"
    },
    {
      title: "Closing Ceremony",
      time: "6:00 PM",
      description: "Judges will review all projects and select winners based on creativity, technical complexity, and presentation"
    },
  ]

  return (
    <section className="py-10 px-6 text-center">
      <h1 className="text-4xl font-bold">Schedule</h1>
      <p className="flex flex-col mt-6 text-lg md:text-xl text-bluegray max-w-xl items-center mx-auto">
        <span className="py-2">The hackathon will start at 5 PM on May 23rd and end at 5 PM on May 24th.</span>
        <span className="py-2">Participants can work on their projects during this time and submit them before the deadline.</span>
        <span className="py-2">There will be a judging period after the hackathon ends, and winners will be announced a few days later.</span>
      </p>
    </section>
  );
};