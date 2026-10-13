import Button from "../../../components/common/Button";
import { HERO_DATA } from "../HeroData";

export default function HeroActions() {
  return (
    <div className="mx-auto mt-10 flex w-full max-w-md gap-3 lg:mx-0">
      {/* Primary Action */}
      <a href={HERO_DATA.primaryButton.href} className="min-w-0 flex-1">
        <Button className="w-full">{HERO_DATA.primaryButton.text}</Button>
      </a>

      {/* Secondary Action */}
      <a
        href={HERO_DATA.secondaryButton.href}
        target="_blank"
        rel="noopener noreferrer"
        className="min-w-0 flex-1"
      >
        <Button variant="outline" className="w-full">
          {HERO_DATA.secondaryButton.text}
        </Button>
      </a>
    </div>
  );
}
