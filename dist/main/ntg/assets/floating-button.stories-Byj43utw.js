import{n as e}from"./chunk-BVpWp9h4.js";import{a as t,l as n}from"./directive-helpers-DXeJie5u.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";function a(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function o(e){return e?typeof e==`string`?{url:e,target:`_self`}:typeof e==`object`&&e.url?{url:e.url,target:e.target||`_self`}:null:null}var s,c,l=e((()=>{s=`<i class="floating-button__icon fa-thin fa-arrow-right" aria-hidden="true"></i>`,c={async main(e={}){let{label:t=`Label`,link:n=null,ariaLabel:r=``,landmarkLabel:i=`Floating action button`}=e,c=`floating-button__action button`,l=r&&r!==t?` aria-label="${a(r)}"`:``,u=o(n),d=`<span data-sq-field="label">${a(t)}</span>${s}`,f=u?`<a class="${c}" href="${a(u.url)}"${u.target===`_self`?``:` target="${a(u.target)}" rel="noopener noreferrer"`}${l}>${d}</a>`:`<button type="button" class="${c}"${l}>${d}</button>`;return`
<div class="fullwidth floating-button" role="complementary" aria-label="${a(i)}">
  <div class="floating-button__container">
    <div class="floating-button__button-wrapper">
      ${f}
    </div>
  </div>
</div>
`}}}));function u(e){return n`
    <div style="padding-block-end: 140px; min-height: 260px;">
      <div style="max-width: 800px; margin: 0 auto; padding: 24px;">
        <p>This preview simulates page content above the fixed button below, so the docs canvas has enough height to show it in full.</p>
      </div>
      ${d(e)}
    </div>
  `}var d,f,p,m,h,g;await e((async()=>{t(),i(),l(),d=r(c.main),f={title:`dxp/Floating Button`},p={label:`Label`},m=await d.markup(p),h={render:e=>u(e),args:p,argTypes:{label:{control:`text`},link:{control:`text`,description:`Optional URL. When set, renders as a link instead of a plain button.`},ariaLabel:{control:`text`},landmarkLabel:{control:`text`}},parameters:{docs:{source:{code:m,language:`html`,type:`code`}}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => withPageContent(args),
  args: defaultArgs,
  argTypes: {
    label: {
      control: 'text'
    },
    link: {
      control: 'text',
      description: 'Optional URL. When set, renders as a link instead of a plain button.'
    },
    ariaLabel: {
      control: 'text'
    },
    landmarkLabel: {
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
}`,...h.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => withPageContent(args),
  args: defaultArgs,
  argTypes: {
    label: {
      control: 'text'
    },
    link: {
      control: 'text',
      description: 'Optional URL. When set, renders as a link instead of a plain button.'
    },
    ariaLabel: {
      control: 'text'
    },
    landmarkLabel: {
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
}`,...h.parameters?.docs?.source}}},g=[`Default`]}))();export{h as Default,g as __namedExportsOrder,f as default};
//# sourceMappingURL=floating-button.stories-Byj43utw.js.map