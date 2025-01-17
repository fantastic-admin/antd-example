
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as q}from"./index.vue_vue_type_script_setup_true_lang-CjTx_-sj.js";import{d as f,x as N,o as d,b as m,w as c,r as y,s as V,y as j,u as e,aF as G,a as k,e as r,aG as J,m as b,f as B,aH as Q,aI as W,H as R,aJ as X,aK as Y,aL as Z,aM as ee,aN as se,j as g,J as x,Q as $,L as A,A as S,t as P,E as U,C as E,aO as te,aP as ae,aQ as oe,aR as ne,l as H,n as C,a6 as le,k as _,T as z,_ as K,N as re,P as ce,p as ie}from"./index-DaVKLjus.js";import{e as de}from"./eventBus-CGRXT3Tn.js";import{_ as ue}from"./index-UqzTGtml.js";import{u as pe,t as fe,o as me,s as M,_ as O,a as D,c as I,F as T}from"./vee-validate-zod-BVTrHfUV.js";const _e=f({__name:"DropdownMenu",props:{defaultOpen:{type:Boolean},open:{type:Boolean},dir:{},modal:{type:Boolean}},emits:["update:open"],setup(s,{emit:o}){const l=N(s,o);return(i,a)=>(d(),m(e(G),V(j(e(l))),{default:c(()=>[y(i.$slots,"default")]),_:3},16))}}),he=f({__name:"DropdownMenuContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(s,{emit:o}){const t=s,n=o,l=k(()=>{const{class:a,...u}=t;return u}),i=N(l,n);return(a,u)=>(d(),m(e(Q),null,{default:c(()=>[r(e(J),b(e(i),{class:e(B)("z-2000 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t.class)}),{default:c(()=>[y(a.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),ge=f({__name:"DropdownMenuGroup",props:{asChild:{type:Boolean},as:{}},setup(s){const o=s;return(t,n)=>(d(),m(e(W),V(j(o)),{default:c(()=>[y(t.$slots,"default")]),_:3},16))}}),ye=f({__name:"DropdownMenuItem",props:{disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{},class:{},inset:{type:Boolean}},setup(s){const o=s,t=k(()=>{const{class:l,...i}=o;return i}),n=R(t);return(l,i)=>(d(),m(e(X),b(e(n),{class:e(B)("relative flex cursor-default select-none items-center rounded-sm gap-2 px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50  [&>svg]:size-4 [&>svg]:shrink-0",l.inset&&"pl-8",o.class)}),{default:c(()=>[y(l.$slots,"default")]),_:3},16,["class"]))}}),ve=f({__name:"DropdownMenuLabel",props:{asChild:{type:Boolean},as:{},class:{},inset:{type:Boolean}},setup(s){const o=s,t=k(()=>{const{class:l,...i}=o;return i}),n=R(t);return(l,i)=>(d(),m(e(Y),b(e(n),{class:e(B)("px-2 py-1.5 text-sm font-semibold",l.inset&&"pl-8",o.class)}),{default:c(()=>[y(l.$slots,"default")]),_:3},16,["class"]))}}),L=f({__name:"DropdownMenuSeparator",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const o=s,t=k(()=>{const{class:n,...l}=o;return l});return(n,l)=>(d(),m(e(Z),b(t.value,{class:e(B)("-mx-1 my-1 h-px bg-muted",o.class)}),null,16,["class"]))}}),be=f({__name:"DropdownMenuTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(s){const t=R(s);return(n,l)=>(d(),m(e(ee),b({class:"outline-none"},e(t)),{default:c(()=>[y(n.$slots,"default")]),_:3},16))}}),we={key:0,class:"size-4 flex-center"},xe=f({name:"FaDropdown",__name:"index",props:{align:{},alignOffset:{},side:{},sideOffset:{},collisionPadding:{},items:{}},setup(s){const o=s,t=se(),n=k(()=>o.items.map(a=>a.filter(u=>!u.hide)).filter(a=>a.length)),l=k(()=>n.value.some(a=>a.some(u=>u.icon)));function i(a){var u;(u=a.handle)==null||u.call(a)}return(a,u)=>{const v=U;return d(),m(e(_e),{modal:!1},{default:c(()=>[r(e(be),{"as-child":""},{default:c(()=>[y(a.$slots,"default")]),_:3}),r(e(he),{align:a.align,"align-offset":a.alignOffset,side:a.side,"side-offset":a.sideOffset,"collision-padding":a.collisionPadding},{default:c(()=>[t.label?(d(),g(x,{key:0},[r(e(ve),null,{default:c(()=>[y(a.$slots,"label")]),_:3}),r(e(L))],64)):$("",!0),(d(!0),g(x,null,A(e(n),(p,h)=>(d(),g(x,{key:h},[r(e(ge),null,{default:c(()=>[(d(!0),g(x,null,A(p,(w,F)=>(d(),m(e(ye),{key:F,disabled:w.disabled,onClick:Xe=>i(w)},{default:c(()=>[e(l)?(d(),g("div",we,[w.icon?(d(),m(v,{key:0,name:w.icon,size:16},null,8,["name"])):$("",!0)])):$("",!0),S(" "+P(w.label),1)]),_:2},1032,["disabled","onClick"]))),128))]),_:2},1024),h!==e(n).length-1?(d(),m(e(L),{key:0})):$("",!0)],64))),128))]),_:3},8,["align","align-offset","side","side-offset","collision-padding"])]),_:3})}}}),$e=f({__name:"Avatar",props:{class:{},size:{default:"sm"},shape:{default:"circle"}},setup(s){const o=s;return(t,n)=>(d(),m(e(te),{class:E(e(B)(e(Be)({size:t.size,shape:t.shape}),o.class))},{default:c(()=>[y(t.$slots,"default")]),_:3},8,["class"]))}}),ke=f({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{}},setup(s){const o=s;return(t,n)=>(d(),m(e(ae),V(j(o)),{default:c(()=>[y(t.$slots,"default")]),_:3},16))}}),Pe=f({__name:"AvatarImage",props:{src:{},referrerPolicy:{},asChild:{type:Boolean},as:{}},setup(s){const o=s;return(t,n)=>(d(),m(e(oe),b(o,{class:"h-full w-full object-cover"}),null,16))}}),Be=ne("inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",{variants:{size:{sm:"h-10 w-10 text-xs",base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl"},shape:{circle:"rounded-full",square:"rounded-md"}}}),Ce=f({__name:"index",props:{src:{},fallback:{},shape:{},class:{}},setup(s){const o=s;return(t,n)=>(d(),m(e($e),{shape:t.shape,class:E(o.class)},{default:c(()=>[r(e(Pe),{src:t.src},null,8,["src"]),r(e(ke),{class:"inline-flex"},{default:c(()=>[y(t.$slots,"default",{},()=>[S(P(t.fallback),1)])]),_:3})]),_:3},8,["shape","class"]))}}),Se={class:"w-full flex-col-stretch-center"},Fe=f({name:"EditPasswordForm",__name:"EditPasswordForm",setup(s){const o=H(),t=C(!1),l=pe({validationSchema:fe(me({password:M().min(1,"请输入原密码"),newPassword:M().min(1,"请输入新密码").min(6,"密码长度为6到18位").max(18,"密码长度为6到18位"),checkPassword:M().min(1,"请确认新密码")}).refine(i=>i.newPassword===i.checkPassword,{message:"两次输入的密码不一致",path:["checkPassword"]})),initialValues:{password:"",newPassword:"",checkPassword:""}}).handleSubmit(i=>{t.value=!0,o.editPassword(i).then(async()=>{le.success("模拟修改成功，请重新登录"),o.logout()}).finally(()=>{t.value=!1})});return(i,a)=>{const u=ue,v=K;return d(),g("div",Se,[a[2]||(a[2]=_("div",{class:"mb-6 space-y-2"},[_("h3",{class:"text-4xl color-[var(--el-text-color-primary)] font-bold"}," 修改密码 "),_("p",{class:"text-sm text-muted-foreground lg:text-base"}," 请输入原密码、新密码和确认密码 ")],-1)),_("form",{onSubmit:a[0]||(a[0]=(...p)=>e(l)&&e(l)(...p))},[r(e(T),{name:"password"},{default:c(({componentField:p,errors:h})=>[r(e(O),{class:"relative pb-6 space-y-0"},{default:c(()=>[r(e(D),null,{default:c(()=>[r(u,b({type:"password",placeholder:"请输入原密码",class:["w-full",h.length&&"border-destructive"]},p),null,16,["class"])]),_:2},1024),r(z,{"enter-active-class":"transition-opacity","enter-from-class":"opacity-0","leave-active-class":"transition-opacity","leave-to-class":"opacity-0"},{default:c(()=>[r(e(I),{class:"absolute bottom-1 text-xs"})]),_:1})]),_:2},1024)]),_:1}),r(e(T),{name:"newPassword"},{default:c(({componentField:p,errors:h})=>[r(e(O),{class:"relative pb-6 space-y-0"},{default:c(()=>[r(e(D),null,{default:c(()=>[r(u,b({type:"password",placeholder:"请输入新密码",class:["w-full",h.length&&"border-destructive"]},p),null,16,["class"])]),_:2},1024),r(z,{"enter-active-class":"transition-opacity","enter-from-class":"opacity-0","leave-active-class":"transition-opacity","leave-to-class":"opacity-0"},{default:c(()=>[r(e(I),{class:"absolute bottom-1 text-xs"})]),_:1})]),_:2},1024)]),_:1}),r(e(T),{name:"checkPassword"},{default:c(({componentField:p,errors:h})=>[r(e(O),{class:"relative pb-6 space-y-0"},{default:c(()=>[r(e(D),null,{default:c(()=>[r(u,b({type:"password",placeholder:"请确认新密码",class:["w-full",h.length&&"border-destructive"]},p),null,16,["class"])]),_:2},1024),r(z,{"enter-active-class":"transition-opacity","enter-from-class":"opacity-0","leave-active-class":"transition-opacity","leave-to-class":"opacity-0"},{default:c(()=>[r(e(I),{class:"absolute bottom-1 text-xs"})]),_:1})]),_:2},1024)]),_:1}),r(v,{loading:e(t),size:"lg",class:"mt-8 w-full",type:"submit"},{default:c(()=>a[1]||(a[1]=[S(" 保存 ")])),_:1},8,["loading"])],32)])}}}),ze={class:"min-h-full w-full"},Me={class:"fixed inset-s-0 bottom-0 top-0 h-full w-40 border-e"},Oe=["onClick"],De={class:"text-base text-accent-foreground leading-tight"},Ie={class:"text-xs text-accent-foreground/50"},Te={class:"ms-40 min-h-full flex-col-center p-10"},Ae={key:0},Ve=f({__name:"profile",setup(s){const o=C(0),t=C([{title:"基本设置",description:"账号的基本信息，头像、昵称等"},{title:"安全设置",description:"定期修改密码可以提高帐号安全性"}]);return(n,l)=>(d(),g("div",ze,[_("div",Me,[(d(!0),g(x,null,A(e(t),(i,a)=>(d(),g("div",{key:a,class:E(["cursor-pointer px-4 py-3 transition-background-color space-y-2 hover-bg-accent/50",{"bg-accent hover-bg-accent!":e(o)===a}]),onClick:u=>o.value=a},[_("div",De,P(i.title),1),_("div",Ie,P(i.description),1)],10,Oe))),128))]),_("div",Te,[e(o)===0?(d(),g("div",Ae," 请开发者自行扩展 ")):$("",!0),e(o)===1?(d(),m(Fe,{key:1})):$("",!0)])]))}}),je={class:"space-y-2"},Re={class:"flex-center-start gap-2"},Ee={class:"space-y-1"},Le={class:"text-base lh-none"},Ne=f({__name:"index",setup(s){const o=re(),t=ce(),n=H(),l=C(!1);return(i,a)=>{const u=Ce,v=U,p=K,h=xe,w=q;return d(),g(x,null,[r(h,{align:"end",items:[[{label:e(t).settings.home.title,icon:"i-mdi:home",handle:()=>e(o).push({path:e(t).settings.home.fullPath}),hide:!e(t).settings.home.enable},{label:"个人设置",icon:"i-mdi:account",handle:()=>l.value=!0}],[{label:"快捷键介绍",icon:"i-mdi:keyboard",handle:()=>e(de).emit("global-hotkeys-intro-toggle"),hide:e(t).mode!=="pc"}],[{label:"退出登录",icon:"i-mdi:logout",handle:()=>e(n).logout(e(t).settings.home.fullPath)}]],class:"flex-center"},{label:c(()=>[_("div",je,[a[2]||(a[2]=_("div",{class:"text-xs text-secondary-foreground/50 font-light"}," 当前登录账号 ",-1)),_("div",Re,[r(u,{src:e(n).avatar,fallback:e(n).account.slice(0,5),shape:"square"},null,8,["src","fallback"]),_("div",Ee,[_("div",Le,P(e(n).account),1),a[1]||(a[1]=_("div",{class:"text-xs text-secondary-foreground/50 font-normal"}," 这里可以显示邮箱 ",-1))])])])]),default:c(()=>[r(p,{variant:"ghost",class:"h-9 flex-center gap-1 px-2"},{default:c(()=>[r(u,{src:e(n).avatar,class:"size-6"},{default:c(()=>[r(v,{name:"i-carbon:user-avatar-filled-alt",size:24,class:"text-secondary-foreground/50"})]),_:1},8,["src"]),e(t).mode==="pc"?(d(),g(x,{key:0},[S(P(e(n).account)+" ",1),r(v,{name:"i-ep:caret-bottom"})],64)):$("",!0)]),_:1})]),_:1},8,["items"]),r(w,{modelValue:e(l),"onUpdate:modelValue":a[0]||(a[0]=F=>ie(l)?l.value=F:null),"align-center":"",header:!1,footer:!1,"close-on-click-overlay":!1,"close-on-press-escape":!1,class:"h-500px min-w-600px overflow-hidden","content-class":"min-h-full p-0 flex"},{default:c(()=>[r(Ve)]),_:1},8,["modelValue"])],64)}}}),Ue=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"})),He=/\d/,Ke=["-","_","/","."];function qe(s=""){if(!He.test(s))return s!==s.toLowerCase()}function Ge(s,o){const t=Ke,n=[];if(!s||typeof s!="string")return n;let l="",i,a;for(const u of s){const v=t.includes(u);if(v===!0){n.push(l),l="",i=void 0;continue}const p=qe(u);if(a===!1){if(i===!1&&p===!0){n.push(l),l=u,i=p;continue}if(i===!0&&p===!1&&l.length>1){const h=l.at(-1);n.push(l.slice(0,Math.max(0,l.length-1))),l=h+u,i=p;continue}}l+=u,i=p,a=v}return n.push(l),n}function Je(s){return s?s[0].toUpperCase()+s.slice(1):""}function Qe(s,o){return s?(Array.isArray(s)?s:Ge(s)).map(t=>Je(t)).join(""):""}function We(s){const o=Object.assign({"./ToolbarEnd/index.vue":Ue}),t=`./${Qe(s)}/index.vue`,n=o[t];return n||{default:f({name:"SlotsInvalidComponent",render:()=>null})}}function as(s){const o=We(s);return f(o.default)}export{as as u};
