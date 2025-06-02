import React from 'react';
import Automate from "../../../assets/AutomateEvery.png"
import AI from "../../../assets/DeployAI.png"
import ConnectData from "../../../assets/ConnectData.png"
import PowerfulReport from "../../../assets/PowerfulReport.png"

const FeatureSections: React.FC = () => {
  const featureData = [
    {
      title: "Automate Everything",
      description: "You're in control. Automate even the most complex business processes with our powerful, intelligent automation engine.",
      cta: "Explore automations →",
      image: Automate,
      alt: "Automation workflow interface"
    },
    {
      title: "Deploy AI",
      description: "Put our research agent to work and scale complex tasks that normally require human effort, like prospecting, lead routing and more.",
      cta: "Explore AI →",
      image: AI,
      alt: "AI agent interface"
    },
    {
      title: "Connect any type of Data",
      description: "Sync product data, billing data, and everything in between, for a real-time single source of truth for your business.",
      cta: "Explore data →",
      image: ConnectData,
      alt: "Data connections interface"
    },
    {
      title: "Powerful Reporting",
      description: "Create real-time, detailed reports that scale with your data. Visualize, customize, and get deep insights in seconds — not hours.",
      cta: "Explore reporting →",
      image: PowerfulReport,
      alt: "Reporting dashboard interface"
    }
  ];

  return (
    <div className="max-w">
      {featureData.map((feature, index) => (
        <div key={index} className="group bg-white px-5 ">
          {/* Mobile view */}
          <div className="md:hidden space-y-4 pb-15">
            <h2 className="text-xl font-semibold text-gray-900">{feature.title}</h2>
            <p className="text-sm text-gray-600">{feature.description}</p>
            <a href="#" className="block text-sm font-medium text-gray-900 hover:text-gray-700">
              {feature.cta}
            </a>
            <img 
              src={feature.image} 
              alt={feature.alt}
              className="w-full mt-4 rounded border border-gray-200"
            />
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex h-full">
            <div className="w-[30%] flex flex-col justify-between bg-white p-6 border-x-2 border-y-2">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h2>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700 mt-auto">
                {feature.cta}
              </a>
            </div>
            <div className="w-[70%] h-full">
              <img 
                src={feature.image} 
                alt={feature.alt}
                className="w-full h-full object-cover rounded-r border border-gray-200 border-l-0"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSections;