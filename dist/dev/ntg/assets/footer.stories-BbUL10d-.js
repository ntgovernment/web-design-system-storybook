import{n as e}from"./chunk-BVpWp9h4.js";import{t}from"./footer-DsxFFEbA.js";import{n,r,t as i}from"./component.helper-D0vBjeOt.js";import{n as a,t as o}from"./squizStoryRenderer-4zIdV6yt.js";import{n as s,r as c,t as l}from"./xss-Cvy76lHc.js";function u(e){return{...e,url:s(e.url),rel:e.target===`_blank`&&!e.assetId?`noopener noreferrer`:``,get attrs(){let{url:e,title:t,label:n,target:r,rel:i}=this,a=[`href=${e}`];return t&&t!==n&&a.push(`title=${t}`),r&&a.push(`target=${r}`),i&&a.push(`rel=${i}`),a.join(` `)}}}var d=e((()=>{c()}));function f(e){let t=[e.url,e.title,e.label].filter(Boolean).join(` `);return p.find(e=>e.match.test(t))||m}var p,m,h=e((()=>{p=[{match:/facebook/i,iconClass:`fab fa-facebook-square`},{match:/linkedin/i,iconClass:`fab fa-linkedin`},{match:/youtube|youtu\.be/i,iconClass:`fab fa-youtube-square`},{match:/instagram/i,iconClass:`fab fa-instagram`},{match:/have\s*your\s*say|consult|engage|comment/i,iconClass:`fal fa-comment`},{match:/x\.com|twitter/i,iconClass:`fab fa-x-twitter`}],m={iconClass:`fa-light fa-arrow-up-right-from-square`}}));function g(e){let t=(Array.isArray(e)?e:[]).map((e,t)=>y(e,t)).filter(Boolean).join(``);return t?`
    <div class="footer__top">
      <div class="footer__groups">
${t}
      </div>
    </div>`:``}function _(e){let t=(Array.isArray(e)?e:[]).map(b).filter(Boolean).join(``);return`
    <div class="footer__middle">
      <div class="footer__brand">
        <a class="logo__ntg-primary" href="${s(E)}" title="Visit NT.GOV.AU">
          <span class="sr-only">Visit NT.GOV.AU</span>
        </a>
      </div>
      ${t?`<nav class="footer__ancillary" aria-label="Footer links"><ul class="footer__ancillary-list">${t}</ul></nav>`:``}
    </div>`}function v(e){let t=new Date().getFullYear();return`
    <div class="footer__bottom">
      <div>${l(String(e??``).trim()||O)}</div>
      <div>&copy; ${t} ${l(D)}</div>
    </div>`}function y(e,t){if(!e||typeof e!=`object`)return``;let n=String(e.menuTitle??``).trim(),r=[`bullet`,`icon`,`none`].includes(e.menuType)?e.menuType:`bullet`,i=(Array.isArray(e.menuItems)?e.menuItems:[]).map(e=>x(e,r)).filter(Boolean).join(``);if(!n&&!i)return``;let a=r==`bullet`?``:` unstyled-list`;return`
        <section class="footer__group footer__group--${l(r)}" aria-labelledby="footer-group-${t}">
          ${n?`<h2 id="footer-group-${t}">${l(n)}</h2>`:``}
          ${i?`<ul class="footer__menu${a}">${i}</ul>`:``}
        </section>`}function b(e){let t=w(e);return t?`<li>${S(t,`none`)}</li>`:``}function x(e,t){let n=w(e);if(n)return`<li>${S(n,t)}<!-- ${JSON.stringify({item:e,linkNormalized:n},null,2)} --></li>`;let r=T(e);return r?`<li>${r}<!-- ${JSON.stringify({item:e,linkNormalized:n},null,2)} --></li>`:``}function S(e,t){let{label:n,attrs:r}=u(e),i=t===`icon`,a=l(n);if(i){let{iconClass:t}=f(e);a=C(t,n)}return`<a ${r} class="plain"><span class="decorate">${a}</span></a>`}function C(e,t){return`<span class="footer__icon" aria-hidden="true"><i class="${l(e)}"></i></span><span>${l(t)}</span>`}function w(e){if(!e)return null;if(typeof e==`string`)return{url:e,title:e,target:``,rel:``,icon:``};let t=Object.prototype.hasOwnProperty.call(e,`link`)?e.link:e;if(typeof t==`string`)return{url:t,title:t,target:``,rel:``,icon:e.icon||``};if(!t||typeof t!=`object`)return null;let n=t.url||t.href||t.asset_url||t.assetUrl||t.linkUrl||``,r=t.title||t.name||t.label||t.text||t.linkText||t.asset_name||t.assetName||n,i=t.target||(t.newWindow?`_blank`:``),a={url:n,title:r,label:r,target:i,rel:t.rel||(i===`_blank`?`noopener noreferrer`:``),icon:t.icon||``};return n?a:null}function T(e){if(typeof e==`string`)return e;if(!e||typeof e!=`object`)return``;let t=e.link&&typeof e.link==`object`&&!Array.isArray(e.link)?e.link:null;return t?.freeform||t?.html||t?.value||t?.body||t?.content||t?.text||e.freeform||e.html||e.value||e.body||e.content||e.text||``}var E,D,O,k,A=e((()=>{c(),d(),n(),h(),E=`https://nt.gov.au`,D=`Northern Territory Government of Australia`,O=`The Northern Territory Government acknowledges the Traditional Owners of the Northern Territory and recognises their continuing cultural and spiritual connections to the lands, waters and communities. We pay our respects to all Aboriginal and Torres Strait Islander people and their cultures, their Elders past and present, and to future generations.`,k={async main(e={}){let{menus:t=[],ancillary:n=[],finalText:a=``}=e;return`
    <footer ${i(`footer`,r(e,[`fullwidth background`]))} role="contentinfo">
        ${g(t)}
        ${_(n)}
        ${v(a)}
    </footer>`}}})),j,M,N,P,F=e((()=>{j=[{menuTitle:`BULLET`,menuItems:[{url:`https://google.com`,text:`google`},{assetId:`3`,url:`http://nt.gov.au`,text:`asset`}]},{menuTitle:`NONE`,menuType:`none`,menuItems:[{url:`https://google.com`,text:`google`},{assetId:`3`,url:`http://nt.gov.au`,text:`asset`}]},{menuTitle:`ICONS`,menuType:`icon`,menuItems:[{url:`https://google.com`,text:`google`},{url:`http://facebook.com`,text:`asset`},{url:`http://qld.gov.au`,text:`other`}]}],M=[{url:`https://google.com`,text:`google`},{url:`http://facebook.com`,text:`asset`},{url:`http://qld.gov.au`,text:`other`}],N=`hello finalText`,P={menus:j,ancillary:M,finalText:N}}));function I(){document.body.removeEventListener(`click`,L),document.body.addEventListener(`click`,L)}function L(e){e.preventDefault()}var R,z,B,V,H;await e((async()=>{o(),t(),A(),F(),R=a(k.main),z={title:`dxp components/Footer`,parameters:{layout:`fullscreen`}},B=await R.markup(P),V={render:e=>(requestAnimationFrame(I),R(e)),args:P,argTypes:{menus:{control:`object`},ancillary:{control:`object`},finalText:{control:`text`}},parameters:{docs:{source:{code:B,language:`html`,type:`code`}}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H=[`Default`]}))();export{V as Default,H as __namedExportsOrder,z as default};
//# sourceMappingURL=footer.stories-BbUL10d-.js.map