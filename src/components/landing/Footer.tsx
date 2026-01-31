import { Link } from "react-router-dom";
import logo from "@/assets/nexusflow-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="NexusFlowAI" 
              className="h-10 w-auto brightness-0 invert opacity-80"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/terms"
              className="text-background/70 hover:text-background transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 mt-8 pt-8">
          <p className="text-center text-sm text-background/50">
            © 2026 NexusFlowAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
