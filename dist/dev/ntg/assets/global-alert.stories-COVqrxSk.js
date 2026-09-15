import{n as e}from"./chunk-BVpWp9h4.js";import{a as t}from"./directive-helpers-DXeJie5u.js";import{n,t as r}from"./squizStoryRenderer-4zIdV6yt.js";import{r as i,t as a}from"./xss-Cvy76lHc.js";import{n as o,t as s}from"./squiz-links-CO4E1kVD.js";function c(e,t,n=l){let r=new URL(t?.ctx?.url??t?.url??`nope://nope.nope`)[n===l?n:`href`],i=t?.ctx?.assetId??t?.assetId??``,a=JSON.stringify({value:e,url:r,id:i}),o=2166136261;for(let e=0;e<a.length;e++)o=Math.imul(o^a.charCodeAt(e),16777619);return(o>>>0).toString(36)}var l,u=e((()=>{l=`hostname`}));function d(e,t){let n=c(e,t),{alertType:r,message:i,actions:o,dismissible:l}=e,u=f[r]||`info`,d=l.startsWith(`Session`)?`session`:l.startsWith(`Local`)?`local`:null,p=o.map(s).map(e=>`<a class="button button-secondary button-sm" ${e.attrs}>${a(e.text)}</a>`),m=o.length?`<div class="global-alert__action">${p.join(``)}</div>`:``,h=d?`<button type="button" class="global-alert__dismiss" aria-label="Dismiss alert">
        <i class="fa-light fa-xmark"></i>
      </button>`:``;return`
  <div class="global-alert global-alert--${u} content ${u===`info-alt`?``:`with-mono-links`}" data-cc="fullwidth background" data-global-alert-id="${n}" ${d?`data-dismissible="${d}"`:``} role="region">
    <div class="global-alert__content">
      ${i}
      ${m}
    </div>
    ${h}
  </div>
  `}var f,p,m=e((()=>{i(),o(),u(),f={Info:`info`,Warning:`warning`,Critical:`critical`,"Info-alt":`info-alt`},p={async main(e,t){return`<div data-component="global-alerts">${e?.alerts?.length?`<div class="content-area">
            ${e.alerts.map(e=>d(e,t)).join(`
`)}
          </div>
        </div>`:`<!-- no alerts set -->`}`}}})),h,g,_=e((()=>{h=[{alertType:`Critical`,message:`<h2>Global alert title</h2> <p>This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant actions to provide user with or just have <a href="#">Links in the message</a>.</p>`,actions:[{text:`More information`,url:`#`}],dismissible:`No`},{alertType:`Warning`,message:`<h2>Global alert title</h2> <p>This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant actions to provide user with or just have <a href="#">Links in the message</a>.</p>`,actions:[{text:`More information`,url:`#`}],dismissible:`Session: until new browser restarts`},{alertType:`Info`,message:`<h2>Global alert title</h2> <p>This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant actions to provide user with or just have <a href="#">Links in the message</a>.</p>`,actions:[{text:`More information`,url:`#`},{text:`More information`,url:`#`}],dismissible:`Session: until new browser restarts`},{alertType:`Info-alt`,message:`<h2>Global alert title</h2> <p>This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant actions to provide user with or just have <a href="#">Links in the message</a>.</p>`,actions:[{text:`More information`,url:`#`}],dismissible:`Local: semi-permanent, until user clears data`}],g={alerts:h}})),v,y,b,x,S,C;await e((async()=>{r(),t(),m(),_(),v=n(p.main),y={title:`dxp components/Global Alert`,parameters:{noContentArea:!0,controls:{expanded:!0,sort:`requiredFirst`}}},b=await v.markup(g),x=()=>{sessionStorage.removeItem(`global-alerts`),localStorage.removeItem(`global-alerts`)},S={render:e=>(requestAnimationFrame(()=>{x(),window.__ntgds__?.run?.(`global-alerts`)}),v({alerts:[{...e,actions:[e.actions]},...g.alerts||[]]})),args:{alertType:`info-alt`,message:`Hello`,actions:{url:`#!hello`,text:`Hello`},dismissible:`NO`},argTypes:{alertType:{control:`select`,options:[`Info`,`Warning`,`Critical`,`Info-alt`]},message:{control:`text`},actions:{control:`object`,description:`SquizLink object: { text, url, target? }.`},dismissible:{control:`select`,options:[`NO`,`Session`,`Local`]}},parameters:{docs:{description:{story:`Info variant, with an inline link at the end of the message.`},source:{code:b,language:`html`,type:`code`}}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    requestAnimationFrame(() => {
      resetStore();
      window.__ntgds__?.run?.('global-alerts');
    });
    const input = {
      alerts: [{
        ...args,
        actions: [args.actions]
      }, ...(defaultArgs.alerts || [])]
    };
    return squiz(input);
  },
  args: {
    alertType: 'info-alt',
    message: 'Hello',
    actions: {
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
    message: {
      control: "text"
    },
    actions: {
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
      window.__ntgds__?.run?.('global-alerts');
    });
    const input = {
      alerts: [{
        ...args,
        actions: [args.actions]
      }, ...(defaultArgs.alerts || [])]
    };
    return squiz(input);
  },
  args: {
    alertType: 'info-alt',
    message: 'Hello',
    actions: {
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
    message: {
      control: "text"
    },
    actions: {
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
//# sourceMappingURL=global-alert.stories-COVqrxSk.js.map