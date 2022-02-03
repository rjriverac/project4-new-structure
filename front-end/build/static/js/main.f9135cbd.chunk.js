(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{124:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(30),r=a.n(n),s=(a(124),a(47)),i=a(13),o=a(10),j=a.n(o),l=a(28),b=a(12),u=a(6),d=a(16),h=a.n(d),O=function(){return window.localStorage.getItem("token")},x=function(){var e=O();if(e){var t=e.split(".");if(!(t.length<3)){var a=t[1];return JSON.parse(atob(a))}}},p=function(){var e=x();return!!e&&Math.round(Date.now()/1e3)<e.exp},f=a(160),m=a(161),v=a(75),g=a(171),w=a(76),y=a(162),k=a(163),S=a(111),C=a(63),I=a(1);function N(){var e=Object(C.useStripe)(),t=Object(C.useElements)(),a=Object(c.useState)(null),n=Object(u.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(!1),o=Object(u.a)(i,2),l=o[0],d=o[1];Object(c.useEffect)((function(){if(e){var t=new URLSearchParams(window.location.search).get("payment_intent_client_secret");t&&e.retrievePaymentIntent(t).then((function(e){switch(e.paymentIntent.status){case"succeeded":s("Payment succeeded!");break;case"processing":s("Your payment is processing.");break;case"requires_payment_method":s("Your payment was not successful, please try again.");break;default:s("Something went wrong.")}}))}}),[e]);var h=function(){var a=Object(b.a)(j.a.mark((function a(c){var n,r;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),e&&t){a.next=3;break}return a.abrupt("return");case 3:return d(!0),a.next=6,e.confirmPayment({elements:t,confirmParams:{return_url:"https://mycart-dev.herokuapp.com/clear/"}});case 6:n=a.sent,"card_error"===(r=n.error).type||"validation_error"===r.type?s(r.message):s("An unexpected error occured."),d(!1);case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(I.jsxs)("form",{id:"payment-form",onSubmit:h,children:[Object(I.jsx)(C.PaymentElement,{id:"payment-element"}),Object(I.jsx)("button",{disabled:l||!e||!t,id:"submit",children:Object(I.jsx)("span",{id:"button-text",children:l?Object(I.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})}),r&&Object(I.jsx)("div",{id:"payment-message",children:r})]})}var _=function(){var e=Object(S.a)("pk_test_51K2EE3Df5rCYBUKv5rQoS23gwDRUDGNkFdNiVmD42dRbsoU3OwZizIVhvZeGnAdnix8A57D8B5uz0T4goEdIEzNI00KIeD1qHQ"),t=Object(c.useState)(""),a=Object(u.a)(t,2),n=a[0],r=a[1],s={clientSecret:n,appearance:{theme:"flat",variables:{colorPrimary:"#009257",colorBackground:"#cbeade"}}},i=O(),o=Object(c.useState)({}),d=Object(u.a)(o,2),x=d[0],p=d[1],_=Object(c.useState)(!1),B=Object(u.a)(_,2),E=(B[0],B[1]),L=Object(c.useState)(!1),P=Object(u.a)(L,2),T=P[0],z=P[1];Object(c.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t,a,c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/cart/view/",{headers:{Authorization:"Bearer ".concat(i)}});case 3:t=e.sent,a=t.data,c=a.order_items,n=a.total,p({items:Object(l.a)(c),total:n}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),E(!0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[i]),Object(c.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===Object.keys(x).length){e.next=12;break}return e.prev=1,e.next=4,h.a.post("/api/payments/create-payment-intent/",x.items,{headers:{Authorization:"Bearer ".concat(i)}});case 4:t=e.sent,a=t.data,r(a.clientsecret),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}})()()}),[x]);var A=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,c,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.put("/api/cart/view/",{operation:"remove",order_items:["".concat(t)]},{headers:{Authorization:"Bearer ".concat(i)}});case 3:a=e.sent,c=a.data,n=c.order_items,r=c.total,p({items:Object(l.a)(n),total:r}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),E(!0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a,c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("/api/cart/view/",{headers:{Authorization:"Bearer ".concat(i)}});case 3:t=e.sent,a=t.data,c=a.order_items,n=a.total,p({items:Object(l.a)(c),total:n}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),E(!0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(I.jsxs)(f.a,{children:[Object(I.jsxs)(m.a,{children:[Object(I.jsx)(v.a,{xs:12,md:8,children:Object(I.jsx)(g.a,{children:Object(I.jsxs)(g.a.Item,{eventKey:"0",children:[Object(I.jsx)(g.a.Header,{children:Object(I.jsx)(f.a,{children:Object(I.jsxs)(m.a,{children:[Object(I.jsx)(v.a,{children:"Your Cart"}),Object(I.jsx)(v.a,{children:Object(I.jsx)(w.a,{variant:"danger",onClick:H,children:"Empty Cart"})})]})})}),Object(I.jsx)(g.a.Body,{children:Object(I.jsx)(g.a,{children:0!==Object.keys(x).length&&x.items.map((function(e,t){return Object(I.jsxs)(g.a.Item,{eventKey:t+1,children:[Object(I.jsxs)(g.a.Header,{children:[Object(I.jsx)(v.a,{children:e.name}),Object(I.jsx)(v.a,{children:Object(I.jsx)("span",{className:"pull-right",children:Object(I.jsx)(y.a,{src:e.small_image,rounded:!0})})})]}),Object(I.jsx)(g.a.Body,{children:Object(I.jsxs)(m.a,{children:[Object(I.jsx)(v.a,{md:3,children:Object(I.jsx)(k.a,{variant:"primary",children:"$".concat(e.price)})}),Object(I.jsx)(v.a,{md:{span:3,offset:3},children:Object(I.jsx)(w.a,{variant:"danger",size:"sm",onClick:function(){return A(e.id)},children:"Remove from Cart"})})]})})]},t)}))})})]})})}),Object(I.jsx)(v.a,{xs:6,md:4,children:Object(I.jsxs)(k.a,{variant:"success",children:[Object(I.jsx)(k.a.Heading,{children:"Your Total:"}),0!==Object.keys(x).length&&Object.values(x).every((function(e){return!!e}))&&x.items.map((function(e,t){return Object(I.jsxs)("p",{children:[e.name," $",e.price]},t)})),Object(I.jsx)("hr",{}),Object(I.jsxs)(m.a,{children:[Object(I.jsx)(v.a,{children:Object(I.jsx)("h3",{children:Object.values(x).every((function(e){return!!e}))?"$".concat(x.total):"$0.00"})}),Object(I.jsx)(v.a,{children:Object(I.jsx)(w.a,{variant:"success",onClick:function(){return z(!T)},children:"Check Out"})})]})]})})]}),T&&Object(I.jsx)(f.a,{id:"money",children:Object(I.jsx)("div",{className:"App",id:"stripe-checkout",children:n&&Object(I.jsx)(C.Elements,{options:s,stripe:e,children:Object(I.jsx)(N,{})})})})]})},B=a(179),E=a(164),L=a(70),P=a(72),T=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("style",{type:"text/css",children:"\n        #thefooter {\n          background-color: #87ba52;\n          // position: absolute;\n          width: 100%;\n          bottom: 0;\n        }\n        "}),Object(I.jsx)(B.a,{id:"thefooter",className:"py-3 border-top my-4",children:Object(I.jsx)(f.a,{children:Object(I.jsxs)(m.a,{className:"d-flex justify-content-between",children:[Object(I.jsx)(v.a,{md:4,xs:6,children:Object(I.jsxs)(E.a,{horizontal:!0,variant:"light",children:[Object(I.jsx)(E.a.Item,{as:"a",href:"http://www.instagram.com",children:Object(I.jsx)(L.a,{icon:P.c})}),Object(I.jsx)(E.a.Item,{as:"a",href:"http://www.twitter.com",children:Object(I.jsx)(L.a,{icon:P.d})}),Object(I.jsx)(E.a.Item,{as:"a",href:"http://www.discord.com",children:Object(I.jsx)(L.a,{icon:P.a})})]})}),Object(I.jsx)(v.a,{md:4,xs:6,classname:"d-flex justify-content-end",children:Object(I.jsxs)(E.a,{horizontal:!0,className:"align-self-end",children:[Object(I.jsx)(E.a.Item,{children:"\xa9 2021 myCart"}),Object(I.jsx)(E.a.Item,{as:"a",href:"https://github.com/rjriverac",children:Object(I.jsx)(L.a,{icon:P.b})})]})})]})})})]})},z=a.p+"static/media/produce-top.99c83ea0.png",A=a(180),H=a(177),D=a(178),F=a(113),G=function(){var e,t=Object(c.useState)(null),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(0),i=Object(u.a)(s,2),o=i[0],l=i[1],d=Object(c.useState)(!1),O=Object(u.a)(d,2),x=O[0],m=O[1];return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/products/");case 3:if(t=e.sent,a=t.data){e.next=7;break}throw new Error;case 7:r(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){return e=setInterval((function(){if(n){var e=Math.floor(Math.random()*n.length);l(e)}}),5e3),function(){return clearInterval(e)}}),[n]),Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(A.a,{gap:5,id:"main-page-container",style:{display:"flex",flexDirection:"column",marginTop:"15px"},children:[Object(I.jsxs)(f.a,{fluid:!0,onMouseOver:function(){return m(!0)},onMouseLeave:function(){return m(!1)},style:{position:"relative"},children:[Object(I.jsx)(y.a,{src:z,fluid:!0}),x&&Object(I.jsx)(w.a,{size:"lg",href:p()?"/browse":"/register",variant:"success",style:{position:"absolute",left:"50%",top:"70%"},id:"main-sign-up-button",children:p()?"Browse":"Sign Up!"})]}),Object(I.jsxs)(f.a,{as:B.a,className:"justify-content-around",children:[Object(I.jsxs)(v.a,{xs:12,md:3,className:"d-flex justify-content-center",children:[Object(I.jsx)("style",{type:"text/css",children:"\n                #maincard {\n                  height: 300px;\n                }\n                .maincardimage {\n                  // height:225px;\n                  // width: auto;\n                  object-fit:contain;\n                  \n                }\n\n                    "}),Object(I.jsxs)(H.a,{style:{width:"14rem"},border:"success",id:"maincard",children:[Object(I.jsx)(H.a.Header,{children:n?Object(I.jsx)(H.a.Title,{children:n[o].name}):Object(I.jsx)(D.a,{as:H.a.Title,animation:"glow",children:Object(I.jsx)(D.a,{xs:12})})}),n?Object(I.jsx)(H.a.Body,{as:"a",href:"products/".concat(n[o].id),children:Object(I.jsx)(H.a.Img,{className:"maincardimage",variant:"top",src:n[o].small_image})}):Object(I.jsx)(D.a,{as:H.a.Img,width:"120",height:"120"})]})]}),Object(I.jsx)(v.a,{xs:12,md:3,className:"d-flex justify-content-center",children:Object(I.jsx)(H.a,{style:{width:"14rem"},border:"success",children:Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(H.a.Header,{children:Object(I.jsx)(H.a.Title,{children:"Reviews"})}),Object(I.jsx)(H.a.Body,{children:n&&n[o].review_set.length?Object(I.jsx)(E.a,{variant:"flushed",children:n[o].review_set.slice(0,3).map((function(e,t){return Object(I.jsx)(F.a,{children:"".concat(e.text,"-").concat(e.rating,"/5")},t)}))}):Object(I.jsx)(H.a.Text,{children:"Be the first to leave a review!"})})]})})})]})]})})},R=a(8),Y=a(2),U=a(170),M=a(174),K=function(){var e=Object(i.f)(),t=Object(c.useState)({username:"",password:""}),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)({username:"",password:""}),o=Object(u.a)(s,2),l=o[0],d=o[1],O=Object(c.useState)(!1),x=Object(u.a)(O,2),p=x[0],m=x[1],g=function(e){var t=Object(Y.a)(Object(Y.a)({},n),{},Object(R.a)({},e.target.id,e.target.value));r(t)},y=function(){var t=Object(b.a)(j.a.mark((function t(a){var c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),C&&N(!C),t.prev=2,t.next=5,h.a.post("/api/auth/login/",n);case 5:c=t.sent,r=c.data,s=r.token,window.localStorage.setItem("token",s),m(!0),_(),setTimeout((function(){e.push("/browse")}),2500),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(2),console.log(t.t0.response.data),d(t.t0.response.data),_();case 18:case"end":return t.stop()}var s}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}(),k=Object(c.useState)(!1),S=Object(u.a)(k,2),C=S[0],N=S[1],_=function(){return N(!C)};return Object(I.jsx)(f.a,{children:Object(I.jsx)(v.a,{md:{span:6,offset:3},children:Object(I.jsxs)(U.a,{onSubmit:y,children:[Object(I.jsxs)(U.a.Group,{controlId:"username",children:[Object(I.jsx)(U.a.Label,{children:"Username"}),Object(I.jsx)(U.a.Control,{type:"input",placeholder:"Enter your username",onChange:g})]}),Object(I.jsxs)(U.a.Group,{controlId:"password",children:[Object(I.jsx)(U.a.Label,{children:"Password"}),Object(I.jsx)(U.a.Control,{type:"password",placeholder:"Enter your password",onChange:g})]}),Object(I.jsx)("br",{}),Object(I.jsx)(w.a,{variant:"info",type:"submit",children:"Log Me In!"}),Object(I.jsx)("br",{}),Object(I.jsxs)(I.Fragment,{children:[Object.values(l).every((function(e){return!!e}))&&!p&&Object(I.jsxs)(M.a,{bg:"danger",show:C,onClose:_,children:[Object(I.jsx)(M.a.Header,{children:Object(I.jsx)("strong",{className:"me-auto",children:"myCart"})}),Object(I.jsx)(M.a.Body,{children:"There was a problem logging you in \ud83d\ude14"})]}),p&&Object(I.jsxs)(M.a,{bg:"success",show:C,onClose:_,children:[Object(I.jsx)(M.a.Header,{children:Object(I.jsx)("strong",{className:"me-auto",children:"myCart"})}),Object(I.jsx)(M.a.Body,{children:"Login Successful! Redirecting you to the main page"})]})]})]})})})},$=a(175),q=a(118),J=a(169),V=a.p+"static/media/greenlogo_gmdgkq.04f5d9e3.jpg",Q=function(){var e=Object(i.f)(),t=Object(i.g)();Object(c.useEffect)((function(){}),[t.pathname]);return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("style",{type:"text/css",children:"\n          #thenavbar {\n            background-color: #87ba52;\n            top: 0;\n          }\n        "}),Object(I.jsx)($.a,{variant:"dark",expand:!1,id:"thenavbar",children:Object(I.jsxs)(f.a,{fluid:!0,children:[Object(I.jsx)($.a.Brand,{children:Object(I.jsx)("img",{src:V,width:"120",height:"40",alt:"myCart logo",className:"d-inline-block align-top"})}),Object(I.jsx)($.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(I.jsxs)($.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(I.jsx)(q.a.Header,{closeButton:!0,children:Object(I.jsx)(q.a.Title,{id:"offcanvasNavbarLabel",children:"myCart Navigation"})}),Object(I.jsx)(q.a.Body,{children:Object(I.jsxs)(B.a,{className:"justify-content-end flex-grow-1 pe-2",children:[Object(I.jsx)(B.a.Link,{href:"/",children:"Home"}),Object(I.jsx)(B.a.Link,{href:"/browse",children:"Browse"}),p()?Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(J.a,{title:"Your Account",id:"offcanvasNavbarDropdown",children:[Object(I.jsx)(J.a.Item,{href:"/cart",children:"View your cart"}),Object(I.jsx)(J.a.Divider,{}),Object(I.jsx)(J.a.Item,{as:"a",onClick:function(){window.localStorage.removeItem("token"),e.push("/")},children:"Logout"})]})}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(B.a.Link,{href:"/register",children:"Register"}),Object(I.jsx)(B.a.Link,{href:"/login",children:"Login"})]})]})})]})]})})]})},Z=a(165),W=function(){var e=Object(i.f)(),t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],s=O();return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("/api/cart/view/",{headers:{Authorization:"Bearer ".concat(s)}});case 3:t=e.sent,a=t.data,a.order_items,a.total,r(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){setTimeout((function(){e.push("/")}),4e3)}),[n]),Object(I.jsx)(f.a,{className:"min-vh-70 py-3",children:Object(I.jsxs)(k.a,{variant:"success",children:[Object(I.jsx)(k.a.Heading,{className:"text-center",children:"Payment Successful!"}),Object(I.jsx)("hr",{}),Object(I.jsx)("p",{className:"text-center",children:"You will be redirected shortly!"}),Object(I.jsx)(m.a,{children:Object(I.jsx)(v.a,{md:{span:6,offset:3},children:Object(I.jsx)("p",{className:"text-center",children:Object(I.jsx)(Z.a,{animation:"border",variant:"success"})})})})]})})},X=a(172),ee=a(173),te=a(166),ae=a(116),ce=a(167),ne=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(i.h)().id,s=Object(c.useState)({}),o=Object(u.a)(s,2),l=o[0],d=o[1],x=Object(i.f)(),g=Object(c.useState)(!1),y=Object(u.a)(g,2),S=y[0],C=y[1],N=Object(c.useState)({}),_=Object(u.a)(N,2),B=_[0],L=_[1],P=Object(c.useState)(!1),T=Object(u.a)(P,2),z=T[0],A=T[1],F=Object(c.useState)(1),G=Object(u.a)(F,2),M=G[0],K=G[1],$=Object(c.useState)({rating:"",text:"",product:r}),q=Object(u.a)($,2),J=q[0],V=q[1],Q=Object(c.useState)(!1),Z=Object(u.a)(Q,2),W=Z[0],ne=Z[1],re=function(e){var t=Object(Y.a)(Object(Y.a)({},J),{},Object(R.a)({},e.target.id,e.target.value));V(t)},se=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.a.post("/api/review/",J,{headers:{Authorization:"Bearer ".concat(O())}});case 4:a=e.sent,a.data,ne(!0),V(Object(Y.a)(Object(Y.a)({},J),{},{rating:"",text:""})),K(1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(e){return 0===Object.keys(e).length};Object(c.useEffect)((function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/products/".concat(r,"/"));case 3:t=e.sent,a=t.data,d(a),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),C(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(b.a)(j.a.mark((function e(){var t,a,c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p()){e.next=14;break}return e.prev=1,e.next=4,h.a.get("/api/cart/view/",{headers:{Authorization:"Bearer ".concat(O())}});case 4:t=e.sent,a=t.data,c=a.order_items,n=a.total,L({cart:c,total:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();e(),t()}),[r,W]),Object(c.useEffect)((function(){Object.values(B).every((function(e){return!!e}))&&B.cart&&(B.cart.map((function(e){return e.id})).filter((function(e){return e===parseInt(r)})).length?A(!0):A(!1))}),[B]);var oe=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("click"),p()||x.push("/login"),z){e.next=13;break}return e.prev=3,e.next=6,h.a.put("/api/cart/view/",{operation:"add",order_items:["".concat(r)]},{headers:{Authorization:"Bearer ".concat(O())}});case 6:A(!0),n(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();return Object(I.jsxs)(f.a,{children:[Object(I.jsx)(m.a,{children:Object(I.jsxs)(v.a,{children:[Object(I.jsxs)(H.a,{children:[ie(l)?Object(I.jsx)(D.a,{as:H.a.Img}):Object(I.jsx)(H.a.Img,{src:l.big_image,alt:"photo of ".concat(l.name)}),Object(I.jsx)(H.a.Img,{}),Object(I.jsx)(H.a.ImgOverlay,{className:"d-flex justify-content-end align-items-end",children:Object(I.jsxs)("div",{className:"d-flex flex-column-reverse",children:[Object(I.jsx)(w.a,{className:"",variant:z?"danger":"success",onClick:oe,disabled:!!z,children:z?"Already in Cart!":"Add to Cart"}),Object(I.jsx)(I.Fragment,{children:ie(l)?Object(I.jsxs)(k.a,{variant:"secondary",children:[Object(I.jsx)(k.a.Heading,{children:"Product Loading"}),Object(I.jsx)("hr",{}),Object(I.jsx)("p",{children:"Product Loading"})]}):Object(I.jsxs)(k.a,{variant:"success",children:[Object(I.jsx)(k.a.Heading,{children:l.name}),Object(I.jsx)("hr",{}),Object(I.jsx)("p",{children:"$".concat(l.price)})]})})]})})]}),Object(I.jsxs)(X.a,{show:a,onClick:function(){return n(!1)},children:[Object(I.jsx)(X.a.Header,{closeButton:!0,children:Object(I.jsx)(X.a.Title,{children:"Added!"})}),Object(I.jsx)(X.a.Body,{children:"Your cart has been updated!"}),Object(I.jsxs)(X.a.Footer,{children:[Object(I.jsx)(w.a,{variant:"secondary",onClick:function(){return n(!1)},children:"Close"}),Object(I.jsx)(w.a,{variant:"success",onClick:function(){return setTimeout((function(){return x.push("/cart")}),1e3)},children:"Go to Cart"})]})]})]})}),Object(I.jsx)("hr",{}),Object(I.jsxs)(m.a,{className:"justify-content-around",children:[Object(I.jsx)(v.a,{xs:12,md:6,children:Object(I.jsxs)(U.a,{onSubmit:p()?se:function(){return x.push("/login")},children:[Object(I.jsxs)(U.a.Group,{controlId:"rating",onChange:re,children:[Object(I.jsx)(U.a.Label,{children:"Please Rate"}),Object(I.jsx)(ee.a,{placement:"left",overlay:Object(I.jsx)(te.a,{children:M}),children:Object(I.jsx)(U.a.Range,{value:M,onChange:function(e){return K(e.target.value)},min:"1",max:"5",step:"1"})})]}),Object(I.jsx)(U.a.Group,{onChange:re,children:Object(I.jsx)(ae.a,{label:"Let us know what you think!",controlId:"text",children:Object(I.jsx)(U.a.Control,{as:"textarea",rows:2,placeholder:"enter your review",value:J.text})})}),Object(I.jsx)("br",{}),Object(I.jsx)(w.a,{variant:"info",type:"submit",children:"Submit Review"})]})}),Object(I.jsx)(v.a,{xs:12,md:4,children:ie(l)||S?Object(I.jsxs)(D.a,{animation:"glow",as:H.a,children:[Object(I.jsx)(D.a,{xs:12}),Object(I.jsx)(D.a,{xs:12}),Object(I.jsx)(D.a,{xs:12}),Object(I.jsx)(D.a,{xs:12}),Object(I.jsx)(D.a,{xs:12})]}):Object(I.jsx)(E.a,{children:l.review_set.length?l.review_set.map((function(e,t){return Object(I.jsxs)(E.a.Item,{children:[Object(I.jsx)(ce.a,{min:1,max:5,animated:!0,variant:"success",now:e.rating,label:e.rating}),e.text]},t)})):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("br",{}),Object(I.jsxs)(E.a.Item,{children:[Object(I.jsx)(ce.a,{min:1,max:5,animated:!0,now:3,variant:"secondary"}),"Be the first to leave a review!"]})]})})})]}),Object(I.jsx)("br",{}),Object(I.jsx)(f.a,{children:Object(I.jsx)(w.a,{variant:"success",href:"/browse",children:"Browse more products"})})]})},re=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(i.f)(),s=Object(c.useState)({username:"",email:"",password:"",password_confirmation:""}),o=Object(u.a)(s,2),l=o[0],d=o[1],O=Object(c.useState)({username:"",email:"",password:"",password_confirmation:""}),x=Object(u.a)(O,2),p=x[0],g=x[1],y=function(e){var t=Object(Y.a)(Object(Y.a)({},p),{},Object(R.a)({},e.target.id,e.target.value));g(t)},S=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.a.post("/api/auth/register/",p);case 4:n(!0),setTimeout((function(){return r.push("/login")}),1500),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),n(!1),d(e.t0.response.data),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){a&&setTimeout((function(){r.push("/login")}),750)}),[a]);var C=function(){return Object.values(l).every((function(e){return!!e}))&&!a};return Object(I.jsxs)(f.a,{children:[Object(I.jsx)("br",{}),Object(I.jsx)(m.a,{children:Object(I.jsx)(v.a,{md:{span:6,offset:3},children:Object(I.jsxs)(U.a,{onSubmit:S,children:[Object(I.jsxs)(U.a.Group,{controlId:"username",children:[Object(I.jsx)(U.a.Label,{children:"Username"}),Object(I.jsx)(U.a.Control,{type:"text",onChange:y}),C()&&l.username&&Object(I.jsx)(k.a,{variant:"warning",children:l.username})]}),Object(I.jsxs)(U.a.Group,{controlId:"email",children:[Object(I.jsx)(U.a.Label,{children:"Email"}),Object(I.jsx)(U.a.Control,{type:"email",onChange:y}),C()&&l.email&&Object(I.jsx)(k.a,{variant:"warning",children:l.email})]}),Object(I.jsxs)(U.a.Group,{controlId:"password",children:[Object(I.jsx)(U.a.Label,{children:"Password"}),Object(I.jsx)(U.a.Control,{type:"password",onChange:y}),C()&&l.password&&Object(I.jsx)(k.a,{variant:"warning",children:l.password})]}),Object(I.jsxs)(U.a.Group,{controlId:"password_confirmation",children:[Object(I.jsx)(U.a.Label,{children:"Confirm Password"}),Object(I.jsx)(U.a.Control,{type:"password",onChange:y}),C()&&l.password_confirmation&&Object(I.jsx)(k.a,{variant:"warning",children:l.password_confirmation})]}),Object(I.jsx)("br",{}),Object(I.jsx)(w.a,{variant:"info",type:"submit",children:"Submit"}),a?Object(I.jsx)(k.a,{variant:"success",children:" Registration Successful! You will be redirected shortly"}):C()&&Object(I.jsx)(k.a,{variant:"warning",children:"Please check that all fields are correct"})]})})})]})},se=a(176),ie=a(168),oe=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!1),s=Object(u.a)(r,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/products/");case 3:t=e.sent,a=t.data,n(a),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),o(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(I.jsxs)(f.a,{className:"vh-50",children:[Object(I.jsx)(m.a,{children:!i&&a.length?Object(I.jsx)(se.a,{children:a.map((function(e,t){return Object(I.jsxs)(se.a.Item,{children:[Object(I.jsx)("img",{className:"d-block img-fluid",src:e.big_image,alt:"image of ".concat(e.name)}),Object(I.jsxs)(se.a.Caption,{children:[Object(I.jsx)(w.a,{href:"/products/".concat(e.id),variant:"success",size:"lg",children:e.name}),Object(I.jsx)("br",{}),Object(I.jsx)(ie.a,{pill:!0,bg:"success",children:"Price: ".concat(e.price)})]})]},t)}))}):Object(I.jsx)(se.a,{children:Object(I.jsxs)(se.a.Item,{children:[Object(I.jsx)("img",{className:"d-block w-100",src:"http://placekeanu.com/800",alt:"First slide"}),Object(I.jsxs)(se.a.Caption,{children:[Object(I.jsx)("h3",{children:"Loading.."}),Object(I.jsx)("p",{children:"Thank you for your patience"})]})]})})}),Object(I.jsx)("br",{}),Object(I.jsx)(m.a,{children:Object(I.jsx)(w.a,{variant:"info",href:"/",children:"Go Back Home"})})]})},je=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(s.a,{children:Object(I.jsxs)("div",{className:"main-wrapper",children:[Object(I.jsx)(Q,{}),Object(I.jsxs)(i.c,{children:[Object(I.jsx)(i.a,{exact:!0,path:"/",component:G}),Object(I.jsx)(i.a,{exact:!0,path:"/register",component:re}),Object(I.jsx)(i.a,{exact:!0,path:"/login",component:K}),Object(I.jsx)(i.a,{exact:!0,path:"/browse",component:oe}),Object(I.jsx)(i.a,{exact:!0,path:"/products/:id",component:ne}),Object(I.jsx)(i.a,{exact:!0,path:"/cart",component:_}),Object(I.jsx)(i.a,{exact:!0,path:"/clear",component:W})]}),Object(I.jsx)(T,{})]})})})};a(153);r.a.render(Object(I.jsx)(je,{}),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.f9135cbd.chunk.js.map