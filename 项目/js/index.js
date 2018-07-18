$(function(){
	var btn1= $(".btn1");
	var title=$(".title");
	var box = $(".box");
	var btn2=$(".btn2");
	title.show("2000",function(){
		box.fadeIn("4000",function(){
			btn1.fadeIn("4000",function(){
				btn2.fadeIn("4000")
			})
			
		})
	});
//  btn1.on("click",function(){
//  	title.fadeout("2000",function(){
//		    box.fadeout("4000",function(){
//		    	btn1.fadeout("4000",function(){
//		    		btn2.fadeout("4000")
//			    })
//			
//		})
//  })

	
	
	
	
})
