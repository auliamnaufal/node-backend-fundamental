const http = require("http")

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'application/json');

	const { url, method } = req
	let dataResponse = ''

	if (url === '/') {
		dataResponse = {
			data: 'Ini adalah halaman HomePage'
		}

	} else if (url.toLowerCase() === '/login') {
		if (method == 'POST') {
			dataResponse = {
				data: "Anda Login dengan method POST"
			}
		} else {
			dataResponse = {
				data: "Anda harus menggunakan method POST"
			}
		} 
	} else {
		dataResponse = {
			data: "404 Not Found"
		}
	}

	return res.end(JSON.stringify(dataResponse))
})

server.listen(3000, () => {
	console.log('Server berjalan pada port 3000')
})