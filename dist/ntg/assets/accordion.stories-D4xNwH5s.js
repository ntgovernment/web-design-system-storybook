import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-mGPdhelI.js";function r(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}var i,a,o=e((()=>{i=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M7 10l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,a={async main(e={}){let{items:t=[],showToggleAll:n=!1}=e,a=t.filter(e=>e&&e.publishItem!==`No`),o=Math.random().toString(36).slice(2,8);return`
<div class="accordion">
  ${n&&a.length>0?`<div class="accordion__header">
      <button type="button" class="accordion__toggle-all button button-tertiary" data-accordion-toggle-all>Open all</button>
    </div>`:``}
  <div class="accordion__items">
    ${a.map((e,t)=>{let n=`accordion-${o}-trigger-${t}`,a=`accordion-${o}-panel-${t}`,s=e&&e.title?e.title:``,c=e&&e.content?e.content:``;return`
      <div class="accordion-item">
        <button id="${n}" class="accordion-item__trigger" type="button" aria-expanded="false" aria-controls="${a}">
          <span class="accordion-item__title" data-sq-field="title">${r(s)}</span>
          <span class="accordion-item__icon" aria-hidden="true">${i}</span>
        </button>
        <div id="${a}" class="accordion-item__panel" role="region" aria-labelledby="${n}" hidden>
          <div class="accordion-item__content">${c}</div>
        </div>
      </div>`}).join(``)}
  </div>
