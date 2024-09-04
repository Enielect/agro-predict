import Image from "next/image";
import React, { ReactNode } from "react";

const Refresh = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4V9H4.582M4.582 9C5.24585 7.35813 6.43568 5.98291 7.96503 5.08986C9.49438 4.19681 11.2768 3.83641 13.033 4.06514C14.7891 4.29387 16.4198 5.0988 17.6694 6.35378C18.919 7.60876 19.7168 9.24286 19.938 11M4.582 9H9M20 20V15H19.419M19.419 15C18.7542 16.6409 17.564 18.015 16.0348 18.9073C14.5056 19.7995 12.7237 20.1595 10.9681 19.9309C9.21246 19.7022 7.5822 18.8979 6.33253 17.6437C5.08287 16.3896 4.28435 14.7564 4.062 13M19.419 15H15"
        stroke="#1E1E1E"
        stroke-opacity="0.6"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const PredictDescription = () => {
  return (
    <div className="">
      <div>
        {/* <Image src="" alt="image" /> */}
        <div className="w-full h-[300px] bg-gray-300"></div>
      </div>
      <div className="mt-[15px]">
        <div className="space-y-3">
          <Description
            left={<span className="font-bold">Maize</span>}
            right={<Refresh />}
          />
          <div className="text-[#444444]s">Considering these parameters:</div>
        </div>
        <div className="py-4 space-y-3">
          <Description
            left={<span className="">Soli type</span>}
            right={<a className="">Loamy</a>}
          />
          <Description
            left={<span className="">Soil pH</span>}
            right={<a className="">6.0</a>}
          />
          <Description
            left={<span className="">Month</span>}
            right={<a className="">June</a>}
          />
          <Description
            left={<span className="">Season</span>}
            right={<a className="">Rainy</a>}
          />
        </div>
        <div className="py-4 space-y-3">
          <div className="text-sm text-[#444444]">
            Based on the following parameters
          </div>
          <Description
            left={<span className="font-semibold">Sustainability score</span>}
            right={<span className="font-bold text-[#389738] text-2xl">93%</span>}
          />
        </div>
      </div>
    </div>
  );
};

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

export default PredictDescription;
