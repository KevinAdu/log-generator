module.exports = function(app) {

	app.post('/createLog', function(req, res) {
		res.send('Your mum');
	})

	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	})
}