import type { NewsItem } from "@/components/remixense/NewsCard";

export const TAGS = [
  "Brasil",
  "Estados Unidos",
  "Reino Unido",
  "House",
  "Eletrônico",
  "Sertanejo",
  "Pop",
  "Hip Hop",
  "K-Pop",
  "Jazz",
  "Indie",
];

export const TRENDING = [
  "House em alta nos festivais europeus",
  "Novas collabs no cenário Eletrônico",
  "Sertanejo domina playlists no Brasil",
  "K-Pop quebra recordes globais",
  "Indie volta às raízes lo-fi",
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: "1",
    title: "DJ lança set de House com influências brasileiras",
    summary: "Um mix vibrante que combina batidas clássicas de house com ritmos brasileiros, conquistando as pistas.",
    source: "BeatWire",
    url: "https://example.com/house-br",
    time: "há 2h",
    tags: ["House", "Brasil"],
  },
  {
    id: "2",
    title: "Festival eletrônico anuncia palco 100% live performers",
    summary: "Line-up traz artistas que tocam ao vivo, criando experiências únicas para o público.",
    source: "ElectroNews",
    url: "https://example.com/festival-live",
    time: "há 3h",
    tags: ["Eletrônico", "Reino Unido"],
  },
  {
    id: "3",
    title: "Sertanejo: nova dupla bate 10M de streams em 24h",
    summary: "Sucesso meteórico reforça o domínio do gênero nas paradas brasileiras.",
    source: "TopCharts BR",
    url: "https://example.com/sertanejo-streams",
    time: "há 4h",
    tags: ["Sertanejo", "Brasil"],
  },
  {
    id: "4",
    title: "Cenário Pop ganha tendência de faixas com sintetizadores retrô",
    summary: "Produções com estética oitentista conquistam ouvintes e artistas mainstream.",
    source: "Global Pop",
    url: "https://example.com/pop-retro",
    time: "há 1h",
    tags: ["Pop", "Estados Unidos"],
  },
  {
    id: "5",
    title: "Jazz moderno incorpora beats de lo-fi para nova geração",
    summary: "Experimentações trazem frescor ao gênero sem perder a essência improvisada.",
    source: "BlueNote Daily",
    url: "https://example.com/jazz-lofi",
    time: "há 5h",
    tags: ["Jazz", "Indie", "Estados Unidos"],
  },
];
