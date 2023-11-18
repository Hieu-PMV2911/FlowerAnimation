onload = () => {
	const c = setTimeout(() => {
		document.body.classList.remove("not-loaded");
		clearTimeout(c);
	}, 1000);
};

document.addEventListener('DOMContentLoaded', function() {
  var audioPlayer = document.getElementById('audioPlayer');
  var startButton = document.getElementById('not-loaded');

  startButton.addEventListener('click', function() {
    // Phát nhạc khi người dùng nhấp vào nút "Bắt đầu"
    audioPlayer.play();
    startButton.style.background = 'none'; // Ẩn nút "Bắt đầu"
  });

  audioPlayer.addEventListener('play', function() {
    // Cập nhật giao diện người dùng khi nhạc được phát
    console.log('Nhạc đang phát...');
  });

  audioPlayer.addEventListener('pause', function() {
    // Cập nhật giao diện người dùng khi nhạc tạm dừng
    console.log('Nhạc đã tạm dừng.');
  });

  audioPlayer.addEventListener('ended', function() {
    // Reset trạng thái khi nhạc kết thúc
    console.log('Nhạc đã kết thúc.');
    audioPlayer.currentTime = 0;
    startButton.style.display = 'block'; // Hiển thị lại nút "Bắt đầu"
  });
});

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