const { prompt } = require('inquirer')
const { Command } = require('commander')
const generator = require('./generator')

const program = () => {
	const program = new Command()

	program
		.command('generate')
		.description('generate standard folder structure')
		.action(() => {
			prompt([
				{
					type: 'list',
					name: 'selected',
					message: 'Select your css preprocessor',
					choices: ['Sass', 'Less', 'Stylus']
				}
			])
				.then( ({ selected }) => {
					generator(selected)
				})
		})

	program.parse(process.argv);
}

module.exports = program