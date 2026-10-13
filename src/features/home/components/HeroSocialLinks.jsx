
import { HERO_DATA } from "../HeroData";

export default function HeroSocialLinks() {
  return (
    <nav
      aria-label="Social media profiles"
      className="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start"
    >
      {HERO_DATA.socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-on-surface-variant transition-colors duration-300 hover:text-primary"
          aria-label={`Visit ${social.name} profile`}
        >
          {social.name}
        </a>
      ))}
    </nav>
  );
}
