(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{219:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({});t.a=r},225:function(e,t,a){"use strict";var n=a(42);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(45)).default)(r.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=o},238:function(e,t,a){"use strict";var n=a(42);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(45)).default)(r.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zm3.17-7.83c.39-.39 1.02-.39 1.41 0L12 12.59l1.42-1.42c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 14l1.42 1.42c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L12 15.41l-1.42 1.42c-.39.39-1.02.39-1.41 0a.9959.9959 0 010-1.41L10.59 14l-1.42-1.42c-.39-.38-.39-1.02 0-1.41zM15.5 4l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"}),"DeleteForeverRounded");t.default=o},239:function(e,t,a){"use strict";var E=a(1),O=a(3),n=a(0),j=a.n(n),x=(a(8),a(5)),y=a(82),C=a(208),r=a(7),k=a(219),o=j.a.forwardRef(function(e,t){var a=e.children,n=e.classes,r=e.className,o=e.expandIcon,c=e.IconButtonProps,i=e.onBlur,l=e.onClick,d=e.onFocusVisible,s=Object(O.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),u=j.a.useState(!1),m=u[0],p=u[1],f=j.a.useContext(k.a),b=f.disabled,h=void 0!==b&&b,v=f.expanded,g=f.toggle;return j.a.createElement(y.a,Object(E.a)({focusRipple:!1,disableRipple:!0,disabled:h,component:"div","aria-expanded":v,className:Object(x.a)(n.root,r,h&&n.disabled,v&&n.expanded,m&&n.focused),onFocusVisible:function(e){p(!0),d&&d(e)},onBlur:function(e){p(!1),i&&i(e)},onClick:function(e){g&&g(e),l&&l(e)},ref:t},s),j.a.createElement("div",{className:Object(x.a)(n.content,v&&n.expanded)},a),o&&j.a.createElement(C.a,Object(E.a)({className:Object(x.a)(n.expandIcon,v&&n.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},c),o))});t.a=Object(r.a)(function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:"0 24px 0 24px","&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.grey[300]},"&$disabled":{opacity:.38}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}},{name:"MuiExpansionPanelSummary"})(o)},240:function(e,t,a){"use strict";var o=a(1),c=a(3),n=a(0),i=a.n(n),l=(a(8),a(5)),r=a(7),d=i.a.forwardRef(function(e,t){var a=e.classes,n=e.className,r=Object(c.a)(e,["classes","className"]);return i.a.createElement("div",Object(o.a)({className:Object(l.a)(a.root,n),ref:t},r))});t.a=Object(r.a)({root:{display:"flex",padding:"8px 24px 24px"}},{name:"MuiExpansionPanelDetails"})(d)},241:function(e,t,a){"use strict";var n=a(42);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(45)).default)(r.default.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=o},242:function(e,t,a){"use strict";var n=a(42);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(45)).default)(r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=o},243:function(e,t,a){"use strict";var B=a(1),w=a(87),I=a(89),S=a(88);var P=a(53),D=a(3),n=a(0),M=a.n(n),L=(a(46),a(8),a(5)),C=a(173),r=a(7),k=a(54),N=a(61),R=a(57),o=M.a.forwardRef(function(e,a){var n=e.children,r=e.classes,o=e.className,t=e.collapsedHeight,c=void 0===t?"0px":t,i=e.component,l=void 0===i?"div":i,d=e.in,s=e.onEnter,u=e.onEntered,m=e.onEntering,p=e.onExit,f=e.onExiting,b=e.style,h=e.timeout,v=void 0===h?k.b.standard:h,g=Object(D.a)(e,["children","classes","className","collapsedHeight","component","in","onEnter","onEntered","onEntering","onExit","onExiting","style","timeout"]),E=Object(R.a)(),O=M.a.useRef(),j=M.a.useRef(null),x=M.a.useRef(),y="number"==typeof c?"".concat(c,"px"):c;M.a.useEffect(function(){return function(){clearTimeout(O.current)}},[]);return M.a.createElement(C.a,Object(B.a)({in:d,onEnter:function(e,t){e.style.height=y,s&&s(e,t)},onEntered:function(e,t){e.style.height="auto",u&&u(e,t)},onEntering:function(e,t){var a=j.current?j.current.clientHeight:0,n=Object(N.a)({style:b,timeout:v},{mode:"enter"}).duration;if("auto"===v){var r=E.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(r,"ms"),x.current=r}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height="".concat(a,"px"),m&&m(e,t)},onExit:function(e){var t=j.current?j.current.clientHeight:0;e.style.height="".concat(t,"px"),p&&p(e)},onExiting:function(e){var t=j.current?j.current.clientHeight:0,a=Object(N.a)({style:b,timeout:v},{mode:"exit"}).duration;if("auto"===v){var n=E.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),x.current=n}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style.height=y,f&&f(e)},addEndListener:function(e,t){"auto"===v&&(O.current=setTimeout(t,x.current||0))},timeout:"auto"===v?null:v},g),function(e,t){return M.a.createElement(l,Object(B.a)({className:Object(L.a)(r.container,o,{entered:r.entered,exited:!d&&"0px"===y&&r.hidden}[e]),style:Object(B.a)({minHeight:y},b),ref:a},t),M.a.createElement("div",{className:r.wrapper,ref:j},M.a.createElement("div",{className:r.wrapperInner},n)))})});o.muiSupportAuto=!0;var H=Object(r.a)(function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}},{name:"MuiCollapse"})(o),T=a(204),$=a(219),F=a(85),c=M.a.forwardRef(function(e,t){var a,n=e.children,r=e.classes,o=e.className,c=e.defaultExpanded,i=void 0!==c&&c,l=e.disabled,d=void 0!==l&&l,s=e.expanded,u=e.onChange,m=e.square,p=void 0!==m&&m,f=e.TransitionComponent,b=void 0===f?H:f,h=e.TransitionProps,v=Object(D.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),g=Object(F.a)({controlled:s,default:i,name:"ExpansionPanel"}),E=Object(P.a)(g,2),O=E[0],j=E[1],x=M.a.useCallback(function(e){j(!O),u&&u(e,!O)},[O,u,j]),y=M.a.Children.toArray(n),C=(a=y,Object(w.a)(a)||Object(I.a)(a)||Object(S.a)()),k=C[0],N=C.slice(1),R=M.a.useMemo(function(){return{expanded:O,disabled:d,toggle:x}},[O,d,x]);return M.a.createElement(T.a,Object(B.a)({className:Object(L.a)(r.root,o,O&&r.expanded,d&&r.disabled,!p&&r.rounded),ref:t,square:p},v),M.a.createElement($.a.Provider,{value:R},k),M.a.createElement(b,Object(B.a)({in:O,timeout:"auto"},h),M.a.createElement("div",{"aria-labelledby":k.props.id,id:k.props["aria-controls"],role:"region"},N)))});t.a=Object(r.a)(function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}},{name:"MuiExpansionPanel"})(c)},253:function(e,t,a){"use strict";a.r(t);function u(){var e=Object(k.c)(function(e){return e.order.sortBy}),t=Object(k.c)(function(e){return e.order.orderSearchDate}),a=Object(y.useState)(!1),n=Object(D.a)(a,2),r=n[0],o=n[1],c=Object(y.useState)(e),i=Object(D.a)(c,2),l=i[0],d=i[1],s=Object(y.useRef)(null),u=Object(y.useState)(0),m=Object(D.a)(u,2),p=m[0],f=m[1],b=Object(N.b)().t,h=Object(k.b)(),v=Object(y.useCallback)(function(e){return h(R.gb(e))},[]),g=Object(y.useCallback)(function(e){return h(R.fb(e))},[]),E=[M.SearchBar,M.Close];r&&(E=[M.SearchBar,M.Open]),Object(y.useEffect)(function(){f(s.current.offsetWidth)},[]);var O=C.a.createElement(B.a,{title:b("searchOrder","Search order")},C.a.createElement(H.a,{onClick:function(){o(!0)}})),j=C.a.createElement(B.a,{title:b("closeSearchBar","Close search bar")},C.a.createElement(T.a,{onClick:function(){document.getElementById("date").value="",g(""),o(!1)}})),x=O;return r&&(x=j),C.a.createElement("div",{className:E.join(" ")},C.a.createElement("div",{className:M.SortBy},C.a.createElement(_.a,{variant:"outlined",className:M.formControl},C.a.createElement($.a,{ref:s,id:"demo-simple-select-outlined-label"},b("sortBy","Sort by")),C.a.createElement(z.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:l,onChange:function(e){return d((t=e).target.value),void v(t.target.value);var t},labelWidth:p},C.a.createElement(F.a,{value:"date"},b("date","Date")),C.a.createElement(F.a,{value:"price"},b("price","Price"))))),C.a.createElement("div",null,C.a.createElement(L.a,{id:"date",label:b("orderDate","Order date"),type:"date",defaultValue:t,onChange:function(e){return g(e.target.value)},className:M.textField,variant:"outlined",InputLabelProps:{shrink:!0}})),x)}var y=a(0),C=a.n(y),k=a(9),N=a(16),R=a(4),s=a.p+"static/media/Order.7f6db0a0.css",m=a(62),p=a(63),f=a(64),b=a(65),h=a(203),B=a(199),n=a(238),v=a.n(n),g=a(171),E=a(206),O=a(207),j=a(243),x=a(239),w=a(240),r=a(225),I=a.n(r),S=Object(y.memo)(function(n){var t=Object(k.c)(function(e){return e.auth.idToken}),a=Object(k.b)(),r=Object(y.useCallback)(function(e){return a(R.C(e,t))}),o=Object(N.b)().t,c={salad:m.a,bacon:p.a,cheese:f.a,meat:b.a},e=[];for(var i in n.ingredients)e.push({name:i,amount:n.ingredients[i]});var l=e.map(function(e){return 0<e.amount?C.a.createElement("div",{style:{display:"inline-block",margin:"0 4px",border:"0px",padding:"4px"},key:e.name},C.a.createElement(g.a,null,C.a.createElement(E.a,null,C.a.createElement(h.a,{classes:{root:s.iconRoot}},C.a.createElement("img",{className:s.imageIcon,alt:"icon",src:c[e.name]}))),C.a.createElement(O.a,{primary:o(e.name),secondary:"".concat(e.amount," ").concat(o("pc(s)","pc(s)"))}))):""}),d=C.a.createElement(B.a,{title:o("cancelOrder","Cancel order")},C.a.createElement(h.a,{style:{color:"red"},onClick:function(e){return t=e,a=n.orderId,t.stopPropagation(),void r(a);var t,a}},C.a.createElement(v.a,null)));return C.a.createElement("div",{className:s.Order},C.a.createElement(j.a,null,C.a.createElement(x.a,{className:s.OrderDetails,expandIcon:C.a.createElement(I.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},C.a.createElement("div",null,C.a.createElement("p",null,o("orderDate","Order date"),": ",C.a.createElement("strong",null,n.orderDate)),C.a.createElement("p",null,o("totalPrice","Total price"),": ",C.a.createElement("strong",null,Number.parseFloat(n.price).toFixed(2)," ",n.currency)),d)),C.a.createElement(w.a,null,C.a.createElement("div",{className:s.Ingredients},l))))}),P=a(56),D=a(29),M=a.p+"static/media/OrderSearchBar.73aceb00.css",L=a(257),o=a(241),H=a.n(o),c=a(242),T=a.n(c),$=a(258),F=a(211),_=a(251),z=a(254),i=a(21),l=a(90),V=a.p+"static/media/Orders.8f02a47b.css";t.default=Object(l.a)(function(e){var t=Object(k.c)(function(e){return e.order.orders}),a=Object(k.c)(function(e){return e.order.orderSearchDate}),n=Object(k.c)(function(e){return e.order.sortBy}),r=Object(k.c)(function(e){return e.order.error}),o=Object(k.c)(function(e){return e.auth.idToken}),c=Object(k.c)(function(e){return e.auth.userId}),i=Object(k.b)(),l=Object(y.useCallback)(function(e,t,a,n){return i(R.O(e,t,a,n))},[]),d=Object(y.useCallback)(function(){return i(R.L())},[]);Object(y.useEffect)(function(){d(),l(o,c,a,n)},[l,a,n]);var s=r?C.a.createElement("p",null,"Orders can't be loaded"):" ";return e.loading&&(s=C.a.createElement(P.a,null)),t&&(s=C.a.createElement("div",null,t.map(function(e){return C.a.createElement(S,{key:e.id,orderId:e.id,ingredients:e.ingredients,price:e.price,currency:e.currency,orderDate:e.date})}))),C.a.createElement(y.Fragment,null,C.a.createElement(u,null),C.a.createElement("div",{className:V.Orders},s))},i.a)}}]);