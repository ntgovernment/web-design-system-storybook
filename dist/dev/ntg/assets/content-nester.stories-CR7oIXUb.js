import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-D0vBjeOt.js";import{n as r,t as i}from"./squizStoryRenderer-4zIdV6yt.js";import{n as a,t as o}from"./squizInfo.mock-D4VTpLG1.js";var s,c,l,u=e((()=>{s=`matrix-asset://ntg/9001`,c={modifiers:[`fullwidth background`]},l={asset:s,componentCustomisation:c}})),d,f,p,m=e((()=>{d=`matrix-asset://ntg/9002`,f={modifiers:[`fullwidth background`]},p={asset:d,componentCustomisation:f}})),h,g,_=e((()=>{h={id:`9001`,type:`bodycopy`,type_name:`Bodycopy`,version:`1.0.0`,name:`Page Contents`,short_name:`Page Contents`,status:{id:2,code:`under_construction`,name:`Under Construction`},created:{date:`2026-01-05T09:00:00Z`,user_id:`1`},updated:{date:`2026-01-05T09:00:00Z`,user_id:`1`},published:{date:null,user_id:null},urls:[],url:`https://example.com/some-standard-page`,attributes:{name:`Page Contents`},metadata:null,contents:`<h2>Placeholder nested heading</h2><p>Placeholder nested paragraph text, standing in for whatever WYSIWYG body content the picked asset actually holds.</p><ul><li>Placeholder list item one</li><li>Placeholder list item two</li></ul><p>A second placeholder paragraph with a <a href="#">placeholder link</a> inside it.</p>`,additional:{},child_count:0},g={ok:!0,data:h}})),v,y,b=e((()=>{v={id:`9002`,type:`bodycopy`,type_name:`Bodycopy`,version:`1.0.0`,name:`Page Contents`,short_name:`Page Contents`,status:{id:2,code:`under_construction`,name:`Under Construction`},created:{date:`2026-01-05T09:00:00Z`,user_id:`1`},updated:{date:`2026-01-05T09:00:00Z`,user_id:`1`},published:{date:null,user_id:null},urls:[],url:`https://example.com/some-standard-page`,attributes:{name:`Page Contents`},metadata:null,contents:`<div data-nested-content style="background:red"><h2>Placeholder nested heading</h2><p>Placeholder nested paragraph text, standing in for whatever WYSIWYG body content the picked asset actually holds.</p><ul><li>Placeholder list item one</li><li>Placeholder list item two</li></ul><p>A second placeholder paragraph with a <a href="#">placeholder link</a> inside it.</p></div><p>You could also mix with normal content</p><div data-nested-content style="background:blue">Hello</p>`,additional:{},child_count:0},y={ok:!0,data:v}})),x,S=e((()=>{t(),x={async main(e={},t={}){let r=`<script>console.log(JSON.parse('${JSON.stringify({input:e})}'));<\/script>`,{asset:i=``}=e,a;try{a=(await t.fns.resolveUri(i))?.data?.contents}catch{return``}return a?`
<div ${n(`content-nester`,e)}>
  ${a}${r}
</div>`:r}}})),C,w,T,E,D,O;e((()=>{i(),o(),u(),m(),_(),b(),S(),console.log({_9001:g,_9002:y}),C=r(x.main),w=a({mock:{resolveUri:e=>e.includes(`9001`)?g:e.includes(`9002`)?y:null}}),T={title:`dxp components/Content Nester`},E={render(){return C(l,w)}},D={render(){return C(p,w)}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render() {
    return squiz(previewData, mockInfo);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render() {
    return squiz(previewDataWithFullWidth, mockInfo);
  }
}`,...D.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render() {
    return squiz(previewData, mockInfo);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render() {
    return squiz(previewDataWithFullWidth, mockInfo);
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithFullWidthContent`]}))();export{E as Default,D as WithFullWidthContent,O as __namedExportsOrder,T as default};
//# sourceMappingURL=content-nester.stories-CR7oIXUb.js.map