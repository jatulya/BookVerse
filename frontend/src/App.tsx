import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Chat from './Components/Feed/Chat';
import MainFeed from './Components/Feed/MainFeed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/profile" Component={Profile} />
        <Route path="/chatroom" Component={Chat} />
        <Route path="/feed" Component={MainFeed} />
      </Routes>     
    </Router>
  );
}

export default App;
