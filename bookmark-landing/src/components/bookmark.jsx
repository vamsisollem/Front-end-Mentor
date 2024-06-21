import bookmarkLogo from '../assets/images/logo-bookmark.svg';
import bookmarkWhiteLogo from '../assets/images/logo-bookmark-light.svg';
import heroImage from '../assets/images/illustration-hero.svg';
import simpleBookmark from '../assets/images/illustration-features-tab-1.svg';
import speedySearch from '../assets/images/illustration-features-tab-2.svg';
import easyShare from '../assets/images/illustration-features-tab-3.svg';
import '../assets/style.css';
import chromeLogo  from '../assets/images/logo-chrome.svg';
import firefoxLogo from '../assets/images/logo-firefox.svg';
import operaLogo from '../assets/images/logo-opera.svg'
import arrow from '../assets/images/icon-arrow.svg';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import { useState } from 'react';

function Bookmark(){
    const [display, setDisplay] = useState(0);
    const tabHandler = (tabIndex)=>{
        setDisplay(tabIndex);
    }
    return(
        <>
        <header>
            <img src={bookmarkLogo}></img>
            <nav>
                <ul>
                    <li>FEATURES</li>
                    <li>PRICING</li>
                    <li>COST</li>
                    <li><button>LOGIN</button></li>
                </ul>
            </nav>
        </header>
        
        <main>
            <section className="hero-section">
                <div className="hero-text">
                    <h2 className="hero-heading">A simple Bookmark Manager</h2>
                    <p className="hero-para">A clean and simple interface to organise your favorite website. Open a new browser tab and see your sites load instantly. Try it fot free.</p>
                    <div>
                        <button className="chrome-button">Get it on Chrome</button>
                        <button className="firefox-button">Get it on Firefox</button>
                    </div>
                </div>
                <div className="hero-image-section">
                    <img src={heroImage} alt="hero image" className="hero-image"></img>
                    <div className="decor"></div>
                </div>
            </section>
            <section className="features">
                <h2 className="feature-heading">Features</h2>
                <p className="feature-para">Our aim is to make quick and easy for you to access your favourite websites. Your bookmarks sync between devices so you can access them on the go</p>
                <div className="tabs">
                    <ul>
                        <li onClick={()=>tabHandler(0)} className = {display === 0 ? 'border-red': ''}>Simple Bookmarking</li>
                        <li onClick={()=>tabHandler(1)} className = {display === 1 ? 'border-red': ''}>Speedy Searching</li>
                        <li onClick={()=>tabHandler(2)} className = {display === 2 ? 'border-red': ''}>Easy Sharing</li>
                    </ul>
                </div>
                {display === 0 &&  <div className='simpleBookmarking' id="simpleBookmark-tab">
                    <div className='simpleBookmark-image'>
                        <img src={simpleBookmark} alt = "simple bookmark image" className='simpleBookmark'></img>
                        <div className='decor2'></div>
                    </div>
                    <div className='simpleBookmark-text'>
                        <h3 className='simpleBookmark-heading'>Bookmark in one click</h3>
                        <p className='simpleBookmark-para'>Organise your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.</p>
                        <button className='simpleBookmark-button'>More Info</button>
                    </div>
                </div>}
               {display === 1 && <div className='speedySearching' id="speedySearch-tab">
                    <div className='speedySearch-image'>
                        <img src={speedySearch} alt='speedy search image' className='speedySearch'></img>
                        <div className='decor3'></div>
                    </div>
                    <div className='speedySearch-text'>
                        <h3 className='speedySearch-heading'>Intelligent Search</h3>
                        <p className='speedySearch-para'>Ou powerful search featre will help you find saved sites in no time at all. No need to trawl all your bookmarks.</p>
                        <button className='speedySearch-button'>More Info</button>
                    </div>
                </div>}
                {display === 2 && <div className='easySharing' id="easyShare-tab">
                    <div className='easyShare-image'>
                        <img src={easyShare} alt='easy share image' className='easyShare'></img>
                        <div className='decor4'></div>
                    </div>
                    <div className='esayShare-text'>
                        <h3 className='easyShare-heading'>Share your bookmarks</h3>
                        <p className='easyShare-para'>Easily share your bookmarks and collections with others. Create a sharable link that you can send at the click of a button.</p>
                        <button className='easyShare-button'>More Info</button>
                    </div>
                </div>}
            </section>
            <section className='extensions'>
                <h2 className='extension-heading'>Download the extension</h2>
                <p className='extension-para'>We got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize</p>
                <div className="container">
                    <div className="card">
                        <img src={chromeLogo} alt="Chrome Logo"></img>
                        <h3>Add to Chrome</h3>
                        <p>Minimum version 62</p>
                        <hr></hr>
                        <button>Add & Install Extension</button>
                    </div>
                    <div className="card firefox-top">
                        <img src={firefoxLogo} alt="Firefox Logo"></img>
                        <h3>Add to Firefox</h3>
                        <p>Minimum version 55</p>
                        <hr></hr>
                        <button>Add & Install Extension</button>
                    </div>
                    <div className="card opera-top">
                        <img src={operaLogo} alt="Opera Logo"></img>
                        <h3>Add to Opera</h3>
                        <p>Minimum version 46</p>
                        <hr></hr>
                        <button>Add & Install Extension</button>
                    </div>
                 </div>
            </section>
            <section className="faq">
                    <h3 className='faq-heading'>Frequently asked Questions</h3>
                    <p className='faq-para'>Here are some FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
                    <hr></hr>
                    <div className='accordian'>
                        <div className='question'>
                            <p>What is a bookmark?</p>
                            <button><img src={arrow} alt="arrow"></img></button>
                        </div>
                        <div className='question'>
                            <p>How can I request a new browser?</p>
                            <button><img src={arrow} alt="arrow"></img></button>
                        </div>
                        <div className='question'>
                            <p>Is there is a mobile app?</p>
                            <button><img src={arrow} alt="arrow"></img></button>
                        </div>
                        <div className='question'>
                            <p>What about other chromium browsers?</p>
                            <button><img src={arrow} alt="arrow"></img></button>
                        </div>
                    </div>

                    <button className='accordian-button'>More Info</button>
            </section>
            <section className='subscribe'>
                    <p className='subscribe-para'>35,000 are already joined</p>
                    <h3 className='subscribe-heading'>Stay up-to-date with what we are doing</h3>
                    <form className='emailSubscribe'>
                        <input type='email' placeholder='Enter your email address' className='email'></input>
                        <input type='button' value='Contact Us' className='submitButton'></input>
                    </form>
            </section>
        </main>
        <footer>
            <div className='footer-content'>
            <img src={bookmarkWhiteLogo}></img>
                <ul>
                    <li>FEATURES</li>
                    <li>PRICING</li>
                    <li>COST</li>
                </ul>
            </div>
            <div className='icons'>
                    <img src={facebook} alt="facebook" className='icon'></img>
                    <img src={twitter} alt="twitter" className='icon'></img>
            </div>
        </footer>
        
        </>
    );
}
export default Bookmark;