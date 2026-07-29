import{n as e}from"./chunk-BVpWp9h4.js";import{a as t,l as n}from"./directive-helpers-DXeJie5u.js";import{t as r}from"./floating-button-DGATqQE6.js";import{n as i,t as a}from"./squizStoryRenderer-mGPdhelI.js";function o(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function s(e){return e?typeof e==`string`?{url:e,target:`_self`}:typeof e==`object`&&e.url?{url:e.url,target:e.target||`_self`}:null:null}var c,l,u=e((()=>{c=`<svg class="floating-button__icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,l={async main(e={}){let{label:t=`Label`,link:n=null,ariaLabel:r=``,landmarkLabel:i=`Floating action button`}=e,a=`floating-button__action button`,l=r&&r!==t?` aria-label="${o(r)}"`:``,u=s(n),d=`${o(t)}${c}`,f=u?`<a class="${a}" href="${o(u.url)}"${u.target===`_self`?``:` target="${o(u.target)}" rel="noopener noreferrer"`}${l}>${d}</a>`:`<button type="button" class="${a}"${l}>${d}</button>`;return`
<div class="floating-button" role="complementary" aria-label="${o(i)}">
  <div class="floating-button__container">
    <div class="floating-button__button-wrapper">
      ${f}
    </div>
  </div>
</div>
`}}}));function d(e){return n`
    <div style="padding-block-end: 140px; min-height: 260px;">
      <div style="max-width: 800px; margin: 0 auto; padding: 24px;">
        <p>This preview simulates page content above the fixed button below, so the docs canvas has enough height to show it in full.</p>
      </div>
      ${f(e)}
    </div>
  `}var f,p,m,h,g,_;await e((async()=>{t(),a(),r(),u(),f=i(l.main),p={title:`dxp/Floating Button`},m={label:`Label`},h=await f.markup(m),g={render:e=>d(e),args:m,argTypes:{label:{control:`text`},link:{control:`text`,description:`Optional URL. When set, renders as a link instead of a plain button.`},ariaLabel:{control:`text`},landmarkLabel:{control:`text`}},parameters:{docs:{source:{code:h,language:`html`,type:`code`}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`]}))();export{g as Default,_ as __namedExportsOrder,p as default};