import logo from './logo.svg';
import './App.scss';
import Navigation from './components/Navigation/nav';
// import FeaturedVideo from './components/FeaturedVideo/FeaturedVideo';
// import Comments from './components/Comments/Comments'
import VideoList from './components/VideoList/VideoList';
import videoData from './data/videos.json';
import videoDetails from './data/video-details.json';


function App() {
  // const [planets, setPlanets] = useState(planetsData)
  // const [featuredPlanet, setFeaturedPlanet] = useState(planetsDetailsData[0])

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Hello React World</h1> */}
        <Navigation />
      </header>
      <main>
        {/* <FeaturedVideo/> */}
        {/* <Comments/> */}
      </main>
      <aside className='Video-list__Container'>
        <h2 className='Video-list__heading'>NEXT VIDEOS</h2>
        <VideoList/>
      </aside> 
    </div>
  );
}

export default App;
