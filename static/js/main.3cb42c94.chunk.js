(this.webpackJsonpreactlive=this.webpackJsonpreactlive||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(7),i=c.n(s),r=(c(6),c(8)),l=c(5),a=c(0),o=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"in",children:[Object(a.jsx)("div",{className:"grid",children:e.text}),Object(a.jsx)("div",{className:"btn2",children:Object(a.jsx)("button",{className:"btn3",onClick:function(){e.onSelect(e.id)},children:"x"})})]})})},j=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(localStorage.getItem("lists")?JSON.parse(localStorage.getItem("lists")):[]),j=Object(l.a)(i,2),d=j[0],u=j[1],b=function(e){console.log("deleted"),u((function(t){return t.filter((function(t,c){return c!==e}))}))};return Object(n.useEffect)((function(){localStorage.setItem("lists",JSON.stringify(d))}),[d]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Todo List"}),Object(a.jsxs)("div",{className:"wrap",children:[Object(a.jsx)("input",{type:"text",placeholder:"Enter Todo list",onChange:function(e){s(e.target.value)},required:!0}),Object(a.jsx)("div",{className:"btn2",children:Object(a.jsx)("button",{className:"btn1",onClick:function(){c&&u((function(e){return[].concat(Object(r.a)(e),[c])}))},children:"+"})})]}),Object(a.jsx)("ol",{children:d.map((function(e,t){return Object(a.jsx)(o,{id:t,text:e,onSelect:b},t)}))})]})})};i.a.render(Object(a.jsx)(j,{}),document.getElementById("root"))},6:function(e,t,c){}},[[14,1,2]]]);
//# sourceMappingURL=main.3cb42c94.chunk.js.map