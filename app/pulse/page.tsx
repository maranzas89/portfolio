import { redirect } from "next/navigation";

export default function PulsePage() {
  // In production, redirect to the deployed Pulse app URL
  // For local dev, Pulse runs on localhost:5180
  redirect("http://localhost:5180");
}
