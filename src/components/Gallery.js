import React, { useState, useEffect } from "react";
import "./Gallery.css";

const images = [
  "/images/pic1.jpg",
  "/images/pic2.jpg",
  "/images/pic3.jpg",
  "/images/pic4.jpg",
  "/images/pic5.jpg",
  "/images/pic7.jpg",
  "/images/pic8.jpg",
  "/images/pic9.jpg",
  "/images/pic10.jpg"
];

const quotes = [
  "You are my today and all of my tomorrows.",
  "In your arms, I found my home.",
  "Every love story is beautiful, but ours is my favorite.",
  "You are the reason I smile every day.",
  "My heart is and always will be yours."
];

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const updateQuote = () => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };
    updateQuote();
    const interval = setInterval(updateQuote, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const autoRotate = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(autoRotate);
  }, []);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <div className="love-quote-bar">{quote}</div>
      <div className="gallery">
        <img src={images[index]} alt="Romantic" className="fade-image" />
      </div>
      <p className="quote">{quotes[index]}</p>

      <button className="prev" onClick={prevImage}>&lt;</button>
      <button className="next" onClick={nextImage}>&gt;</button>

      {/* Floating Hearts Animation */}
      <div className="floating-heart">❤️</div>
      <div className="floating-heart" style={{ left: "20%" }}>💖</div>
      <div className="floating-heart" style={{ left: "40%" }}>💘</div>
    </div>
  );
};

export default Gallery;



