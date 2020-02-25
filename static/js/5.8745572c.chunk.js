(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{217:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a.p+"static/media/Input.577edfec.css",l=a(257),i=a(254);t.a=function(e){var t=null,a=null,n=[c.InputElement];switch(!e.valid&&e.validate&&e.touched&&(n.push(c.Error),a=e.validationError),e.elementType){case"input":t=r.a.createElement(l.a,{error:null!==a,id:"outlined-error-helper-text",label:e.name,variant:"outlined",helperText:a,className:n.join(" "),type:e.elementConfig.type,placeholder:e.elementConfig.placeholder,name:e.name,value:e.value,onChange:e.changed});break;case"textarea":t=r.a.createElement("textarea",{className:n.join(" "),type:e.elementConfig.type,placeholder:e.elementConfig.placeholder,name:e.name,value:e.value,onChange:e.changed});break;case"select":t=r.a.createElement(i.a,{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",{className:n.join(" "),type:e.elementConfig.type,placeholder:e.elementConfig.placeholder,name:e.name,value:e.value,onChanged:e.changed})}return r.a.createElement("div",{className:c.Input},r.a.createElement("label",{className:c.Label},e.label),t)}},236:function(e,t,a){"use strict";var i=a(1),o=a(3),n=a(0),u=a.n(n),d=(a(8),a(5)),s=a(204),r=a(7),c=u.a.forwardRef(function(e,t){var a=e.classes,n=e.className,r=e.raised,c=void 0!==r&&r,l=Object(o.a)(e,["classes","className","raised"]);return u.a.createElement(s.a,Object(i.a)({className:Object(d.a)(a.root,n),elevation:c?8:1,ref:t},l))});t.a=Object(r.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(c)},237:function(e,t,a){"use strict";var i=a(1),o=a(3),n=a(0),u=a.n(n),d=(a(8),a(5)),r=a(7),c=u.a.forwardRef(function(e,t){var a=e.classes,n=e.className,r=e.component,c=void 0===r?"div":r,l=Object(o.a)(e,["classes","className","component"]);return u.a.createElement(c,Object(i.a)({className:Object(d.a)(a.root,n),ref:t},l))});t.a=Object(r.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},255:function(e,t,a){"use strict";a.r(t);var C=a(0),y=a.n(C),k=a(9),u=a(41),n=a(16),r=a(104),c=a.p+"static/media/CheckoutSummary.134ce0b5.css",N=a(205),d=Object(u.o)(function(e){var t=Object(n.b)().t;return y.a.createElement("div",{className:c.CheckoutSummary},y.a.createElement("div",{style:{width:"100%",margin:"auto"}},y.a.createElement(r.a,{ingredients:e.ingredients}),y.a.createElement(N.a,{disableElevation:!0,onClick:e.continueCheckout,variant:"contained"},t("proceed","Proceed")),y.a.createElement("div",{className:c.Divider}),y.a.createElement(N.a,{disableElevation:!0,onClick:e.cancelCheckout,variant:"contained"},t("cancel","Cancel"))))}),w=a(52),T=a(29),x=a(56),D=a(217),l=a(90),S=a(6),i=a(21),B=a(4),I=a.p+"static/media/ContactData.524d21fe.css",L=a(236),q=a(237),Y=a(214),M=a(212),s=Object(l.a)(Object(u.o)(function(){var e=Object(C.useState)({name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your name"},value:"",validation:{required:!0,minLength:5,error:""},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your street"},value:"",validation:{required:!0,minLength:5,error:""},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Your zip code"},value:"",validation:{required:!0,minLength:4,maxLength:5,error:""},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your email"},value:"",validation:{required:!0,contains:"@",error:""},valid:!1,touched:!1}}),t=Object(T.a)(e,2),l=t[0],i=t[1],o=Object(k.c)(function(e){return e.burgerBuilder.ingredients}),u=Object(k.c)(function(e){return e.burgerBuilder.totalPrice}),a=Object(k.c)(function(e){return e.order.loading}),d=Object(k.c)(function(e){return e.auth.idToken}),s=Object(k.c)(function(e){return e.auth.userId}),m=Object(k.c)(function(e){return e.settings.settings.currency}),n=Object(k.c)(function(e){return e.settings.settings.theme}),r=[I.Title,I[n]],v=Object(k.b)();function c(e,t){"clickaway"!==t&&g(!1)}function f(e){e.preventDefault();var t={};for(var a in l)t[a]=l[a].value;var n,r,c={ingredients:o,price:u.toFixed(2),currency:m,orderData:t,userId:s,date:(new Date).toDateString()};n=c,r=d,v(B.bb(n,r)),g(!0),v(B.M())}var p=Object(C.useState)(!1),b=Object(T.a)(p,2),h=b[0],g=b[1],j=y.a.createElement(Y.a,{open:h,autoHideDuration:2e3,onClose:c},y.a.createElement(function(e){return y.a.createElement(M.a,Object.assign({elevation:6,variant:"filled"},e))},{onClose:c,severity:"success"},"Order successfully confirmed")),E=function(){var e=!0;for(var t in l)l[t].valid||(e=!1);return e}(),O=y.a.createElement("form",{onSubmit:f},Object.keys(l).map(function(c){var e=l[c];return y.a.createElement(D.a,{className:I.Input,key:c,elementType:e.elementType,id:"outlined-basic",variant:"outlined",elementConfig:e.elementConfig,name:c,value:e.value,changed:function(e){return t=e,a=c,n=Object(S.a)(l[a],{value:t.target.value,valid:Object(S.b)(t.target.value,l[a].validation).result,error:Object(S.b)(t.target.value,l[a].validation).reason,touched:!0}),r=Object(S.a)(l,Object(w.a)({},a,n)),void i(r);var t,a,n,r},valid:e.valid,validate:e.validation,validationError:e.error,touched:e.touched})}),y.a.createElement(N.a,{disableElevation:!0,className:I.OrderButton,disabled:!E,onClick:f,variant:"contained"},"Confirm order"));return a&&(O=y.a.createElement(x.a,null)),y.a.createElement("div",{className:I.ContactData},y.a.createElement("div",{className:r.join(" ")},"Enter your contact details"),y.a.createElement(L.a,{className:I.Card},y.a.createElement(q.a,null,O)),j)}),i.a);t.default=function(e){function t(){return c(B.Q())}var a=Object(k.c)(function(e){return e.burgerBuilder.ingredients}),n=Object(k.c)(function(e){return e.order.orderSuccessful}),r=Object(u.k)(),c=Object(k.b)(),l=Object(C.useCallback)(function(){return c(B.D())},[]);Object(C.useEffect)(function(){l(),t()},[t]);var i=y.a.createElement(u.c,{to:"/"});if(a){var o=n?y.a.createElement(u.c,{to:"/"}):"";i=y.a.createElement("div",null,o,y.a.createElement(d,{ingredients:a,cancelCheckout:function(){return r.goBack()},continueCheckout:function(){return r.replace("/checkout/contact-data")}}),y.a.createElement(u.d,{path:e.match.url+"/contact-data",render:function(){return y.a.createElement(s,null)}}))}return i}}}]);