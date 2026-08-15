import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-4zIdV6yt.js";import{n as r,r as i,t as a}from"./xss-Cvy76lHc.js";function o(e){if(!e)return null;let t=String(e),n=t.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{6,})/);if(n)return{platform:`youtube`,embedUrl:`https://www.youtube.com/embed/${n[1]}`,title:`YouTube video player`};let r=t.match(/vimeo\.com\/(?:video\/)?(\d+)/);return r?{platform:`vimeo`,embedUrl:`https://player.vimeo.com/video/${r[1]}`,title:`Vimeo video player`}:null}var s,c,l=e((()=>{i(),s=new Set([`Top`,`Bottom`,`Left`,`Right`]),c={async main(e={}){let{videoUrl:t=``,includeText:n=`No`,textPosition:i=`Right`,heading:c=``,body:l=``}=e,u=s.has(i)?i:`Right`,d=o(t),f=d?`<iframe class="video-embed__iframe" src="${r(d.embedUrl)}" title="${a(d.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<div class="video-embed__unavailable">
        <p class="video-embed__unavailable-title">Video unavailable</p>
        <p class="video-embed__unavailable-message">Enter a valid YouTube or Vimeo link.</p>
      </div>`,p=n===`Yes`&&(c||l)?`<div class="video-embed__text">
        ${c?`<h3 class="video-embed__heading" data-sq-field="heading">${a(c)}</h3>`:``}
        ${l?`<div class="video-embed__body" data-sq-field="body">${l}</div>`:``}
      </div>`:``;return`
<div class="video-embed" data-text-position="${a(u)}">
  <div class="video-embed__media">
    ${f}
  </div>
  ${p}
</div>
`}}})),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;await e((async()=>{n(),l(),u=t(c.main),d={title:`dxp/Video Embed`},f={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Top`,heading:`Text top`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},p=await u.markup(f),m={render:e=>u(e),args:f,argTypes:{videoUrl:{control:`text`,description:`YouTube watch link or Vimeo link.`},includeText:{control:`radio`,options:[`Yes`,`No`]},textPosition:{control:`radio`,options:[`Top`,`Bottom`,`Left`,`Right`]},heading:{control:`text`},body:{control:`text`,description:`Raw HTML (FormattedText).`}},parameters:{docs:{source:{code:p,language:`html`,type:`code`}}}},h={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Right`,heading:`Text right`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},g=await u.markup(h),_={render:()=>u(h),parameters:{docs:{source:{code:g,language:`html`,type:`code`}}}},v={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Left`,heading:`Text left`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},y=await u.markup(v),b={render:()=>u(v),parameters:{docs:{source:{code:y,language:`html`,type:`code`}}}},x={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Bottom`,heading:`Text bottom`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},S=await u.markup(x),C={render:()=>u(x),parameters:{docs:{source:{code:S,language:`html`,type:`code`}}}},w={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`No`},T=await u.markup(w),E={render:()=>u(w),parameters:{docs:{description:{story:`Include text set to No -- just the video, no heading/body.`},source:{code:T,language:`html`,type:`code`}}}},D={videoUrl:`https://vimeo.com/106097009`,includeText:`Yes`,textPosition:`Right`,heading:`Vimeo example`,body:`<p>This example uses a Vimeo link instead of YouTube.</p>`},O=await u.markup(D),k={render:()=>u(D),parameters:{docs:{source:{code:O,language:`html`,type:`code`}}}},A={videoUrl:`https://example.com/not-a-video`,includeText:`Yes`,textPosition:`Right`,heading:`Text right`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},j=await u.markup(A),M={render:()=>u(A),parameters:{docs:{description:{story:`A videoUrl that is not a recognized YouTube or Vimeo link falls back to a graceful "Video unavailable" message instead of a broken iframe.`},source:{code:j,language:`html`,type:`code`}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N=[`TextTop`,`TextRight`,`TextLeft`,`TextBottom`,`VideoOnly`,`Vimeo`,`Unavailable`]}))();export{C as TextBottom,b as TextLeft,_ as TextRight,m as TextTop,M as Unavailable,E as VideoOnly,k as Vimeo,N as __namedExportsOrder,d as default};
//# sourceMappingURL=video-embed.stories-COJb9zHA.js.map