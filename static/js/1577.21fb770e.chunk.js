"use strict";(self.webpackChunkesri_map=self.webpackChunkesri_map||[]).push([[1577],{43813:function(e,t,r){r.d(t,{E:function(){return a}});var i=r(15671),n=r(43144),s=r(29439),o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,i.Z)(this,e),this._options=t}return(0,n.Z)(e,[{key:"toQueryParams",value:function(e){var t=this;if(!e)return null;var r=e.toJSON(),i={};return Object.keys(r).forEach((function(e){var n=t._options[e];if(n){var o="boolean"!=typeof n&&n.name?n.name:e,a="boolean"!=typeof n&&n.getter?n.getter(r):r[e];null!=a&&(i[o]=function(e){if(!Array.isArray(e))return!1;var t=(0,s.Z)(e,1)[0];return"number"==typeof t||"string"==typeof t}(a)?a.join(","):"object"==typeof a?JSON.stringify(a):a)}else i[e]=r[e]}),this),i}}]),e}();function a(e){return new o(e)}},69732:function(e,t,r){r.d(t,{et:function(){return k},ef:function(){return S},bI:function(){return _},Wf:function(){return Z}});var i=r(15861),n=r(37762),s=r(87757),o=r(76200),a=r(10064),u=r(92026),l=r(18202),c=r(35995),p=r(23084),d=r(43144),f=r(15671),m=r(60136),v=r(54062),y=r(27366),h=r(46784),b=r(49861),g=(r(63780),r(93169),r(25243),r(27135)),w=r(69912),N=r(49022),A=r(77279),T=function(e){(0,m.Z)(r,e);var t=(0,v.Z)(r);function r(e){var i;return(0,f.Z)(this,r),(i=t.call(this,e)).accumulateAttributeNames=null,i.currentVersion=null,i.defaultTravelMode=null,i.directionsLanguage=null,i.directionsLengthUnits=null,i.directionsSupportedLanguages=null,i.directionsTimeAttribute=null,i.hasZ=null,i.impedance=null,i.networkDataset=null,i.supportedTravelModes=null,i}return(0,d.Z)(r)}(h.wq);(0,y._)([(0,b.Cb)()],T.prototype,"accumulateAttributeNames",void 0),(0,y._)([(0,b.Cb)()],T.prototype,"currentVersion",void 0),(0,y._)([(0,b.Cb)()],T.prototype,"defaultTravelMode",void 0),(0,y._)([(0,b.Cb)()],T.prototype,"directionsLanguage",void 0),(0,y._)([(0,g.J)(N.GX)],T.prototype,"directionsLengthUnits",void 0),(0,y._)([(0,b.Cb)()],T.prototype,"directionsSupportedLanguages",void 0),(0,y._)([(0,b.Cb)()],T.prototype,"directionsTimeAttribute",void 0),(0,y._)([(0,b.Cb)()],T.prototype,"hasZ",void 0),(0,y._)([(0,b.Cb)()],T.prototype,"impedance",void 0),(0,y._)([(0,b.Cb)()],T.prototype,"networkDataset",void 0),(0,y._)([(0,b.Cb)({type:[A.Z]})],T.prototype,"supportedTravelModes",void 0);var M=T=(0,y._)([(0,w.j)("esri.rest.support.NetworkServiceDescription")],T);function k(e,t,r,i){i[r]=[t.length,t.length+e.length],e.forEach((function(e){t.push(e.geometry)}))}function S(e,t){for(var r=0;r<t.length;r++){var i=e[t[r]];if(i&&i.length){var s,o=(0,n.Z)(i);try{for(o.s();!(s=o.n()).done;){s.value.z=void 0}}catch(a){o.e(a)}finally{o.f()}}}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}function Z(e,t){for(var r=0;r<t.length;r++){var i=e[t[r]];if(i&&i.length){var s,o=(0,n.Z)(i);try{for(o.s();!(s=o.n()).done;){var a=s.value;if((0,u.pC)(a)&&a.hasZ)return!0}}catch(l){o.e(l)}finally{o.f()}}}return!1}function _(e,t,r){return C.apply(this,arguments)}function C(){return C=(0,i.Z)(s.mark((function e(t,r,i){var n,u,l,c,d,f,m,v;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new a.Z("network-service:missing-url","Url to Network service is missing");case 2:return n=(0,p.lA)({f:"json",token:r},i),e.next=5,(0,o.default)(t,n);case 5:for(u=e.sent,(l=u.data).supportedTravelModes||(l.supportedTravelModes=[]),c=0;c<l.supportedTravelModes.length;c++)l.supportedTravelModes[c].id||(l.supportedTravelModes[c].id=l.supportedTravelModes[c].itemId);return d=l.currentVersion>=10.4?D(t,r,i):U(t,i),e.next=12,d;case 12:return f=e.sent,m=f.defaultTravelMode,v=f.supportedTravelModes,e.abrupt("return",(l.defaultTravelMode=m,l.supportedTravelModes=v,M.fromJSON(l)));case 16:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function U(e,t){return j.apply(this,arguments)}function j(){return j=(0,i.Z)(s.mark((function e(t,r){var i,a,u,d,f,m,v,y,h,b,g,w,N,A,T,M,k,S,Z,_,C,U,j,D,O,J;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=(0,p.lA)({f:"json"},r),e.next=3,(0,o.default)(t.replace(/\/rest\/.*$/i,"/info"),u);case 3:if(d=e.sent,(f=d.data)&&f.owningSystemUrl){e.next=7;break}return e.abrupt("return",{supportedTravelModes:[],defaultTravelMode:null});case 7:return m=f.owningSystemUrl,v=(0,c.Qj)(m)+"/sharing/rest/portals/self",e.next=11,(0,o.default)(v,u);case 11:if(y=e.sent,h=y.data,b=(0,l.hS)("helperServices.routingUtilities.url",h)){e.next=16;break}return e.abrupt("return",{supportedTravelModes:[],defaultTravelMode:null});case 16:return g=(0,p.en)(m),w=/\/solve$/i.test(g.path)?"Route":/\/solveclosestfacility$/i.test(g.path)?"ClosestFacility":"ServiceAreas",N=(0,p.lA)({f:"json",serviceName:w},r),A=(0,c.Qj)(b)+"/GetTravelModes/execute",e.next=22,(0,o.default)(A,N);case 22:if(T=e.sent,M=[],k=null,null!=T&&null!=(i=T.data)&&null!=(a=i.results)&&a.length){S=T.data.results,Z=(0,n.Z)(S);try{for(Z.s();!(_=Z.n()).done;)if("supportedTravelModes"===(C=_.value).paramName){if(null!=(U=C.value)&&U.features){j=(0,n.Z)(C.value.features);try{for(j.s();!(D=j.n()).done;)(O=D.value.attributes)&&(J=JSON.parse(O.TravelMode),M.push(J))}catch(s){j.e(s)}finally{j.f()}}}else"defaultTravelMode"===C.paramName&&(k=C.value)}catch(s){Z.e(s)}finally{Z.f()}}return e.abrupt("return",{supportedTravelModes:M,defaultTravelMode:k});case 27:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function D(e,t,r){return O.apply(this,arguments)}function O(){return O=(0,i.Z)(s.mark((function e(t,r,i){var n,u,l,d,f,m;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,p.lA)({f:"json",token:r},i),u=(0,c.Qj)(t)+"/retrieveTravelModes",e.next=5,(0,o.default)(u,n);case 5:return l=e.sent,d=l.data,f=d.supportedTravelModes,m=d.defaultTravelMode,e.abrupt("return",{supportedTravelModes:f,defaultTravelMode:m});case 12:throw e.prev=12,e.t0=e.catch(0),new a.Z("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e.t0});case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),O.apply(this,arguments)}},2429:function(e,t,r){r.d(t,{Z:function(){return m}});var i=r(43144),n=r(15671),s=r(60136),o=r(54062),a=r(27366),u=r(43404),l=r(46784),c=r(49861),p=(r(63780),r(93169),r(25243),r(69912)),d=new u.X({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"}),f=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).description=null,i.type=null,i}return(0,i.Z)(r)}(l.wq);(0,a._)([(0,c.Cb)({type:String,json:{write:!0}})],f.prototype,"description",void 0),(0,a._)([(0,c.Cb)({type:String,json:{read:d.read,write:d.write}})],f.prototype,"type",void 0);var m=f=(0,a._)([(0,p.j)("esri.rest.support.GPMessage")],f)},89677:function(e,t,r){r.d(t,{Z:function(){return m}});var i=r(43144),n=r(15671),s=r(60136),o=r(54062),a=r(27366),u=r(43404),l=r(49861),c=(r(63780),r(93169),r(25243),r(69912)),p=r(2429),d=new u.X({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"}),f=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).type=null,i}return(0,i.Z)(r)}(p.Z);(0,a._)([(0,l.Cb)({type:String,json:{read:d.read,write:d.write}})],f.prototype,"type",void 0);var m=f=(0,a._)([(0,c.j)("esri.rest.support.NAMessage")],f)},77279:function(e,t,r){r.d(t,{Z:function(){return y}});var i,n=r(15671),s=r(43144),o=r(60136),a=r(54062),u=r(27366),l=r(46784),c=r(84652),p=r(49861),d=(r(25243),r(27135)),f=r(69912),m=r(49022),v=i=function(e){(0,o.Z)(r,e);var t=(0,a.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).attributeParameterValues=null,i.description=null,i.distanceAttributeName=null,i.id=null,i.impedanceAttributeName=null,i.name=null,i.restrictionAttributeNames=null,i.simplificationTolerance=null,i.simplificationToleranceUnits=null,i.timeAttributeName=null,i.type=null,i.useHierarchy=null,i.uturnAtJunctions=null,i}return(0,s.Z)(r,[{key:"clone",value:function(){return new i((0,c.d9)({attributeParameterValues:this.attributeParameterValues,description:this.description,distanceAttributeName:this.distanceAttributeName,id:this.id,impedanceAttributeName:this.impedanceAttributeName,name:this.name,restrictionAttributeNames:this.restrictionAttributeNames,simplificationTolerance:this.simplificationTolerance,simplificationToleranceUnits:this.simplificationToleranceUnits,timeAttributeName:this.timeAttributeName,type:this.type,useHierarchy:this.useHierarchy,uturnAtJunctions:this.uturnAtJunctions}))}}]),r}(l.wq);(0,u._)([(0,p.Cb)({type:[Object],json:{write:!0}})],v.prototype,"attributeParameterValues",void 0),(0,u._)([(0,p.Cb)({type:String,json:{write:!0}})],v.prototype,"description",void 0),(0,u._)([(0,p.Cb)({type:String,json:{write:!0}})],v.prototype,"distanceAttributeName",void 0),(0,u._)([(0,p.Cb)({type:String,json:{write:!0}})],v.prototype,"id",void 0),(0,u._)([(0,p.Cb)({type:String,json:{write:!0}})],v.prototype,"impedanceAttributeName",void 0),(0,u._)([(0,p.Cb)({type:String,json:{write:!0}})],v.prototype,"name",void 0),(0,u._)([(0,p.Cb)({type:[String],json:{write:!0}})],v.prototype,"restrictionAttributeNames",void 0),(0,u._)([(0,p.Cb)({type:Number,json:{write:{allowNull:!0}}})],v.prototype,"simplificationTolerance",void 0),(0,u._)([(0,d.J)(m.q$)],v.prototype,"simplificationToleranceUnits",void 0),(0,u._)([(0,p.Cb)({type:String,json:{write:!0}})],v.prototype,"timeAttributeName",void 0),(0,u._)([(0,d.J)(m.DJ)],v.prototype,"type",void 0),(0,u._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],v.prototype,"useHierarchy",void 0),(0,u._)([(0,d.J)(m.ip)],v.prototype,"uturnAtJunctions",void 0);var y=v=i=(0,u._)([(0,f.j)("esri.rest.support.TravelMode")],v)},49022:function(e,t,r){r.d(t,{$7:function(){return a},BW:function(){return m},DJ:function(){return c},Dd:function(){return y},GX:function(){return s},SS:function(){return f},W7:function(){return p},cW:function(){return h},hB:function(){return o},ip:function(){return l},no:function(){return u},oi:function(){return v},q$:function(){return n},td:function(){return b},yP:function(){return d}});var i=r(43404),n=(0,i.w)()({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriPoints:"points",esriUnknownUnits:"unknown",esriYards:"yards"}),s=(0,i.w)()({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),o=(0,i.w)()({esriNAUDays:"days",esriNAUHours:"hours",esriNAUMinutes:"minutes",esriNAUSeconds:"seconds"}),a=(0,i.w)()({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTFeatureSets:"featuresets",esriDOTInstructionsOnly:"instructions-only",esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),u=(0,i.w)()({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),l=((0,i.w)()({esriNAOutputPolygonNone:"none",esriNAOutputPolygonSimplified:"simplified",esriNAOutputPolygonDetailed:"detailed"}),(0,i.w)()({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"})),c=((0,i.w)()({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),(0,i.w)()({esriNATimeOfDayNotUsed:"not-used",esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),(0,i.w)()({AUTOMOBILE:"automobile",TRUCK:"truck",WALK:"walk",OTHER:"other"})),p=(0,i.w)()({0:"either-side-of-vehicle",1:"right-side-of-vehicle",2:"left-side-of-vehicle",3:"no-u-turn"},{useNumericKeys:!0}),d=(0,i.w)()({0:"stop",1:"waypoint",2:"break"},{useNumericKeys:!0}),f=(0,i.w)()({0:"ok",1:"not-located",2:"network-element-not-located",3:"element-not-traversable",4:"invalid-field-values",5:"not-reached",6:"time-window-violation",7:"not-located-on-closest"},{useNumericKeys:!0}),m=(0,i.w)()({1:"right",2:"left"},{useNumericKeys:!0}),v=(0,i.w)()({0:"restriction",1:"added-cost"},{useNumericKeys:!0}),y=(0,i.w)()({0:"permit",1:"restrict"},{useNumericKeys:!0}),h=(0,i.w)()({1:"header",50:"arrive",51:"depart",52:"straight",100:"on-ferry",101:"off-ferry",102:"central-fork",103:"roundabout",104:"u-turn",150:"door",151:"stairs",152:"elevator",153:"escalator",154:"pedestrian-ramp",200:"left-fork",201:"left-ramp",202:"clockwise-roundabout",203:"left-handed-u-turn",204:"bear-left",205:"left-turn",206:"sharp-left",207:"left-turn-and-immediate-left-turn",208:"left-turn-and-immediate-right-turn",300:"right-fork",301:"right-ramp",302:"counter-clockwise-roundabout",303:"right-handed-u-turn",304:"bear-right",305:"right-turn",306:"sharp-right",307:"right-turn-and-immediate-left-turn",308:"right-turn-and-immediate-right-turn",400:"up-elevator",401:"up-escalator",402:"up-stairs",500:"down-elevator",501:"down-escalator",502:"down-stairs",1e3:"general-event",1001:"landmark",1002:"time-zone-change",1003:"traffic-event",1004:"scaled-cost-barrier-event",1005:"boundary-crossing",1006:"restriction-violation"},{useNumericKeys:!0}),b=(0,i.w)()({0:"unknown",1:"segment",2:"maneuver-segment",3:"restriction-violation",4:"scaled-cost-barrier",5:"heavy-traffic",6:"slow-traffic",7:"moderate-traffic"},{useNumericKeys:!0})}}]);
//# sourceMappingURL=1577.21fb770e.chunk.js.map