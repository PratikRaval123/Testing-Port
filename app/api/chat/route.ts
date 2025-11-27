import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "@/lib/constants";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key is missing on the server" },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const responseText = result.text;

    return NextResponse.json({ text: responseText });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}