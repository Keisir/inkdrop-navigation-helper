'use babel';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
var NavigationComponent = /** @class */ (function (_super) {
    __extends(NavigationComponent, _super);
    function NavigationComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationComponent.prototype.render = function () {
        return (React.createElement("div", { className: "sidebar-menu-item navigation-helper-container" },
            React.createElement("button", { className: "navigation-helper-item", title: "Back", onClick: function () {
                    inkdrop.commands.dispatch(document.body, 'core:navigate-back');
                } },
                React.createElement("i", { "aria-hidden": "true", className: "arrow left icon" })),
            React.createElement("button", { className: "navigation-helper-item", title: "Forward", onClick: function () {
                    inkdrop.commands.dispatch(document.body, 'core:navigate-forward');
                } },
                React.createElement("i", { "aria-hidden": "true", className: "arrow right icon" }))));
    };
    return NavigationComponent;
}(React.Component));
export { NavigationComponent };
