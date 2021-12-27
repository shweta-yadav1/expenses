import './App.css';
import MainBody from './components/main-body/MainBody'
import Header from './components/header/Header'

function App() {
  return (
    <div className="App">
     
     <div className='expense-app'><Header>
      </Header>
      <MainBody></MainBody>
      </div>
    </div>
  );
}

export default App;
