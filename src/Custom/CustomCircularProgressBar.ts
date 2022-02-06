import { buildStyles } from "react-circular-progressbar";

const CustomCircularProgressBar = buildStyles({
  // Rotation of path and trail, in number of turns (0-1)

  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
  strokeLinecap: "round",

  // Text size
  textSize: "28px",

  // How long animation takes to go from one percentage to another, in seconds
  pathTransitionDuration: 0.5,

  // Can specify path transition in more detail, or remove it entirely
  // pathTransition: "none",

  // Colors
  pathColor: `rgba(62, 152, 199,1)`,
  textColor: "#EDEDED",
  trailColor: "#fff",
});

export { CustomCircularProgressBar };
