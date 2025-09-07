export interface Question {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  // Physics Questions (5)
  {
    id: 1,
    subject: "Physics",
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correctAnswer: 1
  },
  {
    id: 2,
    subject: "Physics",
    question: "The speed of light in vacuum is approximately:",
    options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
    correctAnswer: 0
  },
  {
    id: 3,
    subject: "Physics",
    question: "Which law states that energy cannot be created or destroyed?",
    options: ["Newton's First Law", "Law of Conservation of Energy", "Ohm's Law", "Coulomb's Law"],
    correctAnswer: 1
  },
  {
    id: 4,
    subject: "Physics",
    question: "What is the formula for kinetic energy?",
    options: ["mgh", "½mv²", "mc²", "mv"],
    correctAnswer: 1
  },
  {
    id: 5,
    subject: "Physics",
    question: "The unit of electric current is:",
    options: ["Volt", "Ohm", "Ampere", "Coulomb"],
    correctAnswer: 2
  },

  // Mathematics Questions (5)
  {
    id: 6,
    subject: "Mathematics",
    question: "What is the derivative of x²?",
    options: ["2x", "x", "2", "x²"],
    correctAnswer: 0
  },
  {
    id: 7,
    subject: "Mathematics",
    question: "The value of π (pi) is approximately:",
    options: ["3.14159", "2.71828", "1.61803", "2.30259"],
    correctAnswer: 0
  },
  {
    id: 8,
    subject: "Mathematics",
    question: "What is the formula for the area of a circle?",
    options: ["2πr", "πr²", "πd", "4πr²"],
    correctAnswer: 1
  },
  {
    id: 9,
    subject: "Mathematics",
    question: "The quadratic formula is:",
    options: ["ax² + bx + c", "(-b ± √(b²-4ac))/2a", "a² + b² = c²", "mx + b"],
    correctAnswer: 1
  },
  {
    id: 10,
    subject: "Mathematics",
    question: "What is the integral of 1/x?",
    options: ["ln(x) + C", "x + C", "1/x² + C", "e^x + C"],
    correctAnswer: 0
  },

  // Chemistry Questions (5)
  {
    id: 11,
    subject: "Chemistry",
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2
  },
  {
    id: 12,
    subject: "Chemistry",
    question: "The pH of pure water at 25°C is:",
    options: ["6", "7", "8", "14"],
    correctAnswer: 1
  },
  {
    id: 13,
    subject: "Chemistry",
    question: "Which gas makes up about 78% of Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    correctAnswer: 2
  },
  {
    id: 14,
    subject: "Chemistry",
    question: "The atomic number of carbon is:",
    options: ["4", "6", "8", "12"],
    correctAnswer: 1
  },
  {
    id: 15,
    subject: "Chemistry",
    question: "What type of bond is formed when electrons are shared?",
    options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
    correctAnswer: 1
  },

  // Programming Questions (5)
  {
    id: 16,
    subject: "Programming",
    question: "Which of these is a programming language?",
    options: ["HTML", "CSS", "Python", "SQL"],
    correctAnswer: 2
  },
  {
    id: 17,
    subject: "Programming",
    question: "What does 'OOP' stand for in programming?",
    options: ["Object-Oriented Programming", "Out Of Place", "Only One Parameter", "Open Office Project"],
    correctAnswer: 0
  },
  {
    id: 18,
    subject: "Programming",
    question: "Which data structure follows LIFO principle?",
    options: ["Queue", "Stack", "Array", "Tree"],
    correctAnswer: 1
  },
  {
    id: 19,
    subject: "Programming",
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1
  },
  {
    id: 20,
    subject: "Programming",
    question: "In JavaScript, what does '===' check for?",
    options: ["Value only", "Type only", "Both value and type", "Neither value nor type"],
    correctAnswer: 2
  },

  // Accountancy Questions (5)
  {
    id: 21,
    subject: "Accountancy",
    question: "What is the basic accounting equation?",
    options: ["Assets = Liabilities + Equity", "Revenue - Expenses = Profit", "Debit = Credit", "Cash + Bank = Current Assets"],
    correctAnswer: 0
  },
  {
    id: 22,
    subject: "Accountancy",
    question: "Which principle states that expenses should be matched with related revenues?",
    options: ["Going Concern", "Matching Principle", "Revenue Recognition", "Conservatism"],
    correctAnswer: 1
  },
  {
    id: 23,
    subject: "Accountancy",
    question: "A trial balance is prepared to:",
    options: ["Calculate profit", "Check mathematical accuracy", "Prepare final accounts", "Value assets"],
    correctAnswer: 1
  },
  {
    id: 24,
    subject: "Accountancy",
    question: "Depreciation is:",
    options: ["Increase in asset value", "Decrease in asset value", "Cash payment", "Revenue"],
    correctAnswer: 1
  },
  {
    id: 25,
    subject: "Accountancy",
    question: "Which is a current asset?",
    options: ["Building", "Machinery", "Stock", "Goodwill"],
    correctAnswer: 2
  },

  // Commerce Questions (5)
  {
    id: 26,
    subject: "Commerce",
    question: "What does 'B2B' stand for in business?",
    options: ["Business to Business", "Bank to Bank", "Buy to Build", "Brand to Brand"],
    correctAnswer: 0
  },
  {
    id: 27,
    subject: "Commerce",
    question: "The study of consumer behavior helps businesses:",
    options: ["Reduce costs", "Understand customer needs", "Increase production", "Hire employees"],
    correctAnswer: 1
  },
  {
    id: 28,
    subject: "Commerce",
    question: "What is a stock exchange?",
    options: ["A bank", "A market for trading securities", "A government office", "A retail store"],
    correctAnswer: 1
  },
  {
    id: 29,
    subject: "Commerce",
    question: "In marketing, what are the 4 P's?",
    options: ["Price, Place, Product, Promotion", "People, Process, Physical, Profit", "Plan, Prepare, Perform, Perfect", "Public, Private, Personal, Professional"],
    correctAnswer: 0
  },
  {
    id: 30,
    subject: "Commerce",
    question: "What is inflation?",
    options: ["Decrease in prices", "Increase in prices", "Stable prices", "Price control"],
    correctAnswer: 1
  }
];

export const subjects = ["Physics", "Mathematics", "Chemistry", "Programming", "Accountancy", "Commerce"];