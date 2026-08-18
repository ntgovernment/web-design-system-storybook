import{n as e}from"./chunk-BVpWp9h4.js";import{r as t,t as n}from"./component.helper-D3WXhhhy.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";var c=e((()=>{}));function l(e){let t=(Array.isArray(e)?e:[]).map((e,t)=>f(e,t)).filter(Boolean).join(``);return t?`
    <div class="footer__top">
      <div class="footer__groups">
${t}
      </div>
    </div>`:``}function u(e){let t=(Array.isArray(e)?e:[]).map(p).filter(Boolean).join(``);return`
    <div class="footer__middle">
      <div class="footer__brand">
        <a href="${a(S)}">
          <img src="${a(C)}" alt="Visit NT.GOV.AU" />
        </a>
      </div>
      ${t?`<nav class="footer__ancillary" aria-label="Footer links"><ul class="footer__ancillary-list">${t}</ul></nav>`:``}
    </div>`}function d(e){let t=new Date().getFullYear();return`
    <div class="footer__bottom">
      <div>${s(String(e??``).trim()||T)}</div>
      <div>&copy; ${t} ${s(w)}</div>
    </div>`}function f(e,t){if(!e||typeof e!=`object`)return``;let n=String(e.menuTitle??``).trim(),r=[`bullet`,`icon`,`none`].includes(e.menuType)?e.menuType:`bullet`,i=(Array.isArray(e.menuItems)?e.menuItems:[]).map(e=>m(e,r)).filter(Boolean).join(``);return!n&&!i?``:`
        <section class="footer__group footer__group--${s(r)}" aria-labelledby="footer-group-${t}">
          ${n?`<h2 id="footer-group-${t}">${s(n)}</h2>`:``}
          ${i?`<ul class="footer__menu footer__menu--${s(r)}">${i}</ul>`:``}
        </section>`}function p(e){let t=_(e);return t?`<li>${h(t,`none`)}</li>`:``}function m(e,t){let n=_(e);if(n)return`<li>${h(n,t)}</li>`;let r=v(e);return r?`<li>${r}</li>`:``}function h(e,t){let n=y(e.icon,e),r=t===`icon`,i=e.title||e.url,o=r&&g(n,i)||s(i),c=e.target?` target="${s(e.target)}"`:``,l=e.rel?` rel="${s(e.rel)}"`:``;return`<a href="${a(e.url)}"${c}${l} class="plain"><span class="decorate">${o}</span></a>`}function g(e,t){return e?`<span class="footer__icon" aria-hidden="true"><i class="${s(e)}"></i></span><span>${s(t)}</span>`:``}function _(e){if(!e)return null;if(typeof e==`string`)return{url:e,title:e,target:``,rel:``,icon:``};let t=e.link&&typeof e.link==`object`?e.link:e,n=t.url||t.href||t.asset_url||t.assetUrl||t.linkUrl||``,r=t.title||t.name||t.label||t.text||t.linkText||t.asset_name||t.assetName||n,i=t.target||(t.newWindow?`_blank`:``),a={url:n,title:r,label:r,target:i,rel:t.rel||(i===`_blank`?`noopener noreferrer`:``),icon:t.icon||``};return n?a:null}function v(e){return typeof e==`string`?e:!e||typeof e!=`object`?``:e.html||e.value||e.body||e.content||e.text||``}function y(e,t){let n=String(e??``).trim();return!n||n===`DETECT_BRAND_ICON`?b(t)?.iconClass||``:/^fa[srlbd]?\s+fa-[a-z0-9-]+$/i.test(n)?n:/^fa-[a-z0-9-]+$/i.test(n)?`fal ${n}`:/^[a-z0-9-]+$/i.test(n)?`fal fa-${n}`:x(n)}function b(e){let t=[e.url,e.title,e.label].filter(Boolean).join(` `);return E.find(e=>e.match.test(t))||null}function x(e){let t=String(e??``).trim();return!t||!/^[a-z0-9\s_-]+$/i.test(t)?``:t}var S,C,w,T,E,D,O=e((()=>{o(),t(),S=`https://nt.gov.au`,C=`https://nt.gov.au/_design/css/main.css/logo-ntg-mono.svg`,w=`Northern Territory Government of Australia`,T=`The Northern Territory Government acknowledges the Traditional Owners of the Northern Territory and recognises their continuing cultural and spiritual connections to the lands, waters and communities. We pay our respects to all Aboriginal and Torres Strait Islander people and their cultures, their Elders past and present, and to future generations.`,E=[{match:/facebook/i,iconClass:`fab fa-facebook-square`,label:`Facebook`},{match:/linkedin/i,iconClass:`fab fa-linkedin`,label:`LinkedIn`},{match:/youtube|youtu\.be/i,iconClass:`fab fa-youtube-square`,label:`YouTube`},{match:/instagram/i,iconClass:`fab fa-instagram`,label:`Instagram`},{match:/have\s*your\s*say|consult|engage|comment/i,iconClass:`fal fa-comment`,label:`Have your say`},{match:/x\.com|twitter/i,iconClass:`fab fa-x-twitter`,label:`X`}],D={async main(e={}){let{menus:t=[],ancillary:r=[],finalText:i=``}=e;return`
    <footer ${n(`footer`,e)} class="ntg-footer" role="contentinfo">
        <div class="footer__inner">
            ${l(t)}
            ${u(r)}
            ${d(i)}
        </div>
    </footer>`}}})),k,A,j,M,N=e((()=>{k=[{menuTitle:`Information and services`,menuType:`bullet`,menuItems:[{url:`#!https://nt.gov.au/leisure`,title:`Art, sport and leisure`},{url:`#!https://nt.gov.au/marine`,title:`Boating, fishing and marine`},{url:`#!https://nt.gov.au/industry`,title:`Business and industry`},{url:`#!https://nt.gov.au/community`,title:`Community support and care`},{url:`#!https://nt.gov.au/driving`,title:`Driving and transport`},{url:`#!https://nt.gov.au/learning`,title:`Education and learning`},{url:`#!https://nt.gov.au/emergency`,title:`Emergency and safety`},{url:`#!https://nt.gov.au/employ`,title:`Employment, money and taxes`},{url:`#!https://nt.gov.au/environment`,title:`Environment`},{url:`#!https://nt.gov.au/wellbeing`,title:`Health and wellbeing`},{url:`#!https://nt.gov.au/property`,title:`Housing, property and land`},{url:`#!https://nt.gov.au/law`,title:`Your rights, crime and the law`}]},{menuTitle:`Find out more`,menuType:`bullet`,menuItems:[{url:`#!https://nt.gov.au/about-government`,title:`About government`},{url:`#!https://haveyoursay.nt.gov.au`,title:`Public consultations`,target:`_blank`},{url:`#!https://nt.gov.au/nt-public-holidays`,title:`NT public holidays`},{url:`#!http://newsroom.nt.gov.au`,title:`Media releases`,target:`_blank`},{url:`#!https://nt.gov.au/community/grants-and-volunteers/grants/grants-directory`,title:`Government grants`},{url:`#!https://nt.gov.au/about-government/government-priorities`,title:`Government priorities`}]},{menuTitle:`Connect with us`,menuType:`icon`,menuItems:[{url:`#!https://www.facebook.com/ntgovernment/`,title:`Facebook`,icon:`DETECT_BRAND_ICON`},{url:`#!https://www.linkedin.com/company/ntgovernment`,title:`LinkedIn`,icon:`DETECT_BRAND_ICON`},{url:`#!https://www.youtube.com/user/NTGovt`,title:`YouTube`,icon:`DETECT_BRAND_ICON`},{url:`#!https://www.instagram.com/ntgovernment`,title:`Instagram`,icon:`DETECT_BRAND_ICON`},{url:`#!https://haveyoursay.nt.gov.au`,title:`Have your say`,icon:`DETECT_BRAND_ICON`}]}],A=[{url:`#!https://nt.gov.au/page/copyright-and-disclaimer`,title:`Copyright, disclaimer and privacy`},{url:`#!https://nt.gov.au/law/rights/freedom-of-information`,title:`Freedom of information`},{url:`#!https://nt.gov.au/page/interpreter-services`,title:`Interpreter services`},{url:`#!https://nt.gov.au/page/accessibility`,title:`Accessibility`},{url:`#!https://nt.gov.au/page/sitemap`,title:`Site map`},{url:`#!https://nt.gov.au/contacts`,title:`Contacts`},{url:`#!https://nt.gov.au/contacts/northern-territory-government-staff-systems-remotely`,title:`NTG staff systems`}],j=`The Northern Territory Government acknowledges the Traditional Owners of the Northern Territory and recognises their continuing cultural and spiritual connections to the lands, waters and communities. We pay our respects to all Aboriginal and Torres Strait Islander people and their cultures, their Elders past and present, and to future generations.`,M={menus:k,ancillary:A,finalText:j}})),P,F,I,L,R;await e((async()=>{i(),c(),O(),N(),P=r(D.main),F={title:`dxp/Footer`,parameters:{layout:`fullscreen`}},I=await P.markup(M),L={render:e=>P(e),args:M,argTypes:{menus:{control:`object`},ancillary:{control:`object`},finalText:{control:`text`}},parameters:{docs:{source:{code:I,language:`html`,type:`code`}}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: defaultArgs,
  argTypes: {
    menus: {
      control: 'object'
    },
    ancillary: {
      control: 'object'
    },
    finalText: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      source: {
        code: defaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: defaultArgs,
  argTypes: {
    menus: {
      control: 'object'
    },
    ancillary: {
      control: 'object'
    },
    finalText: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      source: {
        code: defaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},R=[`Default`]}))();export{L as Default,R as __namedExportsOrder,F as default};
//# sourceMappingURL=footer.stories-dm1_X6uw.js.map