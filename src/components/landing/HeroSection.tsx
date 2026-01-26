import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Voice-Powered AI CRM
          </div>
          
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Gravity for leads.{" "}
            <span className="gradient-text">Flow for deals.</span>
          </h1>
          
          <p 
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            The voice-powered AI CRM designed for salespeople on the go. 
            Manage your pipeline, schedule meetings, and update client details just by speaking.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://app.nexusflowapp.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-foreground bg-secondary hover:bg-secondary/80 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
