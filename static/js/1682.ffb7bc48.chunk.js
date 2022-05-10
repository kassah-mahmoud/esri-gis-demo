"use strict";(self.webpackChunkesri_map=self.webpackChunkesri_map||[]).push([[1682],{86950:function(t,e,r){function n(t){return"h"in t&&"s"in t&&"v"in t}function i(t){return"l"in t&&"a"in t&&"b"in t}function a(t){return"l"in t&&"c"in t&&"h"in t}function o(t){return"x"in t&&"y"in t&&"z"in t}r.d(e,{Y3:function(){return w},_Y:function(){return x},sJ:function(){return b},xr:function(){return m}});var l=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],h=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function u(t,e){var r,n,i=[];if(t[0].length!==e.length)throw"dimensions do not match";var a=t.length,o=t[0].length,l=0;for(r=0;r<a;r++){for(l=0,n=0;n<o;n++)l+=t[r][n]*e[n];i.push(l)}return i}function c(t){var e=[t.r/255,t.g/255,t.b/255].map((function(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)})),r=u(l,e);return{x:100*r[0],y:100*r[1],z:100*r[2]}}function s(t){var e=u(h,[t.x/100,t.y/100,t.z/100]).map((function(t){var e=t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055;return Math.min(1,Math.max(e,0))}));return{r:Math.round(255*e[0]),g:Math.round(255*e[1]),b:Math.round(255*e[2])}}function f(t){var e=[t.x/95.047,t.y/100,t.z/108.883].map((function(t){return t>Math.pow(6/29,3)?Math.pow(t,1/3):1/3*Math.pow(29/6,2)*t+4/29}));return{l:116*e[1]-16,a:500*(e[0]-e[1]),b:200*(e[1]-e[2])}}function d(t){var e=t.l,r=[(e+16)/116+t.a/500,(e+16)/116,(e+16)/116-t.b/200].map((function(t){return t>6/29?Math.pow(t,3):3*Math.pow(6/29,2)*(t-4/29)}));return{x:95.047*r[0],y:100*r[1],z:108.883*r[2]}}function y(t){return f(c(t))}function g(t){return s(d(t))}function p(t){return function(t){var e=t.l,r=t.a,n=t.b,i=Math.sqrt(r*r+n*n),a=Math.atan2(n,r);return{l:e,c:i,h:a=a>0?a:a+2*Math.PI}}(f(c(t)))}function v(t){return s(d(function(t){var e=t.l,r=t.c,n=t.h;return{l:e,a:r*Math.cos(n),b:r*Math.sin(n)}}(t)))}function m(t){return function(t){return"r"in t&&"g"in t&&"b"in t}(t)?t:a(t)?v(t):i(t)?g(t):o(t)?s(t):n(t)?function(t){var e,r=(t.h+360)%360/60,n=t.s/100,i=t.v/100*255,a=i*n,o=a*(1-Math.abs(r%2-1));switch(Math.floor(r)){case 0:e={r:a,g:o,b:0};break;case 1:e={r:o,g:a,b:0};break;case 2:e={r:0,g:a,b:o};break;case 3:e={r:0,g:o,b:a};break;case 4:e={r:o,g:0,b:a};break;case 5:case 6:e={r:a,g:0,b:o};break;default:e={r:0,g:0,b:0}}return e.r=Math.round(e.r+i-a),e.g=Math.round(e.g+i-a),e.b=Math.round(e.b+i-a),e}(t):t}function x(t){return n(t)?t:function(t){var e=t.r,r=t.g,n=t.b,i=Math.max(e,r,n),a=i-Math.min(e,r,n),o=i,l=0===a?0:i===e?(r-n)/a%6:i===r?(n-e)/a+2:(e-r)/a+4,h=0===a?0:a/o;return l<0&&(l+=6),{h:l*=60,s:h*=100,v:o*=100/255}}(m(t))}function w(t){return i(t)?t:y(m(t))}function b(t){return a(t)?t:p(m(t))}},1682:function(t,e,r){r.d(e,{w:function(){return L},r:function(){return P}});var n=r(19545),i=r(76200),a=r(86950),o=r(10064),l=r(93169),h=(r(42877),r(88367)),u=r(37762),c=r(51995),s=r(11245),f=r(22018),d=(r(80975),r(32718),r(67005)),y=0,g=0,p=(0,l.Z)("android"),v=(0,l.Z)("chrome")||p&&p>=4?"auto":"optimizeLegibility",m={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},x=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g,w={},b={},k={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},M=Math.PI,j=1;function z(t,e){var r=t*(M/180);return Math.abs(e*Math.sin(r))+Math.abs(e*Math.cos(r))}function I(t){return t.map((function(t){return"".concat(t.command," ").concat(t.values.join(" "))})).join(" ").trim()}function S(t,e,r,n){if(t){if("circle"===t.type)return(0,d.u)("circle",{fill:e,"fill-rule":"evenodd",stroke:r.color,"stroke-width":r.width,"stroke-linecap":r.cap,"stroke-linejoin":r.join,"stroke-dasharray":r.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,r:t.r});if("ellipse"===t.type)return(0,d.u)("ellipse",{fill:e,"fill-rule":"evenodd",stroke:r.color,"stroke-width":r.width,"stroke-linecap":r.cap,"stroke-linejoin":r.join,"stroke-dasharray":r.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,rx:t.rx,ry:t.ry});if("rect"===t.type)return(0,d.u)("rect",{fill:e,"fill-rule":"evenodd",stroke:r.color,"stroke-width":r.width,"stroke-linecap":r.cap,"stroke-linejoin":r.join,"stroke-dasharray":r.dashArray,"stroke-miterlimit":"4",x:t.x,y:t.y,width:t.width,height:t.height});if("image"===t.type)return(0,d.u)("image",{href:t.src,x:t.x,y:t.y,width:t.width,height:t.height,preserveAspectRatio:"none"});if("path"===t.type){var i="string"!=typeof t.path?I(t.path):t.path;return(0,d.u)("path",{fill:e,"fill-rule":"evenodd",stroke:r.color,"stroke-width":r.width,"stroke-linecap":r.cap,"stroke-linejoin":r.join,"stroke-dasharray":r.dashArray,"stroke-miterlimit":"4",d:i})}if("text"===t.type)return(0,d.u)("text",{fill:e,"fill-rule":"evenodd",stroke:r.color,"stroke-width":r.width,"stroke-linecap":r.cap,"stroke-linejoin":r.join,"stroke-dasharray":r.dashArray,"stroke-miterlimit":"4","text-anchor":n.align,"text-decoration":n.decoration,kerning:n.kerning,rotate:n.rotate,"text-rendering":v,"font-style":n.font.style,"font-variant":n.font.variant,"font-weight":n.font.weight,"font-size":n.font.size,"font-family":n.font.family,x:t.x,y:t.y},t.text)}return null}function A(t){var e={fill:"none",pattern:null,linearGradient:null};if(t)if("type"in t&&"pattern"===t.type){var r="patternId-"+ ++y;e.fill="url(#".concat(r,")"),e.pattern={id:r,x:t.x,y:t.y,width:t.width,height:t.height,image:{x:0,y:0,width:t.width,height:t.height,href:t.src}}}else if("type"in t&&"linear"===t.type){var n="linearGradientId-"+ ++g;e.fill="url(#".concat(n,")"),e.linearGradient={id:n,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,stops:t.colors.map((function(t){return{offset:t.offset,color:t.color&&new c.Z(t.color).toString()}}))}}else if(t){var i=new c.Z(t);e.fill=i.toString()}return e}function N(t){var e={color:"none",width:1,cap:"butt",join:"4",dashArray:"none"};if(t&&(null!=t.width&&(e.width=t.width),t.cap&&(e.cap=t.cap),t.join&&(e.join=t.join.toString()),t.color&&(e.color=new c.Z(t.color).toString()),t.style)){var r=null;if(t.style in k&&(r=k[t.style]),Array.isArray(r)){r=r.slice(0);for(var n=0;n<r.length;++n)r[n]*=t.width;if("butt"!==t.cap){for(var i=0;i<r.length;i+=2)r[i]-=t.width,r[i]<1&&(r[i]=1);for(var a=1;a<r.length;a+=2)r[a]+=t.width}r=r.join(",")}e.dashArray=r}return e}function G(t,e){var r={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}};return t&&(r.align=t.align,r.decoration=t.decoration,r.kerning=t.kerning?"auto":"0",r.rotate=t.rotated?"90":"0",r.font.style=e.style||"normal",r.font.variant=e.variant||"normal",r.font.weight=e.weight||"normal",r.font.size=e.size&&e.size.toString()||"10pt",r.font.family=e.family||"serif"),r}function Z(t){var e=t.pattern,r=t.linearGradient;if(e)return(0,d.u)("pattern",{id:e.id,patternUnits:"userSpaceOnUse",x:e.x,y:e.y,width:e.width,height:e.height},(0,d.u)("image",{x:e.image.x,y:e.image.y,width:e.image.width,height:e.image.height,href:e.image.href}));if(r){var n=r.stops.map((function(t,e){return(0,d.u)("stop",{key:"".concat(e,"-stop"),offset:t.offset,"stop-color":t.color})}));return(0,d.u)("linearGradient",{id:r.id,gradientUnits:"userSpaceOnUse",x1:r.x1,y1:r.y1,x2:r.x2,y2:r.y2},n)}return null}function B(t,e,r){return(0,f.t)(t,(0,f.c)(t),[e,r])}function D(t,e,r,n,i){return(0,f.s)(t,(0,f.c)(t),[e,r]),t[4]=t[4]*e-n*e+n,t[5]=t[5]*r-i*r+i,t}function E(t,e){w&&"left"in w?(w.left>t&&(w.left=t),w.right<t&&(w.right=t),w.top>e&&(w.top=e),w.bottom<e&&(w.bottom=e)):w={left:t,bottom:e,right:t,top:e}}function U(t){var e,r=t.args,n=r.length;switch(t.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(e=0;e<n;e+=2)E(r[e],r[e+1]);b.x=r[n-2],b.y=r[n-1];break;case"H":for(e=0;e<n;++e)E(r[e],b.y);b.x=r[n-1];break;case"V":for(e=0;e<n;++e)E(b.x,r[e]);b.y=r[n-1];break;case"m":var i=0;"x"in b||(E(b.x=r[0],b.y=r[1]),i=2);for(e=i;e<n;e+=2)E(b.x+=r[e],b.y+=r[e+1]);break;case"l":case"t":for(e=0;e<n;e+=2)E(b.x+=r[e],b.y+=r[e+1]);break;case"h":for(e=0;e<n;++e)E(b.x+=r[e],b.y);break;case"v":for(e=0;e<n;++e)E(b.x,b.y+=r[e]);break;case"c":for(e=0;e<n;e+=6)E(b.x+r[e],b.y+r[e+1]),E(b.x+r[e+2],b.y+r[e+3]),E(b.x+=r[e+4],b.y+=r[e+5]);break;case"s":case"q":for(e=0;e<n;e+=4)E(b.x+r[e],b.y+r[e+1]),E(b.x+=r[e+2],b.y+=r[e+3]);break;case"A":for(e=0;e<n;e+=7)E(r[e+5],r[e+6]);b.x=r[n-2],b.y=r[n-1];break;case"a":for(e=0;e<n;e+=7)E(b.x+=r[e+5],b.y+=r[e+6])}}function C(t,e,r){var n,i=m[t.toLowerCase()];"number"==typeof i&&(i?e.length>=i&&(n={action:t,args:e.slice(0,e.length-e.length%i)},r.push(n),U(n)):(n={action:t,args:[]},r.push(n),U(n)))}function F(t){var e={x:0,y:0,width:0,height:0};if("circle"===t.type)e.x=t.cx-t.r,e.y=t.cy-t.r,e.width=2*t.r,e.height=2*t.r;else if("ellipse"===t.type)e.x=t.cx-t.rx,e.y=t.cy-t.ry,e.width=2*t.rx,e.height=2*t.ry;else if("image"===t.type||"rect"===t.type)e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height;else if("path"===t.type){var r=function(t){var e=("string"!=typeof t.path?I(t.path):t.path).match(x),r=[];if(w={},b={},!e)return null;for(var n="",i=[],a=e.length,o=0;o<a;++o){var l=e[o],h=parseFloat(l);isNaN(h)?(n&&C(n,i,r),i=[],n=l):i.push(h)}C(n,i,r);var u={x:0,y:0,width:0,height:0};return w&&"left"in w&&(u.x=w.left,u.y=w.top,u.width=w.right-w.left,u.height=w.bottom-w.top),u}(t);e.x=r.x,e.y=r.y,e.width=r.width,e.height=r.height}return e}function T(t){var e,r={x:0,y:0,width:0,height:0},n=null,i=Number.NEGATIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=(0,u.Z)(t);try{for(o.s();!(e=o.n()).done;){var l=e.value;n?(n.x=Math.min(n.x,l.x),n.y=Math.min(n.y,l.y),i=Math.max(i,l.x+l.width),a=Math.max(a,l.y+l.height)):((n=r).x=l.x,n.y=l.y,i=l.x+l.width,a=l.y+l.height)}}catch(h){o.e(h)}finally{o.f()}return n&&(n.width=i-n.x,n.height=a-n.y),n}function V(t,e,r,n,i,a,o,l,h){var u=(o&&a?z(a,e):e)/2,c=(o&&a?z(a,r):r)/2;if(h){var d=h[0],y=h[1];u=(o&&a?z(a,d):d)/2,c=(o&&a?z(a,y):y)/2}var g=t.width+n,p=t.height+n,v=(0,s.c)(),m=(0,s.c)(),x=!1;if(i&&0!==g&&0!==p){var w=e!==r?e/r:g/p,b=e>r?e:r,k=1,M=1;isNaN(b)||(w>1?(k=b/g,M=b/w/p):(M=b/p,k=b*w/g)),(0,f.m)(m,m,D(v,k,M,u,c)),x=!0}var j=t.x+(g-n)/2,I=t.y+(p-n)/2;if((0,f.m)(m,m,B(v,u-j,c-I)),!x&&(g>e||p>r)){var S=g/e>p/r,A=(S?e:r)/(S?g:p);(0,f.m)(m,m,D(v,A,A,j,I))}return a&&(0,f.m)(m,m,function(t,e,r,n){var i=e%360*Math.PI/180;(0,f.r)(t,(0,f.c)(t),i);var a=Math.cos(i),o=Math.sin(i),l=t[4],h=t[5];return t[4]=l*a-h*o+n*o-r*a+r,t[5]=h*a+l*o-r*o-n*a+n,t}(v,a,j,I)),l&&(0,f.m)(m,m,B(v,l[0],l[1])),"matrix(".concat(m[0],",").concat(m[1],",").concat(m[2],",").concat(m[3],",").concat(m[4],",").concat(m[5],")")}function _(t,e,r,n){var i=[],a=[],o=++j,l=function(t,e,r){var n=null==t?void 0:t.effects.find((function(t){return"bloom"===t.type}));if(!n)return null;var i=n.strength,a=n.radius,o=i>0?a:0,l=(i+o)*e,h=4*i+1;return(0,d.u)("filter",{id:"bloom".concat(r),x:"-100%",y:"-100%",width:"300%",height:"300%",filterUnits:"userSpaceOnUse"},(0,d.u)("feMorphology",{operator:"dilate",radius:(i+.5*o)*(Math.pow(5,e/100)*(.4+e/100)),in:"SourceGraphic",result:"dilate"}),(0,d.u)("feGaussianBlur",{in:"dilate",stdDeviation:l/25,result:"blur"}),(0,d.u)("feGaussianBlur",{in:"blur",stdDeviation:l/50,result:"intensityBlur"}),(0,d.u)("feComponentTransfer",{in:"SourceGraphic",result:"intensityBrightness"},(0,d.u)("feFuncR",{type:"linear",slope:h}),(0,d.u)("feFuncG",{type:"linear",slope:h}),(0,d.u)("feFuncB",{type:"linear",slope:h})),(0,d.u)("feMerge",null,(0,d.u)("feMergeNode",{in:"intensityBlur"}),(0,d.u)("feMergeNode",{in:"intensityBrightness"}),(0,d.u)("feGaussianBlur",{stdDeviation:i/10})))}(null==n?void 0:n.effectView,e,o),h=null;if(l){var c,s=null==n||null==(c=n.effectView)?void 0:c.effects.find((function(t){return"bloom"===t.type})),f=(s.strength?s.strength+s.radius/2:0)/3,y=e+e*f,g=r+r*f;h=[Math.max(y,10),Math.max(g,10)]}var p,v=(0,u.Z)(t);try{for(v.s();!(p=v.n()).done;){var m,x=p.value,w=[],b=[],k=0,M=0,I=0,B=(0,u.Z)(x);try{for(B.s();!(m=B.n()).done;){var D=m.value,E=D.shape,U=D.fill,C=D.stroke,_=D.font,R=D.offset;k+=C&&C.width||0;var Y=A(U),L=N(C),O="text"===E.type?G(E,_):null;i.push(Z(Y)),w.push(S(E,Y.fill,L,O)),b.push(F(E)),R&&(M+=R[0],I+=R[1])}}catch(q){B.e(q)}finally{B.f()}var P=V(T(b),e,r,k,null==n?void 0:n.scale,null==n?void 0:n.rotation,null==n?void 0:n.useRotationSize,[M,I],h);a.push((0,d.u)("g",{transform:P},w))}}catch(q){v.e(q)}finally{v.f()}return null!=n&&n.useRotationSize&&null!=n&&n.rotation&&(e=z(null==n?void 0:n.rotation,e),r=z(null==n?void 0:n.rotation,r)),l&&(e=h[0],r=h[1]),(0,d.u)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,style:"display: block;"},l,(0,d.u)("defs",null,i),l?(0,d.u)("g",{filter:"url(#bloom".concat(o,")")},a):a)}var R=r(74579),Y=(0,h.E)();function L(t,e,r){var n=Math.ceil(e[0]),i=Math.ceil(e[1]);if(!t.some((function(t){return!!t.length})))return null;var a=r&&r.node||document.createElement("div");return null!=r.opacity&&(a.style.opacity=r.opacity.toString()),null!=r.effectView&&(a.style.filter=(0,R.wJ)(r.effectView)),Y.append(a,_.bind(null,t,n,i,r)),a}function O(t,e,r,n,i){if("multiply"===i)t[e+0]*=r[0],t[e+1]*=r[1],t[e+2]*=r[2],t[e+3]*=r[3];else{var o=(0,a._Y)({r:t[e+0],g:t[e+1],b:t[e+2]});o.h=n.h,o.s=n.s,o.v=o.v/100*n.v;var l=(0,a.xr)(o);t[e+0]=l.r,t[e+1]=l.g,t[e+2]=l.b,t[e+3]*=r[3]}}function P(t,e,r,h,u){return function(t,e,r){return t?(0,i.default)(t,{responseType:"image"}).then((function(t){var n=t.data,i=n.width,a=n.height,o=i/a,l=e;if(r){var h=Math.max(i,a);l=Math.min(l,h)}return{image:n,width:o<=1?Math.ceil(l*o):l,height:o<=1?l:Math.ceil(l/o)}})):Promise.reject(new o.Z("renderUtils: imageDataSize","href not provided."))}(t,e,u).then((function(i){var o=i.width?i.width:e,u=i.height?i.height:e;if(i.image&&function(t,e){return!(!t||"ignore"===e)&&("multiply"!==e||255!==t.r||255!==t.g||255!==t.b||1!==t.a)}(r,h)){var c=i.image.width,s=i.image.height;(0,l.Z)("edge")&&/\.svg$/i.test(t)&&(c-=1,s-=1);var f=function(t,e){t=Math.ceil(t),e=Math.ceil(e);var r=document.createElement("canvas");r.width=t,r.height=e,r.style.width=t+"px",r.style.height=e+"px";var n=r.getContext("2d");return n.clearRect(0,0,t,e),n}(o,u);f.drawImage(i.image,0,0,c,s,0,0,o,u);for(var d=f.getImageData(0,0,o,u),y=[r.r/255,r.g/255,r.b/255,r.a],g=(0,a._Y)(r),p=0;p<d.data.length;p+=4)O(d.data,p,y,g,h);f.putImageData(d,0,0),t=f.canvas.toDataURL("image/png")}else{var v=n.id&&n.id.findCredential(t);if(v&&v.token){var m=-1===t.indexOf("?")?"?":"&";t="".concat(t).concat(m,"token=").concat(v.token)}}return{url:t,width:o,height:u}})).catch((function(){return{url:t,width:e,height:e}}))}}}]);
//# sourceMappingURL=1682.ffb7bc48.chunk.js.map