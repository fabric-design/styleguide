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
define('prop-types',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.oneOf = oneOf;
  exports.oneOfType = oneOfType;
  function oneOf() {}
  function oneOfType() {}
  var func = exports.func = {};
});
define('app/articles',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = [{
        "name": "storage",
        "category": "api",
        "title": "storage",
        "html": "<h2 id=\"abstractstorage\">AbstractStorage</h2>\n<p></br></br>\nThis class describes the interface of an storage class\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>name</code><br />\n</br></br></li>\n</ul>\n<h3 id=\"constructor-NaN\">constructor</h3>\n<p></br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>name</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> The storage name\n</br></br></li>\n</ul>\n<h3 id=\"set\">set</h3>\n<p></br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>key</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Storage key name</li>\n<li><code>value</code> <strong>any</strong> Value to store\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"get\">get</h3>\n<p></br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>key</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Storage key name\n</br></br>\nReturns <strong>any</strong> \n</br></br></li>\n</ul>\n<h3 id=\"remove\">remove</h3>\n<p></br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>key</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Storage key name\n</br></br>\nReturns <strong>void</strong> </li>\n</ul>\n<h2 id=\"cookiestorage\">CookieStorage</h2>\n<p></br></br>\n<strong>Extends AbstractStorage</strong>\n</br></br>\nThis class implements a key value storage based on top level domain cookies\n</br></br></p>\n<h3 id=\"set-1\">set</h3>\n<p></br></br>\nSet value for specific key in cookies\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>key</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Storage key name</li>\n<li><code>value</code> <strong>any</strong> Value to store\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"get-1\">get</h3>\n<p></br></br>\nGet value from cookies by it's storage key\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>key</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Storage key name\n</br></br>\nReturns <strong>any</strong> \n</br></br></li>\n</ul>\n<h3 id=\"remove-1\">remove</h3>\n<p></br></br>\nRemoves a stored value by its storage key\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>key</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Storage key name\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"createcookie\">createCookie</h3>\n<p></br></br>\nCreates a cookie for the current top level domain\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>key</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Cookie name without storage name</li>\n<li><code>value</code> <strong>any</strong> Cookie value (not serialized)</li>\n<li><code>expires</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date\">Date</a></strong> Cookie expiration date\n</br></br>\nReturns <strong>void</strong> </li>\n</ul>\n<h2 id=\"localstorage\">LocalStorage</h2>\n<p></br></br>\n<strong>Extends AbstractStorage</strong>\n</br></br>\nThis class implements a key value storage based on top level domain cookies\n</br></br></p>\n<h3 id=\"set-2\">set</h3>\n<p></br></br>\nSet value for specific key in localStorage\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>key</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Storage key name</li>\n<li><code>value</code> <strong>any</strong> Value to store\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"get-2\">get</h3>\n<p></br></br>\nGet value from localStorage by it's storage key\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>key</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Storage key name\n</br></br>\nReturns <strong>any</strong> \n</br></br></li>\n</ul>\n<h3 id=\"remove-2\">remove</h3>\n<p></br></br>\nRemoves a stored value by its storage key\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>key</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Storage key name\n</br></br>\nReturns <strong>void</strong> \n</br></br></br></li>\n</ul>",
        "headings": ["AbstractStorage", "CookieStorage", "LocalStorage"]
    }, {
        "name": "ws-date-picker",
        "category": "api",
        "title": "ws-date-picker",
        "html": "<h2 id=\"wsdatepicker\">WSDatePicker</h2>\n<p></br></br>\n<strong>Extends Component</strong>\n</br></br>\nRenders a date picker component which is based on flatpickr.\nTo specify a date format call the setFormat function with the corresponding format.\nPls have a look at the flatpickr formatting rules.\nYou can set additional options to the flatpickr by passing the options property.\nIf you only want to display an icon instead of a input set prop iconOnly.\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code><br />\n</br></br></li>\n</ul>\n<h3 id=\"constructor-NaN\">constructor</h3>\n<p></br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React properties\n</br></br></li>\n</ul>\n<h3 id=\"componentdidmount\">componentDidMount</h3>\n<p></br></br>\nInitialize the flatpickr with given options and prevent default change event\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"componentwillreceiveprops\">componentWillReceiveProps</h3>\n<p></br></br>\nUpdate flatpickr when prop's changed\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React props\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"componentwillunmount\">componentWillUnmount</h3>\n<p></br></br>\nDestroy the flatpickr and all events and bindings\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"onchange\">onChange</h3>\n<p></br></br>\nHandle date selections and propagate the value via an custom change event and onChange callback\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>selectedDate</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date\">Date</a></strong> The currently selected date<ul>\n<li><code>selectedDate.0</code>  </li></ul></li>\n<li><code>value</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">String</a></strong> The date as string using the in props specified formatting\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"render\">render</h3>\n<p></br></br>\nRender the component\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></p>\n<h3 id=\"setformat\">setFormat</h3>\n<p></br></br>\nSet the format for all date picker instances\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>format</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Format following flatpickr options\n</br></br>\nReturns <strong>void</strong> \n</br></br></br></li>\n</ul>",
        "headings": ["WSDatePicker"]
    }, {
        "name": "ws-dropdown",
        "category": "api",
        "title": "ws-dropdown",
        "html": "<h2 id=\"dropdowninput\">DropdownInput</h2>\n<p></br></br>\n<strong>Extends Component</strong>\n</br></br>\nRenders renders a text input inside a dropdown container to provide a free text dropdown component.\nPossible options are value and placeholder which are both strings.\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code><br />\n</br></br>\n<strong>Properties</strong>\n</br></br></li>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React properties object<ul>\n<li><code>props.value</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Value of text input</li>\n<li><code>props.placeholder</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Placeholder for text inputs (Filter input or Input only version)</li>\n<li><code>props.handle</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function\">Function</a></strong> Function used to propagate data\n</br></br></li></ul></li>\n</ul>\n<h3 id=\"constructor-NaN\">constructor</h3>\n<p></br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React props\n</br></br></li>\n</ul>\n<h3 id=\"componentdidmount\">componentDidMount</h3>\n<p></br></br>\nPrevent default change event to bubble up\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"componentwillunmount\">componentWillUnmount</h3>\n<p></br></br>\nPrevent default change event to bubble up\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"onkeydown\">onKeyDown</h3>\n<p></br></br>\nCall submit on enter key\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>event</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent\">KeyboardEvent</a></strong> JavaScript Event object\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">Boolean</a></strong> \n</br></br></li>\n</ul>\n<h3 id=\"onchange\">onChange</h3>\n<p></br></br>\nSet input value to state\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>event</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent\">KeyboardEvent</a></strong> JavaScript event object\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"onsubmit\">onSubmit</h3>\n<p></br></br>\nCalled when enter or submit key is pressed\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"onopen\">onOpen</h3>\n<p></br></br>\nBind keyboard listener and focus input if available when dropdown opens\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"getheight\">getHeight</h3>\n<p></br></br>\nGets the height of the menu container to scale the outer container up\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">Number</a></strong> \n</br></br></p>\n<h3 id=\"render\">render</h3>\n<p></br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></p>\n<h3 id=\"defaultprops\">defaultProps</h3>\n<p></br></br></p>\n<h3 id=\"proptypes\">propTypes</h3>\n<h2 id=\"dropdownmenuitem\">DropdownMenuItem</h2>\n<p></br></br>\n<strong>Extends Component</strong>\n</br></br>\nThis class renders a list item inside a dropdown menu. Since the wrapper menu is missing this class is pretty\nuseless as standalone. It also renders child menu's if the passed item has children.\nThe item object can have the following properties\n{\n    label: String,\n    href: String, // Fully qualified URI\n    icon: String, // The icon of an item must be a css class name\n    children: Array<Item>,\n    selected: Boolean, // Adds the class .is-active to the .dropdown-item\n    focused: Boolean, // Adds the class .is-focused to the .dropdown-item\n    disabled: Boolean // Adds thr class .is-disabled to the .dropdown-item\n}\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code>  </li>\n<li><code>context</code><br />\n</br></br>\n<strong>Properties</strong>\n</br></br></li>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React properties object<ul>\n<li><code>props.item</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> Dropdown item configuration</li>\n<li><code>props.icon</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Class name of icon in trigger</li>\n<li><code>props.isParent</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">Boolean</a></strong> Flag to identify if this item renders the parent dropdown item</li>\n<li><code>props.handle</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function\">Function</a></strong> Function used to propagate data\n</br></br></li></ul></li>\n</ul>\n<h3 id=\"constructor\">constructor</h3>\n<p></br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React props</li>\n<li><code>context</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React context\n</br></br></li>\n</ul>\n<h3 id=\"componentdidmount-1\">componentDidMount</h3>\n<p></br></br>\nListen for clicks on dropdown item\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"componentwillreceiveprops\">componentWillReceiveProps</h3>\n<p></br></br>\nImportant to update the state when the items in menu changed.\nWhen in the multi select a dropdown item is selected and stored (submitted) it will be filtered out\nof the item list and shown in a separate value list. React doesn't created new components but reuses them.\nThis leads to property updates and without this function a wrong item will be rendered.\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React component props\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"componentwillunmount-1\">componentWillUnmount</h3>\n<p></br></br>\nListen for clicks on dropdown item\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"onclick\">onClick</h3>\n<p></br></br>\nHandle clicks on this dropdown item. This can trigger a back navigation, selecting the item on multi selects\nor change the dropdown value for simple dropdown's\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>event</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent\">MouseEvent</a></strong> JavaScript event object\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"handlepropagation\">handlePropagation</h3>\n<p></br></br>\nThis is required to propagate changes from child menu to parent menu.\nFor instance if the menu size, it's value changed or the parent or child menu should be shown.\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>type</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">String</a></strong> Type of propagated data</li>\n<li><code>data</code> <strong>any</strong> Data which was propagated. Can be height of child menu or reference of child\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"render-1\">render</h3>\n<p></br></br>\nRenders the dropdown item\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></p>\n<h3 id=\"defaultprops-1\">defaultProps</h3>\n<p></br></br></p>\n<h3 id=\"proptypes-1\">propTypes</h3>\n<p></br></br></p>\n<h3 id=\"contexttypes\">contextTypes</h3>\n<h2 id=\"dropdownmenu\">DropdownMenu</h2>\n<p></br></br>\n<strong>Extends Component</strong>\n</br></br>\nThis class renders the menu inside a dropdown container. Since the wrapper WSDropdown is missing, which provides\nadditional wrapping markup and functionality, you SHOULD NOT use this component as standalone.\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code>  </li>\n<li><code>context</code><br />\n</br></br>\n<strong>Properties</strong>\n</br></br></li>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React properties object<ul>\n<li><code>props.parent</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> Parent dropdown item. Only set if this is a child menu</li>\n<li><code>props.items</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array\">Array</a>&lt;<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a>></strong> List of dropdown item configs. Each item can contain label, value, disabled, selected</li>\n<li><code>props.value</code> <strong>(<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a> | <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array\">Array</a>&lt;<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a>>)</strong> Selected dropdown item(s)</li>\n<li><code>props.filterable</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">Boolean</a></strong> Flag if the dropdown menu is filterable</li>\n<li><code>props.filter</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Default filter value</li>\n<li><code>props.limit</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Limit visible dropdown items. Use together with filterable flag.</li>\n<li><code>props.placeholder</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Placeholder for text inputs (Filter input or Input only version)</li>\n<li><code>props.handle</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function\">Function</a></strong> Function used to propagate data\n</br></br></li></ul></li>\n</ul>\n<h3 id=\"constructor-1\">constructor</h3>\n<p></br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React props</li>\n<li><code>context</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React context\n</br></br></li>\n</ul>\n<h3 id=\"componentdidmount-2\">componentDidMount</h3>\n<p></br></br>\nPrevent default change event to bubble up\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"componentwillreceiveprops-1\">componentWillReceiveProps</h3>\n<p></br></br>\nHandle changes of passed properties\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React props\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"componentdidupdate\">componentDidUpdate</h3>\n<p></br></br>\nSend the new height of this menu after update to the parent.\nThis will be called when updateFilter did set the new state\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"componentwillunmount-2\">componentWillUnmount</h3>\n<p></br></br>\nPrevent default change event to bubble up\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"onopen-1\">onOpen</h3>\n<p></br></br>\nBind keyboard listener and focus input if available when dropdown opens\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"onclose\">onClose</h3>\n<p></br></br>\nUnbind keyboard listener when dropdown closes\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"onglobalkeydown\">onGlobalKeyDown</h3>\n<p></br></br>\nHandle global key down events to select items\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>event</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent\">KeyboardEvent</a></strong> JavaScript event object\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"onkeyupupdatefilter\">onKeyUpUpdateFilter</h3>\n<p></br></br>\nSets the input value as filter\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>event</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent\">KeyboardEvent</a></strong> JavaScript event object\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"onclicksubmit\">onClickSubmit</h3>\n<p></br></br>\nHandles submit action on multi select drop downs\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>event</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Event\">Event</a></strong> JavaScript event object\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"getheight-1\">getHeight</h3>\n<p></br></br>\nGets the current height of the menu\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">Number</a></strong> \n</br></br></p>\n<h3 id=\"getfiltereditems\">getFilteredItems</h3>\n<p></br></br>\nIf there is a filter active it applies it on the available items\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array\">Array</a>&lt;<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a>></strong> \n</br></br></p>\n<h3 id=\"getitematindex\">getItemAtIndex</h3>\n<p></br></br>\nGet the item for an index which can match the value or items list\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>index</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Index across value and filtered items\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></li>\n</ul>\n<h3 id=\"focusnextitem\">focusNextItem</h3>\n<p></br></br>\nDepending on the direction it marks the next dropdown item as focused\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>direction</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Can be 1 for down or -1 for up direction\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"selectcurrentitem\">selectCurrentItem</h3>\n<p></br></br>\nMark the currently focused item as selected\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"clearselections\">clearSelections</h3>\n<p></br></br>\nDeselect all items which are not stored as value. Only relevant for multi select dropdown.\nWhen the dropdown will be closed without pressing submit the state will be restored\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"handlepropagation-1\">handlePropagation</h3>\n<p></br></br>\nHandles data propagation from child menus\nThis function uses arrow function to bind the scope to this instance\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>type</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">String</a></strong> Should be just show-parent</li>\n<li><code>data</code> <strong>any</strong> Propagated data. Could be for instance a menu reference or the menu height.\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"showchild\">showChild</h3>\n<p></br></br>\nShows the child menu and hides the current menu\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>subMenu</code> <strong>WSDropdownMenu</strong> The reference of the child menu to show\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"showcurrent\">showCurrent</h3>\n<p></br></br>\nShows this menu and hides currently open sub menu\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"animatein\">animateIn</h3>\n<p></br></br>\nAnimates a menu or sub menu into the view\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>goBack</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">Boolean</a></strong> True if a menu should be shown and a sub menu be hidden\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"animateout\">animateOut</h3>\n<p></br></br>\nAnimates a menu or sub menu out of the view\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>goBack</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">Boolean</a></strong> True if a menu should be hidden and a sub menu be shown\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"animateelement\">animateElement</h3>\n<p></br></br>\nAnimates an element by adding a class with an css animation and executes a callback when the animation ends\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>item</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Element\">Element</a></strong> The dom node to animate</li>\n<li><code>animationClass</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">String</a></strong> The css class which holds the animation definition</li>\n<li><code>callback</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function\">Function</a></strong> Callback which will be executed at the end of the animation\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"render-2\">render</h3>\n<p></br></br>\nRenders the dropdown menu\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></p>\n<h3 id=\"defaultprops-2\">defaultProps</h3>\n<p></br></br></p>\n<h3 id=\"proptypes-2\">propTypes</h3>\n<p></br></br></p>\n<h3 id=\"contexttypes-1\">contextTypes</h3>\n<h2 id=\"wsdropdown\">WSDropdown</h2>\n<p></br></br>\n<strong>Extends Component</strong>\n</br></br>\nThis class describes a Preact/React component which renders a dropdown.\nThe dropdown can be used as select, multi select, filterable select or as a simple menu.\nRegarding the flags the changed value will look different. The flag inputOnly results in a string,\nthe flag multiple results in an array and without those flags the change event details contain an object.\nAs trigger type you can choose between an anchor, button or a select like looking container.\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code><br />\n</br></br>\n<strong>Properties</strong>\n</br></br></li>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React properties object<ul>\n<li><code>props.type</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Type of trigger. Can be anchor, button, select or icon</li>\n<li><code>props.text</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Text of trigger</li>\n<li><code>props.icon</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Class name of icon in trigger</li>\n<li><code>props.multiple</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">Boolean</a></strong> Flag if the dropdown is a multi select menu</li>\n<li><code>props.filterable</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">Boolean</a></strong> Flag if the dropdown menu is filterable</li>\n<li><code>props.inputOnly</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">Boolean</a></strong> Flag if the dropdown only contains a text input and a button</li>\n<li><code>props.filter</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Default filter value</li>\n<li><code>props.limit</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Limit visible dropdown items. Use together with filterable flag.</li>\n<li><code>props.orientation</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Dropdown orientation. Can be either left or right</li>\n<li><code>props.placeholder</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Placeholder for text inputs (Filter input or Input only version)</li>\n<li><code>props.onChange</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Callback for react components to propagate value changes\n</br></br></li></ul></li>\n</ul>\n<h3 id=\"constructor-2\">constructor</h3>\n<p></br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React props\n</br></br></li>\n</ul>\n<h3 id=\"getchildcontext\">getChildContext</h3>\n<p></br></br>\nCalled by React to get the types of the child context values\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></p>\n<h3 id=\"componentdidmount-3\">componentDidMount</h3>\n<p></br></br>\nStart listening for clicks in window\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"componentwillreceiveprops-2\">componentWillReceiveProps</h3>\n<p></br></br>\nHandle changes of passed properties\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React props\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"componentwillunmount-3\">componentWillUnmount</h3>\n<p></br></br>\nStop listening for clicks in window\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"ondocumentclick\">onDocumentClick</h3>\n<p></br></br>\nHandles click on document body to close the dropdown if clicked elsewhere\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>event</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent\">MouseEvent</a></strong> JavaScript event object\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"ontriggerclick\">onTriggerClick</h3>\n<p></br></br>\nHandle clicks on dropdown trigger\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>event</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent\">MouseEvent</a></strong> JavaScript event object\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"onanyevent\">onAnyEvent</h3>\n<p></br></br>\nPrevent event to bubble up and keep it inside drop down\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>event</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Event\">Event</a></strong> Event object\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"onglobalkeydown-1\">onGlobalKeyDown</h3>\n<p></br></br>\nHandles global key down events when dropdown was opened\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>event</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent\">KeyboardEvent</a></strong> JavaScript event object\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"gettextfromvalue\">getTextFromValue</h3>\n<p></br></br>\nGet text from labels of selected items\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>value</code> <strong>(<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">String</a> | <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a> | <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array\">Array</a>&lt;<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a>>)</strong> Selected items</li>\n<li><code>args</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array\">Array</a>&lt;any></strong> Optionally a default text can be passed\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">String</a></strong> \n</br></br></li>\n</ul>\n<h3 id=\"setvalue\">setValue</h3>\n<p></br></br>\nSet the value of the dropdown and update the display text if the trigger element is a select\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>value</code> <strong>(<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a> | <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array\">Array</a>&lt;<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a>>)</strong> The new dropdown value\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"createstate\">createState</h3>\n<p></br></br>\nCreate state object from properties\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React props\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></li>\n</ul>\n<h3 id=\"handlepropagation-2\">handlePropagation</h3>\n<p></br></br>\nHandles data propagation from child elements\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>type</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">String</a></strong> Either change for value changes or change-size which will be emitted on menu changes</li>\n<li><code>data</code> <strong>(<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a> | <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">Number</a>)</strong> Either new value or height of new menu\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"enrichitems\">enrichItems</h3>\n<p></br></br>\nUsed to convert the items if they are strings into the required object structure\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>items</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array\">Array</a>&lt;(<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">String</a> | <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a>)></strong> List of items represented as string or object\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array\">Array</a>&lt;<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a>></strong> \n</br></br></li>\n</ul>\n<h3 id=\"open\">open</h3>\n<p></br></br>\nOpens the dropdown\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"close\">close</h3>\n<p></br></br>\nCloses the dropdown and clears the selection if needed\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"adjustsize\">adjustSize</h3>\n<p></br></br>\nSet's the size on an element\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>newSize</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">Number</a></strong> The new size of the active menu will become the new dropdown container size\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"animateelement-1\">animateElement</h3>\n<p></br></br>\nAnimates an element by adding a class with an css animation and executes a callback when the animation ends\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>item</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Element\">Element</a></strong> The dom node to animate</li>\n<li><code>animationClass</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">String</a></strong> The css class which holds the animation definition</li>\n<li><code>callback</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function\">Function</a></strong> Callback which will be executed at the end of the animation\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"rendertrigger\">renderTrigger</h3>\n<p></br></br>\nRenders the dropdown trigger element\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></p>\n<h3 id=\"rendercontent\">renderContent</h3>\n<p></br></br>\nRender the content of the dropdown which can be a menu with only input and submit button\nor a common menu with list items\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></p>\n<h3 id=\"render-3\">render</h3>\n<p></br></br>\nRender the complete dropdown\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></p>\n<h3 id=\"defaultprops-3\">defaultProps</h3>\n<p></br></br></p>\n<h3 id=\"proptypes-3\">propTypes</h3>\n<p></br></br></p>\n<h3 id=\"opendropdown\">openDropdown</h3>\n<p></br></br></p>\n<h3 id=\"childcontexttypes\">childContextTypes</h3>\n<p></br></br></br></p>",
        "headings": ["DropdownInput", "DropdownMenuItem", "DropdownMenu", "WSDropdown"]
    }, {
        "name": "ws-header",
        "category": "api",
        "title": "ws-header",
        "html": "<h2 id=\"authorization\">Authorization</h2>\n<p></br></br>\nThis class implements the OAuth2 authorization via the implicit flow.\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>storage</code>  </li>\n<li><code>loginUrl</code>   (optional, default <code>''</code>)</li>\n<li><code>clientId</code>   (optional, default <code>''</code>)</li>\n<li><code>businessPartnerId</code>   (optional, default <code>''</code>)\n</br></br></li>\n</ul>\n<h3 id=\"constructor-NaN\">constructor</h3>\n<p></br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>storage</code> <strong>AbstractStorage</strong> Key value storage</li>\n<li><code>loginUrl</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Url the user get's redirected to authorize (optional, default <code>''</code>)</li>\n<li><code>clientId</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> OAuth2 client id (optional, default <code>''</code>)</li>\n<li><code>businessPartnerId</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> OAuth2 business partner id (optional, default <code>''</code>)\n</br></br></li>\n</ul>\n<h3 id=\"onaccesstokenchange\">onAccessTokenChange</h3>\n<p></br></br>\nSet a listener for access token changes\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>callback</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function\">Function</a></strong> Gets called when the access token changes\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"changeaccesstoken\">changeAccessToken</h3>\n<p></br></br>\nGet's called when ever the access token changes\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>accessToken</code> <strong>(<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a> | null)</strong> New access token\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"tryfetchtoken\">tryFetchToken</h3>\n<p></br></br>\nTries to parse the access token from the given query string\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>queryString</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Query string without leading ?\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"authorize\">authorize</h3>\n<p></br></br>\nRedirect the user to the OAuth2 authorization page\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"unauthorize\">unauthorize</h3>\n<p></br></br>\nRemove authorization\n</br></br>\nReturns <strong>void</strong> </p>\n<h2 id=\"wsheader\">WSHeader</h2>\n<p></br></br>\n<strong>Extends Component</strong>\n</br></br>\nThis component renders a generic header which provides authentication and language management\n</br></br>\nOptionally call WSHeader.setStorageType('cookie', 'zalando') If you want a to use cookies instead of localStorage\nto persist the tokens. You can call WSHeader.getAccessToken().then(token =&gt; ...) to get the current access token.\nIt will resolve null when no access token is present and therefore the user isn't logged in.\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code><br />\n</br></br></li>\n</ul>\n<h3 id=\"constructor\">constructor</h3>\n<p></br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React/Preact properties\n</br></br></li>\n</ul>\n<h3 id=\"componentdidmount\">componentDidMount</h3>\n<p></br></br>\nDetect mounted state to prevent calling setState to early\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"setlocale\">setLocale</h3>\n<p></br></br>\nChanges the locale to the given one\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>newLocale</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> The new locale\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"initstate\">initState</h3>\n<p></br></br>\nInitialize the component state\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"initauthorization\">initAuthorization</h3>\n<p></br></br>\nInitialize the OAuth2 authorization\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React/Preact props\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"entermenuitem\">enterMenuItem</h3>\n<p></br></br>\nGet's called when the mouse enters a menu item\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>index</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> The index of the item in the link list\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"leavemenuitem\">leaveMenuItem</h3>\n<p></br></br>\nGet's called when the mouse leaves a menu item\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>index</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> The index of the item in the link list\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"enterlevel2\">enterLevel2</h3>\n<p></br></br>\nGet's called when the mouse enters into the level 2 (sub menu)\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"leavelevel2\">leaveLevel2</h3>\n<p></br></br>\nGet's called when the mouse leaves the level 2 (sub menu)\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"render\">render</h3>\n<p></br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></p>\n<h3 id=\"storage\">storage</h3>\n<p></br></br>\nDefault storage instance\n</br></br></p>\n<h3 id=\"setstoragetype\">setStorageType</h3>\n<p></br></br>\nInitialize the storage\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>type</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Can be either cookie or local</li>\n<li><code>name</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Storage name will be used as key prefix\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"getaccesstoken\">getAccessToken</h3>\n<p></br></br>\nTries to get the access token from authorization class\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>queryString</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> The current query string to parse the token from (optional, default <code>location.hash.substr(1)</code>)\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise\">Promise</a></strong> \n</br></br></li>\n</ul>\n<h3 id=\"getlocale\">getLocale</h3>\n<p></br></br>\nRetrieve the persisted locale\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> \n</br></br></br></p>",
        "headings": ["Authorization", "WSHeader"]
    }, {
        "name": "ws-inline-edit",
        "category": "api",
        "title": "ws-inline-edit",
        "html": "<h2 id=\"wsinlineedit\">WSInlineEdit</h2>\n<p></br></br>\n<strong>Extends Component</strong>\n</br></br>\nThis class describes a Preact/React component which renders a inline-edit element.\nThe inline-edit component can be used everywhere in block where you want to have ability to change value.\nAs an example you can use it in div blocks, rows, tables.\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code><br />\n</br></br></li>\n</ul>\n<h3 id=\"constructor-NaN\">constructor</h3>\n<p></br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> Preact props\n</br></br></li>\n</ul>\n<h3 id=\"state\">state</h3>\n<p></br></br></p>\n<h3 id=\"editelement\">editElement</h3>\n<p></br></br>\nFunction that show input when you click on div and focus it\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"keyaction\">keyAction</h3>\n<p></br></br>\nFunction that save text when click 'Enter' or cancel when click 'Escape' button\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>e</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> click event\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></li>\n</ul>\n<h3 id=\"bluraction\">blurAction</h3>\n<p></br></br>\nFunction that save text when input on blur and send text value to updating function\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>e</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> click event\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></li>\n</ul>\n<h3 id=\"updating\">updating</h3>\n<p></br></br>\nFunction that return value for outside use if text is not the same\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>text</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> text to show\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></li>\n</ul>\n<h3 id=\"render\">render</h3>\n<p></br></br>\nRender the complete inline-edit component\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></p>\n<h3 id=\"proptypes\">propTypes</h3>\n<p></br></br></p>\n<h3 id=\"defaultprops\">defaultProps</h3>\n<p></br></br></br></p>",
        "headings": ["WSInlineEdit"]
    }, {
        "name": "ws-notification",
        "category": "api",
        "title": "ws-notification",
        "html": "<h2 id=\"wsnotification\">WSNotification</h2>\n<p></br></br>\n<strong>Extends Component</strong>\n</br></br>\nThis class renders a notification list. To add new notifications here you have to publish a event to the window\nwith the name 'ws-notification-open' and the options listed below. To close all notifications just publish a event\nwith the name 'ws-notification-close-all' to the window object.\n</br></br>\nExample with options:\n</br></br>\n<strong>Examples</strong>\n</br></br></p>\n<pre><code class=\"javascript language-javascript\">window.dispatchEvent(new CustomEvent('ws-notification-open', {detail: {\n  title: 'test', // Required string\n  description: 'additional info', // Optional string\n  type: 'warning', // Enum of info|success|warning|error. Default: info\n  lifetime: 5000, // Lifetime of notification in milliseconds. Default: max int\n}});\n</code></pre>\n<p></br></br></p>\n<h3 id=\"constructor-NaN\">constructor</h3>\n<p></br></br></p>\n<h3 id=\"componentdidmount\">componentDidMount</h3>\n<p></br></br>\nListen to events on window object\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"componentdidupdate\">componentDidUpdate</h3>\n<p></br></br>\nTrigger animation of new notification if needed\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>prevProps</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> Previous react component properties</li>\n<li><code>prevState</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> Previous react component state\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"componentwillunmount\">componentWillUnmount</h3>\n<p></br></br>\nUnbind event listener from window object\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"addnotify\">addNotify</h3>\n<p></br></br>\nCallback of event to add new notification to the list\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>event</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent\">CustomEvent</a></strong> JavaScript event object\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"animatein\">animateIn</h3>\n<p></br></br>\nStart to animate in a notification\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>notification</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> The notification to animate in</li>\n<li><code>index</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">Number</a></strong> Index of notification in the list\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"closeallevents\">closeAllEvents</h3>\n<p></br></br>\nClose all open notifications\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"close\">close</h3>\n<p></br></br>\nClose a specific notification\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>index</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">Number</a></strong> The index of the notification in the list\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"render\">render</h3>\n<p></br></br>\nRender the notification list\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></br></p>",
        "headings": ["WSNotification"]
    }, {
        "name": "ws-spinner",
        "category": "api",
        "title": "ws-spinner",
        "html": "<h2 id=\"wsspinner\">WSSpinner</h2>\n<p></br></br>\n<strong>Extends Component</strong>\n</br></br>\nRenders a simple spinner with the primary color\n</br></br>\n<strong>Properties</strong>\n</br></br></p>\n<ul>\n<li><code>size</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> One of small, medium, large. Default to medium</li>\n<li><code>isWhite</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">boolean</a></strong> True if the spinner color should be white\n</br></br></li>\n</ul>\n<h3 id=\"render\">render</h3>\n<p></br></br>\nReturns <strong>XML</strong> \n</br></br></p>\n<h3 id=\"proptypes\">propTypes</h3>\n<p></br></br></p>\n<h3 id=\"defaultprops\">defaultProps</h3>\n<p></br></br></br></p>",
        "headings": ["WSSpinner"]
    }, {
        "name": "ws-tiles-chart",
        "category": "api",
        "title": "ws-tiles-chart",
        "html": "<h2 id=\"tile\">Tile</h2>\n<p></br></br>\n<strong>Extends Component</strong>\n</br></br>\nThis class describes a Preact/React component which renders a single tile\n</br></br>\n<strong>Properties</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React properties object<ul>\n<li><code>props.identifier</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> identifier of the tile</li>\n<li><code>props.config</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> Defines the background color of the tile</li>\n<li><code>props.groupName</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> The class of the tile which can also be used for color styling</li>\n<li><code>props.size</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Defines the width and height of the tile</li>\n<li><code>props.onClick</code> <strong>func</strong> function(groupName,identifier,element) that is called when a tile is clicked\n</br></br></li></ul></li>\n</ul>\n<h3 id=\"render\">render</h3>\n<p></br></br>\nRenders the chart\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></p>\n<h3 id=\"proptypes\">propTypes</h3>\n<p></br></br></p>\n<h3 id=\"defaultprops\">defaultProps</h3>\n<h2 id=\"wstileschart\">WSTilesChart</h2>\n<p></br></br>\n<strong>Extends Component</strong>\n</br></br>\nThis class describes a Preact/React component which renders a tiles chart\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code><br />\n</br></br>\n<strong>Properties</strong>\n</br></br></li>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React properties object<ul>\n<li><code>props.data</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> Defines the Groups of tiles that should be shown in the chart</li>\n<li><code>props.config</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> Defines the color of each group of tiles</li>\n<li><code>props.title</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">string</a></strong> Title of the chart</li>\n<li><code>props.maxTileSize</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Defines the maximum size that the tile can be (in pixels)</li>\n<li><code>props.minTileSize</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Defines the minimum size that the tile can be (in pixels)</li>\n<li><code>props.width</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Defines width of the chart (in pixels)</li>\n<li><code>props.height</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Defines height of the chart (in pixels)</li>\n<li><code>props.onMouseEnter</code> <strong>func</strong> Defines function that is called for onMouseEnter event</li>\n<li><code>props.onMouseLeave</code> <strong>func</strong> Defines function that is called for onMouseLeave event</li>\n<li><code>props.onClick</code> <strong>func</strong> Defines function that is called for onCLick event\n</br></br></li></ul></li>\n</ul>\n<h3 id=\"constructor-NaN\">constructor</h3>\n<p></br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React properties\n</br></br></li>\n</ul>\n<h3 id=\"componentwillmount\">componentWillMount</h3>\n<p></br></br>\nCalled before the component mounts to calculate the tiles size\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"componentwillreceiveprops\">componentWillReceiveProps</h3>\n<p></br></br>\nCalled when the props updates to calculate the tiles size\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>nextProps</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> next props received\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"gettilesize\">getTileSize</h3>\n<p></br></br>\nReturns the size to be used for the tile\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> props of the component\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> \n</br></br></li>\n</ul>\n<h3 id=\"calculatemaximumpossibletilesize\">calculateMaximumPossibleTileSize</h3>\n<p></br></br>\nCalculates the maximum tile size based on total width, height and amount of tiles\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>width</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> of the container</li>\n<li><code>height</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> of the container</li>\n<li><code>tilesAmount</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> total number of tiles in the chart\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> \n</br></br></li>\n</ul>\n<h3 id=\"render-1\">render</h3>\n<p></br></br>\nRenders the chart\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></p>\n<h3 id=\"defaultprops-1\">defaultProps</h3>\n<p></br></br></p>\n<h3 id=\"proptypes-1\">propTypes</h3>\n<p></br></br></br></p>",
        "headings": ["Tile", "WSTilesChart"]
    }, {
        "name": "ws-week-picker",
        "category": "api",
        "title": "ws-week-picker",
        "html": "<h2 id=\"months\">months</h2>\n<p></br></br>\nQuick array of all month abbreviations\n</br></br></p>\n<h2 id=\"allmonths\">allMonths</h2>\n<p></br></br>\nQuick array of all month shown. There are two from the last year and two from the next year.\n</br></br></p>\n<h2 id=\"wsweekpickercalendar\">WSWeekPickerCalendar</h2>\n<p></br></br>\n<strong>Extends Component</strong>\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code><br />\n</br></br>\n<strong>Properties</strong>\n</br></br></li>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">object</a></strong> properties<ul>\n<li><code>props.selectedYear</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> set a preselected year</li>\n<li><code>props.selectedWeek</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> set a preselected week</li>\n<li><code>props.onChange</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function\">function</a></strong> handler which notifies about picked week\n</br></br></li></ul></li>\n</ul>\n<h3 id=\"constructor-NaN\">constructor</h3>\n<p></br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React properties\n</br></br></li>\n</ul>\n<h3 id=\"prevyear\">prevYear</h3>\n<p></br></br>\nShow the previous year.\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"nextyear\">nextYear</h3>\n<p></br></br>\nShow the next year.\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"isactive\">isActive</h3>\n<p></br></br>\nChecks if a week is selected and therefor equals the input properties.\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>year</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Year of the week</li>\n<li><code>week</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Week\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">boolean</a></strong> \n</br></br></li>\n</ul>\n<h3 id=\"istoday\">isToday</h3>\n<p></br></br>\nChecks if a week is the current week.\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>year</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Year of the week</li>\n<li><code>week</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Week\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">boolean</a></strong> \n</br></br></li>\n</ul>\n<h3 id=\"buildweekrows\">buildWeekRows</h3>\n<p></br></br>\nBuilds an array of rows for the calendar. Every row holds one or none week of the month referenced by the column.\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> \n</br></br></p>\n<h3 id=\"render\">render</h3>\n<p></br></br>\nRenders the calendar.\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> virtual dom\n</br></br></p>\n<h2 id=\"getdateofisoweek\">getDateOfISOWeek</h2>\n<p></br></br>\nCalculate a date from a week and its year. Date is based on the monday of that week.\nsrc: <a href=\"http://stackoverflow.com/questions/16590500/javascript-calculate-date-from-week-number\">http://stackoverflow.com/questions/16590500/javascript-calculate-date-from-week-number</a>\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>week</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Week</li>\n<li><code>year</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Year of the week\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date\">Date</a></strong> \n</br></br></li>\n</ul>\n<h2 id=\"getweekofyear\">getWeekOfYear</h2>\n<p></br></br>\nCalculate a week number from a date. Weeks are starting on Monday.\nsrc: <a href=\"https://gist.github.com/dblock/1081513\">https://gist.github.com/dblock/1081513</a>\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>date</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date\">Date</a></strong> Date\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">Number</a></strong> \n</br></br></li>\n</ul>\n<h2 id=\"getweeks\">getWeeks</h2>\n<p></br></br>\nCalculate all weeks that are in a certain month.\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>month</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Month to get weeks for</li>\n<li><code>year</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> Year of the week\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array\">Array</a>&lt;{week: <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a>, year: <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a>}></strong> </li>\n</ul>\n<h2 id=\"wsweekpicker\">WSWeekPicker</h2>\n<p></br></br>\n<strong>Extends Component</strong>\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code><br />\n</br></br>\n<strong>Properties</strong>\n</br></br></li>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">object</a></strong> properties<ul>\n<li><code>props.selectedYear</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> set a preselected year</li>\n<li><code>props.selectedWeek</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\">number</a></strong> set a preselected week</li>\n<li><code>props.onChange</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function\">function</a></strong> handler which notifies about picked week\n</br></br></li></ul></li>\n</ul>\n<h3 id=\"constructor\">constructor</h3>\n<p></br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>props</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React properties\n</br></br></li>\n</ul>\n<h3 id=\"componentdidmount\">componentDidMount</h3>\n<p></br></br>\nInitialize a listener to clicks outside of the calender to close it.\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"componentwillreceiveprops\">componentWillReceiveProps</h3>\n<p></br></br>\nUpdates the internal state of the component if properties change.\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>newProps</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> React properties\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"componentwillunmount\">componentWillUnmount</h3>\n<p></br></br>\nRemoves the click outside listener on deletion of this component.\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"onchange\">onChange</h3>\n<p></br></br>\nHandler for new selections on the calendar\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>$0</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> <ul>\n<li><code>$0.week</code>  </li>\n<li><code>$0.year</code>  </li></ul></li>\n<li><code>week</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">String</a></strong> clicked on week</li>\n<li><code>year</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\">String</a></strong> clicked on year\n</br></br>\nReturns <strong>void</strong> \n</br></br></li>\n</ul>\n<h3 id=\"togglecalendar\">toggleCalendar</h3>\n<p></br></br>\nOpen or closes the calendar.\n</br></br>\nReturns <strong>void</strong> \n</br></br></p>\n<h3 id=\"render-1\">render</h3>\n<p></br></br>\nRenders the input and the calendar.\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object\">Object</a></strong> virtual dom\n</br></br></p>\n<h2 id=\"isdescendant\">isDescendant</h2>\n<p></br></br>\nCheck if a child element is descendant of a parent element\n</br></br>\n<strong>Parameters</strong>\n</br></br></p>\n<ul>\n<li><code>parent</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Element\">Element</a></strong> parent element</li>\n<li><code>child</code> <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Element\">Element</a></strong> child element\n</br></br>\nReturns <strong><a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean\">boolean</a></strong> \n</br></br></br></li>\n</ul>",
        "headings": ["months", "allMonths", "WSWeekPickerCalendar", "getDateOfISOWeek", "getWeekOfYear", "getWeeks", "WSWeekPicker", "isDescendant"]
    }, {
        "name": "date-picker",
        "category": "components",
        "title": "Date Picker",
        "html": "<h2 id=\"simpledatepicker\">Simple date picker</h2>\n<p>A date picker consist in general of an input element and a picker dialog which appears when the input\nis focused and gives the user the ability to select a date in a natural way. Our date picker is a complete\ncomponent which comes with all of these. As with all of our components the changes are propagated via \ncustom change events which contains details about the selected date as object and pre-formatted string.\nLike a common input element you can set the <code>placeholder</code> and <code>value</code> attribute while the value has to be\na date string which is parsable by <code>Date.parse()</code> or which matches the value in the <code>format</code> attribute if specified.\n</br></br>\n<ws-date-picker placeholder=\"Select a date\" change.delegate=\"log('Date1 changed', $event)\"></ws-date-picker></p>\n<pre><code class=\"html language-html\">&lt;ws-date-picker placeholder=\"Select a date\" id=\"date1\"&gt;&lt;/ws-date-picker&gt;\n&lt;script&gt;\n  document.getElementById('date1').addEventListener('change', event =&gt; console.log('Date1 changed', event));\n&lt;/script&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"formattingdates\">Formatting dates</h2>\n<p>If you have a localized website or simply have a global date format you want to use, you can change the \nformatting of the date picker component by calling the static method <code>setFormat</code> on <code>WSDatePicker</code> class.\nThe pattern for the format follows the rules of the <a href=\"https://chmln.github.io/flatpickr/formatting/\">flatpickr</a>. \nFor instance <code>Y-m-d</code> will result in the date <code>2017-06-04</code> which will be displayed in the input and passed \nthrough the change event.\n</br></br></p>\n<pre><code class=\"html language-html\">&lt;script&gt;\n  WSDatePicker.setFormat('Y-m-d');\n&lt;/script&gt;\n&lt;ws-date-picker value=\"2017-06-04\"&gt;&lt;/ws-date-picker&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"customoptions\">Custom options</h2>\n<p>Since our date picker is based on the flatpickr you can configure it like the flatpickr by passing an\nobject through the <code>options</code> attribute. All possible options can be found <a href=\"https://chmln.github.io/flatpickr/options/\">here</a>.\n</br></br>\n<ws-date-picker value=\"2017-06-15\" format=\"Y-m-d\" options.bind=\"{minDate: '2017-06-01', maxDate: '2017-06-24'}\"></ws-date-picker></p>\n<pre><code class=\"html language-html\">&lt;ws-date-picker\n  value=\"2017-06-15\"\n  options='{\"minDate\": \"2017-06-01\", \"maxDate\": \"2017-06-24\"}'&gt;\n&lt;/ws-date-picker&gt;\n</code></pre>\n<p></br></br></br></br></p>",
        "headings": ["Simple date picker", "Formatting dates", "Custom options"]
    }, {
        "name": "dropdown",
        "category": "components",
        "title": "Dropdown",
        "html": "<h2 id=\"generalusage\">General usage</h2>\n<p><strong>Trigger</strong>:\nThe dropdown trigger is the element you can click to open the dropdown.\nIt can be one of the following types: <code>anchor</code>, <code>button</code>, <code>select</code>, <code>icon</code> and the default is <code>type=\"anchor\"</code>.\nThe displayed text inside the trigger can be set via the <code>text</code> and <code>icon</code> attribute.\nIf you want to specify the icon you have to take a name from our <a href=\"#/elements/icons\">icon list</a>\nlike <code>text=\"Click me\" icon=\"icon-filter\"</code>. As following you can see an example of each type.</p>\n<div style=\"display: flex;\">\n  <div style=\"flex: 25% 1 1\">\n    <label>Anchor</label>\n    <ws-dropdown type=\"anchor\" text=\"Click me\" items.bind='[\"Item 1\", \"Item 2\"]'></ws-dropdown>\n  </div>\n  <div style=\"flex: 25% 1 1\">\n    <label>Button</label>\n    <ws-dropdown type=\"button\" text=\"Click me\" items.bind='[\"Item 1\", \"Item 2\"]'></ws-dropdown>\n  </div>\n  <div style=\"flex: 25% 1 1\">\n    <label>Select</label>\n    <ws-dropdown type=\"select\" text=\"Click me\" items.bind='[\"Item 1\", \"Item 2\"]' style=\"width: 150px; display: inline-block;\"></ws-dropdown>\n  </div>\n  <div style=\"flex: 25% 1 1\">\n    <label>Icon</label>\n    <ws-dropdown type=\"icon\" icon=\"icon-filter\" items.bind='[\"Item 1\", \"Item 2\"]'></ws-dropdown>\n  </div>\n</div>\n<p></br></br>\n<strong>Disabled</strong>\nAs any common html element the dropdown can be disabled by adding the <code>disabled</code> flag to it.\nThe style of the trigger will change and the dropdown can not be opened any more.\n<ws-dropdown type=\"button\" text=\"Click me\" items.bind='[\"Item 1\", \"Item 2\"]' disabled></ws-dropdown>\n</br></br>\n<strong>Items</strong>:\nAll dropdown elements requires the items attribute to be specified with an list of dropdown items.\nAn item can be either a simple string or a object containing the following keys:</p>\n<ul>\n<li><strong>label</strong>: string | text which is disabled</li>\n<li><strong>value</strong>: string, required</li>\n<li><strong>selected</strong>: boolean | adds the class .is-active to the item</li>\n<li><strong>focused</strong>: boolean | adds the class .is-focused to the item</li>\n<li><strong>disabled</strong>: boolean |adds the class .is-disabled to the item</li>\n<li><strong>className</strong>: string | classes which get's added to the item</li></ul>\n</br></br>\n<strong>Value</strong>:\nYou can pass an item as value to the dropdown and it will mark the specific item as selected for you.\nThe value you can pass into the dropdown differs from the combination of tags you choose.\nWhen you specify the <code>multiple=\"1\"</code> flag, the value can be a dropdown item or a list of dropdown items.\nIn case you specify the <code>input-only=\"1\"</code> flag the value must be a simple string!\nAre those two flags not specified the value can be a dropdown item represented as an object or just it's value as a string.\n</br></br></li>\n</ul>\n<h2 id=\"simpledropdownmenu\">Simple dropdown menu</h2>\n<p>The simple dropdown menu only contains one level of menu items and provides the ability to select only one item at the same time.\nAll changes are propagated via a custom change event which contains the selected item.\n</br></br>\n<ws-dropdown items.bind='[\"Item 1\", \"Item 2\", \"Item 3\"]' text=\"Click me\" change.delegate=\"log('dd1 changed', $event)\"></ws-dropdown></p>\n<pre><code class=\"html language-html\">&lt;ws-dropdown\n  items='[\"Item 1\", \"Item 2\", \"Item 3\"]'\n  text=\"Click me\"&gt;\n&lt;/ws-dropdown&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"hierarchicaldropdownmenu\">Hierarchical dropdown menu</h2>\n<p>Sometimes not everything fits into one menu and we have to group our items and create a hierarchical menu.\nThis happens quite often on page headers or context menu's (right click). To create a hierarchical menu you\njust have to add the children for the dropdown item as you want.\n</br></br>\n<ws-dropdown items.bind='[\"Item 1\", {\"label\": \"Item 2\", \"children\": [\"Item 2.1\", {\"label\": \"Item 2.2\", \"children\": [\"Item 2.2.1\", \"Item 2.2.2\", \"Item 2.2.3\", \"Item 2.2.4\"]}]}, \"Item 3\"]' text=\"Click me\" change.delegate=\"log('dd1 changed', $event)\"></ws-dropdown></p>\n<pre><code class=\"html language-html\">&lt;ws-dropdown\n  items='[\"Item 1\", {\"label\": \"Item 2\", \"children\": [\"Item 2.1\", {\"label\": \"Item 2.2\", \"children\": [\"Item 2.2.1\", \"Item 2.2.2\", \"Item 2.2.3\", \"Item 2.2.4\"]}]}, \"Item 3\"]'\n  text=\"Click me\"&gt;\n&lt;/ws-dropdown&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"selectelement\">Select element</h2>\n<p>If you want to create a select element which behaves similar to the native one give the dropdown the <code>type</code> attribute with the value <code>select</code>.\nNow the trigger will look like a select box and the initial text value will be updated once a change happened.\n</br></br>\n<ws-dropdown items.bind='[\"Item 1\", \"Item 2\", \"Item 3\"]' text=\"Select a value\" type=\"select\" style=\"display: inline-block; width: 150px\"></ws-dropdown></p>\n<pre><code class=\"html language-html\">&lt;ws-dropdown\n  items='[\"Item 1\", \"Item 2\", \"Item 3\"]'\n  text=\"Select a value\"\n  type=\"select\"&gt;\n&lt;/ws-dropdown&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"multipleselections\">Multiple selections</h2>\n<p>Sometimes you want to give the user the ability to select multiple values from one item list.\nDo allow this simply add the attribute <code>multiple=\"1\"</code> to the dropdown.\nNote: In some frameworks just adding the attribute like a flag leads to pass a a empty string to the component which will be\ninterpreted as false.\n</br></br>\n<ws-dropdown items.bind='[\"Item 1\", \"Item 2\", \"Item 3\"]' value=\"Item 2\" multiple=\"1\" text=\"Select a value\" type=\"select\" style=\"display: inline-block; width: 150px\"></ws-dropdown></p>\n<pre><code class=\"html language-html\">&lt;ws-dropdown\n  items='[\"Item 1\", \"Item 2\", \"Item 3\"]'\n  value=\"Item 2\"\n  text=\"Select a value\"\n  multiple=\"1\"\n  type=\"select\"&gt;\n&lt;/ws-dropdown&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"filterablelist\">Filterable list</h2>\n<p>Even modern browsers are limited in performance and your user as well. In general scrolling should be prevented and therefore\nthe dropdown items can be filtered to only show the relevant information.\nTo do so just add the flag <code>filterable=\"1\"</code> to enable the feature. Additionally you can specify\nthe default filter with the attribute <code>filter=\"blue\"</code> and the maximum amount of displayed items via the\n<code>limit=\"7\"</code> attribute.\n</br></br>\n<ws-dropdown items.bind='[\"Car (Blue)\", \"Car (Red)\", \"Car (Orange)\", \"Bus (Blue)\", \"Bus (Red)\", \"Bus (Orange)\", \"Yet (Blue)\", \"Yet (Red)\", \"Yet (Orange)\"]' filterable=\"1\" filter=\"blue\" limit=\"7\" text=\"Select a value\" type=\"select\" style=\"display: inline-block; width: 150px\"></ws-dropdown></p>\n<pre><code class=\"html language-html\">&lt;ws-dropdown\n  items.bind='[\"Car (Blue)\", \"Car (Red)\", \"Car (Orange)\", \"Bus (Blue)\", \"Bus (Red)\", \"Bus (Orange)\", \"Yet (Blue)\", \"Yet (Red)\", \"Yet (Orange)\"]'\n  filterable=\"1\"\n  filter=\"blue\"\n  limit=\"7\"\n  text=\"Select a value\"\n  type=\"select\"\n  style=\"display: inline-block; width: 150px\"&gt;\n&lt;/ws-dropdown&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"inputonly\">Input only</h2>\n<p>For our table filters and in some other cases you might need a dropdown which only contains an input element.\nTo achieve this you have to add the attribute <code>input-only=\"1\"</code> to the dropdown. Here you have becide\nthe <code>value</code> attribute also the <code>placeholder</code> attribute to set the placeholder for the input.\n<strong>Note</strong>: The value which you pass in and which will be propagated out must be a string and NOT a dropdown item.\n</br></br></br>\n<ws-dropdown type=\"button\" text=\"Click me\" placeholder=\"Insert a text\" value=\"Default value\" input-only=\"1\"></ws-dropdown></p>\n<pre><code class=\"html language-html\">&lt;ws-dropdown\n  type=\"button\"\n  text=\"Click me\"\n  placeholder=\"Insert a text\"\n  value=\"Default value\"\n  input-only=\"1\"&gt;\n&lt;/ws-dropdown&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"customwidth\">Custom width</h2>\n<p>Per default the dropdown has a width of 200px when the type is not select. For those select dropdown elements the default\nwidth is 100%. This means the dropdown is as wide as the select box. To change the width you can add the attribute\n<code>width</code> and give it a pixel, percent or any size value.\n</br></br>\n<ws-dropdown items.bind='[\"Item 1\", \"Item 2\", \"Item 3\"]' text=\"Click me\" type=\"button\" width=\"500px\"></ws-dropdown></p>\n<pre><code class=\"html language-html\">&lt;ws-dropdown\n  items='[\"Item 1\", \"Item 2\", \"Item 3\"]'\n  text=\"Click me\"\n  type=\"button\"\n  width=\"500px\"&gt;\n&lt;/ws-dropdown&gt;\n</code></pre>\n<p></br></br></br></p>",
        "headings": ["General usage", "Simple dropdown menu", "Hierarchical dropdown menu", "Select element", "Multiple selections", "Filterable list", "Input only", "Custom width"]
    }, {
        "name": "header",
        "category": "components",
        "title": "Header",
        "html": "<h2 id=\"general\">General</h2>\n<p>All of our applications in Zalando requires a header, an authorization mechanism based on OAuth2 and most\nlikely a localization for German and English users. To reduce the redundancy and effort every team had, \nwe created a header component which ships all necessary features. You can set the application name,\nnavigation links, listen on locale and authentication changes.\n</br></br></p>\n<h2 id=\"usage\">Usage</h2>\n<p>To use hte header simply embed the we-header in your application and import the scss rules.\nPS: The color of the header is influenced by the selected color schema :) </p>\n<div style=\"position: relative; overflow: hidden; padding-bottom: 120px\">\n  <ws-header appName=\"Demo Page\" links.bind=\"[{label: 'Link', href: 'LinkValue', onClick: log},{label: 'Link2',href: '2222',children: [{label: 'Sub link 1', href: 'Go go app 1'},{label: 'Sub link 1', href: 'Go go app 1'}]}]\"></ws-header>\n</div>\n<pre><code class=\"html language-html\">&lt;ws-header\n  appName=\"Demo Page\"\n  clientId=\"youturn-client-id\"\n  links=\"{[\n    {label: 'Link', href: 'LinkValue', onClick: (value) =&gt; console.log(value)},\n    {\n      label: 'Link2',\n      href: '2222',\n      children: [\n        {label: 'Sub link 1', href: 'Go go app 1'},\n        {label: 'Sub link 1', href: 'Go go app 1'}\n      ]\n    }\n  ]}\"&gt;\n&lt;/ws-header&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"persistence\">Persistence</h2>\n<p>These header component has to persist several values during page reloads. For instance the selected locale\nor the requested access token and it's expiration time. Per default the header will use the local storage\nbut it can be configured to use the cookies as well. To do so you have to call a static function on the header class.</p>\n<pre><code class=\"html language-html\">&lt;script&gt;\n  WSHeader.setStorageType('cookie', 'key-name-prefix');\n&lt;/script&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"localization\">Localization</h2>\n<p>The header provides the user the ability to select either German or English as language.\nIf the user never selected one the browser language will be used per default. The selected\nlanguage will be persisted during reloads in the selected storage. To act on locale changes\nyou have to listen for the <code>ws-locale-changed</code> event on the window object.\n</br></br></p>\n<div style=\"position: relative; overflow: hidden; padding-bottom: 120px\">\n  <ws-header appName=\"Demo Page\" ws-locale-changed.delegate=\"log('New locale is: ', $event.detail)\"></ws-header>\n</div>\n<pre><code class=\"html language-html\">&lt;ws-header appName=\"Demo Page\"&gt;&lt;/ws-header&gt;\n&lt;script&gt;\n  // To initialize your application specific localization get the current locale\n  i18next.setLocale(WSHeader.getLocale());\n  // To listen for locale changes bind a listener for ws-locale-changed\n  window.addEventListener('ws-locale-changed', event =&gt; {\n    console.log('New locale is: ', event.detail);\n  });\n&lt;/script&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"authorization\">Authorization</h2>\n<p>Every user must retrieve an access token via the OAuth2 Implicit flow to get access to the backend resources.\nThe header already implements these implicit flow and a login button. To be able to authenticate with the\nimplicit flow you have to specify you're client id. The other required fields are filled with the following defaults.</p>\n<ul>\n<li><strong>loginUrl</strong>: https://identity.zalando.com/oauth2/authorize</li>\n<li><strong>businessPartnerId</strong>: zalando's business partner id</li>\n</ul>\n<pre><code class=\"html language-html\">&lt;ws-header app-name=\"Test app\" client-id=\"yourturn-client-id\"&gt;&lt;/ws-header&gt;\n</code></pre>\n<p></br></br></p>\n<h5 id=\"gettingtheaccesstoken\">Getting the access token</h5>\n<p>To retrieve the access token you have two possibilities. For the first option you have to\nlisten for the event <code>ws-auth-changed</code> on window object. The event details will contain an access token\nif the access_token was successfully parsed from the location.hash. It can be empty when the token expired.</p>\n<pre><code class=\"html language-html\">&lt;script&gt;\n  window.addEventListener('ws-auth-changed', event =&gt; {\n      console.log('New access token is: ', event.detail);\n  })\n&lt;/script&gt;\n</code></pre>\n<p></br></br>\nTo get the access token for example to validate if the user can access the current route you can call\nthe static function <code>getAccessToken()</code> which will return a promise with the access token or null.</p>\n<pre><code class=\"html language-html\">&lt;script&gt;\n  WSHeader.getAccessToken().then(accessToken =&gt; {\n      console.log('Current access token is: ', accessToken);\n  })\n&lt;/script&gt;\n</code></pre>\n<p></br></br></p>\n<h5 id=\"programmaticallyrequestloginlogout\">Programmatically request login / logout</h5>\n<p>If you want to display a login page to the user or manage by yourself when you want to login or logout\nyou can do this by publishing <code>ws-authorize</code> or <code>ws-unauthorize</code> events to the window. The header is \nlistening for those events and triggers the corresponding action. Afterwards a <code>ws-auth-changed</code> event might occur.</p>\n<pre><code class=\"html language-html\">&lt;script&gt;\n  window.addEventListener('ws-auth-changed', event =&gt; {\n      console.log('New access token: ', event.detail);\n  });\n  // Request authorization will redirect the user to the OAuth2 authorize page\n  window.dispatchEvent(new CustomEvent('ws-authorize'));\n  // Request logout will remove the token from the storage and trigger a ws-auth-changed event\n  window.dispatchEvent(new CustomEvent('ws-unauthorize'));   \n&lt;/script&gt;\n</code></pre>\n<p></br></br></p>\n<h5 id=\"refreshtokensexperimental\">Refresh tokens (experimental)</h5>\n<p>Since the refresh token URL of Zalando don't permit cross origin access you have to provide a\nproxy solution by yourself and specify the url as attribute. The proxy url should point to\n<code>https://identity.zalando.com/oauth2/token</code>. The header automatically will request a new access token\nonce the expiration time of the last one was reached and a <code>ws-auth-changed</code> event will be published. </p>\n<pre><code class=\"html language-html\">&lt;ws-header app-name=\"Test app\" client-id=\"yourturn-client-id\" refresh-url=\"/backend/identity/refresh\"&gt;&lt;/ws-header&gt;\n</code></pre>\n<p></br></br></br></p>",
        "headings": ["General", "Usage", "Persistence", "Localization", "Authorization"]
    }, {
        "name": "notification",
        "category": "components",
        "title": "Notifications",
        "html": "<p><strong>Remember!</strong> Before you start using notifications, make sure that you <a href=\"../#/general/8-feedback\">Feedback Principles</a>.\n</br></br>\n<img src=\"src/style/assets/not-ex1.jpg\" alt=\"Example\" /></p>\n<p>Use it for general system feedback.</p>\n<p></br></br>\n<img src=\"src/style/assets/not-ex2.jpg\" alt=\"Example\" /></p>\n<p>When feedback is connected with a specific screen area use contextual feedback instead.</p>\n<p></br></br>\n<img src=\"src/style/assets/not-ex3.jpg\" alt=\"Example\" /></p>\n<p>For obvious feedback, use contextual feedback or even skip feedback form at all.</p>\n<p></br></br></p>\n<h2 id=\"feedbackcategories\">Feedback categories</h2>\n<p>Feedback info should be categorized in one of those categories:\n</br></br></p>\n<h3 id=\"neutral\">Neutral</h3>\n<p>General information</p>\n<p><button class=\"mod-secondary mod-small\" click.delegate=\"notification({title: 'Version 1.1 available', description: 'Your app will be updated automatically', type: 'info', lifetime: 2000})\">Show notification</button></p>\n<p></br></br></p>\n<h3 style=\"color:#F44F41\">Error</h3>\n<p>Information about system problem</p>\n<p><button class=\"mod-small mod-secondary\" click.delegate=\"notification({title: 'Database not available', description: 'Contact Administrator for more details', type: 'error', lifetime: 2000})\">Show notification</button></p>\n<p></br></br></p>\n<h3 style=\"color:#1EB234\">Success</h3>\n<p>Information about successful or finished activity</p>\n<p><button class=\"mod-small mod-secondary\" click.delegate=\"notification({title: 'Upload successful', type: 'success', lifetime: 2000})\">Show notification</button></p>\n<p></br></br></p>\n<h3 style=\"color:#FF9C0F\">Warning</h3>\n<p>Information about action that can be potentially harmful</p>\n<p><button class=\"mod-small mod-secondary\" click.delegate=\"notification({title: 'Upload server almost full', description: '203MB left. Delete pictures that will not be needed anymore.', type: 'warning', lifetime: 2000})\">Show notification</button></p>\n<p></br></br></p>\n<h2 id=\"content\">Content</h2>\n<p>Feedback content consist main information and (if needed) further description.\n</br></br>\n<img src=\"src/style/assets/not-ex2.jpg\" alt=\"Example\" /></p>\n<p>Use natural, user language, suggest possible solution.</p>\n<p></br></br>\n<img src=\"src/style/assets/not-ex2.jpg\" alt=\"Example\" /></p>\n<p>Avoid technical jargon and generic error messages.</p>\n<p></br></br></p>\n<h2 id=\"setup\">Setup</h2>\n<p>Because the notifications are elements which should be displayed on top of everything and relative to the window\nyou have to add the tag <code>&lt;ws-notification&gt;&lt;/ws-notification&gt;</code> to the most root container you can add.\nSo either document body or the application root depending on your setup. This notification element is\njust the holder / list of notifications.\n</br></br></p>\n<h2 id=\"creatingnotifications\">Creating notifications</h2>\n<p>To create a notification you have to publish a custom event to the window containing the relevant data.\nThe type of the event has to be <code>ws-notification-open</code> and the details has to be an object containing:</p>\n<ul>\n<li><strong>title</strong>: string, required</li>\n<li><strong>description</strong>: string, optional</li>\n<li><strong>type</strong>: string, oneOf: info|error|warning|success, default: info</li>\n<li><strong>lifetime</strong>: number, milliseconds until disappearing, default: 2147483647\n</br></br>\n<button class=\"mod-small\" id=\"notification1\" click.delegate=\"notification({title: 'Do you want to stay logged in?', type: 'info', lifetime: 5000})\">Show notification</button></li>\n</ul>\n<pre><code class=\"html language-html\">&lt;button class=\"mod-small\" id=\"notification1\"&gt;Show notification&lt;/button&gt;\n&lt;script type=\"text/javascript\"&gt;\n  document.getElementById('notification1').addEventListener('click', event =&gt; {\n    window.dispatchEvent(new CustomEvent('ws-notification-open', {detail: {title: 'Do you want to stay logged in?', type: 'info', lifetime: 5000}}));\n  });\n&lt;/script&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"options\">Options</h2>\n<p>Here you can try out the different combinations of the options you can provide to the notification.</p>\n<div class=\"row collapse\">\n  <div class=\"column small-6\">\n    <label>Title</label>\n    <input type=\"text\" placeholder=\"Title\" value=\"Some title\" ref=\"navTitle\" />\n  </div>\n  <div class=\"column small-6\">\n    <label>Description</label>\n    <input type=\"text\" placeholder=\"Title\" ref=\"navDescription\" />\n  </div>\n  <div class=\"column small-6\">\n    <label>Type</label>\n    <select ref=\"navType\">\n      <option value=\"info\">Info</option>\n      <option value=\"success\">Success</option>\n      <option value=\"warning\">Warning</option>\n      <option value=\"error\">Error</option>\n    </select>\n  </div>\n  <div class=\"column small-6\">\n    <label>Lifetime</label>\n    <input type=\"number\" placeholder=\"Title\" value=\"5000\" ref=\"navLifetime\" />\n  </div>\n</div>\n<p></br>\n<button class=\"mod-small\" click.delegate=\"notification({title: navTitle.value, description: navDescription.value, type: navType.value, lifetime: navLifetime.value})\">Show notification</button>\n</br></br></br></p>",
        "headings": ["Feedback categories", "Content", "Setup", "Creating notifications", "Options"]
    }, {
        "name": "spinner",
        "category": "components",
        "title": "Spinner",
        "html": "<p>The spinner should be shown on every user interaction where the response could take longer than 250ms.\nBy default the spinner has the size medium with 32x32 pixel but it can be made small with 16x16 pixel or big with 48x48 pixel.\nTo do this just set the attribute <code>size</code> with <code>small</code> or <code>large</code>. \n</br></br></p>\n<div class=\"row\">\n  <div class=\"column small-5\">\n    <ws-spinner size=\"large\"></ws-spinner>\n  </div>\n  <div class=\"column small-5\">\n    <ws-spinner></ws-spinner>\n  </div>\n  <div class=\"column small-5 end\">\n    <ws-spinner size=\"small\"></ws-spinner>\n  </div>\n</div>\n<pre><code class=\"html language-html\">&lt;div class=\"row\"&gt;\n  &lt;div class=\"column small-5\"&gt;\n    &lt;ws-spinner size=\"large\"&gt;&lt;/ws-spinner&gt;\n  &lt;/div&gt;\n  &lt;div class=\"column small-5\"&gt;\n    &lt;ws-spinner&gt;&lt;/ws-spinner&gt;\n  &lt;/div&gt;\n  &lt;div class=\"column small-5 end\"&gt;\n    &lt;ws-spinner size=\"small\"&gt;&lt;/ws-spinner&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n</code></pre>\n<p></br></br>\nThe spinner color will be the primary color.\nIf you want to display a spinner for instance on a button you have to change the color to white by adding\nthe boolean attribute <code>is-white</code>.\n</br></br>\n<button class=\"mod-small\">\n  <span>Click Me</span>&nbsp;\n  <ws-spinner size=\"small\" is-white></ws-spinner>\n</button></p>\n<pre><code class=\"html language-html\">&lt;button&gt;\n  &lt;span&gt;Click Me&lt;/span&gt;\n  &lt;ws-spinner size=\"small\" is-white&gt;&lt;/ws-spinner&gt;\n&lt;/button&gt;\n</code></pre>\n<p></br></br></br></p>",
        "headings": []
    }, {
        "name": "tab-menu",
        "category": "components",
        "title": "Tab Menu",
        "html": "<h2 id=\"usage\">Usage</h2>\n<p>A tab menu only requires the items to be specified while a item can consist of a label, value, badge or a disabled flag.\n<ws-tab-menu items.bind=\"[{label: 'This is my awesome tab 1', value: 1}, {value: 'tab 2'}, {label: 'With badge', value: 3, badge: 54}]\"></ws-tab-menu></p>\n<pre><code class=\"html language-html\">&lt;ws-tab-menu items=\"[\n    {label: 'This is my awesome tab 1', value: 1},\n    {value: 'tab 2'},\n    {label: 'With badge', value: 3, badge: 54}\n  ]\"&gt;\n&lt;/ws-tab-menu&gt;\n</code></pre>\n<p></br></br></p>\n<h2 id=\"value\">Value</h2>\n<p><ws-tab-menu value=\"tab 2\" items.bind=\"[{label: 'This is my awesome tab 1', value: 1}, {value: 'tab 2'}, {label: 'With badge', value: 3, badge: 54}]\"></ws-tab-menu></p>\n<pre><code class=\"html language-html\">&lt;ws-tab-menu value=\"tab 2\" items=\"[\n    {label: 'This is my awesome tab 1', value: 1},\n    {value: 'tab 2'},\n    {label: 'With badge', value: 3, badge: 54}\n  ]\"&gt;\n&lt;/ws-tab-menu&gt;\n</code></pre>\n<p></br></br></br></p>",
        "headings": ["Usage", "Value"]
    }, {
        "name": "weekpicker",
        "category": "components",
        "title": "Week-Picker",
        "html": "<p>A calendar utility to select a week.\n</br></br></p>\n<h2 id=\"generalusage\">General usage</h2>\n<p><strong>Change-Callback</strong>:\nThe week-picker will notify the outside if the user selected a week. The dev can implement a callback via a <code>onChange</code> function-property on the element receiving an <code>{week, year}</code>-object as an input. Or the dev could attach an <code>change</code> event listener on the element receiving the same input object as an event.\n<ws-week-picker change.delegate=\"alert('Week picked', $event.week, $event.year)\"></ws-week-picker></p>\n<pre><code class=\"html language-html\">&lt;ws-dropdown\n  onChange=\"e =&gt; alert('Week picked', e.week, e.year)\"&gt;\n&lt;/ws-dropdown&gt;\n</code></pre>\n<p></br></br>\n<strong>Initial Value</strong>:\nYou can pass an initial value by setting the properties <code>selectedYear</code> and <code>selectedWeek</code>. Both have to be numbers.</p>\n<pre><code class=\"html language-html\">&lt;ws-dropdown\n  selectedYear=\"2017\"\n  selectedWeek=\"42\"&gt;\n&lt;/ws-dropdown&gt;\n</code></pre>\n<p></br></br></p>",
        "headings": ["General usage"]
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
        aurelia.use.standardConfiguration().feature('app/feature/components').globalResources(['components!fabric-components/index', 'app/view/iterable-converter']);

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

        ArticlePage.prototype.log = function log() {
            var _console;

            (_console = console).log.apply(_console, arguments);
        };

        ArticlePage.prototype.notification = function notification(options) {
            window.dispatchEvent(new CustomEvent('ws-notification-open', { detail: options }));
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
define('app/view/dynamic-html',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.DynamicHtmlCustomElement = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _class3, _temp;

    var DynamicHtmlCustomElement = exports.DynamicHtmlCustomElement = (_dec = (0, _aureliaFramework.noView)(), _dec2 = (0, _aureliaFramework.bindable)(), _dec(_class = (_class2 = (_temp = _class3 = function () {
        function DynamicHtmlCustomElement(viewCompiler, viewSlot, container, viewResources) {
            _classCallCheck(this, DynamicHtmlCustomElement);

            _initDefineProp(this, 'value', _descriptor, this);

            this.viewCompiler = viewCompiler;
            this.viewSlot = viewSlot;
            this.container = container;
            this.viewResources = viewResources;
        }

        DynamicHtmlCustomElement.prototype.bind = function bind(bindingContext) {
            this.bindingContext = bindingContext;
        };

        DynamicHtmlCustomElement.prototype.attached = function attached() {
            this.render();
        };

        DynamicHtmlCustomElement.prototype.valueChanged = function valueChanged() {
            this.render();
        };

        DynamicHtmlCustomElement.prototype.render = function render() {
            if (this.view) {
                this.viewSlot.remove(this.view);
                this.view = null;
            }

            var viewFactory = this.viewCompiler.compile('<template>' + this.value + '</template>', this.viewResources);
            this.view = viewFactory.create(this.container);
            this.view.bind(this.bindingContext);

            this.viewSlot.add(this.view);
            this.viewSlot.attached();
        };

        return DynamicHtmlCustomElement;
    }(), _class3.inject = [_aureliaFramework.ViewCompiler, _aureliaFramework.ViewSlot, _aureliaFramework.Container, _aureliaFramework.ViewResources], _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec2], {
        enumerable: true,
        initializer: function initializer() {
            return '';
        }
    })), _class2)) || _class);
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
            this.categoryOrder = ['general', 'atoms', 'molecules', 'organisms', 'components', 'api'];
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
define('app/feature/components/index',['exports', 'aurelia-templating', 'aurelia-metadata', 'fabric-components/imports'], function (exports, _aureliaTemplating, _aureliaMetadata, _imports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  exports.getComponents = getComponents;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function configure(config) {
    var loader = config.aurelia.loader;
    loader.addPlugin('components', {
      fetch: function fetch(address) {
        return loader.loadModule(address).then(getComponents);
      }
    });
  }

  function getComponents(module) {
    return Object.keys(module).reduce(function (elements, name) {
      if (typeof module[name] === 'function') {
        var elementName = camelToKebab(name);
        elements[elementName] = wrapComponent(module[name], elementName);
      }
      return elements;
    }, {});
  }

  function camelToKebab(str) {
    return str.replace(/([a-zA-Z])([A-Z][a-z])/g, function (match, before, after) {
      return before.toLowerCase() + '-' + after.toLowerCase();
    }).toLowerCase();
  }

  function wrapComponent(component, elementName) {
    var bindableProps = [];
    if (component.propTypes) {
      bindableProps = Object.keys(component.propTypes).map(function (prop) {
        return (0, _aureliaTemplating.bindable)({
          name: prop,
          attribute: camelToKebab(prop),
          changeHandler: 'render',
          defaultBindingMode: 1
        });
      });
    }
    return _aureliaMetadata.decorators.apply(undefined, [(0, _aureliaTemplating.noView)(), (0, _aureliaTemplating.customElement)(elementName), (0, _aureliaTemplating.bindable)({ name: 'props', attribute: 'props', changeHandler: 'render', defaultBindingMode: 1 })].concat(bindableProps)).on(createWrapperClass(component));
  }

  function createWrapperClass(component) {
    var _class, _temp;

    return _temp = _class = function () {
      function WrapperClass(element) {
        _classCallCheck(this, WrapperClass);

        this.element = element;
      }

      WrapperClass.prototype.bind = function bind() {
        this.render();
      };

      WrapperClass.prototype.render = function render() {
        var props = this.props || {};

        for (var prop in this) {
          if (this[prop] !== undefined && typeof this[prop] !== 'function') {
            props[prop] = this[prop] === '' ? true : this[prop];
          }
        }
        (0, _imports.render)(_imports.React.createElement(component, props), this.element);
      };

      return WrapperClass;
    }(), _class.inject = [Element], _temp;
  }
});
define('fabric-components/imports',['exports', 'react', 'react-dom', 'prop-types'], function (exports, _react, _reactDom, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Component = exports.render = exports.PropTypes = exports.React = undefined;

  var _React_ = _interopRequireWildcard(_react);

  var ReactDOM = _interopRequireWildcard(_reactDom);

  var types = _interopRequireWildcard(_propTypes);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var React = exports.React = {
    createElement: _React_.createElement || _React_.h
  };
  var PropTypes = exports.PropTypes = types;
  var render = exports.render = ReactDOM.render;

  var Component = exports.Component = function (_React_$Component) {
    _inherits(Component, _React_$Component);

    function Component() {
      _classCallCheck(this, Component);

      return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
    }

    _createClass(Component, [{
      key: 'dispatchEvent',
      value: function dispatchEvent(name, detail) {
        var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var event = new CustomEvent(name, { detail: detail, bubbles: bubbles });

        if (this.element) {
          this.element.dispatchEvent(event);
        }
      }
    }]);

    return Component;
  }(_React_.Component);
});
define('text!app/view/app-header.html', ['module'], function(module) { module.exports = "<template>\n    <header class=\"site-header\">\n        <figure class=\"site-logo\">\n            <img src=\"src/style/assets/logo.png\">\n        </figure>\n        <a class=\"github\" href=\"https://github.com/fabric-design\" target=\"_blank\">\n            <figure class=\"logo\">\n                <svg><use xlink:href=\"src/style/assets/github.svg#logo\"></use></svg>\n            </figure>\n            <span>View on GitHub</span>\n        </a>\n    </header>\n</template>\n"; });
define('text!app/view/app.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"../../style/index.css\"></require>\n    <div class=\"site-wrapper\">\n        <require from=\"app/view/app-header.html\"></require>\n        <app-header></app-header>\n        <div class=\"row collapse\">\n            <aside class=\"column small-4\">\n                <require from=\"app/view/navigation\"></require>\n                <navigation></navigation>\n            </aside>\n            <section class=\"column small-19 end site-content\">\n                <router-view></router-view>\n            </section>\n        </div>\n        <ws-notification></ws-notification>\n    </div>\n</template>\n"; });
define('text!app/view/article-page.html', ['module'], function(module) { module.exports = "<template>\n    <div class=\"column small-20 small-centered\">\n        <header class=\"page-header\">\n            <h1>${title}</h1>\n            <nav if.bind=\"headings.length\">\n                <ul>\n                    <li repeat.for=\"heading of headings\">\n                        <a click.delegate=\"scrollToPart($index)\">${heading}</a>\n                    </li>\n                </ul>\n            </nav>\n        </header>\n        <div class=\"row\">\n            <require from=\"app/view/dynamic-html\"></require>\n            <article class=\"content\">\n                <dynamic-html value.bind=\"articleHtml\"></dynamic-html>\n            </article>\n        </div>\n    </div>\n</template>\n"; });
define('text!app/view/navigation.html', ['module'], function(module) { module.exports = "<template>\n    <nav class=\"site-nav\">\n        <ul>\n            <li class=\"nav-item ${key === $parent.currentCategory ? 'is-active' : ''}\"\n                repeat.for=\"key of categoryOrder\"\n                mouseenter.trigger=\"$parent.showSubMenu($event.currentTarget)\"\n                mouseleave.trigger=\"$parent.hideSubMenu($event.currentTarget)\">\n                <a href=\"#${key}\">${key}</a>\n                <ul class=\"sub-nav\" if.bind=\"categories[key]\">\n                    <li class=\"subnav-item ${article.name === $parent.$parent.currentPage ? 'is-active' : ''}\"\n                        repeat.for=\"article of categories[key]\">\n                        <a route-href=\"route: article-page; params.bind: {category: $parent.key, page: article.name}\">\n                            ${article.title}\n                        </a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </nav>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map