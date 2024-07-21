'use babel';
import React from 'react';
export class NavigationHistory extends React.Component {
    state = {
        allowBackward: false,
        allowForward: false
    };
    componentDidMount = () => {
        const unsubscribe = inkdrop.store.subscribe(this.stateChanged);
        this.setState({
            stateListenerUnsubscribe: unsubscribe
        });
        this.stateChanged();
    };
    componentWillUnmount = () => {
        if (this.state.stateListenerUnsubscribe) {
            this.state.stateListenerUnsubscribe();
        }
    };
    stateChanged = () => {
        const state = inkdrop.store.getState();
        let allowBackward = true;
        let allowForward = true;
        if (state.navigation.offset <= 0) {
            allowBackward = false;
        }
        if (state.navigation.offset == state.navigation.history.length - 1) {
            allowForward = false;
        }
        this.setState({
            allowBackward: allowBackward,
            allowForward: allowForward
        });
    };
    render = () => {
        return (React.createElement("div", { className: "sidebar-menu-item navigation-helper-container" },
            React.createElement("div", { className: "sidebar-menu-item-content", style: { justifyContent: 'space-between' } },
                React.createElement("button", { className: "navigation-helper-item", title: "Back", disabled: !this.state.allowBackward, onClick: () => {
                        inkdrop.commands.dispatch(document.body, 'core:navigate-back');
                    } },
                    React.createElement("i", { "aria-hidden": "true", className: "arrow left icon" })),
                React.createElement("button", { className: "navigation-helper-item", title: "Forward", disabled: !this.state.allowForward, onClick: () => {
                        inkdrop.commands.dispatch(document.body, 'core:navigate-forward');
                    } },
                    React.createElement("i", { "aria-hidden": "true", className: "arrow right icon" })))));
    };
}
