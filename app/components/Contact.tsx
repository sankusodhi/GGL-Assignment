"use client";
import { Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";

export default function Footer() {
  const [position, setPosition] = useState(-100);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= window.innerWidth ? -100 : prev + 2));
    }, 20); 
    return () => clearInterval(interval);
  }, []);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "60px",
        background: "linear-gradient(90deg, #ff512f, #dd2476)",
        color: "white",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px -5px 15px rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(8px)",
      }}
      component="footer"
    >
      <div
        style={{
          position: "absolute",
          whiteSpace: "nowrap",
          transform: `translateX(${position}px)`,
          fontWeight: "bold",
          fontSize: "1.2rem",
          textTransform: "uppercase",
          animation: "glow 1s infinite alternate",
        }}
      >
        📞 Contact Us: support@example.com | ☎️ +91 98765 43210 | 🌍 www.example.com
      </div>
    </Paper>
  );
}
