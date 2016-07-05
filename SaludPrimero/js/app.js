var main = function(){
	var url = "https://api.github.com/users/"

	$.getJSON("test.json", function(respuesta){
		respuesta.users.forEach(function(user){
			var tim = url + user.name + "?format=json&callback=?";
			var $div = $("<div>");
			var $img = $("<img>");
			var $h2 = $("<h2>");
			var $h3 = $("<h3>");
			var $h4 = $("<h4>");
			var $h42 = $("<h4>");
			var $p = $("<p>");

			if (user.name !== "octocat"){
				$div.attr("style","display: none");
			}

			$.getJSON(tim, function(reply){
				$img.attr("src", reply.data.avatar_url);
				$img.attr("height", "300");
				$h2.html(reply.data.name + " | ");
				$h3.html(reply.data.location);
				$h4.html("repositorios: " + reply.data.public_repos);
				$h42.html("followers: " + reply.data.followers);
			});
				
			$div.append($img);
			$div.append($h2);
			$div.append($h3);
			$div.append($p);
			$div.append($h4);
			$div.append($h42);
			$div.attr("class","data");
			$div.attr("id",user.name);

			$("main .users").append($div);
		});
	});
}

function cambiarSeleccionado(evt) {
    span=this;
    var items = document.getElementsByTagName("span");
    for (i = 0; i < items.length; i++) {
        if(items[i].hasAttribute("class"))
            items[i].removeAttribute("class");
    }
    span.setAttribute("class", "active");
    var data = document.getElementsByClassName("data");
    for (i = 0; i < data.length; i++) {
    	data[i].style.display = 'none';
        if(span.textContent == data[i].id){
        	console.log(span.textContent + data[i].id);
        	data[i].style.display = 'block';
        }
    }
}

function resgistrarEventos() {
    var items = document.getElementsByTagName("span");
    for (i = 0; i < items.length; i++) {
        items[i].addEventListener("click", cambiarSeleccionado, false);
    }
}

$(document).ready(main);
window.addEventListener("load", resgistrarEventos, false);