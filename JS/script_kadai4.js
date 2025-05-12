function get_header_height(){// ヘッダーのheight値を取得する
    return $(".header_list").outerHeight();
}


$(document).ready(function(){
  $("#header").load("header.html");
  console.log("ヘッダーが読み込まれました");
});


$(".header_menu").on("click" , function(){// クリックでスクロール移動する
    console.log("クリックが認識されました")
    const scroll_target = $(this).find("a").attr("href");
    const scroll_position = $(scroll_target).offset().top - get_header_height();
    $("html, body").animate({ scrollTop: scroll_position }, 400);
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

$("#hamburger").click(function(){//ハンバーガーメニューの表示折りたたみ
  $("#hamburger").toggleClass("open");
  $(".header_menu").slideToggle();
});