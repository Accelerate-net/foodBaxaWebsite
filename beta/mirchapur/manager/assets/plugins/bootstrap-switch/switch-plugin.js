/**
 * angular-bootstrap-switch
 * @version v0.5.2 - 2017-04-19
 * @author Francesco Pontillo (francescopontillo@gmail.com)
 * @link https://github.com/frapontillo/angular-bootstrap-switch
 * @license Apache License 2.0(http://www.apache.org/licenses/LICENSE-2.0.html)
**/

!function(){"use strict";angular.module("frapontillo.bootstrap-switch",[]),angular.module("frapontillo.bootstrap-switch").directive("bsSwitch",["$parse","$timeout",function(a,b){return{restrict:"A",require:"ngModel",link:function(c,d,e,f){var g=!1,h=function(){if("radio"===e.type)return e.value||a(e.ngValue)(c)||!0;var b=a(e.ngTrueValue)(c);return angular.isUndefined(b)&&(b=!0),b},i=function(a){return c.$eval(a)===!0},j=function(a){return a===!0||"true"===a||!a},k=function(a){return a?a:void 0},l=function(a){return angular.isUndefined(a)?angular.noop:function(){c.$evalAsync(a)}},m=function(a){var b={switchRadioOff:j,switchActive:function(a){return!j(a)},switchAnimate:j,switchLabel:function(a){return a?a:"&nbsp;"},switchIcon:function(a){return a?"<span class='"+a+"'></span>":void 0},switchWrapper:function(a){return a||"wrapper"},switchInverse:i,switchReadonly:i,switchChange:l},c=b[a]||k;return c(e[a])},n=function(a,b,c){if(g){var d=m(c);a.bootstrapSwitch(b,d)}},o=function(){n(d,"disabled","switchActive")},p=function(){if(!g){var a=f.$modelValue===h();g=!g,d.bootstrapSwitch({radioAllOff:m("switchRadioOff"),disabled:m("switchActive"),state:a,onText:m("switchOnText"),offText:m("switchOffText"),onColor:m("switchOnColor"),offColor:m("switchOffColor"),animate:m("switchAnimate"),size:m("switchSize"),labelText:m(e.switchLabel?"switchLabel":"switchIcon"),wrapperClass:m("switchWrapper"),handleWidth:m("switchHandleWidth"),labelWidth:m("switchLabelWidth"),inverse:m("switchInverse"),readonly:m("switchReadonly")}),"radio"===e.type?f.$setViewValue(f.$modelValue):f.$setViewValue(a)}},q=m("switchChange"),r=function(){e.$observe("switchActive",function(a){var c=j(a);c?o():b(o)}),f.$render=function(){p();var a=f.$modelValue;void 0!==a&&null!==a?d.bootstrapSwitch("state",a===h(),!0):(d.bootstrapSwitch("indeterminate",!0,!0),f.$setViewValue(void 0)),q()};var a={switchRadioOff:"radioAllOff",switchOnText:"onText",switchOffText:"offText",switchOnColor:"onColor",switchOffColor:"offColor",switchAnimate:"animate",switchSize:"size",switchLabel:"labelText",switchIcon:"labelText",switchWrapper:"wrapperClass",switchHandleWidth:"handleWidth",switchLabelWidth:"labelWidth",switchInverse:"inverse",switchReadonly:"readonly"},c=function(a,b){return function(){e.$observe(a,function(){n(d,b[a],a)})}};for(var g in a)e.$observe(g,c(g,a))},s=function(){"radio"===e.type?d.on("change.bootstrapSwitch",function(a){f.$modelValue===f.$viewValue&&a.target.checked!==$(a.target).bootstrapSwitch("state")&&(a.target.checked?f.$setViewValue(h()):h()===f.$viewValue&&f.$setViewValue(void 0),q())}):d.on("switchChange.bootstrapSwitch",function(a){f.$setViewValue(a.target.checked),q()})};s(),r(),c.$on("$destroy",function(){d.bootstrapSwitch("destroy")})}}}]).directive("bsSwitch",function(){return{restrict:"E",require:"ngModel",template:"<input bs-switch>",replace:!0}})}();