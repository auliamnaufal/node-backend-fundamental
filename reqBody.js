/**
 *
 * Request Body
 *
 * Learn to parse data body from Request
 */

/**
 * Bentuk transaksi client ada 2 yaitu upload & download
 */

const http = require("http");
const queryString = require("querystring");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  let urlReq, methodReq, dataRequest;

  const chuckArr = [];
  const dataResponse = {};

  urlReq = req.url;
  methodReq = req.method ?? "GET";

  if (urlReq.toLowerCase() === "/login") {
    if (methodReq.toLowerCase() === "get") {
      dataResponse.data = "Ini adalah halaman Login";
			res.end(JSON.stringify(dataResponse))

    } else if (methodReq.toLowerCase() == "post") {
      req.on("data", (chunk) => {
				chuckArr.push(chunk)
			})

			req.on("end", () => {
				if (chuckArr.length !== 0) {
					dataRequest = Buffer.concat(chuckArr).toString()
		
		
					let requestObj = queryString.parse(dataRequest)
					dataResponse.data = requestObj
					// console.log(JSON.stringify(dataResponse))
					// res.end(JSON.stringify(dataResponse))
				}
				
				res.end(JSON.stringify(dataResponse))
			})

    } else {
			dataResponse.data = "hanya menerima method 'GET' dan 'POST'"
			res.end(JSON.stringify(dataResponse))

		}
  } else {
		dataResponse.data = "Gunakan Endpoint '/login'"
		res.end(JSON.stringify(dataResponse))

	}

	


});

server.listen(3000, () => {
	console.log("Web Server berjalan pada port 3000")
})
