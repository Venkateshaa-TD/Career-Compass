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
  },

  // Arts & Humanities Questions (10)
  {
    id: 31,
    subject: "Arts & Humanities",
    question: "Which of the following is a famous work of William Shakespeare?",
    options: ["The Odyssey", "Hamlet", "The Divine Comedy", "War and Peace"],
    correctAnswer: 1
  },
  {
    id: 32,
    subject: "Arts & Humanities",
    question: "Which art movement is Pablo Picasso associated with?",
    options: ["Impressionism", "Cubism", "Surrealism", "Baroque"],
    correctAnswer: 1
  },
  {
    id: 33,
    subject: "Arts & Humanities",
    question: "Who is known as the father of Indian classical dance Bharatanatyam?",
    options: ["Rukmini Devi Arundale", "Birju Maharaj", "Uday Shankar", "Kelucharan Mohapatra"],
    correctAnswer: 0
  },
  {
    id: 34,
    subject: "Arts & Humanities",
    question: "Which language is considered the oldest in the world?",
    options: ["Sanskrit", "Latin", "Greek", "Mandarin"],
    correctAnswer: 0
  },
  {
    id: 35,
    subject: "Arts & Humanities",
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Michelangelo", "Raphael"],
    correctAnswer: 1
  },
  {
    id: 36,
    subject: "Arts & Humanities",
    question: "Which Indian festival is known for its classical music and dance performances?",
    options: ["Diwali", "Holi", "Natyanjali", "Pongal"],
    correctAnswer: 2
  },
  {
    id: 37,
    subject: "Arts & Humanities",
    question: "Which of these is a famous Indian poet?",
    options: ["Rabindranath Tagore", "C.V. Raman", "Satyajit Ray", "A.P.J. Abdul Kalam"],
    correctAnswer: 0
  },
  {
    id: 38,
    subject: "Arts & Humanities",
    question: "Which is a branch of philosophy dealing with beauty and taste?",
    options: ["Ethics", "Aesthetics", "Logic", "Metaphysics"],
    correctAnswer: 1
  },
  {
    id: 39,
    subject: "Arts & Humanities",
    question: "Which of these is a classical Indian musical instrument?",
    options: ["Sitar", "Guitar", "Piano", "Violin"],
    correctAnswer: 0
  },
  {
    id: 40,
    subject: "Arts & Humanities",
    question: "Who wrote the epic 'Mahabharata'?",
    options: ["Valmiki", "Vyasa", "Kalidasa", "Tulsidas"],
    correctAnswer: 1
  },

  // Tourism & Hospitality Questions (10)
  {
    id: 41,
    subject: "Tourism & Hospitality",
    question: "Which is the most important quality for a hotel receptionist?",
    options: ["Mathematical skills", "Communication skills", "Programming skills", "Drawing skills"],
    correctAnswer: 1
  },
  {
    id: 42,
    subject: "Tourism & Hospitality",
    question: "Which Indian state is most famous for backwater tourism?",
    options: ["Goa", "Kerala", "Rajasthan", "Punjab"],
    correctAnswer: 1
  },
  {
    id: 43,
    subject: "Tourism & Hospitality",
    question: "What is the primary goal of hospitality management?",
    options: ["Customer satisfaction", "Profit only", "Building design", "Food production only"],
    correctAnswer: 0
  },
  {
    id: 44,
    subject: "Tourism & Hospitality",
    question: "Which of these is a UNESCO World Heritage Site in India?",
    options: ["Qutub Minar", "Gateway of India", "India Gate", "Charminar"],
    correctAnswer: 0
  },
  {
    id: 45,
    subject: "Tourism & Hospitality",
    question: "Which cuisine is most likely to be served in a traditional Kashmiri Wazwan?",
    options: ["South Indian", "Punjabi", "Kashmiri", "Gujarati"],
    correctAnswer: 2
  },
  {
    id: 46,
    subject: "Tourism & Hospitality",
    question: "What is 'ecotourism'?",
    options: ["Tourism focused on nature and sustainability", "Tourism in cities", "Adventure sports", "Business travel"],
    correctAnswer: 0
  },
  {
    id: 47,
    subject: "Tourism & Hospitality",
    question: "Which of these is a popular hospitality career?",
    options: ["Chef", "Doctor", "Engineer", "Lawyer"],
    correctAnswer: 0
  },
  {
    id: 48,
    subject: "Tourism & Hospitality",
    question: "Which is a famous tourist destination in Jammu & Kashmir?",
    options: ["Shimla", "Manali", "Gulmarg", "Darjeeling"],
    correctAnswer: 2
  },
  {
    id: 49,
    subject: "Tourism & Hospitality",
    question: "What is the main responsibility of a tour guide?",
    options: ["Cooking food", "Guiding tourists", "Driving buses", "Cleaning rooms"],
    correctAnswer: 1
  },
  {
    id: 50,
    subject: "Tourism & Hospitality",
    question: "Which of these is a type of accommodation?",
    options: ["Hostel", "Hospital", "School", "Office"],
    correctAnswer: 0
  },

  // Social Sciences Questions (10)
  {
    id: 51,
    subject: "Social Sciences",
    question: "Who is known as the father of Sociology?",
    options: ["Sigmund Freud", "Auguste Comte", "Karl Marx", "Max Weber"],
    correctAnswer: 1
  },
  {
    id: 52,
    subject: "Social Sciences",
    question: "Which branch of social science studies the production and distribution of goods?",
    options: ["Psychology", "Economics", "Political Science", "Anthropology"],
    correctAnswer: 1
  },
  {
    id: 53,
    subject: "Social Sciences",
    question: "Who wrote 'The Republic'?",
    options: ["Plato", "Aristotle", "Socrates", "Descartes"],
    correctAnswer: 0
  },
  {
    id: 54,
    subject: "Social Sciences",
    question: "Which is a key concept in Psychology?",
    options: ["Gravity", "Cognition", "Photosynthesis", "Evaporation"],
    correctAnswer: 1
  },
  {
    id: 55,
    subject: "Social Sciences",
    question: "Which Indian leader is known for non-violent resistance?",
    options: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
    correctAnswer: 2
  },
  {
    id: 56,
    subject: "Social Sciences",
    question: "What does 'democracy' mean?",
    options: ["Rule by one", "Rule by few", "Rule by people", "Rule by king"],
    correctAnswer: 2
  },
  {
    id: 57,
    subject: "Social Sciences",
    question: "Which is a method of social research?",
    options: ["Experiment", "Survey", "Observation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 58,
    subject: "Social Sciences",
    question: "Which is a major festival celebrated in India?",
    options: ["Thanksgiving", "Christmas", "Diwali", "Halloween"],
    correctAnswer: 2
  },
  {
    id: 59,
    subject: "Social Sciences",
    question: "Which is a social institution?",
    options: ["Family", "Atom", "Molecule", "Cell"],
    correctAnswer: 0
  },
  {
    id: 60,
    subject: "Social Sciences",
    question: "Who is the current Secretary-General of the United Nations (as of 2025)?",
    options: ["Ban Ki-moon", "Kofi Annan", "António Guterres", "Boutros Boutros-Ghali"],
    correctAnswer: 2
  },

  // Agriculture & Allied Questions (10)
  {
    id: 61,
    subject: "Agriculture & Allied",
    question: "Which crop is known as the 'golden fiber'?",
    options: ["Cotton", "Jute", "Wheat", "Rice"],
    correctAnswer: 1
  },
  {
    id: 62,
    subject: "Agriculture & Allied",
    question: "Which is the main occupation in rural India?",
    options: ["Industry", "Agriculture", "IT", "Banking"],
    correctAnswer: 1
  },
  {
    id: 63,
    subject: "Agriculture & Allied",
    question: "Which animal is primarily used for dairy farming?",
    options: ["Goat", "Buffalo", "Sheep", "Horse"],
    correctAnswer: 1
  },
  {
    id: 64,
    subject: "Agriculture & Allied",
    question: "What is sericulture?",
    options: ["Silk farming", "Fish farming", "Poultry farming", "Bee keeping"],
    correctAnswer: 0
  },
  {
    id: 65,
    subject: "Agriculture & Allied",
    question: "Which is a horticulture crop?",
    options: ["Tomato", "Wheat", "Rice", "Maize"],
    correctAnswer: 0
  },
  {
    id: 66,
    subject: "Agriculture & Allied",
    question: "Which is the main source of irrigation in India?",
    options: ["Rainfall", "Canals", "Tube wells", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 67,
    subject: "Agriculture & Allied",
    question: "Which is a major fish producing state in India?",
    options: ["Punjab", "West Bengal", "Rajasthan", "Haryana"],
    correctAnswer: 1
  },
  {
    id: 68,
    subject: "Agriculture & Allied",
    question: "What is the process of growing two or more crops together called?",
    options: ["Monocropping", "Mixed cropping", "Crop rotation", "Fallowing"],
    correctAnswer: 1
  },
  {
    id: 69,
    subject: "Agriculture & Allied",
    question: "Which is a cash crop?",
    options: ["Sugarcane", "Rice", "Wheat", "Barley"],
    correctAnswer: 0
  },
  {
    id: 70,
    subject: "Agriculture & Allied",
    question: "Which is the main product of apiculture?",
    options: ["Milk", "Honey", "Eggs", "Meat"],
    correctAnswer: 1
  },

  // Vocational & Trades Questions (10)
  {
    id: 71,
    subject: "Vocational & Trades",
    question: "Which tool is used by an electrician?",
    options: ["Stethoscope", "Multimeter", "Paintbrush", "Trowel"],
    correctAnswer: 1
  },
  {
    id: 72,
    subject: "Vocational & Trades",
    question: "Which trade is related to vehicle repair?",
    options: ["Carpentry", "Automobile Technician", "Plumbing", "Tailoring"],
    correctAnswer: 1
  },
  {
    id: 73,
    subject: "Vocational & Trades",
    question: "Which is a beauty & wellness profession?",
    options: ["Chef", "Beautician", "Welder", "Driver"],
    correctAnswer: 1
  },
  {
    id: 74,
    subject: "Vocational & Trades",
    question: "Which is a common material for carpentry?",
    options: ["Wood", "Plastic", "Metal", "Glass"],
    correctAnswer: 0
  },
  {
    id: 75,
    subject: "Vocational & Trades",
    question: "Which is a safety equipment for welders?",
    options: ["Helmet", "Apron", "Gloves", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 76,
    subject: "Vocational & Trades",
    question: "Which is a plumbing tool?",
    options: ["Pipe wrench", "Hammer", "Saw", "Screwdriver"],
    correctAnswer: 0
  },
  {
    id: 77,
    subject: "Vocational & Trades",
    question: "Which is a tailoring tool?",
    options: ["Needle", "Spanner", "Chisel", "Trowel"],
    correctAnswer: 0
  },
  {
    id: 78,
    subject: "Vocational & Trades",
    question: "Which is a mobile repair tool?",
    options: ["Soldering iron", "Paint roller", "Trowel", "Stethoscope"],
    correctAnswer: 0
  },
  {
    id: 79,
    subject: "Vocational & Trades",
    question: "Which is a trade in construction?",
    options: ["Mason", "Chef", "Teacher", "Doctor"],
    correctAnswer: 0
  },
  {
    id: 80,
    subject: "Vocational & Trades",
    question: "Which is a skill for a fashion designer?",
    options: ["Pattern making", "Welding", "Plumbing", "Driving"],
    correctAnswer: 0
  },

  // Public Sector & Defense Questions (10)
  {
    id: 81,
    subject: "Public Sector & Defense",
    question: "Which exam is required for Indian Civil Services?",
    options: ["UPSC", "CAT", "JEE", "NEET"],
    correctAnswer: 0
  },
  {
    id: 82,
    subject: "Public Sector & Defense",
    question: "Which is a paramilitary force in India?",
    options: ["CRPF", "Navy", "Air Force", "ISRO"],
    correctAnswer: 0
  },
  {
    id: 83,
    subject: "Public Sector & Defense",
    question: "Which is a government job in railways?",
    options: ["Station Master", "Pilot", "Doctor", "Chef"],
    correctAnswer: 0
  },
  {
    id: 84,
    subject: "Public Sector & Defense",
    question: "Which is a defense service?",
    options: ["Army", "Police", "Teacher", "Doctor"],
    correctAnswer: 0
  },
  {
    id: 85,
    subject: "Public Sector & Defense",
    question: "Which is a postal service job?",
    options: ["Postman", "Chef", "Engineer", "Nurse"],
    correctAnswer: 0
  },
  {
    id: 86,
    subject: "Public Sector & Defense",
    question: "Which is a state government job?",
    options: ["JKSSB", "IAS", "IPS", "IFS"],
    correctAnswer: 0
  },
  {
    id: 87,
    subject: "Public Sector & Defense",
    question: "Which is a uniformed service?",
    options: ["Police", "Teacher", "Doctor", "Engineer"],
    correctAnswer: 0
  },
  {
    id: 88,
    subject: "Public Sector & Defense",
    question: "Which is a central government job?",
    options: ["IAS", "JKSSB", "Teacher", "Chef"],
    correctAnswer: 0
  },
  {
    id: 89,
    subject: "Public Sector & Defense",
    question: "Which is a defense exam?",
    options: ["NDA", "CAT", "GATE", "NEET"],
    correctAnswer: 0
  },
  {
    id: 90,
    subject: "Public Sector & Defense",
    question: "Which is a job in Indian Army?",
    options: ["Soldier", "Chef", "Doctor", "Teacher"],
    correctAnswer: 0
  },

  // Creative & Media Questions (10)
  {
    id: 91,
    subject: "Creative & Media",
    question: "Which is a visual art profession?",
    options: ["Graphic Designer", "Doctor", "Engineer", "Teacher"],
    correctAnswer: 0
  },
  {
    id: 92,
    subject: "Creative & Media",
    question: "Which is a career in film making?",
    options: ["Director", "Nurse", "Chef", "Plumber"],
    correctAnswer: 0
  },
  {
    id: 93,
    subject: "Creative & Media",
    question: "Which is a media profession?",
    options: ["Radio Jockey", "Doctor", "Engineer", "Teacher"],
    correctAnswer: 0
  },
  {
    id: 94,
    subject: "Creative & Media",
    question: "Which is a performing arts career?",
    options: ["Musician", "Nurse", "Chef", "Plumber"],
    correctAnswer: 0
  },
  {
    id: 95,
    subject: "Creative & Media",
    question: "Which is a photography tool?",
    options: ["Camera", "Stethoscope", "Hammer", "Trowel"],
    correctAnswer: 0
  },
  {
    id: 96,
    subject: "Creative & Media",
    question: "Which is a content creation platform?",
    options: ["YouTube", "Hospital", "Bank", "School"],
    correctAnswer: 0
  },
  {
    id: 97,
    subject: "Creative & Media",
    question: "Which is a tool for animation?",
    options: ["Computer", "Stethoscope", "Hammer", "Trowel"],
    correctAnswer: 0
  },
  {
    id: 98,
    subject: "Creative & Media",
    question: "Which is a job in radio?",
    options: ["Radio Presenter", "Chef", "Doctor", "Teacher"],
    correctAnswer: 0
  },
  {
    id: 99,
    subject: "Creative & Media",
    question: "Which is a video editing software?",
    options: ["Adobe Premiere", "MS Word", "Excel", "PowerPoint"],
    correctAnswer: 0
  },
  {
    id: 100,
    subject: "Creative & Media",
    question: "Which is a music production tool?",
    options: ["FL Studio", "Paint", "Excel", "Word"],
    correctAnswer: 0
  },

  // Sports Questions (10)
  {
    id: 101,
    subject: "Sports",
    question: "Which is a team sport?",
    options: ["Cricket", "Chess", "Tennis", "Boxing"],
    correctAnswer: 0
  },
  {
    id: 102,
    subject: "Sports",
    question: "Who is known as the 'God of Cricket'?",
    options: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Kapil Dev"],
    correctAnswer: 1
  },
  {
    id: 103,
    subject: "Sports",
    question: "Which is an Olympic sport?",
    options: ["Swimming", "Kabaddi", "Kho-Kho", "Gilli Danda"],
    correctAnswer: 0
  },
  {
    id: 104,
    subject: "Sports",
    question: "Which is a sports management career?",
    options: ["Coach", "Doctor", "Engineer", "Teacher"],
    correctAnswer: 0
  },
  {
    id: 105,
    subject: "Sports",
    question: "Which is a sports equipment?",
    options: ["Bat", "Pen", "Book", "Laptop"],
    correctAnswer: 0
  },
  {
    id: 106,
    subject: "Sports",
    question: "Which is a physical education profession?",
    options: ["PE Teacher", "Chef", "Doctor", "Engineer"],
    correctAnswer: 0
  },
  {
    id: 107,
    subject: "Sports",
    question: "Which is a famous footballer?",
    options: ["Lionel Messi", "Amitabh Bachchan", "Virat Kohli", "PV Sindhu"],
    correctAnswer: 0
  },
  {
    id: 108,
    subject: "Sports",
    question: "Which is a sports event?",
    options: ["Olympics", "Diwali", "Christmas", "Eid"],
    correctAnswer: 0
  },
  {
    id: 109,
    subject: "Sports",
    question: "Which is a racket sport?",
    options: ["Badminton", "Football", "Cricket", "Hockey"],
    correctAnswer: 0
  },
  {
    id: 110,
    subject: "Sports",
    question: "Which is a sports nutrition?",
    options: ["Protein", "Sugar", "Salt", "Oil"],
    correctAnswer: 0
  }
];

export const subjects = [
  "Physics",
  "Mathematics",
  "Chemistry",
  "Programming",
  "Accountancy",
  "Commerce",
  "Arts & Humanities",
  "Tourism & Hospitality",
  "Social Sciences",
  "Agriculture & Allied",
  "Vocational & Trades",
  "Public Sector & Defense",
  "Creative & Media",
  "Sports"
];
