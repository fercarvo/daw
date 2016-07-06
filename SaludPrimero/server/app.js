var Server = require('socket.io');
var io = new Server();

io.listen(3000);

io.on('nuevo examen', function (data) {


	var fs = require('fs');
	function appendObject(data){
	  var configFile = fs.readFileSync('../SaludPrimero/json/examen.json');
	  config.push(data);
	  fs.writeFileSync('../SaludPrimero/json/examen.json', data);
	}
});