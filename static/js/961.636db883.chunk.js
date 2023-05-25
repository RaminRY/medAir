"use strict";(self.webpackChunkMedAir3=self.webpackChunkMedAir3||[]).push([[961],{667:function(e,n,t){var r=t(9439),a=t(2791),i=t(1041),s=t(3099),o=t(9389),u=t(2706),l=t(7309),c=t(3052),d=t(9420),p=t(1830),m=t(2491),f=t(4087),Z=t(175),h=t(1886),x=t(2486),v=t(1244),b=t(184);function j(){var e=(0,c.b)(),n=e.patientForm,t=e.inPatientCollapse,a=e.setInPatientCollapse,j=(0,m.a)("(min-width: 600px)"),g=(0,r.Z)(j,1)[0],y=(0,h.Z)().resetProfilePatient,k=(0,x.Z)(),I=k.handleSave,w=k.isLoading,F=(0,v.o)((function(e){return e.onFieldsChange}));return(0,b.jsx)(f.xu,{boxShadow:"xl",p:"2",bg:"pink.100",borderRadius:"15px",children:(0,b.jsxs)(i.Z,{id:"patientForm",onFinish:I,form:n,layout:g?"inline":"vertical",onFieldsChange:F,children:[(0,b.jsx)(i.Z.Item,{label:"Name",children:(0,b.jsxs)(s.Z.Compact,{children:[(0,b.jsx)(i.Z.Item,{noStyle:!0,name:"patientName",children:(0,b.jsx)(o.Z,{placeholder:"Name"})},"patientName"),(0,b.jsx)(i.Z.Item,{name:"patientId",noStyle:!0,children:(0,b.jsx)(u.Z,{readOnly:!0,addonBefore:"\u2116",placeholder:"Patient \u2116"})}),(0,b.jsx)(l.ZP,{type:"ghost",onClick:function(){return a((function(e){return!e}))},icon:t?(0,b.jsx)(d.Z,{}):(0,b.jsx)(p.Z,{})})]})}),(0,b.jsx)(Z.U,{in:t,animateOpacity:!0,children:(0,b.jsxs)(i.Z,{form:n,layout:g?"inline":"vertical",onFieldsChange:F,children:[(0,b.jsx)(i.Z.Item,{name:"patientSurName",label:"Suriname",children:(0,b.jsx)(o.Z,{placeholder:"Suriname"})},"patientSurName"),(0,b.jsx)(i.Z.Item,{label:"Patronymic",name:"patientPatronymic",children:(0,b.jsx)(o.Z,{})},"patientPatronymic")]})}),(0,b.jsx)(i.Z.Item,{noStyle:!0,children:(0,b.jsxs)(s.Z,{children:[(0,b.jsx)(l.ZP,{onClick:I,form:"patientForm",type:"primary",htmlType:"submit",loading:w,children:"Save"}),(0,b.jsx)(l.ZP,{onClick:function(){y()},danger:!0,children:"Clear"})]})})]})})}n.Z=(0,a.memo)(j)},9572:function(e,n,t){t.d(n,{$M:function(){return u},H9:function(){return p},M9:function(){return x},Yo:function(){return c},bp:function(){return l},dK:function(){return h},jW:function(){return d},pP:function(){return v},si:function(){return m}});var r=t(4165),a=t(5861),i=t(7027),s=t(5835),o=function(e,n){e&&"string"!==typeof e?i.ZP.success({content:n+" saved",key:n+"_save",duration:2}):i.ZP.error({content:n+" don't saved",key:n+"_save",duration:2})},u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("patientid",{},"get");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),i.ZP.error({content:e.t0,key:"doc_save",duration:2});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("vite",n,"post");case 2:return t=e.sent,o(t,"Person Info"),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("morby",n,"post");case 2:t=e.sent,o(t,"Disease History");case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("visits",n,"post");case 2:t=e.sent,o(t,"Visit");case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("analyses",n,"post");case 2:t=e.sent,o(t,"Analyses");case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("treatment",n,"post");case 2:t=e.sent,o(t,"Treatment");case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.Z)("visitsformcalendar",n,"post"));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Z=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.Z)("patients/".concat(n)));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,s,o,c,d,p,m,h,x,v,b;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=n.sendObj).patientId){e.next=7;break}s=t.patientId,Z(s).then((function(e){null!==e&&void 0!==e&&e.data?a=t.patientId:i.ZP.warning({content:"The Patient not find",key:"info_message",duration:4})})),a=t.patientId,e.next=10;break;case 7:return e.next=9,u();case 9:a=e.sent;case 10:if(o=t.patientName,c=t.patientSurName,d=t.patientPatronymic,p=t.visitDate,m=t.phoneNumber,h=t.status,x=t.visitReason,v={patientVisitsList:[{patientId:a,status:h,visitDate:p,visitReason:x}]},b={patientId:a,patientName:o,patientSurName:c,patientPatronymic:d,phoneNumber:m},!a){e.next=20;break}if(t.patientId){e.next=17;break}return e.next=17,l(b);case 17:return e.next=19,f(v);case 19:e.sent;case 20:return e.abrupt("return",!0);case 21:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("managers/pathologists");case 2:if(null===(n=e.sent)||void 0===n||!n.data){e.next=5;break}return e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("managers/places");case 2:if(null===(n=e.sent)||void 0===n||!n.data){e.next=5;break}return e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},5835:function(e,n,t){var r=t(4165),a=t(5861),i=t(7027),s=t(1243),o="http://5.189.181.111:8080/api/",u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("login"===n){e.next=17;break}return e.prev=1,t=localStorage.getItem("token"),e.next=5,s.Z.get(o+"token/"+t);case 5:if("ok"!==(null===(a=e.sent)||void 0===a?void 0:a.data)){e.next=10;break}return e.abrupt("return","ok");case 10:"no"===(null===a||void 0===a?void 0:a.data)&&(localStorage.clear(),window.location.reload());case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),i.ZP.error("ERROR: Verification Token "),console.log("err in verificationToken");case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(n){return e.apply(this,arguments)}}();function l(){return l=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,l,c=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>1&&void 0!==c[1]?c[1]:{},a=c.length>2&&void 0!==c[2]?c[2]:"get",e.prev=2,o){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,u(n);case 7:if(!e.sent&&"login"!==n){e.next=13;break}return e.next=11,s.Z[a](o+n,t);case 11:return l=e.sent,e.abrupt("return",l);case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),i.ZP.error(e.t0.message),console.log("%c error","background: red; color: dark",e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,15]])}))),l.apply(this,arguments)}n.Z=function(e){return l.apply(this,arguments)}},1886:function(e,n,t){var r=t(3052),a=t(1244);n.Z=function(){var e=(0,r.b)(),n=e.personInfoForm,t=e.diseaseHistoryForm,i=e.patientForm,s=e.setFamilyMembersList,o=e.treatmentHistoryForm,u=e.searchPatientForm,l=(0,a.o)((function(e){return e.setDataSourceDiseaseHistoryTable})),c=(0,a.o)((function(e){return e.setSavedDrawingCanvas})),d=(0,a.o)((function(e){return e.setDescriptionsCanvas})),p=(0,a.o)((function(e){return e.setDataSourceVisitTable})),m=(0,a.o)((function(e){return e.setDataSourceAnalysisTable})),f=(0,a.o)((function(e){return e.setDataSourceTreatmentTable})),Z=(0,a.o)((function(e){return e.setRecipeList}));return{resetProfilePatient:function(){u.resetFields(),i.resetFields(),n.resetFields(),t.resetFields(),o.resetFields(),s([]),l([]),c({}),d({}),p([]),m([]),f([]),Z([])}}}},2486:function(e,n,t){var r=t(4165),a=t(5861),i=t(1413),s=t(9439),o=t(7892),u=t.n(o),l=t(9572),c=t(3052),d=t(1244),p=t(2791);n.Z=function(){var e=(0,p.useState)(!1),n=(0,s.Z)(e,2),t=n[0],o=n[1],m=(0,c.b)(),f=m.patientForm,Z=m.personInfoForm,h=m.diseaseHistoryForm,x=m.familyMembersList,v=m.treatmentHistoryForm,b=(0,d.o)((function(e){return e.dataSourceDiseaseHistoryTable})),j=(0,d.o)((function(e){return e.savedDrawingCanvas})),g=(0,d.o)((function(e){return e.descriptionsCanvas})),y=(0,d.o)((function(e){return e.dataSourceVisitTable})),k=(0,d.o)((function(e){return e.dataSourceAnalysisTable})),I=(0,d.o)((function(e){return e.dataSourceTreatmentTable})),w=(0,d.o)((function(e){return e.recipeList})),F=function(e){var n=f.getFieldsValue(),t=n.patientName,r=n.patientSurName,a=n.patientPatronymic,s=Z.getFieldsValue(),o=s.birthDate,c=s.alkogol,d=s.smoke,p=(0,i.Z)((0,i.Z)({},Z.getFieldsValue()),{},{birthDate:u()(o).format("YYYY-MM-DD"),alkogol:c?1:0,smoke:d?1:0,patientName:t,patientSurName:r,patientPatronymic:a,patientId:e});(0,l.bp)(p)},S=function(e){j.deseaseImageDesc=JSON.stringify(g);var n=(0,i.Z)((0,i.Z)({},h.getFieldsValue()),{},{patientId:e,familyMembersList:x,deseaseImagesList:j,deseaseHistoryDynamicsList:b});(0,l.Yo)(n)},P=function(e){var n={patientVisitsList:y,patientId:e};(0,l.jW)(n)},C=function(e){var n={analyzesMediaList:k,patientId:e};(0,l.H9)(n)},N=function(e){var n=(0,i.Z)((0,i.Z)({},v.getFieldsValue()),{},{patientId:e,treatmentDynamics:I,recipeList:w});(0,l.si)(n)},D=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(!0),setTimeout((function(){o(!1)}),1e3),!(n=f.getFieldsValue().patientId)){e.next=7;break}t=n,e.next=10;break;case 7:return e.next=9,(0,l.$M)();case 9:t=e.sent;case 10:t&&Promise.all([F(t),S(t),P(t),C(t),N(t)]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{handleSave:D,isLoading:t}}},961:function(e,n,t){t.r(n);var r=t(2791),a=t(1041),i=t(5953),s=t(9389),o=t(9555),u=t(2014),l=t(9367),c=t(2706),d=t(3722),p=t(667),m=t(3052),f=t(1244),Z=t(184),h=["0-6","6-12","12-24","24+"];function x(){var e=(0,m.b)().personInfoForm,n=(0,f.o)((function(e){return e.onFieldsChange}));return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(p.Z,{}),(0,Z.jsxs)(d.M,{columns:["1","2"],p:"2",my:"2",boxShadow:"xl",bg:"pink.50",borderRadius:"15px",children:[(0,Z.jsxs)(a.Z,{form:e,labelWrap:!0,labelAlign:"right",labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},initialValues:{gender:"Female"},onFieldsChange:n,children:[(0,Z.jsx)(a.Z.Item,{label:"Birth date",name:"birthDate",children:(0,Z.jsx)(i.Z,{allowClear:!0})}),(0,Z.jsx)(a.Z.Item,{label:"Birth place",name:"birthPlace",children:(0,Z.jsx)(s.Z,{})}),(0,Z.jsx)(a.Z.Item,{name:"phoneNumber",label:"Phone Number",children:(0,Z.jsx)(s.Z,{type:"number"})}),(0,Z.jsx)(a.Z.Item,{label:"Sex",name:"gender",children:(0,Z.jsxs)(o.Z,{allowClear:!0,children:[(0,Z.jsx)(o.Z.Option,{value:"Female",children:"Female"}),(0,Z.jsx)(o.Z.Option,{value:"Male",children:"Male"})]})}),(0,Z.jsx)(a.Z.Item,{label:"Marital status",name:"maritalStatus",children:(0,Z.jsxs)(o.Z,{allowClear:!0,children:[(0,Z.jsx)(o.Z.Option,{value:"Single",children:"Single"}),(0,Z.jsx)(o.Z.Option,{value:"Married",children:"Married"}),(0,Z.jsx)(o.Z.Option,{value:"Divorced",children:"Divorced"})]})}),(0,Z.jsx)(a.Z.Item,{label:"Sex status",name:"sexStatus",children:(0,Z.jsxs)(o.Z,{allowClear:!0,children:[(0,Z.jsx)(o.Z.Option,{value:"Regular",children:"Regular"}),(0,Z.jsx)(o.Z.Option,{value:"Irregular",children:"Irregular"})]})}),(0,Z.jsx)(a.Z.Item,{valuePropName:"checked",label:"Alcohol",name:"alkogol",children:(0,Z.jsx)(u.Z,{})}),(0,Z.jsx)(a.Z.Item,{valuePropName:"checked",label:"Smoking ",name:"smoke",children:(0,Z.jsx)(u.Z,{})}),(0,Z.jsx)(a.Z.Item,{label:"Recommendation person",name:"recommendationPerson",children:(0,Z.jsx)(s.Z,{allowClear:!0})}),(0,Z.jsx)(a.Z.Item,{label:"Raiting",name:"raiting",children:(0,Z.jsx)(l.Z,{})}),(0,Z.jsx)(a.Z.Item,{label:"Height",name:"height",children:(0,Z.jsx)(c.Z,{min:0,defaultValue:0})}),(0,Z.jsx)(a.Z.Item,{label:"Weight",name:"weight",children:(0,Z.jsx)(c.Z,{min:0,defaultValue:0})}),(0,Z.jsx)(a.Z.Item,{label:"IMT",name:"imt",children:(0,Z.jsx)(c.Z,{min:0,defaultValue:0})})]}),(0,Z.jsx)(a.Z,{form:e,labelAlign:"right",labelCol:{span:8},wrapperCol:{span:16},labelWrap:!0,style:{maxWidth:600},onFieldsChange:n,children:(0,Z.jsx)(a.Z.Item,{noStyle:!0,shouldUpdate:function(e,n){return e.gender!==n.gender},children:function(e){return"Female"===(0,e.getFieldValue)("gender")?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(a.Z.Item,{label:"A cure for infertility",name:"cureForInfertility",children:(0,Z.jsx)(s.Z,{})}),(0,Z.jsx)(a.Z.Item,{label:"Menopause",name:"menopause",children:(0,Z.jsx)(s.Z,{})}),(0,Z.jsx)(a.Z.Item,{label:"Menarche",name:"menarxe",children:(0,Z.jsx)(s.Z,{})}),(0,Z.jsx)(a.Z.Item,{label:"Age of first childbirth",name:"firstChildbirth",children:(0,Z.jsx)(c.Z,{min:10,max:60,defaultValue:0})}),(0,Z.jsx)(a.Z.Item,{label:"Age of last childbirth",name:"lastChildbirth",children:(0,Z.jsx)(c.Z,{min:10,max:60,defaultValue:0})}),(0,Z.jsx)(a.Z.Item,{label:"Number of abortions",name:"abortCount",children:(0,Z.jsx)(c.Z,{min:0,defaultValue:0})}),(0,Z.jsx)(a.Z.Item,{label:"Breastfeeding period",name:"lactationPeriod",children:(0,Z.jsx)(o.Z,{allowClear:!0,children:h.map((function(e){return(0,Z.jsx)(o.Z.Option,{value:e,children:e},e)}))})}),(0,Z.jsx)(a.Z.Item,{label:"Number of artificial inseminations",name:"artificialInseminationCount",children:(0,Z.jsx)(c.Z,{min:0,defaultValue:0})})]}):null}})})]})]})}n.default=(0,r.memo)(x)}}]);
//# sourceMappingURL=961.636db883.chunk.js.map