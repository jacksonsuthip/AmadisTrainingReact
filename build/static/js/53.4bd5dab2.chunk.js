"use strict";(self.webpackChunkantoreact=self.webpackChunkantoreact||[]).push([[53],{53:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var a=t(30),s=t(885),d=t(791),o=t(504),i=t(258),r=(0,i.oM)({name:"todoArr",initialState:{todoList:[],todoname:"",doneTodo:[]},reducers:{addTodo:function(e,n){e.todoname=n.payload,e.todoList={tdName:e.todoname,compT:!1}},makeTodo:function(e,n){e.valTodo=n.payload,!0===e.valTodo.complet?e.doneTodo={tdName:e.valTodo.tdname,complet:e.valTodo.complet}:e.doneTodo={tdName:e.valTodo.tdname,complet:!1}}}}),l=r.actions,c=l.addTodo,m=l.makeTodo,u=r.reducer,x=t(184);function v(){var e=(0,a.v9)((function(e){return e.todoArr.todoList})),n=(0,a.I0)(),t=(0,d.useState)([]),o=(0,s.Z)(t,2),i=o[0],r=o[1],l=(0,d.useState)(!1),c=(0,s.Z)(l,2),u=c[0],v=c[1];(0,d.useEffect)((function(){var n=JSON.parse(JSON.stringify(i));void 0!==e.tdName&&(n.push(e),r(n))}),[e]);return(0,x.jsxs)("div",{className:"reduxDiv",children:[(0,x.jsx)("div",{style:{paddingTop:"20px",textAlign:"center"},children:(0,x.jsx)("b",{children:"ToDo List"})}),(0,x.jsx)("hr",{}),i.map((function(e,t){return(0,x.jsxs)("div",{className:"row",style:{paddingBottom:"8px"},children:[(0,x.jsxs)("div",{className:"col-md-1",style:{textAlign:"right"},children:[t+1,"."]}),(0,x.jsxs)("div",{className:"col-md-8",children:[(0,x.jsx)("input",{type:"checkbox",onChange:function(t){return a=e,void(!0===t.target.checked?(v(!0),n(m({tdname:a.tdName,complet:!0}))):(v(!1),n(m({tdname:a.tdName,complet:!1}))));var a}}),(0,x.jsx)("span",{className:u[t]&&"lin",style:{paddingLeft:"10px"},children:e.tdName})]}),(0,x.jsx)("div",{className:"col-md-2",children:(0,x.jsx)("button",{type:"button",className:"btn2",disabled:u[t],onClick:function(e){return function(e){var n=JSON.parse(JSON.stringify(i));n.splice(e,1),r(n)}(t)},children:"Delete"})})]},t)}))]})}function p(){var e=(0,a.v9)((function(e){var n;return null===(n=e.todoArr)||void 0===n?void 0:n.doneTodo})),n=(0,d.useState)([]),t=(0,s.Z)(n,2),o=t[0],i=t[1];return(0,d.useEffect)((function(){var n=JSON.parse(JSON.stringify(o));if(!0===e.complet)n.push(e),i(n);else{var t=o.findIndex((function(n){return n.tdName===e.tdName}));t>=0&&(n.splice(t,1),i(n))}}),[e]),(0,x.jsxs)("div",{className:"reduxDiv",children:[(0,x.jsx)("div",{style:{paddingTop:"20px",textAlign:"center"},children:(0,x.jsxs)("b",{children:["ToDo List Completed - ",o.length]})}),(0,x.jsx)("hr",{}),o.map((function(e,n){return(0,x.jsx)("ul",{style:{paddingBottom:"8px"},children:(0,x.jsx)("li",{children:e.tdName})},n)}))]})}function h(){var e=(0,d.useState)(""),n=(0,s.Z)(e,2),t=n[0],i=n[1],r=(0,a.I0)();return(0,x.jsxs)("div",{className:"",children:[(0,x.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("span",{style:{color:"white",fontSize:"1.6rem"},children:"Redux App"}),(0,x.jsx)("div",{className:" navbar-collapse ulDiv",id:"navbarResponsive",children:(0,x.jsx)("ul",{className:"navbar-nav",children:(0,x.jsx)("li",{className:"nav-item mx-0 mx-lg-1",children:(0,x.jsx)(o.rU,{to:"/home",className:"li",children:"Home"})})})})]})}),(0,x.jsxs)("div",{style:{marginTop:"30px"},className:"container",children:[(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-1"}),(0,x.jsx)("div",{className:"col-md-8",children:(0,x.jsx)("input",{className:"form-control",type:"text",value:t,onChange:function(e){return i(e.target.value)},placeholder:"Enter ToDo . . ."})}),(0,x.jsx)("div",{className:"col-md-2",children:(0,x.jsx)("button",{type:"button",className:"btn1",onClick:function(){r(c(t)),i("")},children:"Add"})})]}),(0,x.jsx)("p",{style:{marginTop:"30px"}}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)(v,{})}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsx)(p,{})})]})]})]})}var N=(0,i.xC)({reducer:{todoArr:u}});function j(){return(0,x.jsx)(a.zt,{store:N,children:(0,x.jsx)(h,{})})}}}]);
//# sourceMappingURL=53.4bd5dab2.chunk.js.map