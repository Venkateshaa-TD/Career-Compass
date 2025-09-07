import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, FlaskRound, BookOpen, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const streams = [
  {
    id: "commerce",
    title: "Commerce Stream",
    icon: <Briefcase className="h-12 w-12 text-yellow-600" />,
    cardGradient: "from-yellow-100 via-yellow-50 to-white",
    accent: "bg-yellow-200",
    iconColor: "text-yellow-500",
    snippet: "Business, finance, accounting, and entrepreneurship opportunities in J&K.",
    about:
      "The Commerce stream in Jammu & Kashmir opens doors to business, trade, accountancy, finance, and entrepreneurship.",
    subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "Informatics Practices"],
    careers: [
      "Chartered Accountant (CA)",
      "Company Secretary (CS)",
      "Banking & Finance Professional",
      "Business Analyst",
      "Marketing Manager",
      "Government Jobs (JKSSB, JKPSC)",
    ],
    colleges: [
      "Govt College for Women, Srinagar",
      "Islamia College of Science and Commerce, Srinagar",
      "Govt SPMR College of Commerce, Jammu",
    ],
    advantages: [
      "High demand in banking and finance sector.",
      "Strong local business networks.",
      "Entrepreneurship opportunities supported by regional schemes.",
    ],
  },
  {
    id: "science",
    title: "Science Stream",
    icon: <FlaskRound className="h-12 w-12 text-blue-600" />,
    cardGradient: "from-blue-100 via-blue-50 to-white",
    accent: "bg-blue-200",
    iconColor: "text-blue-500",
    snippet: "Engineering, medical, research, and technology education pathways.",
    about:
      "Science education leads to careers in engineering, medical fields, research, and technology.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"],
    careers: [
      "Doctor / Medical Professional",
      "Engineer",
      "Research Scientist",
      "Biotechnologist",
      "Software Developer",
    ],
    colleges: [
      "National Institute of Technology, Srinagar",
      "Govt Medical College, Srinagar",
      "Govt Medical College, Jammu",
      "University of Jammu",
    ],
    advantages: [
      "High success rate in NEET, JEE among local students.",
      "Access to top coaching hubs in Kashmir.",
      "Robust future growth in tech and healthcare sectors.",
    ],
  },
  {
    id: "arts",
    title: "Arts Stream",
    icon: <BookOpen className="h-12 w-12 text-green-600" />,
    cardGradient: "from-green-100 via-green-50 to-white",
    accent: "bg-green-200",
    iconColor: "text-green-500",
    snippet: "Humanities, social sciences, languages, and cultural studies.",
    about:
      "Arts stream focuses on humanities, social sciences, languages, and cultural studies.",
    subjects: ["History", "Political Science", "Geography", "Psychology", "Sociology", "Languages"],
    careers: [
      "Civil Services",
      "Teacher / Lecturer",
      "Lawyer",
      "Psychologist",
      "Journalist",
      "Social Worker",
    ],
    colleges: [
      "Amar Singh College, Srinagar",
      "Government Gandhi Memorial Science College, Jammu",
      "Cluster University, Jammu",
    ],
    advantages: [
      "Foundation for administrative and government sector careers.",
      "Rich cultural heritage enriches arts education.",
      "Increasing demand for social and psychological services.",
    ],
  },
  {
    id: "vocational",
    title: "Vocational Stream",
    icon: <Wrench className="h-12 w-12 text-purple-600" />,
    cardGradient: "from-purple-100 via-purple-50 to-white",
    accent: "bg-purple-200",
    iconColor: "text-purple-500",
    snippet: "Skill-based education for trades, IT, hospitality, agriculture, and wellness.",
    about:
      "Vocational education equips students with industry-relevant, practical skills for rapid employment.",
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
    ],
    colleges: [
      "Government Polytechnic, Jammu",
      "ITI Bemina, Srinagar",
      "Food Craft Institute, Jammu",
    ],
    advantages: [
      "Supports Make in J&K and Skill India initiatives.",
      "High employability in local tourism and agriculture sectors.",
      "Quick entry to trades and entrepreneurship.",
    ],
  },
];

const cardVariants = {
  collapsed: { opacity: 1, height: 120 },
  expanded: { height: "auto", opacity: 1 },
};

const Dashboard = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl space-y-8">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
        Explore Education Streams in Jammu & Kashmir
      </h1>
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
                      <h3 className="text-lg font-semibold">Advantages in J&K</h3>
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
        <p className="text-gray-600 italic">To get to know about your Interest, click the Take Test.</p>
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
