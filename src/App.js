import './App.css';
import Navbar from './Navbar';
import Overview from './Overview';
import ProductGraph from './ProductGraph';

function App() {
  return (
    <>
    <div className='static'>
      <Navbar />
    </div>
    <div className='body'>
      <div className='overview column'>
      <Overview />
      </div>
      <div className='infographics column'>
      <ProductGraph />
      </div>
    </div>
    </>
  );
}

export default App;
