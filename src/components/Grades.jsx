import {
    CircularProgressbar,
  
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
  // Animation
  import { easeQuadInOut } from "d3-ease";
  import AnimatedProgressProvider from "./AnimatedProgressProvider";
 
const Grades = (props) => {
return <div style={{width: "95%", height:'11rem', background: 'white',display:'block'}}>
{/* <Example label="Fully controlled text animation using react-move"> */}
      <AnimatedProgressProvider
        valueStart={50}
        valueEnd={props.value}
        duration={3}
        easingFunction={easeQuadInOut}
        repeat
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({ pathTransition: "none" })}
            />
          );
        }}
      </AnimatedProgressProvider>
    {/* </Example> */}
</div>
}

export default Grades;