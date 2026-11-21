export type Education = {
  school: string;
  degree: string;
  location: string;
  period: string;
  notes: string[];
};

export const education: Education[] = [
  {
    school: "Fontys University of Applied Science",
    degree: "B.S. in ICT — Software Engineering",
    location: "Eindhoven, Netherlands",
    period: "Sep 2019 – Jul 2025",
    notes: [
      "Completed Foundations of Computer Science, Advanced Software Engineering course with a grade of 8.9/10.",
    ],
  },
  {
    school: "The Hague University of Applied Science",
    degree: "ICT Minor — Innovative Data Visualization",
    location: "Den Haag, Netherlands",
    period: "Sep 2024 – Jan 2025",
    notes: [
      "Recommended improvements to 3D underground-data visualization for the Municipality of Zoetermeer.",
      "Received grade 8 for presenting on applying Concurrent Programming in Python.",
    ],
  },
];
