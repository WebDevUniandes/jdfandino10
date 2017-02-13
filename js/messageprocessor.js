
function send(){

	var form = document.getElementById("contact_form");
	form.addEventListener("submit", function(event){
		event.preventDefault();

		var nombre = document.getElementById("nombre").value;
		var email = document.getElementById("email").value;
		var mensaje = document.getElementById("msg").value;
		
		emailjs.send("default_service","template_iaAFlRmw",{"name": nombre, "mail": email, "msg": mensaje})
		.then(function(response) {
			console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
			msg();
		}, function(err) {
			console.log("FAILED. error=", err);
			msg("No se ha podido enviar...<br>¡Intenta más tarde!", "error");
		});
		
		var l = document.getElementById("mail-feedback");
		var loader = document.getElementById("loader");
		l.innerHTML = "Se está enviando...";
		l.className = "loading";
		loader.className = "loader";
		window.setTimeout(msg,2000);
		function msg(msg, cls) {
		/* PARA PROBAR
		msj= "No se ha podido enviar...<br>¡Intenta más tarde!";
		cls="error"
		*/
		var l = document.getElementById("mail-feedback");
		var loader = document.getElementById("loader");
		loader.className = "";
		l.className = cls||"success";
		l.innerHTML = msg || "¡El mensaje se ha enviado<br>con éxito!";
		if(!msg){
			window.setTimeout(fadeText, 1500);
		}
	}

	function fadeText() {
		var l = document.getElementById("mail-feedback");
		var nombre = document.getElementById("nombre");
		var email = document.getElementById("email");
		var mensaje = document.getElementById("msg");
		nombre.className+=" input-white pl-fade";
		email.className+=" input-white pl-fade";
		mensaje.className+=" input-white pl-fade";
		l.className+=" fade-opacity";
		window.setTimeout(function(){
			nombre.value="";
			email.value="";
			mensaje.value="";
			window.setTimeout(function(){
				nombre.classList.remove("input-white");
				email.classList.remove("input-white");
				mensaje.classList.remove("input-white");
				nombre.classList.remove("pl-fade");
				email.classList.remove("pl-fade");
				mensaje.classList.remove("pl-fade");
				var l = document.getElementById("mail-feedback");
				l.innerHTML="";
				l.className="";
			},1000);	
		},1000)
		
	}


});
	
}