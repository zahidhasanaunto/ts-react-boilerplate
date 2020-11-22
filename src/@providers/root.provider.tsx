import React from 'react';

const AppRootComponent = (props: any) => {
    return (
        <div>
            {props.children}
        </div>
    );
}

export const AppRootProvider = (props: any) => {
    return (
        <AppRootComponent>
            {props.children}
        </AppRootComponent>
    );
}