import React from 'react';
import TopBar from '../Common/topBar';
import './aboutMe.css';
import images from '../../images/index';

function AboutMeApp() {
    return (
        <div className="about-me-container">
            <TopBar />
            <h1>Fun Facts</h1>
            <div className="boxes-container">
                <div className="box">
                    <div className="box-title">FAVORITE MANGA </div>
                    <img src={images.vagabond} alt="Favorite Manga" className="box-image" />
                    <p className="box-text-1a">Vagabond</p>
                    <p className='box-text-1b'>Takehiko Inoue</p>
                </div>
                <div className="box">
                    <div className="box-title">FAVORITE SHOW</div>
                    <img src={images.bojack} alt="Favorite Show" className="box-image" />
                    <p className="box-text-2a" style={{ right: '140px' }}>Bojack Horseman</p>
                    <p className="box-text-2b" style={{ right: '149px' }}>Raphael Bob-Waksberg</p>
                </div>
                <div className="box">
                    <div className="box-title">FAVORITE GAME</div>
                    <img src={images.eldenring} alt="Elden Ring" className="box-image" />
                    <p className="box-text-1a">Elden Ring</p>
                    <p className='box-text-1b'>By FromSoftware</p>
                </div>
                <div className="box">
                    <div className="box-title">ACTIVE HOBBY</div>
                    <img src={images.chess} alt="Active Hobby" className="box-image" />
                    <p className="box-text-2a">Chess</p>
                    <p className="box-text-2b">Elo-Rating 800</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMeApp;
