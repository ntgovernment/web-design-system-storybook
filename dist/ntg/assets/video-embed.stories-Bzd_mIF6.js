import{n as e}from"./chunk-BVpWp9h4.js";import{t}from"./video-embed-DvSb6XMU.js";import{n,t as r}from"./squizStoryRenderer-DSARXh3x.js";function i(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function a(e){if(!e)return null;let t=String(e),n=t.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{6,})/);if(n)return{platform:`youtube`,embedUrl:`https://www.youtube.com/embed/${n[1]}`,title:`YouTube video player`};let r=t.match(/vimeo\.com\/(?:video\/)?(\d+)/);return r?{platform:`vimeo`,embedUrl:`https://player.vimeo.com/video/${r[1]}`,title:`Vimeo video player`}:null}var o,s,c=e((()=>{o=new Set([`Top`,`Bottom`,`Left`,`Right`]),s={async main(e={}){let{videoUrl:t=``,includeText:n=`No`,textPosition:r=`Right`,heading:s=``,body:c=``}=e,l=o.has(r)?r:`Right`,u=a(t),d=u?`<iframe class="video-embed__iframe" src="${i(u.embedUrl)}" title="${i(u.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<div class="video-embed__unavailable">
        <p class="video-embed__unavailable-title">Video unavailable</p>
        <p class="video-embed__unavailable-message">Enter a valid YouTube or Vimeo link.</p>
      </div>`,f=n===`Yes`&&(s||c)?`<div class="video-embed__text">
        ${s?`<h3 class="video-embed__heading">${i(s)}</h3>`:``}
        ${c?`<div class="video-embed__body">${c}</div>`:``}
      </div>`:``;return`
<div class="video-embed" data-text-position="${i(l)}">
  <div class="video-embed__media">
    ${d}
  </div>
  ${f}
</div>
`}}})),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;await e((async()=>{r(),t(),c(),l=n(s.main),u={title:`dxp/Video Embed`},d={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Top`,heading:`Text top`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},f=await s.main(d),p={render:e=>l(e),args:d,argTypes:{videoUrl:{control:`text`,description:`YouTube watch link or Vimeo link.`},includeText:{control:`radio`,options:[`Yes`,`No`]},textPosition:{control:`radio`,options:[`Top`,`Bottom`,`Left`,`Right`]},heading:{control:`text`},body:{control:`text`,description:`Raw HTML (FormattedText).`}},parameters:{docs:{source:{code:f,language:`html`,type:`code`}}}},m={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Right`,heading:`Text right`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},h=await s.main(m),g={render:()=>l(m),parameters:{docs:{source:{code:h,language:`html`,type:`code`}}}},_={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Left`,heading:`Text left`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},v=await s.main(_),y={render:()=>l(_),parameters:{docs:{source:{code:v,language:`html`,type:`code`}}}},b={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`Yes`,textPosition:`Bottom`,heading:`Text bottom`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},x=await s.main(b),S={render:()=>l(b),parameters:{docs:{source:{code:x,language:`html`,type:`code`}}}},C={videoUrl:`https://www.youtube.com/watch?v=I0UdJDZnMhs`,includeText:`No`},w=await s.main(C),T={render:()=>l(C),parameters:{docs:{description:{story:`Include text set to No -- just the video, no heading/body.`},source:{code:w,language:`html`,type:`code`}}}},E={videoUrl:`https://vimeo.com/106097009`,includeText:`Yes`,textPosition:`Right`,heading:`Vimeo example`,body:`<p>This example uses a Vimeo link instead of YouTube.</p>`},D=await s.main(E),O={render:()=>l(E),parameters:{docs:{source:{code:D,language:`html`,type:`code`}}}},k={videoUrl:`https://example.com/not-a-video`,includeText:`Yes`,textPosition:`Right`,heading:`Text right`,body:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien id lectus suscipit scelerisque.</p>`},A=await s.main(k),j={render:()=>l(k),parameters:{docs:{description:{story:`A videoUrl that is not a recognized YouTube or Vimeo link falls back to a graceful "Video unavailable" message instead of a broken iframe.`},source:{code:A,language:`html`,type:`code`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`TextTop`,`TextRight`,`TextLeft`,`TextBottom`,`VideoOnly`,`Vimeo`,`Unavailable`]}))();export{S as TextBottom,y as TextLeft,g as TextRight,p as TextTop,j as Unavailable,T as VideoOnly,O as Vimeo,M as __namedExportsOrder,u as default};