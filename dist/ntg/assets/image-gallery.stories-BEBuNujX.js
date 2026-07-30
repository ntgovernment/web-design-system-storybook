import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-mGPdhelI.js";import{n as r,t as i}from"./squizInfo.mock-x2sHGyES.js";function a(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function o(e){if(!e)return{url:``,thumbUrl:``,alt:``,caption:``,width:null,height:null};if(typeof e==`string`)return{url:e,thumbUrl:e,alt:``,caption:``,width:null,height:null};let t=e.imageVariations||{},n=t.original||{},r=t.small?.[0]||n;return{url:n.url||``,thumbUrl:r.url||n.url||``,alt:e.alt||e.name||``,caption:e.caption||``,width:n.width||null,height:n.height||null}}function s(e){if(!e)return null;if(e.imageVariations?.original?.url)return o(e);let t=e.url||(Array.isArray(e.urls)?e.urls[0]:``)||``;return t?{url:t,thumbUrl:t,alt:e.alt||e.name||e.short_name||``,caption:e.caption||e.name||``,width:null,height:null}:null}function c(e){return String(e?.type??e?.type_name??e?.type_code??``).toLowerCase().includes(`folder`)}async function l(e,t){return!Array.isArray(e)||e.length===0||typeof t?.resolveUri!=`function`?[]:(await Promise.all(e.map(async e=>{if(!e)return[];let n;try{n=await t.resolveUri(e)}catch{return[]}if(!n)return[];if(c(n))return(Array.isArray(n.children)?n.children:[]).map(s).filter(Boolean);let r=s(n);return r?[r]:[]}))).flat()}var u,d,f,p,m,h,g=e((()=>{u=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/><line x1="15" y1="15" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="7" y1="10" x2="13" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="10" y1="7" x2="10" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,d=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/><line x1="15" y1="15" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="7" y1="10" x2="13" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,f=4,p=16,m=`320 / 240`,h={async main(e={},t={}){let{imageSources:n=[]}=e,r=await l(n,t.fns),i=`--gallery-columns: ${f}; --gallery-gap: ${p}px; --gallery-aspect-ratio: ${m};`,o=r.map((e,t)=>{let n=e.caption?`<span class="image-gallery__overlay"><span class="image-gallery__overlay-caption">${a(e.caption)}</span></span>`:``;return`
      <button type="button" class="image-gallery__item" data-gallery-index="${t}" aria-label="Open image ${t+1}${e.alt?`: ${a(e.alt)}`:``}">
        <img class="image-gallery__thumb" src="${a(e.thumbUrl)}" alt="${a(e.alt)}" loading="lazy" data-gallery-loading${e.width?` width="${e.width}"`:``}${e.height?` height="${e.height}"`:``} />
        ${n}
      </button>`}).join(``),s=r.length>1,c=r.map((e,t)=>{let n=e.caption?`<figcaption class="image-gallery-lightbox__caption"><p class="image-gallery-lightbox__title">${a(e.caption)}</p></figcaption>`:``;return`
      <figure class="image-gallery-lightbox__slide" data-slide-index="${t}"${t===0?``:` hidden`}>
        <img class="image-gallery-lightbox__image" src="${a(e.url)}" alt="${a(e.alt)}"${e.width?` width="${e.width}"`:``}${e.height?` height="${e.height}"`:``} />
        ${n}
      </figure>`}).join(``),h=s?r.map((e,t)=>`
      <button type="button" class="image-gallery-lightbox__thumbnail-button${t===0?` image-gallery-lightbox__thumbnail-button--selected`:``}" data-thumbnail-index="${t}" aria-label="Go to image ${t+1}">
        <img class="image-gallery-lightbox__thumbnail-image" src="${a(e.thumbUrl)}" alt="" />
      </button>`).join(``):``,g=s?`<button type="button" class="image-gallery-lightbox__nav-prev" aria-label="Previous image">&#8249;</button>`:``,_=s?`<button type="button" class="image-gallery-lightbox__nav-next" aria-label="Next image">&#8250;</button>`:``;return`
