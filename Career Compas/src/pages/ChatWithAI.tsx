import React, { useState } from "react";
import genAI from "../lib/geminiClient"; // ✅ Import the Gemini client

const ChatWithAI = () => {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([{ role: "assistant", content: "👋 Hi! I’m your career guidance assistant." }]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Convert chat history into plain text for Gemini
      const historyText = newMessages
        .map((msg) => `${msg.role === "user" ? "User" : "AI"}: ${msg.content}`)
        .join("\n");

      const result = await model.generateContent(historyText);
      const aiReply = result.response.text();

      setMessages([...newMessages, { role: "assistant", content: aiReply }]);
    } catch (error) {
      console.error(error);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "❌ Sorry, I couldn't fetch a response." },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Chat with AI Career Assistant</h2>
      <div className="mb-4 h-64 overflow-y-auto bg-gray-50 p-2 rounded">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block px-3 py-2 rounded ${
                msg.role === "user" ? "bg-blue-200" : "bg-green-200"
              }`}
            >
              <strong>{msg.role === "user" ? "You" : "AI"}:</strong>{" "}
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a career question..."
          disabled={loading}
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded"
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
      {loading && <p className="mt-2 text-sm text-gray-500">AI is thinking...</p>}
    </div>
  );
};

export default ChatWithAI;
