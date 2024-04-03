import logo from './logo.svg';
import './App.scss';
import Navigation from './components/Navigation/nav';
import FeaturedVideo from './components/FeaturedVideo/FeaturedVideo';
// import Comments from './components/Comments/Comments'
import VideoList from './components/VideoList/VideoList';
import videoData from './data/videos.json';
import videoDetails from './data/video-details.json';
import { useState } from 'react'


function App() {
  const [video, setVideo] = useState(videoData)
  const [featuredVideo, setFeaturedVideo] = useState(videoDetails[0])

  const handleVideoClick = (videoId) => {
    setFeaturedVideo(videoDetails.find(video => video.id === videoId))
    const filteredVideo = videoData.filter((video) => video.id !== videoId)
    setVideo(filteredVideo)
  }

  const addVideo = () => {
    const newVideo = {
      'id': "84e96018-4022-434e-80bf-000ce4cd12b8",
      'image': "https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg"
    }
  
    setVideo([ ...video, newVideo ])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main>
        <FeaturedVideo featuredVideo={featuredVideo} />
        {/* <Comments/> */}
      </main>
      <aside className='Video-list__Container'>
        <h2 className='Video-list__heading'>NEXT VIDEOS</h2>
        <VideoList/>
        <VideoList videosda={video} handleVideoClick={handleVideoClick} />
      </aside> 
    </div>
  );
}

export default App;
