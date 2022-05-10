"use strict";(self.webpackChunkesri_map=self.webpackChunkesri_map||[]).push([[7637],{40237:function(n,t,r){r.d(t,{N:function(){return u}});var e=r(43144),i=r(15671),u={convertToGEGeometry:function(n,t){return null==t?null:n.convertJSONToGeometry(t)},exportPoint:function(n,t,r){var e=new a(n.getPointX(t),n.getPointY(t),r),i=n.hasZ(t),u=n.hasM(t);return i&&(e.z=n.getPointZ(t)),u&&(e.m=n.getPointM(t)),e},exportPolygon:function(n,t,r){return new s(n.exportPaths(t),r,n.hasZ(t),n.hasM(t))},exportPolyline:function(n,t,r){return new o(n.exportPaths(t),r,n.hasZ(t),n.hasM(t))},exportMultipoint:function(n,t,r){return new h(n.exportPoints(t),r,n.hasZ(t),n.hasM(t))},exportExtent:function(n,t,r){var e=n.hasZ(t),i=n.hasM(t),u=new f(n.getXMin(t),n.getYMin(t),n.getXMax(t),n.getYMax(t),r);if(e){var a=n.getZExtent(t);u.zmin=a.vmin,u.zmax=a.vmax}if(i){var s=n.getMExtent(t);u.mmin=s.vmin,u.mmax=s.vmax}return u}};var a=(0,e.Z)((function n(t,r,e){(0,i.Z)(this,n),this.x=t,this.y=r,this.spatialReference=e,this.z=void 0,this.m=void 0}));var s=(0,e.Z)((function n(t,r,e,u){(0,i.Z)(this,n),this.rings=t,this.spatialReference=r,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),u&&(this.hasM=u)}));var o=(0,e.Z)((function n(t,r,e,u){(0,i.Z)(this,n),this.paths=t,this.spatialReference=r,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),u&&(this.hasM=u)}));var h=(0,e.Z)((function n(t,r,e,u){(0,i.Z)(this,n),this.points=t,this.spatialReference=r,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),u&&(this.hasM=u)}));var f=(0,e.Z)((function n(t,r,e,u,a){(0,i.Z)(this,n),this.xmin=t,this.ymin=r,this.xmax=e,this.ymax=u,this.spatialReference=a,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}))},58971:function(n,t,r){r.d(t,{G6:function(){return b},Ie:function(){return _},J9:function(){return d},RF:function(){return I},U1:function(){return M},vY:function(){return h},ym:function(){return N}});var e=r(29439),i=r(92026),u=r(77981);var a=function(n,t,r){return[t,r]},s=function(n,t,r){return[t,r,n[2]]},o=function(n,t,r){return[t,r,n[2],n[3]]};function h(n){return n?{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:(0,i.pC)(n.extent)?[n.extent.xmin,n.extent.ymax]:[0,0]}:null}function f(n,t){var r=n.scale,e=n.translate;return Math.round((t-e[0])/r[0])}function l(n,t){var r=n.scale,e=n.translate;return Math.round((e[1]-t)/r[1])}function c(n,t,r){for(var e,i,u,a,s=[],o=0;o<r.length;o++){var h=r[o];o>0?(u=f(n,h[0]),a=l(n,h[1]),u===e&&a===i||(s.push(t(h,u-e,a-i)),e=u,i=a)):(e=f(n,h[0]),i=l(n,h[1]),s.push(t(h,e,i)))}return s.length>0?s:null}function m(n,t){var r=n.scale,e=n.translate;return t*r[0]+e[0]}function v(n,t){var r=n.scale;return n.translate[1]-t*r[1]}function p(n,t,r){var i=new Array(r.length);if(!r.length)return i;var u=(0,e.Z)(n.scale,2),a=u[0],s=u[1],o=m(n,r[0][0]),h=v(n,r[0][1]);i[0]=t(r[0],o,h);for(var f=1;f<r.length;f++){var l=r[f];o+=l[0]*a,h-=l[1]*s,i[f]=t(l,o,h)}return i}function x(n,t,r){for(var e=new Array(r.length),i=0;i<r.length;i++)e[i]=p(n,t,r[i]);return e}function g(n,t,r,e,i){return t.points=function(n,t,r,e){return c(n,r?e?o:s:e?s:a,t)}(n,r.points,e,i),t}function I(n,t,r,e,i){return t.x=f(n,r.x),t.y=l(n,r.y),t!==r&&(e&&(t.z=r.z),i&&(t.m=r.m)),t}function y(n,t,r,e,i){var u=function(n,t,r,e){for(var i=[],u=r?e?o:s:e?s:a,h=0;h<t.length;h++){var f=c(n,u,t[h]);f&&f.length>=3&&i.push(f)}return i.length?i:null}(n,r.rings,e,i);return u?(t.rings=u,t):null}function Z(n,t,r,e,i){var u=function(n,t,r,e){for(var i=[],u=r?e?o:s:e?s:a,h=0;h<t.length;h++){var f=c(n,u,t[h]);f&&f.length>=2&&i.push(f)}return i.length?i:null}(n,r.paths,e,i);return u?(t.paths=u,t):null}function N(n,t){return n&&t?(0,u.wp)(t)?I(n,{},t,!1,!1):(0,u.l9)(t)?Z(n,{},t,!1,!1):(0,u.oU)(t)?y(n,{},t,!1,!1):(0,u.aW)(t)?g(n,{},t,!1,!1):(0,u.YX)(t)?function(n,t,r,e,i){return t.xmin=f(n,r.xmin),t.ymin=l(n,r.ymin),t.xmax=f(n,r.xmax),t.ymax=l(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),i&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}(n,{},t,!1,!1):null:null}function d(n,t,r,e,u){return(0,i.pC)(r)&&(t.points=function(n,t,r,e){return p(n,r?e?o:s:e?s:a,t)}(n,r.points,e,u)),t}function M(n,t,r,e,u){return(0,i.Wi)(r)||(t.x=m(n,r.x),t.y=v(n,r.y),t!==r&&(e&&(t.z=r.z),u&&(t.m=r.m))),t}function _(n,t,r,e,u){return(0,i.pC)(r)&&(t.rings=function(n,t,r,e){return x(n,r?e?o:s:e?s:a,t)}(n,r.rings,e,u)),t}function b(n,t,r,e,u){return(0,i.pC)(r)&&(t.paths=function(n,t,r,e){return x(n,r?e?o:s:e?s:a,t)}(n,r.paths,e,u)),t}},85403:function(n,t,r){r.d(t,{Y:function(){return a}});var e=r(37762),i=r(92026);function u(n,t){return n?t?4:3:t?3:2}function a(n,t,r,a,h){if((0,i.Wi)(t)||!t.lengths.length)return null;var f="upperLeft"===(null==h?void 0:h.originPosition)?-1:1;n.lengths.length&&(n.lengths.length=0),n.coords.length&&(n.coords.length=0);var l,c=n.coords,m=[],v=r?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],p=t.lengths,x=t.coords,g=u(r,a),I=0,y=(0,e.Z)(p);try{for(y.s();!(l=y.n()).done;){var Z=l.value,N=s(v,x,I,Z,r,a,f);N&&m.push(N),I+=Z*g}}catch(_){y.e(_)}finally{y.f()}if(m.sort((function(n,t){var e=f*n[2]-f*t[2];return 0===e&&r&&(e=n[4]-t[4]),e})),m.length){var d=6*m[0][2];c[0]=m[0][0]/d,c[1]=m[0][1]/d,r&&(d=6*m[0][4],c[2]=0!==d?m[0][3]/d:0),(c[0]<v[0]||c[0]>v[1]||c[1]<v[2]||c[1]>v[3]||r&&(c[2]<v[4]||c[2]>v[5]))&&(c.length=0)}if(!c.length){var M=t.lengths[0]?o(x,0,p[0],r,a):null;if(!M)return null;c[0]=M[0],c[1]=M[1],r&&M.length>2&&(c[2]=M[2])}return n}function s(n,t,r,e,i,a){for(var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,o=u(i,a),h=r,f=r+o,l=0,c=0,m=0,v=0,p=0,x=0,g=e-1;x<g;x++,h+=o,f+=o){var I=t[h],y=t[h+1],Z=t[h+2],N=t[f],d=t[f+1],M=t[f+2],_=I*d-N*y;v+=_,l+=(I+N)*_,c+=(y+d)*_,i&&(m+=(Z+M)*(_=I*M-N*Z),p+=_),I<n[0]&&(n[0]=I),I>n[1]&&(n[1]=I),y<n[2]&&(n[2]=y),y>n[3]&&(n[3]=y),i&&(Z<n[4]&&(n[4]=Z),Z>n[5]&&(n[5]=Z))}if(v*s>0&&(v*=-1),p*s>0&&(p*=-1),!v)return null;var b=[l,c,.5*v];return i&&(b[3]=m,b[4]=.5*p),b}function o(n,t,r,e,i){for(var a=u(e,i),s=t,o=t+a,m=0,v=0,p=0,x=0,g=0,I=r-1;g<I;g++,s+=a,o+=a){var y=n[s],Z=n[s+1],N=n[s+2],d=n[o],M=n[o+1],_=n[o+2],b=e?f(y,Z,N,d,M,_):h(y,Z,d,M);if(b)if(m+=b,e){var T=c(y,Z,N,d,M,_);v+=b*T[0],p+=b*T[1],x+=b*T[2]}else{var z=l(y,Z,d,M);v+=b*z[0],p+=b*z[1]}}return m>0?e?[v/m,p/m,x/m]:[v/m,p/m]:r>0?e?[n[t],n[t+1],n[t+2]]:[n[t],n[t+1]]:null}function h(n,t,r,e){var i=r-n,u=e-t;return Math.sqrt(i*i+u*u)}function f(n,t,r,e,i,u){var a=e-n,s=i-t,o=u-r;return Math.sqrt(a*a+s*s+o*o)}function l(n,t,r,e){return[n+.5*(r-n),t+.5*(e-t)]}function c(n,t,r,e,i,u){return[n+.5*(e-n),t+.5*(i-t),r+.5*(u-r)]}},19995:function(n,t,r){r.d(t,{_W:function(){return I},iV:function(){return d},oj:function(){return b}});var e=r(15671),i=r(43144),u=r(15861),a=r(37762),s=r(29439),o=r(87757),h=r(92026),f=r(52587),l=r(40237),c=r(92975),m=r(81753),v=[0,0];function p(n,t){if(!t)return null;if("x"in t){var r,e,i={x:0,y:0};return r=n(t.x,t.y,v),e=(0,s.Z)(r,2),i.x=e[0],i.y=e[1],null!=t.z&&(i.z=t.z),null!=t.m&&(i.m=t.m),i}if("xmin"in t){var u,a,o,h,f={xmin:0,ymin:0,xmax:0,ymax:0};return u=n(t.xmin,t.ymin,v),a=(0,s.Z)(u,2),f.xmin=a[0],f.ymin=a[1],o=n(t.xmax,t.ymax,v),h=(0,s.Z)(o,2),f.xmax=h[0],f.ymax=h[1],t.hasZ&&(f.zmin=t.zmin,f.zmax=t.zmax,f.hasZ=!0),t.hasM&&(f.mmin=t.mmin,f.mmax=t.mmax,f.hasM=!0),f}return"rings"in t?{rings:x(t.rings,n),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:x(t.paths,n),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:g(t.points,n),hasM:t.hasM,hasZ:t.hasZ}:void 0}function x(n,t){var r,e=[],i=(0,a.Z)(n);try{for(i.s();!(r=i.n()).done;){var u=r.value;e.push(g(u,t))}}catch(s){i.e(s)}finally{i.f()}return e}function g(n,t){var r,e=[],i=(0,a.Z)(n);try{for(i.s();!(r=i.n()).done;){var u=r.value,s=t(u[0],u[1],[0,0]);e.push(s),u.length>2&&s.push(u[2]),u.length>3&&s.push(u[3])}}catch(o){i.e(o)}finally{i.f()}return e}function I(n,t){return y.apply(this,arguments)}function y(){return(y=(0,u.Z)(o.mark((function n(t,r){var e;return o.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r){n.next=2;break}return n.abrupt("return");case 2:return e=Array.isArray(t)?t.map((function(n){return(0,h.pC)(n.geometry)&&n.geometry.spatialReference})):[t],n.next=5,(0,f.iQ)(e.map((function(n){return{source:n,dest:r}})));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var Z=p.bind(null,m.hG),N=p.bind(null,m.R6);function d(n,t,r){if(!n)return n;if(r||(r=t,t=n.spatialReference),!(0,c.JY)(t)||!(0,c.JY)(r)||(0,c.fS)(t,r))return n;if((0,m.Q8)(t,r)){var e=(0,c.sS)(r)?Z(n):N(n);return e.spatialReference=r,e}return(0,f.oj)(l.N,[n],t,r,null)[0]}var M=function(){function n(){(0,e.Z)(this,n),this._jobs=[],this._timer=null,this._process=this._process.bind(this)}return(0,i.Z)(n,[{key:"push",value:function(){var n=(0,u.Z)(o.mark((function n(t,r,e){var i,u=this;return o.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t&&t.length&&r&&e&&!(0,c.fS)(r,e)){n.next=2;break}return n.abrupt("return",t);case 2:return i={geometries:t,inSpatialReference:r,outSpatialReference:e,resolve:null},n.abrupt("return",(this._jobs.push(i),new Promise((function(n){i.resolve=n,null===u._timer&&(u._timer=setTimeout(u._process,10))}))));case 4:case"end":return n.stop()}}),n,this)})));return function(t,r,e){return n.apply(this,arguments)}}()},{key:"_process",value:function(){this._timer=null;var n=this._jobs.shift();if(n){var t=n.geometries,r=n.inSpatialReference,e=n.outSpatialReference,i=n.resolve;(0,m.Q8)(r,e)?(0,c.sS)(e)?i(t.map(Z)):i(t.map(N)):i((0,f.oj)(l.N,t,r,e,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}}]),n}(),_=new M;function b(n,t,r){return _.push(n,t,r)}}}]);
//# sourceMappingURL=7637.d4f1d02e.chunk.js.map