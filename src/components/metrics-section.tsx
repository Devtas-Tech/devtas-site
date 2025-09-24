import { TrendingUp, Users, Clock, Award } from "lucide-react";

export function MetricsSection() {
  const metrics = [
    {
      icon: Users,
      value: "50K+",
      label: "Active Users",
      description: "Developers and organizations building with our platform",
      color: "from-[#00ffff] to-[#0066ff]"
    },
    {
      icon: TrendingUp,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable infrastructure you can depend on",
      color: "from-[#39ff14] to-[#00ff80]"
    },
    {
      icon: Clock,
      value: "<100ms",
      label: "Response Time",
      description: "Lightning-fast processing for real-time applications",
      color: "from-[#ff00ff] to-[#8a2be2]"
    },
    {
      icon: Award,
      value: "15+",
      label: "Research Papers",
      description: "Published in top-tier conferences and journals",
      color: "from-[#8a2be2] to-[#ff00ff]"
    }
  ];

  const partners = [
    { name: "  Sony  ", logo: " Sony " },
    { name: " Botanix  ", logo: "Botanix" },
    { name: " Supra ", logo: "Supra" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f] relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,255,255,0.1) 0%, transparent 50%)`,
          backgroundSize: '150px 150px sm:200px sm:200px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Metrics Grid */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#00ffff]/20 to-[#39ff14]/20 border border-[#00ffff]/30 backdrop-blur-sm mb-4 sm:mb-6">
              <span className="text-[#00ffff] text-sm font-medium">📊 Impact & Performance</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#00ffff] to-[#39ff14] bg-clip-text text-transparent mb-4 sm:mb-6">
              Proven Results
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Numbers that showcase our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#2d2d44]/40 p-6 sm:p-8 rounded-2xl border border-[#2d2d44]/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#00ffff]/10"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${metric.color} p-3 sm:p-4 mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Value */}
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                    {metric.value}
                  </div>

                  {/* Label */}
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-[#00ffff] transition-colors duration-300">
                    {metric.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {metric.description}
                  </p>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            Trusted by Leading Organizations
          </h3>
          <p className="text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Collaborating with innovative companies to push the boundaries of technology
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#2d2d44]/60 border border-[#2d2d44]/50 flex items-center justify-center transition-all duration-300 hover:border-[#00ffff]/30 hover:shadow-lg hover:shadow-[#00ffff]/20">
                  <span className="text-base sm:text-lg font-bold text-gray-300 group-hover:text-[#00ffff] transition-colors duration-300">
                    {partner.logo}
                  </span>
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                  <div className="bg-[#1a1a2e] text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg border border-[#2d2d44] whitespace-nowrap">
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sliding animation effect */}
          <div className="mt-8 sm:mt-12 overflow-hidden">
            <div className="flex animate-slide space-x-6 sm:space-x-8">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-[#2d2d44]/40 to-[#1a1a2e]/60 border border-[#2d2d44]/30 flex items-center justify-center opacity-30"
                >
                  <span className="text-xs sm:text-sm font-medium text-gray-400">
                    {partner.logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </section>
  );
}