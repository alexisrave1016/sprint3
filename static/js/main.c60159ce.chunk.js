(this.webpackJsonpsprint3=this.webpackJsonpsprint3||[]).push([[0],{73:function(e,c,t){},74:function(e,c,t){},75:function(e,c,t){},76:function(e,c,t){},77:function(e,c,t){},78:function(e,c,t){},91:function(e,c,t){},96:function(e,c,t){"use strict";t.r(c);var a=t(3),n=t(41),s=t.n(n),o=(t(73),t(74),t(75),t(76),t(77),t(78),t(15)),r=t(24),i=t(28),l=t(20),d=t(4);var j=function(){return Object(d.jsx)("div",{className:"home",children:Object(d.jsx)("img",{className:"imagen1",src:"https://res.cloudinary.com/dd01p9lb9/image/upload/v1632628274/sprint3/camara_vwkiia.jpg",alt:"",srcset:""})})},b=t(6),u=t(23),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=Object(a.useState)(e),t=Object(o.a)(c,2),n=t[0],s=t[1],r=function(){s(e)},i=function(e){var c=e.target;s(Object(u.a)(Object(u.a)({},n),{},Object(b.a)({},c.name,c.value)))};return[n,i,r]},p=t(31),h="login",O="logout",x="register",v="registro",g="listar",f="eliminar",N=t(59),_=t(52),y=t(60),C=(Object(N.a)({apiKey:"AIzaSyBZpSVXbHvL8bq_XQyKl2xgitv3TOGdu0s",authDomain:"loginsprint3.firebaseapp.com",projectId:"loginsprint3",storageBucket:"loginsprint3.appspot.com",messagingSenderId:"1080040605487",appId:"1:1080040605487:web:0f0d26bf4d0e774c4103da"}),new _.b),w=Object(y.a)(),A=new _.a,k=function(e,c){return function(t){var a=Object(r.d)();Object(r.f)(a,e,c).then((function(e){var c=e.user;t(z(c.uid,c.displayName)),console.log("bienevenido se\xf1or usuario")})).catch((function(e){console.log("el usuario no existe")}))}},z=function(e,c){return{type:h,payload:{id:e,displayname:c}}},S=function(){return{type:O}};var D=function(e){var c=e.history,t=Object(p.b)(),a=m({email:"",password:""}),n=Object(o.a)(a,2),s=n[0],l=n[1],j=s.email,b=s.password;return Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)(i.b,{to:"/portada",children:Object(d.jsx)("img",{className:"login_logo",src:"https://res.cloudinary.com/dd01p9lb9/image/upload/v1632590351/sprint3/Amazon-Logo_xzuxyg.png",alt:"",srcset:""})}),Object(d.jsxs)("div",{className:"login_container",children:[Object(d.jsx)("h1",{children:"Iniciar sesi\xf3n"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(k(j,b)),c.replace("/")},children:[Object(d.jsx)("h5",{children:"Email"}),Object(d.jsx)("input",{className:"texto",type:"email",name:"email",value:j,onChange:l}),Object(d.jsx)("h5",{children:"Password"}),Object(d.jsx)("input",{className:"texto",type:"password",name:"password",value:b,onChange:l}),Object(d.jsx)("button",{type:"submit",variant:"primary",className:"login_button",children:"Continuar"})]}),Object(d.jsxs)("button",{className:"login_google",onClick:function(){t((function(e){var c=Object(r.d)();Object(r.g)(c,C).then((function(c){var t=c.user;e(z(t.uid,t.displayName))})).catch((function(e){return console.log(e)}))})),c.replace("/")},children:[Object(d.jsx)("img",{className:"logo_google",src:"https://res.cloudinary.com/dd01p9lb9/image/upload/v1632601095/sprint3/google-logo_cqfi6y.png",alt:"",srcset:""})," Sign In Google"]}),Object(d.jsxs)("button",{className:"login_facebook",onClick:function(){t((function(e){var c=Object(r.d)();Object(r.g)(c,A).then((function(c){var t=c.user;e(z(t.uid,t.displayName))})).catch((function(e){return console.log(e)}))})),c.replace("/")},children:[Object(d.jsx)("img",{className:"logo_face",src:"https://res.cloudinary.com/dd01p9lb9/image/upload/v1633317615/social-facebook-button-blue-icon_cqwfbz.png",alt:"no disponible",srcset:""}),"Sign In Facebook"]}),Object(d.jsx)("p",{children:"Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Amazon."})]}),Object(d.jsx)("hr",{className:"linea"})," ",Object(d.jsx)("span",{className:"title_nuevo_amazon",children:"\xbfEres nuevo en Amazon?"}),Object(d.jsx)("button",{className:"login_registro",children:Object(d.jsx)(i.b,{to:"/registro",className:"linkRegistro",children:"Crea tu cuenta de Amazon"})})]})},E=t(109),I=t(110),P=t(0),T=t.n(P),G=t(1),F=function(e,c,t){return{type:x,payload:{email:e,password:c,name:t}}},L=function(){var e=Object(p.b)(),c=m({nombre:"",email:"",pass1:"",pass2:""}),t=Object(o.a)(c,2),a=t[0],n=t[1],s=a.nombre,l=a.email,j=a.pass1,b=a.pass2;return Object(d.jsx)("div",{className:"registro",children:Object(d.jsxs)(E.a,{onSubmit:function(c){c.preventDefault(),e(function(e,c,t){return function(a){var n=Object(r.d)();Object(r.c)(n,e,c).then(function(){var e=Object(G.a)(T.a.mark((function e(c){var s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.user,e.next=3,Object(r.i)(n.currentUser,{displayName:t});case 3:a(F(s.email,s.uid,s.displayName));case 4:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}}(l,j,s))},className:"container_registro",children:[Object(d.jsxs)(i.b,{to:"/portada",children:["  ",Object(d.jsx)("img",{className:"login_logo",src:"https://res.cloudinary.com/dd01p9lb9/image/upload/v1632590351/sprint3/Amazon-Logo_xzuxyg.png",alt:"no disponible",srcset:""})]}),Object(d.jsxs)("div",{className:"registro_contianer",children:[Object(d.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(d.jsx)("h5",{className:"titulos",children:"Tu nombre"}),Object(d.jsx)(E.a.Control,{className:"registro_casillas",type:"text",name:"nombre",value:s,onChange:n})]}),Object(d.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(d.jsx)("h5",{className:"titulos",children:"Correo electronico"}),Object(d.jsx)(E.a.Control,{className:"registro_casillas",type:"email",name:"email",value:l,onChange:n})]}),Object(d.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(d.jsx)("h5",{className:"titulos",children:"Contrase\xf1a"}),Object(d.jsx)(E.a.Control,{className:"registro_casillas",type:"password",placeholder:"Como minimo 6 caracteres",name:"pass1",value:j,onChange:n}),Object(d.jsx)("span",{className:"informacion_contras\xf1ea",children:" \ud835\udcbe    La contrase\xf1a debe contener al menos seis caracteres."})]}),Object(d.jsxs)(E.a.Group,{className:"mb-3",controlId:"formBasicRepitPassword",children:[Object(d.jsx)("h5",{className:"titulos",children:"Vuelva a escribir la contrase\xf1a"}),Object(d.jsx)(E.a.Control,{className:"registro_casillas",type:"password",placeholder:"Password",name:"pass2",value:b,onChange:n})]}),Object(d.jsx)(I.a,{variant:"primary",type:"submit",className:"registrar_nuevo",children:"Crea tu cuenta en Amazon"}),Object(d.jsx)("span",{className:"inf_adicional",children:"Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de Privacidad de amazon.com."}),Object(d.jsx)("hr",{className:"linea1"}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"inf_adicional",children:"\xbfYa tienes una cuenta? Iniciar sesi\xf3n \xbfCompras para el trabajo? Crea una cuenta corporativa gratis"}),Object(d.jsx)(i.b,{to:"/login",className:"regreso",children:"Login"})]})]})})},q=(t(91),t(62)),V=t.n(q);function B(){return Object(d.jsx)("div",{className:"test",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"container__zoomed_image",children:Object(d.jsx)("div",{className:"container__zoomed_image_content",children:Object(d.jsx)(V.a,Object(u.a)({},{width:600,zoomPosition:"right",img:"camara1.jpg",height:450,scale:.5,opacity:.5}))})})})})}var M=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("div",{className:"footer_container",children:[Object(d.jsxs)("div",{className:"footer_contactos",children:[Object(d.jsxs)("div",{className:"conocenos",children:[Object(d.jsx)("h5",{children:"Con\xf3cenos"}),Object(d.jsx)("span",{className:"title_conocenos",children:"Trabar en Amazon"}),Object(d.jsx)("span",{className:"title_conocenos",children:"Informaci\xf3n corporativa"}),Object(d.jsx)("span",{className:"title_conocenos",children:"Departamento de prensa"})]}),Object(d.jsxs)("div",{className:"Gana_dinero",children:[Object(d.jsx)("h5",{children:"Gana dinero con nosotros"}),Object(d.jsx)("span",{className:"title_gana",children:"Vender en Amazon"}),Object(d.jsx)("span",{className:"title_gana",children:"Vender en Amazon Handmade"}),Object(d.jsx)("span",{className:"title_gana",children:"Publica tu libro en kindle"}),Object(d.jsx)("span",{className:"title_gana",children:"Programa de afiliados"}),Object(d.jsx)("span",{className:"title_gana",children:"Anuncia tus productos"})]}),Object(d.jsxs)("div",{className:"podemos_ayudarte",children:[Object(d.jsx)("h5",{children:"Podemos ayudarte"}),Object(d.jsx)("span",{className:"title_ayudarte",children:"Amazon y COVID-19"}),Object(d.jsx)("span",{className:"title_ayudarte",children:"Devolver o reemplazar productos"}),Object(d.jsx)("span",{className:"title_ayudarte",children:"Gestionar contenido y dispositivos"}),Object(d.jsx)("span",{className:"title_ayudarte",children:"Ayuda"})]}),Object(d.jsxs)("div",{className:"metodos_de_pago",children:[Object(d.jsx)("h5",{children:"Metodos de pago"}),Object(d.jsx)("span",{className:"title_pagos",children:"Tarjeta de cr\xe9dito y d\xe9bito"}),Object(d.jsx)("span",{className:"title_pagos",children:"Tarjeta de regalo"}),Object(d.jsx)("span",{className:"title_pagos",children:"Meses sin intereses"}),Object(d.jsx)("span",{className:"title_pagos",children:"Amazon Cash"}),Object(d.jsx)("span",{className:"title_pagos",children:"Amazon Recargable"})]})]}),Object(d.jsx)("div",{className:"logo_inferior",children:Object(d.jsx)("img",{src:"https://res.cloudinary.com/dd01p9lb9/image/upload/v1632619828/sprint3/logo-amazon_4_rq1emh.png",alt:"",srcset:""})})]})})},H=t(63),R=t.n(H),X=t(64),Y=t.n(X),U=function(){return Object(d.jsxs)("div",{className:"container_navbars",children:[Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("img",{className:"navbar_logo",src:"https://res.cloudinary.com/dd01p9lb9/image/upload/v1632529769/sprint3/logo-amazon_3_xje0mj.png",alt:"No disponible",srcset:""})}),Object(d.jsxs)("div",{className:"navber_ubicacion navbar_link",children:[Object(d.jsx)("span",{className:"title_ubicacion",children:"Hola "}),Object(d.jsxs)("span",{className:"title_ubicacion1",children:[Object(d.jsx)("img",{src:"https://res.cloudinary.com/dd01p9lb9/image/upload/v1632541755/sprint3/gps_avkzvt.png",alt:"no disponible"}),"Elige tu direccion"]})]}),Object(d.jsxs)("div",{className:"navbar_location",children:[Object(d.jsx)("div",{className:"location"}),Object(d.jsxs)("div",{className:"navbar_search",children:[Object(d.jsx)("input",{type:"text",className:"navbar_departamentos",value:"Todos los departamentos"}),Object(d.jsx)("input",{type:"text",className:"navbar_searchInput"}),Object(d.jsx)(R.a,{className:"logo_busqueda"})]}),Object(d.jsx)("span",{className:"location"})]}),Object(d.jsxs)("div",{className:"opciones_total",children:[Object(d.jsx)(i.b,{to:"/login",className:"navbar_link",children:Object(d.jsxs)("div",{className:"navbar_opciones",children:[Object(d.jsx)("span",{className:"navbar_opcion1",children:"Hola, identificate"}),Object(d.jsx)("span",{className:"navbar_opcion2",children:"Cuenta y Listas"})]})}),Object(d.jsx)(i.b,{to:"",className:"navbar_link",children:Object(d.jsxs)("div",{className:"navbar_pedidos",children:[Object(d.jsx)("span",{className:"navbar_pedidos1",children:"Devoluciones "}),Object(d.jsx)("span",{className:"navbar_pedidos2",children:"Y pedidos"})]})})]})]}),Object(d.jsxs)("nav",{className:"navbar_inferior",children:[Object(d.jsxs)("div",{className:"todo hover",children:[Object(d.jsx)(Y.a,{className:"menu_hamburguesa"})," Todo"]}),Object(d.jsx)("div",{className:"tarjeta_regalo hover",children:"Tarjetas de regalo"}),Object(d.jsx)("div",{className:"prime hover",children:"Prime"}),Object(d.jsx)("div",{className:"losMasVendidos hover",children:"Los Mas Vendidos"}),Object(d.jsx)("div",{className:"computoYtabletas hover",children:"Computo y Tabletas"}),Object(d.jsx)("div",{className:"audioYesquiposDeSonido hover",children:"Audio y Equipos de Sonido"})]})]})},J=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(U,{}),Object(d.jsx)(B,{}),Object(d.jsx)(M,{})]})},K=(t(94),function(){var e=Object(G.a)(T.a.mark((function e(c){var t,a,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dd01p9lb9/upload",(t=new FormData).append("upload_preset","firebaseSprint3"),t.append("file",c),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dd01p9lb9/upload",{method:"POST",body:t});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return n=e.sent,e.abrupt("return",n.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(c){return e.apply(this,arguments)}}()),Q=t(32),Z=function(e){return{type:f,payload:e}},W=function(e){return{type:g,payload:e}},$=function(e){return{type:v,payload:e}},ee=t(108),ce=function(){var e=Object(p.c)((function(e){return e.producto})),c=e.producto,t=Object(p.b)();return Object(d.jsx)("div",{children:Object(d.jsxs)(ee.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Documento"}),Object(d.jsx)("th",{children:"Nombres"}),Object(d.jsx)("th",{children:"Descripcion del producto"}),Object(d.jsx)("th",{children:"Precio"}),Object(d.jsx)("th",{children:"Celular"}),Object(d.jsx)("th",{children:"Direcci\xf3n"}),Object(d.jsx)("th",{children:"Correo"}),Object(d.jsx)("th",{children:"Imagen"}),Object(d.jsx)("th",{children:"Acciones"})]})}),Object(d.jsx)("tbody",{children:c?c.map((function(e,c){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"informacion_producto",children:e.doc}),Object(d.jsx)("td",{className:"informacion_producto",children:e.nom}),Object(d.jsx)("td",{className:"informacion_producto",children:e.ape}),Object(d.jsx)("td",{className:"informacion_producto",children:e.tel}),Object(d.jsx)("td",{className:"informacion_producto",children:e.cel}),Object(d.jsx)("td",{className:"informacion_producto",children:e.dir}),Object(d.jsx)("td",{className:"informacion_producto",children:e.email}),Object(d.jsx)("td",{className:"informacion_producto",children:Object(d.jsx)("img",{src:e.img,alt:"no disponible",className:"img_producto"})}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{onClick:function(){return t((c=e.email,function(){var e=Object(G.a)(T.a.mark((function e(t){var a,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(Q.b)(w,"productosCollection"),n=Object(Q.g)(a,Object(Q.h)("email","==",c)),e.next=4,Object(Q.e)(n);case 4:e.sent.forEach((function(e){Object(Q.c)(Object(Q.d)(w,"productosCollection",e.id))})),t(Z(c));case 7:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()));var c},children:"Eliminar"})})]},c)})):Object(d.jsx)("span",{children:"No se encuentran los Datos"})})]})})},te=function(e){var c=e.history,t=Object(p.b)(),n=m({documento:"",nombres:"",descripcion:"",precio:"",celular:"",direccion:"",email:"",imagen:""}),s=Object(o.a)(n,2),i=s[0],l=s[1],j=i.documento,b=i.nombres,h=i.descripcion,O=i.precio,x=i.celular,v=i.direccion,g=i.email,f=i.imagen;return Object(a.useEffect)((function(){t(function(){var e=Object(G.a)(T.a.mark((function e(c){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.e)(Object(Q.b)(w,"productosCollection"));case 2:t=e.sent,a=[],t.forEach((function(e){a.push(Object(u.a)({},e.data()))})),c(W(a)),console.log(a);case 7:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}())}),[]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(function(e,c,t,a,n,s,o,r){return function(i){var l={doc:e,nom:c,ape:t,tel:a,cel:n,dir:s,email:o,img:r};Object(Q.a)(Object(Q.b)(w,"productosCollection"),l).then((function(e){i($(l))})).catch((function(e){console.log(e)}))}}(j,b,h,O,x,v,g,f))},children:[Object(d.jsx)("h1",{children:"Estudiantes"}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsxs)("div",{className:"form-group col-md-4",children:[Object(d.jsx)("label",{htmlFor:"documento",children:"Documento"}),Object(d.jsx)("input",{className:"form-control",type:"number",name:"documento",id:"documento",value:j,onChange:l})]}),Object(d.jsxs)("div",{className:"form-group col-md-4",children:[Object(d.jsx)("label",{htmlFor:"nombres",children:"Nombres"}),Object(d.jsx)("input",{className:"form-control",type:"text",name:"nombres",id:"nombres",value:b,onChange:l})]}),Object(d.jsxs)("div",{className:"form-group col-md-4",children:[Object(d.jsx)("label",{htmlFor:"descripcion",children:"Descripcion del Producto"}),Object(d.jsx)("input",{className:"form-control",type:"text",name:"descripcion",id:"descripcion",value:h,onChange:l})]}),Object(d.jsxs)("div",{className:"form-group col-md-4",children:[Object(d.jsx)("label",{htmlFor:"precio",children:"Precio"}),Object(d.jsx)("input",{className:"form-control",type:"number",name:"precio",id:"precio",value:O,onChange:l})]}),Object(d.jsxs)("div",{className:"form-group col-md-4",children:[Object(d.jsx)("label",{htmlFor:"celular",children:"Celular"}),Object(d.jsx)("input",{className:"form-control",type:"number",name:"celular",id:"celular",value:x,onChange:l})]}),Object(d.jsxs)("div",{className:"form-group col-md-4",children:[Object(d.jsx)("label",{htmlFor:"direccion",children:"Direcci\xf3n"}),Object(d.jsx)("input",{className:"form-control",type:"text",name:"direccion",id:"direccion",value:v,onChange:l})]}),Object(d.jsxs)("div",{className:"form-group col-md-4",children:[Object(d.jsx)("label",{htmlFor:"direccion",children:"Email"}),Object(d.jsx)("input",{className:"form-control",type:"email",name:"email",id:"email",value:g,onChange:l})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"form-group col-md-4",children:[Object(d.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(e){var c=e.target.files[0];K(c).then((function(e){f=e,console.log(e)})).catch((function(e){console.log(e.message)}))},value:f}),Object(d.jsx)("button",{className:"btn btn-success",type:"button",onClick:function(){document.querySelector("#fileSelector").click()},children:"Imagen"})]}),Object(d.jsx)("button",{className:"btn btn-success",type:"submit",children:"Guardar"}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"btn btn-primary",type:"button",onClick:function(){t((function(e){var c=Object(r.d)();Object(r.h)(c).then((function(c){e(S())})).catch((function(e){console.log(e)}))})),c.replace("/portada")},children:"Logout"})})]})]}),Object(d.jsx)(ce,{})]})},ae=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{exact:!0,path:"/productos",component:te}),Object(d.jsx)(l.a,{to:"/productos"})]})})},ne=t(18),se=["isAuthenticated","component"],oe=function(e){var c=e.isAuthenticated,t=e.component,a=Object(ne.a)(e,se);return Object(d.jsx)(l.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return c?Object(d.jsx)(t,Object(u.a)({},e)):Object(d.jsx)(l.a,{to:"/login"})}}))},re=["isAuthenticated","component"],ie=function(e){var c=e.isAuthenticated,t=e.component,a=Object(ne.a)(e,re);return Object(d.jsx)(l.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return c?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsx)(t,Object(u.a)({},e))}}))};function le(){var e=Object(p.b)(),c=Object(a.useState)(!0),t=Object(o.a)(c,2),n=t[0],s=t[1],b=Object(a.useState)(!1),u=Object(o.a)(b,2),m=u[0],h=u[1];return Object(a.useEffect)((function(){var c=Object(r.d)();Object(r.e)(c,(function(c){(null===c||void 0===c?void 0:c.uid)?(e(k(c.uid,c.displayName)),h(!0)):h(!1),s(!1)}))}),[e,s,h]),n?Object(d.jsx)("h1",{children:"Espera por favor, estamos cargando los datos"}):Object(d.jsx)(i.a,{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(ie,{exact:!0,path:"/portada",component:J,isAuthenticated:m}),Object(d.jsx)(ie,{exact:!0,path:"/login",component:D,isAuthenticated:m}),Object(d.jsx)(ie,{exact:!0,path:"/home",component:j,isAuthenticated:m}),Object(d.jsx)(ie,{exact:!0,path:"/registro",component:L,isAuthenticated:m}),Object(d.jsx)(oe,{path:"/",component:ae,isAuthenticated:m})]})})}var de=t(46),je=t(65),be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;switch(c.type){case h:return{id:c.payload.id,name:c.payload.displayname};case O:return{};default:return e}},ue=t(22),me={producto:[]},pe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.c,he=Object(de.b)({login:be,register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;return c.type===x?{email:c.payload.email,password:c.payload.password,name:c.payload.name}:e},producto:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case v:return{producto:[c.payload]};case g:return{producto:Object(ue.a)(c.payload)};case f:return{producto:e.producto.filter((function(e){return e.email!==c.payload}))};default:return e}}}),Oe=Object(de.d)(he,pe(Object(de.a)(je.a)));s.a.render(Object(d.jsx)(p.a,{store:Oe,children:Object(d.jsx)(le,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.c60159ce.chunk.js.map