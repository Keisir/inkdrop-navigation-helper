'use babel';

import { NavigationComponent } from './navigation-component';

export {};

class NavigationHelperPlugin {
    activate = async () => {
        window.addEventListener('mouseup', this.navigationHandler);

        inkdrop.components.registerClass(NavigationComponent);
        inkdrop.layouts.insertComponentToLayoutBefore('sidebar-menu', 'SideBarMenuItemAllNotes', NavigationComponent.name);
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

        inkdrop.layouts.removeComponentFromLayout('sidebar-menu', NavigationComponent.name);
        inkdrop.components.deleteClass(NavigationComponent);
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
