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

document.addEventListener('DOMContentLoaded', function () {
  // document.getElementById('btn').addEventListener('click', function () {
    ajaxRequest();
  // });

  function ajaxRequest() {
    let result = document.getElementById('result');

    let xhr = new XMLHttpRequest();
    // リクエストを投げられるようになる
    // NEWって書くと実体するというのと同じ意味合い

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          result.textContent = '';
          console.log(xhr.responseText);
          let res = JSON.parse(xhr.responseText);
          console.log(res);
          for (item of res.items) {
            renderResult(item);
          }

        } else {
          result.textContent = 'サーバーエラー';
        }
      } else {
        result.textContent = '通信中';
      }
    }

    let url = 'https://www.googleapis.com/youtube/v3/search?key=';
    let key = 'AIzaSyC12zZnei-w1S0Bc4UU5XcxW3htm4RiLn8';
    let part = '&part=snippet&maxResults=1';
    // let q = '&q=' + document.getElementById('name').value;
    let q = '&q=cat';
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

});


