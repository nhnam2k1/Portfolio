export type Achievement = {
  title: string;
  detail?: string;
  bullets?: string[];
  period?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Uber B.V — Software Engineering Internship Offer",
    period: "Feb 2025",
  },
  {
    title: "TomTom B.V — Software Engineering Internship Offer",
    period: "Jul 2022",
  },
  {
    title: "Google Hash Code 2021",
    bullets: [
      "Proposed solutions for optimizing the schedule of traffic lights to minimize the total amount of time spent in traffic.",
      "Achieved rank of 4331st globally and 22nd in Vietnam.",
    ],
    period: "2021",
  },
  {
    title: "ACM ICPC — International Collegiate Programming Contest",
    bullets: [
      "Solved a series of algorithmic problems within the 5 hour time limit, using C++ as the main programming language.",
      "Northwestern Europe Regional Contest (NWERC), ranked 99th out of 123 teams (2019) and 92nd out of 120 teams (2020).",
      "Benelux Algorithm Programming Contest (BAPC), ranked 24th out of 56 teams (2019) and 29th out of 90 teams (2020).",
    ],
    period: "2019–2020",
  },
  {
    title: "Member of the 2018 Ho Chi Minh City Informatics Preliminary Team for the National Olympiad in Informatics",
    period: "2018",
  },
];
