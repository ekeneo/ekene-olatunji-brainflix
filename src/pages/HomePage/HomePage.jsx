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

function HomePage() {
  const [video, setVideo] = useState('')
  const [videoListArr, setVideoListArr] = useState([]);
  const [featuredVideo, setFeaturedVideo] = useState('')
  const [videoDetail, setVideoDetail] = useState('')
  const [commentData, setCommentData] = useState(null)

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
        setVideoDetail(response.data[0]); 
        setCommentData(response.data[0].comments); 
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching videos. Please try again later.');
        setLoading(false);
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

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <FeaturedVideo featuredVideo={featuredVideo} />
      <main className='body-layout'>
        <div>
          {/* <VideoDetail videoDetail={videoDetail} />
          <CommentForm addComment={addComment} commentData={commentData} />
          <CommentData commentData={commentData} /> */}
           <VideoDetail videoDetail={videoDetail} />
          {loading ? <div>Loading...</div> : error ? <div>{error}</div> : (
            <>
              <CommentForm addComment={addComment} commentData={commentData} />
              <CommentData videoListArr={video} commentData={commentData} />
              {/* <CommentData commentData={commentData} /> */}
            </>
          )}
        </div>
        <div className='Video-list'>
          <aside className='Video-list__container'>
            <h2 className='Video-list__heading'>NEXT VIDEOS</h2>
            <VideoList videoListArr={video} handleVideoClick={handleVideoClick} />
          </aside> 
        </div>
      </main>
    </div>
  );
}

export default HomePage;
