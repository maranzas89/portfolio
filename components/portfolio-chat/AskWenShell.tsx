"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import AskWenButton from "./AskWenButton";
import AskWenPanel from "./AskWenPanel";

export default function AskWenShell({
  currentProject,
}: {
  currentProject?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <AskWenButton onClick={() => setIsOpen(true)} />
      {mounted &&
        createPortal(
          <AskWenPanel
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            currentProject={currentProject}
          />,
          document.body
        )}
    </>
  );
}
