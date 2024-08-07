'use babel';

import React from 'react';

interface NavigationHistoryState {
    stateListenerUnsubscribe?: () => void;
    allowBackward: boolean;
    allowForward: boolean;
}

interface NavigationHistoryProps {}

export class NavigationHistory extends React.Component<NavigationHistoryProps, NavigationHistoryState> {
    state: Readonly<NavigationHistoryState> = {
        allowBackward: false,
        allowForward: false
    };

    componentDidMount = (): void => {
        const unsubscribe = inkdrop.store.subscribe(this.stateChanged);
        this.setState({
            stateListenerUnsubscribe: unsubscribe
        });
        this.stateChanged();
    };

    componentWillUnmount = (): void => {
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
        return (
            <div className="sidebar-menu-item navigation-helper-container">
                <div
                    className="sidebar-menu-item-content"
                    style={{ justifyContent: 'space-between' }}>
                    <button
                        className="navigation-helper-item"
                        title="Back"
                        disabled={!this.state.allowBackward}
                        onClick={() => {
                            inkdrop.commands.dispatch(document.body, 'core:navigate-back');
                        }}>
                        <i
                            aria-hidden="true"
                            className="arrow left icon"
                        />
                    </button>
                    <button
                        className="navigation-helper-item"
                        title="Forward"
                        disabled={!this.state.allowForward}
                        onClick={() => {
                            inkdrop.commands.dispatch(document.body, 'core:navigate-forward');
                        }}>
                        <i
                            aria-hidden="true"
                            className="arrow right icon"
                        />
                    </button>
                </div>
            </div>
        );
    };
}
