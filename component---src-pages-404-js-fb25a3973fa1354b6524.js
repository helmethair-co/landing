(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(152),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(l.a,{location:this.props.location},o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist...."),o.a.createElement("div",{style:{width:"100%",height:0,paddingBottom:"70%",position:"relative"}},o.a.createElement("iframe",{src:"https://giphy.com/embed/OK27wINdQS5YQ",width:"100%",height:"100%",style:{position:"absolute"},frameBorder:0,className:"giphy-embed",allowFullScreen:!0})),o.a.createElement("p",null,o.a.createElement("a",{href:"https://giphy.com/gifs/mind-seinfeild-OK27wINdQS5YQ"},"via GIPHY")))},t}(o.a.Component);t.default=c},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(148),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(151),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(34);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var a=n(159),r=n.n(a),i=n(160),o=n.n(i);o.a.headerFontFamily=["Roboto"],o.a.bodyFontFamily=["Roboto"],o.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",color:"#6200EA"}}};var l=new r.a(o.a);var c=l.rhythm,s=l.scale},151:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e,t,n){"use strict";n(33);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(150),c=n(149),s=(n(161),n(154)),u=n.n(s),m=n(162),d=n.n(m),p=(n(163),n(155),function(e){function t(t){var n;return(n=e.call(this,t)||this).openReactMobileMenu=function(){n.setState(function(e){return{menuIsOpen:!e.menuIsOpen}})},n.state={menuIsOpen:!1},n}return r()(t,e),t.prototype.render=function(){var e,t={color:"white",textDecoration:"none"};return o.a.createElement(d.a,{duration:2e3},o.a.createElement("button",{style:{margin:0,padding:0,height:"42px",outline:"none",display:"flex"},onClick:this.openReactMobileMenu,className:"hamburger hamburger--spin "+(this.state.menuIsOpen&&"is-active"),type:"button"},o.a.createElement("span",{className:"hamburger-box"},o.a.createElement("span",((e={style:{color:"white"},className:"hamburger-inner"}).style={zIndex:99999},e))),this.state.menuIsOpen&&o.a.createElement("div",{style:{position:"fixed",width:"100%",height:"100%",top:0,left:0,backgroundSize:"cover",backgroundColor:"black",opacity:.8},className:"open"},o.a.createElement(d.a,{duration:500,left:!0,cascade:!0},o.a.createElement("ul",{style:{color:"white",listStyle:"none",margin:"5rem",fontWeight:100,fontSize:"3rem",lineHeight:"4rem"}},o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/"},"Mission")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/team"},"Team")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/donate"},"Donate")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/contact"},"Contact")),o.a.createElement("li",null,o.a.createElement("a",{style:t,href:"/blog"},"Blog")))))))},t}(o.a.Component)),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateWindowDimensions=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.state={width:0},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.render=function(){return o.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#6200EA",height:80,minWidth:400}},o.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginLeft:""+Object(l.a)(1.5),marginRight:""+Object(l.a)(1.5),maxWidth:"56rem"}},o.a.createElement(c.Link,{to:"/",style:{color:"#FFFFFF",flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("img",{src:u.a,style:{width:70,height:70,marginBottom:0}}),o.a.createElement("div",{style:{fontFamily:"Roboto",fontSize:24,fontWeight:500,whiteSpace:"nowrap"}},"Felfele Foundation")),this.state.width>650?o.a.createElement("div",{style:{maxWidth:400,display:"flex",flexDirection:"row",justifyContent:"space-between"}},o.a.createElement(h,{to:"/"},"Mission"),o.a.createElement(h,{to:"/team"},"Team"),o.a.createElement(h,{to:"/donate"},"Donate"),o.a.createElement(h,{to:"/contact"},"Contact"),o.a.createElement(h,{to:"/blog"},"Blog")):o.a.createElement(p,null)))},t}(i.Component),h=function(e){return o.a.createElement(c.Link,Object.assign({},e,{style:{color:"#FFFFFF",paddingRight:10}}))},g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:y.rootContainer},o.a.createElement("div",{style:y.sectionsContainer},o.a.createElement("div",{style:y.section},o.a.createElement("div",{style:y.sectionTitle},"Developers"),o.a.createElement("a",{href:"https://github.com/felfele",target:"_new"},"Github"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md",target:"_new"},"Guidelines"),o.a.createElement("a",{href:"https://gitter.im/felfele/purple-lounge",target:"_new"},"Gitter")),o.a.createElement("div",{style:y.section},o.a.createElement("div",{style:y.sectionTitle},"Contribute"),o.a.createElement(c.Link,{to:"/donate"},"Donate"),o.a.createElement(c.Link,{to:"/volunteer"},"Volunteer"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CODE_OF_CONDUCT.md",target:"_new"},"Code of Conduct")),o.a.createElement("div",{style:y.section},o.a.createElement("div",{style:y.sectionTitle},"Help"),o.a.createElement("a",{href:"mailto:support@felfele.com"},"Support"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/issues/new?assignees=&labels=bug%2C+todo&template=bug_report.md&title=",target:"_new"},"File a Bug")),o.a.createElement("div",{style:y.section},o.a.createElement("div",{style:y.sectionTitle},"Legal"),o.a.createElement(c.Link,{to:"/contact"},"Contact"),o.a.createElement("a",{href:"https://ariregister.rik.ee/index?lang=eng"},"Public Records"),o.a.createElement(c.Link,{to:"/privacy"},"Privacy Policy"))))},t}(i.Component),y={rootContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:10,textTransform:"uppercase",letterSpacing:2,color:"gray",paddingTop:100},sectionsContainer:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%",paddingBottom:50},section:{display:"flex",flexDirection:"column"},sectionTitle:{paddingBottom:5,fontWeight:600}},E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.props.style,n={marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(32),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)},a=Object.assign({},n,t);return o.a.createElement("div",null,o.a.createElement(f,null),o.a.createElement("div",{style:a},o.a.createElement("br",null),e,o.a.createElement(g,null)))},t}(o.a.Component);t.a=E},153:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(48),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,n){e.exports=n.p+"static/icon-white-transparent-4514e607f8952b6b93e1b8cec2903b23.png"},155:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-404-js-fb25a3973fa1354b6524.js.map