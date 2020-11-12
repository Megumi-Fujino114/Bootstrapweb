var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides : true,
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            speed: 3000,
            autoplay: {
            delay: 8000,
            disableOnInteraction: true
  },
        });

function ajaxRequest() {
    let result = document.getElementById('result');

    let xhr = new XMLHttpRequest();

    let url = 'https://www.googleapis.com/youtube/v3/search?key=';
    let key = 'AIzaSyAKaBqtZVCaiXqPl_hBusXiW3_f_S1oRDE';
    let part = '&part=snippet&maxResults=10';
    let q = '&q=' + document.getElementById('name').value;
    let type = '&type=video';
    xhr.open('GET', url + key + part + q + type, true);
    xhr.send(null);
  }

  function renderResult(item) {
    
    //取得した内容を変数に格納
    let title = item.snippet.title;
    let thumbnail = item.snippet.thumbnails.medium;
    let videoId = item.id.videoId;

    //要素を組み立てる
    let img = document.createElement('img');
    let anchor = document.createElement('a');
    let text = document.createElement('p');
    let li = document.createElement('li');

    img.src = thumbnail.url;
    img.alt = title;
    img.width = thumbnail.width;
    img.height = thumbnail.height;
    
    anchor.href = 'https://www.youtube.com/watch?v=' + videoId;

    text.textContent = title;

    //画面に表示
    anchor.appendChild(img);
    li.appendChild(anchor);
    li.appendChild(text);
    document.getElementById('result').appendChild(li);
  }
