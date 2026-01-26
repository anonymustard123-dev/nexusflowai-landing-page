import { Mic, Users, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <Mic size={16} />
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
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              The voice-powered AI CRM designed for salespeople on the go. 
              Manage your pipeline, schedule meetings, and update client details just by speaking.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="https://lifestyle-lure-production.up.railway.app/"
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

          {/* Phone Mockup */}
          <div 
            className="relative flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="h-12 bg-secondary flex items-center justify-center">
                    <div className="w-20 h-6 bg-foreground rounded-full" />
                  </div>
                  
                  {/* App content */}
                  <div className="p-6 space-y-6">
                    {/* Header */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-foreground">NexusFlowAI</h3>
                      <p className="text-xs text-muted-foreground">Your Digital Rolodex</p>
                    </div>

                    {/* Rolodex Card */}
                    <div className="card-elevated p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Sarah Johnson</p>
                          <p className="text-xs text-muted-foreground">Enterprise Lead</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                          Client
                        </span>
                        <span className="px-2 py-1 rounded-full bg-secondary text-muted-foreground text-xs">
                          $45K Pipeline
                        </span>
                      </div>
                    </div>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="card-elevated p-3 text-center">
                        <p className="text-2xl font-bold text-foreground">24</p>
                        <p className="text-xs text-muted-foreground">Active Leads</p>
                      </div>
                      <div className="card-elevated p-3 text-center">
                        <p className="text-2xl font-bold text-accent">68%</p>
                        <p className="text-xs text-muted-foreground">Conversion</p>
                      </div>
                    </div>
                  </div>

                  {/* Mic Button */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary rounded-full animate-pulse-ring" />
                      <button className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <Mic className="text-primary-foreground" size={28} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating animation */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-2xl animate-float" style={{ animationDelay: "0s" }} />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-2xl animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
