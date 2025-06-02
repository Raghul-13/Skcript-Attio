import React from "react";
import People from "../../../assets/People.png";
import Button from "@/components/ui/Button";

const CompaniesSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-10">
          <img src={People} alt="Company user" className="max-w" />
        </div>

        <h2 className="text-xl sm:text-3xl font-medium text-gray-900 mb-8">
          The CRM behind <br />{" "}
          <span className="text-xl">thousands of companies.</span>
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button className="bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            Start for Free
          </Button>
          <Button className="border border-gray-300 hover:bg-gray-50 transition-colors">
            Talk to Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompaniesSection;
