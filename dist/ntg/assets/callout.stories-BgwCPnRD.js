import{n as e}from"./chunk-BVpWp9h4.js";import{t}from"./callout-B9SH1iis.js";import{n,t as r}from"./squizStoryRenderer-DSARXh3x.js";function i(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}var a,o=e((()=>{a={async main(e={}){let{title:t=`Callout heading`,body:n=`Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.`}=e;return`
<div class="callout">
  <div class="callout__border"></div>
  <div class="callout__content">
    <div class="callout__header">
      <div class="callout__text">
        <h3 class="callout__title">${i(t)}</h3>
        <div class="callout__body">${n}</div>
      </div>
    </div>
  </div>
</div>
`}}})),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;await e((async()=>{r(),t(),o(),s=n(a.main),c={title:`dxp/Callout`},l={title:`Callout heading`,body:`Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.`},u=await a.main(l),d={render:e=>s(e),args:l,argTypes:{title:{control:`text`},body:{control:`text`,description:`Raw HTML (FormattedText). Supports <p>, <ul>/<ol>, <strong>, etc.`}},parameters:{docs:{source:{code:u,language:`html`,type:`code`}}}},f={title:`Getting Started Guide`,body:`<p>Follow these steps to get started with the NTG Design System:</p><ol><li>Install the package using npm or yarn</li><li>Import the theme CSS in your application</li><li>Import components as needed</li><li>Refer to the documentation for component APIs</li></ol><p><strong>Note:</strong> Callout is a text-only component and does not support icons.</p>`},p=await a.main(f),m={render:()=>s(f),parameters:{docs:{source:{code:p,language:`html`,type:`code`}}}},h={title:`Accessibility Guidelines`,body:`The NTG Design System is committed to providing accessible components that meet WCAG 2.1 AA standards. All components include proper ARIA attributes, keyboard navigation support, and semantic HTML. We test with screen readers and ensure high contrast mode compatibility. When using callouts, ensure that the information is also conveyed through text and not color alone. This helps users with visual impairments or color blindness understand the content.`},g=await a.main(h),_={render:()=>s(h),parameters:{docs:{source:{code:g,language:`html`,type:`code`}}}},v={title:`Quick Note`,body:`This is a brief callout with minimal content.`},y=await a.main(v),b={render:()=>s(v),parameters:{docs:{source:{code:y,language:`html`,type:`code`}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Basic`,`RichContent`,`LongContent`,`ShortContent`]}))();export{d as Basic,_ as LongContent,m as RichContent,b as ShortContent,x as __namedExportsOrder,c as default};