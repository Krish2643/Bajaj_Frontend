"use client"

import { useState } from "react"
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChevronDown } from "lucide-react"
import "./ChurnHNIChart.css"
 
export default function ChurnHNIChart() {
  const [churnYear, setChurnYear] = useState("2021")
  const [hniYear, setHniYear] = useState("2023")
  const [showChurnDropdown, setShowChurnDropdown] = useState(false)
  const [showHniDropdown, setShowHniDropdown] = useState(false)

  // Sample data for Churn Prediction chart
  const churnData = [
    { month: "Jan", value: 70 },
    { month: "Feb", value: 18 },
    { month: "Mar", value: 32 },
    { month: "Apr", value: 20 },
    { month: "May", value: 42 },
    { month: "Jun", value: 12 },
    { month: "Jul", value: 60 },
    { month: "Aug", value: 15 },
    { month: "Sep", value: 53 },
    { month: "Oct", value: 52 },
    { month: "Nov", value: 92 },
    { month: "Dec", value: 42 },
  ]

  // Sample data for HNI Targeted Clients chart
  const hniData = [
    { client: "Client 1", value: 80 },
    { client: "Client 2", value: 73 },
    { client: "Client 3", value: 65 },
    { client: "Client 4", value: 65 },
    { client: "Client 5", value: 55 },
    { client: "Client 6", value: 38 },
    { client: "Client 7", value: 38 },
    { client: "Client 8", value: 38 },
    { client: "Client 9", value: 38 },
  ]

  const years = ["2021", "2022", "2023", "2024"]

  const CustomChurnTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">Total Inactive clients: {payload[0].value}</p>
        </div>
      )
    }
    return null
  }

  const CustomHniTooltip = ({ active, payload, label }) => {
    console.log('label', label, active, payload[0]?.payload
    );
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">70% close to being an HNI</p>
          <p className="tooltip-label">Client: </p>
          <p className="tooltip-suggestion">AI Suggestion:</p>
        </div>
      )
    }
    return null
  }

  const toggleChurnDropdown = () => {
    setShowChurnDropdown(!showChurnDropdown)
    if (showHniDropdown) setShowHniDropdown(false)
  }

  const toggleHniDropdown = () => {
    setShowHniDropdown(!showHniDropdown)
    if (showChurnDropdown) setShowChurnDropdown(false)
  }

  const selectChurnYear = (year) => {
    setChurnYear(year)
    setShowChurnDropdown(false)
  }

  const selectHniYear = (year) => {
    setHniYear(year)
    setShowHniDropdown(false)
  }

  return (
    <div className="ChurnHNIChart-container">
      <div className="chart-card">
        <div className="chart-header">
          <h2 className="chart-title">Churn Prediction</h2>
          <div className="year-selector">
            <div className="selected-year" onClick={toggleChurnDropdown}>
              {churnYear}
              <ChevronDown size={16} />
            </div>
            {showChurnDropdown && (
              <div className="year-dropdown">
                {years.map((year) => (
                  <div key={year} className="year-option" onClick={() => selectChurnYear(year)}>
                    {year}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="chart-body">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={churnData}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#666" }}
                padding={{ left: 0, right: 0 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#666" }}
                domain={[0, 100]}
                label={{
                  value: "Inactive Clients",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle" },
                }}
              />
              <Tooltip content={<CustomChurnTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#F97316"
                fill="#FDBA74"
                activeDot={{ r: 6, stroke: "#F97316", strokeWidth: 2, fill: "#F97316" }}
                dot={{ r: 4, stroke: "#F97316", strokeWidth: 2, fill: "#F97316" }}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: "#F97316" }}></div>
              <span>{churnYear}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-header">
          <h2 className="chart-title">HNI Targeted Clients</h2>
          <div className="year-selector">
            <div className="selected-year" onClick={toggleHniDropdown}>
              {hniYear}
              <ChevronDown size={16} />
            </div>
            {showHniDropdown && (
              <div className="year-dropdown">
                {years.map((year) => (
                  <div key={year} className="year-option" onClick={() => selectHniYear(year)}>
                    {year}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="chart-body">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={hniData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="client"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#666" }}
                
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#666" }}
                domain={[0, 100]}
                label={{
                  value: "HNI Conversion Chance",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle" },
                }}
              />
              <Tooltip content={<CustomHniTooltip />} />
              <Bar dataKey="value" fill="#F97316" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: "#F97316" }}></div>
              <span>{hniYear}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
