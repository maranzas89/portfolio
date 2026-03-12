"use client";

import { useState } from "react";
import AskWenButton from "./AskWenButton";
import AskWenPanel from "./AskWenPanel";

export default function AskWenShell({
  currentProject,
}: {
  currentProject?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AskWenButton onClick={() => setIsOpen(true)} />
      <AskWenPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        currentProject={currentProject}
      />
    </>
  );
}
