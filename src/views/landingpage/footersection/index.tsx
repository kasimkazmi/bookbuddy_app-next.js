import { COMUNITY_LINK, FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIAL_CONTACT } from "@/src/constants";
import Image from "next/legacy/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
   
      {/* Footer Links, Contact Info, and Social Links */}
      <div className="bg-gray-800 py-8 px-6 sm:px-20 text-gray-400 text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
      {/* Footer Social Contact */}
      <div className="w-full">
      <h4 className="text-white text-base font-bold mb-4">
      {FOOTER_LINKS.title}
            </h4>
            <ul >
              {FOOTER_LINKS.links.map((link, index) => (
                <li key={`social-contact-${index}`}>
                  <a
                    href={link.value}
                    className="text-blue-400 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

            {/* Footer Contact Info */}
             <div className=" w-full">
            <h4 className="text-white text-base font-bold mb-4">
              {COMUNITY_LINK.title}
            </h4>
            <ul>
              {COMUNITY_LINK.links.map((contact, index) => (
                <li
                  key={`footer-contact-${index}`}
                  className="flex flex-col sm:flex-row gap-2 mb-2"
                >
                  <span className="text-gray-300">{contact.label}:</span>
                 
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Contact Info */}
          <div className=" w-full">
            <h4 className="text-white text-base font-bold mb-4">
              {FOOTER_CONTACT_INFO.title}
            </h4>
            <ul>
              {FOOTER_CONTACT_INFO.links.map((contact, index) => (
                <li
                  key={`footer-contact-${index}`}
                  className="flex flex-col sm:flex-row gap-2 mb-2"
                >
                  <span className="text-gray-300">{contact.label}:</span>
                  <a
                    href={contact.value}
                    className="text-blue-400 hover:underline"
                  >
                    {contact.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Social Contact */}
          <div className="w-full">
            <h4 className="text-white text-base font-bold mb-4">
              {SOCIAL_CONTACT.title}
            </h4>
            <ul className="flex gap-4">
              {SOCIAL_CONTACT.links.map((link, index) => (
                <li key={`social-contact-${index}`}>
                  <a
                    href={link.value}
                    className="text-blue-400 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
