(function(t){function e(e){for(var i,s,u=e[0],c=e[1],l=e[2],f=0,h=[];f<u.length;f++)s=u[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);a&&a(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-minesweeper/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var a=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01e3":function(t,e,n){},"034f":function(t,e,n){"use strict";n("64a9")},"0d48":function(t,e,n){"use strict";n("01e3")},"324b":function(t,e,n){},"3c8c":function(t,e,n){"use strict";n("c69b")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"board"},[n("status-bar",{attrs:{game:t.game}}),n("field",{attrs:{game:t.game}})],1)])},o=[],s=(n("ac6a"),n("d225")),u=n("b0b4"),c=function(){function t(e){Object(s["a"])(this,t),this.count=0,this.isOpen=!1,this.isMine=!1,this.isFlagged=!1,Object.assign(this,e)}return Object(u["a"])(t,[{key:"open",value:function(){this.isOpen=!0}},{key:"mine",value:function(){this.isMine=!0}},{key:"flag",value:function(){this.isOpen||(this.isFlagged=!0)}},{key:"unflag",value:function(){this.isFlagged=!1}}]),t}(),l=c,a=(n("6b54"),n("2397"),n("4e2b")),f=n("308d"),h=n("6bb5");function p(t){var e=d();return function(){var n,i=Object(h["a"])(t);if(e){var r=Object(h["a"])(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Object(f["a"])(this,n)}}function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var m=function(){function t(e){Object(s["a"])(this,t),this.name=e}return Object(u["a"])(t,[{key:"open",value:function(t,e,n){}}]),t}(),b=function(t){Object(a["a"])(n,t);var e=p(n);function n(){return Object(s["a"])(this,n),e.call(this,"INIT")}return Object(u["a"])(n,[{key:"open",value:function(t,e,n){var i={row:e,col:n};t.mine(i),t.startTimer(),t.openCell(e,n)}}]),n}(m),v=function(t){Object(a["a"])(n,t);var e=p(n);function n(){return Object(s["a"])(this,n),e.call(this,"PLAY")}return Object(u["a"])(n,[{key:"open",value:function(t,e,n){t.openCell(e,n)}}]),n}(m),g=function(t){Object(a["a"])(n,t);var e=p(n);function n(){return Object(s["a"])(this,n),e.call(this,"WIN")}return n}(m),O=function(t){Object(a["a"])(n,t);var e=p(n);function n(){return Object(s["a"])(this,n),e.call(this,"LOSE")}return n}(m),j={INIT:new b,PLAY:new v,WIN:new g,LOSE:new O},y=function(){function t(){Object(s["a"])(this,t),this.field=[],this.numRows=9,this.numCols=9,this.numMines=10,this.playTime=0,this.startTime=null,this.timer=null,this.state=j.INIT}return Object(u["a"])(t,[{key:"cellAt",value:function(t){return this.field[t.row][t.col]}},{key:"contains",value:function(t,e){return t in this.field&&e in this.field[t]}},{key:"arround",value:function(t,e){var n=this,i=[],r=function(t,e){n.contains(t,e)&&i.push({row:t,col:e})};return r(t-1,e-1),r(t-1,e),r(t-1,e+1),r(t,e-1),r(t,e+1),r(t+1,e-1),r(t+1,e),r(t+1,e+1),i}},{key:"initialize",value:function(t,e,n){this.numRows=t||this.numRows,this.numCols=e||this.numCols,this.numMines=n||this.numMines,this.numRows*this.numCols<this.numMines&&(this.numMines=Math.floor(this.numRows*this.numCols/2)),this.field=[];for(var i=0;i<this.numRows;i++){for(var r=[],o=0;o<this.numCols;o++)r.push(new l);this.field.push(r)}return this.state=j.INIT,this.stopTimer(),this.playTime=0,this.startTime=null,this}},{key:"mine",value:function(t){var e=this,n=[],i=function(){var i=Math.floor(Math.random()*e.numRows),r=Math.floor(Math.random()*e.numCols);return t.row===i&&t.col===r||n.some((function(t){return t.row===i&&t.col===r}))?"continue":void n.push({row:i,col:r})};while(n.length<this.numMines)i();n.forEach((function(t){return e.cellAt(t).mine()}));for(var r=0;r<this.field.length;r++)for(var o=0;o<this.field[r].length;o++)this.field[r][o].isMine||(this.field[r][o].count=this.arround(r,o).map((function(t){return e.cellAt(t)})).filter((function(t){return t.isMine})).length);this.state=j.PLAY}},{key:"startTimer",value:function(){var t=this;this.startTime=Date.now(),this.timer=setInterval((function(){t.playTime=Math.floor((Date.now()-t.startTime)/1e3)}),1e3)}},{key:"stopTimer",value:function(){clearInterval(this.timer)}},{key:"open",value:function(t,e){if(this.state.open(this,t,e),this.field.flat().filter((function(t){return t.isMine})).some((function(t){return t.isOpen})))return this.field.flat().forEach((function(t){return t.open()})),this.state=j.LOSE,void this.stopTimer();this.closedCount===this.numMines&&(this.state=j.WIN,this.stopTimer())}},{key:"openCell",value:function(t,e){var n=this,i=this.field[t][e];if(!i.isFlagged)if(i.isOpen){var r=this.arround(t,e).map((function(t){return n.cellAt(t)})).filter((function(t){return t.isFlagged})).length;i.count===r&&this.openNeighbors(t,e)}else i.open(),0===i.count&&this.openNeighbors(t,e)}},{key:"openNeighbors",value:function(t,e){var n=this,i=this.arround(t,e).filter((function(t){return!n.cellAt(t).isOpen})).filter((function(t){return!n.cellAt(t).isFlagged}));while(0!==i.length){var r=i.pop(),o=this.cellAt(r);o.open(),0===o.count&&this.arround(r.row,r.col).filter((function(t){return!n.cellAt(t).isOpen})).filter((function(t){return!n.cellAt(t).isFlagged})).forEach((function(t){return i.push(t)}))}}},{key:"closedCount",get:function(){return this.field.flat().map((function(t){return t.isOpen?0:1})).reduce((function(t,e){return t+e}))}},{key:"flagCount",get:function(){return this.field.flat().map((function(t){return t.isFlagged?1:0})).reduce((function(t,e){return t+e}))}}]),t}(),w=y,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"status-bar"},[n("counter",{attrs:{title:"mines",value:t.game.numMines-t.game.flagCount}}),n("reset-button",{attrs:{game:t.game}}),n("counter",{attrs:{title:"time",value:t.game.playTime}})],1)},k=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box counter"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{staticClass:"value"},[t._v(t._s(t.value))])])},T=[],M=(n("c5f6"),{props:{title:String,value:Number}}),x=M,S=(n("0d48"),n("2877")),E=Object(S["a"])(x,_,T,!1,null,"1fcc2727",null),F=E.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"padding"}),n("div",{class:["btn","box",t.color()],on:{click:function(e){return t.game.initialize()}}},[t._v("\n    "+t._s(t.text)+"\n  ")])])},N=[],R={props:{game:Object},computed:{text:function(){switch(this.game.state){case j.WIN:return"Win!";case j.LOSE:return"Lose";default:return"Reset"}}},methods:{color:function(){switch(this.game.state){case j.WIN:return"color-win";case j.LOSE:return"color-lose";default:return""}}}},P=R,A=(n("eff6"),Object(S["a"])(P,I,N,!1,null,"44b28255",null)),L=A.exports,$={props:{game:Object},components:{ResetButton:L,Counter:F}},D=$,W=(n("e0a3"),Object(S["a"])(D,C,k,!1,null,"47413c99",null)),z=W.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field"},t._l(t.game.field,(function(e,i){return n("row",{key:i,attrs:{cells:e,onClickCell:function(e){return t.game.open(i,e)}}})})),1)},B=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},t._l(t.cells,(function(e,i){return n("cell",{key:i,attrs:{obj:e,onClick:function(){return t.onClickCell(i)}}})})),1)},q=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cell",class:t.obj.isFlagged?["flag"]:t.obj.isOpen?["open",t.colorClassName]:[],on:{click:t.onClick,contextmenu:[function(e){return e.preventDefault(),t.toggleFlag(e)},function(t){t.preventDefault()}],touchstart:t.touchStart,touchend:t.touchEnd}},[t._v("\n  "+t._s(t.valueString)+"\n")])},H=[],K={props:{obj:Object,onClick:Function},computed:{colorClassName:function(){return this.obj.isMine?"color-bomb":"color-".concat(this.obj.count)},valueString:function(){return this.obj.isOpen&&0!==this.obj.count?this.obj.isMine?"＊":this.obj.count.toString():""}},data:function(){return{longPressTimer:null}},methods:{toggleFlag:function(){this.obj.isFlagged?this.obj.unflag():this.obj.flag()},touchStart:function(){this.longPressTimer=window.setTimeout(this.toggleFlag,500)},touchEnd:function(){clearTimeout(this.longPressTimer)}}},Q=K,U=(n("3c8c"),Object(S["a"])(Q,G,H,!1,null,"c64080ca",null)),V=U.exports,X={props:{cells:Array,onClickCell:Function},components:{Cell:V}},Z=X,tt=(n("7a69"),Object(S["a"])(Z,J,q,!1,null,"fa68dc0c",null)),et=tt.exports,nt={props:{game:Object},components:{Row:et}},it=nt,rt=(n("d98c"),Object(S["a"])(it,Y,B,!1,null,"6dcbd505",null)),ot=rt.exports,st={name:"app",components:{Field:ot,StatusBar:z},data:function(){var t=new w;return t.initialize(9,9,10),{game:t}}},ut=st,ct=(n("034f"),n("b654"),Object(S["a"])(ut,r,o,!1,null,"30aa90c0",null)),lt=ct.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(lt)}}).$mount("#app")},"5dbc":function(t,e,n){},"615f":function(t,e,n){},"64a9":function(t,e,n){},"6c17":function(t,e,n){},"7a69":function(t,e,n){"use strict";n("615f")},b654:function(t,e,n){"use strict";n("5dbc")},be7b:function(t,e,n){},c69b:function(t,e,n){},d98c:function(t,e,n){"use strict";n("be7b")},e0a3:function(t,e,n){"use strict";n("6c17")},eff6:function(t,e,n){"use strict";n("324b")}});
//# sourceMappingURL=app.76032345.js.map