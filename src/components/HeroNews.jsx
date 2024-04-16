import styles from '../style';
import { airbnb } from '../assets';

const HeroNews = () => {
  return (
        <div className="mb-4 pt-3 col-12 text-center">
            <b>News & Articles</b>
            <div className="col-12 mb-4 justify-items-center">
                <div className="mb-3 pt-2">
                    <img src={airbnb} className="img-fluid mx-auto" />
                </div>
                <div className="date">Excepteur sint occaecat</div>
                <h5>Excepteur sint occaecat</h5>
                <button className="border border-black text-black font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-white hover:text-black transition duration-300">Read More</button>
            </div>
            <div className="col-12 mb-4">
                <div className="mb-3 pt-2">
                    <img src={airbnb} className="img-fluid mx-auto" />
                </div>
                <div className="date">Excepteur sint occaecat</div>
                <h5>Excepteur sint occaecat</h5>
                <button className="border border-black text-black font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-white hover:text-black transition duration-300">Read More</button>
            </div>
            <div className="col-12 mb-4">
                <div className="mb-3 pt-2">
                    <img src={airbnb} className="img-fluid mx-auto" />
                </div>
                <div className="date">Excepteur sint occaecat</div>
                <h5>Excepteur sint occaecat</h5>
                <button className="border border-black text-black font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-white hover:text-black transition duration-300">Read More</button>
            </div>
            <div className="col-12 mb-4">
                <div className="mb-3 pt-2">
                    <img src={airbnb} className="img-fluid mx-auto" />
                </div>
                <div className="date">Excepteur sint occaecat</div>
                <h5>Snow hiking Airbnb experiences</h5>
                <button className="border border-white text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-white hover:text-black transition duration-300 mr-20y">Read More</button>
            </div>
            <div className="col-12 mb-4">
                <div className="aspectRatioBox mb-3 pt-2">
                    <img src={airbnb} className="img-fluid mx-auto" />
                </div>
                <div className="date">Excepteur sint occaecat</div>
                <h5>Snow hiking Airbnb experiences</h5>
                <button className="border border-black text-black font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-white hover:text-black transition duration-300">Read More</button>
            </div>
        </div>
  )
}

export default HeroNews