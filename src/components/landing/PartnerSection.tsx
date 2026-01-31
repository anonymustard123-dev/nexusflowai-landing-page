import { Wallet, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    title: "Industry-Leading Split",
    icon: Wallet,
    badge: "50% Referral Bonus",
    badgeVariant: "default" as const,
    description: "We value our partners. You receive 50% of the subscription fee for every user you refer to the platform.",
    highlight: false,
    isHero: false,
  },
  {
    title: "Monthly Commissions",
    icon: null, // Replaced by text
    heroValue: "$10",
    heroLabel: "Per user / month",
    badge: "Lifetime Payouts",
    badgeVariant: "secondary" as const,
    description: "Earn every month. As long as your referral remains an active subscriber, you continue to receive your bonus.",
    highlight: true,
    isHero: true,
  },
  {
    title: "Uncapped Earnings",
    icon: TrendingUp,
    badge: "No Limits",
    badgeVariant: "secondary" as const,
    description: "There is no cap on your referrals. Whether you refer 5 users or 500, you are rewarded for every single active account.",
    highlight: false,
    isHero: false,
  },
];

const PartnerSection = () => {
  return (
    <section id="partner" className="section-padding bg-muted">
      <div className="container-narrow">
        {/* Header - Headline Hook Implementation */}
        <div className="text-center mb-12">
          {/* NEW: Affiliate Program Bubble */}
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Affiliate Program
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Earn a <span className="text-primary">$10 Monthly Bonus</span> for Every Referral
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the NexusFlow Affiliate Program. You keep 50% of the recurring subscription revenue for as long as your referral stays active.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`relative card-elevated p-6 transition-all duration-300 hover:shadow-lg ${
                benefit.highlight
                  ? "ring-2 ring-amber-400 bg-gradient-to-b from-amber-50/50 to-card dark:from-amber-900/10"
                  : ""
              }`}
            >
              {/* Badge */}
              <div className="mb-4">
                <Badge
                  variant={benefit.badgeVariant}
                  className={benefit.highlight ? "bg-amber-500 text-white hover:bg-amber-500" : ""}
                >
                  {benefit.badge}
                </Badge>
              </div>

              {/* Header / Hero Visual */}
              <div className="mb-6">
                {benefit.isHero ? (
                  // Typography Hero Implementation
                  <div className="py-2">
                    <span className="block text-5xl font-extrabold text-amber-600 dark:text-amber-500 tracking-tight">
                      {benefit.heroValue}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {benefit.heroLabel}
                    </span>
                  </div>
                ) : (
                  // Standard Icon Layout
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 mb-4">
                    {benefit.icon && <benefit.icon className="text-primary" size={24} />}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance & Terms Note */}
        <p className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto">
          Program terms: Earn a $10 monthly referral bonus for every active $20/month subscription attributed to your referral link.
        </p>
      </div>
    </section>
  );
};

export default PartnerSection;
