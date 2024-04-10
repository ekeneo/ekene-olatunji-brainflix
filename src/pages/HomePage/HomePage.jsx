import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import Navigation from '../../components/Navigation/nav';
import FeaturedVideo from '../../components/FeaturedVideo/FeaturedVideo';
import VideoDetail from '../../components/VideoDetail/VideoDetail';
import CommentForm from '../../components/CommentForm/CommentForm'
import CommentData from '../../components/CommentData/CommentData'
import VideoList from '../../components/VideoList/VideoList';

// import videoData from './data/videos.json';
// import videoDetails from './data/video-details.json';
export const apiKey = "?api_key=2f765481-9177-46db-a027-8f307536d552";
export const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";

//  create a state variable for list of videos
//  Make a request to /videos API endpoint
//  Update state
//  Render a list of video links to /video/:id

function HomePage() {
  const [video, setVideo] = useState('')
  const [videoListArr, setVideoListArr] = useState([]);
  const [featuredVideo, setFeaturedVideo] = useState('')
  const [videoDetail, setVideoDetail] = useState('')
  const [commentData, setCommentData] = useState('')

   // Function to add a new comment
   const addComment = (newComment) => {
    setCommentData([...commentData, newComment]);
  };

  // add axios code here to get data from api
  // useeffect .axios code to add API

  useEffect(() => {
    axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=2f765481-9177-46db-a027-8f307536d552')
      .then((response) => {
        setVideo(response.data);
        setFeaturedVideo(response.data[0]);
        setVideoListArr(response.data);
        setVideoDetail(response.data[0]); // Set videoDetail with the first video from the response
        setCommentData(response.data[0].comments); // Assuming comments are within the first video object
      })
      .catch((error) => {
        console.log("Error fetching videos: ", error);
      });
  }, []);
    
   // Holds video id from url param
   const { videoId } = useParams();

  useEffect(() => {
    getAllVideos(apiKey);
  }, []);

  useEffect(() => {
    if (videoId) {
        getVideo(videoId);
        window.scrollTo(0,0);
    } else if (videoListArr.length > 0) {
        getVideo(videoListArr[0].id); 
    }
  }, [videoId, videoListArr])

  function getAllVideos(apiKey) {
    let theRequest = apiUrl+"/videos"+apiKey;
    axios.get(theRequest).then( (result) => {
        setVideoListArr(result.data);
    }).catch( (err) => {
        console.log("videolist fetch error: ", err);
    })
  }

  function getVideo(videoId){
    let theRequest = apiUrl+"/videos/"+videoId+apiKey;
    axios.get(theRequest).then( (result) => {
        setFeaturedVideo(result.data);
    }).catch((err) => {
        console.log("video fetch error: ", err);
    })
  }

  

  
  const handleVideoClick = (videoId) => {
    setFeaturedVideo(videoListArr.find(video => video.id === videoId));
    setVideoDetail(videoListArr.find(video => video.id === videoId));
    setCommentData(videoListArr.find(video => video.id === videoId).comments);
    const filteredVideo = videoListArr.filter((video) => video.id !== videoId);
    setVideo(filteredVideo);
  }
  

  // const handleVideoClick = (videoId) => {
  //   setFeaturedVideo(video.find(video => video.id === videoId))
  //   setVideoDetail(video.find(video => video.id === videoId))
  //   setCommentData(video.find(video => video.id === videoId))
  //   const filteredVideo = video.filter((video) => video.id !== videoId)
  //   setVideo(filteredVideo)
  // }

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

export default HomePage;
