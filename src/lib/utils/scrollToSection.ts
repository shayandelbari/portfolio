export function scrollToSection(id: string, offset = 0) {
	const el = document.getElementById(id);
	if (!el) return;

	const y = el.offsetTop - offset;

	window.scrollTo({
		top: y,
		behavior: 'smooth'
	});
}
