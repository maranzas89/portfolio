import { NextResponse } from "next/server";
import { getPortfolioChatResponse } from "@/lib/portfolio-chat";
import { BLOCKED_REPLY, isBlockedMessage, isPossiblyOutOfScope } from "@/lib/chat-safety";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body?.message?.trim();
    const currentProject = body?.currentProject ?? null;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    if (isBlockedMessage(message) || isPossiblyOutOfScope(message)) {
      return NextResponse.json({ reply: BLOCKED_REPLY });
    }

    const reply = getPortfolioChatResponse({ message, currentProject });

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}