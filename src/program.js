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
					name: 'cssPreprocessor',
					message: 'Select your css preprocessor',
					choices: ['Sass', 'Less', 'Stylus']
				},
				{
					type: 'list',
					name: 'apiType',
					message: 'Select your api type',
					choices: ['Graphql', 'Rest']
				},
				{
					type: 'confirm',
					name: 'isHasHeader',
					message: 'do you have Header?'
				},
				{
					type: 'confirm',
					name: 'isHasFooter',
					message: 'do you have Footer?'
				}
			])
				.then(args => {
					generator(args)
				})
		})

	program.parse(process.argv);
}

module.exports = program