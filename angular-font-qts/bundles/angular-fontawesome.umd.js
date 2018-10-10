(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fortawesome/fontawesome-svg-core'), require('@angular/core'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fortawesome/angular-fontawesome', ['exports', '@fortawesome/fontawesome-svg-core', '@angular/core', '@angular/platform-browser', '@angular/common'], factory) :
    (factory((global.fortawesome = global.fortawesome || {}, global.fortawesome['angular-fontawesome'] = {}),global.fontawesomeSvgCore,global.ng.core,global.ng.platformBrowser,global.ng.common));
}(this, (function (exports,fontawesomeSvgCore,i0,platformBrowser,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** *
     * Returns if is IconLookup or not.
      @type {?} */
    var isIconLookup = function (i) {
        return ( /** @type {?} */(i)).prefix !== undefined && ( /** @type {?} */(i)).iconName !== undefined;
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** *
     * Normalizing icon spec.
      @type {?} */
    var faNormalizeIconSpec = function (iconSpec, defaultPrefix) {
        if (defaultPrefix === void 0) {
            defaultPrefix = 'fas';
        }
        if (typeof iconSpec === 'undefined' || iconSpec === null) {
            return null;
        }
        if (isIconLookup(iconSpec)) {
            return iconSpec;
        }
        if (Array.isArray(iconSpec) && ( /** @type {?} */(iconSpec)).length === 2) {
            return { prefix: iconSpec[0], iconName: iconSpec[1] };
        }
        if (typeof iconSpec === 'string') {
            return { prefix: defaultPrefix, iconName: iconSpec };
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var objectWithKey = function (key, value) {
        var _a;
        return (Array.isArray(value) && value.length > 0) || (!Array.isArray(value) && value) ? (_a = {}, _a[key] = value, _a) : {};
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** *
     * Fontawesome class list.
     * Returns classes array by props.
      @type {?} */
    var faClassList = function (props) {
        var _a;
        /** @type {?} */
        var classes = (_a = {
            'fa-spin': props.spin,
            'fa-pulse': props.pulse,
            'fa-fw': props.fixedWidth,
            'fa-border': props.border,
            'fa-li': props.listItem,
            'fa-inverse': props.inverse,
            'fa-layers-counter': props.counter,
            'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
            'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
        },
            _a["fa-" + props.size] = props.size !== null,
            _a["fa-rotate-" + props.rotate] = props.rotate !== null,
            _a["fa-pull-" + props.pull] = props.pull !== null,
            _a);
        return Object.keys(classes)
            .map(function (key) { return (classes[key] ? key : null); })
            .filter(function (key) { return key; });
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var faWarnIfIconHtmlMissing = function (iconObj, iconSpec) {
        if (iconSpec && !iconObj) {
            console.error("FontAwesome: Could not find icon with iconName=" + iconSpec.iconName + " and prefix=" + iconSpec.prefix);
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var faWarnIfIconSpecMissing = function (iconSpec) {
        if (!iconSpec) {
            console.error('FontAwesome: Could not find icon. ' +
                "It looks like you've provided a null or undefined icon object to this component.");
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var faNotFoundIconHtml = "<svg class=\"" + fontawesomeSvgCore.config.replacementClass + "\" viewBox=\"0 0 448 512\"></svg><!--icon not found-->";

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FaIconService = /** @class */ (function () {
        function FaIconService() {
            this.defaultPrefix = 'fas';
        }
        FaIconService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ FaIconService.ngInjectableDef = i0.defineInjectable({ factory: function FaIconService_Factory() { return new FaIconService(); }, token: FaIconService, providedIn: "root" });
        return FaIconService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Fontawesome icon.
     */
    var FaIconComponent = /** @class */ (function () {
        function FaIconComponent(sanitizer, iconService) {
            this.sanitizer = sanitizer;
            this.iconService = iconService;
            this.classes = [];
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        FaIconComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes) {
                    this.updateIconSpec();
                    this.updateParams();
                    this.updateIcon();
                    this.renderIcon();
                }
            };
        /**
         * Updating icon spec.
         * @return {?}
         */
        FaIconComponent.prototype.updateIconSpec = /**
         * Updating icon spec.
         * @return {?}
         */
            function () {
                this.iconSpec = faNormalizeIconSpec(this.iconProp, this.iconService.defaultPrefix);
            };
        /**
         * Updating params by component props.
         * @return {?}
         */
        FaIconComponent.prototype.updateParams = /**
         * Updating params by component props.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var classOpts = {
                    flip: this.flip,
                    spin: this.spin,
                    pulse: this.pulse,
                    border: this.border,
                    inverse: this.inverse,
                    listItem: this.listItem,
                    size: this.size || null,
                    pull: this.pull || null,
                    rotate: this.rotate || null,
                    fixedWidth: this.fixedWidth
                };
                /** @type {?} */
                var classes = objectWithKey('classes', __spread(faClassList(classOpts), this.classes));
                /** @type {?} */
                var mask = objectWithKey('mask', faNormalizeIconSpec(this.mask, this.iconService.defaultPrefix));
                /** @type {?} */
                var parsedTransform = typeof this.transform === 'string' ? fontawesomeSvgCore.parse.transform(this.transform) : this.transform;
                /** @type {?} */
                var transform = objectWithKey('transform', parsedTransform);
                this.params = __assign({ title: this.title }, transform, classes, mask, { styles: this.styles, symbol: this.symbol });
            };
        /**
         * Updating icon by params and icon spec.
         * @return {?}
         */
        FaIconComponent.prototype.updateIcon = /**
         * Updating icon by params and icon spec.
         * @return {?}
         */
            function () {
                this.icon = fontawesomeSvgCore.icon(this.iconSpec, this.params);
            };
        /**
         * Rendering icon.
         * @return {?}
         */
        FaIconComponent.prototype.renderIcon = /**
         * Rendering icon.
         * @return {?}
         */
            function () {
                faWarnIfIconSpecMissing(this.iconSpec);
                faWarnIfIconHtmlMissing(this.icon, this.iconSpec);
                this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(this.icon ? this.icon.html.join('\n') : faNotFoundIconHtml);
            };
        FaIconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fa-icon',
                        template: "",
                        host: {
                            class: 'ng-fa-icon',
                        }
                    }] }
        ];
        /** @nocollapse */
        FaIconComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer },
                { type: FaIconService }
            ];
        };
        FaIconComponent.propDecorators = {
            iconProp: [{ type: i0.Input, args: ['icon',] }],
            title: [{ type: i0.Input }],
            spin: [{ type: i0.Input }],
            pulse: [{ type: i0.Input }],
            mask: [{ type: i0.Input }],
            styles: [{ type: i0.Input }],
            flip: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            pull: [{ type: i0.Input }],
            border: [{ type: i0.Input }],
            inverse: [{ type: i0.Input }],
            symbol: [{ type: i0.Input }],
            listItem: [{ type: i0.Input }],
            rotate: [{ type: i0.Input }],
            fixedWidth: [{ type: i0.Input }],
            classes: [{ type: i0.Input }],
            transform: [{ type: i0.Input }],
            renderedIconHTML: [{ type: i0.HostBinding, args: ['innerHTML',] }]
        };
        return FaIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Fontawesome layers.
     */
    var FaLayersComponent = /** @class */ (function () {
        function FaLayersComponent(renderer, elementRef) {
            this.renderer = renderer;
            this.elementRef = elementRef;
        }
        /**
         * @return {?}
         */
        FaLayersComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this.elementRef.nativeElement, 'fa-layers');
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        FaLayersComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if ('size' in changes) {
                    if (changes["size"].currentValue != null) {
                        this.renderer.addClass(this.elementRef.nativeElement, "fa-" + changes["size"].currentValue);
                    }
                    if (changes["size"].previousValue != null) {
                        this.renderer.removeClass(this.elementRef.nativeElement, "fa-" + changes["size"].previousValue);
                    }
                }
            };
        FaLayersComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fa-layers',
                        template: "<ng-content select=\"fa-icon, fa-layers-text, fa-layers-counter\"></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        FaLayersComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        FaLayersComponent.propDecorators = {
            size: [{ type: i0.Input }],
            fixedWidth: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.fa-fw',] }]
        };
        return FaLayersComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** *
     * Warns if parent component not existing.
      @type {?} */
    var faWarnIfParentNotExist = function (parent, parentName, childName) {
        if (!parent) {
            console.error("FontAwesome: " + childName + " should be used as child of " + parentName + " only.");
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var FaLayersTextBaseComponent = /** @class */ (function () {
        function FaLayersTextBaseComponent(parent, sanitizer) {
            this.parent = parent;
            this.sanitizer = sanitizer;
            this.classes = [];
            faWarnIfParentNotExist(this.parent, 'FaLayersComponent', this.constructor.name);
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        FaLayersTextBaseComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes) {
                    this.updateParams();
                    this.updateContent();
                }
            };
        /**
         * Updating content by params and content.
         * @return {?}
         */
        FaLayersTextBaseComponent.prototype.updateContent = /**
         * Updating content by params and content.
         * @return {?}
         */
            function () {
                this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(this.renderFontawesomeObject(this.content || '', this.params).html.join('\n'));
            };
        FaLayersTextBaseComponent.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        FaLayersTextBaseComponent.ctorParameters = function () {
            return [
                { type: FaLayersComponent, decorators: [{ type: i0.Inject, args: [i0.forwardRef(function () { return FaLayersComponent; }),] }, { type: i0.Optional }] },
                { type: platformBrowser.DomSanitizer }
            ];
        };
        FaLayersTextBaseComponent.propDecorators = {
            renderedHTML: [{ type: i0.HostBinding, args: ['innerHTML',] }],
            content: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            styles: [{ type: i0.Input }],
            classes: [{ type: i0.Input }]
        };
        return FaLayersTextBaseComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Fontawesome layers text.
     */
    var FaLayersTextComponent = /** @class */ (function (_super) {
        __extends(FaLayersTextComponent, _super);
        function FaLayersTextComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Updating params by component props.
         */
        /**
         * Updating params by component props.
         * @return {?}
         */
        FaLayersTextComponent.prototype.updateParams = /**
         * Updating params by component props.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var classOpts = {
                    flip: this.flip,
                    spin: this.spin,
                    pulse: this.pulse,
                    border: this.border,
                    inverse: this.inverse,
                    listItem: this.listItem,
                    size: this.size || null,
                    pull: this.pull || null,
                    rotate: this.rotate || null,
                    fixedWidth: this.fixedWidth
                };
                /** @type {?} */
                var classes = objectWithKey('classes', __spread(faClassList(classOpts), this.classes));
                /** @type {?} */
                var parsedTransform = typeof this.transform === 'string' ? fontawesomeSvgCore.parse.transform(this.transform) : this.transform;
                /** @type {?} */
                var transform = objectWithKey('transform', parsedTransform);
                this.params = __assign({}, transform, classes, { title: this.title, styles: this.styles });
            };
        /**
         * @param {?} content
         * @param {?=} params
         * @return {?}
         */
        FaLayersTextComponent.prototype.renderFontawesomeObject = /**
         * @param {?} content
         * @param {?=} params
         * @return {?}
         */
            function (content, params) {
                return fontawesomeSvgCore.text(content, params);
            };
        FaLayersTextComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fa-layers-text',
                        template: '',
                        host: {
                            class: 'ng-fa-layers-text'
                        }
                    }] }
        ];
        FaLayersTextComponent.propDecorators = {
            spin: [{ type: i0.Input }],
            pulse: [{ type: i0.Input }],
            flip: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            pull: [{ type: i0.Input }],
            border: [{ type: i0.Input }],
            inverse: [{ type: i0.Input }],
            listItem: [{ type: i0.Input }],
            rotate: [{ type: i0.Input }],
            fixedWidth: [{ type: i0.Input }],
            transform: [{ type: i0.Input }]
        };
        return FaLayersTextComponent;
    }(FaLayersTextBaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Fontawesome layers counter.
     */
    var FaLayersCounterComponent = /** @class */ (function (_super) {
        __extends(FaLayersCounterComponent, _super);
        function FaLayersCounterComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Updating params by component props.
         */
        /**
         * Updating params by component props.
         * @return {?}
         */
        FaLayersCounterComponent.prototype.updateParams = /**
         * Updating params by component props.
         * @return {?}
         */
            function () {
                this.params = {
                    title: this.title,
                    classes: this.classes,
                    styles: this.styles,
                };
            };
        /**
         * @param {?} content
         * @param {?=} params
         * @return {?}
         */
        FaLayersCounterComponent.prototype.renderFontawesomeObject = /**
         * @param {?} content
         * @param {?=} params
         * @return {?}
         */
            function (content, params) {
                return fontawesomeSvgCore.counter(content, params);
            };
        FaLayersCounterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'fa-layers-counter',
                        template: '',
                        host: {
                            class: 'ng-fa-layers-counter'
                        }
                    }] }
        ];
        return FaLayersCounterComponent;
    }(FaLayersTextBaseComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FontAwesomeModule = /** @class */ (function () {
        function FontAwesomeModule() {
        }
        FontAwesomeModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [
                            FaIconComponent,
                            FaLayersComponent,
                            FaLayersTextComponent,
                            FaLayersCounterComponent,
                        ],
                        exports: [
                            FaIconComponent,
                            FaLayersComponent,
                            FaLayersTextComponent,
                            FaLayersCounterComponent,
                        ],
                    },] }
        ];
        return FontAwesomeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.FontAwesomeModule = FontAwesomeModule;
    exports.FaIconComponent = FaIconComponent;
    exports.FaIconService = FaIconService;
    exports.FaLayersComponent = FaLayersComponent;
    exports.FaLayersTextComponent = FaLayersTextComponent;
    exports.FaLayersCounterComponent = FaLayersCounterComponent;
    exports.ɵa = FaLayersTextBaseComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1mb250YXdlc29tZS51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9zaGFyZWQvdXRpbHMvaXMtaWNvbi1sb29rdXAudXRpbC50cyIsIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvc2hhcmVkL3V0aWxzL25vcm1hbGl6ZS1pY29uLXNwZWMudXRpbC50cyIsIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvc2hhcmVkL3V0aWxzL29iamVjdC13aXRoLWtleXMudXRpbC50cyIsIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvc2hhcmVkL3V0aWxzL2NsYXNzbGlzdC51dGlsLnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9zaGFyZWQvZXJyb3JzL3dhcm4taWYtaWNvbi1odG1sLW1pc3NpbmcudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL3NoYXJlZC9lcnJvcnMvd2Fybi1pZi1pY29uLXNwZWMtbWlzc2luZy50cyIsIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvc2hhcmVkL2Vycm9ycy9ub3QtZm91bmQtaWNvbi1odG1sLnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9pY29uL2ljb24uc2VydmljZS50cyIsIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIm5nOi8vQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUvbGF5ZXJzL2xheWVycy5jb21wb25lbnQudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL3NoYXJlZC9lcnJvcnMvd2Fybi1pZi1wYXJlbnQtbm90LWV4aXN0LnRzIiwibmc6Ly9AZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZS9sYXllcnMvbGF5ZXJzLXRleHQtYmFzZS5jb21wb25lbnQudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL2xheWVycy9sYXllcnMtdGV4dC5jb21wb25lbnQudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL2xheWVycy9sYXllcnMtY291bnRlci5jb21wb25lbnQudHMiLCJuZzovL0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lL2ZvbnRhd2Vzb21lLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7SWNvbkxvb2t1cCwgSWNvblByb3B9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbi8qKlxuICogUmV0dXJucyBpZiBpcyBJY29uTG9va3VwIG9yIG5vdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzSWNvbkxvb2t1cCA9IChpOiBJY29uUHJvcCk6IGkgaXMgSWNvbkxvb2t1cCA9PiB7XG4gIHJldHVybiAoPEljb25Mb29rdXA+aSkucHJlZml4ICE9PSB1bmRlZmluZWQgJiYgKDxJY29uTG9va3VwPmkpLmljb25OYW1lICE9PSB1bmRlZmluZWQ7XG59O1xuIiwiaW1wb3J0IHsgSWNvbkxvb2t1cCwgSWNvblByb3AsIEljb25QcmVmaXggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5pbXBvcnQgeyBpc0ljb25Mb29rdXAgfSBmcm9tICcuL2lzLWljb24tbG9va3VwLnV0aWwnO1xuXG4vKipcbiAqIE5vcm1hbGl6aW5nIGljb24gc3BlYy5cbiAqL1xuZXhwb3J0IGNvbnN0IGZhTm9ybWFsaXplSWNvblNwZWMgPSAoaWNvblNwZWM6IEljb25Qcm9wLCBkZWZhdWx0UHJlZml4OiBJY29uUHJlZml4ID0gJ2ZhcycpOiBJY29uTG9va3VwID0+IHtcblxuICBpZiAodHlwZW9mIGljb25TcGVjID09PSAndW5kZWZpbmVkJyB8fCBpY29uU3BlYyA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGlzSWNvbkxvb2t1cChpY29uU3BlYykpIHtcbiAgICByZXR1cm4gaWNvblNwZWM7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShpY29uU3BlYykgJiYgKDxBcnJheTxzdHJpbmc+Pmljb25TcGVjKS5sZW5ndGggPT09IDIpIHtcbiAgICByZXR1cm4geyBwcmVmaXg6IGljb25TcGVjWzBdLCBpY29uTmFtZTogaWNvblNwZWNbMV0gfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaWNvblNwZWMgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHsgcHJlZml4OiBkZWZhdWx0UHJlZml4LCBpY29uTmFtZTogaWNvblNwZWMgfTtcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBvYmplY3RXaXRoS2V5ID0gPFQ+KGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IHtbaWQ6IHN0cmluZ106IFR9ID0+IHtcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB8fCAoIUFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlKSA/IHsgW2tleV06IHZhbHVlIH0gOiB7fTtcbn07XG4iLCJpbXBvcnQgeyBGYVByb3BzIH0gZnJvbSAnLi4vbW9kZWxzL3Byb3BzLm1vZGVsJztcblxuLyoqXG4gKiBGb250YXdlc29tZSBjbGFzcyBsaXN0LlxuICogUmV0dXJucyBjbGFzc2VzIGFycmF5IGJ5IHByb3BzLlxuICovXG5leHBvcnQgY29uc3QgZmFDbGFzc0xpc3QgPSAocHJvcHM6IEZhUHJvcHMpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgJ2ZhLXNwaW4nOiBwcm9wcy5zcGluLFxuICAgICdmYS1wdWxzZSc6IHByb3BzLnB1bHNlLFxuICAgICdmYS1mdyc6IHByb3BzLmZpeGVkV2lkdGgsXG4gICAgJ2ZhLWJvcmRlcic6IHByb3BzLmJvcmRlcixcbiAgICAnZmEtbGknOiBwcm9wcy5saXN0SXRlbSxcbiAgICAnZmEtaW52ZXJzZSc6IHByb3BzLmludmVyc2UsXG4gICAgJ2ZhLWxheWVycy1jb3VudGVyJzogcHJvcHMuY291bnRlcixcbiAgICAnZmEtZmxpcC1ob3Jpem9udGFsJzogcHJvcHMuZmxpcCA9PT0gJ2hvcml6b250YWwnIHx8IHByb3BzLmZsaXAgPT09ICdib3RoJyxcbiAgICAnZmEtZmxpcC12ZXJ0aWNhbCc6IHByb3BzLmZsaXAgPT09ICd2ZXJ0aWNhbCcgfHwgcHJvcHMuZmxpcCA9PT0gJ2JvdGgnLFxuICAgIFtgZmEtJHtwcm9wcy5zaXplfWBdOiBwcm9wcy5zaXplICE9PSBudWxsLFxuICAgIFtgZmEtcm90YXRlLSR7cHJvcHMucm90YXRlfWBdOiBwcm9wcy5yb3RhdGUgIT09IG51bGwsXG4gICAgW2BmYS1wdWxsLSR7cHJvcHMucHVsbH1gXTogcHJvcHMucHVsbCAhPT0gbnVsbFxuICB9O1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhjbGFzc2VzKVxuICAgIC5tYXAoa2V5ID0+IChjbGFzc2VzW2tleV0gPyBrZXkgOiBudWxsKSlcbiAgICAuZmlsdGVyKGtleSA9PiBrZXkpO1xufTtcbiIsImltcG9ydCB7IEljb24sIEljb25Mb29rdXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5leHBvcnQgY29uc3QgZmFXYXJuSWZJY29uSHRtbE1pc3NpbmcgPSAoaWNvbk9iajogSWNvbiwgaWNvblNwZWM6IEljb25Mb29rdXApID0+IHtcbiAgaWYgKGljb25TcGVjICYmICFpY29uT2JqKSB7XG4gICAgY29uc29sZS5lcnJvcihgRm9udEF3ZXNvbWU6IENvdWxkIG5vdCBmaW5kIGljb24gd2l0aCBpY29uTmFtZT0ke2ljb25TcGVjLmljb25OYW1lfSBhbmQgcHJlZml4PSR7aWNvblNwZWMucHJlZml4fWApO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgSWNvbkxvb2t1cCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmV4cG9ydCBjb25zdCBmYVdhcm5JZkljb25TcGVjTWlzc2luZyA9IChpY29uU3BlYzogSWNvbkxvb2t1cCkgPT4ge1xuICBpZiAoIWljb25TcGVjKSB7XG4gICAgY29uc29sZS5lcnJvcignRm9udEF3ZXNvbWU6IENvdWxkIG5vdCBmaW5kIGljb24uICcgK1xuICAgICAgYEl0IGxvb2tzIGxpa2UgeW91J3ZlIHByb3ZpZGVkIGEgbnVsbCBvciB1bmRlZmluZWQgaWNvbiBvYmplY3QgdG8gdGhpcyBjb21wb25lbnQuYCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5leHBvcnQgY29uc3QgZmFOb3RGb3VuZEljb25IdG1sID0gYDxzdmcgY2xhc3M9XCIke2NvbmZpZy5yZXBsYWNlbWVudENsYXNzfVwiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjwvc3ZnPjwhLS1pY29uIG5vdCBmb3VuZC0tPmA7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uUHJlZml4IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgRmFJY29uU2VydmljZSB7XG4gIGRlZmF1bHRQcmVmaXg6IEljb25QcmVmaXggPSAnZmFzJztcbn1cbiIsImltcG9ydCB7XG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBpY29uLFxuICBJY29uLFxuICBwYXJzZSxcbiAgU3R5bGVzLFxuICBQdWxsUHJvcCxcbiAgSWNvblByb3AsXG4gIFNpemVQcm9wLFxuICBGbGlwUHJvcCxcbiAgRmFTeW1ib2wsXG4gIFRyYW5zZm9ybSxcbiAgSWNvblBhcmFtcyxcbiAgSWNvbkxvb2t1cCxcbiAgUm90YXRlUHJvcFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBmYU5vcm1hbGl6ZUljb25TcGVjIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzL25vcm1hbGl6ZS1pY29uLXNwZWMudXRpbCc7XG5pbXBvcnQgeyBGYVByb3BzIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9wcm9wcy5tb2RlbCc7XG5pbXBvcnQgeyBvYmplY3RXaXRoS2V5IH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzL29iamVjdC13aXRoLWtleXMudXRpbCc7XG5pbXBvcnQgeyBmYUNsYXNzTGlzdCB9IGZyb20gJy4uL3NoYXJlZC91dGlscy9jbGFzc2xpc3QudXRpbCc7XG5pbXBvcnQgeyBmYVdhcm5JZkljb25IdG1sTWlzc2luZyB9IGZyb20gJy4uL3NoYXJlZC9lcnJvcnMvd2Fybi1pZi1pY29uLWh0bWwtbWlzc2luZyc7XG5pbXBvcnQgeyBmYVdhcm5JZkljb25TcGVjTWlzc2luZyB9IGZyb20gJy4uL3NoYXJlZC9lcnJvcnMvd2Fybi1pZi1pY29uLXNwZWMtbWlzc2luZyc7XG5pbXBvcnQgeyBmYU5vdEZvdW5kSWNvbkh0bWwgfSBmcm9tICcuLi9zaGFyZWQvZXJyb3JzL25vdC1mb3VuZC1pY29uLWh0bWwnO1xuaW1wb3J0IHsgRmFJY29uU2VydmljZSB9IGZyb20gJy4vaWNvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBGb250YXdlc29tZSBpY29uLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYS1pY29uJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZy1mYS1pY29uJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBGYUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnaWNvbicpIGljb25Qcm9wOiBJY29uUHJvcDtcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNwaW4/OiBib29sZWFuO1xuICBASW5wdXQoKSBwdWxzZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1hc2s/OiBJY29uUHJvcDtcbiAgQElucHV0KCkgc3R5bGVzPzogU3R5bGVzO1xuICBASW5wdXQoKSBmbGlwPzogRmxpcFByb3A7XG4gIEBJbnB1dCgpIHNpemU/OiBTaXplUHJvcDtcbiAgQElucHV0KCkgcHVsbD86IFB1bGxQcm9wO1xuICBASW5wdXQoKSBib3JkZXI/OiBib29sZWFuO1xuICBASW5wdXQoKSBpbnZlcnNlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgc3ltYm9sPzogRmFTeW1ib2w7XG4gIEBJbnB1dCgpIGxpc3RJdGVtPzogYm9vbGVhbjtcbiAgQElucHV0KCkgcm90YXRlPzogUm90YXRlUHJvcDtcbiAgQElucHV0KCkgZml4ZWRXaWR0aD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNsYXNzZXM/OiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSB0cmFuc2Zvcm0/OiBzdHJpbmcgfCBUcmFuc2Zvcm07XG5cbiAgcHVibGljIGljb246IEljb247XG5cbiAgQEhvc3RCaW5kaW5nKCdpbm5lckhUTUwnKVxuICBwdWJsaWMgcmVuZGVyZWRJY29uSFRNTDogU2FmZUh0bWw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSBpY29uU2VydmljZTogRmFJY29uU2VydmljZSkge31cblxuICBwcml2YXRlIHBhcmFtczogSWNvblBhcmFtcztcbiAgcHJpdmF0ZSBpY29uU3BlYzogSWNvbkxvb2t1cDtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgIHRoaXMudXBkYXRlSWNvblNwZWMoKTtcbiAgICAgIHRoaXMudXBkYXRlUGFyYW1zKCk7XG4gICAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICAgIHRoaXMucmVuZGVySWNvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBpY29uIHNwZWMuXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZUljb25TcGVjKCkge1xuICAgIHRoaXMuaWNvblNwZWMgPSBmYU5vcm1hbGl6ZUljb25TcGVjKHRoaXMuaWNvblByb3AsIHRoaXMuaWNvblNlcnZpY2UuZGVmYXVsdFByZWZpeCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRpbmcgcGFyYW1zIGJ5IGNvbXBvbmVudCBwcm9wcy5cbiAgICovXG4gIHByaXZhdGUgdXBkYXRlUGFyYW1zKCkge1xuICAgIGNvbnN0IGNsYXNzT3B0czogRmFQcm9wcyA9IHtcbiAgICAgIGZsaXA6IHRoaXMuZmxpcCxcbiAgICAgIHNwaW46IHRoaXMuc3BpbixcbiAgICAgIHB1bHNlOiB0aGlzLnB1bHNlLFxuICAgICAgYm9yZGVyOiB0aGlzLmJvcmRlcixcbiAgICAgIGludmVyc2U6IHRoaXMuaW52ZXJzZSxcbiAgICAgIGxpc3RJdGVtOiB0aGlzLmxpc3RJdGVtLFxuICAgICAgc2l6ZTogdGhpcy5zaXplIHx8IG51bGwsXG4gICAgICBwdWxsOiB0aGlzLnB1bGwgfHwgbnVsbCxcbiAgICAgIHJvdGF0ZTogdGhpcy5yb3RhdGUgfHwgbnVsbCxcbiAgICAgIGZpeGVkV2lkdGg6IHRoaXMuZml4ZWRXaWR0aFxuICAgIH07XG5cbiAgICBjb25zdCBjbGFzc2VzID0gb2JqZWN0V2l0aEtleSgnY2xhc3NlcycsIFsuLi5mYUNsYXNzTGlzdChjbGFzc09wdHMpLCAuLi50aGlzLmNsYXNzZXNdKTtcbiAgICBjb25zdCBtYXNrID0gb2JqZWN0V2l0aEtleSgnbWFzaycsIGZhTm9ybWFsaXplSWNvblNwZWModGhpcy5tYXNrLCB0aGlzLmljb25TZXJ2aWNlLmRlZmF1bHRQcmVmaXgpKTtcbiAgICBjb25zdCBwYXJzZWRUcmFuc2Zvcm0gPSB0eXBlb2YgdGhpcy50cmFuc2Zvcm0gPT09ICdzdHJpbmcnID8gcGFyc2UudHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtKSA6IHRoaXMudHJhbnNmb3JtO1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IG9iamVjdFdpdGhLZXkoJ3RyYW5zZm9ybScsIHBhcnNlZFRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLnBhcmFtcyA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgLi4udHJhbnNmb3JtLFxuICAgICAgLi4uY2xhc3NlcyxcbiAgICAgIC4uLm1hc2ssXG4gICAgICBzdHlsZXM6IHRoaXMuc3R5bGVzLFxuICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRpbmcgaWNvbiBieSBwYXJhbXMgYW5kIGljb24gc3BlYy5cbiAgICovXG4gIHByaXZhdGUgdXBkYXRlSWNvbigpIHtcbiAgICB0aGlzLmljb24gPSBpY29uKHRoaXMuaWNvblNwZWMsIHRoaXMucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJpbmcgaWNvbi5cbiAgICovXG4gIHByaXZhdGUgcmVuZGVySWNvbigpIHtcbiAgICBmYVdhcm5JZkljb25TcGVjTWlzc2luZyh0aGlzLmljb25TcGVjKTtcbiAgICBmYVdhcm5JZkljb25IdG1sTWlzc2luZyh0aGlzLmljb24sIHRoaXMuaWNvblNwZWMpO1xuXG4gICAgdGhpcy5yZW5kZXJlZEljb25IVE1MID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoXG4gICAgICB0aGlzLmljb24gPyB0aGlzLmljb24uaHRtbC5qb2luKCdcXG4nKSA6IGZhTm90Rm91bmRJY29uSHRtbFxuICAgICk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpemVQcm9wIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuLyoqXG4gKiBGb250YXdlc29tZSBsYXllcnMuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhLWxheWVycycsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZmEtaWNvbiwgZmEtbGF5ZXJzLXRleHQsIGZhLWxheWVycy1jb3VudGVyXCI+PC9uZy1jb250ZW50PmAsXG59KVxuZXhwb3J0IGNsYXNzIEZhTGF5ZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzaXplPzogU2l6ZVByb3A7XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mYS1mdycpXG4gIGZpeGVkV2lkdGg/OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2ZhLWxheWVycycpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICgnc2l6ZScgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGNoYW5nZXMuc2l6ZS5jdXJyZW50VmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgZmEtJHtjaGFuZ2VzLnNpemUuY3VycmVudFZhbHVlfWApO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZXMuc2l6ZS5wcmV2aW91c1ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYGZhLSR7Y2hhbmdlcy5zaXplLnByZXZpb3VzVmFsdWV9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIFdhcm5zIGlmIHBhcmVudCBjb21wb25lbnQgbm90IGV4aXN0aW5nLlxuICovXG5leHBvcnQgY29uc3QgZmFXYXJuSWZQYXJlbnROb3RFeGlzdCA9IChwYXJlbnQ6IGFueSwgcGFyZW50TmFtZTogc3RyaW5nLCBjaGlsZE5hbWU6IHN0cmluZykgPT4ge1xuICBpZiAoIXBhcmVudCkge1xuICAgIGNvbnNvbGUuZXJyb3IoYEZvbnRBd2Vzb21lOiAke2NoaWxkTmFtZX0gc2hvdWxkIGJlIHVzZWQgYXMgY2hpbGQgb2YgJHtwYXJlbnROYW1lfSBvbmx5LmApO1xuICB9XG59O1xuIiwiaW1wb3J0IHtcbiAgSW5wdXQsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgT3B0aW9uYWwsXG4gIE9uQ2hhbmdlcyxcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBTdHlsZXMsXG4gIEZvbnRhd2Vzb21lT2JqZWN0LFxuICBUZXh0UGFyYW1zXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IEZhTGF5ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcnMuY29tcG9uZW50JztcbmltcG9ydCB7IGZhV2FybklmUGFyZW50Tm90RXhpc3QgfSBmcm9tICcuLi9zaGFyZWQvZXJyb3JzL3dhcm4taWYtcGFyZW50LW5vdC1leGlzdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYUxheWVyc1RleHRCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASG9zdEJpbmRpbmcoJ2lubmVySFRNTCcpXG4gIHB1YmxpYyByZW5kZXJlZEhUTUw6IFNhZmVIdG1sO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBGYUxheWVyc0NvbXBvbmVudCkpIEBPcHRpb25hbCgpIHByaXZhdGUgcGFyZW50OiBGYUxheWVyc0NvbXBvbmVudCxcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG5cbiAgICBmYVdhcm5JZlBhcmVudE5vdEV4aXN0KHRoaXMucGFyZW50LCAnRmFMYXllcnNDb21wb25lbnQnLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHBhcmFtczogVGV4dFBhcmFtcztcblxuICBASW5wdXQoKSBwcm90ZWN0ZWQgY29udGVudDogc3RyaW5nO1xuICBASW5wdXQoKSBwcm90ZWN0ZWQgdGl0bGU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHByb3RlY3RlZCBzdHlsZXM/OiBTdHlsZXM7XG4gIEBJbnB1dCgpIHByb3RlY3RlZCBjbGFzc2VzPzogc3RyaW5nW10gPSBbXTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgIHRoaXMudXBkYXRlUGFyYW1zKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRpbmcgcGFyYW1zIGJ5IGNvbXBvbmVudCBwcm9wcy5cbiAgICovXG4gIHByb3RlY3RlZCBhYnN0cmFjdCB1cGRhdGVQYXJhbXMoKTogdm9pZDtcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBGb250YXdlc29tZU9iamVjdCB1c2luZyB0aGUgY29udGVudCBhbmQgcGFyYW1zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHJlbmRlckZvbnRhd2Vzb21lT2JqZWN0KGNvbnRlbnQ6IHN0cmluZyB8IG51bWJlciwgcGFyYW1zPzogVGV4dFBhcmFtcyk6IEZvbnRhd2Vzb21lT2JqZWN0O1xuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBjb250ZW50IGJ5IHBhcmFtcyBhbmQgY29udGVudC5cbiAgICovXG4gIHByaXZhdGUgdXBkYXRlQ29udGVudCgpIHtcbiAgICB0aGlzLnJlbmRlcmVkSFRNTCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFxuICAgICAgdGhpcy5yZW5kZXJGb250YXdlc29tZU9iamVjdCh0aGlzLmNvbnRlbnQgfHwgJycsIHRoaXMucGFyYW1zKS5odG1sLmpvaW4oJ1xcbicpXG4gICAgKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQge1xuICBJbnB1dCxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIHRleHQsXG4gIHBhcnNlLFxuICBUZXh0LFxuICBUZXh0UGFyYW1zLFxuICBTaXplUHJvcCxcbiAgRmxpcFByb3AsXG4gIFB1bGxQcm9wLFxuICBUcmFuc2Zvcm0sXG4gIFJvdGF0ZVByb3Bcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7IEZhTGF5ZXJzVGV4dEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2xheWVycy10ZXh0LWJhc2UuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRmFQcm9wcyB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvcHJvcHMubW9kZWwnO1xuaW1wb3J0IHsgb2JqZWN0V2l0aEtleSB9IGZyb20gJy4uL3NoYXJlZC91dGlscy9vYmplY3Qtd2l0aC1rZXlzLnV0aWwnO1xuaW1wb3J0IHsgZmFDbGFzc0xpc3QgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMvY2xhc3NsaXN0LnV0aWwnO1xuXG4vKipcbiAqIEZvbnRhd2Vzb21lIGxheWVycyB0ZXh0LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYS1sYXllcnMtdGV4dCcsXG4gIHRlbXBsYXRlOiAnJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbmctZmEtbGF5ZXJzLXRleHQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRmFMYXllcnNUZXh0Q29tcG9uZW50IGV4dGVuZHMgRmFMYXllcnNUZXh0QmFzZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgc3Bpbj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHB1bHNlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZmxpcD86IEZsaXBQcm9wO1xuICBASW5wdXQoKSBzaXplPzogU2l6ZVByb3A7XG4gIEBJbnB1dCgpIHB1bGw/OiBQdWxsUHJvcDtcbiAgQElucHV0KCkgYm9yZGVyPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaW52ZXJzZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxpc3RJdGVtPzogYm9vbGVhbjtcbiAgQElucHV0KCkgcm90YXRlPzogUm90YXRlUHJvcDtcbiAgQElucHV0KCkgZml4ZWRXaWR0aD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRyYW5zZm9ybT86IHN0cmluZyB8IFRyYW5zZm9ybTtcblxuICAvKipcbiAgICogVXBkYXRpbmcgcGFyYW1zIGJ5IGNvbXBvbmVudCBwcm9wcy5cbiAgICovXG4gIHByb3RlY3RlZCB1cGRhdGVQYXJhbXMoKSB7XG4gICAgY29uc3QgY2xhc3NPcHRzOiBGYVByb3BzID0ge1xuICAgICAgZmxpcDogdGhpcy5mbGlwLFxuICAgICAgc3BpbjogdGhpcy5zcGluLFxuICAgICAgcHVsc2U6IHRoaXMucHVsc2UsXG4gICAgICBib3JkZXI6IHRoaXMuYm9yZGVyLFxuICAgICAgaW52ZXJzZTogdGhpcy5pbnZlcnNlLFxuICAgICAgbGlzdEl0ZW06IHRoaXMubGlzdEl0ZW0sXG4gICAgICBzaXplOiB0aGlzLnNpemUgfHwgbnVsbCxcbiAgICAgIHB1bGw6IHRoaXMucHVsbCB8fCBudWxsLFxuICAgICAgcm90YXRlOiB0aGlzLnJvdGF0ZSB8fCBudWxsLFxuICAgICAgZml4ZWRXaWR0aDogdGhpcy5maXhlZFdpZHRoXG4gICAgfTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBvYmplY3RXaXRoS2V5KCdjbGFzc2VzJywgWy4uLmZhQ2xhc3NMaXN0KGNsYXNzT3B0cyksIC4uLnRoaXMuY2xhc3Nlc10pO1xuICAgIGNvbnN0IHBhcnNlZFRyYW5zZm9ybSA9IHR5cGVvZiB0aGlzLnRyYW5zZm9ybSA9PT0gJ3N0cmluZycgPyBwYXJzZS50cmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pIDogdGhpcy50cmFuc2Zvcm07XG4gICAgY29uc3QgdHJhbnNmb3JtID0gb2JqZWN0V2l0aEtleSgndHJhbnNmb3JtJywgcGFyc2VkVHJhbnNmb3JtKTtcblxuICAgIHRoaXMucGFyYW1zID0ge1xuICAgICAgLi4udHJhbnNmb3JtLFxuICAgICAgLi4uY2xhc3NlcyxcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgc3R5bGVzOiB0aGlzLnN0eWxlc1xuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyRm9udGF3ZXNvbWVPYmplY3QoY29udGVudDogc3RyaW5nLCBwYXJhbXM/OiBUZXh0UGFyYW1zKSB7XG4gICAgcmV0dXJuIHRleHQoY29udGVudCwgcGFyYW1zKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgY291bnRlcixcbiAgQ291bnRlcixcbiAgQ291bnRlclBhcmFtcyxcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7IEZhTGF5ZXJzVGV4dEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2xheWVycy10ZXh0LWJhc2UuY29tcG9uZW50JztcblxuLyoqXG4gKiBGb250YXdlc29tZSBsYXllcnMgY291bnRlci5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmEtbGF5ZXJzLWNvdW50ZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25nLWZhLWxheWVycy1jb3VudGVyJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEZhTGF5ZXJzQ291bnRlckNvbXBvbmVudCBleHRlbmRzIEZhTGF5ZXJzVGV4dEJhc2VDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBwYXJhbXMgYnkgY29tcG9uZW50IHByb3BzLlxuICAgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZVBhcmFtcygpIHtcbiAgICB0aGlzLnBhcmFtcyA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgY2xhc3NlczogdGhpcy5jbGFzc2VzLFxuICAgICAgc3R5bGVzOiB0aGlzLnN0eWxlcyxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckZvbnRhd2Vzb21lT2JqZWN0KGNvbnRlbnQ6IHN0cmluZyB8IG51bWJlciwgcGFyYW1zPzogQ291bnRlclBhcmFtcykge1xuICAgIHJldHVybiBjb3VudGVyKGNvbnRlbnQsIHBhcmFtcyk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi9pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYUxheWVyc0NvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJzL2xheWVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFMYXllcnNUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXllcnMvbGF5ZXJzLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IEZhTGF5ZXJzQ291bnRlckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJzL2xheWVycy1jb3VudGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGYUljb25Db21wb25lbnQsXG4gICAgRmFMYXllcnNDb21wb25lbnQsXG4gICAgRmFMYXllcnNUZXh0Q29tcG9uZW50LFxuICAgIEZhTGF5ZXJzQ291bnRlckNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEZhSWNvbkNvbXBvbmVudCxcbiAgICBGYUxheWVyc0NvbXBvbmVudCxcbiAgICBGYUxheWVyc1RleHRDb21wb25lbnQsXG4gICAgRmFMYXllcnNDb3VudGVyQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb250QXdlc29tZU1vZHVsZSB7XG59XG4iXSwibmFtZXMiOlsiY29uZmlnIiwiSW5qZWN0YWJsZSIsInBhcnNlIiwiaWNvbiIsIkNvbXBvbmVudCIsIkRvbVNhbml0aXplciIsIklucHV0IiwiSG9zdEJpbmRpbmciLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiSW5qZWN0IiwiZm9yd2FyZFJlZiIsIk9wdGlvbmFsIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJ0ZXh0IiwiY291bnRlciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBRUYsdUJBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzFCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdkMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxD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