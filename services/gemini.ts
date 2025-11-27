import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

const getChatSession = () => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing");
    return null;
  }

  const ai = new GoogleGenAI({ apiKey });
  
  // Initialize chat with system instruction and history
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const session = getChatSession();
  
  if (!session) {
    return "I'm sorry, my AI brain isn't connected right now (API Key missing). Please contact Pratik directly via email!";
  }

  try {
    const result = await session.sendMessage({ message });
    return result.text || "I'm thinking, but I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request.";
  }
};