import React from 'react' 
import './App.css';
import Attack from './assets/RansomwareAttackCycle_PNG.webp'

const RansomBlocker = () => {
  return (
    <div className='description'>
       
      <h1>Insider fraud <span className="highlight">detection</span> on secure wireless networks </h1>
      <p>It’s easy to secure wireless networks from outside intruders trying to break in. But what about accredited users of the network, whether they came by their login credentials legitimately or not? On many virtual software-defined and other wireless networks today, no one is systematically watching for suspicious or unwanted activity by insiders while they are on the network. Conatix changes that by monitoring not only network events but individual user behavior to kick people off the network if they do something outright malicious, or to alert sysadmins if they do something that might be suspicious.</p>
      <p>Use cases include connected cars, law enforcement, commercial aviation, drones, tanks, disaster and construction sites and remote work environments.</p>
       <div className='Diagram'>
            <img src={Attack} alt='' />
        </div>
    </div>
    
  );
};

export default RansomBlocker;