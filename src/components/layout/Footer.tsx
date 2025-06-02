import { FaLinkedin, FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Attio_Logo.png";

export default function Footer() {
  // Function to handle scroll to top on navigation
  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-gray-300 w-full py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Link to="/" onClick={handleNavigation}>
            <img src={logo} alt="Attio logo" className="h-8 mr-3" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-sm mb-3">
          <div>
            <h3 className="font-medium text-white mb-3">Platform</h3>
            <ul className="space-y-2">
              {[
                { name: "Refer a team", path: "/refer-a-team" },
                { name: "Changelog", path: "/changelog" },
                { name: "Linkedin extensions", path: "/linkedin-extensions" },
                { name: "Global extensions", path: "/global-extensions" },
                { name: "iOS app", path: "/ios-app" },
                { name: "Android app", path: "/android-app" },
                { name: "Security", path: "/security" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={handleNavigation}
                    className="text-gray-400 hover:text-white hover:underline transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-3">Impact from</h3>
            <ul className="space-y-2">
              {[
                { name: "Salesforce", path: "/salesforce" },
                { name: "Hubspot", path: "/hubspot" },
                { name: "Pipedrive", path: "/pipedrive" },
                { name: "Zoho", path: "/zoho" },
                { name: "Excel", path: "/excel" },
                { name: "CSV", path: "/csv" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={handleNavigation}
                    className="text-gray-400 hover:text-white hover:underline transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-3">Company</h3>
            <ul className="space-y-2">
              {[
                { name: "Customers", path: "/customers" },
                { name: "Blogs", path: "/blogs" },
                { name: "Carrers", path: "/carrers" },
                { name: "Manifesto", path: "/manifesto" },
                { name: "Become a partner", path: "/become-a-partner" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={handleNavigation}
                    className="text-gray-400 hover:text-white hover:underline transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-3">Attio for</h3>
            <ul className="space-y-2">
              {[
                { name: "Startups", path: "/startups" },
                { name: "Deal flow", path: "/deal-flow" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={handleNavigation}
                    className="text-gray-400 hover:text-white hover:underline transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-3">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: "Startup program", path: "/startup-program" },
                { name: "Help center", path: "/help-center" },
                { name: "Automation templates", path: "/automation-templates" },
                { name: "Developers", path: "/developers" },
                { name: "System status", path: "/system-status" },
                { name: "Hire an expert", path: "/hire-an-expert" },
                { name: "Downloads", path: "/downloads" },
                ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={handleNavigation}
                    className="text-gray-400 hover:text-white hover:underline transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-3">Apps</h3>
            <ul className="space-y-2">
              {[
                { name: "Gmail", path: "/gmail" },
                { name: "Outlook", path: "/outlook" },
                { name: "Customer.io", path: "/customer" },
                { name: "Segment", path: "/segment" },
                { name: "Mailchimp", path: "/mailchimp" },
                { name: "June", path: "/june" },
                { name: "Slack", path: "/slack" },
                { name: "Outreach", path: "/outreach" },
                { name: "Mixmax", path: "/mixmax" },
                { name: "Typeform", path: "/typeform" },
                { name: "Zapier", path: "/zapier" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={handleNavigation}
                    className="text-gray-400 hover:text-white hover:underline transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-start space-x-8 pt-6 border-t border-gray-800">
          <a
            href="https://linkedin.com/company/attio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}