import { Constants } from "./Config";
import { wordDict } from "./Dictionary";

interface ErrorMessage {
  isValid: boolean,
  errorMsg: string,
}

export const Validator = {
  isLengthValid: (word: string) => {
    return word.length === Constants.WORD_LEN;
  },

  isInDictionary: (word: string) => {
    return wordDict.includes(word)
  },

  isValidWord: (word: string): ErrorMessage => {
    if(Validator.isLengthValid(word)) {
      return {
        isValid: false,
        errorMsg: `단어의 길이는 ${Constants.WORD_LEN}글자여야 합니다`
      };
    }
      
    if(!Validator.isInDictionary(word)) {
      return {
        isValid: false,
        errorMsg: '입력한 단어는 사전에 존재하는 단어여야 합니다'
      };
    }
      
    return {
      isValid: true,
      errorMsg: ''
    };
  },
}
