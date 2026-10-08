export interface Project {
  name: string;
  url: string;
  description: string;
  author: { name: string; url: string };
  source?: string;
  emoji: string;
}

export const projects: Project[] = [
  {
    name: "Open Data Suche",
    url: "https://opendata.dresden.lol",
    description:
      "Durchsucht und visualisiert Datensätze des Dresdner Open-Data-Portals. Gibt es auch als CLI und als MCP-Server.",
    author: { name: "Kilian", url: "https://github.com/kiliankoe" },
    source: "https://github.com/kiliankoe/opendata-dresden",
    emoji: "🗂️",
  },
  {
    name: "ÖPNV Dresden",
    url: "https://oepnv.dresden.lol",
    description:
      "Doku zu den Schnittstellen von VVO und DVB, mit Netzstatus, Abfahrtsmonitor, Haltestellensuche und GTFS-Daten zum Herunterladen.",
    author: { name: "Kilian", url: "https://github.com/kiliankoe" },
    source: "https://github.com/kiliankoe/vvo",
    emoji: "🚋",
  },
  {
    name: "Elbe DD",
    url: "https://elbedd.vgerber.io",
    description: "Dashboard zur Elbe, mit Pegelständen und Messwerten.",
    author: { name: "Vincent", url: "https://github.com/vgerber" },
    source: "https://github.com/vgerber/elbedd",
    emoji: "🌊",
  },
  {
    name: "Dresdens Straßen",
    url: "https://strassen.dresden.lol",
    description: "Alle Straßen der Stadt, die nach Menschen benannt sind.",
    author: { name: "Kilian", url: "https://github.com/kiliankoe" },
    source: "https://github.com/kiliankoe/dresdens-strassen",
    emoji: "🛣️",
  },
  {
    name: "Wo knallt's?",
    url: "https://woknallts.dresden.lol",
    description:
      "Wenn es mal wieder knallt. Zeigt die angemeldeten Feuerwerke in Dresden.",
    author: { name: "Kilian", url: "https://github.com/kiliankoe" },
    source: "https://github.com/kiliankoe/woknallts",
    emoji: "🎆",
  },
];
