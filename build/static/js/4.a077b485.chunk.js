(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{45:function(e,t,c){e.exports={card:"Card_card__1m44e"}},46:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},55:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(2),s=c(22),r=c(45),a=c.n(r),i=c(0),u=function(e){return Object(i.jsx)("div",{className:a.a.card,children:e.children})},l=c(14),d=c(46),j=c.n(d),b=function(e){var t=Object(n.useRef)(),c=Object(n.useRef)(),r=Object(n.useState)(!1),a=Object(s.a)(r,2),d=a[0],b=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.Prompt,{when:d,message:function(e){return"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 "}}),Object(i.jsx)(u,{children:Object(i.jsxs)("form",{className:j.a.form,onSubmit:function(n){n.preventDefault();var o=t.current.value,s=c.current.value;e.onAddQuote({author:o,text:s})},onFocus:function(){b(!0)},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:t})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:c})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{onClick:function(){b(!1)},className:"btn",children:"Add Quote"})})]})})]})},m=c(20),f=c(21);t.default=function(){var e=Object(m.a)(f.b),t=e.sendRequest,c=e.status,s=Object(o.useHistory)();console.log(s),Object(n.useEffect)((function(){"completed"===c&&s.push("/quotes")}),[c,s]);return Object(i.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=4.a077b485.chunk.js.map