import{n as e}from"./chunk-BVpWp9h4.js";import{a as t,l as n}from"./directive-helpers-DXeJie5u.js";import{n as r,t as i}from"./component.helper-D0vBjeOt.js";import{n as a,t as o}from"./squizStoryRenderer-4zIdV6yt.js";import{n as s,r as c,t as l}from"./xss-Cvy76lHc.js";function u(e){return e?typeof e==`string`?{url:e,target:`_self`}:typeof e==`object`&&e.url?{url:e.url,target:e.target||`_self`}:null:null}var d,f,p=e((()=>{r(),c(),d=`<i class="fa-light fa-right-from-bracket" aria-hidden="true"></i>`,f={async main(e={}){let{Quick_Exit:t={}}=e,{label:n=`Quick exit`,message:r=`Click anywhere in this banner to exit. Call 000 if you're in immediate danger.`,exitUrl:a=`https://www.google.com`,whatIsThisHref:o=null,ariaLabel:c=``}=t,f=u(a)||{url:`https://www.google.com`,target:`_self`},p=u(o),m=c||n,h=p?`<a class="quick-exit__link" href="${s(p.url)}"${p.target===`_self`?``:` target="${l(p.target)}" rel="noopener noreferrer"`}>What is this?</a>`:``;return`
<div ${i(`quick-exit`,e)} class="fullwidth" role="region" aria-label="${l(m)}">
  <button type="button" class="quick-exit__action" data-quick-exit-url="${s(f.url)}">
    <div class="quick-exit__heading">
      <span class="quick-exit__icon" aria-hidden="true">${d}</span>
      <span class="quick-exit__title" data-sq-field="label">${l(n)}</span>
    </div>
    <p class="quick-exit__message" data-sq-field="message">${l(r)}</p>
  </button>
  ${h}
</div>
`}}})),m,h,g=e((()=>{m={label:`Quick exit`,message:`Click anywhere in this banner to exit. Call 000 if you're in immediate danger.`,exitUrl:{text:`Google`,url:`https://www.google.com`}},h={Quick_Exit:m}})),_,v,y=e((()=>{_={label:`Quick exit`,message:`Click anywhere in this banner to exit. Call 000 if you're in immediate danger.`,exitUrl:{text:`Google`,url:`https://www.google.com`},whatIsThisHref:{text:`What is this?`,url:`https://example.com/safety`}},v={Quick_Exit:_}}));function b(e){return n`
    <div style="min-height: 260px;">
      ${w(e)}
      <div style="max-width: 800px; margin: 0 auto; padding: 24px;">
        <p>This preview simulates page content behind the fixed banner above, so the docs canvas has enough height to show it in full.</p>
      </div>
    </div>
  `}function x(e){e.preventDefault(),e.stopPropagation(),alert(`This is a preview only: activating the banner in this Storybook will not navigate the browser to the exit URL.`)}async function S(){[...document.querySelectorAll(`.quick-exit`)].forEach(e=>{e.removeEventListener(`click`,x),e.addEventListener(`click`,x)})}var C,w,T,E,D,O,k,A;await e((async()=>{t(),o(),p(),g(),y(),{within:C}=__STORYBOOK_MODULE_TEST__,w=a(f.main),T={title:`dxp components/Quick Exit`},E=await w.markup(h),D={render:e=>(requestAnimationFrame(S),b(e)),args:h,argTypes:{label:{control:`text`},message:{control:`text`},exitUrl:{control:`object`,description:`SquizLink object: { text, url, target? }. Note: activating the banner in this preview will really navigate the browser there.`},whatIsThisHref:{control:`object`,description:`SquizLink object: { text, url, target? }.`},ariaLabel:{control:`text`}},parameters:{docs:{source:{code:E,language:`html`,type:`code`}}}},O=await w.markup(v),k={render:()=>(requestAnimationFrame(S),b(v)),parameters:{docs:{source:{code:O,language:`html`,type:`code`}}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithWhatIsThisLink`]}))();export{D as Default,k as WithWhatIsThisLink,A as __namedExportsOrder,T as default};
//# sourceMappingURL=quick-exit.stories-BW85X361.js.map