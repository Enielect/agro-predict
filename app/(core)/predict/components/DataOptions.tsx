import React from "react";
import PredictInput from "./PredictInput";
import Button from "@/app/(auth)/_components/Button";

type OptionsProp = {
  setActive: (
    value: "upload" | "parameter" | "dataOptions" | "description"
  ) => void;
};

const DataOptions = ({ setActive }: OptionsProp) => {
  return (
    <div>
      <h2 className="font-semibold text-3xl py-4">Predict</h2>
      <p>Enter the data of your selected paramters</p>
      <div className="py-5 space-y-5">
        <PredictInput
          icon={null}
          inputName="Crop Type"
          label="Last Name"
          placeholder="Enter your last name"
          error={undefined}
        />
        <PredictInput
          icon={null}
          inputName="Crop Type"
          label="Last Name"
          placeholder="Enter your last name"
          error={undefined}
        />
        <PredictInput
          icon={null}
          inputName="Crop Type"
          label="Last Name"
          placeholder="Enter your last name"
          error={undefined}
        />
        <PredictInput
          icon={null}
          inputName="Crop Type"
          label="Last Name"
          placeholder="Enter your last name"
          error={undefined}
        />
      </div>
      <div className="space-y-4">
        <Button onClick={() => setActive('description')} style="active" type="submit">
          Predict
        </Button>
        <Button style="guest">Edit Parameters</Button>
      </div>
    </div>
  );
};

export default DataOptions;
