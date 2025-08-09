import { Button } from "@/components/ui/button";
import TrendingTicker from "./TrendingTicker";

interface HeaderProps {
  trending: string[];
}

export const Header = ({ trending }: HeaderProps) => {
  return (
    <header className="pt-6 pb-4">
      <div className="flex items-center justify-between">
        <a href="/" aria-label="RemiXense Home" className="text-xl font-extrabold tracking-tight neon-text">
          RemiXense
        </a>
        <div className="flex items-center gap-2">
          <Button variant="neon" size="sm" className="hover-scale">Explorar</Button>
          <Button asChild variant="hero" size="sm" className="hover-scale">
            <a href="https://app.remixense.com/login">Entrar</a>
          </Button>
        </div>
      </div>
      <TrendingTicker items={trending} />
    </header>
  );
}

export default Header;
