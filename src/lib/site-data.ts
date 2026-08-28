export type Project = {
  id: string;
  title: string;
  year: string;
  tag?: string;
  kind?: string;
  external?: boolean;
  image: string;
  /** grid placement on desktop: [colStart, colSpan] out of 12 */
  col: [number, number];
  /** explicit grid row so cards pack into an irregular but tight rhythm */
  row: number;
  /** vertical rhythm offset in px */
  offset: number;
  ratio: string;
};

import imgReunimos from "@/assets/work-reunimos.jpg";
import imgTypeface from "@/assets/work-typeface.jpg";
import imgUtils from "@/assets/work-utils.jpg";
import imgSymbols from "@/assets/work-symbols.jpg";
import imgDrive from "@/assets/work-drive.jpg";
import imgEvent from "@/assets/work-event.jpg";

export const PROJECTS: Project[] = [
  {
    id: "atlas",
    row: 1,
    title: "Atlas™",
    year: "2024—2026",
    tag: "Coding project",
    image: imgReunimos,
    col: [5, 8],
    offset: 0,
    ratio: "16 / 9",
  },
  {
    id: "grotesk",
    row: 2,
    title: "Signal Mono",
    year: "2025",
    tag: "Coding project",
    image: imgTypeface,
    col: [1, 5],
    offset: 120,
    ratio: "4 / 3",
  },
  {
    id: "utils",
    row: 2,
    title: "Wasm Design Utils",
    year: "2025",
    tag: "Coding project",
    image: imgUtils,
    col: [7, 6],
    offset: 0,
    ratio: "4 / 3",
  },
  {
    id: "symbols",
    row: 3,
    title: "Vectorsymbols",
    year: "2023",
    kind: "Tools",
    external: true,
    image: imgSymbols,
    col: [5, 4],
    offset: 160,
    ratio: "5 / 4",
  },
  {
    id: "drive",
    row: 3,
    title: "Drive 클라우드",
    year: "2020—2022",
    image: imgDrive,
    col: [1, 3],
    offset: 0,
    ratio: "3 / 4",
  },
  {
    id: "seehear",
    row: 4,
    title: "See Hear Touch",
    year: "2022",
    kind: "Event",
    external: true,
    image: imgEvent,
    col: [8, 4],
    offset: 60,
    ratio: "1 / 1",
  },
];

export const LINKS = [
  { label: "Email", value: "hayoung@example.com", href: "mailto:hayoung@example.com" },
  { label: "Twitter/X", value: "@hayoung", href: "https://x.com" },
  { label: "Figma", value: "@hayoung", href: "https://figma.com" },
  { label: "Github", value: "@hayoung", href: "https://github.com" },
];
