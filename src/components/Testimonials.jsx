// Testimonials.jsx
import React, { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Jennifer Roberts",
      role: "Entrepreneur",
      image: "/images/testimonial-1.jpg",
      quote: "OneThrive has completely changed how I approach my goals. The structured paths and daily tracking have helped me build consistency I never thought possible.",
      stars: 5
    },
    {
      name: "David Chen",
      role: "Fitness Coach",
      image: "/images/testimonial-2.jpg",
      quote: "I recommend OneThrive to all my clients. The accountability features and community support create the perfect environment for lasting change.",
      stars: 5
    },
    {
      name: "Sophia Williams",
      role: "Medical Student",
      image: "/images/testimonial-3.jpg",
      quote: "Balancing medical school was overwhelming until I found OneThrive. The personalized insights help me focus on what truly matters each day.",
      stars: 4
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonials-section" id="testimonials">
      <div className="container">
        <h2>Success Stories from Our Community</h2>

        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src={currentTestimonial.image} alt={currentTestimonial.name} />
          </div>

          <div className="testimonial-content">
            <div className="testimonial-stars">
              {[...Array(currentTestimonial.stars)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className="testimonial-quote">"{currentTestimonial.quote}"</p>
            <h4 className="testimonial-name">{currentTestimonial.name}</h4>
            <p className="testimonial-role">{currentTestimonial.role}</p>
          </div>
            
          <div className="testimonial-controls">
            <button onClick={prevTestimonial}>&lt;</button>
            <button onClick={nextTestimonial}>&gt;</button>
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={index === currentIndex ? "dot active" : "dot"}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
