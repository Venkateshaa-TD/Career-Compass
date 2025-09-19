// Timeline events for admissions, scholarships, and exams
export interface TimelineEvent {
  id: number;
  title: string;
  date: string; // ISO format
  type: "admission" | "scholarship" | "exam";
  description: string;
  link?: string;
}

export const timeline: TimelineEvent[] = [
  {
    id: 1,
    title: "JEE Main 2026 Application Opens",
    date: "2025-12-01",
    type: "admission",
    description: "Start applying for JEE Main 2026 for B.E./B.Tech admissions.",
    link: "https://jeemain.nta.ac.in/"
  },
  {
    id: 2,
    title: "NEET 2026 Exam Date",
    date: "2026-05-03",
    type: "exam",
    description: "NEET 2026 for MBBS/BDS admissions will be held on this date.",
    link: "https://neet.nta.nic.in/"
  },
  {
    id: 3,
    title: "INSPIRE Scholarship Application Deadline",
    date: "2025-10-31",
    type: "scholarship",
    description: "Last date to apply for the DST INSPIRE Scholarship for Science students.",
    link: "https://www.online-inspire.gov.in/"
  },
  {
    id: 4,
    title: "CBSE Class 12 Board Exams Start",
    date: "2026-03-01",
    type: "exam",
    description: "CBSE Class 12 board exams for all streams commence.",
    link: "https://cbse.gov.in/"
  },
  {
    id: 5,
    title: "DU UG Admissions 2026 Begin",
    date: "2026-06-10",
    type: "admission",
    description: "Delhi University undergraduate admissions open for 2026-27.",
    link: "https://admission.uod.ac.in/"
  },
  // Add more events as needed
];
