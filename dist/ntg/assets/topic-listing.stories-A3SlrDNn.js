import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-mGPdhelI.js";import{n as r,t as i}from"./squizInfo.mock-x2sHGyES.js";function a(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function o(e,t){let n=e?.[t];return Array.isArray(n)&&n[0]||``}function s(e){if(!e)return null;let t=e.metadata||{};return{title:e.name||``,description:o(t,`Description`),href:e.url||``}}function c(e){return String(e?.type??e?.type_name??e?.type_code??``).toLowerCase().includes(`file`)||!!e?.file_type}function l(e){let t=Number(e);return!Number.isFinite(t)||t<=0?``:`${Math.round(t/1024)} KB`}function u(e){return y[String(e??``).toLowerCase()]||b}function d(e){if(!e)return null;let t=e.name||``,n=e.url||``;if(!t)return null;if(c(e)){let r=e.file_type||``,i=l(e.file_size);return{kind:`document`,title:t,href:n,fileType:r,meta:[r.toUpperCase(),i].filter(Boolean).join(` | `),iconClass:u(r)}}let r=o(e.metadata,`Description`);return r?{kind:`child`,title:t,href:n,description:r}:{kind:`link`,title:t,href:n}}async function f(e,t){if(!e||typeof t?.resolveUri!=`function`)return null;try{return s(await t.resolveUri(e))}catch{return null}}async function p(e,t){return!Array.isArray(e)||e.length===0||typeof t?.resolveUri!=`function`?[]:(await Promise.all(e.map(async e=>{if(!e)return null;try{return d(await t.resolveUri(e))}catch{return null}}))).filter(Boolean)}function m(e){if(!e)return``;let t=e.description?`<p class="topic-listing__description">${a(e.description)}</p>`:``,n=e.href?`<a href="${a(e.href)}" class="button button-secondary topic-listing__button">Find out more</a>`:``;return`
      <div class="topic-listing__topic">
        <h2 class="topic-listing__title">${a(e.title)}</h2>
        ${t}
        ${n}
      </div>`}function h(e){return`
        <li class="topic-listing__item topic-listing__item--link">
          <span class="topic-listing__bullet" aria-hidden="true"></span>
          <a href="${a(e.href)}" class="topic-listing__link">${a(e.title)}</a>
        </li>`}function g(e){return`
        <li class="topic-listing__item topic-listing__item--child">
          <a href="${a(e.href)}" class="topic-listing__child-title">${a(e.title)}</a>
          <p class="topic-listing__child-description">${a(e.description)}</p>
        </li>`}function _(e){return`
        <li class="topic-listing__item topic-listing__item--document">
          <i class="fa-thin ${e.iconClass} topic-listing__doc-icon" aria-hidden="true"></i>
          <div class="topic-listing__doc-body">
            <a href="${a(e.href)}" class="topic-listing__doc-title">${a(e.title)}</a>
            ${e.meta?`<span class="topic-listing__doc-meta">${a(e.meta)}</span>`:``}
          </div>
        </li>`}function v(e){return!e||e.length===0?``:`

      <ul class="topic-listing__items">${e.map(e=>x[e.kind](e)).join(`
`)}
      </ul>`}var y,b,x,S,C=e((()=>{y={pdf:`fa-file-pdf`,doc:`fa-file-word`,docx:`fa-file-word`,ppt:`fa-file-powerpoint`,pptx:`fa-file-powerpoint`,xls:`fa-file-excel`,xlsx:`fa-file-excel`},b=`fa-file`,x={document:_,child:g,link:h},S={async main(e,t){let{topicSource:n=``,linkSources:r=[]}=e||{},i=t?.fns,[a,o]=await Promise.all([f(n,i),p(r,i)]);return a?`
<div class="topic-listing">
  <div class="topic-listing__container">
    <div class="topic-listing__content">${m(a)}${v(o)}
    </div>
  </div>
</div>
`:``}}}));function w({id:e,name:t,description:n}){return{id:String(e),type:`pageStandard`,name:t,url:`https://example.com/pages/${e}`,metadata:n?{Description:[n]}:{},child_count:0}}function T({id:e,name:t,fileType:n,fileSize:r}){return{id:String(e),type:`file`,name:t,url:`https://example.com/assets/${e}.${n}`,file_type:n,file_size:r}}function E(e){return D[e]??null}var D,O,k,A,j,M,N,P,F,I,L,R,z,B;await e((async()=>{n(),i(),C(),D={"matrix-asset://ntg/5001":w({id:5001,name:`Topic title`,description:`A short description about the topic and what the user expect to find here.`}),"matrix-asset://ntg/5101":w({id:5101,name:`Link sample text`}),"matrix-asset://ntg/5102":w({id:5102,name:`Link sample text`}),"matrix-asset://ntg/5201":T({id:5201,name:`This is the document title`,fileType:`pdf`,fileSize:186368}),"matrix-asset://ntg/5202":T({id:5202,name:`This is the document title`,fileType:`docx`,fileSize:186368}),"matrix-asset://ntg/5203":T({id:5203,name:`This is the document title`,fileType:`pptx`,fileSize:186368}),"matrix-asset://ntg/5204":T({id:5204,name:`This is the document title`,fileType:`xlsx`,fileSize:186368}),"matrix-asset://ntg/5301":w({id:5301,name:`Child care subsidies`,description:`Find eligibility criteria, payment schedules, and how to apply.`}),"matrix-asset://ntg/5302":w({id:5302,name:`Support for carers`,description:`Access respite programs, allowances, and local support groups.`}),"matrix-asset://ntg/5303":w({id:5303,name:`Community grants`,description:`Explore funding rounds for local projects and community initiatives.`}),"matrix-asset://ntg/5304":w({id:5304,name:`Parenting resources`,description:`Guidance for early years, school readiness, and family wellbeing.`})},O=t(S.main),k=r({mock:{resolveUri:E}}),A={title:`dxp/Topic Listing`,parameters:{layout:`padded`}},j={topicSource:`matrix-asset://ntg/5001`,linkSources:[`matrix-asset://ntg/5301`,`matrix-asset://ntg/5302`,`matrix-asset://ntg/5303`,`matrix-asset://ntg/5304`]},M=await O.markup(j,k),N={render:e=>O(e,k),args:j,argTypes:{topicSource:{control:`text`,description:`matrix-asset-uri for the main topic page. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/5001 (topic), matrix-asset://ntg/5101, matrix-asset://ntg/5102 (plain-link pages), matrix-asset://ntg/5201-5204 (documents), matrix-asset://ntg/5301-5304 (child-topic pages, each with its own description).`},linkSources:{control:`object`}},parameters:{docs:{description:{story:"`linkSources` resolves to pages that each have their own metadata.Description -- these render as child-topic items (title + description, no bullet), distinct from the plain bulleted links in the Links story."},source:{code:M,language:`html`,type:`code`}}}},P={topicSource:`matrix-asset://ntg/5001`,linkSources:[`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`,`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`,`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`,`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`,`matrix-asset://ntg/5101`,`matrix-asset://ntg/5102`]},F=await O.markup(P,k),I={render:()=>O(P,k),parameters:{docs:{description:{story:"Every `linkSources` entry resolves to a page -- each renders as a plain bulleted link, in a two-column grid at the `md` breakpoint and up, one column on mobile."},source:{code:F,language:`html`,type:`code`}}}},L={topicSource:`matrix-asset://ntg/5001`,linkSources:[`matrix-asset://ntg/5201`,`matrix-asset://ntg/5202`,`matrix-asset://ntg/5203`,`matrix-asset://ntg/5204`,`matrix-asset://ntg/5201`,`matrix-asset://ntg/5202`,`matrix-asset://ntg/5203`,`matrix-asset://ntg/5204`,`matrix-asset://ntg/5201`,`matrix-asset://ntg/5202`]},R=await O.markup(L,k),z={render:()=>O(L,k),parameters:{docs:{description:{story:"Every `linkSources` entry resolves to a file -- each renders as a document item (file-type icon, bold title, format + size), in a two-column grid at the `md` breakpoint and up, one column on mobile."},source:{code:R,language:`html`,type:`code`}}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: topicsArgs,
  argTypes: {
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
        story: '\`linkSources\` resolves to pages that each have their own metadata.Description -- these render as child-topic items (title + description, no bullet), distinct from the plain bulleted links in the Links story.'
      },
      source: {
        code: topicsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => squiz(linksArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'Every \`linkSources\` entry resolves to a page -- each renders as a plain bulleted link, in a two-column grid at the \`md\` breakpoint and up, one column on mobile.'
      },
      source: {
        code: linksHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...I.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => squiz(documentsArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'Every \`linkSources\` entry resolves to a file -- each renders as a document item (file-type icon, bold title, format + size), in a two-column grid at the \`md\` breakpoint and up, one column on mobile.'
      },
      source: {
        code: documentsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: topicsArgs,
  argTypes: {
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
        story: '\`linkSources\` resolves to pages that each have their own metadata.Description -- these render as child-topic items (title + description, no bullet), distinct from the plain bulleted links in the Links story.'
      },
      source: {
        code: topicsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => squiz(linksArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'Every \`linkSources\` entry resolves to a page -- each renders as a plain bulleted link, in a two-column grid at the \`md\` breakpoint and up, one column on mobile.'
      },
      source: {
        code: linksHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...I.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => squiz(documentsArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'Every \`linkSources\` entry resolves to a file -- each renders as a document item (file-type icon, bold title, format + size), in a two-column grid at the \`md\` breakpoint and up, one column on mobile.'
      },
      source: {
        code: documentsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B=[`Topics`,`Links`,`Documents`]}))();export{z as Documents,I as Links,N as Topics,B as __namedExportsOrder,A as default};
//# sourceMappingURL=topic-listing.stories-A3SlrDNn.js.map