import { useState } from 'react'
import './App.css'

function App() {

  const element = document.querySelector('.shuffle-text') as HTMLElement;

  if (element) {
    const targetText: string = element.dataset.text || '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let iterations = 0;

    const shuffleInterval = setInterval(() => {
      const scrambled = targetText
        .split('')
        .map((char, i) => {
          if (i < Math.floor(iterations)) return targetText[i];
          return chars.charAt(Math.floor(Math.random() * chars.length));
        })
        .join('');

      element.textContent = scrambled;

      iterations += 1 / 3;
      if (iterations >= targetText.length) {
        clearInterval(shuffleInterval);
        element.textContent = targetText;
      }
    }, 50);
  }
 // adaw
  return (
    <>
      {/* <div className="typewriter">
        <p>Hello, world!</p>
      </div> */}
      <div className="shuffle-text" data-text="Hello, everyone!"></div>
    </>
  )
}

export default App
