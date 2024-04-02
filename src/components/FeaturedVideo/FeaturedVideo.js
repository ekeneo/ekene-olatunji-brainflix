import './FeaturedVideo.scss'
import videoData from '../../data/videos.json';
import videoDetails from '../../data/video-details.json';


const FeaturedVideo = () => {
    console.log(videoData)

    return (

        // <section className="featuredVideo">
        //     <div className="video-player__container">
        //         <video className="video-player" autoPlay muted loop poster={videoPoster}>
        //             {/* <source src={videoSource} type="video/mp4" /> */}
        //             Your browser does not support the video tag.
        //         </video>
        //     </div>
        //     <div className="video-player__content">
        //         {/* Your content here */}
        //     </div>

            {/* <div class="video-controls">
                <button class="play-pause-button"></button>
                <div class="progress-bar">
                    <div class="buffered"></div>
                    <div class="played"></div>
                    <div class="scrubber"></div>
                </div>
                <button class="volume-button"></button>
                <input type="range" class="volume-slider" min="0" max="1" step="0.01">
                <button class="fullscreen-button"></button>
            </div> */}
     // </section>
    )
}

export default FeaturedVideo