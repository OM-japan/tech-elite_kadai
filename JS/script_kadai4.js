function get_header_height(){// ヘッダーのheight値を取得する
    return $(".header_list").outerHeight();
}


$(document).ready(function(){
  $("#header").load("header.html");
  console.log("ヘッダーが読み込まれました");
});


$("body").on("click" , ".header_title, .header_menu" , function(){// クリックでスクロール移動する
    console.log("クリックが認識されました")
    const scroll_target = $(this).find("a").attr("href");
    if(scroll_target.includes("#")){
      const target_id = scroll_target.split("#")[1];
      const scroll_position = $("#" + target_id).offset().top - get_header_height();
      $("html, body").animate({ scrollTop: scroll_position }, 400);
    } else
        window.location.href = scroll_target;
    }
});

$(function(){
	//現在のページURLのハッシュ部分を取得
	const hash = location.hash;

	//ハッシュ部分がある場合の条件分岐
	if(hash){
		//ページ遷移後のスクロール位置指定
		$("html, body").stop().scrollTop(0);
		//処理を遅らせる
		setTimeout(function(){
			//リンク先を取得
			const target = $(hash);
			//リンク先までの距離を取得
			position = target.offset().top - get_header_height();
			//指定の場所までスムーススクロール
			$("html, body").animate({scrollTop:position}, 500, "swing");
		},300);
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

