import{n as e}from"./chunk-BVpWp9h4.js";import{a as t}from"./directive-helpers-DXeJie5u.js";import{n,t as r}from"./squizStoryRenderer-4zIdV6yt.js";import{r as i,t as a}from"./xss-Cvy76lHc.js";import{n as o,t as s}from"./squiz-links-CO4E1kVD.js";function c(e,t,n=l){let r=new URL(t?.ctx?.url??t?.url??`nope://nope.nope`)[n===l?n:`href`],i=t?.ctx?.assetId??t?.assetId??t??``,a=JSON.stringify({value:e,url:r,id:i}),o=2166136261;for(let e=0;e<a.length;e++)o=Math.imul(o^a.charCodeAt(e),16777619);return(o>>>0).toString(36)}var l,u=e((()=>{l=`hostname`}));function d(e,t){let n=c(e,t),{alertType:r,title:i,message:o,actionLink:l,dismissible:u}=e,d=f[r]||`info`,p=s(l),m=p?`<div class="global-alert__action">
        <a class="button button-secondary" ${p.attrs}>${a(p.text)}</a>
      </div>`:``,h=[`Session`,`Local`].includes(u)?`<button type="button" class="global-alert__dismiss" aria-label="Dismiss alert">
        <i class="fa-light fa-xmark"></i>
      </button>`:``;return`
<div class="global-alert global-alert--${d} content with-mono-links" data-cc="fullwidth background" data-global-alert-id="${n}" data-dismissible="${u}" role="region" aria-label="${a(i)}">
  <div class="global-alert__content">
    <p class="global-alert__title" data-sq-field="title">${a(i)}</p>
    <p class="global-alert__message" data-sq-field="message">${o}</p>
    ${m}
  </div>
  ${h}
</div>
`}var f,p,m=e((()=>{i(),o(),u(),f={Info:`info`,Warning:`warning`,Critical:`critical`,"Info-alt":`info-alt`},p={async main(e,t){return`${`<!-- ${JSON.stringify(e,null,2)} -->\n`}<div data-component="global-alerts">${e?.alerts?.length?`<div class="content-area">
        ${e.alerts.map(e=>d(e,t)).join(`
`)}
      </div>
    </div>`:`<!-- no alerts set -->`}`}}})),h,g,_=e((()=>{h=[{alertType:`Critical`,title:`Global alert title`,message:`This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant actionLink to provide user with or just have <a href="#">Links in the message</a>.`,actionLink:{text:`More information`,url:`https://example.com/more-information`},dismissible:`No`},{alertType:`Warning`,title:`Global alert title`,message:`This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant actionLink to provide user with or just have <a href="#">Links in the message</a>.`,actionLink:{text:`More information`,url:`https://example.com/more-information`},dismissible:`Session`},{alertType:`Info`,title:`Global alert title`,message:`This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant actionLink to provide user with or just have <a href="#">Links in the message</a>.`,actionLink:{text:`More information`,url:`https://example.com/more-information`},dismissible:`Session`},{alertType:`Info-alt`,title:`Global alert title`,message:`This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant actionLink to provide user with or just have <a href="#">Links in the message</a>.`,actionLink:{text:`More information`,url:`https://example.com/more-information`},dismissible:`Local`}],g={alerts:h}})),v,y,b,x,S,C;await e((async()=>{r(),t(),m(),_(),v=n(p.main),y={title:`dxp components/Global Alert`,parameters:{noContentArea:!0,controls:{expanded:!0,sort:`requiredFirst`}}},b=await v.markup(g),x=()=>{sessionStorage.removeItem(`global-alerts`),localStorage.removeItem(`global-alerts`)},S={render:e=>(requestAnimationFrame(()=>{x(),window.__ntgds__?.run?.(`global-alert`)}),v({alerts:[e,...g.alerts||[]]})),args:{alertType:`info-alt`,title:`Interactive Story Alert`,message:`Hello`,actionLink:{url:`#!hello`,text:`Hello`},dismissible:`NO`},argTypes:{alertType:{control:`select`,options:[`Info`,`Warning`,`Critical`,`Info-alt`]},title:{control:`text`},message:{control:`text`},actionLink:{control:`object`,description:`SquizLink object: { text, url, target? }.`},dismissible:{control:`select`,options:[`NO`,`Session`,`Local`]}},parameters:{docs:{description:{story:`Info variant, with an inline link at the end of the message.`},source:{code:b,language:`html`,type:`code`}}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    requestAnimationFrame(() => {
      resetStore();
      window.__ntgds__?.run?.('global-alert');
    });
    const input = {
      alerts: [args, ...(defaultArgs.alerts || [])]
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
}`,...S.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    requestAnimationFrame(() => {
      resetStore();
      window.__ntgds__?.run?.('global-alert');
    });
    const input = {
      alerts: [args, ...(defaultArgs.alerts || [])]
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
}`,...S.parameters?.docs?.source}}},C=[`Default`]}))();export{S as Default,C as __namedExportsOrder,y as default};
//# sourceMappingURL=global-alert.stories-BwXkHsWF.js.map