(this["webpackJsonpstar-wars-api"]=this["webpackJsonpstar-wars-api"]||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},18:function(e,a,t){e.exports=t(42)},23:function(e,a,t){},24:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(16),r=t.n(l),o=(t(23),t(2)),s=(t(24),t(17),function(e){e.tabCallback}),i=t(3),m=function(e){var a=e.data,t=e.dataPlanets,l=(e.addFav,Object(n.useState)("")),r=Object(o.a)(l,2),s=r[0],i=r[1],m=a.filter((function(e){return e.name.toLowerCase().match(s.toLowerCase())||e.eye_color.toLowerCase().match(s.toLowerCase())||e.birth_year.toLowerCase().match(s.toLowerCase())})).map((function(e){})),u=t.filter((function(e){return e.name.toLowerCase().match(s.toLowerCase())||e.climate.toLowerCase().match(s.toLowerCase())||e.terrain.toLowerCase().match(s.toLowerCase())})).map((function(e){}));return c.a.createElement("div",{className:"listContainer"},c.a.createElement("div",{className:"searchBar"},c.a.createElement("input",{value:s,onChange:function(e){return i(e.target.value)}})),c.a.createElement("div",{className:"listItem"},c.a.createElement("div",{className:"Item"},m),c.a.createElement("div",{className:"Item"},u)))},u=function(e){var a=e.favData,t=e.favDataPlanets,l=e.remFav,r=Object(n.useState)("all"),s=Object(o.a)(r,2),m=s[0],u=s[1],d=a.map((function(e){return c.a.createElement("div",{className:"Item",key:e.name},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"CHARACTER"),c.a.createElement("div",null,"Name: ",e.name),c.a.createElement("div",null,"Eye Color: ",e.eye_color),c.a.createElement("div",null,"Age: ",e.birth_year),c.a.createElement("button",{className:"favBtn",onClick:function(){return l(e,"people")}},"Remove from Favorites"))))})),f=t.map((function(e){return c.a.createElement("div",{className:"Item",key:e.name},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"PLANET"),c.a.createElement("div",null,"Name: ",e.name),c.a.createElement("div",null,"Climate: ",e.climate),c.a.createElement("div",null,"Terrain: ",e.terrain),c.a.createElement("button",{className:"favBtn",onClick:function(){return l(e,"planets")}},"Remove from Favorites"))))})),v=[].concat(Object(i.a)(f),Object(i.a)(d));return c.a.createElement("div",{className:"listContainer"},c.a.createElement("ul",{className:"category"},c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){return u("all")}},"All")),"|",c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){return u("people")}},"People")),"|",c.a.createElement("li",null,c.a.createElement("button",{onClick:function(){return u("planets")}},"Planets"))),c.a.createElement("div",{className:"listItem"},function(e){switch(e){case"all":return v;case"people":return d;case"planets":return f;default:return v}}(m)))},d=t(6),f=t.n(d),v=[],p=[],E=[];var b=[];var h=function(e){var a=e.tabSelected,t=Object(n.useState)([]),l=Object(o.a)(t,2),r=l[0],s=l[1],d=Object(n.useState)([]),h=Object(o.a)(d,2),C=h[0],O=h[1],w=Object(n.useState)([]),N=Object(o.a)(w,2),j=N[0],g=N[1],y=Object(n.useState)([]),k=Object(o.a)(y,2),L=k[0],x=k[1];return Object(n.useEffect)((function(){!function e(a,t){f.a.get("".concat(t)).then((function(t){E.push.apply(E,Object(i.a)(t.data.results)),a([].concat(E)),null!==t.data.next&&e(a,t.data.next)})).catch((function(e){return console.log("ERROR ---\x3e "+e)}))}(s,"https://swapi.dev/api/people/"),function e(a,t){f.a.get("".concat(t)).then((function(t){b.push.apply(b,Object(i.a)(t.data.results)),a([].concat(b)),null!==t.data.next&&e(a,t.data.next)})).catch((function(e){return console.log("ERROR ---\x3e "+e)}))}(O,"https://swapi.dev/api/planets/")}),[]),c.a.createElement("div",{className:"listComponent"},c.a.createElement("div",{className:"listItemContainer"},"Search"===a?c.a.createElement(m,{data:r,dataPlanets:C,addFav:function(e,a){return function(e,a){if("people"===a)if(console.log("setToFavorite fired"),v.some((function(a){return a.name===e.name})))alert("already exists");else{var t=[];t=[].concat(Object(i.a)(t),[e]),v.push.apply(v,Object(i.a)(t)),g([].concat(v))}else if(console.log("setToFavorite fired"),p.some((function(a){return a.name===e.name})))alert("already exists");else{var n=[];n=[].concat(Object(i.a)(n),[e]),p.push.apply(p,Object(i.a)(n)),x([].concat(p))}}(e,a)}}):c.a.createElement(u,{favData:j,favDataPlanets:L,remFav:function(e,a){return function(e,a){if("people"===a){var t=v.indexOf(e);t>-1&&v.splice(t,1),g([].concat(v))}else{var n=p.indexOf(e);n>-1&&p.splice(n,1),x([].concat(p))}}(e,a)}})))};var C=function(){var e=Object(n.useState)("Search"),a=Object(o.a)(e,2),t=a[0],l=a[1];return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(s,{tabCallback:function(e){l(e)}}),c.a.createElement("h1",{className:"titleTab"},t)),c.a.createElement("main",null,c.a.createElement("div",{className:"content"},c.a.createElement(h,{tabSelected:t}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0060a51d.chunk.js.map