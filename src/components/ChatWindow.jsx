// src/App.js
import React, { useState } from "react";
import FinBeeAvatar from "./components/FinBeeAvatar";
import chatBg from "./assets/chatbg.png";

import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function App() {
  const [step, setStep] = useState(0);
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [savings, setSavings] = useState("");
  const [plan, setPlan] = useState("");
  const [showChart, setShowChart] = useState(false);
  const [advice, setAdvice] = useState(""); // New: dynamic response
  const [showLineChart, setShowLineChart] = useState(false); // New: line chart toggle

  const COLORS = ["#603808", "#371110", "#102820"];

  const handleNext = (input) => {
    if (step === 0) {
      setIncome(input);
      setStep(1);
    } else if (step === 1) {
      setExpense(input);
      setStep(2);
    } else if (step === 2) {
      setSavings(input);
      analyzePlan(Number(input), Number(expense), Number(income));
      setStep(3);
    }
  };

  const analyzePlan = (savings, expense, income) => {
    let ratio = (savings / income) * 100;
    let planType = "";

    if (ratio >= 40) planType = "Aggressive Saver Plan (🟢)";
    else if (ratio >= 25) planType = "Balanced Planner Plan (🟡)";
    else planType = "Starter Saver Plan (🔵)";

    setPlan(planType);
    setShowChart(true);
  };

  const pieData = [
    { name: "Expenses", value: Number(expense) },
    { name: "Savings", value: Number(savings) },
    { name: "Remaining", value: Math.max(0, income - expense - savings) },
  ];

  const lineData = [
    { month: "Jan", savings: 2000 },
    { month: "Feb", savings: 2500 },
    { month: "Mar", savings: 3200 },
    { month: "Apr", savings: 4000 },
    { month: "May", savings: 4800 },
    { month: "Jun", savings: 5500 },
  ];

  const [input, setInput] = useState("");

  // Handle dynamic advice buttons
  const handleAdvice = (type) => {
    setShowLineChart(true);
    if (type === "Saving Tips") {
      setAdvice(
        "💡 Try automating 20% of your income into savings every month. Small consistent steps build wealth!"
      );
    } else if (type === "Investment Ideas") {
      setAdvice(
        "📈 Explore SIPs or index funds — they’re low-risk and perfect for long-term growth!"
      );
    } else if (type === "Budget Planning") {
      setAdvice(
        "📊 Use the 50-30-20 rule: 50% needs, 30% wants, and 20% savings. Helps balance lifestyle + security!"
      );
    }
  };

  const renderBotText = () => {
    switch (step) {
      case 0:
        return "Hi there! I’m FinBee — What’s your monthly income?";
      case 1:
        return "Great! And approximately how much do you spend per month?";
      case 2:
        return "Noted. How much have you currently saved?";
      case 3:
        return (
          <>
            <p>
              Perfect! You fall under the <b>{plan}</b>.
            </p>
            <p>
              You’re managing your lifestyle and savings well. Try SIPs and
              short-term mutual funds.
            </p>
            <p>Want to explore something specific?</p>
          </>
        );
      default:
        return "Let's get started!";
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #FDF8E4 0%, #FFF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins, sans-serif",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          gap: "36px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT COLUMN */}
        <div
          style={{
            flex: "0 0 380px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "20px",
          }}
        >
          <FinBeeAvatar />
          <h2
            style={{
              color: "#5C4033",
              fontSize: "28px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            FINBEE 
          </h2>
          <h2 style={{ color: "#5C4033", fontSize: 18, textAlign: "center" }}>
            I’m FinBee, your smart finance bot buzzing to help you save smarter!
          </h2>
        </div>

        {/* RIGHT COLUMN */}
        <div
          style={{
            flex: "1 1 0",
            backgroundImage: `url(${chatBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
            padding: "32px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ minHeight: "300px" }}>
            <p style={{ fontSize: "18px", color: "#3A2E26" }}>
              {renderBotText()}
            </p>

            {showChart && (
              <div style={{ width: "100%", height: 280, marginTop: 20 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      innerRadius={50}
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Dynamic Advice Display */}
            {advice && (
              <div
                style={{
                  background: "rgba(255,255,255,0.85)",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  marginTop: "20px",
                  color: "#3A2E26",
                  fontWeight: "500",
                }}
              >
                {advice}
              </div>
            )}

            {/* Line Chart for Savings Growth */}
            {showLineChart && (
              <div style={{ width: "100%", height: 250, marginTop: 20 }}>
                <ResponsiveContainer>
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="savings"
                      stroke="#583101"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Option Buttons */}
            {step === 3 && (
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "20px",
                  flexWrap: "wrap",
                }}
              >
                {["Saving Tips", "Investment Ideas", "Budget Planning"].map(
                  (option, i) => (
                    <button
                      key={i}
                      onClick={() => handleAdvice(option)}
                      style={{
                        background: "#583101",
                        color: "#fff",
                        border: "none",
                        padding: "10px 18px",
                        borderRadius: "12px",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Input Section */}
          {step < 3 && (
            <div style={{ display: "flex", marginTop: "30px" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="number"
                placeholder="Enter amount (₹) without comma"
                style={{
                  flex: 1,
                  padding: "12px",
                  border: "2px solid #583101",
                  borderRadius: "12px",
                  fontSize: "16px",
                  outline: "none",
                }}
              />
              <button
                onClick={() => {
                  if (input.trim() !== "") {
                    handleNext(input);
                    setInput("");
                  }
                }}
                style={{
                  marginLeft: "10px",
                  background: "#583101",
                  color: "#fff",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "12px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
