import React from 'react';
import { useScaleIn } from '../hooks/useScrollReveal';
import { Github, Linkedin, User } from 'lucide-react';

const TeamSection: React.FC = () => {
  const card1Animation = useScaleIn(0.3);
  const card2Animation = useScaleIn(0.4);
  const card3Animation = useScaleIn(0.5);

  const teamMembers = [
    {
      name: "Sagar Chavan",
      title: "Founder & Full Stack Developer",
      bio: "Crafting intelligent systems for modern workflows.",
      animation: card1Animation,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Alex Rodriguez",
      title: "AI/ML Engineer",
      bio: "Building the brain behind Zenjira's intelligence.",
      animation: card2Animation,
      linkedin: "#",
      github: "#"
    },
    {
      name: "Sarah Kim",
      title: "Product Designer",
      bio: "Designing experiences that developers love.",
      animation: card3Animation,
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet the People Behind <span className="text-purple-400">Zenjira</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            A passionate team of developers, designers, and AI enthusiasts building the future of project management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={member.animation.ref}
              style={member.animation.style}
              className="group"
            >
              <div className="bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 rounded-2xl p-8 border border-neutral-700/50 backdrop-blur-sm hover:border-neutral-600/70 transition-all duration-300 text-center hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors">
                  <User className="w-8 h-8 text-neutral-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-3">{member.title}</p>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">{member.bio}</p>
                
                <div className="flex justify-center gap-4">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-neutral-800/50 hover:bg-blue-600/20 border border-neutral-600/50 hover:border-blue-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group/icon"
                  >
                    <Linkedin className="w-4 h-4 text-neutral-400 group-hover/icon:text-blue-400" />
                  </a>
                  <a
                    href={member.github}
                    className="w-10 h-10 bg-neutral-800/50 hover:bg-purple-600/20 border border-neutral-600/50 hover:border-purple-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group/icon"
                  >
                    <Github className="w-4 h-4 text-neutral-400 group-hover/icon:text-purple-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;