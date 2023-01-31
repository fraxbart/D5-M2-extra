// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

   /*  const giveMeRandom= function (n){
        const array = [];
        for(let i=0; i<=n;i++){
            array.push(Math.floor(Math.random()*10));
        }
        return array;
    }


    const checkArray = function(array){
        let somma=0;
        for(let i=0;i<=array.length;i++){
            if(array[i]>5){
                return true;
                somma=somma+array[i];
            }else{
                return false;

            }

       }
        console.log('la somma dei numeri è' +somma);
    }

    checkArray(giveMeRandom(5)); */

/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const shoppingCart = [
    {
      id: 321,
      name: 'Bluetooth Headphones',
      price: 100,
      quantity: 2,
    },
    {
      id: 123,
      name: 'Laptop',
      price: 1000,
      quantity: 1,
    },
    {
      id: 213,
      name: 'USB Drive',
      price: 20,
      quantity: 5,
    },
  ]

  const shoppingCartTotal = function (){
    let somma=0;
    let i=0;
    for(i=0;i<=shoppingCart.length;i++){
        somma=somma+shoppingCart[i].price+shoppingCart[i].quantity;
    }

    return somma;
  }
  console.log(shoppingCartTotal()); */

/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart1. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart1 e ritorna il numero totale degli oggetti in esso contenuti.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const shoppingCart1 = {
    id: 132,
    name: 'Wireless Keyboard',
    price: 30,
    quantity: 2,
  }

  const addToShoppingCart = function(nuovooggetto){
    const ogg = shoppingCart1.push(nuovooggetto);
    return ogg;

  }
  console.log(addToShoppingCart(nuovooggetto)); */


/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const shoppingCart = [
    {
      id: 321,
      name: 'Bluetooth Headphones',
      price: 100,
      quantity: 2,
    },
    {
      id: 123,
      name: 'Laptop',
      price: 1000,
      quantity: 1,
    },
    {
      id: 213,
      name: 'USB Drive',
      price: 20,
      quantity: 5,
    },
  ]

  const maxShoppingCart = function (shoppingCart){
    let massimo=0;
    let i=0;
    for(i=0;i<=shoppingCart.length;i++){
        if(shoppingCart[i]>massimo){
            massimo=shoppingCart[i];

        }
    }
    return massimo;
  }
  console.log(maxShoppingCart(shoppingCart)); */

/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const shoppingCart = [
    {
      id: 321,
      name: 'Bluetooth Headphones',
      price: 100,
      quantity: 2,
    },
    {
      id: 123,
      name: 'Laptop',
      price: 1000,
      quantity: 1,
    },
    {
      id: 213,
      name: 'USB Drive',
      price: 20,
      quantity: 5,
    },
  ]

  const latestShoppingCart = function (shoppingCart){
    let ultimoelemento = shoppingCart[shoppingCart.lenght-1];
    return ultimoelemento;

  }
  console.log(latestShoppingCart(shoppingCart)); */



/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 /*  const loopUntil = function(n){
    let contatore=0;
    while(contatore!=3){
    let numerorandom=Math.floor(Math.random() * 10);
    
    if(numerorandom>n){
     contatore++
    }else{
        contatore=0;
    }
    console.log(numerorandom);
}

  } */


/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  /* const average = function (array){
    const numeriarr = [];
    let i=0;
    for(i=0; i<=array.length;i++){
        if(typeof array[i] == 'number'){
            numeriarr.push(array[i]);
        }
    }
    let somma=0;
    let media=0
    let contatore=0;
    let j=0;
    for(j=0; j<=numeriarr.length;j++){
        somma=somma+numeriarr[j];
        contatore++;
    }
    media=somma/contatore;
    return media;

  }

  console.log(average(['strive', 5, 2, '4', { name: 'school' }, 8, 9])) */



/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 /* const longest = function(array){
    let stringapiulunga=array[0];
    let i=0;
    for(i=0;i<=stringapiulunga.lenght;i++){
        stringapiulunga=array[i];
    }
    return stringapiulunga;
 }
 console.log(longest(['strive', 'school', 'developer', 'student'])) */

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  const antispam = function(emailContent){
    if(emailContent.includes("SPAM") || emailContent.includes("SCAM")){
        return true;
    }else{
        return false;
    }

 }
 console.log(antiSpam('A SPAM MESSAGE'))
 console.log(antiSpam('Personal invitation')) */


/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* const howManyDays = function (selectedDate){
    let today = new Date()
    let difference = today - selectedDate
    return Math.floor(difference / (1000 * 60 * 60 * 24))
}

console.log(howManyDays(new Date('2009-05-03'))) */


/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* const matrixGenerator = function (x, y) {
    let matrix = []
    for (let i = 0; i < y; i++) {
      for (let j = 0; j < x; j++) {
        matrix.push(i.toString() + j.toString())
      }
    }
    let charsPerRow = matrix.length / y
    for (let z = 0; z < y; z++) {
      console.log(matrix.slice(z * charsPerRow, (z + 1) * charsPerRow))
    }
  } */