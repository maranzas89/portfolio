"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";

export default function ClarityAnalytics() {
  useEffect(() => {
    clarity.init("vz24r1ysdg");
  }, []);

  return null;
}
