import { Users, TrendingUp, Award, Check } from "lucide-react";

const tiers = [
  {
    name: "Standard",
    icon: Users,
    commission: "15%",
    earning: "$2.25",
    requirement: "Start earning immediately",
    description: "Direct referral earnings",
    isActive: true,
  },
  {
    name: "Scout Status",
    icon: TrendingUp,
    commission: "17%",
    earning: "$2.55",
    requirement: "10 active referrals",
    description: "+2% bonus unlocked",
    isActive: false,
  },
  {
    name: "Elite Status",
    icon: Award,
    commission: "20%",
    earning: "$3.00",
    requirement: "100 active referrals",
    description: "+5% bonus unlocked",
    isActive: false,
  },
];

const PartnerSection = () => {
  return (
    <section id="partner" className="section-padding bg-muted">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Grow with NexusFlow
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Earn commissions by referring other professionals to the platform.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`card-elevated p-6 text-center relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                tier.isActive ? "ring-2 ring-primary" : ""
              }`}
            >
              {tier.isActive && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    Start Here
                  </span>
                </div>
              )}

              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <tier.icon 
                  className={tier.isActive ? "text-primary" : "text-muted-foreground"} 
                  size={28} 
                />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{tier.name}</h3>
              
              <div className="mb-4">
                <span className="text-3xl font-bold text-foreground">{tier.commission}</span>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <div className="py-3 px-4 rounded-xl bg-accent/5 mb-4">
                <p className="text-sm font-medium text-accent">
                  Earn {tier.earning} per referral
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Check size={16} className="text-accent" />
                <span>{tier.requirement}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-lg mx-auto">
          Commission is calculated based on the monthly subscription of each active referral.
        </p>
      </div>
    </section>
  );
};

export default PartnerSection;
