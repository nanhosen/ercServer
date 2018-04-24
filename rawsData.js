const wget = require('node-wget') 
const fs = require('fs')
const xml2js = require('xml2js')

const parser = new xml2js.Parser()

const arr = [
	{
		url: 'https://gacc.nifc.gov/gbcc/predictive/ERCMap/all_greatbasin_nfdrdate.xml',
		// url: 'http://www.directdocuments.com/GACC/FuelStatus/all_greatbasin_nfdrdate.xml',
		loc: 'allData.json',
		path: 'all_greatbasin_nfdrdate.xml'
	},
	{
		url: 'https://gacc.nifc.gov/gbcc/predictive/ERCMap/all_greatbasin_nfdrdate24.xml',
		// url: 'http://www.directdocuments.com/GACC/FuelStatus/all_greatbasin_nfdrdate24.xml',
		loc: '24Data.json',
		path: 'all_greatbasin_nfdrdate24.xml'
	},
	{
		url: 'https://gacc.nifc.gov/gbcc/predictive/ERCMap/all_greatbasin_nfdrdate48.xml',
		// url: 'http://www.directdocuments.com/GACC/FuelStatus/all_greatbasin_nfdrdate48.xml',
		loc: '48Data.json',
		path: 'all_greatbasin_nfdrdate48.xml'
	},
]

const rawsData = () => arr.map(curr => {
	const url = curr.url
	const loc = curr.loc
	const path = curr.path

	const config = {
    url: url,
    dest: './data/json', // destination path or path with filenname, default is './' 
    timeout: 20000  // duration to wait for request fulfillment in milliseconds
  }

  const callback = function(error, response, body) {
		const promise = new Promise((resolve, reject) => {
			if (error) 
				reject(error)
			else
				resolve(loc, path)
		})

		const data2json = (location, source) => {
			// const file = fs.createWriteStream(`./data/json/${location}`, {flags: 'w'})
			const file = fs.createWriteStream('./data/json/test.js', {flags: 'w'})

			fs.readFile(`./data/xml/${source}`, (err, data) => {
		    	parser.parseString(data, (err, result) => {
		      		if (err)
		      			console.log(err)
		      		else
		      			console.log(data) 
		      			file.write(JSON.stringify(result))
    			});				
			})
		}

		promise.then(data2json(loc, path), res => console.log('Error: ', res))
  }

  wget(config, callback)
})

// module.exports = rawsData
rawsData()

