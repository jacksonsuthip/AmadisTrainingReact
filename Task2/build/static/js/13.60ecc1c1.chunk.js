"use strict";(self.webpackChunkantoreact=self.webpackChunkantoreact||[]).push([[13],{13:function(e,s,a){a.r(s);var n=a(152),r=a(791),t=a(184);s.default=function(){var e=(0,r.useState)(""),s=(0,n.Z)(e,2),a=s[0],l=s[1],c=(0,r.useState)(""),o=(0,n.Z)(c,2),i=o[0],d=o[1],u=(0,r.useState)(),m=(0,n.Z)(u,2),x=m[0],f=m[1],j=(0,r.useState)(!0),v=(0,n.Z)(j,2),N=v[0],h=v[1],p=(0,r.useState)([]),g=(0,n.Z)(p,2),w=g[0],S=g[1],b=(0,r.useRef)(null);return(0,r.useEffect)((function(){h(!0!==x)}),[x]),(0,r.useEffect)((function(){var e=JSON.parse(sessionStorage.getItem("userToken"));null!==e&&S(e)}),[]),(0,t.jsxs)("div",{className:"container appUser",children:[(0,t.jsx)("p",{style:{paddingBottom:"10px"}}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-12",style:{textAlign:"center",color:"blue"},children:(0,t.jsx)("b",{children:"User LogIn"})})}),(0,t.jsx)("hr",{style:{border:"1px solid black"}}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-1"}),(0,t.jsx)("div",{className:"col-md-7",children:(0,t.jsx)("b",{children:"UserName"})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-1"}),(0,t.jsx)("div",{className:"col-md-10",children:(0,t.jsx)("input",{type:"text",className:"form-control",value:a,onChange:function(e){l(e.target.value),f(!1)},onBlur:function(e){JSON.parse(localStorage.getItem("user")).map((function(s,a){return s.username===e.target.value&&f(!0)}))}})})]}),(0,t.jsx)("p",{}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-1"}),(0,t.jsx)("div",{className:"col-md-7",children:(0,t.jsx)("b",{children:"Password"})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-1"}),(0,t.jsx)("div",{className:"col-md-10",children:(0,t.jsx)("input",{type:"password",className:"form-control",value:i,onChange:function(e){d(e.target.value)},ref:b})})]}),(0,t.jsx)("p",{}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-md-12",style:{textAlign:"center"},children:(0,t.jsx)("button",{type:"button",className:"btn1",disabled:N,onClick:function(){var e=JSON.parse(localStorage.getItem("user")),s=e.findIndex((function(e){return e.username===a}));if(e[s].password===i){var n=JSON.parse(JSON.stringify(w));n.push({login:!0,username:a,password:i}),S(n),sessionStorage.setItem("userToken",JSON.stringify(n)),window.location.href="#/"+s}else""===i?(alert("Please Enter Password And Continue.."),b.current.focus()):(alert("Password is Wrong.."),b.current.focus())},children:"LogIn"})})})]})}}}]);
//# sourceMappingURL=13.60ecc1c1.chunk.js.map