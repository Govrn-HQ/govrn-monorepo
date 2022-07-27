import React from 'react';
import { Story } from '@storybook/react';
import { ModalWrapper, ModalWrapperProps} from '../..';

export default {
    title: 'Components/Molecules/ModalWrapper',
    component: ModalWrapper,
    argTypes: {
        tipText: {
            control: {type: 'text'},
        },
    },
}