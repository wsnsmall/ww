"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),Bullet=function(){function e(t,l){_classCallCheck(this,e);var n=[document.createElement("div"),parseInt(1e8*Math.random())];this.ele=n[0],this.id=n[1]}return _createClass(e,[{key:"init",value:function(){return gameEngine.allBullet[this.id]=this,gameEngine.ele.appendChild(this.ele),this.ele.className="bullet",this.ele.style.left=myPlane.ele.offsetLeft+myPlane.ele.offsetWidth/2-this.ele.offsetWidth/2+"px",this.ele.style.top=myPlane.ele.offsetTop-this.ele.offsetHeight+"px",this}},{key:"move",value:function(){var e=this;this.timer=setInterval(function(){var t=e.ele.offsetTop-10;t<-18?(clearInterval(e.timer),gameEngine.ele.removeChild(e.ele),delete gameEngine.allBullet[e.id]):e.ele.style.top=t+"px"},50)}},{key:"boom",value:function(){clearInterval(this.timer),this.ele.className="bullet-die";var e=this,t=["images2/die1.png","images2/die2.png"],l=0,n=setInterval(function(){l>=1?(clearInterval(n),gameEngine.ele.removeChild(e.ele)):e.ele.style.background="url("+t[++l]+") no-repeat"},100)}}]),e}();