import{S as Ie,i as Ae,s as De,e as ce,b as L,B as x,h as f,k as d,l as _,m as v,n as u,D as h,N as Ve,q as F,r as y,C as B,u as ee,a as V,w as oe,J as Pe,c as P,x as fe,y as he,f as ue,t as de,z as _e,E as Le}from"../../chunks/index-8e1f88f9.js";import{p as we}from"../../chunks/stores-5e05607c.js";import{A as Fe}from"../../chunks/index-8ee2f215.js";function ve(n,a,e){const l=n.slice();return l[4]=a[e],l}function ge(n){let a,e,l=n[3],s=[];for(let t=0;t<l.length;t+=1)s[t]=pe(ve(n,l,t));return{c(){a=d("nav"),e=d("ul");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){a=_(t,"NAV",{});var i=v(a);e=_(i,"UL",{class:!0});var r=v(e);for(let o=0;o<s.length;o+=1)s[o].l(r);r.forEach(f),i.forEach(f),this.h()},h(){u(e,"class","pagination")},m(t,i){L(t,a,i),h(a,e);for(let r=0;r<s.length;r+=1)s[r].m(e,null)},p(t,i){if(i&14){l=t[3];let r;for(r=0;r<l.length;r+=1){const o=ve(t,l,r);s[r]?s[r].p(o,i):(s[r]=pe(o),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=l.length}},d(t){t&&f(a),Ve(s,t)}}}function pe(n){let a,e,l=n[4]+"",s,t;return{c(){a=d("li"),e=d("a"),s=F(l),this.h()},l(i){a=_(i,"LI",{class:!0});var r=v(a);e=_(r,"A",{class:!0,href:!0});var o=v(e);s=y(o,l),o.forEach(f),r.forEach(f),this.h()},h(){u(e,"class","page-link"),u(e,"href",t=n[2](n[4])),u(a,"class","page-item"),B(a,"active",n[4]==n[1])},m(i,r){L(i,a,r),h(a,e),h(e,s)},p(i,r){r&8&&l!==(l=i[4]+"")&&ee(s,l),r&12&&t!==(t=i[2](i[4]))&&u(e,"href",t),r&10&&B(a,"active",i[4]==i[1])},d(i){i&&f(a)}}}function ye(n){let a,e=n[0]>1&&ge(n);return{c(){e&&e.c(),a=ce()},l(l){e&&e.l(l),a=ce()},m(l,s){e&&e.m(l,s),L(l,a,s)},p(l,[s]){l[0]>1?e?e.p(l,s):(e=ge(l),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null)},i:x,o:x,d(l){e&&e.d(l),l&&f(a)}}}function Se(n,a,e){let{pages:l}=a,{p:s}=a,{href:t}=a,i;return n.$$set=r=>{"pages"in r&&e(0,l=r.pages),"p"in r&&e(1,s=r.p),"href"in r&&e(2,t=r.href)},n.$$.update=()=>{if(n.$$.dirty&9){e(3,i=[]);for(let r=1;r<=l;++r)i.push(r)}},[l,s,t,i]}class Ce extends Ie{constructor(a){super(),Ae(this,a,Se,ye,De,{pages:0,p:1,href:2})}}function me(n,a,e){const l=n.slice();return l[2]=a[e],l}function Ee(n){let a,e,l,s,t,i,r;return{c(){a=d("div"),e=d("div"),l=d("h1"),s=F("conduit"),t=V(),i=d("p"),r=F("A place to share your knowledge."),this.h()},l(o){a=_(o,"DIV",{class:!0});var p=v(a);e=_(p,"DIV",{class:!0});var g=v(e);l=_(g,"H1",{class:!0});var T=v(l);s=y(T,"conduit"),T.forEach(f),t=P(g),i=_(g,"P",{});var U=v(i);r=y(U,"A place to share your knowledge."),U.forEach(f),g.forEach(f),p.forEach(f),this.h()},h(){u(l,"class","logo-font"),u(e,"class","container"),u(a,"class","banner")},m(o,p){L(o,a,p),h(a,e),h(e,l),h(l,s),h(e,t),h(e,i),h(i,r)},d(o){o&&f(a)}}}function Ne(n){let a,e,l;return{c(){a=d("li"),e=d("a"),l=F("Sign in to see your Feed"),this.h()},l(s){a=_(s,"LI",{class:!0});var t=v(a);e=_(t,"A",{href:!0,class:!0});var i=v(e);l=y(i,"Sign in to see your Feed"),i.forEach(f),t.forEach(f),this.h()},h(){u(e,"href","/login"),u(e,"class","nav-link"),u(a,"class","nav-item")},m(s,t){L(s,a,t),h(a,e),h(e,l)},p:x,d(s){s&&f(a)}}}function qe(n){let a,e,l;return{c(){a=d("li"),e=d("a"),l=F("Your Feed"),this.h()},l(s){a=_(s,"LI",{class:!0});var t=v(a);e=_(t,"A",{href:!0,class:!0});var i=v(e);l=y(i,"Your Feed"),i.forEach(f),t.forEach(f),this.h()},h(){u(e,"href","/?tab=feed"),u(e,"class","nav-link"),B(e,"active",n[1]==="feed"),u(a,"class","nav-item")},m(s,t){L(s,a,t),h(a,e),h(e,l)},p(s,t){t&2&&B(e,"active",s[1]==="feed")},d(s){s&&f(a)}}}function be(n){let a,e,l,s,t,i;return{c(){a=d("li"),e=d("a"),l=d("i"),s=V(),t=F(n[2]),this.h()},l(r){a=_(r,"LI",{class:!0});var o=v(a);e=_(o,"A",{href:!0,class:!0});var p=v(e);l=_(p,"I",{class:!0}),v(l).forEach(f),s=P(p),t=y(p,n[2]),p.forEach(f),o.forEach(f),this.h()},h(){u(l,"class","ion-pound"),u(e,"href",i="/?tag="+n[2]),u(e,"class","nav-link active"),u(a,"class","nav-item")},m(r,o){L(r,a,o),h(a,e),h(e,l),h(e,s),h(e,t)},p(r,o){o&4&&ee(t,r[2]),o&4&&i!==(i="/?tag="+r[2])&&u(e,"href",i)},d(r){r&&f(a)}}}function ke(n){let a,e=n[2]+"",l,s;return{c(){a=d("a"),l=F(e),this.h()},l(t){a=_(t,"A",{href:!0,class:!0});var i=v(a);l=y(i,e),i.forEach(f),this.h()},h(){u(a,"href",s="/?tag="+n[2]),u(a,"class","tag-default tag-pill")},m(t,i){L(t,a,i),h(a,l)},p(t,i){i&1&&e!==(e=t[2]+"")&&ee(l,e),i&1&&s!==(s="/?tag="+t[2])&&u(a,"href",s)},d(t){t&&f(a)}}}function Ge(n){let a,e,l,s,t,i,r,o,p,g,T,U,K,Q,S,R,C,W,Y,N,H,X,Z,q,J,k=!n[0].user&&Ee();function ae(c,I){return c[0].user?qe:Ne}let M=ae(n),A=M(n),E=n[2]&&be(n);S=new Fe({props:{articles:n[0].articles}}),C=new Ce({props:{pages:n[0].pages,p:n[4],href:n[6]}});let j=n[0].tags,b=[];for(let c=0;c<j.length;c+=1)b[c]=ke(me(n,j,c));return{c(){a=V(),e=d("div"),k&&k.c(),l=V(),s=d("div"),t=d("div"),i=d("div"),r=d("div"),o=d("ul"),p=d("li"),g=d("a"),T=F("Global Feed"),U=V(),A.c(),K=V(),E&&E.c(),Q=V(),oe(S.$$.fragment),R=V(),oe(C.$$.fragment),W=V(),Y=d("div"),N=d("div"),H=d("p"),X=F("Popular Tags"),Z=V(),q=d("div");for(let c=0;c<b.length;c+=1)b[c].c();this.h()},l(c){Pe("svelte-125rjtu",document.head).forEach(f),a=P(c),e=_(c,"DIV",{class:!0});var D=v(e);k&&k.l(D),l=P(D),s=_(D,"DIV",{class:!0});var G=v(s);t=_(G,"DIV",{class:!0});var m=v(t);i=_(m,"DIV",{class:!0});var w=v(i);r=_(w,"DIV",{class:!0});var te=v(r);o=_(te,"UL",{class:!0});var z=v(o);p=_(z,"LI",{class:!0});var le=v(p);g=_(le,"A",{href:!0,class:!0});var se=v(g);T=y(se,"Global Feed"),se.forEach(f),le.forEach(f),U=P(z),A.l(z),K=P(z),E&&E.l(z),z.forEach(f),te.forEach(f),Q=P(w),fe(S.$$.fragment,w),R=P(w),fe(C.$$.fragment,w),w.forEach(f),W=P(m),Y=_(m,"DIV",{class:!0});var re=v(Y);N=_(re,"DIV",{class:!0});var O=v(N);H=_(O,"P",{});var ie=v(H);X=y(ie,"Popular Tags"),ie.forEach(f),Z=P(O),q=_(O,"DIV",{class:!0});var ne=v(q);for(let $=0;$<b.length;$+=1)b[$].l(ne);ne.forEach(f),O.forEach(f),re.forEach(f),m.forEach(f),G.forEach(f),D.forEach(f),this.h()},h(){document.title="Conduit",u(g,"href","/?tab=all"),u(g,"class","nav-link"),B(g,"active",n[1]==="all"&&!n[2]),u(p,"class","nav-item"),u(o,"class","nav nav-pills outline-active"),u(r,"class","feed-toggle"),u(i,"class","col-md-9"),u(q,"class","tag-list"),u(N,"class","sidebar"),u(Y,"class","col-md-3"),u(t,"class","row"),u(s,"class","container page"),u(e,"class","home-page")},m(c,I){L(c,a,I),L(c,e,I),k&&k.m(e,null),h(e,l),h(e,s),h(s,t),h(t,i),h(i,r),h(r,o),h(o,p),h(p,g),h(g,T),h(o,U),A.m(o,null),h(o,K),E&&E.m(o,null),h(i,Q),he(S,i,null),h(i,R),he(C,i,null),h(t,W),h(t,Y),h(Y,N),h(N,H),h(H,X),h(N,Z),h(N,q);for(let D=0;D<b.length;D+=1)b[D].m(q,null);J=!0},p(c,[I]){c[0].user?k&&(k.d(1),k=null):k||(k=Ee(),k.c(),k.m(e,l)),(!J||I&6)&&B(g,"active",c[1]==="all"&&!c[2]),M===(M=ae(c))&&A?A.p(c,I):(A.d(1),A=M(c),A&&(A.c(),A.m(o,K))),c[2]?E?E.p(c,I):(E=be(c),E.c(),E.m(o,null)):E&&(E.d(1),E=null);const D={};I&1&&(D.articles=c[0].articles),S.$set(D);const G={};if(I&1&&(G.pages=c[0].pages),I&16&&(G.p=c[4]),I&8&&(G.href=c[6]),C.$set(G),I&1){j=c[0].tags;let m;for(m=0;m<j.length;m+=1){const w=me(c,j,m);b[m]?b[m].p(w,I):(b[m]=ke(w),b[m].c(),b[m].m(q,null))}for(;m<b.length;m+=1)b[m].d(1);b.length=j.length}},i(c){J||(ue(S.$$.fragment,c),ue(C.$$.fragment,c),J=!0)},o(c){de(S.$$.fragment,c),de(C.$$.fragment,c),J=!1},d(c){c&&f(a),c&&f(e),k&&k.d(),A.d(),E&&E.d(),_e(S),_e(C),Ve(b,c)}}}function Te(n,a,e){let l,s,t,i,r;Le(n,we,g=>e(5,r=g));let{data:o}=a;const p=g=>`/?${i}&page=${g}`;return n.$$set=g=>{"data"in g&&e(0,o=g.data)},n.$$.update=()=>{n.$$.dirty&32&&e(4,l=+(r.url.searchParams.get("page")??"1")),n.$$.dirty&32&&e(2,s=r.url.searchParams.get("tag")),n.$$.dirty&32&&e(1,t=r.url.searchParams.get("tab")??"all"),n.$$.dirty&6&&e(3,i=s?`tag=${s}`:`tab=${t}`)},[o,t,s,i,l,r,p]}class ze extends Ie{constructor(a){super(),Ae(this,a,Te,Ge,De,{data:0})}}export{ze as default};
