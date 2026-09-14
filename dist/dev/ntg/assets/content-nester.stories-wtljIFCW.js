import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-D0vBjeOt.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,t as o}from"./squizInfo.mock-D4VTpLG1.js";async function s(e,t){if(!e||typeof t?.resolveUri!=`function`)return``;try{let n=c(await t.resolveUri(e));return typeof n?.contents==`string`?n.contents.trim():``}catch{return``}}function c(e){return!e||typeof e!=`object`?null:`data`in e?e.data??null:e}var l,u=e((()=>{t(),l={async main(e={},t={}){let{asset:r=``}=e,i=await s(r,t?.fns);return i?`
<div ${n(`content-nester`,e)}>
  ${i}
</div>
`:``}}}));function d({id:e,contents:t}){return{id:String(e),type:`bodycopy`,type_name:`Bodycopy`,name:`Page Contents`,url:`https://example.com/pages/${e}`,metadata:null,contents:t,child_count:0}}function f({id:e}){return{id:String(e),type:`page_content`,type_name:`Content Page`,name:`Placeholder content page`,url:`https://example.com/pages/${e}`,metadata:{},contents:``,child_count:0}}function p(e){return m[e]??null}var m,h,g,_,v,y,b,x,S,C,w,T,E,D;await e((async()=>{i(),o(),u(),m={"matrix-asset://ntg/9001":d({id:9001,contents:`<h2>Placeholder nested heading</h2><p>Placeholder nested paragraph text, standing in for whatever WYSIWYG body content the picked asset actually holds.</p><ul><li>Placeholder list item one</li><li>Placeholder list item two</li></ul><p>A second placeholder paragraph with a <a href="#">placeholder link</a> inside it.</p>`}),"matrix-asset://ntg/9002":f({id:9002})},h=r(l.main),g=a({mock:{resolveUri:p}}),_={title:`dxp components/Content Nester`},v={asset:`matrix-asset://ntg/9001`},y=await h.markup(v,g),b={render:e=>h(e,g),args:v,argTypes:{asset:{control:`text`,description:`matrix-asset-uri for the asset to nest. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/9001 (a Bodycopy asset with real content), matrix-asset://ntg/9002 (a Content Page with empty content).`}},parameters:{docs:{description:{story:"The picked asset resolves and its `contents` field (from `fns.resolveUri()`) is non-empty -- renders that HTML inline, with baseline paragraph/heading/list spacing restored."},source:{code:y,language:`html`,type:`code`}}}},x={asset:`matrix-asset://ntg/9002`},S=await h.markup(x,g),C={render:()=>h(x,g),parameters:{docs:{description:{story:"The picked asset resolves, but its `contents` field is empty (e.g. a Content Page, which has no legacy raw-content storage) -- renders nothing."},source:{code:S,language:`html`,type:`code`}}}},w={},T=await h.markup(w,g),E={render:()=>h(w,g),parameters:{docs:{description:{story:"No `asset` selected -- renders nothing, never throws."},source:{code:T,language:`html`,type:`code`}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: populatedArgs,
  argTypes: {
    asset: {
      control: 'text',
      description: 'matrix-asset-uri for the asset to nest. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/9001 (a Bodycopy asset with real content), matrix-asset://ntg/9002 (a Content Page with empty content).'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'The picked asset resolves and its \`contents\` field (from \`fns.resolveUri()\`) is non-empty -- renders that HTML inline, with baseline paragraph/heading/list spacing restored.'
      },
      source: {
        code: populatedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => squiz(emptyContentsArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'The picked asset resolves, but its \`contents\` field is empty (e.g. a Content Page, which has no legacy raw-content storage) -- renders nothing.'
      },
      source: {
        code: emptyContentsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => squiz(noAssetSelectedArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'No \`asset\` selected -- renders nothing, never throws.'
      },
      source: {
        code: noAssetSelectedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args, mockInfo),
  args: populatedArgs,
  argTypes: {
    asset: {
      control: 'text',
      description: 'matrix-asset-uri for the asset to nest. Only these demo URIs resolve to anything in this Storybook preview (mocked): matrix-asset://ntg/9001 (a Bodycopy asset with real content), matrix-asset://ntg/9002 (a Content Page with empty content).'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'The picked asset resolves and its \`contents\` field (from \`fns.resolveUri()\`) is non-empty -- renders that HTML inline, with baseline paragraph/heading/list spacing restored.'
      },
      source: {
        code: populatedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => squiz(emptyContentsArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'The picked asset resolves, but its \`contents\` field is empty (e.g. a Content Page, which has no legacy raw-content storage) -- renders nothing.'
      },
      source: {
        code: emptyContentsHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => squiz(noAssetSelectedArgs, mockInfo),
  parameters: {
    docs: {
      description: {
        story: 'No \`asset\` selected -- renders nothing, never throws.'
      },
      source: {
        code: noAssetSelectedHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D=[`Populated`,`EmptyContents`,`NoAssetSelected`]}))();export{C as EmptyContents,E as NoAssetSelected,b as Populated,D as __namedExportsOrder,_ as default};
//# sourceMappingURL=content-nester.stories-wtljIFCW.js.map