import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-COp5GpYY.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";import{n as c,t as l}from"./squizInfo.mock-x2sHGyES.js";async function u(e,t){if(!e||typeof t?.resolveUri!=`function`)return null;try{return d(await t.resolveUri(e))}catch{return null}}function d(e){return!e||typeof e!=`object`?null:`data`in e?e.data??null:e}async function f(e){if(!e)return[];let t=`${v}?${y}=${encodeURIComponent(e)}`;try{let e=await fetch(t);if(!e.ok)return[];let n=await e.json();return Array.isArray(n)?n:[]}catch{return[]}}function p(e){let t=/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)(?::.+)?$/.exec(String(e??``));return t?t[1]:null}function m(e,t,n){if(!e||!e.url)return null;let r=t!=null&&String(e.id)===String(t);return{label:e.name||``,href:e.url,current:r,children:r?n.map(h).filter(Boolean):[]}}function h(e){return!e||!e.url?null:{label:e.name||``,href:e.url}}function g(e,t,n){return`
<nav ${n} class="side-navigation" aria-label="Section navigation">
  ${e?.url?`
    <a class="side-navigation__back" href="${a(e.url)}">
      ${_}
      <span>${s(e.name||e.short_name||``)}</span>
    </a>`:``}
  <ol class="side-navigation__list">
    ${t.map(e=>{let t=e.current?`<span class="side-navigation__link side-navigation__link--current" aria-current="page">${s(e.label)}</span>`:`<a class="side-navigation__link" href="${a(e.href)}">${s(e.label)}</a>`,n=e.children.length?`<ol class="side-navigation__sublist">${e.children.map(e=>`<li class="side-navigation__subitem"><a class="side-navigation__link side-navigation__link--sub" href="${a(e.href)}">${s(e.label)}</a></li>`).join(``)}</ol>`:``;return`<li class="side-navigation__item${e.current?` side-navigation__item--current`:``}">${t}${n}</li>`}).join(``)}
  </ol>
