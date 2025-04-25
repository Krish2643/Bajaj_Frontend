import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { ChevronDown } from "lucide-react"
import "./Chart.css"

export default function Chart() {
  const [selectedYear, setSelectedYear] = useState("2021")
  const [showYearDropdown, setShowYearDropdown] = useState(false)
  const [activeTab, setActiveTab] = useState("Revenue")

  // Sample data - this would come from your API or data source
  const data = [
    { month: "Jan", Revenue: 30000, Target: 32000 },
    { month: "Feb", Revenue: 45000, Target: 40000 },
    { month: "Mar", Revenue: 35000, Target: 45000 },
    { month: "Apr", Revenue: 40000, Target: 50000 },
    { month: "May", Revenue: 45000, Target: 45000 },
    { month: "Jun", Revenue: 50000, Target: 35000 },
    { month: "Jul", Revenue: 65000, Target: 32000 },
    { month: "Aug", Revenue: 70000, Target: 50000 },
    { month: "Sep", Revenue: 65000, Target: 60000 },
    { month: "Oct", Revenue: 68000, Target: 65000 },
    { month: "Nov", Revenue: 65000, Target: 70000 },
    { month: "Dec", Revenue: 63000, Target: 45000 },
  ]

  const years = ["2021", "2022", "2023", "2024"]
  const tabs = ["Revenue", "AUM", "Net Sales"]

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">Actual Revenue: {payload[0].value.toLocaleString()}</p>
          <p className="tooltip-label">Target Revenue: {payload[1].value.toLocaleString()}</p>
        </div>
      )
    }
    return null
  }

  const handleYearClick = () => {
    setShowYearDropdown(!showYearDropdown)
  }

  const selectYear = (year) => {
    setSelectedYear(year)
    setShowYearDropdown(false)
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="revenue-chart-container">
      <div className="chart-header">
        <div className="tabs">
          {tabs.map((tab) => (
            <span key={tab} className={`tab ${activeTab === tab ? "active" : ""}`} onClick={() => handleTabClick(tab)}>
              {tab} &nbsp;
            </span>
          ))}
        </div>
        <div className="year-selector">
          <div className="selected-year" onClick={handleYearClick}>
            {selectedYear}
            <ChevronDown size={16} />
          </div>
          {showYearDropdown && (
            <div className="year-dropdown">
              {years.map((year) => (
                <div key={year} className="year-option" onClick={() => selectYear(year)}>
                  {year}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} padding={{ left: 30, right: 30 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value / 1000}K`}
              domain={["dataMin - 5000", "dataMax + 10000"]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="square"
              iconSize={10}
              wrapperStyle={{ paddingTop: "20px" }}
              content={renderLegend}
            />
            <Line type="monotone" dataKey="Revenue" stroke="#8b9778" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
            <Line
              type="monotone"
              dataKey="Target"
              stroke="#E8C279"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

const renderLegend = (props) => {
  const { payload } = props

  return (
    <div className="custom-legend">
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="legend-item">
          <div
            className="legend-icon"
            style={{
              backgroundColor: entry.color,
              border: entry.dataKey === "Target" ? "1px solid #F97316" : "1px solid #4D7C0F",
              background: entry.dataKey === "Target" ? "transparent" : entry.color,
            }}
          ></div>
          <span className="legend-text">{entry.value}</span>
        </div>
      ))}
    </div>
  )
}
