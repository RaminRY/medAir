"use strict";(self.webpackChunkMedAir3=self.webpackChunkMedAir3||[]).push([[677],{6877:function(e,t,n){var r=n(3655),a=n(5820),i=n(2791),s=n(2622),o=n(4087),u=n(184);function c(e){var t=e.onClick;return(0,u.jsx)(r.Z.Link,{children:(0,u.jsx)(o.xu,{color:"red",onClick:function(e){return e.stopPropagation()},children:(0,u.jsx)(a.Z,{title:"Are you sure you want to delete this item?",okText:"Yes",cancelText:"No",onConfirm:t,children:(0,u.jsx)(s.Z,{})})})})}t.Z=(0,i.memo)(c)},667:function(e,t,n){var r=n(9439),a=n(2791),i=n(1041),s=n(3099),o=n(9389),u=n(2706),c=n(7309),p=n(3052),l=n(9420),f=n(1830),d=n(2491),m=n(4087),Z=n(175),v=n(1886),h=n(2486),x=n(1244),y=n(184);function b(){var e=(0,p.b)(),t=e.patientForm,n=e.inPatientCollapse,a=e.setInPatientCollapse,b=(0,d.a)("(min-width: 600px)"),k=(0,r.Z)(b,1)[0],g=(0,v.Z)().resetProfilePatient,w=(0,h.Z)(),j=w.handleSave,S=w.isLoading,P=(0,x.o)((function(e){return e.onFieldsChange}));return(0,y.jsx)(m.xu,{boxShadow:"xl",p:"2",bg:"pink.100",borderRadius:"15px",children:(0,y.jsxs)(i.Z,{id:"patientForm",onFinish:j,form:t,layout:k?"inline":"vertical",onFieldsChange:P,children:[(0,y.jsx)(i.Z.Item,{label:"Name",children:(0,y.jsxs)(s.Z.Compact,{children:[(0,y.jsx)(i.Z.Item,{noStyle:!0,name:"patientName",children:(0,y.jsx)(o.Z,{placeholder:"Name"})},"patientName"),(0,y.jsx)(i.Z.Item,{name:"patientId",noStyle:!0,children:(0,y.jsx)(u.Z,{readOnly:!0,addonBefore:"\u2116",placeholder:"Patient \u2116"})}),(0,y.jsx)(c.ZP,{type:"ghost",onClick:function(){return a((function(e){return!e}))},icon:n?(0,y.jsx)(l.Z,{}):(0,y.jsx)(f.Z,{})})]})}),(0,y.jsx)(Z.U,{in:n,animateOpacity:!0,children:(0,y.jsxs)(i.Z,{form:t,layout:k?"inline":"vertical",onFieldsChange:P,children:[(0,y.jsx)(i.Z.Item,{name:"patientSurName",label:"Suriname",children:(0,y.jsx)(o.Z,{placeholder:"Suriname"})},"patientSurName"),(0,y.jsx)(i.Z.Item,{label:"Patronymic",name:"patientPatronymic",children:(0,y.jsx)(o.Z,{})},"patientPatronymic")]})}),(0,y.jsx)(i.Z.Item,{noStyle:!0,children:(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(c.ZP,{onClick:j,form:"patientForm",type:"primary",htmlType:"submit",loading:S,children:"Save"}),(0,y.jsx)(c.ZP,{onClick:function(){g()},danger:!0,children:"Clear"})]})})]})})}t.Z=(0,a.memo)(b)},378:function(e,t,n){var r=n(4087),a=n(7885),i=n(6070),s=n(2791),o=n(2414),u=n(184);function c(e){var t=e.items,n=e.isOpen,s=e.onOpenChange;return(0,u.jsx)(r.xu,{cursor:"pointer",children:(0,u.jsx)(i.Z,{trigger:["click"],menu:{items:t},open:n,onOpenChange:s,children:(0,u.jsx)(a.h,{variant:"ghost",color:"pink.500",size:"sm",isRound:!0,"aria-label":"Search database",icon:(0,u.jsx)(o.Z,{})})})})}t.Z=(0,s.memo)(c)},9572:function(e,t,n){n.d(t,{$M:function(){return u},H9:function(){return f},M9:function(){return h},Yo:function(){return p},bp:function(){return c},dK:function(){return v},jW:function(){return l},pP:function(){return x},si:function(){return d}});var r=n(4165),a=n(5861),i=n(7027),s=n(5835),o=function(e,t){e&&"string"!==typeof e?i.ZP.success({content:t+" saved",key:t+"_save",duration:2}):i.ZP.error({content:t+" don't saved",key:t+"_save",duration:2})},u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("patientid",{},"get");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),i.ZP.error({content:e.t0,key:"doc_save",duration:2});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("vite",t,"post");case 2:return n=e.sent,o(n,"Person Info"),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("morby",t,"post");case 2:n=e.sent,o(n,"Disease History");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("visits",t,"post");case 2:n=e.sent,o(n,"Visit");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("analyses",t,"post");case 2:n=e.sent,o(n,"Analyses");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("treatment",t,"post");case 2:n=e.sent,o(n,"Treatment");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.Z)("visitsformcalendar",t,"post"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.Z)("patients/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,s,o,p,l,f,d,v,h,x,y;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.sendObj).patientId){e.next=7;break}s=n.patientId,Z(s).then((function(e){null!==e&&void 0!==e&&e.data?a=n.patientId:i.ZP.warning({content:"The Patient not find",key:"info_message",duration:4})})),a=n.patientId,e.next=10;break;case 7:return e.next=9,u();case 9:a=e.sent;case 10:if(o=n.patientName,p=n.patientSurName,l=n.patientPatronymic,f=n.visitDate,d=n.phoneNumber,v=n.status,h=n.visitReason,x={patientVisitsList:[{patientId:a,status:v,visitDate:f,visitReason:h}]},y={patientId:a,patientName:o,patientSurName:p,patientPatronymic:l,phoneNumber:d},!a){e.next=20;break}if(n.patientId){e.next=17;break}return e.next=17,c(y);case 17:return e.next=19,m(x);case 19:e.sent;case 20:return e.abrupt("return",!0);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("managers/pathologists");case 2:if(null===(t=e.sent)||void 0===t||!t.data){e.next=5;break}return e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("managers/places");case 2:if(null===(t=e.sent)||void 0===t||!t.data){e.next=5;break}return e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},5835:function(e,t,n){var r=n(4165),a=n(5861),i=n(7027),s=n(1243),o="http://5.189.181.111:8080/api/",u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("login"===t){e.next=17;break}return e.prev=1,n=localStorage.getItem("token"),e.next=5,s.Z.get(o+"token/"+n);case 5:if("ok"!==(null===(a=e.sent)||void 0===a?void 0:a.data)){e.next=10;break}return e.abrupt("return","ok");case 10:"no"===(null===a||void 0===a?void 0:a.data)&&(localStorage.clear(),window.location.reload());case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),i.ZP.error("ERROR: Verification Token "),console.log("err in verificationToken");case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();function c(){return c=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,c,p=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=p.length>1&&void 0!==p[1]?p[1]:{},a=p.length>2&&void 0!==p[2]?p[2]:"get",e.prev=2,o){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,u(t);case 7:if(!e.sent&&"login"!==t){e.next=13;break}return e.next=11,s.Z[a](o+t,n);case 11:return c=e.sent,e.abrupt("return",c);case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),i.ZP.error(e.t0.message),console.log("%c error","background: red; color: dark",e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,15]])}))),c.apply(this,arguments)}t.Z=function(e){return c.apply(this,arguments)}},3416:function(e,t,n){function r(e){return JSON.parse(JSON.stringify(e))}n.d(t,{p:function(){return r}})},1886:function(e,t,n){var r=n(3052),a=n(1244);t.Z=function(){var e=(0,r.b)(),t=e.personInfoForm,n=e.diseaseHistoryForm,i=e.patientForm,s=e.setFamilyMembersList,o=e.treatmentHistoryForm,u=e.searchPatientForm,c=(0,a.o)((function(e){return e.setDataSourceDiseaseHistoryTable})),p=(0,a.o)((function(e){return e.setSavedDrawingCanvas})),l=(0,a.o)((function(e){return e.setDescriptionsCanvas})),f=(0,a.o)((function(e){return e.setDataSourceVisitTable})),d=(0,a.o)((function(e){return e.setDataSourceAnalysisTable})),m=(0,a.o)((function(e){return e.setDataSourceTreatmentTable})),Z=(0,a.o)((function(e){return e.setRecipeList}));return{resetProfilePatient:function(){u.resetFields(),i.resetFields(),t.resetFields(),n.resetFields(),o.resetFields(),s([]),c([]),p({}),l({}),f([]),d([]),m([]),Z([])}}}},2486:function(e,t,n){var r=n(4165),a=n(5861),i=n(1413),s=n(9439),o=n(7892),u=n.n(o),c=n(9572),p=n(3052),l=n(1244),f=n(2791);t.Z=function(){var e=(0,f.useState)(!1),t=(0,s.Z)(e,2),n=t[0],o=t[1],d=(0,p.b)(),m=d.patientForm,Z=d.personInfoForm,v=d.diseaseHistoryForm,h=d.familyMembersList,x=d.treatmentHistoryForm,y=(0,l.o)((function(e){return e.dataSourceDiseaseHistoryTable})),b=(0,l.o)((function(e){return e.savedDrawingCanvas})),k=(0,l.o)((function(e){return e.descriptionsCanvas})),g=(0,l.o)((function(e){return e.dataSourceVisitTable})),w=(0,l.o)((function(e){return e.dataSourceAnalysisTable})),j=(0,l.o)((function(e){return e.dataSourceTreatmentTable})),S=(0,l.o)((function(e){return e.recipeList})),P=function(e){var t=m.getFieldsValue(),n=t.patientName,r=t.patientSurName,a=t.patientPatronymic,s=Z.getFieldsValue(),o=s.birthDate,p=s.alkogol,l=s.smoke,f=(0,i.Z)((0,i.Z)({},Z.getFieldsValue()),{},{birthDate:u()(o).format("YYYY-MM-DD"),alkogol:p?1:0,smoke:l?1:0,patientName:n,patientSurName:r,patientPatronymic:a,patientId:e});(0,c.bp)(f)},F=function(e){b.deseaseImageDesc=JSON.stringify(k);var t=(0,i.Z)((0,i.Z)({},v.getFieldsValue()),{},{patientId:e,familyMembersList:h,deseaseImagesList:b,deseaseHistoryDynamicsList:y});(0,c.Yo)(t)},I=function(e){var t={patientVisitsList:g,patientId:e};(0,c.jW)(t)},C=function(e){var t={analyzesMediaList:w,patientId:e};(0,c.H9)(t)},N=function(e){var t=(0,i.Z)((0,i.Z)({},x.getFieldsValue()),{},{patientId:e,treatmentDynamics:j,recipeList:S});(0,c.si)(t)},D=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(!0),setTimeout((function(){o(!1)}),1e3),!(t=m.getFieldsValue().patientId)){e.next=7;break}n=t,e.next=10;break;case 7:return e.next=9,(0,c.$M)();case 9:n=e.sent;case 10:n&&Promise.all([P(n),F(n),I(n),C(n),N(n)]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{handleSave:D,isLoading:n}}}}]);
//# sourceMappingURL=677.a636d06d.chunk.js.map