import React from 'react'
import { GiStarsStack } from "react-icons/gi";
import './ClientTable.css'

export default function ClientTable() {
    // Sample data for the table
    const clients = [
      {
        id: 1,
        name: "Alok Mahto",
        lastTransaction: "3/31/25",
        topInvestedSKU: "Mutual Fund",
        hni: "Yes",
        inactive: "Yes",
        crossSelling: {
          percentage: "78%",
          recommendation: "He already have a mutual fund you can pitch him to buy a retirement plan.",
        },
        upSelling: {
          percentage: "89%",
          recommendation:
            "He is interested in a basic health insurance policy, offer a more comprehensive policy that includes coverage for critical illnesses.",
        },
      },
      {
        id: 2,
        name: "Alok Mahto",
        lastTransaction: "2/02/25",
        topInvestedSKU: "Mutual Fund",
        hni: "No",
        inactive: "No",
        crossSelling: {
          percentage: "78%",
          recommendation: "He already have a mutual fund you can pitch him to buy a retirement plan.",
        },
        upSelling: {
          percentage: "89%",
          recommendation:
            "He is interested in a basic health insurance policy, offer a more comprehensive policy that includes coverage for critical illnesses.",
        },
      },
      {
        id: 3,
        name: "Alok Mahto",
        lastTransaction: "2/02/25",
        topInvestedSKU: "Mutual Fund",
        hni: "No",
        inactive: "No",
        crossSelling: {
          percentage: "78%",
          recommendation: "He already have a mutual fund you can pitch him to buy a retirement plan.",
        },
        upSelling: {
          percentage: "89%",
          recommendation:
            "He is interested in a basic health insurance policy, offer a more comprehensive policy that includes coverage for critical illnesses.",
        },
      },
      {
        id: 4,
        name: "Alok Mahto",
        lastTransaction: "2/02/25",
        topInvestedSKU: "Mutual Fund",
        hni: "No",
        inactive: "No",
        crossSelling: {
          percentage: "78%",
          recommendation: "He already have a mutual fund you can pitch him to buy a retirement plan.",
        },
        upSelling: {
          percentage: "89%",
          recommendation:
            "He is interested in a basic health insurance policy, offer a more comprehensive policy that includes coverage for critical illnesses.",
        },
      },
      {
        id: 5,
        name: "Alok Mahto",
        lastTransaction: "3/31/25",
        topInvestedSKU: "Mutual Fund",
        hni: "Yes",
        inactive: "Yes",
        crossSelling: {
          percentage: "78%",
          recommendation: "He already have a mutual fund you can pitch him to buy a retirement plan.",
        },
        upSelling: {
          percentage: "89%",
          recommendation:
            "He is interested in a basic health insurance policy, offer a more comprehensive policy that includes coverage for critical illnesses.",
        },
      },
      {
        id: 6,
        name: "Alok Mahto",
        lastTransaction: "2/02/25",
        topInvestedSKU: "Mutual Fund",
        hni: "No",
        inactive: "No",
        crossSelling: {
          percentage: "78%",
          recommendation: "He already have a mutual fund you can pitch him to buy a retirement plan.",
        },
        upSelling: {
          percentage: "89%",
          recommendation:
            "He is interested in a basic health insurance policy, offer a more comprehensive policy that includes coverage for critical illnesses.",
        },
      },
      {
        id: 7,
        name: "Alok Mahto",
        lastTransaction: "2/02/25",
        topInvestedSKU: "Mutual Fund",
        hni: "No",
        inactive: "No",
        crossSelling: {
          percentage: "78%",
          recommendation: "He already have a mutual fund you can pitch him to buy a retirement plan.",
        },
        upSelling: {
          percentage: "89%",
          recommendation:
            "He is interested in a basic health insurance policy, offer a more comprehensive policy that includes coverage for critical illnesses.",
        },
      },
      {
        id: 8,
        name: "Alok Mahto",
        lastTransaction: "2/02/25",
        topInvestedSKU: "Mutual Fund",
        hni: "No",
        inactive: "No",
        crossSelling: {
          percentage: "78%",
          recommendation: "He already have a mutual fund you can pitch him to buy a retirement plan.",
        },
        upSelling: {
          percentage: "89%",
          recommendation:
            "He is interested in a basic health insurance policy, offer a more comprehensive policy that includes coverage for critical illnesses.",
        },
      },
    ]
  
    return (
      <div className="client-table-container">
        <table className="client-table">
          <thead>
            <tr>
              <th>Clients</th>
              <th>Next Payment In</th>
              <th>Top Invested SKU</th>
              <th>HNI</th>
              <th>Inactive</th>
              <th>
                Cross selling
              </th>
              <th>
              <button className="ai-recommend-button">
              {/* <WiStars /> */}
              <GiStarsStack />
                  AI Recommend
                </button>
              </th>
              {/* <th>
                Upselling
              </th>
              <th> <button className="ai-recommend-button">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.5 3H5.5C4.11929 3 3 4.11929 3 5.5V9.5C3 10.8807 4.11929 12 5.5 12H9.5C10.8807 12 12 10.8807 12 9.5V5.5C12 4.11929 10.8807 3 9.5 3Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 15H5.5C4.11929 15 3 16.1193 3 17.5V21.5C3 22.8807 4.11929 24 5.5 24H9.5C10.8807 24 12 22.8807 12 21.5V17.5C12 16.1193 10.8807 15 9.5 15Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.5 3H17.5C16.1193 3 15 4.11929 15 5.5V9.5C15 10.8807 16.1193 12 17.5 12H21.5C22.8807 12 24 10.8807 24 9.5V5.5C24 4.11929 22.8807 3 21.5 3Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 19.5H17.5V22"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 15H17.5C16.1193 15 15 16.1193 15 17.5V22"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M22 19.5H24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  AI Recommend
                </button></th> */}
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.lastTransaction}</td>
                <td>{client.topInvestedSKU}</td>
                <td>{client.hni}</td>
                <td>{client.inactive}</td>
                <td>
                  <div className="recommendation-cell">
                    <div className="percentage">{client.crossSelling.percentage}</div>
                  </div>
                </td>
                <td>
                <div className="recommendation-text">{client.crossSelling.recommendation}</div>
                </td>
                {/* <td>
                  <div className="recommendation-cell">
                    <div className="percentage">{client.upSelling.percentage}</div>
                  </div>
                </td>
                <td>
                <div className="recommendation-text">{client.upSelling.recommendation}</div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }