import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIAL_CONTACT, COMUNITY_LINK } from "@/constants";
import Image from "next/legacy/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Commitment Section */}
      <div className="flex justify-center items-center py-10 px-6 sm:px-20">
      <div className="bg-S2BG text-center text-white p-10 max-w-6xl w-full rounded-lg">
  <h4 className="uppercase text-sm tracking-widest text-gray-200">
    Our Vision
  </h4>
  <h2 className="text-3xl sm:text-4xl font-bold mt-2">
    Building Connections Through the Love of Books
  </h2>
  <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
    We believe in fostering a community where readers connect, share their passion for literature, and discover new stories. With trust and open collaboration, we aim to create a platform that brings book lovers together like never before.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
    <FeatureCard
      icon="/icons/trade-books.svg"
      title="Seamless Book Trading"
      description="Trade your books effortlessly with nearby users who share your love for reading."
    />
    <FeatureCard
      icon="/icons/book-clubs.svg"
      title="Interactive Book Clubs"
      description="Engage in audio or text-based discussions and reading sessions."
    />
    <FeatureCard
      icon="/icons/discovery.svg"
      title="Discover New Books"
      description="Explore trending books and get personalized recommendations."
    />
    <FeatureCard
      icon="/icons/community.svg"
      title="Build a Community"
      description="Connect with fellow readers, share reviews, and grow your circle."
    />
  </div>
</div>

      </div>

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

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 flex justify-center items-center rounded-full bg-blue-700">
      <Image src={icon} alt={title} width={32} height={32} />
    </div>
    <h4 className="mt-4 text-lg font-semibold text-gray-50">{title}</h4>
    <p className="mt-2 text-gray-300 text-center">{description}</p>
  </div>
);

export default Footer;
