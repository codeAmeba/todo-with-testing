(this["webpackJsonptodo-with-testing"]=this["webpackJsonptodo-with-testing"]||[]).push([[0],{13:function(t,n,e){t.exports=e(21)},18:function(t,n,e){},21:function(t,n,e){"use strict";e.r(n);var o=e(0),r=e.n(o),a=e(9),i=e.n(a),c=(e(18),e(1)),l=e(6),u=e(4),s=e(2);function d(){var t=Object(c.a)(["\n\tlist-style: none;\n\twidth: 400px;\n\theight: 30px;\n\tposition: relative;\n\tmargin-bottom: 15px;\n\tfont-size: 18px;\n\tcolor: rgba(0, 0, 0, 0.8);\n\n\tspan {\n\t\tdisplay: inline-block;\n\t\twidth: 290px;\n\t\tcolor: rgba(0, 0, 0, 0.8);\n\t\tcursor: pointer;\n\t}\n\n\tbutton {\n\t\twidth: 60px;\n\t\theight: 30px;\n\t\tmargin-left: 10px;\n\t\tborder: none;\n\t\tcolor: rgba(0, 0, 0, 0.8);\n\t\tbackground-color: #fff;\n\t\tcursor: pointer;\n\t\toutline: none;\n\t}\n"]);return d=function(){return t},t}var b=s.a.li(d()),p=function(t){var n=t.todo,e=t.onToggle,a=t.onRemove,i=n.id,c=n.text,l=n.done,u=Object(o.useCallback)((function(){return e(i)}),[i,e]),s=Object(o.useCallback)((function(){return a(i)}),[i,a]);return r.a.createElement(b,null,r.a.createElement("span",{style:{textDecoration:l?"line-through":"none"},onClick:u},c),r.a.createElement("button",{onClick:s},"\uc0ad\uc81c"))},f=function(t){var n=t.todos,e=t.onToggle,o=t.onRemove;return r.a.createElement("ul",{"data-testid":"TodoList"},n.map((function(t){return r.a.createElement(p,{todo:t,key:t.id,onToggle:e,onRemove:o})})))};function g(){var t=Object(c.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding-top: 10%;\n\tmargin-bottom: 20px;\n\n\tinput {\n\t\twidth: 250px;\n\t\theight: 30px;\n\t\tborder: none;\n\t\tborder-bottom: 1px solid rgba(0, 0, 0, 0.5);\n\t\tfont-size: 18px;\n\t\toutline: none;\n\t\tpadding: 0 20px;\n\t\tcolor: rgba(0, 0, 0, 0.8);\n\n\t\t&::placeholder {\n\t\t\ttext-align: center;\n\t\t\tfont-size: 18px;\n\t\t\tcolor: rgba(0, 0, 0, 0.8);\n\t\t}\n\t}\n\n\tbutton {\n\t\twidth: 60px;\n\t\theight: 30px;\n\t\tmargin-left: 15px;\n\t\tcolor: rgba(0, 0, 0, 0.8);\n\t\tbackground-color: #fff;\n\t\tborder: 1px solid rgba(0, 0, 0, 0.5);\n\t\tborder-radius: 5px;\n\t\tcursor: pointer;\n\t\toutline: none;\n\t}\n"]);return g=function(){return t},t}var m=s.a.form(g()),h=function(t){var n=t.onInsert,e=Object(o.useState)(""),a=Object(u.a)(e,2),i=a[0],c=a[1],l=Object(o.useCallback)((function(t){c(t.target.value)}),[]),s=Object(o.useCallback)((function(t){n(i),c(""),t.preventDefault()}),[n,i]);return r.a.createElement(m,{onSubmit:s},r.a.createElement("input",{placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:i,onChange:l}),r.a.createElement("button",{type:"submit"},"\ub4f1\ub85d"))};function x(){var t=Object(c.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n"]);return x=function(){return t},t}var v=s.a.main(x()),j=function(){var t=Object(o.useState)([{id:1,text:"TDD practice",done:!0},{id:2,text:"using react-testing-library",done:!0}]),n=Object(u.a)(t,2),e=n[0],a=n[1],i=Object(o.useRef)(3),c=Object(o.useCallback)((function(t){a(e.concat({id:i.current,text:t,done:!1})),i.current+=1}),[e]),s=Object(o.useCallback)((function(t){a(e.map((function(n){return n.id===t?Object(l.a)(Object(l.a)({},n),{},{done:!n.done}):n})))}),[e]),d=Object(o.useCallback)((function(t){a(e.filter((function(n){return n.id!==t})))}),[e]);return r.a.createElement(v,null,r.a.createElement(h,{onInsert:c}),r.a.createElement(f,{todos:e,onToggle:s,onRemove:d}))};var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.eb168afb.chunk.js.map