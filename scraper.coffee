express = require 'express'
readability = require 'node-readability'

app = express()
app.use express.static __dirname + '/public'
app.use app.router
app.use (err, req, res, next) ->
	res.send 500, 'Internal server error'

app.get '/article/:url', (req, res, next) ->
	readability.read req.params.url, (err, article) ->
		if err then return next err

		res.type 'text/plain'
		res.send 200, article.getContent().replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ')

app.listen 3001