<div class="image-gallery-root">
  <div class="image-gallery" style="${i}">
    ${o}
  </div>

  <div class="image-gallery-lightbox" data-image-gallery-lightbox hidden role="dialog" aria-modal="true" aria-label="Image viewer">
    <div class="image-gallery-lightbox__container">
      <div class="image-gallery-lightbox__header">
        <span class="image-gallery-lightbox__counter"><span data-lightbox-current>1</span> / ${r.length}</span>
        <div class="image-gallery-lightbox__controls">
          <button type="button" class="image-gallery-lightbox__zoom-out" data-zoom-out aria-label="Zoom out" disabled>${d}</button>
          <button type="button" class="image-gallery-lightbox__zoom-in" data-zoom-in aria-label="Zoom in">${u}</button>
          <button type="button" class="image-gallery-lightbox__close" aria-label="Close image viewer">&#10005;</button>
        </div>
      </div>
      <div class="image-gallery-lightbox__main">
        ${g}
        <div class="image-gallery-lightbox__viewer">
          ${c}
        </div>
        ${_}
      </div>
      ${s?`<div class="image-gallery-lightbox__thumbnails">${h}</div>`:``}
    </div>
  </div>
</div>
`}}}));function _({id:e,name:t,alt:n}){return{type:`type_image`,name:t,alt:n,caption:t,imageVariations:{original:{url:`https://picsum.photos/id/${e}/640/480`,width:640,height:480,mimeType:`image/jpeg`,byteSize:65536,sha1Hash:`${e}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`.slice(0,40),aspectRatio:`4:3`}}}}function v(e){return y[e]??null}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;await e((async()=>{n(),i(),g(),y={"matrix-asset://demo-single-image":_({id:1015,name:`Mountain Serenity`,alt:`Scenic mountain landscape with gradient sky and green fields`}),"matrix-asset://demo-single-image-2":_({id:1016,name:`Urban Exploration`,alt:`Urban scene with grey tones and industrial elements`}),"matrix-asset://demo-folder":{type:`type_folder`,name:`Demo Gallery Folder`,children:[1015,1016,1018,1019,1021,1024,1027,1035].map((e,t)=>_({id:e,name:`Image ${t+1}`,alt:`Gallery demonstration image ${t+1}`}))},"matrix-asset://demo-empty-folder":{type:`type_folder`,name:`Empty Folder`,children:[]}},b=t(h.main),x=r({mock:{resolveUri:v}}),S={title:`dxp/Image Gallery`},C={imageSources:[`matrix-asset://demo-single-image`]},w=await b.markup(C,x),T={render:e=>b(e,x),args:C,argTypes:{imageSources:{control:`object`,description:`Array of matrix-asset-uri strings, each a single image or a folder. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://demo-single-image, matrix-asset://demo-single-image-2, matrix-asset://demo-folder, matrix-asset://demo-empty-folder.`}},parameters:{docs:{description:{story:`imageSources has one entry pointing directly at a single image asset -- the gallery shows just that one image.`},source:{code:w,language:`html`,type:`code`}}}},E={imageSources:[`matrix-asset://demo-single-image`,`matrix-asset://demo-single-image-2`]},D=await b.markup(E,x),O={render:()=>b(E,x),parameters:{docs:{description:{story:`imageSources has two individually-picked image entries -- no folder involved. Demonstrates that the field supports selecting several images directly, not just one.`},source:{code:D,language:`html`,type:`code`}}}},k={imageSources:[`matrix-asset://demo-folder`]},A=await b.markup(k,x),j={render:()=>b(k,x),parameters:{docs:{description:{story:`imageSources has one entry pointing at a folder; every image resolved as a child of that folder is rendered in the grid.`},source:{code:A,language:`html`,type:`code`}}}},M={imageSources:[`matrix-asset://demo-single-image`,`matrix-asset://demo-folder`]},N=await b.markup(M,x),P={render:()=>b(M,x),parameters:{docs:{description:{story:`imageSources combines one individually-picked image with one folder -- the gallery is the union of both (the individual image plus every image in the folder).`},source:{code:N,language:`html`,type:`code`}}}},F={imageSources:[`matrix-asset://demo-empty-folder`]},I=await b.markup(F,x),L={render:()=>b(F,x),parameters:{docs:{description:{story:`A folder with no images resolves to an empty gallery grid, not an error.`},source:{code:I,language:`html`,type:`code`}}}},R={imageSources:[`matrix-asset://does-not-exist`]},z=await b.markup(R,x),B={render:()=>b(R,x),parameters:{docs:{description:{story:`A source that fails to resolve at all contributes nothing, rendering an empty gallery rather than throwing.`},source:{code:z,language:`html`,type:`code`}}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: singleImageArgs,
  argTypes: {
    imageSources: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings, each a single image or a folder. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://demo-single-image, matrix-asset://demo-single-image-2, matrix-asset://demo-folder, matrix-asset://demo-empty-folder.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'imageSources has one entry pointing directly at a single image asset -- the gallery shows just that one image.'
      },
      source: {
        code: singleImageHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => squiz(multipleImagesArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'imageSources has two individually-picked image entries -- no folder involved. Demonstrates that the field supports selecting several images directly, not just one.'
      },
      source: {
        code: multipleImagesHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => squiz(folderArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'imageSources has one entry pointing at a folder; every image resolved as a child of that folder is rendered in the grid.'
      },
      source: {
        code: folderHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => squiz(mixedArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'imageSources combines one individually-picked image with one folder -- the gallery is the union of both (the individual image plus every image in the folder).'
      },
      source: {
        code: mixedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => squiz(emptyFolderArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'A folder with no images resolves to an empty gallery grid, not an error.'
      },
      source: {
        code: emptyFolderHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'A source that fails to resolve at all contributes nothing, rendering an empty gallery rather than throwing.'
      },
      source: {
        code: unresolvableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: singleImageArgs,
  argTypes: {
    imageSources: {
      control: 'object',
      description: 'Array of matrix-asset-uri strings, each a single image or a folder. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://demo-single-image, matrix-asset://demo-single-image-2, matrix-asset://demo-folder, matrix-asset://demo-empty-folder.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'imageSources has one entry pointing directly at a single image asset -- the gallery shows just that one image.'
      },
      source: {
        code: singleImageHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => squiz(multipleImagesArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'imageSources has two individually-picked image entries -- no folder involved. Demonstrates that the field supports selecting several images directly, not just one.'
      },
      source: {
        code: multipleImagesHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...O.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => squiz(folderArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'imageSources has one entry pointing at a folder; every image resolved as a child of that folder is rendered in the grid.'
      },
      source: {
        code: folderHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => squiz(mixedArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'imageSources combines one individually-picked image with one folder -- the gallery is the union of both (the individual image plus every image in the folder).'
      },
      source: {
        code: mixedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...P.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => squiz(emptyFolderArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'A folder with no images resolves to an empty gallery grid, not an error.'
      },
      source: {
        code: emptyFolderHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...L.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'A source that fails to resolve at all contributes nothing, rendering an empty gallery rather than throwing.'
      },
      source: {
        code: unresolvableHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V=[`SingleImage`,`MultipleImages`,`Folder`,`Mixed`,`EmptyFolder`,`Unresolvable`]}))();export{L as EmptyFolder,j as Folder,P as Mixed,O as MultipleImages,T as SingleImage,B as Unresolvable,V as __namedExportsOrder,S as default};
//# sourceMappingURL=image-gallery.stories-BEBuNujX.js.map