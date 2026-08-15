import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-4zIdV6yt.js";function r(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}var i,a=e((()=>{i={async main(e={}){let{title:t=`Callout heading`,body:n=`Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.`}=e;return`
<div class="callout">
  <div class="callout__border"></div>
  <div class="callout__content">
    <div class="callout__header">
      <div class="callout__text">
        <h3 class="callout__title" data-sq-field="title">${r(t)}</h3>
        <div class="callout__body" data-sq-field="body">${n}</div>
      </div>
    </div>
  </div>
</div>
`}}})),o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;await e((async()=>{n(),a(),o=t(i.main),s={title:`dxp/Callout`},c={title:`Callout heading`,body:`Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.`},l=await o.markup(c),u={render:e=>o(e),args:c,argTypes:{title:{control:`text`},body:{control:`text`,description:`Raw HTML (FormattedText). Supports <p>, <ul>/<ol>, <strong>, etc.`}},parameters:{docs:{source:{code:l,language:`html`,type:`code`}}}},d={title:`Getting Started Guide`,body:`<p>Follow these steps to get started with the NTG Design System:</p><ol><li>Install the package using npm or yarn</li><li>Import the theme CSS in your application</li><li>Import components as needed</li><li>Refer to the documentation for component APIs</li></ol><p><strong>Note:</strong> Callout is a text-only component and does not support icons.</p>`},f=await o.markup(d),p={render:()=>o(d),parameters:{docs:{source:{code:f,language:`html`,type:`code`}}}},m={title:`Accessibility Guidelines`,body:`The NTG Design System is committed to providing accessible components that meet WCAG 2.1 AA standards. All components include proper ARIA attributes, keyboard navigation support, and semantic HTML. We test with screen readers and ensure high contrast mode compatibility. When using callouts, ensure that the information is also conveyed through text and not color alone. This helps users with visual impairments or color blindness understand the content.`},h=await o.markup(m),g={render:()=>o(m),parameters:{docs:{source:{code:h,language:`html`,type:`code`}}}},_={title:`Quick Note`,body:`This is a brief callout with minimal content.`},v=await o.markup(_),y={render:()=>o(_),parameters:{docs:{source:{code:v,language:`html`,type:`code`}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Basic`,`RichContent`,`LongContent`,`ShortContent`]}))();export{u as Basic,g as LongContent,p as RichContent,y as ShortContent,b as __namedExportsOrder,s as default};
//# sourceMappingURL=callout.stories-CQlJ2CGJ.js.map