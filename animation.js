onload = () => {
	const c = setTimeout(() => {
		document.body.classList.remove("not-loaded");
		clearTimeout(c);
	}, 1000);
};

const textElements = document.querySelectorAll('.text');

function animateText() {
  let delay = 0;
  textElements.forEach((textElement) => {
    setTimeout(() => {
      textElement.style.animation = 'fadeIn 6.5s ease-in-out forwards';
    }, delay);
    delay += 150;
  });

  setTimeout(() => {
    const rocket = document.querySelector('.rocket');
    rocket.style.animation = 'flyUp 2s ease-in-out forwards';
  }, delay + 500);
}

animateText();