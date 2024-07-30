import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIAL_CONTACT } from "@/constants";
import Image from "next/legacy/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center pt-14 mb-20">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex justify-center items-start md:flex-row flex-col gap-[10%]">
          <Link href="/" className="md-10">
            <Image src="/logo.png" width={80} alt="logo" height={80} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((column, index) => (
              <FooterColumn title={column.title} key={column.title + index}>
                <ul className="regular-16 flex flex-col gap-4 text-gray-30">
                  {column.links.map((link, linkIndex) => (
                    <Link href="/" key={`${column.title}-link-${linkIndex}`}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <FooterContactInfo />
            <FooterSocialContact />
          </div>
        </div>
        <div className="border bg-gray-30" />
        <p className="regular-14 w-full text-center">
          2024 Copyright | All right reserved
        </p>
      </div>
    </footer>
  );
};
type FooterColProps = { title: string; children: React.ReactNode };

const FooterColumn = ({ title, children }: FooterColProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="whitespace-nowrap bold-18">{title}</h4>
      {children}
    </div>
  );
};

const FooterContactInfo = () => (
  <div className="flex flex-col gap-5">
    <FooterColumn title={FOOTER_CONTACT_INFO.title}>
      {FOOTER_CONTACT_INFO.links.map((link, index) => (
        <Link
          href={link.value}
          key={`${link.label}-${index}`}
          className="flex md:flex-col gap-4 lg:flex-row"
        >
          <p className="whitespace-nowrap">{link.label}:</p>
          <p className="medium-16 whitespace-nowrap text-blue-70 hover:underline">
            {link.value}
          </p>
        </Link>
      ))}
    </FooterColumn>
  </div>
);

const FooterSocialContact = () => (
  <div className="flex gap-5 flex-col">
    <FooterColumn title={SOCIAL_CONTACT.title}>
      {SOCIAL_CONTACT.links.map((link, index) => (
        <Link
          href={link.value}
          key={`${link.label}-${index}`}
          className="flex md:flex-col gap-4 lg:flex-row"
        >
          <p className="medium-16 whitespace-nowrap text-blue-70 hover:underline">
            {link.label}
          </p>
        </Link>
      ))}
    </FooterColumn>
  </div>
);

export default Footer;
