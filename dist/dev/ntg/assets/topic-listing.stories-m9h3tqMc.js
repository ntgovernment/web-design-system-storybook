import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-D0vBjeOt.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,t as o}from"./squizInfo.mock-x2sHGyES.js";function s(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function c(e,t){let n=e?.[t];return Array.isArray(n)&&n[0]||``}function l(e){if(!e)return null;let t=e.metadata||{};return{title:e.name||``,description:c(t,`page-description`),href:e.url||``}}function u(e){let t=Number(e);return!Number.isFinite(t)||t<=0?``:`${Math.round(t/1024)} KB`}function d(e){return b[String(e??``).toLowerCase()]||x}function f(e,t){if(!e)return null;let n=e.name||``,r=e.url||``;if(!n)return null;if(t===`document`){let t=e.file_type||``,i=u(e.file_size);return{kind:`document`,title:n,href:r,fileType:t,meta:[t.toUpperCase(),i].filter(Boolean).join(` | `),iconClass:d(t)}}return t===`topics`?{kind:`child`,title:n,href:r,description:c(e.metadata,`page-description`)}:{kind:`link`,title:n,href:r}}async function p(e,t){if(!e||typeof t?.resolveUri!=`function`)return null;try{return l(await t.resolveUri(e))}catch{return null}}async function m(e,t,n){return!Array.isArray(e)||e.length===0||typeof t?.resolveUri!=`function`?[]:(await Promise.all(e.map(async e=>{if(!e)return null;try{return f(await t.resolveUri(e),n)}catch{return null}}))).filter(Boolean)}function h(e){if(!e)return``;let t=e.description?`<p class="topic-listing__description">${s(e.description)}</p>`:``,n=e.href?`<a href="${s(e.href)}" class="button button-secondary topic-listing__button">Find out more</a>`:``;return`
      <div class="topic-listing__topic">
        <h2 class="topic-listing__title">${s(e.title)}</h2>
        ${t}
        ${n}
      </div>`}function g(e){return`
        <li class="topic-listing__item topic-listing__item--link">
          <span class="topic-listing__bullet" aria-hidden="true"></span>
          <a href="${s(e.href)}" class="topic-listing__link">${s(e.title)}</a>
        </li>`}function _(e){return`
        <li class="topic-listing__item topic-listing__item--child">
          <a href="${s(e.href)}" class="topic-listing__child-title">${s(e.title)}</a>
          <p class="topic-listing__child-description">${s(e.description)}</p>
        </li>`}function v(e){return`
        <li class="topic-listing__item topic-listing__item--document">
          <i class="fa-thin ${e.iconClass} topic-listing__doc-icon" aria-hidden="true"></i>
          <div class="topic-listing__doc-body">
            <a href="${s(e.href)}" class="topic-listing__doc-title">${s(e.title)}</a>
            ${e.meta?`<span class="topic-listing__doc-meta">${s(e.meta)}</span>`:``}
          </div>
        </li>`}function y(e){return!e||e.length===0?``:`

      <ul class="topic-listing__items">${e.map(e=>S[e.kind](e)).join(`
`)}
      </ul>`}var b,x,S,C,w=e((()=>{t(),b={pdf:`fa-file-pdf`,doc:`fa-file-word`,docx:`fa-file-word`,ppt:`fa-file-powerpoint`,pptx:`fa-file-powerpoint`,xls:`fa-file-excel`,xlsx:`fa-file-excel`},x=`fa-file`,S={document:v,child:_,link:g},C={async main(e,t){let{listMode:r=`Links`,topicSource:i=``,linkSources:a=[]}=e||{},o=t?.fns,s=[`topics`,`links`,`document`].includes(String(r).toLowerCase())?String(r).toLowerCase():`links`,[c,l]=await Promise.all([p(i,o),m(a,o,s)]);return c?`
<div ${n(`topic-listing`,e)}>
  <div class="topic-listing__container">
    <div class="topic-listing__content">${h(c)}${y(l)}
    </div>
  </div>
</div>
`:``}}}));function T({id:e,name:t,description:n}){return{id:String(e),type:`pageStandard`,name:t,url:`https://example.com/pages/${e}`,metadata:n?{"page-description":[n]}:{},child_count:0}}function E({id:e,name:t,fileType:n,fileSize:r}){return{id:String(e),type:`file`,name:t,url:`https://example.com/assets/${e}.${n}`,file_type:n,file_size:r}}function D(e){return O[e]??null}var O,k,A,j,M,N,P,F,I,L,R,z,B,V;await e((async()=>{i(),o(),w(),O={"matrix-asset://ntg/5001":T({id:5001,name:`Topic title`,description:`A short description about the topic and what the user expect to find here.`}),"matrix-asset://ntg/5101":T({id:5101,name:`Link sample text`}),"matrix-asset://ntg/5102":T({id:5102,name:`Link sample text`}),"matrix-asset://ntg/5201":E({id:5201,name:`This is the document title`,fileType:`pdf`,fileSize:186368}),"matrix-asset://ntg/5202":E({id:5202,name:`This is the document title`,fileType:`docx`,fileSize:186368}),"matrix-asset://ntg/5203":E({id:5203,name:`This is the document title`,fileType:`pptx`,fileSize:186368}),"matrix-asset://ntg/5204":E({id:5204,name:`This is the document title`,fileType:`xlsx`,fileSize:186368}),"matrix-asset://ntg/5301":T({id:5301,name:`Child care subsidies`,description:`Find eligibility criteria, payment schedules, and how to apply.`}),"matrix-asset://ntg/5302":T({id:5302,name:`Support for carers`,description:`Access respite programs, allowances, and local support groups.`}),"matrix-asset://ntg/5303":T({id:5303,name:`Community grants`,description:`Explore funding rounds for local projects and community initiatives.`}),"matrix-asset://ntg/5304":T({id:5304,name:`Parenting resources`,description:`Guidance for early years, school readiness, and family wellbeing.`})},k=r(C.main),A=a({mock:{resolveUri:D}}),j={title:`dxp components/Topic Listing`,parameters:{layout:`padded`}},M={listMode:`Topics`,topicSource:`matrix-asset://ntg/5001`,linkSources:[`matrix-asset://ntg/5301`,`matrix-asset://ntg/5302`,`matrix-asset://ntg/5303`,`matrix-asset://ntg/5304`]},N=await k.markup(M,A),P={render:e=>k(e,A),args:M,argTypes:{listMode:{control:`select`,options:[`Topics`,`Links`,`Document`]},topicSource:{control:`text`,description:`matrix-asset-uri for the main topic page. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/5001 (topic), matrix-asset://ntg/5101, matrix-asset://ntg/5102 (plain-link pages), matrix-asset://ntg/5201-5204 (documents), matrix-asset://ntg/5301-5304 (child-topic pages, each with its own description).`},linkSources:{control:`object`}},parameters:{docs:{description:{story:'`listMode: "Topics"` renders every `linkSources` item as title + description (from metadata.page-description), no bullet -- distinct from the plain bulleted links in the Links story.'},source:{code:N,language:`html`,type:`code`}}}},F={listMode:`Links`,topicSource:`matrix-asset://ntg/5001`,linkSources:[`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`,`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`,`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`,`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`,`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`]},I=await k.markup(F,A),L={render:()=>k(F,A),parameters:{docs:{description:{story:'`listMode: "Links"` (the default) renders every `linkSources` item as a plain bulleted link, in a two-column grid at the `md` breakpoint and up, one column on mobile.'},source:{code:I,language:`html`,type:`code`}}}},R={listMode:`Document`,topicSource:`matrix-asset://ntg/5001`,linkSources:[`matrix-asset://ntg/5201`,`matrix-asset://ntg/5202`,`matrix-asset://ntg/5203`,`matrix-asset://ntg/5204`,`matrix-asset://ntg/5201`,`matrix-asset://ntg/5202`,`matrix-asset://ntg/5203`,`matrix-asset://ntg/5204`,`matrix-asset://ntg/5201`,`matrix-asset://ntg/5202`]},z=await k.markup(R,A),B={render:()=>k(R,A),parameters:{docs:{description:{story:'`listMode: "Document"` renders every `linkSources` item as a document item (file-type icon, bold title, format + size), in a two-column grid at the `md` breakpoint and up, one column on mobile.'},source:{code:z,language:`html`,type:`code`}}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: topicsArgs,
  argTypes: {
    listMode: {
      control: 'select',
      options: ['Topics', 'Links', 'Document']
    },
    topicSource: {
      control: 'text',
      description: 'matrix-asset-uri for the main topic page. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/5001 (topic), matrix-asset://ntg/5101, matrix-asset://ntg/5102 (plain-link pages), matrix-asset://ntg/5201-5204 (documents), matrix-asset://ntg/5301-5304 (child-topic pages, each with its own description).'
    },
    linkSources: {
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: topicsArgs,
  argTypes: {
    listMode: {
      control: 'select',
      options: ['Topics', 'Links', 'Document']
    },
    topicSource: {
      control: 'text',
      description: 'matrix-asset-uri for the main topic page. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/5001 (topic), matrix-asset://ntg/5101, matrix-asset://ntg/5102 (plain-link pages), matrix-asset://ntg/5201-5204 (documents), matrix-asset://ntg/5301-5304 (child-topic pages, each with its own description).'
    },
    linkSources: {
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
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`Topics`,`Links`,`Documents`]}))();export{B as Documents,L as Links,P as Topics,V as __namedExportsOrder,j as default};
//# sourceMappingURL=topic-listing.stories-m9h3tqMc.js.map