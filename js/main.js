// #maria the bot
// Este es un bot de conversación bebé si quieres saber mandame un tweet a @rulotico

//----declarar var / validar / operación recurrente
//Este es un for y su formato
for (var i = 1; i <= 2; i++) {

	console.log(i);
	//Recuerden que pueden usar un if aquí dentro
	
}

//Este es un while y su formato.
var x=0;
do{

console.log(x);
x= x + 1;

}while(x<5);



// FUNCION 

flags=abc.flags;
starts=abc.starts;
user=abc.user;

var r_element=document.getElementById("respond")


function maria(res){


	// El saludo
	if (!flags.saludo) {

		// reasignación
		//----
		// conversación
		r_element.innerHTML = starts[abc.random]+", que tal.." + "¿Como te llamas?";
		// indicador
		flags.saludo=true;

		

	}else if(!flags.name){
		
		// reasignación
		user.name=res; 

		if (user.name) {

			// conversación	
			console.log(starts[random]+" "+user.name);
			console.log("Cual es tu edad?");

			// indicador
			flags.name=true;

		} else {

			r_element.innerHTML = "no me haz dado tu nombre";

		}
	

	}else if(!flags.age){

		// reasignación
		user.age=res;

		if (user.age) {

			// conversación
			console.log("Wow,"+user.name+". "+user.age+" anioos");
			console.log("Tienes algun apodo?");
			// indicador
			flags.age=true;

		} else {
			console.log("No me haz dado tu edad");
		}

	}else if(!flags.nicknames){

		// reasignación
		user.nicknames=res;

		if (user.nicknames) {
			// conversación
			console.log("oh ya veo, " + user.nicknames);

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


//Lógica de construcción
//Primero saluda ✅
//Segundo me pregunta mi nombre ✅
//Tercero me pregunta mi edad 👀
//Cuarto Tienes apodos 👀
//Despedida. 👀
