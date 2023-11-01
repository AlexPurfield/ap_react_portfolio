import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation';
import Footer from './components/Footer';
import './style/App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
