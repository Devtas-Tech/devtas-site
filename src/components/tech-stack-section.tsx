import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Bot, Database, Shield, Blocks, Cpu, Globe, Coffee, Code, GitBranch, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function TechStackSection() {
  const [stats, setStats] = useState({
    commits: 0,
    coffees: 0,
    projects: 0,
    linesOfCode: 0
  });

  // Animate counters on mount
  useEffect(() => {
    const targets = {
      commits: 47392,
      coffees: 12847,
      projects: 127,
      linesOfCode: 2847592
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setStats({
        commits: Math.floor(targets.commits * progress),
        coffees: Math.floor(targets.coffees * progress),
        projects: Math.floor(targets.projects * progress),
        linesOfCode: Math.floor(targets.linesOfCode * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const techStack = [
    { name: "Blockchain", icon: <Blocks className="h-6 w-6" />, gradient: "from-blue-500 to-cyan-500" },
    { name: "Artificial Intelligence", icon: <Bot className="h-6 w-6" />, gradient: "from-green-500 to-emerald-500" },
    { name: "Cybersecurity", icon: <Shield className="h-6 w-6" />, gradient: "from-purple-500 to-pink-500" },
    { name: "Quantum Computing", icon: <Cpu className="h-6 w-6" />, gradient: "from-orange-500 to-red-500" },
    { name: "Distributed Systems", icon: <Database className="h-6 w-6" />, gradient: "from-teal-500 to-blue-500" },
    { name: "Web3 Protocols", icon: <Globe className="h-6 w-6" />, gradient: "from-indigo-500 to-purple-500" }
  ];

  const funStats = [
    {
      icon: <GitBranch className="h-8 w-8" />,
      label: "Git Commits",
      value: stats.commits.toLocaleString(),
      subtitle: "Lines of rebellion"
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      label: "Coffees Consumed",
      value: stats.coffees.toLocaleString(),
      subtitle: "Fuel for innovation"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      label: "Projects Shipped",
      value: stats.projects.toString(),
      subtitle: "Dreams made real"
    },
    {
      icon: <Code className="h-8 w-8" />,
      label: "Lines of Code",
      value: `${(stats.linesOfCode / 1000000).toFixed(1)}M+`,
      subtitle: "Digital poetry"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Tech Stack */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Our Tech Arsenal
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            We don't just use technology—we bend it to our will. Here's the cutting-edge stack 
            that powers our digital revolution.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {techStack.map((tech, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 p-6 backdrop-blur-sm group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.gradient} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {tech.icon}
                  </div>
                </div>
                <h3 className="text-white text-sm text-center font-semibold">{tech.name}</h3>
              </Card>
            ))}
          </div>
        </div>

        {/* Fun Stats */}
        <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              By The Numbers
            </h3>
            <p className="text-gray-400">
              Some fun stats from our journey of controlled chaos and creative destruction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {funStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 flex items-center justify-center mb-4 mx-auto border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-12">
            <Badge variant="outline" className="border-blue-500/50 text-blue-400 px-4 py-2">React</Badge>
            <Badge variant="outline" className="border-green-500/50 text-green-400 px-4 py-2">Node.js</Badge>
            <Badge variant="outline" className="border-purple-500/50 text-purple-400 px-4 py-2">Python</Badge>
            <Badge variant="outline" className="border-orange-500/50 text-orange-400 px-4 py-2">Rust</Badge>
            <Badge variant="outline" className="border-teal-500/50 text-teal-400 px-4 py-2">Go</Badge>
            <Badge variant="outline" className="border-pink-500/50 text-pink-400 px-4 py-2">TypeScript</Badge>
            <Badge variant="outline" className="border-yellow-500/50 text-yellow-400 px-4 py-2">Solidity</Badge>
            <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 px-4 py-2">Web3.js</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}