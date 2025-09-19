// Course-to-Career Path Mapping Data
// Each entry maps a degree/course to possible industries, jobs, and higher education options

export interface CourseCareerMap {
  course: string;
  industries: string[];
  jobs: string[];
  higherStudies: string[];
}

export const courseMap: CourseCareerMap[] = [
  {
    course: "B.E./B.Tech (Engineering)",
    industries: ["IT & Software", "Manufacturing", "Automobile", "Construction", "Telecom"],
    jobs: ["Software Engineer", "Mechanical Engineer", "Civil Engineer", "Electrical Engineer", "Data Analyst"],
    higherStudies: ["M.E./M.Tech", "MBA", "MS Abroad", "PhD"]
  },
  {
    course: "MBBS (Medicine)",
    industries: ["Healthcare", "Research", "Pharmaceuticals", "Public Health"],
    jobs: ["Doctor", "Surgeon", "Medical Researcher", "Hospital Administrator"],
    higherStudies: ["MD/MS", "DM/MCh", "MPH", "PhD"]
  },
  {
    course: "B.Com (Commerce)",
    industries: ["Banking", "Finance", "Accounting", "Insurance", "Consulting"],
    jobs: ["Accountant", "Financial Analyst", "Auditor", "Banker", "Tax Consultant"],
    higherStudies: ["M.Com", "CA", "CMA", "MBA"]
  },
  {
    course: "B.A. (Arts & Humanities)",
    industries: ["Education", "Media", "Civil Services", "NGOs", "Publishing"],
    jobs: ["Teacher", "Journalist", "Content Writer", "Civil Servant", "Editor"],
    higherStudies: ["M.A.", "PhD", "B.Ed", "MBA"]
  },
  {
    course: "B.Sc (Science)",
    industries: ["Research", "Healthcare", "Education", "Pharma", "IT & Software"],
    jobs: ["Research Scientist", "Lab Technician", "Pharmacist", "Teacher", "Data Analyst"],
    higherStudies: ["M.Sc", "PhD", "MBA", "B.Ed"]
  },
  {
    course: "BBA (Business Administration)",
    industries: ["Management", "Marketing", "Finance", "HR", "Consulting"],
    jobs: ["Business Analyst", "HR Manager", "Marketing Executive", "Operations Manager"],
    higherStudies: ["MBA", "MMS", "PGDM"]
  },
  // Add more courses as needed
];
