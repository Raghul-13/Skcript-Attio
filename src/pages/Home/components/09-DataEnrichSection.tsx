import React from "react";
import { FiMail, FiCalendar, FiActivity, FiLink } from "react-icons/fi";
import UsersData from "../../../assets/ProfileData.png";
import Button from "@/components/ui/Button";

const DataEnrichmentSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-6 sm:px-8  border border-gray-100 mx-auto">
      <div className="flex justify-between items-center pb-6 mb-6 border-b border-gray-200">
        <div className="flex items-center">
          <span className="text-xs font-mono text-gray-500 mr-3">[03]</span>
          <span className="text-xs font-medium text-gray-900">
            DATA ENRICHMENT
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-xs font-mono text-gray-500 mr-1">/</span>
          <span className="text-xs font-medium text-gray-400">SPEED 1.1</span>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-lg font-bold text-gray-400 leading-relaxed mb-8 lg:max-w-140 text-center">
          <span className="text-black">Build fast.</span> Forget months of
          setup. Attic syncs immediately with your email and calendar, building
          a powerful CRM right before your eyes.
        </p>

        <Button className="mb-10 border border-gray-300 hover:bg-gray-50 transition-colors bg-white">
          Start for Free
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:gap-4 justify-center">
        <div className="flex items-center text-gray-700 border p-1 rounded">
          <FiMail className="text-gray-500 mr-2" size={18} />
          <span className="text-sm">Email events</span>
        </div>
        <div className="flex items-center text-gray-700 border p-1 rounded">
          <FiCalendar className="text-gray-500 mr-2" size={18} />
          <span className="text-sm">Calendar events</span>
        </div>
        <div className="flex items-center text-gray-700 border p-1 rounded">
          <FiActivity className="text-gray-500 mr-2" size={18} />
          <span className="text-sm">Segment events</span>
        </div>
        <div className="flex items-center text-gray-700 border p-1 rounded">
          <FiLink className="text-gray-500 mr-2" size={18} />
          <span className="text-sm">Data sources</span>
        </div>
      </div>
      <div className="pt-10 pb-2">
        <img src={UsersData} alt="Profile Details" className="max-w" />
      </div>
    </div>
  );
};

export default DataEnrichmentSection;
