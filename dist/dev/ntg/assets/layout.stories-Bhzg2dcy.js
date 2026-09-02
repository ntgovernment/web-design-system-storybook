import{n as e}from"./chunk-BVpWp9h4.js";import{n as t,t as n}from"./component.helper-D0vBjeOt.js";var r,i,a,o,s,c,l;e((()=>{t(),r={title:`CSS Components/Layout`,parameters:{noContentArea:!0}},i=n(``,{componentCustomisation:{modifiers:[`background: alt`]}}),a=n(``,{componentCustomisation:{modfiers:[`spacious`]}}),o=n(``,{componentCustomisation:{modifiers:[`fullwidth background`,`background: alt`,`spacious`]}}),s={render:()=>`
    <p style="opacity:.5;text-align:center"><code>.content-area</code> is the node that page content goes into.</p>
    <br>
    <div class="content-area">
        <div class="content" style="border: 1px solid var(--clr-border-subtle)"${i}>
            <p><strong>Explaination</strong></p>
            
            <p><code>.content-area</code> needs to works consistently for any inner content including textnaodes</p>
            <p>Expected behaviour:</p>
            <ul>
                <li>A single consistent padding</li>
                <li>
                    <code>[data-component]</code> and <code>.content</code> will have matching 
                    inline padding and negative inline margin to acheive text align consistency.
                    <br> if they are <code>> :first-child</code> / <code>> :last-child</code> they will
                    have appropriate negative block margin into parents padding. 
                </li>
                <li>At larger widths <code>.content-area</code> will appear as column</li>
                <li>Components marked for fullwidth-background will have the chosen color background full width.</li>
            </ul> 
        </div>
        textnode
        <p>tag</p>
        <div data-component>
            this has <code>data-component</code>
        </div>
        <div data-component ${i}>
            this has <code>${i}</code>
        </div>
        <div data-component ${a} >
            this has <code>${a}</code>
        </div>
        <div data-component ${o} >
            this has <code>${o}</code>
        </div>
    </div>
    `},c={render:()=>`
    <style>
        .with-sidebar {
            outline: 1px dotted magenta;
            * {
                outline: 1px dotted cyan;
            }
        }
    </style>
    
    <p style="opacity:.5;text-align:center">
        The following demonstrates sidebar layout, with multiple content types all aligning.
    </p>

    <div class="content-area with-sidebar">
        <div class="content-area">
            text node
            <p>p tag</p>
            <div data-component>[data-component]</div>
            <div class="content">.content</div>
            <p>Structure is as follows</p>
            <pre><code>
.content-area.with-sidebar
    > .content-area
        // normal .content-area rules apply
    > .sidebar.content-area
        // normal .content-area rules apply
            </code></pre>
            <div data-component data-cc="fullwidth background|background: alt">
                should not take on full width style
            </div>
        </div>
        <div class="sidebar content-area">
            text node
            <p>p tag</p>
            <div data-component>[data-component]</div>
            <div class="content">.content</div>
        </div>
    </div>
    `},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => /*html*/\`
    <p style="opacity:.5;text-align:center"><code>.content-area</code> is the node that page content goes into.</p>
    <br>
    <div class="content-area">
        <div class="content" style="border: 1px solid var(--clr-border-subtle)"\${modAttrAltBg}>
            <p><strong>Explaination</strong></p>
            
            <p><code>.content-area</code> needs to works consistently for any inner content including textnaodes</p>
            <p>Expected behaviour:</p>
            <ul>
                <li>A single consistent padding</li>
                <li>
                    <code>[data-component]</code> and <code>.content</code> will have matching 
                    inline padding and negative inline margin to acheive text align consistency.
                    <br> if they are <code>> :first-child</code> / <code>> :last-child</code> they will
                    have appropriate negative block margin into parents padding. 
                </li>
                <li>At larger widths <code>.content-area</code> will appear as column</li>
                <li>Components marked for fullwidth-background will have the chosen color background full width.</li>
            </ul> 
        </div>
        textnode
        <p>tag</p>
        <div data-component>
            this has <code>data-component</code>
        </div>
        <div data-component \${modAttrAltBg}>
            this has <code>\${modAttrAltBg}</code>
        </div>
        <div data-component \${modAttrSpacious} >
            this has <code>\${modAttrSpacious}</code>
        </div>
        <div data-component \${modAttrFullWidth} >
            this has <code>\${modAttrFullWidth}</code>
        </div>
    </div>
    \`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => /*html*/\`
    <style>
        .with-sidebar {
            outline: 1px dotted magenta;
            * {
                outline: 1px dotted cyan;
            }
        }
    </style>
    
    <p style="opacity:.5;text-align:center">
        The following demonstrates sidebar layout, with multiple content types all aligning.
    </p>

    <div class="content-area with-sidebar">
        <div class="content-area">
            text node
            <p>p tag</p>
            <div data-component>[data-component]</div>
            <div class="content">.content</div>
            <p>Structure is as follows</p>
            <pre><code>
.content-area.with-sidebar
    > .content-area
        // normal .content-area rules apply
    > .sidebar.content-area
        // normal .content-area rules apply
            </code></pre>
            <div data-component data-cc="fullwidth background|background: alt">
                should not take on full width style
            </div>
        </div>
        <div class="sidebar content-area">
            text node
            <p>p tag</p>
            <div data-component>[data-component]</div>
            <div class="content">.content</div>
        </div>
    </div>
    \`
}`,...c.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => /*html*/\`
    <p style="opacity:.5;text-align:center"><code>.content-area</code> is the node that page content goes into.</p>
    <br>
    <div class="content-area">
        <div class="content" style="border: 1px solid var(--clr-border-subtle)"\${modAttrAltBg}>
            <p><strong>Explaination</strong></p>
            
            <p><code>.content-area</code> needs to works consistently for any inner content including textnaodes</p>
            <p>Expected behaviour:</p>
            <ul>
                <li>A single consistent padding</li>
                <li>
                    <code>[data-component]</code> and <code>.content</code> will have matching 
                    inline padding and negative inline margin to acheive text align consistency.
                    <br> if they are <code>> :first-child</code> / <code>> :last-child</code> they will
                    have appropriate negative block margin into parents padding. 
                </li>
                <li>At larger widths <code>.content-area</code> will appear as column</li>
                <li>Components marked for fullwidth-background will have the chosen color background full width.</li>
            </ul> 
        </div>
        textnode
        <p>tag</p>
        <div data-component>
            this has <code>data-component</code>
        </div>
        <div data-component \${modAttrAltBg}>
            this has <code>\${modAttrAltBg}</code>
        </div>
        <div data-component \${modAttrSpacious} >
            this has <code>\${modAttrSpacious}</code>
        </div>
        <div data-component \${modAttrFullWidth} >
            this has <code>\${modAttrFullWidth}</code>
        </div>
    </div>
    \`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => /*html*/\`
    <style>
        .with-sidebar {
            outline: 1px dotted magenta;
            * {
                outline: 1px dotted cyan;
            }
        }
    </style>
    
    <p style="opacity:.5;text-align:center">
        The following demonstrates sidebar layout, with multiple content types all aligning.
    </p>

    <div class="content-area with-sidebar">
        <div class="content-area">
            text node
            <p>p tag</p>
            <div data-component>[data-component]</div>
            <div class="content">.content</div>
            <p>Structure is as follows</p>
            <pre><code>
.content-area.with-sidebar
    > .content-area
        // normal .content-area rules apply
    > .sidebar.content-area
        // normal .content-area rules apply
            </code></pre>
            <div data-component data-cc="fullwidth background|background: alt">
                should not take on full width style
            </div>
        </div>
        <div class="sidebar content-area">
            text node
            <p>p tag</p>
            <div data-component>[data-component]</div>
            <div class="content">.content</div>
        </div>
    </div>
    \`
}`,...c.parameters?.docs?.source}}},l=[`Default`,`WithSidebar`]}))();export{s as Default,c as WithSidebar,l as __namedExportsOrder,r as default};
//# sourceMappingURL=layout.stories-Bhzg2dcy.js.map