</div>
`}}})),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;await e((async()=>{n(),o(),{expect:s,userEvent:c,within:l}=__STORYBOOK_MODULE_TEST__,u=t(a.main),d={title:`dxp/Accordion`},f={items:[{title:`What is the NTG Design System?`,content:`<p>The NTG Design System is a comprehensive collection of reusable components, design tokens, and guidelines that help teams build consistent and accessible user interfaces.</p>`,publishItem:`Yes`},{title:`How do I get started?`,content:`<p>To get started, install the design system package using npm or yarn, then import the components you need into your application.</p>`,publishItem:`Yes`},{title:`Is it accessible?`,content:`<p>Yes! All components are built with accessibility in mind, following WCAG 2.1 AA guidelines. This includes proper ARIA attributes, keyboard navigation, and focus management.</p>`,publishItem:`Yes`}]},p=await u.markup(f),m={render:e=>u(e),args:f,argTypes:{items:{control:`object`,description:`Accordion items: { title, content, publishItem }.`},showToggleAll:{control:`boolean`,description:`Shows "Open all" / "Close all" button when true.`}},parameters:{docs:{source:{code:p,language:`html`,type:`code`}}},play:async({canvasElement:e})=>{let t=await l(e).findByText(`What is the NTG Design System?`),n=t.closest(`button`);await s(n).toHaveAttribute(`aria-expanded`,`false`),await c.click(t),await s(n).toHaveAttribute(`aria-expanded`,`true`),await c.click(t),await s(n).toHaveAttribute(`aria-expanded`,`false`)}},h={items:[{title:`Design Principles`,content:`<p>Our design principles emphasize clarity, consistency, and accessibility. Every decision we make is guided by these core values.</p>`,publishItem:`Yes`},{title:`Component Library`,content:`<p>The component library includes buttons, forms, navigation elements, and more. All components are fully customizable through design tokens.</p>`,publishItem:`Yes`},{title:`Design Tokens`,content:`<p>Design tokens are the design decisions that define the visual characteristics of your design system, such as colors, spacing, and typography.</p>`,publishItem:`Yes`},{title:`Documentation`,content:`<p>Comprehensive documentation is available for each component, including usage examples, API references, and accessibility guidelines.</p>`,publishItem:`Yes`}],showToggleAll:!0},g=await u.markup(h),_={render:()=>u(h),parameters:{docs:{source:{code:g,language:`html`,type:`code`}}}},v={items:[{title:`Installation`,content:`<p>Install the design system using npm:<br><code>npm install @ntg/design-system</code></p>`,publishItem:`Yes`},{title:`Configuration (draft, not yet published)`,content:`<p>Import the CSS and components in your application entry point.</p>`,publishItem:`No`},{title:`Usage`,content:`<p>Start using components by importing them from the package:<br><code>import { Button } from '@ntg/design-system'</code></p>`,publishItem:`Yes`}]},y=await u.markup(v),b={render:()=>u(v),parameters:{docs:{description:{story:`The "Configuration" item has publishItem set to "No", so it is left out of the rendered accordion entirely (only "Installation" and "Usage" appear) -- letting an item be authored ahead of time without being deleted or shown.`},source:{code:y,language:`html`,type:`code`}}}},x={items:[{title:`Product Features`,content:`<h4>Key Features:</h4><ul><li>Responsive design out of the box</li><li>Themeable with design tokens</li><li>TypeScript support included</li><li>Comprehensive documentation</li></ul>`,publishItem:`Yes`},{title:`Technical Specifications`,content:`<p><strong>Framework:</strong> React 19+</p><p><strong>Styling:</strong> CSS Custom Properties</p><p><strong>Build:</strong> Vite + PostCSS</p>`,publishItem:`Yes`},{title:`Browser Support`,content:`<table><thead><tr><th>Browser</th><th>Minimum Version</th></tr></thead><tbody><tr><td>Chrome</td><td>90+</td></tr><tr><td>Firefox</td><td>88+</td></tr><tr><td>Safari</td><td>14+</td></tr><tr><td>Edge</td><td>90+</td></tr></tbody></table>`,publishItem:`Yes`}],showToggleAll:!0},S=await u.markup(x),C={render:()=>u(x),parameters:{docs:{source:{code:S,language:`html`,type:`code`}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: basicArgs,
  argTypes: {
    items: {
      control: 'object',
      description: 'Accordion items: { title, content, publishItem }.'
    },
    showToggleAll: {
      control: 'boolean',
      description: 'Shows "Open all" / "Close all" button when true.'
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByText('What is the NTG Design System?');
    const button = trigger.closest('button');
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(trigger);
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(trigger);
    await expect(button).toHaveAttribute('aria-expanded', 'false');
  }
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withToggleAllArgs),
  parameters: {
    docs: {
      source: {
        code: withToggleAllHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withUnpublishedItemArgs),
  parameters: {
    docs: {
      description: {
        story: 'The "Configuration" item has publishItem set to "No", so it is left out of the rendered accordion entirely (only "Installation" and "Usage" appear) -- letting an item be authored ahead of time without being deleted or shown.'
      },
      source: {
        code: withUnpublishedItemHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: basicArgs,
  argTypes: {
    items: {
      control: 'object',
      description: 'Accordion items: { title, content, publishItem }.'
    },
    showToggleAll: {
      control: 'boolean',
      description: 'Shows "Open all" / "Close all" button when true.'
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByText('What is the NTG Design System?');
    const button = trigger.closest('button');
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(trigger);
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(trigger);
    await expect(button).toHaveAttribute('aria-expanded', 'false');
  }
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withToggleAllArgs),
  parameters: {
    docs: {
      source: {
        code: withToggleAllHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withUnpublishedItemArgs),
  parameters: {
    docs: {
      description: {
        story: 'The "Configuration" item has publishItem set to "No", so it is left out of the rendered accordion entirely (only "Installation" and "Usage" appear) -- letting an item be authored ahead of time without being deleted or shown.'
      },
      source: {
        code: withUnpublishedItemHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Basic`,`WithToggleAll`,`WithUnpublishedItem`,`RichContent`]}))();export{m as Basic,C as RichContent,_ as WithToggleAll,b as WithUnpublishedItem,w as __namedExportsOrder,d as default};
//# sourceMappingURL=accordion.stories-D4xNwH5s.js.map