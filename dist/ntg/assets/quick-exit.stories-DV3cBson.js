import{n as e}from"./chunk-BVpWp9h4.js";import{a as t,l as n}from"./directive-helpers-DXeJie5u.js";import{n as r,t as i}from"./squizStoryRenderer-mGPdhelI.js";function a(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function o(e){return e?typeof e==`string`?{url:e,target:`_self`}:typeof e==`object`&&e.url?{url:e.url,target:e.target||`_self`}:null:null}var s,c,l=e((()=>{s=`<svg width="20" height="20" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M7 2H4v12h3M6 8h7m-3-3 3 3-3 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,c={async main({Quick_Exit:e}){let{label:t=`Quick exit`,message:n=`Click anywhere in this banner to exit. Call 000 if you're in immediate danger.`,exitUrl:r=`https://www.google.com`,whatIsThisHref:i=null,ariaLabel:c=``}=e,l=o(r)||{url:`https://www.google.com`,target:`_self`},u=o(i),d=c||t,f=u?`<a class="quick-exit__link" href="${a(u.url)}"${u.target===`_self`?``:` target="${a(u.target)}" rel="noopener noreferrer"`}>What is this?</a>`:``;return`
<div class="quick-exit" role="region" aria-label="${a(d)}">
  <button type="button" class="quick-exit__action" data-quick-exit-url="${a(l.url)}">
    <div class="quick-exit__heading">
      <span class="quick-exit__icon" aria-hidden="true">${s}</span>
      <span class="quick-exit__title" data-sq-field="label">${a(t)}</span>
    </div>
    <p class="quick-exit__message" data-sq-field="message">${a(n)}</p>
  </button>
  ${f}
</div>
`}}})),u,d,f=e((()=>{u={label:`Quick exit`,message:`Click anywhere in this banner to exit. Call 000 if you're in immediate danger.`,exitUrl:{text:`Google`,url:`https://www.google.com`}},d={Quick_Exit:u}})),p,m,h=e((()=>{p={label:`Quick exit`,message:`Click anywhere in this banner to exit. Call 000 if you're in immediate danger.`,exitUrl:{text:`Google`,url:`https://www.google.com`},whatIsThisHref:{text:`What is this?`,url:`https://example.com/safety`}},m={Quick_Exit:p}}));function g(e){return n`
    <div style="padding-block-start: 140px; min-height: 260px;">
      ${b(e)}
      <div style="max-width: 800px; margin: 0 auto; padding: 24px;">
        <p>This preview simulates page content behind the fixed banner above, so the docs canvas has enough height to show it in full.</p>
      </div>
    </div>
  `}function _(e){e.preventDefault(),e.stopPropagation(),alert(`This is a preview only: activating the banner in this Storybook will not navigate the browser to the exit URL.`)}async function v(){[...document.querySelectorAll(`.quick-exit`)].forEach(e=>{e.removeEventListener(`click`,_),e.addEventListener(`click`,_)})}var y,b,x,S,C,w,T,E;await e((async()=>{t(),i(),l(),f(),h(),{within:y}=__STORYBOOK_MODULE_TEST__,b=r(c.main),x={title:`dxp/Quick Exit`},S=await b.markup(d),C={render:e=>(requestAnimationFrame(v),g(e)),args:d,argTypes:{label:{control:`text`},message:{control:`text`},exitUrl:{control:`object`,description:`SquizLink object: { text, url, target? }. Note: activating the banner in this preview will really navigate the browser there.`},whatIsThisHref:{control:`object`,description:`SquizLink object: { text, url, target? }.`},ariaLabel:{control:`text`}},parameters:{docs:{source:{code:S,language:`html`,type:`code`}}}},w=await b.markup(m),T={render:()=>(requestAnimationFrame(v),g(m)),parameters:{docs:{source:{code:w,language:`html`,type:`code`}}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithWhatIsThisLink`]}))();export{C as Default,T as WithWhatIsThisLink,E as __namedExportsOrder,x as default};
//# sourceMappingURL=quick-exit.stories-DV3cBson.js.map