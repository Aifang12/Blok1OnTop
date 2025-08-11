import React, { useState } from 'react';
import { Dumbbell, Shirt, Waves, Zap, Gamepad2, Building, Bed, Clock } from 'lucide-react';
import BedroomModal from './BedroomModal';
import { images } from '../data/images';

const Facilities: React.FC = () => {
  const [selectedBedroom, setSelectedBedroom] = useState<number | null>(null);

  const facilities = [
    {
      name: 'Gym Room',
      icon: Dumbbell,
      description: 'Fully equipped fitness center with modern exercise equipment',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      name: 'Ironing Room',
      icon: Shirt,
      description: 'Dedicated space for ironing and garment care',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Laundry Room',
      icon: Waves,
      description: 'Modern washing and drying facilities',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Prep Room',
      icon: Zap,
      description: 'Dedicated study and preparation room for academic activities',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Recreation Room',
      icon: Gamepad2,
      description: 'Entertainment area with games and relaxation space',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Barbershop',
      icon: Building,
      description: 'Professional barbershop services for residents',
      gradient: 'from-gray-500 to-slate-500'
    },
    {
      name: 'Prayer Room',
      icon: Building,
      description: 'Quiet space for spiritual reflection and serving as a gathering place for daily prayers, religious education, and community events.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const bedrooms = [
    { 
      id: 1, 
      name: 'Bedroom 1', 
      image: images.bedrooms.bedroom1,
      members: [
        { name: 'ADAM BIN FAIZALLIZAM ', role: 'Teknologi Reka Bentuk Grafik', image: images.members.adamMekk },
        { name: 'MOHAMAD ISKANDAR FARIS BIN RAZMI ', role: 'Teknologi Elektrik', image: images.members.abe },
        { name: 'MOHAMMAD FARISH HAQIMI BIN MOHD HALMIE ', role: 'Teknologi Reka Bentuk Grafik', image: images.members.imam },
        { name: 'MUHAMMAD AIDIL SYAZWAN BIN MUHAMAD ASMAWI', role: 'Teknologi Elektronik', image: images.members.aidil },
        { name: 'MUHAMMAD AMIRUL RAFIQUE BIN MUHAMMAD AFIFI', role: 'Teknologi Elektronik', image: images.members.amirul },
        // { name: 'MUHAMMAD ARIB AQHARI BIN MOHD REDZUAN', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MUHAMMAD AZIM BIN YUSSAFIRUL AMINNIZAM', role: 'Teknologi Komputeran', image: images.members.azim },
        { name: 'MUHAMMAD DZAFREL ASHAZ BIN NOR AZUAN', role: 'Teknologi Elektronik', image: images.members.zaf },
        { name: 'PUTERA ALIF HAIKAL BIN MAT TARMIZI @ SUFIAN', role: 'Teknologi Komputeran', image: images.members.putera },
        { name: 'THINEESH A/L MOHGANARAJOO', role: 'Teknologi Elektronik', image: images.members.thineesh }
      ]
    },
    { 
      id: 2, 
      name: 'Bedroom 2', 
      image: images.bedrooms.bedroom2,
      members: [
        { name: 'AHMAD ZULHAKIMI BIN ZAIRUL HISHAM', role: 'Teknologi Elektronik', image: images.members.alex },
        { name: 'HAZIQ ZAQUAN BIN MOHD MUZZAMMIL', role: 'Teknologi Komputeran', image: images.members.alex },
        { name: 'MUHAMMAD AFIF HAZIM BIN MOHD NAZRI', role: 'Teknologi Elektrik', image: images.members.afif },
        { name: 'MUHAMMAD AIRELL AIMRAN BIN MOHD SUFIAN', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MUHAMMAD DANIAL BIN SYARMINAZRUL', role: 'Teknologi Elektronik', image: images.members.alex },
        { name: 'MUHAMMAD FARISH ALTAF BIN MUHAMMAD EMRAN ', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MUHAMMAD NASRI BIN AZRULNIZAM', role: 'Teknologi Elektronik', image: images.members.alex },
        { name: 'MUHAMMAD ZAKWAN BIN MOHD ASHADI', role: 'Teknologi Elektronik', image: images.members.alex },
        { name: 'ZULHELMI BIN ABDUL HAMID', role: 'Teknologi Elektronik', image: images.members.alex },
        { name: 'Michael Rodriguez', role: 'Engineering Student', image: images.members.michael }
      ]
    },
    { 
      id: 3, 
      name: 'Bedroom 3', 
      image: images.bedrooms.bedroom3,
      members: [
        { name: 'ARVEENSHAARMA ROSHANANTHAN', role: 'Teknologi Komputeran', image: images.members.alex },
        { name: 'MUHAMMAD AIMAAN ASYRAAF BIN MOHD NUUR NAZRI', role: 'Teknologi Komputeran', image: images.members.alex },
        { name: 'MUHAMMAD ARIF PUTRA BIN MOHAMAD ZAKI', role: 'Teknologi Komputeran', image: images.members.alex },
        { name: 'RAJA MUHAMAD FARIS BIN RAJA MOKHZANI', role: 'Teknologi Komputeran', image: images.members.alex },
        { name: 'MUHAMMAD AMIRUL HAKIMI BIN ZUHARI', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MUHAMMAD AZFAR YADIY BIN ANUAR ', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MUHAMMAD IRFAN BIN SUARDI', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MUHAMAD SYAHMI NAQIUDDIN BIN MOHAMAD ASRI', role: 'Teknologi Elektronik', image: images.members.emily },
        { name: 'MUHAMMAD SAFRUL IKHWAN BIN ZAKARIA', role: 'Teknologi Elektronik', image: images.members.james }
      ]
    },
    { 
      id: 4, 
      name: 'Bedroom 4', 
      image: images.bedrooms.bedroom4,
      members: [
        { name: 'MUHAMMAD ADAM QHALIFF BIN HAFEZ ', role: 'Teknologi Reka Bentuk Grafik', image: images.members.alex },
        { name: 'MUHAMMAD AFIQ AKMAL BIN HELME', role: 'Teknologi Reka Bentuk Grafik', image: images.members.alex },
        { name: 'MUHAMMAD AIRIEL ASHRAF BIN MUHAMMAD RIZAL', role: 'Teknologi Reka Bentuk Grafik', image: images.members.alex },
        { name: 'HAKIM ASYRAAF BIN ABDUL RAHMAN ', role: 'Teknologi Elektronik', image: images.members.alex },
        { name: 'MUHAMMAD DANISH HAKIM BIN NOR RIZMAN ', role: 'Teknologi Elektronik', image: images.members.alex },
        { name: 'SHOFIRIN BIN ABDULLAH', role: 'Teknologi Elektronik', image: images.members.alex },
        { name: 'ZAIREEL BIN ABD RONI ', role: 'Teknologi Elektronik', image: images.members.alex },
        { name: 'DANIAL BIN MOHAMMAD HANIFF', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MOHAMMAD DANISH HAIKAL BIN ZAINOR AMIR RULLAH', role: 'Teknologi Elektrik', image: images.members.lisa },
        { name: 'MUHAMAD IRFAN SYAHMIE BIN MOHD FAISAL', role: 'Teknologi Elektrik', image: images.members.david }
      ]
    },
    { 
      id: 5, 
      name: 'Bedroom 5', 
      image: images.bedrooms.bedroom5,
      members: [
        { name: 'ADI SYAFARIN BIN MOHD SYARIMAN', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MUHAMMAD ASHRAFF BIN ZAIDI ', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MUHAMMAD ALIFF IMAN BIN MD REJAB', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MUHAMMAD AFIQ IMAN BIN MD REJAB', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MUHAMMAD YUNUS BIN ABD RAHMAN ', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MUHAMMAD SHAKIR ZUFAYRI HAZIQ BIN SHAHROL NIZAM', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'ADAM HARITH BIN MOHD SHAIFADIL ', role: 'Teknologi Reka Bentuk Grafik', image: images.members.alex },
        { name: 'SYAHRUL AQIL BIN SYAHRUL NIZAM', role: 'Teknologi Reka Bentuk Grafik', image: images.members.alex },
        { name: 'ALALIF BIN ALHAZMAN', role: 'Teknologi Reka Bentuk Grafik', image: images.members.rachel },
        { name: 'PRINCE CHIWEKPE DANIEL', role: 'Teknologi Reka Bentuk Grafik', image: images.members.chris }
      ]
    },
    { 
      id: 6, 
      name: 'Bedroom 6', 
      image: images.bedrooms.bedroom6,
      members: [
        { name: 'MUHAMMAD AFIY DANISH BIN MOHD AZAHARI', role: 'Teknologi Komputeran', image: images.members.alex },
        { name: 'MUHAMMAD AL SYAMER BIN MOHD YUSNI', role: 'Teknologi Komputeran', image: images.members.alex },
        { name: 'HUSNA HAFIY BIN HUSNIZA', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MUHAMMAD SHAHIRUL AIMAN BIN TUAIDI', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MOHAMAD DANIEL FARIS BIN KAMARULAZRI', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'KHAIRUL AQIF DARWISY BIN KHAIRUL AZHAR ', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MUHAMMAD DANISH AFIF BIN MOHD FARIZ', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MUHAMMAD ANIQ BIN IRMAN HADI', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'LUTH BIN MOHD RAFIZ', role: 'Teknologi Elektrik', image: images.members.alex },
        { name: 'MUHAMMAD AAKIF AQLAN BIN AZLAN', role: 'Teknologi Elektronik', image: images.members.kevin }
      ]
    }
  ];

  return (
    <div className="min-h-screen px-8 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-medium mb-8 text-white">
            Our Facilities
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-normal leading-relaxed">
            Discover our comprehensive range of modern amenities designed to enhance your living experience
          </p>
        </div>

        {/* Main Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="p-8 hover:bg-zinc-900 rounded-2xl transition-all duration-300 group cursor-pointer"
              >
                <Icon className="w-8 h-8 text-white mb-6" />
                <h3 className="text-xl font-medium mb-4 text-white">{facility.name}</h3>
                <p className="text-zinc-400 font-normal leading-relaxed">{facility.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bedrooms Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-medium mb-12 text-center text-white">
            Our Bedrooms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bedrooms.map((bedroom) => (
              <div
                key={bedroom.id}
                className="rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedBedroom(bedroom.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={bedroom.image}
                    alt={bedroom.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-medium text-white mb-2">{bedroom.name}</h3>
                    <div className="flex items-center text-zinc-300">
                      <Bed className="w-4 h-4 mr-2" />
                      <span className="font-normal">{bedroom.members.length} member{bedroom.members.length > 1 ? 's' : ''}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Facilities */}
        <div className="bg-zinc-900 rounded-2xl p-12 text-center">
          <Clock className="w-8 h-8 text-white mx-auto mb-6" />
          <h3 className="text-2xl font-medium mb-6 text-white">Coming Soon</h3>
          <p className="text-zinc-400 text-lg font-normal leading-relaxed">
            There are some facilities that will be provided later to enhance your living experience even further.
          </p>
        </div>
      </div>

      {/* Bedroom Modal */}
      {selectedBedroom && (
        <BedroomModal
          bedroom={bedrooms.find(b => b.id === selectedBedroom)!}
          onClose={() => setSelectedBedroom(null)}
        />
      )}
    </div>
  );
};

export default Facilities;