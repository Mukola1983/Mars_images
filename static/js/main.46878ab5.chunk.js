(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{24:function(t,e,c){t.exports={image:"RoverImages_image__oZNN-",active:"RoverImages_active__aw8FW"}},53:function(t,e,c){t.exports={box:"PhotosControl_box__1cKFH",image:"PhotosControl_image__2mp2N"}},66:function(t,e,c){t.exports={button:"PageControl_button__ejqWM",buttonBox:"PageControl_buttonBox__2h9UK"}},69:function(t,e,c){t.exports={navbar:"App_navbar__1SjPI",image:"App_image__ncL4N",active:"App_active__1-eD7"}},79:function(t,e,c){},85:function(t,e,c){"use strict";c.r(e);var r=c(0),n=c(38),a=c.n(n),o=(c(79),c(13)),s=c(110),i=c(112),u=c(111),j=c(113),p=c(108),l=c(11),b=c(60),O=function t(){Object(b.a)(this,t)};O.checkStatus=function(t){if(t.status>=200&&t.status<300)return t;var e=new Error(t.statusText);throw e.response=t,e},O.parseJSON=function(t){return t.json()},O.fetchJSON=function(t){return fetch(t).then(O.checkStatus).then(O.parseJSON)},O.curiosity="https://media.istockphoto.com/photos/mars-rover-robotic-space-autonomous-vehicle-on-a-deserted-planet-with-picture-id1006754478?k=6&m=1006754478&s=612x612&w=0&h=_Hi8PjNujyMRYbgQ4Dc73dKTs6kcd9UGK_nN2m-Q7QA=",O.spirit="https://www.usnews.com/dims4/USNEWS/65864f1/2147483647/resize/640x/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fdbimages%2Fmaster%2F13635%2FFE_PR_091112NASArover.jpg",O.opportynity="https://solarsystem.nasa.gov/system/content_pages/main_images/1057_1057_rover2_768.jpg";var d={rover:"Curiosity",curiosity:!1,spirit:!1,opportynity:!1},v="CHANGE_ROVER",h="CURIOSITY_ACTIVE",y="SPIRIT_ACTIVE",g="OPPORTYNITY_ACTIVE",m=c(2);function f(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.roverReduser.rover}));return Object(m.jsxs)(s.a,{children:[Object(m.jsx)(i.a,{variant:"h5",children:"Choose your Rover"}),Object(m.jsxs)(u.a,{value:e,onChange:function(e){var c;t((c=e.target.value,{type:v,payloud:c}))},children:[Object(m.jsx)(j.a,{value:"Curiosity",control:Object(m.jsx)(p.a,{}),label:"Curiosity"}),Object(m.jsx)(j.a,{value:"Opportunity",control:Object(m.jsx)(p.a,{}),label:"Opportunity"}),Object(m.jsx)(j.a,{value:"Spirit",control:Object(m.jsx)(p.a,{}),label:"Spirit"})]})]})}var x=c(105),_=c(107),R={maxSol:3213,curentSol:1},N="CHANGE_MAX_SOL",S="CURENT_SOL",P=function(t){return{type:N,payloud:t}},C={curentPage:1},E="INCREMENT_PAGE",w="DECREMENT_PAGE",A="UPDATE_PAGE";function T(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.solReduser.maxSol})),c=Object(o.c)((function(t){return t.solReduser.curentSol})),n=Object(o.c)((function(t){return t.roverReduser.rover}));return Object(r.useEffect)((function(){var e;"Curiosity"===n&&(t(P(3213)),t({type:h,payloud:e})),"Spirit"===n&&(t(P(2208)),t(function(t){return{type:y,payloud:t}}())),"Opportunity"===n&&(t(P(5111)),t(function(t){return{type:g,payloud:t}}()))}),[n]),console.log("deploy"),Object(m.jsxs)(x.a,{spacing:2,children:[Object(m.jsx)(i.a,{variant:"h6",children:"Sol: "}),Object(m.jsx)(_.a,{color:"primary",count:e,page:c,onChange:function(e,c){t({type:S,payloud:c}),t(function(t){return{type:A,payloud:t}}())}})]})}var I=c(114),k=c(67),F=c.n(k),D=c(68),J=c.n(D),G=c(66),M=c.n(G);function U(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.pageReduser.curentPage}));return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h3",{children:["page: ",e]}),Object(m.jsxs)("div",{className:M.a.buttonBox,children:[Object(m.jsx)(I.a,{variant:"contained",size:"small",type:"submit",onClick:function(){var c;e>1&&t({type:w,payloud:c})},children:Object(m.jsx)(F.a,{})}),Object(m.jsx)(I.a,{sx:{m:2},variant:"contained",size:"small",type:"submit",onClick:function(){var e;t({type:E,payloud:e})},children:Object(m.jsx)(J.a,{})})]})]})}var B=c(15),H={photos:[]},K="ADD_API",V="59CDafTnK5TeXMtpaRwlrBGoJJ0WoLciNEVfIe5z",W=c(53),z=c.n(W);function L(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.photosReduser.photos})),c=Object(o.c)((function(t){return t.roverReduser.rover})),n=Object(o.c)((function(t){return t.solReduser.curentSol})),a=Object(o.c)((function(t){return t.pageReduser.curentPage}));return Object(r.useEffect)((function(){var e,r,o,s;(e=c,r=a,o=n,O.fetchJSON("HTTPS://api.nasa.gov/mars-photos/api/v1/rovers/".concat(e,"/photos?sol=").concat(o,"&page=").concat(r,"&").concat(s,"&api_key=").concat(V))).then((function(e){var c;t((c=e.photos,{type:K,payloud:c}))}))}),[c,a,n]),Object(m.jsx)("div",{children:e.length>0?Object(m.jsx)("div",{className:z.a.box,children:e.map((function(t){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:t.img_src,alt:"",className:z.a.image})},t.id)}))}):Object(m.jsx)("div",{children:Object(m.jsx)("h2",{children:"Photos list is empty!"})})})}var Y=c(69),Q=c.n(Y),q=c(24),X=c.n(q);function Z(){var t=Object(o.c)((function(t){return t.roverReduser.curiosity})),e=Object(o.c)((function(t){return t.roverReduser.spirit})),c=Object(o.c)((function(t){return t.roverReduser.opportynity}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{src:O.curiosity,alt:"",className:t?"".concat(X.a.image," ").concat(X.a.active):"".concat(X.a.image," ")}),Object(m.jsx)("img",{src:O.spirit,alt:"",className:e?"".concat(X.a.image," ").concat(X.a.active):"".concat(X.a.image," ")}),Object(m.jsx)("img",{src:O.opportynity,alt:"",className:c?"".concat(X.a.image," ").concat(X.a.active):"".concat(X.a.image," ")})]})}function $(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:Q.a.navbar,children:[Object(m.jsx)(f,{}),Object(m.jsx)(Z,{})]}),Object(m.jsx)(T,{}),Object(m.jsx)(U,{}),Object(m.jsx)(L,{})]})}var tt=c(37),et=c(70),ct=c(71),rt=Object(tt.combineReducers)({roverReduser:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(l.a)(Object(l.a)({},t),{},{rover:e.payloud});case h:return Object(l.a)(Object(l.a)({},t),{},{curiosity:!0,spirit:!1,opportynity:!1});case y:return Object(l.a)(Object(l.a)({},t),{},{curiosity:!1,spirit:!0,opportynity:!1});case g:return Object(l.a)(Object(l.a)({},t),{},{curiosity:!1,spirit:!1,opportynity:!0});default:return t}},photosReduser:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;return e.type===K?Object(l.a)(Object(l.a)({},t),{},{photos:Object(B.a)(e.payloud)}):t},solReduser:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N:return Object(l.a)(Object(l.a)({},t),{},{maxSol:e.payloud});case S:return Object(l.a)(Object(l.a)({},t),{},{curentSol:e.payloud});default:return t}},pageReduser:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case E:return Object(l.a)(Object(l.a)({},t),{},{curentPage:t.curentPage+1});case w:return Object(l.a)(Object(l.a)({},t),{},{curentPage:t.curentPage-1});case A:return Object(l.a)(Object(l.a)({},t),{},{curentPage:1});default:return t}}}),nt=Object(tt.createStore)(rt,Object(et.composeWithDevTools)(Object(tt.applyMiddleware)(ct.a)));a.a.render(Object(m.jsx)(o.a,{store:nt,children:Object(m.jsx)($,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.46878ab5.chunk.js.map