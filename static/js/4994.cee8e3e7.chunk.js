"use strict";(self.webpackChunkesri_map=self.webpackChunkesri_map||[]).push([[4994],{58971:function(e,t,n){n.d(t,{G6:function(){return R},Ie:function(){return w},J9:function(){return S},RF:function(){return v},U1:function(){return x},vY:function(){return l},ym:function(){return M}});var r=n(29439),i=n(92026),a=n(77981);var o=function(e,t,n){return[t,n]},u=function(e,t,n){return[t,n,e[2]]},c=function(e,t,n){return[t,n,e[2],e[3]]};function l(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:(0,i.pC)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function s(e,t){var n=e.scale,r=e.translate;return Math.round((t-r[0])/n[0])}function f(e,t){var n=e.scale,r=e.translate;return Math.round((r[1]-t)/n[1])}function m(e,t,n){for(var r,i,a,o,u=[],c=0;c<n.length;c++){var l=n[c];c>0?(a=s(e,l[0]),o=f(e,l[1]),a===r&&o===i||(u.push(t(l,a-r,o-i)),r=a,i=o)):(r=s(e,l[0]),i=f(e,l[1]),u.push(t(l,r,i)))}return u.length>0?u:null}function h(e,t){var n=e.scale,r=e.translate;return t*n[0]+r[0]}function g(e,t){var n=e.scale;return e.translate[1]-t*n[1]}function d(e,t,n){var i=new Array(n.length);if(!n.length)return i;var a=(0,r.Z)(e.scale,2),o=a[0],u=a[1],c=h(e,n[0][0]),l=g(e,n[0][1]);i[0]=t(n[0],c,l);for(var s=1;s<n.length;s++){var f=n[s];c+=f[0]*o,l-=f[1]*u,i[s]=t(f,c,l)}return i}function p(e,t,n){for(var r=new Array(n.length),i=0;i<n.length;i++)r[i]=d(e,t,n[i]);return r}function y(e,t,n,r,i){return t.points=function(e,t,n,r){return m(e,n?r?c:u:r?u:o,t)}(e,n.points,r,i),t}function v(e,t,n,r,i){return t.x=s(e,n.x),t.y=f(e,n.y),t!==n&&(r&&(t.z=n.z),i&&(t.m=n.m)),t}function C(e,t,n,r,i){var a=function(e,t,n,r){for(var i=[],a=n?r?c:u:r?u:o,l=0;l<t.length;l++){var s=m(e,a,t[l]);s&&s.length>=3&&i.push(s)}return i.length?i:null}(e,n.rings,r,i);return a?(t.rings=a,t):null}function P(e,t,n,r,i){var a=function(e,t,n,r){for(var i=[],a=n?r?c:u:r?u:o,l=0;l<t.length;l++){var s=m(e,a,t[l]);s&&s.length>=2&&i.push(s)}return i.length?i:null}(e,n.paths,r,i);return a?(t.paths=a,t):null}function M(e,t){return e&&t?(0,a.wp)(t)?v(e,{},t,!1,!1):(0,a.l9)(t)?P(e,{},t,!1,!1):(0,a.oU)(t)?C(e,{},t,!1,!1):(0,a.aW)(t)?y(e,{},t,!1,!1):(0,a.YX)(t)?function(e,t,n,r,i){return t.xmin=s(e,n.xmin),t.ymin=f(e,n.ymin),t.xmax=s(e,n.xmax),t.ymax=f(e,n.ymax),t!==n&&(r&&(t.zmin=n.zmin,t.zmax=n.zmax),i&&(t.mmin=n.mmin,t.mmax=n.mmax)),t}(e,{},t,!1,!1):null:null}function S(e,t,n,r,a){return(0,i.pC)(n)&&(t.points=function(e,t,n,r){return d(e,n?r?c:u:r?u:o,t)}(e,n.points,r,a)),t}function x(e,t,n,r,a){return(0,i.Wi)(n)||(t.x=h(e,n.x),t.y=g(e,n.y),t!==n&&(r&&(t.z=n.z),a&&(t.m=n.m))),t}function w(e,t,n,r,a){return(0,i.pC)(n)&&(t.rings=function(e,t,n,r){return p(e,n?r?c:u:r?u:o,t)}(e,n.rings,r,a)),t}function R(e,t,n,r,a){return(0,i.pC)(n)&&(t.paths=function(e,t,n,r){return p(e,n?r?c:u:r?u:o,t)}(e,n.paths,r,a)),t}},16285:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(37762),i=n(29439),a=n(15671),o=n(43144),u=n(78915),c=n(691),l=n(6388),s=n(31027),f=function(){function e(t){(0,a.Z)(this,e),this._resourceManager=t}return(0,o.Z)(e,[{key:"dispose",value:function(){this._rasterizationCanvas=null}},{key:"rasterizeJSONResource",value:function(e,t,n){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){var r=u.fN.rasterizeSimpleFill(this._rasterizationCanvas,e.style,t),a=(0,i.Z)(r,3),o=a[0];return{size:[a[1],a[2]],image:new Uint32Array(o.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){var s,f;if("simple-line"===e.type||"esriSLS"===e.type)switch(s=(0,u.U1)(e.style,e.cap),e.cap){case"butt":f="Butt";break;case"square":f="Square";break;default:f="Round"}else s=e.dashTemplate,f=e.cim.capStyle;var m=u.fN.rasterizeSimpleLine(s,f),h=(0,i.Z)(m,3),g=h[0];return{size:[h[1],h[2]],image:new Uint32Array(g.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}var d,p,y;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(d=u.B$.fromSimpleMarker(e),y=(0,l.Fp)(d)):e.cim&&"CIMHatchFill"===e.cim.type?(d=u.B$.fromCIMHatchFill(e.cim),p=new c.Z(d.frame.xmin,-d.frame.ymax,d.frame.xmax-d.frame.xmin,d.frame.ymax-d.frame.ymin)):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(d=u.B$.fromCIMInsidePolygon(e.cim),p=new c.Z(d.frame.xmin,-d.frame.ymax,d.frame.xmax-d.frame.xmin,d.frame.ymax-d.frame.ymin)):(d=e.cim,y=(0,l.Fp)(d)),y&&!n){var v=(0,l.RL)(y),C=(0,i.Z)(v,3),P=C[0],M=C[1],S=C[2];return P?{size:[M,S],image:new Uint32Array(P.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}var x=u.B$.rasterize(this._rasterizationCanvas,d,p,this._resourceManager,!n),w=(0,i.Z)(x,5),R=w[0],b=w[1],T=w[2],I=w[3],k=w[4];return R?{size:[b,T],image:new Uint32Array(R.buffer),sdf:!1,simplePattern:!1,anchorX:I,anchorY:k}:null}},{key:"rasterizeImageResource",value:function(e,t,n,a){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;var o=this._rasterizationCanvas.getContext("2d");n instanceof ImageData?o.putImageData(n,0,0):(n.setAttribute("width","".concat(e,"px")),n.setAttribute("height","".concat(t,"px")),o.drawImage(n,0,0,e,t));var u,c=o.getImageData(0,0,e,t),l=new Uint8Array(c.data);if(a){var f,m=(0,r.Z)(a);try{for(m.s();!(f=m.n()).done;){var h=f.value;if(h&&h.oldColor&&4===h.oldColor.length&&h.newColor&&4===h.newColor.length){var g=(0,i.Z)(h.oldColor,4),d=g[0],p=g[1],y=g[2],v=g[3],C=(0,i.Z)(h.newColor,4),P=C[0],M=C[1],S=C[2],x=C[3];if(d===P&&p===M&&y===S&&v===x)continue;for(var w=0;w<l.length;w+=4)d===l[w]&&p===l[w+1]&&y===l[w+2]&&v===l[w+3]&&(l[w]=P,l[w+1]=M,l[w+2]=S,l[w+3]=x)}}}catch(A){m.e(A)}finally{m.f()}}for(var R=0;R<l.length;R+=4)u=l[R+3]/255,l[R]=l[R]*u,l[R+1]=l[R+1]*u,l[R+2]=l[R+2]*u;var b=l,T=e,I=t,k=512;if(T>=k||I>=k){var z=T/I;z>1?(T=k,I=Math.round(k/z)):(I=k,T=Math.round(k*z)),b=new Uint8Array(4*T*I);var L=new Uint8ClampedArray(b.buffer);(0,s.TT)(l,e,t,L,T,I,!1)}return{size:[T,I],image:new Uint32Array(b.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}]),e}()},48202:function(e,t,n){var r,i,a,o,u,c,l,s,f,m,h,g,d,p,y,v,C,P,M,S,x,w,R,b,T,I,k,z,L,A,F,B,D,_,O,N,U,E,W,Z,H,X,Y,G,J,V,q,Q,K,j,$,ee,te,ne,re,ie,ae,oe,ue,ce;n.d(t,{$y:function(){return x},AH:function(){return i},CS:function(){return V},DD:function(){return s},Dd:function(){return z},Em:function(){return S},JS:function(){return G},Ky:function(){return f},Lh:function(){return q},Qb:function(){return ie},RL:function(){return r},RS:function(){return oe},TF:function(){return M},Tx:function(){return u},UR:function(){return v},UX:function(){return re},bj:function(){return J},eZ:function(){return l},id:function(){return b},kP:function(){return O},r4:function(){return W},sj:function(){return N},v2:function(){return a},zQ:function(){return k},zV:function(){return y}}),function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(r||(r={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(i||(i={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(a||(a={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(o||(o={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(u||(u={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(c||(c={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(l||(l={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(s||(s={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(f||(f={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(m||(m={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(h||(h={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(g||(g={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(d||(d={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(p||(p={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(y||(y={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(v||(v={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(C||(C={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(P||(P={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(M||(M={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees"}(S||(S={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(x||(x={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(w||(w={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(R||(R={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(b||(b={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(T||(T={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(I||(I={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(k||(k={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(z||(z={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(L||(L={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(A||(A={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(F||(F={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(B||(B={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(D||(D={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(_||(_={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(O||(O={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(N||(N={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(U||(U={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(E||(E={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(W||(W={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(Z||(Z={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(H||(H={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(X||(X={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(Y||(Y={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(G||(G={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(J||(J={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(V||(V={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}(q||(q={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(Q||(Q={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}(K||(K={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}(j||(j={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}($||($={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(ee||(ee={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}(te||(te={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(ne||(ne={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(re||(re={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(ie||(ie={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(ae||(ae={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(oe||(oe={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(ue||(ue={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(ce||(ce={}))},60975:function(e,t,n){n.r(t),n.d(t,{previewCIMSymbol:function(){return F}});var r,i,a=n(15861),o=n(87757),u=n(17842),c=n(37762),l=n(15671),s=n(43144),f=n(51995),m=n(76200),h=n(66978),g=n(643),d=n(77981),p=n(79815),y=n(59001),v=n(16285),C=n(22532),P=n(31027),M=n(49729),S=n(83748);(i=r||(r={})).Legend="legend",i.Preview="preview";var x=function(e,t,n){if(e&&e.targetSize){var r;if(n){var i=Math.max(n.frame.xmax-n.frame.xmin,n.frame.ymax-n.frame.ymin);r=e.targetSize/(0,u.F2)(i)}else r=e.targetSize/t.referenceSize;return r}return e&&e.scaleFactor?e.scaleFactor:1},w={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}},R=function(){function e(t,n){(0,l.Z)(this,e),this._spatialReference=t,this._avoidSDF=n,this._resourceCache=new Map,this._pictureMarkerCache=new Map,this._textRasterizer=new C.d,this._cimResourceManager=new y.Z,this._rasterizer=new v.Z(this._cimResourceManager)}return(0,s.Z)(e,[{key:"rasterizeCIMSymbolAsync",value:function(){var e=(0,a.Z)(o.mark((function e(t,n,r,i,a,u,c,l){var s;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=i||(n?null!=n.centroid?"esriGeometryPolygon":(0,d.Ji)(n.geometry):null)||T(t),e.next=3,this.analyzeCIMSymbol(t,n?b(n.attributes):null,r,i,l);case 3:return s=e.sent,e.abrupt("return",this.rasterizeCIMSymbol(s,n,i,a,u,c));case 5:case"end":return e.stop()}}),e,this)})));return function(t,n,r,i,a,o,u,c){return e.apply(this,arguments)}}()},{key:"analyzeCIMSymbol",value:function(){var e=(0,a.Z)(o.mark((function e(t,n,r,i,a){var u,c,l,s,f,m;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=[],c=n?{geometryType:i,spatialReference:this._spatialReference,fields:n}:null,e.next=3,(0,p.c)(t.data,c,this._cimResourceManager,u,this._avoidSDF);case 3:for((0,h.k_)(a),s=0,f=u;s<f.length;s++)"CIMPictureMarker"!==(m=f[s]).cim.type&&"CIMPictureFill"!==m.cim.type&&"CIMPictureStroke"!==m.cim.type||(l||(l=[]),l.push(this._fetchPictureMarkerResource(m,a))),r&&"text"===m.type&&"string"==typeof m.text&&m.text.indexOf("[")>-1&&(m.text=(0,P.Qs)(r,m.text,m.cim.textCase));if(e.t0=l,!e.t0){e.next=9;break}return e.next=9,Promise.all(l);case 9:return e.abrupt("return",u);case 10:case"end":return e.stop()}}),e,this)})));return function(t,n,r,i,a){return e.apply(this,arguments)}}()},{key:"_fetchPictureMarkerResource",value:function(){var e=(0,a.Z)(o.mark((function e(t,n){var r,i;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.materialHash,this._pictureMarkerCache.get(r)){e.next=6;break}return e.next=4,(0,m.default)(t.cim.url,{responseType:"image",signal:n&&n.signal});case 4:i=e.sent.data,this._pictureMarkerCache.set(r,i);case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"rasterizeCIMSymbol",value:function(e,t,n,r,i,a){var o,u=[],l=(0,c.Z)(e);try{for(l.s();!(o=l.n()).done;){var s=o.value;r&&"function"==typeof r.scaleFactor&&(r.scaleFactor=r.scaleFactor(t,i,a));var f=this._getRasterizedResource(s,t,n,r,i,a);if(f){var m=0,h=f.anchorX||0,g=f.anchorY||0,d=!1,p=0,y=0;if("esriGeometryPoint"===n){var v=x(r,s,null);if(p=(0,P.hf)(s.offsetX,t,i,a)*v||0,y=(0,P.hf)(s.offsetY,t,i,a)*v||0,"marker"===s.type)m=(0,P.hf)(s.rotation,t,i,a)||0,d=!!s.rotateClockwise&&s.rotateClockwise;else if("text"===s.type){if(m=(0,P.hf)(s.angle,t,i,a)||0,void 0!==s.horizontalAlignment)switch(s.horizontalAlignment){case"left":h=-.5;break;case"right":h=.5;break;default:h=0}if(void 0!==s.verticalAlignment)switch(s.verticalAlignment){case"top":g=.5;break;case"bottom":g=-.5;break;case"baseline":g=-.25;break;default:g=0}}}null!=f&&u.push({angle:m,rotateClockWise:d,anchorX:h,anchorY:g,offsetX:p,offsetY:y,rasterizedResource:f})}}}catch(C){l.e(C)}finally{l.f()}return this.getSymbolImage(u)}},{key:"getSymbolImage",value:function(e){for(var t=document.createElement("canvas"),n=t.getContext("2d"),r=0,i=0,a=0,o=0,c=[],l=0;l<e.length;l++){var s=e[l],f=s.rasterizedResource;if(f){var m=f.size,h=s.offsetX,g=s.offsetY,d=s.anchorX,p=s.anchorY,y=s.rotateClockWise||!1,v=s.angle,C=(0,u.F2)(h)-m[0]*(.5+d),P=(0,u.F2)(g)-m[1]*(.5+p),M=C+m[0],x=P+m[1];if(v){y&&(v=-v);var w=Math.sin(v*Math.PI/180),R=Math.cos(v*Math.PI/180),b=C*R-P*w,T=C*w+P*R,I=C*R-x*w,k=C*w+x*R,z=M*R-x*w,L=M*w+x*R,A=M*R-P*w,F=M*w+P*R;C=Math.min(b,I,z,A),P=Math.min(T,k,L,F),M=Math.max(b,I,z,A),x=Math.max(T,k,L,F)}r=C<r?C:r,i=P<i?P:i,a=M>a?M:a,o=x>o?x:o;var B=n.createImageData(f.size[0],f.size[1]);B.data.set(new Uint8ClampedArray(f.image.buffer));var D={offsetX:h,offsetY:g,rotateClockwise:y,angle:v,rasterizedImage:B,anchorX:d,anchorY:p};c.push(D)}}t.width=a-r,t.height=o-i;for(var _=-r,O=o,N=0;N<c.length;N++){var U=c[N],E=this._imageDataToCanvas(U.rasterizedImage),W=U.rasterizedImage.width,Z=U.rasterizedImage.height,H=_-W*(.5+U.anchorX),X=O-Z*(.5-U.anchorY);if(U.angle){var Y=(360-U.angle)*Math.PI/180;n.save(),n.translate((0,u.F2)(U.offsetX),-(0,u.F2)(U.offsetY)),n.translate(_,O),n.rotate(Y),n.translate(-_,-O),n.drawImage(E,H,X),n.restore()}else n.drawImage(E,H+(0,u.F2)(U.offsetX),X-(0,u.F2)(U.offsetY))}var G=new S.e({x:_/t.width-.5,y:O/t.height-.5});return{imageData:0!==t.width&&0!==t.height?n.getImageData(0,0,t.width,t.height):n.createImageData(1,1),anchorPosition:G}}},{key:"_imageDataToCanvas",value:function(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var t=this._imageDataCanvas,n=t.getContext("2d");return t.width=e.width,t.height=e.height,n.putImageData(e,0,0),t}},{key:"_imageTo32Array",value:function(e,t,n,r){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var i=this._imageDataCanvas,a=i.getContext("2d");if(i.width=t,i.height=n,a.drawImage(e,0,0,t,n),r){a.save();var o=new f.Z(r);a.fillStyle=o.toHex(),a.globalCompositeOperation="multiply",a.fillRect(0,0,t,n),a.globalCompositeOperation="destination-atop",a.drawImage(e,0,0,t,n),a.restore()}return new Uint32Array(a.getImageData(0,0,t,n).data.buffer)}},{key:"_getRasterizedResource",value:function(e,t,n,i,a,o){var u,c,l,s,f=null,m=null;if("esriGeometryPolyline"===n||"esriGeometryPolygon"===n){var h=i&&i.style?i.style:r.Legend,d="esriGeometryPolyline"===n?w.stroke[h]:w.fill[h];if("line"===e.type){var p;if("CIMSolidStroke"!==e.cim.type){if("CIMPictureStroke"===e.cim.type){var y=(0,P.hf)(e.width,t,a,o),v=(0,P.hf)(e.color,t,a,o),C=this._getPictureResource(e,y,v),S=C.image,R=C.width,b=C.height;return this._rasterizePictureResource(e,S,R,b,d,y)}return null}u=(p=I(e,t,a,o)).analyzedCIM,l=p.hash,c=this._embedCIMLayerInVectorMarker(u,d)}else if("marker"===e.type){if("CIMPictureMarker"===e.cim.type){var T=(0,P.hf)(e.size,t,a,o),k=(0,P.hf)(e.color,t,a,o),z=this._getPictureResource(e,T,k),L=z.image,A=z.width,F=z.height;return this._rasterizePictureResource(e,L,A,F,d,T)}if("CIMVectorMarker"!==e.cim.type)return null;e.cim.offsetX=(0,P.hf)(e.offsetX,t,a,o),e.cim.offsetY=(0,P.hf)(e.offsetY,t,a,o),e.cim.rotation=(0,P.hf)(e.rotation,t,a,o),e.cim.markerPlacement=e.markerPlacement,u=I(e,t,a,o).analyzedCIM,l=(0,g.hP)(JSON.stringify(u)).toString(),c=this._embedCIMLayerInVectorMarker(u,d),f=(0,P.hf)(e.size,t,a,o),m=e.path}else{if("text"===e.type)return null;if("fill"===e.type){var B;if("CIMHatchFill"===e.cim.type||"CIMVectorMarker"===e.cim.type||"CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){var D,_,O,N=e.cim.size||e.cim.height;if("CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){var U=this._getPictureResource(e,N,(0,P.hf)(e.color,t,a,o));D=U.image,_=U.width,O=U.height}else{var E=I(e,t,a,o);u=E.analyzedCIM,l=E.hash;var W=this._rasterizer.rasterizeJSONResource({cim:u,type:e.type,url:e.url,mosaicHash:l,size:N,path:m},1,this._avoidSDF);D=W.image,_=W.size[0],O=W.size[1]}return this._rasterizePictureResource(e,D,_,O,d,null)}if("CIMSolidFill"!==e.cim.type)return null;u=(B=I(e,t,a,o)).analyzedCIM,l=B.hash,c=this._embedCIMLayerInVectorMarker(u,d)}}}else{if("text"===e.type)return s=this._rasterizeTextResource(e,t,i,a,o);var Z=I(e,t,a,o);u=Z.analyzedCIM,l=Z.hash;var H=x(i,e,null);if("CIMPictureMarker"===e.cim.type){var X=(0,P.hf)(e.size,t,a,o)*H,Y=this._getPictureResource(e,X,(0,P.hf)(e.color,t,a,o));return s={image:Y.image,size:[Y.width,Y.height],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0}}(0,M.FW)(u,H,{preserveOutlineWidth:!1}),c=u}l+=n,i&&(l+=JSON.stringify(i));var G=this._resourceCache;return G.has(l)?G.get(l):(s=this._rasterizer.rasterizeJSONResource({cim:c,type:e.type,url:e.url,mosaicHash:l,size:f,path:m},window.devicePixelRatio||1,this._avoidSDF),G.set(l,s),s)}},{key:"_rasterizeTextResource",value:function(e,t,n,r,i){var a=x(n,e,null),o=(0,P.hf)(e.text,t,r,i);if(!o||0===o.length)return null;var u=(0,P.hf)(e.fontName,t,r,i),c=(0,P.hf)(e.style,t,r,i),l=(0,P.hf)(e.weight,t,r,i),s=(0,P.hf)(e.decoration,t,r,i),f=(0,P.hf)(e.size,t,r,i)*a,m=(0,P.hf)(e.horizontalAlignment,t,r,i),h=(0,P.hf)(e.verticalAlignment,t,r,i),g=(0,P.nn)((0,P.hf)(e.color,t,r,i)),d=(0,P.nn)((0,P.hf)(e.outlineColor,t,r,i)),p={color:g,size:f,horizontalAlignment:m,verticalAlignment:h,font:{family:u,style:c,weight:l,decoration:s},halo:{size:(0,P.hf)(e.outlineSize,t,r,i)||0,color:d,style:c},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(o,p)}},{key:"_rasterizePictureResource",value:function(e,t,n,r,i,a){var o=document.createElement("canvas"),l=o.getContext("2d");o.height=(0,u.F2)(Math.max(i.frame.ymax-i.frame.ymin,a)),o.width=(0,u.F2)(i.frame.xmax-i.frame.xmin);var s=l.createImageData(n,r);s.data.set(new Uint8ClampedArray(t.buffer));var f=this._imageDataToCanvas(s),m=l.createPattern(f,"repeat"),h=Math.cos((-e.cim.rotation||0)*Math.PI/180),g=Math.sin((-e.cim.rotation||0)*Math.PI/180);m.setTransform({m11:h,m12:g,m21:-g,m22:h,m41:(0,u.F2)(e.cim.offsetX)||0,m42:(0,u.F2)(e.cim.offsetY)||0});var p,y,v,C=i.canvasPaths;(0,d.oU)(C)?(p=C.rings,l.fillStyle=m,y=l.fill,v=["evenodd"]):(0,d.l9)(C)&&(p=C.paths,l.strokeStyle=m,l.lineWidth=a,y=l.stroke,p[0][0][1]=o.height/2,p[0][1][1]=o.height/2),l.beginPath();var P,M=(0,c.Z)(p);try{for(M.s();!(P=M.n()).done;){var S=P.value,x=S?S.length:0;if(x>1){var w=S[0];l.moveTo((0,u.F2)(w[0]),(0,u.F2)(w[1]));for(var R=1;R<x;++R)w=S[R],l.lineTo((0,u.F2)(w[0]),(0,u.F2)(w[1]));l.closePath()}}}catch(I){M.e(I)}finally{M.f()}y.apply(l,v);var b=l.getImageData(0,0,o.width,o.height),T=new Uint8Array(b.data);return{size:[o.width,o.height],image:new Uint32Array(T.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}},{key:"_getPictureResource",value:function(e,t,n){var r=this._pictureMarkerCache.get(e.materialHash);if(!r)return null;var i=r.height/r.width,a=t?i>1?(0,u.F2)(t):(0,u.F2)(t)/i:r.width,o=t?i>1?(0,u.F2)(t)*i:(0,u.F2)(t):r.height;return{image:this._imageTo32Array(r,a,o,n),width:a,height:o}}},{key:"_embedCIMLayerInVectorMarker",value:function(e,t){var n=(0,d.oU)(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol",r=t.frame;return{type:"CIMVectorMarker",frame:r,size:r.ymax-r.ymin,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:n,symbolLayers:[e]}}]}}}]),e}();function b(e){return(e?Object.keys(e):[]).map((function(t){return{name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"}}))}function T(e){if(!(e&&e.data&&e.data.symbol))return null;switch(e.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function I(e,t,n,r){var i,a;return"function"==typeof e.materialHash?(i=(0,e.materialHash)(t,n,r),a=(0,p.S)(e.cim,e.materialOverrides)):(i=e.materialHash,a=e.cim),{analyzedCIM:a,hash:i}}var k=n(37817),z=n(1682),L=new R(null,!0),A=k.b_.maxSize;function F(e){return B.apply(this,arguments)}function B(){return B=(0,a.Z)(o.mark((function e(t){var n,r,i,a,c,l,s,f,m,h,g,d,p,y,v,C,P,S,x,w,R,b,T=arguments;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=T.length>1&&void 0!==T[1]?T[1]:{},r=n.size,i=n.maxSize,a=n.node,c=n.opacity,l=n.cimOptions||n,s=l.feature,f=l.fieldMap,m=l.geometryType,h=l.style,g=(0,M.kW)(t),d="number"==typeof r?r:null,(p=Math.min(null!=d?d:g,null!=i?i:(0,u.Wz)(A)))!==g&&(t=t.clone(),(0,M.PI)(t,p,{preserveOutlineWidth:!0})),y=3,t&&t.data&&t.data.symbol&&"CIMPointSymbol"!==t.data.symbol.type&&(y=1),e.next=7,L.rasterizeCIMSymbolAsync(t,s,f,m,{scaleFactor:y,style:h});case 7:return v=e.sent,(C=document.createElement("canvas")).width=v.imageData.width,C.height=v.imageData.height,C.getContext("2d").putImageData(v.imageData,0,0),P=C.width/y,S=C.height/y,null==r||null!=(null==n?void 0:n.scale)&&!(null==n?void 0:n.scale)||(P=(x=P/S)<=1?Math.ceil(p*x):p,S=x<=1?p:Math.ceil(p/x)),(w=new Image(P,S)).src=C.toDataURL(),null!=c&&(w.style.opacity="".concat(c)),R=w,null!=n.effectView&&(b={shape:{type:"image",x:0,y:0,width:P,height:S,src:w.src},fill:null,stroke:null,offset:[0,0]},R=(0,z.w)([[b]],[P,S],{effectView:n.effectView})),e.abrupt("return",(a&&a.appendChild(R),R));case 18:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}},38999:function(e,t,n){var r,i;function a(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":case"justify":return r.Center}}function o(e){switch(e){case"top":return i.Top;case"middle":return i.Center;case"baseline":return i.Baseline;case"bottom":return i.Bottom}}function u(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[r.Right,i.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[r.Center,i.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[r.Left,i.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[r.Right,i.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[r.Center,i.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[r.Left,i.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[r.Right,i.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[r.Center,i.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[r.Left,i.Top];default:return console.debug("Found invalid placement type ".concat(e)),[r.Center,i.Center]}}function c(e){switch(e){case r.Right:return-1;case r.Center:return 0;case r.Left:return 1;default:return console.debug("Found invalid horizontal alignment ".concat(e)),0}}function l(e){switch(e){case i.Top:return 1;case i.Center:return 0;case i.Bottom:case i.Baseline:return-1;default:return console.debug("Found invalid vertical alignment ".concat(e)),0}}function s(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":case"justify":return r.Center}}function f(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}n.d(t,{Hd:function(){return s},M7:function(){return r},NS:function(){return f},TR:function(){return i},b7:function(){return o},g:function(){return c},kH:function(){return a},qv:function(){return u},tf:function(){return l}}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(r||(r={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(i||(i={}))},94109:function(e,t,n){n.d(t,{$0:function(){return o},AI:function(){return r},Al:function(){return m},CQ:function(){return Z},CU:function(){return D},D3:function(){return f},Ex:function(){return c},I_:function(){return a},Ic:function(){return h},Ij:function(){return p},Ip:function(){return U},Iw:function(){return l},Jw:function(){return P},MI:function(){return E},QU:function(){return C},SD:function(){return J},Tz:function(){return H},Uh:function(){return W},V4:function(){return B},XJ:function(){return N},Xj:function(){return v},Zd:function(){return z},_5:function(){return x},_6:function(){return G},a:function(){return _},aK:function(){return b},dn:function(){return F},e0:function(){return Y},eF:function(){return s},f2:function(){return y},fL:function(){return O},iJ:function(){return g},iV:function(){return L},kF:function(){return M},lK:function(){return T},m4:function(){return I},nM:function(){return d},oK:function(){return X},pU:function(){return R},ru:function(){return i},tQ:function(){return A},uG:function(){return k},xl:function(){return w},xm:function(){return u},yP:function(){return S}});var r=1e-30,i=4294967295,a=512,o=8,u=29,c=24,l=8,s={metrics:{width:15,height:17,left:0,top:-7,advance:14}},f=0,m=0,h=0,g=1,d=2,p=3,y=4,v=12,C=5,P=6,M=5,S=6,x=0,w=1,R=2,b=3,T=4,I=2,k=1,z=2,L=4,A=1.05,F=3,B=5,D=6,_=1.15,O=2,N=8,U=500,E=10,W=2,Z=0,H=1,X=4,Y=8,G=4,J=1},73271:function(e,t,n){n.d(t,{Au:function(){return i},Jz:function(){return o},UJ:function(){return a}});var r=new Float32Array(1);new Uint32Array(r.buffer);function i(e){return[255&e,(65280&e)>>>8,(16711680&e)>>>16,(4278190080&e)>>>24]}function a(e,t){return 65535&e|t<<16}function o(e,t,n,r){return 255&e|(255&t)<<8|(255&n)<<16|r<<24}}}]);
//# sourceMappingURL=4994.cee8e3e7.chunk.js.map