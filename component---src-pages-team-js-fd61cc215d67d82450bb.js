(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{147:function(e,t,n){"use strict";n.r(t);n(75),n(50),n(165),n(49);var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=n(160),c=n.n(l),s=n(161),u=n.n(s),d=n(158),m=n(243),f=n.n(m),p=n(244),h=n.n(p),g=n(245),y=n.n(g),b=n(246),E=n.n(b),v=n(247),w=n.n(v),x={Attila:{image:f.a,data:{name:"Attila Gazsó",title:"Managing Director",role:"Engineering"}},David:{image:w.a,data:{name:"David Gauquelin",title:"Director of Product",role:"Product & Design"}},Mark:{image:h.a,data:{name:"Mark Vujevits",title:"Managing Director",role:"Engineering"}},Juli:{image:E.a,data:{name:"Juli Pécsi",title:"Supervisory Board",role:"Marketing"}},Viktor:{image:y.a,data:{name:"Viktor Trón",title:"Advisor",role:"Ethereum Swarm"}}},C=n(153);n.d(t,"query",function(){return k});var j=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=u()(this,"props.data.site.siteMetadata.title"),t=u()(this,"props.data.site.siteMetadata.description");return o.a.createElement(d.a,null,o.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:"Team | "+e}),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}},o.a.createElement("div",null,o.a.createElement("h2",null,"Team"),o.a.createElement("br",null),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",maxWidth:600,justifyContent:"center"}},Object.keys(x).map(function(e){if(x[e])return o.a.createElement(D,{data:x[e]})})))))},t}(o.a.Component),D=function(e){var t=e.data;return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:15}},o.a.createElement("img",{style:{width:Object(C.a)(4),height:Object(C.a)(4),borderRadius:Object(C.a)(2)},src:t.image}),Object.keys(t.data).map(function(e){if(t.data[e])return o.a.createElement("p",{style:{marginBottom:"0.5rem"}},t.data[e])}))},k=(t.default=j,"3540649657")},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(150),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(152),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=i.a.createContext({}),f=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},153:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var a=n(162),i=n.n(a),r=n(163),o=n.n(r);o.a.headerFontFamily=["Roboto"],o.a.bodyFontFamily=["Roboto"],o.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",color:"#6200EA"}}};var l=new i.a(o.a);var c=l.rhythm,s=l.scale},154:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(48),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},155:function(e,t,n){e.exports=n.p+"static/icon-white-transparent-4514e607f8952b6b93e1b8cec2903b23.png"},156:function(e,t,n){},158:function(e,t,n){"use strict";n(33);var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=n(153),c=n(151),s=(n(159),n(155)),u=n.n(s),d=(n(164),n(156),function(e){function t(t){var n;return(n=e.call(this,t)||this).openReactMobileMenu=function(){n.setState(function(e){return{menuIsOpen:!e.menuIsOpen}})},n.state={menuIsOpen:!1},n}return i()(t,e),t.prototype.render=function(){var e,t={color:"white",textDecoration:"none",fontSize:"2.75rem"};return o.a.createElement("button",{style:{margin:0,padding:0,height:"42px",outline:"none",display:"flex",paddingRight:20},onClick:this.openReactMobileMenu,className:"hamburger hamburger--spin "+(this.state.menuIsOpen&&"is-active"),type:"button"},o.a.createElement("span",{className:"hamburger-box"},o.a.createElement("span",((e={style:{color:"white"},className:"hamburger-inner"}).style={zIndex:99999},e))),this.state.menuIsOpen&&o.a.createElement("div",{style:{position:"fixed",width:"100%",height:"100%",top:0,left:0,backgroundSize:"cover",backgroundColor:"black",opacity:.9},className:"open"},o.a.createElement("div",null,o.a.createElement("ul",{style:{color:"white",listStyle:"none",margin:"5rem",fontWeight:100,fontSize:"3rem",lineHeight:"4rem"}},o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/"},"Mission")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/team"},"Team")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/donate"},"Donate")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/contact"},"Contact")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/blog"},"Blog"))))))},t}(o.a.Component)),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateWindowDimensions=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.state={width:0},n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.render=function(){return o.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"#6200EA",height:80}},o.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",maxWidth:"56rem"}},o.a.createElement(c.Link,{to:"/",style:{color:"#FFFFFF",flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("img",{src:u.a,style:{width:70,height:70,marginBottom:0}}),o.a.createElement("div",{style:{fontFamily:"Roboto",fontSize:this.state.width>650?24:20,fontWeight:500,whiteSpace:"nowrap"}},"Felfele Foundation")),this.state.width>650?o.a.createElement("div",{style:{maxWidth:400,display:"flex",flexDirection:"row",justifyContent:"space-between",paddingRight:10}},o.a.createElement(f,{to:"/"},"Mission"),o.a.createElement(f,{to:"/team"},"Team"),o.a.createElement(f,{to:"/donate"},"Donate"),o.a.createElement(f,{to:"/contact"},"Contact"),o.a.createElement(f,{to:"/blog"},"Blog")):o.a.createElement(d,null)))},t}(r.Component),f=function(e){return o.a.createElement(c.Link,Object.assign({},e,{style:{color:"#FFFFFF",paddingRight:10}}))},p=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:h.rootContainer},o.a.createElement("div",{style:h.sectionsContainer},o.a.createElement("div",{style:h.section},o.a.createElement("div",{style:h.sectionTitle},"Developers"),o.a.createElement("a",{href:"https://github.com/felfele",target:"_new"},"Github"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md",target:"_new"},"Guidelines"),o.a.createElement("a",{href:"https://gitter.im/felfele/purple-lounge",target:"_new"},"Gitter")),o.a.createElement("div",{style:h.section},o.a.createElement("div",{style:h.sectionTitle},"Contribute"),o.a.createElement(c.Link,{to:"/donate"},"Donate"),o.a.createElement(c.Link,{to:"/volunteer"},"Volunteer"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CODE_OF_CONDUCT.md",target:"_new"},"Code of Conduct")),o.a.createElement("div",{style:h.section},o.a.createElement("div",{style:h.sectionTitle},"Help"),o.a.createElement("a",{href:"mailto:support@felfele.com"},"Support"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/issues/new?assignees=&labels=bug%2C+todo&template=bug_report.md&title=",target:"_new"},"File a Bug")),o.a.createElement("div",{style:h.section},o.a.createElement("div",{style:h.sectionTitle},"Legal"),o.a.createElement(c.Link,{to:"/contact"},"Contact"),o.a.createElement("a",{href:"https://ariregister.rik.ee/index?lang=eng"},"Public Records"),o.a.createElement(c.Link,{to:"/privacy"},"Privacy Policy"))))},t}(r.Component),h={rootContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:10,textTransform:"uppercase",letterSpacing:2,color:"gray",paddingTop:100},sectionsContainer:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%",paddingBottom:50},section:{display:"flex",flexDirection:"column"},sectionTitle:{paddingBottom:5,fontWeight:600}},g=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.props.style,n={marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(32),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)},a=Object.assign({},n,t);return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement("div",{style:a},o.a.createElement("br",null),e,o.a.createElement(p,null)))},t}(o.a.Component);t.a=g},165:function(e,t,n){var a=n(25),i=n(35);n(166)("keys",function(){return function(e){return i(a(e))}})},166:function(e,t,n){var a=n(6),i=n(17),r=n(16);e.exports=function(e,t){var n=(i.Object||{})[e]||Object[e],o={};o[e]=t(n),a(a.S+a.F*r(function(){n(1)}),"Object",o)}},243:function(e,t,n){e.exports=n.p+"static/gazso-5a8b813035c38fc2d2d8ccd6d97c6eef.jpg"},244:function(e,t,n){e.exports=n.p+"static/vujevits-5c228ed1bb3e22b5bba996b58d33961a.png"},245:function(e,t,n){e.exports=n.p+"static/tron-6dd4442e5dcf049fd4e99d990fe16f97.jpg"},246:function(e,t,n){e.exports=n.p+"static/juli-b013bfad87b62cca6306ff94f4c2ea4c.png"},247:function(e,t,n){e.exports=n.p+"static/david-f4bf7e0e8d374efafa4fb80f08d6f216.jpg"}}]);
//# sourceMappingURL=component---src-pages-team-js-fd61cc215d67d82450bb.js.map