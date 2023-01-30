import logo from './logo.svg';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notification';

function App() {
  return (
    <div className='bg-[#0E1630] h-screen flex items-center justify-center'>
      <div>

        <VideoPlayer />
        <Sidebar>
          <Notifications />
        </Sidebar>
      </div>
    </div>
  )
}

export default App;
