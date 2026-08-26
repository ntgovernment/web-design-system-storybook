import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-COp5GpYY.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";var c=e((()=>{}));function l(e){let t=(Array.isArray(e)?e:[]).map((e,t)=>f(e,t)).filter(Boolean).join(``);return t?`
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
        </section>`}function p(e){let t=_(e);return t?`<li>${h(t,`none`)}</li>`:``}function m(e,t){let n=_(e);if(n)return`<li>${h(n,t)}</li>`;let r=v(e);return r?`<li>${r}</li>`:``}function h(e,t){let n=y(e.icon,e),r=t===`icon`,i=e.title||e.url,o=r&&g(n,i)||s(i),c=e.target?` target="${s(e.target)}"`:``,l=e.rel?` rel="${s(e.rel)}"`:``;return`<a href="${a(e.url)}"${c}${l} class="plain"><span class="decorate">${o}</span></a>`}function g(e,t){return e?`<span class="footer__icon" aria-hidden="true"><i class="${s(e)}"></i></span><span>${s(t)}</span>`:``}function _(e){if(!e)return null;if(typeof e==`string`)return{url:e,title:e,target:``,rel:``,icon:``};let t=Object.prototype.hasOwnProperty.call(e,`link`)?e.link:e;if(typeof t==`string`)return{url:t,title:t,target:``,rel:``,icon:e.icon||``};if(!t||typeof t!=`object`)return null;let n=t.url||t.href||t.asset_url||t.assetUrl||t.linkUrl||``,r=t.title||t.name||t.label||t.text||t.linkText||t.asset_name||t.assetName||n,i=t.target||(t.newWindow?`_blank`:``),a={url:n,title:r,label:r,target:i,rel:t.rel||(i===`_blank`?`noopener noreferrer`:``),icon:t.icon||``};return n?a:null}function v(e){if(typeof e==`string`)return e;if(!e||typeof e!=`object`)return``;let t=e.link&&typeof e.link==`object`&&!Array.isArray(e.link)?e.link:null;return t?.freeform||t?.html||t?.value||t?.body||t?.content||t?.text||e.freeform||e.html||e.value||e.body||e.content||e.text||``}function y(e,t){let n=String(e??``).trim();return!n||n===`DETECT_BRAND_ICON`?b(t)?.iconClass||``:/^fa[srlbd]?\s+fa-[a-z0-9-]+$/i.test(n)?n:/^fa-[a-z0-9-]+$/i.test(n)?`fal ${n}`:/^[a-z0-9-]+$/i.test(n)?`fal fa-${n}`:x(n)}function b(e){let t=[e.url,e.title,e.label].filter(Boolean).join(` `);return E.find(e=>e.match.test(t))||null}function x(e){let t=String(e??``).trim();return!t||!/^[a-z0-9\s_-]+$/i.test(t)?``:t}var S,C,w,T,E,D,O=e((()=>{o(),t(),S=`https://nt.gov.au`,C=`https://nt.gov.au/_design/css/main.css/logo-ntg-mono.svg`,w=`Northern Territory Government of Australia`,T=`The Northern Territory Government acknowledges the Traditional Owners of the Northern Territory and recognises their continuing cultural and spiritual connections to the lands, waters and communities. We pay our respects to all Aboriginal and Torres Strait Islander people and their cultures, their Elders past and present, and to future generations.`,E=[{match:/facebook/i,iconClass:`fab fa-facebook-square`,label:`Facebook`},{match:/linkedin/i,iconClass:`fab fa-linkedin`,label:`LinkedIn`},{match:/youtube|youtu\.be/i,iconClass:`fab fa-youtube-square`,label:`YouTube`},{match:/instagram/i,iconClass:`fab fa-instagram`,label:`Instagram`},{match:/have\s*your\s*say|consult|engage|comment/i,iconClass:`fal fa-comment`,label:`Have your say`},{match:/x\.com|twitter/i,iconClass:`fab fa-x-twitter`,label:`X`}],D={async main(e={}){let{menus:t=[],ancillary:r=[],finalText:i=``}=e;return`
    <footer ${n(`footer`,e)} class="ntg-footer" role="contentinfo">
        <div class="footer__inner">
            <pre><code>${JSON.stringify(e)}</code></pre>
            
            ${l(t)}
            ${u(r)}
            ${d(i)}
        </div>
    </footer>`}}})),k,A=e((()=>{k={}}));function j(){document.body.removeEventListener(`click`,M),document.body.addEventListener(`click`,M)}function M(e){e.preventDefault()}var N,P,F,I,L;await e((async()=>{i(),c(),O(),A(),N=r(D.main),P={title:`dxp components/Footer`,parameters:{layout:`fullscreen`}},F=await N.markup(k),I={render:e=>(requestAnimationFrame(j),N(e)),args:k,argTypes:{menus:{control:`object`},ancillary:{control:`object`},finalText:{control:`text`}},parameters:{docs:{source:{code:F,language:`html`,type:`code`}}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L=[`Default`]}))();export{I as Default,L as __namedExportsOrder,P as default};
//# sourceMappingURL=footer.stories-CLIxiKSg.js.map