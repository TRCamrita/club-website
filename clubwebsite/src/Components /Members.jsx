import React, { useState } from 'react';
import Navbar from './Navbar';
import Travis from '../assets/images/travis.webp';
import Playboi from '../assets/images/playboi.jpg';
import Lamar from '../assets/images/lamar.jpg';
import Lana from '../assets/images/lanadelrey.webp';
import Drake from '../assets/images/drake.webp';
import Charlie from '../assets/images/Charlie.webp';
import Larrow from '../assets/images/leftarrow.svg';
import Rarrow from '../assets/images/rightarrow.svg';

import Sap from '../assets/images/saplabs.png';
import Renault from '../assets/images/renault.png';
import Nissan from '../assets/images/nissan.png';
import Microsoft from '../assets/images/microsoft.jpg';
import Hyundai from '../assets/images/hyundai.webp';
import Hp from '../assets/images/hp.png';
import Dell from '../assets/images/dell.png';
import Cisco from '../assets/images/cisco.png';
import Amazon from '../assets/images/amazon.png';
import Adwaitha from '../assets/images/adwaitha.jpg'
import Pavani from '../assets/images/pavani.jpg'
import Club1 from '../assets/images/club-1.jpg'
import Club2 from '../assets/images/clubmember-0.jpeg'
import Club3 from '../assets/images/clubmember01.jpeg'
import Club4 from '../assets/images/clubmember02.jpeg'
import Club5 from '../assets/images/clubmember03.jpeg'

