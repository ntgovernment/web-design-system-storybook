import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-COp5GpYY.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";import{n as c,t as l}from"./squizInfo.mock-x2sHGyES.js";async function u(e,t){if(!e||typeof t?.resolveUri!=`function`)return null;try{return d(await t.resolveUri(e))}catch{return null}}function d(e){return!e||typeof e!=`object`?null:`data`in e?e.data??null:e}async function f(e,t){if(!e||!t)return[];let n=`${t}?${v}=${encodeURIComponent(e)}`;try{let e=await fetch(n);if(!e.ok)return[];let t=await e.json();return Array.isArray(t)?t:[]}catch{return[]}}function p(e){let t=/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)(?::.+)?$/.exec(String(e??``));return t?t[1]:null}function m(e,t,n){if(!e||!e.url)return null;let r=t!=null&&String(e.id)===String(t);return{label:e.name||``,href:e.url,current:r,children:r?n.map(h).filter(Boolean):[]}}function h(e){return!e||!e.url?null:{label:e.name||``,href:e.url}}function g(e,t,n){return`
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
`}var _,v,y,b=e((()=>{o(),t(),_=`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true" focusable="false"><path d="M10 4 6 8l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,v=`rootId`,y={async main(e={},t={}){let{parentAsset:r=``}=e,i=n(`side-navigation`,e),a=t?.ctx?.assetId,o=t?.env?.CONTENT_API_URL,[s,c,l]=await Promise.all([u(r,t?.fns),f(p(r),o),f(a,o)]);return g(s,c.map(e=>m(e,a,l)).filter(Boolean),i)}}}));function x(e){let t=c({ctx:{assetId:e},mock:{resolveUri:e=>e===`matrix-asset://ntg/5001`?w:null}});return{...t,env:{...t.env,CONTENT_API_URL:D}}}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;await e((async()=>{i(),l(),b(),S=r(y.main),C={title:`dxp components/Side Navigation`},w={id:`5001`,name:`Section page`,url:`https://example.com/section-page`},T=[{id:`5002`,name:`Sub-page one`,url:`https://example.com/section-page/sub-page-one`},{id:`5003`,name:`Sub-page two`,url:`https://example.com/section-page/sub-page-two`},{id:`5004`,name:`Sub-page three`,url:`https://example.com/section-page/sub-page-three`},{id:`5005`,name:`Sub-page four`,url:`https://example.com/section-page/sub-page-four`}],E={5001:T,5003:[{id:`5006`,name:`Nested page one`,url:`https://example.com/section-page/sub-page-two/nested-page-one`},{id:`5007`,name:`Nested page two`,url:`https://example.com/section-page/sub-page-two/nested-page-two`}],9999:T},D=`https://fake-content-api.example/child-list`,O=globalThis.fetch?.bind(globalThis),globalThis.fetch=async(e,...t)=>{if(typeof e==`string`&&e.startsWith(D)){let t=new URL(e).searchParams.get(`rootId`);return{ok:!0,json:async()=>E[t]??[]}}return O(e,...t)},k={parentAsset:`matrix-asset://ntg/5001`},A=x(`5002`),j=await S.markup(k,A),M={render:()=>S(k,A),parameters:{docs:{description:{story:`The current page ("Sub-page one") is highlighted -- bold, with a left border accent, rendered as non-interactive text rather than a link. It has no sub-pages of its own here, so nothing is nested beneath it.`},source:{code:j,language:`html`,type:`code`}}}},N=x(`5003`),P=await S.markup(k,N),F={render:()=>S(k,N),parameters:{docs:{description:{story:`The current page ("Sub-page two") has its own sub-pages -- they render nested, indented, directly beneath it in the list.`},source:{code:P,language:`html`,type:`code`}}}},I=x(`9999`),L=await S.markup(k,I),R={render:()=>S(k,I),parameters:{docs:{description:{story:`info.ctx.assetId doesn't match any child's id (e.g. this component placed on a page outside the section) -- the full list still renders, just with nothing highlighted.`},source:{code:L,language:`html`,type:`code`}}}},z={parentAsset:`matrix-asset://ntg/9999`},B=x(`5002`),V=await S.markup(z,B),H={render:()=>S(z,B),parameters:{docs:{description:{story:`parentAsset fails to resolve via fns.resolveUri -- the back link is omitted entirely; the list (still fed by the mocked fetch()) renders independently.`},source:{code:V,language:`html`,type:`code`}}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`Default`,`WithNestedSubPages`,`NoCurrentPageMatch`,`ParentUnresolvable`]}))();export{M as Default,R as NoCurrentPageMatch,H as ParentUnresolvable,F as WithNestedSubPages,U as __namedExportsOrder,C as default};
//# sourceMappingURL=side-navigation.stories-B5ib0bOo.js.map