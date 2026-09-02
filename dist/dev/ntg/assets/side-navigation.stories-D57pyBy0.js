import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-D0vBjeOt.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";import{n as c,t as l}from"./squizInfo.mock-x2sHGyES.js";function u(e){return e?`matrix-asset://${x}/${e}`:``}async function d(e,t){if(!e||typeof t?.resolveUri!=`function`)return null;try{return f(await t.resolveUri(e))}catch{return null}}function f(e){return!e||typeof e!=`object`?null:`data`in e?e.data??null:e}function p(e,t){let n=e?.[t];return Array.isArray(n)&&n[0]||``}function m(e,t){let n=e?.[t];return Array.isArray(n)?n:[]}async function h(e,t){if(!e||!t)return[];let n=`${t}?${b}=${encodeURIComponent(e)}`;try{let e=await fetch(n);if(!e.ok)return[];let t=await e.json();return Array.isArray(t)?t:[]}catch{return[]}}function g(e,t,n){if(!e||!e.url)return null;let r=!!t&&String(e.id)===String(t);return{label:e.name||``,href:e.url,current:r,children:r?n.map(_).filter(Boolean):[]}}function _(e){return!e||!e.url?null:{label:e.name||``,href:e.url}}function v(e,t,n){return`
<nav ${n} class="side-navigation" aria-label="Section navigation">
  ${e?`
    <a class="side-navigation__back" href="${a(e.url)}">
      ${y}
      <span>${s(e.name)}</span>
    </a>`:``}
  <ol class="side-navigation__list">
    ${t.map(e=>{let t=e.current?`<span class="side-navigation__link side-navigation__link--current" aria-current="page">${s(e.label)}</span>`:`<a class="side-navigation__link" href="${a(e.href)}">${s(e.label)}</a>`,n=e.children.length?`<ol class="side-navigation__sublist">${e.children.map(e=>`<li class="side-navigation__subitem"><a class="side-navigation__link side-navigation__link--sub" href="${a(e.href)}">${s(e.label)}</a></li>`).join(``)}</ol>`:``;return`<li class="side-navigation__item${e.current?` side-navigation__item--current`:``}">${t}${n}</li>`}).join(``)}
  </ol>
