import React, { useEffect, useState } from "react";
import styles from "./TypedText.module.css";

const TYPING_SPEED = 90; // ms per character

interface TypedTextProps {
  text: string;
}

export const TypedText: React.FC<TypedTextProps> = ({ text }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed(""); // Reset on text change
    if (!text) return; // Guard against empty/undefined

    let current = 0;
    let timeout: number;

    function typeNext() {
      if (current <= text.length) {
        setDisplayed(text.slice(0, current));
        current++;
        timeout = setTimeout(typeNext, TYPING_SPEED);
      }
    }

    typeNext();

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <span className={styles.typedText}>
      {displayed}
      <span className={styles.cursor}>|</span>
    </span>
  );
};