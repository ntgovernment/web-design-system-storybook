import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-4zIdV6yt.js";import{n as r,r as i,t as a}from"./xss-Cvy76lHc.js";import{n as o,t as s}from"./squizInfo.mock-x2sHGyES.js";function c(e){return!e||typeof e!=`object`?null:`data`in e?e.data??null:e}async function l(e,t){if(!e||typeof t?.resolveUri!=`function`)return null;try{return c(await t.resolveUri(e))}catch{return null}}function u(e){if(!e)return null;let t=e.imageVariations?.original||{};if(t.url)return{url:t.url,alt:e.alt||e.name||``};let n=e.url||(Array.isArray(e.urls)?e.urls[0]:``)||``;return n?{url:n,alt:e.alt||e.name||``}:null}var d,f,p,m,h,g=e((()=>{i(),d=`<svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,f=`Read more`,p=new Set([`Left`,`Right`]),m=new Set([`White`,`Gray`]),h={async main(e={},t={}){let{image:n=``,imagePosition:i=`Right`,background:o=`White`,border:s=!0,linkAsset:c=``,body:h=``}=e,g=p.has(i)?i:`Right`,_=m.has(o)?o:`White`,[v,y]=await Promise.all([l(n,t.fns),l(c,t.fns)]),b=u(v),x=y?.name||``,S=y?.url||``,C=b?`<img class="featured-content__image" src="${r(b.url)}" alt="${a(b.alt)}" loading="lazy" />`:``,w=h?`<div class="featured-content__body" data-sq-field="body">${h}</div>`:``,T=S?`<a class="featured-content__link" href="${r(S)}">${a(f)} <span class="featured-content__link-icon">${d}</span></a>`:``;return`
<div class="featured-content" data-position="${a(g)}" data-background="${a(_)}" data-border="${s?`true`:`false`}">
  <div class="featured-content__media">
    ${C}
  </div>
  <div class="featured-content__text">
    ${x?`<h2 class="featured-content__title">${a(x)}</h2>`:``}
    ${w}
    ${T}
  </div>
