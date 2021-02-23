import React from "react";
import "./Toolbar.css";

export default function Toolbar({ title }) {
  return (
    <div className="toolbar">
      <h1 className="toolbar-title">{title}</h1>
    </div>
  );
}
