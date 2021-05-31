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
					name: 'css',
					message: 'Select your css preprocessor',
					choices: ['Sass', 'Less', 'Stylus']
				},
				{
					type: 'list',
					name: 'api',
					message: 'Select your api type',
					choices: ['Graphql', 'Rest']
				},
				{
					type: 'confirm',
					name: 'header',
					message: 'do you have Header?'
				},
				{
					type: 'confirm',
					name: 'footer',
					message: 'do you have Footer?'
				}
			])
				.then( ({ selected }) => {
					generator(selected)
				})
		})

	program.parse(process.argv);
}

module.exports = program