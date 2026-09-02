import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-D0vBjeOt.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,r as o,t as s}from"./xss-Cvy76lHc.js";function c(e){if(!e)return null;let t=String(e),n=t.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{6,})/);if(n)return{platform:`youtube`,embedUrl:`https://www.youtube.com/embed/${n[1]}`,title:`YouTube video player`};let r=t.match(/vimeo\.com\/(?:video\/)?(\d+)/);return r?{platform:`vimeo`,embedUrl:`https://player.vimeo.com/video/${r[1]}`,title:`Vimeo video player`}:null}var l,u,d=e((()=>{o(),t(),l=new Set([`Top`,`Bottom`,`Left`,`Right`]),u={async main(e={}){let{videoUrl:t=``,includeText:r=`No`,textPosition:i=`Right`,heading:o=``,body:u=``}=e,d=l.has(i)?i:`Right`,f=c(t),p=f?`<iframe class="video-embed__iframe" src="${a(f.embedUrl)}" title="${s(f.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<div class="video-embed__unavailable">
        <p class="video-embed__unavailable-title">Video unavailable</p>
        <p class="video-embed__unavailable-message">Enter a valid YouTube or Vimeo link.</p>
      </div>`,m=r===`Yes`&&(o||u)?`<div class="video-embed__text">
        ${o?`<h3 class="video-embed__heading" data-sq-field="heading">${s(o)}</h3>`:``}
        ${u?`<div class="video-embed__body" data-sq-field="body">${u}</div>`:``}
      </div>`:``;return`
<div ${n(`video-embed`,e)} data-text-position="${s(d)}">
  <div class="video-embed__media">
    ${p}
  </div>
  ${m}
</div>
`}}})),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;await e((async()=>{i(),d(),f=r(u.main),p={title:`dxp components/Video Embed`},m={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Top`,heading:`Text top`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},h=await f.markup(m),g={render:e=>f(e),args:m,argTypes:{videoUrl:{control:`text`,description:`YouTube watch link or Vimeo link.`},includeText:{control:`radio`,options:[`Yes`,`No`]},textPosition:{control:`radio`,options:[`Top`,`Bottom`,`Left`,`Right`]},heading:{control:`text`},body:{control:`text`,description:`Raw HTML (FormattedText).`}},parameters:{docs:{source:{code:h,language:`html`,type:`code`}}}},_={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Right`,heading:`Text right`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},v=await f.markup(_),y={render:()=>f(_),parameters:{docs:{source:{code:v,language:`html`,type:`code`}}}},b={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Left`,heading:`Text left`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},x=await f.markup(b),S={render:()=>f(b),parameters:{docs:{source:{code:x,language:`html`,type:`code`}}}},C={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Bottom`,heading:`Text bottom`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},w=await f.markup(C),T={render:()=>f(C),parameters:{docs:{source:{code:w,language:`html`,type:`code`}}}},E={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`No`},D=await f.markup(E),O={render:()=>f(E),parameters:{docs:{description:{story:`Include text set to No -- just the video, no heading/body.`},source:{code:D,language:`html`,type:`code`}}}},k={videoUrl:`https://vimeo.com/106097009`,includeText:`Yes`,textPosition:`Right`,heading:`Vimeo example`,body:`<p>This example uses a Vimeo link instead of YouTube.</p>`},A=await f.markup(k),j={render:()=>f(k),parameters:{docs:{source:{code:A,language:`html`,type:`code`}}}},M={videoUrl:`https://example.com/not-a-video`,includeText:`Yes`,textPosition:`Right`,heading:`Text right`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},N=await f.markup(M),P={render:()=>f(M),parameters:{docs:{description:{story:`A videoUrl that is not a recognized YouTube or Vimeo link falls back to a graceful "Video unavailable" message instead of a broken iframe.`},source:{code:N,language:`html`,type:`code`}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: textTopArgs,
  argTypes: {
    videoUrl: {
      control: 'text',
      description: 'YouTube watch link or Vimeo link.'
    },
    includeText: {
      control: 'radio',
      options: ['Yes', 'No']
    },
    textPosition: {
      control: 'radio',
      options: ['Top', 'Bottom', 'Left', 'Right']
    },
    heading: {
      control: 'text'
    },
    body: {
      control: 'text',
      description: 'Raw HTML (FormattedText).'
    }
  },
  parameters: {
    docs: {
      source: {
        code: textTopHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => squiz(textRightArgs),
  parameters: {
    docs: {
      source: {
        code: textRightHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => squiz(textLeftArgs),
  parameters: {
    docs: {
      source: {
        code: textLeftHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => squiz(textBottomArgs),
  parameters: {
    docs: {
      source: {
        code: textBottomHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => squiz(videoOnlyArgs),
  parameters: {
    docs: {
      description: {
        story: 'Include text set to No -- just the video, no heading/body.'
      },
      source: {
        code: videoOnlyHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => squiz(vimeoArgs),
  parameters: {
    docs: {
      source: {
        code: vimeoHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unavailableArgs),
  parameters: {
    docs: {
      description: {
        story: 'A videoUrl that is not a recognized YouTube or Vimeo link falls back to a graceful "Video unavailable" message instead of a broken iframe.'
      },
      source: {
        code: unavailableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...P.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: textTopArgs,
  argTypes: {
    videoUrl: {
      control: 'text',
      description: 'YouTube watch link or Vimeo link.'
    },
    includeText: {
      control: 'radio',
      options: ['Yes', 'No']
    },
    textPosition: {
      control: 'radio',
      options: ['Top', 'Bottom', 'Left', 'Right']
    },
    heading: {
      control: 'text'
    },
    body: {
      control: 'text',
      description: 'Raw HTML (FormattedText).'
    }
  },
  parameters: {
    docs: {
      source: {
        code: textTopHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => squiz(textRightArgs),
  parameters: {
    docs: {
      source: {
        code: textRightHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => squiz(textLeftArgs),
  parameters: {
    docs: {
      source: {
        code: textLeftHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => squiz(textBottomArgs),
  parameters: {
    docs: {
      source: {
        code: textBottomHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => squiz(videoOnlyArgs),
  parameters: {
    docs: {
      description: {
        story: 'Include text set to No -- just the video, no heading/body.'
      },
      source: {
        code: videoOnlyHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => squiz(vimeoArgs),
  parameters: {
    docs: {
      source: {
        code: vimeoHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unavailableArgs),
  parameters: {
    docs: {
      description: {
        story: 'A videoUrl that is not a recognized YouTube or Vimeo link falls back to a graceful "Video unavailable" message instead of a broken iframe.'
      },
      source: {
        code: unavailableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...P.parameters?.docs?.source}}},F=[`TextTop`,`TextRight`,`TextLeft`,`TextBottom`,`VideoOnly`,`Vimeo`,`Unavailable`]}))();export{T as TextBottom,S as TextLeft,y as TextRight,g as TextTop,P as Unavailable,O as VideoOnly,j as Vimeo,F as __namedExportsOrder,p as default};
//# sourceMappingURL=video-embed.stories-Bw29iRE4.js.map