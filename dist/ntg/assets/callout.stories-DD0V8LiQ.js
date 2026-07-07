import{r as e}from"./preload-helper-Dcl5TOAQ.js";import{t}from"../iframe.0.0.1.js";import{n,t as r}from"./squizStoryRenderer-CPVgI7yb.js";function i(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\"/g,`&quot;`).replace(/'/g,`&#039;`)}var a,o=e((()=>{a={async main(e={}){let{title:t=`Callout heading`,body:n=`Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.`}=e;return`
<div class="callout">
  <div class="callout__border"></div>
  <div class="callout__content">
    <div class="callout__header">
      <div class="callout__text">
        <h3 class="callout__title">${i(t)}</h3>
        <div class="callout__body">${n}</div>
      </div>
    </div>
  </div>
</div>
`}}})),s,c,l,u,d,f,p;e((()=>{r(),t(),o(),s=n(a.main),c={title:`dxp/Callout`},l={render:()=>s({title:`Callout heading`,body:`Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.`})},u={render:()=>s({title:`Getting Started Guide`,body:`<p>Follow these steps to get started with the NTG Design System:</p><ol><li>Install the package using npm or yarn</li><li>Import the theme CSS in your application</li><li>Import components as needed</li><li>Refer to the documentation for component APIs</li></ol><p><strong>Note:</strong> Callout is a text-only component and does not support icons.</p>`})},d={render:()=>s({title:`Accessibility Guidelines`,body:`The NTG Design System is committed to providing accessible components that meet WCAG 2.1 AA standards. All components include proper ARIA attributes, keyboard navigation support, and semantic HTML. We test with screen readers and ensure high contrast mode compatibility. When using callouts, ensure that the information is also conveyed through text and not color alone. This helps users with visual impairments or color blindness understand the content.`})},f={render:()=>s({title:`Quick Note`,body:`This is a brief callout with minimal content.`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    title: 'Callout heading',
    body: 'Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.'
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    title: 'Getting Started Guide',
    body: '<p>Follow these steps to get started with the NTG Design System:</p><ol><li>Install the package using npm or yarn</li><li>Import the theme CSS in your application</li><li>Import components as needed</li><li>Refer to the documentation for component APIs</li></ol><p><strong>Note:</strong> Callout is a text-only component and does not support icons.</p>'
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    title: 'Accessibility Guidelines',
    body: 'The NTG Design System is committed to providing accessible components that meet WCAG 2.1 AA standards. All components include proper ARIA attributes, keyboard navigation support, and semantic HTML. We test with screen readers and ensure high contrast mode compatibility. When using callouts, ensure that the information is also conveyed through text and not color alone. This helps users with visual impairments or color blindness understand the content.'
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => squiz({
    title: 'Quick Note',
    body: 'This is a brief callout with minimal content.'
  })
}`,...f.parameters?.docs?.source}}},p=[`Basic`,`RichContent`,`LongContent`,`ShortContent`]}))();export{l as Basic,d as LongContent,u as RichContent,f as ShortContent,p as __namedExportsOrder,c as default};