const http = require('http')
const url = require('url')
const queryString = require('querystring')

const server = http.createServer((req, res) => {
	res.setHeader("Content-Type", "application/json")

	let urlRequest,	// Berisi Path yang terdapat di request
	urlObj,				// Berisi URL yang telah diproses 
	urlQuery,			// Object dari Query
	dataResponse	// Object dari query yang sudah di parsing

	urlRequest = req.url

	// Convert urlRequest menjadi object
	urlObj = url.parse(urlRequest)
	console.log(urlObj);

	// Mengambil property yang terdapat di object url
	urlQuery = urlObj.query

	if (!urlQuery) {
		dataResponse = {
			message: "Query tidak ditemukan"
		}

		return res.end(JSON.stringify(dataResponse))
	}

	dataResponse = queryString.parse(urlQuery)
	return res.end(JSON.stringify(dataResponse))
})



server.listen(3000, () => {
	console.log("Web Server berjalan pada port 3000")
})