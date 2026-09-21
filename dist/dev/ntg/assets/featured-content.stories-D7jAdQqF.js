import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-D0vBjeOt.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";import{n as c,t as l}from"./squizInfo.mock-D4VTpLG1.js";async function u(e,t){if(!e)return null;try{let n=await t?.resolveUri?.(e);return n&&`data`in n?n.data:n??null}catch{return null}}function d(e){if(!e)return null;let t=e.imageVariations?.original||{};if(t.url)return{url:t.url,alt:e.alt||e.name||``};let n=e.url||(Array.isArray(e.urls)?e.urls[0]:``)||``;return n?{url:n,alt:e.alt||e.name||``}:null}function f(e,t){let n=p(e,`button featured-content__button`),r=p(t,`button button-secondary featured-content__button`);return!n&&!r?``:`<div class="featured-content__actions">${n}${r}</div>`}function p(e,t){let n=e?.text||``,{url:r,target:i}=e?.link||{};if(!n||!r)return``;let o=i&&i!==`_self`?` target="${s(i)}" rel="noopener noreferrer"`:``;return`<a class="${t}" href="${a(r)}"${o}>${s(n)}</a>`}var m,h,g,_=e((()=>{o(),t(),m=new Set([`Left`,`Right`]),h=new Set([`White`,`Gray`]),g={async main(e={},t={}){let{image:r=``,imagePosition:i=`Right`,background:o=`White`,border:c=!0,title:l=``,body:p=``,primaryButton:g={},secondaryButton:_={}}=e,v=m.has(i)?i:`Right`,y=h.has(o)?o:`White`,b=d(await u(r,t.fns)),x=b?`<img class="featured-content__image" src="${a(b.url)}" alt="${s(b.alt)}" loading="lazy" />`:``,S=p?`<div class="featured-content__body" data-sq-field="body">${p}</div>`:``,C=f(g,_);return`
<div ${n(`featured-content`,e)} data-position="${s(v)}" data-background="${s(y)}" data-border="${c?`true`:`false`}">
  <div class="featured-content__media">
    ${x}
  </div>
  <div class="featured-content__text">
    ${l?`<h2 class="featured-content__title" data-sq-field="title">${s(l)}</h2>`:``}
    ${S}
    ${C}
  </div>
</div>
`}}}));function v({id:e,name:t,url:n,alt:r}){let i={id:String(e),type:`image`,name:t,alt:r,url:n,urls:[n],imageVariations:{original:{url:n,width:900,height:700}}};return y[String(e)]=i,i}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;await e((async()=>{i(),l(),_(),y={},v({id:5001,name:`Placeholder image`,url:`https://picsum.photos/id/1039/900/700`,alt:`Placeholder image`}),b=c({mock:{resolveUri(e){return{ok:!0,data:y[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null}}}}),x=c({mock:{resolveUri(e){return y[/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)/.exec(String(e??``))?.[1]]??null}}}),S=r(g.main),C=`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.</p><p>Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>`,w={title:`dxp components/Featured Content`,parameters:{layout:`padded`}},T={image:`matrix-asset://ntg/5001`,imagePosition:`Right`,background:`White`,border:!0,title:`Example event title`,body:C,primaryButton:{text:`Read more`,link:{url:`https://example.com/example-event`}},secondaryButton:{text:`Register for this event`,link:{url:`https://example.com/example-event/register`}}},E=await S.markup(T,b),D={render:e=>S(e,b),args:T,argTypes:{image:{control:`text`,description:`matrix-asset-uri. Only matrix-asset://ntg/5001 resolves in this Storybook preview (mocked).`},imagePosition:{control:`radio`,options:[`Left`,`Right`]},background:{control:`radio`,options:[`White`,`Gray`]},border:{control:`boolean`},title:{control:`text`},body:{control:`text`,description:`Raw HTML (FormattedText).`},primaryButton:{control:`object`,description:"SquizLink object under `link`: { text, url, target? }. Button only renders once both `text` and `link` are set."},secondaryButton:{control:`object`,description:`Same shape as primaryButton. Blank by default -- only renders once an editor fills it in.`}},parameters:{docs:{source:{code:E,language:`html`,type:`code`}}}},O={...T,imagePosition:`Left`},k=await S.markup(O,x),A={render:()=>S(O,x),parameters:{docs:{description:{story:`imagePosition is "Left" -- image and text swap sides.`},source:{code:k,language:`html`,type:`code`}}}},j={...T,background:`Gray`},M=await S.markup(j,b),N={render:()=>S(j,b),parameters:{docs:{description:{story:`background is "Gray".`},source:{code:M,language:`html`,type:`code`}}}},P={...T,border:!1},F=await S.markup(P,b),I={render:()=>S(P,b),parameters:{docs:{description:{story:`border is false -- no border around the card.`},source:{code:F,language:`html`,type:`code`}}}},L={...T,secondaryButton:{text:``,link:null}},R=await S.markup(L,b),z={render:()=>S(L,b),parameters:{docs:{description:{story:`secondaryButton is left blank (the default) -- only the primary button renders.`},source:{code:R,language:`html`,type:`code`}}}},B={image:`matrix-asset://ntg/9999999`,title:`Example event title`,body:C,primaryButton:{text:``,link:null},secondaryButton:{text:``,link:null}},V=await S.markup(B,b),H={render:()=>S(B,b),parameters:{docs:{description:{story:`image doesn't resolve and both buttons are blank -- no image, no buttons, but title/body text still render.`},source:{code:V,language:`html`,type:`code`}}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => squiz(imageLeftArgs, mockInfoBare),
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
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => squiz(imageLeftArgs, mockInfoBare),
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
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`Default`,`ImageLeft`,`GrayBackground`,`NoBorder`,`PrimaryButtonOnly`,`Unresolvable`]}))();export{D as Default,N as GrayBackground,A as ImageLeft,I as NoBorder,z as PrimaryButtonOnly,H as Unresolvable,U as __namedExportsOrder,w as default};
//# sourceMappingURL=featured-content.stories-D7jAdQqF.js.map