(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{15:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i(1),o=i(3),c=i.n(o),r=i(4),s=i(5),l=i(8),d=i(7);var m=function(){return Object(a.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(a.jsx)("p",{className:"lead",children:"Employees of Scranton Branch"})]})})},h={card:{margin:15},img:{height:100,borderRadius:50}};var p=function(e){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"card",style:h.card,children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col",children:Object(a.jsx)("img",{alt:e.name,src:e.image,style:h.img})}),Object(a.jsx)("div",{class:"col",children:e.name}),Object(a.jsx)("div",{class:"col",children:e.title}),Object(a.jsx)("div",{class:"col",children:e.email})]})})}),Object(a.jsx)("span",{onClick:function(){return e.removeEmployee(e.id)},className:"remove"})]})},j={filter:{float:"right"},sort:{float:"left"},bothdropdowns:{margin:10,padding:35}};var b=function(){return Object(a.jsxs)("div",{className:"bothdropdowns",style:j.bothdropdowns,children:[Object(a.jsxs)("div",{className:"dropdown sort",style:j.sort,children:[Object(a.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Sort"}),Object(a.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(a.jsx)("a",{className:"dropdown-item",href:"#",children:"Action"}),Object(a.jsx)("a",{className:"dropdown-item",href:"#",children:"Another action"}),Object(a.jsx)("a",{className:"dropdown-item",href:"#",children:"Something else here"})]})]}),Object(a.jsxs)("div",{className:"dropdown filter",style:j.filter,children:[Object(a.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Filter"}),Object(a.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(a.jsx)("p",{className:"dropdown-item",href:"#",children:"Action"}),Object(a.jsx)("p",{className:"dropdown-item",href:"#",children:"Another action"}),Object(a.jsx)("p",{className:"dropdown-item",href:"#",children:"Something else here"})]})]})]})};var f=function(e){return Object(a.jsx)("div",{className:"wrapper",children:e.children})},u=i(6),g=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={employees:u},e.removeEmployee=function(t){var i=e.state.employees.filter((function(e){return e.id!==t}));e.setState({employees:i})},e}return Object(s.a)(i,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)(m,{}),Object(a.jsx)(b,{}),Object(a.jsx)(f,{children:this.state.employees.map((function(t){return Object(a.jsx)(p,{removeEmployee:e.removeEmployee,id:t.id,image:t.image,name:t.name,title:t.title,email:t.email},t.id)}))})]})}}]),i}(n.Component);i(14);c.a.render(Object(a.jsx)(g,{}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"id":1,"image":"https://static.wikia.nocookie.net/theoffice/images/b/be/Character_-_MichaelScott.PNG/revision/latest/top-crop/width/360/height/360?cb=20200413224550","name":"Michael Scott","title":"Regional Manager","email":"michaelscott@dundermifflin.com"},{"id":2,"image":"https://static.wikia.nocookie.net/theoffice/images/e/e9/Character_-_JimHalpert.PNG/revision/latest/top-crop/width/360/height/360?cb=20200414162003","name":"Jim Halpert","title":"Salesman","email":"jimhalpert@dundermifflin.com"},{"id":3,"image":"https://static.wikia.nocookie.net/theoffice/images/6/67/Pam_Beesley.jpg/revision/latest/top-crop/width/360/height/360?cb=20170701084358","name":"Pam Beesly","title":"Receptionist","email":"pambeesly@dundermifflin.com"},{"id":4,"image":"https://static.wikia.nocookie.net/theoffice/images/c/c5/Dwight_.jpg/revision/latest?cb=20170701082424","name":"Dwight Schrute","title":"Salesman","email":"dwightschrute@dundermifflin.com"},{"id":5,"image":"https://static.wikia.nocookie.net/theoffice/images/e/e0/Character_-_RyanHoward.PNG/revision/latest/top-crop/width/360/height/360?cb=20200414174545","name":"Ryan Howard","title":"Intern","email":"ryanhoward@dundermifflin.com"},{"id":6,"image":"https://static.wikia.nocookie.net/theoffice/images/6/69/Kelly_Kapoor.jpg/revision/latest?cb=20170701090501","name":"Kelly Kapoor","title":"Customer Service Representative","email":"kellykapoor@dundermifflin.com"},{"id":7,"image":"https://static.wikia.nocookie.net/theoffice/images/4/4a/TobyFlenderson.jpg/revision/latest/top-crop/width/360/height/360?cb=20201015184907","name":"Toby Flenderson","title":"HR Representative","email":"tobyflenderson@dundermifflin.com"},{"id":8,"image":"https://static.wikia.nocookie.net/theoffice/images/b/b2/2009Kevincropped.PNG/revision/latest?cb=20170701083657","name":"Kevin Malone","title":"Accountant","email":"kevinmalone@dundermifflin.com"}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.80730543.chunk.js.map