import './styles/style.css';
import MainRouter from './MainRouter';
import Footer from './components/Footer';
import Header from './components/Header';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      {/* This is layout structure of main app  */}
      <Background/>
      <Header/>
      {/* This is main dynamic routing
      here content is dynamic i.e. Content is changed */}
      <main className='py-12 container mx-auto'>
        <MainRouter/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
