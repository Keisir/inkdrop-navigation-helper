'use babel';

import React from 'react';

export class NavigationComponent extends React.Component {
    render() {
        return (
            <div className="sidebar-menu-item navigation-helper-container">
                <button
                    className="navigation-helper-item"
                    title="Back"
                    onClick={() => {
                        inkdrop.commands.dispatch(document.body, 'core:navigate-back');
                    }}
                >
                    <i aria-hidden="true" className="arrow left icon" />
                </button>
                <button
                    className="navigation-helper-item"
                    title="Forward"
                    onClick={() => {
                        inkdrop.commands.dispatch(document.body, 'core:navigate-forward');
                    }}
                >
                    <i aria-hidden="true" className="arrow right icon" />
                </button>
            </div>
        );
    }
}
