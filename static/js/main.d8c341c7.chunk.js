(window.webpackJsonpsnek=window.webpackJsonpsnek||[]).push([[0],{16:function(t,n,e){t.exports=e(29)},21:function(t,n,e){},28:function(t,n,e){},29:function(t,n,e){"use strict";e.r(n);var r=e(0),i=e.n(r),o=e(11),c=e.n(o),a=(e(21),e(4)),u=e(3);function l(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){e.current=t}),[t]),Object(r.useEffect)((function(){if(null!==n){var t=setInterval((function(){e.current()}),n);return function(){clearInterval(t)}}}),[n])}var d=e(7),f=e(1),s=e(2);function b(){var t=Object(f.a)(["\n\tfont-size: 20px;\n\tmargin: 10px;\n\tpadding: 5px;\n\tbackground-color: transparent;\n\tborder: 4px solid orange;\n\tborder-radius: 10px;\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: 4vw;\n\t}\n"]);return b=function(){return t},t}function h(){var t=Object(f.a)(["\n\tfont-size: 20px;\n\tmargin: 10px;\n\tpadding: 5px;\n\tbackground-color: orange;\n\tborder: 4px solid orange;\n\tborder-radius: 10px;\n\tcolor: white;\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: 4vw;\n\t}\n"]);return h=function(){return t},t}function p(){var t=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n"]);return p=function(){return t},t}var g=s.b.div(p()),m=s.b.button(h()),w=s.b.p(b());var x=function(t){var n=t.onClick,e=t.score,r=t.highScore;return i.a.createElement(g,null,i.a.createElement(m,{onClick:n},"PLAY"),i.a.createElement(w,null,"Score: ",e),i.a.createElement(w,null,"High Score: ",r))};function v(){var t=Object(f.a)(["\n\twidth: 3px;\n\theight: 3px;\n\tborder-radius: 50%;\n\tbackground-color: black;\n\t@media screen and (max-width: 600px) {\n\t\twidth: 1px;\n\t\theight: 1px;\n\t}\n"]);return v=function(){return t},t}function j(){var t=Object(f.a)(["\n\twidth: 5px;\n\theight: 5px;\n\tborder-radius: 50%;\n\tbackground-color: white;\n\tdisplay: flex;\n\talign-items: ",";\n\tjustify-content: ",";\n\t@media screen and (max-width: 600px) {\n\t\twidth: 3px;\n\t\theight: 3px;\n\t}\n"]);return j=function(){return t},t}function O(){var t=Object(f.a)(["\n\twidth: 30px;\n\theight: 30px;\n\tbackground-color: blue;\n\tdisplay: flex;\n\tborder-top-right-radius: ",";\n\tborder-bottom-right-radius: ",";\n\tborder-bottom-left-radius: ",";\n\tborder-top-left-radius: ",";\n\topacity: ",";\n\t@media screen and (max-width: 600px) {\n\t\twidth: 5vw;\n\t\theight: 5vw;\n\t}\n"]);return O=function(){return t},t}function k(){var t=Object(f.a)(["\n\twidth: 30px;\n\theight: 30px;\n\tbackground-color: blue;\n\tdisplay: flex;\n\tflex-direction: ",";\n\tborder-top-right-radius: ",";\n\tborder-bottom-right-radius: ",";\n\tborder-bottom-left-radius: ",";\n\tborder-top-left-radius: ",";\n\talign-items: center;\n\tjustify-content: space-around;\n\t@media screen and (max-width: 600px) {\n\t\twidth: 5vw;\n\t\theight: 5vw;\n\t}\n"]);return k=function(){return t},t}function E(){var t=Object(f.a)(["\n\t\t\tborder-","-radius: 50%;\n\t\t"]);return E=function(){return t},t}function y(){var t=Object(f.a)(["\n\twidth: 30px;\n\theight: 30px;\n\tbackground-color: blue;\n\tdisplay: flex;\n\t","\n\t@media screen and (max-width: 600px) {\n\t\twidth: 5vw;\n\t\theight: 5vw;\n\t}\n"]);return y=function(){return t},t}function S(){var t=Object(f.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: rgba(50, 168, 82, ",");\n\tfont-size: 24px;\n\t@media screen and (max-width: 600px) {\n\t\tfont-size: 3vw;\n\t}\n"]);return S=function(){return t},t}function A(){var t=Object(f.a)(["\n\tdisplay: grid;\n\tgrid-template-rows: repeat(17, 30px);\n\tgrid-template-columns: repeat(17, 30px);\n\tmargin: 5px;\n\t@media screen and (max-width: 600px) {\n\t\tgrid-template-rows: repeat(17, 5vw);\n\t\tgrid-template-columns: repeat(17, 5vw);\n\t}\n"]);return A=function(){return t},t}var C=s.b.div(A()),z=s.b.div(S(),(function(t){return t.number%2===0?.8:.5})),M=s.b.div(y(),(function(t){return t.corner&&Object(s.a)(E(),t.corner)})),I=s.b.div(k(),(function(t){return"up"===t.direction||"down"===t.direction?"row":"column"}),(function(t){return"right"===t.direction||"up"===t.direction?"50%":0}),(function(t){return"right"===t.direction||"down"===t.direction?"50%":0}),(function(t){return"left"===t.direction||"down"===t.direction?"50%":0}),(function(t){return"left"===t.direction||"up"===t.direction?"50%":0})),R=s.b.div(O(),(function(t){return"left"===t.direction||"down"===t.direction?"50%":0}),(function(t){return"left"===t.direction||"up"===t.direction?"50%":0}),(function(t){return"right"===t.direction||"up"===t.direction?"50%":0}),(function(t){return"right"===t.direction||"down"===t.direction?"50%":0}),(function(t){return t.opacity})),L=s.b.div(j(),(function(t){return"down"===t.direction?"flex-end":"up"===t.direction?"flex-start":"center"}),(function(t){return"right"===t.direction?"flex-end":"left"===t.direction?"flex-start":"center"})),P=s.b.div(v());var B=function(t){var n=t.snake,e=t.food,o=t.foodPosition,c=t.direction,a=t.tailAppearing,d=Object(r.useState)(1),f=Object(u.a)(d,2),s=f[0],b=f[1],h=Object(r.useState)(null),p=Object(u.a)(h,2),g=p[0],m=p[1];function w(t,n){switch(t-n){case 1:return"right";case-1:return"left";case 17:return"down";case-17:return"up";case-16:return"right";case 16:return"left";case-272:return"down";case 272:return"up";default:return}}function x(t,e){return"right"===c&&n[t]%17!==0||"left"===c&&n[t]%17!==16||"down"===c&&n[t]>16||"up"===c&&n[t]<272?w(n[t],n[e]):c}return l((function(){s<1&&b(s+.1)}),g),Object(r.useEffect)((function(){a&&(b(0),m(100))}),[a]),i.a.createElement(C,null,Array.from(Array(289).keys()).map((function(t){return i.a.createElement(z,{key:t,number:t},n[n.length-1]===t?i.a.createElement(I,{direction:x(n.length-1,n.length-2)},i.a.createElement(L,{direction:x(n.length-1,n.length-2)},i.a.createElement(P,null)),i.a.createElement(L,{direction:x(n.length-1,n.length-2)},i.a.createElement(P,null))):n[0]===t?i.a.createElement(R,{direction:w(n[1],n[0]),opacity:s}):n.includes(t)?i.a.createElement(M,{corner:function(){return function(t){var e=n.indexOf(t),r=n[e-1],i=n[e+1];return"right"===w(t,r)&&"down"===w(i,t)||"up"===w(t,r)&&"left"===w(i,t)?"top-right":"up"===w(t,r)&&"right"===w(i,t)||"left"===w(t,r)&&"down"===w(i,t)?"top-left":"down"===w(t,r)&&"left"===w(i,t)||"right"===w(t,r)&&"up"===w(i,t)?"bottom-right":"left"===w(t,r)&&"up"===w(i,t)||"down"===w(t,r)&&"right"===w(i,t)?"bottom-left":null}(t)}}):t===o&&e)})))};function D(){var t=Object(f.a)(["\n\tfont-size: 24px;\n\tmargin: 5px;\n\tbackground-color: white;\n\tborder: 3px solid orange;\n\tborder-radius: 10px;\n\tcolor: orange;\n\tfont-weight: bold;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\t@media screen and (max-width: 600px) {\n\t\twidth: 12vw;\n\t\theight: 12vw;\n\t}\n"]);return D=function(){return t},t}function J(){var t=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n"]);return J=function(){return t},t}function K(){var t=Object(f.a)(["\n\t@media screen and (min-width: 600px) {\n\t\tdisplay: none;\n\t}\n"]);return K=function(){return t},t}var N=s.b.div(K()),W=s.b.div(J()),Y=s.b.button(D());var G=function(t){var n=t.onClick;return i.a.createElement(N,null,i.a.createElement(W,null,i.a.createElement(Y,{onClick:function(){return n({key:"ArrowUp"})}},"\u2191")),i.a.createElement(W,null,i.a.createElement(Y,{onClick:function(){return n({key:"ArrowLeft"})}},"\u2190"),i.a.createElement(Y,{onClick:function(){return n({key:"ArrowDown"})}},"\u2193"),i.a.createElement(Y,{onClick:function(){return n({key:"ArrowRight"})}},"\u2192")))};function H(){var t=Object(f.a)(["\n\tmargin: 10px;\n\tpadding: 5px;\n\tbackground-color: orange;\n\tborder: 4px solid orange;\n\tborder-radius: 10px;\n\tcolor: white;\n"]);return H=function(){return t},t}function T(){var t=Object(f.a)(["\n\tcolor: white;\n"]);return T=function(){return t},t}function U(){var t=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbackground-color: blue;\n\tpadding: 15px;\n\tborder-radius: 10px;\n"]);return U=function(){return t},t}function $(){var t=Object(f.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tvisibility: ",";\n"]);return $=function(){return t},t}var q=s.b.div($(),(function(t){return t.visible?"visible":"hidden"})),F=s.b.div(U()),Q=s.b.h3(T()),V=s.b.button(H());var X=function(t){var n=t.visible,e=t.onClick;return i.a.createElement(q,{visible:n},i.a.createElement(F,null,i.a.createElement(Q,null,"Game over!"," ",i.a.createElement("span",{role:"img","aria-label":"snake"},"\ud83d\udc0d")),i.a.createElement(V,{onClick:e},"Close")))};function Z(){var t=Object(f.a)(["\n\tmargin: 10px;\n\tpadding: 5px;\n\tfont-size: 16px;\n\tbackground-color: white;\n\tborder: 4px solid orange;\n\tborder-radius: 10px;\n"]);return Z=function(){return t},t}function _(){var t=Object(f.a)(["\n\tcolor: white;\n"]);return _=function(){return t},t}function tt(){var t=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100%;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbackground-color: blue;\n\tpadding: 15px;\n\tborder-radius: 10px;\n"]);return tt=function(){return t},t}var nt=s.b.div(tt()),et=s.b.p(_()),rt=s.b.button(Z());var it=function(t){var n=t.onAccept,e=t.onReject;return i.a.createElement(nt,null,i.a.createElement(et,null,"This game uses cookies to save your high score, but can function without them. Is this OK with you?"),i.a.createElement(rt,{onClick:e},"No thanks"),i.a.createElement(rt,{onClick:n},"Yep, no problem"))};e(28);var ot=function(){var t=[137,138,139,140],n=Object(r.useState)(t),e=Object(u.a)(n,2),o=e[0],c=e[1],f=Object(r.useState)("right"),s=Object(u.a)(f,2),b=s[0],h=s[1],p=Object(r.useState)(null),g=Object(u.a)(p,2),m=g[0],w=g[1],v=Object(r.useState)(0),j=Object(u.a)(v,2),O=j[0],k=j[1],E=Object(r.useState)(!0),y=Object(u.a)(E,2),S=y[0],A=y[1],C=Object(d.b)(["highScore","cookiesAccepted"]),z=Object(u.a)(C,2),M=z[0],I=z[1],R=Object(r.useState)(M.highScore||0),L=Object(u.a)(R,2),P=L[0],D=L[1],J=Object(r.useState)(M.cookiesAccepted||!1),K=Object(u.a)(J,2),N=K[0],W=K[1],Y=Object(r.useState)(!1),H=Object(u.a)(Y,2),T=H[0],U=H[1],$=Object(r.useState)(!1),q=Object(u.a)($,2),F=q[0],Q=q[1],V=Object(r.useState)(null),Z=Object(u.a)(V,2),_=Z[0],tt=Z[1],nt=Object(r.useState)(null),et=Object(u.a)(nt,2),rt=et[0],ot=et[1],ct=["\ud83c\udf4e","\ud83c\udf4f","\ud83c\udf53","\ud83e\udd6d","\ud83c\udf50","\ud83c\udf4c","\ud83c\udf45","\ud83e\udd55","\ud83e\udd54","\ud83e\udd6c"],at=Object(r.useCallback)((function(){var t=Math.floor(289*Math.random());return o.includes(t)?at():t}),[o]);function ut(t){var n=t.key;if(0===n.indexOf("Arrow")){var e=n.replace("Arrow","").toLowerCase();h(e)}}return l((function(){var t=function(){switch(o.shift(),b){case"right":return o[o.length-1]%17===16?[].concat(Object(a.a)(o),[o[o.length-1]-16]):[].concat(Object(a.a)(o),[o[o.length-1]+1]);case"left":return o[o.length-1]%17===0?[].concat(Object(a.a)(o),[o[o.length-1]+16]):[].concat(Object(a.a)(o),[o[o.length-1]-1]);case"down":return 272<=o[o.length-1]&&o[o.length-1]<=288?[].concat(Object(a.a)(o),[o[o.length-1]-272]):[].concat(Object(a.a)(o),[o[o.length-1]+17]);case"up":return 0<=o[o.length-1]&&o[o.length-1]<=16?[].concat(Object(a.a)(o),[o[o.length-1]+272]):[].concat(Object(a.a)(o),[o[o.length-1]-17]);default:return o}}();c(t)}),m),Object(r.useEffect)((function(){o[o.length-1]===_?(c([o[0]-(o[1]- -1*o[0])].concat(Object(a.a)(o))),U(!0),ot(ct[Math.floor(Math.random()*ct.length)]),tt(at()),k(O+10),w(.98*m)):o.slice(0,o.length-1).includes(o[o.length-1])?(c(t),h("right"),w(null),tt(null),O>P&&(D(O),N&&I("highScore",O)),k(0),Q(!0)):U(!1)}),[o,_,tt,at,c,O,P,k,m,w,M,I,ct,t,N]),i.a.createElement("div",{className:"App",role:"button",tabIndex:"0",onKeyDown:ut},S&&!N&&i.a.createElement(it,{onAccept:function(){W(!0),I("cookiesAccepted",!0)},onReject:function(){return A(!1)}}),i.a.createElement("div",null,i.a.createElement(x,{onClick:function(){c(t),h("right"),k(0),ot(ct[Math.floor(Math.random()*ct.length)]),tt(at()),w(500)},score:O,highScore:P}),i.a.createElement(B,{snake:o,food:rt,foodPosition:_,direction:b,tailAppearing:T}),i.a.createElement(G,{onClick:ut}),i.a.createElement(X,{visible:F,onClick:function(){return Q(!1)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(d.a,null,i.a.createElement(ot,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.d8c341c7.chunk.js.map