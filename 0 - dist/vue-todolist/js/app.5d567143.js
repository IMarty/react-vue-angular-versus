(function(t){function e(e){for(var o,u,c=e[0],l=e[1],a=e[2],d=0,f=[];d<c.length;d++)u=c[d],r[u]&&f.push(r[u][0]),r[u]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);s&&s(e);while(f.length)f.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},i=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"app"}},[n("img",{attrs:{src:t.logo,alt:"Vue logo"}}),n("h1",[t._v("Vue Todo List")]),n("section",t._l(t.list,function(e){return n("TodoItem",{key:e.id,attrs:{TodoAttribut:e},on:{delete:function(n){return t.onDeleteItem(e)}}})}),1),n("section",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.item,expression:"todo.item"}],attrs:{type:"text"},domProps:{value:t.todo.item},on:{keyup:function(e){return"keyCode"in e&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createNewToDoItem()},input:function(e){e.target.composing||t.$set(t.todo,"item",e.target.value)}}}),n("button",{on:{click:function(e){return t.createNewToDoItem()}}},[t._v("+")])])])},i=[],u=n("75fc"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("p",[t._v(t._s(t.TodoAttribut.item))]),n("button",{on:{click:function(e){return t.deleteItem()}}},[t._v("-")])])},l=[],a={name:"to-do-item",props:["TodoAttribut"],methods:{deleteItem:function(){this.$emit("delete")}}},s=a,d=n("2877"),f=Object(d["a"])(s,c,l,!1,null,"06f95d7c",null),p=f.exports,m=n("cf05"),h=n.n(m),v={data:function(){return{list:[{id:1,item:"clean the house"},{id:2,item:"buy milk"}],todo:{id:0,item:""},logo:h.a}},name:"to-do",components:{TodoItem:p},methods:{createNewToDoItem:function(){""!==this.todo.item?(this.list=[].concat(Object(u["a"])(this.list),[{id:Math.max.apply(null,this.list.map(function(t){return t.id}))+1,item:this.todo.item}]),this.todo.item=""):alert("Please enter a todo!")},onDeleteItem:function(t){this.list=this.list.filter(function(e){return e!==t})}}},b=v,y=(n("985c"),Object(d["a"])(b,r,i,!1,null,null,null)),g=y.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(g)}}).$mount("#app")},8269:function(t,e,n){},"985c":function(t,e,n){"use strict";var o=n("8269"),r=n.n(o);r.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.5d567143.js.map