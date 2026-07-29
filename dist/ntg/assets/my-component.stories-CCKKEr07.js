import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./squizStoryRenderer-mGPdhelI.js";import{n as r,t as i}from"./squizInfo.mock-x2sHGyES.js";var a,o=e((()=>{a={main:async({text:e=`Hello World!`,variant:t=`default`}={})=>`
      <div class="my-component${t&&t!==`default`?` my-component--${t}`:``}">
        <div class="my-component__text">
          ${e}
        </div>
      </div>
    `}})),s,c,l,u,d,f,p,m,h;await e((async()=>{n(),i(),o(),s=t(a.main),r(),c={title:`dxp/My Component`},l={text:`Hello World!`},u=await s.markup(l),d={render:e=>s(e),args:l,argTypes:{text:{control:`text`},variant:{control:`text`}},parameters:{docs:{source:{code:u,language:`html`,type:`code`}}}},f={text:`I'm Special!`,variant:`special`},p=await s.markup(f),m={render:()=>s(f),parameters:{docs:{source:{code:p,language:`html`,type:`code`}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: defaultArgs,
  argTypes: {
    text: {
      control: 'text'
    },
    variant: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      source: {
        code: defaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => squiz(specialArgs),
  parameters: {
    docs: {
      source: {
        code: specialHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => squiz(args),
  args: defaultArgs,
  argTypes: {
    text: {
      control: 'text'
    },
    variant: {
      control: 'text'
    }
  },
  parameters: {
    docs: {
      source: {
        code: defaultHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => squiz(specialArgs),
  parameters: {
    docs: {
      source: {
        code: specialHtml,
        language: 'html',
        type: 'code'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Special`]}))();export{d as Default,m as Special,h as __namedExportsOrder,c as default};