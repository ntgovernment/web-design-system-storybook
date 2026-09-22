import{n as e}from"./chunk-BVpWp9h4.js";import{a as t,l as n}from"./directive-helpers-DXeJie5u.js";import{n as r,r as i,t as a}from"./component.helper-D0vBjeOt.js";import{n as o,t as s}from"./squizStoryRenderer-4zIdV6yt.js";import{n as c,r as l,t as u}from"./xss-Cvy76lHc.js";function d(e){if(!e)return null;if(typeof e==`string`)return{href:e,label:``,target:``,rel:``};if(typeof e!=`object`)return null;let t=e.href||e.url||e.asset_url||e.assetUrl||e.linkUrl||``;if(!t)return null;let n=e.label||e.title||e.name||e.text||e.linkText||``;return{href:String(t),label:String(n||``),target:e.target||``,rel:e.rel||(e.target===`_blank`?`noopener noreferrer`:``)}}async function f(e,t){if(!e||typeof e!=`object`)return null;if(typeof e.label==`string`){let n=e.label.trim();if(n){let r=(e.linkType===`matrix-asset`?`matrix-asset`:`custom-url`)==`matrix-asset`?await m(e.linkAsset,t):p(e.customUrl,``);if(r)return{href:r,label:n,target:``,rel:``}}}let n=d(Object.prototype.hasOwnProperty.call(e,`link`)?e.link:e);if(!n?.href)return null;let r=(typeof e.label==`string`?e.label.trim():``)||n.label;return r?{...n,label:r}:null}function p(e,t=``){return d(e)?.href||t}async function m(e,t){let n=String(e||``).trim();if(!n)return``;if(/^(https?:|\/|\.\/|\.\.\/)/i.test(n))return n;try{let e=await t?.resolveUri?.(n),r=e&&`data`in e?e.data:e;return!r||typeof r!=`object`?``:r.url||(Array.isArray(r.urls)?r.urls[0]:``)||``}catch{return``}}function h(e,t,n=``){return`<img class="${[`ntg-header__logo-image`,n].filter(Boolean).join(` `)}" src="${c(e)}" alt="${u(t||T)}" />`}function g(e){return`<span class="ntg-header__logo-text">${u(e||w)}</span>`}function _(){return`<span class="ntg-header__logo-space" aria-hidden="true"></span>`}function v(e){let t=String(e||``).trim();if(!t)return``;let n=/^department of\s+/i.exec(t);if(!n)return`<span class="ntg-header__agency-name">${u(t)}</span>`;let r=t.slice(0,n[0].length).trimEnd(),i=t.slice(n[0].length).trim();return i?`<span class="ntg-header__agency-name"><span class="ntg-header__agency-name-prefix">${u(r)}</span><span class="ntg-header__agency-name-rest">${u(i)}</span></span>`:`<span class="ntg-header__agency-name">${u(r)}</span>`}function y({variant:e,resolvedLogoUrl:t,logoAlt:n,logoText:r,logoHref:i,agencyName:a,agencyHref:o}){if(e===`agency-internet`){let e=t||E,s=e?h(e,n,`ntg-header__logo-image--agency`):_();return`
    <div class="ntg-header__brand-group ntg-header__brand--agency-internet">
      <a class="ntg-header__brand ntg-header__brand--logo plain" href="${c(i||j)}" aria-label="${u(n||r||T)}">
        ${s}
      </a>
      ${a?`<span class="ntg-header__agency-separator" aria-hidden="true"></span><a class="ntg-header__agency-link plain" href="${c(o||i||`/`)}">${v(a)}</a>`:``}
    </div>`}let s=t?h(t,n,`ntg-header__logo-image--mono`):g(r||w);return`<a class="ntg-header__brand ntg-header__brand--home plain" href="${c(i||j)}" aria-label="${u(n||r||T)}">${s}</a>`}function b(e,t={}){if(!e.length)return``;let{navClass:n=`ntg-header__nav`,listClass:r=`ntg-header__nav-list`,itemClass:i=`ntg-header__nav-item`,linkClass:a=`ntg-header__nav-link`,textClass:o=`ntg-header__nav-text`}=t;return`
      <nav class="${n}" aria-label="Header links">
        <ul class="${r}">
${e.map(e=>{let t=e.target?` target="${u(e.target)}"`:``,n=e.rel?` rel="${u(e.rel)}"`:``;return`<li class="${i}"><a class="${a}" href="${c(e.href)}"${t}${n}><span class="${o}">${u(e.label)}</span></a></li>`}).join(`
`)}
        </ul>
      </nav>`}function x({searchAction:e,searchQueryParam:t,searchPlaceholder:n,inputId:r,searchClass:i=`ntg-header__search`,searchGroupClass:a=`ntg-header__search-group`}){return`
      <form class="${i}" action="${c(e)}" method="get" role="search" aria-label="Site search">
        <label class="ntg-header__search-label" for="${r}">${D}</label>
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
          <button class="ntg-header__search-button" type="submit" aria-label="${D}">
            <span class="ntg-header__search-icon" aria-hidden="true">${O}</span>
          </button>
        </div>
      </form>`}function S({attrs:e,logoHtml:t,links:n,searchAction:r,searchQueryParam:i,searchPlaceholder:a,instanceId:o}){let s=n.length>0,c=`ntg-header-search-panel-${o}`,l=`ntg-header-menu-panel-${o}`;return`
<header ${e} class="fullwidth ntg-header ntg-header--nt-gov-au" role="banner" data-header-root>
  <div class="ntg-header__bar">
    <div class="ntg-header__container">
      <div class="ntg-header__primary">
        ${s?`<button class="ntg-header__menu-toggle" type="button" aria-label="Open menu" aria-controls="${l}" aria-expanded="false" data-header-menu-toggle>
          <span class="ntg-header__button-icon" aria-hidden="true">${k}</span>
        </button>`:``}
        ${t}
      </div>
      <div class="ntg-header__actions">
        ${b(n)}
        ${x({searchAction:r,searchQueryParam:i,searchPlaceholder:a,inputId:`ntg-header-search-inline-${o}`})}
        <button class="ntg-header__search-toggle" type="button" aria-label="Open search" aria-controls="${c}" aria-expanded="false" data-header-search-toggle>
          <span class="ntg-header__button-icon" aria-hidden="true">${O}</span>
        </button>
      </div>
    </div>
  </div>
  <div id="${c}" class="ntg-header__search-panel" data-header-search-panel hidden>
    <div class="ntg-header__search-panel-inner">
      ${x({searchAction:r,searchQueryParam:i,searchPlaceholder:a,inputId:`ntg-header-search-panel-${o}`,searchClass:`ntg-header__search ntg-header__search--panel`,searchGroupClass:`ntg-header__search-group ntg-header__search-group--panel`})}
      <button class="ntg-header__panel-close ntg-header__panel-close--search" type="button" aria-label="Close search" data-header-search-close>
        <span class="ntg-header__button-icon" aria-hidden="true">${A}</span>
      </button>
    </div>
  </div>
  ${s?`<div id="${l}" class="ntg-header__menu-panel" data-header-menu-panel hidden>
    <button class="ntg-header__menu-backdrop" type="button" aria-label="Close menu" data-header-menu-close></button>
    <div class="ntg-header__menu-drawer">
      <div class="ntg-header__menu-header">
        <button class="ntg-header__panel-close" type="button" aria-label="Close menu" data-header-menu-close>
          <span class="ntg-header__button-icon" aria-hidden="true">${A}</span>
        </button>
      </div>
      ${b(n,{navClass:`ntg-header__menu-nav`,listClass:`ntg-header__menu-list`,itemClass:`ntg-header__menu-item`,linkClass:`ntg-header__menu-link`,textClass:`ntg-header__menu-text`})}
    </div>
  </div>`:``}
</header>
`}function C({attrs:e,logoHtml:t,links:n,searchAction:r,searchQueryParam:i,searchPlaceholder:a,instanceId:o}){let s=`ntg-header-search-panel-${o}`;return`
<header ${e} class="ntg-header ntg-header--agency-internet" role="banner" data-header-root>
  <div class="ntg-header__bar">
    <div class="ntg-header__container">
      <div class="ntg-header__primary">
        ${t}
      </div>
      <div class="ntg-header__actions">
        ${b(n)}
        ${x({searchAction:r,searchQueryParam:i,searchPlaceholder:a,inputId:`ntg-header-search-inline-${o}`})}
        <button class="ntg-header__search-toggle" type="button" aria-label="Open search" aria-controls="${s}" aria-expanded="false" data-header-search-toggle>
          <span class="ntg-header__button-icon" aria-hidden="true">${O}</span>
        </button>
      </div>
    </div>
  </div>
  <div id="${s}" class="ntg-header__search-panel" data-header-search-panel hidden>
    <div class="ntg-header__search-panel-inner">
      ${x({searchAction:r,searchQueryParam:i,searchPlaceholder:a,inputId:`ntg-header-search-panel-${o}`,searchClass:`ntg-header__search ntg-header__search--panel`,searchGroupClass:`ntg-header__search-group ntg-header__search-group--panel`})}
      <button class="ntg-header__panel-close ntg-header__panel-close--search" type="button" aria-label="Close search" data-header-search-close>
        <span class="ntg-header__button-icon" aria-hidden="true">${A}</span>
      </button>
    </div>
  </div>
</header>
`}var w,T,E,D,O,k,A,j,M,N=e((()=>{l(),r(),w=`NT.GOV.AU`,T=`NT.GOV.AU`,E=`https://dcdd.nt.gov.au/_design/latest/images/ntg-primary-reverse.svg`,D=`Search`,O=`<svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="M11.5 11.5 15 15M7 12.5A5.5 5.5 0 1 0 7 1.5a5.5 5.5 0 0 0 0 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,k=`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,A=`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,j=`https://nt.gov.au`,M={async main(e={},t={}){let{variant:n=`nt-gov-au`,logoSource:r=``,logoLink:o=j,agencyName:s=``,agencyHref:c=``,agencyLinkType:l=`custom-url`,agencyLinkAsset:u=``,agencyCustomUrl:d=``,logoText:h=w,logoAlt:g=T,logoHref:_=j,links:v=[],searchPlaceholder:b=`Search`,searchAction:x=`/search`,searchQueryParam:E=`q`}=e,D=Math.random().toString(36).slice(2,8),O=[`nt-gov-au`,`agency-internet`].includes(n)?n:`nt-gov-au`,k=(await Promise.all((Array.isArray(v)?v:[]).map(e=>f(e,t?.fns)))).filter(Boolean),A=O===`nt-gov-au`?``:await m(r,t?.fns),M=O===`nt-gov-au`?j:p(o,_||j),N=p(c,M||`/`),P=y({variant:O,resolvedLogoUrl:A,logoAlt:g,logoText:h,logoHref:M,agencyName:s,agencyHref:O===`agency-internet`?l===`matrix-asset`?await m(u,t?.fns)||N:p(d,N):N}),F=a(`header`,i(e,[`fullwidth background`]));return O===`nt-gov-au`?S({attrs:F,logoHtml:P,links:k,searchAction:x,searchQueryParam:E,searchPlaceholder:b,instanceId:D}):C({attrs:F,logoHtml:P,links:k,searchAction:x,searchQueryParam:E,searchPlaceholder:b,instanceId:D})}}}));function P(e){return n`
    <div>
      ${L(e)}
      <main>
        <div class="content-area">
          <p>Some sample content</p>
        </div>
      </main>
    </div>
  `}var F,I,L,R,z,B,V,H,U,W,G,K;await e((async()=>{t(),s(),N(),{expect:F,userEvent:I}=__STORYBOOK_MODULE_TEST__,L=o(M.main),R={title:`dxp components/Header`,parameters:{noContentArea:!0,controls:{expanded:!0,sort:`requiredFirst`}}},z={variant:{control:`select`,options:[`nt-gov-au`,`agency-internet`],table:{category:`1. Layout`}},agencyName:{control:`text`,if:{arg:`variant`,neq:`nt-gov-au`},table:{category:`2. Agency Variant Only`}},agencyLinkType:{control:`select`,options:[`matrix-asset`,`custom-url`],if:{arg:`variant`,neq:`nt-gov-au`},table:{category:`2. Agency Variant Only`}},agencyLinkAsset:{control:`text`,if:{arg:`agencyLinkType`,eq:`matrix-asset`},table:{category:`2. Agency Variant Only`}},agencyCustomUrl:{control:`text`,if:{arg:`agencyLinkType`,eq:`custom-url`},table:{category:`2. Agency Variant Only`}},links:{control:`object`,if:{arg:`variant`,neq:`agency-internet`},table:{category:`3. Navigation`}}},B={variant:`nt-gov-au`,links:[{label:`Find online services`,linkType:`custom-url`,customUrl:`https://nt.gov.au/services`},{label:`Contacts`,linkType:`custom-url`,customUrl:`https://nt.gov.au/contacts`}]},V=await L.markup(B),H={name:`NTG`,render:e=>P(e),args:B,argTypes:z,parameters:{docs:{source:{code:V,language:`html`,type:`code`}}},play:async({canvasElement:e})=>{let t=e.querySelector(`[data-header-root]`),n=t?.querySelector(`[data-header-search-toggle]`),r=t?.querySelector(`[data-header-search-panel]`),i=t?.querySelector(`[data-header-search-close]`),a=t?.querySelector(`[data-header-menu-toggle]`),o=t?.querySelector(`[data-header-menu-panel]`),s=t?.querySelector(`[data-header-menu-close]`);await F(t).toBeTruthy(),await F(n).toHaveAttribute(`aria-expanded`,`false`),await F(r?.hidden).toBe(!0),await I.click(n),await F(n).toHaveAttribute(`aria-expanded`,`true`),await F(r?.hidden).toBe(!1),await I.click(i),await F(n).toHaveAttribute(`aria-expanded`,`false`),await F(r?.hidden).toBe(!0),await F(a).toHaveAttribute(`aria-expanded`,`false`),await F(o?.hidden).toBe(!0),await I.click(a),await F(a).toHaveAttribute(`aria-expanded`,`true`),await F(o?.hidden).toBe(!1),await I.click(s),await F(a).toHaveAttribute(`aria-expanded`,`false`),await F(o?.hidden).toBe(!0)}},U={variant:`agency-internet`,agencyName:`Department of Corporate and Digital Development`,agencyLinkType:`custom-url`,agencyCustomUrl:`https://dcdd.nt.gov.au`,logoSource:`/src/dxp components/header/previews/mocks/ntg-primary-reverse.svg`,links:[{label:`Find online services`,linkType:`custom-url`,customUrl:`https://nt.gov.au/services`},{label:`Contacts`,linkType:`custom-url`,customUrl:`https://nt.gov.au/contacts`}]},W=await L.markup(U),G={render:e=>P(e),args:U,argTypes:z,parameters:{docs:{source:{code:W,language:`html`,type:`code`}}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K=[`NtGovAu`,`AgencyInternet`]}))();export{G as AgencyInternet,H as NtGovAu,K as __namedExportsOrder,R as default};
//# sourceMappingURL=header.stories-BLhojf0D.js.map