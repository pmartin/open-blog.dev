(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{157:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(163),i=a(164),l=a(167),c=(a(171),a(173)),m=a(166),s=a.n(m),u=function(e){var t=e.article,a=c.data.site;return n.a.createElement(s.a,{htmlAttributes:{lang:t.frontmatter.lang||"en"},title:t.frontmatter.title+" |  Open blog",meta:[{name:"description",content:t.frontmatter.description},{property:"og:title",content:t.frontmatter.title},{property:"og:description",content:t.frontmatter.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.frontmatter.author},{name:"twitter:title",content:t.frontmatter.title},{name:"twitter:description",content:t.frontmatter.description},{property:"og:image",content:t.frontmatter.hero&&a.siteMetadata.siteUrl+t.frontmatter.hero.childImageSharp.fixed.src}]},n.a.createElement("script",{type:"application/ld+json"},JSON.stringify({"@context":"https://schema.org","@type":"TechArticle",headline:t.frontmatter.title,image:t.frontmatter.hero&&a.siteMetadata.siteUrl+t.frontmatter.hero.childImageSharp.fixed.src,author:t.frontmatter.author,keywords:t.frontmatter.tags&&t.frontmatter.tags.join(", "),publisher:"Open Blog",url:t.frontmatter.pseudo&&"http://open-blog.dev/"+t.frontmatter.pseudo+"/"+t.fields.slug,wordcount:t.wordCount.word,datePublished:t.frontmatter.date,dateCreated:t.frontmatter.date,dateModified:t.frontmatter.date,description:t.frontmatter.description})))},d=(a(165),a(150),function(e){var t=e.comment,a=void 0===t?{}:t;return n.a.createElement("article",{className:"comment-item"},n.a.createElement("img",{src:a.author.avatarUrl,alt:a.author.name,className:"comment-item__profile"}),n.a.createElement("div",{className:"comment-item__description"},n.a.createElement("div",{className:"comment-item__content",dangerouslySetInnerHTML:{__html:a.bodyHTML}}),n.a.createElement("h3",{className:"comment-item__name"},"- ",a.author.name,n.a.createElement("a",{href:a.author.url},"(@",a.author.login,")"))))}),p=(a(151),function(e){var t=e.comments,a=void 0===t?[]:t,r=e.url;return n.a.createElement("section",{className:"comment-list"},n.a.createElement("h3",null,"Comments :"),a.length>0&&n.a.createElement("ul",{style:{margin:0,listStyle:"none"}},a.map(function(e){var t=e.node;return n.a.createElement("li",null,n.a.createElement(d,{key:t.id,comment:t}))})),n.a.createElement("a",{className:"comment-list__action",href:r},"Add your comment"))});a.d(t,"query",function(){return f});t.default=function(e){var t=e.data,a=t.currentArticle,r=t.author,c=t.lastArticles,m=t.comments,s=e.pageContext;return n.a.createElement(o.a,null,n.a.createElement(u,{article:a}),a.frontmatter.hero&&n.a.createElement("picture",null,n.a.createElement("source",{srcSet:a.frontmatter.hero.childImageSharp.fluid.srcSetWebp,sizes:"(max-width: 600px) 100vw, 600px",type:"image/webp"}),n.a.createElement("source",{srcSet:a.frontmatter.hero.childImageSharp.fluid.srcSet,sizes:"(max-width: 600px) 100vw, 600px",type:"image/png"}),n.a.createElement("img",{style:{width:"100vw",maxHeight:"50vh",objectFit:"cover"},src:a.frontmatter.hero.childImageSharp.fluid.src,alt:"hero"})),n.a.createElement("div",null,n.a.createElement("h1",null,a.frontmatter.title),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}})),n.a.createElement("hr",null),s.pseudo&&n.a.createElement(l.a,{author:r}),s.showComment&&n.a.createElement(p,{comments:m.repository.issue.comments.edges,url:m.repository.issue.url}),!!c.totalCount&&n.a.createElement("aside",null,n.a.createElement("h3",null,"Other articles from this author:"),n.a.createElement(i.a,{articleList:c.edges})))};var f="1952036631"},159:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var r=a(0),n=a.n(r),o=a(4),i=a.n(o),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(160);var m=n.a.createContext({}),s=function(e){return n.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},160:function(e,t,a){var r;e.exports=(r=a(162))&&r.default||r},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Open Blog"}}}}},162:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),o=a(4),i=a.n(o),l=a(55),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},163:function(e,t,a){"use strict";var r=a(161),n=a(0),o=a.n(n),i=a(4),l=a.n(i),c=a(159),m=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"#3f51b5",marginBottom:"1.45rem"}},o.a.createElement("nav",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-between",margin:"0 auto",maxWidth:960,padding:"1rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),o.a.createElement("h2",{style:{margin:0}},o.a.createElement(c.a,{style:{color:"white",textDecoration:"none"},to:"contributing"},"Contribute"))))};m.propTypes={siteTitle:l.a.string},m.defaultProps={siteTitle:""};var s=m,u=(a(146),function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,t)))},data:r})});u.propTypes={children:l.a.node.isRequired};t.a=u},164:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(159),i={fr:"🇫🇷",en:"🇬🇧"},l=(a(147),function(e){var t=e.node;return n.a.createElement(o.a,{to:t.fields.slug,style:{textDecoration:"none",color:"black"}},n.a.createElement("article",{className:"article-item"},n.a.createElement("header",null,n.a.createElement("h3",{className:"article-item__title",style:{margin:"0.5rem 0"}},i[t.frontmatter.lang]||i.en," ",t.frontmatter.title),n.a.createElement("span",null,t.frontmatter.tags.map(function(e,t){return n.a.createElement(o.a,{to:"tags/"+e,style:{margin:"0 0.2rem",textDecoration:"none",color:"#3f51b5"}},"#",e)})," by"," ",n.a.createElement(o.a,{to:"authors/"+t.frontmatter.pseudo},t.frontmatter.author)),n.a.createElement("p",null,t.excerpt)),t.frontmatter.hero&&n.a.createElement("picture",null,n.a.createElement("source",{srcSet:t.frontmatter.hero.childImageSharp.fluid.srcSetWebp,sizes:"30vw",type:"image/webp"}),n.a.createElement("source",{srcSet:t.frontmatter.hero.childImageSharp.fluid.srcSet,sizes:"30vw",type:"image/png"}),n.a.createElement("img",{className:"article-item__picture",src:t.frontmatter.hero.childImageSharp.fluid.src,alt:"hero"}))))});a.d(t,"a",function(){return c});var c=function(e){var t=e.articleList;return n.a.createElement("nav",null,n.a.createElement("ul",{style:{margin:0,listStyle:"none"}},t.map(function(e){var t=e.node;return n.a.createElement("li",null,n.a.createElement(l,{node:t}))})))}},165:function(e,t,a){var r=a(25).f,n=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in n||a(18)&&r(n,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},167:function(e,t,a){"use strict";a(165);var r=a(0),n=a.n(r);a(148);t.a=function(e){var t=e.author;return n.a.createElement("section",{className:"author"},n.a.createElement("img",{src:t.user.avatarUrl,alt:t.user.name,className:"author__profile"}),n.a.createElement("div",{className:"author__description"},n.a.createElement("h3",{className:"author__name"},t.user.name,n.a.createElement("a",{href:t.user.url},"(@",t.user.login,")")),n.a.createElement("div",{className:"author__bio",dangerouslySetInnerHTML:{__html:t.user.bioHTML}})))}},171:function(e,t,a){"use strict";a(172)("fixed",function(e){return function(){return e(this,"tt","","")}})},172:function(e,t,a){var r=a(11),n=a(19),o=a(20),i=/"/g,l=function(e,t,a,r){var n=String(o(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(i,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},173:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://open-blog.dev"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-90f59307398c4b4787ee.js.map