import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-CkXZPIWM.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";var c=e((()=>{}));function l(e){let t=(Array.isArray(e)?e:[]).map((e,t)=>f(e,t)).filter(Boolean).join(``);return t?`
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
    </footer>`}}})),k,A,j,M,N=e((()=>{k=[{menuTitle:`Information and services`,menuType:`bullet`,menuItems:[{url:`#`,title:`Art, sport and leisure`},{url:`#`,title:`Boating, fishing and marine`},{url:`#`,title:`Business and industry`},{url:`#`,title:`Community support and care`},{url:`#`,title:`Driving and transport`},{url:`#`,title:`Education and learning`},{url:`#`,title:`Emergency and safety`},{url:`#`,title:`Employment, money and taxes`},{url:`#`,title:`Environment`},{url:`#`,title:`Health and wellbeing`},{url:`#`,title:`Housing, property and land`},{url:`#`,title:`Your rights, crime and the law`}]},{menuTitle:`Find out more`,menuType:`bullet`,menuItems:[{url:`#`,title:`About government`},{url:`#`,title:`Public consultations`,target:`_blank`},{url:`#`,title:`NT public holidays`},{url:`#`,title:`Media releases`,target:`_blank`},{url:`#`,title:`Government grants`},{url:`#`,title:`Government priorities`}]},{menuTitle:`Connect with us`,menuType:`icon`,menuItems:[{url:`#`,title:`Facebook`,icon:`DETECT_BRAND_ICON`},{url:`#`,title:`LinkedIn`,icon:`DETECT_BRAND_ICON`},{url:`#`,title:`YouTube`,icon:`DETECT_BRAND_ICON`},{url:`#`,title:`Instagram`,icon:`DETECT_BRAND_ICON`},{url:`#`,title:`Have your say`,icon:`DETECT_BRAND_ICON`}]}],A=[{url:`#`,title:`Copyright, disclaimer and privacy`},{url:`#`,title:`Freedom of information`},{url:`#`,title:`Interpreter services`},{url:`#`,title:`Accessibility`},{url:`#`,title:`Site map`},{url:`#`,title:`Contacts`},{url:`#`,title:`NTG staff systems`}],j=`The Northern Territory Government acknowledges the Traditional Owners of the Northern Territory and recognises their continuing cultural and spiritual connections to the lands, waters and communities. We pay our respects to all Aboriginal and Torres Strait Islander people and their cultures, their Elders past and present, and to future generations.`,M={menus:k,ancillary:A,finalText:j}}));function P(){document.body.removeEventListener(`click`,F),document.body.addEventListener(`click`,F)}function F(e){e.preventDefault()}var I,L,R,z,B;await e((async()=>{i(),c(),O(),N(),I=r(D.main),L={title:`dxp components/Footer`,parameters:{layout:`fullscreen`}},R=await I.markup(M),z={render:e=>(requestAnimationFrame(P),I(e)),args:M,argTypes:{menus:{control:`object`},ancillary:{control:`object`},finalText:{control:`text`}},parameters:{docs:{source:{code:R,language:`html`,type:`code`}}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    requestAnimationFrame(supressClick);
    return squiz(args);
  },
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
}`,...z.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    requestAnimationFrame(supressClick);
    return squiz(args);
  },
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
}`,...z.parameters?.docs?.source}}},B=[`Default`]}))();export{z as Default,B as __namedExportsOrder,L as default};
//# sourceMappingURL=footer.stories-B5dVoIrY.js.map