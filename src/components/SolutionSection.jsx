// SolutionSection.jsx
import React from 'react';

const SolutionSection = () => {
  return (
    <div className="solution-section" id="solutions">
      <div className="container">
        <h2>We Make Growth Easy and Sustainable</h2>
        <p className="section-subtitle">
          OneThrive provides the tools, community, and guidance you need to transform your habits and achieve consistent growth.
        </p>

        <div className="solution-cards">
          <div className="solution-card">
            <div className="solution-icon indigo">
              {/* Icon: Check Circle */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Habit Tracking</h3>
            <p>Build consistency with daily habit tracking and streak maintenance.</p>
          </div>

          <div className="solution-card">
            <div className="solution-icon blue">
              {/* Icon: Users */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20h10M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3>Community Support</h3>
            <p>Connect with like-minded achievers who inspire and hold you accountable.</p>
          </div>

          <div className="solution-card">
            <div className="solution-icon red">
              {/* Icon: Play */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3>Learning Paths</h3>
            <p>Follow step-by-step guided courses tailored to your personal goals.</p>
          </div>

          <div className="solution-card">
            <div className="solution-icon green">
              {/* Icon: Clipboard */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0h4m-4 0a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3>Personalized Insights</h3>
            <p>Get recommendations tailored to your unique strengths, challenges, and goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