</div>
`}}}));function _({id:e,name:t,url:n,alt:r}){let i={id:String(e),type:`image`,name:t,alt:r,url:n,urls:[n],imageVariations:{original:{url:n,width:900,height:700}}};return y[String(e)]=i,i}function v({id:e,name:t,url:n}){let r={id:String(e),type:`pageStandard`,name:t,url:n};return y[String(e)]=r,r}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;await e((async()=>{n(),s(),g(),y={},_({id:5001,name:`Placeholder image`,url:`https://picsum.photos/id/1039/900/700`,alt:`Placeholder image`}),v({id:5002,name:`Sample page title`,url:`https://example.com/sample-page`}),b=o({mock:{resolveUri(e){return{ok:!0,data:y[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null}}}}),x=t(h.main),S=`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.</p><p>Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>`,C={title:`dxp/Featured Content`,parameters:{layout:`padded`}},w={image:`matrix-asset://ntg/5001`,imagePosition:`Right`,background:`White`,border:!0,linkAsset:`matrix-asset://ntg/5002`,body:S},T=await x.markup(w,b),E={render:e=>x(e,b),args:w,argTypes:{image:{control:`text`,description:`matrix-asset-uri. Only matrix-asset://ntg/5001 resolves in this Storybook preview (mocked).`},imagePosition:{control:`radio`,options:[`Left`,`Right`]},background:{control:`radio`,options:[`White`,`Gray`]},border:{control:`boolean`},linkAsset:{control:`text`,description:`matrix-asset-uri. Only matrix-asset://ntg/5002 resolves in this Storybook preview (mocked). Its name becomes the H2 heading and its url becomes the "Read more" link.`},body:{control:`text`,description:`Raw HTML (FormattedText).`}},parameters:{docs:{source:{code:T,language:`html`,type:`code`}}}},D={...w,imagePosition:`Left`},O=await x.markup(D,b),k={render:()=>x(D,b),parameters:{docs:{description:{story:`imagePosition is "Left" -- image and text swap sides.`},source:{code:O,language:`html`,type:`code`}}}},A={...w,background:`Gray`},j=await x.markup(A,b),M={render:()=>x(A,b),parameters:{docs:{description:{story:`background is "Gray".`},source:{code:j,language:`html`,type:`code`}}}},N={...w,border:!1},P=await x.markup(N,b),F={render:()=>x(N,b),parameters:{docs:{description:{story:`border is false -- no border around the card.`},source:{code:P,language:`html`,type:`code`}}}},I={image:`matrix-asset://ntg/9999999`,linkAsset:`matrix-asset://ntg/9999998`,body:S},L=await x.markup(I,b),R={render:()=>x(I,b),parameters:{docs:{description:{story:`Neither image nor linkAsset resolve -- no image, no heading, no "Read more" link, but body text still renders.`},source:{code:L,language:`html`,type:`code`}}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: defaultArgs,
  argTypes: {
    image: {
      control: 'text',
      description: 'matrix-asset-uri. Only matrix-asset://ntg/5001 resolves in this Storybook preview (mocked).'
    },
    imagePosition: {
      control: 'radio',
      options: ['Left', 'Right']
    },
    background: {
      control: 'radio',
      options: ['White', 'Gray']
    },
    border: {
      control: 'boolean'
    },
    linkAsset: {
      control: 'text',
      description: 'matrix-asset-uri. Only matrix-asset://ntg/5002 resolves in this Storybook preview (mocked). Its name becomes the H2 heading and its url becomes the "Read more" link.'
    },
    body: {
      control: 'text',
      description: 'Raw HTML (FormattedText).'
    }
  },
  parameters: {
    docs: {
      source: {
        code: defaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => squiz(imageLeftArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'imagePosition is "Left" -- image and text swap sides.'
      },
      source: {
        code: imageLeftHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => squiz(grayBackgroundArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'background is "Gray".'
      },
      source: {
        code: grayBackgroundHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => squiz(noBorderArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'border is false -- no border around the card.'
      },
      source: {
        code: noBorderHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'Neither image nor linkAsset resolve -- no image, no heading, no "Read more" link, but body text still renders.'
      },
      source: {
        code: unresolvableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: defaultArgs,
  argTypes: {
    image: {
      control: 'text',
      description: 'matrix-asset-uri. Only matrix-asset://ntg/5001 resolves in this Storybook preview (mocked).'
    },
    imagePosition: {
      control: 'radio',
      options: ['Left', 'Right']
    },
    background: {
      control: 'radio',
      options: ['White', 'Gray']
    },
    border: {
      control: 'boolean'
    },
    linkAsset: {
      control: 'text',
      description: 'matrix-asset-uri. Only matrix-asset://ntg/5002 resolves in this Storybook preview (mocked). Its name becomes the H2 heading and its url becomes the "Read more" link.'
    },
    body: {
      control: 'text',
      description: 'Raw HTML (FormattedText).'
    }
  },
  parameters: {
    docs: {
      source: {
        code: defaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => squiz(imageLeftArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'imagePosition is "Left" -- image and text swap sides.'
      },
      source: {
        code: imageLeftHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => squiz(grayBackgroundArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'background is "Gray".'
      },
      source: {
        code: grayBackgroundHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => squiz(noBorderArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'border is false -- no border around the card.'
      },
      source: {
        code: noBorderHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'Neither image nor linkAsset resolve -- no image, no heading, no "Read more" link, but body text still renders.'
      },
      source: {
        code: unresolvableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...R.parameters?.docs?.source}}},z=[`Default`,`ImageLeft`,`GrayBackground`,`NoBorder`,`Unresolvable`]}))();export{E as Default,M as GrayBackground,k as ImageLeft,F as NoBorder,R as Unresolvable,z as __namedExportsOrder,C as default};
//# sourceMappingURL=featured-content.stories-k376cESm.js.map