import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoveGallery.css";

const heartEmojis = ["💗", "💖", "💝", "💕", "♥️"];
const gradients = [
  "linear-gradient(135deg, #ffafbd, #ffc3a0, #ffdde1)",
  "linear-gradient(135deg, #e0c3fc, #8ec5fc, #c2e9fb)",
  "linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4)",
  "linear-gradient(135deg, #a18cd1, #fbc2eb, #fad0c4)",
  "linear-gradient(135deg, #ffecd2, #fcb69f, #fad0c4)",
];

const LoveGallery = () => {
  const [gradientIndex, setGradientIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      createHeart();
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const createHeart = () => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + 3 + "s";
    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  };

  const changeBackground = () => {
    setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
    document.body.style.background = gradients[gradientIndex];
  };

  const handlePageTransition = () => {
    document.querySelector(".page-transition").style.opacity = "1";
    setTimeout(() => {
      navigate("/gallery");
    }, 1000);
  };

  return (
    <div className="glass-container">
      <h1>Welcome to Our Gallery</h1>
      <p className="subtitle">Every moment with you is a treasure worth keeping...</p>
      <div className="btn-container">
        <button className="btn color-btn" onClick={changeBackground}>Change Colors 🎨</button>
        <button className="btn" onClick={handlePageTransition}>Enter Our Love Story ✨</button>
      </div>
      <p className="love-msg">Made with love, for my pookie 💕</p>
      <div className="page-transition"></div>
    </div>
  );
};

export default LoveGallery;

