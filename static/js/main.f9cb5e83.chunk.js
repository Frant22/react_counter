(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(2),c=n.n(u),o=n(3),d=n(4),i=n(6),s=n(5),l=(n(12),function(e){var t=e.number,n=e.addOne,a=e.add100,u=e.increase;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Count:",t),r.a.createElement("button",{type:"button",onClick:n},"Add 1"),r.a.createElement("button",{type:"button",onClick:a},"Add 100"),r.a.createElement("button",{type:"button",onClick:u},"Increase"))}),b=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(e=t.call.apply(t,[this].concat(r))).state={number:0},e.addOne=function(){e.setState((function(e){return{number:e.number+1}}))},e.add100=function(){e.setState((function(e){return{number:e.number+100}}))},e.increase=function(){e.state.number%5===0&&e.add100(),e.addOne()},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.number;return r.a.createElement(l,{number:e,addOne:this.addOne,add100:this.add100,increase:this.increase})}}]),n}(r.a.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.f9cb5e83.chunk.js.map