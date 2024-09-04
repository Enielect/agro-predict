import Predict from "@/components/Predict.Page";
import React from "react";
import ParameterOptions from "@/app/core/predict/components/ParameterOptions";
import DataOptions from "@/app/core/predict/components/DataOptions";
import PredictDescription from "./components/PredictDescription";

const PredictPage = () => {
  return (
    <main className="min-h-[100dvh] mt-[30px] mx-4">
      {/* <Predict /> */}
      {/* <ParameterOptions /> */}
      {/* <DataOptions /> */}
      <PredictDescription />
    </main>
  );
};

export default PredictPage;
