import{n as e}from"./chunk-BVpWp9h4.js";import{t}from"./in-page-alert-D9-wqd4d.js";import{n,t as r}from"./squizStoryRenderer-DSARXh3x.js";function i(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}var a,o,s=e((()=>{a={info:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><line x1="12" y1="11" x2="12" y2="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="8" r="1" fill="currentColor"/></svg>`,success:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,warning:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><path d="M12 3.5 21 20H3L12 3.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="12" y1="10" x2="12" y2="14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="17.25" r="1" fill="currentColor"/></svg>`,danger:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`},o={async main(e={}){let{alertType:t=`info`,title:n=`Information alert`,message:r=`Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.`}=e,o=a[t]?t:`info`;return`
<div class="in-page-alert in-page-alert--${o}">
  <div class="in-page-alert__border"></div>
  <div class="in-page-alert__content">
    <div class="in-page-alert__header">
      <span class="in-page-alert__icon">${a[o]}</span>
      <div class="in-page-alert__text">
        <h3 class="in-page-alert__title">${i(n)}</h3>
        <p class="in-page-alert__message">${i(r)}</p>
      </div>
    </div>
  </div>
</div>
`}}})),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;await e((async()=>{r(),t(),s(),c=n(o.main),l={title:`dxp/In-page Alert`},u=`Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.`,d={alertType:`info`,title:`Information alert`,message:u},f=await o.main(d),p={render:e=>c(e),args:d,argTypes:{alertType:{control:`select`,options:[`info`,`success`,`warning`,`danger`]},title:{control:`text`},message:{control:`text`}},parameters:{docs:{description:{story:`Default alert type -- blue accent and outline, info icon.`},source:{code:f,language:`html`,type:`code`}}}},m={alertType:`success`,title:`Success alert`,message:u},h=await o.main(m),g={render:()=>c(m),parameters:{docs:{description:{story:`Green accent and outline, check-circle icon.`},source:{code:h,language:`html`,type:`code`}}}},_={alertType:`warning`,title:`Warning alert`,message:u},v=await o.main(_),y={render:()=>c(_),parameters:{docs:{description:{story:`Orange accent and outline, warning-triangle icon.`},source:{code:v,language:`html`,type:`code`}}}},b={alertType:`danger`,title:`Danger alert`,message:u},x=await o.main(b),S={render:()=>c(b),parameters:{docs:{description:{story:`Red accent and outline, cross-circle icon.`},source:{code:x,language:`html`,type:`code`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Info`,`Success`,`Warning`,`Danger`]}))();export{S as Danger,p as Info,g as Success,y as Warning,C as __namedExportsOrder,l as default};