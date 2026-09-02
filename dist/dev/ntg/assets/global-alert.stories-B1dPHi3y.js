import{n as e}from"./chunk-BVpWp9h4.js";import{a as t,l as n}from"./directive-helpers-DXeJie5u.js";import{n as r,t as ee}from"./component.helper-D0vBjeOt.js";import{n as i,t as a}from"./squizStoryRenderer-4zIdV6yt.js";function o(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function s(e){return e?typeof e==`string`?{url:e,text:e,target:`_self`}:typeof e==`object`&&e.url?{url:e.url,text:e.text||e.url,target:e.target||`_self`}:null:null}function c(e){return e&&e!==`_self`?` target="${o(e)}" rel="noopener noreferrer"`:``}function te(e){let t=0,n=String(e??``);for(let e=0;e<n.length;e++)t=t*31+n.charCodeAt(e)|0;return Math.abs(t).toString(36)}var l,u,d,f=e((()=>{r(),l=`<svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="M3 3l10 10M13 3 3 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,u={Info:`info`,Warning:`warning`,Critical:`critical`,"Info-alt":`info-alt`},d={async main(e={}){let{alertType:t=`Info`,title:n=`Global alert title`,message:r=``,link:i=null,actionButton:a=null,dismissible:d=!0}=e,f=u[t]||`info`,p=s(i),m=s(a),h=te(`${n}:${r}`),g=p?` <a class="global-alert__link" href="${o(p.url)}"${c(p.target)}>${o(p.text)}</a>`:``,_=m?`<div class="global-alert__action">
        <a class="button button-secondary" href="${o(m.url)}"${c(m.target)}>${o(m.text)}</a>
      </div>`:``,v=d?`<button type="button" class="global-alert__dismiss" aria-label="Dismiss alert">
        ${l}
      </button>`:``;return`
<div ${ee(`global-alert`,e)} class="global-alert global-alert--${f}" data-global-alert-id="${h}" role="region" aria-label="${o(n)}">
  <div class="global-alert__content">
    <p class="global-alert__title" data-sq-field="title">${o(n)}</p>
    <p class="global-alert__message" data-sq-field="message">${o(r)}${g}</p>
    ${_}
  </div>
  ${v}
</div>
`}}})),p,m,h,g,_,v=e((()=>{p=`Info`,m=`Global alert title`,h=`This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant link to provide user with`,g={text:`More information`,url:`https://example.com/more-information`},_={alertType:p,title:m,message:h,link:g,dismissible:!0}})),y,ne,re,ie,b,ae=e((()=>{y=`Warning`,ne=`Global alert title`,re=`This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant link to provide user with`,ie={text:`More information`,url:`https://example.com/more-information`},b={alertType:y,title:ne,message:re,link:ie,dismissible:!0}})),x,S,C,w,T,oe=e((()=>{x=`Critical`,S=`Global alert title`,C=`This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant link to provide user with`,w={text:`More information`,url:`https://example.com/more-information`},T={alertType:x,title:S,message:C,link:w,dismissible:!0}})),E,D,O,k,A,se=e((()=>{E=`Info-alt`,D=`Global alert title`,O=`This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant link to provide user with`,k={text:`More information`,url:`https://example.com/more-information`},A={alertType:E,title:D,message:O,link:k,dismissible:!0}})),j,M,N,P,ce=e((()=>{j=`Info`,M=`Global alert title`,N=`This alert provides important information for users. Global alerts can be non-dismissible depending on the context, e.g. system outage or service unavailability.`,P={alertType:j,title:M,message:N,dismissible:!1}})),F,le,I,L,R,ue=e((()=>{F=`Info`,le=`Global alert title`,I=`This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant link to provide user with more information.`,L={text:`More information`,url:`https://example.com/more-information`},R={alertType:F,title:le,message:I,actionButton:L,dismissible:!0}})),z,B,V,H,U,W,G,K,q,J,Y,X,de,Z,fe,pe,me,Q,$;await e((async()=>{a(),t(),f(),v(),ae(),oe(),se(),ce(),ue(),z=i(d.main),B={title:`dxp components/Global Alert`},V=await z.markup(_),H={render:()=>z(_),args:_,argTypes:{alertType:{control:`select`,options:[`Info`,`Warning`,`Critical`,`Info-alt`]},title:{control:`text`},message:{control:`text`},link:{control:`object`,description:`SquizLink object: { text, url, target? }.`},actionButton:{control:`object`,description:`SquizLink object: { text, url, target? }.`},dismissible:{control:`boolean`}},parameters:{docs:{description:{story:`Info variant, with an inline link at the end of the message.`},source:{code:V,language:`html`,type:`code`}}}},U=await z.markup(b),W={render:()=>z(b),parameters:{docs:{description:{story:`Warning variant.`},source:{code:U,language:`html`,type:`code`}}}},G=await z.markup(T),K={render:()=>z(T),parameters:{docs:{description:{story:`Critical variant.`},source:{code:G,language:`html`,type:`code`}}}},q=await z.markup(A),J={render:()=>z(A),parameters:{docs:{description:{story:`Info-alt variant -- pale background, dark text, dark link/focus colours.`},source:{code:q,language:`html`,type:`code`}}}},Y=await z.markup(P),X={render:()=>z(P),parameters:{docs:{description:{story:`dismissible: false -- no close button, for messages that shouldn't be hideable (e.g. an active outage).`},source:{code:Y,language:`html`,type:`code`}}}},de=await z.markup(R),Z={render:()=>z(R),parameters:{docs:{description:{story:`actionButton set instead of an inline link -- renders as a secondary-style button below the message.`},source:{code:de,language:`html`,type:`code`}}}},fe={alertType:`Critical`,title:`Cyclone warning`,message:`Residents are advised to seek shelter immediately.`,link:{text:`More information`,url:`https://example.com/cyclone-warning`}},pe={alertType:`Warning`,title:`Website outage`,message:`We are experiencing technical difficulties. Some pages may not be available.`},me={alertType:`Info-alt`,title:`MFA required`,message:`Multi-factor authentication will be required soon to access services.`,link:{text:`Set up MFA`,url:`https://example.com/set-up-mfa`}},Q={render:()=>n`<div>
      ${z(fe)} ${z(pe)} ${z(me)}
    </div>`,parameters:{docs:{description:{story:`Three instances placed in sequence, ordered most severe first -- how multiple site-wide alerts are expected to be arranged in a shared template region.`}}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => squiz(infoArgs),
  args: infoArgs,
  argTypes: {
    alertType: {
      control: "select",
      options: ["Info", "Warning", "Critical", "Info-alt"]
    },
    title: {
      control: "text"
    },
    message: {
      control: "text"
    },
    link: {
      control: "object",
      description: 'SquizLink object: { text, url, target? }.'
    },
    actionButton: {
      control: "object",
      description: 'SquizLink object: { text, url, target? }.'
    },
    dismissible: {
      control: "boolean"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Info variant, with an inline link at the end of the message."
      },
      source: {
        code: infoHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => squiz(warningArgs),
  parameters: {
    docs: {
      description: {
        story: "Warning variant."
      },
      source: {
        code: warningHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...W.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => squiz(criticalArgs),
  parameters: {
    docs: {
      description: {
        story: "Critical variant."
      },
      source: {
        code: criticalHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...K.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => squiz(infoAltArgs),
  parameters: {
    docs: {
      description: {
        story: "Info-alt variant -- pale background, dark text, dark link/focus colours."
      },
      source: {
        code: infoAltHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...J.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => squiz(nonDismissibleArgs),
  parameters: {
    docs: {
      description: {
        story: "dismissible: false -- no close button, for messages that shouldn't be hideable (e.g. an active outage)."
      },
      source: {
        code: nonDismissibleHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withActionButtonArgs),
  parameters: {
    docs: {
      description: {
        story: "actionButton set instead of an inline link -- renders as a secondary-style button below the message."
      },
      source: {
        code: withActionButtonHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div>
      \${squiz(stackedCriticalArgs)} \${squiz(stackedWarningArgs)} \${squiz(stackedInfoAltArgs)}
    </div>\`,
  parameters: {
    docs: {
      description: {
        story: "Three instances placed in sequence, ordered most severe first -- how multiple site-wide alerts are expected to be arranged in a shared template region."
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => squiz(infoArgs),
  args: infoArgs,
  argTypes: {
    alertType: {
      control: "select",
      options: ["Info", "Warning", "Critical", "Info-alt"]
    },
    title: {
      control: "text"
    },
    message: {
      control: "text"
    },
    link: {
      control: "object",
      description: 'SquizLink object: { text, url, target? }.'
    },
    actionButton: {
      control: "object",
      description: 'SquizLink object: { text, url, target? }.'
    },
    dismissible: {
      control: "boolean"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Info variant, with an inline link at the end of the message."
      },
      source: {
        code: infoHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => squiz(warningArgs),
  parameters: {
    docs: {
      description: {
        story: "Warning variant."
      },
      source: {
        code: warningHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...W.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => squiz(criticalArgs),
  parameters: {
    docs: {
      description: {
        story: "Critical variant."
      },
      source: {
        code: criticalHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...K.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => squiz(infoAltArgs),
  parameters: {
    docs: {
      description: {
        story: "Info-alt variant -- pale background, dark text, dark link/focus colours."
      },
      source: {
        code: infoAltHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...J.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => squiz(nonDismissibleArgs),
  parameters: {
    docs: {
      description: {
        story: "dismissible: false -- no close button, for messages that shouldn't be hideable (e.g. an active outage)."
      },
      source: {
        code: nonDismissibleHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => squiz(withActionButtonArgs),
  parameters: {
    docs: {
      description: {
        story: "actionButton set instead of an inline link -- renders as a secondary-style button below the message."
      },
      source: {
        code: withActionButtonHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div>
      \${squiz(stackedCriticalArgs)} \${squiz(stackedWarningArgs)} \${squiz(stackedInfoAltArgs)}
    </div>\`,
  parameters: {
    docs: {
      description: {
        story: "Three instances placed in sequence, ordered most severe first -- how multiple site-wide alerts are expected to be arranged in a shared template region."
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Info`,`Warning`,`Critical`,`InfoAlt`,`NonDismissible`,`WithActionButton`,`Stacked`]}))();export{K as Critical,H as Info,J as InfoAlt,X as NonDismissible,Q as Stacked,W as Warning,Z as WithActionButton,$ as __namedExportsOrder,B as default};
//# sourceMappingURL=global-alert.stories-B1dPHi3y.js.map