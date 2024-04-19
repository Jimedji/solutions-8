const run = (text) => {
    // BEGIN
     
      const takeLast = (text, n) => {
          if (text.length === 0 || text.length < n) {
              return null;
          }
          return text.slice(-n).split('').reverse().join('');
      };
  
     return takeLast(text, 4);
  
      // END
  };
  
export default run;