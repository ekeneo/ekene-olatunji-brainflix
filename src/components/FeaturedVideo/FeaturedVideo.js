import React from 'react';
import './FeaturedVideo.scss';
import videoData from '../../data/videos.json';

const FeaturedVideo = ({featuredVideo}) => {
    console.log(featuredVideo);
    return (
        <section className="featuredVideo">
            <div className="video-player__container" key={featuredVideo.id}>
                <video
                className='video-player'
                controls
                src={featuredVideo.video}
                poster={featuredVideo.image}
             ></video>

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

                    {/* <div className="video-content">
                        <h2>{featuredVideo.title}</h2>
                        <p>{featuredVideo.channel}</p>
                    </div> */}
                </div>
            {/* ))} */}
        </section>
    )
}

export default FeaturedVideo;