</nav>
`}var y,b,x,S,C,w=e((()=>{o(),t(),y=`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true" focusable="false"><path d="M10 4 6 8l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,b=`rootId`,x=`dxp-ntgov-web`,S=`sidebar_nav`,C={async main(e={},t={}){let r=n(`side-navigation`,e),i=t?.env?.CONTENT_API_URL,a=t?.fns,o=(await d(u(t?.ctx?.assetId),a))?.metadata||{};if(!m(o,`sidebar_items`).includes(S))return``;let s=p(o,`sidebar_parent`),c=p(o,`sidebar_current_asset`)||t?.ctx?.assetId||``,[l,f,_]=await Promise.all([d(u(s),a),h(s,i),h(c,i)]),y=f.map(e=>g(e,c,_)).filter(Boolean);return v(l?.url?{name:l.name||l.short_name||``,url:l.url}:null,y,r)}}}));function T(e){let t=c({ctx:{assetId:e},mock:{resolveUri:e=>({ok:!0,data:O[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null})}});return{...t,env:{...t.env,CONTENT_API_URL:j}}}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;await e((async()=>{i(),l(),w(),E=r(C.main),D={title:`dxp components/Side Navigation`},O={5002:{id:`5002`,metadata:{sidebar_items:[`sidebar_nav`],sidebar_parent:[`5001`],sidebar_current_asset:[`5002`]}},5003:{id:`5003`,metadata:{sidebar_items:[`sidebar_nav`],sidebar_parent:[`5001`],sidebar_current_asset:[`5003`]}},9999:{id:`9999`,metadata:{sidebar_items:[`sidebar_nav`],sidebar_parent:[`5001`],sidebar_current_asset:[`9999`]}},5008:{id:`5008`,metadata:{sidebar_items:[`anchor_nav`],sidebar_parent:[`5001`],sidebar_current_asset:[`5008`]}},5001:{id:`5001`,name:`Section page`,short_name:`Section page`,url:`https://example.com/section-page`,metadata:{}}},k=[{id:`5002`,name:`Sub-page one`,url:`https://example.com/section-page/sub-page-one`},{id:`5003`,name:`Sub-page two`,url:`https://example.com/section-page/sub-page-two`},{id:`5004`,name:`Sub-page three`,url:`https://example.com/section-page/sub-page-three`},{id:`5005`,name:`Sub-page four`,url:`https://example.com/section-page/sub-page-four`}],A={5001:k,5003:[{id:`5006`,name:`Nested page one`,url:`https://example.com/section-page/sub-page-two/nested-page-one`},{id:`5007`,name:`Nested page two`,url:`https://example.com/section-page/sub-page-two/nested-page-two`}],9999:k},j=`https://fake-content-api.example/child-list`,M=globalThis.fetch?.bind(globalThis),globalThis.fetch=async(e,...t)=>{if(typeof e==`string`&&e.startsWith(j)){let t=new URL(e).searchParams.get(`rootId`);return{ok:!0,json:async()=>A[t]??[]}}return M(e,...t)},N={},P=T(`5002`),F=await E.markup(N,P),I={render:()=>E(N,P),parameters:{docs:{description:{story:`The current page ("Sub-page one") is highlighted -- bold, with a left border accent, rendered as non-interactive text rather than a link. It has no sub-pages of its own here, so nothing is nested beneath it.`},source:{code:F,language:`html`,type:`code`}}}},L=T(`5003`),R=await E.markup(N,L),z={render:()=>E(N,L),parameters:{docs:{description:{story:`The current page ("Sub-page two") has its own sub-pages -- they render nested, indented, directly beneath it in the list.`},source:{code:R,language:`html`,type:`code`}}}},B=T(`9999`),V=await E.markup(N,B),H={render:()=>E(N,B),parameters:{docs:{description:{story:`sidebar_current_asset doesn't match any child's id (e.g. this component placed on a page outside the section) -- the full list still renders, just with nothing highlighted.`},source:{code:V,language:`html`,type:`code`}}}},U=c({ctx:{assetId:`no-metadata`},mock:{resolveUri:()=>({ok:!0,data:null})}}),W=await E.markup(N,U),G={render:()=>E(N,U),parameters:{docs:{description:{story:`The current page itself fails to resolve via fns.resolveUri (e.g. resolveMatrixAssetById-style auth issue) -- no sidebar_parent/sidebar_current_asset can be read, so the component renders an empty nav rather than throwing.`},source:{code:W,language:`html`,type:`code`}}}},K=T(`5008`),q=await E.markup(N,K),J={render:()=>E(N,K),parameters:{docs:{description:{story:`The current page's sidebar_items metadata doesn't include "sidebar_nav" (e.g. it only has "anchor_nav") -- the component renders nothing at all, not an empty nav shell.`},source:{code:q||`(empty string -- component renders nothing)`,language:`html`,type:`code`}}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => squiz(args, notOptedInInfo),
  parameters: {
    docs: {
      description: {
        story: "The current page's sidebar_items metadata doesn't include \\"sidebar_nav\\" (e.g. it only has \\"anchor_nav\\") -- the component renders nothing at all, not an empty nav shell."
      },
      source: {
        code: notOptedInHtml || "(empty string -- component renders nothing)",
        language: "html",
        type: "code"
      }
    }
  }
}`,...J.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => squiz(args, notOptedInInfo),
  parameters: {
    docs: {
      description: {
        story: "The current page's sidebar_items metadata doesn't include \\"sidebar_nav\\" (e.g. it only has \\"anchor_nav\\") -- the component renders nothing at all, not an empty nav shell."
      },
      source: {
        code: notOptedInHtml || "(empty string -- component renders nothing)",
        language: "html",
        type: "code"
      }
    }
  }
}`,...J.parameters?.docs?.source}}},Y=[`Default`,`WithNestedSubPages`,`NoCurrentPageMatch`,`CurrentPageUnresolvable`,`NotOptedIn`]}))();export{G as CurrentPageUnresolvable,I as Default,H as NoCurrentPageMatch,J as NotOptedIn,z as WithNestedSubPages,Y as __namedExportsOrder,D as default};
//# sourceMappingURL=side-navigation.stories-D57pyBy0.js.map