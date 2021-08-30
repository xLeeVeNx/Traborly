import React from 'react';

import './Dialogs.scss';
import DialogsItem from './DialogsItem/DialogsItem';
import DialogsMessage from './DialogsMessage/DialogsMessage';

interface IDialog {
    id: number;
    text: string;
}

const Dialogs: React.FC = () => {
    const DialogsItemData: IDialog[] = [
        {id: 1, text: 'Damil'},
        {id: 2, text: 'Maksim'},
        {id: 3, text: 'Daniil'},
        {id: 4, text: 'Dauren'},
        {id: 5, text: 'Viktor'}
    ];

    const DialogsMessageData: IDialog[] = [
        {id: 1, text: 'Hello'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'What are you doing now?'},
        {id: 4, text: 'What do you do?'},
        {id: 5, text: 'Maybe, do you want to go for a walk?'}
    ];

    return (
        <section className="dialogs">
            <div className="dialogs__inner">
                <div className="dialogs__items">
                    {DialogsItemData.map(item => <DialogsItem id={item.id} text={item.text} key={item.id}/>)}
                </div>
                <div className="dialogs__messages">
                    {DialogsMessageData.map(item => <DialogsMessage text={item.text} key={item.id}/>)}
                </div>
            </div>
        </section>
    );
};

export default Dialogs;
