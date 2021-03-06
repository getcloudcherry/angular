/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {ClassProvider, ExistingProvider, FactoryProvider, TypeProvider, ValueProvider} from '@angular/core';

import * as browser from './src/browser';
import * as ng_proble from './src/dom/debug/ng_probe';
import * as dom_adapter from './src/dom/dom_adapter';
import * as dom_renderer from './src/dom/dom_renderer';
import * as dom_events from './src/dom/events/dom_events';
import * as shared_styles_host from './src/dom/shared_styles_host';

export interface __platform_browser_private_types__ {
  DomAdapter: dom_adapter.DomAdapter;
  DomRootRenderer: dom_renderer.DomRootRenderer;
  DomRootRenderer_: dom_renderer.DomRootRenderer_;
  DomSharedStylesHost: shared_styles_host.DomSharedStylesHost;
  SharedStylesHost: shared_styles_host.SharedStylesHost;
  DomEventsPlugin: dom_events.DomEventsPlugin;
}

export var __platform_browser_private__ = {
  DomAdapter: dom_adapter.DomAdapter,
  getDOM: dom_adapter.getDOM,
  setRootDomAdapter: dom_adapter.setRootDomAdapter,
  DomRootRenderer: dom_renderer.DomRootRenderer,
  DomRootRenderer_: dom_renderer.DomRootRenderer_,
  DomSharedStylesHost: shared_styles_host.DomSharedStylesHost,
  SharedStylesHost: shared_styles_host.SharedStylesHost,
  ELEMENT_PROBE_PROVIDERS: ng_proble.ELEMENT_PROBE_PROVIDERS,
  DomEventsPlugin: dom_events.DomEventsPlugin,
  initDomAdapter: browser.initDomAdapter,
  INTERNAL_BROWSER_PLATFORM_PROVIDERS: browser.INTERNAL_BROWSER_PLATFORM_PROVIDERS
};
