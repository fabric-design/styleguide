export default [
    {
        "name": "colors",
        "category": "design-system",
        "title": "Colors",
        "html": "<div class=\"colors\">\n    <div class=\"color-group\">\n        <h4>Orange</h4>\n        <ul class=\"color-list\">\n            <li data-color=\"#FFF6C4\">$egg-white</li>\n            <li data-color=\"#FFD77E\">$grandis</li>\n            <li data-color=\"#FF9C0F\">$west-side</li>\n            <li data-color=\"#FF6900\">$zalando-orange</li>\n        </ul>\n    </div>\n<p></div></p>",
        "headings": []
    },
    {
        "name": "buttons",
        "category": "core",
        "title": "Buttons",
        "html": "<h2 id=\"buttonstyles\">Button Styles</h2>\n<p>We have five button styles. Primary, secondary, toggle, flat and icon buttons.</p>\n<p><button>Primary Button</button></p>\n<pre><code class=\"html language-html\">&lt;button&gt;Primary button&lt;/button&gt; \n</code></pre>\n<p>A <strong>secondary button</strong> isn't as import as a primary one, so it shouldn't call as much attention. This button could be used for actions such as Cancel, Abort, Reset or Go back. </p>\n<p><button class=\"mod-secondary\">Secondary Button</button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"mod-secondary\"&gt;Secondary Button&lt;/button&gt;\n</code></pre>\n<p><strong>Toggle buttons</strong> allow single choice to be selected or deselected</p>\n<p><button class=\"mod-secondary mod-toggle\">Toggle Button</button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"mod-secondary mod-toggle\"&gt;Toggle Button&lt;/button&gt;\n</code></pre>\n<p><strong>Flat buttons</strong> looks like a normal anchor but on click they become the look of an button for a short time.</p>\n<p><button class=\"mod-flat\">Flat button</button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"mod-flat\"&gt;Flat button&lt;/button&gt;\n</code></pre>\n<p>A button could also just contain an <strong>icon</strong></p>\n<p><button class=\"mod-secondary\"><span class=\"icon-pencil-stroke icon16\"></span></button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"mod-secondary\"&gt;\n    &lt;span class=\"icon-pencil-stroke icon16\"&gt;&lt;/span&gt;\n&lt;/button&gt;\n</code></pre>\n<h2 id=\"buttonstates\">Button states</h2>\n<p>Buttons can have different states which can be represented using classes.</p>\n<p><strong>Disabled</strong></p>\n<p><button class=\"is-disabled\">Disabled button</button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"is-disabled\"&gt;Disabled button&lt;/button&gt;\n</code></pre>\n<p><strong>Focused</strong></p>\n<p><button class=\"is-focused\">Focused button</button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"is-focused\"&gt;Focused button&lt;/button&gt;\n</code></pre>\n<p><strong>Toggled</strong></p>\n<p><button class=\"is-toggled\">Toggled button</button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"is-toggled\"&gt;Toggled button&lt;/button&gt;\n</code></pre>\n<h2 id=\"buttonsizes\">Button sizes</h2>\n<p>All of our buttons can be small, normal or large. For normal buttons just do nothing and for small or large buttons add a modifier class.</p>\n<p><button class=\"mod-large\">Large button</button>\n<button>Normal button</button>\n<button class=\"mod-small\">Small button</button></p>\n<pre><code class=\"html language-html\">&lt;button class=\"mod-large\"&gt;Large button&lt;/button&gt;\n&lt;button&gt;Normal button&lt;/button&gt;\n&lt;button class=\"mod-small\"&gt;Small button&lt;/button&gt;\n</code></pre>",
        "headings": [
            "Button Styles",
            "Button states",
            "Button sizes"
        ]
    }
]