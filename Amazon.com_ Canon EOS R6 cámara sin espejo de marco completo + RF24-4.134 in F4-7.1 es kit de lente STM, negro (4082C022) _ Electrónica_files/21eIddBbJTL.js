(function(l){var n=window.AmazonUIPageJS||window.P,r=n._namespace||n.attributeErrors,c=r?r("DetailPageProductDimensionsAssets",""):n;c.guardFatal?c.guardFatal(l)(c,window):c.execute(function(){l(c,window)})})(function(l,n,r){l.when("ready").register("hit-pd-metrics-logger",function(){return{logTime:function(c,m){if("undefined"!==typeof c&&"undefined"!==typeof m){var l=n.ue;l&&"function"===typeof l.count&&l.count(c,m)}},logError:function(c){if("undefined"!==typeof c){var m=n.ue;m&&"function"===typeof m.count&&
m.count(c,1)}}}});"use strict";l.when("productDimensionDesktop-svg").execute(function(c){c.init()});l.when("A","3p-promise","hit-pd-metrics-logger","atf","cf","ready").register("productDimensionDesktop-svg",function(c,m,l){function n(){w=0;if(0<e(f.mainSideContainer).length||0<e(f.mainContainerSingleImage).length){w=e(f.productDimensionsContainer+" svg").length;t=Date.now();var a=new m(function(a,b){u(f.svgDesktopMain+" image",a,b)});if(0<e(f.svgDesktopSide).length)var b=new m(function(a,b){u(f.svgDesktopSide+
" image",a,b)});var d=new m(function(a,b){u(f.svgAvatarImage,a,b)}),q=new m(function(a,b){u(f.avatarProductImage,a,b)});Q(a,b,d,q)}}function Q(a,b,d,q){0<e(f.svgDesktopSide).length?(J(q,d,f.avatarContainer),R(a,b)):(J(q,d,f.avatarContainerSingleImage),S(a))}function J(a,b,d){m.all([a,b]).then(function(a){y("hit-product-dimensions-desktop-avatar-image-loading-time",t);a=K(a[0],a[1],d);L(f.svgDesktopAvatar,a)}).catch(function(){A()})}function R(a,b){m.all([a,b]).then(function(a){y("hit-product-dimensions-desktop-dimension-double-images-loading-time",
t);var b=a[0];a=a[1];B(f.svgHeightText);var e=M(b,a),b=z(b,e);a=z(a,e);N(f.svgDesktopMain,b);C(f.svgDesktopSide,a)}).catch(function(){A()})}function S(a){a.then(function(a){y("hit-product-dimensions-desktop-dimension-single-image-loading-time",t);B(f.svgHeightText);var d=D(a,f.mainContainerSingleImage);a=z(a,d.oneImageMaxHeight);C(f.svgDesktopMain,a)}).catch(function(){A()})}function B(a){p=9*e(a).text().replace(/[^0-9]/g,"").length+5;E=2*(8+p+4);O=8+p}function u(a,b,d){var q=e(a).attr("data");e(a)[0].setAttribute("href",
q);a=new Image;a.src=q;a.onload=function(){b(this.width/this.height)};a.onerror=d}function z(a,b){a*=b;return{imageWidth:a,imageHeight:b,svgWidth:a+E,svgHeight:b+58,leftPadding:O,imagePadding:4}}function K(a,b,d){var q=e(d).width();d=e(d).height();var x=q-8-12-12-26-10,h=e(f.svgDesktopAvatar).attr("data");if(1>h)var g=d,c=g*h,l=g-c,m=0;else c=d,g=c/h,l=0,m=c-g;var k=g*b;a*=c;k+a>x&&(k=k/(a+k)*x,a=a/(a+k)*x,1>h?(g=k/b,c=g*h,l=(d-g)/2+(g-c),m=(d-g)/2):(c=k/b,g=c/h,l=(d-c)/2,m=(d-c)/2+(c-g)));b=x-k-
a;return{avatarSvgWidth:q,avatarSvgHeight:d,productWidth:a,productHeight:c,productX:b/2,productY:l,avatarWidth:k,avatarHeight:g,avatarX:a+8+b/2,avatarY:m}}function D(a,b){b=e(b).width()-32;a=(b-E)/a;a+58>b&&(a=b-58);return{oneImageMaxHeight:a,containerWidth:b,containerHeight:b}}function M(a,b){b=D(b,f.mainSideContainer);a=b.containerWidth/a;a+58>b.containerHeight&&(a=b.containerHeight-58);return a>b.oneImageMaxHeight?b.oneImageMaxHeight:a}function F(a,b){e(a+" image").attr("width",b.imageWidth);e(a+
" image").attr("height",b.imageHeight);e(a).attr("height",b.svgHeight);e(a+" image")[0].setAttribute("y",29)}function N(a,b){F(a,b);var d=b.imageHeight+4+29;e(a).attr("width",b.imageWidth);k(a+" .hit-pd-desktop-bottom",1,d+4,b.imageWidth-1,d+4);k(a+" .hit-pd-desktop-bottomLeft",1,d,1,d+8);k(a+" .hit-pd-desktop-bottomRight",b.imageWidth-1,d,b.imageWidth-1,d+8);v(a+" .hit-pd-desktop-widthText",b.imageWidth/2,b.imageHeight+58-2,!1);G()}function C(a,b){F(a,b);var d=b.imageWidth,c=b.imageHeight,f=b.leftPadding,
h=f+b.imagePadding,g=c+4+29;e(a).attr("width",b.svgWidth);e(a+" image")[0].setAttribute("x",h);k(a+" .hit-pd-desktop-left",p+4,29,p+4,c+29);k(a+" .hit-pd-desktop-leftTop",p,30,f,30);k(a+" .hit-pd-desktop-leftBottom",p,c+29,f,c+29);k(a+" .hit-pd-desktop-bottom",h,g+4,h+d,g+4);k(a+" .hit-pd-desktop-bottomLeft",h,g,h,g+8);k(a+" .hit-pd-desktop-bottomRight",h+d,g,h+d,g+8);v(a+" .hit-pd-desktop-heightText",p-4,c/2+35.5,!1);v(a+" .hit-pd-desktop-widthText",h+d/2,c+58-2,!1);G()}function H(a,b,d){e(a)[0].setAttribute("x",
b);e(a)[0].setAttribute("y",d)}function L(a,b){e(a).attr("width",b.avatarSvgWidth);e(a).attr("height",b.avatarSvgHeight);var d=b.avatarWidth,c=b.avatarHeight,l=b.avatarX,h=b.avatarY,g=l+d+12+4,m=f.avatarProductImage,n=b.productWidth,p=b.productHeight;e(m).attr("width",n);e(m).attr("height",p);H(f.avatarProductImage,b.productX,b.productY);b=f.svgAvatarImage;e(b).attr("width",d);e(b).attr("height",c);H(f.svgAvatarImage,l,h);k(a+" .hit-pd-avatar-height",g,h,g,h+c);k(a+" .hit-pd-avatar-heightTop",g-4,
h+1,g+4,h+1);k(a+" .hit-pd-avatar-heightBottom",g-4,h+c-1,g+4,h+c-1);v(a+" .hit-pd-avatarText",g+4+26,h+c/2,!0);G()}function G(){--w;0===w&&(e(f.svgWrapper).removeClass("aok-hidden"),y("hit-product-dimensions-desktop-widget-load-time",t),P=!1)}function k(a,b,d,c,f){a=e(a)[0];a!==r&&(a.setAttribute("x1",b),a.setAttribute("y1",d),a.setAttribute("x2",c),a.setAttribute("y2",f))}function v(a,b,d,c){var f=e(a)[0];f!==r&&(f.setAttribute("x",b),f.setAttribute("y",d),d=e(a+" tspan"),2===d.length&&(a=e(a).attr("data"),
c&&"true"===a?I(d,b,"-0.6em",b+2,"1.2em"):c&&"false"===a?I(d,b,"-0.3em",b-7,"0.8em"):I(d,b,"-0.3em",b,"0.8em")))}function I(a,b,c,e,f){a[0].setAttribute("x",b);a[0].setAttribute("dy",c);a[1].setAttribute("x",e);a[1].setAttribute("dy",f)}function y(a,b){0<b&&P&&l.logTime(a,Date.now()-b)}function A(){e(f.productDimensionsContainer).addClass("aok-hidden");l.logError("hit-product-dimensions-desktop-image-loading-failure")}var e=c.$,p=45,O=8+p,E=2*(8+p+4),w=0,t=0,P=!0,f={productDimensionsContainer:"#productDimensionsDesktop",
mainSideContainer:".hit-pd-desktop-container .hit-pd-desktop-main-side-container",mainContainerSingleImage:".hit-pd-desktop-container .hit-pd-desktop-main-container-single-image",avatarContainer:".hit-pd-desktop-container .hit-pd-desktop-avatar-container",avatarContainerSingleImage:".hit-pd-desktop-container .hit-pd-desktop-avatar-container-single-image",avatarProductImage:".hit-pd-desktop-container #hit-pd-desktop-product-image",svgWrapper:".hit-pd-desktop-container .hit-pd-desktop-svg-wrapper",
svgDesktopMain:".hit-pd-desktop-container #hit-pd-desktop-main-svg",svgDesktopSide:".hit-pd-desktop-container #hit-pd-desktop-side-svg",svgDesktopAvatar:".hit-pd-desktop-container #hit-pd-desktop-avatar-svg",svgAvatarImage:".hit-pd-desktop-container #hit-pd-desktop-avatar-image",svgHeightText:".hit-pd-desktop-container .hit-pd-desktop-heightText"};c.on("a:pageUpdate",function(){n()});c.on.resize(function(){n()});return{init:n,lazyLoadImage:u,computeImageSize:z,drawBottomDimensionOnly:N,drawLeftAndBottomDimensions:C,
drawLine:k,writeText:v,findMaxPossibleImageHeightTwoImages:M,findMaxPossibleImageHeightOneImage:D,dynamicHeightTextPadding:B,setSvgImageSize:F,drawDimensionsAvatar:L,setAvatarImagePosition:H,computeAvatarImageSize:K}})});