'use babel';

import { NavigationComponent } from './navigation-component';

class NavigationHelperPlugin {
    activate = async () => {
        if (inkdrop.config.get('navigation-helper.navigationComponent')) {
            inkdrop.components.registerClass(NavigationComponent);
            inkdrop.layouts.insertComponentToLayoutBefore('sidebar-menu', 'SideBarMenuItemAllNotes', NavigationComponent.name);
        }
    };

    deactivate = async () => {
        inkdrop.layouts.removeComponentFromLayout('sidebar-menu', NavigationComponent.name);
        inkdrop.components.deleteClass(NavigationComponent);
    };
}

const plugin = new NavigationHelperPlugin();

module.exports = {
    config: {
        navigationComponent: {
            title: 'Visual navigation component',
            description:
                'Specifies whether to display a visual component that can be used to navigate back and forth in the application. (Inkdrop must be reloaded to apply this setting)',
            type: 'boolean',
            default: true
        }
    },
    activate() {
        plugin.activate();
    },
    deactivate() {
        plugin.deactivate();
    }
};
