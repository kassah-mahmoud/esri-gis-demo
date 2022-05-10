"use strict";(self.webpackChunkesri_map=self.webpackChunkesri_map||[]).push([[2775,3388],{32698:function(e,r,t){t.d(r,{m:function(){return u}});var n=t(35995),a=t(70032);function u(e){return{origin:"portal-item",url:(0,n.mN)(e.itemUrl),portal:e.portal||a.Z.getDefault(),portalItem:e,readResourcePaths:[]}}},33388:function(e,r,t){t.r(r),t.d(r,{getFirstLayerOrTableId:function(){return g},getNumLayersAndTables:function(){return S},load:function(){return p},preprocessFSItemData:function(){return x}});var n=t(15861),a=t(87757),u=t(10064),s=t(19610),c=t(70032),i=t(32698),o=t(21371),l=t(41226);function p(e,r){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(a.mark((function e(r,t){var n;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=r.instance.portalItem)||!n.id){e.next=8;break}return e.next=4,n.load(t);case 4:y(r),e.t0=d(r,t),e.next=9;break;case 8:e.t0=Promise.resolve();case 9:return e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){var r=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(r.type))throw new u.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}function d(e,r){return m.apply(this,arguments)}function m(){return m=(0,n.Z)(a.mark((function e(r,t){var n,u,s,c,l,p;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.instance,u=n.portalItem,s=u.url,c=u.title,l=(0,i.m)(u),"group"!==n.type){e.next=3;break}return e.abrupt("return",(n.read({title:c},l),v(n,r)));case 3:return s&&n.read({url:s},l),e.next=6,I(r,t);case 6:return p=e.sent,e.abrupt("return",(p&&n.read(p,l),n.resourceReferences={portalItem:u,paths:l.readResourcePaths},n.read({title:c},l),(0,o.y)(n,l)));case 8:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function v(e,r){var t,c,i=e.portalItem.type;switch(i){case"Feature Service":case"Feature Collection":t=s.T.FeatureLayer;break;case"Stream Service":t=s.T.StreamLayer;break;case"Scene Service":t=s.T.SceneLayer;break;default:throw new u.Z("portal:unsupported-item-type-as-group","The item type '".concat(i,"' is not supported as a 'IGroupLayer'"))}return t().then((function(e){return c=e,I(r)})).then(function(){var r=(0,n.Z)(a.mark((function r(t){return a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("Feature Service"!==i){r.next=7;break}return r.next=3,x(t,e.portalItem.url);case 3:t=r.sent,r.t0=b(e,c,t),r.next=8;break;case 7:r.t0=S(t)>0?b(e,c,t):h(e,c);case 8:return r.abrupt("return",r.t0);case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function h(e,r){return e.portalItem.url?(0,l.b)(e.portalItem.url).then((function(t){var n,a;function u(e){return{id:e.id,name:e.name}}t&&b(e,r,{layers:null==(n=t.layers)?void 0:n.map(u),tables:null==(a=t.tables)?void 0:a.map(u)})})):Promise.resolve()}function b(e,r,t){var n=t.layers||[],a=t.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((function(e){var r;"Table"===(null==e||null==(r=e.layerDefinition)?void 0:r.type)&&a.push(e)})),n=n.filter((function(e){var r;return"Table"!==(null==e||null==(r=e.layerDefinition)?void 0:r.type)}))),n.reverse().forEach((function(n){var a=L(e,r,t,n);e.add(a)})),a.reverse().forEach((function(n){var a=L(e,r,t,n);e.tables.add(a)}))}function L(e,r,t,n){var a=new r({portalItem:e.portalItem.clone(),layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var u={origin:"portal-item",portal:e.portalItem.portal||c.Z.getDefault()};a.read(n,u);var s=t.showLegend;null!=s&&a.read({showLegend:s},u)}return a}function I(e,r){if(!1===e.supportsData)return Promise.resolve(void 0);var t=e.instance;return t.portalItem.fetchData("json",r).catch((function(){return null})).then(function(){var e=(0,n.Z)(a.mark((function e(r){var n,u;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!T(t)){e.next=3;break}return u=!0,e.abrupt("return",(r&&S(r)>0&&(null==t.layerId&&(t.layerId=g(r)),(n=k(r,t.layerId))&&(1===S(r)&&(u=!1),null!=r.showLegend&&(n.showLegend=r.showLegend))),u&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),n));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())}function x(e,r){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(a.mark((function e(r,t){var n,u,s;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null==(n=r)?void 0:n.layers)&&null!=(null==(u=r)?void 0:u.tables)){e.next=5;break}return e.next=3,(0,l.b)(t);case 3:s=e.sent,(r=r||{}).layers=r.layers||(null==s?void 0:s.layers),r.tables=r.tables||(null==s?void 0:s.tables);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}function k(e,r){var t=e.layers;if(t)for(var n=0;n<t.length;n++)if(t[n].id===r)return t[n];var a=e.tables;if(a)for(var u=0;u<a.length;u++)if(a[u].id===r)return a[u];return null}function S(e){var r,t,n,a;return(null!=(r=null==e||null==(t=e.layers)?void 0:t.length)?r:0)+(null!=(n=null==e||null==(a=e.tables)?void 0:a.length)?n:0)}function T(e){return"stream"!==e.type&&"layerId"in e}},42775:function(e,r,t){t.r(r),t.d(r,{fromItem:function(){return f},selectLayerClassPath:function(){return y}});var n=t(15861),a=t(1413),u=t(87757),s=t(10064),c=t(19610),i=t(98995),o=t(33388);function l(e,r){return!!e.typeKeywords&&e.typeKeywords.indexOf(r)>-1}var p=t(41226);function f(e){return!e.portalItem||e.portalItem instanceof i.default||(e=(0,a.Z)((0,a.Z)({},e),{},{portalItem:new i.default(e.portalItem)})),function(e){return e.load().then(y).then(d)}(e.portalItem).then((function(r){var t=(0,a.Z)({portalItem:e.portalItem},r.properties),n=r.constructor;return Promise.resolve(new n(t))}))}function y(e){switch(e.type){case"Map Service":return function(e){return function(e){return(0,p.b)(e.url).then((function(e){return e.tileInfo}))}(e).then((function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}}))}(e);case"Feature Service":return function(e){return h(e).then((function(e){if("object"==typeof e){var r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return function(e){return m.apply(this,arguments)}(e);case"Scene Service":return function(e){return h(e).then((function(r){if("object"==typeof r){var t,n={};if(null!=r.id?(n.layerId=r.id,t="".concat(e.url,"/layers/").concat(r.id)):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},u=0,s=Object.keys(a);u<s.length;u++){var c=s[u];if(-1!==e.typeKeywords.indexOf(c))return{className:a[c]}}return(0,p.b)(t).then((function(e){var r="SceneLayer",t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(r=t[e.layerType]),{className:r,properties:n}}))}return!1===r?(0,p.b)(e.url).then((function(e){return"Voxel"===(null==e?void 0:e.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"}})):{className:"GroupLayer"}}))}(e);case"Image Service":return function(e){return v.apply(this,arguments)}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new s.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function d(e){return(0,c.T[e.className])().then((function(r){return{constructor:r,properties:e.properties}}))}function m(){return m=(0,n.Z)(u.mark((function e(r){var t;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(!l(r,"Map Notes")){e.next=4;break}return e.abrupt("return",{className:"MapNotesLayer"});case 4:if(!l(r,"Route Layer")){e.next=6;break}return e.abrupt("return",{className:"RouteLayer"});case 6:return e.next=8,r.fetchData();case 8:return t=e.sent,e.abrupt("return",1===(0,o.getNumLayersAndTables)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"});case 10:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function v(){return v=(0,n.Z)(u.mark((function e(r){var t,n,a,s,c,i;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(s=null!=(t=null==(n=r.typeKeywords)?void 0:n.map((function(e){return e.toLowerCase()})))?t:[],!(s.indexOf("elevation 3d layer")>-1)){e.next=5;break}return e.abrupt("return",{className:"ElevationLayer"});case 5:if(!(s.indexOf("tiled imagery")>-1)){e.next=7;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 7:return e.next=9,r.fetchData();case 9:if(c=e.sent,"ArcGISTiledImageServiceLayer"!==(i=null==c?void 0:c.layerType)){e.next=13;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 13:if("ArcGISImageServiceLayer"!==i){e.next=15;break}return e.abrupt("return",{className:"ImageryLayer"});case 15:return e.next=17,(0,p.b)(r.url);case 17:if(e.t0=a=e.sent.cacheType,null!=e.t0){e.next=22;break}e.t1=void 0,e.next=23;break;case 22:e.t1=a.toLowerCase();case 23:if(e.t2=e.t1,"map"!==e.t2){e.next=28;break}e.t3={className:"ImageryTileLayer"},e.next=29;break;case 28:e.t3={className:"ImageryLayer"};case 29:return e.abrupt("return",e.t3);case 30:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function h(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((function(){return e.fetchData()})).then(function(){var r=(0,n.Z)(u.mark((function r(t){return u.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("Feature Service"!==e.type){r.next=6;break}return r.t0=b,r.next=4,(0,o.preprocessFSItemData)(t,e.url);case 4:return r.t1=t=r.sent,r.abrupt("return",(0,r.t0)(r.t1));case 6:return r.abrupt("return",(0,o.getNumLayersAndTables)(t)>0?b(t):(0,p.b)(e.url).then(b));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}function b(e){return 1===(0,o.getNumLayersAndTables)(e)&&{id:(0,o.getFirstLayerOrTableId)(e)}}},41226:function(e,r,t){t.d(r,{b:function(){return s}});var n=t(15861),a=t(87757),u=t(76200);function s(e){return c.apply(this,arguments)}function c(){return c=(0,n.Z)(a.mark((function e(r){var t,n;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.default)(r,{responseType:"json",query:{f:"json"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}}}]);
//# sourceMappingURL=2775.047240ec.chunk.js.map