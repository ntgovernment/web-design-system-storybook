import{n as e}from"./chunk-BVpWp9h4.js";import{a as t,l as n}from"./directive-helpers-DXeJie5u.js";import{n as r,t as i}from"./component.helper-D0vBjeOt.js";import{n as a,t as o}from"./squizStoryRenderer-4zIdV6yt.js";function s(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function c(e){return e?typeof e==`string`?{url:e,target:`_self`}:typeof e==`object`&&e.url?{url:e.url,target:e.target||`_self`}:null:null}var l,u,d=e((()=>{r(),l=`<i class="floating-button__icon fa-thin fa-arrow-right" aria-hidden="true"></i>`,u={async main(e={}){let{label:t=`Label`,link:n=null,ariaLabel:r=``,landmarkLabel:a=`Floating action button`}=e,o=`floating-button__action button`,u=r&&r!==t?` aria-label="${s(r)}"`:``,d=c(n),f=`<span data-sq-field="label">${s(t)}</span>${l}`,p=d?`<a class="${o}" href="${s(d.url)}"${d.target===`_self`?``:` target="${s(d.target)}" rel="noopener noreferrer"`}${u}>${f}</a>`:`<button type="button" class="${o}"${u}>${f}</button>`;return`
<div ${i(`floating-button`,e)} class="fullwidth" role="complementary" aria-label="${s(a)}">
  <div class="floating-button__container">
    <div class="floating-button__button-wrapper">
      ${p}
    </div>
  </div>
</div>
`}}}));function f(e){return n`
    <div style="padding-block-end: 140px; min-height: 260px;">
      <div style="max-width: 800px; margin: 0 auto; padding: 24px;">
        <p>This preview simulates page content above the fixed button below, so the docs canvas has enough height to show it in full.</p>
      </div>
      ${p(e)}
    </div>
  `}var p,m,h,g,_,v;await e((async()=>{t(),o(),d(),p=a(u.main),m={title:`dxp components/Floating Button`},h={label:`Label`},g=await p.markup(h),_={render:e=>f(e),args:h,argTypes:{label:{control:`text`},link:{control:`text`,description:`Optional URL. When set, renders as a link instead of a plain button.`},ariaLabel:{control:`text`},landmarkLabel:{control:`text`}},parameters:{docs:{source:{code:g,language:`html`,type:`code`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`]}))();export{_ as Default,v as __namedExportsOrder,m as default};
//# sourceMappingURL=floating-button.stories-D_jjJqfz.js.map