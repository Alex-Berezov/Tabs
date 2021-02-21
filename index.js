const tabsBtns = document.querySelectorAll('.tabs_btns ul li'),
	allContent = document.querySelectorAll('.content')

for (let tabsBtn of tabsBtns) {
	tabsBtn.addEventListener('click', () => {
		for (let btn of tabsBtns) {
			btn.classList.remove('selected')
		}
		tabsBtn.classList.add('selected')

		for (var elem of allContent) {
			if (elem.getAttribute('id') == tabsBtn.classList[0]) {
				for (let el of allContent) {
					el.classList.remove('visible')
				}
				elem.classList.add('visible')

			} else if (tabsBtn.classList[0] == 'all') {
				elem.classList.add('visible')
			}
		}
	})
}