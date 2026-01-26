import { Users, TrendingUp, Award, ArrowRight, ChevronRight, Zap } from "lucide-react";

const tiers = [
  {
    level: 1,
    name: "Standard",
    icon: Users,
    requirement: "Start immediately",
    earnings: {
      personal: "15%",
      perSale: "$2.25",
    },
    passive: null,
    tagline: "Earn cash for every person you refer directly.",
    isActive: true,
  },
  {
    level: 2,
    name: "Scout Status",
    icon: TrendingUp,
    requirement: "10 Active Referrals",
    earnings: {
      personal: "17%",
      perSale: "$2.55",
    },
    passive: {
      rate: "2%",
      perSale: "$0.30",
      description: "override on every sale made by people you referred",
    },
    tagline: "Unlock passive income from your network.",
    isActive: false,
  },
  {
    level: 3,
    name: "Elite Status",
    icon: Award,
    requirement: "100 Active Referrals",
    earnings: {
      personal: "22%",
      perSale: "$3.30",
    },
    passive: {
      rate: "7%",
      perSale: "$1.05",
      description: "override on your entire downline network",
    },
    tagline: "Maximum earnings. Capture the full 7% override pool.",
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
            Unlock higher tiers and passive income as your network grows.
          </p>
        </div>

        {/* Progression Path */}
        <div className="max-w-5xl mx-auto">
          {/* Progress Line (Desktop) */}
          <div className="hidden lg:flex items-center justify-between mb-8 px-12">
            <div className="flex-1 flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                1
              </div>
              <div className="flex-1 h-1 bg-border relative overflow-hidden mx-2">
                <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-primary to-primary/30" />
              </div>
            </div>
            <div className="flex-1 flex items-center">
              <div className="w-10 h-10 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center text-muted-foreground font-bold text-sm">
                2
              </div>
              <div className="flex-1 h-1 bg-border mx-2" />
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center text-muted-foreground font-bold text-sm">
                3
              </div>
            </div>
          </div>

          {/* Tier Cards */}
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative card-elevated p-6 transition-all duration-300 hover:shadow-lg ${
                  tier.isActive ? "ring-2 ring-primary" : ""
                }`}
              >
                {/* Level Badge (Mobile) */}
                <div className="lg:hidden absolute -top-3 left-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    tier.isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-muted-foreground"
                  }`}>
                    Level {tier.level}
                  </span>
                </div>

                {tier.isActive && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Start Here
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center gap-3 mb-4 mt-2 lg:mt-0">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    tier.isActive 
                      ? "bg-primary/10" 
                      : "bg-secondary"
                  }`}>
                    <tier.icon 
                      className={tier.isActive ? "text-primary" : "text-muted-foreground"} 
                      size={24} 
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{tier.name}</h3>
                    <p className="text-xs text-muted-foreground">{tier.requirement}</p>
                  </div>
                </div>

                {/* Earnings */}
                <div className="space-y-3 mb-4">
                  {/* Personal Earnings */}
                  <div className="p-3 rounded-xl bg-secondary/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">Personal Sales</span>
                      <span className="text-xl font-bold text-foreground">{tier.earnings.personal}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Earn <span className="font-semibold text-foreground">{tier.earnings.perSale}</span> per sale
                    </p>
                  </div>

                  {/* Passive Earnings */}
                  {tier.passive ? (
                    <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="text-accent" size={16} />
                        <span className="text-sm font-medium text-accent">Passive Override</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Up to</span>
                        <span className="text-lg font-bold text-accent">{tier.passive.rate}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Earn <span className="font-semibold text-accent">{tier.passive.perSale}</span> {tier.passive.description}
                      </p>
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl bg-secondary/30 border border-dashed border-border">
                      <p className="text-xs text-muted-foreground text-center">
                        Passive overrides unlock at Scout Status
                      </p>
                    </div>
                  )}
                </div>

                {/* Tagline */}
                <p className="text-sm text-muted-foreground italic">
                  "{tier.tagline}"
                </p>

                {/* Arrow to next tier (Mobile) */}
                {index < tiers.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4 -mb-10">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <ChevronRight className="text-muted-foreground rotate-90" size={18} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Unlock Path Callout */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/10">
              <ArrowRight className="text-primary" size={18} />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Grow your network</span> to unlock higher commissions and passive income
              </p>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-lg mx-auto">
          Commission is calculated based on the $15/month subscription of each active referral.
        </p>
      </div>
    </section>
  );
};

export default PartnerSection;