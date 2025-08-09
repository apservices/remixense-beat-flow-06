import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  time: string; // ISO or relative
  tags: string[];
}

interface Props {
  item: NewsItem;
}

export const NewsCard = ({ item }: Props) => {
  return (
    <article className="glass-card animate-enter">
      <Card className="glass-panel">
        <CardContent className="p-4">
          <header className="mb-2 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{item.source} • {item.time}</span>
          </header>
          <h2 className="text-base font-semibold leading-snug mb-2">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="story-link">
              {item.title}
            </a>
          </h2>
          <p className="text-sm text-muted-foreground mb-3">
            {item.summary}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {item.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded bg-background/50 border border-border/40">
                #{t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="neon" size="sm" className="hover-scale">
              <a href={item.url} target="_blank" rel="noopener noreferrer">Ler mais</a>
            </Button>
            <Button asChild variant="hero" size="xs" className="hover-scale">
              <a href={`https://app.remixense.com/login?redirect=${encodeURIComponent(item.url)}`} aria-label="Comentar no RemiXense">
                Comentar no RemiXense
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}

export default NewsCard;
