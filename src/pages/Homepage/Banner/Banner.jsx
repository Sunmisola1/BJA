import { useState,useEffect } from "react";

const BannerSection = () => {
    const [counters, setCounters] = useState([
      { id: 1, icons:<svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.0002 37.3333C35.6828 37.3333 39.0162 35.84 41.4295 33.4267C43.8402 31.016 45.3335 27.6827 45.3335 24C45.3335 20.3173 43.8402 16.984 41.4295 14.5733C39.0162 12.16 35.6828 10.6667 32.0002 10.6667C28.3175 10.6667 24.9842 12.16 22.5708 14.5733C20.1602 16.984 18.6668 20.3173 18.6668 24C18.6668 27.6827 20.1602 31.016 22.5708 33.4267C23.8077 34.667 25.2774 35.6506 26.8956 36.321C28.5138 36.9915 30.2486 37.3355 32.0002 37.3333ZM53.3335 40C54.2095 40.0017 55.0772 39.8305 55.8868 39.4961C56.6964 39.1617 57.432 38.6707 58.0515 38.0513C58.6709 37.4319 59.1619 36.6963 59.4963 35.8866C59.8307 35.077 60.0019 34.2093 60.0002 33.3333C60.0002 31.4933 59.2562 29.8267 58.0482 28.6187C57.4297 27.9987 56.6948 27.5071 55.8857 27.1721C55.0765 26.8371 54.2092 26.6653 53.3335 26.6667C52.4575 26.6649 51.5898 26.8361 50.7802 27.1705C49.9706 27.505 49.2349 27.996 48.6155 28.6154C47.9961 29.2348 47.5051 29.9704 47.1707 30.78C46.8363 31.5897 46.6651 32.4574 46.6668 33.3333C46.6654 34.2092 46.8369 35.0767 47.1714 35.8862C47.506 36.6957 47.997 37.4312 48.6163 38.0505C49.2357 38.6698 49.9711 39.1608 50.7806 39.4954C51.5901 39.8299 52.4576 40.0014 53.3335 40ZM53.3335 41.5733C49.7842 41.5733 47.1148 42.656 45.5548 44.1547C42.5815 41.7093 37.8802 40 32.0002 40C25.9575 40 21.3468 41.728 18.4215 44.1707C16.8322 42.664 14.1335 41.5733 10.6668 41.5733C4.83216 41.5733 1.3335 44.48 1.3335 47.392C1.3335 48.8453 4.83216 50.304 10.6668 50.304C12.2775 50.304 13.7228 50.168 14.9948 49.9493L14.8882 50.6693C14.8882 53.336 21.3042 56.0027 32.0002 56.0027C42.0322 56.0027 49.1122 53.336 49.1122 50.6693L49.0588 49.9893C50.2935 50.184 51.7122 50.304 53.3335 50.304C58.8028 50.304 62.6668 48.8453 62.6668 47.392C62.6668 44.48 59.0055 41.5733 53.3335 41.5733ZM10.6668 40C12.5068 40 14.1735 39.256 15.3815 38.048C16.0015 37.4295 16.4931 36.6946 16.8281 35.8855C17.1631 35.0764 17.3348 34.209 17.3335 33.3333C17.3353 32.4574 17.164 31.5897 16.8296 30.78C16.4952 29.9704 16.0042 29.2348 15.3848 28.6154C14.7654 27.996 14.0298 27.505 13.2201 27.1705C12.4105 26.8361 11.5428 26.6649 10.6668 26.6667C9.79096 26.6653 8.92342 26.8367 8.11395 27.1713C7.30447 27.5058 6.56899 27.9968 5.94965 28.6161C5.33031 29.2355 4.83931 29.971 4.50477 30.7804C4.17024 31.5899 3.99876 32.4575 4.00016 33.3333C3.99841 34.2093 4.16964 35.077 4.50405 35.8866C4.83846 36.6963 5.32946 37.4319 5.94887 38.0513C6.56827 38.6707 7.3039 39.1617 8.11353 39.4961C8.92316 39.8305 9.79086 40.0017 10.6668 40Z" fill="white"/> </svg> , start: 1, end: 10, text: 'Team'},
      { id: 2, icons:<svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.3335 32C31.2162 32 36.0002 27.216 36.0002 21.3333C36.0002 15.4507 31.2162 10.6667 25.3335 10.6667C19.4508 10.6667 14.6668 15.4507 14.6668 21.3333C14.6668 27.216 19.4508 32 25.3335 32ZM29.3335 34.6667H21.3335C12.5095 34.6667 5.3335 41.8427 5.3335 50.6667V53.3333H45.3335V50.6667C45.3335 41.8427 38.1575 34.6667 29.3335 34.6667Z" fill="white"/><path d="M44.2774 29.4613C45.9015 26.6936 46.6029 23.4808 46.28 20.288C45.8027 15.5307 43.1467 11.3253 38.8054 8.448L35.8587 12.8907C38.8427 14.8693 40.6587 17.688 40.9734 20.8213C41.1185 22.2776 40.9372 23.7479 40.4427 25.1253C39.9482 26.5027 39.1529 27.7525 38.1147 28.784L34.936 31.9627L39.2507 33.2293C50.536 36.536 50.6667 47.8853 50.6667 48H56C56 43.2293 53.4507 33.9067 44.2774 29.4613Z" fill="white"/></svg>,start: 2, end: 10, text: 'Trained' },
      { id: 3, icons:<svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M57.046 47.626C56.01 46.606 43.456 41.75 41.178 40.834C38.912 39.934 38.008 37.44 38.008 37.44C38.008 37.44 36.988 38.004 36.988 36.42C36.988 34.834 38.008 37.44 39.028 31.324C39.028 31.324 41.858 30.53 41.296 23.964H40.616C40.616 23.964 42.316 16.944 40.616 14.568C38.91 12.192 38.242 10.608 34.496 9.47201C30.7559 8.33801 32.1159 8.56401 29.3999 8.68001C26.6799 8.79401 24.4159 10.266 24.4159 11.056C24.4159 11.056 22.7159 11.17 22.0399 11.85C21.3599 12.53 20.2279 15.698 20.2279 16.49C20.2279 17.282 20.7939 22.61 21.3599 23.738L20.6859 23.958C20.1199 30.526 22.9499 31.322 22.9499 31.322C23.9699 37.438 24.9899 34.832 24.9899 36.418C24.9899 38.002 23.9699 37.438 23.9699 37.438C23.9699 37.438 23.0639 39.93 20.7999 40.832C18.5359 41.738 5.96794 46.606 4.94594 47.624C3.92594 48.664 4.03994 53.416 4.03994 53.416H28.1119L29.8679 46.496L28.3079 44.936L30.9939 42.246L33.68 44.934L32.1199 46.494L33.8759 53.414H57.948C57.948 53.414 58.074 48.658 57.042 47.62L57.046 47.626Z" fill="white"/></svg>,start: 3, end: 45, text: 'Projects' },
      { id: 4, icons:<svg width="40" height="40" viewBox="0 0 46 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.0001 0.142853C28.9106 0.142853 34.5791 2.49081 38.7584 6.67019C42.9378 10.8496 45.2858 16.518 45.2858 22.4286C45.2858 31.8457 38.6686 42.1086 25.6058 53.3268C24.8794 53.9508 23.9534 54.2935 22.9958 54.2927C22.0382 54.2918 21.1128 53.9475 20.3875 53.3223L19.5235 52.5726C7.03893 41.6469 0.714355 31.6354 0.714355 22.4286C0.714355 16.518 3.06231 10.8496 7.24169 6.67019C11.4211 2.49081 17.0895 0.142853 23.0001 0.142853ZM23.0001 13.8571C20.7268 13.8571 18.5466 14.7602 16.9392 16.3677C15.3317 17.9751 14.4286 20.1553 14.4286 22.4286C14.4286 24.7018 15.3317 26.882 16.9392 28.4895C18.5466 30.0969 20.7268 31 23.0001 31C25.2734 31 27.4535 30.0969 29.061 28.4895C30.6684 26.882 31.5715 24.7018 31.5715 22.4286C31.5715 20.1553 30.6684 17.9751 29.061 16.3677C27.4535 14.7602 25.2734 13.8571 23.0001 13.8571Z" fill="white"/></svg>, start: 1, end: 10, text: 'Location' },
    ]);  
    useEffect(() => {
      const interval = setInterval(() => {
        setCounters((prevCounters) =>
          prevCounters.map((counter) => {
            const { start, end } = counter;
            let newCount = counter.start + 1;
            if (newCount > end) {
              newCount = start; // Reset to start value if reached end
            }
            return { ...counter, start: newCount };
          })
        );
      }, 100); // Adjust the interval as needed
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="mx-auto  bg-blue-950 bammer"> 
      <div className="our-impact">
        
        <h1 className="text-2xl font-roboto ml-16 font-bold text-white ">Our Impact</h1>
        </div> 
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 ">
          {counters.map((counter) => ( 
            <div key={counter.id} className=" border-none md:border-r border-gray-300  ">
                <div className="flex flex-col  ">

                <span className="text-xl head-text text-white font-semibold ">{counter.icons}</span>
                  <h3 className="text-xl head-text  font-bold text-green-600">{counter.start}+</h3>
                 <p className="para-text text-lg">{counter.text}</p>
            </div></div>
          ))}
        </div>
      </div>
    );
  };

  export default BannerSection