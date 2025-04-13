// HowItWorks.jsx
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Join and Set Goals",
      description: "Start by creating your account and defining what success looks like for you across different areas of your life.",
    },
    {
      number: 2,
      title: "Follow Curated Paths",
      description: "Choose from expert-designed roadmaps that guide you step-by-step toward mastery and consistent growth.",
    },
    {
      number: 3,
      title: "Achieve Growth Milestones",
      description: "Track your progress, celebrate wins, and continuously evolve with support from your community.",
    }
  ];

  return (
    <div className="how-it-works-section" id="how-it-works">
      <div className="container">
        <h2>Your Journey with OneThrive</h2>
        <p className="section-subtitle">
          We've simplified the path to sustainable growth with our proven three-step approach.
        </p>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
