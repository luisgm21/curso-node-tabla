const {crearArchivo}=require('./helpers/multiplicar')
const argv=require('./config/yargs')


require('colors')
          



console.clear();

 crearArchivo(argv.b,argv.l,argv.h)
 .then(msg=>console.log(msg.rainbow,'creado'))
 .catch(err=>console.log(err));

//Trabajando 
// const[ , ,arg3='base=5']=process.argv;
// const[,base=5]=arg3.split('=');
// console.log(base);

//funcion de multiplicar la desplazamos al helper porque el app tiene que estar lo mas limpio posible
// const base=5;

// for (let i = 1; i < 11; i++) {
//    console.log(`${base} X ${i} = ${base*i}`);
// }


// const base=8;