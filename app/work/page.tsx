"use client";

import { useEffect } from "react";
import HomePage from "../page";

export default function WorkPage() {
  useEffect(() => {
    // Instant scroll to work section — uses scroll-margin-top from CSS
    requestAnimationFrame(() => {
      const el = document.getElementById("work");
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    });
  }, []);

  return <HomePage />;
}
