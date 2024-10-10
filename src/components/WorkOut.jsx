import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

const WorkOut = ({ workout }) => {
  return (
    <SectionWrapper
      id={"workout"}
      header={"welcome to"}
      title={["The", "DANGER", "zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, index) => {
          return <ExerciseCard exercise={exercise} index={index} key={index} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default WorkOut;
