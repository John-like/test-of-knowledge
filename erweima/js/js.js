$("#btn").click(function(){
   $("#aaa").hide();
});
$("#sbtn").click(function(){
   $("#aaa").show();
});
$("#prt").click(function(){
	
  var bdhtml=$('body').html();
  //获取当前页的html代码
  $('body').html(' ')
 	 console.log(bdhtml)
   $('body').html(bdhtml)
});