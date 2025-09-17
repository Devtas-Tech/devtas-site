import { Card } from "./ui/card";
import { Code, Zap, Target } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.15) 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            We Break Stuff, Then Build It Better
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            DEVTAS isn't just another tech company. We're digital rebels with a mission to reshape the future 
            through cutting-edge blockchain solutions, AI innovations, and technologies that haven't even been invented yet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Code className="h-8 w-8" />,
              title: "Code Craftsmen",
              description: "We write code like artists paint masterpieces—with precision, passion, and a touch of controlled chaos.",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              icon: <Zap className="h-8 w-8" />,
              title: "Innovation Addicts",
              description: "If it's cutting-edge, experimental, or slightly dangerous, we're probably already working on it.",
              gradient: "from-green-500 to-emerald-500"
            },
            {
              icon: <Target className="h-8 w-8" />,
              title: "Future Focused",
              description: "While others play catch-up, we're busy building the technologies that will define tomorrow.",
              gradient: "from-purple-500 to-pink-500"
            }
          ].map((item, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl p-6">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 mx-auto`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">{item.title}</h3>
              <p className="text-gray-400 text-center">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe technology should be audacious, transformative, and just a little bit rebellious. 
                At DEVTAS, we don't follow trends—we create them. Our team of digital misfits and tech visionaries 
                work tirelessly to push the boundaries of blockchain, AI, and emerging technologies.
              </p>
              <p className="text-gray-400 mt-4 italic">
                "We're not here to play it safe. We're here to rewrite the rules." - The DEVTAS Team
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 flex items-center justify-center border-2 border-blue-500/30">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                  <Zap className="h-16 w-16 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}