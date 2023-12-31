declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
    import * as React from 'react';

    const ReactComponent: React.FunctionComponent<
        React.ComponentProps<'svg'> & { title?: string }
    >;

    export default ReactComponent;
}
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
