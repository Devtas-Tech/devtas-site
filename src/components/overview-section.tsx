import { Brain, Link, Zap } from "lucide-react";

export function OverviewSection() {
  const pillars = [
    {
      icon: Link,
      title: "Web3",
      description: "Building decentralized infrastructure that transforms how digital value is created, managed, and transferred across networks.",
      color: "from-[#00ffff] to-[#0066ff]",
      shadowColor: "shadow-[#00ffff]/20"
    },
    {
      icon: Brain,
      title: "AI",
      description: "Developing intelligent systems that augment human capabilities and unlock new possibilities in automation and decision-making.",
      color: "from-[#ff00ff] to-[#8a2be2]",
      shadowColor: "shadow-[#ff00ff]/20"
    },
    {
      icon: Zap,
      title: "Emerging Tech",
      description: "Pioneering the next frontier of technology, from quantum computing to IoT, creating solutions for tomorrow's challenges.",
      color: "from-[#39ff14] to-[#00ff80]",
      shadowColor: "shadow-[#39ff14]/20"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-[#00ffff]/10 to-[#39ff14]/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-[#8a2be2]/10 to-[#ff00ff]/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#00ffff] to-[#39ff14] bg-clip-text text-transparent mb-4 sm:mb-6">
            Our Technology Pillars
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Three core domains where we push the boundaries of innovation and create meaningful impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#2d2d44]/40 p-6 sm:p-8 rounded-2xl border border-[#2d2d44]/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-[#00ffff]/30 ${pillar.shadowColor} hover:shadow-2xl`}
              >
                {/* Gradient background effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${pillar.color} p-3 sm:p-4 mb-4 sm:mb-6 shadow-lg ${pillar.shadowColor} group-hover:shadow-xl transition-all duration-300`}>
                  <IconComponent className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#00ffff] transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {pillar.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#00ffff]/20 to-[#39ff14]/20 border border-[#00ffff]/30 backdrop-blur-sm">
            <span className="text-[#00ffff] font-medium text-sm sm:text-base">🔬 Discover how we're shaping the future of technology</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}