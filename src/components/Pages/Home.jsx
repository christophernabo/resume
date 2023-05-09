import React, { useState, useEffect } from "react";
import Picture from "../Assets/picture.png";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

const phrases = ["Christopher Nabo", "a Software Full Stack Developer and", "a Web Application Tester"];

const HomePage = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [deletingSpeed] = useState(50);
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
    <div style={{ display: 'inline-block', justifyContent: 'center', minHeight: "80vh", minWidth: "80vw", border: "1px solid black ", margin: "10px", borderRadius: "20px" }}>
      <Navbar />
      <div style={{ margin: '50px 0px 50px 0px' }}>
        <img src={Picture} alt="" style={{ maxWidth: '250px', height: 'auto' }} />
      </div>
      <div style={{ color: '#000000', textAlign: 'center', marginTop: '50px', fontSize: `${fontSize}px` }}>
        <div>Hi! I'm</div>
        <div style={{ fontSize: `${fontSize + 10}px`, minHeight: "150px" }}>
          <b>{currentPhrase}</b>
          <span style={{ visibility: showCursor ? 'visible' : 'hidden' }}>_</span>
        </div>
      </div>
      <Footer />
    </div >
  );
};

export default HomePage;
