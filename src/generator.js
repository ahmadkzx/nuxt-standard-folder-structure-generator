const fs = require('fs')
const path = require('path')
const directories = require('./directories')

const generator = (args) => {
	const dirs = directories(args)

	dirs.forEach(dir => {
		const dirPath = path.join(process.cwd(), dir)
		fs.mkdirSync(dirPath)
	})

}

module.exports = generator