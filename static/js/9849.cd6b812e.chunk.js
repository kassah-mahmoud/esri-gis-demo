"use strict";(self.webpackChunkesri_map=self.webpackChunkesri_map||[]).push([[9849],{45956:function(e,t,i){i.d(t,{eY:function(){return Z}});var r=i(29439),n=i(15671),s=i(43144),a=i(97326),u=i(11752),o=i(61120),h=i(60136),l=i(54062),c=i(92026),d=i(22753),f=i(23588),v=i(15245),p=i(87422),y=i(10978),g=i(8548),k=i(51378);function x(e,t,i){var r={target:g.No.TEXTURE_2D,pixelFormat:g.VI.RGBA,internalFormat:g.VI.RGBA,dataType:g.Br.UNSIGNED_BYTE,wrapMode:g.e8.CLAMP_TO_EDGE};return t&&i&&(r.width=t,r.height=i),new k.x(e,r)}var Z=function(e){(0,h.Z)(i,e);var t=(0,l.Z)(i);function i(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s=arguments.length>1?arguments[1]:void 0,u=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,n.Z)(this,i),(e=t.call(this)).requestRenderOnSourceChangedEnabled=u,e._textureInvalidated=!0,e.stencilRef=0,e.coordScale=[1,1],e._height=void 0,e.pixelRatio=1,e.resolution=0,e.rotation=0,e._source=null,e._width=void 0,e.x=0,e.y=0,e.blendFunction=s,e.source=r,e.requestRender=e.requestRender.bind((0,a.Z)(e)),e}return(0,s.Z)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null)}},{key:"isSourceScaled",get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()}},{key:"sourceHeight",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}},{key:"sourceWidth",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}},{key:"width",get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){(0,u.Z)((0,o.Z)(i.prototype),"beforeRender",this).call(this,e),this.updateTexture(e.context)}},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"_createTransforms",value:function(){return{dvs:(0,f.c)()}}},{key:"setTransform",value:function(e){var t=(0,d.b)(this.transforms.dvs),i=e.toScreenNoRotation([0,0],[this.x,this.y]),n=(0,r.Z)(i,2),s=n[0],a=n[1],u=this.resolution/this.pixelRatio/e.resolution,o=u*this.width,h=u*this.height,l=Math.PI*this.rotation/180;(0,d.c)(t,t,(0,v.f)(s,a)),(0,d.c)(t,t,(0,v.f)(o/2,h/2)),(0,d.r)(t,t,-l),(0,d.c)(t,t,(0,v.f)(-o/2,-h/2)),(0,d.j)(t,t,(0,v.f)(o,h)),(0,d.m)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(this._textureInvalidated){this._textureInvalidated=!1,this._texture||(this.source?this._texture=x(e,this.sourceWidth,this.sourceHeight):this._texture=x(e));var i,r=this.source;if(r){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(i=r)&&"render"in i)if(r instanceof y.Z){var n=r.getRenderedRasterPixels();this._texture.setData((0,c.pC)(n)?n.renderedRasterPixels:null)}else this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(r));else(function(e){return e&&!("render"in e)})(r)&&this._texture.setData(r);this.ready()}else this._texture.setData(null)}}},{key:"onAttach",value:function(){this.invalidateTexture()}},{key:"onDetach",value:function(){this.invalidateTexture()}}]),i}(p.s)},9849:function(e,t,i){i.d(t,{s:function(){return g}});var r=i(93433),n=i(29439),s=i(15671),a=i(43144),u=i(11752),o=i(61120),h=i(60136),l=i(54062),c=i(65156),d=i(23588),f=i(45956),v=function(e){(0,h.Z)(i,e);var t=(0,l.Z)(i);function i(e,r,n,a,u){var o,h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return(0,s.Z)(this,i),(o=t.call(this,e,r,n,a,u)).bitmap=new f.eY(h,"standard",!1),o.bitmap.coordScale=[a,u],o.bitmap.once("isReady",(function(){return o.ready()})),o}return(0,a.Z)(i,[{key:"destroy",value:function(){(0,u.Z)((0,o.Z)(i.prototype),"destroy",this).call(this),this.bitmap.destroy()}},{key:"beforeRender",value:function(e){(0,u.Z)((0,o.Z)(i.prototype),"beforeRender",this).call(this,e),this.bitmap.beforeRender(e)}},{key:"afterRender",value:function(e){(0,u.Z)((0,o.Z)(i.prototype),"afterRender",this).call(this,e),this.bitmap.afterRender(e)}},{key:"stencilRef",get:function(){return this.bitmap.stencilRef},set:function(e){this.bitmap.stencilRef=e}},{key:"_createTransforms",value:function(){return{dvs:(0,d.c)(),tileMat3:(0,d.c)()}}},{key:"setTransform",value:function(e,t){(0,u.Z)((0,o.Z)(i.prototype),"setTransform",this).call(this,e,t),this.bitmap.transforms.dvs=this.transforms.dvs}},{key:"onAttach",value:function(){this.bitmap.stage=this.stage}},{key:"onDetach",value:function(){this.bitmap&&(this.bitmap.stage=null)}}]),i}(i(72900).I),p=i(75010),y=i(80613),g=function(e){(0,h.Z)(i,e);var t=(0,l.Z)(i);function i(){return(0,s.Z)(this,i),t.apply(this,arguments)}return(0,a.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(e){return"additive"===e.bitmap.blendFunction}))}},{key:"createTile",value:function(e){var t=this._tileInfoView.getTileBounds((0,c.Ue)(),e),i=(0,n.Z)(this._tileInfoView.tileInfo.size,2),r=i[0],s=i[1];return new v(e,t[0],t[3],r,s)}},{key:"prepareRenderPasses",value:function(e){var t=this,n=e.registerRenderPass({name:"bitmap (tile)",brushes:[p.U.bitmap],target:function(){return t.children.map((function(e){return e.bitmap}))},drawPhase:y.jx.MAP});return[].concat((0,r.Z)((0,u.Z)((0,o.Z)(i.prototype),"prepareRenderPasses",this).call(this,e)),[n])}},{key:"doRender",value:function(e){this.visible&&e.drawPhase===y.jx.MAP&&(0,u.Z)((0,o.Z)(i.prototype),"doRender",this).call(this,e)}}]),i}(i(55067).Z)},10978:function(e,t,i){i.d(t,{Z:function(){return a}});var r=i(15671),n=i(43144),s=i(92026),a=function(){function e(t,i,n){(0,r.Z)(this,e),this.pixelBlock=t,this.extent=i,this.originalPixelBlock=n}return(0,n.Z)(e,[{key:"width",get:function(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}},{key:"height",get:function(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}},{key:"render",value:function(e){var t=this.pixelBlock;if(!(0,s.Wi)(t)){var i=this.filter({pixelBlock:t});if(!(0,s.Wi)(i.pixelBlock)){var r=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(r),e.putImageData(n,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({pixelBlock:this.pixelBlock});return(0,s.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}]),e}()},55067:function(e,t,i){i.d(t,{Z:function(){return y}});var r=i(37762),n=i(15671),s=i(43144),a=i(11752),u=i(61120),o=i(60136),h=i(54062),l=i(93169),c=i(80613),d=i(64510),f=i(60418),v=i(40655),p=function(e,t){return e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col},y=function(e){(0,o.Z)(i,e);var t=(0,h.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this))._tileInfoView=e,r}return(0,s.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return!1}},{key:"renderChildren",value:function(e){this.sortChildren(p),this.setStencilReference(e),(0,a.Z)((0,u.Z)(i.prototype),"renderChildren",this).call(this,e)}},{key:"createRenderParams",value:function(e){var t=e.state,r=(0,a.Z)((0,u.Z)(i.prototype),"createRenderParams",this).call(this,e);return r.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,r.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),r}},{key:"prepareRenderPasses",value:function(e){var t=this,r=(0,a.Z)((0,u.Z)(i.prototype),"prepareRenderPasses",this).call(this,e);return r.push(e.registerRenderPass({name:"stencil",brushes:[v.Z],drawPhase:c.jx.DEBUG|c.jx.MAP|c.jx.HIGHLIGHT,target:function(){return t.getStencilTarget()}})),(0,l.Z)("esri-tiles-debug")&&r.push(e.registerRenderPass({name:"tileInfo",brushes:[f.Z],drawPhase:c.jx.DEBUG,target:function(){return t.children}})),r}},{key:"getStencilTarget",value:function(){return this.children}},{key:"updateTransforms",value:function(e){var t,i=(0,r.Z)(this.children);try{for(i.s();!(t=i.n()).done;){var n=t.value,s=this._tileInfoView.getTileResolution(n.key);n.setTransform(e,s)}}catch(a){i.e(a)}finally{i.f()}}},{key:"setStencilReference",value:function(e){var t,i=1,n=(0,r.Z)(this.children);try{for(n.s();!(t=n.n()).done;){t.value.stencilRef=i++}}catch(s){n.e(s)}finally{n.f()}}}]),i}(d.Z)},72900:function(e,t,i){i.d(t,{I:function(){return c}});var r=i(29439),n=i(15671),s=i(43144),a=i(60136),u=i(54062),o=i(22753),h=i(87422),l=i(73828),c=function(e){(0,a.Z)(i,e);var t=(0,u.Z)(i);function i(e,r,s,a,u){var o,h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:a,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:u;return(0,n.Z)(this,i),(o=t.call(this)).triangleCountReportedInDebug=0,o.triangleCount=0,o.texture=null,o.key=new l.Z(e),o.x=r,o.y=s,o.width=a,o.height=u,o.rangeX=h,o.rangeY=c,o}return(0,s.Z)(i,[{key:"destroy",value:function(){this.texture&&(this.texture.dispose(),this.texture=null)}},{key:"setTransform",value:function(e,t){var i=t/(e.resolution*e.pixelRatio),n=this.transforms.tileMat3,s=e.toScreenNoRotation([0,0],[this.x,this.y]),a=(0,r.Z)(s,2),u=a[0],h=a[1],l=this.width/this.rangeX*i,c=this.height/this.rangeY*i;(0,o.s)(n,l,0,0,0,c,0,u,h,1),(0,o.m)(this.transforms.dvs,e.displayViewMat3,n)}}]),i}(h.s)}}]);
//# sourceMappingURL=9849.cd6b812e.chunk.js.map