import React, { useState } from 'react'
import './Quote.css'

const Quote = () => {
    const quotes = [
       {text: 'The only thing we have to fear is fear itself.',author: 'Franklin D. Roosevelt'}, 
       {text: 'That which does not kill us makes us stronger.',author:' Friedrich Nietzsche'} ,
       {text: 'In the middle of difficulty lies opportunity.',author:' Albert Einstein'}, 
       {text: 'It does not matter how slowly you go as long as you do not stop.',author:'Confucius'},
       {text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',author:'Winston Churchill'},
       {text: 'Life is either a daring adventure or nothing at all.',author:'Helen Keller'},
       {text: 'The best way to find yourself is to lose yourself in the service of others.',author:'Mahatma Gandhi'},
       {text: 'The purpose of our lives is to be happy.',author:'Dalai Lama'},
       {text: 'You only live once, but if you do it right, once is enough.',author:'Mae West'},
       {text: 'In three words I can sum up everything Ive learned about life: It goes on.',author:'Robert Frost'},
       {text: 'The purpose of life is to believe, to hope, and to strive.',author:'Indira Gandhi'},
       {text: 'The good life is one inspired by love and guided by knowledge.',author:'Bertrand Russell'},
       {text: 'Life is not a problem to be solved, but a reality to be experienced.',author:'Søren Kierkegaard'},
    ];

    const [isquote,setIsQuote] = useState(quotes[0]);

    const generateQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setIsQuote(quotes[randomIndex]);
    };
    
  return (
    <div className='box'>
        <div className="quote-box">
            <p className='text'>"{isquote.text}"</p>
            <p className='author'>- {isquote.author}</p>
            <button onClick={generateQuote} className='quote-button'>Next Quote</button>
        </div>
    </div>
    
  )
}

export default Quote
