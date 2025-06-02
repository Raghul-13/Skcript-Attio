import React, { useState } from 'react';
import Scaleup from "../../../assets/Scaleup_Tab.png"
import SaaS from "../../../assets/SaaS_Tab.png"
import SMB from "../../../assets/SMB_Tab.png"
import Investor from "../../../assets/Investor_Tab.png"

const ScaleUpTabs:React.FC = () => {
  const [activeTab, setActiveTab] = useState('scale-ups');
  const tabs = [
    { id: 'scale-ups', label: 'Scale-ups' },
    { id: 'saas', label: 'SaaS startups' },
    { id: 'smbs', label: 'SMBs' },
    { id: 'investors', label: 'Investors' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
       <div className="bg-white border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 sm: pt-5">
          <nav className="flex justify-center gap-x-2 gap-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-1 px-1 font-medium text-sm relative border rounded cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
                
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {activeTab === 'scale-ups' && (
          <img 
            src={Scaleup} 
            alt="Scale-ups" 
            className="w-full h-auto"
          />
        )}
        {activeTab === 'saas' && (
          <img 
            src={SaaS} 
            alt="SaaS startups" 
            className="w-full h-auto"
          />
        )}
        {activeTab === 'smbs' && (
          <img 
            src={SMB} 
            alt="SMBs" 
            className="w-full h-auto"
          />
        )}
        {activeTab === 'investors' && (
          <img 
            src={Investor} 
            alt="Investors" 
            className="w-full h-auto"
          />
        )}
      </div>
    </div>
  );
};

export default ScaleUpTabs;