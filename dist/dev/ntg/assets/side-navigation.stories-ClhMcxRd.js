import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-COp5GpYY.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";import{n as c,t as l}from"./squizInfo.mock-x2sHGyES.js";function u(e){return e?`matrix-asset://${b}/${e}`:``}async function d(e,t){if(!e||typeof t?.resolveUri!=`function`)return null;try{return f(await t.resolveUri(e))}catch{return null}}function f(e){return!e||typeof e!=`object`?null:`data`in e?e.data??null:e}function p(e,t){let n=e?.[t];return Array.isArray(n)&&n[0]||``}async function m(e,t){if(!e||!t)return[];let n=`${t}?${y}=${encodeURIComponent(e)}`;try{let e=await fetch(n);if(!e.ok)return[];let t=await e.json();return Array.isArray(t)?t:[]}catch{return[]}}function h(e,t,n){if(!e||!e.url)return null;let r=!!t&&String(e.id)===String(t);return{label:e.name||``,href:e.url,current:r,children:r?n.map(g).filter(Boolean):[]}}function g(e){return!e||!e.url?null:{label:e.name||``,href:e.url}}function _(e,t,n){return`
<nav ${n} class="side-navigation" aria-label="Section navigation">
  ${e?`
    <a class="side-navigation__back" href="${a(e.url)}">
      ${v}
      <span>${s(e.name)}</span>
    </a>`:``}
  <ol class="side-navigation__list">
    ${t.map(e=>{let t=e.current?`<span class="side-navigation__link side-navigation__link--current" aria-current="page">${s(e.label)}</span>`:`<a class="side-navigation__link" href="${a(e.href)}">${s(e.label)}</a>`,n=e.children.length?`<ol class="side-navigation__sublist">${e.children.map(e=>`<li class="side-navigation__subitem"><a class="side-navigation__link side-navigation__link--sub" href="${a(e.href)}">${s(e.label)}</a></li>`).join(``)}</ol>`:``;return`<li class="side-navigation__item${e.current?` side-navigation__item--current`:``}">${t}${n}</li>`}).join(``)}
  </ol>
