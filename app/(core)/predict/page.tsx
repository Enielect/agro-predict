import Predict from "@/components/Predict.Page";
import React from "react";
import ParameterOptions from "@/app/(core)/predict/components/ParameterOptions";
import DataOptions from "@/app/(core)/predict/components/DataOptions";
import PredictDescription from "./components/PredictDescription";

const PredictPage = () => {
  return (
    <main className="min-h-[100dvh] sm:bg-[#A2FFA2]/10 px-4">
      <Predict />
    </main>
  );
};
export default PredictPage;
