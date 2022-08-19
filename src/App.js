import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Books from './Components/Books';
import Categories from './Components/Categories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
