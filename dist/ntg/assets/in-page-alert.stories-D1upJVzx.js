import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-mGPdhelI.js";function r(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}var i,a,o=e((()=>{i={info:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><line x1="12" y1="11" x2="12" y2="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="8" r="1" fill="currentColor"/></svg>`,success:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,warning:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><path d="M12 3.5 21 20H3L12 3.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="12" y1="10" x2="12" y2="14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="17.25" r="1" fill="currentColor"/></svg>`,danger:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`},a={async main(e={}){let{alertType:t=`info`,title:n=`Information alert`,message:a=`Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.`}=e,o=i[t]?t:`info`;return`
<div class="in-page-alert in-page-alert--${o}">
  <div class="in-page-alert__border"></div>
  <div class="in-page-alert__content">
    <div class="in-page-alert__header">
      <span class="in-page-alert__icon">${i[o]}</span>
      <div class="in-page-alert__text">
        <h3 class="in-page-alert__title" data-sq-field="title">${r(n)}</h3>
        <p class="in-page-alert__message" data-sq-field="message">${r(a)}</p>
      </div>
    </div>
  </div>
</div>
`}}})),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;await e((async()=>{n(),o(),s=t(a.main),c={title:`dxp/In-page Alert`},l=`Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.`,u={alertType:`info`,title:`Information alert`,message:l},d=await s.markup(u),f={render:e=>s(e),args:u,argTypes:{alertType:{control:`select`,options:[`info`,`success`,`warning`,`danger`]},title:{control:`text`},message:{control:`text`}},parameters:{docs:{description:{story:`Default alert type -- blue accent and outline, info icon.`},source:{code:d,language:`html`,type:`code`}}}},p={alertType:`success`,title:`Success alert`,message:l},m=await s.markup(p),h={render:()=>s(p),parameters:{docs:{description:{story:`Green accent and outline, check-circle icon.`},source:{code:m,language:`html`,type:`code`}}}},g={alertType:`warning`,title:`Warning alert`,message:l},_=await s.markup(g),v={render:()=>s(g),parameters:{docs:{description:{story:`Orange accent and outline, warning-triangle icon.`},source:{code:_,language:`html`,type:`code`}}}},y={alertType:`danger`,title:`Danger alert`,message:l},b=await s.markup(y),x={render:()=>s(y),parameters:{docs:{description:{story:`Red accent and outline, cross-circle icon.`},source:{code:b,language:`html`,type:`code`}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: infoArgs,
  argTypes: {
    alertType: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger']
    },
    title: {
      control: 'text'
    },
    message: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Default alert type -- blue accent and outline, info icon.'
      },
      source: {
        code: infoHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => squiz(successArgs),
  parameters: {
    docs: {
      description: {
        story: 'Green accent and outline, check-circle icon.'
      },
      source: {
        code: successHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => squiz(warningArgs),
  parameters: {
    docs: {
      description: {
        story: 'Orange accent and outline, warning-triangle icon.'
      },
      source: {
        code: warningHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => squiz(dangerArgs),
  parameters: {
    docs: {
      description: {
        story: 'Red accent and outline, cross-circle icon.'
      },
      source: {
        code: dangerHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: infoArgs,
  argTypes: {
    alertType: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger']
    },
    title: {
      control: 'text'
    },
    message: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Default alert type -- blue accent and outline, info icon.'
      },
      source: {
        code: infoHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => squiz(successArgs),
  parameters: {
    docs: {
      description: {
        story: 'Green accent and outline, check-circle icon.'
      },
      source: {
        code: successHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => squiz(warningArgs),
  parameters: {
    docs: {
      description: {
        story: 'Orange accent and outline, warning-triangle icon.'
      },
      source: {
        code: warningHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => squiz(dangerArgs),
  parameters: {
    docs: {
      description: {
        story: 'Red accent and outline, cross-circle icon.'
      },
      source: {
        code: dangerHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Info`,`Success`,`Warning`,`Danger`]}))();export{x as Danger,f as Info,h as Success,v as Warning,S as __namedExportsOrder,c as default};
//# sourceMappingURL=in-page-alert.stories-D1upJVzx.js.map