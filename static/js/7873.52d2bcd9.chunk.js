"use strict";(self.webpackChunkesri_map=self.webpackChunkesri_map||[]).push([[7873],{57873:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var r=i(15671),n=i(43144),a=i(60136),s=i(54062),l=i(27366),o=(i(32718),i(25243),i(63780),i(93169),i(75366),i(69912)),u=i(1413),d=i(37762),c=i(11752),p=i(61120),h=i(64510),y=i(8548),v=function(e){(0,a.Z)(i,e);var t=(0,s.Z)(i);function i(){var e;return(0,r.Z)(this,i),(e=t.apply(this,arguments)).requiresDedicatedFBO=!1,e}return(0,n.Z)(i,[{key:"dispose",value:function(){}},{key:"doRender",value:function(e){var t=this.createRenderParams(e),i=t.context,r=t.painter,n=t.profiler;this._prevFBO=i.getBoundFramebufferObject(),n.recordContainerStart(this.name);var a=this._getFbo(t),s=r.getRenderTarget();i.bindFramebuffer(a),r.setRenderTarget(a),i.setDepthWriteEnabled(!0),i.setColorMask(!0,!0,!0,!0),i.setClearColor(0,0,0,0),i.setClearDepth(1),i.clear(i.gl.COLOR_BUFFER_BIT|i.gl.DEPTH_BUFFER_BIT),i.setDepthWriteEnabled(!1);var l,o=(0,d.Z)(this.children);try{for(o.s();!(l=o.n()).done;){l.value.beforeRender(e)}}catch(v){o.e(v)}finally{o.f()}var u,c=(0,d.Z)(this.children);try{for(c.s();!(u=c.n()).done;){u.value.processRender(t)}}catch(v){c.e(v)}finally{c.f()}var p,h=(0,d.Z)(this.children);try{for(h.s();!(p=h.n()).done;){p.value.afterRender(e)}}catch(v){h.e(v)}finally{h.f()}r.setRenderTarget(s),r.releaseFbo(a),i.bindFramebuffer(this._prevFBO),r.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),r.blitTexture(i,a.colorTexture,y.cw.NEAREST),r.compositeLayer(t,this.computedOpacity),n.recordContainerEnd()}},{key:"createRenderParams",value:function(e){return(0,u.Z)((0,u.Z)({},(0,c.Z)((0,p.Z)(i.prototype),"createRenderParams",this).call(this,e)),{},{blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1})}},{key:"_getFbo",value:function(e){var t=e.context,i=e.painter,r=t.getViewport(),n=r.width,a=r.height;return i.acquireFbo(n,a)}}]),i}(h.Z),f=i(95986),b=i(81608),g=i(60354),w=i(49861),_=function(e){(0,a.Z)(i,e);var t=(0,s.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this,e)).type="group",n.layerViews=new b.Z,n}return(0,n.Z)(i,[{key:"initialize",value:function(){var e=this;this.handles.add([this.layerViews.on("change",(function(t){return e._layerViewsChangeHandler(t)})),this.layer.watch("visibilityMode",(function(){return e._visibilityModeHandler()}),!0),this.watch("visible",(function(){return e._visibleHandler()}),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}},{key:"layerViews",set:function(e){this._set("layerViews",(0,g.Z)(e,this._get("layerViews")))}},{key:"updatingProgress",get:function(){return 0===this.layerViews.length?1:this.layerViews.reduce((function(e,t){return e+t.updatingProgress}),0)/this.layerViews.length}},{key:"isUpdating",value:function(){return this.layerViews.some((function(e){return e.updating}))}},{key:"_hasLayerViewVisibleOverrides",value:function(){return this.layerViews.some((function(e){return e._isOverridden("visible")}))}},{key:"_findLayerViewForLayer",value:function(e){return e&&this.layerViews.find((function(t){return t.layer===e}))}},{key:"_firstVisibleOnLayerOrder",value:function(){var e=this,t=this.layer.layers.find((function(t){var i=e._findLayerViewForLayer(t);return i&&i.visible}));return t&&this._findLayerViewForLayer(t)}},{key:"_enforceExclusiveVisibility",value:function(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((function(t){t.visible=t===e})))}},{key:"_layerViewsChangeHandler",value:function(e){var t=this;this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((function(e){return e.watch("visible",(function(i){return t._layerViewVisibleHandler(i,e)}),!0)})).toArray(),"grouplayerview:visible");var i=e.added[e.added.length-1],r=null;i&&i.visible&&(r=i),this._enforceVisibility(r)}},{key:"_enforceVisibility",value:function(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":var t=this.visible;this.layerViews.forEach((function(e){e.visible=t}));break;case"exclusive":this._enforceExclusiveVisibility(e)}}},{key:"_visibilityModeHandler",value:function(){this._enforceVisibility()}},{key:"_layerViewVisibleHandler",value:function(e,t){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(t.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&t)}}},{key:"_visibleHandler",value:function(){var e;this._hasLayerViewVisibleOverrides()&&"inherited"===(null==(e=this.layer)?void 0:e.visibilityMode)&&this._enforceVisibility()}}]),i}(i(67581).Z);(0,l._)([(0,w.Cb)({cast:g.R})],_.prototype,"layerViews",null),(0,l._)([(0,w.Cb)({readOnly:!0})],_.prototype,"updatingProgress",null),(0,l._)([(0,w.Cb)()],_.prototype,"view",void 0);var k=_=(0,l._)([(0,o.j)("esri.views.layers.GroupLayerView")],_),Z=function(e){(0,a.Z)(i,e);var t=(0,s.Z)(i);function i(){var e;return(0,r.Z)(this,i),(e=t.apply(this,arguments)).container=new v,e}return(0,n.Z)(i,[{key:"attach",value:function(){var e=this;this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(function(){return e._updateStageChildren()})),"grouplayerview2d")}},{key:"detach",value:function(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}},{key:"update",value:function(e){}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){}},{key:"_updateStageChildren",value:function(){var e=this;this.container.removeAllChildren(),this.layerViews.forEach((function(t,i){return e.container.addChildAt(t.container,i)}))}}]),i}((0,f.y)(k)),m=Z=(0,l._)([(0,o.j)("esri.views.2d.layers.GroupLayerView2D")],Z)},95986:function(e,t,i){i.d(t,{y:function(){return A}});var r,n=i(15671),a=i(43144),s=i(11752),l=i(61120),o=i(60136),u=i(54062),d=i(27366),c=i(81608),p=i(60354),h=i(10064),y=i(94172),v=i(49861),f=(i(63780),i(93169),i(25243),i(69912)),b=i(33624),g=i(46784),w=(i(32718),i(75366),function(e){(0,o.Z)(i,e);var t=(0,u.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,a.Z)(i)}(g.wq)),_=w=(0,d._)([(0,f.j)("esri.views.layers.support.ClipArea")],w),k=r=function(e){(0,o.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments)).type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}return(0,a.Z)(i,[{key:"clone",value:function(){return new r({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(_);(0,d._)([(0,v.Cb)({type:[Number,String],json:{write:!0}})],k.prototype,"left",void 0),(0,d._)([(0,v.Cb)({type:[Number,String],json:{write:!0}})],k.prototype,"right",void 0),(0,d._)([(0,v.Cb)({type:[Number,String],json:{write:!0}})],k.prototype,"top",void 0),(0,d._)([(0,v.Cb)({type:[Number,String],json:{write:!0}})],k.prototype,"bottom",void 0),(0,d._)([(0,v.Cb)({readOnly:!0})],k.prototype,"version",null);var Z,m=k=r=(0,d._)([(0,f.j)("esri.views.layers.support.ClipRect")],k),C=(i(59486),i(32238)),V=i(77981),R=i(53866),S=i(80885),O={base:C.Z,key:"type",typeMap:{extent:R.Z,polygon:S.Z}},L=Z=function(e){(0,o.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments)).type="geometry",e.geometry=null,e}return(0,a.Z)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}},{key:"clone",value:function(){return new Z({geometry:this.geometry.clone()})}}]),i}(_);(0,d._)([(0,v.Cb)({types:O,json:{read:V.im,write:!0}})],L.prototype,"geometry",void 0),(0,d._)([(0,v.Cb)({readOnly:!0})],L.prototype,"version",null);var E=L=Z=(0,d._)([(0,f.j)("esri.views.layers.support.Geometry")],L),P=function(e){(0,o.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments)).type="path",e.path=[],e}return(0,a.Z)(i,[{key:"version",get:function(){return(this._get("version")||0)+1}}]),i}(_);(0,d._)([(0,v.Cb)({type:[[[Number]]],json:{write:!0}})],P.prototype,"path",void 0),(0,d._)([(0,v.Cb)({readOnly:!0})],P.prototype,"version",null);var F=P=(0,d._)([(0,f.j)("esri.views.layers.support.Path")],P),q=c.Z.ofType({key:"type",base:_,typeMap:{rect:m,path:F,geometry:E}}),A=function(e){var t=function(e){(0,o.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments)).attached=!1,e.clips=new q,e.lastUpdateId=-1,e.moving=!1,e.updateRequested=!1,e}return(0,a.Z)(i,[{key:"initialize",value:function(){var e,t,i,r,n=this,a=null==(e=null==(t=this.view)?void 0:t.spatialReferenceLocked)||e;(null==(i=this.view)?void 0:i.spatialReference)&&a&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new h.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new b.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,y.YP)((function(){return n.suspended}),(function(e){n.container&&(n.container.visible=!e),n.view&&!e&&n.updateRequested&&n.view.requestUpdate()}),y.tX),(0,y.YP)((function(){var e,t;return null!=(e=null==(t=n.layer)?void 0:t.opacity)?e:1}),(function(e){n.container&&(n.container.opacity=e)}),y.tX),(0,y.YP)((function(){return n.layer&&"blendMode"in n.layer?n.layer.blendMode:"normal"}),(function(e){n.container&&(n.container.blendMode=e)}),y.tX),(0,y.YP)((function(){return n.layer&&"effect"in n.layer?n.layer.effect:null}),(function(e){n.container&&(n.container.effect=e)}),y.tX),(0,y.on)((function(){return n.clips}),"change",(function(){n.container&&(n.container.clips=n.clips)}))]),null!=(r=this.view)&&r.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e===n&&n.processAttach()}),(function(){})):this.when().then((function(){n.processAttach()}),(function(){})))}},{key:"destroy",value:function(){this.processDetach(),this.updateRequested=!1}},{key:"spatialReferenceSupported",get:function(){var e,t=null==(e=this.view)?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}},{key:"updating",get:function(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null==(e=this.updatingHandles)||!e.updating))}},{key:"visibleAtCurrentScale",get:function(){return this.isVisibleAtScale(this.view.scale)}},{key:"processAttach",value:function(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}},{key:"processDetach",value:function(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}},{key:"isVisibleAtScale",value:function(e){var t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;var i=t.minScale,r=t.maxScale;return(0===i||e<=i)&&(0===r||e>=r)}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"hitTest",value:function(e,t){return Promise.resolve(null)}},{key:"supportsSpatialReference",value:function(e){return!0}},{key:"canResume",value:function(){return!!this.spatialReferenceSupported&&!!(0,s.Z)((0,l.Z)(i.prototype),"canResume",this).call(this)&&this.visibleAtCurrentScale}},{key:"getSuspendInfo",value:function(){var e=(0,s.Z)((0,l.Z)(i.prototype),"getSuspendInfo",this).call(this),t=!this.spatialReferenceSupported,r=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),r&&(e.outsideScaleRange=r),e}}]),i}(e);return(0,d._)([(0,v.Cb)()],t.prototype,"attached",void 0),(0,d._)([(0,v.Cb)({type:q,set:function(e){var t=(0,p.Z)(e,this._get("clips"),q);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,d._)([(0,v.Cb)()],t.prototype,"container",void 0),(0,d._)([(0,v.Cb)()],t.prototype,"moving",void 0),(0,d._)([(0,v.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,d._)([(0,v.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,d._)([(0,v.Cb)()],t.prototype,"updateRequested",void 0),(0,d._)([(0,v.Cb)()],t.prototype,"updating",null),(0,d._)([(0,v.Cb)()],t.prototype,"view",void 0),(0,d._)([(0,v.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,d._)([(0,f.j)("esri.views.2d.layers.LayerView2D")],t)}},67581:function(e,t,i){i.d(t,{Z:function(){return g}});var r=i(15671),n=i(43144),a=i(60136),s=i(54062),l=i(27366),o=i(85015),u=i(91505),d=i(41691),c=i(79056),p=i(32718),h=i(92026),y=i(67426),v=i(49861),f=(i(63780),i(93169),i(25243),i(69912)),b=function(e){(0,a.Z)(i,e);var t=(0,s.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this,e)).layer=null,n.parent=null,n}return(0,n.Z)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";throw p.Z.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(r,"', id: '").concat(i,"')"),t),t}}))}},{key:"fullOpacity",get:function(){return(0,h.Pt)(this.get("layer.opacity"),1)*(0,h.Pt)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){return!this.suspended&&!0===this.layer.legendEnabled}},{key:"updating",get:function(){var e;return!!(null!=(e=this.updatingHandles)&&e.updating||this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null==(e=this.layer)?void 0:e.visible)},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}},{key:"canResume",value:function(){var e,t,i;return this.visible&&(null==(e=this.layer)?void 0:e.loaded)&&!(null!=(t=this.parent)&&t.suspended)&&(null==(i=this.view)?void 0:i.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}((0,d.p)((0,c.I)((0,y.v)(u.Z.EventedMixin(o.Z)))));(0,l._)([(0,v.Cb)()],b.prototype,"fullOpacity",null),(0,l._)([(0,v.Cb)()],b.prototype,"layer",void 0),(0,l._)([(0,v.Cb)()],b.prototype,"parent",void 0),(0,l._)([(0,v.Cb)({readOnly:!0})],b.prototype,"suspended",null),(0,l._)([(0,v.Cb)({readOnly:!0})],b.prototype,"suspendInfo",null),(0,l._)([(0,v.Cb)({readOnly:!0})],b.prototype,"legendEnabled",null),(0,l._)([(0,v.Cb)({type:Boolean,readOnly:!0})],b.prototype,"updating",null),(0,l._)([(0,v.Cb)({readOnly:!0})],b.prototype,"updatingProgress",null),(0,l._)([(0,v.Cb)()],b.prototype,"visible",null),(0,l._)([(0,v.Cb)()],b.prototype,"view",void 0);var g=b=(0,l._)([(0,f.j)("esri.views.layers.LayerView")],b)}}]);
//# sourceMappingURL=7873.52d2bcd9.chunk.js.map