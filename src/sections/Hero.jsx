import { Calendar, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
      
      <h1 className="text-6xl md:text-8xl font-extrabold">
        Unplugged
      </h1>

      <h2 className="text-4xl md:text-5xl mt-4 font-bold">
        2026
      </h2>

      {/* INFO ROW */}
      <div className="flex flex-col md:flex-row items-center gap-6 mt-8 text-lg md:text-xl">
        <div className="flex items-center gap-2">
          <Calendar size={22} />
          <span>May 23, 2026</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={22} />
          <span>NNHS Cafeteria</span>
        </div>
      </div>

      <div className="flex gap-6 mt-10">
        <button className="bg-orange text-white px-8 py-4 rounded-xl text-lg hover:bg-orange/80">
          Register
        </button>
      </div>

      <p className="mt-6 text-lg md:text-xl text-bluegray max-w-xl">
        A chill hackathon for everyone, regardless of experience. Join us for a
        weekend of excitement!
      </p>

    </section>
  );
};