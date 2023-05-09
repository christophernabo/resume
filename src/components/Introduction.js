import React, { useState, useEffect } from "react";
import Picture from "../picture.png";
import Navbar from "./Navbar";

const phrases = ["Christopher Nabo", "a Software Full Stack Developer and", "a Web Application Tester"];

const Introduction = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [deletingSpeed, setDeletingSpeed] = useState(50);
  const [showCursor, setShowCursor] = useState(true);
  const [fontSize, setFontSize] = useState(45);

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    const length = isDeleting ? currentPhrase.length - 1 : currentPhrase.length + 1;

    if (isDeleting) {
      setTypingSpeed(deletingSpeed);
    } else {
      setTypingSpeed(100);
    }

    if (currentPhrase === phrase && !isDeleting) {
      setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (currentPhrase === "" && isDeleting) {
      setIsDeleting(false);
      setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
    } else {
      setTimeout(() => {
        setCurrentPhrase(isDeleting ? currentPhrase.substring(0, length) : phrase.substring(0, length));
      }, typingSpeed);
    }
  }, [currentPhrase, isDeleting, currentPhraseIndex, typingSpeed, deletingSpeed]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        setFontSize(30);
      } else if (screenWidth < 960) {
        setFontSize(35);
      } else {
        setFontSize(40);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ display: 'inline-block', justifyContent: 'center', alignItems: 'left', height: '100vh' }}>
      <div><Navbar /></div>
      <div style={{ marginTop: '100px' }}>
        <img src={Picture} alt="" style={{ maxWidth: '250px', height: 'auto' }} />
      </div>
      <div style={{ color: '#000000', textAlign: 'center', marginTop: '50px', fontSize: `${fontSize}px` }}>
        <div>Hi! I'm</div>
        <div style={{ fontSize: `${fontSize + 10}px`, marginLeft: '50px' }}>
          <b>{currentPhrase}</b>
          <span style={{ visibility: showCursor ? 'visible' : 'hidden' }}>_</span>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
