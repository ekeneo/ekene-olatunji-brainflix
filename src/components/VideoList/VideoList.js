import './VideoList.scss'
import videoData from '../../data/videos.json';
import videoDetails from '../../data/video-details.json';

const VideoList = ({video, handleVideoClick }) => {
    return (
        <ul className='video-list'>
            {videoData.map((video) => {
                return (
                    <div onClick={() =>handleVideoClick(video.id)} key={video.id} className='video-list__video'>
                        <img className='video-list__video-image' src={video.image}/>
                        <div className='video-list__video-info'>
                            <p className='video-list__video-title'>{video.title}</p>
                            <p className='video-list__video-channel'>{video.channel}</p>
                        </div>
                    </div>

                )
            })}
        </ul>
    )
}

export default VideoList