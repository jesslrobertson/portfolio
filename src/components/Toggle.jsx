import React, { useState } from "react";

export default function Toggle(props) {
  const { theme, setTheme } = props;
  const [checked, setChecked] = useState(theme !== "light");

  function toggleTheme() {
    setTheme(checked ? "light" : "dark");
    console.log(theme);
  }

  function handleChange() {
    setChecked(!checked);
    console.log(checked);
    toggleTheme();
  }

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id="toggle"
        className="toggle-checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor="toggle" className="toggle-label">
        <span className="toggle-label-background" />
      </label>
    </div>
  );
}
