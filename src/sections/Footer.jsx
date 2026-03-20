import { Instagram } from "lucide-react";
import nnhsLogo from "../assets/progclublogo.png";

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-10 px-6 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">
        <img src={nnhsLogo} alt="NNHS Programming Club Logo" className="w-32" />
        <div className="flex flex-col md:flex-row gap-4 text-sm items-center">
          <a
            href="https://nnhsprogramming.club/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white no-underline"
          >
            nnhsprogramming.club
          </a>

          <p>
            Inquiries:{" "}
            <a
              href="mailto:alantaolr@outlook.com"
              className="hover:underline text-white no-underline"
            >
              alantaolr@outlook.com
            </a>
          </p>
        </div>

        <a
          href="https://www.instagram.com/p/DQE10cCDTg4/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition text-white p-1 rounded-full"
        >
          <Instagram className="w-6 h-6" />
        </a>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} NNHS Programming Club • Designed & Developed by {" "}
          <a
            href="https://heonaliu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white no-underline"
          >Heona Liu</a>
        </p>
      </div>
    </footer>
  );
};