readability = require 'node-readability'

readability.read 'http://www.engadget.com/2013/03/02/nasa-spacex-dragon-capsule-to-reach-iss-on-march-3rd-at-6-01-et/', (err, article) ->
	#console.log "TITLE: #{article.getTitle()}"
	#console.log "CONTENT: #{article.getContent()}"
	console.log article.getContent().replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ')