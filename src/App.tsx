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
import { Dialog } from "@headlessui/react"; // asset modal

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

      <Dialog open={isVisible} onClose={() => setIsVisible(false)} transition className='transition duration-200 ease-out data-[closed]:opacity-0'>
        <Modal setIsVisible={setIsVisible} className={''}/>
      </Dialog>
    </main>
  );
}

export default App;