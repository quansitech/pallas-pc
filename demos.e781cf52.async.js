(self.webpackChunk_quansitech_pallas_pc=self.webpackChunk_quansitech_pallas_pc||[]).push([[433],{43752:function(te,B,n){"use strict";n.r(B);var A=n(9122),d=n(24679),R=n(67294),t=n(85893),S={round:function(M,D){var N=Math.pow(10,D);return Math.round(M*N)/N}};B.default=function(){var v=[{title:"\u5F00\u652F\u9879",dataIndex:"budget_name"},{title:"\u5355\u4EF7",component:"InputNumber",dataIndex:"budget_unit_price"},{title:"\u6570\u91CF",component:"TextArea",customComponentPropsFn:function(_){return{maxLength:10,minLength:5}},dataIndex:"budget_quantity"},{title:"\u8FD9\u9879\u4E0D\u53EF\u4FEE\u6539",component:"Input",dataIndex:"no_update",editable:!1},{title:"\u5C0F\u8BA1",dataIndex:"budget_subtotal",calc:function(_){var U,g;return S.round(parseFloat((U=_==null?void 0:_.budget_unit_price)!==null&&U!==void 0?U:0)*parseFloat((g=_==null?void 0:_.budget_quantity)!==null&&g!==void 0?g:0),2)}},{title:"\u5907\u6CE8",dataIndex:"budget_remark"}],M=[{key:1,budget_name:"\u529E\u516C\u7528\u54C1",budget_unit_price:2,budget_quantity:3,no_update:"\u4E0D\u53EF\u4FEE\u6539\u7684\u503C"},{key:2,budget_name:"\u7ECF\u8D39",budget_unit_price:3,budget_quantity:4,no_update:"\u4E0D\u53EF\u4FEE\u6539\u7684\u503C"}],D=function(_){var U=0;return _.forEach(function(g){var Q,f;U+=S.round(((Q=g==null?void 0:g.budget_quantity)!==null&&Q!==void 0?Q:0)*((f=g==null?void 0:g.budget_unit_price)!==null&&f!==void 0?f:0),2)}),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(d.Z.Summary.Row,{children:[(0,t.jsx)(d.Z.Summary.Cell,{index:0,colSpan:4,children:"\u5408\u8BA1"}),(0,t.jsx)(d.Z.Summary.Cell,{index:1,children:(0,t.jsx)("span",{children:U})})]})})};return(0,t.jsx)(A.l0,{name:"editableEditable",initialValues:{data:M},children:(0,t.jsx)(A.l0.Item,{name:"data",children:(0,t.jsx)(A.r8,{columns:v,summary:D,canUpdateNum:"delete_only",onChange:function(_){console.log(_)}})})})}},64699:function(te,B,n){"use strict";n.r(B);var A=n(15009),d=n.n(A),R=n(99289),t=n.n(R),S=n(5574),v=n.n(S),M=n(9122),D=n(50719),N=n(88385),_=n(97019),U=n(78957),g=n(15867),Q=n(67294),f=n(85893);B.default=function(){var de=(0,Q.useState)(!1),le=v()(de,2),ie=le[0],W=le[1],ce=M.l0.useForm(),me=v()(ce,1),oe=me[0],fe=function(){var Y=t()(d()().mark(function $(a){return d()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return W(!0),V.next=3,fetch("/api/submit",{method:"POST",body:JSON.stringify(a)});case 3:W(!1);case 4:case"end":return V.stop()}},$)}));return function(a){return Y.apply(this,arguments)}}(),he=function(){var Y=t()(d()().mark(function $(a){var q,V;return d()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,fetch("/api/Staging?name=".concat(a));case 2:return q=G.sent,G.next=5,q.json();case 5:return V=G.sent,G.abrupt("return",V);case 7:case"end":return G.stop()}},$)}));return function(a){return Y.apply(this,arguments)}}(),re=function(){var Y=t()(d()().mark(function $(a){var q;return d()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,fetch("/api/Staging",{method:"POST",body:JSON.stringify(a)});case 2:return q=k.sent,k.next=5,q.json();case 5:return k.abrupt("return",k.sent);case 6:case"end":return k.stop()}},$)}));return function(a){return Y.apply(this,arguments)}}();return(0,f.jsx)("div",{children:(0,f.jsxs)(M.l0,{name:"assitanceListForm",form:oe,labelWrap:!0,labelCol:{span:8},onFinish:fe,submitting:ie,children:[(0,f.jsx)(M.l0.Item,{hidden:!0,name:"assistance_list_id",children:(0,f.jsx)(D.Z,{})}),(0,f.jsx)(M.l0.Item,{name:"amount",label:"\u6551\u52A9\u91D1\u989D",rules:[{required:!0}],hasFeedback:!0,children:(0,f.jsx)(N.Z,{addonAfter:"\u5143/\u5E74",min:0,precision:2,controls:!1})}),(0,f.jsx)(M.l0.Item,{name:"start_date",label:"\u5F00\u59CB\u65F6\u95F4",children:(0,f.jsx)(_.Z,{})}),(0,f.jsx)(M.l0.Item,{name:"file",label:"\u6587\u4EF6",children:(0,f.jsx)(M.gq,{action:"/api/upload"})}),(0,f.jsx)(M.l0.Buttons,{draft:!0,form:oe,initFn:he,saveFn:re,children:(0,f.jsxs)(U.Z,{children:[(0,f.jsx)(g.ZP,{type:"primary",htmlType:"submit",loading:ie,children:"\u786E\u5B9A"}),(0,f.jsx)(g.ZP,{onClick:function(){},children:"\u53D6\u6D88"})]})})]})})}},35352:function(te,B,n){"use strict";n.r(B);var A=n(9122),d=n(67294),R=n(85893);B.default=function(){var t=function(v){};return(0,R.jsx)("div",{children:(0,R.jsx)(A.gq,{action:"/api/upload?cate=image",tips:"\u4E0A\u4F20\u7EC4\u4EF6",accept:"*",maxCount:1,onChange:t,ifDrag:!0})})}},33198:function(te,B,n){"use strict";n.r(B);var A=n(15009),d=n.n(A),R=n(99289),t=n.n(R),S=n(9122),v=n(67294),M=n(15867),D=n(85893);B.default=function(){var N=function(U){};return(0,D.jsxs)(S.l0,{name:"upload-form",onFinish:function(){var _=t()(d()().mark(function U(g){return d()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:console.log("value",g);case 1:case"end":return f.stop()}},U)}));return function(U){return _.apply(this,arguments)}}(),children:[(0,D.jsx)(S.l0.Item,{name:"upload",label:"\u4E0A\u4F20",rules:[{required:!0}],children:(0,D.jsx)(S.gq,{action:"/api/upload?cate=image",tips:"\u4E0A\u4F20\u7EC4\u4EF6",accept:"*",multiple:!0,onChange:N})}),(0,D.jsx)(M.ZP,{htmlType:"submit",children:"\u63D0\u4EA4"})]})}},9122:function(te,B,n){"use strict";n.d(B,{zx:function(){return ve},r8:function(){return Ge},l0:function(){return ne},gq:function(){return Ie}});var A=n(5574),d=n.n(A),R=n(97857),t=n.n(R),S=n(15009),v=n.n(S),M=n(99289),D=n.n(M),N=n(13769),_=n.n(N),U=n(28459),g=n(87174),Q=n(10154),f=n(15867),de=n(27911),le=n(27484),ie=n.n(le),W=n(67294),ce=n(12444),me=n.n(ce),oe=n(72004),fe=n.n(oe),he=n(9783),re=n.n(he),Y=function(){function c(e,i,r,s){me()(this,c),re()(this,"id",void 0),re()(this,"uid",void 0),re()(this,"url",void 0),re()(this,"name",void 0),this.id=e,this.uid=i,this.url=r,this.name=s}return fe()(c,[{key:"toObject",value:function(){return{id:this.id,uid:this.uid,url:this.url,name:this.name}}},{key:"serialize",value:function(){return{type:"UploadFile",value:this.toObject()}}}],[{key:"isUploadFile",value:function(i){return i instanceof c}}]),c}(),$=Y,a=n(85893),q=["children","submitting","onFinish","readonly"],V=["children","form","draft","initFn","saveFn"],k=function(e){var i=Object.keys(e);return i=i.filter(function(r){var s=e[r];return!!s}),i.length===0},G=function(e){return{type:"dayjs",value:e}},je=function(e){return ie()(e.value)},_e=function(e){return ie().isDayjs(e)?G(e):$.isUploadFile(e)?e.serialize():e},pe=function(e){return(e==null?void 0:e.type)==="dayjs"?je(e):(e==null?void 0:e.type)==="UploadFile"?new $(e.value.id,e.value.uid,e.value.url,e.value.name):e},ne=function(e){var i=e.children,r=e.submitting,s=e.onFinish,m=e.readonly,C=_()(e,q);if(!C.name)throw new Error("Form\u7EC4\u4EF6\u5FC5\u987B\u6307\u5B9Aname\u5C5E\u6027");var b=function(){var F=D()(v()().mark(function P(h){return v()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:if(!r){j.next=2;break}return j.abrupt("return");case 2:if(!s){j.next=5;break}return j.next=5,s(h);case 5:case"end":return j.stop()}},P)}));return function(h){return F.apply(this,arguments)}}();return(0,a.jsx)(U.ZP,{theme:{token:{colorTextDisabled:m?"#000":"rgba(0, 0, 0, 0.25)"}},children:(0,a.jsx)(g.Z,t()(t()({onFinish:b},C),{},{disabled:m,children:i}))})};ne.List=g.Z.List,ne.ErrorList=g.Z.ErrorList,ne.Item=g.Z.Item,ne.useForm=g.Z.useForm,ne.useWatch=g.Z.useWatch;var ye=function(e){var i=e.children,r=e.form,s=e.draft,m=e.initFn,C=e.saveFn,b=_()(e,V),F=(0,W.useState)(!1),P=d()(F,2),h=P[0],L=P[1],j=(0,W.useState)({}),l=d()(j,2),Z=l[0],y=l[1],w=Q.ZP.useMessage(),O=d()(w,2),T=O[0],X=O[1];(0,W.useEffect)(function(){var x=function(){var I=D()(v()().mark(function K(){var u,o,z,H,p,E;return v()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:if(typeof m!="function"){ae.next=5;break}return ae.next=3,m(r.__INTERNAL__.name);case 3:if(u=ae.sent,u.status&&u.data){for(o=0,z=Object.entries(u.data);o<z.length;o++)H=d()(z[o],2),p=H[0],E=H[1],Array.isArray(E)?u.data[p]=E.map(function(J){return pe(J)}):u.data[p]=pe(E);y(u.data),L(!0)}case 5:case"end":return ae.stop()}},K)}));return function(){return I.apply(this,arguments)}}();s&&x()},[]);var ee=function(){var x=D()(v()().mark(function I(){var K,u,o,z,H,p,E,se;return v()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:if(!k(r.getFieldsValue())){J.next=3;break}return T.error("\u8868\u5355\u4E3A\u7A7A\uFF0C\u6CA1\u6709\u5185\u5BB9\u53EF\u4EE5\u6682\u5B58"),J.abrupt("return");case 3:for(K=r.__INTERNAL__.name,u=r.getFieldsValue(),o=0,z=Object.entries(u);o<z.length;o++)H=d()(z[o],2),p=H[0],E=H[1],Array.isArray(E)?u[p]=E.map(function(Je){return _e(Je)}):u[p]=_e(E);if(typeof C!="function"){J.next=11;break}return J.next=9,C({form_name:K,form_data:u});case 9:se=J.sent,se.status?T.success("\u6682\u5B58\u6210\u529F"):T.error(se.info);case 11:case"end":return J.stop()}},I)}));return function(){return x.apply(this,arguments)}}(),ue=function(){r.setFieldsValue(Z),L(!1)};return(0,a.jsxs)(a.Fragment,{children:[X,(0,a.jsxs)(g.Z.Item,t()(t()({},b),{},{children:[s&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.ZP,{type:"dashed",htmlType:"button",onClick:ee,children:"\u6682\u5B58"}),(0,a.jsx)(de.Z,{title:"\u63D0\u793A",open:h,onOk:ue,onCancel:function(){return L(!1)},children:(0,a.jsx)("p",{children:"\u662F\u5426\u8981\u6062\u590D\u6682\u5B58\u7684\u8868\u5355\u6570\u636E\uFF1F"})})]}),i]}))]})};ne.Buttons=ye;var xe=n(19632),ge=n.n(xe),De=n(56853),be=n(21054),Ce=n(10911),Ee=n(74956),Pe=["tips","value","onChange","uploadTo","hashCheck","listType","ifDrag"],Fe=Ce.Z.Dragger,Oe=function(){var c=D()(v()().mark(function e(i){var r;return v()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n(84805)("./".concat(i));case 2:return r=m.sent,m.abrupt("return",r.default);case 4:case"end":return m.stop()}},e)}));return function(i){return c.apply(this,arguments)}}(),Ie=function(e){var i=e.tips,r=e.value,s=e.onChange,m=s===void 0?function(){}:s,C=e.uploadTo,b=C===void 0?"server":C,F=e.hashCheck,P=F===void 0?!0:F,h=e.listType,L=h===void 0?"picture":h,j=e.ifDrag,l=_()(e,Pe),Z=t()({listType:L},l),y=r==null?void 0:r.map(function(x){var I=x.toObject();return Object.assign(I,{uid:I.uid||I.id})}),w=Q.ZP.useMessage(),O=d()(w,2),T=O[0],X=O[1],ee=function(){var x=D()(v()().mark(function I(K){var u,o,z;return v()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(u={file:K,action:l.action,hashId:""},!P){p.next=5;break}return p.next=4,(0,Ee.UM)(K);case 4:u.hashId=p.sent;case 5:return p.next=7,Oe(b);case 7:return o=p.sent,p.next=10,o.upload(u.file,u.action,u.hashId);case 10:return z=p.sent,p.abrupt("return",z);case 12:case"end":return p.stop()}},I)}));return function(K){return x.apply(this,arguments)}}(),ue=function(){var I=t()(t()({},Z),{},{onChange:function(u){var o=u.file;if(o.status==="done")if(o.response.status){var z=y||[],H={id:o.response.file_id,uid:o.uid,url:o.response.url,name:o.response.title},p=[].concat(ge()(z),[H]);l.maxCount===1?p=p.slice(-1):p=p.slice(0,l.maxCount),m(p.map(function(E){return new $(E.id,E.uid,E.url,E.name)}))}else o.response.status===0&&T.error(o.response.info);o.status==="removed"&&m(y.filter(function(E){var se=o.id||o.response.file_id;return E.id!==se}).map(function(E){return new $(E.id,E.uid,E.url,E.name)}))},defaultFileList:y,showUploadList:{showDownloadIcon:!0},onPreview:function(u){var o;window.open((u==null?void 0:u.url)||(u==null||(o=u.response)===null||o===void 0?void 0:o.url),"_blank")},customRequest:function(u){console.log("callbackProps",u),ee(u.file).then(function(o){u.onSuccess(o)})}});return(0,a.jsxs)(a.Fragment,{children:[X,j?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(Fe,t()(t()({},I),{},{children:[(0,a.jsx)("p",{className:"ant-upload-drag-icon",children:(0,a.jsx)(De.Z,{})}),(0,a.jsx)("p",{className:"ant-upload-text",children:"\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u533A\u57DF\u8FDB\u884C\u4E0A\u4F20"}),(0,a.jsx)("span",{className:"drag-drop-upload-tips",children:i})]}))}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Ce.Z,t()(t()({},I),{},{children:(0,a.jsx)(f.ZP,{icon:(0,a.jsx)(be.Z,{}),children:"\u70B9\u51FB\u4E0A\u4F20"})})),(0,a.jsx)("span",{style:{color:"#c9c6c6"},children:i})]})]})};return(0,W.useEffect)(function(){P&&(0,Ee.ZP)()},[]),(0,a.jsx)(a.Fragment,{children:ue()})},Me=n(24679),Te=n(71230),Ae=n(50719),Ue=["onChange"],Be=function(e){var i=e.onChange,r=_()(e,Ue),s=function(C){e.onChange&&e.onChange(C.target.value)};return(0,a.jsx)(Ae.Z,t()({onChange:s},r))},Le=Be,Re=n(88385),Se=["onChange"],We=function(e){var i=e.onChange,r=_()(e,Se),s=function(C){e.onChange&&e.onChange(C)};return(0,a.jsx)(Re.Z,t()({bordered:!1,onChange:s},r))},$e=We,Ze=["onChange","value","minLength","maxLength"],Ke=function(e){var i=e.onChange,r=e.value,s=e.minLength,m=e.maxLength,C=_()(e,Ze),b=(0,W.useState)(!1),F=d()(b,2),P=F[0],h=F[1],L=function(l){e.onChange&&e.onChange(l.target.value)};return(0,a.jsxs)("div",{className:"component_editable_table_text_area",children:[(0,a.jsx)("textarea",t()({className:"component_editable_table_text_area_input ".concat(P?"focus":""),onFocus:function(){h(!0)},onBlur:function(){h(!1)},onChange:L,value:r,minLength:s,maxLength:m},C)),m&&P?(0,a.jsx)("div",{className:"component_editable_table_text_area_length",children:"".concat(r!=null&&r.length?r.length:0," / ").concat(m)}):""]})},Ne=Ke,ze=["children","dataIndex","onChange","component","editable","calc","customComponentProps"],ke={Input:Le,InputNumber:$e,TextArea:Ne},Ve=(0,W.memo)(function(c){var e=c.children,i=c.dataIndex,r=c.onChange,s=c.component,m=s===void 0?"Input":s,C=c.editable,b=c.calc,F=c.customComponentProps,P=F===void 0?{}:F,h=_()(c,ze);if(b)return(0,a.jsx)("td",t()(t()({},h),{},{children:b(h.record)}));var L=t()({defaultValue:(h==null?void 0:h.record)&&(h==null?void 0:h.record[i]),onChange:r},P);return(0,a.jsx)("td",t()(t()({},h),{},{children:C?W.createElement(ke[m],L):e}))}),Ge=function(e){var i=e.value,r=e.columns,s=e.onChange,m=e.summary,C=e.canUpdateNum,b=C===void 0?!0:C,F=U.ZP.useConfig(),P=F.componentDisabled,h=r.map(function(l){return t()(t()({},l),{},{onCell:function(y){return{record:y,dataIndex:l.dataIndex,title:l.title,component:l==null?void 0:l.component,editable:l.editable===void 0?!0:l.editable,calc:l.calc,customComponentProps:typeof l.customComponentPropsFn=="function"?l.customComponentPropsFn(y):{},onChange:function(O){s&&s(i.map(function(T,X){return T.key===y.key&&(T[l.dataIndex]=O),T}))}}}})}),L=function(Z){return function(){s&&s(i.filter(function(y){return y.key!==Z}))}},j=function(){var Z=0,y=i!=null?i:[];y.forEach(function(O){O.key>Z&&(Z=O.key)});var w={};r.forEach(function(O){O.editable===!0&&(w[O.dataIndex]="")}),w.key=Z+1,s&&s([].concat(ge()(y),[w]))};return!P&&b&&b!=="add_only"&&h.push({title:"\u64CD\u4F5C",dataIndex:"operation",editable:!1,width:"40px",render:function(Z,y){return(0,a.jsx)(ve,{type:"primary",danger:!0,confirm:{title:"\u5220\u9664",description:"\u786E\u5B9A\u8981\u5220\u9664\u5417?"},onClick:L(y.key),children:"\u5220\u9664"})}}),(0,a.jsx)(Me.Z,t()(t()({pagination:!1,rowClassName:"budget-td",components:{body:{cell:Ve}},summary:m},!P&&b&&b!=="delete_only"?{footer:function(){return(0,a.jsx)(Te.Z,{justify:"center",children:(0,a.jsx)(ve,{type:"primary",onClick:j,children:"\u65B0\u589E"})})}}:{}),{},{dataSource:i,columns:h,bordered:!0}))},we=n(76306),He=["children","confirm"],ve=function(e){var i=e.children,r=e.confirm,s=_()(e,He),m=(0,W.useState)(!1),C=d()(m,2),b=C[0],F=C[1],P=(0,W.useState)(!1),h=d()(P,2),L=h[0],j=h[1],l=(0,W.useRef)(!1),Z=function(T){r||y(T)},y=function(){var O=D()(v()().mark(function T(X){var ee;return v()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:if(!(!l.current&&s.onClick)){x.next=9;break}return l.current=!0,ee=setTimeout(function(){F(!0),j(!0)},300),x.next=5,s.onClick();case 5:clearTimeout(ee),F(!1),j(!1),l.current=!1;case 9:case"end":return x.stop()}},T)}));return function(X){return O.apply(this,arguments)}}(),w=function(T){var X=T.children,ee=function(){var ue=D()(v()().mark(function x(I){return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,y(I);case 2:case"end":return u.stop()}},x)}));return function(I){return ue.apply(this,arguments)}}();return r&&!b?(0,a.jsx)(we.Z,{title:r==null?void 0:r.title,description:r==null?void 0:r.description,onConfirm:ee,okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",children:X}):X};return(0,a.jsx)(w,{children:(0,a.jsx)(f.ZP,t()(t()({loading:b,disabled:L},s),{},{onClick:Z,children:i}))})}},84805:function(te,B,n){var A={"./cos":[13552,552],"./cos.ts":[13552,552],"./oss":[80503,503],"./oss.ts":[80503,503],"./server":[93928,928],"./server.ts":[93928,928],"./tos":[20311,311],"./tos.ts":[20311,311]};function d(R){if(!n.o(A,R))return Promise.resolve().then(function(){var v=new Error("Cannot find module '"+R+"'");throw v.code="MODULE_NOT_FOUND",v});var t=A[R],S=t[0];return n.e(t[1]).then(function(){return n(S)})}d.keys=function(){return Object.keys(A)},d.id=84805,te.exports=d}}]);