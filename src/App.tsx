import './App.css';
import React from 'react';
import cat from '../src/assets/images/cat-1.jpg'
import cat2 from '../src/assets/images/cat@2x.png'
import cat3 from '../src/assets/images/cat@3x.png'


function App() {
    return (
        <div className="App">
            <p>Hello, Retina &#128075;</p>

            {/* {<div className={'bg'}></div>} */}
            <img src={cat} srcSet={`${cat2} 2x, ${cat3} 3x`} alt="cat" />
    
            <picture>
                <source srcSet={`${cat2} 2x, ${cat} 1x`}/>
                <source srcSet={`${cat2} 2x, ${cat} 1x`}/>
                <img src={cat} alt="" />
            </picture>

         <figure>
         <img src={cat} srcSet={`${cat2} 2x, ${cat3} 3x`} alt="" />
         <figcaption>Super cat</figcaption>
         </figure>

        </div>
    );
}

export default App;
