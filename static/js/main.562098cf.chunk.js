(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var n=o(0),c=o(1),r=o.n(c),a=o(7),i=o.n(a),s=(o(14),o(4));var d=function(t){var e=Object(c.useState)(""),o=Object(s.a)(e,2),r=o[0],a=o[1];return Object(n.jsxs)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e5*Math.random()),text:r}),a("")},children:[Object(n.jsx)("input",{type:"text",placeholder:"Add a todo",value:r,name:"text",className:"todo-input",onChange:function(t){a(t.target.value)}}),Object(n.jsx)("button",{className:"todo-button",children:" Add Todo"})]})},u=o(6),j=o(8);var l=function(t){var e=t.todos,o=t.completeTodo,c=t.removeTodo;return e.map((function(t,e){return Object(n.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(n.jsx)("div",{onClick:function(){return o(t.id)},children:t.text},t.id),Object(n.jsx)("div",{className:"icons",children:Object(n.jsx)(j.a,{onClick:function(){return c(t.id)},className:"delete-icon"})})]},e)}))};var b=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),o=e[0],r=e[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"What's the Plan for Today?"}),Object(n.jsx)(d,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(u.a)(o));r(e)}}}),Object(n.jsx)(l,{todos:o,completeTodo:function(t){var e=o.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));r(e)},removeTodo:function(t){var e=Object(u.a)(o).filter((function(e){return e.id!==t}));r(e)}})]})};var m=function(){return Object(n.jsx)("div",{className:"todo-app",children:Object(n.jsx)(b,{})})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.562098cf.chunk.js.map