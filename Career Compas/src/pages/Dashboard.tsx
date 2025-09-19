import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, FlaskRound, BookOpen, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const streams = [
  {
    id: "science",
    title: "Science Stream",
    icon: <FlaskRound className="h-12 w-12 text-blue-600" />,
    cardGradient: "from-blue-100 via-blue-50 to-white",
    accent: "bg-blue-200",
    iconColor: "text-blue-500",
    snippet: "Engineering, medical, research, and technology education pathways.",
    about:
      "Science education leads to careers in engineering, medical fields, research, and technology. It is one of the most popular streams in India, offering a wide range of opportunities.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"],
    careers: [
      "Doctor / Medical Professional",
      "Engineer",
      "Research Scientist",
      "Biotechnologist",
      "Software Developer",
      "Pharmacist",
      "Data Analyst",
      "Environmental Scientist",
    ],
    colleges: [
      "Indian Institute of Technology (IITs)",
      "All India Institute of Medical Sciences (AIIMS)",
      "National Institute of Technology (NITs)",
      "Delhi University",
      "BITS Pilani",
    ],
    advantages: [
      "High demand in technology and healthcare sectors.",
      "Opportunities for research and innovation.",
      "Strong foundation for competitive exams like NEET, JEE.",
    ],
  },
  {
    id: "commerce",
    title: "Commerce Stream",
    icon: <Briefcase className="h-12 w-12 text-yellow-600" />,
    cardGradient: "from-yellow-100 via-yellow-50 to-white",
    accent: "bg-yellow-200",
    iconColor: "text-yellow-500",
    snippet: "Business, finance, accounting, and entrepreneurship opportunities across India.",
    about:
      "The Commerce stream opens doors to business, trade, accountancy, finance, and entrepreneurship. It is ideal for students interested in economics, business studies, and management.",
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "Informatics Practices"],
    careers: [
      "Chartered Accountant (CA)",
      "Company Secretary (CS)",
      "Banking & Finance Professional",
      "Business Analyst",
      "Marketing Manager",
      "Entrepreneur",
      "Investment Banker",
    ],
    colleges: [
      "Shri Ram College of Commerce (SRCC), Delhi",
      "St. Xavier's College, Mumbai",
      "Loyola College, Chennai",
      "Christ University, Bangalore",
      "Narsee Monjee College, Mumbai",
    ],
    advantages: [
      "High demand in banking and finance sector.",
      "Opportunities in business management and entrepreneurship.",
      "Strong foundation for professional courses like CA, CS, CMA.",
    ],
  },
  {
    id: "arts",
    title: "Arts & Humanities Stream",
    icon: <BookOpen className="h-12 w-12 text-green-600" />,
    cardGradient: "from-green-100 via-green-50 to-white",
    accent: "bg-green-200",
    iconColor: "text-green-500",
    snippet: "Humanities, social sciences, languages, and cultural studies.",
    about:
      "Arts & Humanities stream focuses on humanities, social sciences, languages, and cultural studies. It is ideal for students interested in literature, history, psychology, and public administration.",
    subjects: ["History", "Political Science", "Geography", "Psychology", "Sociology", "Languages"],
    careers: [
      "Civil Services",
      "Teacher / Lecturer",
      "Lawyer",
      "Psychologist",
      "Journalist",
      "Social Worker",
      "Historian",
      "Linguist",
    ],
    colleges: [
      "Lady Shri Ram College, Delhi",
      "Presidency University, Kolkata",
      "Miranda House, Delhi",
      "Jawaharlal Nehru University (JNU), Delhi",
      "Fergusson College, Pune",
    ],
    advantages: [
      "Foundation for administrative and government sector careers.",
      "Opportunities in education, law, and media.",
      "Growing demand for social and psychological services.",
    ],
  },
  {
    id: "vocational",
    title: "Vocational & Skill-Based Stream",
    icon: <Wrench className="h-12 w-12 text-purple-600" />,
    cardGradient: "from-purple-100 via-purple-50 to-white",
    accent: "bg-purple-200",
    iconColor: "text-purple-500",
    snippet: "Skill-based education for trades, IT, hospitality, agriculture, and wellness.",
    about:
      "Vocational education equips students with industry-relevant, practical skills for rapid employment. It includes trades, IT, hospitality, agriculture, beauty & wellness, and more.",
    subjects: [
      "Information Technology",
      "Hospitality & Tourism",
      "Agriculture & Horticulture",
      "Office Management",
      "Electronics",
      "Beauty & Wellness",
    ],
    careers: [
      "IT Support Specialist",
      "Electrician",
      "Chef / Hotel Manager",
      "Agricultural Entrepreneur",
      "Beautician",
      "Auto Mechanic",
      "Fashion Designer",
      "Mobile Repair Technician",
    ],
    colleges: [
      "National Institute of Open Schooling (NIOS)",
      "Industrial Training Institutes (ITIs)",
      "Food Craft Institute, Delhi",
      "Government Polytechnic Colleges (various states)",
      "Pearl Academy, Delhi/Mumbai",
    ],
    advantages: [
      "Supports Skill India and Make in India initiatives.",
      "High employability in tourism, agriculture, and service sectors.",
      "Quick entry to trades and entrepreneurship.",
    ],
  },
];

const cardVariants = {
  collapsed: { opacity: 1, height: 120 },
  expanded: { height: "auto", opacity: 1 },
};


