import React from "react";
import TeamImage from "../../../assets/Owner1.png"; // Left side full image
import CEOImage from "../../../assets/Owner2.png"; // Right side small image
import { FiRepeat, FiDollarSign, FiBarChart2 } from 'react-icons/fi';

const TestimonialsSection: React.FC = () => {
  return (
    <div className="max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1 h-full bg-white">
          <img
            src={TeamImage}
            alt="Bravado team members"
            className="rounded-lg"
          />
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white py-2">
          <div className="md:col-span-1">
            <div className="w-48 h-48 md:w-56 md:h-56">
              <img src={CEOImage} alt="Sahil Mansuri" className="rounded-lg" />
            </div>
          </div>

          <div className="md:col-span-2 py-10 px-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">BRAVADO</h1>

            <div className="mb-8">
              <blockquote className="text-xl font-normal text-gray-700 leading-relaxed mb-4">
                “Attio is the first CRM that feels truly modern. It's powerful,
                flexible, and fast to build with. There's nothing like it on the
                market.”
              </blockquote>
              <p className="text-base font-semibold text-gray-800">
                Sahil Mansuri, CEO & Co-founder
              </p>
            </div>
            <div className="border-t border-gray-200 my-6"></div>

            <div className="flex justify-between items-center">
              <h3 className="text-base font-medium text-gray-800 mb-3">
                Bravado's favorite features
              </h3>
              <div className="flex space-x-4">
                <span className="flex items-center text-sm">
                  <FiRepeat className="mr-1" /> Workflows
                </span>
                <span className="flex items-center text-sm">
                  <FiDollarSign className="mr-1" /> Deals
                </span>
                <span className="flex items-center text-sm">
                  <FiBarChart2 className="mr-1" /> Reports
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;