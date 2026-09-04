import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-D0vBjeOt.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";import{n as c,t as l}from"./squizInfo.mock-D4VTpLG1.js";async function u(e,t){if(!e||typeof t?.resolveUri!=`function`)return null;try{return d(await t.resolveUri(e))}catch{return null}}function d(e){return!e||typeof e!=`object`?null:`data`in e?e.data??null:e}function f(e){if(!e)return null;let t=e.imageVariations?.original||{};if(t.url)return{url:t.url,alt:e.alt||e.name||``};let n=e.url||(Array.isArray(e.urls)?e.urls[0]:``)||``;return n?{url:n,alt:e.alt||e.name||``}:null}function p(e,t){let n=m(e,`button featured-content__button`),r=m(t,`button button-secondary featured-content__button`);return!n&&!r?``:`<div class="featured-content__actions">${n}${r}</div>`}function m(e,t){let n=e?.text||``,r=h(e?.link);return!n||!r?``:`<a class="${t}" href="${a(r.url)}"${g(r.target)}>${s(n)}</a>`}function h(e){return e?typeof e==`string`?{url:e,target:`_self`}:typeof e==`object`&&e.url?{url:e.url,target:e.target||`_self`}:null:null}function g(e){return e&&e!==`_self`?` target="${s(e)}" rel="noopener noreferrer"`:``}var _,v,y,b=e((()=>{o(),t(),_=new Set([`Left`,`Right`]),v=new Set([`White`,`Gray`]),y={async main(e={},t={}){let{image:r=``,imagePosition:i=`Right`,background:o=`White`,border:c=!0,title:l=``,body:d=``,primaryButton:m={},secondaryButton:h={}}=e,g=_.has(i)?i:`Right`,y=v.has(o)?o:`White`,b=f(await u(r,t.fns)),x=b?`<img class="featured-content__image" src="${a(b.url)}" alt="${s(b.alt)}" loading="lazy" />`:``,S=d?`<div class="featured-content__body" data-sq-field="body">${d}</div>`:``,C=p(m,h);return`
<div ${n(`featured-content`,e)} data-position="${s(g)}" data-background="${s(y)}" data-border="${c?`true`:`false`}">
  <div class="featured-content__media">
    ${x}
  </div>
  <div class="featured-content__text">
    ${l?`<h2 class="featured-content__title" data-sq-field="title">${s(l)}</h2>`:``}
    ${S}
    ${C}
  </div>
</div>
`}}}));function x({id:e,name:t,url:n,alt:r}){let i={id:String(e),type:`image`,name:t,alt:r,url:n,urls:[n],imageVariations:{original:{url:n,width:900,height:700}}};return S[String(e)]=i,i}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;await e((async()=>{i(),l(),b(),S={},x({id:5001,name:`Placeholder image`,url:`https://picsum.photos/id/1039/900/700`,alt:`Placeholder image`}),C=c({mock:{resolveUri(e){return{ok:!0,data:S[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null}}}}),w=r(y.main),T=`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.</p><p>Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>`,E={title:`dxp components/Featured Content`,parameters:{layout:`padded`}},D={image:`matrix-asset://ntg/5001`,imagePosition:`Right`,background:`White`,border:!0,title:`Example event title`,body:T,primaryButton:{text:`Read more`,link:{url:`https://example.com/example-event`}},secondaryButton:{text:`Register for this event`,link:{url:`https://example.com/example-event/register`}}},O=await w.markup(D,C),k={render:e=>w(e,C),args:D,argTypes:{image:{control:`text`,description:`matrix-asset-uri. Only matrix-asset://ntg/5001 resolves in this Storybook preview (mocked).`},imagePosition:{control:`radio`,options:[`Left`,`Right`]},background:{control:`radio`,options:[`White`,`Gray`]},border:{control:`boolean`},title:{control:`text`},body:{control:`text`,description:`Raw HTML (FormattedText).`},primaryButton:{control:`object`,description:"SquizLink object under `link`: { text, url, target? }. Button only renders once both `text` and `link` are set."},secondaryButton:{control:`object`,description:`Same shape as primaryButton. Blank by default -- only renders once an editor fills it in.`}},parameters:{docs:{source:{code:O,language:`html`,type:`code`}}}},A={...D,imagePosition:`Left`},j=await w.markup(A,C),M={render:()=>w(A,C),parameters:{docs:{description:{story:`imagePosition is "Left" -- image and text swap sides.`},source:{code:j,language:`html`,type:`code`}}}},N={...D,background:`Gray`},P=await w.markup(N,C),F={render:()=>w(N,C),parameters:{docs:{description:{story:`background is "Gray".`},source:{code:P,language:`html`,type:`code`}}}},I={...D,border:!1},L=await w.markup(I,C),R={render:()=>w(I,C),parameters:{docs:{description:{story:`border is false -- no border around the card.`},source:{code:L,language:`html`,type:`code`}}}},z={...D,secondaryButton:{text:``,link:null}},B=await w.markup(z,C),V={render:()=>w(z,C),parameters:{docs:{description:{story:`secondaryButton is left blank (the default) -- only the primary button renders.`},source:{code:B,language:`html`,type:`code`}}}},H={image:`matrix-asset://ntg/9999999`,title:`Example event title`,body:T,primaryButton:{text:``,link:null},secondaryButton:{text:``,link:null}},U=await w.markup(H,C),W={render:()=>w(H,C),parameters:{docs:{description:{story:`image doesn't resolve and both buttons are blank -- no image, no buttons, but title/body text still render.`},source:{code:U,language:`html`,type:`code`}}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
    title: {
      control: 'text'
    },
    body: {
      control: 'text',
      description: 'Raw HTML (FormattedText).'
    },
    primaryButton: {
      control: 'object',
      description: 'SquizLink object under \`link\`: { text, url, target? }. Button only renders once both \`text\` and \`link\` are set.'
    },
    secondaryButton: {
      control: 'object',
      description: 'Same shape as primaryButton. Blank by default -- only renders once an editor fills it in.'
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
}`,...k.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => squiz(primaryOnlyArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'secondaryButton is left blank (the default) -- only the primary button renders.'
      },
      source: {
        code: primaryOnlyHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'image doesn\\'t resolve and both buttons are blank -- no image, no buttons, but title/body text still render.'
      },
      source: {
        code: unresolvableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
    title: {
      control: 'text'
    },
    body: {
      control: 'text',
      description: 'Raw HTML (FormattedText).'
    },
    primaryButton: {
      control: 'object',
      description: 'SquizLink object under \`link\`: { text, url, target? }. Button only renders once both \`text\` and \`link\` are set.'
    },
    secondaryButton: {
      control: 'object',
      description: 'Same shape as primaryButton. Blank by default -- only renders once an editor fills it in.'
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
}`,...k.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => squiz(primaryOnlyArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'secondaryButton is left blank (the default) -- only the primary button renders.'
      },
      source: {
        code: primaryOnlyHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'image doesn\\'t resolve and both buttons are blank -- no image, no buttons, but title/body text still render.'
      },
      source: {
        code: unresolvableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...W.parameters?.docs?.source}}},G=[`Default`,`ImageLeft`,`GrayBackground`,`NoBorder`,`PrimaryButtonOnly`,`Unresolvable`]}))();export{k as Default,F as GrayBackground,M as ImageLeft,R as NoBorder,V as PrimaryButtonOnly,W as Unresolvable,G as __namedExportsOrder,E as default};
//# sourceMappingURL=featured-content.stories-C92wDVwP.js.map