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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            allowBackward: false,
            allowForward: false,
        };
        _this.componentDidMount = function () {
            var unsubscribe = inkdrop.store.subscribe(_this.stateChanged);
            _this.setState({
                stateListenerUnsubscribe: unsubscribe,
            });
            _this.stateChanged();
        };
        _this.componentWillUnmount = function () {
            if (_this.state.stateListenerUnsubscribe) {
                _this.state.stateListenerUnsubscribe();
            }
        };
        _this.stateChanged = function () {
            var state = inkdrop.store.getState();
            var allowBackward = true;
            var allowForward = true;
            if (state.navigation.offset <= 0) {
                allowBackward = false;
            }
            if (state.navigation.offset == state.navigation.history.length - 1) {
                allowForward = false;
            }
            _this.setState({
                allowBackward: allowBackward,
                allowForward: allowForward,
            });
            console.log(_this.state);
        };
        _this.render = function () {
            return (React.createElement("div", { className: "sidebar-menu-item navigation-helper-container" },
                React.createElement("button", { className: "navigation-helper-item", title: "Back", disabled: !_this.state.allowBackward, onClick: function () {
                        inkdrop.commands.dispatch(document.body, 'core:navigate-back');
                    } },
                    React.createElement("i", { "aria-hidden": "true", className: "arrow left icon" })),
                React.createElement("button", { className: "navigation-helper-item", title: "Forward", disabled: !_this.state.allowForward, onClick: function () {
                        inkdrop.commands.dispatch(document.body, 'core:navigate-forward');
                    } },
                    React.createElement("i", { "aria-hidden": "true", className: "arrow right icon" }))));
        };
        return _this;
    }
    return NavigationComponent;
}(React.Component));
export { NavigationComponent };
