// aboutMe.js
import React from 'react';
import TopBar from '../Common/topBar';
import './aboutMe.css';
import images from '../../images/index';

function AboutMeApp() {
    return (
        <div className="about-me-container">
            <TopBar />
            <h1>About Me</h1>
            <div className="boxes-container">
                <div className="box">
                    <div className="box-title">FAVORITE MANGA</div>
                    <img src={images.vagabond2} alt="Favorite Manga" className="box-image" />
                    <div className="box-content">
                        <p className="box-text-1a">Vagabond</p>
                        <p className='box-text-1b'>By Takehiko Inoue</p>
                        <p className='box-description'>A masterpiece that follows the life of legendary swordsman Miyamoto Musashi.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-title">FAVORITE SHOW</div>
                    <img src={images.aot} alt="Favorite Show" className="box-image" />
                    <div className="box-content">
                        <p className="box-text-2a">Attack on Titan</p>
                        <p className="box-text-2b">By Hajime Isayama</p>
                        <p className='box-description'>An epic tale of survival, freedom, and the price of truth.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-title">FAVORITE GAME</div>
                    <img src={images.elden} alt="Favorite Game" className="box-image" />
                    <div className="box-content">
                        <p className="box-text-1a">Elden Ring</p>
                        <p className='box-text-1b'>By FromSoftware</p>
                        <p className='box-description'>An open-world action RPG that sets new standards for exploration and combat.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-title">ACTIVE HOBBY</div>
                    <img src={images.chess} alt="Active Hobby" className="box-image" />
                    <div className="box-content">
                        <p className="box-text-2a">Chess</p>
                        <p className="box-text-2b">Elo Rating 1400</p>
                        <p className='box-description'>A passionate chess player always seeking to improve strategy and tactics.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMeApp;