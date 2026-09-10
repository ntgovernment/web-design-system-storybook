import{n as e}from"./chunk-BVpWp9h4.js";import{a as t}from"./directive-helpers-DXeJie5u.js";import{n,t as r}from"./squizStoryRenderer-4zIdV6yt.js";import{r as i,t as a}from"./xss-Cvy76lHc.js";import{n as o,t as s}from"./squiz-links-CO4E1kVD.js";function c(e){let{alertType:t,title:n,message:r,actionLink:i,dismissible:o}=e,c=u[t]||`info`,d=s(i),f=l(JSON.stringify(e)),p=d?`<div class="global-alert__action">
        <a class="button button-secondary" ${d.attrs}>${a(d.text)}</a>
      </div>`:``,m=[`Session`,`Local`].includes(o)?`<button type="button" class="global-alert__dismiss" aria-label="Dismiss alert">
        <i class="fa-light fa-xmark"></i>
      </button>`:``;return`
<div class="global-alert global-alert--${c} content with-mono-links" data-cc="fullwidth background" data-global-alert-id="${f}" data-dismissible="${o}" role="region" aria-label="${a(n)}">
  <div class="global-alert__content">
    <p class="global-alert__title" data-sq-field="title">${a(n)}</p>
    <p class="global-alert__message" data-sq-field="message">${r}</p>
    ${p}
  </div>
  ${m}
</div>
`}function l(e){let t=0,n=String(e??``);for(let e=0;e<n.length;e++)t=t*31+n.charCodeAt(e)|0;return Math.abs(t).toString(36)}var u,d,f=e((()=>{i(),o(),u={Info:`info`,Warning:`warning`,Critical:`critical`,"Info-alt":`info-alt`},d={async main(e){return`${`<!-- ${JSON.stringify(e,null,2)} -->\n`}<div data-component="global-alerts">${e?.alerts?.length?`<div class="content-area">
        ${e.alerts.map(c).join(`
`)}
      </div>
    </div>`:`<!-- no alerts set -->`}`}}})),p,m,h=e((()=>{p=[{alertType:`Critical`,title:`Global alert title`,message:`This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant actionLink to provide user with or just have <a href="#">Links in the message</a>.`,actionLink:{text:`More information`,url:`https://example.com/more-information`},dismissible:`No`},{alertType:`Warning`,title:`Global alert title`,message:`This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant actionLink to provide user with or just have <a href="#">Links in the message</a>.`,actionLink:{text:`More information`,url:`https://example.com/more-information`},dismissible:`Session`},{alertType:`Info`,title:`Global alert title`,message:`This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant actionLink to provide user with or just have <a href="#">Links in the message</a>.`,actionLink:{text:`More information`,url:`https://example.com/more-information`},dismissible:`Session`},{alertType:`Info-alt`,title:`Global alert title`,message:`This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant actionLink to provide user with or just have <a href="#">Links in the message</a>.`,actionLink:{text:`More information`,url:`https://example.com/more-information`},dismissible:`Local`}],m={alerts:p}})),g,_,v,y,b,x;await e((async()=>{r(),t(),f(),h(),g=n(d.main),_={title:`dxp components/Global Alert`,parameters:{noContentArea:!0,controls:{expanded:!0,sort:`requiredFirst`}}},v=await g.markup(m),y=()=>{sessionStorage.removeItem(`global-alerts`),localStorage.removeItem(`global-alerts`)},b={render:e=>(requestAnimationFrame(()=>{y(),window.__ntgds__?.run?.(`global-alert`)}),g({alerts:[e]})),args:{alertType:`info-alt`,title:`Interactive Story Alert`,message:`Hello`,actionLink:{url:`#!hello`,text:`Hello`},dismissible:`NO`},argTypes:{alertType:{control:`select`,options:[`Info`,`Warning`,`Critical`,`Info-alt`]},title:{control:`text`},message:{control:`text`},actionLink:{control:`object`,description:`SquizLink object: { text, url, target? }.`},dismissible:{control:`select`,options:[`NO`,`Session`,`Local`]}},parameters:{docs:{description:{story:`Info variant, with an inline link at the end of the message.`},source:{code:v,language:`html`,type:`code`}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    requestAnimationFrame(() => {
      resetStore();
      window.__ntgds__?.run?.('global-alert');
    });
    const input = {
      alerts: [args
      // ...(defaultArgs.alerts || []),
      ]
    };
    return squiz(input);
  },
  args: {
    alertType: 'info-alt',
    title: 'Interactive Story Alert',
    message: 'Hello',
    actionLink: {
      url: "#!hello",
      text: 'Hello'
    },
    dismissible: "NO"
  },
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
    actionLink: {
      control: "object",
      description: 'SquizLink object: { text, url, target? }.'
    },
    dismissible: {
      control: "select",
      options: ["NO", "Session", "Local"]
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Info variant, with an inline link at the end of the message."
      },
      source: {
        code: defaultHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...b.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    requestAnimationFrame(() => {
      resetStore();
      window.__ntgds__?.run?.('global-alert');
    });
    const input = {
      alerts: [args
      // ...(defaultArgs.alerts || []),
      ]
    };
    return squiz(input);
  },
  args: {
    alertType: 'info-alt',
    title: 'Interactive Story Alert',
    message: 'Hello',
    actionLink: {
      url: "#!hello",
      text: 'Hello'
    },
    dismissible: "NO"
  },
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
    actionLink: {
      control: "object",
      description: 'SquizLink object: { text, url, target? }.'
    },
    dismissible: {
      control: "select",
      options: ["NO", "Session", "Local"]
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Info variant, with an inline link at the end of the message."
      },
      source: {
        code: defaultHtml,
        language: "html",
        type: "code"
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`]}))();export{b as Default,x as __namedExportsOrder,_ as default};
//# sourceMappingURL=global-alert.stories-D6HjoAqR.js.map