(this.webpackJsonpemployee=this.webpackJsonpemployee||[]).push([[0],{23:function(e,t,s){},25:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s.n(r),a=s(12),c=s.n(a),l=(s(23),s(13)),o=s(14),i=s(15),d=s(18),u=s(17),h=s(0),m=function(e){return Object(h.jsx)("form",{children:Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search for Employee",id:"search"},e.key),Object(h.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3",children:"Search"}),Object(h.jsx)("button",{onClick:e.handleFormBack,className:"btn btn-primary mt-3",children:"Back to list"})]})})})};s(25);var j=function(e){return Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"row",children:[Object(h.jsx)("th",{className:"firstName col-md-2",onClick:e.sortByFirstName,children:" First Name"}),Object(h.jsx)("th",{className:"lastName col-md-3",onClick:e.sortByLastName,children:" Last Name"}),Object(h.jsx)("th",{className:"photo col-md-2",children:"Photo"}),Object(h.jsx)("th",{className:"email col-md-3",children:"Email"}),Object(h.jsx)("th",{className:"phone col-md-2",children:"Phone Number"})]})}),Object(h.jsx)("tbody",{children:e.results.map((function(e){return Object(h.jsxs)("tr",{className:"row background",children:[Object(h.jsx)("td",{className:"background col-md-2 txt-color",children:e.name.first}),Object(h.jsx)("td",{className:"background col-md-3",children:e.name.last}),Object(h.jsx)("td",{className:"background col-md-2",children:Object(h.jsx)("img",{src:e.picture.large,alt:"emp-img"})}),Object(h.jsx)("td",{className:"background col-md-3",children:e.email}),Object(h.jsx)("td",{className:"background col-md-2",children:e.phone})]},e.login.uuid)}))})]})},b=s(16),O=s.n(b),f=function(){return O.a.get("https://randomuser.me/api/?results=200")},x=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={sortOrder:"ascending",search:"",results:[]},e.handleInputChange=function(t){var s=t.target.value,r=t.target.name;e.setState(Object(l.a)({},r,s))},e.searchEmp=function(t){console.log("this is query");var s=e.state.results.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(t.toLowerCase())}));e.setState({results:s})},e.handleFormBack=function(t){f(t).then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleFormSubmit=function(t){t.preventDefault(),console.log("This is the event"+t),e.searchEmp(e.state.search)},e.sortByFirstName=function(){var t=e.state.results.sort((function(e,t){return t.name.first>e.name.first?-1:e.name.first>t.name.first?1:0}));"DESC"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ASC"})):e.setState({sortOrder:"DESC"}),e.setState({results:t})},e.sortByLastName=function(){var t=e.state.results.sort((function(e,t){return t.name.last>e.name.last?-1:e.name.last>t.name.last?1:0}));"DESC"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ASC"})):e.setState({sortOrder:"DESC"}),e.setState({results:t})},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){console.log(t),e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}));this.state.results.filter((function(e){}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,handleFormBack:this.handleFormBack}),Object(h.jsx)(j,{results:this.state.results,sortByFirstName:this.sortByFirstName,sortByLastName:this.sortByLastName})]})}}]),s}(r.Component);var p=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"jumbotron jumbotron-fluid",id:"jumboTron",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("h1",{className:"display-4",children:[Object(h.jsx)("i",{className:"fas fa-user-friends"})," ",Object(h.jsx)("b",{children:"Employee Directory"})]}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Click First Name for alphabetical ascending or descending order"}),Object(h.jsx)("li",{children:"Click Last Name for alphabetical ascending or descending order"})]})]})})})};var g=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{}),Object(h.jsx)(x,{})]})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,46)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),r(e),n(e),a(e),c(e)}))};s(44);c.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),N()}},[[45,1,2]]]);
//# sourceMappingURL=main.b84a6854.chunk.js.map