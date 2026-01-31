import { Wallet, Repeat, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    title: "Industry-Leading Split",
    icon: Wallet,
    badge: "50% Referral Bonus",
    badgeVariant: "default" as const,
    description: "We believe in true partnership. You keep 50% of the revenue for every user you refer to the platform.",
    highlight: false,
  },
  {
    title: "Recurring Revenue",
    icon: Repeat,
    badge: "Lifetime Income",
    badgeVariant: "secondary" as const,
    description: "Build a stable income stream. As long as your referral remains subscribed, you get paid every single month.",
    highlight: true,
  },
  {
    title: "Unlimited Growth",
    icon: TrendingUp,
    badge: "No Earnings Cap",
    badgeVariant: "secondary" as const,
    description: "There are no limits on how much you can earn. Refer as many professionals as you like and watch your income scale.",
    highlight: false,
  },
];

const PartnerSection = () => {
  return (
    <section id="partner" className="section-padding bg-muted">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Become a NexusFlow Affiliate
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Join our high-yield affiliate program and turn your network into a recurring revenue stream.
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

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    benefit.highlight
                      ? "bg-amber-100 dark:bg-amber-900/30"
                      : "bg-primary/10"
                  }`}
                >
                  <benefit.icon
                    className={benefit.highlight ? "text-amber-600" : "text-primary"}
                    size={24}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance & Terms Note */}
        <p className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto">
          Program terms are simple: Earn $10/month for every active $20/month subscription you refer.
        </p>
      </div>
    </section>
  );
};

export default PartnerSection;
