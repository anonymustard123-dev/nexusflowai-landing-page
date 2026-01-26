import { Smartphone, Share, MoreVertical, Plus, Download } from "lucide-react";

const InstallSection = () => {
  return (
    <section id="install" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Mobile App
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Install as an App
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            NexusFlowAI is a Progressive Web App (PWA) that lives right on your home screen—no app store required.
          </p>
        </div>

        {/* Installation Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* iOS Card */}
          <div className="card-elevated p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-foreground flex items-center justify-center">
                  <Smartphone className="text-background" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">iOS</h3>
                  <p className="text-sm text-muted-foreground">iPhone & iPad</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Open in Safari</p>
                    <p className="text-sm text-muted-foreground">Visit the app URL in Safari browser</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div>
                      <p className="font-medium text-foreground">Tap the Share icon</p>
                      <p className="text-sm text-muted-foreground">Located at the bottom of Safari</p>
                    </div>
                    <Share className="text-primary mt-1" size={20} />
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div>
                      <p className="font-medium text-foreground">Add to Home Screen</p>
                      <p className="text-sm text-muted-foreground">Scroll down and tap the option</p>
                    </div>
                    <Plus className="text-primary mt-1" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Android Card */}
          <div className="card-elevated p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center">
                  <Smartphone className="text-accent-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Android</h3>
                  <p className="text-sm text-muted-foreground">All Android devices</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Open in Chrome</p>
                    <p className="text-sm text-muted-foreground">Visit the app URL in Chrome browser</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent font-bold text-sm">2</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div>
                      <p className="font-medium text-foreground">Tap the menu icon</p>
                      <p className="text-sm text-muted-foreground">Three dots in the top right</p>
                    </div>
                    <MoreVertical className="text-accent mt-1" size={20} />
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent font-bold text-sm">3</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div>
                      <p className="font-medium text-foreground">Install App</p>
                      <p className="text-sm text-muted-foreground">Or "Add to Home Screen"</p>
                    </div>
                    <Download className="text-accent mt-1" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallSection;
