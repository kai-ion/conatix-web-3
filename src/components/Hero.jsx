import { useState } from 'react';
import styles from '../style';
import { discount, robot, Cvideo } from '../assets';

const Hero = () => {
  const [videoPlayedOnce, setVideoPlayedOnce] = useState(false);

  const handleVideoEnd = () => {
    setVideoPlayedOnce(true);
  };

  const handleSkipButtonClick = () => {
    const video = document.querySelector('video');
    if (video) {
      // Skip the video to the end
      video.currentTime = video.duration;
    }
  };

  return (
    <section id="home" className={`flex md:flex-row flex-col relative`}>
      <div className={`flex-1 ${styles.flexStart} relative flex-grow xl:px-0 sm:px-0 z-3`}>
        <div className="relative">
          <video autoPlay muted onEnded={handleVideoEnd} className={`object-cover bg-black w-full h-full ${videoPlayedOnce ? 'fade-out' : ''}`}>
            <source src={Cvideo} type="video/mp4" alt="conatixvideo" />
            Your browser does not support the video tag.
          </video>
          <div className={`absolute inset-0 flex items-center justify-center ${videoPlayedOnce ? 'fade-out' : ''}`}>
            <button onClick={handleSkipButtonClick} className="bg-transparent border border-white text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-white hover:text-black transition duration-300 bottom-10 right-10 absolute">Skip</button>
          </div>
        </div>
      </div>
      {videoPlayedOnce && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="main-content">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-4">Conatix pioneers the application of multiple <span className="highlight">advanced</span> technologies</h1>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4">Conatix pioneers the application of multiple advanced technologies – artificial intelligence, anti-encryption, 3D visualization – to cybersecurity monitoring and detection – and to the holy grail of cybersecurity: prevention.</p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-4">Our <span className="highlight">2-in-1 patented malware detector and ransomware blocker</span> for business computers is available now for testing by selected companies.</p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-4">Our <span className="highlight">insider fraud and suspicious activity detector</span> for secure wireless networks (connected cars, planes, drones) is in development for release in mid-2024.</p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-4">Our <span className="highlight">insider fraud and suspicious activity detector</span> for enterprise networks (banks, companies, government agencies) is in development for release in late 2024.</p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-4">Together the Conatix malicious file detection and suspicious activity detection solutions enable <span className="highlight">end-to-end supplier lifecycle management</span>. Before onboarding third-party vendors and suppliers onto a host company IT network, the host first wants to check that the partners’ computers are clean and free of malware and ransomware. Once the host grants a vendor, supplier, or partner privileged access to their network, the host will want to monitor the supplier’s activity on the host network 24/7 to flag any suspicious or unwanted events or behavior.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

