import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-4zIdV6yt.js";import{n as r,r as i,t as a}from"./xss-Cvy76lHc.js";function o(e){if(!e)return null;if(typeof e==`string`)return{href:e,label:``,target:``,rel:``};if(typeof e!=`object`)return null;let t=e.href||e.url||e.asset_url||e.assetUrl||e.linkUrl||``;if(!t)return null;let n=e.label||e.title||e.name||e.text||e.linkText||``;return{href:String(t),label:String(n||``),target:e.target||``,rel:e.rel||(e.target===`_blank`?`noopener noreferrer`:``)}}async function s(e,t){if(!e||typeof e!=`object`)return null;if(typeof e.label==`string`){let n=e.label.trim();if(n){let r=(e.linkType===`matrix-asset`?`matrix-asset`:`custom-url`)==`matrix-asset`?await u(e.linkAsset,t):c(e.customUrl,``);if(r)return{href:r,label:n,target:``,rel:``}}}let n=o(Object.prototype.hasOwnProperty.call(e,`link`)?e.link:e);if(!n?.href)return null;let r=(typeof e.label==`string`?e.label.trim():``)||n.label;return r?{...n,label:r}:null}function c(e,t=``){return o(e)?.href||t}async function l(e,t){let n=String(e||``).trim();if(!n)return null;if(/^(https?:|\/|\.\/|\.\.\/)/i.test(n))return n;if(typeof t?.resolveUri!=`function`)return null;try{let e=await t.resolveUri(n),r=e&&typeof e==`object`&&`data`in e?e.data:e;return!r||typeof r!=`object`?null:r.url||(Array.isArray(r.urls)?r.urls[0]:``)||``}catch{return null}}async function u(e,t){let n=String(e||``).trim();if(!n)return``;if(/^(https?:|\/|\.\/|\.\.\/)/i.test(n))return n;if(typeof t?.resolveUri!=`function`)return``;try{let e=await t.resolveUri(n),r=e&&typeof e==`object`&&`data`in e?e.data:e;return!r||typeof r!=`object`?``:r.url||(Array.isArray(r.urls)?r.urls[0]:``)||``}catch{return``}}function d(e,t,n=``){return`<img class="${[`ntg-header__logo-image`,n].filter(Boolean).join(` `)}" src="${r(e)}" alt="${a(t||x)}" />`}function f(e){return`<span class="ntg-header__logo-text">${a(e||b)}</span>`}function p(){return`<span class="ntg-header__logo-space" aria-hidden="true"></span>`}function m(e){let t=String(e||``).trim();if(!t)return``;let n=/^department of\s+/i.exec(t);if(!n)return`<span class="ntg-header__agency-name">${a(t)}</span>`;let r=t.slice(0,n[0].length).trimEnd(),i=t.slice(n[0].length).trim();return i?`<span class="ntg-header__agency-name"><span class="ntg-header__agency-name-prefix">${a(r)}</span><span class="ntg-header__agency-name-rest">${a(i)}</span></span>`:`<span class="ntg-header__agency-name">${a(r)}</span>`}function h({variant:e,resolvedLogoUrl:t,logoAlt:n,logoText:i,logoHref:o,agencyName:s,agencyHref:c}){if(e===`agency-internet`){let e=t||S,l=e?d(e,n,`ntg-header__logo-image--agency`):p();return`
    <div class="ntg-header__brand-group ntg-header__brand--agency-internet">
      <a class="ntg-header__brand ntg-header__brand--logo plain" href="${r(o||D)}" aria-label="${a(n||i||x)}">
        ${l}
      </a>
      ${s?`<span class="ntg-header__agency-separator" aria-hidden="true"></span><a class="ntg-header__agency-link plain" href="${r(c||o||`/`)}">${m(s)}</a>`:``}
    </div>`}let l=t?d(t,n,`ntg-header__logo-image--mono`):f(i||b);return`<a class="ntg-header__brand ntg-header__brand--home plain" href="${r(o||D)}" aria-label="${a(n||i||x)}">${l}</a>`}function g(e,t={}){if(!e.length)return``;let{navClass:n=`ntg-header__nav`,listClass:i=`ntg-header__nav-list`,itemClass:o=`ntg-header__nav-item`,linkClass:s=`ntg-header__nav-link`,textClass:c=`ntg-header__nav-text`}=t;return`
      <nav class="${n}" aria-label="Header links">
        <ul class="${i}">
${e.map(e=>{let t=e.target?` target="${a(e.target)}"`:``,n=e.rel?` rel="${a(e.rel)}"`:``;return`<li class="${o}"><a class="${s}" href="${r(e.href)}"${t}${n}><span class="${c}">${a(e.label)}</span></a></li>`}).join(`
`)}
        </ul>
      </nav>`}function _({searchAction:e,searchQueryParam:t,searchPlaceholder:n,inputId:i,searchClass:o=`ntg-header__search`,searchGroupClass:s=`ntg-header__search-group`}){return`
      <form class="${o}" action="${r(e)}" method="get" role="search" aria-label="Site search">
        <label class="ntg-header__search-label" for="${i}">${C}</label>
        <div class="${s}">
          <input
            id="${i}"
            class="ntg-header__search-input"
            type="search"
            name="${a(t)}"
            placeholder="${a(n)}"
            value=""
            autocomplete="off"
          />
          <button class="ntg-header__search-button" type="submit" aria-label="${C}">
            <span class="ntg-header__search-icon" aria-hidden="true">${w}</span>
          </button>
        </div>
      </form>`}function v({logoHtml:e,links:t,searchAction:n,searchQueryParam:r,searchPlaceholder:i,instanceId:a}){let o=t.length>0,s=`ntg-header-search-panel-${a}`,c=`ntg-header-menu-panel-${a}`;return`
<header class="fullwidth ntg-header ntg-header--nt-gov-au" role="banner" data-header-root>
  <div class="ntg-header__bar">
    <div class="ntg-header__container">
      <div class="ntg-header__primary">
        ${o?`<button class="ntg-header__menu-toggle" type="button" aria-label="Open menu" aria-controls="${c}" aria-expanded="false" data-header-menu-toggle>
          <span class="ntg-header__button-icon" aria-hidden="true">${T}</span>
        </button>`:``}
        ${e}
      </div>
      <div class="ntg-header__actions">
        ${g(t)}
        ${_({searchAction:n,searchQueryParam:r,searchPlaceholder:i,inputId:`ntg-header-search-inline-${a}`})}
        <button class="ntg-header__search-toggle" type="button" aria-label="Open search" aria-controls="${s}" aria-expanded="false" data-header-search-toggle>
          <span class="ntg-header__button-icon" aria-hidden="true">${w}</span>
        </button>
      </div>
    </div>
  </div>
  <div id="${s}" class="ntg-header__search-panel" data-header-search-panel hidden>
    <div class="ntg-header__search-panel-inner">
      ${_({searchAction:n,searchQueryParam:r,searchPlaceholder:i,inputId:`ntg-header-search-panel-${a}`,searchClass:`ntg-header__search ntg-header__search--panel`,searchGroupClass:`ntg-header__search-group ntg-header__search-group--panel`})}
      <button class="ntg-header__panel-close ntg-header__panel-close--search" type="button" aria-label="Close search" data-header-search-close>
        <span class="ntg-header__button-icon" aria-hidden="true">${E}</span>
      </button>
    </div>
  </div>
  ${o?`<div id="${c}" class="ntg-header__menu-panel" data-header-menu-panel hidden>
    <button class="ntg-header__menu-backdrop" type="button" aria-label="Close menu" data-header-menu-close></button>
    <div class="ntg-header__menu-drawer">
      <div class="ntg-header__menu-header">
        <button class="ntg-header__panel-close" type="button" aria-label="Close menu" data-header-menu-close>
          <span class="ntg-header__button-icon" aria-hidden="true">${E}</span>
        </button>
      </div>
      ${g(t,{navClass:`ntg-header__menu-nav`,listClass:`ntg-header__menu-list`,itemClass:`ntg-header__menu-item`,linkClass:`ntg-header__menu-link`,textClass:`ntg-header__menu-text`})}
    </div>
  </div>`:``}
</header>
`}function y({logoHtml:e,links:t,searchAction:n,searchQueryParam:r,searchPlaceholder:i,instanceId:a}){let o=`ntg-header-search-panel-${a}`;return`
<header class="fullwidth ntg-header ntg-header--agency-internet" role="banner" data-header-root>
  <div class="ntg-header__bar">
    <div class="ntg-header__container">
      <div class="ntg-header__primary">
        ${e}
      </div>
      <div class="ntg-header__actions">
        ${g(t)}
        ${_({searchAction:n,searchQueryParam:r,searchPlaceholder:i,inputId:`ntg-header-search-inline-${a}`})}
        <button class="ntg-header__search-toggle" type="button" aria-label="Open search" aria-controls="${o}" aria-expanded="false" data-header-search-toggle>
          <span class="ntg-header__button-icon" aria-hidden="true">${w}</span>
        </button>
      </div>
    </div>
  </div>
  <div id="${o}" class="ntg-header__search-panel" data-header-search-panel hidden>
    <div class="ntg-header__search-panel-inner">
      ${_({searchAction:n,searchQueryParam:r,searchPlaceholder:i,inputId:`ntg-header-search-panel-${a}`,searchClass:`ntg-header__search ntg-header__search--panel`,searchGroupClass:`ntg-header__search-group ntg-header__search-group--panel`})}
      <button class="ntg-header__panel-close ntg-header__panel-close--search" type="button" aria-label="Close search" data-header-search-close>
        <span class="ntg-header__button-icon" aria-hidden="true">${E}</span>
      </button>
    </div>
  </div>
