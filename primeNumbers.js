showPrimes(20);

function showPrimes(limit) {
    for(let number = 2; number <= limit; number++) {
        if(primes(number)) console.log(number)
      /*let primes = true;
         for(let factor = 2; factor < number; factor++) {
            if (number % factor == 0){
            primes = false; 
            break;
            }
      }
      if(primes) console.log(number, primes)
    }*/

}
}

    function primes(number){
        for(let factor = 2; factor < number; factor++)
          if (number % factor == 0)
            return false;

        return true;
            
    }