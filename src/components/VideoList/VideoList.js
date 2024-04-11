import './VideoList.scss'


const VideoList = ({videoListArr, handleVideoClick }) => {
    if (!videoListArr) {
        return <div>Loading...</div>; 
      }
  let currID = videoListArr.id;



    return (
        <ul className='video-list'>
            {videoListArr.map((video) => {
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