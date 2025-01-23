// Получение параметров из Mini App
const tg = window.Telegram.WebApp;
tg.ready();

const mseUrl = "http://berezkavideo.asuscomm.com:11984/stream.html?src=Cam&mode=mse"; // Ваш MSE URL

const video = document.getElementById('mseVideo');
video.src = mseUrl;