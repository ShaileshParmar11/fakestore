(this["webpackJsonpshoping-cart"]=this["webpackJsonpshoping-cart"]||[]).push([[0],{46:function(e,t,a){},64:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(10),c=a.n(r),i=(a(64),a(16)),s=a(48),o=a(40),d=a.n(o),j=a(49),l=a(20),u=a(107),h=a(108),b=a(109),m=a(104),O=a(101),x=a(102),p=a(97),f=a(99),g=a(103),v=a(56),y=a.n(v),C=a(110),N=a(100),Q=a(92),_=a(95),w=a(96),S=a(98),k=a(53),B=a.n(k),D=a(54),F=a.n(D),P=a(55),T=a.n(P),I=a(2);var W=function(e){e.cartId;var t=e.item,a=e.increaseQty,n=e.decreaseQty,r=t.id,c=t.itemQty,i=t.itemName,s=t.image,o=t.price;return Object(I.jsxs)(Q.a,{className:"ShoppingCartCard_root",children:[Object(I.jsx)(_.a,{image:s,className:"ShoppingCartCard_image"}),Object(I.jsxs)("div",{className:"ShoppingCartCard_details",children:[Object(I.jsxs)(w.a,{children:[Object(I.jsx)(p.a,{variant:"body1",children:i}),Object(I.jsx)(p.a,{gutterBottom:!0,variant:"h5",children:Object(I.jsxs)("strong",{children:["Price: $",o*c]})})]}),Object(I.jsxs)(S.a,{className:"ShoppingCartCard_buttoncontainer",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)(f.a,{onClick:function(){return a(r)},children:Object(I.jsx)(B.a,{})}),Object(I.jsx)("span",{children:c}),Object(I.jsx)(f.a,{onClick:function(){return n(r,c,!1)},children:Object(I.jsx)(F.a,{})})]}),Object(I.jsx)(f.a,{"aria-label":"delete",onClick:function(){return n(r,c,!0)},children:Object(I.jsx)(T.a,{})})]})]})]})};a(46);var A=function(e){var t=e.sideDrawer,a=e.handleDrawer,n=e.cart,r=e.increaseQty,c=e.decreaseQty;return Object(I.jsx)(C.a,{anchor:"right",open:t,onClose:function(){return a(!1)},children:Object(I.jsx)("div",{className:"shoppingCartCard_Container",children:n.length?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{className:"shoppingCartTotal",children:[Object(I.jsx)(p.a,{variant:"h5",children:"Total"}),Object(I.jsxs)(p.a,{variant:"h5",children:["$",n.reduce((function(e,t){return e+t.price*t.itemQty}),0).toFixed(2)]})]}),Object(I.jsx)(N.a,{}),n.map((function(e,t){return Object(I.jsx)(W,{cartId:t,item:e,increaseQty:r,decreaseQty:c},t)}))]}):Object(I.jsx)("div",{className:"noCartItem_container",children:Object(I.jsx)(p.a,{variant:"h6",color:"textSecondary",children:"No Item Added to The Cart"})})})})};var L=function(e){var t=e.sideDrawer,a=e.handleDrawer,n=e.cart,r=e.increaseQty,c=e.decreaseQty;return Object(I.jsxs)(O.a,{position:"sticky",elevation:0,children:[Object(I.jsxs)(x.a,{className:"header_menuBar",children:[Object(I.jsx)(p.a,{variant:"h6",color:"textSecondary",children:"Fake Store"}),Object(I.jsx)(f.a,{"aria-label":"add to shopping cart",onClick:function(){return a(!0)},children:Object(I.jsx)(g.a,{badgeContent:n.reduce((function(e,t){return e+t.itemQty}),0),color:"secondary",children:Object(I.jsx)(y.a,{})})})]}),Object(I.jsx)(A,{cart:n,sideDrawer:t,handleDrawer:a,increaseQty:r,decreaseQty:c})]})},$=a(57);var E=function(){return Object(I.jsxs)($.a,{className:"coverPost",children:[Object(I.jsx)(m.a,{container:!0,className:"coverPost_containt",children:Object(I.jsx)(m.a,{item:!0,md:6,children:Object(I.jsxs)("div",{children:[Object(I.jsx)(p.a,{className:"fontWhite coverPost_heading",component:"h1",variant:"h3",gutterBottom:!0,children:"Big Billion Days are Comming."}),Object(I.jsx)(p.a,{className:"fontWhite",variant:"h5",gutterBottom:!0,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto rem corrupti ullam. Molestias esse eum illum numquam ab"})]})})}),Object(I.jsx)("div",{className:"coverPost_Overlay"})]})},J=a(105),M=a(106);function q(e){var t,a,n=e.item,r=e.addToCart,c=n.category,i=n.description,s=n.image,o=n.price,d=n.title;return Object(I.jsxs)(Q.a,{className:"mediaCard_root",children:[Object(I.jsxs)(J.a,{style:{flexGrow:3},className:"mediaCard_body",children:[Object(I.jsx)(_.a,{className:"MediaCard_image",image:s}),Object(I.jsxs)(w.a,{className:"mediaCard_body",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)(p.a,{gutterBottom:!0,variant:"h5",children:d}),Object(I.jsx)(p.a,{variant:"caption",children:c})]}),Object(I.jsx)(p.a,{variant:"body2",color:"textSecondary",component:"p",children:(t=i,a=200,t.substring(0,a).concat("..."))}),Object(I.jsx)(p.a,{gutterBottom:!0,variant:"h5",children:Object(I.jsxs)("strong",{children:["Price: $",o]})})]})]}),Object(I.jsx)(S.a,{children:Object(I.jsx)(M.a,{size:"small",color:"primary",className:"mediaCard_button",onClick:function(){return r(n)},children:"Add To Cart"})})]})}var z=new Date;var G=function(){return Object(I.jsx)("footer",{children:Object(I.jsxs)(p.a,{variant:"subtitle1",align:"center",color:"textSecondary",children:[Object(I.jsx)("span",{children:"\xa9"})," Copyright ",z.getFullYear()," By Fake Store."]})})};var Y=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(l.a)(c,2),O=o[0],x=o[1],p=Object(n.useState)({loading:!1,data:[]}),f=Object(l.a)(p,2),g=f[0],v=f[1];Object(n.useEffect)((function(){v({loading:!0,data:[]});fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then(function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v({loading:!1,data:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),v({loading:!1,data:[]})}))}),[v]);var y=function(e,t,a){return e.id===t&&("add"===a?e.itemQty+=1:"remove"===a&&(e.itemQty-=1)),e},C=function(e){var t=e.id,a=e.title,n=e.image,r=e.price;!function(e){var t,a=!1,n=Object(s.a)(O);try{for(n.s();!(t=n.n()).done;)if(e===t.value.id){a=!0;break}}catch(r){n.e(r)}finally{n.f()}return a}(t)?x([].concat(Object(i.a)(O),[{id:t,itemQty:1,itemName:a,image:n,price:r}])):x(O.map((function(e){return y(e,t,"add")})))};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(u.a,{}),Object(I.jsxs)(h.a,{maxWidth:"lg",children:[Object(I.jsx)(L,{cart:O,sideDrawer:a,handleDrawer:function(e){r(e)},increaseQty:function(e){x(O.map((function(t){return y(t,e,"add")})))},decreaseQty:function(e,t,a){x(1===t||a?O.filter((function(t){return t.id!==e})):O.map((function(t){return y(t,e,"remove")})))}}),Object(I.jsxs)("main",{children:[Object(I.jsx)(E,{}),g.loading&&Object(I.jsx)(b.a,{}),Object(I.jsx)(h.a,{maxWidth:"lg",className:"data_container",children:Object(I.jsx)(m.a,{container:!0,spacing:4,children:g.data.map((function(e){return Object(I.jsx)(m.a,{item:!0,xs:12,sm:6,md:4,children:Object(I.jsx)(q,{item:e,addToCart:C})},e.id)}))})})]}),Object(I.jsx)(G,{})]})]})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,111)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};c.a.render(Object(I.jsx)(Y,{}),document.getElementById("root")),H()}},[[72,1,2]]]);
//# sourceMappingURL=main.1482b31f.chunk.js.map