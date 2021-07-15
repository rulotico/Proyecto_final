// Tipos de variables

var texto = "hola como estas"; //texto
var x = 20; //númericas
var flag= true; //boolean



// #maria

//arreglos
var starts=["hola","que onda!","hey","hello"];
var chat=["a si", ["a","b","c"], "apoco"];

//objetos


//variables globales

const random = Math.floor(Math.random() * starts.length);


var flags={
	"saludo":false,
	"name":false,
	"age":false,
	"nicknames":false
}

var user={ 
	"name":"",
	"nicknames":"",
	"age":0
}

function maria(res){

	// El saludo
	if (!flags.saludo) {

		// reasignación
		//----
		// conversación
		console.log(starts[random]+", que tal..");
		console.log("Como te llamas?");
		// indicador
		flags.saludo=true;

		

	}else if(!flags.name){
		
		// reasignación
		user.name=res; 

		if (user.name) {

			// conversación	
			console.log(starts[random]+" "+user.name);
			console.log("Cual es tu edad?")

			// indicador
			flags.name=true;

		} else {

			console.log("no me haz dado tu nombre")

		}
	

	}else if(!flags.age){

		// reasignación
		user.age=res;

		if (user.age) {

			// conversación
			console.log("Wow,"+user.name+". "+user.age+" anioos");
			console.log("Tienes algun apodo?")
			// indicador
			flags.age=true;

		} else {
			console.log("No me haz dado tu edad")
		}

	}else if(!flags.nicknames){

		// reasignación
		user.nicknames=res;

		if (user.nicknames) {
			// conversación
			console.log("oh ya veo, " + user.nicknames)

			// indicador
			flags.nicknames=true;

		} else {

			console.log("No me haz dado tu apodo")

		}

	}else if(flags.nicknames||flags.name||flags.age|| flags.saludo){

			console.log("======================")
			console.log("Esta fue una buena charla, me dio gusto conocerte, me tengo que ir. BYE")
			console.log("======================")
	
	}


}



//Primero saluda ✅
//Segundo me pregunta mi nombre ✅
//Tercero me pregunta mi edad 👀
//Cuarto Tienes apodos 👀
//Despedida. 👀






// alert("Hola, si funciona");
// console.log(texto);