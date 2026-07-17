import{n as e}from"./chunk-BVpWp9h4.js";import{a as t,l as n}from"./directive-helpers-DXeJie5u.js";import{t as r}from"./quick-exit-BURBk_TF.js";import{n as i,t as a}from"./squizStoryRenderer-DSARXh3x.js";function o(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function s(e){return e?typeof e==`string`?{url:e,target:`_self`}:typeof e==`object`&&e.url?{url:e.url,target:e.target||`_self`}:null:null}var c,l,u=e((()=>{c=`<svg width="20" height="20" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M7 2H4v12h3M6 8h7m-3-3 3 3-3 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,l={async main(e={}){let{label:t=`Quick exit`,message:n=`Click anywhere in this banner to exit. Call 000 if you're in immediate danger.`,exitUrl:r=`https://www.google.com`,whatIsThisHref:i=null,ariaLabel:a=``}=e,l=s(r)||{url:`https://www.google.com`,target:`_self`},u=s(i),d=a||t,f=u?`<a class="quick-exit__link" href="${o(u.url)}"${u.target===`_self`?``:` target="${o(u.target)}" rel="noopener noreferrer"`}>What is this?</a>`:``;return`
<div class="quick-exit" role="region" aria-label="${o(d)}">
  <button type="button" class="quick-exit__action" data-quick-exit-url="${o(l.url)}">
    <div class="quick-exit__heading">
      <span class="quick-exit__icon" aria-hidden="true">${c}</span>
      <span class="quick-exit__title">${o(t)}</span>
    </div>
    <p class="quick-exit__message">${o(n)}</p>
  </button>
  ${f}
</div>
`}}}));function d(e){return n`
    <div style="padding-block-start: 140px; min-height: 260px;">
      ${m(e)}
      <div style="max-width: 800px; margin: 0 auto; padding: 24px;">
        <p>This preview simulates page content behind the fixed banner above, so the docs canvas has enough height to show it in full.</p>
      </div>
    </div>
  `}async function f({canvasElement:e}){console.log({canvasElement:e}),p(e),e.dataset.quickExitStorySuppressed!==`true`&&(e.addEventListener(`click`,t=>{let n=t.target.closest(`.quick-exit__action`);!n||!e.contains(n)||(t.preventDefault(),t.stopPropagation(),alert(`This would redirect to target exitUrl: 
`+n.dataset.quickExitUrl))},!0),e.dataset.quickExitStorySuppressed=`true`)}var p,m,h,g,_,v,y,b,x,S;await e((async()=>{t(),a(),r(),u(),{within:p}=__STORYBOOK_MODULE_TEST__,m=i(l.main),h={title:`dxp/Quick Exit`},g={label:`Quick exit`,message:`Click anywhere in this banner to exit. Call 000 if you're in immediate danger.`,exitUrl:{text:`Google`,url:`https://www.google.com`}},_=await l.main(g),v={render:e=>d(e),args:g,argTypes:{label:{control:`text`},message:{control:`text`},exitUrl:{control:`object`,description:`SquizLink object: { text, url, target? }. Note: activating the banner in this preview will really navigate the browser there.`},whatIsThisHref:{control:`object`,description:`SquizLink object: { text, url, target? }.`},ariaLabel:{control:`text`}},parameters:{docs:{source:{code:_,language:`html`,type:`code`}}},play:f},y={label:`Quick exit`,message:`Click anywhere in this banner to exit. Call 000 if you're in immediate danger.`,exitUrl:{text:`Google`,url:`https://www.google.com`},whatIsThisHref:{text:`What is this?`,url:`https://example.com/safety`}},b=await l.main(y),x={render:()=>d(y),parameters:{docs:{source:{code:b,language:`html`,type:`code`}}},play:f},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => withPageContent(args),
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
  },
  play: runAfterRender
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => withPageContent(withWhatIsThisLinkArgs),
  parameters: {
    docs: {
      source: {
        code: withWhatIsThisLinkHtml,
        language: 'html',
        type: 'code'
      }
    }
  },
  play: runAfterRender
}`,...x.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => withPageContent(args),
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
  },
  play: runAfterRender
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => withPageContent(withWhatIsThisLinkArgs),
  parameters: {
    docs: {
      source: {
        code: withWhatIsThisLinkHtml,
        language: 'html',
        type: 'code'
      }
    }
  },
  play: runAfterRender
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithWhatIsThisLink`]}))();export{v as Default,x as WithWhatIsThisLink,S as __namedExportsOrder,h as default};