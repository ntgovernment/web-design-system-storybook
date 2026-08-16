import{n as e}from"./chunk-BVpWp9h4.js";var t,n,r,i,a,o,s;e((()=>{t={title:`CSS Components/Forms/Input`},n=({type:e,placeholder:t=`Placeholder text`,value:n=``,className:r=``,readonly:i=!1,disabled:a=!1,success:o=!1,error:s=!1,dataClear:c=!1})=>{let l=[r,o?`--success`:``,s?`--error`:``].filter(Boolean).join(` `),u={date:`2026-07-21`,"datetime-local":`2026-07-21T09:30`,datetime:`2026-07-21T09:30`,email:`name@example.com`,month:`2026-07`,number:`1`,password:`P@ssword123`,tel:`0400000000`,time:`09:30`,url:`https://example.com`,week:`2026-W30`},d=``;return n&&(d=u[e]??n),`
        <input
            type="${e}"
            placeholder="${t}"
            value="${d}"
            class="${l}"
            ${i?`readonly`:``}
            ${a?`disabled`:``}
            ${c||e===`search`?`data-clear`:``}
        />
    `},r={args:{otherTypes:`email`},argTypes:{otherTypes:{control:`select`,options:[`email`,`tel`,`number`,`password`,`url`,`search`,`date`,`time`,`datetime-local`,`month`,`week`]}},render(e){return requestAnimationFrame(()=>{window.__ntgds__.run(`clearableInputs`)}),`
        <style>
            .text-like-inputs td input {
                width: 100%;
            }
        </style>
    <p><code>text</code> inputs and other similar fields: <br><code>email, tel, number, password, url, search, date, time, datetime-local, month, week</code></p>
    <table class="story text-like-inputs">
        <thead>
            <tr>
                <th></th>
                <th>[type="text"]</th>
                <th>other types<br>[type="${e.otherTypes}"]</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Enabled (Empty)</th>
                <td>
                    ${n({type:`text`})}
                </td>
                <td>
                    ${n({type:e.otherTypes})}
                </td>
            </tr>
            <tr>
                <th>With <code>[data-clear]</code></th>
                <td>
                    ${n({type:`text`,dataClear:!0})}
                </td>
                <td>
                    ${n({type:e.otherTypes,dataClear:!0})}
                </td>
            </tr>
            <tr>
                <th><code>:hover</code> / <code>.--hover</code> (Empty)</th>
                <td>
                    ${n({type:`text`,className:`--hover`})}
                </td>
                <td>
                    ${n({type:e.otherTypes,className:`--hover`})}
                </td>
            </tr>
            <tr>
                <th><code>:focus</code> / <code>.--focus</code> (Empty)</th>
                <td>
                    ${n({type:`text`,className:`--focus`})}
                </td>
                <td>
                    ${n({type:e.otherTypes,className:`--focus`})}
                </td>
            </tr>
            <tr>
                <th><code>:focus</code> / <code>.--focus</code> (Filled)</th>
                <td>
                    ${n({type:`text`,className:`--focus`,value:`Input text`,placeholder:``})}
                </td>
                <td>
                    ${n({type:e.otherTypes,className:`--focus`,value:`Input text`,placeholder:``})}
                </td>
            </tr>
            <tr>
                <th>Enabled (Filled)</th>
                <td>
                    ${n({type:`text`,value:`Input text`,placeholder:``})}
                </td>
                <td>
                    ${n({type:e.otherTypes,value:`Input text`,placeholder:``})}
                </td>
            </tr>
            <tr>
                <th><code>.--success</code> (Empty)</th>
                <td>
                    ${n({type:`text`,success:!0})}
                </td>
                <td>
                    ${n({type:e.otherTypes,success:!0})}
                </td>
            </tr>
            <tr>
                <th><code>.--success</code> (Filled)</th>
                <td>
                    ${n({type:`text`,success:!0,value:`Input text`,placeholder:``})}
                </td>
                <td>
                    ${n({type:e.otherTypes,success:!0,value:`Input text`,placeholder:``})}
                </td>
            </tr>
            <tr>
                <th><code>.--error</code> (Empty)</th>
                <td>
                    ${n({type:`text`,error:!0})}
                </td>
                <td>
                    ${n({type:e.otherTypes,error:!0})}
                </td>
            </tr>
            <tr>
                <th><code>.--error</code> (Filled)</th>
                <td>
                    ${n({type:`text`,error:!0,value:`Input text`,placeholder:``})}
                </td>
                <td>
                    ${n({type:e.otherTypes,error:!0,value:`Input text`,placeholder:``})}
                </td>
            </tr>
            <tr>
                <th><code>[readonly]</code> (Idle)</th>
                <td>
                    ${n({type:`text`,readonly:!0,value:`Input text`,placeholder:``})}
                </td>
                <td>
                    ${n({type:e.otherTypes,readonly:!0,value:`Input text`,placeholder:``})}
                </td>
            </tr>
            <tr>
                <th><code>[readonly]</code> + <code>.--focus</code> (Focus)</th>
                <td>
                    ${n({type:`text`,readonly:!0,className:`--focus`,value:`Input text`,placeholder:``})}
                </td>
                <td>
                    ${n({type:e.otherTypes,readonly:!0,className:`--focus`,value:`Input text`,placeholder:``})}
                </td>
            </tr>
            <tr>
                <th><code>[disabled]</code> (Empty)</th>
                <td>
                    ${n({type:`text`,disabled:!0,placeholder:`Disabled text`})}
                </td>
                <td>
                    ${n({type:e.otherTypes,disabled:!0,placeholder:`Disabled text`})}
                </td>
            </tr>
        </tbody>
    </table>
    `}},i={render:()=>`
    <style>
    tr:not(.live) {
        pointer-events: none;
    }
    </style>
    <table class="story">
        <thead>
            <tr>
                <th></th>
                <th colspan="2">in label</th>
                <th colspan="2">out label</th>
            </tr>
        </thead>
        <tbody>
            <tr class="live">
                <th>Enabled (live)</th>
                <td colspan="2">
                    <label><input type="checkbox" name="checkbox-enabled-in-label-1" /> Checkbox Label</label>
                </td>
                <td  colspan="2">
                    <input id="checkbox-enabled-1" name="checkbox-enabled-out-label-1" type="checkbox" /> <label for="checkbox-enabled-1">Checkbox Label</label>
                </td>
            </tr>
            <tr>
                <th></th>
                <th>Unselected</th>
                <th>Selected</th>
                <th>Unselected</th>
                <th>Selected</th>
            </tr>
            <tr>
                <th><code>:hover / .--hover</code></th>
                <td>
                    <label><input type="checkbox" name="checkbox-hover-in-label-2" class="--hover" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <label><input type="checkbox" name="checkbox-hover-in-label-2" checked class="--hover" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-hover-unselected-2" name="checkbox-hover-out-label-2" type="checkbox" class="--hover" tabindex="-1" /> <label for="checkbox-hover-unselected-2">Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-hover-selected-2" name="checkbox-hover-out-label-2" type="checkbox" checked class="--hover" tabindex="-1" /> <label for="checkbox-hover-selected-2">Checkbox Label</label>
                </td>
            </tr>
            <tr>
                <th><code>:focus / .--focus</code></th>
                <td>
                    <label><input type="checkbox" name="checkbox-focus-in-label-3" class="--focus" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <label><input type="checkbox" name="checkbox-focus-in-label-3" checked class="--focus" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-focus-unselected-3" name="checkbox-focus-out-label-3" type="checkbox" class="--focus" tabindex="-1" /> <label for="checkbox-focus-unselected-3">Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-focus-selected-3" name="checkbox-focus-out-label-3" type="checkbox" checked class="--focus" tabindex="-1" /> <label for="checkbox-focus-selected-3">Checkbox Label</label>
                </td>
            </tr>
            <tr>
                <th><code>.error</code></th>
                <td>
                    <label><input type="checkbox" name="checkbox-error-in-label-4" class="--error" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <label><input type="checkbox" name="checkbox-error-in-label-4" checked class="--error" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-error-unselected-4" name="checkbox-error-out-label-4" type="checkbox" class="--error" tabindex="-1" /> <label for="checkbox-error-unselected-4">Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-error-selected-4" name="checkbox-error-out-label-4" type="checkbox" checked class="--error" tabindex="-1" /> <label for="checkbox-error-selected-4">Checkbox Label</label>
                </td>
            </tr>
            <tr>
                <th><code>[readonly]</code></th>
                <td>
                    <label><input type="checkbox" name="checkbox-readonly-in-label-5" readonly tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <label><input type="checkbox" name="checkbox-readonly-in-label-5" checked readonly tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-readonly-unselected-5" name="checkbox-readonly-out-label-5" type="checkbox" readonly tabindex="-1" /> <label for="checkbox-readonly-unselected-5">Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-readonly-selected-5" name="checkbox-readonly-out-label-5" type="checkbox" checked readonly tabindex="-1" /> <label for="checkbox-readonly-selected-5">Checkbox Label</label>
                </td>
            </tr>
            <tr>
                <th><code>[disabled]</code></th>
                <td>
                    <label><input type="checkbox" name="checkbox-disabled-in-label-6" disabled tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <label><input type="checkbox" name="checkbox-disabled-in-label-6" checked disabled tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-disabled-unselected-6" name="checkbox-disabled-out-label-6" type="checkbox" disabled tabindex="-1" /> <label for="checkbox-disabled-unselected-6">Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-disabled-selected-6" name="checkbox-disabled-out-label-6" type="checkbox" checked disabled tabindex="-1" /> <label for="checkbox-disabled-selected-6">Checkbox Label</label>
                </td>
            </tr>
        </tbody>
    </table>
    `},a={render:()=>`
    <style>
    tr:not(.live) {
        pointer-events: none;
    }
    </style>
    <table class="story">
        <thead>
            <tr>
                <th></th>
                <th colspan="2">in label</th>
                <th colspan="2">out label</th>
            </tr>
        </thead>
        <tbody>
            <tr class="live">
                <th>Enabled (live)</th>
                <td>
                    <label><input type="radio" name="radio-enabled-in-label-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-enabled-in-label-1" checked /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-enabled-unselected-1" name="radio-enabled-out-label-1" type="radio" /> <label for="radio-enabled-unselected-1">Radio Label</label>
                </td>
                <td>
                    <input id="radio-enabled-selected-1" name="radio-enabled-out-label-1" type="radio" checked /> <label for="radio-enabled-selected-1">Radio Label</label>
                </td>
            </tr>
            <tr>
                <th></th>
                <th>Unselected</th>
                <th>Selected</th>
                <th>Unselected</th>
                <th>Selected</th>
            </tr>
            <tr>
                <th><code>:hover / .--hover</code></th>
                <td>
                    <label><input type="radio" name="radio-hover-in-label-2" class="--hover" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-hover-in-label-2" checked class="--hover" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-hover-unselected-2" name="radio-hover-out-label-2" type="radio" class="--hover" tabindex="-1" /> <label for="radio-hover-unselected-2">Radio Label</label>
                </td>
                <td>
                    <input id="radio-hover-selected-2" name="radio-hover-out-label-2" type="radio" checked class="--hover" tabindex="-1" /> <label for="radio-hover-selected-2">Radio Label</label>
                </td>
            </tr>
            <tr>
                <th><code>:focus / .--focus</code></th>
                <td>
                    <label><input type="radio" name="radio-focus-in-label-3" class="--focus" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-focus-in-label-3" checked class="--focus" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-focus-unselected-3" name="radio-focus-out-label-3" type="radio" class="--focus" tabindex="-1" /> <label for="radio-focus-unselected-3">Radio Label</label>
                </td>
                <td>
                    <input id="radio-focus-selected-3" name="radio-focus-out-label-3" type="radio" checked class="--focus" tabindex="-1" /> <label for="radio-focus-selected-3">Radio Label</label>
                </td>
            </tr>
            <tr>
                <th><code>.error</code></th>
                <td>
                    <label><input type="radio" name="radio-error-in-label-4" class="--error" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-error-in-label-4" checked class="--error" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-error-unselected-4" name="radio-error-out-label-4" type="radio" class="--error" tabindex="-1" /> <label for="radio-error-unselected-4">Radio Label</label>
                </td>
                <td>
                    <input id="radio-error-selected-4" name="radio-error-out-label-4" type="radio" checked class="--error" tabindex="-1" /> <label for="radio-error-selected-4">Radio Label</label>
                </td>
            </tr>
            <tr>
                <th><code>[readonly]</code></th>
                <td>
                    <label><input type="radio" name="radio-readonly-in-label-5" readonly tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-readonly-in-label-5" checked readonly tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-readonly-unselected-5" name="radio-readonly-out-label-5" type="radio" readonly tabindex="-1" /> <label for="radio-readonly-unselected-5">Radio Label</label>
                </td>
                <td>
                    <input id="radio-readonly-selected-5" name="radio-readonly-out-label-5" type="radio" checked readonly tabindex="-1" /> <label for="radio-readonly-selected-5">Radio Label</label>
                </td>
            </tr>
            <tr>
                <th><code>[disabled]</code></th>
                <td>
                    <label><input type="radio" name="radio-disabled-in-label-6" disabled tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-disabled-in-label-6" checked disabled tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-disabled-unselected-6" name="radio-disabled-out-label-6" type="radio" disabled tabindex="-1" /> <label for="radio-disabled-unselected-6">Radio Label</label>
                </td>
                <td>
                    <input id="radio-disabled-selected-6" name="radio-disabled-out-label-6" type="radio" checked disabled tabindex="-1" /> <label for="radio-disabled-selected-6">Radio Label</label>
                </td>
            </tr>
        </tbody>
    </table>
    `},o={render:()=>`
        <p>Note: these inputs are defined in the buttons.css</p>
        <table class="story">
            <thead>
                <th>modifier</th>
                <th><code>[type=reset]</code></th>
                <th><code>[type=submit]</code></th>
                <th><code>[type=button]</code></th>
            </thead>
            <tbody>
                <tr>
                    <th>none</th>
                    <td><input type="reset" value="Reset" /></td>
                    <td><input type="submit" value="Submit" /></td>
                    <td><input type="button" value="button" /></td>
                </tr>
                <tr>
                    <th colspan="4" align="center">
                    If you need to override the default styles for some reason
                    </th>
                </tr>
                <tr>
                    <th><code>.button-secondary</code> (primary)</th>
                    <td><input class="button-secondary" type="reset" value="Reset" /></td>
                    <td><input class="button-secondary" type="submit" value="Submit" /></td>
                    <td><input class="button-secondary" type="button" value="button" /></td>
                </tr>
                <tr>
                    <th><code>.button-tertiary</code> (primary)</th>
                    <td><input class="button-tertiary" type="reset" value="Reset" /></td>
                    <td><input class="button-tertiary" type="submit" value="Submit" /></td>
                    <td><input class="button-tertiary" type="button" value="button" /></td>
                </tr>
                <tr>
                    <th><code>.button</code> (primary)</th>
                    <td><input class="button" type="reset" value="Reset" /></td>
                    <td><input class="button" type="submit" value="Submit" /></td>
                    <td><input class="button" type="button" value="button" /></td>
                </tr>
            </tbody>
        </table>
    `},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    otherTypes: 'email'
  },
  argTypes: {
    otherTypes: {
      control: 'select',
      options: ['email', 'tel', 'number', 'password', 'url', 'search', 'date', 'time', 'datetime-local', 'month', 'week']
    }
  },
  render(args) {
    requestAnimationFrame(() => {
      window.__ntgds__.run('clearableInputs');
    });
    return /*html*/\`
        <style>
            .text-like-inputs td input {
                width: 100%;
            }
        </style>
    <p><code>text</code> inputs and other similar fields: <br><code>email, tel, number, password, url, search, date, time, datetime-local, month, week</code></p>
    <table class="story text-like-inputs">
        <thead>
            <tr>
                <th></th>
                <th>[type="text"]</th>
                <th>other types<br>[type="\${args.otherTypes}"]</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Enabled (Empty)</th>
                <td>
                    \${renderField({
      type: 'text'
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes
    })}
                </td>
            </tr>
            <tr>
                <th>With <code>[data-clear]</code></th>
                <td>
                    \${renderField({
      type: 'text',
      dataClear: true
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      dataClear: true
    })}
                </td>
            </tr>
            <tr>
                <th><code>:hover</code> / <code>.--hover</code> (Empty)</th>
                <td>
                    \${renderField({
      type: 'text',
      className: '--hover'
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      className: '--hover'
    })}
                </td>
            </tr>
            <tr>
                <th><code>:focus</code> / <code>.--focus</code> (Empty)</th>
                <td>
                    \${renderField({
      type: 'text',
      className: '--focus'
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      className: '--focus'
    })}
                </td>
            </tr>
            <tr>
                <th><code>:focus</code> / <code>.--focus</code> (Filled)</th>
                <td>
                    \${renderField({
      type: 'text',
      className: '--focus',
      value: 'Input text',
      placeholder: ''
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      className: '--focus',
      value: 'Input text',
      placeholder: ''
    })}
                </td>
            </tr>
            <tr>
                <th>Enabled (Filled)</th>
                <td>
                    \${renderField({
      type: 'text',
      value: 'Input text',
      placeholder: ''
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      value: 'Input text',
      placeholder: ''
    })}
                </td>
            </tr>
            <tr>
                <th><code>.--success</code> (Empty)</th>
                <td>
                    \${renderField({
      type: 'text',
      success: true
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      success: true
    })}
                </td>
            </tr>
            <tr>
                <th><code>.--success</code> (Filled)</th>
                <td>
                    \${renderField({
      type: 'text',
      success: true,
      value: 'Input text',
      placeholder: ''
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      success: true,
      value: 'Input text',
      placeholder: ''
    })}
                </td>
            </tr>
            <tr>
                <th><code>.--error</code> (Empty)</th>
                <td>
                    \${renderField({
      type: 'text',
      error: true
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      error: true
    })}
                </td>
            </tr>
            <tr>
                <th><code>.--error</code> (Filled)</th>
                <td>
                    \${renderField({
      type: 'text',
      error: true,
      value: 'Input text',
      placeholder: ''
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      error: true,
      value: 'Input text',
      placeholder: ''
    })}
                </td>
            </tr>
            <tr>
                <th><code>[readonly]</code> (Idle)</th>
                <td>
                    \${renderField({
      type: 'text',
      readonly: true,
      value: 'Input text',
      placeholder: ''
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      readonly: true,
      value: 'Input text',
      placeholder: ''
    })}
                </td>
            </tr>
            <tr>
                <th><code>[readonly]</code> + <code>.--focus</code> (Focus)</th>
                <td>
                    \${renderField({
      type: 'text',
      readonly: true,
      className: '--focus',
      value: 'Input text',
      placeholder: ''
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      readonly: true,
      className: '--focus',
      value: 'Input text',
      placeholder: ''
    })}
                </td>
            </tr>
            <tr>
                <th><code>[disabled]</code> (Empty)</th>
                <td>
                    \${renderField({
      type: 'text',
      disabled: true,
      placeholder: 'Disabled text'
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      disabled: true,
      placeholder: 'Disabled text'
    })}
                </td>
            </tr>
        </tbody>
    </table>
    \`;
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>
    tr:not(.live) {
        pointer-events: none;
    }
    </style>
    <table class="story">
        <thead>
            <tr>
                <th></th>
                <th colspan="2">in label</th>
                <th colspan="2">out label</th>
            </tr>
        </thead>
        <tbody>
            <tr class="live">
                <th>Enabled (live)</th>
                <td colspan="2">
                    <label><input type="checkbox" name="checkbox-enabled-in-label-1" /> Checkbox Label</label>
                </td>
                <td  colspan="2">
                    <input id="checkbox-enabled-1" name="checkbox-enabled-out-label-1" type="checkbox" /> <label for="checkbox-enabled-1">Checkbox Label</label>
                </td>
            </tr>
            <tr>
                <th></th>
                <th>Unselected</th>
                <th>Selected</th>
                <th>Unselected</th>
                <th>Selected</th>
            </tr>
            <tr>
                <th><code>:hover / .--hover</code></th>
                <td>
                    <label><input type="checkbox" name="checkbox-hover-in-label-2" class="--hover" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <label><input type="checkbox" name="checkbox-hover-in-label-2" checked class="--hover" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-hover-unselected-2" name="checkbox-hover-out-label-2" type="checkbox" class="--hover" tabindex="-1" /> <label for="checkbox-hover-unselected-2">Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-hover-selected-2" name="checkbox-hover-out-label-2" type="checkbox" checked class="--hover" tabindex="-1" /> <label for="checkbox-hover-selected-2">Checkbox Label</label>
                </td>
            </tr>
            <tr>
                <th><code>:focus / .--focus</code></th>
                <td>
                    <label><input type="checkbox" name="checkbox-focus-in-label-3" class="--focus" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <label><input type="checkbox" name="checkbox-focus-in-label-3" checked class="--focus" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-focus-unselected-3" name="checkbox-focus-out-label-3" type="checkbox" class="--focus" tabindex="-1" /> <label for="checkbox-focus-unselected-3">Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-focus-selected-3" name="checkbox-focus-out-label-3" type="checkbox" checked class="--focus" tabindex="-1" /> <label for="checkbox-focus-selected-3">Checkbox Label</label>
                </td>
            </tr>
            <tr>
                <th><code>.error</code></th>
                <td>
                    <label><input type="checkbox" name="checkbox-error-in-label-4" class="--error" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <label><input type="checkbox" name="checkbox-error-in-label-4" checked class="--error" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-error-unselected-4" name="checkbox-error-out-label-4" type="checkbox" class="--error" tabindex="-1" /> <label for="checkbox-error-unselected-4">Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-error-selected-4" name="checkbox-error-out-label-4" type="checkbox" checked class="--error" tabindex="-1" /> <label for="checkbox-error-selected-4">Checkbox Label</label>
                </td>
            </tr>
            <tr>
                <th><code>[readonly]</code></th>
                <td>
                    <label><input type="checkbox" name="checkbox-readonly-in-label-5" readonly tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <label><input type="checkbox" name="checkbox-readonly-in-label-5" checked readonly tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-readonly-unselected-5" name="checkbox-readonly-out-label-5" type="checkbox" readonly tabindex="-1" /> <label for="checkbox-readonly-unselected-5">Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-readonly-selected-5" name="checkbox-readonly-out-label-5" type="checkbox" checked readonly tabindex="-1" /> <label for="checkbox-readonly-selected-5">Checkbox Label</label>
                </td>
            </tr>
            <tr>
                <th><code>[disabled]</code></th>
                <td>
                    <label><input type="checkbox" name="checkbox-disabled-in-label-6" disabled tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <label><input type="checkbox" name="checkbox-disabled-in-label-6" checked disabled tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-disabled-unselected-6" name="checkbox-disabled-out-label-6" type="checkbox" disabled tabindex="-1" /> <label for="checkbox-disabled-unselected-6">Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-disabled-selected-6" name="checkbox-disabled-out-label-6" type="checkbox" checked disabled tabindex="-1" /> <label for="checkbox-disabled-selected-6">Checkbox Label</label>
                </td>
            </tr>
        </tbody>
    </table>
    \`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>
    tr:not(.live) {
        pointer-events: none;
    }
    </style>
    <table class="story">
        <thead>
            <tr>
                <th></th>
                <th colspan="2">in label</th>
                <th colspan="2">out label</th>
            </tr>
        </thead>
        <tbody>
            <tr class="live">
                <th>Enabled (live)</th>
                <td>
                    <label><input type="radio" name="radio-enabled-in-label-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-enabled-in-label-1" checked /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-enabled-unselected-1" name="radio-enabled-out-label-1" type="radio" /> <label for="radio-enabled-unselected-1">Radio Label</label>
                </td>
                <td>
                    <input id="radio-enabled-selected-1" name="radio-enabled-out-label-1" type="radio" checked /> <label for="radio-enabled-selected-1">Radio Label</label>
                </td>
            </tr>
            <tr>
                <th></th>
                <th>Unselected</th>
                <th>Selected</th>
                <th>Unselected</th>
                <th>Selected</th>
            </tr>
            <tr>
                <th><code>:hover / .--hover</code></th>
                <td>
                    <label><input type="radio" name="radio-hover-in-label-2" class="--hover" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-hover-in-label-2" checked class="--hover" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-hover-unselected-2" name="radio-hover-out-label-2" type="radio" class="--hover" tabindex="-1" /> <label for="radio-hover-unselected-2">Radio Label</label>
                </td>
                <td>
                    <input id="radio-hover-selected-2" name="radio-hover-out-label-2" type="radio" checked class="--hover" tabindex="-1" /> <label for="radio-hover-selected-2">Radio Label</label>
                </td>
            </tr>
            <tr>
                <th><code>:focus / .--focus</code></th>
                <td>
                    <label><input type="radio" name="radio-focus-in-label-3" class="--focus" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-focus-in-label-3" checked class="--focus" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-focus-unselected-3" name="radio-focus-out-label-3" type="radio" class="--focus" tabindex="-1" /> <label for="radio-focus-unselected-3">Radio Label</label>
                </td>
                <td>
                    <input id="radio-focus-selected-3" name="radio-focus-out-label-3" type="radio" checked class="--focus" tabindex="-1" /> <label for="radio-focus-selected-3">Radio Label</label>
                </td>
            </tr>
            <tr>
                <th><code>.error</code></th>
                <td>
                    <label><input type="radio" name="radio-error-in-label-4" class="--error" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-error-in-label-4" checked class="--error" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-error-unselected-4" name="radio-error-out-label-4" type="radio" class="--error" tabindex="-1" /> <label for="radio-error-unselected-4">Radio Label</label>
                </td>
                <td>
                    <input id="radio-error-selected-4" name="radio-error-out-label-4" type="radio" checked class="--error" tabindex="-1" /> <label for="radio-error-selected-4">Radio Label</label>
                </td>
            </tr>
            <tr>
                <th><code>[readonly]</code></th>
                <td>
                    <label><input type="radio" name="radio-readonly-in-label-5" readonly tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-readonly-in-label-5" checked readonly tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-readonly-unselected-5" name="radio-readonly-out-label-5" type="radio" readonly tabindex="-1" /> <label for="radio-readonly-unselected-5">Radio Label</label>
                </td>
                <td>
                    <input id="radio-readonly-selected-5" name="radio-readonly-out-label-5" type="radio" checked readonly tabindex="-1" /> <label for="radio-readonly-selected-5">Radio Label</label>
                </td>
            </tr>
            <tr>
                <th><code>[disabled]</code></th>
                <td>
                    <label><input type="radio" name="radio-disabled-in-label-6" disabled tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-disabled-in-label-6" checked disabled tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-disabled-unselected-6" name="radio-disabled-out-label-6" type="radio" disabled tabindex="-1" /> <label for="radio-disabled-unselected-6">Radio Label</label>
                </td>
                <td>
                    <input id="radio-disabled-selected-6" name="radio-disabled-out-label-6" type="radio" checked disabled tabindex="-1" /> <label for="radio-disabled-selected-6">Radio Label</label>
                </td>
            </tr>
        </tbody>
    </table>
    \`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => \`
        <p>Note: these inputs are defined in the buttons.css</p>
        <table class="story">
            <thead>
                <th>modifier</th>
                <th><code>[type=reset]</code></th>
                <th><code>[type=submit]</code></th>
                <th><code>[type=button]</code></th>
            </thead>
            <tbody>
                <tr>
                    <th>none</th>
                    <td><input type="reset" value="Reset" /></td>
                    <td><input type="submit" value="Submit" /></td>
                    <td><input type="button" value="button" /></td>
                </tr>
                <tr>
                    <th colspan="4" align="center">
                    If you need to override the default styles for some reason
                    </th>
                </tr>
                <tr>
                    <th><code>.button-secondary</code> (primary)</th>
                    <td><input class="button-secondary" type="reset" value="Reset" /></td>
                    <td><input class="button-secondary" type="submit" value="Submit" /></td>
                    <td><input class="button-secondary" type="button" value="button" /></td>
                </tr>
                <tr>
                    <th><code>.button-tertiary</code> (primary)</th>
                    <td><input class="button-tertiary" type="reset" value="Reset" /></td>
                    <td><input class="button-tertiary" type="submit" value="Submit" /></td>
                    <td><input class="button-tertiary" type="button" value="button" /></td>
                </tr>
                <tr>
                    <th><code>.button</code> (primary)</th>
                    <td><input class="button" type="reset" value="Reset" /></td>
                    <td><input class="button" type="submit" value="Submit" /></td>
                    <td><input class="button" type="button" value="button" /></td>
                </tr>
            </tbody>
        </table>
    \`
}`,...o.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    otherTypes: 'email'
  },
  argTypes: {
    otherTypes: {
      control: 'select',
      options: ['email', 'tel', 'number', 'password', 'url', 'search', 'date', 'time', 'datetime-local', 'month', 'week']
    }
  },
  render(args) {
    requestAnimationFrame(() => {
      window.__ntgds__.run('clearableInputs');
    });
    return /*html*/\`
        <style>
            .text-like-inputs td input {
                width: 100%;
            }
        </style>
    <p><code>text</code> inputs and other similar fields: <br><code>email, tel, number, password, url, search, date, time, datetime-local, month, week</code></p>
    <table class="story text-like-inputs">
        <thead>
            <tr>
                <th></th>
                <th>[type="text"]</th>
                <th>other types<br>[type="\${args.otherTypes}"]</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Enabled (Empty)</th>
                <td>
                    \${renderField({
      type: 'text'
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes
    })}
                </td>
            </tr>
            <tr>
                <th>With <code>[data-clear]</code></th>
                <td>
                    \${renderField({
      type: 'text',
      dataClear: true
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      dataClear: true
    })}
                </td>
            </tr>
            <tr>
                <th><code>:hover</code> / <code>.--hover</code> (Empty)</th>
                <td>
                    \${renderField({
      type: 'text',
      className: '--hover'
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      className: '--hover'
    })}
                </td>
            </tr>
            <tr>
                <th><code>:focus</code> / <code>.--focus</code> (Empty)</th>
                <td>
                    \${renderField({
      type: 'text',
      className: '--focus'
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      className: '--focus'
    })}
                </td>
            </tr>
            <tr>
                <th><code>:focus</code> / <code>.--focus</code> (Filled)</th>
                <td>
                    \${renderField({
      type: 'text',
      className: '--focus',
      value: 'Input text',
      placeholder: ''
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      className: '--focus',
      value: 'Input text',
      placeholder: ''
    })}
                </td>
            </tr>
            <tr>
                <th>Enabled (Filled)</th>
                <td>
                    \${renderField({
      type: 'text',
      value: 'Input text',
      placeholder: ''
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      value: 'Input text',
      placeholder: ''
    })}
                </td>
            </tr>
            <tr>
                <th><code>.--success</code> (Empty)</th>
                <td>
                    \${renderField({
      type: 'text',
      success: true
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      success: true
    })}
                </td>
            </tr>
            <tr>
                <th><code>.--success</code> (Filled)</th>
                <td>
                    \${renderField({
      type: 'text',
      success: true,
      value: 'Input text',
      placeholder: ''
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      success: true,
      value: 'Input text',
      placeholder: ''
    })}
                </td>
            </tr>
            <tr>
                <th><code>.--error</code> (Empty)</th>
                <td>
                    \${renderField({
      type: 'text',
      error: true
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      error: true
    })}
                </td>
            </tr>
            <tr>
                <th><code>.--error</code> (Filled)</th>
                <td>
                    \${renderField({
      type: 'text',
      error: true,
      value: 'Input text',
      placeholder: ''
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      error: true,
      value: 'Input text',
      placeholder: ''
    })}
                </td>
            </tr>
            <tr>
                <th><code>[readonly]</code> (Idle)</th>
                <td>
                    \${renderField({
      type: 'text',
      readonly: true,
      value: 'Input text',
      placeholder: ''
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      readonly: true,
      value: 'Input text',
      placeholder: ''
    })}
                </td>
            </tr>
            <tr>
                <th><code>[readonly]</code> + <code>.--focus</code> (Focus)</th>
                <td>
                    \${renderField({
      type: 'text',
      readonly: true,
      className: '--focus',
      value: 'Input text',
      placeholder: ''
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      readonly: true,
      className: '--focus',
      value: 'Input text',
      placeholder: ''
    })}
                </td>
            </tr>
            <tr>
                <th><code>[disabled]</code> (Empty)</th>
                <td>
                    \${renderField({
      type: 'text',
      disabled: true,
      placeholder: 'Disabled text'
    })}
                </td>
                <td>
                    \${renderField({
      type: args.otherTypes,
      disabled: true,
      placeholder: 'Disabled text'
    })}
                </td>
            </tr>
        </tbody>
    </table>
    \`;
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>
    tr:not(.live) {
        pointer-events: none;
    }
    </style>
    <table class="story">
        <thead>
            <tr>
                <th></th>
                <th colspan="2">in label</th>
                <th colspan="2">out label</th>
            </tr>
        </thead>
        <tbody>
            <tr class="live">
                <th>Enabled (live)</th>
                <td colspan="2">
                    <label><input type="checkbox" name="checkbox-enabled-in-label-1" /> Checkbox Label</label>
                </td>
                <td  colspan="2">
                    <input id="checkbox-enabled-1" name="checkbox-enabled-out-label-1" type="checkbox" /> <label for="checkbox-enabled-1">Checkbox Label</label>
                </td>
            </tr>
            <tr>
                <th></th>
                <th>Unselected</th>
                <th>Selected</th>
                <th>Unselected</th>
                <th>Selected</th>
            </tr>
            <tr>
                <th><code>:hover / .--hover</code></th>
                <td>
                    <label><input type="checkbox" name="checkbox-hover-in-label-2" class="--hover" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <label><input type="checkbox" name="checkbox-hover-in-label-2" checked class="--hover" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-hover-unselected-2" name="checkbox-hover-out-label-2" type="checkbox" class="--hover" tabindex="-1" /> <label for="checkbox-hover-unselected-2">Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-hover-selected-2" name="checkbox-hover-out-label-2" type="checkbox" checked class="--hover" tabindex="-1" /> <label for="checkbox-hover-selected-2">Checkbox Label</label>
                </td>
            </tr>
            <tr>
                <th><code>:focus / .--focus</code></th>
                <td>
                    <label><input type="checkbox" name="checkbox-focus-in-label-3" class="--focus" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <label><input type="checkbox" name="checkbox-focus-in-label-3" checked class="--focus" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-focus-unselected-3" name="checkbox-focus-out-label-3" type="checkbox" class="--focus" tabindex="-1" /> <label for="checkbox-focus-unselected-3">Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-focus-selected-3" name="checkbox-focus-out-label-3" type="checkbox" checked class="--focus" tabindex="-1" /> <label for="checkbox-focus-selected-3">Checkbox Label</label>
                </td>
            </tr>
            <tr>
                <th><code>.error</code></th>
                <td>
                    <label><input type="checkbox" name="checkbox-error-in-label-4" class="--error" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <label><input type="checkbox" name="checkbox-error-in-label-4" checked class="--error" tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-error-unselected-4" name="checkbox-error-out-label-4" type="checkbox" class="--error" tabindex="-1" /> <label for="checkbox-error-unselected-4">Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-error-selected-4" name="checkbox-error-out-label-4" type="checkbox" checked class="--error" tabindex="-1" /> <label for="checkbox-error-selected-4">Checkbox Label</label>
                </td>
            </tr>
            <tr>
                <th><code>[readonly]</code></th>
                <td>
                    <label><input type="checkbox" name="checkbox-readonly-in-label-5" readonly tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <label><input type="checkbox" name="checkbox-readonly-in-label-5" checked readonly tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-readonly-unselected-5" name="checkbox-readonly-out-label-5" type="checkbox" readonly tabindex="-1" /> <label for="checkbox-readonly-unselected-5">Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-readonly-selected-5" name="checkbox-readonly-out-label-5" type="checkbox" checked readonly tabindex="-1" /> <label for="checkbox-readonly-selected-5">Checkbox Label</label>
                </td>
            </tr>
            <tr>
                <th><code>[disabled]</code></th>
                <td>
                    <label><input type="checkbox" name="checkbox-disabled-in-label-6" disabled tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <label><input type="checkbox" name="checkbox-disabled-in-label-6" checked disabled tabindex="-1" /> Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-disabled-unselected-6" name="checkbox-disabled-out-label-6" type="checkbox" disabled tabindex="-1" /> <label for="checkbox-disabled-unselected-6">Checkbox Label</label>
                </td>
                <td>
                    <input id="checkbox-disabled-selected-6" name="checkbox-disabled-out-label-6" type="checkbox" checked disabled tabindex="-1" /> <label for="checkbox-disabled-selected-6">Checkbox Label</label>
                </td>
            </tr>
        </tbody>
    </table>
    \`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <style>
    tr:not(.live) {
        pointer-events: none;
    }
    </style>
    <table class="story">
        <thead>
            <tr>
                <th></th>
                <th colspan="2">in label</th>
                <th colspan="2">out label</th>
            </tr>
        </thead>
        <tbody>
            <tr class="live">
                <th>Enabled (live)</th>
                <td>
                    <label><input type="radio" name="radio-enabled-in-label-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-enabled-in-label-1" checked /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-enabled-unselected-1" name="radio-enabled-out-label-1" type="radio" /> <label for="radio-enabled-unselected-1">Radio Label</label>
                </td>
                <td>
                    <input id="radio-enabled-selected-1" name="radio-enabled-out-label-1" type="radio" checked /> <label for="radio-enabled-selected-1">Radio Label</label>
                </td>
            </tr>
            <tr>
                <th></th>
                <th>Unselected</th>
                <th>Selected</th>
                <th>Unselected</th>
                <th>Selected</th>
            </tr>
            <tr>
                <th><code>:hover / .--hover</code></th>
                <td>
                    <label><input type="radio" name="radio-hover-in-label-2" class="--hover" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-hover-in-label-2" checked class="--hover" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-hover-unselected-2" name="radio-hover-out-label-2" type="radio" class="--hover" tabindex="-1" /> <label for="radio-hover-unselected-2">Radio Label</label>
                </td>
                <td>
                    <input id="radio-hover-selected-2" name="radio-hover-out-label-2" type="radio" checked class="--hover" tabindex="-1" /> <label for="radio-hover-selected-2">Radio Label</label>
                </td>
            </tr>
            <tr>
                <th><code>:focus / .--focus</code></th>
                <td>
                    <label><input type="radio" name="radio-focus-in-label-3" class="--focus" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-focus-in-label-3" checked class="--focus" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-focus-unselected-3" name="radio-focus-out-label-3" type="radio" class="--focus" tabindex="-1" /> <label for="radio-focus-unselected-3">Radio Label</label>
                </td>
                <td>
                    <input id="radio-focus-selected-3" name="radio-focus-out-label-3" type="radio" checked class="--focus" tabindex="-1" /> <label for="radio-focus-selected-3">Radio Label</label>
                </td>
            </tr>
            <tr>
                <th><code>.error</code></th>
                <td>
                    <label><input type="radio" name="radio-error-in-label-4" class="--error" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-error-in-label-4" checked class="--error" tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-error-unselected-4" name="radio-error-out-label-4" type="radio" class="--error" tabindex="-1" /> <label for="radio-error-unselected-4">Radio Label</label>
                </td>
                <td>
                    <input id="radio-error-selected-4" name="radio-error-out-label-4" type="radio" checked class="--error" tabindex="-1" /> <label for="radio-error-selected-4">Radio Label</label>
                </td>
            </tr>
            <tr>
                <th><code>[readonly]</code></th>
                <td>
                    <label><input type="radio" name="radio-readonly-in-label-5" readonly tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-readonly-in-label-5" checked readonly tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-readonly-unselected-5" name="radio-readonly-out-label-5" type="radio" readonly tabindex="-1" /> <label for="radio-readonly-unselected-5">Radio Label</label>
                </td>
                <td>
                    <input id="radio-readonly-selected-5" name="radio-readonly-out-label-5" type="radio" checked readonly tabindex="-1" /> <label for="radio-readonly-selected-5">Radio Label</label>
                </td>
            </tr>
            <tr>
                <th><code>[disabled]</code></th>
                <td>
                    <label><input type="radio" name="radio-disabled-in-label-6" disabled tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <label><input type="radio" name="radio-disabled-in-label-6" checked disabled tabindex="-1" /> Radio Label</label>
                </td>
                <td>
                    <input id="radio-disabled-unselected-6" name="radio-disabled-out-label-6" type="radio" disabled tabindex="-1" /> <label for="radio-disabled-unselected-6">Radio Label</label>
                </td>
                <td>
                    <input id="radio-disabled-selected-6" name="radio-disabled-out-label-6" type="radio" checked disabled tabindex="-1" /> <label for="radio-disabled-selected-6">Radio Label</label>
                </td>
            </tr>
        </tbody>
    </table>
    \`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => \`
        <p>Note: these inputs are defined in the buttons.css</p>
        <table class="story">
            <thead>
                <th>modifier</th>
                <th><code>[type=reset]</code></th>
                <th><code>[type=submit]</code></th>
                <th><code>[type=button]</code></th>
            </thead>
            <tbody>
                <tr>
                    <th>none</th>
                    <td><input type="reset" value="Reset" /></td>
                    <td><input type="submit" value="Submit" /></td>
                    <td><input type="button" value="button" /></td>
                </tr>
                <tr>
                    <th colspan="4" align="center">
                    If you need to override the default styles for some reason
                    </th>
                </tr>
                <tr>
                    <th><code>.button-secondary</code> (primary)</th>
                    <td><input class="button-secondary" type="reset" value="Reset" /></td>
                    <td><input class="button-secondary" type="submit" value="Submit" /></td>
                    <td><input class="button-secondary" type="button" value="button" /></td>
                </tr>
                <tr>
                    <th><code>.button-tertiary</code> (primary)</th>
                    <td><input class="button-tertiary" type="reset" value="Reset" /></td>
                    <td><input class="button-tertiary" type="submit" value="Submit" /></td>
                    <td><input class="button-tertiary" type="button" value="button" /></td>
                </tr>
                <tr>
                    <th><code>.button</code> (primary)</th>
                    <td><input class="button" type="reset" value="Reset" /></td>
                    <td><input class="button" type="submit" value="Submit" /></td>
                    <td><input class="button" type="button" value="button" /></td>
                </tr>
            </tbody>
        </table>
    \`
}`,...o.parameters?.docs?.source}}},s=[`Input`,`Checkbox`,`Radio`,`InputButtons`]}))();export{i as Checkbox,r as Input,o as InputButtons,a as Radio,s as __namedExportsOrder,t as default};
//# sourceMappingURL=inputs.stories-CQgUmP12.js.map