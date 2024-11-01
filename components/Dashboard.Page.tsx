import React from "react";
import DisplayBarChart from "./DisplayBarChart";
import DisplayPieChart from "./DisplayPieChart";

const Dashboard = () => {
  return (
    <section className="w-full  sm:bg-[#A2FFA2]/10 px-5 text-sm sm:text-lg">
      <div className="sm:flex sm:items-center justify-between">
        <div>
          <h2 className="sm:text-3xl py-3 text-xl">Dashboard</h2>
          <span className="text-sm sm:text-base text-[#444444]/60">
            Here is an overview of your crops performances.
          </span>
        </div>
        <button className="py-2 px-3 hidden sm:inline-block bg-[#389738] rounded-md text-white">
          Export as CSV
        </button>
      </div>
      <div className="space-y-5">
        {/* card wrapper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-3">
          <Card header="Weather Updates" value="76" color="bg-[#A2FFA2]/60" />
          <Card header="Weather Updates" value="76" color="bg-[#FFFDD0]/60" />
          <Card header="Weather Updates" value="76" color="bg-[#F5F5DC]/60" />
        </div>
        <div className="sm:flex gap-3">
          <div className="sm:flex-1 space-y-2">
            <AnalyticsSummary />
            <Card header="Weather Updates" value="76" color="bg-[#A2FFA2]/10" />
          </div>
          <div className="sm:flex-1 space-y-4 pt-3 sm:pt-0">
            <PreviousPredictionCard />
            <NotificationChart />
          </div>
        </div>
      </div>
    </section>
  );
};

function AnalyticsTable() {
  return (
    <div>
      <ul className="flex px-2 text-xs gap-5 md:text-base text-[#444444] sm:text-sm space-x-2  py-1 my-4 border-t border-b border-[#cfcfcf]">
        <li>
          <Dot color="#A2FFA2" /> Model&apos;s data
        </li>
        <li>
          <Dot color="#389738" /> Accurate
        </li>
        <li>
          <Dot color="#FFA08F" /> Low
        </li>
        <li>
          <Dot color="#F0E68C" /> Moderate
        </li>
        <li>
          <Dot color="#FF6347" /> High
        </li>
      </ul>
      {/* analytics table */}

      <DisplayBarChart />
      {/* update at time */}
      <div className="py-3">
        <span>
          Last Updated at <span className="text-[#389738]">4:00am</span>
        </span>
        <span className="text-[#444444] block py-1">30th August 2024</span>
      </div>
    </div>
  );
}

function PreviousPredictionCard() {
  return (
    <div className="p-3 md:flex md:flex-row-reverse md:justify-end md:gap-[4rem] rounded-md bg-[#A2FFA2]/20">
      {/* <div className="h-[17rem] w-full my-3 sm:my-0 bg-gray-300"></div> */}
      <DisplayPieChart />
      {/* list of crops based on viability */}
      <ul className="text-[#444444]  md:flex md:flex-col md:justify-between spce-y-4">
        <li>
          <Dot color="#A2FFA2" /> Maize (56%){" "}
          <span className="text-[389738]">Recommended</span>
        </li>
        <li>
          <Dot color="#389738" /> Cocoa (20%)
        </li>
        <li>
          <Dot color="#FFA08F" /> Rice (12%)
        </li>
        <li>
          <Dot color="#F0E68C" /> Beans (8%)
        </li>
        <li>
          <Dot color="#FF6347" /> Cashew (`4%)
        </li>
      </ul>
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      className="w-2 h-2 rounded-full inline-block"
      style={{ backgroundColor: color }}
    ></span>
  );
}

export function AnalyticsSummary() {
  return (
    <div className="border  border-[#444444]/20 rounded-lg py-4 px-2">
      <div className="flex justify-between  items-start">
        <div className="flex flex-col space-y-3">
          <span>Last Prediction Analytics</span>
          <span className="text-[#444444]">Placeholder text</span>
          <span>
            Suitaibility score: <span className="text-[#389738]"> 80%</span>
          </span>
        </div>
        <button className="bg-[#389738] text-white px-3 py-1 rounded-md">
          View
        </button>
      </div>
      <AnalyticsTable />
    </div>
  );
}

type CardProp = { header: string; value: string; color: string };

function Card({ header, value, color }: CardProp) {
  return (
    <div className={`${color}  py-4 px-5 rounded-3xl`}>
      <header className="text-[#1e1e1e]/60">{header}</header>
      <strong className="text-4xl block py-4 md:text-5xl">
        {value.includes("0") ? (
          <>
            57<sup>o</sup>C
          </>
        ) : (
          value
        )}
      </strong>
    </div>
  );
}

function NotificationChart() {
  return (
    <div className=" border p-4 border-[#444444]/40 rounded-xl w-full">
      <header className="font-semibold text-xl py-2">Notifications</header>
      <div className="space-y-2">
        <p>
          <Dot color="#F0E68C" />
          <span className="ml-4">import from notification panel</span>
        </p>
        <p>
          <Dot color="#F0E68C" />
          <span className="ml-4">import from notification panel</span>
        </p>
        <p>
          <Dot color="#F0E68C" />
          <span className="ml-4">import from notification panel</span>
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
