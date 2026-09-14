import{n as e}from"./chunk-BVpWp9h4.js";import{a as t,l as n}from"./directive-helpers-DXeJie5u.js";import{n as r,r as i,t as a}from"./component.helper-D0vBjeOt.js";import{n as o,t as s}from"./squizStoryRenderer-4zIdV6yt.js";import{n as c,r as l,t as u}from"./xss-Cvy76lHc.js";import{n as d,t as f}from"./squizInfo.mock-D4VTpLG1.js";function p(e){return e?typeof e==`string`?{url:e,target:`_self`}:typeof e==`object`&&e.url?{url:e.url,target:e.target||`_self`}:null:null}var m,h,g=e((()=>{r(),l(),m=`<i class="fa-light fa-right-from-bracket" aria-hidden="true"></i>`,h={async main(e,t){let{Quick_Exit:n={}}=e,{label:r=`Quick exit`,message:o=`Click anywhere in this banner to exit. Call 000 if you're in immediate danger.`,exitUrl:s=`https://www.google.com`,whatIsThisHref:l=null,ariaLabel:d=``}=n,{QUICK_EXIT_INSERT_TARGET:f=`[data-component=global-alerts]`,QUICK_EXIT_INSERT_POSITION:h=`afterend`}=t?.env??{},g=[h,f],_=p(s)||{url:`https://www.google.com`,target:`_self`},v=p(l),y=d||r,b=v?`<a class="quick-exit__link mono" href="${c(v.url)}"${v.target===`_self`?``:` target="${u(v.target)}" rel="noopener noreferrer"`}>What is this?</a>`:``;return`
<div ${a(`quick-exit`,i(e,[`fullwidth background`]))} role="region" aria-label="${u(y)}" data-inject="${g}">
  <button type="button" class="quick-exit__action" data-quick-exit-url="${c(_.url)}">
    <div class="quick-exit__heading">
      <span class="quick-exit__icon" aria-hidden="true">${m}</span>
      <span class="quick-exit__title" data-sq-field="label">${u(r)}</span>
    </div>
    <p class="quick-exit__message" data-sq-field="message">${u(o)}</p>
  </button>
  ${b}
</div>
`}}})),_,v,y=e((()=>{_={label:`Quick exit`,message:`Click anywhere in this banner to exit. Call 000 if you're in immediate danger.`,exitUrl:{text:`Google`,url:`https://www.whattimeisitrightnow.com/`}},v={Quick_Exit:_}})),b,x,S=e((()=>{b={label:`Quick exit`,message:`Click anywhere in this banner to exit. Call 000 if you're in immediate danger.`,exitUrl:{text:`Google`,url:`https://www.whattimeisitrightnow.com`},whatIsThisHref:{text:`What is this?`,url:`https://nt.gov.au`}},x={Quick_Exit:b}}));function C(e){return n`
    <div style="min-height: 260px;">
      ${O(e,d({env:{QUICK_EXIT_INSERT_TARGET:`#root-inner`}}))}
      <div class="content-area">
        <p>Any elements after Quick Exit should naturally push down.</p>
      </div>
    </div>
  `}function w(e){e.preventDefault(),e.stopPropagation(),alert(`This is a preview only: activating the banner in this Storybook will not navigate the browser to the exit URL.`)}async function T(){[...document.querySelectorAll(`.quick-exit`)].forEach(e=>{e.removeEventListener(`click`,w),e.addEventListener(`click`,w)})}function E(){T(),setTimeout(window?.__ntgds__?.run(`quick-exit`),1e3)}var D,O,k,A,j,M,N,P;await e((async()=>{t(),s(),f(),g(),y(),S(),{within:D}=__STORYBOOK_MODULE_TEST__,O=o(h.main),k={title:`dxp components/Quick Exit`,parameters:{noContentArea:!0,controls:{expanded:!0,sort:`requiredFirst`}}},A=await O.markup(v),j={render:e=>(requestAnimationFrame(E),C(e)),args:v,argTypes:{label:{control:`text`},message:{control:`text`},exitUrl:{control:`object`,description:`SquizLink object: { text, url, target? }. Note: activating the banner in this preview will really navigate the browser there.`},whatIsThisHref:{control:`object`,description:`SquizLink object: { text, url, target? }.`},ariaLabel:{control:`text`}},parameters:{docs:{source:{code:A,language:`html`,type:`code`}}}},M=await O.markup(x),N={render:()=>(requestAnimationFrame(E),C(x)),parameters:{docs:{source:{code:M,language:`html`,type:`code`}}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    requestAnimationFrame(customSetup);
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
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    requestAnimationFrame(customSetup);
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
}`,...N.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    requestAnimationFrame(customSetup);
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
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    requestAnimationFrame(customSetup);
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
}`,...N.parameters?.docs?.source}}},P=[`Default`,`WithWhatIsThisLink`]}))();export{j as Default,N as WithWhatIsThisLink,P as __namedExportsOrder,k as default};
//# sourceMappingURL=quick-exit.stories-Q-nkZETw.js.map