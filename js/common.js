$(function(){
  console.log($("body"));
  console.log(window.location.href);
  console.log($(location).attr("href"));
  function splitLocation(el){
    let href = el.attr("href").split("/");
    href = href[href.length-1].split(".");
    href = href[0];
    return href;
  }
  let currentHref = splitLocation($(location));
  $("#lnb a").each(function(){
    if( splitLocation($(this)) == splitLocation($(location)) ){
      $(this).addClass("on");
    };
    // script 영역 아코디언
    $(".accordion dd:not(:first)").css({
      "display":"none",
      "height": 0
    })
    $(".accordion dl dt").click(function(){
      let thisElem = $(this);
      let isAni = $("dd").is(":animated");
      if( !isAni ){
        if($("+dd",thisElem).css("display") == "none"){
          $(".accordion dd").each(function(){
            console.log($(this).css("height")); //300
            if( parseInt($(this).css("height")) == 300 )
            $(this).animate({ height: 0 },1000, function(){
              $(this).css("display","none");
            });
          });
          $("+dd",thisElem).css("display","block").animate({ height: 300 },300); //열림
        }
      }
    });
  });
});
