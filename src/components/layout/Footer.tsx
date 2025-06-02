import { FaLinkedin, FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";
import logo from "../../assets/Attio_Logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 w-full py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <img src={logo} alt="Attio logo" className="h-8 mr-3" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-sm mb-3">
          <div>
            <h3 className="font-medium text-white mb-3">Platform</h3>
            <ul className="space-y-2">
              {[
                "Refer to team",
                "Changsheng",
                "Linkedin extensions 2",
                "Global extensions 3",
                "iOS app 2",
                "Android app 2",
                "Security",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-3">Impact from</h3>
            <ul className="space-y-2">
              {[
                "Selectives",
                "Habages",
                "Pipeline",
                "Zoho",
                "Excel",
                "CSV",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-3">Company</h3>
            <ul className="space-y-2">
              {[
                "Customer",
                "Blog",
                "Camera",
                "Machines",
                "Become a partner",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-3">Auto for</h3>
            <ul className="space-y-2">
              {[
                "Startups",
                "Dual flow",
                "Automation templates",
                "Developers 2",
                "System status 2",
                "How an expert!",
                "Downloads",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-3">Resources</h3>
            <ul className="space-y-2">
              {[
                "Starting program",
                "Help center",
                "Customers.io",
                "Supporter",
                "Machines",
                "Java",
                "Stack",
                "Outreach",
                "Manual",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-3">Apre</h3>
            <ul className="space-y-2">
              {["Goal", "Outlook", "Typeform", "Zapier 2"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white hover:underline transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-start space-x-8 pt-6 border-t border-gray-800">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