</header>
`}var b,x,S,C,w,T,E,D,O,k=e((()=>{i(),b=`NT.GOV.AU`,x=`NT.GOV.AU`,S=`https://dcdd.nt.gov.au/_design/latest/images/ntg-primary-reverse.svg`,C=`Search`,w=`<svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="M11.5 11.5 15 15M7 12.5A5.5 5.5 0 1 0 7 1.5a5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,T=`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,E=`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,D=`https://nt.gov.au`,O={async main(e={},t={}){let{variant:n=`nt-gov-au`,logoSource:r=``,logoLink:i=D,agencyName:a=``,agencyHref:o=``,agencyLinkType:d=`custom-url`,agencyLinkAsset:f=``,agencyCustomUrl:p=``,logoText:m=b,logoAlt:g=x,logoHref:_=D,links:S=[],searchPlaceholder:C=`Search`,searchAction:w=`/search`,searchQueryParam:T=`q`}=e,E=Math.random().toString(36).slice(2,8),O=[`nt-gov-au`,`agency-internet`].includes(n)?n:`nt-gov-au`,k=(await Promise.all((Array.isArray(S)?S:[]).map(e=>s(e,t?.fns)))).filter(Boolean),A=O===`nt-gov-au`?null:await l(r,t?.fns),j=O===`nt-gov-au`?D:c(i,_||D),M=c(o,j||`/`),N=h({variant:O,resolvedLogoUrl:A,logoAlt:g,logoText:m,logoHref:j,agencyName:a,agencyHref:O===`agency-internet`?d===`matrix-asset`?await u(f,t?.fns)||M:c(p,M):M});return O===`nt-gov-au`?v({logoHtml:N,links:k,searchAction:w,searchQueryParam:T,searchPlaceholder:C,instanceId:E}):y({logoHtml:N,links:k,searchAction:w,searchQueryParam:T,searchPlaceholder:C,instanceId:E})}}})),A,j,M,N,P,F,I,L,R,z,B,V;await e((async()=>{n(),k(),{expect:A,userEvent:j}=__STORYBOOK_MODULE_TEST__,M=t(O.main),N={title:`dxp/Header`,parameters:{layout:`fullscreen`,controls:{expanded:!0,sort:`requiredFirst`}}},P={variant:{control:`select`,options:[`nt-gov-au`,`agency-internet`],table:{category:`1. Layout`}},agencyName:{control:`text`,if:{arg:`variant`,neq:`nt-gov-au`},table:{category:`2. Agency Variant Only`}},agencyLinkType:{control:`select`,options:[`matrix-asset`,`custom-url`],if:{arg:`variant`,neq:`nt-gov-au`},table:{category:`2. Agency Variant Only`}},agencyLinkAsset:{control:`text`,if:{arg:`agencyLinkType`,eq:`matrix-asset`},table:{category:`2. Agency Variant Only`}},agencyCustomUrl:{control:`text`,if:{arg:`agencyLinkType`,eq:`custom-url`},table:{category:`2. Agency Variant Only`}},links:{control:`object`,if:{arg:`variant`,neq:`agency-internet`},table:{category:`3. Navigation`}}},F={variant:`nt-gov-au`,links:[{label:`Find online services`,linkType:`custom-url`,customUrl:`https://nt.gov.au/services`},{label:`Contacts`,linkType:`custom-url`,customUrl:`https://nt.gov.au/contacts`}]},I=await M.markup(F),L={name:`NTG`,render:e=>M(e),args:F,argTypes:P,parameters:{docs:{source:{code:I,language:`html`,type:`code`}}},play:async({canvasElement:e})=>{let t=e.querySelector(`[data-header-root]`),n=t?.querySelector(`[data-header-search-toggle]`),r=t?.querySelector(`[data-header-search-panel]`),i=t?.querySelector(`[data-header-search-close]`),a=t?.querySelector(`[data-header-menu-toggle]`),o=t?.querySelector(`[data-header-menu-panel]`),s=t?.querySelector(`[data-header-menu-close]`);await A(t).toBeTruthy(),await A(n).toHaveAttribute(`aria-expanded`,`false`),await A(r?.hidden).toBe(!0),await j.click(n),await A(n).toHaveAttribute(`aria-expanded`,`true`),await A(r?.hidden).toBe(!1),await j.click(i),await A(n).toHaveAttribute(`aria-expanded`,`false`),await A(r?.hidden).toBe(!0),await A(a).toHaveAttribute(`aria-expanded`,`false`),await A(o?.hidden).toBe(!0),await j.click(a),await A(a).toHaveAttribute(`aria-expanded`,`true`),await A(o?.hidden).toBe(!1),await j.click(s),await A(a).toHaveAttribute(`aria-expanded`,`false`),await A(o?.hidden).toBe(!0)}},R={variant:`agency-internet`,agencyName:`Department of Corporate and Digital Development`,agencyLinkType:`custom-url`,agencyCustomUrl:`https://dcdd.nt.gov.au`,logoSource:`/src/dxp/header/previews/mocks/ntg-primary-reverse.svg`,links:[{label:`Find online services`,linkType:`custom-url`,customUrl:`https://nt.gov.au/services`},{label:`Contacts`,linkType:`custom-url`,customUrl:`https://nt.gov.au/contacts`}]},z=await M.markup(R),B={render:e=>M(e),args:R,argTypes:P,parameters:{docs:{source:{code:z,language:`html`,type:`code`}}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`NtGovAu`,`AgencyInternet`]}))();export{B as AgencyInternet,L as NtGovAu,V as __namedExportsOrder,N as default};
//# sourceMappingURL=header.stories-DKvZF455.js.map