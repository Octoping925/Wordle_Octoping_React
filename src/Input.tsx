import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

interface InputProp {
    onSubmit: Function,
};

function Input({onSubmit}: InputProp) { 
    const handleKeyPress = (e : React.KeyboardEvent<HTMLInputElement>) => {
        const wordInputElement = document.getElementById("wordInput") as HTMLInputElement;
        const wordInputValue = wordInputElement.value;
    
        if(e.key === 'Enter') {
            onSubmit(wordInputValue);
            wordInputElement.value = '';
        }
        else {
          wordInputElement.value = wordInputValue.replace(/[^A-Za-z]/ig, '')
                                                  .substring(0, 5)
                                                  .toUpperCase();
        }
      };

    return (
        <input
        id="wordInput"
        onKeyUp={handleKeyPress}></input>
    );
}

export default Input;