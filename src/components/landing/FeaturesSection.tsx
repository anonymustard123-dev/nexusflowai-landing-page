import { Mic, Users, Calendar, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice-First Omni Tool",
    description:
      "Simply talk to the AI to create leads or query your database. No typing required. Just speak, and NexusFlow handles the rest.",
    highlight: "No typing required",
  },
  {
    icon: Users,
    title: "The Digital Rolodex",
    description:
      "A smart contact list that automatically organizes your leads by status. Instantly see who's a Lead, who's become a Client, and track every interaction.",
    highlight: "Smart organization",
  },
  {
    icon: Calendar,
    title: "Seamless Scheduling",
    description:
      "The AI generates calendar invites (.ics files) automatically for meetings. Share schedules with clients instantly—no back-and-forth emails.",
    highlight: "Automatic invites",
  },
  {
    icon: BarChart3,
    title: "Intelligence Reports",
    description:
      "Get instant analytics on conversion rates and pipeline health. Understand your sales performance at a glance with AI-powered insights.",
    highlight: "Real-time insights",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-muted">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A CRM built for the way you actually work—on the move, talking to clients, closing deals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group card-elevated p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                {feature.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
