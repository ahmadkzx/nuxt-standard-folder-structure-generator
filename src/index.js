import { Command } from 'commander/esm.mjs'
const program = new Command()

program
  .command('init')
	.description('init standard folder structure')
	.action(() => {
		prompt([
			{
				type: 'list',
				name: 'selected',
				message: 'Select your css preprocessor',
				choices: ['Sass', 'Less', 'Stylus']
			}
		])
			.then((a) => {
				console.log(a)
			})
	})

program.parse(process.argv);