</nav>
`}var v,y,b,x,S=e((()=>{o(),t(),v=`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true" focusable="false"><path d="M10 4 6 8l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,y=`rootId`,b=`dxp-ntgov-web`,x={async main(e={},t={}){let r=n(`side-navigation`,e),i=t?.env?.CONTENT_API_URL,a=t?.fns,o=(await d(u(t?.ctx?.assetId),a))?.metadata||{},s=p(o,`sidebar_parent`),c=p(o,`sidebar_current_asset`)||t?.ctx?.assetId||``,[l,f,g]=await Promise.all([d(u(s),a),m(s,i),m(c,i)]),v=f.map(e=>h(e,c,g)).filter(Boolean);return _(l?.url?{name:l.name||l.short_name||``,url:l.url}:null,v,r)}}}));function C(e){let t=c({ctx:{assetId:e},mock:{resolveUri:e=>({ok:!0,data:E[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null})}});return{...t,env:{...t.env,CONTENT_API_URL:k}}}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;await e((async()=>{i(),l(),S(),w=r(x.main),T={title:`dxp components/Side Navigation`},E={5002:{id:`5002`,metadata:{sidebar_parent:[`5001`],sidebar_current_asset:[`5002`]}},5003:{id:`5003`,metadata:{sidebar_parent:[`5001`],sidebar_current_asset:[`5003`]}},9999:{id:`9999`,metadata:{sidebar_parent:[`5001`],sidebar_current_asset:[`9999`]}},5001:{id:`5001`,name:`Section page`,short_name:`Section page`,url:`https://example.com/section-page`,metadata:{}}},D=[{id:`5002`,name:`Sub-page one`,url:`https://example.com/section-page/sub-page-one`},{id:`5003`,name:`Sub-page two`,url:`https://example.com/section-page/sub-page-two`},{id:`5004`,name:`Sub-page three`,url:`https://example.com/section-page/sub-page-three`},{id:`5005`,name:`Sub-page four`,url:`https://example.com/section-page/sub-page-four`}],O={5001:D,5003:[{id:`5006`,name:`Nested page one`,url:`https://example.com/section-page/sub-page-two/nested-page-one`},{id:`5007`,name:`Nested page two`,url:`https://example.com/section-page/sub-page-two/nested-page-two`}],9999:D},k=`https://fake-content-api.example/child-list`,A=globalThis.fetch?.bind(globalThis),globalThis.fetch=async(e,...t)=>{if(typeof e==`string`&&e.startsWith(k)){let t=new URL(e).searchParams.get(`rootId`);return{ok:!0,json:async()=>O[t]??[]}}return A(e,...t)},j={},M=C(`5002`),N=await w.markup(j,M),P={render:()=>w(j,M),parameters:{docs:{description:{story:`The current page ("Sub-page one") is highlighted -- bold, with a left border accent, rendered as non-interactive text rather than a link. It has no sub-pages of its own here, so nothing is nested beneath it.`},source:{code:N,language:`html`,type:`code`}}}},F=C(`5003`),I=await w.markup(j,F),L={render:()=>w(j,F),parameters:{docs:{description:{story:`The current page ("Sub-page two") has its own sub-pages -- they render nested, indented, directly beneath it in the list.`},source:{code:I,language:`html`,type:`code`}}}},R=C(`9999`),z=await w.markup(j,R),B={render:()=>w(j,R),parameters:{docs:{description:{story:`sidebar_current_asset doesn't match any child's id (e.g. this component placed on a page outside the section) -- the full list still renders, just with nothing highlighted.`},source:{code:z,language:`html`,type:`code`}}}},V=c({ctx:{assetId:`no-metadata`},mock:{resolveUri:()=>({ok:!0,data:null})}}),H=await w.markup(j,V),U={render:()=>w(j,V),parameters:{docs:{description:{story:`The current page itself fails to resolve via fns.resolveUri (e.g. resolveMatrixAssetById-style auth issue) -- no sidebar_parent/sidebar_current_asset can be read, so the component renders an empty nav rather than throwing.`},source:{code:H,language:`html`,type:`code`}}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => squiz(args, defaultInfo),
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => squiz(args, nestedInfo),
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => squiz(args, noCurrentInfo),
  parameters: {
    docs: {
      description: {
        story: "sidebar_current_asset doesn't match any child's id (e.g. this component placed on a page outside the section) -- the full list still renders, just with nothing highlighted."
      },
      source: {
        code: noCurrentHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...B.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => squiz(args, unresolvableInfo),
  parameters: {
    docs: {
      description: {
        story: "The current page itself fails to resolve via fns.resolveUri (e.g. resolveMatrixAssetById-style auth issue) -- no sidebar_parent/sidebar_current_asset can be read, so the component renders an empty nav rather than throwing."
      },
      source: {
        code: unresolvableHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...U.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => squiz(args, defaultInfo),
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => squiz(args, nestedInfo),
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => squiz(args, noCurrentInfo),
  parameters: {
    docs: {
      description: {
        story: "sidebar_current_asset doesn't match any child's id (e.g. this component placed on a page outside the section) -- the full list still renders, just with nothing highlighted."
      },
      source: {
        code: noCurrentHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...B.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => squiz(args, unresolvableInfo),
  parameters: {
    docs: {
      description: {
        story: "The current page itself fails to resolve via fns.resolveUri (e.g. resolveMatrixAssetById-style auth issue) -- no sidebar_parent/sidebar_current_asset can be read, so the component renders an empty nav rather than throwing."
      },
      source: {
        code: unresolvableHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...U.parameters?.docs?.source}}},W=[`Default`,`WithNestedSubPages`,`NoCurrentPageMatch`,`CurrentPageUnresolvable`]}))();export{U as CurrentPageUnresolvable,P as Default,B as NoCurrentPageMatch,L as WithNestedSubPages,W as __namedExportsOrder,T as default};
//# sourceMappingURL=side-navigation.stories-ClhMcxRd.js.map