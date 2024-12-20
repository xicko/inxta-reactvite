import { useState } from 'react';
import './App.css';
import './index.css';
import Hero from './components/Hero';
import Background from './components/Background';
import Main from './components/Main';
import Footer from './components/Footer';
import Modal from './components/Modal';
import LocomotiveScroll from './components/LocomotiveScroll';
import FadeIn from './components/FadeIn';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <main className="App customfont-base">
      <Background />
      
      <LocomotiveScroll>
        <FadeIn>
          <Hero setIsVisible={setIsVisible}/>
        </FadeIn>

        <FadeIn>
          <Main setIsVisible={setIsVisible}/>
        </FadeIn>

        <FadeIn>
          <Footer />
        </FadeIn>
      </LocomotiveScroll>

      
      <Modal className={`transition-opacity ease-in-out duration-150 ${isVisible ? 'opacity-100 block' : 'opacity-0 hidden'}`} setIsVisible={setIsVisible}/>
      
    </main>
  );
}

export default App;