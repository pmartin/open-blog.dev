(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{151:function(t,e,r){"use strict";r.r(e),r.d(e,"query",function(){return c});var n=r(0),a=r.n(n),i=r(162),o=r(167);e.default=function(t){var e=t.data.currentArticle;return a.a.createElement(i.a,null,a.a.createElement(o.a,{article:e}),e.frontmatter.hero&&a.a.createElement("picture",null,a.a.createElement("source",{srcSet:e.frontmatter.hero.childImageSharp.fluid.srcSetWebp,sizes:"(max-width: 600px) 100vw, 600px",type:"image/webp"}),a.a.createElement("source",{srcSet:e.frontmatter.hero.childImageSharp.fluid.srcSet,sizes:"(max-width: 600px) 100vw, 600px",type:"image/png"}),a.a.createElement("img",{style:{width:"100vw",maxHeight:"50vh",objectFit:"cover"},src:e.frontmatter.hero.childImageSharp.fluid.src,alt:"hero"})),a.a.createElement("div",null,a.a.createElement("h1",null,e.frontmatter.title),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})))};var c="2246854993"},158:function(t,e,r){"use strict";r.d(e,"b",function(){return s});var n=r(0),a=r.n(n),i=r(4),o=r.n(i),c=r(33),l=r.n(c);r.d(e,"a",function(){return l.a});r(159);var u=a.a.createContext({}),s=function(t){return a.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(t,e,r){var n;t.exports=(n=r(161))&&n.default||n},160:function(t){t.exports={data:{site:{siteMetadata:{title:"Open Blog"}}}}},161:function(t,e,r){"use strict";r.r(e);r(34);var n=r(0),a=r.n(n),i=r(4),o=r.n(i),c=r(55),l=r(2),u=function(t){var e=t.location,r=l.default.getResourcesForPathnameSync(e.pathname);return r?a.a.createElement(c.a,Object.assign({location:e,pageResources:r},r.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},162:function(t,e,r){"use strict";var n=r(160),a=r(0),i=r.n(a),o=r(4),c=r.n(o),l=r(158),u=function(t){var e=t.siteTitle;return i.a.createElement("header",{style:{background:"#3f51b5",marginBottom:"1.45rem"}},i.a.createElement("nav",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-between",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},e)),i.a.createElement("h2",{style:{margin:0}},i.a.createElement(l.a,{style:{color:"white",textDecoration:"none"},to:"contributing"},"Contribute"))))};u.propTypes={siteTitle:c.a.string},u.defaultProps={siteTitle:""};var s=u,m=(r(146),function(t){var e=t.children;return i.a.createElement(l.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e)))},data:n})});m.propTypes={children:c.a.node.isRequired};e.a=m},167:function(t,e,r){"use strict";r.d(e,"a",function(){return l});r(168);var n=r(170),a=r(0),i=r.n(a),o=r(164),c=r.n(o),l=function(t){var e=t.article,r=n.data.site;return i.a.createElement(c.a,{htmlAttributes:{lang:e.frontmatter.lang||"en"},title:e.frontmatter.title,meta:[{name:"description",content:e.frontmatter.description},{property:"og:title",content:e.frontmatter.title},{property:"og:description",content:e.frontmatter.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.frontmatter.author},{name:"twitter:title",content:e.frontmatter.title},{name:"twitter:description",content:e.frontmatter.description},{property:"og:image",content:e.frontmatter.hero&&r.siteMetadata.siteUrl+e.frontmatter.hero.childImageSharp.fixed.src}]})}},168:function(t,e,r){"use strict";r(169)("fixed",function(t){return function(){return t(this,"tt","","")}})},169:function(t,e,r){var n=r(11),a=r(19),i=r(20),o=/"/g,c=function(t,e,r,n){var a=String(i(t)),c="<"+e;return""!==r&&(c+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),c+">"+a+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(c),n(n.P+n.F*a(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",r)}},170:function(t){t.exports={data:{site:{siteMetadata:{siteUrl:"https://open-blog.dev"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-amp-js-b1f02f9927e1dc7d1d5a.js.map