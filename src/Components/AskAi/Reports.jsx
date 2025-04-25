import './Reports.css'

export default function Reports() {
  return (
    <div className="report-container">
      <div className="report-card">
        <div className="report-header">
          <div className="title-section">
            <h2>
              Today's Report <span className="subtitle">(Last Updated 4/1/2024 01:43)</span>
            </h2>
          </div>
          <div className="badge">
            <span className="badge-icon">✨</span> AI Generated
          </div>
        </div>

        <div className="trends-section">
          <h2>
            Predicted Trends <span className="sparkle-icon">✨</span>
          </h2>

          <div className="prediction purple">
            <span className="label">Growth Prediction:</span> AUM expected to increase by 15% in the next quarter.
          </div>

          <div className="prediction purple">
            <span className="label">Revenue Prediction:</span> Without intervention, up to 5% of clients may exit in the
            next 6 months.
          </div>

          <div className="prediction purple">
            <span className="label">Top Products:</span> Without intervention, up to 5% of clients may exit in the
            next 6 months.
          </div>
        </div>

        <div className="cards-container">
          <div className="card warning-card">
            <h2>
              <span className="warning-icon">⚠️</span> Prevent Churn
            </h2>
            <ul>
              <li>
                Prioritize follow-ups with 10% of HNI clients showing lower engagement. Schedule personalized check-ins
                this week.
              </li>
              <li>
                Identify clients with declining transactions and offer tailored investment opportunities to maintain
                engagement.
              </li>
            </ul>
          </div>

          <div className="card revenue-card">
            <h2>
              <span className="revenue-icon">📈</span> Boost Revenue
            </h2>
            <ul>
              <li>Target 30 clients with idle funds for high-value mutual funds or portfolio upgrades.</li>
              <li>
                Identify clients nearing investment maturity and suggest premium financial products to maximize returns.
              </li>
            </ul>
          </div>
        </div>

        <div className="main-section">
          <h1>Renewal Insight</h1>
           <p> Fixed Deposits & Mutual Funds gaining traction among new
           HNIs</p>
          {/* <div className="prediction">
            <span className="label">Growth Prediction:</span> AUM expected to increase by 15% in the next quarter.
          </div> */}

          {/* <div className="prediction">
            <span className="label">Top Product Demand:</span> Fixed Deposits & Mutual Funds gaining traction among new
            HNIs
          </div> */}
        </div>

        
      </div>
    </div>
  )
}
