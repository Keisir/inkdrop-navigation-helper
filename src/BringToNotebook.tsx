'use babel';

import React from 'react';
import { MapPinIcon } from './Icons/MapPin';

interface BringToNotebookProps {}

export class BringToNotebook extends React.Component<BringToNotebookProps> {
    render = () => {
        return (
            <div style={{ marginRight: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '28px' }}>
                <div
                    role="button"
                    className="focus-outline"
                    style={{ borderRadius: '0.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => {
                        inkdrop.commands.dispatch(document.body, 'core:note-list-show-notes-in-book', {
                            bookId: inkdrop.store.getState().editingNote.bookId,
                            selectFirstNote: false
                        });
                    }}
                    tabIndex={0}>
                    <MapPinIcon style={{ width: '1.2em', height: '1.2em' }} />
                </div>
            </div>
        );
    };
}
