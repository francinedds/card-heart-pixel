import { useState } from 'react';
import './App.css'


function App() {
  const totalFrames = 6; // Total de imagens
  const [index, setIndex] = useState(1);
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    if (index < totalFrames) {
      setIndex(index + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-neutral-950">
      <div className="w-[420px] border-[3px] border-red-800 shadow-inner rounded-sm">
        <div className="flex items-center justify-between px-3 py-4 bg-gradient-to-r from-red-800 to-red-700 text-white text-s">
          <span>My heart when I'm with you</span>
          <div className="flex gap-1">
            <button>
              <img src="public/assets/minimalize.png" alt="minimalize" className="w-[20px]"/>
            </button>
            <button>
              <img src="public/assets/close.png" alt="close" className="w-[20px]"/>
            </button>
          </div>
        </div>

        <div className="bg-neutral-300 p-5">
          <div className="flex items-center justify-center -mt-4">
            <button onClick={handleClick}><img src="public\assets\fill.png" alt="coração" id='button-heart' className="w-[100px] mx-auto"/></button>
          </div>
          <div className="flex items-center justify-center w-80 h-80 -mt-5 mx-auto">
            <img src={`public/assets/sprite-${index}.png`} alt={`frame ${index}`} className="object-contain max-w-full max-h-full" />
          </div>
          {completed && <p className="text-red-800 font-semibold">You done! I Love you!</p>}
        </div>
      </div>
    </div>
  )
}

export default App
