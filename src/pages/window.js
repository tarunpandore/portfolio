import React, { useState } from "react";
import "../components/css/window.css";
import Projects from "../components/projects";
import Skills from "../components/skills";
import about from "../assets/about.png";
import aboutDark from "../assets/about_dark.png";



export default function ProjectsExplorer(props) {
  const title = typeof props.title === "string" ? props.title : String(props.title);

  // Track position and dragging state
  const [position, setPosition] = useState({ x: 500, y: 150 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = useState(false);

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const darkTheme = props.darkTheme;

  const textColor = darkTheme ? '#111111' : '#f0f0e4';
  const backgroundColor = darkTheme ? '#f0f0e4' : '#111111';
  const bodyColor = darkTheme ? '#1f1f1f' : '#e7e5d9';

  // Mouse event handlersI
  const onMouseDown = (e) => {
    setDragging(true);
    // Calculate offset between mouse and window top-left
    const rect = e.target.closest('.window').getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    // Prevent text selection
    document.body.style.userSelect = 'none';
  };

  const onMouseMove = (e) => {
    if (!dragging || isMinimized) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const onMouseUp = () => {
    setDragging(false);
    document.body.style.userSelect = '';
  };

  // Attach/detach mousemove/up listeners
  React.useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging, offset]);

  // Store the previous position before minimizing
  const [prevPosition, setPrevPosition] = useState(position);

  function minimize() {
    if (!isMinimized) {
      // Save current position before minimizing
      setPrevPosition(position);
      setIsMinimized(true);
      setPosition({
        x: screenWidth / 1.9,
        y: screenHeight - 30,
      });
    } else {
      // Restore previous position when un-minimizing
      setIsMinimized(false);
      setPosition(prevPosition);
    }
    // Ensure dragging is stopped
    setDragging(false);
    document.body.style.userSelect = '';
  }

  function close() {
    if (props.closeWindow) props.closeWindow();
  }

  // Reset position when title changes
  React.useEffect(() => {
    setPosition({ x: 500, y: 150 });
  }, [props.title]);

  return (
    <>
      <div
        className="window"
        style={{
          width: isMinimized ? "20vw" : "50vw",
          left: position.x,
          top: position.y,
          cursor: dragging ? "grabbing" : "default",
        }}
      >
        <div
          className="header"
          style={{ color: textColor, backgroundColor: backgroundColor }}
          onMouseDown={e => {
            // Prevent dragging if minimized or if .winbtn or its children are clicked
            if (isMinimized || e.target.closest('.winbtn')) return;
            onMouseDown(e);
          }}
        >
          <h3>{title}</h3>
          <span className="winbtn" style={{ color: textColor, backgroundColor: backgroundColor }}>
            <p onClick={minimize}>_</p>
            <p onClick={close}>X</p>
          </span>
        </div>
        <div className="body" style={{ backgroundColor: bodyColor }}>
          {title === "Projects" && (
            <div className="projects">
              <Projects name="Portfolio" icon={darkTheme ? aboutDark : about} gitlink = "https://github.com/tarunpandore/portfolio.git" />
            </div>
          )}
          {title === "Skills" && (
            <div className="skills">
              <Skills />
            </div>
          )}
        </div>
      </div>
    </>
  );
}