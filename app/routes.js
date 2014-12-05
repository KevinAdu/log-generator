var controller = require('./controllers');

module.exports = function(app) {

	var logFile = '';

	app.post('/log', function(req, res) {
		var log = controller.log.buildLog(req.body);
		controller.file.createLogFile(log);
		
		res.send(log);
	});

	app.get('/download', function(req, res) {
		res.download('log.txt');
	})

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
	
}