(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return h});n(49);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(150),c=n(157),s=n.n(c),u=n(156),d=n.n(u),m=n(153),p=n(151),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),t=s()(this,"props.data.site.siteMetadata.description"),n=s()(this,"props.data.allMarkdownRemark.edges");return o.a.createElement(m.a,{location:this.props.location,title:e},o.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:"Blog | "+e}),o.a.createElement("h2",null,"Blog"),n.map(function(e){var t=e.node,n=s()(t,"frontmatter.title")||t.frontmatter.path;return o.a.createElement("div",{key:t.frontmatter.path},o.a.createElement("h3",{style:{marginBottom:Object(p.a)(.25)}},o.a.createElement(l.Link,{style:{boxShadow:"none"},to:t.frontmatter.path},n)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(o.a.Component);t.default=f;var h="3203403559"},150:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(149),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(152),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var a=n(158),r=n.n(a),i=n(159),o=n.n(i);o.a.headerFontFamily=["Roboto"],o.a.bodyFontFamily=["Roboto"],o.a.overrideThemeStyles=function(){return{a:{boxShadow:"none",color:"#6200EA"}}};var l=new r.a(o.a);var c=l.rhythm,s=l.scale},152:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},153:function(e,t,n){"use strict";n(33);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(151),c=n(150),s=n(155),u=n.n(s),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateWindowDimensions=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.state={width:0},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions)},n.render=function(){return o.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#6200EA",height:80}},o.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginLeft:""+Object(l.a)(1.5),marginRight:""+Object(l.a)(1.5),maxWidth:"56rem"}},o.a.createElement(c.Link,{to:"/",style:{color:"#FFFFFF",flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("img",{src:u.a,style:{width:70,height:70,marginBottom:0}}),o.a.createElement("div",{style:{fontFamily:"Roboto",fontSize:24,fontWeight:500,whiteSpace:"nowrap"}},"Felfele Foundation")),o.a.createElement("div",{style:{maxWidth:400,display:"flex",flexDirection:"row",justifyContent:"space-between"}},o.a.createElement(m,{to:"/"},"Mission"),o.a.createElement(m,{to:"/team"},"Team"),o.a.createElement(m,{to:"/donate"},"Donate"),o.a.createElement(m,{to:"/contact"},"Contact"),o.a.createElement(m,{to:"/blog"},"Blog"))))},t}(i.Component),m=function(e){return o.a.createElement(c.Link,Object.assign({},e,{style:{color:"#FFFFFF",paddingRight:10}}))},p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:f.rootContainer},o.a.createElement("div",{style:f.sectionsContainer},o.a.createElement("div",{style:f.section},o.a.createElement("div",{style:f.sectionTitle},"Developers"),o.a.createElement("a",{href:"https://github.com/felfele",target:"_new"},"Github"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CONTRIBUTING.md",target:"_new"},"Guidelines"),o.a.createElement("a",{href:"https://gitter.im/felfele/purple-lounge",target:"_new"},"Gitter")),o.a.createElement("div",{style:f.section},o.a.createElement("div",{style:f.sectionTitle},"Contribute"),o.a.createElement(c.Link,{to:"/donate"},"Donate"),o.a.createElement(c.Link,{to:"/volunteer"},"Volunteer"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/blob/master/CODE_OF_CONDUCT.md",target:"_new"},"Code of Conduct")),o.a.createElement("div",{style:f.section},o.a.createElement("div",{style:f.sectionTitle},"Help"),o.a.createElement("a",{href:"mailto:support@felfele.com"},"Support"),o.a.createElement("a",{href:"https://github.com/felfele/felfele/issues/new?assignees=&labels=bug%2C+todo&template=bug_report.md&title=",target:"_new"},"File a Bug")),o.a.createElement("div",{style:f.section},o.a.createElement("div",{style:f.sectionTitle},"Legal"),o.a.createElement(c.Link,{to:"/contact"},"Contact"),o.a.createElement("a",{href:"https://ariregister.rik.ee/index?lang=eng"},"Public Records"),o.a.createElement(c.Link,{to:"/privacy"},"Privacy Policy"))))},t}(i.Component),f={rootContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:10,textTransform:"uppercase",letterSpacing:2,color:"gray",paddingTop:100},sectionsContainer:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%",paddingBottom:50},section:{display:"flex",flexDirection:"column"},sectionTitle:{paddingBottom:5,fontWeight:600}},h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.props.style,n={marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(32),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)},a=Object.assign({},n,t);return o.a.createElement("div",null,o.a.createElement(d,null),o.a.createElement("div",{style:a},o.a.createElement("br",null),e,o.a.createElement(p,null)))},t}(o.a.Component);t.a=h},154:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(48),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},155:function(e,t,n){e.exports=n.p+"static/icon-white-transparent-4514e607f8952b6b93e1b8cec2903b23.png"}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-6ffe53db961326dc5e4d.js.map