import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import MyBooks from './pages/MyBooks';
import NewBook from './pages/NewBook';

function App() {


  return (
    <div>
      <Router>
      <NavigationBar/>
        <Routes>
                <Route exact path="/" Component={Home}/>
                <Route path="/mybooks" Component={MyBooks}></Route>
                <Route path="/newbook" Component={NewBook}></Route>
                    
        </Routes>
        <Footer></Footer>
      </Router>
        
    </div>
  );
}

export default App;
