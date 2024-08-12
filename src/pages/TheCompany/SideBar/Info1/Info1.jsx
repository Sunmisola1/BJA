// src/Info1.js
import Images from "../../../../assets/img/images.jpg";

const Info1 = () => (
  <div>
    <div className="vision flex">
      <div className="vision-wrap">
    <h1 className="text-2xl font-bold mb-4">Vision statement</h1>
    <p>This is the detailed information about Info 1.</p>
    </div>
    <div className="vision-img">
      <img src={Images} alt="vision-img"  />
    </div>
    </div>
    {/* mission */}

    <div className="mission flex ">
    <div className="mission-wrap">
    <h1 className="text-2xl font-bold mb-4">Mission statement</h1>
    <p>This is the detailed information about Info 1.</p>
    </div>
    <div className="mission-img">
    <img src={Images} alt="vision-img"  />
    </div>
    </div>
  </div>
);

export default Info1;

