import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingAnimation from './components/LoadingAnimation';
import Header from './views/Header'
import Footer from './views/Footer'
import ThankYou from './components/ThankYouAnimation'



function App() {
  const [animation, setAnimation] = useState(0)

  setTimeout(function () { setAnimation(1) }, 2500);

  if (animation === 0) {
    return (
      <div className="App">
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Footer />
      <ThankYou />
    </div>
  );
}

export default App;
