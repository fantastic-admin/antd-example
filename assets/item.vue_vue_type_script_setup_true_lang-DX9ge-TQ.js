
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as F}from"./index.vue_vue_type_script_setup_true_lang-BsqA4vLj.js";import{d as V,an as $,n as A,a as r,F as E,o as n,j as l,e as C,w as i,u as o,b as x,k as R,Q as p,C as s,t as H,D as Q,m as T,ao as G,a0 as J,E as L}from"./index-DaVKLjus.js";const O=Symbol("rootMenu"),Y=V({name:"SubMenuItem",__name:"item",props:{uniqueKey:{},item:{},level:{default:0},subMenu:{type:Boolean,default:!1},expand:{type:Boolean,default:!1}},setup(N,{expose:B}){const a=N,t=$(O),u=A(),j=r(()=>a.subMenu?t.subMenus[a.uniqueKey.at(-1)].active:t.activeIndex===a.uniqueKey.at(-1)),m=r(()=>j.value&&(!a.subMenu||t.isMenuPopup)),z=r(()=>t.isMenuPopup?"":`padding-left: ${20*(a.level??0)}px`);return B({ref:u}),(e,U)=>{const I=L,K=F,S=E("router-link");return n(),l("div",{ref_key:"itemRef",ref:u,class:s(["menu-item relative transition-all",{active:o(m),"py-1 px-2":o(t).isMenuPopup&&o(t).props.mode==="vertical"||o(t).isMenuPopup&&e.level!==0&&o(t).props.mode==="horizontal"||!o(t).isMenuPopup,"px-1 py-2":o(t).isMenuPopup&&e.level===0&&o(t).props.mode==="horizontal"}])},[C(S,{custom:"",to:e.uniqueKey.at(-1)??""},{default:i(({href:q,navigate:D})=>{var f,c,b;return[C(K,{disabled:!o(t).isMenuPopup||e.level!==0||e.subMenu,text:typeof((f=e.item.meta)==null?void 0:f.title)=="function"?(c=e.item.meta)==null?void 0:c.title():(b=e.item.meta)==null?void 0:b.title,side:o(t).props.mode==="vertical"?"right":"bottom",class:"h-full w-full"},{default:i(()=>{var v,d,y,M,h;return[(n(),x(J(e.subMenu?"div":"a"),T({...!e.subMenu&&{href:(v=e.item.meta)!=null&&v.link?e.item.meta.link:q,target:(d=e.item.meta)!=null&&d.link?"_blank":"_self",class:"no-underline"}},{class:["group menu-item-container relative h-full w-full flex cursor-pointer items-center justify-between gap-1 rounded-lg px-4 py-3 text-[var(--g-sub-sidebar-menu-color)] transition-all hover-bg-[var(--g-sub-sidebar-menu-hover-bg)] hover-text-[var(--g-sub-sidebar-menu-hover-color)]",{"text-[var(--g-sub-sidebar-menu-active-color)]! bg-[var(--g-sub-sidebar-menu-active-bg)]!":o(m),"px-3!":o(t).isMenuPopup&&e.level===0}],title:typeof((y=e.item.meta)==null?void 0:y.title)=="function"?(M=e.item.meta)==null?void 0:M.title():(h=e.item.meta)==null?void 0:h.title},G({...!e.subMenu&&{click:D}})),{default:i(()=>{var g,w,P,k;return[R("div",{class:s(["inline-flex flex-1 items-center justify-center gap-[12px]",{"flex-col":o(t).isMenuPopup&&e.level===0&&o(t).props.mode==="vertical","gap-1!":o(t).isMenuPopup&&e.level===0&&o(t).props.showCollapseName,"w-full":o(t).isMenuPopup&&e.level===0&&o(t).props.showCollapseName&&o(t).props.mode==="vertical"}]),style:Q(o(z))},[(g=a.item.meta)!=null&&g.icon?(n(),x(I,{key:0,name:a.item.meta.icon,size:18,class:"menu-item-container-icon transition-transform group-hover-scale-120"},null,8,["name"])):p("",!0),o(t).isMenuPopup&&e.level===0&&!o(t).props.showCollapseName?p("",!0):(n(),l("span",{key:1,class:s(["w-0 flex-1 truncate text-sm transition-height transition-opacity transition-width",{"opacity-0 w-0 h-0":o(t).isMenuPopup&&e.level===0&&!o(t).props.showCollapseName,"w-full text-center":o(t).isMenuPopup&&e.level===0&&o(t).props.showCollapseName}])},H(typeof((w=e.item.meta)==null?void 0:w.title)=="function"?(P=e.item.meta)==null?void 0:P.title():(k=e.item.meta)==null?void 0:k.title),3))],6),e.subMenu&&!(o(t).isMenuPopup&&e.level===0)?(n(),l("i",{key:0,class:s(["relative ms-1 w-[10px] after:absolute before:absolute after:h-[1.5px] after:w-[6px] before:h-[1.5px] before:w-[6px] after:bg-current before:bg-current after:transition-transform-200 before:transition-transform-200 after:content-empty before:content-empty after:-translate-y-[1px] before:-translate-y-[1px]",[e.expand?"before:-rotate-45 before:-translate-x-[2px] after:rotate-45 after:translate-x-[2px]":"before:rotate-45 before:-translate-x-[2px] after:-rotate-45 after:translate-x-[2px]",o(t).isMenuPopup&&e.level===0&&"opacity-0",o(t).isMenuPopup&&e.level!==0&&"-rotate-90 -top-[1.5px]"]])},null,2)):p("",!0)]}),_:2},1040,["class","title"]))]}),_:2},1032,["disabled","text","side"])]}),_:1},8,["to"])],2)}}});export{Y as _,O as r};
