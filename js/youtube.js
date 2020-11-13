$(function() {
  ajaxRequest();

  function ajaxRequest() {

    let url = 'https://www.googleapis.com/youtube/v3/search?key=';
    let key = 'AIzaSyAKaBqtZVCaiXqPl_hBusXiW3_f_S1oRDE';
    let part = '&part=snippet&maxResults=3';
    let q = '&q=おすすめ可愛い猫動画';
    // チャンネルを指定して動画を取得する場合
    // let id = '&id=UC6vH90E1cc-e1IC1_Zb5T5A';
    let type = '&type=video';
    url = url + key + part + q + type;
    // url = url + key + part + id + type;

    $.ajax({
      url: url,
      type: 'GET',
    })
    .done(function(data) {
      // JSON形式のデータが、配列の形に変換された状態で引数dataに渡されている
      console.log(data)
      renderResult(data);
    })
    .fail(function(error) {
      //サーバーエラー 
    })

  }

  function renderResult(data) {
    $('#result').text('');
    
    for (item of data.items) {
      //取得した内容を変数に格納
      let title = item.snippet.title;
      let thumbnail = item.snippet.thumbnails.medium;
      let videoId = item.id.videoId;
      let anchor = $('<a>')
                    .attr('href','https://www.youtube.com/watch?v=' + videoId);

      // let img = $('<img>').attr('src',thumbnail.url)
      //                     .attr('alt',title).attr('width',thumbnail.width)
      //                     .attr('height',thumbnail.height);
      let li = $('<li>');
      // anchor.append(img);
      li.append(anchor);
      // li.append($('<p>').text(title));


      let iframe = $('<iframe>')
                    .attr('width',thumbnail.width)
                    .attr('height',thumbnail.height)
                    .attr('src','https://www.youtube.com/embed/' + videoId)
                    .attr('frameborder',0)
                    .attr('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
                    .attr('allowFullscreen',true);
      li.append(iframe);
      $('#result').append(li);
    }



    

    // //要素を組み立てる
    // let img = document.createElement('img');
    // let anchor = document.createElement('a');
    // let text = document.createElement('p');
    // let li = document.createElement('li');
    // let iframe = document.createElement('iframe');

    // iframe.width = thumbnail.width;
    // iframe.height = thumbnail.height;
    // iframe.src = 'https://www.youtube.com/embed/' + videoId;
    // iframe.frameborder = 0;
    // iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    // iframe.allowFullscreen = true;

    // // <iframe width="560" height="315" src="https://www.youtube.com/embed/gVnqrWtS6TQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    // img.src = thumbnail.url;
    // img.alt = title;
    // img.width = thumbnail.width;
    // img.height = thumbnail.height;

    // anchor.href = 'https://www.youtube.com/watch?v=' + videoId;

    // text.textContent = title;

    // //画面に表示
    // anchor.appendChild(img);
    // li.appendChild(anchor);
    // li.appendChild(text);
    // li.appendChild(iframe);
    // document.getElementById('result').appendChild(li);
  }

});

