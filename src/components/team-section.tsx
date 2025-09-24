import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Alex Chen",
      role: "Chief Technology Officer",
      expertise: "AI & Machine Learning",
      bio: "Former Research Scientist at DeepMind with 15+ years in AI research. PhD in Computer Science from MIT.",
      image: "https://images.unsplash.com/photo-1737505598998-693328b57ae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBkaWdpdGFsJTIwZGFya3xlbnwxfHx8fHwxNzU4MTA4MjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-[#ff00ff] to-[#8a2be2]",
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Sarah Martinez",
      role: "Head of Blockchain Engineering",
      expertise: "Distributed Systems",
      bio: "Blockchain architect with expertise in DeFi protocols. Previously led engineering at Ethereum Foundation.",
      image: "https://images.unsplash.com/photo-1669054626218-f0b57b8ec632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGlnaXRhbCUyMG1hdHJpeCUyMGNvZGV8ZW58MXx8fHwxNzU4MTA4MjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-[#00ffff] to-[#0066ff]",
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Dr. Marcus Kim",
      role: "Lead Research Scientist",
      expertise: "Quantum Computing",
      bio: "Quantum computing pioneer with breakthrough research in quantum algorithms. Former IBM Quantum team lead.",
      image: "https://images.unsplash.com/photo-1695462131550-24be3156b25d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0ZXIlMjB0ZWNobm9sb2d5JTIwbGFifGVufDF8fHx8MTc1ODEwODIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-[#39ff14] to-[#00ff80]",
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Emma Thompson",
      role: "VP of Product Strategy",
      expertise: "Product Innovation",
      bio: "Product visionary who led transformative tech initiatives at Google and Tesla. Expert in emerging tech markets.",
      image: "https://images.unsplash.com/photo-1587569087747-addba755bda6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdGVjaCUyMGNpcmN1aXQlMjBib2FyZCUyMG5lb258ZW58MXx8fHwxNzU4MTA4MjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-[#8a2be2] to-[#ff00ff]",
      social: { github: "#", linkedin: "#", twitter: "#" }
    }
  ];

  const stats = [
    { number: "10+", label: "Team Members", description: "Across 12 countries" },
    // { number: "25+", label: "PhD Holders", description: "In AI, CS, and Physics" },
    { number: "100k+", label: "Users Served", description: "In emerging technologies" },
    { number: "50+", label: "Published Papers", description: "In top-tier conferences" },
    { number: "5", label: "Continents", description: "Global presence" }
  ];

  return (
    // <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] relative">
    //   {/* Background Effects */}
    //   <div className="absolute inset-0 overflow-hidden">
    //     <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-[#ff00ff]/5 to-[#8a2be2]/5 rounded-full blur-3xl"></div>
    //     <div className="absolute bottom-1/4 left-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-[#00ffff]/5 to-[#39ff14]/5 rounded-full blur-3xl"></div>
    //   </div>

    //   <div className="container mx-auto px-4 relative z-10">
    //     <div className="text-center mb-12 sm:mb-16">
    //       <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#8a2be2]/20 to-[#ff00ff]/20 border border-[#8a2be2]/30 backdrop-blur-sm mb-4 sm:mb-6">
    //         <span className="text-[#8a2be2] text-sm font-medium">👥 Innovation Team</span>
    //       </div>
          
    //       <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#8a2be2] to-[#ff00ff] bg-clip-text text-transparent mb-4 sm:mb-6">
    //         Meet the Visionaries
    //       </h2>
    //       <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
    //         Brilliant minds from top tech companies and research institutions, united by a passion for pushing technological boundaries
    //       </p>
    //     </div>

    //     {/* Team Stats */}
    //     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 max-w-5xl mx-auto">
    //       {stats.map((stat, index) => (
    //         <div key={index} className="text-center bg-gradient-to-br from-[#1a1a2e]/60 to-[#2d2d44]/30 p-4 sm:p-6 rounded-xl border border-[#2d2d44]/40 backdrop-blur-sm">
    //           <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#00ffff] to-[#39ff14] bg-clip-text text-transparent mb-1 sm:mb-2">
    //             {stat.number}
    //           </div>
    //           <div className="text-white font-medium text-sm sm:text-base mb-1">{stat.label}</div>
    //           <div className="text-gray-400 text-xs sm:text-sm">{stat.description}</div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Team Grid */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16 sm:mb-20">
    //       {teamMembers.map((member, index) => (
    //         <div key={index} className="group relative">
    //           <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#2d2d44]/40 p-4 sm:p-6 rounded-2xl border border-[#2d2d44]/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-opacity-80">
    //             {/* Profile Image with Tech Overlay */}
    //             <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl">
    //               <ImageWithFallback
    //                 src={member.image}
    //                 alt={member.name}
    //                 className="w-full h-48 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
    //               />
                  
    //               {/* Tech Pattern Overlay */}
    //               <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
    //               {/* Grid Pattern */}
    //               <div className="absolute inset-0 opacity-20">
    //                 <div className="w-full h-full" style={{
    //                   backgroundImage: `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
    //                   backgroundSize: '20px 20px'
    //                 }}></div>
    //               </div>

    //               {/* Floating Icon */}
    //               <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
    //                 <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${member.color} p-1.5 sm:p-2 shadow-lg backdrop-blur-sm`}>
    //                   <ExternalLink className="w-full h-full text-white" />
    //                 </div>
    //               </div>
    //             </div>

    //             {/* Member Info */}
    //             <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
    //               <div>
    //                 <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00ffff] transition-colors duration-300">
    //                   {member.name}
    //                 </h3>
    //                 <p className={`text-sm sm:text-base font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
    //                   {member.role}
    //                 </p>
    //                 <p className="text-xs sm:text-sm text-gray-400">{member.expertise}</p>
    //               </div>
                  
    //               <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
    //                 {member.bio}
    //               </p>
    //             </div>

    //             {/* Social Links */}
    //             <div className="flex space-x-2 sm:space-x-3 justify-center">
    //               {[
    //                 { icon: Github, url: member.social.github, label: "GitHub" },
    //                 { icon: Linkedin, url: member.social.linkedin, label: "LinkedIn" },
    //                 { icon: Twitter, url: member.social.twitter, label: "Twitter" }
    //               ].map((social, socialIndex) => (
    //                 <a
    //                   key={socialIndex}
    //                   href={social.url}
    //                   className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${member.color} p-2 sm:p-2.5 transition-all duration-300 hover:scale-110 hover:shadow-lg`}
    //                   aria-label={`${member.name} ${social.label}`}
    //                 >
    //                   <social.icon className="w-full h-full text-white" />
    //                 </a>
    //               ))}
    //             </div>

    //             {/* Hover Glow Effect */}
    //             <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Culture Section */}
    //     <div className="text-center">
    //       <div className="bg-gradient-to-r from-[#1a1a2e]/60 to-[#2d2d44]/30 p-6 sm:p-8 md:p-12 rounded-2xl border border-[#2d2d44]/40 backdrop-blur-sm max-w-4xl mx-auto">
    //         <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Culture of Innovation</h3>
            
    //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
    //           {[
    //             {
    //               title: "Research First",
    //               description: "20% time dedicated to exploring cutting-edge research and experimental projects",
    //               icon: "🔬"
    //             },
    //             {
    //               title: "Open Source",
    //               description: "Contributing to the global tech community through open-source initiatives",
    //               icon: "🌐"
    //             },
    //             {
    //               title: "Continuous Learning",
    //               description: "Learning stipend and conference attendance to stay at the forefront",
    //               icon: "📚"
    //             }
    //           ].map((value, index) => (
    //             <div key={index} className="text-center">
    //               <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{value.icon}</div>
    //               <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{value.title}</h4>
    //               <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{value.description}</p>
    //             </div>
    //           ))}
    //         </div>

    //         <div className="text-center">
    //           <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base px-4">
    //             Join a team where curiosity drives innovation and breakthrough thinking shapes the future.
    //           </p>
              
    //           <a
    //             href="#"
    //             className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00ffff] to-[#39ff14] text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00ffff]/20 hover:shadow-xl hover:shadow-[#00ffff]/30 text-sm sm:text-base"
    //           >
    //             View Open Positions
    //             <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <></>
  );
}