define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('app/articles',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = [{
        "name": "colors",
        "category": "designsystem",
        "title": "Colors",
        "html": "<ul class=\"color-list\">\n    <li style=\"background-color: #FFF6C4\"><span class=\"text\">$egg-white: #FFF6C4</span></li>\n    <li style=\"background-color: #FFD77E\"><span class=\"text\">$grandis: #FFD77E</span></li>\n    <li style=\"background-color: #FF9C0F\"><span class=\"text\">$west-side: #FF9C0F</span></li>\n    <li style=\"background-color: #FF6900\"><span class=\"text\">$zalando-orange: #FF6900</span></li>\n</ul>\n<ul class=\"color-list\">\n    <li style=\"background-color: #FFDDDB\"><span class=\"text\">$pippin: #FFDDDB</span></li>\n    <li style=\"background-color: #FA9585\"><span class=\"text\">$geraldine: #FA9585</span></li>\n    <li style=\"background-color: #F44F41\"><span class=\"text\">$flamingo: #F44F41</span></li>\n    <li style=\"background-color: #C74236\"><span class=\"text\">$mojo: #C74236</span></li>\n</ul>\n<ul class=\"color-list\">\n    <li style=\"background-color: #C9FFD1\"><span class=\"text\">$snowy-mint: #C9FFD1</span></li>\n    <li style=\"background-color: #A0EBA6\"><span class=\"text\">$madang: #A0EBA6</span></li>\n    <li style=\"background-color: #1EB234\"><span class=\"text\">$forest-green: #1EB234</span></li>\n    <li style=\"background-color: #188F2A\"><span class=\"text\">$kohpayam: #188F2A</span></li>\n</ul>\n<ul class=\"color-list\">\n    <li style=\"background-color: #DEF5FE\"><span class=\"text\">$arctica: #DEF5FE</span></li>\n    <li style=\"background-color: #B0D6FB\"><span class=\"text\">$sail: #B0D6FB</span></li>\n    <li style=\"background-color: #00ABF2\"><span class=\"text\">$heaven: #00ABF2</span></li>\n    <li style=\"background-color: #008DC9\"><span class=\"text\">$liverleaf: #008DC9</span></li>\n</ul>\n<p></br></br></p>\n<ul class=\"color-list\">\n    <li style=\"background-color: #FFFFFF\"><span class=\"text\">$white: #FFFFFF</span></li>\n    <li style=\"background-color: #FAFBFC\"><span class=\"text\">$athens-gray: #FAFBFC</span></li>\n    <li style=\"background-color: #F5F6F9\"><span class=\"text\">$catkin: #F5F6F9</span></li>\n    <li style=\"background-color: #F0F1F6\"><span class=\"text\">$silver: #F0F1F6</span></li>\n    <li style=\"background-color: #E9EAEF\"><span class=\"text\">$earl-gray: #E9EAEF</span></li>\n    <li style=\"background-color: #E1E2E8\"><span class=\"text\">$mischka: #E1E2E8</span></li>\n    <li style=\"background-color: #D5D7DE\"><span class=\"text\">$miroschka: #D5D7DE</span></li>\n    <li style=\"background-color: #CBCDD5\"><span class=\"text\">$ghost: #CBCDD5</span></li>\n    <li style=\"background-color: #BDBFC7\"><span class=\"text\">$french-gray: #BDBFC7</span></li>\n</ul>\n<ul class=\"color-list\">\n    <li style=\"background-color: #ACADB5\"><span class=\"text\">$bombay: #ACADB5</span></li>\n    <li style=\"background-color: #9B9BA3\"><span class=\"text\">$santas-gray: #9B9BA3</span></li>\n    <li style=\"background-color: #8B8A91\"><span class=\"text\">$jumbo: #8B8A91</span></li>\n    <li style=\"background-color: #7a7980\"><span class=\"text\">$heron: #7a7980</span></li>\n    <li style=\"background-color: #626166\"><span class=\"text\">$asphalt: #626166</span></li>\n    <li style=\"background-color: #454547\"><span class=\"text\">$abbey: #454547</span></li>\n    <li style=\"background-color: #272829\"><span class=\"text\">$shark: #272829</span></li>\n    <li style=\"background-color: #000000\"><span class=\"text\">$black: #000000</span></li>\n</ul>\n<p></br></br></br></p>",
        "headings": []
    }, {
        "name": "badge",
        "category": "elements",
        "title": "Badges",
        "html": "<h2 id=\"defaultbadge\">Default Badge</h2>\n<p>We have default filter badge:\n<span class=\"wsds-filter-badge\">100</span></p>\n<pre><code class=\"html language-html\">&lt;span class=\"wsds-filter-badge\"&gt;100&lt;/span&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"changecolorofbadge\">Change color of badge</h2>\n<p>To change color of text and background color of badge in your scss file you need to use badge mixin.\nFirstly, you need to add color of text and then color of background:\n</br></br></p>\n<pre><code class=\"css language-css\">.wsds-filter-badge {\n  @include badge($zalando-orange, $west-side)\n}\n</code></pre>\n<p></br></br>\nOf course, you can create your own class:</p>\n<pre><code class=\"css language-css\">.wsds-yellow-filter-badge {\n  @include badge($grandis, $west-side)\n}\n</code></pre>\n<p></br></br></br></p>",
        "headings": ["Default Badge", "Change color of badge"]
    }, {
        "name": "buttons",
        "category": "elements",
        "title": "Buttons",
        "html": "<h2 id=\"buttonstyles\">Button Styles</h2>\n<p>We have five button styles. Primary, secondary, toggle, flat and icon buttons. \nGiving your primary, secondary and tertiary action buttons the proper visuel weight facilitates user flow.\nWithout proper visual weight, you can cause the user to make mistakes.\n</br></br>\nIt is importatnt that the primary button have the strongest visual weight and identifies the primary action in a set of buttons.\n</br></br>\n<button>Primary Button</button></p>\n<pre><code class=\"html language-html\">&lt;button&gt;Primary button&lt;/button&gt; \n</code></pre>\n<p></br></br>\nA <strong>secondary button</strong> isn't as import as a primary one, so it shouldn't call as much attention. This button could be used for actions such as Cancel, Abort, Reset or Go back. \n</br></br>\n<button class=\"mod-secondary\">Secondary Button</button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"mod-secondary\"&gt;Secondary Button&lt;/button&gt;\n</code></pre>\n<p></br></br>\n<strong>Toggle buttons</strong> allow single choice to be selected or deselected\n</br></br>\n<button class=\"mod-secondary mod-toggle\">Toggle Button</button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"mod-secondary mod-toggle\"&gt;Toggle Button&lt;/button&gt;\n</code></pre>\n<p></br></br>\n<strong>Flat buttons</strong> looks like a normal anchor but on click they become the look of an button for a short time.\n</br></br>\n<button class=\"mod-flat\">Flat button</button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"mod-flat\"&gt;Flat button&lt;/button&gt;\n</code></pre>\n<p></br></br>\nA button could also just contain an <strong>icon</strong>\n</br></br>\n<button class=\"mod-secondary\"><span class=\"icon-pencil-stroke icon16\"></span></button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"mod-secondary\"&gt;\n    &lt;span class=\"icon-pencil-stroke icon16\"&gt;&lt;/span&gt;\n&lt;/button&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"buttonstates\">Button states</h2>\n<p>Buttons can have different states which can be represented using classes.\n</br></br>\n<strong>Disabled</strong>\n</br></br>\n<button class=\"is-disabled\">Disabled button</button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"is-disabled\"&gt;Disabled button&lt;/button&gt;\n</code></pre>\n<p></br></br>\n<strong>Focused</strong>\n</br></br>\n<button class=\"is-focused\">Focused button</button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"is-focused\"&gt;Focused button&lt;/button&gt;\n</code></pre>\n<p></br></br>\n<strong>Toggled</strong>\n</br></br>\n<button class=\"is-toggled\">Toggled button</button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"is-toggled\"&gt;Toggled button&lt;/button&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"buttonsizes\">Button sizes</h2>\n<p>All of our buttons can be small, normal or large. For normal buttons just do nothing and for small or large buttons add a modifier class.\n</br></br>\n<button class=\"mod-large\">Large button</button>\n<button>Normal button</button>\n<button class=\"mod-small\">Small button</button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"mod-large\"&gt;Large button&lt;/button&gt;\n&lt;button&gt;Normal button&lt;/button&gt;\n&lt;button class=\"mod-small\"&gt;Small button&lt;/button&gt;\n</code></pre>\n<p></br></br></br></br></p>",
        "headings": ["Button Styles", "Button states", "Button sizes"]
    }, {
        "name": "forms",
        "category": "elements",
        "title": "Forms",
        "html": "<h2 id=\"inputs\">Inputs</h2>\n<p>Our forms consist in general of text inputs, selects which will be shown as dropdown, labels, buttons and custom elements like the date picker.\nThe button, date picker and dropdown related part can be found on it's separate page. \n</br></br>\nA simple <strong>text input</strong> can have the types text, url, password, tel, number, color or email. \n</br></br>\n<input type=\"text\" placeholder=\"Wholesale rockz\" /></p>\n<pre><code class=\"html language-html\">&lt;input type=\"text\" placeholder=\"Wholesale rockz\" /&gt;\n</code></pre>\n<p></br></br>\n<strong>Textareas</strong> looks like an normal text input but you can resize it vertically. <strong>Only vertically</strong> \n</br></br>\n<textarea>Wholesale rockz</textarea></p>\n<pre><code class=\"html language-html\">&lt;textarea&gt;Wholesale rockz&lt;/textarea&gt;\n</code></pre>\n<p></br></br>\n<strong>Selects</strong> looks similar to text inputs but with a dropdown list. \n</br></br>\n<select>\n    <option>Wholesale rockz</option>\n    <option>Wholesale still rockz</option>\n    <option>Wholesale rockz for sure</option>\n</select></p>\n<pre><code class=\"html language-html\">&lt;select&gt;\n    &lt;option&gt;Wholesale rockz&lt;/option&gt;\n    &lt;option&gt;Wholesale still rockz&lt;/option&gt;\n    &lt;option&gt;Wholesale rockz for sure&lt;/option&gt;\n&lt;/select&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"labels\">Labels</h2>\n<p>All of our labels are displayed above the inputs\n</br></br>\n<label>Does wholesale rock?</label>\n<input type=\"text\" value=\"yes\"/></p>\n<pre><code class=\"html language-html\">&lt;label&gt;Does wholesale rock?&lt;/label&gt;\n&lt;input type=\"text\" value=\"yes\"/&gt;\n</code></pre>\n<p></br></br>\nTo mark an input as <strong>required</strong> add the required class to the label\n</br></br>\n<label class=\"required\">Does wholesale rock?</label>\n<input type=\"text\" value=\"yes\"/></p>\n<pre><code class=\"html language-html\">&lt;label class=\"required\"&gt;Does wholesale rock?&lt;/label&gt;\n&lt;input type=\"text\" value=\"yes\"/&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"toggles\">Toggles</h2>\n<p>We support common checkboxes, radio buttons and on/off switches\n</br></br>\n<strong>Checkboxes</strong> consists of an label and an input element. Important is that the label is placed directly after the input element.\nFor better user experience you should add an id attribute on the input and reference on it via an from attribute on the label.\n</br></br>\n<input type=\"checkbox\" id=\"vote\" name=\"vote\" checked />\n<label for=\"vote\">Is wholesale sexy?</label></p>\n<pre><code class=\"html language-html\">&lt;input type=\"checkbox\" id=\"vote\" name=\"vote\" checked /&gt;\n&lt;label for=\"vote\"&gt;Is wholesale sexy?&lt;/label&gt;\n</code></pre>\n<p></br></br>\n<strong>Radio buttons</strong>  markup looks similar to checkboxes except that you specify the type as 'radio' and that you add a name to create a radio group. \n</br></br>\n<input type=\"radio\" name=\"action\" value=\"rockz\" id=\"rockz\" checked/>\n<label for=\"rockz\">Wholesale rockz</label>\n<input type=\"radio\" name=\"action\" value=\"sux\" id=\"sux\"/>\n<label for=\"sux\">Wholesale sux</label></p>\n<pre><code class=\"html language-html\">&lt;input type=\"radio\" name=\"action\" value=\"nothing\" id=\"nothing\" checked/&gt;\n&lt;label for=\"nothing\"&gt;Do nothing&lt;/label&gt;\n&lt;input type=\"radio\" name=\"action\" value=\"something\" id=\"something\"/&gt;\n&lt;label for=\"something\"&gt;Do something&lt;/label&gt;\n</code></pre>\n<p></br></br>\n<strong>Switches</strong> requires the input to be from type <em>checkbox</em> and to have the class <em>.mod-switch</em>.\n</br></br>\n<input type=\"checkbox\" class=\"mod-switch\" id=\"switch\"/>\n<label for=\"switch\">Off/On</label></p>\n<pre><code class=\"html language-html\">&lt;input type=\"checkbox\" class=\"mod-switch\" id=\"switch\"/&gt;\n&lt;label for=\"switch\"&gt;Off/On&lt;/label&gt;\n</code></pre>\n<p></br></br>\n<strong>Reverse order</strong> of input and label, so the label is on the right side of the toggle, can be done by wrapping the toggle and label with the class <em>.mod-toggle-reverse</em>.\n</br></br></p>\n<div class=\"mod-toggle-reverse\">\n    <input type=\"checkbox\" class=\"mod-switch\" id=\"switch2\"/>\n    <label for=\"switch2\">Off/On</label>\n</div>\n<pre><code class=\"html language-html\">&lt;div class=\"mod-toggle-reverse\"&gt;\n    &lt;input type=\"checkbox\" class=\"mod-switch\" id=\"switch2\"/&gt;\n    &lt;label for=\"switch2\"&gt;Off/On&lt;/label&gt;\n&lt;/div&gt;\n</code></pre>\n<p></br></br></br></p>",
        "headings": ["Inputs", "Labels", "Toggles"]
    }, {
        "name": "icons",
        "category": "elements",
        "title": "Icons",
        "html": "<h2 id=\"availableicons\">Available Icons</h2>\n<ul class=\"icon-list\">\n    <li><span class=\"icon-filter icon24\"></span><span class=\"text\">.icon-filter</span></li>\n    <li><span class=\"icon-sort-down icon24\"></span><span class=\"text\">.icon-sort-down</span></li>\n    <li><span class=\"icon-arrow_right_circle icon24\"></span><span class=\"text\">.icon-arrow_right_circle</span></li>\n    <li><span class=\"icon-zalando icon24\"></span><span class=\"text\">.icon-zalando</span></li>\n    <li><span class=\"icon-dot icon24\"></span><span class=\"text\">.icon-dot</span></li>\n    <li><span class=\"icon-ok icon24\"></span><span class=\"text\">.icon-ok</span></li>\n    <li><span class=\"icon-checkmark-checkbox icon24\"></span><span class=\"text\">.icon-checkmark-checkbox</span></li>\n    <li><span class=\"icon-arrow_left_circle icon24\"></span><span class=\"text\">.icon-arrow_left_circle</span></li>\n    <li><span class=\"icon-power icon24\"></span><span class=\"text\">.icon-power</span></li>\n    <li><span class=\"icon-warning-circle icon24\"></span><span class=\"text\">.icon-warning-circle</span></li>\n    <li><span class=\"icon-x icon24\"></span><span class=\"text\">.icon-x</span></li>\n    <li><span class=\"icon-left icon24\"></span><span class=\"text\">.icon-left</span></li>\n    <li><span class=\"icon-right icon24\"></span><span class=\"text\">.icon-right</span></li>\n    <li><span class=\"icon-check icon24\"></span><span class=\"text\">.icon-check</span></li>\n    <li><span class=\"icon-info-circled-alt icon24\"></span><span class=\"text\">.icon-info-circled-alt</span></li>\n    <li><span class=\"icon-attention-alt icon24\"></span><span class=\"text\">.icon-attention-alt</span></li>\n    <li><span class=\"icon-cancel-circled icon24\"></span><span class=\"text\">.icon-cancel-circled</span></li>\n    <li><span class=\"icon-magnifiying-glass icon24\"></span><span class=\"text\">.icon-magnifiying-glass</span></li>\n    <li><span class=\"icon-pencil-stroke icon24\"></span><span class=\"text\">.icon-pencil-stroke</span></li>\n    <li><span class=\"icon-sort-up icon24\"></span><span class=\"text\">.icon-sort-up</span></li>\n    <li><span class=\"icon-warning-triangle icon24\"></span><span class=\"text\">.icon-warning-triangle</span></li>\n    <li><span class=\"icon-cross icon24\"></span><span class=\"text\">.icon-cross</span></li>\n    <li><span class=\"icon-bell icon24\"></span><span class=\"text\">.icon-bell</span></li>\n    <li><span class=\"icon-calendar icon24\"></span><span class=\"text\">.icon-calendar</span></li>\n    <li><span class=\"icon-gear icon24\"></span><span class=\"text\">.icon-gear</span></li>\n    <li><span class=\"icon-heart icon24\"></span><span class=\"text\">.icon-heart</span></li>\n    <li><span class=\"icon-home icon24\"></span><span class=\"text\">.icon-home</span></li>\n    <li><span class=\"icon-locked icon24\"></span><span class=\"text\">.icon-locked</span></li>\n    <li><span class=\"icon-paperclip icon24\"></span><span class=\"text\">.icon-paperclip</span></li>\n    <li><span class=\"icon-lightbulb icon24\"></span><span class=\"text\">.icon-lightbulb</span></li>\n    <li><span class=\"icon-checkmark-circle icon24\"></span><span class=\"text\">.icon-checkmark-circle</span></li>\n    <li><span class=\"icon-circle icon24\"></span><span class=\"text\">.icon-circle</span></li>\n</ul>\n<h2 id=\"iconsizes\">Icon sizes</h2>\n<p>Our icons are in general displayed in one of 4 sizes. Those can be 16x16, 24x24, 32x32 or 48x48 pixels.\nTo achieve this simply add one of the following classes to your icon: icon16, icon24, icon32 or icon48\n</br></br>\n<span class=\"icon-lightbulb icon48\"></span>\n<span class=\"icon-lightbulb icon32\"></span>\n<span class=\"icon-lightbulb icon24\"></span>\n<span class=\"icon-lightbulb icon16\"></span></p>\n<pre><code class=\"html language-html\">&lt;span class=\"icon-lightbulb icon48\"&gt;&lt;/span&gt;\n&lt;span class=\"icon-lightbulb icon32\"&gt;&lt;/span&gt;\n&lt;span class=\"icon-lightbulb icon24\"&gt;&lt;/span&gt;\n&lt;span class=\"icon-lightbulb icon16\"&gt;&lt;/span&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"loader\">Loader</h2>\n<p>To show our <strong>spinner</strong> aka loader you have to add a division element containing an span to your page.\n</br></br></p>\n<div class=\"icon-zalando mod-spinner\"><span></span></div>\n<pre><code class=\"html language-html\">&lt;div class=\"icon-zalando mod-spinner\"&gt;&lt;span&gt;&lt;/span&gt;&lt;/div&gt;\n</code></pre>\n<p></br></br></br></p>",
        "headings": ["Available Icons", "Icon sizes", "Loader"]
    }, {
        "name": "pagination",
        "category": "elements",
        "title": "Pagination",
        "html": "<p>We have also default pagination:\nFunctions like <code>navigate()</code> need to move user to correct page.\nYou also can disable working arrows by changing the <code>disabled</code> property of buttons:\nThis example of aurelia disable buttons if you are on first page or on last page:</p>\n<pre><code class=\"html language-html\">    &lt;button class=\"mod-flat\" disabled.bind=\"page &lt; 1\" onclick=\"navigate(-1)\"&gt;&amp;lsaquo;&lt;/button&gt;\n    &lt;button class=\"mod-flat\" disabled.bind=\"page &gt;= total / size - 1\" onclick=\"navigate(1)\"&gt;&amp;rsaquo;&lt;/button&gt;\n</code></pre>\n<p></br></br></p>\n<div class=\"pagination\">\n    <button class=\"mod-flat\" onclick=\"navigate(-1)\">&lsaquo;</button>\n    <span class=\"current\">1-5</span>\n    <span class=\"separator\">of</span>\n    <span class=\"total\">20</span>\n    <button class=\"mod-flat\" onclick=\"navigate(1)\">&rsaquo;</button>\n</div>\n<pre><code class=\"html language-html\">&lt;div class=\"pagination\"&gt;\n    &lt;button class=\"mod-flat\" onclick=\"navigate(-1)\"&gt;&amp;lsaquo;&lt;/button&gt;\n    &lt;span class=\"current\"&gt;1-5&lt;/span&gt;\n    &lt;span class=\"separator\"&gt;of&lt;/span&gt;\n    &lt;span class=\"total\"&gt;20&lt;/span&gt;\n    &lt;button class=\"mod-flat\" onclick=\"navigate(1)\"&gt;&amp;rsaquo;&lt;/button&gt;\n&lt;/div&gt;\n</code></pre>\n<p></br></br></br></p>",
        "headings": []
    }, {
        "name": "tables",
        "category": "elements",
        "title": "Tables",
        "html": "<h2 id=\"defaulttable\">Default Table</h2>\n<p>Default table provides an alternating row background color to increase usability for wide tables.\nRows also have a hover effect to indicate click interactions.\nLimit the number of rows to 10 and use pagination to view further data.\nExcept it is nessecary to have an overview about a larger amounts of data,\nthen its allowed to use a fixed table header with scrollable body.\n</br></br></p>\n<table>\n    <thead>\n        <tr>\n            <th>\n                <label>Name</label>\n            </th>\n            <th>\n                <label>Type</label>\n            </th>\n            <th>\n                <label>Owner</label>\n            </th>\n            <th>\n                <label>Team</label>\n            </th>\n            <th>\n                <label>Price</label>\n            </th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Topic name 10</td>\n            <td>Bug</td>\n            <td>Selina Kyle</td>\n            <td>Tooling</td>\n            <td>4.500,00</td>\n        </tr>\n        <tr>\n            <td>Topic name 9</td>\n            <td>Refactoring</td>\n            <td>Pamela Isley</td>\n            <td>Tooling</td>\n            <td>3.239,00</td>\n        </tr>\n        <tr>\n            <td>Topic name 8</td>\n            <td>Work package</td>\n            <td>Solomon Grundy</td>\n            <td>Tooling</td>\n            <td>46,80</td>\n        </tr>\n        <tr>\n            <td>Topic name 7</td>\n            <td>Improvement</td>\n            <td>Betty Kane</td>\n            <td>Tooling</td>\n            <td>123,00</td>\n        </tr>\n        <tr>\n            <td>Topic name 6</td>\n            <td>Project</td>\n            <td>Bruce Banner</td>\n            <td>Tooling</td>\n            <td>10.899,00</td>\n        </tr>\n        <tr>\n            <td>Topic name 5</td>\n            <td>Big feature</td>\n            <td>Ras Al Ghul</td>\n            <td>Tooling</td>\n            <td>567,00</td>\n        </tr>\n        <tr>\n            <td>Topic name 4</td>\n            <td>Milestone</td>\n            <td>Bruce Wayne</td>\n            <td>Tooling</td>\n            <td>23,50</td>\n        </tr>\n        <tr>\n            <td>Topic name 3</td>\n            <td>A/B Test</td>\n            <td>Steven Rogers</td>\n            <td>Tooling</td>\n            <td>890,00</td>\n        </tr>\n        <tr>\n            <td>Topic name 2</td>\n            <td>Feature</td>\n            <td>Curtis Newton</td>\n            <td>Tooling</td>\n            <td>99,00</td>\n        </tr>\n        <tr>\n            <td>Topic name 1</td>\n            <td>Improvement</td>\n            <td>Edward Nygma</td>\n            <td>Tooling</td>\n            <td>12.500,00</td>\n        </tr>\n        <tr class=\"pagination-row\">\n            <td colspan=\"5\">\n                <div class=\"pagination\">\n                    <span class=\"current\">1-10</span>\n                    <span class=\"separator\">of</span>\n                    <span class=\"total\">23</span>\n                    <a href=\"#\">\n                        <span class=\"icon-left icon16\"></span>\n                    </a>\n                    <a href=\"#\">\n                        <span class=\"icon-right icon16\"></span>\n                    </a>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<p></br></br></p>\n<pre><code class=\"html language-html\">&lt;table&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;\n                &lt;label&gt;Name&lt;/label&gt;\n            &lt;/th&gt;\n            &lt;th&gt;\n                &lt;label&gt;Type&lt;/label&gt;\n            &lt;/th&gt;\n            &lt;th&gt;\n                &lt;label&gt;Owner&lt;/label&gt;\n            &lt;/th&gt;\n            &lt;th&gt;\n                &lt;label&gt;Team&lt;/label&gt;\n            &lt;/th&gt;\n            &lt;th&gt;\n                &lt;label&gt;Price&lt;/label&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &lt;tr&gt;\n            &lt;td&gt;Topic name 10&lt;/td&gt;\n            &lt;td&gt;Bug&lt;/td&gt;\n            &lt;td&gt;Selina Kyle&lt;/td&gt;\n            &lt;td&gt;Tooling&lt;/td&gt;\n            &lt;td&gt;4.500,00&lt;/td&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;td&gt;Topic name 9&lt;/td&gt;\n            &lt;td&gt;Refactoring&lt;/td&gt;\n            &lt;td&gt;Pamela Isley&lt;/td&gt;\n            &lt;td&gt;Tooling&lt;/td&gt;\n            &lt;td&gt;3.239,00&lt;/td&gt;\n        &lt;/tr&gt;\n        &lt;tr class=\"pagination-row\"&gt;\n            &lt;td colspan=\"5\"&gt;\n                &lt;div class=\"pagination\"&gt;\n                    &lt;span class=\"current\"&gt;1-10&lt;/span&gt;\n                    &lt;span class=\"separator\"&gt;of&lt;/span&gt;\n                    &lt;span class=\"total\"&gt;23&lt;/span&gt;\n                    &lt;a href=\"#\"&gt;\n                        &lt;span class=\"icon-left icon16\"&gt;&lt;/span&gt;\n                    &lt;/a&gt;\n                    &lt;a href=\"#\"&gt;\n                        &lt;span class=\"icon-right icon16\"&gt;&lt;/span&gt;\n                    &lt;/a&gt;\n                &lt;/div&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/tbody&gt;\n&lt;/table&gt;\n</code></pre>\n<p></br></br></br></br></p>",
        "headings": ["Default Table"]
    }];
});
define('app/environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('app/main',['exports', './environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;

    var _environment2 = _interopRequireDefault(_environment);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function configure(aurelia) {
        aurelia.use.standardConfiguration().globalResources(['app/view/iterable-converter']);

        if (_environment2.default.debug) {
            aurelia.use.developmentLogging();
        }

        if (_environment2.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }

        aurelia.start().then(function () {
            return aurelia.setRoot('app/view/app', document.body);
        });
    }
});
define('app/view/app',['exports', '../articles'], function (exports, _articles) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.App = undefined;

    var _articles2 = _interopRequireDefault(_articles);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var App = exports.App = function () {
        function App() {
            _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
            config.map([{ route: '', name: 'default', redirect: '/' + _articles2.default[0].category + '/' + _articles2.default[0].name }, { route: '/:category/:page', name: 'article-page', moduleId: 'app/view/article-page' }]);
        };

        return App;
    }();
});
define('app/view/article-page',['exports', 'app/articles'], function (exports, _articles) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ArticlePage = undefined;

    var _articles2 = _interopRequireDefault(_articles);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _class, _temp;

    var ArticlePage = exports.ArticlePage = (_temp = _class = function () {
        function ArticlePage(element) {
            _classCallCheck(this, ArticlePage);

            this.element = element;
        }

        ArticlePage.prototype.activate = function activate(_ref) {
            var category = _ref.category,
                page = _ref.page;

            var article = _articles2.default.find(function (article) {
                return article.category === category && article.name === page;
            });

            if (article) {
                this.name = article.name;
                this.category = article.category;
                this.title = article.title;
                this.articleHtml = article.html;
                this.headings = article.headings;
            }
        };

        ArticlePage.prototype.scrollToPart = function scrollToPart(index) {
            var headElements = this.element.querySelectorAll('h2');
            if (headElements[index]) {
                headElements[index].scrollIntoView();
            }
        };

        return ArticlePage;
    }(), _class.inject = [Element], _temp);
});
define('app/view/iterable-converter',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var IterableValueConverter = exports.IterableValueConverter = function () {
        function IterableValueConverter() {
            _classCallCheck(this, IterableValueConverter);
        }

        IterableValueConverter.prototype.toView = function toView(obj) {
            var map = new Map();

            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    map.set(key, obj[key]);
                }
            }

            return map;
        };

        return IterableValueConverter;
    }();
});
define('app/view/navigation',['exports', 'aurelia-router', 'aurelia-event-aggregator', '../articles'], function (exports, _aureliaRouter, _aureliaEventAggregator, _articles) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.NavigationCustomElement = undefined;

    var _articles2 = _interopRequireDefault(_articles);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _class, _temp;

    var NavigationCustomElement = exports.NavigationCustomElement = (_temp = _class = function () {
        function NavigationCustomElement(router, events) {
            var _this = this;

            _classCallCheck(this, NavigationCustomElement);

            this.categories = {};
            this.currentCategory = null;
            this.currentPage = null;

            events.subscribe('router:navigation:success', this.pageChanged.bind(this));

            _articles2.default.forEach(function (article) {
                _this.categories[article.category] = _this.categories[article.category] || [];
                _this.categories[article.category].push(article);
            });
        }

        NavigationCustomElement.prototype.showSubMenu = function showSubMenu(item) {
            var menu = item.querySelector('.sub-nav');
            var items = item.querySelectorAll('.subnav-item');

            if (item.classList.contains('is-active')) {
                return;
            }

            if (!menu || !items.length) {
                return;
            }

            menu.style.height = '0';
            menu.style.transition = 'height ' + .03 * items.length + 's linear';
            menu.style.height = items[0].offsetHeight * items.length + 'px';
        };

        NavigationCustomElement.prototype.hideSubMenu = function hideSubMenu(item) {
            var menu = item.querySelector('.sub-nav');

            if (item.classList.contains('is-active')) {
                return;
            }

            if (!menu) {
                return;
            }

            menu.style.transition = 'height .2s linear';
            menu.style.height = '0';
        };

        NavigationCustomElement.prototype.pageChanged = function pageChanged(_ref) {
            var instruction = _ref.instruction;

            var params = instruction.params;

            if (!params || !params.category) {
                params = instruction.router.currentInstruction.params || {};
            }
            this.currentCategory = params.category;
            this.currentPage = params.page;
        };

        return NavigationCustomElement;
    }(), _class.inject = [_aureliaRouter.Router, _aureliaEventAggregator.EventAggregator], _temp);
});
define('text!app/view/app-header.html', ['module'], function(module) { module.exports = "<template>\n    <header class=\"site-header\">\n        <figure class=\"site-logo\">\n            <img src=\"src/style/assets/logo.png\">\n        </figure>\n        <a class=\"github\" href=\"https://github.com/wholesale-design-system\" target=\"_blank\">\n            <figure class=\"logo\">\n                <svg><use xlink:href=\"src/style/assets/github.svg#logo\"></use></svg>\n            </figure>\n            <span>View on GitHub</span>\n        </a>\n    </header>\n</template>\n"; });
define('text!app/view/app.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"../../style/index.css\"></require>\n    <div class=\"site-wrapper\">\n        <require from=\"app/view/app-header.html\"></require>\n        <app-header></app-header>\n        <div class=\"row collapse\">\n            <aside class=\"column small-4\">\n                <require from=\"app/view/navigation\"></require>\n                <navigation></navigation>\n            </aside>\n            <section class=\"column small-19 end site-content\">\n                <router-view></router-view>\n            </section>\n        </div>\n    </div>\n</template>\n"; });
define('text!app/view/article-page.html', ['module'], function(module) { module.exports = "<template>\n    <div class=\"column small-20 small-centered\">\n        <header class=\"page-header\">\n            <h1>${title}</h1>\n            <nav if.bind=\"headings.length\">\n                <ul>\n                    <li repeat.for=\"heading of headings\">\n                        <a click.delegate=\"scrollToPart($index)\">${heading}</a>\n                    </li>\n                </ul>\n            </nav>\n        </header>\n        <div class=\"row\">\n            <article class=\"content\" innerhtml.bind=\"articleHtml\"></article>\n        </div>\n    </div>\n</template>\n"; });
define('text!app/view/navigation.html', ['module'], function(module) { module.exports = "<template>\n    <nav class=\"site-nav\">\n        <ul>\n            <li class=\"nav-item ${category === $parent.currentCategory ? 'is-active' : ''}\"\n                repeat.for=\"[category, articles] of categories | iterable\"\n                mouseenter.trigger=\"$parent.showSubMenu($event.currentTarget)\"\n                mouseleave.trigger=\"$parent.hideSubMenu($event.currentTarget)\">\n                <a href=\"#${category}\">${category}</a>\n                <ul class=\"sub-nav\" if.bind=\"articles\">\n                    <li class=\"subnav-item ${article.name === $parent.$parent.currentPage ? 'is-active' : ''}\"\n                        repeat.for=\"article of articles\">\n                        <a route-href=\"route: article-page; params.bind: {category: $parent.category, page: article.name}\">\n                            ${article.title}\n                        </a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </nav>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map