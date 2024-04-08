import './VideoDetail.scss';
import React from 'react';
import iconViews from '../../assets/Icons/views.svg';
import iconLikes from '../../assets/Icons/likes.svg';
import videoData from '../../data/videos.json';
import videoDetails from '../../data/video-details.json';


const VideoDetail = ({videoDetail}) => {
    // console.log({videoDetail});
    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
      }

    return(
        <section className='video-detail'>
            <div className="video-detail__title" key={videoDetail.id}>
                <h2>{videoDetail.title}</h2>
            </div>
            <div className='video-detail__data' key={videoDetail.id} >
                <div className='video-detail__data1'>
                    <p className='video-detail__data-by'>  by {videoDetail.channel}</p>
                    <p className='video-detail__data-date'>{formatDate(videoDetail.timestamp)}</p>
                </div>
                <div className='video-detail__data2'>
                    <div className='video-detail__data2-views'>
                        <img src={iconViews} alt='Views' />
                        <span>              {videoDetail.views}</span>
                    </div>
                    <div className='video-detail__data2-likes'>
                        <img src={iconLikes} alt='Likes' />
                        <span>              {videoDetail.likes}</span>
                    </div>
                </div>
            </div>
            <p className='video-detail__desc' >{videoDetail.description}</p>
            
        </section>
    )

}


export default VideoDetail;