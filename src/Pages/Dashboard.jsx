import React from 'react'
import './Dashboard.css'
import FinancialDashboard from '../Components/Dashboard/FinancialDashboard'
import ClientTable from '../Components/Dashboard/ClientTable'
import ChurnHNIChart from '../Components/Dashboard/ChurnHNIChart'

const Dashboard = () => {
  return (
    <div className='dashboard-container' >
       <FinancialDashboard />
       <ClientTable />
       <ChurnHNIChart />
    </div>
  )
}

export default Dashboard