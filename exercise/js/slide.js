var oUl_img = document.getElementsByClassName('ck-slide-wrapper')[0];
var aLi_img = oUl_img.getElementsByTagName('li');
var oUl_em = document.getElementsByClassName('dot-wrap')[0];
var aLi_em = oUl_em.getElementsByTagName('li');

var num = 0;
var a = true;
var timer = null;
clearInterval(timer);
timer = setInterval(chooseImg,1000);
for (var i = 0; i < aLi_img.length; i++) {
	aLi_img[i].onmouseover = function(){a=false;};
	aLi_img[i].onmouseout = function(){a=true;};
}
function chooseImg(){
	if(a){
		for (var i = 0; i < aLi_img.length; i++) {
			aLi_img[i].style.display = "none";
			aLi_em[i].className = "";
		};
		aLi_img[num].style.display = 'block';
		aLi_em[num].className = 'current';
		num++;
		num%=aLi_img.length;
	}
}
//1.手动轮播：把选中按钮和图片添加相应类名，把原来选中的按钮和图片取消相应类名
	for(i=0;i<aLi_em.length;i++){
		aLi_em[i].index=i;//给每个按钮添加一个序号
		aLi_em[i].onmouseover=function(){
			clearInterval(m);
			if(this.className=="on"){return;}//选中当前已选中的，则不操作
			show(this.index);
		}
		aLi_em[i].onmouseout=function(){
			n=this.index+1;
			m=setInterval(nextPic, 5000);
		}
		imgs[i].onmouseover=pause;
		imgs[i].onmouseout=restart;
	}

