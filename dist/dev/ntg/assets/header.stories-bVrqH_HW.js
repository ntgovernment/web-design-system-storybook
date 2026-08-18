import{n as e}from"./chunk-BVpWp9h4.js";import{r as t,t as n}from"./component.helper-D3WXhhhy.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";function c(e){if(!e)return null;if(typeof e==`string`)return{href:e,label:``,target:``,rel:``};if(typeof e!=`object`)return null;let t=e.href||e.url||e.asset_url||e.assetUrl||e.linkUrl||``;if(!t)return null;let n=e.label||e.title||e.name||e.text||e.linkText||``;return{href:String(t),label:String(n||``),target:e.target||``,rel:e.rel||(e.target===`_blank`?`noopener noreferrer`:``)}}async function l(e,t){if(!e||typeof e!=`object`)return null;if(typeof e.label==`string`){let n=e.label.trim();if(n){let r=(e.linkType===`matrix-asset`?`matrix-asset`:`custom-url`)==`matrix-asset`?await f(e.linkAsset,t):u(e.customUrl,``);if(r)return{href:r,label:n,target:``,rel:``}}}let n=c(Object.prototype.hasOwnProperty.call(e,`link`)?e.link:e);if(!n?.href)return null;let r=(typeof e.label==`string`?e.label.trim():``)||n.label;return r?{...n,label:r}:null}function u(e,t=``){return c(e)?.href||t}async function d(e,t){let n=String(e||``).trim();if(!n)return null;if(/^(https?:|\/|\.\/|\.\.\/)/i.test(n))return n;if(typeof t?.resolveUri!=`function`)return null;try{let e=await t.resolveUri(n),r=e&&typeof e==`object`&&`data`in e?e.data:e;return!r||typeof r!=`object`?null:r.url||(Array.isArray(r.urls)?r.urls[0]:``)||``}catch{return null}}async function f(e,t){let n=String(e||``).trim();if(!n)return``;if(/^(https?:|\/|\.\/|\.\.\/)/i.test(n))return n;if(typeof t?.resolveUri!=`function`)return``;try{let e=await t.resolveUri(n),r=e&&typeof e==`object`&&`data`in e?e.data:e;return!r||typeof r!=`object`?``:r.url||(Array.isArray(r.urls)?r.urls[0]:``)||``}catch{return``}}function p(e,t,n=``){return`<img class="${[`ntg-header__logo-image`,n].filter(Boolean).join(` `)}" src="${a(e)}" alt="${s(t||C)}" />`}function m(e){return`<span class="ntg-header__logo-text">${s(e||S)}</span>`}function h(){return`<span class="ntg-header__logo-space" aria-hidden="true"></span>`}function g(e){let t=String(e||``).trim();if(!t)return``;let n=/^department of\s+/i.exec(t);if(!n)return`<span class="ntg-header__agency-name">${s(t)}</span>`;let r=t.slice(0,n[0].length).trimEnd(),i=t.slice(n[0].length).trim();return i?`<span class="ntg-header__agency-name"><span class="ntg-header__agency-name-prefix">${s(r)}</span><span class="ntg-header__agency-name-rest">${s(i)}</span></span>`:`<span class="ntg-header__agency-name">${s(r)}</span>`}function _({variant:e,resolvedLogoUrl:t,logoAlt:n,logoText:r,logoHref:i,agencyName:o,agencyHref:c}){if(e===`agency-internet`){let e=t||w,l=e?p(e,n,`ntg-header__logo-image--agency`):h();return`
    <div class="ntg-header__brand-group ntg-header__brand--agency-internet">
      <a class="ntg-header__brand ntg-header__brand--logo plain" href="${a(i||k)}" aria-label="${s(n||r||C)}">
        ${l}
      </a>
      ${o?`<span class="ntg-header__agency-separator" aria-hidden="true"></span><a class="ntg-header__agency-link plain" href="${a(c||i||`/`)}">${g(o)}</a>`:``}
    </div>`}let l=t?p(t,n,`ntg-header__logo-image--mono`):m(r||S);return`<a class="ntg-header__brand ntg-header__brand--home plain" href="${a(i||k)}" aria-label="${s(n||r||C)}">${l}</a>`}function v(e,t={}){if(!e.length)return``;let{navClass:n=`ntg-header__nav`,listClass:r=`ntg-header__nav-list`,itemClass:i=`ntg-header__nav-item`,linkClass:o=`ntg-header__nav-link`,textClass:c=`ntg-header__nav-text`}=t;return`
      <nav class="${n}" aria-label="Header links">
        <ul class="${r}">
${e.map(e=>{let t=e.target?` target="${s(e.target)}"`:``,n=e.rel?` rel="${s(e.rel)}"`:``;return`<li class="${i}"><a class="${o}" href="${a(e.href)}"${t}${n}><span class="${c}">${s(e.label)}</span></a></li>`}).join(`
`)}
        </ul>
      </nav>`}function y({searchAction:e,searchQueryParam:t,searchPlaceholder:n,inputId:r,searchClass:i=`ntg-header__search`,searchGroupClass:o=`ntg-header__search-group`}){return`
      <form class="${i}" action="${a(e)}" method="get" role="search" aria-label="Site search">
        <label class="ntg-header__search-label" for="${r}">${T}</label>
        <div class="${o}">
          <input
            id="${r}"
            class="ntg-header__search-input"
            type="search"
            name="${s(t)}"
            placeholder="${s(n)}"
            value=""
            autocomplete="off"
          />
          <button class="ntg-header__search-button" type="submit" aria-label="${T}">
            <span class="ntg-header__search-icon" aria-hidden="true">${E}</span>
          </button>
        </div>
      </form>`}function b({attrs:e,logoHtml:t,links:n,searchAction:r,searchQueryParam:i,searchPlaceholder:a,instanceId:o}){let s=n.length>0,c=`ntg-header-search-panel-${o}`,l=`ntg-header-menu-panel-${o}`;return`
<header ${e} class="fullwidth ntg-header ntg-header--nt-gov-au" role="banner" data-header-root>
  <div class="ntg-header__bar">
    <div class="ntg-header__container">
      <div class="ntg-header__primary">
        ${s?`<button class="ntg-header__menu-toggle" type="button" aria-label="Open menu" aria-controls="${l}" aria-expanded="false" data-header-menu-toggle>
          <span class="ntg-header__button-icon" aria-hidden="true">${D}</span>
        </button>`:``}
        ${t}
      </div>
      <div class="ntg-header__actions">
        ${v(n)}
        ${y({searchAction:r,searchQueryParam:i,searchPlaceholder:a,inputId:`ntg-header-search-inline-${o}`})}
        <button class="ntg-header__search-toggle" type="button" aria-label="Open search" aria-controls="${c}" aria-expanded="false" data-header-search-toggle>
          <span class="ntg-header__button-icon" aria-hidden="true">${E}</span>
        </button>
      </div>
    </div>
  </div>
  <div id="${c}" class="ntg-header__search-panel" data-header-search-panel hidden>
    <div class="ntg-header__search-panel-inner">
      ${y({searchAction:r,searchQueryParam:i,searchPlaceholder:a,inputId:`ntg-header-search-panel-${o}`,searchClass:`ntg-header__search ntg-header__search--panel`,searchGroupClass:`ntg-header__search-group ntg-header__search-group--panel`})}
      <button class="ntg-header__panel-close ntg-header__panel-close--search" type="button" aria-label="Close search" data-header-search-close>
        <span class="ntg-header__button-icon" aria-hidden="true">${O}</span>
      </button>
    </div>
  </div>
  ${s?`<div id="${l}" class="ntg-header__menu-panel" data-header-menu-panel hidden>
    <button class="ntg-header__menu-backdrop" type="button" aria-label="Close menu" data-header-menu-close></button>
    <div class="ntg-header__menu-drawer">
      <div class="ntg-header__menu-header">
        <button class="ntg-header__panel-close" type="button" aria-label="Close menu" data-header-menu-close>
          <span class="ntg-header__button-icon" aria-hidden="true">${O}</span>
        </button>
      </div>
      ${v(n,{navClass:`ntg-header__menu-nav`,listClass:`ntg-header__menu-list`,itemClass:`ntg-header__menu-item`,linkClass:`ntg-header__menu-link`,textClass:`ntg-header__menu-text`})}
    </div>
  </div>`:``}
</header>
`}function x({attrs:e,logoHtml:t,links:n,searchAction:r,searchQueryParam:i,searchPlaceholder:a,instanceId:o}){let s=`ntg-header-search-panel-${o}`;return`
<header ${e} class="ntg-header ntg-header--agency-internet" role="banner" data-header-root>
  <div class="ntg-header__bar">
    <div class="ntg-header__container">
      <div class="ntg-header__primary">
        ${t}
      </div>
      <div class="ntg-header__actions">
        ${v(n)}
        ${y({searchAction:r,searchQueryParam:i,searchPlaceholder:a,inputId:`ntg-header-search-inline-${o}`})}
        <button class="ntg-header__search-toggle" type="button" aria-label="Open search" aria-controls="${s}" aria-expanded="false" data-header-search-toggle>
          <span class="ntg-header__button-icon" aria-hidden="true">${E}</span>
        </button>
      </div>
    </div>
  </div>
  <div id="${s}" class="ntg-header__search-panel" data-header-search-panel hidden>
    <div class="ntg-header__search-panel-inner">
      ${y({searchAction:r,searchQueryParam:i,searchPlaceholder:a,inputId:`ntg-header-search-panel-${o}`,searchClass:`ntg-header__search ntg-header__search--panel`,searchGroupClass:`ntg-header__search-group ntg-header__search-group--panel`})}
      <button class="ntg-header__panel-close ntg-header__panel-close--search" type="button" aria-label="Close search" data-header-search-close>
        <span class="ntg-header__button-icon" aria-hidden="true">${O}</span>
      </button>
    </div>
  </div>
</header>
`}var S,C,w,T,E,D,O,k,A,j=e((()=>{o(),t(),S=`NT.GOV.AU`,C=`NT.GOV.AU`,w=`https://dcdd.nt.gov.au/_design/latest/images/ntg-primary-reverse.svg`,T=`Search`,E=`<svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="M11.5 11.5 15 15M7 12.5A5.5 5.5 0 1 0 7 1.5a5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,D=`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,O=`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,k=`https://nt.gov.au`,A={async main(e={},t={}){let{variant:r=`nt-gov-au`,logoSource:i=``,logoLink:a=k,agencyName:o=``,agencyHref:s=``,agencyLinkType:c=`custom-url`,agencyLinkAsset:p=``,agencyCustomUrl:m=``,logoText:h=S,logoAlt:g=C,logoHref:v=k,links:y=[],searchPlaceholder:w=`Search`,searchAction:T=`/search`,searchQueryParam:E=`q`}=e,D=Math.random().toString(36).slice(2,8),O=[`nt-gov-au`,`agency-internet`].includes(r)?r:`nt-gov-au`,A=(await Promise.all((Array.isArray(y)?y:[]).map(e=>l(e,t?.fns)))).filter(Boolean),j=O===`nt-gov-au`?null:await d(i,t?.fns),M=O===`nt-gov-au`?k:u(a,v||k),N=u(s,M||`/`),P=_({variant:O,resolvedLogoUrl:j,logoAlt:g,logoText:h,logoHref:M,agencyName:o,agencyHref:O===`agency-internet`?c===`matrix-asset`?await f(p,t?.fns)||N:u(m,N):N}),F=n(`header`,e);return O===`nt-gov-au`?b({attrs:F,logoHtml:P,links:A,searchAction:T,searchQueryParam:E,searchPlaceholder:w,instanceId:D}):x({attrs:F,logoHtml:P,links:A,searchAction:T,searchQueryParam:E,searchPlaceholder:w,instanceId:D})}}})),M,N,P,F,I,L,R,z,B,V,H,U;await e((async()=>{i(),j(),{expect:M,userEvent:N}=__STORYBOOK_MODULE_TEST__,P=r(A.main),F={title:`dxp/Header`,parameters:{noContentArea:!0,controls:{expanded:!0,sort:`requiredFirst`}}},I={variant:{control:`select`,options:[`nt-gov-au`,`agency-internet`],table:{category:`1. Layout`}},agencyName:{control:`text`,if:{arg:`variant`,neq:`nt-gov-au`},table:{category:`2. Agency Variant Only`}},agencyLinkType:{control:`select`,options:[`matrix-asset`,`custom-url`],if:{arg:`variant`,neq:`nt-gov-au`},table:{category:`2. Agency Variant Only`}},agencyLinkAsset:{control:`text`,if:{arg:`agencyLinkType`,eq:`matrix-asset`},table:{category:`2. Agency Variant Only`}},agencyCustomUrl:{control:`text`,if:{arg:`agencyLinkType`,eq:`custom-url`},table:{category:`2. Agency Variant Only`}},links:{control:`object`,if:{arg:`variant`,neq:`agency-internet`},table:{category:`3. Navigation`}}},L={variant:`nt-gov-au`,links:[{label:`Find online services`,linkType:`custom-url`,customUrl:`https://nt.gov.au/services`},{label:`Contacts`,linkType:`custom-url`,customUrl:`https://nt.gov.au/contacts`}]},R=await P.markup(L),z={name:`NTG`,render:e=>P(e),args:L,argTypes:I,parameters:{docs:{source:{code:R,language:`html`,type:`code`}}},play:async({canvasElement:e})=>{let t=e.querySelector(`[data-header-root]`),n=t?.querySelector(`[data-header-search-toggle]`),r=t?.querySelector(`[data-header-search-panel]`),i=t?.querySelector(`[data-header-search-close]`),a=t?.querySelector(`[data-header-menu-toggle]`),o=t?.querySelector(`[data-header-menu-panel]`),s=t?.querySelector(`[data-header-menu-close]`);await M(t).toBeTruthy(),await M(n).toHaveAttribute(`aria-expanded`,`false`),await M(r?.hidden).toBe(!0),await N.click(n),await M(n).toHaveAttribute(`aria-expanded`,`true`),await M(r?.hidden).toBe(!1),await N.click(i),await M(n).toHaveAttribute(`aria-expanded`,`false`),await M(r?.hidden).toBe(!0),await M(a).toHaveAttribute(`aria-expanded`,`false`),await M(o?.hidden).toBe(!0),await N.click(a),await M(a).toHaveAttribute(`aria-expanded`,`true`),await M(o?.hidden).toBe(!1),await N.click(s),await M(a).toHaveAttribute(`aria-expanded`,`false`),await M(o?.hidden).toBe(!0)}},B={variant:`agency-internet`,agencyName:`Department of Corporate and Digital Development`,agencyLinkType:`custom-url`,agencyCustomUrl:`https://dcdd.nt.gov.au`,logoSource:`/src/dxp/header/previews/mocks/ntg-primary-reverse.svg`,links:[{label:`Find online services`,linkType:`custom-url`,customUrl:`https://nt.gov.au/services`},{label:`Contacts`,linkType:`custom-url`,customUrl:`https://nt.gov.au/contacts`}]},V=await P.markup(B),H={render:e=>P(e),args:B,argTypes:I,parameters:{docs:{source:{code:V,language:`html`,type:`code`}}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "NTG",
  render: args => squiz(args),
  args: ntGovAuArgs,
  argTypes,
  parameters: {
    docs: {
      source: {
        code: ntGovAuHtml,
        language: "html",
        type: "code"
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[data-header-root]");
    const searchToggle = root?.querySelector("[data-header-search-toggle]");
    const searchPanel = root?.querySelector("[data-header-search-panel]");
    const searchClose = root?.querySelector("[data-header-search-close]");
    const menuToggle = root?.querySelector("[data-header-menu-toggle]");
    const menuPanel = root?.querySelector("[data-header-menu-panel]");
    const menuClose = root?.querySelector("[data-header-menu-close]");
    await expect(root).toBeTruthy();
    await expect(searchToggle).toHaveAttribute("aria-expanded", "false");
    await expect(searchPanel?.hidden).toBe(true);
    await userEvent.click(searchToggle);
    await expect(searchToggle).toHaveAttribute("aria-expanded", "true");
    await expect(searchPanel?.hidden).toBe(false);
    await userEvent.click(searchClose);
    await expect(searchToggle).toHaveAttribute("aria-expanded", "false");
    await expect(searchPanel?.hidden).toBe(true);
    await expect(menuToggle).toHaveAttribute("aria-expanded", "false");
    await expect(menuPanel?.hidden).toBe(true);
    await userEvent.click(menuToggle);
    await expect(menuToggle).toHaveAttribute("aria-expanded", "true");
    await expect(menuPanel?.hidden).toBe(false);
    await userEvent.click(menuClose);
    await expect(menuToggle).toHaveAttribute("aria-expanded", "false");
    await expect(menuPanel?.hidden).toBe(true);
  }
}`,...z.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: agencyInternetArgs,
  argTypes,
  parameters: {
    docs: {
      source: {
        code: agencyInternetHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...H.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "NTG",
  render: args => squiz(args),
  args: ntGovAuArgs,
  argTypes,
  parameters: {
    docs: {
      source: {
        code: ntGovAuHtml,
        language: "html",
        type: "code"
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[data-header-root]");
    const searchToggle = root?.querySelector("[data-header-search-toggle]");
    const searchPanel = root?.querySelector("[data-header-search-panel]");
    const searchClose = root?.querySelector("[data-header-search-close]");
    const menuToggle = root?.querySelector("[data-header-menu-toggle]");
    const menuPanel = root?.querySelector("[data-header-menu-panel]");
    const menuClose = root?.querySelector("[data-header-menu-close]");
    await expect(root).toBeTruthy();
    await expect(searchToggle).toHaveAttribute("aria-expanded", "false");
    await expect(searchPanel?.hidden).toBe(true);
    await userEvent.click(searchToggle);
    await expect(searchToggle).toHaveAttribute("aria-expanded", "true");
    await expect(searchPanel?.hidden).toBe(false);
    await userEvent.click(searchClose);
    await expect(searchToggle).toHaveAttribute("aria-expanded", "false");
    await expect(searchPanel?.hidden).toBe(true);
    await expect(menuToggle).toHaveAttribute("aria-expanded", "false");
    await expect(menuPanel?.hidden).toBe(true);
    await userEvent.click(menuToggle);
    await expect(menuToggle).toHaveAttribute("aria-expanded", "true");
    await expect(menuPanel?.hidden).toBe(false);
    await userEvent.click(menuClose);
    await expect(menuToggle).toHaveAttribute("aria-expanded", "false");
    await expect(menuPanel?.hidden).toBe(true);
  }
}`,...z.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: agencyInternetArgs,
  argTypes,
  parameters: {
    docs: {
      source: {
        code: agencyInternetHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...H.parameters?.docs?.source}}},U=[`NtGovAu`,`AgencyInternet`]}))();export{H as AgencyInternet,z as NtGovAu,U as __namedExportsOrder,F as default};
//# sourceMappingURL=header.stories-bVrqH_HW.js.map