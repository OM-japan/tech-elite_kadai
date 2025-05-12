function get_header_height(){// ヘッダーのheight値を取得する
    return $(".header_list").outerHeight();
}


$(document).ready(function(){
  $("#header").load("header.html");
  console.log("ヘッダーが読み込まれました");
});


$("body").on("click" , ".header_title, .header_menu" , function(){// クリックでスクロール移動する
    // console.log("クリックが認識されました")
    // debugger;
    // const scroll_target = $(this).find("a").attr("href");
    // const target_id = scroll_target.split("#")[1];
    // const scroll_position = $("#" + target_id).offset().top - get_header_height();
    // $("html, body").animate({ scrollTop: scroll_position }, 400);
    $(document).ready(function() {
  if(window.location.hash) {
    var target = $(window.location.hash);  // 例: #section2
    if (target.length) {
      // ヘッダー分を差し引いてスクロール
      $('html, body').animate({
        scrollTop: target.offset().top - get_header_height()
      }, 400);  // 400msでスクロール
    }
  }
});

$("body").on("click" , ".hamburger" , function(){//ハンバーガーメニューの表示折りたたみ
  console.log("クリックが認識されました")
  $("#hamburger").toggleClass("open");
  $(".header_menu").slideToggle();
});

$(".service_menu li").hover(
    function () {// マウスが乗ったときの処理
      $(this).addClass("active");
    },
    function () {// マウスが離れたときの処理
      const className = $(this).attr("class").split(" active")[0];
      const idSelector = "#" + className;
      if (!$(idSelector).hasClass("active")) {//service_descriptionがidのクラスがactiveでない場合
        $(this).removeClass("active");
      }
    }
  );

$(".service_menu li").click(function(){//サービス内容をクリックすると説明が表示される
    $(".service_menu li").removeClass("active")
    $(".service_description p").removeClass("active")
    const service_target_class = $(this).attr("class").split(" active")[0];
    const description_target_id = "#" + service_target_class
    $(description_target_id).addClass("active");
    $(this).addClass("active");
});

