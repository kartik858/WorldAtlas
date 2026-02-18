import React from "react";
import footerContact from "../../api/footApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

const Footer = () => {
  const footericon = {
    MdPlace: <MdPlace />,
    TbMailPlus: <TbMailPlus />,
    IoCallSharp: <IoCallSharp />,
  };

  return (
    <footer className="mt-16 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {footerContact.map((currData, index) => {
            const { icon, title, details } = currData;

            return (
              <div
                key={index}
                className="flex items-start gap-4 
                           bg-white/5 border border-white/10 
                           rounded-xl p-5 
                           hover:bg-white/10 
                           transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="text-cyan-400 text-2xl 
                             bg-cyan-500/10 
                             p-3 rounded-lg 
                             shadow-md"
                >
                  {footericon[icon]}
                </div>

                {/* Text */}
                <div>
                  <p className="text-white font-semibold">
                    {title}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Line */}
        <div className="mt-10 text-center text-gray-500 text-sm border-t border-white/10 pt-6">
          © {new Date().getFullYear()} World Atlas. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
