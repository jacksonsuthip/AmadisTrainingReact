"use strict";(self.webpackChunkantoreact=self.webpackChunkantoreact||[]).push([[167],{167:function(e,s,a){a.r(s);var l=a(152),c=a(791),n=a(184);s.default=function(){var e=(0,c.useState)(""),s=(0,l.Z)(e,2),a=s[0],r=s[1],t=(0,c.useState)(""),o=(0,l.Z)(t,2),i=o[0],d=o[1],u=(0,c.useState)(""),m=(0,l.Z)(u,2),x=m[0],h=m[1],j=(0,c.useState)(""),N=(0,l.Z)(j,2),v=N[0],p=N[1],f=(0,c.useState)(""),g=(0,l.Z)(f,2),b=g[0],S=g[1],w=(0,c.useState)(1),y=(0,l.Z)(w,2),E=y[0],C=y[1],Z=(0,c.useState)([]),k=(0,l.Z)(Z,2),A=k[0],J=k[1],O=(0,c.useState)(),P=(0,l.Z)(O,2),R=P[0],U=P[1],I=(0,c.useRef)(null),B=(0,c.useRef)(null),D=(0,c.useRef)(null);return(0,c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));null!==e&&J(e)}),[]),(0,c.useEffect)((function(){!0===R&&(D.current.focus(),alert("This UserName is Not Available"))})),(0,n.jsxs)("div",{className:"container appReg",children:[(0,n.jsx)("p",{}),(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-md-12",style:{textAlign:"center",color:"blue"},children:(0,n.jsx)("b",{children:"Employe Detail"})})}),(0,n.jsx)("hr",{style:{border:"1px solid black"}}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-1"}),(0,n.jsx)("div",{className:"col-md-3",children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("div",{className:"col-md-7",children:(0,n.jsx)("input",{type:"text",className:"form-control",value:a,placeholder:"Enter Name",onChange:function(e){r(e.target.value)},ref:I})})]}),(0,n.jsx)("p",{}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-1"}),(0,n.jsx)("div",{className:"col-md-3",children:(0,n.jsx)("b",{children:"Email"})}),(0,n.jsx)("div",{className:"col-md-7",children:(0,n.jsx)("input",{type:"email",className:"form-control",value:i,placeholder:"Enter Email",onChange:function(e){d(e.target.value)}})})]}),(0,n.jsx)("p",{}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-1"}),(0,n.jsx)("div",{className:"col-md-3",children:(0,n.jsx)("b",{children:"Phone"})}),(0,n.jsx)("div",{className:"col-md-7",children:(0,n.jsx)("input",{type:"number",className:"form-control",value:x,placeholder:"Enter Ph.No",onChange:function(e){return h(e.target.value)}})})]}),(0,n.jsx)("p",{}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-1"}),(0,n.jsx)("div",{className:"col-md-3",children:(0,n.jsx)("b",{children:"UserName"})}),(0,n.jsx)("div",{className:"col-md-7",children:(0,n.jsx)("input",{type:"text",className:"form-control ",value:v,placeholder:"UserName",onChange:function(e){p(e.target.value),U(!1)},onBlur:function(e){JSON.parse(localStorage.getItem("user")).map((function(s){return s.username===e.target.value&&U(!0)}))},ref:D})})]}),(0,n.jsx)("p",{}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-1"}),(0,n.jsx)("div",{className:"col-md-3",children:(0,n.jsx)("b",{children:"Password"})}),(0,n.jsx)("div",{className:"col-md-7",children:(0,n.jsx)("input",{type:"password",className:"form-control",value:b,placeholder:"Password",onChange:function(e){return S(e.target.value)},ref:B})})]}),(0,n.jsx)("p",{}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-5"}),(0,n.jsx)("div",{className:"col-md-1",children:(0,n.jsx)("button",{type:"button",className:"btn1",onClick:function(){var e=JSON.parse(JSON.stringify(A));""===a?(alert("Enter Name And continue"),I.current.focus()):""===v?(alert("Enter UserNmae And continue"),D.current.focus()):""===b?(alert("Enter Password And continue"),B.current.focus()):(C(E+1),e.push({id:E,name:a,email:i,phone:x,username:v,password:b}),J(e),localStorage.setItem("user",JSON.stringify(e)),r(""),d(""),h(""),p(""),S(""),window.location.href="#/log/userLogin")},children:"Submit"})})]}),(0,n.jsx)("input",{type:"hidden",value:E}),(0,n.jsx)("p",{style:{paddingBottom:"20px"}})]})}}}]);
//# sourceMappingURL=167.d8569adb.chunk.js.map