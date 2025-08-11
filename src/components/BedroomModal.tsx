import React from 'react';
import { X, User, GraduationCap } from 'lucide-react';

interface Member {
  name: string;
  role: string;
  image: string;
}

interface Bedroom {
  id: number;
  name: string;
  image: string;
  members: Member[];
}

interface BedroomModalProps {
  bedroom: Bedroom;
  onClose: () => void;
}

const BedroomModal: React.FC<BedroomModalProps> = ({ bedroom, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-medium text-white">
              {bedroom.name}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-zinc-800 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Room Image */}
          <div className="mb-8">
            <img
              src={bedroom.image}
              alt={bedroom.name}
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>

          {/* Members */}
          <div>
            <h3 className="text-2xl font-medium mb-8 text-white flex items-center">
              <User className="w-6 h-6 mr-3 text-white" />
              Room Members ({bedroom.members.length})
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bedroom.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 rounded-2xl p-6 hover:bg-zinc-700 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xl font-medium text-white mb-1">{member.name}</h4>
                      <div className="flex items-center text-zinc-400">
                        <GraduationCap className="w-4 h-4 mr-2 text-zinc-400" />
                        <span className="font-normal">{member.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {bedroom.members.length === 0 && (
              <div className="text-center py-8 text-zinc-400">
                <User className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="font-normal">No members assigned to this room yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedroomModal;