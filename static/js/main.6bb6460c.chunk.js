(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),c=n.n(a),s=n(8),i=n(6),l=n(15),u=n(16),h=(n(27),n(1)),d=n(2),b=n(4),m=n(3),p=n(5),E=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(b.a)(this,Object(m.a)(t).call(this))).updateCount=function(){e.setState((function(t){return{count:e.state.count+1}}))},e.state={count:0},e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterButton"),o.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(r.Component),f=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return console.log("Header"),o.a.createElement("div",null,o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(E,{color:"red"}))}}]),t}(r.Component),g=function(e){return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(e.id,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,e.name),o.a.createElement("p",null,e.email)))},O=function(e){var t=e.robots;return console.log("CardList"),o.a.createElement("div",null,t.map((function(e){return o.a.createElement(g,{key:e.id,id:e.id,name:e.name,username:e.username,email:e.email})})))},v=function(e){var t=e.searchChange;return console.log("SearchBox"),o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{onChange:t,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots"}))},j=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},C=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(m.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componenDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops. That is not good."):this.props.children}}]),t}(r.Component),y=(n(28),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(b.a)(this,Object(m.a)(t).call(this))).componentDidMount=function(){e.props.onRequestRobots()},e.state={robots:[]},e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?o.a.createElement("h1",null,"Loading"):o.a.createElement("div",{className:"tc"},o.a.createElement(f,null),o.a.createElement(v,{searchChange:n}),o.a.createElement(j,null,o.a.createElement(C,null,o.a.createElement(O,{robots:c}))))}}]),t}(r.Component)),R=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(y),S={searchField:""},w={isPending:!1,robots:[],error:""};n(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=Object(l.createLogger)(),k=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(i.d)(k,Object(i.a)(u.a,_));c.a.render(o.a.createElement(s.a,{store:T},o.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.6bb6460c.chunk.js.map