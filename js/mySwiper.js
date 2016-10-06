$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'vertical',
	    mousewheelControl : true,
	    keyboardControl : true,
	    simulateTouch : false,
	    paginationClickable :true,
	    swipeHandler : '.swipe-handler',
	    //loop: true,
	    
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    
	    // 如果需要滚动条
	    //scrollbar: '.swiper-scrollbar',
	    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		  }, 
		  onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		    if(swiper.activeIndex!=0){
		    	$(".navbar").addClass("down");
		    	$(".navbar-right li a").addClass("down");
		    }else{
		    	$(".navbar").removeClass("down");
		    	$(".navbar-right li a").removeClass("down");
		    }
		  }
	  }) 
})