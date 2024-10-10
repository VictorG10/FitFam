import React, { useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/workout";
import Header from "./Header";
import Button from "./Button";

const Generator = ({
  poison,
  muscles,
  goal,
  setPoison,
  setMuscles,
  setGoal,
  updateWorkout,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((showModal) => (showModal = !showModal));
  };

  const updateMuscles = (muscleGroup) => {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      //   setShowModal(false);
      setShowModal((s) => (s = false));
      return;
    }

    setMuscles((m) => [...m, muscleGroup]);

    if (muscles.length === 2) {
      //   setShowModal(false);
      setShowModal((s) => (s = false));
    }
  };

  return (
    <SectionWrapper
      id={"generate"}
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      {/* One */}
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure."}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setPoison(type);
              }}
              className={`bg-slate-950 px-4 border py-3 rounded-lg duration-200 hover:border-blue-600 ${
                type === poison ? "border-blue-600" : "border-blue-400"
              }`}
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      {/* Two */}
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />

      <div className="bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col ">
        <button
          onClick={toggleModal}
          className="relative p-3 flex items-center justify-center"
        >
          <p className="capitalize">
            {muscles.length == 0 ? `Select muscle groups` : muscles.join(" ")}{" "}
          </p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>

        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => updateMuscles(muscleGroup)}
                  key={muscleGroupIndex}
                  className={`hover:text-blue-400 duration-200 ${
                    muscles.includes(muscleGroup) ? "text-blue-400" : ""
                  }`}
                >
                  <p className="uppercase">{muscleGroup.replace("_", "")}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Three  */}
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />

      <div className="grid grid-cols-1sm:grid-cols-3  gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
              }}
              className={`bg-slate-950 border py-3 rounded-lg duration-200 px-4 hover:border-blue-600 ${
                scheme === goal ? "border-blue-600" : "border-blue-400"
              }`}
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button title={"Formulate"} func={updateWorkout} />
    </SectionWrapper>
  );
};

export default Generator;
