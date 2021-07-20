// #maria the bot
// Este es un bot de conversación bebé si quieres saber mandame un tweet a @rulotico

//----declarar var / validar / operación recurrente
for (var i = 1; i < 2000; i++) {
	console.log(i)
	
}




function maria(res){

	flags=abc.flags;
	starts=abc.starts;

	// El saludo
	if (!flags.saludo) {

		// reasignación
		//----
		// conversación
		console.log(starts[abc.random]+", que tal..");
		console.log("Como te llamas?");
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

			console.log("no me haz dado tu nombre");

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
