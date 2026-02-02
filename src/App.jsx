import { useState } from "react";
import { currencyConverter } from "./api/postApi";

/* eslint-disable react/no-unknown-property */
const App = () => {
  const [amount, setAmount] = useState(""); // Amount to convert
  const [fromCurrency, setFromCurrency] = useState("USD"); // Base currency
  const [toCurrency, setToCurrency] = useState("INR"); // Target currency
  const [convertedAmount, setConvertedAmount] = useState(null); // Converted value
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // handleConvertCurrency
  const handleConvertCurrency = async () => {
    if (!amount || amount <= 0) return;
    setLoading(true);
    setError(null);
    try {
      const res = await currencyConverter(fromCurrency, toCurrency, amount);
      const { conversion_result } = res.data;
      setLoading(false);
      setConvertedAmount(conversion_result);
    } catch (error) {
      setError("Error fetching conversion rate. Please try again.");
      setLoading(false);
      console.error(error);
    }
  };

  const handleSwapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem",
      background: "linear-gradient(135deg, #1a365d 0%, #0f766e 50%, #164e63 100%)",
      position: "relative",
      overflow: "hidden",
    },
    card: {
      background: "white",
      borderRadius: "2rem",
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 30px rgba(15, 118, 110, 0.2)",
      padding: "2.5rem",
      width: "100%",
      maxWidth: "500px",
      animation: "fadeIn 0.6s ease-out",
      position: "relative",
      zIndex: "1",
    },
    header: {
      textAlign: "center",
      marginBottom: "2.5rem",
    },
    title: {
      fontSize: "3.5rem",
      fontWeight: "900",
      background: "linear-gradient(135deg, #0f766e 0%, #0d9488 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "0.75rem",
      letterSpacing: "-0.02em",
    },
    subtitle: {
      color: "#999",
      fontSize: "1.1rem",
      fontWeight: "500",
    },
    formGroup: {
      marginBottom: "2rem",
    },
    label: {
      display: "block",
      color: "#333",
      fontWeight: "700",
      marginBottom: "0.75rem",
      fontSize: "1.15rem",
      letterSpacing: "0.3px",
    },
    input: {
      width: "100%",
      padding: "1rem 1rem 1rem 3rem",
      border: "2px solid #e5e7eb",
      borderRadius: "0.75rem",
      fontSize: "1.2rem",
      fontWeight: "600",
      outline: "none",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
    },
    select: {
      width: "100%",
      padding: "1rem 1rem",
      border: "2px solid #e5e7eb",
      borderRadius: "0.75rem",
      fontSize: "1.1rem",
      fontWeight: "600",
      outline: "none",
      background: "white",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxSizing: "border-box",
    },
    swapBtn: {
      display: "flex",
      justifyContent: "center",
      margin: "1.5rem 0",
    },
    swapIcon: {
      background: "linear-gradient(135deg, #0f766e 0%, #0d9488 100%)",
      color: "white",
      border: "none",
      borderRadius: "50%",
      padding: "1rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "55px",
      height: "55px",
      fontSize: "2rem",
      boxShadow: "0 5px 20px rgba(15, 118, 110, 0.3)",
    },
    button: {
      width: "100%",
      padding: "1.1rem",
      border: "none",
      borderRadius: "0.75rem",
      fontSize: "1.2rem",
      fontWeight: "700",
      color: "white",
      background: "linear-gradient(135deg, #0f766e 0%, #0d9488 100%)",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "1.5rem",
      letterSpacing: "0.5px",
      boxShadow: "0 5px 20px rgba(15, 118, 110, 0.3)",
    },
    buttonDisabled: {
      background: "#ccc",
      cursor: "not-allowed",
      opacity: 0.5,
      boxShadow: "none",
    },
    result: {
      marginTop: "2.5rem",
      padding: "2rem",
      background: "linear-gradient(135deg, rgba(15, 118, 110, 0.08) 0%, rgba(13, 148, 136, 0.08) 100%)",
      borderRadius: "1.25rem",
      border: "2px solid rgba(15, 118, 110, 0.2)"
    },
    resultText: {
      color: "#999",
      textAlign: "center",
      marginBottom: "1rem",
      fontSize: "1rem",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    resultAmount: {
      fontSize: "2.2rem",
      fontWeight: "900",
      textAlign: "center",
      background: "linear-gradient(135deg, #0f766e 0%, #0d9488 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "0.75rem",
      letterSpacing: "-0.01em"
    },
    error: {
      marginTop: "1.5rem",
      padding: "1.2rem",
      background: "#fee",
      border: "2px solid #fcc",
      borderRadius: "0.75rem",
      color: "#c33",
      fontSize: "1rem",
      fontWeight: "600",
    },
    inputWrapper: {
      position: "relative",
    },
    currencySymbol: {
      position: "absolute",
      left: "1.2rem",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#0f766e",
      fontSize: "1.5rem",
      pointerEvents: "none",
      fontWeight: "700"
    },
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Currency Converter</h1>
          <p style={styles.subtitle}>Convert currencies in real-time</p>
        </div>

        {/* Amount Input */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Amount</label>
          <div style={styles.inputWrapper}>
            <span style={styles.currencySymbol}>$</span>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={styles.input}
              onFocus={(e) => {
                e.target.style.borderColor = "#0f766e";
                e.target.style.boxShadow = "0 0 0 3px rgba(15, 118, 110, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e7eb";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
        </div>

        {/* From Currency */}
        <div style={styles.formGroup}>
          <label style={styles.label}>From</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            style={styles.select}
            onFocus={(e) => {
              e.target.style.borderColor = "#0f766e";
              e.target.style.boxShadow = "0 0 0 3px rgba(15, 118, 110, 0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e5e7eb";
              e.target.style.boxShadow = "none";
            }}
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="CNY">CNY - Chinese Yuan</option>
          </select>
        </div>

        {/* Swap Button */}
        <div style={styles.swapBtn}>
          <button
            onClick={handleSwapCurrencies}
            style={styles.swapIcon}
            title="Swap currencies"
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            ⇅
          </button>
        </div>

        {/* To Currency */}
        <div style={styles.formGroup}>
          <label style={styles.label}>To</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            style={styles.select}
            onFocus={(e) => {
              e.target.style.borderColor = "#0f766e";
              e.target.style.boxShadow = "0 0 0 3px rgba(15, 118, 110, 0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e5e7eb";
              e.target.style.boxShadow = "none";
            }}
          >
            <option value="INR">INR - Indian Rupee</option>
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="CNY">CNY - Chinese Yuan</option>
          </select>
        </div>

        {/* Convert Button */}
        <button
          disabled={loading || !amount || amount <= 0}
          onClick={handleConvertCurrency}
          style={{
            ...styles.button,
            ...(loading || !amount || amount <= 0 ? styles.buttonDisabled : {}),
          }}
          onMouseEnter={(e) => {
            if (!(loading || !amount || amount <= 0)) {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 10px 30px rgba(15, 118, 110, 0.4)";
            }
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}
        >
          {loading ? "Converting..." : "Convert"}
        </button>

        {/* Result */}
        {convertedAmount && (
          <div style={styles.result}>
            <p style={styles.resultText}>Conversion Result</p>
            <h2 style={styles.resultAmount}>
              {parseFloat(amount).toFixed(2)} {fromCurrency}
            </h2>
            <div style={{ textAlign: "center", color: "#ccc", fontSize: "1.2rem", margin: "0.5rem 0" }}>
              ↓
            </div>
            <h2 style={styles.resultAmount}>
              {convertedAmount.toFixed(2)} {toCurrency}
            </h2>
          </div>
        )}

        {/* Error Message */}
        {error && <div style={styles.error}>{error}</div>}
      </div>
    </div>
  );
};

export default App;
