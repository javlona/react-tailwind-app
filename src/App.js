import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="max-w-sm rounded shadow-lg">
        <img src='https://source.unsplash.com/random' className='w-full'/>
        <div className='px-6 py-4'>
          <div className='font-bold text-black text-xl mb-2'>
            Photo by Picasso
          </div>
          <ul>
            <li>
              <strong>Views:</strong>
              4000
            </li>
            <li>
              <strong>Downloads:</strong>
              4000
            </li>
            <li>
              <strong>Likes:</strong>
              4000
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
