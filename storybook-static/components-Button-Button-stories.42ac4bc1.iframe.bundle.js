"use strict";(self.webpackChunk_timonwa_demo_ui_library=self.webpackChunk_timonwa_demo_ui_library||[]).push([[747],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Large:()=>Large,Medium:()=>Medium,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=styled_components_browser_esm.ZP.button`
	border: 0;
	line-height: 1;
	font-size: 15px;
	cursor: pointer;
	font-weight: 700;
	font-weight: bold;
	border-radius: 3px;
	display: inline-block;
	padding: ${props=>"small"===props.size?"7px 25px 8px":"medium"===props.size?"9px 30px 11px":"14px 30px 16px"};
	color: ${props=>props.primary?"#1b116e":"#ffffff"};
	background-color: ${props=>props.primary?"#6bedb5":"#1b116e"};
	opacity: ${props=>props.disabled?.5:1};
	&:hover {
		background-color: ${props=>props.primary?"#55bd90":"#6bedb5"};
	}
	&:active {
		border: solid 2px #1b116e;
		padding: ${props=>"small"===props.size?"5px 23px 6px":"medium"===props.size?"7px 28px 9px":"12px 28px 14px"};
	}
`,Button=({size,primary,disabled,text,onClick,...props})=>(0,jsx_runtime.jsx)(StyledButton,{type:"button",onClick,primary,disabled,size,...props,children:text});Button.displayName="Button";const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}const Button_stories={component:Button_Button,title:"Marbella/Button",argTypes:{}},Primary=args=>(0,jsx_runtime.jsx)(Button_Button,{"data-test-id":"InputField-id",...args});Primary.displayName="Primary",Primary.args={primary:!0,disabled:!1,text:"Primary"};const Secondary=args=>(0,jsx_runtime.jsx)(Button_Button,{"data-test-id":"InputField-id",...args});Secondary.displayName="Secondary",Secondary.args={primary:!1,disabled:!1,text:"Secondary"};const Disabled=args=>(0,jsx_runtime.jsx)(Button_Button,{"data-test-id":"InputField-id",...args});Disabled.displayName="Disabled",Disabled.args={primary:!1,disabled:!0,text:"Disabled"};const Small=args=>(0,jsx_runtime.jsx)(Button_Button,{"data-test-id":"InputField-id",...args});Small.displayName="Small",Small.args={primary:!0,disabled:!1,size:"small",text:"Small"};const Medium=args=>(0,jsx_runtime.jsx)(Button_Button,{"data-test-id":"InputField-id",...args});Medium.displayName="Medium",Medium.args={primary:!0,disabled:!1,size:"medium",text:"Medium"};const Large=args=>(0,jsx_runtime.jsx)(Button_Button,{"data-test-id":"InputField-id",...args});Large.displayName="Large",Large.args={primary:!0,disabled:!1,size:"large",text:"Large"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'args => <Button data-test-id="InputField-id" {...args} />',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'args => <Button data-test-id="InputField-id" {...args} />',...Secondary.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'args => <Button data-test-id="InputField-id" {...args} />',...Disabled.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'args => <Button data-test-id="InputField-id" {...args} />',...Small.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:'args => <Button data-test-id="InputField-id" {...args} />',...Medium.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'args => <Button data-test-id="InputField-id" {...args} />',...Large.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Disabled","Small","Medium","Large"]}}]);
//# sourceMappingURL=components-Button-Button-stories.42ac4bc1.iframe.bundle.js.map