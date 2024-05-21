/*
 * Copyright (c) 2024 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License (the "License")
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */



import {ParameterType, type DeclarationOption} from 'typedoc';


export const rawHeadBegins: DeclarationOption = {
    name: 'rawHeadBegins',
    type: ParameterType.Array,
    help: 'Raw html content on head begin',
};


export const rawHeadEnds: DeclarationOption = {
    name: 'rawHeadEnds',
    type: ParameterType.Array,
    help: 'Raw html content on head end',
};


export const rawBodyBegins: DeclarationOption = {
    name: 'rawBodyBegins',
    type: ParameterType.Array,
    help: 'Raw html content on body begin',
};


export const rawBodyEnds: DeclarationOption = {
    name: 'rawBodyEnds',
    type: ParameterType.Array,
    help: 'Raw html content on body end',
};


export const rawContentBegins: DeclarationOption = {
    name: 'rawContentBegins',
    type: ParameterType.Array,
    help: 'Raw html content on content begin',
};


export const rawContentEnds: DeclarationOption = {
    name: 'rawContentEnds',
    type: ParameterType.Array,
    help: 'Raw html content on content end',
};


export const rawSidebarBegins: DeclarationOption = {
    name: 'rawSidebarBegins',
    type: ParameterType.Array,
    help: 'Raw html content on sidebar begin',
};


export const rawSidebarEnds: DeclarationOption = {
    name: 'rawSidebarEnds',
    type: ParameterType.Array,
    help: 'Raw html content on sidebar end',
};


export const rawPageSidebarBegins: DeclarationOption = {
    name: 'rawPageSidebarBegins',
    type: ParameterType.Array,
    help: 'Raw html content on page sidebar begin',
};


export const rawPageSidebarEnds: DeclarationOption = {
    name: 'rawPageSidebarEnds',
    type: ParameterType.Array,
    help: 'Raw html content on page sidebar end',
};


export const rawFooterBegins: DeclarationOption = {
    name: 'rawFooterBegins',
    type: ParameterType.Array,
    help: 'Raw html content on footer begin',
};


export const rawFooterEnds: DeclarationOption = {
    name: 'rawFooterEnds',
    type: ParameterType.Array,
    help: 'Raw html content on footer end',
};
