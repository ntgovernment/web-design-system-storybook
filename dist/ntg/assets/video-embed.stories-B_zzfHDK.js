import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-mGPdhelI.js";function r(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function i(e){if(!e)return null;let t=String(e),n=t.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{6,})/);if(n)return{platform:`youtube`,embedUrl:`https://www.youtube.com/embed/${n[1]}`,title:`YouTube video player`};let r=t.match(/vimeo\.com\/(?:video\/)?(\d+)/);return r?{platform:`vimeo`,embedUrl:`https://player.vimeo.com/video/${r[1]}`,title:`Vimeo video player`}:null}var a,o,s=e((()=>{a=new Set([`Top`,`Bottom`,`Left`,`Right`]),o={async main(e={}){let{videoUrl:t=``,includeText:n=`No`,textPosition:o=`Right`,heading:s=``,body:c=``}=e,l=a.has(o)?o:`Right`,u=i(t),d=u?`<iframe class="video-embed__iframe" src="${r(u.embedUrl)}" title="${r(u.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<div class="video-embed__unavailable">
        <p class="video-embed__unavailable-title">Video unavailable</p>
        <p class="video-embed__unavailable-message">Enter a valid YouTube or Vimeo link.</p>
      </div>`,f=n===`Yes`&&(s||c)?`<div class="video-embed__text">
        ${s?`<h3 class="video-embed__heading" data-sq-field="heading">${r(s)}</h3>`:``}
        ${c?`<div class="video-embed__body" data-sq-field="body">${c}</div>`:``}
      </div>`:``;return`
<div class="video-embed" data-text-position="${r(l)}">
  <div class="video-embed__media">
    ${d}
  </div>
  ${f}
</div>
`}}})),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;await e((async()=>{n(),s(),c=t(o.main),l={title:`dxp/Video Embed`},u={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Top`,heading:`Text top`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},d=await c.markup(u),f={render:e=>c(e),args:u,argTypes:{videoUrl:{control:`text`,description:`YouTube watch link or Vimeo link.`},includeText:{control:`radio`,options:[`Yes`,`No`]},textPosition:{control:`radio`,options:[`Top`,`Bottom`,`Left`,`Right`]},heading:{control:`text`},body:{control:`text`,description:`Raw HTML (FormattedText).`}},parameters:{docs:{source:{code:d,language:`html`,type:`code`}}}},p={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Right`,heading:`Text right`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},m=await c.markup(p),h={render:()=>c(p),parameters:{docs:{source:{code:m,language:`html`,type:`code`}}}},g={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Left`,heading:`Text left`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},_=await c.markup(g),v={render:()=>c(g),parameters:{docs:{source:{code:_,language:`html`,type:`code`}}}},y={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Bottom`,heading:`Text bottom`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},b=await c.markup(y),x={render:()=>c(y),parameters:{docs:{source:{code:b,language:`html`,type:`code`}}}},S={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`No`},C=await c.markup(S),w={render:()=>c(S),parameters:{docs:{description:{story:`Include text set to No -- just the video, no heading/body.`},source:{code:C,language:`html`,type:`code`}}}},T={videoUrl:`https://vimeo.com/106097009`,includeText:`Yes`,textPosition:`Right`,heading:`Vimeo example`,body:`<p>This example uses a Vimeo link instead of YouTube.</p>`},E=await c.markup(T),D={render:()=>c(T),parameters:{docs:{source:{code:E,language:`html`,type:`code`}}}},O={videoUrl:`https://example.com/not-a-video`,includeText:`Yes`,textPosition:`Right`,heading:`Text right`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},k=await c.markup(O),A={render:()=>c(O),parameters:{docs:{description:{story:`A videoUrl that is not a recognized YouTube or Vimeo link falls back to a graceful "Video unavailable" message instead of a broken iframe.`},source:{code:k,language:`html`,type:`code`}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`TextTop`,`TextRight`,`TextLeft`,`TextBottom`,`VideoOnly`,`Vimeo`,`Unavailable`]}))();export{x as TextBottom,v as TextLeft,h as TextRight,f as TextTop,A as Unavailable,w as VideoOnly,D as Vimeo,j as __namedExportsOrder,l as default};
//# sourceMappingURL=video-embed.stories-B_zzfHDK.js.map