export default function Members() {


    const [isPaused, setIsPaused] = useState(false);
    const images = [
        Pavani,
        Club1,
        Club2,
        Adwaitha,
        Club3,
        Club4,
        Club5
    ]; // Add as many images as you want
    

  

    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsToShow = 4; // Number of items visible at a time
    const totalItems = images.length;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
        );
    };

    // Calculate the visible items
    const visibleItems = Array.from({ length: itemsToShow }, (_, i) => {
        return images[(currentIndex + i) % totalItems];
    });

    return (
        <>
            <div className="animated-background bg-Black min-h-screen">
                <Navbar />

                {/* Founder Section */}
                <div className="founder-container flex items-center space-x-72 px-72 pt-[16rem] bg-transparent h-auto w-full">
                    <div className="founder-image-container flex flex-col items-center justify-center h-auto">
                        <h1 className="font-headers text-White text-6xl">Founder</h1>
                        <div className="image-container mt-6 flex justify-center items-center h-auto">
                            <img src={Travis} alt="Travis Scott" width={400} height={500} />
                        </div>
                    </div>
                    <div className="desc-container flex flex-col">
                        <h1 className="name font-primary font-bold text-3xl text-White">
                            Travis Scott
                        </h1>
                        <p className="mt-6 desc font-primary text-lg text-White">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
                            consequatur neque! Delectus enim esse ex beatae deserunt labore
                            error hic quo, tenetur laborum nobis! Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Placeat doloribus consectetur iste
                            enim deserunt, porro at explicabo ullam reprehenderit, maiores et
                            aliquam officiis quod magni nostrum maxime eveniet odit obcaecati!
                        </p>
                    </div>
                </div>

                {/* Faculty Section */}
                <div className="faculty-container flex-col flex px-72 w-full mt-16 bg-transparent h-auto">
                    <h1 className="font-headers text-White text-4xl">Faculty Coordinators</h1>
                    <div className="image-container-faculty mt-10 flex space-x-80 w-full">
                        <div className="faculty-1 flex justify-center flex-col space-y-4 items-center">
                            <h1 className="name font-primary font-bold text-3xl text-White">
                                Playboi Carti
                            </h1>
                            <div className="image-wrapper">
                                <img src={Playboi} alt="Playboi Carti" width={300} height={300} />
                            </div>
                        </div>
                        <div className="faculty-1 flex justify-center flex-col space-y-4 items-center">
                            <h1 className="name font-primary font-bold text-3xl text-White">
                                Kendrick Lamar
                            </h1>
                            <div className="image-wrapper">
                                <img src={Lamar} alt="Kendrick Lamar" width={500} height={500} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Committee Section */}
                <div className="core-committe-holder flex flex-col w-full h-auto px-72 mt-16">
                    <h1 className="text-White font-headers text-3xl">Core Committee Members</h1>
                    <div className="image-container-commitee w-full mt-8 flex space-x-16">
                        <div className="image-container-1 flex flex-col space-y-2">
                            <img src={Lana} alt="Lana Del Rey" width={300} height={300} />
                            <h1 className="text-2xl font-primary text-White font-bold">
                                Lana Del Ray
                            </h1>
                            <p className="text-lg font-primary text-White">ECE - 2025</p>
                        </div>
                        <div className="image-container-2 flex flex-col space-y-2">
                            <img src={Charlie} alt="Charlie Puth" width={270} height={270} />
                            <h1 className="text-2xl font-primary text-White font-bold">
                                Charlie Puth
                            </h1>
                            <p className="text-lg font-primary text-White">AIE - 2025</p>
                        </div>
                        <div className="image-container-3 flex flex-col space-y-2">
                            <img src={Drake} alt="Drake" width={200} height={200} />
                            <h1 className="text-2xl font-primary text-White font-bold">Drake</h1>
                            <p className="text-lg font-primary text-White">CSE - 2025</p>
                        </div>
                    </div>
                </div>

                <div className='holder flex flex-col px-72 mt-16'>
    <h1 className='text-White text-3xl font-headers'>Meet our team</h1>
    <div className="carousel w-full  flex flex-col h-auto mt-16">
        <div className="carousel-container relative flex justify-center items-center">
            <button className="arrow left-arrow pl-6" onClick={handlePrev}>
                <img src={Larrow} alt="" width={50} height={50} />
            </button>
            <div className="carousel-items flex space-x-8">
                {visibleItems.map((image, index) => (
                    <div key={index} className="carousel-item">
                        <img
                            src={image}
                            alt={`Carousel item ${index}`}
                            className="object-cover w-40 h-40"
                        />
                        <span className="overlay-text"><a href="">Adwaitha V <span className='text-sm'>EAC 2023</span></a></span>
                    </div>
                ))}
            </div>
            <button className="arrow right-arrow pr-6" onClick={handleNext}>
                <img src={Rarrow} alt="" width={50} height={50} />
            </button>
        </div>
    </div>
</div>




                {/* infinite scroll slider goes here  */}
                <div className='alumini-companies flex flex-col w-full px-72 mt-16'>
                    <h1 className='text-3xl text-White font-headers'>Our Alumini Works at</h1>
                    <div
                        className="logos-container mt-14"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div
                            className="logos"
                            style={{
                                animationPlayState: isPaused ? "paused" : "running",
                            }}
                        >
                            {/* Repeat the logos array twice for seamless flow */}
                            {[...Array(2)].flatMap(() =>
                                [
                                    Sap,
                                    Amazon,
                                    Cisco,
                                    Dell,
                                    Hp,
                                    Renault,
                                    Nissan,
                                    Microsoft,
                                    Hyundai,
                                ].map((logo, index) => (
                                    <img src={logo} alt={`Company ${index}`} key={Math.random()} />
                                ))
                            )}
                        </div>
                    </div>


                </div>
                <div className='footer flex w-full justify-between items-center px-72 h-auto mt-16'>
                    <div className="copyright-container font-primary text-gray-400 font-bold w-1/2">
                        <p>© The Robotics Club, Amritapuri - all rights reserved</p>
                    </div>

                    <div className="go-up">
                        <button
                            className="bg-transparent border border-white rounded-3xl font-headers text-White text-sm p-4"
                        >
                            Back to Top
                        </button>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </>
    );
}
