"use strict";(self.webpackChunkpurrfect_match_frontend=self.webpackChunkpurrfect_match_frontend||[]).push([[828],{6877:function(n,e,t){t.d(e,{Z:function(){return m}});var i,r,o,a=t(2791),d=t(4164),s=t(9839),c=t(168),l=t(6444),p=l.ZP.div(i||(i=(0,c.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(87, 86, 86, 0.6);\n  z-index: 1001;\n"]))),u=l.ZP.div(r||(r=(0,c.Z)(["\n  border-radius: 20px;\n  background-color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),x=l.ZP.button(o||(o=(0,c.Z)(["\n  background: transparent;\n  border: none;\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  cursor: pointer;\n"]))),f=t(184),h=document.querySelector("#modal-root"),m=function(n){var e=n.close,t=n.children,i=(n.approve,(0,a.useCallback)((function(n){var t=n.target,i=n.currentTarget,r=n.code;t!==i&&"Escape"!==r||e()}),[e]));return(0,a.useEffect)((function(){return document.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}),[i]),(0,d.createPortal)((0,f.jsx)(p,{onClick:i,children:(0,f.jsxs)(u,{children:[(0,f.jsx)(x,{onClick:e,children:(0,f.jsx)(s.Z,{id:"cross",s:"#54ADFF"})}),t]})}),h)}},9828:function(n,e,t){t.r(e),t.d(e,{User:function(){return qn},default:function(){return Hn}});var i,r,o,a,d,s,c,l,p,u,x,f,h,m,g,Z,b,w,y,v,j,k,P,C,F,E,M,z,S=t(9439),O=t(2791),A=t(7689),D=t(5861),L=t(4687),I=t.n(L),Y=t(1405),_=t(9787),G=t(14),T=t(6877),U=t(3293),B=t(4302),W=t(168),q=t(6444),H=q.ZP.div(i||(i=(0,W.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 60px 16px;\n  min-width: 280px;\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    padding: 108px 16px;\n  }\n"]))),R=q.ZP.h2(r||(r=(0,W.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 33px;\n  margin-bottom: 40px;\n  @media screen and (min-width: 768px) {\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 49px;\n    letter-spacing: 0.04em;\n\n    margin-bottom: 48px;\n  }\n"]))),J=q.ZP.div(o||(o=(0,W.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n  }\n"]))),K=t(9839),N=t(5822),Q=t(184),V=function(n){var e=n.close,t=n.idUser,i=(0,Y.I0)(),r=function(n){i((0,N.kS)(n))},o="mobile"===(0,U.G)(["(min-width: 1280px)","(min-width: 768px)","(min-width: 480px)"],["desktop","tablet","mobile"],"xs");return(0,Q.jsxs)(H,{children:[(0,Q.jsx)(R,{as:"h2",children:"Already leaving?"}),o?(0,Q.jsx)(Q.Fragment,{children:(0,Q.jsxs)(J,{children:[(0,Q.jsx)(B.Z,{type:"button",onClick:e,w:"256",h:"40",style:{marginBottom:"8px"},children:"Cancel"}),(0,Q.jsxs)(B.Z,{type:"button",onClick:function(){return r(t)},w:"256",h:"40",shape:"solid",g:"8",children:["Yes",(0,Q.jsx)(K.Z,{id:"logout",s:"#FEF9F9"})]})]})}):(0,Q.jsx)(Q.Fragment,{children:(0,Q.jsxs)(J,{children:[(0,Q.jsx)(B.Z,{type:"button",onClick:e,w:"129",h:"40",style:{marginRight:"17px"},children:"Cancel"}),(0,Q.jsxs)(B.Z,{type:"button",onClick:function(){return r(t)},w:"129",h:"40",shape:"solid",g:"8",children:["Yes",(0,Q.jsx)(K.Z,{id:"logout",s:"#FEF9F9"})]})]})})]})},X={name:"",email:"",birthday:"",phone:"",city:""},$=function(){var n=(0,O.useState)(X),e=(0,S.Z)(n,2),t=e[0],i=e[1],r=(0,O.useState)(!1),o=(0,S.Z)(r,2),a=o[0],d=o[1],s=(0,Y.v9)((function(n){return n.auth.token}));(0,O.useEffect)((function(){var n=function(){var n=(0,D.Z)(I().mark((function n(e){var t;return I().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,G.TE)(e);case 2:t=n.sent,i(t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();n(s)}),[s]);return(0,Q.jsx)(Q.Fragment,{children:(0,Q.jsxs)(yn,{children:[(0,Q.jsx)(jn,{children:"My information:"}),(0,Q.jsxs)(wn,{children:[(0,Q.jsxs)(Cn,{children:[(0,Q.jsx)(Pn,{}),(0,Q.jsxs)(Fn,{children:[(0,Q.jsx)(_.Z,{id:"camera",s:"#54ADFF"}),(0,Q.jsx)(Mn,{children:"Edit photo"})]})]}),(0,Q.jsxs)(Sn,{children:[(0,Q.jsx)(Ln,{name:"name",type:"text",value:t.name||"User"}),(0,Q.jsx)(Ln,{name:"email",type:"text",value:t.email}),(0,Q.jsx)(Ln,{name:"birthday",type:"text",value:t.birthday||""}),(0,Q.jsx)(Ln,{name:"phone",type:"text",value:t.phone}),(0,Q.jsx)(Ln,{name:"city",type:"text",value:t.city||""}),(0,Q.jsxs)(En,{onClick:function(){d(!0)},children:[(0,Q.jsx)(_.Z,{id:"logout",s:"#54ADFF"}),(0,Q.jsx)(zn,{children:"Log Out"})]})]}),a&&(0,Q.jsx)(T.Z,{close:function(){return d(!1)},children:(0,Q.jsx)(V,{close:function(){return d(!1)}})})]})]})})},nn=t(5593),en=function(){var n=(0,O.useState)([]),e=(0,S.Z)(n,2),t=e[0],i=e[1],r=(0,Y.I0)();(0,O.useEffect)((function(){i(r((0,nn.mj)()))}),[r]);return(0,Q.jsx)(Q.Fragment,{children:(0,Q.jsxs)(vn,{children:[(0,Q.jsxs)(kn,{children:[(0,Q.jsx)(jn,{children:"My pets:"}),(0,Q.jsxs)(B.Z,{onClick:function(){console.log("add new pet")},type:"button",shape:"solid",g:"8",children:[(0,Q.jsx)("p",{children:"Add pet"}),(0,Q.jsx)(_.Z,{id:"plus-small",s:"#FEF9F9"})]})]}),t.length?t.map((function(n){return function(n){_.Z,n.name,n.birthday,n.breed,n.comments}(n)})):(0,Q.jsx)("p",{children:"You have no own added pets yet("})]})})},tn=t(4942),rn=function(n){var e=n.name,t=n.type,i=n.pattern,r=n.value,o=(0,O.useState)(r),a=(0,S.Z)(o,2),d=a[0],s=a[1],c=(0,O.useState)(!0),l=(0,S.Z)(c,2),p=l[0],u=l[1],x=(0,Y.v9)((function(n){return n.auth.token}));(0,O.useEffect)((function(){s(r)}),[r]);var f=function(){var n=(0,D.Z)(I().mark((function n(){var t;return I().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=(0,tn.Z)({},e,d),n.next=3,(0,G.gS)(x,t);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,Q.jsxs)(Dn,{children:[(0,Q.jsxs)("label",{children:[e,":"]}),(0,Q.jsx)(On,{type:t,value:d,onChange:function(n){return s(n.target.value)},pattern:i,name:e,disabled:p,autoFocus:!p}),p?(0,Q.jsx)(An,{onClick:function(){u(!1)},children:(0,Q.jsx)(_.Z,{id:"edit",s:"#54ADFF"})}):(0,Q.jsx)(An,{onClick:f,children:(0,Q.jsx)(_.Z,{id:"check",s:"#00C3AD"})})]})},on=q.ZP.div(a||(a=(0,W.Z)(["\n  width: 100%;\n  height: auto;\n  margin-left: auto;\n  background: #ffffff;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n  margin-top: 18px;\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row-reverse;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 395px;\n    flex-direction: column;\n  }\n"]))),an=q.ZP.div(d||(d=(0,W.Z)(["\n  @media screen and (min-width: 1280px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]))),dn=q.ZP.p(s||(s=(0,W.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 27px;\n  letter-spacing: 0.04em;\n  color: #000000;\n"]))),sn=q.ZP.div(c||(c=(0,W.Z)(["\n  width: 182px;\n  height: 182px;\n  background: #54adff;\n  border-radius: 40px;\n  margin-top: 20px;\n"]))),cn=q.ZP.div(l||(l=(0,W.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    margin-left: 71px;\n    margin-right: 76px;\n    margin-bottom: 28px;\n  }\n"]))),ln=q.ZP.button(p||(p=(0,W.Z)(["\n  display: flex;\n  gap: 8px;\n  border: none;\n  background-color: transparent;\n  margin-top: 15px;\n  align-items: center;\n"]))),pn=q.ZP.button(u||(u=(0,W.Z)(["\n  display: flex;\n  align-self: flex-start;\n  gap: 12px;\n  border: none;\n  background-color: transparent;\n  margin-top: 21px;\n  margin-bottom: 25px;\n  cursor: pointer;\n\n  @media screen and (min-width: 768px) {\n    position: absolute;\n    left: 0px;\n    bottom: -60px;\n  }\n"]))),un=q.ZP.p(x||(x=(0,W.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 22px;\n"]))),xn=q.ZP.p(f||(f=(0,W.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.04em;\n  color: #888888;\n"]))),fn=q.ZP.div(h||(h=(0,W.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 21px;\n  padding: 0 8px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    position: relative;\n    gap: 8px;\n    margin-bottom: 56px;\n  }\n"]))),hn=q.ZP.div(m||(m=(0,W.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),mn=q.ZP.input(g||(g=(0,W.Z)(["\n  width: 190px;\n  border: 1px solid ",";\n  border-radius: 20px;\n  padding: 4px 12px;\n"])),(function(n){return n.theme.colors.link})),gn=q.ZP.button(Z||(Z=(0,W.Z)(["\n  position: absolute;\n  right: 28px;\n  background-color: transparent;\n  border: none;\n\n  @media screen and (min-width: 768px) {\n    right: 10px;\n  }\n"]))),Zn=(q.ZP.div(b||(b=(0,W.Z)(["\n  width: 100%;\n  height: auto;\n  margin-left: auto;\n  background: #ffffff;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 18px;\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-left: 32px;\n  }\n"]))),q.ZP.div(w||(w=(0,W.Z)(["\n  @media screen and (min-width: 1280px) {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n  }\n"])))),bn=(q.ZP.div(y||(y=(0,W.Z)(["\n  align-self: center;\n  width: 240px;\n  height: 240px;\n  background: #54adff;\n  border-radius: 20px;\n  margin: 20px 0;\n\n  @media screen and (min-width: 768px) {\n    width: 128px;\n    height: 128px;\n    margin-right: 20px;\n    margin-bottom: 108px;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 31px;\n  }\n"]))),q.ZP.div(v||(v=(0,W.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 46px;\n  margin-bottom: 31px;\n\n  @media screen and (min-width: 1280px) {\n    margin: 0;\n  }\n"])))),wn=(q.ZP.div(j||(j=(0,W.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n  align-items: flex-start;\n  margin-bottom: 40px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 20px;\n    margin-right: 20px;\n    flex-grow: 1;\n    width: auto;\n  }\n"]))),q.ZP.p(k||(k=(0,W.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.57;\n  letter-spacing: 0.04em;\n"]))),q.ZP.span(P||(P=(0,W.Z)(["\n  font-weight: 700;\n"]))),q.ZP.button(C||(C=(0,W.Z)(["\n  padding: 0;\n  position: absolute;\n  right: 0px;\n  border: none;\n  background-color: transparent;\n"]))),on),yn=an,vn=Zn,jn=dn,kn=bn,Pn=sn,Cn=cn,Fn=ln,En=pn,Mn=un,zn=xn,Sn=fn,On=mn,An=gn,Dn=hn,Ln=rn,In=en,Yn=$,_n=t(9434),Gn=q.ZP.div(F||(F=(0,W.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 68px 16px 60px 16px;\n  @media screen and (min-width: 768px) {\n    padding: 60px 16px;\n    width: 608px;\n  }\n"]))),Tn=q.ZP.h2(E||(E=(0,W.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 33px;\n  margin-bottom: 24px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 52px;\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 49px;\n    letter-spacing: 0.04em;\n  }\n"]))),Un=q.ZP.p(M||(M=(0,W.Z)(["\n  font-family: 'Manrope';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.04em;\n  margin-bottom: 40px;\n  \n  @media screen and (min-width: 768px) {\n    margin-bottom: 60px;\n    font-family: 'Manrope';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 33px;\n    letter-spacing: 0.04em;\n  }\n"]))),Bn=function(n){var e=n.close;return(0,Q.jsxs)(Gn,{children:[(0,Q.jsx)(Tn,{children:"Congrats!"}),(0,Q.jsx)(Un,{children:"You're registration is success"}),(0,Q.jsxs)(B.Z,{onClick:e,w:"256",h:"40",shape:"solid",g:"8",children:["Go to profile",(0,Q.jsx)(K.Z,{id:"paw",f:"white"})]})]})},Wn=function(){var n=(0,A.TH)();console.log(n);var e=(0,O.useState)(!1),t=(0,S.Z)(e,2),i=t[0],r=t[1];return(0,O.useEffect)((function(){var e=n.state;if(e){console.log(e);var t=n.state.isModalOpen;r(t)}}),[n.state]),(0,Q.jsxs)(_n.Z,{children:[(0,Q.jsxs)(qn,{children:[(0,Q.jsx)(Yn,{}),(0,Q.jsx)(In,{})]}),i&&(0,Q.jsx)(T.Z,{close:function(){return r(!1)},children:(0,Q.jsx)(Bn,{close:function(){return r(!1)}})})]})},qn=q.ZP.div(z||(z=(0,W.Z)(["\n  margin-top: 40px;\n  margin-bottom: 137px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 121px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    display: flex;\n  }\n"]))),Hn=Wn},7377:function(n,e,t){t.d(e,{Z:function(){return p}});var i,r=t(1413),o=t(4925),a=t(168),d=t(6444).ZP.button(i||(i=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: ","px;\n\n  width: ",";\n  height: ","px;\n  padding: 10px;\n\n  font-family: 'Manrope';\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.38;\n  color: ",";\n\n  background: ",";\n  border-radius: ",";\n  border: 1px solid;\n\n  outline: none;\n\n  transition-property: color, background;\n  transition-duration: 250ms;\n  transition-timing-function: ease;\n\n  :not([disabled]):hover,\n  :not([disabled]):focus-visible {\n    cursor: pointer;\n    color: ",";\n    background: ",";\n  }\n\n  :active,\n  :disabled {\n    filter: opacity(0.6);\n  }\n"])),(function(n){return n.g||12}),(function(n){var e=n.w;if(!e)return"none";return e&&e.endsWith("%")?"".concat(e):"".concat(e,"px")}),(function(n){return n.h||40}),(function(n){return n.theme.fontWeiths.semiBold}),(function(n){return n.theme.fontSizes.s}),(function(n){var e=n.shape,t=n.theme;switch(e){case"solid":return"".concat(t.colors.background);case"yellow":return"".concat(t.colors.yellow);default:return"".concat(t.colors.link)}}),(function(n){var e=n.shape,t=n.theme;if("solid"===e)return"linear-gradient(".concat(t.colors.link,", ").concat(t.colors.link,")");return"inherit"}),(function(n){return n.theme.radius.normal}),(function(n){return n.theme.colors.background}),(function(n){var e=n.shape,t=n.theme;switch(e){case"solid":default:return"".concat(t.colors.gradient);case"yellow":return"#FFC107"}}));var s=t(184),c=["children","onClick","type"],l=function(n){var e=n.children,t=n.onClick,i=n.type,a=void 0===i?"submit":i,l=(0,o.Z)(n,c);return(0,s.jsx)(d,(0,r.Z)((0,r.Z)({onClick:t,type:a},l),{},{children:e}))};l.defaultProps={onClick:function(){return null},children:null};var p=l},4302:function(n,e,t){var i=t(7377);e.Z=i.Z},9434:function(n,e,t){t.d(e,{Z:function(){return d}});t(2791);var i,r=t(168),o=t(6444).ZP.div(i||(i=(0,r.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 20px;\n\n  @media "," {\n    max-width: 480px;\n  }\n\n  @media "," {\n    max-width: 768px;\n    padding: 0 32px;\n  }\n\n  @media "," {\n    max-width: 1280px;\n    padding: 0 16px;\n  }\n"])),(function(n){return n.theme.media.phone}),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk})),a=t(184),d=function(n){var e=n.children;return(0,a.jsx)(o,{children:e})}},9839:function(n,e,t){var i=t(9787);e.Z=i.Z},3293:function(n,e,t){t.d(e,{G:function(){return o}});var i=t(9439),r=t(2791),o=function(n,e,t){var o=(0,r.useState)(t),a=(0,i.Z)(o,2),d=a[0],s=a[1];return(0,r.useEffect)((function(){var i=n.map((function(n){return window.matchMedia(n)})),r=function(){var n=i.findIndex((function(n){return n.matches}));s(-1===n?t:e[n])};r();var o=function(){return r()};return i.forEach((function(n){return n.addListener(o)})),function(){return i.forEach((function(n){return n.removeListener(o)}))}}),[t,n,e]),d}},4925:function(n,e,t){function i(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}t.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=828.7b29449b.chunk.js.map