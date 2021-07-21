// main.js Tipos de variables

var texto = "hola como estas"; //texto 
var x = 20; //numericas
var flag= true; //boolean

// #panfilo

// Objeto maestro
var abc={
	"starts":["hola crayola", "que pasop", "hey", "hello"],
	//random  =  Math.floor(Math.random() * starts.length);
	"flags":{"saludo": false, "name": false, "age":false, "nicknames":false},
	"user":{"name":"", "nicknames":"", "age":0},
	"random":undefined
}

abc. random = Math.floor(Math.random() * abc.starts.length)


//arreglos
var starts=["hola crayola", "que pasop", "hey", "hello"];
var chat=["woow", ["super", "que bien", "no"], "como crees"];
const random  =  Math.floor(Math.random() * starts.length);


//objetos

var user={ 
	"name":"",
	"nicknames":"",
	"age":0,
	"second_name":""
}

//variables globales
var  flag_saludo = false ;
var  flag_name = false ;

var flags={
	"saludo": false,
	"name": false,
	"age":false,
	"nicknames":false
}


var x = 0;
x=+ 1;



//----declarar var / validar / operación recurrente

for (var i = 1; i < 20; i++) {
	console.log(i);
	
}

var x=0

do{
console.log(0);
x= x + 1;

}while(x<20);


function panfilo(res){

	flags=abc.flags;
	starts=abc.starts;
	user=abc.user;



function panfilo(res){

	// El saludo
	if ( !flags.saludo ) {
		// reasignación
		//----
		// conversación
		console.log (starts[random]+", que pasop .." );
		console.log ("¿Como te llamas?");
		//indicador
		flags.saludo = true ;
	} else  if (!flags.name ) {

		//reasignación
		usuario.name = res ;

			//conversación
		console.log (starts[ random ] + " " +user.name);
		console.log("Cual es tu edad")

		//indicador
		flags.name=true;
	
	}else if(!flags.age){
		//reasignación
		user.age=res;

		//conversación
				console.log("Wow,"+user.name+" "+user.age+"anioos");
				console.log("Tienes algun apodo?")

				//indicador
				flags.name=true;

}else if(!flags.nicknames){

	//reasignación
		user.age=res;

		if (user.nicknames)

		//conversación
		console.log("oh ya veo, " + user.nicknames)

		//indicador
		flags.nicknames=true;

}else if (flags.nicknames || flags.name || flags.age ||  flags.saludo){
		console.log ("==================")
		console.log ("Esta fue una buena charla, me io gusto conocerte, me tengo que ir, Adios")
		console.log ("==================")
}



	//cuando corra la función saludar responda un saludo random

//alert ("Hola, si funciona el alert");

//console.log(texto);

	// if (! nombre de usuario) {
	// console.log ("Hola, ¿como te llamas?");
	//}

	// console.log (comienza [1] + "" + nombre.usuario);
	// cuando corra la función saludar responda un saludo random


// Primero saluda ✅
// Segundo me pregunta mi nombre
// Tercero me pregunta mi edad
// Si tengo auto o no?
// Tienes apodos
// Despedida. 

