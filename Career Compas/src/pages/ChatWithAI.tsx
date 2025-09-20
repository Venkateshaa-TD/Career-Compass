import React, { useState, useRef, useEffect } from "react";
import genAI from "../lib/geminiClient"; // ✅ Import Gemini client

const ChatWithAI = () => {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([{ role: "assistant", content: "👋 Hi! I’m your career guidance assistant." }]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Convert history into text
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

  // Send on Enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !loading) {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[90vh] max-w-2xl mx-auto mt-6 border rounded-2xl shadow-lg overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 font-bold text-lg">
        💡 AI Career Assistant
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-2xl shadow ${
                msg.role === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-900 rounded-bl-none"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-2xl rounded-bl-none shadow flex gap-1">
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t bg-white p-3 flex gap-2 items-center">
        <input
          className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me about your career..."
          disabled={loading}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow transition disabled:opacity-50"
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWithAI;
