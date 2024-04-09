import logo from './logo.svg';
import './App.scss';
import Navigation from './components/Navigation/nav';
import FeaturedVideo from './components/FeaturedVideo/FeaturedVideo';
import VideoDetail from './components/VideoDetail/VideoDetail';
import CommentForm from './components/CommentForm/CommentForm'
import CommentData from './components/CommentData/CommentData'
import VideoList from './components/VideoList/VideoList';
import videoData from './data/videos.json';
import videoDetails from './data/video-details.json';
import { useState } from 'react'


function App() {
  const [video, setVideo] = useState(videoData)
  const [featuredVideo, setFeaturedVideo] = useState(videoDetails[0])
  const [videoDetail, setVideoDetail] = useState(videoDetails[0])
  const [commentData, setCommentData] = useState(videoDetails[0])

   // Function to add a new comment
   const addComment = (newComment) => {
    setCommentData([...commentData, newComment]);
  };

  // add axios code here to get data from api
  // useeffect .axios code to add API
  

  const handleVideoClick = (videoId) => {
    setFeaturedVideo(videoDetails.find(video => video.id === videoId))
    setVideoDetail(videoDetails.find(video => video.id === videoId))
    setCommentData(commentData.find(video => video.id === videoId))
    const filteredVideo = videoData.filter((video) => video.id !== videoId)
    setVideo(filteredVideo)
  }

  // === needed for uploading new video
  // const addVideo = () => {
  //   const newVideo = {
  //     'id': "84e96018-4022-434e-80bf-000ce4cd12b8",
  //     'image': "https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg"
  //   }
  
  //   setVideo([ ...video, newVideo ])
  // }

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <FeaturedVideo featuredVideo={featuredVideo} />
      <main className='body-layout'>
        {/* (video data, Form, Comment), (video list) */}
        <div>
          <VideoDetail videoDetail={videoDetail} />
          <CommentForm addComment={addComment} commentData={commentData} />
          <CommentData commentData={commentData} />
        </div>
        <div className='Video-list'>
          <aside className='Video-list__container'>
            <h2 className='Video-list__heading'>NEXT VIDEOS</h2>
            <VideoList videosda={video} handleVideoClick={handleVideoClick} />
          </aside> 
        </div>
      </main>
    </div>
  );
}

export default App;
