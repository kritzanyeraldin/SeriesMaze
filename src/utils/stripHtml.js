export function stripHtml(html) {
	if (!html) return null
	return html
		.replace(/<[^>]+>/g, '')
		.replace(/\s+/g, ' ')
		.trim()
}
