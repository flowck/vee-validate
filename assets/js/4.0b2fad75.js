(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{222:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("This plugin only comes with English messages to keep things small, but it was built with flexible message generation in mind.\nThe "),s("a",{attrs:{href:"https://github.com/baianat/vee-validate/blob/master/locale/en.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("English messages file"),s("OutboundLink")],1),t._v(" is an example on how you would structure those messages. Then, you may want to update the validator dictionary, which should happen once in your app startup. Still, you may update them whenever you want at any point of your app. Check the "),s("a",{attrs:{href:"#using-the-dictionary-api"}},[t._v("dictionary")]),t._v(" section below.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Not only can you create and overwrite messages but you can also provide an alias for a field that to be used in the message instead of it's original name. Seeing 'first_name' in your error messages can't be very good for your users experience. There is a couple of solutions.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("Here is a little code example on how you would add support for your localized messages and attributes.")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),s("p",[t._v("You will get a warning if you set the locale to one that has not been merged in the dictionary yet. Any messages generated will fallback to English.")]),t._v(" "),s("p",[t._v("A working example can be found "),s("router-link",{attrs:{to:"/examples/locale.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("In the "),s("a",{attrs:{href:"https://github.com/baianat/vee-validate/tree/master/locale",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("locale")]),s("OutboundLink")],1),t._v(" directory of this plugin, is a collection of localized files. If you can't find your locale, you could help this plugin by contributing a localized version to the "),s("a",{attrs:{href:"https://github.com/baianat/vee-validate",target:"_blank",rel:"noopener noreferrer"}},[t._v("repository"),s("OutboundLink")],1),t._v(". It will be happily accepted.")]),t._v(" "),s("p",[t._v("You can import those locales like this:")]),t._v(" "),t._m(16),s("p",[t._v("You must note that the locale files exports the following object structure:")]),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("Loading every locale in your app bundle is not very friendly for your user's bandwidth, especially since only one locale will be used. With a little bit of "),s("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack import() magic"),s("OutboundLink")],1),t._v(" we can get an async localization setup easily:")]),t._v(" "),t._m(20)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"localization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localization","aria-hidden":"true"}},[this._v("#")]),this._v(" Localization")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aliases","aria-hidden":"true"}},[this._v("#")]),this._v(" Aliases")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"using-data-vv-as"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-data-vv-as","aria-hidden":"true"}},[this._v("#")]),this._v(" Using data-vv-as")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("You can use the "),a("code",[this._v("data-vv-as")]),this._v(" attribute on your field, like this:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-validate")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("alpha"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("data-vv-as")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("First Name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("first_name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Now when any error message is generated for this input, it will use the "),a("code",[this._v("data-vv-as")]),this._v(" value instead of the actual field name. While this is very useful for simple setups and displaying localized names, it is only ideal for a single-locale page. For multi-localized pages and more advanced usages you might want to check the dictionary API.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"using-the-dictionary-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-dictionary-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Using the dictionary API")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("All validators have access to a simple dictionary that is shared between all of them. This dictionary contains localized error messages and attributes. If the validator finds a localized attribute name for that field, it will be used instead of the field name, pretty much like "),a("code",[this._v("data-vv-as")]),this._v(" but "),a("code",[this._v("data-vv-as")]),this._v(" takes priority if both are found.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vue'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VeeValidate "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vee-validate'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" messagesAr "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./strings/validator/messages/ar.js'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" attributesAr "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./strings/validator/attributes/ar.js'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" attributesEn "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./strings/validator/attributes/en.js'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Pass options to make all validators use the arabic language, also merge the english and arabic attributes with the internal dictionary.")]),t._v("\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("use")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VeeValidate"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  locale"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'ar'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dictionary"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    en"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" attributes"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" attributesEn "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ar"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" messages"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" messagesAr"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attributes"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" attributesAr "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Some Data ...")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Cool methods ...")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),a("p",[this._v("Your localization logic should happen at the entry point of your application as it should be only executed once.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"localization-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localization-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Localization API")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The validator class offers a static "),a("code",[this._v("localize")]),this._v(" method which is also available on the instances, which have three overloads:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dictionary "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  en"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// attributes and messages")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ar"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// attributes and messages")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nValidator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("localize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'en'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// changes the locale")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Merges the English dictionary and sets the current locale to English.")]),t._v("\nValidator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("localize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'en'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dictionary"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("en"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Merges all defined languages in the dictionary but does not set the current locale.")]),t._v("\nValidator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("localize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dictionary"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("All validators' locales are shared. Calling "),a("code",[this._v("localize")]),this._v(" on any instance available within any component will change the locale for all validators.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// Inside a component.")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$validator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("localize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'ar'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Validator "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vee-validate'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Also available on the prototype.")]),t._v("\nValidator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("localize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'ar'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"localized-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localized-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Localized Files")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ar "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vee-validate/dist/locale/ar'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VeeValidate"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Validator "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vee-validate'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Localize takes the locale object as the second argument (optional) and merges it.")]),t._v("\nValidator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("localize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'ar'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ar"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Install the Plugin.")]),t._v("\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("use")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VeeValidate"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'{locale}'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  messages"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Also note that if imported via script tags, they will be automatically installed if "),a("code",[this._v("VeeValidate")]),this._v(" is available globally.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"async-localization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-localization","aria-hidden":"true"}},[this._v("#")]),this._v(" Async Localization")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vue'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Validator "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vee-validate'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nVue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("mixin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("localize")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localeName"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// localize your app here, like i18n plugin.")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// asynchronously load the locale file then localize the validator with it.")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`./path/to/vee-validate-locales/")]),s("span",{attrs:{class:"token interpolation"}},[s("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("localeName"),s("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{attrs:{class:"token string"}},[t._v("`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("then")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("locale "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      Validator"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("localize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localeName"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" locale"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])}],!1,null,null,null);a.default=e.exports}}]);