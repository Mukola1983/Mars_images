(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),o=n(4),r=n.n(o),a=(n(10),n(3)),i=n(5),u=function t(){Object(i.a)(this,t)};u.checkStatus=function(t){if(t.status>=200&&t.status<300)return t;var e=new Error(t.statusText);throw e.response=t,e},u.parseJSON=function(t){return t.json()},u.fetchJSON=function(t){return fetch(t).then(u.checkStatus).then(u.parseJSON)},u.curiosity="url(https://media.istockphoto.com/photos/mars-rover-robotic-space-autonomous-vehicle-on-a-deserted-planet-with-picture-id1006754478?k=6&m=1006754478&s=612x612&w=0&h=_Hi8PjNujyMRYbgQ4Dc73dKTs6kcd9UGK_nN2m-Q7QA=)",u.spirit="url(https://www.usnews.com/dims4/USNEWS/65864f1/2147483647/resize/640x/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fdbimages%2Fmaster%2F13635%2FFE_PR_091112NASArover.jpg)",u.opportynity="url(https://solarsystem.nasa.gov/system/content_pages/main_images/1057_1057_rover2_768.jpg)";var p="59CDafTnK5TeXMtpaRwlrBGoJJ0WoLciNEVfIe5z",h=n(0);function l(){var t=Object(s.useState)("dfsdfsd"),e=Object(a.a)(t,2),n=e[0],c=e[1],o=Object(s.useState)(""),r=Object(a.a)(o,2),i=r[0],l=r[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:n}),Object(h.jsx)("button",{onClick:function(){var t,e,n,s;(t="Curiosity",e=1,n=1,u.fetchJSON("https://api.nasa.gov/mars-photos/api/v1/rovers/".concat(t,"/photos?sol=").concat(n,"&page=").concat(e,"&").concat(s,"&api_key=").concat(p))).then((function(t){console.log(t.photos)})).catch((function(){}))},children:"sssss"}),Object(h.jsx)("input",{type:"text",onChange:function(t){t.preventDefault(),l(t.target.value)}}),Object(h.jsx)("button",{onClick:function(){c(i)},children:"clsssick"})]})}var f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),s(t),c(t),o(t),r(t)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(l,{})}),document.getElementById("root")),f()}},[[12,1,2]]]);
//# sourceMappingURL=main.e400b48a.chunk.js.map