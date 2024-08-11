// src/InfoPage.js
import { useState } from 'react';
import Info1 from './Info1/Info1';
import Info2 from './Info2/Info2';
import Info3 from './Info3/Info3';

const SideBar = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const handleClick = (info) => {
    setSelectedInfo(info);
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 bg-gray-100 p-4 flex flex-col space-y-4">
        <div
          className="p-4 rounded-full bg-blue-500 text-white text-center cursor-pointer hover:bg-blue-700 transition duration-300"
          onClick={() => handleClick('info1')}
        >
          Info 1
        </div>
        <div
          className="p-4 rounded-full bg-blue-500 text-white text-center cursor-pointer hover:bg-blue-700 transition duration-300"
          onClick={() => handleClick('info2')}
        >
          Info 2
        </div>
        <div
          className="p-4 rounded-full bg-blue-500 text-white text-center cursor-pointer hover:bg-blue-700 transition duration-300"
          onClick={() => handleClick('info3')}
        >
          Info 3
        </div>
      </div>
      <div className="w-3/4 p-4">
        {selectedInfo === 'info1' && <Info1 />}
        {selectedInfo === 'info2' && <Info2 />}
        {selectedInfo === 'info3' && <Info3 />}
        {!selectedInfo && <p>Select an item to see information.</p>}
      </div>
    </div>
  );
};

export default SideBar;
