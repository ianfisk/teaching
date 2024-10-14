(function() {
	const INPUT_TYPE_ATTR_KEY = 'input-type';
	const TOUCH = 'TOUCH';
	const MOUSE = 'MOUSE';

	function userAgentContains(str) {
		const userAgent = navigator.userAgent ?? "";
		return userAgent.indexOf(str) !== -1;
	}

	function setInputType() {
		const isTouchDevice = userAgentContains("iPod") || userAgentContains("iPhone") || userAgentContains("Android") || userAgentContains("IEMobile");
		document.body.setAttribute(INPUT_TYPE_ATTR_KEY, isTouchDevice ? TOUCH : MOUSE);
	}

	function debounce(f, ms) {
		let timeoutId = null;
		return (...args) => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				f(...args);
			}, ms);
		};
	}

	document.addEventListener('DOMContentLoaded', function() {
		setInputType();

		window.addEventListener('resize', debounce(() => {
			setInputType();
		}, 200));
	});
})();
