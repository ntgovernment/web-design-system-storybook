import{n as e}from"./chunk-BVpWp9h4.js";import{t}from"./image-gallery-gExyWzW9.js";import{i as n,n as r,r as i,t as a}from"./squizStoryRenderer-DSARXh3x.js";function o(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}function s(e){if(!e)return{url:``,thumbUrl:``,alt:``,caption:``,width:null,height:null};if(typeof e==`string`)return{url:e,thumbUrl:e,alt:``,caption:``,width:null,height:null};let t=e.imageVariations||{},n=t.original||{},r=t.small?.[0]||n;return{url:n.url||``,thumbUrl:r.url||n.url||``,alt:e.alt||e.name||``,caption:e.caption||``,width:n.width||null,height:n.height||null}}function c(e){if(!e)return null;if(e.imageVariations?.original?.url)return s(e);let t=e.url||(Array.isArray(e.urls)?e.urls[0]:``)||``;return t?{url:t,thumbUrl:t,alt:e.alt||e.name||e.short_name||``,caption:e.caption||e.name||``,width:null,height:null}:null}function l(e){return String(e?.type??e?.type_name??e?.type_code??``).toLowerCase().includes(`folder`)}async function u(e,t){return!Array.isArray(e)||e.length===0||typeof t?.resolveUri!=`function`?[]:(await Promise.all(e.map(async e=>{if(!e)return[];let n;try{n=await t.resolveUri(e)}catch{return[]}if(!n)return[];if(l(n))return(Array.isArray(n.children)?n.children:[]).map(c).filter(Boolean);let r=c(n);return r?[r]:[]}))).flat()}var d,f,p,m,h,g,_=e((()=>{d=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/><line x1="15" y1="15" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="7" y1="10" x2="13" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="10" y1="7" x2="10" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,f=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/><line x1="15" y1="15" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="7" y1="10" x2="13" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,p=4,m=16,h=`320 / 240`,g={async main(e={},t={}){let{imageSources:n=[]}=e,r=await u(n,t.fns),i=`--gallery-columns: ${p}; --gallery-gap: ${m}px; --gallery-aspect-ratio: ${h};`,a=r.map((e,t)=>{let n=e.caption?`<span class="image-gallery__overlay"><span class="image-gallery__overlay-caption">${o(e.caption)}</span></span>`:``;return`
      <button type="button" class="image-gallery__item" data-gallery-index="${t}" aria-label="Open image ${t+1}${e.alt?`: ${o(e.alt)}`:``}">
        <img class="image-gallery__thumb" src="${o(e.thumbUrl)}" alt="${o(e.alt)}" loading="lazy" data-gallery-loading${e.width?` width="${e.width}"`:``}${e.height?` height="${e.height}"`:``} />
        ${n}
      </button>`}).join(``),s=r.length>1,c=r.map((e,t)=>{let n=e.caption?`<figcaption class="image-gallery-lightbox__caption"><p class="image-gallery-lightbox__title">${o(e.caption)}</p></figcaption>`:``;return`
      <figure class="image-gallery-lightbox__slide" data-slide-index="${t}"${t===0?``:` hidden`}>
        <img class="image-gallery-lightbox__image" src="${o(e.url)}" alt="${o(e.alt)}"${e.width?` width="${e.width}"`:``}${e.height?` height="${e.height}"`:``} />
        ${n}
      </figure>`}).join(``),l=s?r.map((e,t)=>`
      <button type="button" class="image-gallery-lightbox__thumbnail-button${t===0?` image-gallery-lightbox__thumbnail-button--selected`:``}" data-thumbnail-index="${t}" aria-label="Go to image ${t+1}">
        <img class="image-gallery-lightbox__thumbnail-image" src="${o(e.thumbUrl)}" alt="" />
      </button>`).join(``):``,g=s?`<button type="button" class="image-gallery-lightbox__nav-prev" aria-label="Previous image">&#8249;</button>`:``,_=s?`<button type="button" class="image-gallery-lightbox__nav-next" aria-label="Next image">&#8250;</button>`:``;return`
<div class="image-gallery-root">
  <div class="image-gallery" style="${i}">
    ${a}
  </div>

  <div class="image-gallery-lightbox" data-image-gallery-lightbox hidden role="dialog" aria-modal="true" aria-label="Image viewer">
    <div class="image-gallery-lightbox__container">
      <div class="image-gallery-lightbox__header">
        <span class="image-gallery-lightbox__counter"><span data-lightbox-current>1</span> / ${r.length}</span>
        <div class="image-gallery-lightbox__controls">
          <button type="button" class="image-gallery-lightbox__zoom-out" data-zoom-out aria-label="Zoom out" disabled>${f}</button>
          <button type="button" class="image-gallery-lightbox__zoom-in" data-zoom-in aria-label="Zoom in">${d}</button>
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
      ${s?`<div class="image-gallery-lightbox__thumbnails">${l}</div>`:``}
    </div>
  </div>
</div>
`}}}));function v({id:e,name:t,alt:n}){return{type:`type_image`,name:t,alt:n,caption:t,imageVariations:{original:{url:`https://picsum.photos/id/${e}/640/480`,width:640,height:480,mimeType:`image/jpeg`,byteSize:65536,sha1Hash:`${e}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`.slice(0,40),aspectRatio:`4:3`}}}}function y(e){return b[e]??null}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;await e((async()=>{a(),i(),t(),_(),b={"matrix-asset://demo-single-image":v({id:1015,name:`Mountain Serenity`,alt:`Scenic mountain landscape with gradient sky and green fields`}),"matrix-asset://demo-single-image-2":v({id:1016,name:`Urban Exploration`,alt:`Urban scene with grey tones and industrial elements`}),"matrix-asset://demo-folder":{type:`type_folder`,name:`Demo Gallery Folder`,children:[1015,1016,1018,1019,1021,1024,1027,1035].map((e,t)=>v({id:e,name:`Image ${t+1}`,alt:`Gallery demonstration image ${t+1}`}))},"matrix-asset://demo-empty-folder":{type:`type_folder`,name:`Empty Folder`,children:[]}},x=r(g.main,{resolveUri:y}),S=n({mock:{resolveUri:y}}),C={title:`dxp/Image Gallery`},w={imageSources:[`matrix-asset://demo-single-image`]},T=await g.main(w,S),E={render:e=>x(e),args:w,argTypes:{imageSources:{control:`object`,description:`Array of matrix-asset-uri strings, each a single image or a folder. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://demo-single-image, matrix-asset://demo-single-image-2, matrix-asset://demo-folder, matrix-asset://demo-empty-folder.`}},parameters:{docs:{description:{story:`imageSources has one entry pointing directly at a single image asset -- the gallery shows just that one image.`},source:{code:T,language:`html`,type:`code`}}}},D={imageSources:[`matrix-asset://demo-single-image`,`matrix-asset://demo-single-image-2`]},O=await g.main(D,S),k={render:()=>x(D),parameters:{docs:{description:{story:`imageSources has two individually-picked image entries -- no folder involved. Demonstrates that the field supports selecting several images directly, not just one.`},source:{code:O,language:`html`,type:`code`}}}},A={imageSources:[`matrix-asset://demo-folder`]},j=await g.main(A,S),M={render:()=>x(A),parameters:{docs:{description:{story:`imageSources has one entry pointing at a folder; every image resolved as a child of that folder is rendered in the grid.`},source:{code:j,language:`html`,type:`code`}}}},N={imageSources:[`matrix-asset://demo-single-image`,`matrix-asset://demo-folder`]},P=await g.main(N,S),F={render:()=>x(N),parameters:{docs:{description:{story:`imageSources combines one individually-picked image with one folder -- the gallery is the union of both (the individual image plus every image in the folder).`},source:{code:P,language:`html`,type:`code`}}}},I={imageSources:[`matrix-asset://demo-empty-folder`]},L=await g.main(I,S),R={render:()=>x(I),parameters:{docs:{description:{story:`A folder with no images resolves to an empty gallery grid, not an error.`},source:{code:L,language:`html`,type:`code`}}}},z={imageSources:[`matrix-asset://does-not-exist`]},B=await g.main(z,S),V={render:()=>x(z),parameters:{docs:{description:{story:`A source that fails to resolve at all contributes nothing, rendering an empty gallery rather than throwing.`},source:{code:B,language:`html`,type:`code`}}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
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
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => squiz(multipleImagesArgs),
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
}`,...k.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => squiz(folderArgs),
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
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => squiz(mixedArgs),
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
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => squiz(emptyFolderArgs),
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
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs),
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
}`,...V.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
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
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => squiz(multipleImagesArgs),
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
}`,...k.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => squiz(folderArgs),
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
}`,...M.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => squiz(mixedArgs),
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
}`,...F.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => squiz(emptyFolderArgs),
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
}`,...R.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => squiz(unresolvableArgs),
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
}`,...V.parameters?.docs?.source}}},H=[`SingleImage`,`MultipleImages`,`Folder`,`Mixed`,`EmptyFolder`,`Unresolvable`]}))();export{R as EmptyFolder,M as Folder,F as Mixed,k as MultipleImages,E as SingleImage,V as Unresolvable,H as __namedExportsOrder,C as default};