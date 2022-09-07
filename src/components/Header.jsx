import React from "react";
import Description from "../components/Description";

export default function Header(props) {
  const { theme, introRef } = props;
  return (
    <div className="header section" ref={introRef}>
      <Description theme={theme} />
    </div>
  );
}
