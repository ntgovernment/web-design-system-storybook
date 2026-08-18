import{n as e}from"./chunk-BVpWp9h4.js";import{a as t,l as n}from"./directive-helpers-DXeJie5u.js";import{r,t as i}from"./component.helper-D3WXhhhy.js";import{n as a,t as o}from"./squizStoryRenderer-4zIdV6yt.js";function s(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function c(e){return e?typeof e==`string`?{url:e,target:`_self`}:typeof e==`object`&&e.url?{url:e.url,target:e.target||`_self`}:null:null}var l,u,d=e((()=>{r(),l=`<i class="fa-thin fa-right-from-bracket" aria-hidden="true"></i>`,u={async main(e={}){let{Quick_Exit:t={}}=e,{label:n=`Quick exit`,message:r=`Click anywhere in this banner to exit. Call 000 if you're in immediate danger.`,exitUrl:a=`https://www.google.com`,whatIsThisHref:o=null,ariaLabel:u=``}=t,d=c(a)||{url:`https://www.google.com`,target:`_self`},f=c(o),p=u||n,m=f?`<a class="quick-exit__link" href="${s(f.url)}"${f.target===`_self`?``:` target="${s(f.target)}" rel="noopener noreferrer"`}>What is this?</a>`:``;return`
<div ${i(`quick-exit`,e)} class="fullwidth" role="region" aria-label="${s(p)}">
  <button type="button" class="quick-exit__action" data-quick-exit-url="${s(d.url)}">
    <div class="quick-exit__heading">
      <span class="quick-exit__icon" aria-hidden="true">${l}</span>
      <span class="quick-exit__title" data-sq-field="label">${s(n)}</span>
    </div>
    <p class="quick-exit__message" data-sq-field="message">${s(r)}</p>
  </button>
  ${m}
</div>
`}}})),f,p,m=e((()=>{f={label:`Quick exit`,message:`Click anywhere in this banner to exit. Call 000 if you're in immediate danger.`,exitUrl:{text:`Google`,url:`https://www.google.com`}},p={Quick_Exit:f}})),h,g,_=e((()=>{h={label:`Quick exit`,message:`Click anywhere in this banner to exit. Call 000 if you're in immediate danger.`,exitUrl:{text:`Google`,url:`https://www.google.com`},whatIsThisHref:{text:`What is this?`,url:`https://example.com/safety`}},g={Quick_Exit:h}}));function v(e){return n`
    <div style="min-height: 260px;">
      ${S(e)}
      <div style="max-width: 800px; margin: 0 auto; padding: 24px;">
        <p>This preview simulates page content behind the fixed banner above, so the docs canvas has enough height to show it in full.</p>
      </div>
    </div>
  `}function y(e){e.preventDefault(),e.stopPropagation(),alert(`This is a preview only: activating the banner in this Storybook will not navigate the browser to the exit URL.`)}async function b(){[...document.querySelectorAll(`.quick-exit`)].forEach(e=>{e.removeEventListener(`click`,y),e.addEventListener(`click`,y)})}var x,S,C,w,T,E,D,O;await e((async()=>{t(),o(),d(),m(),_(),{within:x}=__STORYBOOK_MODULE_TEST__,S=a(u.main),C={title:`dxp/Quick Exit`},w=await S.markup(p),T={render:e=>(requestAnimationFrame(b),v(e)),args:p,argTypes:{label:{control:`text`},message:{control:`text`},exitUrl:{control:`object`,description:`SquizLink object: { text, url, target? }. Note: activating the banner in this preview will really navigate the browser there.`},whatIsThisHref:{control:`object`,description:`SquizLink object: { text, url, target? }.`},ariaLabel:{control:`text`}},parameters:{docs:{source:{code:w,language:`html`,type:`code`}}}},E=await S.markup(g),D={render:()=>(requestAnimationFrame(b),v(g)),parameters:{docs:{source:{code:E,language:`html`,type:`code`}}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    requestAnimationFrame(suppressClick);
    return withPageContent(args);
  },
  args: defaultArgs,
  argTypes: {
    label: {
      control: 'text'
    },
    message: {
      control: 'text'
    },
    exitUrl: {
      control: 'object',
      description: 'SquizLink object: { text, url, target? }. Note: activating the banner in this preview will really navigate the browser there.'
    },
    whatIsThisHref: {
      control: 'object',
      description: 'SquizLink object: { text, url, target? }.'
    },
    ariaLabel: {
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
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    requestAnimationFrame(suppressClick);
    return withPageContent(withWhatIsThisLinkArgs);
  },
  parameters: {
    docs: {
      source: {
        code: withWhatIsThisLinkHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    requestAnimationFrame(suppressClick);
    return withPageContent(args);
  },
  args: defaultArgs,
  argTypes: {
    label: {
      control: 'text'
    },
    message: {
      control: 'text'
    },
    exitUrl: {
      control: 'object',
      description: 'SquizLink object: { text, url, target? }. Note: activating the banner in this preview will really navigate the browser there.'
    },
    whatIsThisHref: {
      control: 'object',
      description: 'SquizLink object: { text, url, target? }.'
    },
    ariaLabel: {
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
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    requestAnimationFrame(suppressClick);
    return withPageContent(withWhatIsThisLinkArgs);
  },
  parameters: {
    docs: {
      source: {
        code: withWhatIsThisLinkHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithWhatIsThisLink`]}))();export{T as Default,D as WithWhatIsThisLink,O as __namedExportsOrder,C as default};
//# sourceMappingURL=quick-exit.stories-CkqK2Nku.js.map