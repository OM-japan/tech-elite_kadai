$(document).ready(function(){
  $("#header").load("header.html");
});


$("body").on("click" , ".header_title, .header_menu" , function(){// クリックでスクロール移動する
    const scroll_target = $(this).find("a").attr("href");
    const target_id = scroll_target.split("#")[1];
    const scroll_position = $("#" + target_id).offset().top;
    $("html, body").animate({ scrollTop: scroll_position }, 400);
});

$("body").on("click" , ".hamburger" , function(){//ハンバーガーメニューの表示折りたたみ
  $("#hamburger").toggleClass("open");
    $(".header_menu").slideToggle();
});

$("body").on("click" , ".header_list li" , function(){//ハンバーガーメニューの表示折りたたみ
  if($(".header_list").css("display") === "block"){
    $(".header_menu").slideToggle();
    $("#hamburger").toggleClass("open");
  }
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

const cities = {
 "北海道":["札幌市", "函館市", "小樽市", "旭川市", "室蘭市", "釧路市", "帯広市", "北見市", "夕張市", "岩見沢市", "網走市", "留萌市", 
           "苫小牧市", "稚内市", "美唄市", "芦別市", "江別市", "赤平市", "紋別市", "士別市", "名寄市", "三笠市", "根室市", "千歳市", 
           "滝川市", "砂川市", "歌志内市", "深川市", "富良野市", "登別市", "恵庭市", "伊達市", "北広島市", "石狩市", "北斗市"], 
 "青森県":["青森市", "弘前市", "八戸市", "黒石市", "五所川原市", "十和田市", "三沢市", "むつ市", "つがる市", "平川市"], 
 "岩手県":["盛岡市", "宮古市", "大船渡市", "花巻市", "北上市", "久慈市", "遠野市", "一関市", "陸前高田市", "釜石市", "二戸市", "八幡平市", "奥州市", "滝沢市"], 
};

$("#Prefecture").on("change", function () {
  const selectedPrefecture = $('#Prefecture option:selected').text();
  const $citySelect = $("#cities");

  // 市区町村セレクトボックスを初期化
  const emptyOptionHtml = $citySelect.find('option[value=""]').prop('outerHTML');
  $citySelect.empty().append(emptyOptionHtml);

  // 対応する都道府県の市区町村があれば追加
  if (selectedPrefecture && cities[selectedPrefecture]) {
    $.each(cities[selectedPrefecture], function (index, city) {
      $citySelect.append($('<option>', {text: city}));
    });
  }
});

$("form").submit(function(){
  const value = $("input[name='tel']").val();
  const telregexp = /^0\d{9,10}$/;
  if(value){
    if(!telregexp.test(value)){
      $(".Form-Item-Label-telcheck").addClass("active");
      return false;
  }}
})