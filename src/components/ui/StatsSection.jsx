import React from 'react';
import { User } from 'lucide-react';

const statsData = [
  { title: "Army Officer Serving", count: 7402, male: 3157, female: 4245 },
  { title: "Army Retired", count: 4804, male: 2118, female: 2686 },
  { title: "Army Soldier Serving", count: 17278, male: 7920, female: 9356 },
  { title: "Civilian", count: 90595, male: 43897, female: 46696 },
];

const StatsSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-navy-blue mb-8 uppercase tracking-wide border-l-4 border-army-green pl-4">
          Category Wise Students
        </h2>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item, index) => {
            // Logic: Alternate colors (Green, Blue, Green, Blue)
            const bgColor = index % 2 === 0 ? 'bg-army-green' : 'bg-navy-blue';

            return (
              <div 
                key={index}
                className={`${bgColor} rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="p-6">
                  
                  {/* 1. Category Title */}
                  <div className="mb-5 border-b border-white/20 pb-3">
                    <h3 className="text-white text-sm font-bold uppercase tracking-wider">
                      {item.title}
                    </h3>
                  </div>

                  {/* 2. Total Students Box (Transparent Background) */}
                  <div className="bg-white/10 rounded-lg py-4 px-2 text-center backdrop-blur-sm mb-5">
                    <p className="text-white/70 text-xs font-medium uppercase tracking-widest mb-1">
                      Total Students
                    </p>
                    <p className="text-3xl font-extrabold text-white">
                      {item.count.toLocaleString()}
                    </p>
                  </div>

                  {/* 3. Male / Female Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    
                    {/* Female Box */}
                    <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                      <div className="flex flex-col items-center">
                        <User className="w-5 h-5 text-white/80 mb-2" />
                        <span className="text-xl font-bold text-white block">
                          {item.female.toLocaleString()}
                        </span>
                        <p className="text-[10px] text-white/70 mt-1 font-medium uppercase">Female</p>
                      </div>
                    </div>

                    {/* Male Box */}
                    <div className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                      <div className="flex flex-col items-center">
                        <User className="w-5 h-5 text-white/80 mb-2" />
                        <span className="text-xl font-bold text-white block">
                          {item.male.toLocaleString()}
                        </span>
                        <p className="text-[10px] text-white/70 mt-1 font-medium uppercase">Male</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;