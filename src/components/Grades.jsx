import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Grades.css";
// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

const Grades = (props) => {
  return (
    <div className="circular-grade">
      <AnimatedProgressProvider
        valueStart={50}
        valueEnd={props.value}
        duration={3}
        easingFunction={easeQuadInOut}
        repeat
      >
        {(value) => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({ pathTransition: "none" })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </div>
  );
};

export default Grades;
