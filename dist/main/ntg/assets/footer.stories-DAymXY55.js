import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-4zIdV6yt.js";import{n as r,r as i,t as a}from"./xss-Cvy76lHc.js";var o=e((()=>{}));function s(e){let t=(Array.isArray(e)?e:[]).map((e,t)=>u(e,t)).filter(Boolean).join(``);return t?`
    <div class="footer__top">
      <div class="footer__groups">
${t}
      </div>
    </div>`:``}function c(e){let t=(Array.isArray(e)?e:[]).map(d).filter(Boolean).join(``);return`
    <div class="footer__middle">
      <div class="footer__brand">
        <a href="${r(b)}">
          <img src="${r(x)}" alt="Visit NT.GOV.AU" />
        </a>
      </div>
      ${t?`<nav class="footer__ancillary" aria-label="Footer links"><ul class="footer__ancillary-list">${t}</ul></nav>`:``}
    </div>`}function l(e){let t=new Date().getFullYear();return`
    <div class="footer__bottom">
      <div>${a(String(e??``).trim()||C)}</div>
      <div>&copy; ${t} ${a(S)}</div>
    </div>`}function u(e,t){if(!e||typeof e!=`object`)return``;let n=String(e.menuTitle??``).trim(),r=[`bullet`,`icon`,`none`].includes(e.menuType)?e.menuType:`bullet`,i=(Array.isArray(e.menuItems)?e.menuItems:[]).map(e=>f(e,r)).filter(Boolean).join(``);return!n&&!i?``:`
        <section class="footer__group footer__group--${a(r)}" aria-labelledby="footer-group-${t}">
          ${n?`<h2 id="footer-group-${t}">${a(n)}</h2>`:``}
          ${i?`<ul class="footer__menu footer__menu--${a(r)}">${i}</ul>`:``}
        </section>`}function d(e){let t=h(e);return t?`<li>${p(t,`none`)}</li>`:``}function f(e,t){let n=h(e);if(n)return`<li>${p(n,t)}</li>`;let r=g(e);return r?`<li>${r}</li>`:``}function p(e,t){let n=_(e.icon,e),i=t===`icon`,o=e.title||e.url,s=i&&m(n,o)||a(o),c=e.target?` target="${a(e.target)}"`:``,l=e.rel?` rel="${a(e.rel)}"`:``;return`<a href="${r(e.url)}"${c}${l} class="plain"><span class="decorate">${s}</span></a>`}function m(e,t){return e?`<span class="footer__icon" aria-hidden="true"><i class="${a(e)}"></i></span><span>${a(t)}</span>`:``}function h(e){if(!e)return null;if(typeof e==`string`)return{url:e,title:e,target:``,rel:``,icon:``};let t=e.link&&typeof e.link==`object`?e.link:e,n=t.url||t.href||t.asset_url||t.assetUrl||t.linkUrl||``,r=t.title||t.name||t.label||t.text||t.linkText||t.asset_name||t.assetName||n,i=t.target||(t.newWindow?`_blank`:``),a={url:n,title:r,label:r,target:i,rel:t.rel||(i===`_blank`?`noopener noreferrer`:``),icon:t.icon||``};return n?a:null}function g(e){return typeof e==`string`?e:!e||typeof e!=`object`?``:e.html||e.value||e.body||e.content||e.text||``}function _(e,t){let n=String(e??``).trim();return!n||n===`DETECT_BRAND_ICON`?v(t)?.iconClass||``:/^fa[srlbd]?\s+fa-[a-z0-9-]+$/i.test(n)?n:/^fa-[a-z0-9-]+$/i.test(n)?`fal ${n}`:/^[a-z0-9-]+$/i.test(n)?`fal fa-${n}`:y(n)}function v(e){let t=[e.url,e.title,e.label].filter(Boolean).join(` `);return w.find(e=>e.match.test(t))||null}function y(e){let t=String(e??``).trim();return!t||!/^[a-z0-9\s_-]+$/i.test(t)?``:t}var b,x,S,C,w,T,E=e((()=>{i(),b=`https://nt.gov.au`,x=`https://nt.gov.au/_design/css/main.css/logo-ntg-mono.svg`,S=`Northern Territory Government of Australia`,C=`The Northern Territory Government acknowledges the Traditional Owners of the Northern Territory and recognises their continuing cultural and spiritual connections to the lands, waters and communities. We pay our respects to all Aboriginal and Torres Strait Islander people and their cultures, their Elders past and present, and to future generations.`,w=[{match:/facebook/i,iconClass:`fab fa-facebook-square`,label:`Facebook`},{match:/linkedin/i,iconClass:`fab fa-linkedin`,label:`LinkedIn`},{match:/youtube|youtu\.be/i,iconClass:`fab fa-youtube-square`,label:`YouTube`},{match:/instagram/i,iconClass:`fab fa-instagram`,label:`Instagram`},{match:/have\s*your\s*say|consult|engage|comment/i,iconClass:`fal fa-comment`,label:`Have your say`},{match:/x\.com|twitter/i,iconClass:`fab fa-x-twitter`,label:`X`}],T={async main(e={}){let{menus:t=[],ancillary:n=[],finalText:r=``}=e;return`
    <footer class="footer ntg-footer" role="contentinfo">
        <div class="footer__inner">
            ${s(t)}
            ${c(n)}
            ${l(r)}
        </div>
    </footer>`}}})),D,O,k,A,j=e((()=>{D=[{menuTitle:`Information and services`,menuType:`bullet`,menuItems:[{url:`#!https://nt.gov.au/leisure`,title:`Art, sport and leisure`},{url:`#!https://nt.gov.au/marine`,title:`Boating, fishing and marine`},{url:`#!https://nt.gov.au/industry`,title:`Business and industry`},{url:`#!https://nt.gov.au/community`,title:`Community support and care`},{url:`#!https://nt.gov.au/driving`,title:`Driving and transport`},{url:`#!https://nt.gov.au/learning`,title:`Education and learning`},{url:`#!https://nt.gov.au/emergency`,title:`Emergency and safety`},{url:`#!https://nt.gov.au/employ`,title:`Employment, money and taxes`},{url:`#!https://nt.gov.au/environment`,title:`Environment`},{url:`#!https://nt.gov.au/wellbeing`,title:`Health and wellbeing`},{url:`#!https://nt.gov.au/property`,title:`Housing, property and land`},{url:`#!https://nt.gov.au/law`,title:`Your rights, crime and the law`}]},{menuTitle:`Find out more`,menuType:`bullet`,menuItems:[{url:`#!https://nt.gov.au/about-government`,title:`About government`},{url:`#!https://haveyoursay.nt.gov.au`,title:`Public consultations`,target:`_blank`},{url:`#!https://nt.gov.au/nt-public-holidays`,title:`NT public holidays`},{url:`#!http://newsroom.nt.gov.au`,title:`Media releases`,target:`_blank`},{url:`#!https://nt.gov.au/community/grants-and-volunteers/grants/grants-directory`,title:`Government grants`},{url:`#!https://nt.gov.au/about-government/government-priorities`,title:`Government priorities`}]},{menuTitle:`Connect with us`,menuType:`icon`,menuItems:[{url:`#!https://www.facebook.com/ntgovernment/`,title:`Facebook`,icon:`DETECT_BRAND_ICON`},{url:`#!https://www.linkedin.com/company/ntgovernment`,title:`LinkedIn`,icon:`DETECT_BRAND_ICON`},{url:`#!https://www.youtube.com/user/NTGovt`,title:`YouTube`,icon:`DETECT_BRAND_ICON`},{url:`#!https://www.instagram.com/ntgovernment`,title:`Instagram`,icon:`DETECT_BRAND_ICON`},{url:`#!https://haveyoursay.nt.gov.au`,title:`Have your say`,icon:`DETECT_BRAND_ICON`}]}],O=[{url:`#!https://nt.gov.au/page/copyright-and-disclaimer`,title:`Copyright, disclaimer and privacy`},{url:`#!https://nt.gov.au/law/rights/freedom-of-information`,title:`Freedom of information`},{url:`#!https://nt.gov.au/page/interpreter-services`,title:`Interpreter services`},{url:`#!https://nt.gov.au/page/accessibility`,title:`Accessibility`},{url:`#!https://nt.gov.au/page/sitemap`,title:`Site map`},{url:`#!https://nt.gov.au/contacts`,title:`Contacts`},{url:`#!https://nt.gov.au/contacts/northern-territory-government-staff-systems-remotely`,title:`NTG staff systems`}],k=`The Northern Territory Government acknowledges the Traditional Owners of the Northern Territory and recognises their continuing cultural and spiritual connections to the lands, waters and communities. We pay our respects to all Aboriginal and Torres Strait Islander people and their cultures, their Elders past and present, and to future generations.`,A={menus:D,ancillary:O,finalText:k}})),M,N,P,F,I;await e((async()=>{n(),o(),E(),j(),M=t(T.main),N={title:`dxp/Footer`,parameters:{layout:`fullscreen`}},P=await M.markup(A),F={render:e=>M(e),args:A,argTypes:{menus:{control:`object`},ancillary:{control:`object`},finalText:{control:`text`}},parameters:{docs:{source:{code:P,language:`html`,type:`code`}}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I=[`Default`]}))();export{F as Default,I as __namedExportsOrder,N as default};
//# sourceMappingURL=footer.stories-DAymXY55.js.map