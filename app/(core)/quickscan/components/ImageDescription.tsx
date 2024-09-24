import { Span } from "next/dist/trace";
import Image from "next/image";
import React, { ReactNode } from "react";

const ImageDescription = () => {
  return (
    <div>
      <div>
        {/* <Image src="" alt="image" /> */}
        <div className="w-full h-[300px] bg-gray-300"></div>
      </div>
      <CropDescription />
    </div>
  );
};

export function CropDescription() {
  return (
    <div>
      <div className="pt-4">From our analysis</div>
      <div>
        <Description
          left={<span>Plant Name</span>}
          right={<span className="font-bold">Maize</span>}
        />
        <Description
          left={<span>Diagnosis</span>}
          right={<span className="font-bold">Nematoda spp</span>}
        />
      </div>
      <div>
        <Description
          left={<span className="font-bold">Suggested Remedy</span>}
          right={<a className="text-[#389738] underline">Learn more</a>}
        />
        <p className="text-[#444444] py-3">
          Based on our analysis, we suggest you use a combination of organic and
          inorganic fertilizers to improve the soil fertility. This will help
          the plant grow better and reduce the effect of the nematodes.
        </p>
      </div>
    </div>
  );
}

type DescriptionProp = {
  left: ReactNode;
  right: ReactNode;
};

function Description({ left, right }: DescriptionProp) {
  return (
    <div className="flex justify-between items-center py-2">
      {left}
      {right}
    </div>
  );
}

export default ImageDescription;
