import './VideoList.scss'
import videoData from '../../data/videos.json';
import videoDetails from '../../data/video-details.json';

const VideoList = ({video, handleVideoClick }) => {
    return (
        <ul className='video-list'>
            {videoData.map((video) => {
                return (
                    <li onClick={() =>handleVideoClick(video.id)} key={video.id} className='video-list__video'>
                      <img className='video-list__video-image' src={video.image}/>
                      <p className='video-list__video-title'>{video.title}</p>
                      <p className='video-list__video-channel'>{video.channel}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default VideoList