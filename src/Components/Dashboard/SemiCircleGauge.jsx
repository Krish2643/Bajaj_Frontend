import React from 'react';
import GaugeChart from 'react-gauge-chart';
import './SemiCircleGauge.css';

const SemiCircleGauge = ({ percentage }) => {
  // Convert percentage to fraction (e.g., 93% => 0.93)
  const percentValue = percentage / 100;

  return (
    <div className="gauge-wrapper">
      <GaugeChart
        id="active-clients-gauge"
        nrOfLevels={2}
        arcsLength={[0.2, 0.8]}  // 20% red, 80% yellow
        colors={['#ff6a6a', '#fbc531']}
        percent={percentValue}
        arcPadding={0.02}
        cornerRadius={5}
        animate={false}
        needleColor="#ffffff00" // Hide needle
        needleBaseColor="#ffffff00"
        textColor="#ffffff00"   // Hide default text
      />
      <div className="gauge-label">
        Active Clients: {percentage}%
      </div>
    </div>
  );
};

export default SemiCircleGauge;
