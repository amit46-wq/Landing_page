// ProblemStatement.jsx
import React from 'react';

const ProblemStatement = () => {
  return (
    <div className="problem-statement-section" id="problems">
      <div className="container">
        <h2>Common Challenges We All Face</h2>

        <div className="problem-cards">
          <div className="problem-card">
            <div className="problem-icon red">
              {/* Icon: Cross */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3>Inconsistent Growth</h3>
            <p>Starting strong but struggling to maintain progress and momentum over time.</p>
          </div>

          <div className="problem-card">
            <div className="problem-icon yellow">
              {/* Icon: User */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3>Lack of Support</h3>
            <p>Trying to improve without a community of like-minded achievers to keep you motivated.</p>
          </div>

          <div className="problem-card">
            <div className="problem-icon blue">
              {/* Icon: Info Circle */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Overwhelming Information</h3>
            <p>Too many resources and no clear path to follow, leading to confusion and inaction.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;
