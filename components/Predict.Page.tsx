"use client";

import ImageUpload from "@/app/(core)/components/ImageUpload";
import React, { useState } from "react";
import { ChevronRightIcon, CircularPredictIcon, PredictIcon } from "./svgIcons";
import ParameterOptions from "@/app/(core)/predict/components/ParameterOptions";
import DataOptions from "@/app/(core)/predict/components/DataOptions";
import PredictDescription from "@/app/(core)/predict/components/PredictDescription";
import { SettingsOptions } from "./Settings.Page";
import { AnalyticsSummary } from "./Dashboard.Page";

const Predict = () => {
  const [active, setActive] = useState<
    "upload" | "parameter" | "dataOptions" | "description"
  >("upload");
  return (
    <form>
      <div className="sm:grid grid-cols-[18rem_1fr] gap-3 pt-2 h-full ">
        <div className="bg-white p-3 rounded-md">
          {active === "upload" && (
            <div>
              <h2 className="py-3">Predict</h2>
              <ImageUpload
                type="predict"
                setActive={setActive}
                description="Tap the icon to predict"
                icon={<CircularPredictIcon />}
              />

              <h3 className="py-4 pl-3 font-semibold text-sm sm:text-base">
                Previous Predictions
              </h3>
              <div className="w-full">
                {SettingsOptions.map((option) => (
                  <div key={option.id}>
                    <div className="py-5 px-4">
                      {option.options.map((item) => (
                        <div
                          key={item.link}
                          className="flex py-5 items-center justify-between"
                        >
                          <div className="flex items-center space-x-4">
                            {item.icon}
                            <span>{item.name}</span>
                          </div>
                          <ChevronRightIcon />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === "parameter" && <ParameterOptions setActive={setActive} />}
          {/* note we are only simulating  transition between pages*/}
          <div className="sm:hidden">
            {active === "dataOptions" && <DataOptions setActive={setActive} />}
          </div>
          <div className="sm:hidden">
            {active === "description" && <PredictDescription />}
          </div>
        </div>
        <div className="hidden sm:block p-3 bg-white">
          <div>
            {active === "dataOptions" && <DataOptions setActive={setActive} />}
          </div>
          <div>
            {active === "description" && (
              <div className="space-y-2">
                <PredictDescription />
                <AnalyticsSummary />
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Predict;
