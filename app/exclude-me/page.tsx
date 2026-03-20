"use client";

import { useEffect, useState } from "react";

export default function ExcludeMe() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.cookie =
      "exclude_analytics=true; path=/; max-age=31536000; SameSite=Lax";
    setDone(true);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <p className="text-lg text-text font-medium">
        {done ? "Analytics excluded for this browser." : "Setting cookie..."}
      </p>
    </div>
  );
}
