import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-D0vBjeOt.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,t as o}from"./squizInfo.mock-x2sHGyES.js";function s(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function c(e,t){let n=e?.[t];return Array.isArray(n)&&n[0]||``}function l(e){if(!e)return null;let t=e.metadata||{};return{title:e.name||``,description:c(t,`page-description`),href:e.url||``}}function u(e,t){let n=String(t??``).trim()||e?.title||``;return n?{title:n,description:e?.description||``,href:e?.href||``}:null}function d(e){let t=Number(e);return!Number.isFinite(t)||t<=0?``:`${Math.round(t/1024)} KB`}function f(e){return S[String(e??``).toLowerCase()]||C}function p(e,t){if(!e)return null;let n=e.name||``,r=e.url||``;if(!n)return null;if(t===`document`){let t=e.file_type||``,i=d(e.file_size);return{kind:`document`,title:n,href:r,fileType:t,meta:[t.toUpperCase(),i].filter(Boolean).join(` | `),iconClass:f(t)}}return t===`topics`?{kind:`child`,title:n,href:r,description:c(e.metadata,`page-description`)}:{kind:`link`,title:n,href:r}}async function ee(e,t){if(!e||typeof t?.resolveUri!=`function`)return null;try{return l(await t.resolveUri(e))}catch{return null}}async function te(e,t,n){return!Array.isArray(e)||e.length===0||typeof t?.resolveUri!=`function`?[]:(await Promise.all(e.map(async e=>{if(!e)return null;try{return p(await t.resolveUri(e),n)}catch{return null}}))).filter(Boolean)}async function ne(e,t,n){let r=await m(t,n),i=Array.isArray(e)?e:[],a=new Set;return[...i,...r].filter(e=>a.has(e)?!1:(a.add(e),!0))}async function m(e,t){let n=h(e),r=g(e);if(!n||!r||!t)return[];let i=`${t}?${w}=${encodeURIComponent(r)}`,a;try{let e=await fetch(i);if(!e.ok)return[];a=await e.json()}catch{return[]}return Array.isArray(a)?a.map(e=>e?.id).filter(Boolean).map(e=>`matrix-asset://${n}/${e}`):[]}function h(e){let t=/^matrix-asset:\/\/([a-zA-Z0-9.-]+)\/\d+(?::.+)?$/.exec(String(e??``));return t?t[1]:null}function g(e){let t=/^matrix-asset:\/\/[a-zA-Z0-9.-]+\/(\d+)(?::.+)?$/.exec(String(e??``));return t?t[1]:null}function _(e,t){if(!e)return``;let n=t.showDescription&&e.description?`<p class="topic-listing__description">${s(e.description)}</p>`:``,r=t.showActionLink&&e.href?`<a href="${s(e.href)}" class="button button-secondary topic-listing__button">Find out more</a>`:``;return`
      <div class="topic-listing__topic">
        <h2 class="topic-listing__title">${s(e.title)}</h2>
        ${n}
        ${r}
      </div>`}function v(e){return`
        <li class="topic-listing__item topic-listing__item--link">
          <span class="topic-listing__bullet" aria-hidden="true"></span>
          <a href="${s(e.href)}" class="topic-listing__link">${s(e.title)}</a>
        </li>`}function y(e,t){let n=t.showItemDescription&&e.description?`<p class="topic-listing__child-description">${s(e.description)}</p>`:``;return`
        <li class="topic-listing__item topic-listing__item--child">
          <a href="${s(e.href)}" class="topic-listing__child-title">${s(e.title)}</a>
          ${n}
        </li>`}function b(e){return`
        <li class="topic-listing__item topic-listing__item--document">
          <i class="fa-thin ${e.iconClass} topic-listing__doc-icon" aria-hidden="true"></i>
          <div class="topic-listing__doc-body">
            <a href="${s(e.href)}" class="topic-listing__doc-title">${s(e.title)}</a>
            ${e.meta?`<span class="topic-listing__doc-meta">${s(e.meta)}</span>`:``}
          </div>
        </li>`}function x(e,t){return!e||e.length===0?``:`

      <ul class="topic-listing__items">${e.map(e=>T[e.kind](e,t)).join(`
`)}
      </ul>`}var S,C,w,T,E,D=e((()=>{t(),S={pdf:`fa-file-pdf`,doc:`fa-file-word`,docx:`fa-file-word`,ppt:`fa-file-powerpoint`,pptx:`fa-file-powerpoint`,xls:`fa-file-excel`,xlsx:`fa-file-excel`},C=`fa-file`,w=`rootId`,T={document:b,child:y,link:v},E={async main(e,t){let{listMode:r=`Links`,topicSource:i=``,topicName:a=``,linkSources:o=[],parentAsset:s=``,visibilityOptions:c={}}=e||{},{showDescription:l=!0,showActionLink:d=!0,showItemDescription:f=!0}=c,p={showDescription:l,showActionLink:d,showItemDescription:f},m=t?.fns,h=[`topics`,`links`,`document`].includes(String(r).toLowerCase())?String(r).toLowerCase():`links`,g=await ne(o,s,t?.env?.CONTENT_API_URL),[v,y]=await Promise.all([ee(i,m),te(g,m,h)]),b=u(v,a);return!b&&y.length===0?``:`
<div ${n(`topic-listing`,e)}>
  <div class="topic-listing__container">
    <div class="topic-listing__content">${_(b,p)}${x(y,p)}
    </div>
  </div>
</div>
`}}}));function O({id:e,name:t,description:n}){return{id:String(e),type:`pageStandard`,name:t,url:`https://example.com/pages/${e}`,metadata:n?{"page-description":[n]}:{},child_count:0}}function k({id:e,name:t,fileType:n,fileSize:r}){return{id:String(e),type:`file`,name:t,url:`https://example.com/assets/${e}.${n}`,file_type:n,file_size:r}}function A(e){return j[e]??null}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;await e((async()=>{i(),o(),D(),j={"matrix-asset://ntg/5001":O({id:5001,name:`Topic title`,description:`A short description about the topic and what the user expect to find here.`}),"matrix-asset://ntg/5101":O({id:5101,name:`Link sample text`}),"matrix-asset://ntg/5102":O({id:5102,name:`Link sample text`}),"matrix-asset://ntg/5201":k({id:5201,name:`This is the document title`,fileType:`pdf`,fileSize:186368}),"matrix-asset://ntg/5202":k({id:5202,name:`This is the document title`,fileType:`docx`,fileSize:186368}),"matrix-asset://ntg/5203":k({id:5203,name:`This is the document title`,fileType:`pptx`,fileSize:186368}),"matrix-asset://ntg/5204":k({id:5204,name:`This is the document title`,fileType:`xlsx`,fileSize:186368}),"matrix-asset://ntg/5301":O({id:5301,name:`Child care subsidies`,description:`Find eligibility criteria, payment schedules, and how to apply.`}),"matrix-asset://ntg/5302":O({id:5302,name:`Support for carers`,description:`Access respite programs, allowances, and local support groups.`}),"matrix-asset://ntg/5303":O({id:5303,name:`Community grants`,description:`Explore funding rounds for local projects and community initiatives.`}),"matrix-asset://ntg/5304":O({id:5304,name:`Parenting resources`,description:`Guidance for early years, school readiness, and family wellbeing.`})},M=r(E.main),N=a({mock:{resolveUri:A}}),P={title:`dxp components/Topic Listing`,parameters:{layout:`padded`}},F={listMode:`Topics`,topicSource:`matrix-asset://ntg/5001`,linkSources:[`matrix-asset://ntg/5301`,`matrix-asset://ntg/5302`,`matrix-asset://ntg/5303`,`matrix-asset://ntg/5304`]},I=await M.markup(F,N),L={render:e=>M(e,N),args:F,argTypes:{listMode:{control:`select`,options:[`Topics`,`Links`,`Document`]},topicSource:{control:`text`,description:`Optional matrix-asset-uri for the main topic page. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/5001 (topic), matrix-asset://ntg/5101, matrix-asset://ntg/5102 (plain-link pages), matrix-asset://ntg/5201-5204 (documents), matrix-asset://ntg/5301-5304 (child-topic pages, each with its own description).`},topicName:{control:`text`,description:`Overrides the heading. Blank falls back to the resolved topicSource asset's name.`},linkSources:{control:`object`},parentAsset:{control:`text`,description:`Optional matrix-asset-uri for a folder/parent asset whose children are unioned into linkSources.`},visibilityOptions:{control:`object`}},parameters:{docs:{description:{story:'`listMode: "Topics"` renders every `linkSources` item as title + description (from metadata.page-description), no bullet -- distinct from the plain bulleted links in the Links story.'},source:{code:I,language:`html`,type:`code`}}}},R={listMode:`Links`,topicSource:`matrix-asset://ntg/5001`,linkSources:[`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`,`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`,`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`,`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`,`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`]},z=await M.markup(R,N),B={render:()=>M(R,N),parameters:{docs:{description:{story:'`listMode: "Links"` (the default) renders every `linkSources` item as a plain bulleted link, in a two-column grid at the `md` breakpoint and up, one column on mobile.'},source:{code:z,language:`html`,type:`code`}}}},V={listMode:`Document`,topicSource:`matrix-asset://ntg/5001`,linkSources:[`matrix-asset://ntg/5201`,`matrix-asset://ntg/5202`,`matrix-asset://ntg/5203`,`matrix-asset://ntg/5204`,`matrix-asset://ntg/5201`,`matrix-asset://ntg/5202`,`matrix-asset://ntg/5203`,`matrix-asset://ntg/5204`,`matrix-asset://ntg/5201`,`matrix-asset://ntg/5202`]},H=await M.markup(V,N),U={render:()=>M(V,N),parameters:{docs:{description:{story:'`listMode: "Document"` renders every `linkSources` item as a document item (file-type icon, bold title, format + size), in a two-column grid at the `md` breakpoint and up, one column on mobile.'},source:{code:H,language:`html`,type:`code`}}}},W={listMode:`Links`,linkSources:[`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`]},G=await M.markup(W,N),K={render:()=>M(W,N),parameters:{docs:{description:{story:"No `topicSource` and no `topicName` -- the topic block is omitted entirely, and the items list spans the full width instead of sitting in the narrow left column."},source:{code:G,language:`html`,type:`code`}}}},q={listMode:`Links`,topicSource:`matrix-asset://ntg/5001`,topicName:`A Custom Heading, Not the Page Name`,linkSources:[`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`]},J=await M.markup(q,N),Y={render:()=>M(q,N),parameters:{docs:{description:{story:'`topicName` overrides the heading text even though `topicSource` (matrix-asset://ntg/5001, named "Topic title") also resolves -- description and button still come from the resolved asset, only the title text changes.'},source:{code:J,language:`html`,type:`code`}}}},X={listMode:`Topics`,topicSource:`matrix-asset://ntg/5001`,linkSources:[`matrix-asset://ntg/5301`,`matrix-asset://ntg/5302`],visibilityOptions:{showDescription:!1,showActionLink:!1,showItemDescription:!1}},Z=await M.markup(X,N),Q={render:()=>M(X,N),parameters:{docs:{description:{story:"`visibilityOptions.showDescription`/`showActionLink`/`showItemDescription` all set to `false` -- the topic renders as a bare heading, and each Topics-mode item renders as title only, no description."},source:{code:Z,language:`html`,type:`code`}}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: topicsArgs,
  argTypes: {
    listMode: {
      control: 'select',
      options: ['Topics', 'Links', 'Document']
    },
    topicSource: {
      control: 'text',
      description: 'Optional matrix-asset-uri for the main topic page. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/5001 (topic), matrix-asset://ntg/5101, matrix-asset://ntg/5102 (plain-link pages), matrix-asset://ntg/5201-5204 (documents), matrix-asset://ntg/5301-5304 (child-topic pages, each with its own description).'
    },
    topicName: {
      control: 'text',
      description: 'Overrides the heading. Blank falls back to the resolved topicSource asset\\'s name.'
    },
    linkSources: {
      control: 'object'
    },
    parentAsset: {
      control: 'text',
      description: 'Optional matrix-asset-uri for a folder/parent asset whose children are unioned into linkSources.'
    },
    visibilityOptions: {
      control: 'object'
    }
  },
  parameters: {
    docs: {
      description: {
        story: '\`listMode: "Topics"\` renders every \`linkSources\` item as title + description (from metadata.page-description), no bullet -- distinct from the plain bulleted links in the Links story.'
      },
      source: {
        code: topicsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => squiz(linksArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: '\`listMode: "Links"\` (the default) renders every \`linkSources\` item as a plain bulleted link, in a two-column grid at the \`md\` breakpoint and up, one column on mobile.'
      },
      source: {
        code: linksHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => squiz(documentsArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: '\`listMode: "Document"\` renders every \`linkSources\` item as a document item (file-type icon, bold title, format + size), in a two-column grid at the \`md\` breakpoint and up, one column on mobile.'
      },
      source: {
        code: documentsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => squiz(noTopicArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'No \`topicSource\` and no \`topicName\` -- the topic block is omitted entirely, and the items list spans the full width instead of sitting in the narrow left column.'
      },
      source: {
        code: noTopicHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => squiz(customTopicNameArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: '\`topicName\` overrides the heading text even though \`topicSource\` (matrix-asset://ntg/5001, named "Topic title") also resolves -- description and button still come from the resolved asset, only the title text changes.'
      },
      source: {
        code: customTopicNameHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => squiz(hiddenElementsArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: '\`visibilityOptions.showDescription\`/\`showActionLink\`/\`showItemDescription\` all set to \`false\` -- the topic renders as a bare heading, and each Topics-mode item renders as title only, no description.'
      },
      source: {
        code: hiddenElementsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: topicsArgs,
  argTypes: {
    listMode: {
      control: 'select',
      options: ['Topics', 'Links', 'Document']
    },
    topicSource: {
      control: 'text',
      description: 'Optional matrix-asset-uri for the main topic page. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/5001 (topic), matrix-asset://ntg/5101, matrix-asset://ntg/5102 (plain-link pages), matrix-asset://ntg/5201-5204 (documents), matrix-asset://ntg/5301-5304 (child-topic pages, each with its own description).'
    },
    topicName: {
      control: 'text',
      description: 'Overrides the heading. Blank falls back to the resolved topicSource asset\\'s name.'
    },
    linkSources: {
      control: 'object'
    },
    parentAsset: {
      control: 'text',
      description: 'Optional matrix-asset-uri for a folder/parent asset whose children are unioned into linkSources.'
    },
    visibilityOptions: {
      control: 'object'
    }
  },
  parameters: {
    docs: {
      description: {
        story: '\`listMode: "Topics"\` renders every \`linkSources\` item as title + description (from metadata.page-description), no bullet -- distinct from the plain bulleted links in the Links story.'
      },
      source: {
        code: topicsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => squiz(linksArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: '\`listMode: "Links"\` (the default) renders every \`linkSources\` item as a plain bulleted link, in a two-column grid at the \`md\` breakpoint and up, one column on mobile.'
      },
      source: {
        code: linksHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => squiz(documentsArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: '\`listMode: "Document"\` renders every \`linkSources\` item as a document item (file-type icon, bold title, format + size), in a two-column grid at the \`md\` breakpoint and up, one column on mobile.'
      },
      source: {
        code: documentsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...U.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => squiz(noTopicArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'No \`topicSource\` and no \`topicName\` -- the topic block is omitted entirely, and the items list spans the full width instead of sitting in the narrow left column.'
      },
      source: {
        code: noTopicHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...K.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => squiz(customTopicNameArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: '\`topicName\` overrides the heading text even though \`topicSource\` (matrix-asset://ntg/5001, named "Topic title") also resolves -- description and button still come from the resolved asset, only the title text changes.'
      },
      source: {
        code: customTopicNameHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => squiz(hiddenElementsArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: '\`visibilityOptions.showDescription\`/\`showActionLink\`/\`showItemDescription\` all set to \`false\` -- the topic renders as a bare heading, and each Topics-mode item renders as title only, no description.'
      },
      source: {
        code: hiddenElementsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Topics`,`Links`,`Documents`,`NoTopic`,`CustomTopicName`,`HiddenElements`]}))();export{Y as CustomTopicName,U as Documents,Q as HiddenElements,B as Links,K as NoTopic,L as Topics,$ as __namedExportsOrder,P as default};
//# sourceMappingURL=topic-listing.stories-C_u0zZX7.js.map