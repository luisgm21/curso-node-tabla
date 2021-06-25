const argv=require('yargs').option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe:'Es la base de la tabla de multiplicar'
})
.option('l',{
    alias:'listar',
    type:'boolean',
    default: false,
    describe:'Muestra en consola la tabla'

})
.option('h',{
    alias:'hasta',
    type:'number',
    default: 10,
})
.check((argv,options)=>{
    //console.log('yargs', argv)
    if(isNaN(argv.base)){
        throw 'La base tiene que ser un numero';
    }
    if(isNaN(argv.hasta)){
        throw 'El argumento "hasta" espera un numero';
    }
    return true;
})

.argv  

//para ir probando como funciona yargs pero en la app
// console.log(argv);
// console.log('base: yarg',argv.b);

module.exports=argv;