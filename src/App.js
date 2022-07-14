import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './components/Main'

function App() {
  return (
    <div id='wrapper'>
      <BrowserRouter>
        <nav className='container'>
          <Link to='/'>Home</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
