import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-D0vBjeOt.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";import{n as c,t as l}from"./squizInfo.mock-D4VTpLG1.js";import{n as u,t as d}from"./createAssetResolver-DSFNg-TS.js";async function f(e,t){if(!e||!t)return[];let n=`${t}?${_}=${encodeURIComponent(e)}`;try{let e=await fetch(n);if(!e.ok)return[];let t=await e.json();return Array.isArray(t)?t:[]}catch{return[]}}function p(e,t,n){if(!e||!e.url)return null;let r=!!t&&String(e.id)===String(t);return{label:e.name||``,href:e.url,current:r,children:r?n.map(m).filter(Boolean):[]}}function m(e){return!e||!e.url?null:{label:e.name||``,href:e.url}}function h(e,t,n){return`
<nav ${n} class="side-navigation" aria-label="Section navigation">
  ${e?`
    <a class="side-navigation__back" href="${a(e.url)}">
      ${g}
      <span>${s(e.name)}</span>
    </a>`:``}
  <ol class="side-navigation__list">
    ${t.map(e=>{let t=e.current?`<span class="side-navigation__link side-navigation__link--current" aria-current="page">${s(e.label)}</span>`:`<a class="side-navigation__link" href="${a(e.href)}">${s(e.label)}</a>`,n=e.children.length?`<ol class="side-navigation__sublist">${e.children.map(e=>`<li class="side-navigation__subitem"><a class="side-navigation__link side-navigation__link--sub" href="${a(e.href)}">${s(e.label)}</a></li>`).join(``)}</ol>`:``;return`<li class="side-navigation__item${e.current?` side-navigation__item--current`:``}">${t}${n}</li>`}).join(``)}
  </ol>
</nav>
`}var g,_,v,y,b=e((()=>{o(),u(),t(),g=`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" aria-hidden="true" focusable="false"><path d="M10 4 6 8l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,_=`rootId`,v=`sidebar_nav`,y={async main(e={},t={}){let{editor:r,env:{MATRIX_API_IDENTIFIER:i}={}}=t;if(!i)return`<span data-sidebar-nav>${r?``:`<!--`}
          <code>MATRIX_API_IDENTIFIER</code> must be set in the DXP Components Set.
      ${r?``:`-->`}</div>`;let a=d(i,t),o=n(`side-navigation`,e),s=t?.env?.CONTENT_API_URL;t?.fns;let{data:c}=await a(t?.ctx?.assetId),l=c?.metadata||{};if(!l?.sidebar_items?.includes(v))return`<!-- ${v}: disabled -->`;let u=l?.sidebar_parent?.[0]??``,m=l?.sidebar_current_asset?.[0]??t?.ctx?.assetId??``,[{data:g},_,y]=(await Promise.allSettled([a(u),f(u,s),f(m,s)])).map(e=>e.value),b=_.map(e=>p(e,m,y)).filter(Boolean);return h(g?.url?{name:g.name||g.short_name||``,url:g.url}:null,b,o)}}}));function x(e){let t=c({ctx:{assetId:e},env:{MATRIX_API_IDENTIFIER:`mock`},mock:{resolveUri:e=>({ok:!0,data:w[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null})}});return{...t,env:{...t.env,CONTENT_API_URL:D}}}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;await e((async()=>{i(),l(),b(),S=r(y.main),C={title:`dxp components/Side Navigation`},w={5002:{id:`5002`,metadata:{sidebar_items:[`sidebar_nav`],sidebar_parent:[`5001`],sidebar_current_asset:[`5002`]}},5003:{id:`5003`,metadata:{sidebar_items:[`sidebar_nav`],sidebar_parent:[`5001`],sidebar_current_asset:[`5003`]}},9999:{id:`9999`,metadata:{sidebar_items:[`sidebar_nav`],sidebar_parent:[`5001`],sidebar_current_asset:[`9999`]}},5008:{id:`5008`,metadata:{sidebar_items:[`anchor_nav`],sidebar_parent:[`5001`],sidebar_current_asset:[`5008`]}},5001:{id:`5001`,name:`Section page`,short_name:`Section page`,url:`https://example.com/section-page`,metadata:{}}},T=[{id:`5002`,name:`Sub-page one`,url:`https://example.com/section-page/sub-page-one`},{id:`5003`,name:`Sub-page two`,url:`https://example.com/section-page/sub-page-two`},{id:`5004`,name:`Sub-page three`,url:`https://example.com/section-page/sub-page-three`},{id:`5005`,name:`Sub-page four`,url:`https://example.com/section-page/sub-page-four`}],E={5001:T,5003:[{id:`5006`,name:`Nested page one`,url:`https://example.com/section-page/sub-page-two/nested-page-one`},{id:`5007`,name:`Nested page two`,url:`https://example.com/section-page/sub-page-two/nested-page-two`}],9999:T},D=`https://fake-content-api.example/child-list`,O=globalThis.fetch?.bind(globalThis),globalThis.fetch=async(e,...t)=>{if(typeof e==`string`&&e.startsWith(D)){let t=new URL(e).searchParams.get(`rootId`);return{ok:!0,json:async()=>E[t]??[]}}return O(e,...t)},k={},A=x(`5002`),j=await S.markup(k,A),M={render:()=>S(k,A),parameters:{docs:{description:{story:`The current page ("Sub-page one") is highlighted -- bold, with a left border accent, rendered as non-interactive text rather than a link. It has no sub-pages of its own here, so nothing is nested beneath it.`},source:{code:j,language:`html`,type:`code`}}}},N=x(`5003`),P=await S.markup(k,N),F={render:()=>S(k,N),parameters:{docs:{description:{story:`The current page ("Sub-page two") has its own sub-pages -- they render nested, indented, directly beneath it in the list.`},source:{code:P,language:`html`,type:`code`}}}},I=x(`9999`),L=await S.markup(k,I),R={render:()=>S(k,I),parameters:{docs:{description:{story:`sidebar_current_asset doesn't match any child's id (e.g. this component placed on a page outside the section) -- the full list still renders, just with nothing highlighted.`},source:{code:L,language:`html`,type:`code`}}}},z=c({ctx:{assetId:`no-metadata`},env:{MATRIX_API_IDENTIFIER:`mock`},mock:{resolveUri:()=>({ok:!0,data:null})}}),B=await S.markup(k,z),V={render:()=>S(k,z),parameters:{docs:{description:{story:`The current page itself fails to resolve via fns.resolveUri (e.g. resolveMatrixAssetById-style auth issue) -- no sidebar_parent/sidebar_current_asset can be read, so the component renders an empty nav rather than throwing.`},source:{code:B,language:`html`,type:`code`}}}},H=x(`5008`),U=await S.markup(k,H),W={render:()=>S(k,H),parameters:{docs:{description:{story:`The current page's sidebar_items metadata doesn't include "sidebar_nav" (e.g. it only has "anchor_nav") -- the component renders nothing at all, not an empty nav shell.`},source:{code:U||`(empty string -- component renders nothing)`,language:`html`,type:`code`}}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G=[`Default`,`WithNestedSubPages`,`NoCurrentPageMatch`,`CurrentPageUnresolvable`,`NotOptedIn`]}))();export{V as CurrentPageUnresolvable,M as Default,R as NoCurrentPageMatch,W as NotOptedIn,F as WithNestedSubPages,G as __namedExportsOrder,C as default};
//# sourceMappingURL=side-navigation.stories-CZuwGAAn.js.map