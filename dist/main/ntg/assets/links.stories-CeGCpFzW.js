import{n as e}from"./chunk-BVpWp9h4.js";var t,n,r;e((()=>{t={title:`CSS Components/Links`},n={render:()=>`
    <table class="story">
        <thead>
            <tr>
                <th></th>
                <th>default</th>
                <th>block like display (including inline-*)</th>
                <th><code>a.plain .decorate</code></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>default</th>
                <td>
                    <a href="#">Link</a>
                    <br><br>
                    <a href="#">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="#" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex" class="plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="#" style="display: inline-flex" class="plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
            </tr>
            <tr>
                <th><code>:hover</code> / <code>.--hover</code></th>
                <td>
                    <a href="#" class="--hover">Link</a>
                    <br><br>
                    <a href="#" class="--hover">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex" class="--hover">Link</a>
                    <br><br>
                    <a href="#" style="display: inline-flex" class="--hover">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex" class="--hover plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="#" style="display: inline-flex" class="--hover plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
            </tr>
            <tr>
                <th><code>:focus</code> / <code>.--focus</code></th>
                <td>
                    <a href="#" class="--focus">Link</a>
                    <br><br>
                    <a href="#" class="--focus">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex" class="--focus">Link</a>
                    <br><br>
                    <a href="#" style="display: inline-flex" class="--focus">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex" class="--focus plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="#" style="display: inline-flex" class="--focus plain"><span><span class="decorate">Newlines<br>link</span></span></a>
                    <br><small>Note that when the link is flex / inline-flex <code>.decorate</code> needs to be inside another inline element</small>
                    <br><small>above structure <code>a.plain > span > span.decorate</code></small>
                    <br><small>below structure <code>a.plain > span.decorate</code></small>
                        <br><br>
                    <a href="#" style="display: inline-flex" class="--focus plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
            </tr>
        </tbody>
    </table>
    `},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => /*html*/\`
    <table class="story">
        <thead>
            <tr>
                <th></th>
                <th>default</th>
                <th>block like display (including inline-*)</th>
                <th><code>a.plain .decorate</code></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>default</th>
                <td>
                    <a href="#">Link</a>
                    <br><br>
                    <a href="#">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="#" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex" class="plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="#" style="display: inline-flex" class="plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
            </tr>
            <tr>
                <th><code>:hover</code> / <code>.--hover</code></th>
                <td>
                    <a href="#" class="--hover">Link</a>
                    <br><br>
                    <a href="#" class="--hover">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex" class="--hover">Link</a>
                    <br><br>
                    <a href="#" style="display: inline-flex" class="--hover">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex" class="--hover plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="#" style="display: inline-flex" class="--hover plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
            </tr>
            <tr>
                <th><code>:focus</code> / <code>.--focus</code></th>
                <td>
                    <a href="#" class="--focus">Link</a>
                    <br><br>
                    <a href="#" class="--focus">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex" class="--focus">Link</a>
                    <br><br>
                    <a href="#" style="display: inline-flex" class="--focus">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex" class="--focus plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="#" style="display: inline-flex" class="--focus plain"><span><span class="decorate">Newlines<br>link</span></span></a>
                    <br><small>Note that when the link is flex / inline-flex <code>.decorate</code> needs to be inside another inline element</small>
                    <br><small>above structure <code>a.plain > span > span.decorate</code></small>
                    <br><small>below structure <code>a.plain > span.decorate</code></small>
                        <br><br>
                    <a href="#" style="display: inline-flex" class="--focus plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
            </tr>
        </tbody>
    </table>
    \`
}`,...n.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => /*html*/\`
    <table class="story">
        <thead>
            <tr>
                <th></th>
                <th>default</th>
                <th>block like display (including inline-*)</th>
                <th><code>a.plain .decorate</code></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>default</th>
                <td>
                    <a href="#">Link</a>
                    <br><br>
                    <a href="#">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex">Link</a>
                    <br><br>
                    <a href="#" style="display: inline-flex">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex" class="plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="#" style="display: inline-flex" class="plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
            </tr>
            <tr>
                <th><code>:hover</code> / <code>.--hover</code></th>
                <td>
                    <a href="#" class="--hover">Link</a>
                    <br><br>
                    <a href="#" class="--hover">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex" class="--hover">Link</a>
                    <br><br>
                    <a href="#" style="display: inline-flex" class="--hover">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex" class="--hover plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="#" style="display: inline-flex" class="--hover plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
            </tr>
            <tr>
                <th><code>:focus</code> / <code>.--focus</code></th>
                <td>
                    <a href="#" class="--focus">Link</a>
                    <br><br>
                    <a href="#" class="--focus">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex" class="--focus">Link</a>
                    <br><br>
                    <a href="#" style="display: inline-flex" class="--focus">Newlines<br>link</a>
                </td>
                <td>
                    <a href="#" style="display: inline-flex" class="--focus plain"><span class="decorate">Link</span></a>
                    <br><br>
                    <a href="#" style="display: inline-flex" class="--focus plain"><span><span class="decorate">Newlines<br>link</span></span></a>
                    <br><small>Note that when the link is flex / inline-flex <code>.decorate</code> needs to be inside another inline element</small>
                    <br><small>above structure <code>a.plain > span > span.decorate</code></small>
                    <br><small>below structure <code>a.plain > span.decorate</code></small>
                        <br><br>
                    <a href="#" style="display: inline-flex" class="--focus plain"><span class="decorate">Newlines<br>link</span></a>
                </td>
            </tr>
        </tbody>
    </table>
    \`
}`,...n.parameters?.docs?.source}}},r=[`Overview`]}))();export{n as Overview,r as __namedExportsOrder,t as default};
//# sourceMappingURL=links.stories-CeGCpFzW.js.map