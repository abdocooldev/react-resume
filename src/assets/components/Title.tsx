import { useState, useEffect } from "react";
import { css } from "../../../styled-system/css";

const titles = [
  "Frontend Developer",
  "JavaScript Developer",
  "ReactJS Developer",
  "NextJS Developer",
];
function Title() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFadeIn(false);
    }, 2000);
    const interval = setInterval(() => {
      setFadeIn(true);
      setTitleIndex((titleIndex + 1) % titles.length);
    }, 4000);
    return () => {
      clearTimeout(timeOut);
      clearInterval(interval);
    };
  }, [titleIndex]);
  return (
    <p
      className={css({
        fontSize: "18px",
        textAlign: "center",
        transition: "2s ease",
        opacity: 1,
        "&[data-fade=false]": { opacity: 0 },
      })}
      data-fade={fadeIn}>
      I'm a {titles[titleIndex]}
    </p>
  );
}
export default Title;
