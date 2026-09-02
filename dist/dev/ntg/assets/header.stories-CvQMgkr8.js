import{n as e}from"./chunk-BVpWp9h4.js";import{a as t,l as n}from"./directive-helpers-DXeJie5u.js";import{n as r,r as i,t as a}from"./component.helper-D0vBjeOt.js";import{n as o,t as s}from"./squizStoryRenderer-4zIdV6yt.js";import{n as c,r as l,t as u}from"./xss-Cvy76lHc.js";function d(e){if(!e)return null;if(typeof e==`string`)return{href:e,label:``,target:``,rel:``};if(typeof e!=`object`)return null;let t=e.href||e.url||e.asset_url||e.assetUrl||e.linkUrl||``;if(!t)return null;let n=e.label||e.title||e.name||e.text||e.linkText||``;return{href:String(t),label:String(n||``),target:e.target||``,rel:e.rel||(e.target===`_blank`?`noopener noreferrer`:``)}}async function f(e,t){if(!e||typeof e!=`object`)return null;if(typeof e.label==`string`){let n=e.label.trim();if(n){let r=(e.linkType===`matrix-asset`?`matrix-asset`:`custom-url`)==`matrix-asset`?await h(e.linkAsset,t):p(e.customUrl,``);if(r)return{href:r,label:n,target:``,rel:``}}}let n=d(Object.prototype.hasOwnProperty.call(e,`link`)?e.link:e);if(!n?.href)return null;let r=(typeof e.label==`string`?e.label.trim():``)||n.label;return r?{...n,label:r}:null}function p(e,t=``){return d(e)?.href||t}async function m(e,t){let n=String(e||``).trim();if(!n)return null;if(/^(https?:|\/|\.\/|\.\.\/)/i.test(n))return n;if(typeof t?.resolveUri!=`function`)return null;try{let e=await t.resolveUri(n),r=e&&typeof e==`object`&&`data`in e?e.data:e;return!r||typeof r!=`object`?null:r.url||(Array.isArray(r.urls)?r.urls[0]:``)||``}catch{return null}}async function h(e,t){let n=String(e||``).trim();if(!n)return``;if(/^(https?:|\/|\.\/|\.\.\/)/i.test(n))return n;if(typeof t?.resolveUri!=`function`)return``;try{let e=await t.resolveUri(n),r=e&&typeof e==`object`&&`data`in e?e.data:e;return!r||typeof r!=`object`?``:r.url||(Array.isArray(r.urls)?r.urls[0]:``)||``}catch{return``}}function g(e,t,n=``){return`<img class="${[`ntg-header__logo-image`,n].filter(Boolean).join(` `)}" src="${c(e)}" alt="${u(t||E)}" />`}function _(e){return`<span class="ntg-header__logo-text">${u(e||T)}</span>`}function v(){return`<span class="ntg-header__logo-space" aria-hidden="true"></span>`}function y(e){let t=String(e||``).trim();if(!t)return``;let n=/^department of\s+/i.exec(t);if(!n)return`<span class="ntg-header__agency-name">${u(t)}</span>`;let r=t.slice(0,n[0].length).trimEnd(),i=t.slice(n[0].length).trim();return i?`<span class="ntg-header__agency-name"><span class="ntg-header__agency-name-prefix">${u(r)}</span><span class="ntg-header__agency-name-rest">${u(i)}</span></span>`:`<span class="ntg-header__agency-name">${u(r)}</span>`}function b({variant:e,resolvedLogoUrl:t,logoAlt:n,logoText:r,logoHref:i,agencyName:a,agencyHref:o}){if(e===`agency-internet`){let e=t||D,s=e?g(e,n,`ntg-header__logo-image--agency`):v();return`
    <div class="ntg-header__brand-group ntg-header__brand--agency-internet">
      <a class="ntg-header__brand ntg-header__brand--logo plain" href="${c(i||M)}" aria-label="${u(n||r||E)}">
        ${s}
      </a>
      ${a?`<span class="ntg-header__agency-separator" aria-hidden="true"></span><a class="ntg-header__agency-link plain" href="${c(o||i||`/`)}">${y(a)}</a>`:``}
    </div>`}let s=t?g(t,n,`ntg-header__logo-image--mono`):_(r||T);return`<a class="ntg-header__brand ntg-header__brand--home plain" href="${c(i||M)}" aria-label="${u(n||r||E)}">${s}</a>`}function x(e,t={}){if(!e.length)return``;let{navClass:n=`ntg-header__nav`,listClass:r=`ntg-header__nav-list`,itemClass:i=`ntg-header__nav-item`,linkClass:a=`ntg-header__nav-link`,textClass:o=`ntg-header__nav-text`}=t;return`
      <nav class="${n}" aria-label="Header links">
        <ul class="${r}">
${e.map(e=>{let t=e.target?` target="${u(e.target)}"`:``,n=e.rel?` rel="${u(e.rel)}"`:``;return`<li class="${i}"><a class="${a}" href="${c(e.href)}"${t}${n}><span class="${o}">${u(e.label)}</span></a></li>`}).join(`
`)}
        </ul>
      </nav>`}function S({searchAction:e,searchQueryParam:t,searchPlaceholder:n,inputId:r,searchClass:i=`ntg-header__search`,searchGroupClass:a=`ntg-header__search-group`}){return`
      <form class="${i}" action="${c(e)}" method="get" role="search" aria-label="Site search">
        <label class="ntg-header__search-label" for="${r}">${O}</label>
        <div class="${a}">
          <input
            id="${r}"
            class="ntg-header__search-input"
            type="search"
            name="${u(t)}"
            placeholder="${u(n)}"
            value=""
            autocomplete="off"
          />
          <button class="ntg-header__search-button" type="submit" aria-label="${O}">
            <span class="ntg-header__search-icon" aria-hidden="true">${k}</span>
          </button>
        </div>
      </form>`}function C({attrs:e,logoHtml:t,links:n,searchAction:r,searchQueryParam:i,searchPlaceholder:a,instanceId:o}){let s=n.length>0,c=`ntg-header-search-panel-${o}`,l=`ntg-header-menu-panel-${o}`;return`
<header ${e} class="fullwidth ntg-header ntg-header--nt-gov-au" role="banner" data-header-root>
  <div class="ntg-header__bar">
    <div class="ntg-header__container">
      <div class="ntg-header__primary">
        ${s?`<button class="ntg-header__menu-toggle" type="button" aria-label="Open menu" aria-controls="${l}" aria-expanded="false" data-header-menu-toggle>
          <span class="ntg-header__button-icon" aria-hidden="true">${A}</span>
        </button>`:``}
        ${t}
      </div>
      <div class="ntg-header__actions">
        ${x(n)}
        ${S({searchAction:r,searchQueryParam:i,searchPlaceholder:a,inputId:`ntg-header-search-inline-${o}`})}
        <button class="ntg-header__search-toggle" type="button" aria-label="Open search" aria-controls="${c}" aria-expanded="false" data-header-search-toggle>
          <span class="ntg-header__button-icon" aria-hidden="true">${k}</span>
        </button>
      </div>
    </div>
  </div>
  <div id="${c}" class="ntg-header__search-panel" data-header-search-panel hidden>
    <div class="ntg-header__search-panel-inner">
      ${S({searchAction:r,searchQueryParam:i,searchPlaceholder:a,inputId:`ntg-header-search-panel-${o}`,searchClass:`ntg-header__search ntg-header__search--panel`,searchGroupClass:`ntg-header__search-group ntg-header__search-group--panel`})}
      <button class="ntg-header__panel-close ntg-header__panel-close--search" type="button" aria-label="Close search" data-header-search-close>
        <span class="ntg-header__button-icon" aria-hidden="true">${j}</span>
      </button>
    </div>
  </div>
  ${s?`<div id="${l}" class="ntg-header__menu-panel" data-header-menu-panel hidden>
    <button class="ntg-header__menu-backdrop" type="button" aria-label="Close menu" data-header-menu-close></button>
    <div class="ntg-header__menu-drawer">
      <div class="ntg-header__menu-header">
        <button class="ntg-header__panel-close" type="button" aria-label="Close menu" data-header-menu-close>
          <span class="ntg-header__button-icon" aria-hidden="true">${j}</span>
        </button>
      </div>
      ${x(n,{navClass:`ntg-header__menu-nav`,listClass:`ntg-header__menu-list`,itemClass:`ntg-header__menu-item`,linkClass:`ntg-header__menu-link`,textClass:`ntg-header__menu-text`})}
    </div>
  </div>`:``}
</header>
`}function w({attrs:e,logoHtml:t,links:n,searchAction:r,searchQueryParam:i,searchPlaceholder:a,instanceId:o}){let s=`ntg-header-search-panel-${o}`;return`
<header ${e} class="ntg-header ntg-header--agency-internet" role="banner" data-header-root>
  <div class="ntg-header__bar">
    <div class="ntg-header__container">
      <div class="ntg-header__primary">
        ${t}
      </div>
      <div class="ntg-header__actions">
        ${x(n)}
        ${S({searchAction:r,searchQueryParam:i,searchPlaceholder:a,inputId:`ntg-header-search-inline-${o}`})}
        <button class="ntg-header__search-toggle" type="button" aria-label="Open search" aria-controls="${s}" aria-expanded="false" data-header-search-toggle>
          <span class="ntg-header__button-icon" aria-hidden="true">${k}</span>
        </button>
      </div>
    </div>
  </div>
  <div id="${s}" class="ntg-header__search-panel" data-header-search-panel hidden>
    <div class="ntg-header__search-panel-inner">
      ${S({searchAction:r,searchQueryParam:i,searchPlaceholder:a,inputId:`ntg-header-search-panel-${o}`,searchClass:`ntg-header__search ntg-header__search--panel`,searchGroupClass:`ntg-header__search-group ntg-header__search-group--panel`})}
      <button class="ntg-header__panel-close ntg-header__panel-close--search" type="button" aria-label="Close search" data-header-search-close>
        <span class="ntg-header__button-icon" aria-hidden="true">${j}</span>
      </button>
    </div>
  </div>
</header>
`}var T,E,D,O,k,A,j,M,N,P=e((()=>{l(),r(),T=`NT.GOV.AU`,E=`NT.GOV.AU`,D=`https://dcdd.nt.gov.au/_design/latest/images/ntg-primary-reverse.svg`,O=`Search`,k=`<svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="M11.5 11.5 15 15M7 12.5A5.5 5.5 0 1 0 7 1.5a5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,A=`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,j=`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,M=`https://nt.gov.au`,N={async main(e={},t={}){let{variant:n=`nt-gov-au`,logoSource:r=``,logoLink:o=M,agencyName:s=``,agencyHref:c=``,agencyLinkType:l=`custom-url`,agencyLinkAsset:u=``,agencyCustomUrl:d=``,logoText:g=T,logoAlt:_=E,logoHref:v=M,links:y=[],searchPlaceholder:x=`Search`,searchAction:S=`/search`,searchQueryParam:D=`q`}=e,O=Math.random().toString(36).slice(2,8),k=[`nt-gov-au`,`agency-internet`].includes(n)?n:`nt-gov-au`,A=(await Promise.all((Array.isArray(y)?y:[]).map(e=>f(e,t?.fns)))).filter(Boolean),j=k===`nt-gov-au`?null:await m(r,t?.fns),N=k===`nt-gov-au`?M:p(o,v||M),P=p(c,N||`/`),F=b({variant:k,resolvedLogoUrl:j,logoAlt:_,logoText:g,logoHref:N,agencyName:s,agencyHref:k===`agency-internet`?l===`matrix-asset`?await h(u,t?.fns)||P:p(d,P):P}),I=a(`header`,i(e,[`fullwidth background`]));return k===`nt-gov-au`?C({attrs:I,logoHtml:F,links:A,searchAction:S,searchQueryParam:D,searchPlaceholder:x,instanceId:O}):w({attrs:I,logoHtml:F,links:A,searchAction:S,searchQueryParam:D,searchPlaceholder:x,instanceId:O})}}}));function F(e){return n`
    <div>
      ${R(e)}
      <main>
        <div class="content-area">
          <p>Some sample content</p>
        </div>
      </main>
    </div>
  `}var I,L,R,z,B,V,H,U,W,G,K,q;await e((async()=>{t(),s(),P(),{expect:I,userEvent:L}=__STORYBOOK_MODULE_TEST__,R=o(N.main),z={title:`dxp components/Header`,parameters:{noContentArea:!0,controls:{expanded:!0,sort:`requiredFirst`}}},B={variant:{control:`select`,options:[`nt-gov-au`,`agency-internet`],table:{category:`1. Layout`}},agencyName:{control:`text`,if:{arg:`variant`,neq:`nt-gov-au`},table:{category:`2. Agency Variant Only`}},agencyLinkType:{control:`select`,options:[`matrix-asset`,`custom-url`],if:{arg:`variant`,neq:`nt-gov-au`},table:{category:`2. Agency Variant Only`}},agencyLinkAsset:{control:`text`,if:{arg:`agencyLinkType`,eq:`matrix-asset`},table:{category:`2. Agency Variant Only`}},agencyCustomUrl:{control:`text`,if:{arg:`agencyLinkType`,eq:`custom-url`},table:{category:`2. Agency Variant Only`}},links:{control:`object`,if:{arg:`variant`,neq:`agency-internet`},table:{category:`3. Navigation`}}},V={variant:`nt-gov-au`,links:[{label:`Find online services`,linkType:`custom-url`,customUrl:`https://nt.gov.au/services`},{label:`Contacts`,linkType:`custom-url`,customUrl:`https://nt.gov.au/contacts`}]},H=await R.markup(V),U={name:`NTG`,render:e=>F(e),args:V,argTypes:B,parameters:{docs:{source:{code:H,language:`html`,type:`code`}}},play:async({canvasElement:e})=>{let t=e.querySelector(`[data-header-root]`),n=t?.querySelector(`[data-header-search-toggle]`),r=t?.querySelector(`[data-header-search-panel]`),i=t?.querySelector(`[data-header-search-close]`),a=t?.querySelector(`[data-header-menu-toggle]`),o=t?.querySelector(`[data-header-menu-panel]`),s=t?.querySelector(`[data-header-menu-close]`);await I(t).toBeTruthy(),await I(n).toHaveAttribute(`aria-expanded`,`false`),await I(r?.hidden).toBe(!0),await L.click(n),await I(n).toHaveAttribute(`aria-expanded`,`true`),await I(r?.hidden).toBe(!1),await L.click(i),await I(n).toHaveAttribute(`aria-expanded`,`false`),await I(r?.hidden).toBe(!0),await I(a).toHaveAttribute(`aria-expanded`,`false`),await I(o?.hidden).toBe(!0),await L.click(a),await I(a).toHaveAttribute(`aria-expanded`,`true`),await I(o?.hidden).toBe(!1),await L.click(s),await I(a).toHaveAttribute(`aria-expanded`,`false`),await I(o?.hidden).toBe(!0)}},W={variant:`agency-internet`,agencyName:`Department of Corporate and Digital Development`,agencyLinkType:`custom-url`,agencyCustomUrl:`https://dcdd.nt.gov.au`,logoSource:`/src/dxp components/header/previews/mocks/ntg-primary-reverse.svg`,links:[{label:`Find online services`,linkType:`custom-url`,customUrl:`https://nt.gov.au/services`},{label:`Contacts`,linkType:`custom-url`,customUrl:`https://nt.gov.au/contacts`}]},G=await R.markup(W),K={render:e=>F(e),args:W,argTypes:B,parameters:{docs:{source:{code:G,language:`html`,type:`code`}}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "NTG",
  render: args => withPageContent(args),
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
}`,...U.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => withPageContent(args),
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
}`,...K.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "NTG",
  render: args => withPageContent(args),
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
}`,...U.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => withPageContent(args),
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
}`,...K.parameters?.docs?.source}}},q=[`NtGovAu`,`AgencyInternet`]}))();export{K as AgencyInternet,U as NtGovAu,q as __namedExportsOrder,z as default};
//# sourceMappingURL=header.stories-CvQMgkr8.js.map