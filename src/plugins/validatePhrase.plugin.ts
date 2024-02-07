export const validatePhrasePlugin = (originalString: string, subString: string) => {
    for (const letter of subString) {
        if (!originalString.includes(letter)) {
          return false;
        }
      }
      return true;
  };
  