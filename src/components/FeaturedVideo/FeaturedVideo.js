import React from 'react';
import './FeaturedVideo.scss';
import videoData from '../../data/videos.json';

const FeaturedVideo = ({featuredVideo}) => {
    return (
        <section className="featuredVideo">
            {/* {videoData.map((video) => ( */}
                <div className="video-player__container" key={featuredVideo.id}>
                    <video className="video-player" poster={featuredVideo.image[0]}>
                        <source src={featuredVideo.image[0]} type="video/mp4" />
                        
                    </video>


                    {/* <div className="video-controls">
                        <button className="play-pause-button"></button>
                        <div className="progress-bar">
                            <div className="buffered"></div>
                            <div className="played"></div>
                            <div className="scrubber"></div>
                        </div>
                        <button className="volume-button"></button>
                        <input type="range" className="volume-slider" min="0" max="1" step="0.01" />
                        <button className="fullscreen-button"></button>
                    </div> */}

                    <div className="video-content">
                        <h2>{featuredVideo.title}</h2>
                        <p>{featuredVideo.channel}</p>
                    </div>
                </div>
            {/* ))} */}
        </section>
    )
}

export default FeaturedVideo;
