// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import 'es6-shim';
import 'es6-promise';
import '../../node_modules/zone.js/dist/zone'
import 'reflect-metadata'

import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { enableProdMode } from '@angular/core';
import {
    ROUTER_PROVIDERS
} from '@angular/router'

import {AppComponent} from '../app/app.component';

enableProdMode();

bootstrap(AppComponent, [
    ...ROUTER_PROVIDERS,
    ...HTTP_PROVIDERS
]);
