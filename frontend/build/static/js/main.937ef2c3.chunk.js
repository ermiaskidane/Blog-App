(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},66:function(e,t,c){},69:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(19),r=c.n(s),i=c(6),o=c(21),l=c(53),j=c(54),b="USER_LOGIN_REQUEST",u="USER_LOGIN_SUCCESS",d="USER_LOGIN_FAIL",m="USER_LOGOUT",p="USER_REGISTER_REQUEST",h="USER_REGISTER_SUCCESS",O="USER_REGISTER_FAIL",x=Object(o.combineReducers)({userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{loading:!0};case u:return{loading:!1,userInfo:t.payload};case d:return{loading:!1,error:t.payload};case m:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{loading:!0};case h:return{loading:!1,userInfo:t.payload};case O:return{loading:!1,error:t.payload};default:return e}}}),f={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},g=[l.a],v=Object(o.createStore)(x,f,Object(j.composeWithDevTools)(o.applyMiddleware.apply(void 0,g))),N=(c(23),c(4)),_=c(9),y=c(3),w=(c(66),c(0)),k=["btn--primary","btn--outline"],S=["btn--medium","btn--large"],E=function(e){var t=e.children,c=e.type,a=e.onClick,n=e.buttonStyle,s=e.buttonSize,r=k.includes(n)?n:k[0],i=S.includes(s)?s:S[0];return Object(w.jsx)(y.b,{to:"/sign-up",className:"btn-mobile",children:Object(w.jsx)("button",{className:"btn ".concat(r," ").concat(i),onClick:a,type:c,children:t})})},I=(c(69),function(e){var t=e.history,c=Object(a.useState)(""),n=Object(N.a)(c,2),s=n[0],r=n[1];return Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.trim()?t.push("/blogs/search/".concat(s)):t.push("/blogs/all")},className:"searchInput",children:[Object(w.jsx)("input",{type:"text",name:"q",onChange:function(e){return r(e.target.value)},placeholder:"Search Articles...",className:"searchInput--box"}),Object(w.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Search"})]})}),C=c(5),A=c.n(C),T=c(8),R=c(10),L=c.n(R),F=function(e,t){return function(){var c=Object(T.a)(A.a.mark((function c(a){var n,s,r;return A.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,a({type:b}),n={headers:{"Content-Type":"application/json"}},c.next=5,L.a.post("/api/users/login",{email:e,password:t},n);case 5:s=c.sent,r=s.data,a({type:u,payload:r}),localStorage.setItem("userInfo",JSON.stringify(r)),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),a({type:d,payload:c.t0.response&&c.t0.response.data.message?c.t0.response.data.message:c.t0.message});case 14:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(e){return c.apply(this,arguments)}}()},U=(c(89),function(){var e=Object(a.useState)(!1),t=Object(N.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(N.a)(s,2),o=(r[0],r[1]),l=Object(i.b)(),j=Object(i.c)((function(e){return e.userLogin})).userInfo,b=function(){return n(!c)},u=function(){window.innerWidth<=960?o(!1):o(!0)};Object(a.useEffect)((function(){u()}),[]),window.addEventListener("resize",u);return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("nav",{className:"navbar",children:Object(w.jsxs)("div",{className:"navbar-container",children:[Object(w.jsxs)(y.b,{to:"/blogs/all",className:"navbar-logo",onClick:b,children:["TRVL ",Object(w.jsx)("i",{className:"fab fa-typo3"})]}),Object(w.jsx)("div",{className:"searchBar",children:Object(w.jsx)(_.a,{render:function(e){var t=e.history;return Object(w.jsx)(I,{history:t})}})}),Object(w.jsx)("div",{className:"menu-icon",onClick:function(){return n(!c)},children:Object(w.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(w.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(_.a,{render:function(e){var t=e.history;return Object(w.jsx)(I,{history:t})}})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(y.b,{to:"/",className:"nav-links",onClick:b,children:"Home"})}),Object(w.jsxs)("li",{className:"nav-item",children:[Object(w.jsx)(y.b,{to:"/blogs/all",className:"nav-links nav-userInfo",onClick:b,children:"Blogs"}),Object(w.jsxs)("div",{className:"nav-dropdown",children:[Object(w.jsx)(y.b,{to:"/blogs/all",children:"Blogs"}),j?Object(w.jsx)(y.b,{to:"/edit",children:"Edit Blogs"}):Object(w.jsx)(w.Fragment,{})]})]}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(y.b,{to:"/products",className:"nav-links",onClick:b,children:"Add Blog"})}),j?Object(w.jsxs)("li",{className:"nav-item",children:[Object(w.jsx)(y.b,{to:"/",className:"nav-links nav-userInfo",children:j.name}),Object(w.jsxs)("div",{className:"nav-dropdown-prof",children:[Object(w.jsx)("p",{children:"Profile"}),Object(w.jsx)("p",{onClick:function(){l((function(e){localStorage.removeItem("userInfo"),e({type:m})}))},children:"Logout"})]})]}):Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(y.b,{to:"/sign-up",className:"nav-links",onClick:b,children:"Sign up"})})]})]})})})}),q=(c(90),function(){return Object(w.jsxs)("div",{className:"hero-container",children:[Object(w.jsx)("h1",{children:"ADVENTURE AWAITS"}),Object(w.jsx)("p",{children:"What are you waiting for?"}),Object(w.jsxs)("div",{className:"hero-btns",children:[Object(w.jsx)(E,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GET STARTED"}),Object(w.jsxs)(E,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey"),children:["WATCH TRAILER ",Object(w.jsx)("i",{className:"far fa-play-circle"})]})]})]})}),z=function(e){var t=e.path,c=e.label,a=e.src,n=e.text;return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("li",{className:"cards__item",children:Object(w.jsxs)(y.b,{className:"cards__item__link",to:t,children:[Object(w.jsx)("figure",{className:"cards__item__pic-wrap","data-category":c,children:Object(w.jsx)("img",{src:a,alt:"Travel Image",className:"cards__item__img"})}),Object(w.jsx)("div",{className:"cards__item__info",children:Object(w.jsx)("h5",{className:"cards__item__text",children:n})})]})})})},B=(c(91),function(){var e=Object(a.useState)([]),t=Object(N.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),r=Object(N.a)(s,2),i=r[0],o=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(T.a)(A.a.mark((function e(){var t,c,a,s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("/api/articles/all/");case 2:for(t=e.sent,c=t.data,a=[],s=0;s<2;s++)a.push(c[s]);n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){(function(){var e=Object(T.a)(A.a.mark((function e(){var t,c,a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("/api/articles/all/");case 2:for(t=e.sent,c=t.data,a=[],n=2;n<5;n++)a.push(c[n]);o(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(w.jsxs)("div",{className:"cards",children:[Object(w.jsx)("h1",{children:"Check out these EPIC Destinations!"}),Object(w.jsx)("div",{className:"cards__container",children:Object(w.jsxs)("div",{className:"cards__wrapper",children:[0!==c.length?Object(w.jsx)("ul",{className:"cards__items",children:c.map((function(e){return Object(w.jsx)(z,{src:e.image,text:e.description,label:"Adventure",path:"/blog/".concat(e.slug)},e._id)}))}):Object(w.jsx)("h2",{style:{color:"black",textAlign:"center",fontSize:"15px"},children:" No Article Found"}),0!==i.length?Object(w.jsx)("ul",{className:"cards__items",children:i.map((function(e){return Object(w.jsx)(z,{src:e.image,text:e.description,label:"Mystery",path:"/blog/".concat(e.slug)},e._id)}))}):Object(w.jsx)("h2",{style:{color:"black",textAlign:"center",fontSize:"15px"},children:" No Article Found"})]})})]})}),D=(c(92),function(){return Object(w.jsxs)("div",{className:"footer-container",children:[Object(w.jsxs)("section",{className:"footer-subscription",children:[Object(w.jsx)("p",{className:"footer-subscription-heading",children:"Join the Adventure newsLetter to receive our best vacation deals"}),Object(w.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time"}),Object(w.jsx)("div",{className:"input-areas",children:Object(w.jsxs)("form",{children:[Object(w.jsx)("input",{type:"email",name:"email",placeholder:"Your Email",className:"footer-input"}),Object(w.jsx)(E,{buttonStyle:"btn--outline",children:"Subscription"})]})})]}),Object(w.jsxs)("div",{className:"footer-links",children:[Object(w.jsxs)("div",{className:"footer-link-wrapper",children:[Object(w.jsxs)("div",{className:"footer-link-items",children:[Object(w.jsx)("h2",{children:"About Us"}),Object(w.jsx)(y.b,{to:"/sign-up",children:"How it works"}),Object(w.jsx)(y.b,{to:"/",children:"Testimonials"}),Object(w.jsx)(y.b,{to:"/",children:"Careers"}),Object(w.jsx)(y.b,{to:"/",children:"Investors"}),Object(w.jsx)(y.b,{to:"/",children:"Terms of Service"})]}),Object(w.jsxs)("div",{className:"footer-link-items",children:[Object(w.jsx)("h2",{children:"Contact Us"}),Object(w.jsx)(y.b,{to:"/",children:"Contact"}),Object(w.jsx)(y.b,{to:"/",children:"Support"}),Object(w.jsx)(y.b,{to:"/",children:"Destinations"}),Object(w.jsx)(y.b,{to:"/",children:"Sponsorships"})]})]}),Object(w.jsxs)("div",{className:"footer-link-wrapper",children:[Object(w.jsxs)("div",{className:"footer-link-items",children:[Object(w.jsx)("h2",{children:"Social Media"}),Object(w.jsx)(y.b,{to:"/",children:"Instagram"}),Object(w.jsx)(y.b,{to:"/",children:"Facebook"}),Object(w.jsx)(y.b,{to:"/",children:"Youtube"}),Object(w.jsx)(y.b,{to:"/",children:"Twitter"})]}),Object(w.jsxs)("div",{className:"footer-link-items",children:[Object(w.jsx)("h2",{children:"Videos"}),Object(w.jsx)(y.b,{to:"/",children:"Submit Video"}),Object(w.jsx)(y.b,{to:"/",children:"Ambassadors"}),Object(w.jsx)(y.b,{to:"/",children:"Agency"}),Object(w.jsx)(y.b,{to:"/",children:"Influencer"})]})]})]}),Object(w.jsx)("section",{className:"social-media",children:Object(w.jsxs)("div",{className:"social-media-wrap",children:[Object(w.jsx)("div",{className:"footer-logo",children:Object(w.jsxs)(y.b,{to:"/",className:"social-logo",children:["TRVL",Object(w.jsx)("i",{className:"fab fa-typo3"})]})}),Object(w.jsx)("small",{className:"website-rights",children:"TRVL \xa9 2020"}),Object(w.jsxs)("div",{className:"social-icons",children:[Object(w.jsx)(y.b,{className:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(w.jsx)("i",{className:"fab fa-facebook-f"})}),Object(w.jsx)(y.b,{className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(w.jsx)("i",{class:"fab fa-instagram"})}),Object(w.jsx)(y.b,{className:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(w.jsx)("i",{className:"fab fa-youtube"})}),Object(w.jsx)(y.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(w.jsx)("i",{className:"fab fa-twitter"})}),Object(w.jsx)(y.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(w.jsx)("i",{className:"fab fa-linkedin"})})]})]})})]})}),P=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(q,{}),Object(w.jsx)(B,{}),Object(w.jsx)(D,{})]})},H=(c(49),function(e){var t=e.history,c=Object(a.useState)(""),n=Object(N.a)(c,2),s=n[0],r=n[1],o=Object(a.useState)(""),l=Object(N.a)(o,2),j=l[0],b=l[1],u=Object(a.useState)(""),d=Object(N.a)(u,2),m=d[0],p=d[1],h=Object(a.useState)(""),O=Object(N.a)(h,2),x=O[0],f=O[1],g=Object(a.useState)(""),v=Object(N.a)(g,2),_=v[0],k=v[1],S=Object(a.useState)(!1),E=Object(N.a)(S,2),I=(E[0],E[1]),C=(Object(i.b)(),Object(i.c)((function(e){return e.userLogin}))),R=(C.loading,C.error,C.userInfo),F=function(){var e=Object(T.a)(A.a.mark((function e(c){var a,n,s,r,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(c.target.files),a=c.target.files[0],(n=new FormData).append("image",a),I(!0),!R){e.next=22;break}return e.prev=6,s={headers:{"Content-Type":"multipart/form-data"}},e.next=10,L.a.post("/api/upload",n,s);case 10:r=e.sent,i=r.data,p(i),I(!1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(6),console.error(e.t0),I(!1);case 20:e.next=23;break;case 22:t.push("/sign-in");case 23:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(T.a)(A.a.mark((function e(c){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.preventDefault(),a={author:s,title:j,image:m,description:x,markdown:_},R?(n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(R.token)}},function(){var e=Object(T.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post("/api/articles",a,n);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),t.push("/")):t.push("/sign-in");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"form",children:[Object(w.jsx)("h1",{children:"New Article"}),Object(w.jsxs)("form",{onSubmit:U,id:"form-products",children:[Object(w.jsxs)("div",{className:"form__fields",children:[Object(w.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return r(e.target.value)},className:"form-control",placeholder:"Author name",required:!0}),Object(w.jsx)("input",{type:"text",name:"title",id:"title",onChange:function(e){return b(e.target.value)},className:"form-control",placeholder:"enter the title",required:!0}),Object(w.jsx)("input",{type:"file",name:"image",id:"image",onChange:F,className:"form-control",placeholder:"enter the img url",required:!0}),Object(w.jsx)("textarea",{name:"description",id:"description",onChange:function(e){return f(e.target.value)},className:"form-control",placeholder:"write the description",required:!0}),Object(w.jsx)("textarea",{name:"markdown",id:"markdown",onChange:function(e){return k(e.target.value)},className:"form-control",placeholder:"write the markdown",required:!0})]}),Object(w.jsx)(y.c,{to:"/",children:"cancle"}),Object(w.jsx)("button",{type:"submit",className:"form__btn",children:"Save"})]})]})}),G=function(e){var t=e.match,c=e.history,n=Object(a.useState)(""),s=Object(N.a)(n,2),r=s[0],o=s[1],l=Object(a.useState)(""),j=Object(N.a)(l,2),b=j[0],u=j[1],d=Object(a.useState)(""),m=Object(N.a)(d,2),p=m[0],h=m[1],O=Object(i.c)((function(e){return e.userLogin})),x=(O.loading,O.error,O.userInfo);Object(a.useEffect)((function(){x?function(){var e=Object(T.a)(A.a.mark((function e(){var c,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("/api/articles/edit/".concat(t.params.id));case 2:c=e.sent,a=c.data,o(a.title),u(a.description),h(a.markdown);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():c.push("/sign-in")}),[x]);return Object(w.jsxs)("div",{className:"form form--update",children:[Object(w.jsx)("h1",{children:"Update Article"}),Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a={title:r,description:b,markdown:p};(function(){var e=Object(T.a)(A.a.mark((function e(){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.put("/api/articles/".concat(t.params.id),a);case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),c.push("/")},id:"form-products",children:[Object(w.jsxs)("div",{className:"form__fields",children:[Object(w.jsx)("input",{type:"text",name:"title",id:"title",value:r,onChange:function(e){return o(e.target.value)},className:"form-control",placeholder:"enter the title",required:!0}),Object(w.jsx)("textarea",{name:"description",id:"description",value:b,onChange:function(e){return u(e.target.value)},className:"form-control",placeholder:"write the description",required:!0}),Object(w.jsx)("textarea",{name:"markdown",id:"markdown",value:p,onChange:function(e){return h(e.target.value)},className:"form-control",placeholder:"write the markdown",required:!0})]}),Object(w.jsx)(y.c,{to:"/",children:"cancle"}),Object(w.jsx)("button",{type:"submit",className:"form__btn",children:"Save"})]})]})},J=c(56),M=(c(93),function(e){var t=e.path,c=e.pages,a=e.page,n=e.keyword,s=void 0===n?"":n;return c>1&&Object(w.jsx)("div",{className:"pagination",children:Object(J.a)(Array(c).keys()).map((function(e){return Object(w.jsx)(y.b,{to:s?"/search/".concat(s,"/page/").concat(e+1):"/blogs/".concat(t,"/").concat(e+1),children:Object(w.jsx)("p",{active:(e+1===a).toString(),children:e+1})},e+1)}))})}),V=c.p+"static/media/sprite.5f022280.svg",Y=(c(50),c(94),function(e){var t=e.history,c=e.match,s=Object(a.useState)([]),r=Object(N.a)(s,2),o=r[0],l=r[1],j=Object(a.useState)(),b=Object(N.a)(j,2),u=b[0],d=b[1],m=Object(a.useState)(),p=Object(N.a)(m,2),h=p[0],O=p[1],x=Object(a.useState)(""),f=Object(N.a)(x,2),g=f[0],v=f[1],_=c.params.keyword||"",k=c.params.pageNumber||1,S=(Object(i.b)(),Object(i.c)((function(e){return e.userLogin}))),E=(S.loading,S.error,S.userInfo),I=E?E._id:"";Object(a.useEffect)((function(){E?function(){var e=Object(T.a)(A.a.mark((function e(){var t,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("/api/articles/userBlogs?keyword=".concat(_,"&pageNumber=").concat(k,"&userArts=").concat(I));case 2:t=e.sent,c=t.data,d(c.page),O(c.pages),l(c.userArts);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():t.push("/")}),[k,_,I,g]),Object(a.useEffect)((function(){setTimeout((function(){v("")}),3e3)}),[g]);var C=function(){var e=Object(T.a)(A.a.mark((function e(t){var c,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(E.token)}},e.next=3,L.a.delete("/api/articles/".concat(t),c);case 3:a=e.sent,v(a.data.message);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"blogs",children:[Object(w.jsx)("h1",{children:"All of the Blogs"}),g&&Object(w.jsx)("h2",{className:"delete--message",children:g}),Object(w.jsx)("div",{className:"blogs__container",children:Object(w.jsxs)("div",{className:"blogs__wrapper",children:[0!==o.length?Object(w.jsx)("ul",{className:"blogs__items",children:o.map((function(e){return Object(w.jsx)(n.a.Fragment,{children:Object(w.jsxs)("li",{className:"blogs__item",children:[Object(w.jsx)(y.b,{className:"blogs__item__link",to:"/blog/".concat(e.slug),children:Object(w.jsx)("figure",{className:"blogs__item__pic-wrap","data-category":"Adventure",children:Object(w.jsx)("img",{src:e.image?e.image:"".concat("","/images/img-9.jpg"),alt:"Travel Image",className:"blogs__item__img"})})}),Object(w.jsxs)("div",{className:"blogs__item__info",children:[Object(w.jsx)("h5",{className:"blogs__item__text",children:e.description}),E&&E._id===e.user?Object(w.jsxs)("div",{className:"blogs__item--button",children:[Object(w.jsx)("button",{type:"submit",className:"edit--blog",children:Object(w.jsx)(y.b,{to:"/update/".concat(e._id),children:"Edit"})}),Object(w.jsx)("button",{type:"submit",className:"delete--blog",onClick:function(){return C(e._id)},children:Object(w.jsx)("svg",{children:Object(w.jsx)("use",{xlinkHref:"".concat(V,"#icon-bin")})})})]}):Object(w.jsx)("div",{})]})]})},e._id)}))}):Object(w.jsx)("h2",{style:{color:"black",textAlign:"center",fontSize:"14px"},children:" Only the Author can Edit"}),0!==o.length?Object(w.jsx)(M,{path:"edit",pages:h,page:u,keyword:_||""}):Object(w.jsx)(w.Fragment,{})]})})]})}),W=function(e){var t=e.match,c=Object(a.useState)([]),s=Object(N.a)(c,2),r=s[0],o=s[1],l=Object(a.useState)(),j=Object(N.a)(l,2),b=j[0],u=j[1],d=Object(a.useState)(),m=Object(N.a)(d,2),p=m[0],h=m[1],O=t.params.keyword||"",x=t.params.pageNumber||"",f=(Object(i.b)(),Object(i.c)((function(e){return e.userLogin})));f.loading,f.error,f.userInfo;return Object(a.useEffect)((function(){(function(){var e=Object(T.a)(A.a.mark((function e(){var t,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("/api/articles/divideAll?keyword=".concat(O,"&pageNumber=").concat(x));case 2:t=e.sent,c=t.data,u(c.page),h(c.pages),o(c.fetchedBlog);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[x,O]),Object(w.jsxs)("div",{className:"blogs",children:[Object(w.jsx)("h1",{children:"All of the Blogs"}),Object(w.jsx)("div",{className:"blogs__container",children:Object(w.jsxs)("div",{className:"blogs__wrapper",children:[0!==r.length?Object(w.jsx)("ul",{className:"blogs__items",children:r.map((function(e){return Object(w.jsx)(n.a.Fragment,{children:Object(w.jsxs)("li",{className:"blogs__item",children:[Object(w.jsx)(y.b,{className:"blogs__item__link",to:"/blog/".concat(e.slug),children:Object(w.jsx)("figure",{className:"blogs__item__pic-wrap","data-category":"Adventure",children:Object(w.jsx)("img",{src:e.image?e.image:"".concat("","/images/img-9.jpg"),alt:"Travel Image",className:"blogs__item__img"})})}),Object(w.jsx)("div",{className:"blogs__item__info",children:Object(w.jsx)("h5",{className:"blogs__item__text",children:e.description})})]})},e._id)}))}):Object(w.jsx)("h2",{style:{color:"black",textAlign:"center",fontSize:"14px"},children:" No Article Found"}),Object(w.jsx)(M,{path:"all",pages:p,page:b,keyword:O||""})]})})]})},Q=c(55),K=c.n(Q),X=(c(96),function(e){var t=e.match,c=(e.history,Object(a.useState)({})),n=Object(N.a)(c,2),s=n[0],r=n[1],o=Object(a.useState)([]),l=Object(N.a)(o,2),j=l[0],b=l[1],u=Object(a.useState)(!1),d=Object(N.a)(u,2),m=d[0],p=d[1],h=Object(a.useState)(0),O=Object(N.a)(h,2),x=(O[0],O[1],Object(a.useState)("")),f=Object(N.a)(x,2),g=(f[0],f[1],Object(i.b)(),Object(i.c)((function(e){return e.userLogin})));g.loading,g.error,g.userInfo;return Object(a.useEffect)((function(){(function(){var e=Object(T.a)(A.a.mark((function e(){var c,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("/api/articles/read/".concat(t.params.slug));case 2:c=e.sent,a=c.data,r(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.params.slug]),Object(a.useEffect)((function(){p(!0),function(){var e=Object(T.a)(A.a.mark((function e(){var t,c,a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("/api/articles/all/");case 2:for(t=e.sent,c=t.data,a=[],n=0;n<8;n++)a.push(c[n]);p(!1),b(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t.params.slug]),Object(w.jsx)("div",{className:"blog",children:Object(w.jsxs)("div",{className:"blog__content",children:[Object(w.jsxs)("div",{className:"blog__content--side",children:[Object(w.jsx)("svg",{children:Object(w.jsx)("use",{xlinkHref:"".concat(V,"#icon-hand")})}),Object(w.jsx)("span",{children:"72k"}),Object(w.jsx)("svg",{children:Object(w.jsx)("use",{xlinkHref:"".concat(V,"#icon-bubble")})}),Object(w.jsx)("span",{children:"74 "}),Object(w.jsx)("svg",{children:Object(w.jsx)("use",{xlinkHref:"".concat(V,"#icon-bookmark")})})]}),Object(w.jsx)("div",{className:"blog__content--container",children:Object(w.jsxs)("div",{className:"blog__content--category",children:[Object(w.jsx)("h2",{children:s.title}),Object(w.jsxs)("p",{className:"author",children:["Author: ",s.author]}),Object(w.jsx)("p",{className:"created--time",children:K()(s.createdAt).utc().format("DD/MM/YY")}),Object(w.jsxs)("div",{className:"content--body",children:[Object(w.jsx)("figure",{children:Object(w.jsx)("img",{src:s.image?s.image:"/images/img-3.jpg",alt:"passive income"})}),Object(w.jsx)("text",{cols:"60",rows:"8",style:{whiteSpace:"pre-wrap"},children:s.markdown})]}),Object(w.jsx)("div",{className:"blog--comments"})]})}),Object(w.jsxs)("div",{className:"blog__content--more",children:[Object(w.jsx)("h2",{children:"More Of Articles"}),Object(w.jsxs)("ul",{className:"blog__content--lists",children:[m&&Object(w.jsx)("div",{children:"loading..."}),j.map((function(e){return Object(w.jsxs)("li",{className:"content__list",children:[Object(w.jsx)(y.c,{to:"/blog/".concat(e.slug),children:e.title}),Object(w.jsx)("p",{children:e.author?e.author:"Laura vanderkam"}),Object(w.jsx)("img",{src:e.image?e.image:"/images/img-2.jpg",alt:"author"})]},e._id)}))]})]}),Object(w.jsx)("div",{className:"blog__footer",children:Object(w.jsxs)("ul",{className:"blog__footer--lists",children:[Object(w.jsx)("li",{children:"Blogs"}),Object(w.jsx)("li",{children:"About"}),Object(w.jsx)("li",{children:"Helps"})]})})]})})}),Z=c(117),$=c(118),ee=c(114),te=Object(ee.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),ce=function(){var e=te();return Object(w.jsx)("div",{children:Object(w.jsx)(Z.a,{className:e.backdrop,open:!0,children:Object(w.jsx)($.a,{color:"inherit"})})})},ae=(c(51),function(e){var t=e.history,c=Object(a.useState)(""),n=Object(N.a)(c,2),s=n[0],r=n[1],o=Object(a.useState)(""),l=Object(N.a)(o,2),j=l[0],b=l[1],u=Object(i.b)(),d=Object(i.c)((function(e){return e.userLogin})),m=d.loading,p=d.error,h=d.userInfo;Object(a.useEffect)((function(){h&&t.push("/")}),[t,h]);var O=function(){var e=Object(T.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),u(F(s,j));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"sign-in",children:[Object(w.jsx)("h1",{className:"signIn--title",children:"Sing In"}),p&&Object(w.jsx)("div",{style:{fontSize:"13px",background:"#ff0055",padding:"4px 2px"},children:p}),m&&Object(w.jsx)(ce,{}),Object(w.jsxs)("form",{onSubmit:O,children:[Object(w.jsxs)("div",{className:"form--email",children:[Object(w.jsx)("label",{htmlFor:"email",children:"Email"}),Object(w.jsx)("input",{type:"email",id:"email",placeholder:"Enter Email",onChange:function(e){return r(e.target.value)},required:!0})]}),Object(w.jsxs)("div",{className:"form--password",children:[Object(w.jsx)("label",{htmlFor:"email",children:"Password"}),Object(w.jsx)("input",{type:"password",id:"password",placeholder:"Enter password",onChange:function(e){return b(e.target.value)},required:!0})]}),Object(w.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign In"})]}),Object(w.jsx)("div",{className:"signIn--row",children:Object(w.jsxs)("p",{children:[" ","New Customer?",Object(w.jsx)(y.b,{to:"/sign-up",children:"Register"})]})})]})}),ne=function(e){var t=e.history,c=Object(a.useState)(""),n=Object(N.a)(c,2),s=n[0],r=n[1],o=Object(a.useState)(""),l=Object(N.a)(o,2),j=l[0],b=l[1],d=Object(a.useState)(""),m=Object(N.a)(d,2),x=m[0],f=m[1],g=Object(a.useState)(""),v=Object(N.a)(g,2),_=v[0],k=v[1],S=Object(a.useState)(null),E=Object(N.a)(S,2),I=E[0],C=E[1],R=Object(i.b)(),F=Object(i.c)((function(e){return e.userRegister})),U=F.loading,q=F.error,z=F.userInfo;Object(a.useEffect)((function(){z&&t.push("/")}),[t,z]);return Object(w.jsxs)("div",{className:"sign-up",children:[Object(w.jsx)("h1",{className:"signUp--title",children:"Sing Up"}),I&&Object(w.jsx)("div",{style:{fontSize:"13px",background:"#ff0055",padding:"4px 2px "},children:I}),q&&Object(w.jsx)("div",{style:{fontSize:"13px",background:"#ff0055",padding:"4px 2px "},children:q}),U&&Object(w.jsx)(ce,{}),Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x!==_?C("Passwords do not match"):R(function(e,t,c){return function(){var a=Object(T.a)(A.a.mark((function a(n){var s,r,i;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:p}),s={headers:{"Content-Type":"application/json"}},a.next=5,L.a.post("/api/users",{name:e,email:t,password:c},s);case 5:r=a.sent,i=r.data,n({type:h,payload:i}),n({type:u,payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(0),n({type:O,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message}),console.log(a.t0.message);case 16:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}()}(s,j,x))},children:[Object(w.jsxs)("div",{className:"form--name",children:[Object(w.jsx)("label",{htmlFor:"name",children:"Name"}),Object(w.jsx)("input",{type:"text",id:"name",placeholder:"Enter Name",value:s,onChange:function(e){return r(e.target.value)},required:!0})]}),Object(w.jsxs)("div",{className:"form--email",children:[Object(w.jsx)("label",{htmlFor:"email",children:"Email"}),Object(w.jsx)("input",{type:"email",id:"email",placeholder:"Enter Email",value:j,onChange:function(e){return b(e.target.value)},required:!0})]}),Object(w.jsxs)("div",{className:"form--password",children:[Object(w.jsx)("label",{htmlFor:"email",children:"Password"}),Object(w.jsx)("input",{type:"password",id:"password",placeholder:"Enter password",value:x,onChange:function(e){return f(e.target.value)},required:!0})]}),Object(w.jsxs)("div",{className:"form--confirmPassword",children:[Object(w.jsx)("label",{htmlFor:"email",children:"Confirm Password"}),Object(w.jsx)("input",{type:"Password",id:"confirmPassword",placeholder:"Confirm Password",value:_,onChange:function(e){return k(e.target.value)},required:!0})]}),Object(w.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign Up"})]}),Object(w.jsx)("div",{className:"signup--row",children:Object(w.jsxs)("p",{children:[" Have an Account?",Object(w.jsx)(y.b,{to:"/sign-in",children:"Login"})]})})]})},se=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(y.a,{children:[Object(w.jsx)(U,{}),Object(w.jsxs)(_.c,{children:[Object(w.jsx)(_.a,{path:"/update/:id",component:G}),Object(w.jsx)(_.a,{path:"/blogs/all",component:W,exact:!0}),Object(w.jsx)(_.a,{path:"/blogs/all/:pageNumber",component:W,exact:!0}),Object(w.jsx)(_.a,{path:"/blogs/search/:keyword",component:W,exact:!0}),Object(w.jsx)(_.a,{path:"/blog/:slug",component:X}),Object(w.jsx)(_.a,{path:"/",exact:!0,component:P}),Object(w.jsx)(_.a,{path:"/products",component:H}),Object(w.jsx)(_.a,{path:"/edit",exact:!0,component:Y}),Object(w.jsx)(_.a,{path:"/blogs/edit/:pageNumber",component:Y,exact:!0}),Object(w.jsx)(_.a,{path:"/sign-in",component:ae}),Object(w.jsx)(_.a,{path:"/sign-up",component:ne})]})]})})};r.a.render(Object(w.jsx)(i.a,{store:v,children:Object(w.jsx)(se,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.937ef2c3.chunk.js.map