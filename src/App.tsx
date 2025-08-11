import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Facilities from './components/Facilities';
import Mission from './components/Mission';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'about':
        return <AboutUs />;
      case 'facilities':
        return <Facilities />;
      case 'mission':
        return <Mission setActiveSection={setActiveSection} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-['Montserrat',_sans-serif] antialiased">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <main className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="min-h-screen">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;