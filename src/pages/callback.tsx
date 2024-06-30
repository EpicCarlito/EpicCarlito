"use client";
import { useEffect, useState } from "react";

export default function Callback() {
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const fetchedCode = urlParams.get("code");

    if (fetchedCode) {
      setCode(fetchedCode);
    } else {
      setCode(null);
    }
  }, []);

  return <div>{code ?? "processing..."}</div>;
}
