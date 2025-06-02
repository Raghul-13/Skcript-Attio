import { useState } from 'react';
import Tab1 from "../../../assets/Data_Tab.png"
import Tab2 from "../../../assets/Automation_Tab.png"
import Tab3 from "../../../assets/Pipeline_Tab.png"
import Tab4 from "../../../assets/Productivity_Tab.png"
import Tab5 from "../../../assets/Reporting_Tab.png"
import { 
  FiBell, 
  FiCheckSquare, 
  FiFileText, 
  FiMail, 
  FiBarChart2,
  FiZap,
  FiRepeat,
  FiList,
  FiStar,
  FiUsers,
  FiFilter,
  FiTrendingUp,
  FiDatabase,
  FiBriefcase,
  FiUser,
  FiDollarSign,
  FiGrid,
  FiLink,
  FiBookmark,
  FiDatabase as FiData,
  FiSettings,
  FiBarChart,
  FiActivity,
  FiTrendingUp as FiProductivity
} from 'react-icons/fi';

export default function BasepointDashboard() {
  const [activeTab, setActiveTab] = useState('Data');

  const tabs = [
    { name: 'Data', icon: <FiData className="mr-2" /> },
    { name: 'Automation', icon: <FiSettings className="mr-2" /> },
    { name: 'Pipeline', icon: <FiActivity className="mr-2" /> },
    { name: 'Productivity', icon: <FiProductivity className="mr-2" /> },
    { name: 'Reporting', icon: <FiBarChart className="mr-2" /> }
  ];

  const quickActions = [
    { name: 'Notifications', icon: <FiBell className="mr-2" /> },
    { name: 'Tasks', icon: <FiCheckSquare className="mr-2" /> },
    { name: 'Notes', icon: <FiFileText className="mr-2" /> },
    { name: 'Emails', icon: <FiMail className="mr-2" /> },
    { name: 'Reports', icon: <FiBarChart2 className="mr-2" /> },
    { name: 'Automations', icon: <FiZap className="mr-2" /> },
    { name: 'Workflows', icon: <FiRepeat className="mr-2" /> },
    { name: 'Sequences', icon: <FiList className="mr-2" /> },
    { name: 'Favorites', icon: <FiStar className="mr-2" /> },
    { name: 'Onboarding pipeline', icon: <FiUsers className="mr-2" /> },
    { name: 'Top of funnel', icon: <FiFilter className="mr-2" /> },
    { name: 'RevOps workflows', icon: <FiTrendingUp className="mr-2" /> }
  ];

  const records = [
    { name: 'Records', icon: <FiDatabase className="mr-2" /> },
    { name: 'Companies', icon: <FiBriefcase className="mr-2" /> },
    { name: 'People', icon: <FiUser className="mr-2" /> },
    { name: 'Deals', icon: <FiDollarSign className="mr-2" /> },
    { name: 'Workspaces', icon: <FiGrid className="mr-2" /> },
    { name: 'Partnerships', icon: <FiLink className="mr-2" /> },
    { name: 'Lists', icon: <FiBookmark className="mr-2" /> },
    { name: 'Strategic accounts', icon: <FiBriefcase className="mr-2" /> }
  ];

  return (
    <div className="lg:min-h-screen bg-white border border-y-0">
      <div className="bg-white border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm: pt-5">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`whitespace-nowrap py-1 px-3 font-medium text-sm relative border rounded flex items-center ${
                  activeTab === tab.name
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.icon}
                {tab.name}
                {activeTab === tab.name && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-t"></div>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="sm:px-6 py-6">
        <div className="flex flex-col lg:flex-row">
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4 h-full">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Basepoint</h2>
              
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Quick actions
                </h3>
                <ul className="space-y-1">
                  {quickActions.map((action) => (
                    <li key={action.name}>
                      <a href="#" className="flex items-center text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-2 py-1 rounded">
                        {action.icon}
                        {action.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Records
                </h3>
                <ul className="space-y-1">
                  {records.map((record) => (
                    <li key={record.name}>
                      <a href="#" className="flex items-center text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-2 py-1 rounded">
                        {record.icon}
                        {record.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden">
            {activeTab === 'Data' && (
              <img 
                src={Tab1} 
                alt="Data tab content"
                className="w-full h-full"
              />
            )}
            {activeTab === 'Automation' && (
              <img 
                src={Tab2} 
                alt="Automation tab content"
                className="w-full h-full"
              />
            )}
            {activeTab === 'Pipeline' && (
              <img 
                src={Tab3} 
                alt="Pipeline tab content"
                className="w-full h-full"
              />
            )}
            {activeTab === 'Productivity' && (
              <img 
                src={Tab4} 
                alt="Productivity tab content"
                className="w-full h-full"
              />
            )}
            {activeTab === 'Reporting' && (
              <img 
                src={Tab5} 
                alt="Reporting tab content"
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}