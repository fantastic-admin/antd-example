
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{c as Q,d as b,x as Z,o as r,b as d,w as c,r as h,s as ee,y as te,u as t,aS as ae,a as Y,am as N,e as C,C as m,f as p,aT as oe,k as X,j as W,Q as y,aU as se,aV as ne,m as K,aW as le,aX as ie,H as J,aY as re,aZ as ce,n as D,ak as de,V as ue,at as fe,ae as me,a_ as q,aN as pe,I as G,al as ge,q as ye,v as he,E as ve,ah as xe,A as F,t as L,_ as _e}from"./index-DaVKLjus.js";/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=Q("MaximizeIcon",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=Q("MinimizeIcon",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]),ke=b({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(s,{emit:l}){const o=Z(s,l);return(i,g)=>(r(),d(t(ae),ee(te(t(o))),{default:c(()=>[h(i.$slots,"default")]),_:3},16))}}),we={class:"absolute inset-e-4 top-4 flex-center gap-2"},Ce=b({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{},maximize:{type:Boolean},maximizable:{type:Boolean},closable:{type:Boolean},overlayBlur:{type:Boolean}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus","toggleMaximize","animationEnd"],setup(s,{expose:l,emit:u}){const e=s,o=u,i=Y(()=>{const{class:f,...n}=e;return n}),g=Z(i,o);function B(){o("toggleMaximize",!e.maximize)}const v=N("dialogContentRef");return l({el:v}),(f,n)=>(r(),d(t(ie),null,{default:c(()=>[C(t(oe),{class:m(t(p)("fixed inset-0 z-2000 data-[state=closed]:animate-out data-[state=open]:animate-in bg-black/50 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",{"backdrop-blur-sm":e.overlayBlur}))},null,8,["class"]),C(t(le),K({ref_key:"dialogContentRef",ref:v},t(g),{class:t(p)("fixed left-1/2 top-1/2 z-2000 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-0 data-[state=closed]:slide-out-to-top-1/5 data-[state=open]:slide-in-from-left-0 data-[state=open]:slide-in-from-top-1/5 sm:rounded-lg",e.class),onAnimationend:n[0]||(n[0]=x=>o("animationEnd"))}),{default:c(()=>[h(f.$slots,"default"),X("div",we,[e.maximizable?(r(),W("button",{key:0,class:"rounded-sm bg-transparent opacity-70 ring-offset-background transition-opacity hidden disabled:pointer-events-none sm:inline-block data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring",onClick:B},[e.maximize?(r(),d(t(Be),{key:1,class:"h-4 w-4"})):(r(),d(t(be),{key:0,class:"h-4 w-4"}))])):y("",!0),f.closable?(r(),d(t(se),{key:1,class:"rounded-sm bg-transparent opacity-70 ring-offset-background transition-opacity disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"},{default:c(()=>[C(t(ne),{class:"h-4 w-4"}),n[1]||(n[1]=X("span",{class:"sr-only"},"Close",-1))]),_:1})):y("",!0)])]),_:3},16,["class"])]),_:3}))}}),ze=b({__name:"DialogDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const l=s,u=Y(()=>{const{class:o,...i}=l;return i}),e=J(u);return(o,i)=>(r(),d(t(re),K(t(e),{class:t(p)("text-sm text-muted-foreground",l.class)}),{default:c(()=>[h(o.$slots,"default")]),_:3},16,["class"]))}}),Me=b({__name:"DialogFooter",props:{class:{}},setup(s){const l=s;return(u,e)=>(r(),W("div",{class:m(t(p)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",l.class))},[h(u.$slots,"default")],2))}}),De=b({__name:"DialogHeader",props:{class:{}},setup(s){const l=s;return(u,e)=>(r(),W("div",{class:m(t(p)("flex flex-col gap-y-1.5 text-center sm:text-start",l.class))},[h(u.$slots,"default")],2))}}),$e=b({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const l=s,u=Y(()=>{const{class:o,...i}=l;return i}),e=J(u);return(o,i)=>(r(),d(t(ce),K(t(e),{class:t(p)("text-lg font-semibold tracking-tight",l.class)}),{default:c(()=>[h(o.$slots,"default")]),_:3},16,["class"]))}});function Ee(s,l,u,e){const o=D(!1),i=de({offsetX:0,offsetY:0}),g=n=>{const x=n.clientX,H=n.clientY,{offsetX:k,offsetY:w}=i,_=s.value.getBoundingClientRect(),$=_.left,E=_.top,O=_.width,P=_.height,j=document.documentElement.clientWidth,I=document.documentElement.clientHeight,S=-$+k,a=-E+w,z=j-$-O+k,T=I-E-P+w,V=U=>{let A=k+U.clientX-x,R=w+U.clientY-H;A=Math.min(Math.max(A,S),z),R=Math.min(Math.max(R,a),T),i.offsetX=A,i.offsetY=R,s.value&&(o.value=!0,s.value.style.transform=`translate(${A}px, ${R}px)`)},M=()=>{o.value=!1,document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",V),document.addEventListener("mouseup",M)},B=()=>{const n=q(l);n&&s.value&&n.addEventListener("mousedown",g)},v=()=>{const n=q(l);n&&s.value&&n.removeEventListener("mousedown",g)},f=()=>{i.offsetX=0,i.offsetY=0,s.value&&(s.value.style.transform="none")};return ue(()=>{fe(()=>{u.value?B():v()})}),me(()=>{v()}),{isDragging:o,transform:i,resetPosition:f}}const Oe={class:"absolute inset-0 z-1000 size-full flex-center bg-popover/75"},Te=b({name:"FaModal",__name:"index",props:{modelValue:{type:Boolean,default:!1},title:{},description:{},icon:{},loading:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},maximize:{type:Boolean,default:!1},maximizable:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},center:{type:Boolean,default:!1},border:{type:Boolean,default:!0},alignCenter:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},overlayBlur:{type:Boolean,default:!1},showConfirmButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!1},confirmButtonText:{default:"确定"},cancelButtonText:{default:"取消"},confirmButtonDisabled:{type:Boolean,default:!1},confirmButtonLoading:{type:Boolean,default:!1},header:{type:Boolean,default:!0},footer:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},class:{},headerClass:{},contentClass:{},footerClass:{}},emits:["update:modelValue","open","opened","close","closed","confirm","cancel"],setup(s,{expose:l,emit:u}){const e=s,o=u,i=pe(),g=N("dialogContentRef"),B=D(),v=N("dialogAreaRef"),f=D();l({areaRef:v});const n=D(e.modelValue),x=D(e.maximize);G(()=>e.modelValue,a=>{n.value=a});const{isDragging:H,transform:k}=Ee(f,B,Y(()=>e.draggable&&e.header&&!x.value));function w(){x.value?f.value.style.transform="none":f.value.style.transform=`translate(${k.offsetX}px, ${k.offsetY}px)`}G(n,a=>{a&&ge(()=>{var z;g.value&&(f.value=(z=g.value.el)==null?void 0:z.$el,w())})});function _(a){n.value=a,o("update:modelValue",a),o(a?"open":"close")}function $(){_(!1),o("confirm")}function E(){_(!1),o("cancel")}function O(a){a.preventDefault(),a.stopPropagation()}function P(a){e.closeOnClickOverlay||a.preventDefault()}function j(a){e.closeOnPressEscape||a.preventDefault()}function I(a){x.value=a,w()}function S(){n.value?o("opened"):o("closed")}return(a,z)=>{const T=ve,V=xe,M=_e;return r(),d(t(ke),{modal:e.overlay,open:t(n),"onUpdate:open":_},{default:c(()=>[C(t(Ce),{ref_key:"dialogContentRef",ref:g,closable:e.closable,"overlay-blur":e.overlayBlur,maximize:t(x),maximizable:e.maximizable,class:m(t(p)("left-0 right-0 top-0 md:top-[5vh] flex flex-col p-0 gap-0 mx-auto h-[calc-size(auto,size)] min-h-full md:min-h-auto max-h-full md:max-h-[90vh] translate-x-0 translate-y-0",e.class,{"md:top-0 size-full max-w-full max-h-full md:max-h-full":t(x),"md:top-1/2 md:-translate-y-1/2!":e.alignCenter,"duration-0":t(H)})),onCloseAutoFocus:O,onFocusOutside:O,onPointerDownOutside:P,onInteractOutside:P,onEscapeKeyDown:j,onToggleMaximize:I,onAnimationEnd:S},{default:c(()=>[a.header?(r(),d(t(De),{key:0,ref_key:"dialogHeaderRef",ref:B,class:m(t(p)("p-4",e.headerClass,{"cursor-move select-none":e.draggable,"border-b":e.border}))},{default:c(()=>[h(a.$slots,"header",{},()=>[C(t($e),{class:m(["flex-center gap-x-2 md:justify-start",{"md:justify-center":e.center}])},{default:c(()=>[e.icon?(r(),d(T,{key:0,name:{info:"i-ant-design:info-circle-filled",success:"i-ant-design:check-circle-filled",warning:"i-ant-design:exclamation-circle-filled",error:"i-ant-design:close-circle-filled"}[e.icon],size:24,class:m({"text-blue-600 dark:text-blue-400":e.icon==="info","text-green-600 dark:text-green-400":e.icon==="success","text-yellow-600 dark:text-yellow-400":e.icon==="warning","text-red-600 dark:text-red-400":e.icon==="error"})},null,8,["name","class"])):y("",!0),F(" "+L(a.title),1)]),_:1},8,["class"]),a.description?(r(),d(t(ze),{key:0,class:m({"text-center":e.center})},{default:c(()=>[F(L(a.description),1)]),_:1},8,["class"])):y("",!0)])]),_:3},8,["class"])):y("",!0),i.default?(r(),d(V,{key:1,ref_key:"dialogAreaRef",ref:v,class:"flex-1"},{default:c(()=>[X("div",{class:m(t(p)("min-h-40 p-4",e.contentClass))},[h(a.$slots,"default")],2),ye(X("div",Oe,[C(T,{name:"i-line-md:loading-twotone-loop",size:36})],512),[[he,e.loading]])]),_:3},512)):y("",!0),a.footer?(r(),d(t(Me),{key:2,class:m(t(p)("p-2 gap-y-2",e.footerClass,{"md:justify-center":e.center,"border-t":e.border}))},{default:c(()=>[h(a.$slots,"footer",{},()=>[a.showCancelButton?(r(),d(M,{key:0,variant:"outline",onClick:E},{default:c(()=>[F(L(a.cancelButtonText),1)]),_:1})):y("",!0),a.showConfirmButton?(r(),d(M,{key:1,onClick:$},{default:c(()=>[F(L(a.confirmButtonText),1)]),_:1})):y("",!0)])]),_:3},8,["class"])):y("",!0)]),_:3},8,["closable","overlay-blur","maximize","maximizable","class"])]),_:3},8,["modal","open"])}}});export{Te as _};
