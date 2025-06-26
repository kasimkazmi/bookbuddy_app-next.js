import {
    COMUNITY_LINK,
    FOOTER_CONTACT_INFO,
    FOOTER_LINKS,
    SOCIAL_CONTACT
} from '@/src/constants';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 text-sm">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Navigation Links */}
                <div>
                    <h4 className="text-white text-base font-semibold mb-4">
                        {FOOTER_LINKS.title}
                    </h4>
                    <ul className="space-y-2">
                        {FOOTER_LINKS.links.map((link, index) => (
                            <li key={`footer-link-${index}`}>
                                <a
                                    href={link.value}
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Community Links */}
                <div>
                    <h4 className="text-white text-base font-semibold mb-4">
                        {COMUNITY_LINK.title}
                    </h4>
                    <ul className="space-y-2">
                        {COMUNITY_LINK.links.map((link, index) => (
                            <li key={`community-link-${index}`}>
                                <a
                                    href={link.value}
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white text-base font-semibold mb-4">
                        {FOOTER_CONTACT_INFO.title}
                    </h4>
                    <ul className="space-y-2">
                        {FOOTER_CONTACT_INFO.links.map((item, index) => (
                            <li key={`contact-info-${index}`}>
                                <span className="block text-gray-300">
                                    {item.label}:
                                </span>
                                <a
                                    href={item.value}
                                    className="text-blue-400 hover:underline break-words"
                                >
                                    {item.value}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="text-white text-base font-semibold mb-4">
                        {SOCIAL_CONTACT.title}
                    </h4>
                    <ul className="flex space-x-4">
                        {SOCIAL_CONTACT.links.map((link, index) => (
                            <li key={`social-${index}`}>
                                <a
                                    href={link.value}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-purple-400 transition-colors"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 text-center text-gray-500 py-4 text-xs">
                © {new Date().getFullYear()} BookBuddy. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