const getRecommendedStreams = (user: any) => {
  if (!user) return [];
  // Recommend based on academic_class or custom_class
  const classKey = (user.academic_class || user.custom_class || '').toLowerCase();
  if (!classKey) return [];
  if (classKey.includes('science')) return streams.filter(s => s.id === 'science');
  if (classKey.includes('commerce')) return streams.filter(s => s.id === 'commerce');
  if (classKey.includes('arts') || classKey.includes('humanities')) return streams.filter(s => s.id === 'arts');
  if (classKey.includes('vocational') || classKey.includes('skill')) return streams.filter(s => s.id === 'vocational');
  return [];
};

const Dashboard = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  const recommended = getRecommendedStreams(user);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };


  return (
    <div className="container mx-auto p-6 max-w-4xl space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
        Explore Education Streams in India
      </h1>

      {user && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-center text-indigo-700">Recommended for you</h2>
          {recommended.length > 0 ? (
            <div className="flex flex-col gap-7">
              {recommended.map((stream) => {
                const isExpanded = expandedId === stream.id;
                return (
                  <motion.div
                    key={stream.id}
                    className={`group relative rounded-2xl shadow-lg cursor-pointer bg-gradient-to-r ${stream.cardGradient} transition-colors border border-gray-200 hover:${stream.accent}`}
                    variants={cardVariants}
                    initial="collapsed"
                    animate={isExpanded ? "expanded" : "collapsed"}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    onClick={() => toggleExpand(stream.id)}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && toggleExpand(stream.id)}
                    role="button"
                  >
                    <div className="flex items-center px-8 py-5 gap-7">
                      <div className={`min-w-[48px] ${stream.iconColor}`}>{stream.icon}</div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold">{stream.title}</h2>
                        <p className="mt-1 text-md md:text-lg">{stream.snippet}</p>
                      </div>
                      <div className="text-xl font-semibold opacity-60">{isExpanded ? "▲" : "▼"}</div>
                    </div>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          className="absolute z-10 w-full left-0 rounded-b-2xl shadow-md bg-white bg-opacity-95 text-gray-900 border-t border-gray-200 p-7"
                          initial={{ opacity: 0, translateY: -20 }}
                          animate={{ opacity: 1, translateY: 0 }}
                          exit={{ opacity: 0, translateY: -20 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <p className="mb-4 font-medium">{stream.about}</p>
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold">Core Subjects</h3>
                            <ul className="list-disc ml-5 mt-1 space-y-1">
                              {stream.subjects.map((subject) => (
                                <li key={subject}>{subject}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold">Notable Colleges</h3>
                            <ul className="list-disc ml-5 mt-1 space-y-1">
                              {stream.colleges.map((college) => (
                                <li key={college}>{college}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold">Career Opportunities</h3>
                            <ul className="list-disc ml-5 mt-1 space-y-1">
                              {stream.careers.map((career) => (
                                <li key={career}>{career}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Advantages</h3>
                            <ul className="list-disc ml-5 mt-1 space-y-1">
                              {stream.advantages.map((adv) => (
                                <li key={adv}>{adv}</li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center text-gray-500">No personalized recommendations found. Please update your profile or take the test.</div>
          )}
        </div>
      )}

      <div className="flex flex-col gap-7">
        {streams.map((stream) => {
          const isExpanded = expandedId === stream.id;
          return (
            <motion.div
              key={stream.id}
              className={`group relative rounded-2xl shadow-lg cursor-pointer bg-gradient-to-r ${stream.cardGradient} transition-colors border border-gray-200 hover:${stream.accent}`}
              variants={cardVariants}
              initial="collapsed"
              animate={isExpanded ? "expanded" : "collapsed"}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={() => toggleExpand(stream.id)}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && toggleExpand(stream.id)}
              role="button"
            >
              <div className="flex items-center px-8 py-5 gap-7">
                <div className={`min-w-[48px] ${stream.iconColor}`}>{stream.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold">{stream.title}</h2>
                  <p className="mt-1 text-md md:text-lg">{stream.snippet}</p>
                </div>
                <div className="text-xl font-semibold opacity-60">{isExpanded ? "▲" : "▼"}</div>
              </div>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    className="absolute z-10 w-full left-0 rounded-b-2xl shadow-md bg-white bg-opacity-95 text-gray-900 border-t border-gray-200 p-7"
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <p className="mb-4 font-medium">{stream.about}</p>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">Core Subjects</h3>
                      <ul className="list-disc ml-5 mt-1 space-y-1">
                        {stream.subjects.map((subject) => (
                          <li key={subject}>{subject}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">Notable Colleges</h3>
                      <ul className="list-disc ml-5 mt-1 space-y-1">
                        {stream.colleges.map((college) => (
                          <li key={college}>{college}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold">Career Opportunities</h3>
                      <ul className="list-disc ml-5 mt-1 space-y-1">
                        {stream.careers.map((career) => (
                          <li key={career}>{career}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Advantages</h3>
                      <ul className="list-disc ml-5 mt-1 space-y-1">
                        {stream.advantages.map((adv) => (
                          <li key={adv}>{adv}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-12 space-y-3">
        <p className="text-gray-600 italic">To get to know about your interest, click the Take Test.</p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white px-16 py-5 font-bold text-lg rounded-full shadow-xl hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-50 transition"
          onClick={() => navigate("/take-test")}
        >
          Take Test
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
