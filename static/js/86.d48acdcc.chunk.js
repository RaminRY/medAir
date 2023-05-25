"use strict";(self.webpackChunkMedAir3=self.webpackChunkMedAir3||[]).push([[86],{6877:function(e,t,n){var i=n(3655),r=n(5820),a=n(2791),s=n(2622),l=n(4087),o=n(184);function u(e){var t=e.onClick;return(0,o.jsx)(i.Z.Link,{children:(0,o.jsx)(l.xu,{color:"red",onClick:function(e){return e.stopPropagation()},children:(0,o.jsx)(r.Z,{title:"Are you sure you want to delete this item?",okText:"Yes",cancelText:"No",onConfirm:t,children:(0,o.jsx)(s.Z,{})})})})}t.Z=(0,a.memo)(u)},378:function(e,t,n){var i=n(4087),r=n(7885),a=n(6070),s=n(2791),l=n(2414),o=n(184);function u(e){var t=e.items,n=e.isOpen,s=e.onOpenChange;return(0,o.jsx)(i.xu,{cursor:"pointer",children:(0,o.jsx)(a.Z,{trigger:["click"],menu:{items:t},open:n,onOpenChange:s,children:(0,o.jsx)(r.h,{variant:"ghost",color:"pink.500",size:"sm",isRound:!0,"aria-label":"Search database",icon:(0,o.jsx)(l.Z,{})})})})}t.Z=(0,s.memo)(u)},3416:function(e,t,n){function i(e){return JSON.parse(JSON.stringify(e))}n.d(t,{p:function(){return i}})},1886:function(e,t,n){var i=n(3052),r=n(1244);t.Z=function(){var e=(0,i.b)(),t=e.personInfoForm,n=e.diseaseHistoryForm,a=e.patientForm,s=e.setFamilyMembersList,l=e.treatmentHistoryForm,o=e.searchPatientForm,u=(0,r.o)((function(e){return e.setDataSourceDiseaseHistoryTable})),c=(0,r.o)((function(e){return e.setSavedDrawingCanvas})),d=(0,r.o)((function(e){return e.setDescriptionsCanvas})),f=(0,r.o)((function(e){return e.setDataSourceVisitTable})),m=(0,r.o)((function(e){return e.setDataSourceAnalysisTable})),p=(0,r.o)((function(e){return e.setDataSourceTreatmentTable})),x=(0,r.o)((function(e){return e.setRecipeList}));return{resetProfilePatient:function(){o.resetFields(),a.resetFields(),t.resetFields(),n.resetFields(),l.resetFields(),s([]),u([]),c({}),d({}),f([]),m([]),p([]),x([])}}}},1086:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var i=n(4165),r=n(5861),a=n(2791),s=n(4087),l=n(9439),o=n(131),u=n(7027),c=n(9555),d=n(1326),f=n(2426),m=n.n(f),p=n(2491),x=n(1244),h=n(6877),v=n(184);function b(e){var t=e.handleDelete;return(0,v.jsx)(h.Z,{onClick:t})}var Z=(0,a.memo)(b),j=n(3433),w=n(2014),g=n(3416),k=n(378);function y(e){var t=e.columns,n=(0,a.useState)(!1),i=(0,l.Z)(n,2),r=i[0],s=i[1],o=(0,x.m)((function(e){return e.calendarTableSetting})),u=(0,x.m)((function(e){return e.setCalendarTableSetting})),c=function(e){var t=e.target.id,n=e.target.checked,i=(0,g.p)(o);i.forEach((function(e){e.dataIndex===t&&(e.isVisible=n)})),u((0,j.Z)(i))};(0,a.useEffect)((function(){var e=t.map((function(e){return{key:e.key,dataIndex:e.dataIndex,isVisible:e.isVisible,title:e.title}}));u(e)}),[]);var d=(0,a.useMemo)((function(){return o?null===o||void 0===o?void 0:o.map((function(e){return{label:(0,v.jsx)(w.Z,{id:null===e||void 0===e?void 0:e.dataIndex,onChange:c,defaultChecked:null===e||void 0===e?void 0:e.isVisible,children:e.title})}})):[]}),[o]);return(0,v.jsx)(k.Z,{items:d,isOpen:r,onOpenChange:function(e){s(e)}})}var S=(0,a.memo)(y),D=n(5835),C=n(9162);function I(e){var t=e.dataSource,n=e.refetch,f=e.isLoadingOnSelectCalendar,h=(0,a.useState)(),b=(0,l.Z)(h,2),j=b[0],w=b[1],g=(0,p.a)("(min-width: 400px)"),k=(0,l.Z)(g,1)[0],y=(0,x.m)((function(e){return e.calendarTableSetting})),I=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return null!==y&&void 0!==y&&y.find((function(t){return t.dataIndex===e}))?y.find((function(t){return t.dataIndex===e})).isVisible:t},Y=(0,a.useMemo)((function(){return[{title:"Patient Number",dataIndex:"patientId",key:"patientId",ellipsis:!0,width:!k&&100,isVisible:I("patientId")},{title:"Time",dataIndex:"visitDate",key:"visitDate",ellipsis:!0,width:!k&&150,isVisible:I("visitDate"),render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Name",dataIndex:"patientName",key:"patientName",ellipsis:!0,width:!k&&150,isVisible:I("patientName"),render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Surname",dataIndex:"patientSurName",key:"patientSurName",ellipsis:!0,width:!k&&150,isVisible:I("patientSurName"),render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Patronymic",dataIndex:"patientPatronymic",key:"patientPatronymic",ellipsis:!0,width:!k&&150,isVisible:I("patientPatronymic"),render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Age",dataIndex:"birthDate",key:"birthDate",ellipsis:!0,width:!k&&150,isVisible:I("birthDate"),render:function(e){return e?m()().diff(e,"years"):""}},{title:"Mobile number",ellipsis:!0,width:!k&&150,dataIndex:"phoneNumber",key:"phoneNumber",isVisible:I("phoneNumber"),render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Reason",dataIndex:"visitReason",key:"visitReason",ellipsis:!0,width:!k&&150,isVisible:I("visitReason"),render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Address",dataIndex:"placeName",key:"placeName",isVisible:I("placeName"),ellipsis:!0,width:!k&&150,render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Recomendation",dataIndex:"recommendationPerson",key:"recommendationPerson",isVisible:I("recommendationPerson"),ellipsis:!0,width:!k&&150,render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Status",dataIndex:"status",key:"status",isVisible:I("status"),ellipsis:!0,width:!k&&150,render:function(e,t,n){var a=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var r,a,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.id,a={id:r,status:n},e.next=5,(0,D.Z)("visittable",a,"post");case 5:null!==(s=e.sent)&&void 0!==s&&s.data?u.ZP.success("Status changed"):u.ZP.warning("Something went wrong"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("%c error","background: red; color: dark",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsx)(s.xu,{m:"0.5",onClick:function(e){e.stopPropagation(),e.preventDefault()},children:(0,v.jsxs)(c.Z,{onSelect:a,defaultValue:e,allowClear:!0,style:{width:"100%"},children:[(0,v.jsx)(c.Z.Option,{value:"unsolved",children:"Unsolved"}),(0,v.jsx)(c.Z.Option,{value:"approved",children:"Approved"})]})})}},{title:"Delete",dataIndex:"delete",width:50,key:"delete",isVisible:I("delete"),ellipsis:!0,align:"center",render:function(e,t,a){var s=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.ZP.loading(),r=t.id,e.next=4,(0,D.Z)("visits/"+r,{},"delete");case 4:return null!==(a=e.sent)&&void 0!==a&&a.data?(u.ZP.success(),n()):u.ZP.warning("Something went wrong"),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsx)(Z,{handleDelete:s})}}]}),[k,y]),N=(0,C.Z)(),P=N.onRowTable,V=N.isLoading;return(0,v.jsxs)(s.xu,{display:"flex",flexDirection:"column",children:[(0,v.jsx)(s.xu,{alignSelf:"flex-end",children:(0,v.jsx)(S,{columns:Y})}),(0,v.jsx)(d.Z,{loading:V||f,size:"small",bordered:!0,scroll:{x:window.innerHeight},pagination:!1,columns:Y.filter((function(e){return!0===e.isVisible})),dataSource:t||[],rowClassName:function(e,t){return j===t+1?"ant-table-row-selected":""},onRow:function(e,t){return{onClick:function(n){null===P||void 0===P||P(e,t),w(t)}}}})]})}var Y=(0,a.memo)(I),N=n(9223),P=n(4224),V=n(9006),M=n(8348),F=n(1041),O=n(9998),L=n(7309),R=n(9389),T=n(5953),A=n(7892),H=n.n(A),z=n(9572);function E(e){var t=e.refetch,n=(0,M.q)(),s=n.isOpen,o=n.onOpen,u=n.onClose,d=(0,a.useState)(!1),f=(0,l.Z)(d,2),m=f[0],p=f[1],x=F.Z.useForm(),h=(0,l.Z)(x,1)[0],b=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),(r=n).visitDate=H()(n.visitDate).format("YYYY-MM-DD HH:mm"),p(!1),e.next=6,(0,z.dK)({sendObj:r});case 6:h.resetFields(),t(),u();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(P.z,{size:"sm",colorScheme:"blue",onClick:o,children:"Add visit"}),(0,v.jsx)(O.Z,{footer:[(0,v.jsx)(L.ZP,{onClick:u,children:"Cancel"},"1"),(0,v.jsx)(L.ZP,{type:"primary",htmlType:"submit",form:"visitModalForm",loading:m,children:"Add"},"2")],closable:!1,open:s,onCancel:u,children:(0,v.jsxs)(F.Z,{form:h,onFinish:b,id:"visitModalForm",labelAlign:"left",labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},children:[(0,v.jsx)(F.Z.Item,{label:"Id",name:"patientId",children:(0,v.jsx)(R.Z,{type:"number",allowClear:!0})}),(0,v.jsx)(F.Z.Item,{label:"Name",name:"patientName",children:(0,v.jsx)(R.Z,{allowClear:!0})}),(0,v.jsx)(F.Z.Item,{label:"Surname",name:"patientSurName",children:(0,v.jsx)(R.Z,{allowClear:!0})}),(0,v.jsx)(F.Z.Item,{label:"Reason",name:"visitReason",children:(0,v.jsx)(R.Z,{allowClear:!0})}),(0,v.jsx)(F.Z.Item,{label:"Date",name:"visitDate",children:(0,v.jsx)(T.Z,{showTime:!0,allowClear:!0,format:"YYYY-MM-DD HH:mm",defaultValue:H()()})}),(0,v.jsx)(F.Z.Item,{label:"Mobile Number",name:"phoneNumber",children:(0,v.jsx)(R.Z,{type:"number",allowClear:!0})}),(0,v.jsx)(F.Z.Item,{label:"Status",name:"status",children:(0,v.jsxs)(c.Z,{allowClear:!0,children:[(0,v.jsx)(c.Z.Option,{value:"unsolved",children:"Unsolved"}),(0,v.jsx)(c.Z.Option,{value:"approved",children:"Approved"})]})})]})})]})}var J=(0,a.memo)(E),K=n(7689),U=n(1886);function q(e){var t=e.cellRender,n=e.onSelect,i=e.defaultValue,r=e.refetch,a=(0,K.s0)(),l=(0,U.Z)().resetProfilePatient;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(N.K,{direction:"row",spacing:4,align:"center",children:[(0,v.jsx)(P.z,{size:"sm",colorScheme:"blue",onClick:function(){l(),a("/person_info")},children:"New Patient"}),(0,v.jsx)(J,{refetch:r})]}),(0,v.jsx)(s.xu,{py:"2",w:"300px",children:(0,v.jsx)(V.Z,{fullscreen:!1,cellRender:t,onSelect:n,defaultValue:i})})]})}var Q=a.memo(q),W=n(1933),_=n(6651);var B=function(){var e=(0,x.o)((function(e){return e.selectedDate})),t=(0,x.o)((function(e){return e.setSelectedDate})),n=function(){var t=(0,r.Z)((0,i.Z)().mark((function t(){var n,r;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e?e.format("YYYY-MM-DD 00:00:00"):m()().format("YYYY-MM-DD 00:00:00"),t.next=3,(0,D.Z)("visits/"+n);case 3:if(null===(r=t.sent)||void 0===r||!r.data){t.next=6;break}return t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=(0,W.useQuery)(["calendarPage",e],(function(){return n()})),l=a.data,o=a.refetch,u=a.isLoading;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(_.Z,{}),(0,v.jsxs)(s.xu,{boxShadow:"xl",p:"2",bg:"pink.100",borderRadius:"15px",children:[(0,v.jsx)(s.xu,{children:(0,v.jsx)(Q,{refetch:o,cellRender:function(e){return(null===l||void 0===l?void 0:l.some((function(t){var n=t.visitDate;return m()(n).format("YYYY-MM-DD")===e.format("YYYY-MM-DD")})))?(0,v.jsx)(s.xu,{borderTop:"3px solid black",shadow:"dark-lg"}):null},onSelect:function(e){t(e)},defaultValue:e})}),(0,v.jsx)(s.xu,{children:(0,v.jsx)(Y,{isLoadingOnSelectCalendar:u,dataSource:l})})]})]})}}}]);
//# sourceMappingURL=86.d48acdcc.chunk.js.map