import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/profile" Component={Profile} />
      </Routes>     
    </Router>
  );
}

export default App;
