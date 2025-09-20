import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Log the key (to confirm it's loading correctly)
console.log("Gemini Key:", import.meta.env.VITE_GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export default genAI;