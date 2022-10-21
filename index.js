const fibonacci = ( num )=>{

  let anterior = 0;
  let siguiente = 1;
  
  let fibonacci = [1];
  
  while(fibonacci.length < num){
    siguiente = anterior + siguiente
    fibonacci.push(siguiente)
    anterior = siguiente - anterior
  }
  
  return fibonacci
  
}


console.log(fibonacci(6))