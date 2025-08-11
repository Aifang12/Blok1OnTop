import React from 'react';
import { Heart, Users, Home, Award, Trophy, Star, Medal, Target } from 'lucide-react';
import { images } from '../data/images';

const AboutUs: React.FC = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Star Rating Award 2025',
      description: 'Awarded for outstanding facilities and community engagement',
      year: '2025'
    },
    {
      icon: Star,
      title: '98% Satisfaction Rate',
      description: 'Consistently high resident satisfaction scores',
      year: '2023-2025'
    },
    {
      icon: Medal,
      title: 'Sustainability Award',
      description: 'Recognized for eco-friendly practices and green initiatives',
      year: '2025'
    },
    {
      icon: Target,
      title: 'Academic Excellence',
      description: 'Supporting students to achieve 95% academic success rate',
      year: '2022-2025'
    }
  ];

  return (
    <div className="min-h-screen px-8 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-medium mb-8 text-white">
            About Blok 1
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-normal leading-relaxed">
            More than just a dormitory, Blok 1 is a home where students come together to create lasting memories and lifelong friendships.
          </p>
        </div>

        {/* Achievements Section */}
        {/* Group Photo Section */}
        <div className="mb-20">
          <div className="bg-zinc-900 rounded-3xl p-8 overflow-hidden">
            <img
              src={images.group.allResidents}
              alt="Block 1 Residents - All Together"
              className="w-full h-96 object-cover rounded-2xl"
            />
            <div className="text-center mt-8">
              <h3 className="text-2xl font-medium text-white mb-4">Meet Our Family</h3>
              <p className="text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto">
                Our amazing community of 59 residents who make Blok 1 a home away from home. 
                Together, we create memories, support each other, and build lasting friendships.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-medium mb-12 text-center text-white">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-zinc-900 rounded-2xl p-6 text-center hover:bg-zinc-800 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-white mx-auto mb-4" />
                  <div className="text-sm text-zinc-400 mb-2 font-normal">{achievement.year}</div>
                  <h3 className="text-lg font-medium text-white mb-3">{achievement.title}</h3>
                  <p className="text-zinc-400 text-sm font-normal leading-relaxed">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div className="space-y-6">
            <div className="p-8">
              <Home className="w-8 h-8 text-white mb-6" />
              <h3 className="text-2xl font-medium mb-6 text-white">Our Story</h3>
              <p className="text-zinc-400 leading-relaxed font-normal">
                Blok 1 was established as a dormitory facility designed to provide students with a comfortable
                living environment that fosters both academic success and personal growth. 
              </p>
            </div>

            <div className="p-8">
              <Users className="w-8 h-8 text-white mb-6" />
              <h3 className="text-2xl font-medium mb-6 text-white">Our Community</h3>
              <p className="text-zinc-400 leading-relaxed font-normal">
                With 59 dedicated residents across 6 comfortable bedrooms, Block 1 creates the perfect balance between 
                privacy and community living. Our residents come from diverse backgrounds, creating a multicultural 
                environment that enhances everyone's experience.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8">
              <Heart className="w-8 h-8 text-white mb-6" />
              <h3 className="text-2xl font-medium mb-6 text-white">Our Values</h3>
              <ul className="text-zinc-400 space-y-3 font-normal">
                <li>• Respect and inclusivity for all residents</li>
                <li>• Academic excellence and mutual support</li>
                <li>• Sustainable and responsible living</li>
                <li>• Community engagement and collaboration</li>
                <li>• Personal growth and development</li>
              </ul>
            </div>

            <div className="p-8">
              <Award className="w-8 h-8 text-white mb-6" />
              <h3 className="text-2xl font-medium mb-6 text-white">What Makes Us Special</h3>
              <p className="text-zinc-400 leading-relaxed font-normal">
                Blok 1 stands out for its facilities, strong community bonds, and commitment to creating an 
                environment where every resident can thrive. Our comprehensive amenities and supportive atmosphere 
                make it more than just a place to live—it's a place to grow.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-medium mb-6 text-white">Join Our Community</h3>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Experience the perfect blend of comfort, community, and convenience. Blok 1 is more than a dormitory—it's your home away from home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;