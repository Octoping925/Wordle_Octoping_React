import { Constants } from "./Config";
import { wordDict } from "./Dictionary";

interface ErrorMessage {
  isValid: boolean,
  errorMsg: string,
}

export const Validator = {
  isValidWord: (word: string): ErrorMessage => {
    if(word.length !== Constants.WORD_LEN) {
      return {
        isValid: false,
        errorMsg: `단어의 길이는 ${Constants.WORD_LEN}글자여야 합니다`
      };
    }
      
    if(!wordDict.includes(word)) {
      return {
        isValid: false,
        errorMsg: '입력한 단어는 사전에 존재하는 단어여야 합니다'
      };
    }
      
    return {
      isValid: true,
      errorMsg: ''
    };
  }
}
