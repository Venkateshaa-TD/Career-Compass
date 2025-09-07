export interface College {
  id: number;
  name: string;
  location: string;
  state: string;
  type: string;
  ranking: number;
  specialization: string[];
  fees: string;
  rating: number;
}

export const colleges: College[] = [
  {
    id: 1,
    name: "Indian Institute of Technology Delhi",
    location: "New Delhi",
    state: "Delhi",
    type: "Government",
    ranking: 1,
    specialization: ["Engineering", "Technology", "Research"],
    fees: "₹2.5 Lakh/year",
    rating: 4.9
  },
  {
    id: 2,
    name: "Indian Institute of Science",
    location: "Bangalore",
    state: "Karnataka", 
    type: "Government",
    ranking: 2,
    specialization: ["Science", "Research", "Engineering"],
    fees: "₹85,000/year",
    rating: 4.8
  },
  {
    id: 3,
    name: "Indian Institute of Technology Bombay",
    location: "Mumbai",
    state: "Maharashtra",
    type: "Government",
    ranking: 3,
    specialization: ["Engineering", "Technology", "Management"],
    fees: "₹2.5 Lakh/year",
    rating: 4.8
  },
  {
    id: 4,
    name: "Indian Institute of Technology Madras",
    location: "Chennai",
    state: "Tamil Nadu",
    type: "Government",
    ranking: 4,
    specialization: ["Engineering", "Technology", "Sciences"],
    fees: "₹2.3 Lakh/year",
    rating: 4.7
  },
  {
    id: 5,
    name: "Indian Institute of Technology Kanpur",
    location: "Kanpur",
    state: "Uttar Pradesh",
    type: "Government",
    ranking: 5,
    specialization: ["Engineering", "Technology", "Management"],
    fees: "₹2.4 Lakh/year",
    rating: 4.7
  },
  {
    id: 6,
    name: "Indian Institute of Technology Kharagpur",
    location: "Kharagpur",
    state: "West Bengal",
    type: "Government",
    ranking: 6,
    specialization: ["Engineering", "Technology", "Architecture"],
    fees: "₹2.4 Lakh/year",
    rating: 4.6
  },
  {
    id: 7,
    name: "Indian Institute of Management Ahmedabad",
    location: "Ahmedabad",
    state: "Gujarat",
    type: "Government",
    ranking: 7,
    specialization: ["Management", "Business Administration"],
    fees: "₹25 Lakh/year",
    rating: 4.8
  },
  {
    id: 8,
    name: "Indian Institute of Management Bangalore",
    location: "Bangalore",
    state: "Karnataka",
    type: "Government",
    ranking: 8,
    specialization: ["Management", "Business Administration"],
    fees: "₹24 Lakh/year",
    rating: 4.7
  },
  {
    id: 9,
    name: "All India Institute of Medical Sciences",
    location: "New Delhi",
    state: "Delhi",
    type: "Government",
    ranking: 9,
    specialization: ["Medicine", "Medical Research", "Healthcare"],
    fees: "₹1.3 Lakh/year",
    rating: 4.9
  },
  {
    id: 10,
    name: "Jawaharlal Nehru University",
    location: "New Delhi",
    state: "Delhi",
    type: "Government",
    ranking: 10,
    specialization: ["Arts", "Sciences", "International Studies"],
    fees: "₹50,000/year",
    rating: 4.5
  },
  {
    id: 11,
    name: "Delhi University",
    location: "New Delhi",
    state: "Delhi",
    type: "Government",
    ranking: 11,
    specialization: ["Arts", "Sciences", "Commerce"],
    fees: "₹30,000/year",
    rating: 4.4
  },
  {
    id: 12,
    name: "Banaras Hindu University",
    location: "Varanasi",
    state: "Uttar Pradesh",
    type: "Government",
    ranking: 12,
    specialization: ["Arts", "Sciences", "Engineering"],
    fees: "₹40,000/year",
    rating: 4.3
  },
  {
    id: 13,
    name: "University of Hyderabad",
    location: "Hyderabad",
    state: "Telangana",
    type: "Government",
    ranking: 13,
    specialization: ["Sciences", "Arts", "Social Sciences"],
    fees: "₹35,000/year",
    rating: 4.4
  },
  {
    id: 14,
    name: "Indian Statistical Institute",
    location: "Kolkata",
    state: "West Bengal",
    type: "Government",
    ranking: 14,
    specialization: ["Statistics", "Mathematics", "Computer Science"],
    fees: "₹45,000/year",
    rating: 4.6
  },
  {
    id: 15,
    name: "Manipal Institute of Technology",
    location: "Manipal",
    state: "Karnataka",
    type: "Private",
    ranking: 15,
    specialization: ["Engineering", "Technology", "Medicine"],
    fees: "₹15 Lakh/year",
    rating: 4.2
  },
  {
    id: 16,
    name: "Vellore Institute of Technology",
    location: "Vellore",
    state: "Tamil Nadu",
    type: "Private",
    ranking: 16,
    specialization: ["Engineering", "Technology", "Sciences"],
    fees: "₹8 Lakh/year",
    rating: 4.1
  },
  {
    id: 17,
    name: "Birla Institute of Technology and Science",
    location: "Pilani",
    state: "Rajasthan",
    type: "Private",
    ranking: 17,
    specialization: ["Engineering", "Technology", "Sciences"],
    fees: "₹18 Lakh/year",
    rating: 4.3
  },
  {
    id: 18,
    name: "Jadavpur University",
    location: "Kolkata",
    state: "West Bengal",
    type: "Government",
    ranking: 18,
    specialization: ["Engineering", "Arts", "Sciences"],
    fees: "₹25,000/year",
    rating: 4.4
  },
  {
    id: 19,
    name: "Anna University",
    location: "Chennai",
    state: "Tamil Nadu",
    type: "Government",
    ranking: 19,
    specialization: ["Engineering", "Technology"],
    fees: "₹60,000/year",
    rating: 4.2
  },
  {
    id: 20,
    name: "Pune University",
    location: "Pune",
    state: "Maharashtra",
    type: "Government",
    ranking: 20,
    specialization: ["Arts", "Sciences", "Engineering"],
    fees: "₹45,000/year",
    rating: 4.1
  }
];