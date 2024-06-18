import bookmarkLogo from '../assets/images/logo-bookmark.svg';
import heroImage from '../assets/images/illustration-hero.svg';
import simpleBookmark from '../assets/images/illustration-features-tab-1.svg';
import speedySearch from '../assets/images/illustration-features-tab-2.svg';
import easyShare from '../assets/images/illustration-features-tab-3.svg';
import '../assets/style.css';

function Bookmark(){
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
                        <li>Simple Bookmarking</li>
                        <li>Speedy Searching</li>
                        <li>Easy Sharing</li>
                    </ul>
                </div>
                <div className='simpleBookmarking'>
                    <div className='simpleBookmark-image'>
                        <img src={simpleBookmark} alt = "simple bookmark image" className='simpleBookmark'></img>
                        <div className='decor2'></div>
                    </div>
                    <div className='simpleBookmark-text'>
                        <h3 className='simpleBookmark-heading'>Bookmark in one click</h3>
                        <p className='simpleBookmark-para'>Organise your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.</p>
                        <button className='simpleBookmark-button'>More Info</button>
                    </div>
                </div>
                <div className='speedySearching'>
                    <div className='speedySearch-image'>
                        <img src={speedySearch} alt='speedy search image' className='speedySearch'></img>
                        <div className='decor3'></div>
                    </div>
                    <div className='speedySearch-text'>
                        <h3 className='speedySearch-heading'>Intelligent Search</h3>
                        <p className='speedySearch-para'>Ou powerful search featre will help you find saved sites in no time at all. No need to trawl all your bookmarks.</p>
                        <button className='speedySearch-button'>More Info</button>
                    </div>
                </div>
                <div className='easySharing'>
                    <div className='easyShare-image'>
                        <img src={easyShare} alt='easy share image' className='easyShare'></img>
                        <div className='decor4'></div>
                    </div>
                    <div className='esayShare-text'>
                        <h3 className='easyShare-heading'>Share your bookmarks</h3>
                        <p className='easyShare-para'>Easily share your bookmarks and collections with others. Create a sharable link that you can send at the click of a button.</p>
                        <button className='easyShare-button'>More Info</button>
                    </div>
                </div>
            </section>
            <section>
                <h2>Tools</h2>
            </section>
        </main>
        
        </>
    );
}
export default Bookmark;