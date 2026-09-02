import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-D0vBjeOt.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";function a(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}var o,s,c=e((()=>{t(),o={info:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><line x1="12" y1="11" x2="12" y2="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="8" r="1" fill="currentColor"/></svg>`,success:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,warning:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><path d="M12 3.5 21 20H3L12 3.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><line x1="12" y1="10" x2="12" y2="14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="17.25" r="1" fill="currentColor"/></svg>`,danger:`<svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`},s={async main(e={}){let{alertType:t=`Info`,title:r=`Information alert`,message:i=`Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.`}=e,s=String(t).toLowerCase(),c=o[s]?s:`info`;return`
<div ${n(`in-page-alert`,e)} class="in-page-alert--${c}">
  <div class="in-page-alert__content">
    <div class="in-page-alert__header">
      <span class="in-page-alert__icon">${o[c]}</span>
      <div class="in-page-alert__text">
        <h3 class="in-page-alert__title" data-sq-field="title">${a(r)}</h3>
        <p class="in-page-alert__message" data-sq-field="message">${a(i)}</p>
      </div>
    </div>
  </div>
</div>
`}}})),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;await e((async()=>{i(),c(),l=r(s.main),u={title:`dxp components/In-page Alert`},d=`Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.`,f={alertType:`Info`,title:`Information alert`,message:d},p=await l.markup(f),m={render:e=>l(e),args:f,argTypes:{alertType:{control:`select`,options:[`Info`,`Success`,`Warning`,`Danger`]},title:{control:`text`},message:{control:`text`}},parameters:{docs:{description:{story:`Default alert type -- blue accent and outline, info icon.`},source:{code:p,language:`html`,type:`code`}}}},h={alertType:`Success`,title:`Success alert`,message:d},g=await l.markup(h),_={render:()=>l(h),parameters:{docs:{description:{story:`Green accent and outline, check-circle icon.`},source:{code:g,language:`html`,type:`code`}}}},v={alertType:`Warning`,title:`Warning alert`,message:d},y=await l.markup(v),b={render:()=>l(v),parameters:{docs:{description:{story:`Orange accent and outline, warning-triangle icon.`},source:{code:y,language:`html`,type:`code`}}}},x={alertType:`Danger`,title:`Danger alert`,message:d},S=await l.markup(x),C={render:()=>l(x),parameters:{docs:{description:{story:`Red accent and outline, cross-circle icon.`},source:{code:S,language:`html`,type:`code`}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: infoArgs,
  argTypes: {
    alertType: {
      control: 'select',
      options: ['Info', 'Success', 'Warning', 'Danger']
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
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: infoArgs,
  argTypes: {
    alertType: {
      control: 'select',
      options: ['Info', 'Success', 'Warning', 'Danger']
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
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Info`,`Success`,`Warning`,`Danger`]}))();export{C as Danger,m as Info,_ as Success,b as Warning,w as __namedExportsOrder,u as default};
//# sourceMappingURL=in-page-alert.stories-DR1phEPP.js.map