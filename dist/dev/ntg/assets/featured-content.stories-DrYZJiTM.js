import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-CkXZPIWM.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";import{n as c,t as l}from"./squizInfo.mock-x2sHGyES.js";function u(e){return!e||typeof e!=`object`?null:`data`in e?e.data??null:e}async function d(e,t){if(!e||typeof t?.resolveUri!=`function`)return null;try{return u(await t.resolveUri(e))}catch{return null}}function f(e){if(!e)return null;let t=e.imageVariations?.original||{};if(t.url)return{url:t.url,alt:e.alt||e.name||``};let n=e.url||(Array.isArray(e.urls)?e.urls[0]:``)||``;return n?{url:n,alt:e.alt||e.name||``}:null}var p,m,h,g,_,v=e((()=>{o(),t(),p=`<svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,m=`Read more`,h=new Set([`Left`,`Right`]),g=new Set([`White`,`Gray`]),_={async main(e={},t={}){let{image:r=``,imagePosition:i=`Right`,background:o=`White`,border:c=!0,linkAsset:l=``,body:u=``}=e,_=h.has(i)?i:`Right`,v=g.has(o)?o:`White`,[y,b]=await Promise.all([d(r,t.fns),d(l,t.fns)]),x=f(y),S=b?.name||``,C=b?.url||``,w=x?`<img class="featured-content__image" src="${a(x.url)}" alt="${s(x.alt)}" loading="lazy" />`:``,T=u?`<div class="featured-content__body" data-sq-field="body">${u}</div>`:``,E=C?`<a class="featured-content__link" href="${a(C)}">${s(m)} <span class="featured-content__link-icon">${p}</span></a>`:``;return`
<div ${n(`featured-content`,e)} data-position="${s(_)}" data-background="${s(v)}" data-border="${c?`true`:`false`}">
  <div class="featured-content__media">
    ${w}
  </div>
  <div class="featured-content__text">
    ${S?`<h2 class="featured-content__title">${s(S)}</h2>`:``}
    ${T}
    ${E}
  </div>
</div>
`}}}));function y({id:e,name:t,url:n,alt:r}){let i={id:String(e),type:`image`,name:t,alt:r,url:n,urls:[n],imageVariations:{original:{url:n,width:900,height:700}}};return x[String(e)]=i,i}function b({id:e,name:t,url:n}){let r={id:String(e),type:`pageStandard`,name:t,url:n};return x[String(e)]=r,r}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;await e((async()=>{i(),l(),v(),x={},y({id:5001,name:`Placeholder image`,url:`https://picsum.photos/id/1039/900/700`,alt:`Placeholder image`}),b({id:5002,name:`Sample page title`,url:`https://example.com/sample-page`}),S=c({mock:{resolveUri(e){return{ok:!0,data:x[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null}}}}),C=r(_.main),w=`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.</p><p>Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>`,T={title:`dxp components/Featured Content`,parameters:{layout:`padded`}},E={image:`matrix-asset://ntg/5001`,imagePosition:`Right`,background:`White`,border:!0,linkAsset:`matrix-asset://ntg/5002`,body:w},D=await C.markup(E,S),O={render:e=>C(e,S),args:E,argTypes:{image:{control:`text`,description:`matrix-asset-uri. Only matrix-asset://ntg/5001 resolves in this Storybook preview (mocked).`},imagePosition:{control:`radio`,options:[`Left`,`Right`]},background:{control:`radio`,options:[`White`,`Gray`]},border:{control:`boolean`},linkAsset:{control:`text`,description:`matrix-asset-uri. Only matrix-asset://ntg/5002 resolves in this Storybook preview (mocked). Its name becomes the H2 heading and its url becomes the "Read more" link.`},body:{control:`text`,description:`Raw HTML (FormattedText).`}},parameters:{docs:{source:{code:D,language:`html`,type:`code`}}}},k={...E,imagePosition:`Left`},A=await C.markup(k,S),j={render:()=>C(k,S),parameters:{docs:{description:{story:`imagePosition is "Left" -- image and text swap sides.`},source:{code:A,language:`html`,type:`code`}}}},M={...E,background:`Gray`},N=await C.markup(M,S),P={render:()=>C(M,S),parameters:{docs:{description:{story:`background is "Gray".`},source:{code:N,language:`html`,type:`code`}}}},F={...E,border:!1},I=await C.markup(F,S),L={render:()=>C(F,S),parameters:{docs:{description:{story:`border is false -- no border around the card.`},source:{code:I,language:`html`,type:`code`}}}},R={image:`matrix-asset://ntg/9999999`,linkAsset:`matrix-asset://ntg/9999998`,body:w},z=await C.markup(R,S),B={render:()=>C(R,S),parameters:{docs:{description:{story:`Neither image nor linkAsset resolve -- no image, no heading, no "Read more" link, but body text still renders.`},source:{code:z,language:`html`,type:`code`}}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`Default`,`ImageLeft`,`GrayBackground`,`NoBorder`,`Unresolvable`]}))();export{O as Default,P as GrayBackground,j as ImageLeft,L as NoBorder,B as Unresolvable,V as __namedExportsOrder,T as default};
//# sourceMappingURL=featured-content.stories-DrYZJiTM.js.map