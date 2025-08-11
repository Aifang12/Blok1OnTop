import React from 'react';
import { Home, Users, Building, Target, Phone, Menu, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Users },
    { id: 'facilities', label: 'Facilities', icon: Building },
    { id: 'mission', label: 'Our Mission', icon: Target },
    { id: 'contact', label: 'Contact Us', icon: Phone },
  ];

  return (
    <>
      {/* Logo/Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed top-6 left-6 z-50 p-3 bg-gradient-to-r from-[#977DFF] to-[#0033FF] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-90" />
        ) : (
          <Menu className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-180" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <nav className={`fixed left-0 top-0 h-full w-64 bg-zinc-900/95 backdrop-blur-xl border-r border-zinc-800 transform transition-transform duration-300 z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 pt-20">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-semibold text-black">B1</span>
            </div>
            <h1 className="text-lg font-semibold text-white">
              BLOK 1
            </h1>
            <p className="text-sm text-zinc-400 mt-1 font-normal">Kolej Kediaman KVBP</p>
          </div>

          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveSection(item.id);
                      onToggle();
                    }}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#977DFF]/20 hover:to-[#0033FF]/20 hover:scale-105 ${
                      activeSection === item.id 
                        ? 'bg-zinc-800' 
                        : ''
                    }`}
                  >
                    <Icon className="w-5 h-5 text-zinc-400" />
                    <span className="text-white font-normal">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;