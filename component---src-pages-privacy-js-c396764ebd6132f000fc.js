(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return p});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(159),c=n.n(l),s=n(160),u=n.n(s),d=n(154),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=u()(this,"props.data.site.siteMetadata.title"),t=u()(this,"props.data.site.siteMetadata.description");return o.a.createElement(d.a,null,o.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:"Volunteer | "+e}),o.a.createElement("h2",null,"A Note on Privacy"),o.a.createElement("p",{style:{textAlign:"center"}},"We are a registered non-profit organization pledged to enable people to communicate freely in the digital era, without having to worry about their privacy, and the potential loss of their rights over the content they produce.",o.a.createElement("br",null),o.a.createElement("br",null),"We don't collect any personal information or usage data about the visitors of this website or our other applications. One exception is users sending us bug reports from the mobile application, which includes usage logs, but it's stripped from sensitive data, and it can be reviewed before sending."))},t}(o.a.Component);t.default=m;var p="3540649657"},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(150),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(153),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var a=n(162),r=n.n(a),i=n(163),o=n.n(i);o.a.headerFontFamily=["Roboto"],o.a.bodyFontFamily=["Roboto"],o.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",color:"#6200EA"}}};var l=new r.a(o.a);var c=l.rhythm,s=l.scale},153:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},154:function(e,t,n){"use strict";n(33);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(152),c=n(151),s=(n(161),n(156)),u=n.n(s),d=(n(164),n(157),function(e){function t(t){var n;return(n=e.call(this,t)||this).openReactMobileMenu=function(){n.setState(function(e){return{menuIsOpen:!e.menuIsOpen}})},n.state={menuIsOpen:!1},n}return r()(t,e),t.prototype.render=function(){var e,t={color:"white",textDecoration:"none",fontSize:"2.75rem"};return o.a.createElement("button",{style:{margin:0,padding:0,height:"42px",outline:"none",display:"flex",paddingRight:20},onClick:this.openReactMobileMenu,className:"hamburger hamburger--spin "+(this.state.menuIsOpen&&"is-active"),type:"button"},o.a.createElement("span",{className:"hamburger-box"},o.a.createElement("span",((e={style:{color:"white"},className:"hamburger-inner"}).style={zIndex:99999},e))),this.state.menuIsOpen&&o.a.createElement("div",{style:{position:"fixed",width:"100%",height:"100%",top:0,left:0,backgroundSize:"cover",backgroundColor:"black",opacity:.8},className:"open"},o.a.createElement("div",null,o.a.createElement("ul",{style:{color:"white",listStyle:"none",margin:"5rem",fontWeight:100,fontSize:"3rem",lineHeight:"4rem"}},o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/"},"Mission")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/team"},"Team")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/donate"},"Donate")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/contact"},"Contact")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/blog"},"Blog"))))))},t}(o.a.Component)),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateWindowDimensions=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.state={width:0},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.render=function(){return o.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"#6200EA",height:80}},o.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",maxWidth:"56rem"}},o.a.createElement(c.Link,{to:"/",style:{color:"#FFFFFF",flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("img",{src:u.a,style:{width:70,height:70,marginBottom:0}}),o.a.createElement("div",{style:{fontFamily:"Roboto",fontSize:this.state.width>650?24:20,fontWeight:500,whiteSpace:"nowrap"}},"Felfele Foundation")),this.state.width>650?o.a.createElement("div",{style:{maxWidth:400,display:"flex",flexDirection:"row",justifyContent:"space-between",paddingRight:10}},o.a.createElement(p,{to:"/"},"Mission"),o.a.createElement(p,{to:"/team"},"Team"),o.a.createElement(p,{to:"/donate"},"Donate"),o.a.createElement(p,{to:"/contact"},"Contact"),o.a.createElement(p,{to:"/blog"},"Blog")):o.a.createElement(d,null)))},t}(i.Component),p=function(e){return o.a.createElement(c.Link,Object.assign({},e,{style:{color:"#FFFFFF",paddingRight:10}}))},f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:h.rootContainer},o.a.createElement("div",{style:h.sectionsContainer},o.a.createElement("div",{style:h.section},o.a.createElement("div",{style:h.sectionTitle},"Developers"),o.a.createElement("a",{href:"https://github.com/felfele",target:"_new"},"Github"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md",target:"_new"},"Guidelines"),o.a.createElement("a",{href:"https://gitter.im/felfele/purple-lounge",target:"_new"},"Gitter")),o.a.createElement("div",{style:h.section},o.a.createElement("div",{style:h.sectionTitle},"Contribute"),o.a.createElement(c.Link,{to:"/donate"},"Donate"),o.a.createElement(c.Link,{to:"/volunteer"},"Volunteer"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CODE_OF_CONDUCT.md",target:"_new"},"Code of Conduct")),o.a.createElement("div",{style:h.section},o.a.createElement("div",{style:h.sectionTitle},"Help"),o.a.createElement("a",{href:"mailto:support@felfele.com"},"Support"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/issues/new?assignees=&labels=bug%2C+todo&template=bug_report.md&title=",target:"_new"},"File a Bug")),o.a.createElement("div",{style:h.section},o.a.createElement("div",{style:h.sectionTitle},"Legal"),o.a.createElement(c.Link,{to:"/contact"},"Contact"),o.a.createElement("a",{href:"https://ariregister.rik.ee/index?lang=eng"},"Public Records"),o.a.createElement(c.Link,{to:"/privacy"},"Privacy Policy"))))},t}(i.Component),h={rootContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:10,textTransform:"uppercase",letterSpacing:2,color:"gray",paddingTop:100},sectionsContainer:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%",paddingBottom:50},section:{display:"flex",flexDirection:"column"},sectionTitle:{paddingBottom:5,fontWeight:600}},g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.props.style,n={marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(32),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)},a=Object.assign({},n,t);return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement("div",{style:a},o.a.createElement("br",null),e,o.a.createElement(f,null)))},t}(o.a.Component);t.a=g},155:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(48),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},156:function(e,t,n){e.exports=n.p+"static/icon-white-transparent-4514e607f8952b6b93e1b8cec2903b23.png"},157:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-privacy-js-c396764ebd6132f000fc.js.map