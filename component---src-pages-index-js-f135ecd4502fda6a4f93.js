(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return h});var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=n(158),c=n.n(l),s=n(157),u=n.n(s),d=n(152),m=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=c()(this,"props.data.site.siteMetadata.title"),t=c()(this,"props.data.site.siteMetadata.description");return o.a.createElement(d.a,null,o.a.createElement(u.a,null,o.a.createElement("title",null,e),o.a.createElement("meta",{name:"description",content:t})),o.a.createElement(f,{title:"Welcome to the Felfele Foundation",body:"We are a non-profit organization building services that gives you a similar level of privacy when you are with your friends and family in person. We believe in the future the cost of services will be marginal and it will be so easy to pay for it, that nobody will think about it anymore. We are building services where you are in control, and nobody can access, or stop you from accessing your data, not even us."}),o.a.createElement(f,{title:"The Felfele Mobile App",body:"We are a non-profit organization building services that gives you a similar level of privacy when you are with your friends and family in person. We believe in the future the cost of services will be marginal and it will be so easy to pay for it, that nobody will think about it anymore. We are building services where you are in control, and nobody can access, or stop you from accessing your data, not even us. Read our Manifesto here."}),o.a.createElement(f,{title:"Are you interested in shaping the future with us?",body:"The need for human communication is constant and technology enabled us to build tools to serve this need. Historically this evolved to practices that takes away our rights to privacy and control, because that was the only economic way to build these tools in a global scale. Fortunately there are better ways to achieve this now, which respect your privacy and let you stay in control. We commit to working towards this future by making new technologies and services available at a price that’s affordable for everyone."}))},t}(o.a.Component),f=function(e){var t=e.title,n=e.body;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,t),o.a.createElement("p",null,n))};t.default=m;var h="3540649657"},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(148),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(151),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=i.a.createContext({}),f=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var a=n(159),i=n.n(a),r=n(160),o=n.n(r);o.a.headerFontFamily=["Roboto"],o.a.bodyFontFamily=["Roboto"],o.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",color:"#6200EA"}}};var l=new i.a(o.a);var c=l.rhythm,s=l.scale},151:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e,t,n){"use strict";n(33);var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=n(150),c=n(149),s=(n(161),n(154)),u=n.n(s),d=n(162),m=n.n(d),f=(n(163),n(155),function(e){function t(t){var n;return(n=e.call(this,t)||this).openReactMobileMenu=function(){n.setState(function(e){return{menuIsOpen:!e.menuIsOpen}})},n.state={menuIsOpen:!1},n}return i()(t,e),t.prototype.render=function(){var e,t={color:"white",textDecoration:"none"};return o.a.createElement(m.a,{duration:2e3},o.a.createElement("button",{style:{margin:0,padding:0,height:"42px",outline:"none",display:"flex"},onClick:this.openReactMobileMenu,className:"hamburger hamburger--spin "+(this.state.menuIsOpen&&"is-active"),type:"button"},o.a.createElement("span",{className:"hamburger-box"},o.a.createElement("span",((e={style:{color:"white"},className:"hamburger-inner"}).style={zIndex:99999},e))),this.state.menuIsOpen&&o.a.createElement("div",{style:{position:"fixed",width:"100%",height:"100%",top:0,left:0,backgroundSize:"cover",backgroundColor:"black",opacity:.8},className:"open"},o.a.createElement(m.a,{duration:500,left:!0,cascade:!0},o.a.createElement("ul",{style:{color:"white",listStyle:"none",margin:"5rem",fontWeight:100,fontSize:"3rem",lineHeight:"4rem"}},o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/"},"Mission")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/team"},"Team")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/donate"},"Donate")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/contact"},"Contact")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/blog"},"Blog")))))))},t}(o.a.Component)),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateWindowDimensions=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.state={width:0},n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.render=function(){return o.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#6200EA",height:80,minWidth:400}},o.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginLeft:""+Object(l.a)(1.5),marginRight:""+Object(l.a)(1.5),maxWidth:"56rem"}},o.a.createElement(c.Link,{to:"/",style:{color:"#FFFFFF",flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("img",{src:u.a,style:{width:70,height:70,marginBottom:0}}),o.a.createElement("div",{style:{fontFamily:"Roboto",fontSize:24,fontWeight:500,whiteSpace:"nowrap"}},"Felfele Foundation")),this.state.width>650?o.a.createElement("div",{style:{maxWidth:400,display:"flex",flexDirection:"row",justifyContent:"space-between"}},o.a.createElement(p,{to:"/"},"Mission"),o.a.createElement(p,{to:"/team"},"Team"),o.a.createElement(p,{to:"/donate"},"Donate"),o.a.createElement(p,{to:"/contact"},"Contact"),o.a.createElement(p,{to:"/blog"},"Blog")):o.a.createElement(f,null)))},t}(r.Component),p=function(e){return o.a.createElement(c.Link,Object.assign({},e,{style:{color:"#FFFFFF",paddingRight:10}}))},y=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:g.rootContainer},o.a.createElement("div",{style:g.sectionsContainer},o.a.createElement("div",{style:g.section},o.a.createElement("div",{style:g.sectionTitle},"Developers"),o.a.createElement("a",{href:"https://github.com/felfele",target:"_new"},"Github"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md",target:"_new"},"Guidelines"),o.a.createElement("a",{href:"https://gitter.im/felfele/purple-lounge",target:"_new"},"Gitter")),o.a.createElement("div",{style:g.section},o.a.createElement("div",{style:g.sectionTitle},"Contribute"),o.a.createElement(c.Link,{to:"/donate"},"Donate"),o.a.createElement(c.Link,{to:"/volunteer"},"Volunteer"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CODE_OF_CONDUCT.md",target:"_new"},"Code of Conduct")),o.a.createElement("div",{style:g.section},o.a.createElement("div",{style:g.sectionTitle},"Help"),o.a.createElement("a",{href:"mailto:support@felfele.com"},"Support"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/issues/new?assignees=&labels=bug%2C+todo&template=bug_report.md&title=",target:"_new"},"File a Bug")),o.a.createElement("div",{style:g.section},o.a.createElement("div",{style:g.sectionTitle},"Legal"),o.a.createElement(c.Link,{to:"/contact"},"Contact"),o.a.createElement("a",{href:"https://ariregister.rik.ee/index?lang=eng"},"Public Records"),o.a.createElement(c.Link,{to:"/privacy"},"Privacy Policy"))))},t}(r.Component),g={rootContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:10,textTransform:"uppercase",letterSpacing:2,color:"gray",paddingTop:100},sectionsContainer:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%",paddingBottom:50},section:{display:"flex",flexDirection:"column"},sectionTitle:{paddingBottom:5,fontWeight:600}},b=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.props.style,n={marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(32),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)},a=Object.assign({},n,t);return o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement("div",{style:a},o.a.createElement("br",null),e,o.a.createElement(y,null)))},t}(o.a.Component);t.a=b},153:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(48),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,n){e.exports=n.p+"static/icon-white-transparent-4514e607f8952b6b93e1b8cec2903b23.png"},155:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-f135ecd4502fda6a4f93.js.map