(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{332:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"configuration-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[a._v("#")]),a._v(" Configuration options")]),a._v(" "),e("p",[a._v("ezPAARSE comes with a "),e("code",[a._v("config.json")]),a._v(" file (located at the root of the /ezpaarse directory) where some the configuration options for your instance can be set or modified.")]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-admin-mail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-admin-mail"}},[a._v("#")]),a._v(" EZPAARSE_ADMIN_MAIL")]),a._v(" "),e("p",[a._v("The default value is set to "),e("code",[a._v("ezpaarse@couperin.org")])]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-parent-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-parent-url"}},[a._v("#")]),a._v(" EZPAARSE_PARENT_URL")]),a._v(" "),e("p",[a._v('To avoid the setup of a local SMTP server, you can delegate the management of user feedback (via the online form) to another ezPAARSE instance (called a "parent" instance).\nThe default value is set to '),e("code",[a._v("http://ezpaarse-preprod.couperin.org")])]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-feedback-recipients"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-feedback-recipients"}},[a._v("#")]),a._v(" EZPAARSE_FEEDBACK_RECIPIENTS")]),a._v(" "),e("p",[a._v("The mail adress where the users feedback get sent.\nThe default value is set to "),e("code",[a._v("ezpaarse@couperin.org")])]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-subscription-mail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-subscription-mail"}},[a._v("#")]),a._v(" EZPAARSE_SUBSCRIPTION_MAIL")]),a._v(" "),e("p",[a._v("If you wish to receive a message everytime a user opens an account on your instance, set the value to "),e("code",[a._v("true")]),a._v(".\nThe default value is set to "),e("code",[a._v("false")])]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-mongo-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-mongo-url"}},[a._v("#")]),a._v(" EZPAARSE_MONGO_URL")]),a._v(" "),e("p",[a._v("The default value is set to "),e("code",[a._v("mongodb://localhost:27017/ezpaarse")])]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-env"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-env"}},[a._v("#")]),a._v(" EZPAARSE_ENV")]),a._v(" "),e("p",[a._v("The default value is set to "),e("code",[a._v("production")])]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-nodejs-port"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-nodejs-port"}},[a._v("#")]),a._v(" EZPAARSE_NODEJS_PORT")]),a._v(" "),e("p",[a._v("The default value is set to "),e("code",[a._v("59599")])]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-nodejs-version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-nodejs-version"}},[a._v("#")]),a._v(" EZPAARSE_NODEJS_VERSION")]),a._v(" "),e("p",[a._v("The default value is set to "),e("code",[a._v("6.6.0")])]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-output-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-output-fields"}},[a._v("#")]),a._v(" EZPAARSE_OUTPUT_FIELDS")]),a._v(" "),e("p",[a._v("Contains an array of field names that are going to be present in the result file produced by ezPAARSE.\nThe default array contains the following fields:")]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"datetime"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"date"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"login"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"platform"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"platform_name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"publisher_name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rtype"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"mime"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"print_identifier"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"online_identifier"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"title_id"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"doi"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"publication_title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"unitid"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"domain"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("h3",{attrs:{id:"ezpaarse-demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-demo"}},[a._v("#")]),a._v(" EZPAARSE_DEMO")]),a._v(" "),e("p",[a._v("If "),e("code",[a._v("true")]),a._v(", it shows a warning informing users that the instance is a demo, and thus not adapted to process large log files. This warning now appears on our demo instance hosted on "),e("a",{attrs:{href:"http://ezpaarse.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://ezpaarse.org"),e("OutboundLink")],1),a._v("\nThe default value is set to "),e("code",[a._v("false")]),a._v(".")]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-default-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-default-headers"}},[a._v("#")]),a._v(" EZPAARSE_DEFAULT_HEADERS")]),a._v(" "),e("p",[a._v("An object representing default headers to be used for each job. Can be overriden by predefined settings and actual job headers.")]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-middlewares"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-middlewares"}},[a._v("#")]),a._v(' EZPAARSE_MIDDLEWARES"')]),a._v(" "),e("p",[a._v("Contains an array of middleware names, in the order they are going to be launched by ezPAARSE during a process.\nThe default array contains the following middlewares:")]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"filter"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"parser"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"deduplicator"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"enhancer"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"istex"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"crossref"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"sudoc"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hal"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"geolocalizer"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"field-splitter"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"qualifier"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cut"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"anonymizer"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("h3",{attrs:{id:"ezpaarse-qualifying-level"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-qualifying-level"}},[a._v("#")]),a._v(" EZPAARSE_QUALIFYING_LEVEL")]),a._v(" "),e("p",[a._v("This sets the minimal value, under which ezPAARSE considers an EC is not qualified enough to be written to the results.\nThe default value is set to "),e("code",[a._v("1")])]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-qualifying-factors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-qualifying-factors"}},[a._v("#")]),a._v(" EZPAARSE_QUALIFYING_FACTORS")]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"internal"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"rtype"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"mime"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.5")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"external"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"file"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"platforms/fields.json"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"sublist"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"rid"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"attribute"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"code"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"weight"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("h3",{attrs:{id:"ezpaarse-tmp-cycle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-tmp-cycle"}},[a._v("#")]),a._v(" EZPAARSE_TMP_CYCLE")]),a._v(" "),e("p",[a._v("Determines how long ezPAARSE results remain accessible for downloading.\nThe default value is set to "),e("code",[a._v("60min")])]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-tmp-lifetime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-tmp-lifetime"}},[a._v("#")]),a._v(" EZPAARSE_TMP_LIFETIME")]),a._v(" "),e("p",[a._v("Sets the maximal duration for the storage of result files.\nThe default value is set to "),e("code",[a._v("1day")])]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-ignored-domains"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-ignored-domains"}},[a._v("#")]),a._v(" EZPAARSE_IGNORED_DOMAINS")]),a._v(" "),e("p",[a._v("Contains an array of domains to be ignored (ie filtered out) by ezPAARSE.")]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"www.google.fr"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"www.google.com"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("To avoid declaring too long a list, we advise you to declare unrelevant domains in dedicated exclusion files as documented in this "),e("a",{attrs:{href:"http://ezpaarse.readthedocs.io/en/master/features/exclusions.html#the-unrelevant-domains",target:"_blank",rel:"noopener noreferrer"}},[a._v("section"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-geolocalize-default"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-geolocalize-default"}},[a._v("#")]),a._v(" EZPAARSE_GEOLOCALIZE_DEFAULT")]),a._v(" "),e("p",[a._v("The default value is set to "),e("code",[a._v("geoip-lookup")])]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-geolocalize-separator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-geolocalize-separator"}},[a._v("#")]),a._v(" EZPAARSE_GEOLOCALIZE_SEPARATOR")]),a._v(" "),e("p",[a._v("The default value is set to "),e("code",[a._v(".")]),a._v(" (dot)")]),a._v(" "),e("h3",{attrs:{id:"ezpaarse-alerts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ezpaarse-alerts"}},[a._v("#")]),a._v(" EZPAARSE_ALERTS")]),a._v(" "),e("p",[a._v("Contains an object with 2 member properties, listed here:")]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"activationThreshold"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"unknownDomainsRate"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("The properties and their values are documented in further details in the "),e("a",{attrs:{href:"http://ezpaarse.readthedocs.io/en/master/features/alerts.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("relevant section"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);