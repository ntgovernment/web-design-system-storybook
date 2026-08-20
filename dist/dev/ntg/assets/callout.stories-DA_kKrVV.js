import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-CkXZPIWM.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";function a(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}var o,s=e((()=>{t(),o={async main(e={}){let{title:t=`Callout heading`,body:r=`Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.`}=e;return`
<div ${n(`callout`,e)}>
  <div class="callout__border"></div>
  <div class="callout__content">
    <div class="callout__header">
      <div class="callout__text">
        <h3 class="callout__title" data-sq-field="title">${a(t)}</h3>
        <div class="callout__body" data-sq-field="body">${r}</div>
      </div>
    </div>
  </div>
</div>
`}}})),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;await e((async()=>{i(),s(),c=r(o.main),l={title:`dxp components/Callout`},u={title:`Callout heading`,body:`Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.`},d=await c.markup(u),f={render:e=>c(e),args:u,argTypes:{title:{control:`text`},body:{control:`text`,description:`Raw HTML (FormattedText). Supports <p>, <ul>/<ol>, <strong>, etc.`}},parameters:{docs:{source:{code:d,language:`html`,type:`code`}}}},p={title:`Getting Started Guide`,body:`<p>Follow these steps to get started with the NTG Design System:</p><ol><li>Install the package using npm or yarn</li><li>Import the theme CSS in your application</li><li>Import components as needed</li><li>Refer to the documentation for component APIs</li></ol><p><strong>Note:</strong> Callout is a text-only component and does not support icons.</p>`},m=await c.markup(p),h={render:()=>c(p),parameters:{docs:{source:{code:m,language:`html`,type:`code`}}}},g={title:`Accessibility Guidelines`,body:`The NTG Design System is committed to providing accessible components that meet WCAG 2.1 AA standards. All components include proper ARIA attributes, keyboard navigation support, and semantic HTML. We test with screen readers and ensure high contrast mode compatibility. When using callouts, ensure that the information is also conveyed through text and not color alone. This helps users with visual impairments or color blindness understand the content.`},_=await c.markup(g),v={render:()=>c(g),parameters:{docs:{source:{code:_,language:`html`,type:`code`}}}},y={title:`Quick Note`,body:`This is a brief callout with minimal content.`},b=await c.markup(y),x={render:()=>c(y),parameters:{docs:{source:{code:b,language:`html`,type:`code`}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: basicArgs,
  argTypes: {
    title: {
      control: 'text'
    },
    body: {
      control: 'text',
      description: 'Raw HTML (FormattedText). Supports <p>, <ul>/<ol>, <strong>, etc.'
    }
  },
  parameters: {
    docs: {
      source: {
        code: basicHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => squiz(richContentArgs),
  parameters: {
    docs: {
      source: {
        code: richContentHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => squiz(longContentArgs),
  parameters: {
    docs: {
      source: {
        code: longContentHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => squiz(shortContentArgs),
  parameters: {
    docs: {
      source: {
        code: shortContentHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: basicArgs,
  argTypes: {
    title: {
      control: 'text'
    },
    body: {
      control: 'text',
      description: 'Raw HTML (FormattedText). Supports <p>, <ul>/<ol>, <strong>, etc.'
    }
  },
  parameters: {
    docs: {
      source: {
        code: basicHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => squiz(richContentArgs),
  parameters: {
    docs: {
      source: {
        code: richContentHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => squiz(longContentArgs),
  parameters: {
    docs: {
      source: {
        code: longContentHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => squiz(shortContentArgs),
  parameters: {
    docs: {
      source: {
        code: shortContentHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Basic`,`RichContent`,`LongContent`,`ShortContent`]}))();export{f as Basic,v as LongContent,h as RichContent,x as ShortContent,S as __namedExportsOrder,l as default};
//# sourceMappingURL=callout.stories-DA_kKrVV.js.map