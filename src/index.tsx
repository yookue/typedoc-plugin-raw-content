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


import {Application, JSX, RendererHooks} from 'typedoc';
import * as options from './declare/options';


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
    // Declare plugin options
    Object.entries(options).forEach(([, value]) => {
        app.options.addDeclaration(value);
    });

    // Identify plugin generator
    app.renderer.hooks.on('head.end', (): JSX.Element => {
        return <meta name="typedoc-plugin" content="@yookue/typedoc-plugin-raw-content"/>;
    });

    // Hook plugin options
    const hooks = new Map<keyof RendererHooks, string>([
        ['head.begin', 'rawHeadBegins'],
        ['head.end', 'rawHeadEnds'],
        ['body.begin', 'rawBodyBegins'],
        ['body.end', 'rawBodyEnds'],
        ['content.begin', 'rawContentBegins'],
        ['content.end', 'rawContentEnds'],
        ['sidebar.begin', 'rawSidebarBegins'],
        ['sidebar.end', 'rawSidebarEnds'],
        ['pageSidebar.begin', 'rawPageSidebarBegins'],
        ['pageSidebar.end', 'rawPageSidebarEnds'],
        ['footer.begin', 'rawFooterBegins'],
        ['footer.end', 'rawFooterEnds'],
        ['comment.beforeTags', 'rawCommentBeforeTags'],
        ['comment.afterTags', 'rawCommentAfterTags'],
    ]);
    for (const [event, option] of hooks.entries()) {
        app.renderer.hooks.on(event, (...params) => {
            if (!params) {
                return <></>;
            }
            const values = params[0].options.getValue(option) as string[];
            return (!values || values.length === 0) ? <></> : <JSX.Raw html={values.join()}/>;
        });
    }
}