</nav>
`}var _,v,y,b,x=e((()=>{o(),t(),_=`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true" focusable="false"><path d="M10 4 6 8l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,v=`https://nt.gov.au/web-design-system/listings/asset-children-json-feed`,y=`rootId`,b={async main(e={},t={}){let{parentAsset:r=``}=e,i=n(`side-navigation`,e),a=t?.ctx?.assetId,[o,s,c]=await Promise.all([u(r,t?.fns),f(p(r)),f(a)]);return g(o,s.map(e=>m(e,a,c)).filter(Boolean),i)}}}));function S(e){return c({ctx:{assetId:e},mock:{resolveUri:e=>e===`matrix-asset://ntg/5001`?T:null}})}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;await e((async()=>{i(),l(),x(),C=r(b.main),w={title:`dxp components/Side Navigation`},T={id:`5001`,name:`Section page`,url:`https://example.com/section-page`},E=[{id:`5002`,name:`Sub-page one`,url:`https://example.com/section-page/sub-page-one`},{id:`5003`,name:`Sub-page two`,url:`https://example.com/section-page/sub-page-two`},{id:`5004`,name:`Sub-page three`,url:`https://example.com/section-page/sub-page-three`},{id:`5005`,name:`Sub-page four`,url:`https://example.com/section-page/sub-page-four`}],D={5001:E,5003:[{id:`5006`,name:`Nested page one`,url:`https://example.com/section-page/sub-page-two/nested-page-one`},{id:`5007`,name:`Nested page two`,url:`https://example.com/section-page/sub-page-two/nested-page-two`}],9999:E},O=globalThis.fetch?.bind(globalThis),globalThis.fetch=async(e,...t)=>{if(typeof e==`string`&&e.includes(`asset-children-json-feed`)){let t=new URL(e).searchParams.get(`rootId`);return{ok:!0,json:async()=>D[t]??[]}}return O(e,...t)},k={parentAsset:`matrix-asset://ntg/5001`},A=S(`5002`),j=await C.markup(k,A),M={render:()=>C(k,A),parameters:{docs:{description:{story:`The current page ("Sub-page one") is highlighted -- bold, with a left border accent, rendered as non-interactive text rather than a link. It has no sub-pages of its own here, so nothing is nested beneath it.`},source:{code:j,language:`html`,type:`code`}}}},N=S(`5003`),P=await C.markup(k,N),F={render:()=>C(k,N),parameters:{docs:{description:{story:`The current page ("Sub-page two") has its own sub-pages -- they render nested, indented, directly beneath it in the list.`},source:{code:P,language:`html`,type:`code`}}}},I=S(`9999`),L=await C.markup(k,I),R={render:()=>C(k,I),parameters:{docs:{description:{story:`info.ctx.assetId doesn't match any child's id (e.g. this component placed on a page outside the section) -- the full list still renders, just with nothing highlighted.`},source:{code:L,language:`html`,type:`code`}}}},z={parentAsset:`matrix-asset://ntg/9999`},B=S(`5002`),V=await C.markup(z,B),H={render:()=>C(z,B),parameters:{docs:{description:{story:`parentAsset fails to resolve via fns.resolveUri -- the back link is omitted entirely; the list (still fed by the mocked fetch()) renders independently.`},source:{code:V,language:`html`,type:`code`}}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => squiz(defaultArgs, defaultInfo),
  parameters: {
    docs: {
      description: {
        story: "The current page (\\"Sub-page one\\") is highlighted -- bold, with a left border accent, rendered as non-interactive text rather than a link. It has no sub-pages of its own here, so nothing is nested beneath it."
      },
      source: {
        code: defaultHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => squiz(defaultArgs, nestedInfo),
  parameters: {
    docs: {
      description: {
        story: "The current page (\\"Sub-page two\\") has its own sub-pages -- they render nested, indented, directly beneath it in the list."
      },
      source: {
        code: nestedHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => squiz(defaultArgs, noCurrentInfo),
  parameters: {
    docs: {
      description: {
        story: "info.ctx.assetId doesn't match any child's id (e.g. this component placed on a page outside the section) -- the full list still renders, just with nothing highlighted."
      },
      source: {
        code: noCurrentHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...R.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, unresolvableInfo),
  parameters: {
    docs: {
      description: {
        story: "parentAsset fails to resolve via fns.resolveUri -- the back link is omitted entirely; the list (still fed by the mocked fetch()) renders independently."
      },
      source: {
        code: unresolvableHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...H.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => squiz(defaultArgs, defaultInfo),
  parameters: {
    docs: {
      description: {
        story: "The current page (\\"Sub-page one\\") is highlighted -- bold, with a left border accent, rendered as non-interactive text rather than a link. It has no sub-pages of its own here, so nothing is nested beneath it."
      },
      source: {
        code: defaultHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => squiz(defaultArgs, nestedInfo),
  parameters: {
    docs: {
      description: {
        story: "The current page (\\"Sub-page two\\") has its own sub-pages -- they render nested, indented, directly beneath it in the list."
      },
      source: {
        code: nestedHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => squiz(defaultArgs, noCurrentInfo),
  parameters: {
    docs: {
      description: {
        story: "info.ctx.assetId doesn't match any child's id (e.g. this component placed on a page outside the section) -- the full list still renders, just with nothing highlighted."
      },
      source: {
        code: noCurrentHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...R.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, unresolvableInfo),
  parameters: {
    docs: {
      description: {
        story: "parentAsset fails to resolve via fns.resolveUri -- the back link is omitted entirely; the list (still fed by the mocked fetch()) renders independently."
      },
      source: {
        code: unresolvableHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...H.parameters?.docs?.source}}},U=[`Default`,`WithNestedSubPages`,`NoCurrentPageMatch`,`ParentUnresolvable`]}))();export{M as Default,R as NoCurrentPageMatch,H as ParentUnresolvable,F as WithNestedSubPages,U as __namedExportsOrder,w as default};
//# sourceMappingURL=side-navigation.stories-D3TB5pvz.js.map