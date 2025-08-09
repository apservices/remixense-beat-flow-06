import { useEffect, useMemo, useState } from 'react';
import Header from '@/components/remixense/Header';
import TagFilter from '@/components/remixense/TagFilter';
import NewsCard, { type NewsItem } from '@/components/remixense/NewsCard';
import { MOCK_NEWS, TAGS, TRENDING } from '@/data/mockNews';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [selected, setSelected] = useState<string[]>(["House", "Eletrônico", "Sertanejo"]);
  const [auto, setAuto] = useState(true);
  const [items, setItems] = useState<NewsItem[]>(MOCK_NEWS);

  // Simulated auto-update: rotates items periodically
  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => {
      setItems((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 4000);
    return () => clearInterval(id);
  }, [auto]);

  const filtered = useMemo(() => {
    const setSel = new Set(selected.map((t) => t.toLowerCase()));
    return items.filter((it) => it.tags.some((t) => setSel.has(t.toLowerCase())));
  }, [items, selected]);

  const toggleTag = (tag: string) => {
    setSelected((prev) => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <main className="container mx-auto px-4 pb-24">
      <Header trending={TRENDING} />
      <section aria-labelledby="filtros" className="mb-4">
        <h1 id="filtros" className="sr-only">Filtrar por estilos musicais</h1>
        <TagFilter tags={TAGS} selected={selected} onToggle={toggleTag} />
        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <span>Auto-atualizar</span>
          <Button variant={auto ? 'hero' : 'neon'} size="sm" onClick={() => setAuto((v) => !v)}>
            {auto ? 'ON' : 'OFF'}
          </Button>
        </div>
      </section>
      <section aria-labelledby="feed" className="space-y-3">
        <h2 id="feed" className="sr-only">Feed de notícias musicais</h2>
        {filtered.map((n) => (
          <NewsCard key={n.id} item={n} />
        ))}
      </section>
    </main>
  );
};

export default Index;
