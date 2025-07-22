import React, { useState, useRef, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Head from "./Head";
import Footer from "./Footer";
import Home from "./Home";
import Works from "./Works";
import Contact from "./Contact";

function App() {
  const [pos, setPos] = useState({ x: 0, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [dragged, setDragged] = useState(false); 
  const offset = useRef({ x: 0, y: 0 });

  const HEAD_HEIGHT = 80; 
  const btnSize = 48;

  const getWindowSize = useCallback(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }), []);

  const clamp = useCallback((value, min, max) => Math.max(min, Math.min(value, max)), []);

  const snapToEdge = useCallback((x, y) => {
    const { width, height } = getWindowSize();
    const edges = [
      { x: 0, y: clamp(y, HEAD_HEIGHT, height - btnSize) }, 
      { x: width - btnSize, y: clamp(y, HEAD_HEIGHT, height - btnSize) }, 
      { x: clamp(x, 0, width - btnSize), y: HEAD_HEIGHT }, 
      { x: clamp(x, 0, width - btnSize), y: height - btnSize }, 
    ];
    let minDist = Infinity, snapped = edges[0];
    for (let edge of edges) {
      const dist = Math.hypot(edge.x - x, edge.y - y);
      if (dist < minDist) {
        minDist = dist;
        snapped = edge;
      }
    }
    return {
      x: clamp(snapped.x, 0, width - btnSize),
      y: clamp(snapped.y, HEAD_HEIGHT, height - btnSize),
    };
  }, [getWindowSize, clamp, HEAD_HEIGHT, btnSize]);

  const onMouseDown = (e) => {
    setDragging(true);
    setDragged(false);
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
  };

  const onMouseMove = useCallback((e) => {
    if (dragging) {
      setDragged(true);
      const { width, height } = getWindowSize();
      const btnSize = 48;
      const x = clamp(e.clientX - offset.current.x, 0, width - btnSize);
      const y = clamp(e.clientY - offset.current.y, HEAD_HEIGHT, height - btnSize);
      setPos(snapToEdge(x, y));
    }
  }, [dragging, getWindowSize, clamp, HEAD_HEIGHT, snapToEdge]);

  const onMouseUp = useCallback((e) => {
  setDragging(false);
    if (dragged) {
      setPos(snapToEdge(pos.x, pos.y));
    }
  }, [dragged, pos.x, pos.y, snapToEdge]);

  const onTouchStart = (e) => {
    setDragging(true);
    setDragged(false);
    offset.current = {
      x: e.touches[0].clientX - pos.x,
      y: e.touches[0].clientY - pos.y,
    };
  };
  
  const onTouchMove = useCallback((e) => {
    if (dragging) {
      setDragged(true);
      const { width, height } = getWindowSize();
      const btnSize = 48;
      const x = clamp(e.touches[0].clientX - offset.current.x, 0, width - btnSize);
      const y = clamp(e.touches[0].clientY - offset.current.y, HEAD_HEIGHT, height - btnSize);
      setPos(snapToEdge(x, y));
    }
  }, [dragging, getWindowSize, clamp, HEAD_HEIGHT, snapToEdge]);

const onTouchEnd = useCallback(() => {
  setDragging(false);
    if (dragged) {
      setPos(snapToEdge(pos.x, pos.y));
    }
  }, [dragged, pos.x, pos.y, snapToEdge]);

  const handleClick = () => {
    if (!dragged) {
      document.body.classList.toggle("high-contrast");
    }
  };

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("touchend", onTouchEnd);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [dragging, onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

  return (
    <Router>
      <button
        aria-label="Toggle high contrast"
        onClick={handleClick}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          zIndex: 1000,
          cursor: dragging ? "grabbing" : "grab",
          borderRadius: "50%",
          width: 48,
          height: 48,
          fontSize: 24,
          background: "#222",
          color: "#fff",
          border: "2px solid #fff",
          transition: "left 0.2s, top 0.2s",
        }}
      >
        ♿
      </button>
      <div className="content-wrapper">
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
