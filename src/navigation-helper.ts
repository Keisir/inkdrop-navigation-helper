'use babel';

export {};

class NavigationHelperPlugin {
    activate = async () => {
        window.addEventListener('mouseup', this.navigationHandler);
    };

    navigationHandler = (event: MouseEvent) => {
        if (event.button === 3) {
            inkdrop.commands.dispatch(document.body, 'core:navigate-back');
        }
        if (event.button === 4) {
            inkdrop.commands.dispatch(document.body, 'core:navigate-forward');
        }
    };

    deactivate = async () => {
        window.removeEventListener('mouseup', this.navigationHandler);
    };
}

const plugin = new NavigationHelperPlugin();

module.exports = {
    config: {},
    activate() {
        plugin.activate();
    },
    deactivate() {
        plugin.deactivate();
    },
};
