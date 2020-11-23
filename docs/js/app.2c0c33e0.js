(function(t){function e(e){for(var i,u,s=e[0],c=e[1],l=e[2],f=0,h=[];f<s.length;f++)u=s[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&h.push(r[u][0]),r[u]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);a&&a(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var i={},r={app:0},o=[];function u(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=i,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)u.d(n,i,function(e){return t[e]}.bind(null,i));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vue-minesweeper/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var a=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01e3":function(t,e,n){},"034f":function(t,e,n){"use strict";n("64a9")},"0d48":function(t,e,n){"use strict";n("01e3")},"114a":function(t,e,n){},"324b":function(t,e,n){},"3c8c":function(t,e,n){"use strict";n("c69b")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("field",{attrs:{game:t.game}})],1)},o=[],u=(n("ac6a"),n("d225")),s=n("b0b4"),c=function(){function t(e){Object(u["a"])(this,t),this.count=0,this.isOpen=!1,this.isMine=!1,this.isFlagged=!1,Object.assign(this,e)}return Object(s["a"])(t,[{key:"open",value:function(){this.isOpen=!0}},{key:"mine",value:function(){this.isMine=!0}},{key:"flag",value:function(){this.isOpen||(this.isFlagged=!0)}},{key:"unflag",value:function(){this.isFlagged=!1}}]),t}(),l=c,a=(n("6b54"),n("2397"),n("4e2b")),f=n("308d"),h=n("6bb5");function p(t){var e=m();return function(){var n,i=Object(h["a"])(t);if(e){var r=Object(h["a"])(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Object(f["a"])(this,n)}}function m(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var d=function(){function t(e){Object(u["a"])(this,t),this.name=e}return Object(s["a"])(t,[{key:"open",value:function(t,e,n){}}]),t}(),v=function(t){Object(a["a"])(n,t);var e=p(n);function n(){return Object(u["a"])(this,n),e.call(this,"INIT")}return Object(s["a"])(n,[{key:"open",value:function(t,e,n){var i={row:e,col:n};t.mine(i),t.startTimer(),t.openCell(e,n)}}]),n}(d),b=function(t){Object(a["a"])(n,t);var e=p(n);function n(){return Object(u["a"])(this,n),e.call(this,"PLAY")}return Object(s["a"])(n,[{key:"open",value:function(t,e,n){t.openCell(e,n)}}]),n}(d),g=function(t){Object(a["a"])(n,t);var e=p(n);function n(){return Object(u["a"])(this,n),e.call(this,"WIN")}return n}(d),O=function(t){Object(a["a"])(n,t);var e=p(n);function n(){return Object(u["a"])(this,n),e.call(this,"LOSE")}return n}(d),j={INIT:new v,PLAY:new b,WIN:new g,LOSE:new O},y=function(){function t(){Object(u["a"])(this,t),this.field=[],this.numRows=9,this.numCols=9,this.numMines=10,this.playTime=0,this.startTime=null,this.timer=null,this.state=j.INIT}return Object(s["a"])(t,[{key:"cellAt",value:function(t){return this.field[t.row][t.col]}},{key:"contains",value:function(t,e){return t in this.field&&e in this.field[t]}},{key:"arround",value:function(t,e){var n=this,i=[],r=function(t,e){n.contains(t,e)&&i.push({row:t,col:e})};return r(t-1,e-1),r(t-1,e),r(t-1,e+1),r(t,e-1),r(t,e+1),r(t+1,e-1),r(t+1,e),r(t+1,e+1),i}},{key:"initialize",value:function(t,e,n){this.numRows=t||this.numRows,this.numCols=e||this.numCols,this.numMines=n||this.numMines,this.numRows*this.numCols<this.numMines&&(this.numMines=Math.floor(this.numRows*this.numCols/2)),this.field=[];for(var i=0;i<this.numRows;i++){for(var r=[],o=0;o<this.numCols;o++)r.push(new l);this.field.push(r)}return this.state=j.INIT,this.stopTimer(),this.playTime=0,this.startTime=null,this}},{key:"mine",value:function(t){var e=this,n=[],i=function(){var i=Math.floor(Math.random()*e.numRows),r=Math.floor(Math.random()*e.numCols);return t.row===i&&t.col===r||n.some((function(t){return t.row===i&&t.col===r}))?"continue":void n.push({row:i,col:r})};while(n.length<this.numMines)i();n.forEach((function(t){return e.cellAt(t).mine()}));for(var r=0;r<this.field.length;r++)for(var o=0;o<this.field[r].length;o++)this.field[r][o].isMine||(this.field[r][o].count=this.arround(r,o).map((function(t){return e.cellAt(t)})).filter((function(t){return t.isMine})).length);this.state=j.PLAY}},{key:"startTimer",value:function(){var t=this;this.startTime=Date.now(),this.timer=setInterval((function(){t.playTime=Math.floor((Date.now()-t.startTime)/1e3)}),1e3)}},{key:"stopTimer",value:function(){clearInterval(this.timer)}},{key:"open",value:function(t,e){if(this.state.open(this,t,e),this.field.flat().filter((function(t){return t.isMine})).some((function(t){return t.isOpen})))return this.field.flat().forEach((function(t){return t.open()})),this.state=j.LOSE,void this.stopTimer();this.closedCount===this.numMines&&(this.state=j.WIN,this.stopTimer())}},{key:"openCell",value:function(t,e){var n=this,i=this.field[t][e];if(!i.isFlagged)if(i.isOpen){var r=this.arround(t,e).map((function(t){return n.cellAt(t)})).filter((function(t){return t.isFlagged})).length;i.count===r&&this.openNeighbors(t,e)}else i.open(),0===i.count&&this.openNeighbors(t,e)}},{key:"openNeighbors",value:function(t,e){var n=this,i=this.arround(t,e).filter((function(t){return!n.cellAt(t).isOpen})).filter((function(t){return!n.cellAt(t).isFlagged}));while(0!==i.length){var r=i.pop(),o=this.cellAt(r);o.open(),0===o.count&&this.arround(r.row,r.col).filter((function(t){return!n.cellAt(t).isOpen})).filter((function(t){return!n.cellAt(t).isFlagged})).forEach((function(t){return i.push(t)}))}}},{key:"closedCount",get:function(){return this.field.flat().map((function(t){return t.isOpen?0:1})).reduce((function(t,e){return t+e}))}},{key:"flagCount",get:function(){return this.field.flat().map((function(t){return t.isFlagged?1:0})).reduce((function(t,e){return t+e}))}}]),t}(),w=y,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field"},[n("status-bar",{attrs:{game:t.game}}),t._l(t.game.field,(function(e,i){return n("row",{key:i,attrs:{cells:e,onClickCell:function(e){return t.game.open(i,e)}}})}))],2)},k=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},t._l(t.cells,(function(e,i){return n("cell",{key:i,attrs:{obj:e,onClick:function(){return t.onClickCell(i)}}})})),1)},T=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cell",class:t.obj.isFlagged?["flag"]:t.obj.isOpen?["open",t.colorClassName]:[],on:{click:t.onClick,contextmenu:[function(e){return e.preventDefault(),t.toggleFlag(e)},function(t){t.preventDefault()}],touchstart:t.touchStart,touchend:t.touchEnd}},[t._v("\n  "+t._s(t.valueString)+"\n")])},x=[],S={props:{obj:Object,onClick:Function},computed:{colorClassName:function(){return this.obj.isMine?"color-bomb":"color-".concat(this.obj.count)},valueString:function(){return this.obj.isOpen&&0!==this.obj.count?this.obj.isMine?"＊":this.obj.count.toString():""}},data:function(){return{longPressTimer:null}},methods:{toggleFlag:function(){this.obj.isFlagged?this.obj.unflag():this.obj.flag()},touchStart:function(){this.longPressTimer=window.setTimeout(this.toggleFlag,500)},touchEnd:function(){clearTimeout(this.longPressTimer)}}},E=S,F=(n("3c8c"),n("2877")),I=Object(F["a"])(E,M,x,!1,null,"c64080ca",null),N=I.exports,R={props:{cells:Array,onClickCell:Function},components:{Cell:N}},P=R,A=(n("7a69"),Object(F["a"])(P,_,T,!1,null,"fa68dc0c",null)),L=A.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"status-bar"},[n("counter",{attrs:{title:"mines",value:t.game.numMines-t.game.flagCount}}),n("reset-button",{attrs:{game:t.game}}),n("counter",{attrs:{title:"time",value:t.game.playTime}})],1)},D=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box counter"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{staticClass:"value"},[t._v(t._s(t.value))])])},z=[],Y=(n("c5f6"),{props:{title:String,value:Number}}),B=Y,J=(n("0d48"),Object(F["a"])(B,W,z,!1,null,"1fcc2727",null)),q=J.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"padding"}),n("div",{class:["btn","box",t.color()],on:{click:function(e){return t.game.initialize()}}},[t._v("\n    "+t._s(t.text)+"\n  ")])])},H=[],K={props:{game:Object},computed:{text:function(){switch(this.game.state){case j.WIN:return"Win!";case j.LOSE:return"Lose";default:return"Reset"}}},methods:{color:function(){switch(this.game.state){case j.WIN:return"color-win";case j.LOSE:return"color-lose";default:return""}}}},Q=K,U=(n("eff6"),Object(F["a"])(Q,G,H,!1,null,"44b28255",null)),V=U.exports,X={props:{game:Object},components:{ResetButton:V,Counter:q}},Z=X,tt=(n("e0a3"),Object(F["a"])(Z,$,D,!1,null,"47413c99",null)),et=tt.exports,nt={props:{game:Object},components:{Row:L,StatusBar:et}},it=nt,rt=(n("d1ec"),Object(F["a"])(it,C,k,!1,null,"4bf90dc9",null)),ot=rt.exports,ut={name:"app",components:{Field:ot},data:function(){var t=new w;return t.initialize(9,9,10),{game:t}}},st=ut,ct=(n("034f"),Object(F["a"])(st,r,o,!1,null,null,null)),lt=ct.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(lt)}}).$mount("#app")},"615f":function(t,e,n){},"64a9":function(t,e,n){},"6c17":function(t,e,n){},"7a69":function(t,e,n){"use strict";n("615f")},c69b:function(t,e,n){},d1ec:function(t,e,n){"use strict";n("114a")},e0a3:function(t,e,n){"use strict";n("6c17")},eff6:function(t,e,n){"use strict";n("324b")}});
//# sourceMappingURL=app.2c0c33e0.js.map