"use strict";(self.webpackChunkesri_map=self.webpackChunkesri_map||[]).push([[5903],{76551:function(e,n,a){a.d(n,{Z:function(){return g}});var r=a(15671),t=a(43144),i=a(60136),l=a(54062),u=a(27366),o=a(43404),s=a(49861),f=(a(63780),a(93169),a(25243),a(69912)),c=a(46784),v=a(57634),d=a(22061),m=new o.X({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"}),p=function(e){(0,i.Z)(a,e);var n=(0,l.Z)(a);function a(){var e;return(0,r.Z)(this,a),(e=n.apply(this,arguments)).baseSymbol=null,e.colorRamp=null,e.type=null,e}return(0,t.Z)(a)}(c.wq);(0,u._)([(0,s.Cb)({type:d.Z,json:{write:!0}})],p.prototype,"baseSymbol",void 0),(0,u._)([(0,s.Cb)({types:v.V,json:{read:{reader:v.i},write:!0}})],p.prototype,"colorRamp",void 0),(0,u._)([(0,s.Cb)({json:{read:m.read,write:m.write}})],p.prototype,"type",void 0);var h=p=(0,u._)([(0,f.j)("esri.rest.support.ClassificationDefinition")],p),b=new o.X({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),y=new o.X({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"}),V=function(e){(0,i.Z)(a,e);var n=(0,l.Z)(a);function a(){var e;return(0,r.Z)(this,a),(e=n.apply(this,arguments)).breakCount=null,e.classificationField=null,e.classificationMethod=null,e.normalizationField=null,e.normalizationType=null,e.type="class-breaks-definition",e}return(0,t.Z)(a,[{key:"standardDeviationInterval",set:function(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}},{key:"definedInterval",set:function(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}}]),a}(h);(0,u._)([(0,s.Cb)({json:{write:!0}})],V.prototype,"breakCount",void 0),(0,u._)([(0,s.Cb)({json:{write:!0}})],V.prototype,"classificationField",void 0),(0,u._)([(0,s.Cb)({type:String,json:{read:b.read,write:b.write}})],V.prototype,"classificationMethod",void 0),(0,u._)([(0,s.Cb)({json:{write:!0}})],V.prototype,"normalizationField",void 0),(0,u._)([(0,s.Cb)({json:{read:y.read,write:y.write}})],V.prototype,"normalizationType",void 0),(0,u._)([(0,s.Cb)({value:null,json:{write:!0}})],V.prototype,"standardDeviationInterval",null),(0,u._)([(0,s.Cb)({value:null,json:{write:!0}})],V.prototype,"definedInterval",null),(0,u._)([(0,s.Cb)()],V.prototype,"type",void 0);var g=V=(0,u._)([(0,f.j)("esri.rest.support.ClassBreaksDefinition")],V)},15903:function(e,n,a){a.d(n,{G2:function(){return k},oF:function(){return w},XL:function(){return g},i5:function(){return V},H0:function(){return y},eT:function(){return C},Qm:function(){return D},Lq:function(){return x},fk:function(){return z},S5:function(){return b},F_:function(){return M},DL:function(){return S}});var r=a(37762),t=a(93433),i=a(76551);function l(e,n){return Number(e.toFixed(n))}function u(e){var n=e.normalizationTotal;return{classBreaks:o(e),normalizationTotal:n}}function o(e){var n=e.definition,a=n.classificationMethod,r=n.breakCount,t=n.normalizationType,i=n.definedInterval,u=[],o=e.values;if(0===o.length)return[];o=o.sort((function(e,n){return e-n}));var v=o[0],d=o[o.length-1];if("equal-interval"===a)if(o.length>=r){for(var m=(d-v)/r,p=v,h=1;h<r;h++){var b=l(v+h*m,6);u.push({minValue:p,maxValue:b,label:s(p,b,t)}),p=b}u.push({minValue:p,maxValue:d,label:s(p,d,t)})}else o.forEach((function(e){u.push({minValue:e,maxValue:e,label:s(e,e,t)})}));else if("natural-breaks"===a){for(var y=f(o),V=e.valueFrequency||y.valueFrequency,g=c(y.uniqueValues,V,r),x=v,T=1;T<r;T++)if(y.uniqueValues.length>T){var F=l(y.uniqueValues[g[T]],6);u.push({minValue:x,maxValue:F,label:s(x,F,t)}),x=F}u.push({minValue:x,maxValue:d,label:s(x,d,t)})}else if("quantile"===a)if(o.length>=r&&v!==d){for(var M=v,C=Math.ceil(o.length/r),D=0,z=1;z<r;z++){var k=C+D-1;k>o.length&&(k=o.length-1),k<0&&(k=0),u.push({minValue:M,maxValue:o[k],label:s(M,o[k],t)}),M=o[k],D+=C,C=Math.ceil((o.length-D)/(r-z))}u.push({minValue:M,maxValue:d,label:s(M,d,t)})}else for(var I=-1,S=0;S<o.length;S++){var w=o[S];w!==I&&(I=w,u.push({minValue:I,maxValue:w,label:s(I,w,t)}),I=w)}else if("standard-deviation"===a){var N=function(e){for(var n=0,a=0;a<e.length;a++)n+=e[a];return n/e.length}(o),q=function(e,n){for(var a=0,r=0;r<e.length;r++){var t=e[r];a+=(t-n)*(t-n)}return a/=e.length,Math.sqrt(a)}(o,N);if(0===q)u.push({minValue:o[0],maxValue:o[0],label:s(o[0],o[0],t)});else{for(var _=function(e,n,a,r,t){var i=Math.max(r-e,n-r)/t/a;return i>=1?1:i>=.5?.5:.25}(v,d,r,N,q)*q,Z=0,B=v,j=r;j>=1;j--){var E=l(N-(j-.5)*_,6);u.push({minValue:B,maxValue:E,label:s(B,E,t)}),B=E,Z++}var G=l(N+.5*_,6);u.push({minValue:B,maxValue:G,label:s(B,G,t)}),B=G,Z++;for(var L=1;L<=r;L++)G=Z===2*r?d:l(N+(L+.5)*_,6),u.push({minValue:B,maxValue:G,label:s(B,G,t)}),B=G,Z++}}else if("defined-interval"===a){if(!i)return u;for(var P=o[0],U=o[o.length-1],O=Math.ceil((U-P)/i),X=P,A=1;A<O;A++){var Q=l(P+A*i,6);u.push({minValue:X,maxValue:Q,label:s(X,Q,t)}),X=Q}u.push({minValue:X,maxValue:U,label:s(X,U,t)})}return u}function s(e,n,a){return e===n?a&&"percent-of-total"===a?e+"%":e.toString():a&&"percent-of-total"===a?e+"% - "+n+"%":e+" - "+n}function f(e){for(var n=[],a=[],r=Number.MIN_VALUE,t=1,i=-1,l=0;l<e.length;l++){var u=e[l];u===r?(t++,a[i]=t):null!==u&&(n.push(u),r=u,t=1,a.push(t),i++)}return{uniqueValues:n,valueFrequency:a}}function c(e,n,a){var r=e.length,t=[];a>r&&(a=r);for(var i=0;i<a;i++)t.push(Math.round(i*r/a-1));t.push(r-1);var l=v(t,e,n,a);return function(e,n,a,r,t,i){for(var l=0,u=0,o=0,s=0,f=!0,c=0;c<2&&f;c++){0===c&&(f=!1);for(var v=0;v<i-1;v++)for(;a[v+1]+1!==a[v+2];){a[v+1]=a[v+1]+1;var m=d(v,a,r,t);o=m.sbMean,l=m.sbSdcm;var p=d(v+1,a,r,t);if(s=p.sbMean,!(l+(u=p.sbSdcm)<n[v]+n[v+1])){a[v+1]=a[v+1]-1;break}n[v]=l,n[v+1]=u,e[v]=o,e[v+1]=s,f=!0}for(var h=i-1;h>0;h--)for(;a[h]!==a[h-1]+1;){a[h]=a[h]-1;var b=d(h-1,a,r,t);o=b.sbMean,l=b.sbSdcm;var y=d(h,a,r,t);if(s=y.sbMean,!(l+(u=y.sbSdcm)<n[h-1]+n[h])){a[h]=a[h]+1;break}n[h-1]=l,n[h]=u,e[h-1]=o,e[h]=s,f=!0}}return f}(l.mean,l.sdcm,t,e,n,a)&&(l=v(t,e,n,a)),t}function v(e,n,a,r){for(var t=[],i=[],l=[],u=0,o=[],s=[],f=0;f<r;f++){var c=d(f,e,n,a);o.push(c.sbMean),s.push(c.sbSdcm),u+=s[f]}for(var v,m=u,p=!0;p||u<m;){p=!1,t=[];for(var h=0;h<r;h++)t.push(e[h]);for(var b=0;b<r;b++)for(var y=e[b]+1;y<=e[b+1];y++)if(v=n[y],b>0&&y!==e[b+1]&&Math.abs(v-o[b])>Math.abs(v-o[b-1]))e[b]=y;else if(b<r-1&&e[b]!==y-1&&Math.abs(v-o[b])>Math.abs(v-o[b+1])){e[b+1]=y-1;break}m=u,u=0,i=[],l=[];for(var V=0;V<r;V++){i.push(o[V]),l.push(s[V]);var g=d(V,e,n,a);o[V]=g.sbMean,s[V]=g.sbSdcm,u+=s[V]}}if(u>m){for(var x=0;x<r;x++)e[x]=t[x],o[x]=i[x],s[x]=l[x];u=m}return{mean:o,sdcm:s}}function d(e,n,a,r){for(var t=0,i=0,l=n[e]+1;l<=n[e+1];l++){var u=r[l];t+=a[l]*u,i+=u}i<=0&&console.log("Exception in Natural Breaks calculation");for(var o=t/i,s=0,f=n[e]+1;f<=n[e+1];f++)s+=r[f]*Math.pow(a[f]-o,2);return{sbMean:o,sbSdcm:s}}var m=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,p=new Set(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]),h=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function b(e){var n=null!=e.normalizationField||null!=e.normalizationType,a=null!=e.minValue||null!=e.maxValue,r=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!a&&!r}function y(e){var n=e.returnDistinct?(0,t.Z)(new Set(e.values)):e.values,a=n.filter((function(e){return null!=e})).length,r={count:a};return e.supportsNullCount&&(r.nullcount=n.length-a),e.percentileParams&&(r.median=g(n,e.percentileParams)),r}function V(e){var n,a=e.values,t=e.useSampleStdDev,i=e.supportsNullCount,l=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,o=null,s=null,f=null,c=null,v=0,d=null==e.minValue?-1/0:e.minValue,m=null==e.maxValue?1/0:e.maxValue,p=(0,r.Z)(a);try{for(p.s();!(n=p.n()).done;){var h=n.value;Number.isFinite(h)?h>=d&&h<=m&&(o+=h,l=Math.min(l,h),u=Math.max(u,h),v++):"string"==typeof h&&v++}}catch(F){p.e(F)}finally{p.f()}if(v&&null!=o){s=o/v;var b,y=0,V=(0,r.Z)(a);try{for(V.s();!(b=V.n()).done;){var x=b.value;Number.isFinite(x)&&x>=d&&x<=m&&(y+=Math.pow(x-s,2))}}catch(F){V.e(F)}finally{V.f()}c=t?v>1?y/(v-1):0:v>0?y/v:0,f=Math.sqrt(c)}else l=null,u=null;var T={avg:s,count:v,max:u,min:l,stddev:f,sum:o,variance:c};return i&&(T.nullcount=a.length-v),e.percentileParams&&(T.median=g(a,e.percentileParams)),T}function g(e,n){var a=n.fieldType,r=n.value,i=n.orderBy,l=n.isDiscrete,u=x(a,"desc"===i);if(0===(e=(0,t.Z)(e).filter((function(e){return null!=e})).sort((function(e,n){return u(e,n)}))).length)return null;if(r<=0)return e[0];if(r>=1)return e[e.length-1];var o=(e.length-1)*r,s=Math.floor(o),f=s+1,c=o%1,v=e[s],d=e[f];return f>=e.length||l||"string"==typeof v||"string"==typeof d?v:v*(1-c)+d*c}function x(e,n){var a=n?1:-1,r=function(e){return e?function(e,n){return n-e}:function(e,n){return e-n}}(n),i=T(n);if(!e||!["esriFieldTypeDate","esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID"].concat((0,t.Z)(p)).includes(e))return function(e,n){return"number"==typeof e&&"number"==typeof n?r(e,n):"string"==typeof e&&"string"==typeof n?i(e,n):a};if("esriFieldTypeDate"===e)return function(e,n){var t=new Date(e).getTime(),i=new Date(n).getTime();return isNaN(t)||isNaN(i)?a:r(t,i)};if(p.has(e))return function(e,n){return r(e,n)};if("esriFieldTypeString"===e)return function(e,n){return i(e,n)};if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e){var l=T(n);return function(e,n){return l(F(e),F(n))}}return n?function(e,n){return 1}:function(e,n){return-1}}function T(e){return e?function(e,n){var a,r;return(e=null==(a=e)?void 0:a.toUpperCase())>(n=null==(r=n)?void 0:r.toUpperCase())?-1:e<n?1:0}:function(e,n){var a,r;return(e=null==(a=e)?void 0:a.toUpperCase())<(n=null==(r=n)?void 0:r.toUpperCase())?-1:e>n?1:0}}function F(e){return e.substr(24,12)+e.substr(19,4)+e.substr(16,2)+e.substr(14,2)+e.substr(11,2)+e.substr(9,2)+e.substr(6,2)+e.substr(4,2)+e.substr(2,2)+e.substr(0,2)}function M(e,n){var a;for(a in e)h.indexOf(a)>-1&&(Number.isFinite(e[a])||(e[a]=null));return n?(["avg","stddev","variance"].forEach((function(n){null!=e[n]&&(e[n]=Math.ceil(e[n]))})),e):e}function C(e){var n,a={},t=(0,r.Z)(e);try{for(t.s();!(n=t.n()).done;){var i=n.value;(null==i||"string"==typeof i&&""===i.trim())&&(i=null),null==a[i]?a[i]={count:1,data:i}:a[i].count++}}catch(l){t.e(l)}finally{t.f()}return{count:a}}function D(e,n,a){var r=e.count,t=[];for(var i in a&&n&&"coded-value"===n.type&&n.codedValues.forEach((function(e){var n=e.code;r.hasOwnProperty(n)||(r[n]={data:n,count:0})})),r){var l=r[i];t.push({value:l.data,count:l.count,label:l.label})}return{uniqueValueInfos:t}}function z(e,n,a,r){var t=null;switch(n){case"log":0!==e&&(t=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(r)&&0!==r&&(t=e/r*100);break;case"field":Number.isFinite(a)&&0!==a&&(t=e/a);break;case"natural-log":e>0&&(t=Math.log(e));break;case"square-root":e>0&&(t=Math.pow(e,.5))}return t}function k(e,n){var a=I({field:n.field,normalizationType:n.normalizationType,normalizationField:n.normalizationField,classificationMethod:n.classificationMethod,standardDeviationInterval:n.standardDeviationInterval,breakCount:n.numClasses||5});return e=function(e,n,a){return n=null==n?-1/0:n,a=null==a?1/0:a,e.filter((function(e){return Number.isFinite(e)&&e>=n&&e<=a}))}(e,n.minValue,n.maxValue),u({definition:a,values:e,normalizationTotal:n.normalizationTotal})}function I(e){var n=e.field,a=e.classificationMethod||"equal-interval",r=e.normalizationType,t=e.normalizationField,l=new i.Z;return l.classificationField=n,l.breakCount=e.breakCount,l.classificationMethod=a,l.standardDeviationInterval="standard-deviation"===a?e.standardDeviationInterval||1:void 0,l.normalizationType=r,l.normalizationField="field"===r?t:void 0,l}function S(e,n){var a=e.classBreaks,r=a.length,t=a[0].minValue,i=a[r-1].maxValue,l="standard-deviation"===n,u=m;return a=a.map((function(e){var n=e.label,a={minValue:e.minValue,maxValue:e.maxValue,label:n};if(l&&n){var r=n.match(u).map((function(e){return+e.trim()}));2===r.length?(a.minStdDev=r[0],a.maxStdDev=r[1],r[0]<0&&r[1]>0&&(a.hasAvg=!0)):1===r.length&&(n.includes("<")?(a.minStdDev=null,a.maxStdDev=r[0]):n.includes(">")&&(a.minStdDev=r[0],a.maxStdDev=null))}return a})),{minValue:t,maxValue:i,classBreakInfos:a,normalizationTotal:e.normalizationTotal}}function w(e,n){var a,t=function(e,n){var a=n.field,r=n.classificationMethod,t=n.standardDeviationInterval,i=n.normalizationType,l=n.normalizationField,u=n.normalizationTotal,o=n.minValue,s=n.maxValue,f=n.numBins||10,c=null,v=null,d=null;if(r&&"equal-interval"!==r||i){var m=k(e,{field:a,normalizationType:i,normalizationField:l,normalizationTotal:u,classificationMethod:r,standardDeviationInterval:t,minValue:o,maxValue:s,numClasses:f}).classBreaks;c=m[0].minValue,v=m[m.length-1].maxValue,d=m.map((function(e){return[e.minValue,e.maxValue]}))}else{if(null!=o&&null!=s)c=o,v=s;else{var p=V({values:e,minValue:o,maxValue:s,useSampleStdDev:!i,supportsNullCount:b({normalizationType:i,normalizationField:l,minValue:o,maxValue:s})});c=p.min,v=p.max}d=function(e,n,a){for(var r,t=(n-e)/a,i=[],l=e,u=1;u<=a;u++)r=l+t,r=Number(r.toFixed(16)),i.push([l,u===a?n:r]),l=r;return i}(c,v,f)}return{min:c,max:v,intervals:d}}(e,n),i=t.min,l=t.max,u=t.intervals,o=u.map((function(e,n){return{minValue:u[n][0],maxValue:u[n][1],count:0}})),s=(0,r.Z)(e);try{for(s.s();!(a=s.n()).done;){var f=a.value;if(null!=f&&f>=i&&f<=l){var c=N(u,f);c>-1&&o[c].count++}}}catch(v){s.e(v)}finally{s.f()}return{bins:o,minValue:i,maxValue:l,normalizationTotal:n.normalizationTotal}}function N(e,n){for(var a=-1,r=e.length-1;r>=0;r--)if(n>=e[r][0]){a=r;break}return a}}}]);
//# sourceMappingURL=5903.083f0740.chunk.js.map