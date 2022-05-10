"use strict";(self.webpackChunkesri_map=self.webpackChunkesri_map||[]).push([[9583,9764],{19583:function(e,r,t){t.r(r),t.d(r,{default:function(){return z}});var i=t(15861),n=t(1413),a=t(15671),o=t(43144),s=t(60136),l=t(54062),u=t(87757),y=t(27366),c=t(76200),p=t(62044),f=t(10064),h=t(41691),m=t(93002),d=t(92026),v=t(97642),b=t(66978),g=t(49861),S=(t(63780),t(93169),t(25243)),x=t(38511),_=t(69912),Z=t(31201),k=t(25265),C=t(53866),w=t(82582),I=t(74184),O=t(27961),L=t(6741),E=t(11936),N=t(6693),P=t(46671),D=t(6061),M=t(29598),F=t(71684),R=t(56811),T=t(18870),j=t(99063),J=t(45948),V=t(44041),q=t(77990),U=t(58132),A=t(26704),H=function(e){(0,s.Z)(t,e);var r=(0,l.Z)(t);function t(){var e;(0,a.Z)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=r.call.apply(r,[this].concat(n))).datesInUnknownTimezone=!1,e.dpi=96,e.gdbVersion=null,e.imageFormat="png24",e.imageMaxHeight=2048,e.imageMaxWidth=2048,e.imageTransparency=!0,e.isReference=null,e.labelsVisible=!1,e.operationalLayerType="ArcGISMapServiceLayer",e.sourceJSON=null,e.sublayers=null,e.type="map-image",e.url=null,e}return(0,o.Z)(t,[{key:"normalizeCtorArgs",value:function(e,r){return"string"==typeof e?(0,n.Z)({url:e},r):e}},{key:"load",value:function(e){var r=this,t=(0,d.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b.r9).then((function(){return r._fetchService(t)}))),Promise.resolve(this)}},{key:"readImageFormat",value:function(e,r){var t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}},{key:"writeSublayers",value:function(e,r,t,i){if(this.loaded&&e){var a=e.slice().reverse().flatten((function(e){var r=e.sublayers;return r&&r.toArray().reverse()})).toArray(),o=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){var s=(0,k.M9)(i.origin);if(s===k.s3.PORTAL_ITEM){var l=this.createSublayersForOrigin("service").sublayers;o=(0,U.QV)(a,l,k.s3.SERVICE)}else if(s>k.s3.PORTAL_ITEM){var u=this.createSublayersForOrigin("portal-item");o=(0,U.QV)(a,u.sublayers,(0,k.M9)(u.origin))}}var y=[],c=(0,n.Z)({writeSublayerStructure:o},i),p=o;a.forEach((function(e){var r=e.write({},c);y.push(r),p=p||"user"===e.originOf("visible")})),y.some((function(e){return Object.keys(e).length>1}))&&(r.layers=y),p&&(r.visibleLayers=a.filter((function(e){return e.visible})).map((function(e){return e.id})))}}},{key:"createExportImageParameters",value:function(e,r,t,i){var a=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var o=new V.R({layer:this,floors:null==i?void 0:i.floors,scale:(0,w.yZ)({extent:e,width:r})*a}),s=o.toJSON();o.destroy();var l=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},u=e&&e.spatialReference,y=u.wkid||JSON.stringify(u.toJSON());s.dpi*=a;var c={};if(null!=i&&i.timeExtent){var p=i.timeExtent.toJSON(),f=p.start,h=p.end;c.time=f&&h&&f===h?""+f:"".concat(null==f?"null":f,",").concat(null==h?"null":h)}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return(0,n.Z)((0,n.Z)((0,n.Z)({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:r+","+t},s),l),c)}},{key:"fetchImage",value:function(){var e=(0,i.Z)(u.mark((function e(r,t,i,a){var o,s,l;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s={responseType:"image",signal:null!=(o=null==a?void 0:a.signal)?o:null,query:(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},this.parsedUrl.query),this.createExportImageParameters(r,t,i,a)),{},{f:"image"},this.refreshParameters),this.customParameters),{},{token:this.apiKey})},l=this.parsedUrl.path+"/export",null==s.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers){e.next=3;break}return e.abrupt("return",Promise.reject(new f.Z("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:s.query})));case 3:return e.abrupt("return",(0,c.default)(l,s).then((function(e){return e.data})).catch((function(e){if((0,b.D_)(e))throw e;throw new f.Z("mapimagelayer:image-fetch-error","Unable to load image: ".concat(l),{error:e})})));case 4:case"end":return e.stop()}}),e,this)})));return function(r,t,i,n){return e.apply(this,arguments)}}()},{key:"fetchRecomputedExtents",value:function(){var e=(0,i.Z)(u.mark((function e(){var r,t,i,a,o,s,l,y,f=arguments;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=f.length>0&&void 0!==f[0]?f[0]:{},t=(0,n.Z)((0,n.Z)({},r),{},{query:(0,n.Z)((0,n.Z)({returnUpdates:!0,f:"json"},this.customParameters),{},{token:this.apiKey})}),e.next=4,(0,c.default)(this.url,t);case 4:return i=e.sent,a=i.data,o=a.extent,s=a.fullExtent,l=a.timeExtent,y=o||s,e.abrupt("return",{fullExtent:y&&C.Z.fromJSON(y),timeExtent:l&&p.Z.fromJSON({start:l[0],end:l[1]})});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadAll",value:function(){var e=this;return(0,m.G)(this,(function(r){r(e.allSublayers)}))}},{key:"serviceSupportsSpatialReference",value:function(e){return(0,A.D)(this,e)}},{key:"_fetchService",value:function(){var e=(0,i.Z)(u.mark((function e(r){var t,i;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}));case 2:return e.next=4,(0,c.default)(this.parsedUrl.path,{query:(0,n.Z)((0,n.Z)((0,n.Z)({f:"json"},this.parsedUrl.query),this.customParameters),{},{token:this.apiKey}),signal:r});case 4:t=e.sent,i=t.data,t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i,this.read(i,{origin:"service",url:this.parsedUrl});case 8:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()}]),t}((0,N.h)((0,j.n)((0,R.M)((0,T.x)((0,L.O)((0,E.Y)((0,D.q)((0,M.I)((0,v.R)((0,F.Q)((0,O.V)((0,P.N)((0,h.p)(I.Z))))))))))))));(0,y._)([(0,g.Cb)({type:Boolean})],H.prototype,"datesInUnknownTimezone",void 0),(0,y._)([(0,g.Cb)()],H.prototype,"dpi",void 0),(0,y._)([(0,g.Cb)()],H.prototype,"gdbVersion",void 0),(0,y._)([(0,g.Cb)()],H.prototype,"imageFormat",void 0),(0,y._)([(0,x.r)("imageFormat",["supportedImageFormatTypes"])],H.prototype,"readImageFormat",null),(0,y._)([(0,g.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],H.prototype,"imageMaxHeight",void 0),(0,y._)([(0,g.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],H.prototype,"imageMaxWidth",void 0),(0,y._)([(0,g.Cb)()],H.prototype,"imageTransparency",void 0),(0,y._)([(0,g.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],H.prototype,"isReference",void 0),(0,y._)([(0,g.Cb)({json:{read:!1,write:!1}})],H.prototype,"labelsVisible",void 0),(0,y._)([(0,g.Cb)({type:["ArcGISMapServiceLayer"]})],H.prototype,"operationalLayerType",void 0),(0,y._)([(0,g.Cb)({json:{read:!1,write:!1}})],H.prototype,"popupEnabled",void 0),(0,y._)([(0,g.Cb)()],H.prototype,"sourceJSON",void 0),(0,y._)([(0,g.Cb)({json:{write:{ignoreOrigin:!0}}})],H.prototype,"sublayers",void 0),(0,y._)([(0,Z.c)("sublayers",{layers:{type:[q.Z]},visibleLayers:{type:[S.z8]}})],H.prototype,"writeSublayers",null),(0,y._)([(0,g.Cb)({type:["show","hide","hide-children"]})],H.prototype,"listMode",void 0),(0,y._)([(0,g.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],H.prototype,"type",void 0),(0,y._)([(0,g.Cb)(J.HQ)],H.prototype,"url",void 0);var z=H=(0,y._)([(0,_.j)("esri.layers.MapImageLayer")],H)},44041:function(e,r,t){t.d(r,{R:function(){return b}});var i=t(1413),n=t(15671),a=t(43144),o=t(60136),s=t(54062),l=t(27366),u=t(85015),y=t(41691),c=t(92026),p=t(49861),f=(t(63780),t(93169),t(25243),t(69912)),h=t(45948),m=t(58132),d=t(10141),v={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"},b=function(e){(0,o.Z)(t,e);var r=(0,s.Z)(t);function t(e){var i;return(0,n.Z)(this,t),(i=r.call(this,e)).floors=null,i.scale=0,i}return(0,a.Z)(t,[{key:"destroy",value:function(){this.layer=null}},{key:"dynamicLayers",get:function(){var e=this;if(!this.hasDynamicLayers)return null;var r=this.visibleSublayers.map((function(r){var t=(0,d.ff)(e.floors,r);return r.toExportImageJSON(t)}));return r.length?JSON.stringify(r):null}},{key:"hasDynamicLayers",get:function(){return this.layer&&(0,m.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}},{key:"layer",set:function(e){var r=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(function(){return r.notifyChange("visibleSublayers")})),e.on("sublayer-update",(function(e){return r.notifyChange(v[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map((function(e){return e.id})).join(","):"show:-1":null}},{key:"layerDefs",get:function(){var e,r=this,t=!(null==(e=this.floors)||!e.length),i=this.visibleSublayers.filter((function(e){return null!=e.definitionExpression||t&&null!=e.floorInfo}));return i.length?JSON.stringify(i.reduce((function(e,t){var i=(0,d.ff)(r.floors,t),n=(0,c.pC)(i)?(0,d.Hp)(i,t):t.definitionExpression;return e[t.id]=n,e}),{})):null}},{key:"version",get:function(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");var e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this,r=[];if(!this.layer)return r;var t=this.layer.sublayers;t&&t.forEach((function t(i){var n=e.scale,a=0===n,o=0===i.minScale||n<=i.minScale,s=0===i.maxScale||n>=i.maxScale;i.visible&&(a||o&&s)&&(i.sublayers?i.sublayers.forEach(t):r.unshift(i))}));var i=this._get("visibleSublayers");return!i||i.length!==r.length||i.some((function(e,t){return r[t]!==e}))?r:i}},{key:"toJSON",value:function(){var e=this.layer,r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r=(0,i.Z)((0,i.Z)({},r),{},{layers:this.layers,layerDefs:this.layerDefs}),r}}]),t}((0,y.p)(u.Z));(0,l._)([(0,p.Cb)({readOnly:!0})],b.prototype,"dynamicLayers",null),(0,l._)([(0,p.Cb)()],b.prototype,"floors",void 0),(0,l._)([(0,p.Cb)({readOnly:!0})],b.prototype,"hasDynamicLayers",null),(0,l._)([(0,p.Cb)()],b.prototype,"layer",null),(0,l._)([(0,p.Cb)({readOnly:!0})],b.prototype,"layers",null),(0,l._)([(0,p.Cb)({readOnly:!0})],b.prototype,"layerDefs",null),(0,l._)([(0,p.Cb)({type:Number})],b.prototype,"scale",void 0),(0,l._)([(0,p.Cb)(h.qG)],b.prototype,"timeExtent",void 0),(0,l._)([(0,p.Cb)({readOnly:!0})],b.prototype,"version",null),(0,l._)([(0,p.Cb)({readOnly:!0})],b.prototype,"visibleSublayers",null),b=(0,l._)([(0,f.j)("esri.layers.mixins.ExportImageParameters")],b)},10141:function(e,r,t){function i(e){var r,t=e.layer;return"floorInfo"in t&&null!=(r=t.floorInfo)&&r.floorField&&"floors"in e.view?o(e.view.floors,t.floorInfo.floorField):null}function n(e,r){var t;return"floorInfo"in r&&null!=(t=r.floorInfo)&&t.floorField?o(e,r.floorInfo.floorField):null}function a(e,r){var t=r.definitionExpression;return e?t?"(".concat(t,") AND (").concat(e,")"):e:t}function o(e,r){if(null==e||!e.length)return null;var t=e.filter((function(e){return""!==e})).map((function(e){return"'".concat(e,"'")}));return t.push("''"),"".concat(r," IN (").concat(t.join(","),") OR ").concat(r," IS NULL")}t.d(r,{Hp:function(){return a},cx:function(){return i},ff:function(){return n}})}}]);
//# sourceMappingURL=9583.01feab09.chunk.js.map