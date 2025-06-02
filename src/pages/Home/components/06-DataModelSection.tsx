import React from 'react';
import DataModal from "../../../assets/DataModal.png"
import Button from '@/components/ui/Button';

const DataModelSection:React.FC = () => {
  return (
    <section className="pb-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Start with a 14-day <br /> free trial of Pro.
              </h2>
              <div className="flex gap-4">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 transition-colors">Start for Free</Button>
          <Button className="border border-gray-300 hover:bg-gray-50 transition-colors">See our Plans</Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={DataModal}
              alt="Pro trial dashboard preview"
              className="w-full h-auto rounded-lg shadow-md border border-gray-200"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-6">
            <div className="flex items-center">
              <span className="text-xs font-mono mr-3">[01]</span>
              <h6 className="text-sm font-medium">ADAPTIVE MODEL</h6>
            </div>
            <div className="flex items-center">
              <span className="text-xs font-mono mr-2">/</span>
              <h6 className="text-sm font-medium">DATA - BUSINESS</h6>
            </div>
          </div>
        <div className='flex flex-col items-center'>
          <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-bold lg: max-w-2xl text-center">
            <span className='text-black'>A seismic shift in CRM flexibility.</span> Attio's powerful data model adapts to how your business works, not the other way around. Your business model — perfectly reflected in your CRM.
          </blockquote>

          <Button className="flex items-center border border-gray-300 hover:bg-gray-50 transition-colors bg-white">
            Explore our data model
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataModelSection;