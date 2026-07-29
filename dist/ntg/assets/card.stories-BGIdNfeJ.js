import{n as e}from"./chunk-BVpWp9h4.js";import{t}from"./card-DCcP7Xt5.js";import{n,t as r}from"./squizStoryRenderer-mGPdhelI.js";import{n as i,t as a}from"./squizInfo.mock-x2sHGyES.js";function o(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function s(e){if(!e)return null;let t=e.url||(Array.isArray(e.urls)?e.urls[0]:``)||``;return t?{url:t,alt:e.alt||e.name||``,width:e.width||null,height:e.height||null}:null}async function c(e,t){if(!e||typeof t?.resolveMatrixAssetById!=`function`)return null;let n;try{n=await t.resolveMatrixAssetById(e,[`url`,`urls`,`name`,`alt`,`witdh`,`height`])}catch(e){return console.error(e),null}return s(n.data)}function l(e,t){let n=e?.[t];return Array.isArray(n)&&n[0]||``}async function u(e,t){if(!e)return null;let n=e.metadata||{},r=l(n,`Image`);return{title:e.name||``,description:l(n,`Description`),image:await c(r,t),date:l(n,`Date`),tagLabel:l(n,`Category`),href:e.url||``,actionText:h}}function d(e){return Array.isArray(e?.include_dependents)}async function f(e,t){return!Array.isArray(e)||e.length===0||typeof t?.resolveUri!=`function`?[]:(await Promise.all(e.map(async e=>{if(!e)return[];let n;try{n=await t.resolveUri(e)}catch{return[]}if(!n)return[];if(d(n))return(await Promise.all(n.include_dependents.map(e=>u(e,t)))).filter(Boolean);let r=await u(n,t);return r?[r]:[]}))).flat()}function p(e){let t=e.image,n=`card-title-${Math.random().toString(36).slice(2,9)}`,r=t?`
    <div class="card__image">
      <img src="${o(t.url)}" alt="${o(t.alt)}"${t.width?` width="${t.width}"`:``}${t.height?` height="${t.height}"`:``} />
    </div>`:``,i=e.tagLabel||e.date?`
      <div class="card__header">
        ${e.tagLabel?`<span class="card__tag">${o(e.tagLabel)}</span>`:``}
        ${e.date?`<span class="card__date">${o(e.date)}</span>`:``}
      </div>`:``,a=e.description?`<p class="card__description">${o(e.description)}</p>`:``,s=e.actionText?`
      <div class="card__footer">
        <span class="card__action">${o(e.actionText)} <span class="card__action-icon">${m}</span></span>
      </div>`:``,c=`${r}
    <div class="card__content">${i}
      <div class="card__body">
        <h3 class="card__title" id="${n}">${o(e.title)}</h3>
        ${a}
      </div>${s}
    </div>`;return e.href?`<a class="card" href="${o(e.href)}" aria-labelledby="${n}">${c}</a>`:`<article class="card">${c}</article>`}var m,h,g,_=e((()=>{m=`<svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true" focusable="false"><path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,h=`Find out more`,g={async main(e={},t={}){e.debug&&delete t.debug;let{pageSources:n=[]}=e;return`
<div class="card-grid">
  ${(await f(n,t.fns)).map(p).join(``)}
</div>
`}}}));function v({id:e,name:t,category:n,date:r,description:i,mockImage:a}){let o={Category:[n],Date:[r],Description:[i]},s;if(a){let n=`https://picsum.photos/id/${e}/640/480`;s=y+e,b[s]={url:n,urls:[`https://picsum.photos/id/${e}/640/480`],alt:`${t} thumbnail`},o.Image=[s]}return{id:String(e),type:`pageStandard`,name:t,url:`https://example.com/pages/${e}`,thumbnail:s?b[s]:null,metadata:o,child_count:0}}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;await e((async()=>{r(),a(),t(),_(),y=`mock-img-`,b={},x={"matrix-asset://ntg/1001":v({mockImage:!0,id:1015,name:`Community Consultation Opens for Major Project`,category:`News`,date:`17 Feb 2025`,description:`Residents invited to provide feedback on proposed infrastructure improvements in the greater Darwin area.`}),"matrix-asset://ntg/2001":{id:`2001`,type:`folder`,name:`News section`,url:`https://example.com/news`,child_count:3,include_dependents:[v({mockImage:!0,id:1016,name:`Annual Territory Day Celebrations`,category:`Event`,date:`15 Dec 2025`,description:`Join us for fireworks, live music, and family activities at Mindil Beach.`}),v({mockImage:!0,id:1018,name:`Understanding Territory Heritage Programs`,category:`News`,date:`28 Nov 2025`,description:`Explore how the NT Government is preserving indigenous heritage sites.`}),v({mockImage:!0,id:1019,name:`Road Closures This Weekend`,category:`Alert`,date:`3 Dec 2025`,description:`Temporary closures on the Stuart Highway for scheduled maintenance work.`})]},"matrix-asset://ntg/3001":{id:`3001`,type:`folder`,name:`Empty section`,url:`https://example.com/empty`,child_count:0,include_dependents:[]}},S=n(g.main),C=i({mock:{resolveUri(e){return x[e]??null},resolveMatrixAssetById(e,t=[]){return b[e]?{ok:!0,data:b[e]}:{ok:!0,data:null}}}}),w={title:`dxp/Card`},T={debug:!1,pageSources:[`matrix-asset://ntg/1001`]},E=await S.markup(T,C),D={render:e=>S(e,C),args:T,argTypes:{debug:{control:`boolean`},pageSources:{control:`object`,description:`Array of matrix-asset-uri strings, each an individually-picked page or a parent page whose children all become cards. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/1001, matrix-asset://ntg/2001, matrix-asset://ntg/3001.`}},parameters:{docs:{description:{story:`pageSources has one entry pointing directly at a single page -- one card, populated entirely from that page's own metadata (title, description, image, date, category, url). Hover/tab-focus the card to see the hover/focus states.`},source:{code:E,language:`html`,type:`code`}}}},O={debug:!0,pageSources:[`matrix-asset://ntg/2001`]},k=await S.markup(O,C),A={render:()=>S(O,C),parameters:{docs:{description:{story:`pageSources has one entry pointing at a parent/section page; every child page becomes its own card, arranged in the responsive grid (3 columns desktop, 2 tablet, 1 mobile).`},source:{code:k,language:`html`,type:`code`}}}},j={pageSources:[`matrix-asset://ntg/1001`,`matrix-asset://ntg/2001`]},M=await S.markup(j,C),N={render:()=>S(j,C),parameters:{docs:{description:{story:`pageSources combines one individually-picked page with one parent section -- the grid is the union of both (the individual page's card plus one card per child page).`},source:{code:M,language:`html`,type:`code`}}}},P={pageSources:[`matrix-asset://ntg/3001`]},F=await S.markup(P,C),I={render:()=>S(P,C),parameters:{docs:{description:{story:`A parent page with no children resolves to an empty grid, not an error.`},source:{code:F,language:`html`,type:`code`}}}},L={pageSources:[`matrix-asset://ntg/9999999`]},R=await S.markup(L,C),z={render:()=>S(L,C),parameters:{docs:{description:{story:`A source that fails to resolve at all contributes nothing, rendering an empty grid rather than throwing.`},source:{code:R,language:`html`,type:`code`}}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: singlePageArgs,
  argTypes: {
    debug: {
      control: 'boolean'
    },
    pageSources: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings, each an individually-picked page or a parent page whose children all become cards. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/1001, matrix-asset://ntg/2001, matrix-asset://ntg/3001.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'pageSources has one entry pointing directly at a single page -- one card, populated entirely from that page\\'s own metadata (title, description, image, date, category, url). Hover/tab-focus the card to see the hover/focus states.'
      },
      source: {
        code: singlePageHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => squiz(parentPageArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'pageSources has one entry pointing at a parent/section page; every child page becomes its own card, arranged in the responsive grid (3 columns desktop, 2 tablet, 1 mobile).'
      },
      source: {
        code: parentPageHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => squiz(mixedArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'pageSources combines one individually-picked page with one parent section -- the grid is the union of both (the individual page\\'s card plus one card per child page).'
      },
      source: {
        code: mixedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => squiz(emptySectionArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'A parent page with no children resolves to an empty grid, not an error.'
      },
      source: {
        code: emptySectionHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...I.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'A source that fails to resolve at all contributes nothing, rendering an empty grid rather than throwing.'
      },
      source: {
        code: unresolvableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: singlePageArgs,
  argTypes: {
    debug: {
      control: 'boolean'
    },
    pageSources: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings, each an individually-picked page or a parent page whose children all become cards. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/1001, matrix-asset://ntg/2001, matrix-asset://ntg/3001.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'pageSources has one entry pointing directly at a single page -- one card, populated entirely from that page\\'s own metadata (title, description, image, date, category, url). Hover/tab-focus the card to see the hover/focus states.'
      },
      source: {
        code: singlePageHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => squiz(parentPageArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'pageSources has one entry pointing at a parent/section page; every child page becomes its own card, arranged in the responsive grid (3 columns desktop, 2 tablet, 1 mobile).'
      },
      source: {
        code: parentPageHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => squiz(mixedArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'pageSources combines one individually-picked page with one parent section -- the grid is the union of both (the individual page\\'s card plus one card per child page).'
      },
      source: {
        code: mixedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => squiz(emptySectionArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'A parent page with no children resolves to an empty grid, not an error.'
      },
      source: {
        code: emptySectionHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...I.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'A source that fails to resolve at all contributes nothing, rendering an empty grid rather than throwing.'
      },
      source: {
        code: unresolvableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B=[`SinglePage`,`ParentPage`,`Mixed`,`EmptySection`,`Unresolvable`]}))();export{I as EmptySection,N as Mixed,A as ParentPage,D as SinglePage,z as Unresolvable,B as __namedExportsOrder,w as default};