import{n as e}from"./chunk-BVpWp9h4.js";import{t}from"./footer-DsxFFEbA.js";import{n,r,t as i}from"./component.helper-D0vBjeOt.js";import{n as a,t as o}from"./squizStoryRenderer-4zIdV6yt.js";import{n as s,r as c,t as l}from"./xss-Cvy76lHc.js";import{n as u,t as d}from"./squiz-links-CO4E1kVD.js";function f(e){let t=[e.url,e.title,e.label].filter(Boolean).join(` `);return p.find(e=>e.match.test(t))||m}var p,m,h=e((()=>{p=[{match:/facebook/i,iconClass:`fab fa-facebook-square`},{match:/linkedin/i,iconClass:`fab fa-linkedin`},{match:/youtube|youtu\.be/i,iconClass:`fab fa-youtube-square`},{match:/instagram/i,iconClass:`fab fa-instagram`},{match:/have\s*your\s*say|consult|engage|comment/i,iconClass:`fal fa-comment`},{match:/x\.com|twitter/i,iconClass:`fab fa-x-twitter`}],m={iconClass:`fa-light fa-arrow-up-right-from-square`}}));function g(e){let t=(Array.isArray(e)?e:[]).map((e,t)=>y(e,t)).filter(Boolean).join(``);return t?`
    <div class="footer__top">
      <div class="footer__groups">
${t}
      </div>
    </div>`:``}function _(e){let t=(Array.isArray(e)?e:[]).map(e=>`<li>${b(e)}</li>`).filter(Boolean).join(``);return`
    <div class="footer__middle">
      <div class="footer__brand">
        <a class="logo__ntg-primary" href="${s(S)}" title="Visit NT.GOV.AU">
          <span class="sr-only">Visit NT.GOV.AU</span>
        </a>
      </div>
      ${t?`<nav class="footer__ancillary" aria-label="Footer links"><ul class="footer__ancillary-list">${t}</ul></nav>`:``}
    </div>`}function v(e){let t=new Date().getFullYear();return`
    <div class="footer__bottom">
      <div>${l(String(e??``).trim()||w)}</div>
      <div>&copy; ${t} ${l(C)}</div>
    </div>`}function y(e,t){if(!e||typeof e!=`object`)return``;let n=String(e.menuTitle??``).trim(),r=[`bullet`,`icon`,`none`].includes(e.menuType)?e.menuType:`bullet`,i=(Array.isArray(e.menuItems)?e.menuItems:[]).map(e=>`<li>${b(e,r)}</li>`).filter(Boolean).join(``);if(!n&&!i)return``;let a=r==`bullet`?``:` unstyled-list`;return`
        <section class="footer__group footer__group--${l(r)}" aria-labelledby="footer-group-${t}">
          ${n?`<h2 id="footer-group-${t}">${l(n)}</h2>`:``}
          ${i?`<ul class="footer__menu${a}">${i}</ul>`:``}
        </section>`}function b(e,t){let{text:n,attrs:r}=d(e),i=t===`icon`,a=l(n);if(i){let{iconClass:t}=f(e);a=x(t,n)}return`<a ${r} class="plain"><span class="decorate">${a}</span></a>`}function x(e,t){return`<span class="footer__icon" aria-hidden="true"><i class="${l(e)}"></i></span><span>${l(t)}</span>`}var S,C,w,T,E=e((()=>{c(),u(),n(),h(),S=`https://nt.gov.au`,C=`Northern Territory Government of Australia`,w=`The Northern Territory Government acknowledges the Traditional Owners of the Northern Territory and recognises their continuing cultural and spiritual connections to the lands, waters and communities. We pay our respects to all Aboriginal and Torres Strait Islander people and their cultures, their Elders past and present, and to future generations.`,T={async main(e={},t){let{menus:n=[],ancillary:a=[],finalText:o=``}=e;return`<!-- ${JSON.stringify(e,null,2)} -->
    <footer ${i(`footer`,r(e,[`fullwidth background`]))} role="contentinfo">
        ${g(n)}
        ${_(a)}
        ${v(o)}
    </footer>`}}})),D,O,k,A,j=e((()=>{D=[{menuTitle:`BULLET`,menuItems:[{url:`https://google.com`,text:`google`},{assetId:`3`,url:`http://nt.gov.au`,text:`asset`}]},{menuTitle:`NONE`,menuType:`none`,menuItems:[{url:`https://google.com`,text:`google`},{assetId:`3`,url:`http://nt.gov.au`,text:`asset`}]},{menuTitle:`ICONS`,menuType:`icon`,menuItems:[{url:`https://google.com`,text:`google`},{url:`http://facebook.com`,text:`asset`},{url:`http://qld.gov.au`,text:`other`}]}],O=[{url:`https://google.com`,text:`google`},{url:`http://facebook.com`,text:`asset`},{url:`http://qld.gov.au`,text:`other`}],k=`hello finalText`,A={menus:D,ancillary:O,finalText:k}}));function M(){document.body.removeEventListener(`click`,N),document.body.addEventListener(`click`,N)}function N(e){e.preventDefault()}var P,F,I,L,R;await e((async()=>{o(),t(),E(),j(),P=a(T.main),F={title:`dxp components/Footer`,parameters:{layout:`fullscreen`}},I=await P.markup(A),L={render:e=>(requestAnimationFrame(M),P(e)),args:A,argTypes:{menus:{control:`object`},ancillary:{control:`object`},finalText:{control:`text`}},parameters:{docs:{source:{code:I,language:`html`,type:`code`}}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`Default`]}))();export{L as Default,R as __namedExportsOrder,F as default};
//# sourceMappingURL=footer.stories-CqojxsXc.js.map