(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{32:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(22),s=c.n(n),a=c(7),i=c(2),j=(c(30),c(31),c(32),c(15)),b=c.n(j),r=c(3),l=function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},d=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(a.c,{to:"/",className:l,children:"Home"}),Object(r.jsx)(a.c,{to:"/tabs",className:l,children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(i.b,{})})})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=function(){var e,t=Object(i.r)().tabId,c=o.find((function(e){return e.id===t}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:o.map((function(e){return Object(r.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":t===e.id}),children:Object(r.jsx)(a.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:null!==(e=null===c||void 0===c?void 0:c.content)&&void 0!==e?e:"Please select a tab"})]})},h=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},O=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},m=function(){return Object(r.jsx)(a.a,{children:Object(r.jsx)(i.e,{children:Object(r.jsxs)(i.c,{path:"/",element:Object(r.jsx)(d,{}),children:[Object(r.jsx)(i.c,{index:!0,element:Object(r.jsx)(h,{})}),Object(r.jsxs)(i.c,{path:"tabs",children:[Object(r.jsx)(i.c,{index:!0,element:Object(r.jsx)(x,{})}),Object(r.jsx)(i.c,{path:":tabId?",element:Object(r.jsx)(x,{})})]}),Object(r.jsx)(i.c,{path:"*",element:Object(r.jsx)(O,{})}),Object(r.jsx)(i.c,{path:"home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})})]})})})};s.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.268c0d82.chunk.js.map