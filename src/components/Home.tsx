import React from 'react';
import { Building, Users, Star, ArrowRight } from 'lucide-react';
import { images } from '../data/images';

interface HomeProps {
  setActiveSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-8 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-16">
            {/* Hostel Image */}
            <div className="flex-1">
              <img
                src={images.hero.main}
                alt="Block 1 Hostel"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Title and Description */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-6xl lg:text-8xl font-medium mb-8 text-white tracking-tight">
                BLOK 1
              </h1>
              
              <p className="text-xl lg:text-2xl text-zinc-400 mb-12 leading-relaxed font-normal">
                  <b>Blok 1, Kolej Vokasional Balik Pulau </b> <br /> is a dormitory designed for students who value community and comfort. The perfect place to call home during your studies.

              </p>
              
              <button 
                onClick={() => setActiveSection('about')}
                className="group bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0"
              >
                Explore Our Dorm
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-12 justify-center">
            <div className="text-center">
              <div className="text-5xl font-medium text-white mb-2">10</div>
              <div className="text-sm text-zinc-400 font-normal">Room Members</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-medium text-white mb-2">6</div>
              <div className="text-sm text-zinc-400 font-normal">Bedrooms</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-medium text-white mb-2">8+</div>
              <div className="text-sm text-zinc-400 font-normal">Facilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-32 px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-medium text-center mb-20 text-white">
            Why Choose Block 1?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <Building className="w-8 h-8 text-white mx-auto mb-6" />
              <h3 className="text-xl font-medium mb-4 text-white">Modern Facilities</h3>
              <p className="text-zinc-400 font-normal leading-relaxed">State-of-the-art amenities including gym, recreation room, and more.</p>
            </div>
            
            <div className="text-center">
              <Users className="w-8 h-8 text-white mx-auto mb-6" />
              <h3 className="text-xl font-medium mb-4 text-white">Community Living</h3>
              <p className="text-zinc-400 font-normal leading-relaxed">Join a vibrant community of 10 dedicated residents.</p>
            </div>
            
            <div className="text-center">
              <Star className="w-8 h-8 text-white mx-auto mb-6" />
              <h3 className="text-xl font-medium mb-4 text-white">Premium Experience</h3>
              <p className="text-zinc-400 font-normal leading-relaxed">Enjoy a premium dormitory experience with top-tier amenities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;