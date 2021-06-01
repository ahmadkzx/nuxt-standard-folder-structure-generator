const directories = ({ cssPreprocessor, apiType, isHasHeader, isHasFooter }) => {
	apiType = apiType.toLowerCase()
	cssPreprocessor = cssPreprocessor.toLowerCase()
	
	let payload = [
		'./assets',
		'./assets/js',
		'./assets/fonts',
		'./assets/img',
		`./assets/${cssPreprocessor}`,
		`./assets/${cssPreprocessor}/global`,
		`./assets/${cssPreprocessor}/modules`,
		`./assets/${cssPreprocessor}/pages`,
		`./assets/${cssPreprocessor}/components`,
		'./assets/css',
		'./config',
		'./mixins',
		'./plugins',
		'./plugins/client-side',
		'./plugins/both-side',
		'./layouts'
	]

	if (apiType === 'graphql') payload.push('./assets/api')
	if (isHasHeader) payload.push('./layouts/header')
	if (isHasFooter) payload.push('./layouts/footer')

	return payload
}

module.exports = directories