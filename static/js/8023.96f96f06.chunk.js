"use strict";(self.webpackChunkesri_map=self.webpackChunkesri_map||[]).push([[8023],{28023:function(e,r,t){t.r(r),t.d(r,{execute:function(){return c}});var a,n=t(1413),s=t(15861),u=t(87757),i=t(10064),o=t(92026);function c(e,r){var t=r.responseType;t?"array-buffer"!==t&&"blob"!==t&&"json"!==t&&"native"!==t&&"native-request-init"!==t&&"text"!==t&&(t="text"):t="json",r.responseType=t;var c=(0,o.Wg)(r.signal);return delete r.signal,globalThis.invokeStaticMessage("request",{url:e,options:r},{signal:c}).then(function(){var o=(0,s.Z)(u.mark((function s(o){var b,l,p,f,k,x,v;return u.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!o.data){s.next=22;break}if(!(o.data instanceof ArrayBuffer)){s.next=16;break}if("json"!==t&&"text"!==t&&"blob"!==t||(b=new Blob([o.data]),"json"!==t&&"text"!==t||(a||(a=new FileReaderSync),f=a.readAsText(b),"json"!==t))){s.next=14;break}s.prev=3,l=JSON.parse(f||null),s.next=11;break;case 7:throw s.prev=7,s.t0=s.catch(3),x=(0,n.Z)((0,n.Z)({},s.t0),{},{url:e,requestOptions:r}),new i.Z("request:server",s.t0.message,x);case 11:if(!l.error){s.next=14;break}throw v=(0,n.Z)((0,n.Z)({},l.error),{},{url:e,requestOptions:r}),new i.Z("request:server",l.error.message,v);case 14:s.next=22;break;case 16:if(s.t1="native"===t,!s.t1){s.next=22;break}return o.data.signal=c,s.next=21,fetch(o.data.url,o.data);case 21:p=s.sent;case 22:s.t2=t,s.next="blob"===s.t2?25:"json"===s.t2?27:"native"===s.t2?29:"text"===s.t2?31:33;break;case 25:return k=b,s.abrupt("break",34);case 27:return k=l,s.abrupt("break",34);case 29:return k=p,s.abrupt("break",34);case 31:return k=f,s.abrupt("break",34);case 33:k=o.data;case 34:return s.abrupt("return",{data:k,requestOptions:r,ssl:o.ssl,url:e});case 35:case"end":return s.stop()}}),s,null,[[3,7]])})));return function(e){return o.apply(this,arguments)}}())}}}]);
//# sourceMappingURL=8023.96f96f06.chunk.js.map