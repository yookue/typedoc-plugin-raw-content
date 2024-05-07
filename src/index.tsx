/*
 * Copyright (c) 2024 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the 'License')
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


import {Application, JSX, ParameterType} from 'typedoc';


/**
 * Raw content plugin for typedoc
 * <p>
 * Generates extra raw html contents during typedoc compilation
 * <p>
 * The entry function, called by typedoc when loading this plugin
 *
 * @author David Hsing
 *
 * @see "https://typedoc.org/api/interfaces/RendererHooks.html"
 *
 * @ignore
 */
// noinspection JSUnusedGlobalSymbols
export function load(app: Application) {
    // Declare options
    app.options.addDeclaration({
        name: 'rawHeadBegins',
        type: ParameterType.Array,
        help: 'Raw html content on head begin',
    });
    app.options.addDeclaration({
        name: 'rawHeadEnds',
        type: ParameterType.Array,
        help: 'Raw html content on head end',
    });
    app.options.addDeclaration({
        name: 'rawBodyBegins',
        type: ParameterType.Array,
        help: 'Raw html content on body begin',
    });
    app.options.addDeclaration({
        name: 'rawBodyEnds',
        type: ParameterType.Array,
        help: 'Raw html content on body end',
    });
    app.options.addDeclaration({
        name: 'rawContentBegins',
        type: ParameterType.Array,
        help: 'Raw html content on content begin',
    });
    app.options.addDeclaration({
        name: 'rawContentEnds',
        type: ParameterType.Array,
        help: 'Raw html content on content end',
    });
    app.options.addDeclaration({
        name: 'rawSidebarBegins',
        type: ParameterType.Array,
        help: 'Raw html content on sidebar begin',
    });
    app.options.addDeclaration({
        name: 'rawSidebarEnds',
        type: ParameterType.Array,
        help: 'Raw html content on sidebar end',
    });
    app.options.addDeclaration({
        name: 'rawPageSidebarBegins',
        type: ParameterType.Array,
        help: 'Raw html content on page sidebar begin',
    });
    app.options.addDeclaration({
        name: 'rawPageSidebarEnds',
        type: ParameterType.Array,
        help: 'Raw html content on page sidebar end',
    });
    app.options.addDeclaration({
        name: 'rawFooterBegins',
        type: ParameterType.Array,
        help: 'Raw html content on footer begin',
    });
    app.options.addDeclaration({
        name: 'rawFooterEnds',
        type: ParameterType.Array,
        help: 'Raw html content on footer end',
    });

    // Hook head begin
    app.renderer.hooks.on('head.begin', (context): JSX.Element => {
        const rawHeadBegins = context.options.getValue('rawHeadBegins') as string[];
        return !rawHeadBegins ? <></> : <JSX.Raw html={rawHeadBegins.join('')}/>;
    });

    // Hook head end
    app.renderer.hooks.on('head.end', (context): JSX.Element => {
        const result: JSX.Element = <></>;
        result.children.push(
            <meta name="plugin-generator" content="@yookue/typedoc-plugin-raw-content"/>
        );
        const rawHeadEnds = context.options.getValue('rawHeadEnds') as string[];
        if (rawHeadEnds && rawHeadEnds.length > 0) {
            result.children.push(
                <JSX.Raw html={rawHeadEnds.join('')}/>
            );
        }
        return result;
    });

    // Hook body begin
    app.renderer.hooks.on('body.begin', (context): JSX.Element => {
        const rawBodyBegins = context.options.getValue('rawBodyBegins') as string[];
        return !rawBodyBegins ? <></> : <JSX.Raw html={rawBodyBegins.join('')}/>;
    });

    // Hook body end
    app.renderer.hooks.on('body.end', (context): JSX.Element => {
        const rawBodyEnds = context.options.getValue('rawBodyEnds') as string[];
        return !rawBodyEnds ? <></> : <JSX.Raw html={rawBodyEnds.join('')}/>;
    });

    // Hook content begin
    app.renderer.hooks.on('content.begin', (context): JSX.Element => {
        const rawContentBegins = context.options.getValue('rawContentBegins') as string[];
        return !rawContentBegins ? <></> : <JSX.Raw html={rawContentBegins.join('')}/>;
    });

    // Hook content end
    app.renderer.hooks.on('content.end', (context): JSX.Element => {
        const rawContentEnds = context.options.getValue('rawContentEnds') as string[];
        return !rawContentEnds ? <></> : <JSX.Raw html={rawContentEnds.join('')}/>;
    });

    // Hook sidebar begin
    app.renderer.hooks.on('sidebar.begin', (context): JSX.Element => {
        const rawSidebarBegins = context.options.getValue('rawSidebarBegins') as string[];
        return !rawSidebarBegins ? <></> : <JSX.Raw html={rawSidebarBegins.join('')}/>;
    });

    // Hook sidebar end
    app.renderer.hooks.on('sidebar.end', (context): JSX.Element => {
        const rawSidebarEnds = context.options.getValue('rawSidebarEnds') as string[];
        return !rawSidebarEnds ? <></> : <JSX.Raw html={rawSidebarEnds.join('')}/>;
    });

    // Hook page sidebar begin
    app.renderer.hooks.on('pageSidebar.begin', (context): JSX.Element => {
        const rawPageSidebarBegins = context.options.getValue('rawPageSidebarBegins') as string[];
        return !rawPageSidebarBegins ? <></> : <JSX.Raw html={rawPageSidebarBegins.join('')}/>;
    });

    // Hook page sidebar end
    app.renderer.hooks.on('pageSidebar.end', (context): JSX.Element => {
        const rawPageSidebarEnds = context.options.getValue('rawPageSidebarEnds') as string[];
        return !rawPageSidebarEnds ? <></> : <JSX.Raw html={rawPageSidebarEnds.join('')}/>;
    });

    // Hook footer begin
    app.renderer.hooks.on('footer.begin', (context): JSX.Element => {
        const rawFooterBegins = context.options.getValue('rawFooterBegins') as string[];
        return !rawFooterBegins ? <></> : <JSX.Raw html={rawFooterBegins.join('')}/>;
    });

    // Hook footer end
    app.renderer.hooks.on('footer.end', (context): JSX.Element => {
        const rawFooterEnds = context.options.getValue('rawFooterEnds') as string[];
        return !rawFooterEnds ? <></> : <JSX.Raw html={rawFooterEnds.join('')}/>;
    });
}
