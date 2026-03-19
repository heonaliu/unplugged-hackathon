import { Calendar, MapPin } from "lucide-react";
import plugVector from "../assets/plug-vector.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
      <img
        src={plugVector}
        alt="Plug Vector"
        className="
      absolute 
      top-0 
      -translate-x-1/2 
      w-[100vw] 
      max-w-none 
      opacity-40 
      pointer-events-none 
      z-0
    "
      />
      <h1 className="font-rubikOne text-purple text-6xl md:text-8xl font-extrabold">Unplugged</h1>

      <h2 className="text-4xl md:text-5xl mt-4 font-bold">2026</h2>

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

      <div className="flex gap-6 mt-8">
        <button className="bg-orange text-white px-12 py-2 rounded-xl text-lg hover:bg-orange/80">
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
