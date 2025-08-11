import React from 'react';
import { Target, Lightbulb, Users, Star, Heart, Zap } from 'lucide-react';

interface MissionProps {
  setActiveSection?: (section: string) => void;
}

const Mission: React.FC<MissionProps> = ({ setActiveSection }) => {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'Building strong bonds and lasting friendships among residents',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Striving for the highest standards in all aspects of dorm life',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing new ideas and technologies to enhance living experiences',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'Creating a welcoming environment for all backgrounds and cultures',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Growth',
      description: 'Supporting personal and academic development of every resident',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Target,
      title: 'Purpose',
      description: 'Maintaining clear focus on our mission to serve our community',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen px-8 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-medium mb-8 text-white">
            Our Mission
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-normal leading-relaxed">
            Dedicated to creating an exceptional living environment that fosters growth, community, and academic excellence
          </p>
        </div>

        {/* Main Mission Statement */}
        <div className="bg-zinc-900 rounded-3xl p-16 mb-20 text-center">
          <Target className="w-12 h-12 text-white mx-auto mb-8" />
          <h2 className="text-3xl font-medium mb-8 text-white">Our Core Mission</h2>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-4xl mx-auto font-normal">
            To provide a premium dormitory experience that combines modern amenities with a supportive community environment, 
            enabling our residents to excel academically while developing lifelong friendships and personal growth. We are 
            committed to maintaining the highest standards of living while fostering an inclusive, innovative, and nurturing 
            atmosphere for all 10 members of our Block 1 family.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-4xl font-medium mb-16 text-center text-white">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-8 hover:bg-zinc-900 rounded-2xl transition-all duration-300 group cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-white mb-6" />
                  <h3 className="text-xl font-medium mb-4 text-white">{value.title}</h3>
                  <p className="text-zinc-400 font-normal leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-zinc-900 rounded-2xl p-8">
            <Lightbulb className="w-8 h-8 text-white mb-6" />
            <h3 className="text-2xl font-medium mb-6 text-white">Our Vision</h3>
            <p className="text-zinc-400 leading-relaxed font-normal">
              To be recognized as the premier dormitory facility that sets the standard for student living excellence, 
              where every resident feels valued, supported, and empowered to reach their full potential while contributing 
              to a vibrant, inclusive community.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8">
            <Target className="w-8 h-8 text-white mb-6" />
            <h3 className="text-2xl font-medium mb-6 text-white">Our Goals</h3>
            <ul className="text-zinc-400 space-y-3 font-normal">
              <li>• Maintain 100% resident satisfaction</li>
              <li>• Foster academic excellence and support</li>
              <li>• Create lasting friendships and connections</li>
              <li>• Continuously improve facilities and services</li>
              <li>• Promote sustainability and responsible living</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-zinc-900 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-medium mb-6 text-white">Join Our Mission</h3>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto font-normal leading-relaxed">
            Be part of a community that values excellence, growth, and meaningful connections. Together, we're building more than just a dormitory—we're creating a home.
          </p>
          <button 
            onClick={() => setActiveSection?.('about')}
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-all duration-300"
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mission;