"use strict";(self.webpackChunkMedAir3=self.webpackChunkMedAir3||[]).push([[441],{6877:function(e,t,n){var r=n(3655),a=n(5820),i=n(2791),u=n(2622),o=n(4087),c=n(184);function s(e){var t=e.onClick;return(0,c.jsx)(r.Z.Link,{children:(0,c.jsx)(o.xu,{color:"red",onClick:function(e){return e.stopPropagation()},children:(0,c.jsx)(a.Z,{title:"Are you sure you want to delete this item?",okText:"Yes",cancelText:"No",onConfirm:t,children:(0,c.jsx)(u.Z,{})})})})}t.Z=(0,i.memo)(s)},7537:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(3433),a=n(1413),i=n(9439),u=n(5987),o=n(1041),c=n(1326),s=n(2791),l=n(4165),d=n(5861),f=n(4942),p=n(9555),v=n(1933),x=n(5835),h=n(184),Z=p.Z.Option,m=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(){var t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.Z)("managers/tabs");case 2:if(null===(t=e.sent)||void 0===t||!t.data){e.next=5;break}return e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(e){var t=e.dataIndex,n=(e.title,e.inputRef),r=e.save,a=(0,v.useQuery)(["managers/tabs"],m,{enabled:!1}),i=a.data,u=a.isLoading,c=a.refetch;return(0,h.jsx)(o.Z.Item,{style:{margin:0},name:t,children:(0,h.jsx)(p.Z,{allowClear:!0,ref:n,lazyLoad:!0,onBlur:function(){r("select")},loading:u,onFocus:c,children:null===i||void 0===i?void 0:i.map((function(e,t){return(0,h.jsx)(Z,{value:JSON.stringify(e),children:e.cureTabName},e.cureTabId)}))})})},g=(0,s.memo)(b),k=p.Z.Option,y=function(e){var t=e.dataIndex,n=(e.title,e.inputRef),r=e.save;return(0,h.jsx)(o.Z.Item,{style:{margin:0},name:t,children:(0,h.jsxs)(p.Z,{allowClear:!0,ref:n,lazyLoad:!0,onBlur:function(){r("select")},children:[(0,h.jsx)(k,{value:"Tablet",children:"Tablet"}),(0,h.jsx)(k,{value:"Ampoule",children:"Ampoule"}),(0,h.jsx)(k,{value:"Drops",children:"Drops"})]})})},w=(0,s.memo)(y),T=n(9389),j=function(e){var t=e.dataIndex,n=(e.title,e.inputRef),r=e.save;return(0,h.jsx)(o.Z.Item,{name:t,children:(0,h.jsx)(T.Z,{ref:n,onPressEnter:r,onBlur:r})})},S=(0,s.memo)(j),I=function(e){var t=e.dataIndex,n=e.title,r=e.inputRef,a=e.save,i=e.inputType;return"useTabs"===t||"cureTabName"===t&&"select"===i?(0,h.jsx)(g,{dataIndex:t,title:n,inputRef:r,save:a}):"cureTabType"===t&&"select"===i?(0,h.jsx)(w,{dataIndex:t,title:n,inputRef:r,save:a}):(0,h.jsx)(S,{dataIndex:t,title:n,inputRef:r,save:a})},N=(0,s.memo)(I),C=function(e){var t=e.title,n=e.editable,r=e.children,u=e.dataIndex,o=e.record,c=e.handleSave,p=e.setShowSaveButton,v=e.form,x=e.inputType,Z=(0,s.useState)(!1),m=(0,i.Z)(Z,2),b=m[0],g=m[1],k=(0,s.useRef)(null);(0,s.useEffect)((function(){b&&k.current.focus()}),[b]);var y=function(){p&&p(!0),g(!b),v.setFieldsValue((0,f.Z)({},u,o[u]))},w=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(t){var n,r,i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.validateFields();case 3:n=e.sent,Object.keys(n).includes("useTabs")&&"select"===t&&(r=JSON.parse(n.useTabs),n.useTabs=r.cureTabName,n.cureTabType=r.cureTabType),Object.keys(n).includes("cureTabName")&&"select"===t&&(i=JSON.parse(n.cureTabName),n.cureTabName=i.cureTabName,n.cureTabType=i.cureTabType),y(),c((0,a.Z)((0,a.Z)({},o),n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Save failed:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),T=r;return n&&(T=b?(0,h.jsx)(N,{dataIndex:u,title:t,inputRef:k,save:w,inputType:x}):(0,h.jsx)("div",{className:"editable-cell-value-wrap",style:{paddingRight:24,height:"35px"},onClick:y,children:r})),{childNode:T}},P=["index"],R=["title","editable","children","dataIndex","record","handleSave","setShowSaveButton","inputType"],D=s.createContext(null),O=function(e){e.index;var t=(0,u.Z)(e,P),n=o.Z.useForm(),r=(0,i.Z)(n,1)[0];return(0,h.jsx)(o.Z,{form:r,component:!1,children:(0,h.jsx)(D.Provider,{value:r,children:(0,h.jsx)("tr",(0,a.Z)({},t))})})},q=function(e){var t=e.title,n=e.editable,r=e.children,i=e.dataIndex,o=e.record,c=e.handleSave,l=e.setShowSaveButton,d=e.inputType,f=(0,u.Z)(e,R),p=(0,s.useContext)(D),v=C({title:t,editable:n,children:r,dataIndex:i,record:o,handleSave:c,setShowSaveButton:l,inputType:d,form:p}).childNode;return(0,h.jsx)("td",(0,a.Z)((0,a.Z)({},f),{},{children:v}))},B=function(e){var t=e.dataSource,n=e.setDataSource,i=e.defaultColumns,u=e.onChange,o=function(e){var i=(0,r.Z)(t),o=i.findIndex((function(t){return e.key===t.key})),c=i[o];i.splice(o,1,(0,a.Z)((0,a.Z)({},c),e)),n(i),null===u||void 0===u||u()},s={body:{row:O,cell:q}},l=null===i||void 0===i?void 0:i.map((function(e){return e.editable?(0,a.Z)((0,a.Z)({},e),{},{onCell:function(t){return{record:t,editable:e.editable,dataIndex:e.dataIndex,title:e.title,inputType:e.inputType,handleSave:o}}}):e}));return(0,h.jsx)("div",{children:(0,h.jsx)(c.Z,{size:"small",bordered:!0,scroll:{x:window.innerHeight},rowClassName:function(){return"editable-row"},components:s,dataSource:t,columns:l,pagination:!1})})},E=(0,s.memo)(B)},5835:function(e,t,n){var r=n(4165),a=n(5861),i=n(7027),u=n(1243),o="http://5.189.181.111:8080/api/",c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("login"===t){e.next=17;break}return e.prev=1,n=localStorage.getItem("token"),e.next=5,u.Z.get(o+"token/"+n);case 5:if("ok"!==(null===(a=e.sent)||void 0===a?void 0:a.data)){e.next=10;break}return e.abrupt("return","ok");case 10:"no"===(null===a||void 0===a?void 0:a.data)&&(localStorage.clear(),window.location.reload());case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),i.ZP.error("ERROR: Verification Token "),console.log("err in verificationToken");case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();function s(){return s=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,s,l=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=l.length>1&&void 0!==l[1]?l[1]:{},a=l.length>2&&void 0!==l[2]?l[2]:"get",e.prev=2,o){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,c(t);case 7:if(!e.sent&&"login"!==t){e.next=13;break}return e.next=11,u.Z[a](o+t,n);case 11:return s=e.sent,e.abrupt("return",s);case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),i.ZP.error(e.t0.message),console.log("%c error","background: red; color: dark",e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,15]])}))),s.apply(this,arguments)}t.Z=function(e){return s.apply(this,arguments)}},441:function(e,t,n){n.r(t);var r=n(3433),a=n(1413),i=n(9439),u=n(4165),o=n(5861),c=n(2791),s=n(4087),l=n(9286),d=n(7537),f=n(131),p=n(7027),v=n(7309),x=n(1933),h=n(5835),Z=n(6877),m=n(184),b=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.Z)("managers/pathologists");case 2:if(null===(t=e.sent)||void 0===t||!t.data){e.next=6;break}return t.data.forEach((function(e){return e.Id=e.pathologistId})),e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.default=function(){var e=(0,c.useState)(!0),t=(0,i.Z)(e,2),n=t[0],g=t[1],k=(0,c.useState)(!1),y=(0,i.Z)(k,2),w=y[0],T=y[1],j=(0,x.useQuery)("managers/pathologists",b),S=j.data,I=j.isFetching,N=j.refetch,C=(0,c.useState)(S||[]),P=(0,i.Z)(C,2),R=P[0],D=P[1];(0,c.useEffect)((function(){!I&&S&&D(S)}),[I]);var O=(0,c.useMemo)((function(){return[{title:"Name",dataIndex:"pathologistName",key:"pathologistName",ellipsis:!0,editable:!0,render:function(e){return(0,m.jsx)(f.Z,{placement:"topLeft",title:e,children:e})}},{title:"Place",dataIndex:"pathologistPlace",key:"pathologistPlace",ellipsis:!0,editable:!0,render:function(e){return(0,m.jsx)(f.Z,{placement:"topLeft",title:e,children:e})}},{title:"Delete",dataIndex:"delete",width:50,key:"delete",ellipsis:!0,align:"center",render:function(e,t,n){return(0,m.jsx)(Z.Z,{onClick:function(){B(t)}})}}]}),[R]),q=function(e){var t=R.filter((function(t){return t.Id!==e.Id}));D(t),p.ZP.success("Deleted")},B=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(t){var n,r,a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.visitPlaceId){e.next=3;break}return e.abrupt("return",q(t));case 3:return e.next=5,(0,h.Z)("managers/places/"+n,{},"delete");case 5:"success"===(null===(r=e.sent)||void 0===r?void 0:r.data)?(p.ZP.success("Deleted!"),a=R.filter((function(e){return e.Id!==t.Id})),D(a),N()):p.ZP.warning("Something get wrong");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(){var t,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(!0),t=0;case 2:if(!(t<R.length)){e.next=11;break}return n=(0,a.Z)({},R[t]),e.next=6,(0,h.Z)("managers/places",n,"post");case 6:e.sent?(p.ZP.success({content:"Saved",key:"save_manager"}),N()):p.ZP.error("Error");case 8:t++,e.next=2;break;case 11:T(!1),g(!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,m.jsx)(s.xu,{boxShadow:"xl",p:"2",bg:"pink.100",borderRadius:"15px",children:(0,m.jsxs)(s.xu,{display:"flex",flexDirection:"column",children:[(0,m.jsx)(v.ZP,{disabled:n,loading:w,block:!0,onClick:E,type:"primary",children:"Save"}),(0,m.jsx)(d.Z,{dataSource:R,setDataSource:D,defaultColumns:O,onChange:function(){g(!1)}}),(0,m.jsx)(v.ZP,{block:!0,icon:(0,m.jsx)(l.Z,{}),onClick:function(){var e=(new Date).getTime(),t={key:e,Id:e};D((function(e){return[].concat((0,r.Z)(e),[t])})),g(!1)},children:"New"})]})})}},9286:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(1413),a=n(2791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},u=n(4291),o=function(e,t){return a.createElement(u.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:i}))};o.displayName="PlusOutlined";var c=a.forwardRef(o)}}]);
//# sourceMappingURL=441.cbc5a785.chunk.js.map