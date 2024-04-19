// BEGIN

const Chislo =(n) => {
    
    if (n < 2) {
        return false;
    } 
    else {
        for (let i=2 ;i<n;i++) {
            if (n % i === 0) {
                return false;
            };

      }
      return true;
    }
}
const sayPrimeOrNot =(n) => {
    if (Chislo(n)) {
        console.log('yes');
    }
    else {
        console.log('no');
    }
    
}
export default sayPrimeOrNot;

// END