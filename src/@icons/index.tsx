import Icon from '@material-ui/core/Icon';
import React from 'react';

export const CustomIcon = (props: any) => {
    return (
        <Icon {...props}>
            {props.name}
        </Icon>
    );
};