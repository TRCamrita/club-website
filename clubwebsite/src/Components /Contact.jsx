import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Logo from '../assets/images/logo.png';
import Github from '../assets/images/Socialmedia/github.svg';
import Instagram from '../assets/images/Socialmedia/instagram.svg';
import Location from '../assets/images/Socialmedia/location.svg';
import Phone from '../assets/images/Socialmedia/phone.svg';
import Mail from '../assets/images/Socialmedia/email.svg';

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="contact-container flex flex-col bg-transparent border border-white mt-24 mx-72 p-6">
        <div className="header-container px-8 pt-6 pb-4 flex font-headers text-White text-4xl">
          <h1>Contact</h1>
        </div>
        <div className="media-map-container flex mt-6">
          {/* Social Links Section */}
          <div className="social-links-container w-1/3 px-8">
            <ul className="flex flex-col space-y-6 font-primary font-bold text-White">
              <li>
                <a
                  href="https://github.com/AstroWalker24"
                  className="flex ml-2"
                >
                  <img className="mr-4" src={Github} alt="" />
                  Explore our projects
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AstroWalker24"
                  className="flex"
                >
                  <img
                    className="mr-2"
                    width={40}
                    height={40}
                    src={Instagram}
                    alt=""
                  />
                  <span className="pt-2">See us in action</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex">
                  <img
                    className="mr-4"
                    src={Location}
                    width={40}
                    height={40}
                    alt=""
                  />
                  PO, Amritapuri, Vallikavu, Clappana, Kerala 690525
                </a>
              </li>
              <li>
                <a href="#" className="flex">
                  <img
                    className="mr-4"
                    width={40}
                    height={40}
                    src={Phone}
                    alt=""
                  />
                  +91 9390224238
                </a>
              </li>
              <li>
                <a href="#" className="flex">
                  <img
                    className="mr-4"
                    width={40}
                    height={40}
                    src={Mail}
                    alt=""
                  />
                  shaiknadeem2003@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="map-container ml-6 w-2/3">
            <MapContainer
              center={[9.089506, 76.488636]} // Latitude, Longitude for Amritapuri, Kerala
              zoom={13}
              style={{ height: '300px', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
              <Marker position={[9.089506, 76.488636]}>
                <Popup>
                  Robotics Club Location <br /> Amritapuri, Kerala.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <hr className="mt-6 border border-gray-600" />
        <div className="footer-container mt-6 flex px-8 justify-between items-center">
          <div className="copyright-container font-primary text-gray-400 font-bold w-1/2">
            <p>© The Robotics Club, Amritapuri - all rights reserved</p>
          </div>
          <div className="go-up">
            <button
              onClick={scrollToTop}
              className="bg-transparent border border-white rounded-3xl font-headers text-White text-sm p-4"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
