(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(8),s=n.n(a),o=(n(15),n(2)),u=n(3),i=n(5),j=n(4),l=(n(16),n(0)),d=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"RESTy"})})},h=(n(18),function(){return Object(l.jsx)("footer",{children:Object(l.jsx)("p",{children:"All rights reserved Code Fellows \xa9 "})})}),b=n(7),O=n.n(b),p=n(9),f=(n(20),function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).go=function(){var t=Object(p.a)(O.a.mark((function t(n){var r,c,a,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=n.target.url.value,c=n.target.method.value,t.next=5,fetch(r,{method:c,mode:"cors"});case 5:return a=t.sent,t.next=8,a.json();case 8:s=t.sent,e.props.handler(r,c,s);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("form",{className:"form",onSubmit:this.go,children:[Object(l.jsx)("label",{children:"URL:"}),Object(l.jsx)("input",{placeholder:"url gose here ...",required:!0,name:"url"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"radio",value:"GET",name:"method",required:!0}),"GET",Object(l.jsx)("input",{type:"radio",value:"POST",name:"method",required:!0}),"POST",Object(l.jsx)("input",{type:"radio",value:"PUT",name:"method",required:!0}),"PUT",Object(l.jsx)("input",{type:"radio",value:"DELETE",name:"method",required:!0}),"DELETE"]}),Object(l.jsx)("button",{children:"Go"})]})}}]),n}(c.a.Component)),m=(n(21),n(10)),x=n.n(m),v=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return console.log(this.props),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"main",children:Object(l.jsx)(x.a,{src:this.props})})})}}]),n}(c.a.Component),y=function(e){Object(i.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={method:"",url:"",results:{}},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(l.jsxs)(c.a.Fragment,{children:[Object(l.jsx)(d,{}),Object(l.jsx)(f,{handler:function(t,n,r){e.setState({method:t,url:n,results:r})}}),Object(l.jsx)(v,{results:this.state}),Object(l.jsx)(h,{})]})}}]),n}(c.a.Component);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.e40b594d.chunk.js.map