'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var AUTH_URL = 'https://www.douban.com/service/auth2/token';
var loginFixedParams = {
    grant_type: 'password',
    client_id: '02646d3fb69a52ff072d47bf23cef8fd',
    client_secret: 'cde5d61429abcd7c'
};
/**
 * 登录豆瓣 FM 并记录下 token。
 *
 */
var login = function (_a) {
    var username = _a.username, password = _a.password;
    return ({
        method: 'POST',
        url: AUTH_URL,
        data: __assign({ username: username,
            password: password }, loginFixedParams)
    });
};

var BASE_URL = 'https://api.douban.com/v2/fm';
var withBearer = function (obj, bearer) { return (__assign(__assign({}, obj), { bearer: bearer })); };

var userInfoFixedParams = {
    avatar_size: 'large'
};
var userInfo = function (bearer) {
    return withBearer({
        method: 'GET',
        url: BASE_URL + "/user_info",
        params: userInfoFixedParams
    }, bearer);
};

exports.login = login;
exports.userInfo = userInfo;
