import React from "react";
import Graph from "../../../assets/Graph.png";
import GDPR from "../../../assets/GDPR.png";
import CCPA from "../../../assets/CCPA.png";
import ISO from "../../../assets/ISO.png";
import Button from "@/components/ui/Button";

const BuiltForScaleSection: React.FC = () => {
  return (
    <>
      <div className="border mx-auto px-4 sm:px-6 pt-10 bg-white">
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
          <span className="text-xs font-mono text-gray-400">
            [04] BUILT FOR SCALE
          </span>
          <span className="text-xs font-mono text-gray-400">
            GROWTH + SECURITY /
          </span>
        </div>

        <div className="lg:ms-10 font-bold lg:max-w-140 py-3">
          <p className="text-md md:text-xl text-gray-900 mb-2">
            The system of action for the next generation.
            <span className="text-md text-gray-500">
              Attio is built for scale. Our customers sort through millions of
              records with sub-50ms latency.
            </span>
          </p>
        </div>
        <div className="max-w">
          <img src={Graph} alt="graph" className="max-w" />
        </div>
      </div>

      <div className="bg-gray-50 border p-6 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-8 md:border-r border-gray-300 mb-4 md:mb-0">
            <p className="text-lg text-gray-900 font-bold">
              Scale with security.{" "}
              <span className="text-gray-500">
                Attio is audited and certified by industry-leading third party
                standards.
              </span>
            </p>
            <Button className="mt-4 border border-gray-300 hover:bg-gray-50 transition-colors bg-white">
              Talk to Sales
            </Button>
          </div>

          <div className="md:w-2/5 grid grid-cols-3 divide-x divide-gray-30   ">
            <div className="flex flex-col items-center px-4">
              <img src={GDPR} alt="GDPR" className="h-10 w-auto mb-1" />
              <span className="text-xs font-medium text-gray-700">GDPR</span>
            </div>

            <div className="flex flex-col items-center px-4">
              <img src={CCPA} alt="CCPA" className="h-10 w-auto mb-1" />
              <span className="text-xs font-medium text-gray-700">CCPA</span>
            </div>

            <div className="flex flex-col items-center px-4">
              <img src={ISO} alt="ISO" className="h-10 w-auto mb-1" />
              <span className="text-xs font-medium text-gray-700">
                ISO 27001
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuiltForScaleSection;
