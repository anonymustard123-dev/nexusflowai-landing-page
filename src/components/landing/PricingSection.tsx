import { Check, Mic, Users, Database, ArrowRight } from "lucide-react";

const features = [
  { icon: Users, text: "Unlimited leads & contacts" },
  { icon: Mic, text: "AI voice processing" },
  { icon: Database, text: "Full pipeline storage" },
  { icon: Check, text: "Calendar integration" },
  { icon: Check, text: "Intelligence reports" },
  { icon: Check, text: "Mobile PWA access" },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage your sales pipeline.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto">
          <div className="card-elevated p-8 sm:p-10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Check size={14} />
                All features included
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-bold text-foreground">$20</span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  Cancel anytime. No hidden fees.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-accent" size={12} />
                    </div>
                    <span className="text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://app.nexusflowapp.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center gap-2"
              >
                Get Started Now
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
