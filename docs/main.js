/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationIdentityClient": () => (/* reexport safe */ _communicationIdentityClient__WEBPACK_IMPORTED_MODULE_0__.CommunicationIdentityClient)
/* harmony export */ });
/* harmony import */ var _communicationIdentityClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationIdentityClient": () => (/* binding */ CommunicationIdentityClient)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71);
/* harmony import */ var _azure_communication_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var _azure_communication_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72);
/* harmony import */ var _azure_core_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var _azure_core_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79);
/* harmony import */ var _azure_core_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(172);
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generated_src_identityRestClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(169);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67);
/* harmony import */ var _common_tracing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(177);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.









const isCommunicationIdentityClientOptions = (options) => options && !(0,_azure_core_auth__WEBPACK_IMPORTED_MODULE_1__.isTokenCredential)(options) && !(0,_azure_communication_common__WEBPACK_IMPORTED_MODULE_2__.isKeyCredential)(options);
/**
 * Client class for interacting with Azure Communication Services User Token Management.
 */
class CommunicationIdentityClient {
    constructor(connectionStringOrEndpoint, credentialOrOptions, maybeOptions = {}) {
        const { url, credential } = (0,_azure_communication_common__WEBPACK_IMPORTED_MODULE_2__.parseClientArguments)(connectionStringOrEndpoint, credentialOrOptions);
        const options = isCommunicationIdentityClientOptions(credentialOrOptions)
            ? credentialOrOptions
            : maybeOptions;
        const libInfo = `azsdk-js-communication-identity/${_constants__WEBPACK_IMPORTED_MODULE_3__.SDK_VERSION}`;
        if (!options.userAgentOptions) {
            options.userAgentOptions = {};
        }
        if (options.userAgentOptions.userAgentPrefix) {
            options.userAgentOptions.userAgentPrefix = `${options.userAgentOptions.userAgentPrefix} ${libInfo}`;
        }
        else {
            options.userAgentOptions.userAgentPrefix = libInfo;
        }
        const internalPipelineOptions = Object.assign(Object.assign({}, options), {
            loggingOptions: {
                logger: _common_logger__WEBPACK_IMPORTED_MODULE_4__.logger.info
            }
        });
        const authPolicy = (0,_azure_communication_common__WEBPACK_IMPORTED_MODULE_5__.createCommunicationAuthPolicy)(credential);
        const pipeline = (0,_azure_core_http__WEBPACK_IMPORTED_MODULE_6__.createPipelineFromOptions)(internalPipelineOptions, authPolicy);
        this.client = new _generated_src_identityRestClient__WEBPACK_IMPORTED_MODULE_7__.IdentityRestClient(url, pipeline).communicationIdentity;
    }
    /**
     * Creates a scoped user token.
     *
     * @param user - The user whose tokens are being issued.
     * @param scopes - Scopes to include in the token.
     * @param options - Additional options for the request.
     */
    getToken(user, scopes, options = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const { span, updatedOptions } = (0,_common_tracing__WEBPACK_IMPORTED_MODULE_9__.createSpan)("CommunicationIdentity-issueToken", options);
            try {
                const _a = yield this.client.issueAccessToken(user.communicationUserId, { scopes }, (0,_azure_core_http__WEBPACK_IMPORTED_MODULE_10__.operationOptionsToRequestOptionsBase)(updatedOptions)), { _response } = _a, result = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__rest)(_a, ["_response"]);
                return result;
            }
            catch (e) {
                span.setStatus({
                    code: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.CanonicalCode.UNKNOWN,
                    message: e.message
                });
                throw e;
            }
            finally {
                span.end();
            }
        });
    }
    /**
     * Revokes all data and tokens created for a user.
     *
     * @param user - The user whose tokens are being revoked.
     * @param options - Additional options for the request.
     */
    revokeTokens(user, options = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const { span, updatedOptions } = (0,_common_tracing__WEBPACK_IMPORTED_MODULE_9__.createSpan)("CommunicationIdentity-revokeTokens", options);
            try {
                yield this.client.revokeAccessTokens(user.communicationUserId, (0,_azure_core_http__WEBPACK_IMPORTED_MODULE_10__.operationOptionsToRequestOptionsBase)(updatedOptions));
            }
            catch (e) {
                span.setStatus({
                    code: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.CanonicalCode.UNKNOWN,
                    message: e.message
                });
                throw e;
            }
            finally {
                span.end();
            }
        });
    }
    /**
     * Creates a single user.
     *
     * @param options - Additional options for the request.
     */
    createUser(options = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const { span, updatedOptions } = (0,_common_tracing__WEBPACK_IMPORTED_MODULE_9__.createSpan)("CommunicationIdentity-createUser", options);
            try {
                const result = yield this.client.create((0,_azure_core_http__WEBPACK_IMPORTED_MODULE_10__.operationOptionsToRequestOptionsBase)(updatedOptions));
                return {
                    communicationUserId: result.identity.id
                };
            }
            catch (e) {
                span.setStatus({
                    code: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.CanonicalCode.UNKNOWN,
                    message: e.message
                });
                throw e;
            }
            finally {
                span.end();
            }
        });
    }
    /**
     * Creates a single user and a token simultaneously.
     *
     * @param scopes - Scopes to include in the token.
     * @param options - Additional options for the request.
     */
    createUserAndToken(scopes, options = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const { span, updatedOptions } = (0,_common_tracing__WEBPACK_IMPORTED_MODULE_9__.createSpan)("CommunicationIdentity-createUserAndToken", options);
            try {
                const { identity, accessToken } = yield this.client.create(Object.assign({ body: { createTokenWithScopes: scopes } }, (0,_azure_core_http__WEBPACK_IMPORTED_MODULE_10__.operationOptionsToRequestOptionsBase)(updatedOptions)));
                return Object.assign(Object.assign({}, accessToken), { user: { communicationUserId: identity.id } });
            }
            catch (e) {
                span.setStatus({
                    code: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.CanonicalCode.UNKNOWN,
                    message: e.message
                });
                throw e;
            }
            finally {
                span.end();
            }
        });
    }
    /**
     * Triggers revocation event for user and deletes all its data.
     *
     * @param user - The user being deleted.
     * @param options - Additional options for the request.
     */
    deleteUser(user, options = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const { span, updatedOptions } = (0,_common_tracing__WEBPACK_IMPORTED_MODULE_9__.createSpan)("CommunicationIdentity-deleteUser", options);
            try {
                yield this.client.delete(user.communicationUserId, (0,_azure_core_http__WEBPACK_IMPORTED_MODULE_10__.operationOptionsToRequestOptionsBase)(updatedOptions));
            }
            catch (e) {
                span.setStatus({
                    code: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.CanonicalCode.UNKNOWN,
                    message: e.message
                });
                throw e;
            }
            finally {
                span.end();
            }
        });
    }
}
//# sourceMappingURL=communicationIdentityClient.js.map

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.propagation = exports.metrics = exports.trace = exports.context = void 0;
__exportStar(__webpack_require__(4), exports);
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(15), exports);
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(34), exports);
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(36), exports);
__exportStar(__webpack_require__(37), exports);
__exportStar(__webpack_require__(27), exports);
__exportStar(__webpack_require__(38), exports);
__exportStar(__webpack_require__(39), exports);
__exportStar(__webpack_require__(40), exports);
var context_base_1 = __webpack_require__(41);
Object.defineProperty(exports, "Context", ({ enumerable: true, get: function () { return context_base_1.Context; } }));
var context_1 = __webpack_require__(45);
/** Entrypoint for context API */
exports.context = context_1.ContextAPI.getInstance();
var trace_1 = __webpack_require__(49);
/** Entrypoint for trace API */
exports.trace = trace_1.TraceAPI.getInstance();
var metrics_1 = __webpack_require__(50);
/** Entrypoint for metrics API */
exports.metrics = metrics_1.MetricsAPI.getInstance();
var propagation_1 = __webpack_require__(51);
/** Entrypoint for propagation API */
exports.propagation = propagation_1.PropagationAPI.getInstance();
exports.default = {
    trace: exports.trace,
    metrics: exports.metrics,
    context: exports.context,
    propagation: exports.propagation,
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Logger.js.map

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Time.js.map

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultGetter = void 0;
/**
 * Default getter which just does a simple property access. Returns
 * undefined if the key is not set.
 *
 * @param carrier
 * @param key
 */
function defaultGetter(carrier, key) {
    return carrier[key];
}
exports.defaultGetter = defaultGetter;
//# sourceMappingURL=getter.js.map

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=HttpTextPropagator.js.map

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NOOP_HTTP_TEXT_PROPAGATOR = exports.NoopHttpTextPropagator = void 0;
/**
 * No-op implementations of {@link HttpTextPropagator}.
 */
var NoopHttpTextPropagator = /** @class */ (function () {
    function NoopHttpTextPropagator() {
    }
    /** Noop inject function does nothing */
    NoopHttpTextPropagator.prototype.inject = function (context, carrier, setter) { };
    /** Noop extract function does nothing and returns the input context */
    NoopHttpTextPropagator.prototype.extract = function (context, carrier, getter) {
        return context;
    };
    return NoopHttpTextPropagator;
}());
exports.NoopHttpTextPropagator = NoopHttpTextPropagator;
exports.NOOP_HTTP_TEXT_PROPAGATOR = new NoopHttpTextPropagator();
//# sourceMappingURL=NoopHttpTextPropagator.js.map

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultSetter = void 0;
/**
 * Default setter which sets value via direct property access
 *
 * @param carrier
 * @param key
 */
function defaultSetter(carrier, key, value) {
    carrier[key] = value;
}
exports.defaultSetter = defaultSetter;
//# sourceMappingURL=setter.js.map

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=CorrelationContext.js.map

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntryTtl = void 0;
/**
 * EntryTtl is an integer that represents number of hops an entry can propagate.
 *
 * For now, ONLY special values (0 and -1) are supported.
 */
var EntryTtl;
(function (EntryTtl) {
    /**
     * NO_PROPAGATION is considered to have local context and is used within the
     * process it created.
     */
    EntryTtl[EntryTtl["NO_PROPAGATION"] = 0] = "NO_PROPAGATION";
    /** UNLIMITED_PROPAGATION can propagate unlimited hops. */
    EntryTtl[EntryTtl["UNLIMITED_PROPAGATION"] = -1] = "UNLIMITED_PROPAGATION";
})(EntryTtl = exports.EntryTtl || (exports.EntryTtl = {}));
//# sourceMappingURL=EntryValue.js.map

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=BatchObserverResult.js.map

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=BoundInstrument.js.map

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Meter.js.map

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=MeterProvider.js.map

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValueType = void 0;
/** The Type of value. It describes how the data is reported. */
var ValueType;
(function (ValueType) {
    ValueType[ValueType["INT"] = 0] = "INT";
    ValueType[ValueType["DOUBLE"] = 1] = "DOUBLE";
})(ValueType = exports.ValueType || (exports.ValueType = {}));
//# sourceMappingURL=Metric.js.map

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NOOP_BATCH_OBSERVER_METRIC = exports.NOOP_SUM_OBSERVER_METRIC = exports.NOOP_UP_DOWN_SUM_OBSERVER_METRIC = exports.NOOP_VALUE_OBSERVER_METRIC = exports.NOOP_BOUND_BASE_OBSERVER = exports.NOOP_VALUE_RECORDER_METRIC = exports.NOOP_BOUND_VALUE_RECORDER = exports.NOOP_COUNTER_METRIC = exports.NOOP_BOUND_COUNTER = exports.NOOP_METER = exports.NoopBoundBaseObserver = exports.NoopBoundValueRecorder = exports.NoopBoundCounter = exports.NoopBatchObserverMetric = exports.NoopBaseObserverMetric = exports.NoopValueRecorderMetric = exports.NoopCounterMetric = exports.NoopMetric = exports.NoopMeter = void 0;
/**
 * NoopMeter is a noop implementation of the {@link Meter} interface. It reuses
 * constant NoopMetrics for all of its methods.
 */
var NoopMeter = /** @class */ (function () {
    function NoopMeter() {
    }
    /**
     * Returns constant noop value recorder.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    NoopMeter.prototype.createValueRecorder = function (name, options) {
        return exports.NOOP_VALUE_RECORDER_METRIC;
    };
    /**
     * Returns a constant noop counter.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    NoopMeter.prototype.createCounter = function (name, options) {
        return exports.NOOP_COUNTER_METRIC;
    };
    /**
     * Returns a constant noop UpDownCounter.
     * @param name the name of the metric.
     * @param [options] the metric options.
     */
    NoopMeter.prototype.createUpDownCounter = function (name, options) {
        return exports.NOOP_COUNTER_METRIC;
    };
    /**
     * Returns constant noop value observer.
     * @param name the name of the metric.
     * @param [options] the metric options.
     * @param [callback] the value observer callback
     */
    NoopMeter.prototype.createValueObserver = function (name, options, callback) {
        return exports.NOOP_VALUE_OBSERVER_METRIC;
    };
    /**
     * Returns constant noop batch observer.
     * @param name the name of the metric.
     * @param callback the batch observer callback
     */
    NoopMeter.prototype.createBatchObserver = function (name, callback) {
        return exports.NOOP_BATCH_OBSERVER_METRIC;
    };
    return NoopMeter;
}());
exports.NoopMeter = NoopMeter;
var NoopMetric = /** @class */ (function () {
    function NoopMetric(instrument) {
        this._instrument = instrument;
    }
    /**
     * Returns a Bound Instrument associated with specified Labels.
     * It is recommended to keep a reference to the Bound Instrument instead of
     * always calling this method for every operations.
     * @param labels key-values pairs that are associated with a specific metric
     *     that you want to record.
     */
    NoopMetric.prototype.bind = function (labels) {
        return this._instrument;
    };
    /**
     * Removes the Binding from the metric, if it is present.
     * @param labels key-values pairs that are associated with a specific metric.
     */
    NoopMetric.prototype.unbind = function (labels) {
        return;
    };
    /**
     * Clears all timeseries from the Metric.
     */
    NoopMetric.prototype.clear = function () {
        return;
    };
    return NoopMetric;
}());
exports.NoopMetric = NoopMetric;
var NoopCounterMetric = /** @class */ (function (_super) {
    __extends(NoopCounterMetric, _super);
    function NoopCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopCounterMetric.prototype.add = function (value, labels) {
        this.bind(labels).add(value);
    };
    return NoopCounterMetric;
}(NoopMetric));
exports.NoopCounterMetric = NoopCounterMetric;
var NoopValueRecorderMetric = /** @class */ (function (_super) {
    __extends(NoopValueRecorderMetric, _super);
    function NoopValueRecorderMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopValueRecorderMetric.prototype.record = function (value, labels, correlationContext, spanContext) {
        if (typeof correlationContext === 'undefined') {
            this.bind(labels).record(value);
        }
        else if (typeof spanContext === 'undefined') {
            this.bind(labels).record(value, correlationContext);
        }
        else {
            this.bind(labels).record(value, correlationContext, spanContext);
        }
    };
    return NoopValueRecorderMetric;
}(NoopMetric));
exports.NoopValueRecorderMetric = NoopValueRecorderMetric;
var NoopBaseObserverMetric = /** @class */ (function (_super) {
    __extends(NoopBaseObserverMetric, _super);
    function NoopBaseObserverMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopBaseObserverMetric.prototype.observation = function () {
        return {
            observer: this,
            value: 0,
        };
    };
    return NoopBaseObserverMetric;
}(NoopMetric));
exports.NoopBaseObserverMetric = NoopBaseObserverMetric;
var NoopBatchObserverMetric = /** @class */ (function (_super) {
    __extends(NoopBatchObserverMetric, _super);
    function NoopBatchObserverMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopBatchObserverMetric;
}(NoopMetric));
exports.NoopBatchObserverMetric = NoopBatchObserverMetric;
var NoopBoundCounter = /** @class */ (function () {
    function NoopBoundCounter() {
    }
    NoopBoundCounter.prototype.add = function (value) {
        return;
    };
    return NoopBoundCounter;
}());
exports.NoopBoundCounter = NoopBoundCounter;
var NoopBoundValueRecorder = /** @class */ (function () {
    function NoopBoundValueRecorder() {
    }
    NoopBoundValueRecorder.prototype.record = function (value, correlationContext, spanContext) {
        return;
    };
    return NoopBoundValueRecorder;
}());
exports.NoopBoundValueRecorder = NoopBoundValueRecorder;
var NoopBoundBaseObserver = /** @class */ (function () {
    function NoopBoundBaseObserver() {
    }
    NoopBoundBaseObserver.prototype.update = function (value) { };
    return NoopBoundBaseObserver;
}());
exports.NoopBoundBaseObserver = NoopBoundBaseObserver;
exports.NOOP_METER = new NoopMeter();
exports.NOOP_BOUND_COUNTER = new NoopBoundCounter();
exports.NOOP_COUNTER_METRIC = new NoopCounterMetric(exports.NOOP_BOUND_COUNTER);
exports.NOOP_BOUND_VALUE_RECORDER = new NoopBoundValueRecorder();
exports.NOOP_VALUE_RECORDER_METRIC = new NoopValueRecorderMetric(exports.NOOP_BOUND_VALUE_RECORDER);
exports.NOOP_BOUND_BASE_OBSERVER = new NoopBoundBaseObserver();
exports.NOOP_VALUE_OBSERVER_METRIC = new NoopBaseObserverMetric(exports.NOOP_BOUND_BASE_OBSERVER);
exports.NOOP_UP_DOWN_SUM_OBSERVER_METRIC = new NoopBaseObserverMetric(exports.NOOP_BOUND_BASE_OBSERVER);
exports.NOOP_SUM_OBSERVER_METRIC = new NoopBaseObserverMetric(exports.NOOP_BOUND_BASE_OBSERVER);
exports.NOOP_BATCH_OBSERVER_METRIC = new NoopBatchObserverMetric();
//# sourceMappingURL=NoopMeter.js.map

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NOOP_METER_PROVIDER = exports.NoopMeterProvider = void 0;
var NoopMeter_1 = __webpack_require__(17);
/**
 * An implementation of the {@link MeterProvider} which returns an impotent Meter
 * for all calls to `getMeter`
 */
var NoopMeterProvider = /** @class */ (function () {
    function NoopMeterProvider() {
    }
    NoopMeterProvider.prototype.getMeter = function (_name, _version) {
        return NoopMeter_1.NOOP_METER;
    };
    return NoopMeterProvider;
}());
exports.NoopMeterProvider = NoopMeterProvider;
exports.NOOP_METER_PROVIDER = new NoopMeterProvider();
//# sourceMappingURL=NoopMeterProvider.js.map

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Observation.js.map

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ObserverResult.js.map

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=attributes.js.map

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Event.js.map

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Plugin.js.map

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=link_context.js.map

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=link.js.map

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NOOP_SPAN = exports.NoopSpan = exports.INVALID_SPAN_ID = exports.INVALID_TRACE_ID = void 0;
var trace_flags_1 = __webpack_require__(27);
exports.INVALID_TRACE_ID = '0';
exports.INVALID_SPAN_ID = '0';
var INVALID_SPAN_CONTEXT = {
    traceId: exports.INVALID_TRACE_ID,
    spanId: exports.INVALID_SPAN_ID,
    traceFlags: trace_flags_1.TraceFlags.NONE,
};
/**
 * The NoopSpan is the default {@link Span} that is used when no Span
 * implementation is available. All operations are no-op including context
 * propagation.
 */
var NoopSpan = /** @class */ (function () {
    function NoopSpan(_spanContext) {
        if (_spanContext === void 0) { _spanContext = INVALID_SPAN_CONTEXT; }
        this._spanContext = _spanContext;
    }
    // Returns a SpanContext.
    NoopSpan.prototype.context = function () {
        return this._spanContext;
    };
    // By default does nothing
    NoopSpan.prototype.setAttribute = function (key, value) {
        return this;
    };
    // By default does nothing
    NoopSpan.prototype.setAttributes = function (attributes) {
        return this;
    };
    // By default does nothing
    NoopSpan.prototype.addEvent = function (name, attributes) {
        return this;
    };
    // By default does nothing
    NoopSpan.prototype.setStatus = function (status) {
        return this;
    };
    // By default does nothing
    NoopSpan.prototype.updateName = function (name) {
        return this;
    };
    // By default does nothing
    NoopSpan.prototype.end = function (endTime) { };
    // isRecording always returns false for noopSpan.
    NoopSpan.prototype.isRecording = function () {
        return false;
    };
    return NoopSpan;
}());
exports.NoopSpan = NoopSpan;
exports.NOOP_SPAN = new NoopSpan();
//# sourceMappingURL=NoopSpan.js.map

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TraceFlags = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TraceFlags;
(function (TraceFlags) {
    /** Represents no flag set. */
    TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */
    TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags = exports.TraceFlags || (exports.TraceFlags = {}));
//# sourceMappingURL=trace_flags.js.map

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NOOP_TRACER = exports.NoopTracer = void 0;
var NoopSpan_1 = __webpack_require__(26);
/**
 * No-op implementations of {@link Tracer}.
 */
var NoopTracer = /** @class */ (function () {
    function NoopTracer() {
    }
    NoopTracer.prototype.getCurrentSpan = function () {
        return NoopSpan_1.NOOP_SPAN;
    };
    // startSpan starts a noop span.
    NoopTracer.prototype.startSpan = function (name, options) {
        return NoopSpan_1.NOOP_SPAN;
    };
    NoopTracer.prototype.withSpan = function (span, fn) {
        return fn();
    };
    NoopTracer.prototype.bind = function (target, span) {
        return target;
    };
    return NoopTracer;
}());
exports.NoopTracer = NoopTracer;
exports.NOOP_TRACER = new NoopTracer();
//# sourceMappingURL=NoopTracer.js.map

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NOOP_TRACER_PROVIDER = exports.NoopTracerProvider = void 0;
var NoopTracer_1 = __webpack_require__(28);
/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */
var NoopTracerProvider = /** @class */ (function () {
    function NoopTracerProvider() {
    }
    NoopTracerProvider.prototype.getTracer = function (_name, _version) {
        return NoopTracer_1.NOOP_TRACER;
    };
    return NoopTracerProvider;
}());
exports.NoopTracerProvider = NoopTracerProvider;
exports.NOOP_TRACER_PROVIDER = new NoopTracerProvider();
//# sourceMappingURL=NoopTracerProvider.js.map

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Sampler.js.map

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SamplingDecision = void 0;
/**
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 */
var SamplingDecision;
(function (SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */
    SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */
    SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */
    SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision = exports.SamplingDecision || (exports.SamplingDecision = {}));
//# sourceMappingURL=SamplingResult.js.map

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=span_context.js.map

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpanKind = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SpanKind;
(function (SpanKind) {
    /** Default value. Indicates that the span is used internally. */
    SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */
    SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */
    SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind = exports.SpanKind || (exports.SpanKind = {}));
//# sourceMappingURL=span_kind.js.map

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=span.js.map

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=SpanOptions.js.map

/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanonicalCode = void 0;
/**
 * An enumeration of canonical status codes.
 */
var CanonicalCode;
(function (CanonicalCode) {
    /**
     * Not an error; returned on success
     */
    CanonicalCode[CanonicalCode["OK"] = 0] = "OK";
    /**
     * The operation was cancelled (typically by the caller).
     */
    CanonicalCode[CanonicalCode["CANCELLED"] = 1] = "CANCELLED";
    /**
     * Unknown error.  An example of where this error may be returned is
     * if a status value received from another address space belongs to
     * an error-space that is not known in this address space.  Also
     * errors raised by APIs that do not return enough error information
     * may be converted to this error.
     */
    CanonicalCode[CanonicalCode["UNKNOWN"] = 2] = "UNKNOWN";
    /**
     * Client specified an invalid argument.  Note that this differs
     * from FAILED_PRECONDITION.  INVALID_ARGUMENT indicates arguments
     * that are problematic regardless of the state of the system
     * (e.g., a malformed file name).
     */
    CanonicalCode[CanonicalCode["INVALID_ARGUMENT"] = 3] = "INVALID_ARGUMENT";
    /**
     * Deadline expired before operation could complete.  For operations
     * that change the state of the system, this error may be returned
     * even if the operation has completed successfully.  For example, a
     * successful response from a server could have been delayed long
     * enough for the deadline to expire.
     */
    CanonicalCode[CanonicalCode["DEADLINE_EXCEEDED"] = 4] = "DEADLINE_EXCEEDED";
    /**
     * Some requested entity (e.g., file or directory) was not found.
     */
    CanonicalCode[CanonicalCode["NOT_FOUND"] = 5] = "NOT_FOUND";
    /**
     * Some entity that we attempted to create (e.g., file or directory)
     * already exists.
     */
    CanonicalCode[CanonicalCode["ALREADY_EXISTS"] = 6] = "ALREADY_EXISTS";
    /**
     * The caller does not have permission to execute the specified
     * operation.  PERMISSION_DENIED must not be used for rejections
     * caused by exhausting some resource (use RESOURCE_EXHAUSTED
     * instead for those errors).  PERMISSION_DENIED must not be
     * used if the caller can not be identified (use UNAUTHENTICATED
     * instead for those errors).
     */
    CanonicalCode[CanonicalCode["PERMISSION_DENIED"] = 7] = "PERMISSION_DENIED";
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or
     * perhaps the entire file system is out of space.
     */
    CanonicalCode[CanonicalCode["RESOURCE_EXHAUSTED"] = 8] = "RESOURCE_EXHAUSTED";
    /**
     * Operation was rejected because the system is not in a state
     * required for the operation's execution.  For example, directory
     * to be deleted may be non-empty, an rmdir operation is applied to
     * a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *
     *  - Use UNAVAILABLE if the client can retry just the failing call.
     *  - Use ABORTED if the client should retry at a higher-level
     *    (e.g., restarting a read-modify-write sequence).
     *  - Use FAILED_PRECONDITION if the client should not retry until
     *    the system state has been explicitly fixed.  E.g., if an "rmdir"
     *    fails because the directory is non-empty, FAILED_PRECONDITION
     *    should be returned since the client should not retry unless
     *    they have first fixed up the directory by deleting files from it.
     *  - Use FAILED_PRECONDITION if the client performs conditional
     *    REST Get/Update/Delete on a resource and the resource on the
     *    server does not match the condition. E.g., conflicting
     *    read-modify-write on the same resource.
     */
    CanonicalCode[CanonicalCode["FAILED_PRECONDITION"] = 9] = "FAILED_PRECONDITION";
    /**
     * The operation was aborted, typically due to a concurrency issue
     * like sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION,
     * ABORTED, and UNAVAILABLE.
     */
    CanonicalCode[CanonicalCode["ABORTED"] = 10] = "ABORTED";
    /**
     * Operation was attempted past the valid range.  E.g., seeking or
     * reading past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may
     * be fixed if the system state changes. For example, a 32-bit file
     * system will generate INVALID_ARGUMENT if asked to read at an
     * offset that is not in the range [0,2^32-1], but it will generate
     * OUT_OF_RANGE if asked to read from an offset past the current
     * file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE.  We recommend using OUT_OF_RANGE (the more specific
     * error) when it applies so that callers who are iterating through
     * a space can easily look for an OUT_OF_RANGE error to detect when
     * they are done.
     */
    CanonicalCode[CanonicalCode["OUT_OF_RANGE"] = 11] = "OUT_OF_RANGE";
    /**
     * Operation is not implemented or not supported/enabled in this service.
     */
    CanonicalCode[CanonicalCode["UNIMPLEMENTED"] = 12] = "UNIMPLEMENTED";
    /**
     * Internal errors.  Means some invariants expected by underlying
     * system has been broken.  If you see one of these errors,
     * something is very broken.
     */
    CanonicalCode[CanonicalCode["INTERNAL"] = 13] = "INTERNAL";
    /**
     * The service is currently unavailable.  This is a most likely a
     * transient condition and may be corrected by retrying with
     * a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION,
     * ABORTED, and UNAVAILABLE.
     */
    CanonicalCode[CanonicalCode["UNAVAILABLE"] = 14] = "UNAVAILABLE";
    /**
     * Unrecoverable data loss or corruption.
     */
    CanonicalCode[CanonicalCode["DATA_LOSS"] = 15] = "DATA_LOSS";
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    CanonicalCode[CanonicalCode["UNAUTHENTICATED"] = 16] = "UNAUTHENTICATED";
})(CanonicalCode = exports.CanonicalCode || (exports.CanonicalCode = {}));
//# sourceMappingURL=status.js.map

/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=TimedEvent.js.map

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=trace_state.js.map

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=tracer_provider.js.map

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=tracer.js.map

/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(42), exports);
__exportStar(__webpack_require__(43), exports);
__exportStar(__webpack_require__(44), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Context = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Context = /** @class */ (function () {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */
    function Context(parentContext) {
        this._currentContext = parentContext ? new Map(parentContext) : new Map();
    }
    /** Get a key to uniquely identify a context value */
    Context.createKey = function (description) {
        return Symbol(description);
    };
    /**
     * Get a value from the context.
     *
     * @param key key which identifies a context value
     */
    Context.prototype.getValue = function (key) {
        return this._currentContext.get(key);
    };
    /**
     * Create a new context which inherits from this context and has
     * the given key set to the given value.
     *
     * @param key context key for which to set the value
     * @param value value to set for the given key
     */
    Context.prototype.setValue = function (key, value) {
        var context = new Context(this._currentContext);
        context._currentContext.set(key, value);
        return context;
    };
    /**
     * Return a new context which inherits from this context but does
     * not contain a value for the given key.
     *
     * @param key context key for which to clear a value
     */
    Context.prototype.deleteValue = function (key) {
        var context = new Context(this._currentContext);
        context._currentContext.delete(key);
        return context;
    };
    /** The root context is used as the default parent context when there is no active context */
    Context.ROOT_CONTEXT = new Context();
    /**
     * This is another identifier to the root context which allows developers to easily search the
     * codebase for direct uses of context which need to be removed in later PRs.
     *
     * It's existence is temporary and it should be removed when all references are fixed.
     */
    Context.TODO = Context.ROOT_CONTEXT;
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=context.js.map

/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoopContextManager = void 0;
var context_1 = __webpack_require__(43);
var NoopContextManager = /** @class */ (function () {
    function NoopContextManager() {
    }
    NoopContextManager.prototype.active = function () {
        return context_1.Context.ROOT_CONTEXT;
    };
    NoopContextManager.prototype.with = function (context, fn) {
        return fn();
    };
    NoopContextManager.prototype.bind = function (target, context) {
        return target;
    };
    NoopContextManager.prototype.enable = function () {
        return this;
    };
    NoopContextManager.prototype.disable = function () {
        return this;
    };
    return NoopContextManager;
}());
exports.NoopContextManager = NoopContextManager;
//# sourceMappingURL=NoopContextManager.js.map

/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContextAPI = void 0;
var context_base_1 = __webpack_require__(41);
var global_utils_1 = __webpack_require__(46);
var NOOP_CONTEXT_MANAGER = new context_base_1.NoopContextManager();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 */
var ContextAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function ContextAPI() {
    }
    /** Get the singleton instance of the Context API */
    ContextAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new ContextAPI();
        }
        return this._instance;
    };
    /**
     * Set the current context manager. Returns the initialized context manager
     */
    ContextAPI.prototype.setGlobalContextManager = function (contextManager) {
        if (global_utils_1._global[global_utils_1.GLOBAL_CONTEXT_MANAGER_API_KEY]) {
            // global context manager has already been set
            return this._getContextManager();
        }
        global_utils_1._global[global_utils_1.GLOBAL_CONTEXT_MANAGER_API_KEY] = global_utils_1.makeGetter(global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION, contextManager, NOOP_CONTEXT_MANAGER);
        return contextManager;
    };
    /**
     * Get the currently active context
     */
    ContextAPI.prototype.active = function () {
        return this._getContextManager().active();
    };
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     */
    ContextAPI.prototype.with = function (context, fn) {
        return this._getContextManager().with(context, fn);
    };
    /**
     * Bind a context to a target function or event emitter
     *
     * @param target function or event emitter to bind
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     */
    ContextAPI.prototype.bind = function (target, context) {
        if (context === void 0) { context = this.active(); }
        return this._getContextManager().bind(target, context);
    };
    ContextAPI.prototype._getContextManager = function () {
        var _a, _b;
        return ((_b = (_a = global_utils_1._global[global_utils_1.GLOBAL_CONTEXT_MANAGER_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(global_utils_1._global, global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== void 0 ? _b : NOOP_CONTEXT_MANAGER);
    };
    /** Disable and remove the global context manager */
    ContextAPI.prototype.disable = function () {
        this._getContextManager().disable();
        delete global_utils_1._global[global_utils_1.GLOBAL_CONTEXT_MANAGER_API_KEY];
    };
    return ContextAPI;
}());
exports.ContextAPI = ContextAPI;
//# sourceMappingURL=context.js.map

/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.API_BACKWARDS_COMPATIBILITY_VERSION = exports.makeGetter = exports._global = exports.GLOBAL_TRACE_API_KEY = exports.GLOBAL_PROPAGATION_API_KEY = exports.GLOBAL_METRICS_API_KEY = exports.GLOBAL_CONTEXT_MANAGER_API_KEY = void 0;
var platform_1 = __webpack_require__(47);
exports.GLOBAL_CONTEXT_MANAGER_API_KEY = Symbol.for('io.opentelemetry.js.api.context');
exports.GLOBAL_METRICS_API_KEY = Symbol.for('io.opentelemetry.js.api.metrics');
exports.GLOBAL_PROPAGATION_API_KEY = Symbol.for('io.opentelemetry.js.api.propagation');
exports.GLOBAL_TRACE_API_KEY = Symbol.for('io.opentelemetry.js.api.trace');
exports._global = platform_1._globalThis;
/**
 * Make a function which accepts a version integer and returns the instance of an API if the version
 * is compatible, or a fallback version (usually NOOP) if it is not.
 *
 * @param requiredVersion Backwards compatibility version which is required to return the instance
 * @param instance Instance which should be returned if the required version is compatible
 * @param fallback Fallback instance, usually NOOP, which will be returned if the required version is not compatible
 */
function makeGetter(requiredVersion, instance, fallback) {
    return function (version) {
        return version === requiredVersion ? instance : fallback;
    };
}
exports.makeGetter = makeGetter;
/**
 * A number which should be incremented each time a backwards incompatible
 * change is made to the API. This number is used when an API package
 * attempts to access the global API to ensure it is getting a compatible
 * version. If the global API is not compatible with the API package
 * attempting to get it, a NOOP API implementation will be returned.
 */
exports.API_BACKWARDS_COMPATIBILITY_VERSION = 0;
//# sourceMappingURL=global-utils.js.map

/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(48), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._globalThis = void 0;
/** only globals that common to node and browsers are allowed */
// eslint-disable-next-line node/no-unsupported-features/es-builtins, no-undef
exports._globalThis = typeof globalThis === 'object' ? globalThis : window;
//# sourceMappingURL=globalThis.js.map

/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TraceAPI = void 0;
var NoopTracerProvider_1 = __webpack_require__(29);
var global_utils_1 = __webpack_require__(46);
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 */
var TraceAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function TraceAPI() {
    }
    /** Get the singleton instance of the Trace API */
    TraceAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new TraceAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global tracer. Returns the initialized global tracer provider
     */
    TraceAPI.prototype.setGlobalTracerProvider = function (provider) {
        if (global_utils_1._global[global_utils_1.GLOBAL_TRACE_API_KEY]) {
            // global tracer provider has already been set
            return this.getTracerProvider();
        }
        global_utils_1._global[global_utils_1.GLOBAL_TRACE_API_KEY] = global_utils_1.makeGetter(global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION, provider, NoopTracerProvider_1.NOOP_TRACER_PROVIDER);
        return this.getTracerProvider();
    };
    /**
     * Returns the global tracer provider.
     */
    TraceAPI.prototype.getTracerProvider = function () {
        var _a, _b;
        return ((_b = (_a = global_utils_1._global[global_utils_1.GLOBAL_TRACE_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(global_utils_1._global, global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== void 0 ? _b : NoopTracerProvider_1.NOOP_TRACER_PROVIDER);
    };
    /**
     * Returns a tracer from the global tracer provider.
     */
    TraceAPI.prototype.getTracer = function (name, version) {
        return this.getTracerProvider().getTracer(name, version);
    };
    /** Remove the global tracer provider */
    TraceAPI.prototype.disable = function () {
        delete global_utils_1._global[global_utils_1.GLOBAL_TRACE_API_KEY];
    };
    return TraceAPI;
}());
exports.TraceAPI = TraceAPI;
//# sourceMappingURL=trace.js.map

/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MetricsAPI = void 0;
var NoopMeterProvider_1 = __webpack_require__(18);
var global_utils_1 = __webpack_require__(46);
/**
 * Singleton object which represents the entry point to the OpenTelemetry Metrics API
 */
var MetricsAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function MetricsAPI() {
    }
    /** Get the singleton instance of the Metrics API */
    MetricsAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new MetricsAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global meter. Returns the initialized global meter provider.
     */
    MetricsAPI.prototype.setGlobalMeterProvider = function (provider) {
        if (global_utils_1._global[global_utils_1.GLOBAL_METRICS_API_KEY]) {
            // global meter provider has already been set
            return this.getMeterProvider();
        }
        global_utils_1._global[global_utils_1.GLOBAL_METRICS_API_KEY] = global_utils_1.makeGetter(global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION, provider, NoopMeterProvider_1.NOOP_METER_PROVIDER);
        return provider;
    };
    /**
     * Returns the global meter provider.
     */
    MetricsAPI.prototype.getMeterProvider = function () {
        var _a, _b;
        return ((_b = (_a = global_utils_1._global[global_utils_1.GLOBAL_METRICS_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(global_utils_1._global, global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== void 0 ? _b : NoopMeterProvider_1.NOOP_METER_PROVIDER);
    };
    /**
     * Returns a meter from the global meter provider.
     */
    MetricsAPI.prototype.getMeter = function (name, version) {
        return this.getMeterProvider().getMeter(name, version);
    };
    /** Remove the global meter provider */
    MetricsAPI.prototype.disable = function () {
        delete global_utils_1._global[global_utils_1.GLOBAL_METRICS_API_KEY];
    };
    return MetricsAPI;
}());
exports.MetricsAPI = MetricsAPI;
//# sourceMappingURL=metrics.js.map

/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PropagationAPI = void 0;
var getter_1 = __webpack_require__(6);
var NoopHttpTextPropagator_1 = __webpack_require__(8);
var setter_1 = __webpack_require__(9);
var context_1 = __webpack_require__(45);
var global_utils_1 = __webpack_require__(46);
var contextApi = context_1.ContextAPI.getInstance();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Propagation API
 */
var PropagationAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function PropagationAPI() {
    }
    /** Get the singleton instance of the Propagator API */
    PropagationAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new PropagationAPI();
        }
        return this._instance;
    };
    /**
     * Set the current propagator. Returns the initialized propagator
     */
    PropagationAPI.prototype.setGlobalPropagator = function (propagator) {
        if (global_utils_1._global[global_utils_1.GLOBAL_PROPAGATION_API_KEY]) {
            // global propagator has already been set
            return this._getGlobalPropagator();
        }
        global_utils_1._global[global_utils_1.GLOBAL_PROPAGATION_API_KEY] = global_utils_1.makeGetter(global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION, propagator, NoopHttpTextPropagator_1.NOOP_HTTP_TEXT_PROPAGATOR);
        return propagator;
    };
    /**
     * Inject context into a carrier to be propagated inter-process
     *
     * @param carrier carrier to inject context into
     * @param setter Function used to set values on the carrier
     * @param context Context carrying tracing data to inject. Defaults to the currently active context.
     */
    PropagationAPI.prototype.inject = function (carrier, setter, context) {
        if (setter === void 0) { setter = setter_1.defaultSetter; }
        if (context === void 0) { context = contextApi.active(); }
        return this._getGlobalPropagator().inject(context, carrier, setter);
    };
    /**
     * Extract context from a carrier
     *
     * @param carrier Carrier to extract context from
     * @param getter Function used to extract keys from a carrier
     * @param context Context which the newly created context will inherit from. Defaults to the currently active context.
     */
    PropagationAPI.prototype.extract = function (carrier, getter, context) {
        if (getter === void 0) { getter = getter_1.defaultGetter; }
        if (context === void 0) { context = contextApi.active(); }
        return this._getGlobalPropagator().extract(context, carrier, getter);
    };
    /** Remove the global propagator */
    PropagationAPI.prototype.disable = function () {
        delete global_utils_1._global[global_utils_1.GLOBAL_PROPAGATION_API_KEY];
    };
    PropagationAPI.prototype._getGlobalPropagator = function () {
        var _a, _b;
        return ((_b = (_a = global_utils_1._global[global_utils_1.GLOBAL_PROPAGATION_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(global_utils_1._global, global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== void 0 ? _b : NoopHttpTextPropagator_1.NOOP_HTTP_TEXT_PROPAGATOR);
    };
    return PropagationAPI;
}());
exports.PropagationAPI = PropagationAPI;
//# sourceMappingURL=propagation.js.map

/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTokenCredential": () => (/* binding */ isTokenCredential)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * Tests an object to determine whether it implements TokenCredential.
 *
 * @param credential - The assumed TokenCredential to be tested.
 */
function isTokenCredential(credential) {
    // Check for an object with a 'getToken' function and possibly with
    // a 'signRequest' function.  We do this check to make sure that
    // a ServiceClientCredentials implementor (like TokenClientCredentials
    // in ms-rest-nodeauth) doesn't get mistaken for a TokenCredential if
    // it doesn't actually implement TokenCredential also.
    var castCredential = credential;
    return (castCredential &&
        typeof castCredential.getToken === "function" &&
        (castCredential.signRequest === undefined || castCredential.getToken.length > 0));
}
//# sourceMappingURL=tokenCredential.js.map

/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isKeyCredential": () => (/* binding */ isKeyCredential),
/* harmony export */   "parseClientArguments": () => (/* binding */ parseClientArguments)
/* harmony export */ });
/* harmony import */ var _azure_core_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var _azure_core_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _connectionString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.



const isValidEndpoint = (host) => {
    var _a;
    const url = _azure_core_http__WEBPACK_IMPORTED_MODULE_0__.URLBuilder.parse(host);
    return (!!((_a = url.getScheme()) === null || _a === void 0 ? void 0 : _a.match(/^http[s]?/)) &&
        url.getHost() !== undefined &&
        url.getHost() !== "" &&
        (url.getPath() === undefined || url.getPath() === "" || url.getPath() === "/"));
};
const assertValidEndpoint = (host) => {
    if (!isValidEndpoint(host)) {
        throw new Error(`Invalid endpoint url ${host}`);
    }
};
/**
 * Checks whether a value is a KeyCredential.
 *
 * @param credential - The credential being checked.
 */
const isKeyCredential = (credential) => {
    const castCredential = credential;
    return (castCredential &&
        typeof castCredential.key === "string" &&
        castCredential.getToken === undefined);
};
/**
 * Parses arguments passed to a communication client.
 * @hidden
 */
const parseClientArguments = (connectionStringOrUrl, credentialOrOptions) => {
    if (isKeyCredential(credentialOrOptions) || (0,_azure_core_auth__WEBPACK_IMPORTED_MODULE_1__.isTokenCredential)(credentialOrOptions)) {
        assertValidEndpoint(connectionStringOrUrl);
        return { url: connectionStringOrUrl, credential: credentialOrOptions };
    }
    else {
        const { endpoint: host, credential } = (0,_connectionString__WEBPACK_IMPORTED_MODULE_2__.parseConnectionString)(connectionStringOrUrl);
        assertValidEndpoint(host);
        return { url: host, credential };
    }
};
//# sourceMappingURL=clientArguments.js.map

/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URL": () => (/* reexport safe */ _util_url__WEBPACK_IMPORTED_MODULE_0__.URL),
/* harmony export */   "URLQuery": () => (/* binding */ URLQuery),
/* harmony export */   "URLBuilder": () => (/* binding */ URLBuilder),
/* harmony export */   "URLToken": () => (/* binding */ URLToken),
/* harmony export */   "isAlphaNumericCharacter": () => (/* binding */ isAlphaNumericCharacter),
/* harmony export */   "URLTokenizer": () => (/* binding */ URLTokenizer)
/* harmony export */ });
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var _util_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


/**
 * A class that handles the query portion of a URLBuilder.
 */
var URLQuery = /** @class */ (function () {
    function URLQuery() {
        this._rawQuery = {};
    }
    /**
     * Get whether or not there any query parameters in this URLQuery.
     */
    URLQuery.prototype.any = function () {
        return Object.keys(this._rawQuery).length > 0;
    };
    /**
     * Get the keys of the query string.
     */
    URLQuery.prototype.keys = function () {
        return Object.keys(this._rawQuery);
    };
    /**
     * Set a query parameter with the provided name and value. If the parameterValue is undefined or
     * empty, then this will attempt to remove an existing query parameter with the provided
     * parameterName.
     */
    URLQuery.prototype.set = function (parameterName, parameterValue) {
        var caseParameterValue = parameterValue;
        if (parameterName) {
            if (caseParameterValue !== undefined && caseParameterValue !== null) {
                var newValue = Array.isArray(caseParameterValue)
                    ? caseParameterValue
                    : caseParameterValue.toString();
                this._rawQuery[parameterName] = newValue;
            }
            else {
                delete this._rawQuery[parameterName];
            }
        }
    };
    /**
     * Get the value of the query parameter with the provided name. If no parameter exists with the
     * provided parameter name, then undefined will be returned.
     */
    URLQuery.prototype.get = function (parameterName) {
        return parameterName ? this._rawQuery[parameterName] : undefined;
    };
    /**
     * Get the string representation of this query. The return value will not start with a "?".
     */
    URLQuery.prototype.toString = function () {
        var result = "";
        for (var parameterName in this._rawQuery) {
            if (result) {
                result += "&";
            }
            var parameterValue = this._rawQuery[parameterName];
            if (Array.isArray(parameterValue)) {
                var parameterStrings = [];
                for (var _i = 0, parameterValue_1 = parameterValue; _i < parameterValue_1.length; _i++) {
                    var parameterValueElement = parameterValue_1[_i];
                    parameterStrings.push(parameterName + "=" + parameterValueElement);
                }
                result += parameterStrings.join("&");
            }
            else {
                result += parameterName + "=" + parameterValue;
            }
        }
        return result;
    };
    /**
     * Parse a URLQuery from the provided text.
     */
    URLQuery.parse = function (text) {
        var result = new URLQuery();
        if (text) {
            if (text.startsWith("?")) {
                text = text.substring(1);
            }
            var currentState = "ParameterName";
            var parameterName = "";
            var parameterValue = "";
            for (var i = 0; i < text.length; ++i) {
                var currentCharacter = text[i];
                switch (currentState) {
                    case "ParameterName":
                        switch (currentCharacter) {
                            case "=":
                                currentState = "ParameterValue";
                                break;
                            case "&":
                                parameterName = "";
                                parameterValue = "";
                                break;
                            default:
                                parameterName += currentCharacter;
                                break;
                        }
                        break;
                    case "ParameterValue":
                        switch (currentCharacter) {
                            case "&":
                                result.set(parameterName, parameterValue);
                                parameterName = "";
                                parameterValue = "";
                                currentState = "ParameterName";
                                break;
                            default:
                                parameterValue += currentCharacter;
                                break;
                        }
                        break;
                    default:
                        throw new Error("Unrecognized URLQuery parse state: " + currentState);
                }
            }
            if (currentState === "ParameterValue") {
                result.set(parameterName, parameterValue);
            }
        }
        return result;
    };
    return URLQuery;
}());

/**
 * A class that handles creating, modifying, and parsing URLs.
 */
var URLBuilder = /** @class */ (function () {
    function URLBuilder() {
    }
    /**
     * Set the scheme/protocol for this URL. If the provided scheme contains other parts of a URL
     * (such as a host, port, path, or query), those parts will be added to this URL as well.
     */
    URLBuilder.prototype.setScheme = function (scheme) {
        if (!scheme) {
            this._scheme = undefined;
        }
        else {
            this.set(scheme, "SCHEME");
        }
    };
    /**
     * Get the scheme that has been set in this URL.
     */
    URLBuilder.prototype.getScheme = function () {
        return this._scheme;
    };
    /**
     * Set the host for this URL. If the provided host contains other parts of a URL (such as a
     * port, path, or query), those parts will be added to this URL as well.
     */
    URLBuilder.prototype.setHost = function (host) {
        if (!host) {
            this._host = undefined;
        }
        else {
            this.set(host, "SCHEME_OR_HOST");
        }
    };
    /**
     * Get the host that has been set in this URL.
     */
    URLBuilder.prototype.getHost = function () {
        return this._host;
    };
    /**
     * Set the port for this URL. If the provided port contains other parts of a URL (such as a
     * path or query), those parts will be added to this URL as well.
     */
    URLBuilder.prototype.setPort = function (port) {
        if (port === undefined || port === null || port === "") {
            this._port = undefined;
        }
        else {
            this.set(port.toString(), "PORT");
        }
    };
    /**
     * Get the port that has been set in this URL.
     */
    URLBuilder.prototype.getPort = function () {
        return this._port;
    };
    /**
     * Set the path for this URL. If the provided path contains a query, then it will be added to
     * this URL as well.
     */
    URLBuilder.prototype.setPath = function (path) {
        if (!path) {
            this._path = undefined;
        }
        else {
            var schemeIndex = path.indexOf("://");
            if (schemeIndex !== -1) {
                var schemeStart = path.lastIndexOf("/", schemeIndex);
                // Make sure to only grab the URL part of the path before setting the state back to SCHEME
                // this will handle cases such as "/a/b/c/https://microsoft.com" => "https://microsoft.com"
                this.set(schemeStart === -1 ? path : path.substr(schemeStart + 1), "SCHEME");
            }
            else {
                this.set(path, "PATH");
            }
        }
    };
    /**
     * Append the provided path to this URL's existing path. If the provided path contains a query,
     * then it will be added to this URL as well.
     */
    URLBuilder.prototype.appendPath = function (path) {
        if (path) {
            var currentPath = this.getPath();
            if (currentPath) {
                if (!currentPath.endsWith("/")) {
                    currentPath += "/";
                }
                if (path.startsWith("/")) {
                    path = path.substring(1);
                }
                path = currentPath + path;
            }
            this.set(path, "PATH");
        }
    };
    /**
     * Get the path that has been set in this URL.
     */
    URLBuilder.prototype.getPath = function () {
        return this._path;
    };
    /**
     * Set the query in this URL.
     */
    URLBuilder.prototype.setQuery = function (query) {
        if (!query) {
            this._query = undefined;
        }
        else {
            this._query = URLQuery.parse(query);
        }
    };
    /**
     * Set a query parameter with the provided name and value in this URL's query. If the provided
     * query parameter value is undefined or empty, then the query parameter will be removed if it
     * existed.
     */
    URLBuilder.prototype.setQueryParameter = function (queryParameterName, queryParameterValue) {
        if (queryParameterName) {
            if (!this._query) {
                this._query = new URLQuery();
            }
            this._query.set(queryParameterName, queryParameterValue);
        }
    };
    /**
     * Get the value of the query parameter with the provided query parameter name. If no query
     * parameter exists with the provided name, then undefined will be returned.
     */
    URLBuilder.prototype.getQueryParameterValue = function (queryParameterName) {
        return this._query ? this._query.get(queryParameterName) : undefined;
    };
    /**
     * Get the query in this URL.
     */
    URLBuilder.prototype.getQuery = function () {
        return this._query ? this._query.toString() : undefined;
    };
    /**
     * Set the parts of this URL by parsing the provided text using the provided startState.
     */
    URLBuilder.prototype.set = function (text, startState) {
        var tokenizer = new URLTokenizer(text, startState);
        while (tokenizer.next()) {
            var token = tokenizer.current();
            var tokenPath = void 0;
            if (token) {
                switch (token.type) {
                    case "SCHEME":
                        this._scheme = token.text || undefined;
                        break;
                    case "HOST":
                        this._host = token.text || undefined;
                        break;
                    case "PORT":
                        this._port = token.text || undefined;
                        break;
                    case "PATH":
                        tokenPath = token.text || undefined;
                        if (!this._path || this._path === "/" || tokenPath !== "/") {
                            this._path = tokenPath;
                        }
                        break;
                    case "QUERY":
                        this._query = URLQuery.parse(token.text);
                        break;
                    default:
                        throw new Error("Unrecognized URLTokenType: " + token.type);
                }
            }
        }
    };
    URLBuilder.prototype.toString = function () {
        var result = "";
        if (this._scheme) {
            result += this._scheme + "://";
        }
        if (this._host) {
            result += this._host;
        }
        if (this._port) {
            result += ":" + this._port;
        }
        if (this._path) {
            if (!this._path.startsWith("/")) {
                result += "/";
            }
            result += this._path;
        }
        if (this._query && this._query.any()) {
            result += "?" + this._query.toString();
        }
        return result;
    };
    /**
     * If the provided searchValue is found in this URLBuilder, then replace it with the provided
     * replaceValue.
     */
    URLBuilder.prototype.replaceAll = function (searchValue, replaceValue) {
        if (searchValue) {
            this.setScheme((0,_util_utils__WEBPACK_IMPORTED_MODULE_1__.replaceAll)(this.getScheme(), searchValue, replaceValue));
            this.setHost((0,_util_utils__WEBPACK_IMPORTED_MODULE_1__.replaceAll)(this.getHost(), searchValue, replaceValue));
            this.setPort((0,_util_utils__WEBPACK_IMPORTED_MODULE_1__.replaceAll)(this.getPort(), searchValue, replaceValue));
            this.setPath((0,_util_utils__WEBPACK_IMPORTED_MODULE_1__.replaceAll)(this.getPath(), searchValue, replaceValue));
            this.setQuery((0,_util_utils__WEBPACK_IMPORTED_MODULE_1__.replaceAll)(this.getQuery(), searchValue, replaceValue));
        }
    };
    URLBuilder.parse = function (text) {
        var result = new URLBuilder();
        result.set(text, "SCHEME_OR_HOST");
        return result;
    };
    return URLBuilder;
}());

var URLToken = /** @class */ (function () {
    function URLToken(text, type) {
        this.text = text;
        this.type = type;
    }
    URLToken.scheme = function (text) {
        return new URLToken(text, "SCHEME");
    };
    URLToken.host = function (text) {
        return new URLToken(text, "HOST");
    };
    URLToken.port = function (text) {
        return new URLToken(text, "PORT");
    };
    URLToken.path = function (text) {
        return new URLToken(text, "PATH");
    };
    URLToken.query = function (text) {
        return new URLToken(text, "QUERY");
    };
    return URLToken;
}());

/**
 * Get whether or not the provided character (single character string) is an alphanumeric (letter or
 * digit) character.
 */
function isAlphaNumericCharacter(character) {
    var characterCode = character.charCodeAt(0);
    return ((48 /* '0' */ <= characterCode && characterCode <= 57) /* '9' */ ||
        (65 /* 'A' */ <= characterCode && characterCode <= 90) /* 'Z' */ ||
        (97 /* 'a' */ <= characterCode && characterCode <= 122) /* 'z' */);
}
/**
 * A class that tokenizes URL strings.
 */
var URLTokenizer = /** @class */ (function () {
    function URLTokenizer(_text, state) {
        this._text = _text;
        this._textLength = _text ? _text.length : 0;
        this._currentState = state !== undefined && state !== null ? state : "SCHEME_OR_HOST";
        this._currentIndex = 0;
    }
    /**
     * Get the current URLToken this URLTokenizer is pointing at, or undefined if the URLTokenizer
     * hasn't started or has finished tokenizing.
     */
    URLTokenizer.prototype.current = function () {
        return this._currentToken;
    };
    /**
     * Advance to the next URLToken and return whether or not a URLToken was found.
     */
    URLTokenizer.prototype.next = function () {
        if (!hasCurrentCharacter(this)) {
            this._currentToken = undefined;
        }
        else {
            switch (this._currentState) {
                case "SCHEME":
                    nextScheme(this);
                    break;
                case "SCHEME_OR_HOST":
                    nextSchemeOrHost(this);
                    break;
                case "HOST":
                    nextHost(this);
                    break;
                case "PORT":
                    nextPort(this);
                    break;
                case "PATH":
                    nextPath(this);
                    break;
                case "QUERY":
                    nextQuery(this);
                    break;
                default:
                    throw new Error("Unrecognized URLTokenizerState: " + this._currentState);
            }
        }
        return !!this._currentToken;
    };
    return URLTokenizer;
}());

/**
 * Read the remaining characters from this Tokenizer's character stream.
 */
function readRemaining(tokenizer) {
    var result = "";
    if (tokenizer._currentIndex < tokenizer._textLength) {
        result = tokenizer._text.substring(tokenizer._currentIndex);
        tokenizer._currentIndex = tokenizer._textLength;
    }
    return result;
}
/**
 * Whether or not this URLTokenizer has a current character.
 */
function hasCurrentCharacter(tokenizer) {
    return tokenizer._currentIndex < tokenizer._textLength;
}
/**
 * Get the character in the text string at the current index.
 */
function getCurrentCharacter(tokenizer) {
    return tokenizer._text[tokenizer._currentIndex];
}
/**
 * Advance to the character in text that is "step" characters ahead. If no step value is provided,
 * then step will default to 1.
 */
function nextCharacter(tokenizer, step) {
    if (hasCurrentCharacter(tokenizer)) {
        if (!step) {
            step = 1;
        }
        tokenizer._currentIndex += step;
    }
}
/**
 * Starting with the current character, peek "charactersToPeek" number of characters ahead in this
 * Tokenizer's stream of characters.
 */
function peekCharacters(tokenizer, charactersToPeek) {
    var endIndex = tokenizer._currentIndex + charactersToPeek;
    if (tokenizer._textLength < endIndex) {
        endIndex = tokenizer._textLength;
    }
    return tokenizer._text.substring(tokenizer._currentIndex, endIndex);
}
/**
 * Read characters from this Tokenizer until the end of the stream or until the provided condition
 * is false when provided the current character.
 */
function readWhile(tokenizer, condition) {
    var result = "";
    while (hasCurrentCharacter(tokenizer)) {
        var currentCharacter = getCurrentCharacter(tokenizer);
        if (!condition(currentCharacter)) {
            break;
        }
        else {
            result += currentCharacter;
            nextCharacter(tokenizer);
        }
    }
    return result;
}
/**
 * Read characters from this Tokenizer until a non-alphanumeric character or the end of the
 * character stream is reached.
 */
function readWhileLetterOrDigit(tokenizer) {
    return readWhile(tokenizer, function (character) { return isAlphaNumericCharacter(character); });
}
/**
 * Read characters from this Tokenizer until one of the provided terminating characters is read or
 * the end of the character stream is reached.
 */
function readUntilCharacter(tokenizer) {
    var terminatingCharacters = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        terminatingCharacters[_i - 1] = arguments[_i];
    }
    return readWhile(tokenizer, function (character) { return terminatingCharacters.indexOf(character) === -1; });
}
function nextScheme(tokenizer) {
    var scheme = readWhileLetterOrDigit(tokenizer);
    tokenizer._currentToken = URLToken.scheme(scheme);
    if (!hasCurrentCharacter(tokenizer)) {
        tokenizer._currentState = "DONE";
    }
    else {
        tokenizer._currentState = "HOST";
    }
}
function nextSchemeOrHost(tokenizer) {
    var schemeOrHost = readUntilCharacter(tokenizer, ":", "/", "?");
    if (!hasCurrentCharacter(tokenizer)) {
        tokenizer._currentToken = URLToken.host(schemeOrHost);
        tokenizer._currentState = "DONE";
    }
    else if (getCurrentCharacter(tokenizer) === ":") {
        if (peekCharacters(tokenizer, 3) === "://") {
            tokenizer._currentToken = URLToken.scheme(schemeOrHost);
            tokenizer._currentState = "HOST";
        }
        else {
            tokenizer._currentToken = URLToken.host(schemeOrHost);
            tokenizer._currentState = "PORT";
        }
    }
    else {
        tokenizer._currentToken = URLToken.host(schemeOrHost);
        if (getCurrentCharacter(tokenizer) === "/") {
            tokenizer._currentState = "PATH";
        }
        else {
            tokenizer._currentState = "QUERY";
        }
    }
}
function nextHost(tokenizer) {
    if (peekCharacters(tokenizer, 3) === "://") {
        nextCharacter(tokenizer, 3);
    }
    var host = readUntilCharacter(tokenizer, ":", "/", "?");
    tokenizer._currentToken = URLToken.host(host);
    if (!hasCurrentCharacter(tokenizer)) {
        tokenizer._currentState = "DONE";
    }
    else if (getCurrentCharacter(tokenizer) === ":") {
        tokenizer._currentState = "PORT";
    }
    else if (getCurrentCharacter(tokenizer) === "/") {
        tokenizer._currentState = "PATH";
    }
    else {
        tokenizer._currentState = "QUERY";
    }
}
function nextPort(tokenizer) {
    if (getCurrentCharacter(tokenizer) === ":") {
        nextCharacter(tokenizer);
    }
    var port = readUntilCharacter(tokenizer, "/", "?");
    tokenizer._currentToken = URLToken.port(port);
    if (!hasCurrentCharacter(tokenizer)) {
        tokenizer._currentState = "DONE";
    }
    else if (getCurrentCharacter(tokenizer) === "/") {
        tokenizer._currentState = "PATH";
    }
    else {
        tokenizer._currentState = "QUERY";
    }
}
function nextPath(tokenizer) {
    var path = readUntilCharacter(tokenizer, "?");
    tokenizer._currentToken = URLToken.path(path);
    if (!hasCurrentCharacter(tokenizer)) {
        tokenizer._currentState = "DONE";
    }
    else {
        tokenizer._currentState = "QUERY";
    }
}
function nextQuery(tokenizer) {
    if (getCurrentCharacter(tokenizer) === "?") {
        nextCharacter(tokenizer);
    }
    var query = readRemaining(tokenizer);
    tokenizer._currentToken = URLToken.query(query);
    tokenizer._currentState = "DONE";
}
//# sourceMappingURL=url.js.map

/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URL": () => (/* binding */ url)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var url = URL;

//# sourceMappingURL=url.browser.js.map

/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNode": () => (/* binding */ isNode),
/* harmony export */   "urlIsHTTPS": () => (/* binding */ urlIsHTTPS),
/* harmony export */   "encodeUri": () => (/* binding */ encodeUri),
/* harmony export */   "stripResponse": () => (/* binding */ stripResponse),
/* harmony export */   "stripRequest": () => (/* binding */ stripRequest),
/* harmony export */   "isValidUuid": () => (/* binding */ isValidUuid),
/* harmony export */   "generateUuid": () => (/* binding */ generateUuid),
/* harmony export */   "executePromisesSequentially": () => (/* binding */ executePromisesSequentially),
/* harmony export */   "delay": () => (/* binding */ delay),
/* harmony export */   "promiseToCallback": () => (/* binding */ promiseToCallback),
/* harmony export */   "promiseToServiceCallback": () => (/* binding */ promiseToServiceCallback),
/* harmony export */   "prepareXMLRootList": () => (/* binding */ prepareXMLRootList),
/* harmony export */   "applyMixins": () => (/* binding */ applyMixins),
/* harmony export */   "isDuration": () => (/* binding */ isDuration),
/* harmony export */   "replaceAll": () => (/* binding */ replaceAll),
/* harmony export */   "isPrimitiveType": () => (/* binding */ isPrimitiveType),
/* harmony export */   "getEnvironmentValue": () => (/* binding */ getEnvironmentValue)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _serializer_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.



var validUuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i;
/**
 * A constant that indicates whether the environment is node.js or browser based.
 */
var isNode = typeof process !== "undefined" &&
    !!process.version &&
    !!process.versions &&
    !!process.versions.node;
/**
 * Checks if a parsed URL is HTTPS
 *
 * @param urlToCheck - The url to check
 * @returns True if the URL is HTTPS; false otherwise.
 */
function urlIsHTTPS(urlToCheck) {
    return urlToCheck.protocol.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_0__.Constants.HTTPS;
}
/**
 * Encodes an URI.
 *
 * @param uri - The URI to be encoded.
 * @returns The encoded URI.
 */
function encodeUri(uri) {
    return encodeURIComponent(uri)
        .replace(/!/g, "%21")
        .replace(/"/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/\*/g, "%2A");
}
/**
 * Returns a stripped version of the Http Response which only contains body,
 * headers and the status.
 *
 * @param response - The Http Response
 * @returns The stripped version of Http Response.
 */
function stripResponse(response) {
    var strippedResponse = {};
    strippedResponse.body = response.bodyAsText;
    strippedResponse.headers = response.headers;
    strippedResponse.status = response.status;
    return strippedResponse;
}
/**
 * Returns a stripped version of the Http Request that does not contain the
 * Authorization header.
 *
 * @param request - The Http Request object
 * @returns The stripped version of Http Request.
 */
function stripRequest(request) {
    var strippedRequest = request.clone();
    if (strippedRequest.headers) {
        strippedRequest.headers.remove("authorization");
    }
    return strippedRequest;
}
/**
 * Validates the given uuid as a string
 *
 * @param uuid - The uuid as a string that needs to be validated
 * @returns True if the uuid is valid; false otherwise.
 */
function isValidUuid(uuid) {
    return validUuidRegex.test(uuid);
}
/**
 * Generated UUID
 *
 * @returns RFC4122 v4 UUID.
 */
function generateUuid() {
    return (0,uuid__WEBPACK_IMPORTED_MODULE_1__.default)();
}
/**
 * Executes an array of promises sequentially. Inspiration of this method is here:
 * https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html. An awesome blog on promises!
 *
 * @param promiseFactories - An array of promise factories(A function that return a promise)
 * @param kickstart - Input to the first promise that is used to kickstart the promise chain.
 * If not provided then the promise chain starts with undefined.
 * @returns A chain of resolved or rejected promises
 */
function executePromisesSequentially(promiseFactories, kickstart) {
    var result = Promise.resolve(kickstart);
    promiseFactories.forEach(function (promiseFactory) {
        result = result.then(promiseFactory);
    });
    return result;
}
/**
 * A wrapper for setTimeout that resolves a promise after t milliseconds.
 * @param t - The number of milliseconds to be delayed.
 * @param value - The value to be resolved with after a timeout of t milliseconds.
 * @returns Resolved promise
 */
function delay(t, value) {
    return new Promise(function (resolve) { return setTimeout(function () { return resolve(value); }, t); });
}
/**
 * Converts a Promise to a callback.
 * @param promise - The Promise to be converted to a callback
 * @returns A function that takes the callback `(cb: Function) => void`
 * @deprecated generated code should instead depend on responseToBody
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function promiseToCallback(promise) {
    if (typeof promise.then !== "function") {
        throw new Error("The provided input is not a Promise.");
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (cb) {
        promise
            .then(function (data) {
            // eslint-disable-next-line promise/no-callback-in-promise
            return cb(undefined, data);
        })
            .catch(function (err) {
            // eslint-disable-next-line promise/no-callback-in-promise
            cb(err);
        });
    };
}
/**
 * Converts a Promise to a service callback.
 * @param promise - The Promise of HttpOperationResponse to be converted to a service callback
 * @returns A function that takes the service callback (cb: ServiceCallback<T>): void
 */
function promiseToServiceCallback(promise) {
    if (typeof promise.then !== "function") {
        throw new Error("The provided input is not a Promise.");
    }
    return function (cb) {
        promise
            .then(function (data) {
            return process.nextTick(cb, undefined, data.parsedBody, data.request, data);
        })
            .catch(function (err) {
            process.nextTick(cb, err);
        });
    };
}
function prepareXMLRootList(obj, elementName, xmlNamespaceKey, xmlNamespace) {
    var _a, _b, _c;
    if (!Array.isArray(obj)) {
        obj = [obj];
    }
    if (!xmlNamespaceKey || !xmlNamespace) {
        return _a = {}, _a[elementName] = obj, _a;
    }
    var result = (_b = {}, _b[elementName] = obj, _b);
    result[_serializer_common__WEBPACK_IMPORTED_MODULE_2__.XML_ATTRKEY] = (_c = {}, _c[xmlNamespaceKey] = xmlNamespace, _c);
    return result;
}
/**
 * Applies the properties on the prototype of sourceCtors to the prototype of targetCtor
 * @param targetCtor - The target object on which the properties need to be applied.
 * @param sourceCtors - An array of source objects from which the properties need to be taken.
 */
function applyMixins(targetCtorParam, sourceCtors) {
    var castTargetCtorParam = targetCtorParam;
    sourceCtors.forEach(function (sourceCtor) {
        Object.getOwnPropertyNames(sourceCtor.prototype).forEach(function (name) {
            castTargetCtorParam.prototype[name] = sourceCtor.prototype[name];
        });
    });
}
var validateISODuration = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
/**
 * Indicates whether the given string is in ISO 8601 format.
 * @param value - The value to be validated for ISO 8601 duration format.
 * @returns `true` if valid, `false` otherwise.
 */
function isDuration(value) {
    return validateISODuration.test(value);
}
/**
 * Replace all of the instances of searchValue in value with the provided replaceValue.
 * @param value - The value to search and replace in.
 * @param searchValue - The value to search for in the value argument.
 * @param replaceValue - The value to replace searchValue with in the value argument.
 * @returns The value where each instance of searchValue was replaced with replacedValue.
 */
function replaceAll(value, searchValue, replaceValue) {
    return !value || !searchValue ? value : value.split(searchValue).join(replaceValue || "");
}
/**
 * Determines whether the given entity is a basic/primitive type
 * (string, number, boolean, null, undefined).
 * @param value - Any entity
 * @returns true is it is primitive type, false otherwise.
 */
function isPrimitiveType(value) {
    return (typeof value !== "object" && typeof value !== "function") || value === null;
}
function getEnvironmentValue(name) {
    if (process.env[name]) {
        return process.env[name];
    }
    else if (process.env[name.toLowerCase()]) {
        return process.env[name.toLowerCase()];
    }
    return undefined;
}
//# sourceMappingURL=utils.js.map

/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constants": () => (/* binding */ Constants)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var Constants = {
    /**
     * The core-http version
     */
    coreHttpVersion: "1.2.4",
    /**
     * Specifies HTTP.
     */
    HTTP: "http:",
    /**
     * Specifies HTTPS.
     */
    HTTPS: "https:",
    /**
     * Specifies HTTP Proxy.
     */
    HTTP_PROXY: "HTTP_PROXY",
    /**
     * Specifies HTTPS Proxy.
     */
    HTTPS_PROXY: "HTTPS_PROXY",
    /**
     * Specifies NO Proxy.
     */
    NO_PROXY: "NO_PROXY",
    /**
     * Specifies ALL Proxy.
     */
    ALL_PROXY: "ALL_PROXY",
    HttpConstants: {
        /**
         * Http Verbs
         */
        HttpVerbs: {
            PUT: "PUT",
            GET: "GET",
            DELETE: "DELETE",
            POST: "POST",
            MERGE: "MERGE",
            HEAD: "HEAD",
            PATCH: "PATCH"
        },
        StatusCodes: {
            TooManyRequests: 429
        }
    },
    /**
     * Defines constants for use with HTTP headers.
     */
    HeaderConstants: {
        /**
         * The Authorization header.
         */
        AUTHORIZATION: "authorization",
        AUTHORIZATION_SCHEME: "Bearer",
        /**
         * The Retry-After response-header field can be used with a 503 (Service
         * Unavailable) or 349 (Too Many Requests) responses to indicate how long
         * the service is expected to be unavailable to the requesting client.
         */
        RETRY_AFTER: "Retry-After",
        /**
         * The UserAgent header.
         */
        USER_AGENT: "User-Agent"
    }
};
//# sourceMappingURL=constants.js.map

/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XML_ATTRKEY": () => (/* binding */ XML_ATTRKEY),
/* harmony export */   "XML_CHARKEY": () => (/* binding */ XML_CHARKEY)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * Default key used to access the XML attributes.
 */
var XML_ATTRKEY = "$";
/**
 * Default key used to access the XML value content.
 */
var XML_CHARKEY = "_";
//# sourceMappingURL=serializer.common.js.map

/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseConnectionString": () => (/* binding */ parseConnectionString)
/* harmony export */ });
/* harmony import */ var _azure_core_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// TODO: update when connection string format is finalized
const CONNECTION_STRING_REGEX = /endpoint=(.*);accesskey=(.*)/i;
const tryParseConnectionString = (s) => {
    const match = s.match(CONNECTION_STRING_REGEX);
    if ((match === null || match === void 0 ? void 0 : match[1]) && match[2]) {
        return { endpoint: match[1], credential: new _azure_core_auth__WEBPACK_IMPORTED_MODULE_0__.AzureKeyCredential(match[2]) };
    }
    return undefined;
};
/**
 * Returns an EndpointCredential to easily access properties of the connection string.
 * @hidden
 *
 * @param connectionString - The connection string to parse
 * @returns Object to access the endpoint and the credenials
 */
const parseConnectionString = (connectionString) => {
    const parsedConnectionString = tryParseConnectionString(connectionString);
    if (parsedConnectionString) {
        return parsedConnectionString;
    }
    else {
        throw new Error(`Invalid connection string ${connectionString}`);
    }
};
//# sourceMappingURL=connectionString.js.map

/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AzureKeyCredential": () => (/* binding */ AzureKeyCredential)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * A static-key-based credential that supports updating
 * the underlying key value.
 */
var AzureKeyCredential = /** @class */ (function () {
    /**
     * Create an instance of an AzureKeyCredential for use
     * with a service client.
     *
     * @param key - The initial value of the key to use in authentication
     */
    function AzureKeyCredential(key) {
        if (!key) {
            throw new Error("key must be a non-empty string");
        }
        this._key = key;
    }
    Object.defineProperty(AzureKeyCredential.prototype, "key", {
        /**
         * The value of the key to be used in authentication
         */
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Change the value of the key.
     *
     * Updates will take effect upon the next request after
     * updating the key value.
     *
     * @param newKey - The new key value to be used
     */
    AzureKeyCredential.prototype.update = function (newKey) {
        this._key = newKey;
    };
    return AzureKeyCredential;
}());

//# sourceMappingURL=azureKeyCredential.js.map

/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SDK_VERSION": () => (/* binding */ SDK_VERSION)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const SDK_VERSION = "1.0.0";
//# sourceMappingURL=constants.js.map

/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _azure_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * The \@azure/logger configuration for this package.
 */
const logger = (0,_azure_logger__WEBPACK_IMPORTED_MODULE_0__.createClientLogger)("communication-identity");
//# sourceMappingURL=logger.js.map

/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AzureLogger": () => (/* binding */ AzureLogger),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel),
/* harmony export */   "getLogLevel": () => (/* binding */ getLogLevel),
/* harmony export */   "createClientLogger": () => (/* binding */ createClientLogger)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


var registeredLoggers = new Set();
var logLevelFromEnv = (typeof process !== "undefined" && process.env && process.env.AZURE_LOG_LEVEL) || undefined;
var azureLogLevel;
/**
 * The AzureLogger provides a mechanism for overriding where logs are output to.
 * By default, logs are sent to stderr.
 * Override the `log` method to redirect logs to another location.
 */
var AzureLogger = (0,_debug__WEBPACK_IMPORTED_MODULE_0__.default)("azure");
AzureLogger.log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    _debug__WEBPACK_IMPORTED_MODULE_0__.default.log.apply(_debug__WEBPACK_IMPORTED_MODULE_0__.default, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spread)(args));
};
var AZURE_LOG_LEVELS = ["verbose", "info", "warning", "error"];
if (logLevelFromEnv) {
    // avoid calling setLogLevel because we don't want a mis-set environment variable to crash
    if (isAzureLogLevel(logLevelFromEnv)) {
        setLogLevel(logLevelFromEnv);
    }
    else {
        console.error("AZURE_LOG_LEVEL set to unknown log level '" + logLevelFromEnv + "'; logging is not enabled. Acceptable values: " + AZURE_LOG_LEVELS.join(", ") + ".");
    }
}
/**
 * Immediately enables logging at the specified log level.
 * @param level - The log level to enable for logging.
 * Options from most verbose to least verbose are:
 * - verbose
 * - info
 * - warning
 * - error
 */
function setLogLevel(level) {
    var e_1, _a;
    if (level && !isAzureLogLevel(level)) {
        throw new Error("Unknown log level '" + level + "'. Acceptable values: " + AZURE_LOG_LEVELS.join(","));
    }
    azureLogLevel = level;
    var enabledNamespaces = [];
    try {
        for (var registeredLoggers_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(registeredLoggers), registeredLoggers_1_1 = registeredLoggers_1.next(); !registeredLoggers_1_1.done; registeredLoggers_1_1 = registeredLoggers_1.next()) {
            var logger = registeredLoggers_1_1.value;
            if (shouldEnable(logger)) {
                enabledNamespaces.push(logger.namespace);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (registeredLoggers_1_1 && !registeredLoggers_1_1.done && (_a = registeredLoggers_1.return)) _a.call(registeredLoggers_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    _debug__WEBPACK_IMPORTED_MODULE_0__.default.enable(enabledNamespaces.join(","));
}
/**
 * Retrieves the currently specified log level.
 */
function getLogLevel() {
    return azureLogLevel;
}
var levelMap = {
    verbose: 400,
    info: 300,
    warning: 200,
    error: 100
};
/**
 * Creates a logger for use by the Azure SDKs that inherits from `AzureLogger`.
 * @param namespace - The name of the SDK package.
 * @hidden
 */
function createClientLogger(namespace) {
    var clientRootLogger = AzureLogger.extend(namespace);
    patchLogMethod(AzureLogger, clientRootLogger);
    return {
        error: createLogger(clientRootLogger, "error"),
        warning: createLogger(clientRootLogger, "warning"),
        info: createLogger(clientRootLogger, "info"),
        verbose: createLogger(clientRootLogger, "verbose")
    };
}
function patchLogMethod(parent, child) {
    child.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        parent.log.apply(parent, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spread)(args));
    };
}
function createLogger(parent, level) {
    var logger = Object.assign(parent.extend(level), {
        level: level
    });
    patchLogMethod(parent, logger);
    if (shouldEnable(logger)) {
        var enabledNamespaces = _debug__WEBPACK_IMPORTED_MODULE_0__.default.disable();
        _debug__WEBPACK_IMPORTED_MODULE_0__.default.enable(enabledNamespaces + "," + logger.namespace);
    }
    registeredLoggers.add(logger);
    return logger;
}
function shouldEnable(logger) {
    if (azureLogLevel && levelMap[logger.level] <= levelMap[azureLogLevel]) {
        return true;
    }
    else {
        return false;
    }
}
function isAzureLogLevel(logLevel) {
    return AZURE_LOG_LEVELS.includes(logLevel);
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/* eslint-disable no-invalid-this */

var debugEnvVariable = (typeof process !== "undefined" && process.env && process.env.DEBUG) || undefined;
var enabledString;
var enabledNamespaces = [];
var skippedNamespaces = [];
var debuggers = [];
if (debugEnvVariable) {
    enable(debugEnvVariable);
}
var debugObj = Object.assign(function (namespace) {
    return createDebugger(namespace);
}, {
    enable: enable,
    enabled: enabled,
    disable: disable,
    log: _log__WEBPACK_IMPORTED_MODULE_0__.log
});
function enable(namespaces) {
    var e_1, _a, e_2, _b;
    enabledString = namespaces;
    enabledNamespaces = [];
    skippedNamespaces = [];
    var wildcard = /\*/g;
    var namespaceList = namespaces.split(",").map(function (ns) { return ns.trim().replace(wildcard, ".*?"); });
    try {
        for (var namespaceList_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(namespaceList), namespaceList_1_1 = namespaceList_1.next(); !namespaceList_1_1.done; namespaceList_1_1 = namespaceList_1.next()) {
            var ns = namespaceList_1_1.value;
            if (ns.startsWith("-")) {
                skippedNamespaces.push(new RegExp("^" + ns.substr(1) + "$"));
            }
            else {
                enabledNamespaces.push(new RegExp("^" + ns + "$"));
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (namespaceList_1_1 && !namespaceList_1_1.done && (_a = namespaceList_1.return)) _a.call(namespaceList_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var debuggers_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(debuggers), debuggers_1_1 = debuggers_1.next(); !debuggers_1_1.done; debuggers_1_1 = debuggers_1.next()) {
            var instance = debuggers_1_1.value;
            instance.enabled = enabled(instance.namespace);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (debuggers_1_1 && !debuggers_1_1.done && (_b = debuggers_1.return)) _b.call(debuggers_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
}
function enabled(namespace) {
    var e_3, _a, e_4, _b;
    if (namespace.endsWith("*")) {
        return true;
    }
    try {
        for (var skippedNamespaces_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(skippedNamespaces), skippedNamespaces_1_1 = skippedNamespaces_1.next(); !skippedNamespaces_1_1.done; skippedNamespaces_1_1 = skippedNamespaces_1.next()) {
            var skipped = skippedNamespaces_1_1.value;
            if (skipped.test(namespace)) {
                return false;
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (skippedNamespaces_1_1 && !skippedNamespaces_1_1.done && (_a = skippedNamespaces_1.return)) _a.call(skippedNamespaces_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    try {
        for (var enabledNamespaces_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(enabledNamespaces), enabledNamespaces_1_1 = enabledNamespaces_1.next(); !enabledNamespaces_1_1.done; enabledNamespaces_1_1 = enabledNamespaces_1.next()) {
            var enabledNamespace = enabledNamespaces_1_1.value;
            if (enabledNamespace.test(namespace)) {
                return true;
            }
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (enabledNamespaces_1_1 && !enabledNamespaces_1_1.done && (_b = enabledNamespaces_1.return)) _b.call(enabledNamespaces_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return false;
}
function disable() {
    var result = enabledString || "";
    enable("");
    return result;
}
function createDebugger(namespace) {
    var newDebugger = Object.assign(debug, {
        enabled: enabled(namespace),
        destroy: destroy,
        log: debugObj.log,
        namespace: namespace,
        extend: extend
    });
    function debug() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!newDebugger.enabled) {
            return;
        }
        if (args.length > 0) {
            args[0] = namespace + " " + args[0];
        }
        newDebugger.log.apply(newDebugger, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spread)(args));
    }
    debuggers.push(newDebugger);
    return newDebugger;
}
function destroy() {
    var index = debuggers.indexOf(this);
    if (index >= 0) {
        debuggers.splice(index, 1);
        return true;
    }
    return false;
}
function extend(namespace) {
    var newDebugger = createDebugger(this.namespace + ":" + namespace);
    newDebugger.log = this.log;
    return newDebugger;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debugObj);
//# sourceMappingURL=debug.js.map

/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => (/* binding */ log)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length > 0) {
        var firstArg = String(args[0]);
        if (firstArg.includes(":error")) {
            console.error.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(args));
        }
        else if (firstArg.includes(":warning")) {
            console.warn.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(args));
        }
        else if (firstArg.includes(":info")) {
            console.info.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(args));
        }
        else if (firstArg.includes(":verbose")) {
            console.debug.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(args));
        }
        else {
            console.debug.apply(console, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(args));
        }
    }
}
//# sourceMappingURL=log.browser.js.map

/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCommunicationAuthPolicy": () => (/* binding */ createCommunicationAuthPolicy)
/* harmony export */ });
/* harmony import */ var _azure_core_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _azure_core_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);
/* harmony import */ var _communicationAccessKeyCredentialPolicy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.



/**
 * Creates a pipeline policy to authenticate request based
 * on the credential passed in.
 * @hidden
 *
 * @param credential - The KeyCredential or TokenCredential.
 */
const createCommunicationAuthPolicy = (credential) => {
    if ((0,_azure_core_auth__WEBPACK_IMPORTED_MODULE_0__.isTokenCredential)(credential)) {
        return (0,_azure_core_http__WEBPACK_IMPORTED_MODULE_1__.bearerTokenAuthenticationPolicy)(credential, "https://communication.azure.com//.default");
    }
    else {
        return (0,_communicationAccessKeyCredentialPolicy__WEBPACK_IMPORTED_MODULE_2__.createCommunicationAccessKeyCredentialPolicy)(credential);
    }
};
//# sourceMappingURL=communicationAuthPolicy.js.map

/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CYCLER_OPTIONS": () => (/* binding */ DEFAULT_CYCLER_OPTIONS),
/* harmony export */   "bearerTokenAuthenticationPolicy": () => (/* binding */ bearerTokenAuthenticationPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _policies_requestPolicy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.




// Default options for the cycler if none are provided
var DEFAULT_CYCLER_OPTIONS = {
    forcedRefreshWindowInMs: 1000,
    retryIntervalInMs: 3000,
    refreshWindowInMs: 1000 * 60 * 2 // Start refreshing 2m before expiry
};
/**
 * Converts an an unreliable access token getter (which may resolve with null)
 * into an AccessTokenGetter by retrying the unreliable getter in a regular
 * interval.
 *
 * @param getAccessToken - a function that produces a promise of an access
 * token that may fail by returning null
 * @param retryIntervalInMs - the time (in milliseconds) to wait between retry
 * attempts
 * @param timeoutInMs - the timestamp after which the refresh attempt will fail,
 * throwing an exception
 * @returns - a promise that, if it resolves, will resolve with an access token
 */
function beginRefresh(getAccessToken, retryIntervalInMs, timeoutInMs) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
        // This wrapper handles exceptions gracefully as long as we haven't exceeded
        // the timeout.
        function tryGetAccessToken() {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
                var _a, finalToken;
                return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(Date.now() < timeoutInMs)) return [3 /*break*/, 5];
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, getAccessToken()];
                        case 2: return [2 /*return*/, _b.sent()];
                        case 3:
                            _a = _b.sent();
                            return [2 /*return*/, null];
                        case 4: return [3 /*break*/, 7];
                        case 5: return [4 /*yield*/, getAccessToken()];
                        case 6:
                            finalToken = _b.sent();
                            // Timeout is up, so throw if it's still null
                            if (finalToken === null) {
                                throw new Error("Failed to refresh access token.");
                            }
                            return [2 /*return*/, finalToken];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        }
        var token;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, tryGetAccessToken()];
                case 1:
                    token = _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(token === null)) return [3 /*break*/, 5];
                    return [4 /*yield*/, (0,_util_utils__WEBPACK_IMPORTED_MODULE_1__.delay)(retryIntervalInMs)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, tryGetAccessToken()];
                case 4:
                    token = _a.sent();
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, token];
            }
        });
    });
}
/**
 * Creates a token cycler from a credential, scopes, and optional settings.
 *
 * A token cycler represents a way to reliably retrieve a valid access token
 * from a TokenCredential. It will handle initializing the token, refreshing it
 * when it nears expiration, and synchronizes refresh attempts to avoid
 * concurrency hazards.
 *
 * @param credential - the underlying TokenCredential that provides the access
 * token
 * @param scopes - the scopes to request authorization for
 * @param tokenCyclerOptions - optionally override default settings for the cycler
 *
 * @returns - a function that reliably produces a valid access token
 */
function createTokenCycler(credential, scopes, tokenCyclerOptions) {
    var _this = this;
    var refreshWorker = null;
    var token = null;
    var options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, DEFAULT_CYCLER_OPTIONS), tokenCyclerOptions);
    /**
     * This little holder defines several predicates that we use to construct
     * the rules of refreshing the token.
     */
    var cycler = {
        /**
         * Produces true if a refresh job is currently in progress.
         */
        get isRefreshing() {
            return refreshWorker !== null;
        },
        /**
         * Produces true if the cycler SHOULD refresh (we are within the refresh
         * window and not already refreshing)
         */
        get shouldRefresh() {
            var _a;
            return (!cycler.isRefreshing &&
                ((_a = token === null || token === void 0 ? void 0 : token.expiresOnTimestamp) !== null && _a !== void 0 ? _a : 0) - options.refreshWindowInMs < Date.now());
        },
        /**
         * Produces true if the cycler MUST refresh (null or nearly-expired
         * token).
         */
        get mustRefresh() {
            return (token === null || token.expiresOnTimestamp - options.forcedRefreshWindowInMs < Date.now());
        }
    };
    /**
     * Starts a refresh job or returns the existing job if one is already
     * running.
     */
    function refresh(getTokenOptions) {
        var _a;
        if (!cycler.isRefreshing) {
            // We bind `scopes` here to avoid passing it around a lot
            var tryGetAccessToken = function () {
                return credential.getToken(scopes, getTokenOptions);
            };
            // Take advantage of promise chaining to insert an assignment to `token`
            // before the refresh can be considered done.
            refreshWorker = beginRefresh(tryGetAccessToken, options.retryIntervalInMs, 
            // If we don't have a token, then we should timeout immediately
            (_a = token === null || token === void 0 ? void 0 : token.expiresOnTimestamp) !== null && _a !== void 0 ? _a : Date.now())
                .then(function (_token) {
                refreshWorker = null;
                token = _token;
                return token;
            })
                .catch(function (reason) {
                // We also should reset the refresher if we enter a failed state.  All
                // existing awaiters will throw, but subsequent requests will start a
                // new retry chain.
                refreshWorker = null;
                token = null;
                throw reason;
            });
        }
        return refreshWorker;
    }
    return function (tokenOptions) { return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(_this, void 0, void 0, function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
            //
            // Simple rules:
            // - If we MUST refresh, then return the refresh task, blocking
            //   the pipeline until a token is available.
            // - If we SHOULD refresh, then run refresh but don't return it
            //   (we can still use the cached token).
            // - Return the token, since it's fine if we didn't return in
            //   step 1.
            //
            if (cycler.mustRefresh)
                return [2 /*return*/, refresh(tokenOptions)];
            if (cycler.shouldRefresh) {
                refresh(tokenOptions);
            }
            return [2 /*return*/, token];
        });
    }); };
}
// #endregion
/**
 * Creates a new factory for a RequestPolicy that applies a bearer token to
 * the requests' `Authorization` headers.
 *
 * @param credential - The TokenCredential implementation that can supply the bearer token.
 * @param scopes - The scopes for which the bearer token applies.
 */
function bearerTokenAuthenticationPolicy(credential, scopes) {
    // This simple function encapsulates the entire process of reliably retrieving the token
    var getToken = createTokenCycler(credential, scopes /* , options */);
    var BearerTokenAuthenticationPolicy = /** @class */ (function (_super) {
        (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(BearerTokenAuthenticationPolicy, _super);
        function BearerTokenAuthenticationPolicy(nextPolicy, options) {
            return _super.call(this, nextPolicy, options) || this;
        }
        BearerTokenAuthenticationPolicy.prototype.sendRequest = function (webResource) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
                var token;
                return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getToken({
                                abortSignal: webResource.abortSignal,
                                tracingOptions: {
                                    spanOptions: webResource.spanOptions,
                                    tracingContext: webResource.tracingContext
                                }
                            })];
                        case 1:
                            token = (_a.sent()).token;
                            webResource.headers.set(_util_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.HeaderConstants.AUTHORIZATION, "Bearer " + token);
                            return [2 /*return*/, this._nextPolicy.sendRequest(webResource)];
                    }
                });
            });
        };
        return BearerTokenAuthenticationPolicy;
    }(_policies_requestPolicy__WEBPACK_IMPORTED_MODULE_3__.BaseRequestPolicy));
    return {
        create: function (nextPolicy, options) {
            return new BearerTokenAuthenticationPolicy(nextPolicy, options);
        }
    };
}
//# sourceMappingURL=bearerTokenAuthenticationPolicy.js.map

/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseRequestPolicy": () => (/* binding */ BaseRequestPolicy),
/* harmony export */   "RequestPolicyOptions": () => (/* binding */ RequestPolicyOptions)
/* harmony export */ });
/* harmony import */ var _httpPipelineLogLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

var BaseRequestPolicy = /** @class */ (function () {
    function BaseRequestPolicy(_nextPolicy, _options) {
        this._nextPolicy = _nextPolicy;
        this._options = _options;
    }
    /**
     * Get whether or not a log with the provided log level should be logged.
     * @param logLevel - The log level of the log that will be logged.
     * @returns Whether or not a log with the provided log level should be logged.
     */
    BaseRequestPolicy.prototype.shouldLog = function (logLevel) {
        return this._options.shouldLog(logLevel);
    };
    /**
     * Attempt to log the provided message to the provided logger. If no logger was provided or if
     * the log level does not meat the logger's threshold, then nothing will be logged.
     * @param logLevel - The log level of this log.
     * @param message - The message of this log.
     */
    BaseRequestPolicy.prototype.log = function (logLevel, message) {
        this._options.log(logLevel, message);
    };
    return BaseRequestPolicy;
}());

/**
 * Optional properties that can be used when creating a RequestPolicy.
 */
var RequestPolicyOptions = /** @class */ (function () {
    function RequestPolicyOptions(_logger) {
        this._logger = _logger;
    }
    /**
     * Get whether or not a log with the provided log level should be logged.
     * @param logLevel - The log level of the log that will be logged.
     * @returns Whether or not a log with the provided log level should be logged.
     */
    RequestPolicyOptions.prototype.shouldLog = function (logLevel) {
        return (!!this._logger &&
            logLevel !== _httpPipelineLogLevel__WEBPACK_IMPORTED_MODULE_0__.HttpPipelineLogLevel.OFF &&
            logLevel <= this._logger.minimumLogLevel);
    };
    /**
     * Attempt to log the provided message to the provided logger. If no logger was provided or if
     * the log level does not meet the logger's threshold, then nothing will be logged.
     * @param logLevel - The log level of this log.
     * @param message - The message of this log.
     */
    RequestPolicyOptions.prototype.log = function (logLevel, message) {
        if (this._logger && this.shouldLog(logLevel)) {
            this._logger.log(logLevel, message);
        }
    };
    return RequestPolicyOptions;
}());

//# sourceMappingURL=requestPolicy.js.map

/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpPipelineLogLevel": () => (/* binding */ HttpPipelineLogLevel)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * The different levels of logs that can be used with the HttpPipelineLogger.
 */
var HttpPipelineLogLevel;
(function (HttpPipelineLogLevel) {
    /**
     * A log level that indicates that no logs will be logged.
     */
    HttpPipelineLogLevel[HttpPipelineLogLevel["OFF"] = 0] = "OFF";
    /**
     * An error log.
     */
    HttpPipelineLogLevel[HttpPipelineLogLevel["ERROR"] = 1] = "ERROR";
    /**
     * A warning log.
     */
    HttpPipelineLogLevel[HttpPipelineLogLevel["WARNING"] = 2] = "WARNING";
    /**
     * An information log.
     */
    HttpPipelineLogLevel[HttpPipelineLogLevel["INFO"] = 3] = "INFO";
})(HttpPipelineLogLevel || (HttpPipelineLogLevel = {}));
//# sourceMappingURL=httpPipelineLogLevel.js.map

/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCommunicationAccessKeyCredentialPolicy": () => (/* binding */ createCommunicationAccessKeyCredentialPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var _azure_core_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _azure_core_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var _azure_core_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54);
/* harmony import */ var _cryptoUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.



/**
 * Creates an HTTP pipeline policy to authenticate a request using a `KeyCredential`.
 * @hidden
 *
 * @param credential - The key credential.
 */
const createCommunicationAccessKeyCredentialPolicy = (credential) => {
    return {
        create: (nextpolicy, options) => {
            return new CommunicationAccessKeyCredentialPolicy(credential, nextpolicy, options);
        }
    };
};
/**
 * CommunicationAccessKeyCredentialPolicy provides a means of signing requests made through
 * the SmsClient.
 */
class CommunicationAccessKeyCredentialPolicy extends _azure_core_http__WEBPACK_IMPORTED_MODULE_0__.BaseRequestPolicy {
    /**
     * Initializes a new instance of the CommunicationAccessKeyCredential class
     * using a base64 encoded key.
     * @param accessKey - The base64 encoded key to be used for signing.
     */
    constructor(accessKey, nextPolicy, options) {
        super(nextPolicy, options);
        this.accessKey = accessKey;
    }
    /**
     * Signs a request with the provided access key.
     *
     * @param webResource - The WebResource to be signed.
     */
    signRequest(webResource) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const verb = webResource.method.toUpperCase();
            const utcNow = new Date().toUTCString();
            const contentHash = yield (0,_cryptoUtils__WEBPACK_IMPORTED_MODULE_2__.shaHash)(webResource.body || "");
            const dateHeader = _azure_core_http__WEBPACK_IMPORTED_MODULE_3__.isNode ? "date" : "x-ms-date";
            const signedHeaders = `${dateHeader};host;x-ms-content-sha256`;
            const url = _azure_core_http__WEBPACK_IMPORTED_MODULE_4__.URLBuilder.parse(webResource.url);
            const query = url.getQuery();
            const urlPathAndQuery = query ? `${url.getPath()}?${query}` : url.getPath();
            const port = url.getPort();
            const hostAndPort = port ? `${url.getHost()}:${port}` : url.getHost();
            const stringToSign = `${verb}\n${urlPathAndQuery}\n${utcNow};${hostAndPort};${contentHash}`;
            const signature = yield (0,_cryptoUtils__WEBPACK_IMPORTED_MODULE_2__.shaHMAC)(this.accessKey.key, stringToSign);
            if (_azure_core_http__WEBPACK_IMPORTED_MODULE_3__.isNode) {
                webResource.headers.set("Host", hostAndPort || "");
            }
            webResource.headers.set(dateHeader, utcNow);
            webResource.headers.set("x-ms-content-sha256", contentHash);
            webResource.headers.set("Authorization", `HMAC-SHA256 SignedHeaders=${signedHeaders}&Signature=${signature}`);
            return webResource;
        });
    }
    /**
     * Signs the request and calls the next policy in the factory.
     */
    sendRequest(webResource) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (!webResource) {
                throw new Error("webResource cannot be null or undefined");
            }
            return this._nextPolicy.sendRequest(yield this.signRequest(webResource));
        });
    }
}
//# sourceMappingURL=communicationAccessKeyCredentialPolicy.js.map

/***/ }),
/* 77 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shaHash": () => (/* binding */ shaHash),
/* harmony export */   "shaHMAC": () => (/* binding */ shaHMAC)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _encodeUtils_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


const globalRef = globalThis;
const getCrypto = () => {
    if (!globalRef) {
        throw new Error("Could not find global");
    }
    if (!globalRef.crypto || !globalRef.crypto.subtle) {
        throw new Error("Browser does not support cryptography functions");
    }
    return globalRef.crypto.subtle;
};
const shaHash = (content) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    const data = (0,_encodeUtils_browser__WEBPACK_IMPORTED_MODULE_1__.encodeUTF8)(content);
    const hash = yield getCrypto().digest("SHA-256", data);
    return (0,_encodeUtils_browser__WEBPACK_IMPORTED_MODULE_1__.encodeBase64)(hash);
});
const shaHMAC = (secret, content) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    const importParams = { name: "HMAC", hash: { name: "SHA-256" } };
    const encodedMessage = (0,_encodeUtils_browser__WEBPACK_IMPORTED_MODULE_1__.encodeUTF8)(content);
    const encodedKey = (0,_encodeUtils_browser__WEBPACK_IMPORTED_MODULE_1__.encodeUTF8fromBase64)(secret);
    const crypto = getCrypto();
    const cryptoKey = yield crypto.importKey("raw", encodedKey, importParams, false, ["sign"]);
    const signature = yield crypto.sign(importParams, cryptoKey, encodedMessage);
    return (0,_encodeUtils_browser__WEBPACK_IMPORTED_MODULE_1__.encodeBase64)(signature);
});
//# sourceMappingURL=cryptoUtils.browser.js.map

/***/ }),
/* 78 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeUTF8": () => (/* binding */ encodeUTF8),
/* harmony export */   "encodeUTF8fromBase64": () => (/* binding */ encodeUTF8fromBase64),
/* harmony export */   "encodeBase64": () => (/* binding */ encodeBase64)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const encodeUTF8 = (str) => new TextEncoder().encode(str);
function encodeUTF8fromBase64(str) {
    if (typeof atob !== "function") {
        throw new Error("Your browser environment is missing the global `atob` function");
    }
    const binary = atob(str);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}
function encodeBase64(value) {
    if (typeof btoa !== "function") {
        throw new Error("Your browser environment is missing the global `btoa` function");
    }
    const bytes = new Uint8Array(value);
    let binary = "";
    for (const byte of bytes) {
        binary += String.fromCharCode(byte);
    }
    return btoa(binary);
}
//# sourceMappingURL=encodeUtils.browser.js.map

/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceClient": () => (/* binding */ ServiceClient),
/* harmony export */   "serializeRequestBody": () => (/* binding */ serializeRequestBody),
/* harmony export */   "createPipelineFromOptions": () => (/* binding */ createPipelineFromOptions),
/* harmony export */   "getPropertyParent": () => (/* binding */ getPropertyParent),
/* harmony export */   "getOperationArgumentValueFromParameterPath": () => (/* binding */ getOperationArgumentValueFromParameterPath),
/* harmony export */   "flattenResponse": () => (/* binding */ flattenResponse)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71);
/* harmony import */ var _azure_core_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _policies_logPolicy__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(108);
/* harmony import */ var _operationParameter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93);
/* harmony import */ var _operationSpec__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95);
/* harmony import */ var _policies_deserializationPolicy__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(106);
/* harmony import */ var _policies_exponentialRetryPolicy__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(102);
/* harmony import */ var _policies_generateClientRequestIdPolicy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97);
/* harmony import */ var _policies_userAgentPolicy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(98);
/* harmony import */ var _policies_redirectPolicy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(100);
/* harmony import */ var _policies_requestPolicy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony import */ var _policies_rpRegistrationPolicy__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(101);
/* harmony import */ var _policies_bearerTokenAuthenticationPolicy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73);
/* harmony import */ var _policies_systemErrorRetryPolicy__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(104);
/* harmony import */ var _queryCollectionFormat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94);
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(91);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54);
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56);
/* harmony import */ var _util_xml__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(96);
/* harmony import */ var _webResource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90);
/* harmony import */ var _policies_proxyPolicy__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(107);
/* harmony import */ var _policies_throttlingRetryPolicy__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(105);
/* harmony import */ var _policies_signingPolicy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88);
/* harmony import */ var _policies_keepAlivePolicy__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(110);
/* harmony import */ var _policies_tracingPolicy__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(111);
/* harmony import */ var _policies_disableResponseDecompressionPolicy__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(168);
/* harmony import */ var _policies_ndJsonPolicy__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(109);
/* harmony import */ var _util_serializer_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(55);
/* harmony import */ var _httpClientCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
































/**
 * ServiceClient sends service requests and receives responses.
 */
var ServiceClient = /** @class */ (function () {
    /**
     * The ServiceClient constructor
     * @param credentials - The credentials used for authentication with the service.
     * @param options - The service client options that govern the behavior of the client.
     */
    function ServiceClient(credentials, 
    /* eslint-disable-next-line @azure/azure-sdk/ts-naming-options */
    options) {
        var _this = this;
        if (!options) {
            options = {};
        }
        this._withCredentials = options.withCredentials || false;
        this._httpClient = options.httpClient || (0,_httpClientCache__WEBPACK_IMPORTED_MODULE_0__.getCachedDefaultHttpClient)();
        this._requestPolicyOptions = new _policies_requestPolicy__WEBPACK_IMPORTED_MODULE_1__.RequestPolicyOptions(options.httpPipelineLogger);
        var requestPolicyFactories;
        if (Array.isArray(options.requestPolicyFactories)) {
            _log__WEBPACK_IMPORTED_MODULE_2__.logger.info("ServiceClient: using custom request policies");
            requestPolicyFactories = options.requestPolicyFactories;
        }
        else {
            var authPolicyFactory = undefined;
            if ((0,_azure_core_auth__WEBPACK_IMPORTED_MODULE_3__.isTokenCredential)(credentials)) {
                _log__WEBPACK_IMPORTED_MODULE_2__.logger.info("ServiceClient: creating bearer token authentication policy from provided credentials");
                // Create a wrapped RequestPolicyFactory here so that we can provide the
                // correct scope to the BearerTokenAuthenticationPolicy at the first time
                // one is requested.  This is needed because generated ServiceClient
                // implementations do not set baseUri until after ServiceClient's constructor
                // is finished, leaving baseUri empty at the time when it is needed to
                // build the correct scope name.
                var wrappedPolicyFactory = function () {
                    var bearerTokenPolicyFactory = undefined;
                    // eslint-disable-next-line @typescript-eslint/no-this-alias
                    var serviceClient = _this;
                    var serviceClientOptions = options;
                    return {
                        create: function (nextPolicy, createOptions) {
                            var credentialScopes = getCredentialScopes(serviceClientOptions, serviceClient.baseUri);
                            if (!credentialScopes) {
                                throw new Error("When using credential, the ServiceClient must contain a baseUri or a credentialScopes in ServiceClientOptions. Unable to create a bearerTokenAuthenticationPolicy");
                            }
                            if (bearerTokenPolicyFactory === undefined || bearerTokenPolicyFactory === null) {
                                bearerTokenPolicyFactory = (0,_policies_bearerTokenAuthenticationPolicy__WEBPACK_IMPORTED_MODULE_4__.bearerTokenAuthenticationPolicy)(credentials, credentialScopes);
                            }
                            return bearerTokenPolicyFactory.create(nextPolicy, createOptions);
                        }
                    };
                };
                authPolicyFactory = wrappedPolicyFactory();
            }
            else if (credentials && typeof credentials.signRequest === "function") {
                _log__WEBPACK_IMPORTED_MODULE_2__.logger.info("ServiceClient: creating signing policy from provided credentials");
                authPolicyFactory = (0,_policies_signingPolicy__WEBPACK_IMPORTED_MODULE_5__.signingPolicy)(credentials);
            }
            else if (credentials !== undefined && credentials !== null) {
                throw new Error("The credentials argument must implement the TokenCredential interface");
            }
            _log__WEBPACK_IMPORTED_MODULE_2__.logger.info("ServiceClient: using default request policies");
            requestPolicyFactories = createDefaultRequestPolicyFactories(authPolicyFactory, options);
            if (options.requestPolicyFactories) {
                // options.requestPolicyFactories can also be a function that manipulates
                // the default requestPolicyFactories array
                var newRequestPolicyFactories = options.requestPolicyFactories(requestPolicyFactories);
                if (newRequestPolicyFactories) {
                    requestPolicyFactories = newRequestPolicyFactories;
                }
            }
        }
        this._requestPolicyFactories = requestPolicyFactories;
    }
    /**
     * Send the provided httpRequest.
     */
    ServiceClient.prototype.sendRequest = function (options) {
        if (options === null || options === undefined || typeof options !== "object") {
            throw new Error("options cannot be null or undefined and it must be of type object.");
        }
        var httpRequest;
        try {
            if ((0,_webResource__WEBPACK_IMPORTED_MODULE_6__.isWebResourceLike)(options)) {
                options.validateRequestProperties();
                httpRequest = options;
            }
            else {
                httpRequest = new _webResource__WEBPACK_IMPORTED_MODULE_6__.WebResource();
                httpRequest = httpRequest.prepare(options);
            }
        }
        catch (error) {
            return Promise.reject(error);
        }
        var httpPipeline = this._httpClient;
        if (this._requestPolicyFactories && this._requestPolicyFactories.length > 0) {
            for (var i = this._requestPolicyFactories.length - 1; i >= 0; --i) {
                httpPipeline = this._requestPolicyFactories[i].create(httpPipeline, this._requestPolicyOptions);
            }
        }
        return httpPipeline.sendRequest(httpRequest);
    };
    /**
     * Send an HTTP request that is populated using the provided OperationSpec.
     * @param operationArguments - The arguments that the HTTP request's templated values will be populated from.
     * @param operationSpec - The OperationSpec to use to populate the httpRequest.
     * @param callback - The callback to call when the response is received.
     */
    ServiceClient.prototype.sendOperationRequest = function (operationArguments, operationSpec, callback) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function () {
            var serializerOptions, httpRequest, result, baseUri, requestUrl, _i, _b, urlParameter, urlParameterValue, _c, _d, queryParameter, queryParameterValue, index, item, index, contentType, _e, _f, headerParameter, headerValue, headerCollectionPrefix, _g, _h, key, options, customHeaderName, rawResponse, sendRequestError, error_1, error_2, cb;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (typeof operationArguments.options === "function") {
                            callback = operationArguments.options;
                            operationArguments.options = undefined;
                        }
                        serializerOptions = (_a = operationArguments.options) === null || _a === void 0 ? void 0 : _a.serializerOptions;
                        httpRequest = new _webResource__WEBPACK_IMPORTED_MODULE_6__.WebResource();
                        _j.label = 1;
                    case 1:
                        _j.trys.push([1, 6, , 7]);
                        baseUri = operationSpec.baseUrl || this.baseUri;
                        if (!baseUri) {
                            throw new Error("If operationSpec.baseUrl is not specified, then the ServiceClient must have a baseUri string property that contains the base URL to use.");
                        }
                        httpRequest.method = operationSpec.httpMethod;
                        httpRequest.operationSpec = operationSpec;
                        requestUrl = _url__WEBPACK_IMPORTED_MODULE_8__.URLBuilder.parse(baseUri);
                        if (operationSpec.path) {
                            requestUrl.appendPath(operationSpec.path);
                        }
                        if (operationSpec.urlParameters && operationSpec.urlParameters.length > 0) {
                            for (_i = 0, _b = operationSpec.urlParameters; _i < _b.length; _i++) {
                                urlParameter = _b[_i];
                                urlParameterValue = getOperationArgumentValueFromParameter(this, operationArguments, urlParameter, operationSpec.serializer);
                                urlParameterValue = operationSpec.serializer.serialize(urlParameter.mapper, urlParameterValue, (0,_operationParameter__WEBPACK_IMPORTED_MODULE_9__.getPathStringFromParameter)(urlParameter), serializerOptions);
                                if (!urlParameter.skipEncoding) {
                                    urlParameterValue = encodeURIComponent(urlParameterValue);
                                }
                                requestUrl.replaceAll("{" + (urlParameter.mapper.serializedName || (0,_operationParameter__WEBPACK_IMPORTED_MODULE_9__.getPathStringFromParameter)(urlParameter)) + "}", urlParameterValue);
                            }
                        }
                        if (operationSpec.queryParameters && operationSpec.queryParameters.length > 0) {
                            for (_c = 0, _d = operationSpec.queryParameters; _c < _d.length; _c++) {
                                queryParameter = _d[_c];
                                queryParameterValue = getOperationArgumentValueFromParameter(this, operationArguments, queryParameter, operationSpec.serializer);
                                if (queryParameterValue !== undefined && queryParameterValue !== null) {
                                    queryParameterValue = operationSpec.serializer.serialize(queryParameter.mapper, queryParameterValue, (0,_operationParameter__WEBPACK_IMPORTED_MODULE_9__.getPathStringFromParameter)(queryParameter), serializerOptions);
                                    if (queryParameter.collectionFormat !== undefined &&
                                        queryParameter.collectionFormat !== null) {
                                        if (queryParameter.collectionFormat === _queryCollectionFormat__WEBPACK_IMPORTED_MODULE_10__.QueryCollectionFormat.Multi) {
                                            if (queryParameterValue.length === 0) {
                                                // The collection is empty, no need to try serializing the current queryParam
                                                continue;
                                            }
                                            else {
                                                for (index in queryParameterValue) {
                                                    item = queryParameterValue[index];
                                                    queryParameterValue[index] =
                                                        item === undefined || item === null ? "" : item.toString();
                                                }
                                            }
                                        }
                                        else if (queryParameter.collectionFormat === _queryCollectionFormat__WEBPACK_IMPORTED_MODULE_10__.QueryCollectionFormat.Ssv ||
                                            queryParameter.collectionFormat === _queryCollectionFormat__WEBPACK_IMPORTED_MODULE_10__.QueryCollectionFormat.Tsv) {
                                            queryParameterValue = queryParameterValue.join(queryParameter.collectionFormat);
                                        }
                                    }
                                    if (!queryParameter.skipEncoding) {
                                        if (Array.isArray(queryParameterValue)) {
                                            for (index in queryParameterValue) {
                                                if (queryParameterValue[index] !== undefined &&
                                                    queryParameterValue[index] !== null) {
                                                    queryParameterValue[index] = encodeURIComponent(queryParameterValue[index]);
                                                }
                                            }
                                        }
                                        else {
                                            queryParameterValue = encodeURIComponent(queryParameterValue);
                                        }
                                    }
                                    if (queryParameter.collectionFormat !== undefined &&
                                        queryParameter.collectionFormat !== null &&
                                        queryParameter.collectionFormat !== _queryCollectionFormat__WEBPACK_IMPORTED_MODULE_10__.QueryCollectionFormat.Multi &&
                                        queryParameter.collectionFormat !== _queryCollectionFormat__WEBPACK_IMPORTED_MODULE_10__.QueryCollectionFormat.Ssv &&
                                        queryParameter.collectionFormat !== _queryCollectionFormat__WEBPACK_IMPORTED_MODULE_10__.QueryCollectionFormat.Tsv) {
                                        queryParameterValue = queryParameterValue.join(queryParameter.collectionFormat);
                                    }
                                    requestUrl.setQueryParameter(queryParameter.mapper.serializedName || (0,_operationParameter__WEBPACK_IMPORTED_MODULE_9__.getPathStringFromParameter)(queryParameter), queryParameterValue);
                                }
                            }
                        }
                        httpRequest.url = requestUrl.toString();
                        contentType = operationSpec.contentType || this.requestContentType;
                        if (contentType && operationSpec.requestBody) {
                            httpRequest.headers.set("Content-Type", contentType);
                        }
                        if (operationSpec.headerParameters) {
                            for (_e = 0, _f = operationSpec.headerParameters; _e < _f.length; _e++) {
                                headerParameter = _f[_e];
                                headerValue = getOperationArgumentValueFromParameter(this, operationArguments, headerParameter, operationSpec.serializer);
                                if (headerValue !== undefined && headerValue !== null) {
                                    headerValue = operationSpec.serializer.serialize(headerParameter.mapper, headerValue, (0,_operationParameter__WEBPACK_IMPORTED_MODULE_9__.getPathStringFromParameter)(headerParameter), serializerOptions);
                                    headerCollectionPrefix = headerParameter.mapper
                                        .headerCollectionPrefix;
                                    if (headerCollectionPrefix) {
                                        for (_g = 0, _h = Object.keys(headerValue); _g < _h.length; _g++) {
                                            key = _h[_g];
                                            httpRequest.headers.set(headerCollectionPrefix + key, headerValue[key]);
                                        }
                                    }
                                    else {
                                        httpRequest.headers.set(headerParameter.mapper.serializedName ||
                                            (0,_operationParameter__WEBPACK_IMPORTED_MODULE_9__.getPathStringFromParameter)(headerParameter), headerValue);
                                    }
                                }
                            }
                        }
                        options = operationArguments.options;
                        if (options) {
                            if (options.customHeaders) {
                                for (customHeaderName in options.customHeaders) {
                                    httpRequest.headers.set(customHeaderName, options.customHeaders[customHeaderName]);
                                }
                            }
                            if (options.abortSignal) {
                                httpRequest.abortSignal = options.abortSignal;
                            }
                            if (options.timeout) {
                                httpRequest.timeout = options.timeout;
                            }
                            if (options.onUploadProgress) {
                                httpRequest.onUploadProgress = options.onUploadProgress;
                            }
                            if (options.onDownloadProgress) {
                                httpRequest.onDownloadProgress = options.onDownloadProgress;
                            }
                            if (options.spanOptions) {
                                httpRequest.spanOptions = options.spanOptions;
                            }
                            if (options.tracingContext) {
                                httpRequest.tracingContext = options.tracingContext;
                            }
                            if (options.shouldDeserialize !== undefined && options.shouldDeserialize !== null) {
                                httpRequest.shouldDeserialize = options.shouldDeserialize;
                            }
                        }
                        httpRequest.withCredentials = this._withCredentials;
                        serializeRequestBody(this, httpRequest, operationArguments, operationSpec);
                        if (httpRequest.streamResponseStatusCodes === undefined) {
                            httpRequest.streamResponseStatusCodes = (0,_operationSpec__WEBPACK_IMPORTED_MODULE_11__.getStreamResponseStatusCodes)(operationSpec);
                        }
                        rawResponse = void 0;
                        sendRequestError = void 0;
                        _j.label = 2;
                    case 2:
                        _j.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.sendRequest(httpRequest)];
                    case 3:
                        rawResponse = _j.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _j.sent();
                        sendRequestError = error_1;
                        return [3 /*break*/, 5];
                    case 5:
                        if (sendRequestError) {
                            if (sendRequestError.response) {
                                sendRequestError.details = flattenResponse(sendRequestError.response, operationSpec.responses[sendRequestError.statusCode] ||
                                    operationSpec.responses["default"]);
                            }
                            result = Promise.reject(sendRequestError);
                        }
                        else {
                            result = Promise.resolve(flattenResponse(rawResponse, operationSpec.responses[rawResponse.status]));
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _j.sent();
                        result = Promise.reject(error_2);
                        return [3 /*break*/, 7];
                    case 7:
                        cb = callback;
                        if (cb) {
                            result
                                .then(function (res) { return cb(null, res._response.parsedBody, res._response.request, res._response); })
                                .catch(function (err) { return cb(err); });
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return ServiceClient;
}());

function serializeRequestBody(serviceClient, httpRequest, operationArguments, operationSpec) {
    var _a, _b, _c, _d, _e, _f;
    var serializerOptions = (_b = (_a = operationArguments.options) === null || _a === void 0 ? void 0 : _a.serializerOptions) !== null && _b !== void 0 ? _b : {};
    var updatedOptions = {
        rootName: (_c = serializerOptions.rootName) !== null && _c !== void 0 ? _c : "",
        includeRoot: (_d = serializerOptions.includeRoot) !== null && _d !== void 0 ? _d : false,
        xmlCharKey: (_e = serializerOptions.xmlCharKey) !== null && _e !== void 0 ? _e : _util_serializer_common__WEBPACK_IMPORTED_MODULE_12__.XML_CHARKEY
    };
    var xmlCharKey = serializerOptions.xmlCharKey;
    if (operationSpec.requestBody && operationSpec.requestBody.mapper) {
        httpRequest.body = getOperationArgumentValueFromParameter(serviceClient, operationArguments, operationSpec.requestBody, operationSpec.serializer);
        var bodyMapper = operationSpec.requestBody.mapper;
        var required = bodyMapper.required, xmlName = bodyMapper.xmlName, xmlElementName = bodyMapper.xmlElementName, serializedName = bodyMapper.serializedName, xmlNamespace = bodyMapper.xmlNamespace, xmlNamespacePrefix = bodyMapper.xmlNamespacePrefix;
        var typeName = bodyMapper.type.name;
        try {
            if ((httpRequest.body !== undefined && httpRequest.body !== null) || required) {
                var requestBodyParameterPathString = (0,_operationParameter__WEBPACK_IMPORTED_MODULE_9__.getPathStringFromParameter)(operationSpec.requestBody);
                httpRequest.body = operationSpec.serializer.serialize(bodyMapper, httpRequest.body, requestBodyParameterPathString, updatedOptions);
                var isStream = typeName === _serializer__WEBPACK_IMPORTED_MODULE_13__.MapperType.Stream;
                if (operationSpec.isXML) {
                    var xmlnsKey = xmlNamespacePrefix ? "xmlns:" + xmlNamespacePrefix : "xmlns";
                    var value = getXmlValueWithNamespace(xmlNamespace, xmlnsKey, typeName, httpRequest.body, updatedOptions);
                    if (typeName === _serializer__WEBPACK_IMPORTED_MODULE_13__.MapperType.Sequence) {
                        httpRequest.body = (0,_util_xml__WEBPACK_IMPORTED_MODULE_14__.stringifyXML)(_util_utils__WEBPACK_IMPORTED_MODULE_15__.prepareXMLRootList(value, xmlElementName || xmlName || serializedName, xmlnsKey, xmlNamespace), {
                            rootName: xmlName || serializedName,
                            xmlCharKey: xmlCharKey
                        });
                    }
                    else if (!isStream) {
                        httpRequest.body = (0,_util_xml__WEBPACK_IMPORTED_MODULE_14__.stringifyXML)(value, {
                            rootName: xmlName || serializedName,
                            xmlCharKey: xmlCharKey
                        });
                    }
                }
                else if (typeName === _serializer__WEBPACK_IMPORTED_MODULE_13__.MapperType.String &&
                    (((_f = operationSpec.contentType) === null || _f === void 0 ? void 0 : _f.match("text/plain")) || operationSpec.mediaType === "text")) {
                    // the String serializer has validated that request body is a string
                    // so just send the string.
                    return;
                }
                else if (!isStream) {
                    httpRequest.body = JSON.stringify(httpRequest.body);
                }
            }
        }
        catch (error) {
            throw new Error("Error \"" + error.message + "\" occurred in serializing the payload - " + JSON.stringify(serializedName, undefined, "  ") + ".");
        }
    }
    else if (operationSpec.formDataParameters && operationSpec.formDataParameters.length > 0) {
        httpRequest.formData = {};
        for (var _i = 0, _g = operationSpec.formDataParameters; _i < _g.length; _i++) {
            var formDataParameter = _g[_i];
            var formDataParameterValue = getOperationArgumentValueFromParameter(serviceClient, operationArguments, formDataParameter, operationSpec.serializer);
            if (formDataParameterValue !== undefined && formDataParameterValue !== null) {
                var formDataParameterPropertyName = formDataParameter.mapper.serializedName || (0,_operationParameter__WEBPACK_IMPORTED_MODULE_9__.getPathStringFromParameter)(formDataParameter);
                httpRequest.formData[formDataParameterPropertyName] = operationSpec.serializer.serialize(formDataParameter.mapper, formDataParameterValue, (0,_operationParameter__WEBPACK_IMPORTED_MODULE_9__.getPathStringFromParameter)(formDataParameter), updatedOptions);
            }
        }
    }
}
/**
 * Adds an xml namespace to the xml serialized object if needed, otherwise it just returns the value itself
 */
function getXmlValueWithNamespace(xmlNamespace, xmlnsKey, typeName, serializedValue, options) {
    var _a;
    // Composite and Sequence schemas already got their root namespace set during serialization
    // We just need to add xmlns to the other schema types
    if (xmlNamespace && !["Composite", "Sequence", "Dictionary"].includes(typeName)) {
        var result = {};
        result[options.xmlCharKey] = serializedValue;
        result[_util_serializer_common__WEBPACK_IMPORTED_MODULE_12__.XML_ATTRKEY] = (_a = {}, _a[xmlnsKey] = xmlNamespace, _a);
        return result;
    }
    return serializedValue;
}
function getValueOrFunctionResult(value, defaultValueCreator) {
    var result;
    if (typeof value === "string") {
        result = value;
    }
    else {
        result = defaultValueCreator();
        if (typeof value === "function") {
            result = value(result);
        }
    }
    return result;
}
function createDefaultRequestPolicyFactories(authPolicyFactory, options) {
    var factories = [];
    if (options.generateClientRequestIdHeader) {
        factories.push((0,_policies_generateClientRequestIdPolicy__WEBPACK_IMPORTED_MODULE_16__.generateClientRequestIdPolicy)(options.clientRequestIdHeaderName));
    }
    if (authPolicyFactory) {
        factories.push(authPolicyFactory);
    }
    var userAgentHeaderName = getValueOrFunctionResult(options.userAgentHeaderName, _policies_userAgentPolicy__WEBPACK_IMPORTED_MODULE_17__.getDefaultUserAgentHeaderName);
    var userAgentHeaderValue = getValueOrFunctionResult(options.userAgent, _policies_userAgentPolicy__WEBPACK_IMPORTED_MODULE_17__.getDefaultUserAgentValue);
    if (userAgentHeaderName && userAgentHeaderValue) {
        factories.push((0,_policies_userAgentPolicy__WEBPACK_IMPORTED_MODULE_17__.userAgentPolicy)({ key: userAgentHeaderName, value: userAgentHeaderValue }));
    }
    factories.push((0,_policies_redirectPolicy__WEBPACK_IMPORTED_MODULE_18__.redirectPolicy)());
    factories.push((0,_policies_rpRegistrationPolicy__WEBPACK_IMPORTED_MODULE_19__.rpRegistrationPolicy)(options.rpRegistrationRetryTimeout));
    if (!options.noRetryPolicy) {
        factories.push((0,_policies_exponentialRetryPolicy__WEBPACK_IMPORTED_MODULE_20__.exponentialRetryPolicy)());
        factories.push((0,_policies_systemErrorRetryPolicy__WEBPACK_IMPORTED_MODULE_21__.systemErrorRetryPolicy)());
        factories.push((0,_policies_throttlingRetryPolicy__WEBPACK_IMPORTED_MODULE_22__.throttlingRetryPolicy)());
    }
    factories.push((0,_policies_deserializationPolicy__WEBPACK_IMPORTED_MODULE_23__.deserializationPolicy)(options.deserializationContentTypes));
    if (_util_utils__WEBPACK_IMPORTED_MODULE_15__.isNode) {
        factories.push((0,_policies_proxyPolicy__WEBPACK_IMPORTED_MODULE_24__.proxyPolicy)(options.proxySettings));
    }
    factories.push((0,_policies_logPolicy__WEBPACK_IMPORTED_MODULE_25__.logPolicy)({ logger: _log__WEBPACK_IMPORTED_MODULE_2__.logger.info }));
    return factories;
}
function createPipelineFromOptions(pipelineOptions, authPolicyFactory) {
    var requestPolicyFactories = [];
    if (pipelineOptions.sendStreamingJson) {
        requestPolicyFactories.push((0,_policies_ndJsonPolicy__WEBPACK_IMPORTED_MODULE_26__.ndJsonPolicy)());
    }
    var userAgentValue = undefined;
    if (pipelineOptions.userAgentOptions && pipelineOptions.userAgentOptions.userAgentPrefix) {
        var userAgentInfo = [];
        userAgentInfo.push(pipelineOptions.userAgentOptions.userAgentPrefix);
        // Add the default user agent value if it isn't already specified
        // by the userAgentPrefix option.
        var defaultUserAgentInfo = (0,_policies_userAgentPolicy__WEBPACK_IMPORTED_MODULE_17__.getDefaultUserAgentValue)();
        if (userAgentInfo.indexOf(defaultUserAgentInfo) === -1) {
            userAgentInfo.push(defaultUserAgentInfo);
        }
        userAgentValue = userAgentInfo.join(" ");
    }
    var keepAliveOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, _policies_keepAlivePolicy__WEBPACK_IMPORTED_MODULE_27__.DefaultKeepAliveOptions), pipelineOptions.keepAliveOptions);
    var retryOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, _policies_exponentialRetryPolicy__WEBPACK_IMPORTED_MODULE_20__.DefaultRetryOptions), pipelineOptions.retryOptions);
    var redirectOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, _policies_redirectPolicy__WEBPACK_IMPORTED_MODULE_18__.DefaultRedirectOptions), pipelineOptions.redirectOptions);
    if (_util_utils__WEBPACK_IMPORTED_MODULE_15__.isNode) {
        requestPolicyFactories.push((0,_policies_proxyPolicy__WEBPACK_IMPORTED_MODULE_24__.proxyPolicy)(pipelineOptions.proxyOptions));
    }
    var deserializationOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, _policies_deserializationPolicy__WEBPACK_IMPORTED_MODULE_23__.DefaultDeserializationOptions), pipelineOptions.deserializationOptions);
    var loggingOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, pipelineOptions.loggingOptions);
    requestPolicyFactories.push((0,_policies_tracingPolicy__WEBPACK_IMPORTED_MODULE_28__.tracingPolicy)({ userAgent: userAgentValue }), (0,_policies_keepAlivePolicy__WEBPACK_IMPORTED_MODULE_27__.keepAlivePolicy)(keepAliveOptions), (0,_policies_userAgentPolicy__WEBPACK_IMPORTED_MODULE_17__.userAgentPolicy)({ value: userAgentValue }), (0,_policies_generateClientRequestIdPolicy__WEBPACK_IMPORTED_MODULE_16__.generateClientRequestIdPolicy)(), (0,_policies_deserializationPolicy__WEBPACK_IMPORTED_MODULE_23__.deserializationPolicy)(deserializationOptions.expectedContentTypes), (0,_policies_throttlingRetryPolicy__WEBPACK_IMPORTED_MODULE_22__.throttlingRetryPolicy)(), (0,_policies_systemErrorRetryPolicy__WEBPACK_IMPORTED_MODULE_21__.systemErrorRetryPolicy)(), (0,_policies_exponentialRetryPolicy__WEBPACK_IMPORTED_MODULE_20__.exponentialRetryPolicy)(retryOptions.maxRetries, retryOptions.retryDelayInMs, retryOptions.maxRetryDelayInMs));
    if (redirectOptions.handleRedirects) {
        requestPolicyFactories.push((0,_policies_redirectPolicy__WEBPACK_IMPORTED_MODULE_18__.redirectPolicy)(redirectOptions.maxRetries));
    }
    if (authPolicyFactory) {
        requestPolicyFactories.push(authPolicyFactory);
    }
    requestPolicyFactories.push((0,_policies_logPolicy__WEBPACK_IMPORTED_MODULE_25__.logPolicy)(loggingOptions));
    if (_util_utils__WEBPACK_IMPORTED_MODULE_15__.isNode && pipelineOptions.decompressResponse === false) {
        requestPolicyFactories.push((0,_policies_disableResponseDecompressionPolicy__WEBPACK_IMPORTED_MODULE_29__.disableResponseDecompressionPolicy)());
    }
    return {
        httpClient: pipelineOptions.httpClient,
        requestPolicyFactories: requestPolicyFactories
    };
}
/**
 * Get the property parent for the property at the provided path when starting with the provided
 * parent object.
 */
function getPropertyParent(parent, propertyPath) {
    if (parent && propertyPath) {
        var propertyPathLength = propertyPath.length;
        for (var i = 0; i < propertyPathLength - 1; ++i) {
            var propertyName = propertyPath[i];
            if (!parent[propertyName]) {
                parent[propertyName] = {};
            }
            parent = parent[propertyName];
        }
    }
    return parent;
}
function getOperationArgumentValueFromParameter(serviceClient, operationArguments, parameter, serializer) {
    return getOperationArgumentValueFromParameterPath(serviceClient, operationArguments, parameter.parameterPath, parameter.mapper, serializer);
}
function getOperationArgumentValueFromParameterPath(serviceClient, operationArguments, parameterPath, parameterMapper, serializer) {
    var _a;
    var value;
    if (typeof parameterPath === "string") {
        parameterPath = [parameterPath];
    }
    var serializerOptions = (_a = operationArguments.options) === null || _a === void 0 ? void 0 : _a.serializerOptions;
    if (Array.isArray(parameterPath)) {
        if (parameterPath.length > 0) {
            if (parameterMapper.isConstant) {
                value = parameterMapper.defaultValue;
            }
            else {
                var propertySearchResult = getPropertyFromParameterPath(operationArguments, parameterPath);
                if (!propertySearchResult.propertyFound) {
                    propertySearchResult = getPropertyFromParameterPath(serviceClient, parameterPath);
                }
                var useDefaultValue = false;
                if (!propertySearchResult.propertyFound) {
                    useDefaultValue =
                        parameterMapper.required ||
                            (parameterPath[0] === "options" && parameterPath.length === 2);
                }
                value = useDefaultValue ? parameterMapper.defaultValue : propertySearchResult.propertyValue;
            }
            // Serialize just for validation purposes.
            var parameterPathString = (0,_operationParameter__WEBPACK_IMPORTED_MODULE_9__.getPathStringFromParameterPath)(parameterPath, parameterMapper);
            serializer.serialize(parameterMapper, value, parameterPathString, serializerOptions);
        }
    }
    else {
        if (parameterMapper.required) {
            value = {};
        }
        for (var propertyName in parameterPath) {
            var propertyMapper = parameterMapper.type.modelProperties[propertyName];
            var propertyPath = parameterPath[propertyName];
            var propertyValue = getOperationArgumentValueFromParameterPath(serviceClient, operationArguments, propertyPath, propertyMapper, serializer);
            // Serialize just for validation purposes.
            var propertyPathString = (0,_operationParameter__WEBPACK_IMPORTED_MODULE_9__.getPathStringFromParameterPath)(propertyPath, propertyMapper);
            serializer.serialize(propertyMapper, propertyValue, propertyPathString, serializerOptions);
            if (propertyValue !== undefined && propertyValue !== null) {
                if (!value) {
                    value = {};
                }
                value[propertyName] = propertyValue;
            }
        }
    }
    return value;
}
function getPropertyFromParameterPath(parent, parameterPath) {
    var result = { propertyFound: false };
    var i = 0;
    for (; i < parameterPath.length; ++i) {
        var parameterPathPart = parameterPath[i];
        // Make sure to check inherited properties too, so don't use hasOwnProperty().
        if (parent !== undefined && parent !== null && parameterPathPart in parent) {
            parent = parent[parameterPathPart];
        }
        else {
            break;
        }
    }
    if (i === parameterPath.length) {
        result.propertyValue = parent;
        result.propertyFound = true;
    }
    return result;
}
function flattenResponse(_response, responseSpec) {
    var parsedHeaders = _response.parsedHeaders;
    var bodyMapper = responseSpec && responseSpec.bodyMapper;
    var addOperationResponse = function (obj) {
        return Object.defineProperty(obj, "_response", {
            value: _response
        });
    };
    if (bodyMapper) {
        var typeName = bodyMapper.type.name;
        if (typeName === "Stream") {
            return addOperationResponse((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, parsedHeaders), { blobBody: _response.blobBody, readableStreamBody: _response.readableStreamBody }));
        }
        var modelProperties_1 = (typeName === "Composite" && bodyMapper.type.modelProperties) || {};
        var isPageableResponse = Object.keys(modelProperties_1).some(function (k) { return modelProperties_1[k].serializedName === ""; });
        if (typeName === "Sequence" || isPageableResponse) {
            var arrayResponse = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__spreadArray)([], (_response.parsedBody || []));
            for (var _i = 0, _a = Object.keys(modelProperties_1); _i < _a.length; _i++) {
                var key = _a[_i];
                if (modelProperties_1[key].serializedName) {
                    arrayResponse[key] = _response.parsedBody[key];
                }
            }
            if (parsedHeaders) {
                for (var _b = 0, _c = Object.keys(parsedHeaders); _b < _c.length; _b++) {
                    var key = _c[_b];
                    arrayResponse[key] = parsedHeaders[key];
                }
            }
            addOperationResponse(arrayResponse);
            return arrayResponse;
        }
        if (typeName === "Composite" || typeName === "Dictionary") {
            return addOperationResponse((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, parsedHeaders), _response.parsedBody));
        }
    }
    if (bodyMapper ||
        _response.request.method === "HEAD" ||
        _util_utils__WEBPACK_IMPORTED_MODULE_15__.isPrimitiveType(_response.parsedBody)) {
        // primitive body types and HEAD booleans
        return addOperationResponse((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, parsedHeaders), { body: _response.parsedBody }));
    }
    return addOperationResponse((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, parsedHeaders), _response.parsedBody));
}
function getCredentialScopes(options, baseUri) {
    if (options === null || options === void 0 ? void 0 : options.credentialScopes) {
        var scopes = options.credentialScopes;
        return Array.isArray(scopes)
            ? scopes.map(function (scope) { return new _url__WEBPACK_IMPORTED_MODULE_30__.URL(scope).toString(); })
            : new _url__WEBPACK_IMPORTED_MODULE_30__.URL(scopes).toString();
    }
    if (baseUri) {
        return baseUri + "/.default";
    }
    return undefined;
}
//# sourceMappingURL=serviceClient.js.map

/***/ }),
/* 80 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCachedDefaultHttpClient": () => (/* binding */ getCachedDefaultHttpClient)
/* harmony export */ });
/* harmony import */ var _defaultHttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

var cachedHttpClient;
function getCachedDefaultHttpClient() {
    if (!cachedHttpClient) {
        cachedHttpClient = new _defaultHttpClient__WEBPACK_IMPORTED_MODULE_0__.XhrHttpClient();
    }
    return cachedHttpClient;
}
//# sourceMappingURL=httpClientCache.js.map

/***/ }),
/* 81 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XhrHttpClient": () => (/* binding */ XhrHttpClient),
/* harmony export */   "parseHeaders": () => (/* binding */ parseHeaders)
/* harmony export */ });
/* harmony import */ var _azure_abort_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _httpHeaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* harmony import */ var _restError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.



/**
 * A HttpClient implementation that uses XMLHttpRequest to send HTTP requests.
 */
var XhrHttpClient = /** @class */ (function () {
    function XhrHttpClient() {
    }
    XhrHttpClient.prototype.sendRequest = function (request) {
        var _a;
        var xhr = new XMLHttpRequest();
        if (request.proxySettings) {
            throw new Error("HTTP proxy is not supported in browser environment");
        }
        var abortSignal = request.abortSignal;
        if (abortSignal) {
            if (abortSignal.aborted) {
                return Promise.reject(new _azure_abort_controller__WEBPACK_IMPORTED_MODULE_0__.AbortError("The operation was aborted."));
            }
            var listener_1 = function () {
                xhr.abort();
            };
            abortSignal.addEventListener("abort", listener_1);
            xhr.addEventListener("readystatechange", function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    abortSignal.removeEventListener("abort", listener_1);
                }
            });
        }
        addProgressListener(xhr.upload, request.onUploadProgress);
        addProgressListener(xhr, request.onDownloadProgress);
        if (request.formData) {
            var formData = request.formData;
            var requestForm_1 = new FormData();
            var appendFormValue = function (key, value) {
                if (value &&
                    Object.prototype.hasOwnProperty.call(value, "value") &&
                    Object.prototype.hasOwnProperty.call(value, "options")) {
                    requestForm_1.append(key, value.value, value.options);
                }
                else {
                    requestForm_1.append(key, value);
                }
            };
            for (var _i = 0, _b = Object.keys(formData); _i < _b.length; _i++) {
                var formKey = _b[_i];
                var formValue = formData[formKey];
                if (Array.isArray(formValue)) {
                    for (var j = 0; j < formValue.length; j++) {
                        appendFormValue(formKey, formValue[j]);
                    }
                }
                else {
                    appendFormValue(formKey, formValue);
                }
            }
            request.body = requestForm_1;
            request.formData = undefined;
            var contentType = request.headers.get("Content-Type");
            if (contentType && contentType.indexOf("multipart/form-data") !== -1) {
                // browser will automatically apply a suitable content-type header
                request.headers.remove("Content-Type");
            }
        }
        xhr.open(request.method, request.url);
        xhr.timeout = request.timeout;
        xhr.withCredentials = request.withCredentials;
        for (var _c = 0, _d = request.headers.headersArray(); _c < _d.length; _c++) {
            var header = _d[_c];
            xhr.setRequestHeader(header.name, header.value);
        }
        xhr.responseType =
            ((_a = request.streamResponseStatusCodes) === null || _a === void 0 ? void 0 : _a.size) || request.streamResponseBody ? "blob" : "text";
        // tslint:disable-next-line:no-null-keyword
        xhr.send(request.body === undefined ? null : request.body);
        if (xhr.responseType === "blob") {
            return new Promise(function (resolve, reject) {
                handleBlobResponse(xhr, request, resolve, reject);
                rejectOnTerminalEvent(request, xhr, reject);
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                xhr.addEventListener("load", function () {
                    return resolve({
                        request: request,
                        status: xhr.status,
                        headers: parseHeaders(xhr),
                        bodyAsText: xhr.responseText
                    });
                });
                rejectOnTerminalEvent(request, xhr, reject);
            });
        }
    };
    return XhrHttpClient;
}());

function handleBlobResponse(xhr, request, res, rej) {
    xhr.addEventListener("readystatechange", function () {
        var _a;
        // Resolve as soon as headers are loaded
        if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
            if (request.streamResponseBody || ((_a = request.streamResponseStatusCodes) === null || _a === void 0 ? void 0 : _a.has(xhr.status))) {
                var blobBody = new Promise(function (resolve, reject) {
                    xhr.addEventListener("load", function () {
                        resolve(xhr.response);
                    });
                    rejectOnTerminalEvent(request, xhr, reject);
                });
                res({
                    request: request,
                    status: xhr.status,
                    headers: parseHeaders(xhr),
                    blobBody: blobBody
                });
            }
            else {
                xhr.addEventListener("load", function () {
                    // xhr.response is of Blob type if the request is sent with xhr.responseType === "blob"
                    // but the status code is not one of the stream response status codes,
                    // so treat it as text and convert from Blob to text
                    if (xhr.response) {
                        // Blob.text() is not supported in IE so using FileReader instead
                        var reader_1 = new FileReader();
                        reader_1.onload = function (e) {
                            var _a;
                            var text = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                            res({
                                request: request,
                                status: xhr.status,
                                headers: parseHeaders(xhr),
                                bodyAsText: text
                            });
                        };
                        reader_1.onerror = function (_e) {
                            rej(reader_1.error);
                        };
                        reader_1.readAsText(xhr.response, "UTF-8");
                    }
                    else {
                        res({
                            request: request,
                            status: xhr.status,
                            headers: parseHeaders(xhr)
                        });
                    }
                });
            }
        }
    });
}
function addProgressListener(xhr, listener) {
    if (listener) {
        xhr.addEventListener("progress", function (rawEvent) {
            return listener({
                loadedBytes: rawEvent.loaded
            });
        });
    }
}
// exported locally for testing
function parseHeaders(xhr) {
    var responseHeaders = new _httpHeaders__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    var headerLines = xhr
        .getAllResponseHeaders()
        .trim()
        .split(/[\r\n]+/);
    for (var _i = 0, headerLines_1 = headerLines; _i < headerLines_1.length; _i++) {
        var line = headerLines_1[_i];
        var index = line.indexOf(":");
        var headerName = line.slice(0, index);
        var headerValue = line.slice(index + 2);
        responseHeaders.set(headerName, headerValue);
    }
    return responseHeaders;
}
function rejectOnTerminalEvent(request, xhr, reject) {
    xhr.addEventListener("error", function () {
        return reject(new _restError__WEBPACK_IMPORTED_MODULE_2__.RestError("Failed to send request to " + request.url, _restError__WEBPACK_IMPORTED_MODULE_2__.RestError.REQUEST_SEND_ERROR, undefined, request));
    });
    var abortError = new _azure_abort_controller__WEBPACK_IMPORTED_MODULE_0__.AbortError("The operation was aborted.");
    xhr.addEventListener("abort", function () { return reject(abortError); });
    xhr.addEventListener("timeout", function () { return reject(abortError); });
}
//# sourceMappingURL=xhrHttpClient.js.map

/***/ }),
/* 82 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortError": () => (/* binding */ AbortError),
/* harmony export */   "AbortController": () => (/* binding */ AbortController)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _AbortSignal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


/**
 * This error is thrown when an asynchronous operation has been aborted.
 * Check for this error by testing the `name` that the name property of the
 * error matches `"AbortError"`.
 *
 * @example
 * ```ts
 * const controller = new AbortController();
 * controller.abort();
 * try {
 *   doAsyncWork(controller.signal)
 * } catch (e) {
 *   if (e.name === 'AbortError') {
 *     // handle abort error here.
 *   }
 * }
 * ```
 */
var AbortError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(AbortError, _super);
    function AbortError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "AbortError";
        return _this;
    }
    return AbortError;
}(Error));

/**
 * An AbortController provides an AbortSignal and the associated controls to signal
 * that an asynchronous operation should be aborted.
 *
 * @example
 * Abort an operation when another event fires
 * ```ts
 * const controller = new AbortController();
 * const signal = controller.signal;
 * doAsyncWork(signal);
 * button.addEventListener('click', () => controller.abort());
 * ```
 *
 * @example
 * Share aborter cross multiple operations in 30s
 * ```ts
 * // Upload the same data to 2 different data centers at the same time,
 * // abort another when any of them is finished
 * const controller = AbortController.withTimeout(30 * 1000);
 * doAsyncWork(controller.signal).then(controller.abort);
 * doAsyncWork(controller.signal).then(controller.abort);
 *```
 *
 * @example
 * Cascaded aborting
 * ```ts
 * // All operations can't take more than 30 seconds
 * const aborter = Aborter.timeout(30 * 1000);
 *
 * // Following 2 operations can't take more than 25 seconds
 * await doAsyncWork(aborter.withTimeout(25 * 1000));
 * await doAsyncWork(aborter.withTimeout(25 * 1000));
 * ```
 */
var AbortController = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    function AbortController(parentSignals) {
        var _this = this;
        this._signal = new _AbortSignal__WEBPACK_IMPORTED_MODULE_1__.AbortSignal();
        if (!parentSignals) {
            return;
        }
        // coerce parentSignals into an array
        if (!Array.isArray(parentSignals)) {
            // eslint-disable-next-line prefer-rest-params
            parentSignals = arguments;
        }
        for (var _i = 0, parentSignals_1 = parentSignals; _i < parentSignals_1.length; _i++) {
            var parentSignal = parentSignals_1[_i];
            // if the parent signal has already had abort() called,
            // then call abort on this signal as well.
            if (parentSignal.aborted) {
                this.abort();
            }
            else {
                // when the parent signal aborts, this signal should as well.
                parentSignal.addEventListener("abort", function () {
                    _this.abort();
                });
            }
        }
    }
    Object.defineProperty(AbortController.prototype, "signal", {
        /**
         * The AbortSignal associated with this controller that will signal aborted
         * when the abort method is called on this controller.
         *
         * @readonly
         */
        get: function () {
            return this._signal;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Signal that any operations passed this controller's associated abort signal
     * to cancel any remaining work and throw an `AbortError`.
     */
    AbortController.prototype.abort = function () {
        (0,_AbortSignal__WEBPACK_IMPORTED_MODULE_1__.abortSignal)(this._signal);
    };
    /**
     * Creates a new AbortSignal instance that will abort after the provided ms.
     * @param ms - Elapsed time in milliseconds to trigger an abort.
     */
    AbortController.timeout = function (ms) {
        var signal = new _AbortSignal__WEBPACK_IMPORTED_MODULE_1__.AbortSignal();
        var timer = setTimeout(_AbortSignal__WEBPACK_IMPORTED_MODULE_1__.abortSignal, ms, signal);
        // Prevent the active Timer from keeping the Node.js event loop active.
        if (typeof timer.unref === "function") {
            timer.unref();
        }
        return signal;
    };
    return AbortController;
}());

//# sourceMappingURL=AbortController.js.map

/***/ }),
/* 83 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortSignal": () => (/* binding */ AbortSignal),
/* harmony export */   "abortSignal": () => (/* binding */ abortSignal)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var listenersMap = new WeakMap();
var abortedMap = new WeakMap();
/**
 * An aborter instance implements AbortSignal interface, can abort HTTP requests.
 *
 * - Call AbortSignal.none to create a new AbortSignal instance that cannot be cancelled.
 * Use `AbortSignal.none` when you are required to pass a cancellation token but the operation
 * cannot or will not ever be cancelled.
 *
 * @example
 * Abort without timeout
 * ```ts
 * await doAsyncWork(AbortSignal.none);
 * ```
 */
var AbortSignal = /** @class */ (function () {
    function AbortSignal() {
        /**
         * onabort event listener.
         */
        this.onabort = null;
        listenersMap.set(this, []);
        abortedMap.set(this, false);
    }
    Object.defineProperty(AbortSignal.prototype, "aborted", {
        /**
         * Status of whether aborted or not.
         *
         * @readonly
         */
        get: function () {
            if (!abortedMap.has(this)) {
                throw new TypeError("Expected `this` to be an instance of AbortSignal.");
            }
            return abortedMap.get(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbortSignal, "none", {
        /**
         * Creates a new AbortSignal instance that will never be aborted.
         *
         * @readonly
         */
        get: function () {
            return new AbortSignal();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Added new "abort" event listener, only support "abort" event.
     *
     * @param _type - Only support "abort" event
     * @param listener - The listener to be added
     */
    AbortSignal.prototype.addEventListener = function (
    // tslint:disable-next-line:variable-name
    _type, listener) {
        if (!listenersMap.has(this)) {
            throw new TypeError("Expected `this` to be an instance of AbortSignal.");
        }
        var listeners = listenersMap.get(this);
        listeners.push(listener);
    };
    /**
     * Remove "abort" event listener, only support "abort" event.
     *
     * @param _type - Only support "abort" event
     * @param listener - The listener to be removed
     */
    AbortSignal.prototype.removeEventListener = function (
    // tslint:disable-next-line:variable-name
    _type, listener) {
        if (!listenersMap.has(this)) {
            throw new TypeError("Expected `this` to be an instance of AbortSignal.");
        }
        var listeners = listenersMap.get(this);
        var index = listeners.indexOf(listener);
        if (index > -1) {
            listeners.splice(index, 1);
        }
    };
    /**
     * Dispatches a synthetic event to the AbortSignal.
     */
    AbortSignal.prototype.dispatchEvent = function (_event) {
        throw new Error("This is a stub dispatchEvent implementation that should not be used.  It only exists for type-checking purposes.");
    };
    return AbortSignal;
}());

/**
 * Helper to trigger an abort event immediately, the onabort and all abort event listeners will be triggered.
 * Will try to trigger abort event for all linked AbortSignal nodes.
 *
 * - If there is a timeout, the timer will be cancelled.
 * - If aborted is true, nothing will happen.
 *
 * @internal
 */
// eslint-disable-next-line @azure/azure-sdk/ts-use-interface-parameters
function abortSignal(signal) {
    if (signal.aborted) {
        return;
    }
    if (signal.onabort) {
        signal.onabort.call(signal);
    }
    var listeners = listenersMap.get(signal);
    if (listeners) {
        // Create a copy of listeners so mutations to the array
        // (e.g. via removeListener calls) don't affect the listeners
        // we invoke.
        listeners.slice().forEach(function (listener) {
            listener.call(signal, { type: "abort" });
        });
    }
    abortedMap.set(signal, true);
}
//# sourceMappingURL=AbortSignal.js.map

/***/ }),
/* 84 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isHttpHeadersLike": () => (/* binding */ isHttpHeadersLike),
/* harmony export */   "HttpHeaders": () => (/* binding */ HttpHeaders)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * A collection of HttpHeaders that can be sent with a HTTP request.
 */
function getHeaderKey(headerName) {
    return headerName.toLowerCase();
}
function isHttpHeadersLike(object) {
    if (object && typeof object === "object") {
        var castObject = object;
        if (typeof castObject.rawHeaders === "function" &&
            typeof castObject.clone === "function" &&
            typeof castObject.get === "function" &&
            typeof castObject.set === "function" &&
            typeof castObject.contains === "function" &&
            typeof castObject.remove === "function" &&
            typeof castObject.headersArray === "function" &&
            typeof castObject.headerValues === "function" &&
            typeof castObject.headerNames === "function" &&
            typeof castObject.toJson === "function") {
            return true;
        }
    }
    return false;
}
/**
 * A collection of HTTP header key/value pairs.
 */
var HttpHeaders = /** @class */ (function () {
    function HttpHeaders(rawHeaders) {
        this._headersMap = {};
        if (rawHeaders) {
            for (var headerName in rawHeaders) {
                this.set(headerName, rawHeaders[headerName]);
            }
        }
    }
    /**
     * Set a header in this collection with the provided name and value. The name is
     * case-insensitive.
     * @param headerName - The name of the header to set. This value is case-insensitive.
     * @param headerValue - The value of the header to set.
     */
    HttpHeaders.prototype.set = function (headerName, headerValue) {
        this._headersMap[getHeaderKey(headerName)] = {
            name: headerName,
            value: headerValue.toString()
        };
    };
    /**
     * Get the header value for the provided header name, or undefined if no header exists in this
     * collection with the provided name.
     * @param headerName - The name of the header.
     */
    HttpHeaders.prototype.get = function (headerName) {
        var header = this._headersMap[getHeaderKey(headerName)];
        return !header ? undefined : header.value;
    };
    /**
     * Get whether or not this header collection contains a header entry for the provided header name.
     */
    HttpHeaders.prototype.contains = function (headerName) {
        return !!this._headersMap[getHeaderKey(headerName)];
    };
    /**
     * Remove the header with the provided headerName. Return whether or not the header existed and
     * was removed.
     * @param headerName - The name of the header to remove.
     */
    HttpHeaders.prototype.remove = function (headerName) {
        var result = this.contains(headerName);
        delete this._headersMap[getHeaderKey(headerName)];
        return result;
    };
    /**
     * Get the headers that are contained this collection as an object.
     */
    HttpHeaders.prototype.rawHeaders = function () {
        var result = {};
        for (var headerKey in this._headersMap) {
            var header = this._headersMap[headerKey];
            result[header.name.toLowerCase()] = header.value;
        }
        return result;
    };
    /**
     * Get the headers that are contained in this collection as an array.
     */
    HttpHeaders.prototype.headersArray = function () {
        var headers = [];
        for (var headerKey in this._headersMap) {
            headers.push(this._headersMap[headerKey]);
        }
        return headers;
    };
    /**
     * Get the header names that are contained in this collection.
     */
    HttpHeaders.prototype.headerNames = function () {
        var headerNames = [];
        var headers = this.headersArray();
        for (var i = 0; i < headers.length; ++i) {
            headerNames.push(headers[i].name);
        }
        return headerNames;
    };
    /**
     * Get the header values that are contained in this collection.
     */
    HttpHeaders.prototype.headerValues = function () {
        var headerValues = [];
        var headers = this.headersArray();
        for (var i = 0; i < headers.length; ++i) {
            headerValues.push(headers[i].value);
        }
        return headerValues;
    };
    /**
     * Get the JSON object representation of this HTTP header collection.
     */
    HttpHeaders.prototype.toJson = function () {
        return this.rawHeaders();
    };
    /**
     * Get the string representation of this HTTP header collection.
     */
    HttpHeaders.prototype.toString = function () {
        return JSON.stringify(this.toJson());
    };
    /**
     * Create a deep clone/copy of this HttpHeaders collection.
     */
    HttpHeaders.prototype.clone = function () {
        return new HttpHeaders(this.rawHeaders());
    };
    return HttpHeaders;
}());

//# sourceMappingURL=httpHeaders.js.map

/***/ }),
/* 85 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestError": () => (/* binding */ RestError)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var _util_inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);
/* harmony import */ var _util_sanitizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.



var errorSanitizer = new _util_sanitizer__WEBPACK_IMPORTED_MODULE_0__.Sanitizer();
var RestError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(RestError, _super);
    function RestError(message, code, statusCode, request, response) {
        var _this = _super.call(this, message) || this;
        _this.name = "RestError";
        _this.code = code;
        _this.statusCode = statusCode;
        _this.request = request;
        _this.response = response;
        Object.setPrototypeOf(_this, RestError.prototype);
        return _this;
    }
    /**
     * Logging method for util.inspect in Node
     */
    RestError.prototype[_util_inspect__WEBPACK_IMPORTED_MODULE_2__.custom] = function () {
        return "RestError: " + this.message + " \n " + errorSanitizer.sanitize(this);
    };
    RestError.REQUEST_SEND_ERROR = "REQUEST_SEND_ERROR";
    RestError.PARSE_ERROR = "PARSE_ERROR";
    return RestError;
}(Error));

//# sourceMappingURL=restError.js.map

/***/ }),
/* 86 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sanitizer": () => (/* binding */ Sanitizer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


var RedactedString = "REDACTED";
var defaultAllowedHeaderNames = [
    "x-ms-client-request-id",
    "x-ms-return-client-request-id",
    "x-ms-useragent",
    "x-ms-correlation-request-id",
    "x-ms-request-id",
    "client-request-id",
    "ms-cv",
    "return-client-request-id",
    "traceparent",
    "Access-Control-Allow-Credentials",
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Methods",
    "Access-Control-Allow-Origin",
    "Access-Control-Expose-Headers",
    "Access-Control-Max-Age",
    "Access-Control-Request-Headers",
    "Access-Control-Request-Method",
    "Origin",
    "Accept",
    "Cache-Control",
    "Connection",
    "Content-Length",
    "Content-Type",
    "Date",
    "ETag",
    "Expires",
    "If-Match",
    "If-Modified-Since",
    "If-None-Match",
    "If-Unmodified-Since",
    "Last-Modified",
    "Pragma",
    "Request-Id",
    "Retry-After",
    "Server",
    "Transfer-Encoding",
    "User-Agent"
];
var defaultAllowedQueryParameters = ["api-version"];
var Sanitizer = /** @class */ (function () {
    function Sanitizer(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.allowedHeaderNames, allowedHeaderNames = _c === void 0 ? [] : _c, _d = _b.allowedQueryParameters, allowedQueryParameters = _d === void 0 ? [] : _d;
        allowedHeaderNames = Array.isArray(allowedHeaderNames)
            ? defaultAllowedHeaderNames.concat(allowedHeaderNames)
            : defaultAllowedHeaderNames;
        allowedQueryParameters = Array.isArray(allowedQueryParameters)
            ? defaultAllowedQueryParameters.concat(allowedQueryParameters)
            : defaultAllowedQueryParameters;
        this.allowedHeaderNames = new Set(allowedHeaderNames.map(function (n) { return n.toLowerCase(); }));
        this.allowedQueryParameters = new Set(allowedQueryParameters.map(function (p) { return p.toLowerCase(); }));
    }
    Sanitizer.prototype.sanitize = function (obj) {
        return JSON.stringify(obj, this.replacer.bind(this), 2);
    };
    Sanitizer.prototype.replacer = function (key, value) {
        // Ensure Errors include their interesting non-enumerable members
        if (value instanceof Error) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, value), { name: value.name, message: value.message });
        }
        if (key === "_headersMap") {
            return this.sanitizeHeaders(key, value);
        }
        else if (key === "url") {
            return this.sanitizeUrl(value);
        }
        else if (key === "query") {
            return this.sanitizeQuery(value);
        }
        else if (key === "body") {
            // Don't log the request body
            return undefined;
        }
        else if (key === "response") {
            // Don't log response again
            return undefined;
        }
        else if (key === "operationSpec") {
            // When using sendOperationRequest, the request carries a massive
            // field with the autorest spec. No need to log it.
            return undefined;
        }
        return value;
    };
    Sanitizer.prototype.sanitizeHeaders = function (_, value) {
        return this.sanitizeObject(value, this.allowedHeaderNames, function (v, k) { return v[k].value; });
    };
    Sanitizer.prototype.sanitizeQuery = function (value) {
        return this.sanitizeObject(value, this.allowedQueryParameters, function (v, k) { return v[k]; });
    };
    Sanitizer.prototype.sanitizeObject = function (value, allowedKeys, accessor) {
        if (typeof value !== "object" || value === null) {
            return value;
        }
        var sanitized = {};
        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
            var k = _a[_i];
            if (allowedKeys.has(k.toLowerCase())) {
                sanitized[k] = accessor(value, k);
            }
            else {
                sanitized[k] = RedactedString;
            }
        }
        return sanitized;
    };
    Sanitizer.prototype.sanitizeUrl = function (value) {
        if (typeof value !== "string" || value === null) {
            return value;
        }
        var urlBuilder = _url__WEBPACK_IMPORTED_MODULE_1__.URLBuilder.parse(value);
        var queryString = urlBuilder.getQuery();
        if (!queryString) {
            return value;
        }
        var query = _url__WEBPACK_IMPORTED_MODULE_1__.URLQuery.parse(queryString);
        for (var _i = 0, _a = query.keys(); _i < _a.length; _i++) {
            var k = _a[_i];
            if (!this.allowedQueryParameters.has(k.toLowerCase())) {
                query.set(k, RedactedString);
            }
        }
        urlBuilder.setQuery(query.toString());
        return urlBuilder.toString();
    };
    return Sanitizer;
}());

//# sourceMappingURL=sanitizer.js.map

/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "custom": () => (/* binding */ custom)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var custom = {};
//# sourceMappingURL=inspect.browser.js.map

/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _azure_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

var logger = (0,_azure_logger__WEBPACK_IMPORTED_MODULE_0__.createClientLogger)("core-http");
//# sourceMappingURL=log.js.map

/***/ }),
/* 89 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signingPolicy": () => (/* binding */ signingPolicy),
/* harmony export */   "SigningPolicy": () => (/* binding */ SigningPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _requestPolicy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


function signingPolicy(authenticationProvider) {
    return {
        create: function (nextPolicy, options) {
            return new SigningPolicy(nextPolicy, options, authenticationProvider);
        }
    };
}
var SigningPolicy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SigningPolicy, _super);
    function SigningPolicy(nextPolicy, options, authenticationProvider) {
        var _this = _super.call(this, nextPolicy, options) || this;
        _this.authenticationProvider = authenticationProvider;
        return _this;
    }
    SigningPolicy.prototype.signRequest = function (request) {
        return this.authenticationProvider.signRequest(request);
    };
    SigningPolicy.prototype.sendRequest = function (request) {
        var _this = this;
        return this.signRequest(request).then(function (nextRequest) {
            return _this._nextPolicy.sendRequest(nextRequest);
        });
    };
    return SigningPolicy;
}(_requestPolicy__WEBPACK_IMPORTED_MODULE_1__.BaseRequestPolicy));

//# sourceMappingURL=signingPolicy.js.map

/***/ }),
/* 90 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebResourceLike": () => (/* binding */ isWebResourceLike),
/* harmony export */   "WebResource": () => (/* binding */ WebResource)
/* harmony export */ });
/* harmony import */ var _httpHeaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.



function isWebResourceLike(object) {
    if (object && typeof object === "object") {
        var castObject = object;
        if (typeof castObject.url === "string" &&
            typeof castObject.method === "string" &&
            typeof castObject.headers === "object" &&
            (0,_httpHeaders__WEBPACK_IMPORTED_MODULE_0__.isHttpHeadersLike)(castObject.headers) &&
            typeof castObject.validateRequestProperties === "function" &&
            typeof castObject.prepare === "function" &&
            typeof castObject.clone === "function") {
            return true;
        }
    }
    return false;
}
/**
 * Creates a new WebResource object.
 *
 * This class provides an abstraction over a REST call by being library / implementation agnostic and wrapping the necessary
 * properties to initiate a request.
 */
var WebResource = /** @class */ (function () {
    function WebResource(url, method, body, query, headers, streamResponseBody, withCredentials, abortSignal, timeout, onUploadProgress, onDownloadProgress, proxySettings, keepAlive, decompressResponse, streamResponseStatusCodes) {
        this.streamResponseBody = streamResponseBody;
        this.streamResponseStatusCodes = streamResponseStatusCodes;
        this.url = url || "";
        this.method = method || "GET";
        this.headers = (0,_httpHeaders__WEBPACK_IMPORTED_MODULE_0__.isHttpHeadersLike)(headers) ? headers : new _httpHeaders__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders(headers);
        this.body = body;
        this.query = query;
        this.formData = undefined;
        this.withCredentials = withCredentials || false;
        this.abortSignal = abortSignal;
        this.timeout = timeout || 0;
        this.onUploadProgress = onUploadProgress;
        this.onDownloadProgress = onDownloadProgress;
        this.proxySettings = proxySettings;
        this.keepAlive = keepAlive;
        this.decompressResponse = decompressResponse;
        this.requestId = this.headers.get("x-ms-client-request-id") || (0,_util_utils__WEBPACK_IMPORTED_MODULE_1__.generateUuid)();
    }
    /**
     * Validates that the required properties such as method, url, headers["Content-Type"],
     * headers["accept-language"] are defined. It will throw an error if one of the above
     * mentioned properties are not defined.
     */
    WebResource.prototype.validateRequestProperties = function () {
        if (!this.method) {
            throw new Error("WebResource.method is required.");
        }
        if (!this.url) {
            throw new Error("WebResource.url is required.");
        }
    };
    /**
     * Prepares the request.
     * @param options - Options to provide for preparing the request.
     * @returns Returns the prepared WebResource (HTTP Request) object that needs to be given to the request pipeline.
     */
    WebResource.prototype.prepare = function (options) {
        if (!options) {
            throw new Error("options object is required");
        }
        if (options.method === undefined ||
            options.method === null ||
            typeof options.method.valueOf() !== "string") {
            throw new Error("options.method must be a string.");
        }
        if (options.url && options.pathTemplate) {
            throw new Error("options.url and options.pathTemplate are mutually exclusive. Please provide exactly one of them.");
        }
        if ((options.pathTemplate === undefined ||
            options.pathTemplate === null ||
            typeof options.pathTemplate.valueOf() !== "string") &&
            (options.url === undefined ||
                options.url === null ||
                typeof options.url.valueOf() !== "string")) {
            throw new Error("Please provide exactly one of options.pathTemplate or options.url.");
        }
        // set the url if it is provided.
        if (options.url) {
            if (typeof options.url !== "string") {
                throw new Error('options.url must be of type "string".');
            }
            this.url = options.url;
        }
        // set the method
        if (options.method) {
            var validMethods = ["GET", "PUT", "HEAD", "DELETE", "OPTIONS", "POST", "PATCH", "TRACE"];
            if (validMethods.indexOf(options.method.toUpperCase()) === -1) {
                throw new Error('The provided method "' +
                    options.method +
                    '" is invalid. Supported HTTP methods are: ' +
                    JSON.stringify(validMethods));
            }
        }
        this.method = options.method.toUpperCase();
        // construct the url if path template is provided
        if (options.pathTemplate) {
            var pathTemplate_1 = options.pathTemplate, pathParameters_1 = options.pathParameters;
            if (typeof pathTemplate_1 !== "string") {
                throw new Error('options.pathTemplate must be of type "string".');
            }
            if (!options.baseUrl) {
                options.baseUrl = "https://management.azure.com";
            }
            var baseUrl = options.baseUrl;
            var url_1 = baseUrl +
                (baseUrl.endsWith("/") ? "" : "/") +
                (pathTemplate_1.startsWith("/") ? pathTemplate_1.slice(1) : pathTemplate_1);
            var segments = url_1.match(/({[\w-]*\s*[\w-]*})/gi);
            if (segments && segments.length) {
                if (!pathParameters_1) {
                    throw new Error("pathTemplate: " + pathTemplate_1 + " has been provided. Hence, options.pathParameters must also be provided.");
                }
                segments.forEach(function (item) {
                    var pathParamName = item.slice(1, -1);
                    var pathParam = pathParameters_1[pathParamName];
                    if (pathParam === null ||
                        pathParam === undefined ||
                        !(typeof pathParam === "string" || typeof pathParam === "object")) {
                        var stringifiedPathParameters = JSON.stringify(pathParameters_1, undefined, 2);
                        throw new Error("pathTemplate: " + pathTemplate_1 + " contains the path parameter " + pathParamName +
                            (" however, it is not present in parameters: " + stringifiedPathParameters + ".") +
                            ("The value of the path parameter can either be a \"string\" of the form { " + pathParamName + ": \"some sample value\" } or ") +
                            ("it can be an \"object\" of the form { \"" + pathParamName + "\": { value: \"some sample value\", skipUrlEncoding: true } }."));
                    }
                    if (typeof pathParam.valueOf() === "string") {
                        url_1 = url_1.replace(item, encodeURIComponent(pathParam));
                    }
                    if (typeof pathParam.valueOf() === "object") {
                        if (!pathParam.value) {
                            throw new Error("options.pathParameters[" + pathParamName + "] is of type \"object\" but it does not contain a \"value\" property.");
                        }
                        if (pathParam.skipUrlEncoding) {
                            url_1 = url_1.replace(item, pathParam.value);
                        }
                        else {
                            url_1 = url_1.replace(item, encodeURIComponent(pathParam.value));
                        }
                    }
                });
            }
            this.url = url_1;
        }
        // append query parameters to the url if they are provided. They can be provided with pathTemplate or url option.
        if (options.queryParameters) {
            var queryParameters = options.queryParameters;
            if (typeof queryParameters !== "object") {
                throw new Error("options.queryParameters must be of type object. It should be a JSON object " +
                    "of \"query-parameter-name\" as the key and the \"query-parameter-value\" as the value. " +
                    "The \"query-parameter-value\" may be fo type \"string\" or an \"object\" of the form { value: \"query-parameter-value\", skipUrlEncoding: true }.");
            }
            // append question mark if it is not present in the url
            if (this.url && this.url.indexOf("?") === -1) {
                this.url += "?";
            }
            // construct queryString
            var queryParams = [];
            // We need to populate this.query as a dictionary if the request is being used for Sway's validateRequest().
            this.query = {};
            for (var queryParamName in queryParameters) {
                var queryParam = queryParameters[queryParamName];
                if (queryParam) {
                    if (typeof queryParam === "string") {
                        queryParams.push(queryParamName + "=" + encodeURIComponent(queryParam));
                        this.query[queryParamName] = encodeURIComponent(queryParam);
                    }
                    else if (typeof queryParam === "object") {
                        if (!queryParam.value) {
                            throw new Error("options.queryParameters[" + queryParamName + "] is of type \"object\" but it does not contain a \"value\" property.");
                        }
                        if (queryParam.skipUrlEncoding) {
                            queryParams.push(queryParamName + "=" + queryParam.value);
                            this.query[queryParamName] = queryParam.value;
                        }
                        else {
                            queryParams.push(queryParamName + "=" + encodeURIComponent(queryParam.value));
                            this.query[queryParamName] = encodeURIComponent(queryParam.value);
                        }
                    }
                }
            } // end-of-for
            // append the queryString
            this.url += queryParams.join("&");
        }
        // add headers to the request if they are provided
        if (options.headers) {
            var headers = options.headers;
            for (var _i = 0, _a = Object.keys(options.headers); _i < _a.length; _i++) {
                var headerName = _a[_i];
                this.headers.set(headerName, headers[headerName]);
            }
        }
        // ensure accept-language is set correctly
        if (!this.headers.get("accept-language")) {
            this.headers.set("accept-language", "en-US");
        }
        // ensure the request-id is set correctly
        if (!this.headers.get("x-ms-client-request-id") && !options.disableClientRequestId) {
            this.headers.set("x-ms-client-request-id", this.requestId);
        }
        // default
        if (!this.headers.get("Content-Type")) {
            this.headers.set("Content-Type", "application/json; charset=utf-8");
        }
        // set the request body. request.js automatically sets the Content-Length request header, so we need not set it explicitly
        this.body = options.body;
        if (options.body !== undefined && options.body !== null) {
            // body as a stream special case. set the body as-is and check for some special request headers specific to sending a stream.
            if (options.bodyIsStream) {
                if (!this.headers.get("Transfer-Encoding")) {
                    this.headers.set("Transfer-Encoding", "chunked");
                }
                if (this.headers.get("Content-Type") !== "application/octet-stream") {
                    this.headers.set("Content-Type", "application/octet-stream");
                }
            }
            else {
                if (options.serializationMapper) {
                    this.body = new _serializer__WEBPACK_IMPORTED_MODULE_2__.Serializer(options.mappers).serialize(options.serializationMapper, options.body, "requestBody");
                }
                if (!options.disableJsonStringifyOnBody) {
                    this.body = JSON.stringify(options.body);
                }
            }
        }
        if (options.spanOptions) {
            this.spanOptions = options.spanOptions;
        }
        if (options.tracingContext) {
            this.tracingContext = options.tracingContext;
        }
        this.abortSignal = options.abortSignal;
        this.onDownloadProgress = options.onDownloadProgress;
        this.onUploadProgress = options.onUploadProgress;
        return this;
    };
    /**
     * Clone this WebResource HTTP request object.
     * @returns The clone of this WebResource HTTP request object.
     */
    WebResource.prototype.clone = function () {
        var result = new WebResource(this.url, this.method, this.body, this.query, this.headers && this.headers.clone(), this.streamResponseBody, this.withCredentials, this.abortSignal, this.timeout, this.onUploadProgress, this.onDownloadProgress, this.proxySettings, this.keepAlive, this.decompressResponse, this.streamResponseStatusCodes);
        if (this.formData) {
            result.formData = this.formData;
        }
        if (this.operationSpec) {
            result.operationSpec = this.operationSpec;
        }
        if (this.shouldDeserialize) {
            result.shouldDeserialize = this.shouldDeserialize;
        }
        if (this.operationResponseGetter) {
            result.operationResponseGetter = this.operationResponseGetter;
        }
        return result;
    };
    return WebResource;
}());

//# sourceMappingURL=webResource.js.map

/***/ }),
/* 91 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Serializer": () => (/* binding */ Serializer),
/* harmony export */   "serializeObject": () => (/* binding */ serializeObject),
/* harmony export */   "MapperType": () => (/* binding */ MapperType)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71);
/* harmony import */ var _util_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92);
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var _util_serializer_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/* eslint-disable eqeqeq */




var Serializer = /** @class */ (function () {
    function Serializer(modelMappers, isXML) {
        if (modelMappers === void 0) { modelMappers = {}; }
        this.modelMappers = modelMappers;
        this.isXML = isXML;
    }
    Serializer.prototype.validateConstraints = function (mapper, value, objectName) {
        var failValidation = function (constraintName, constraintValue) {
            throw new Error("\"" + objectName + "\" with value \"" + value + "\" should satisfy the constraint \"" + constraintName + "\": " + constraintValue + ".");
        };
        if (mapper.constraints && value != undefined) {
            var valueAsNumber = value;
            var _a = mapper.constraints, ExclusiveMaximum = _a.ExclusiveMaximum, ExclusiveMinimum = _a.ExclusiveMinimum, InclusiveMaximum = _a.InclusiveMaximum, InclusiveMinimum = _a.InclusiveMinimum, MaxItems = _a.MaxItems, MaxLength = _a.MaxLength, MinItems = _a.MinItems, MinLength = _a.MinLength, MultipleOf = _a.MultipleOf, Pattern = _a.Pattern, UniqueItems = _a.UniqueItems;
            if (ExclusiveMaximum != undefined && valueAsNumber >= ExclusiveMaximum) {
                failValidation("ExclusiveMaximum", ExclusiveMaximum);
            }
            if (ExclusiveMinimum != undefined && valueAsNumber <= ExclusiveMinimum) {
                failValidation("ExclusiveMinimum", ExclusiveMinimum);
            }
            if (InclusiveMaximum != undefined && valueAsNumber > InclusiveMaximum) {
                failValidation("InclusiveMaximum", InclusiveMaximum);
            }
            if (InclusiveMinimum != undefined && valueAsNumber < InclusiveMinimum) {
                failValidation("InclusiveMinimum", InclusiveMinimum);
            }
            var valueAsArray = value;
            if (MaxItems != undefined && valueAsArray.length > MaxItems) {
                failValidation("MaxItems", MaxItems);
            }
            if (MaxLength != undefined && valueAsArray.length > MaxLength) {
                failValidation("MaxLength", MaxLength);
            }
            if (MinItems != undefined && valueAsArray.length < MinItems) {
                failValidation("MinItems", MinItems);
            }
            if (MinLength != undefined && valueAsArray.length < MinLength) {
                failValidation("MinLength", MinLength);
            }
            if (MultipleOf != undefined && valueAsNumber % MultipleOf !== 0) {
                failValidation("MultipleOf", MultipleOf);
            }
            if (Pattern) {
                var pattern = typeof Pattern === "string" ? new RegExp(Pattern) : Pattern;
                if (typeof value !== "string" || value.match(pattern) === null) {
                    failValidation("Pattern", Pattern);
                }
            }
            if (UniqueItems &&
                valueAsArray.some(function (item, i, ar) { return ar.indexOf(item) !== i; })) {
                failValidation("UniqueItems", UniqueItems);
            }
        }
    };
    /**
     * Serialize the given object based on its metadata defined in the mapper
     *
     * @param mapper - The mapper which defines the metadata of the serializable object
     * @param object - A valid Javascript object to be serialized
     * @param objectName - Name of the serialized object
     * @param options - additional options to deserialization
     * @returns A valid serialized Javascript object
     */
    Serializer.prototype.serialize = function (mapper, object, objectName, options) {
        var _a, _b, _c;
        if (options === void 0) { options = {}; }
        var updatedOptions = {
            rootName: (_a = options.rootName) !== null && _a !== void 0 ? _a : "",
            includeRoot: (_b = options.includeRoot) !== null && _b !== void 0 ? _b : false,
            xmlCharKey: (_c = options.xmlCharKey) !== null && _c !== void 0 ? _c : _util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_CHARKEY
        };
        var payload = {};
        var mapperType = mapper.type.name;
        if (!objectName) {
            objectName = mapper.serializedName;
        }
        if (mapperType.match(/^Sequence$/i) !== null) {
            payload = [];
        }
        if (mapper.isConstant) {
            object = mapper.defaultValue;
        }
        // This table of allowed values should help explain
        // the mapper.required and mapper.nullable properties.
        // X means "neither undefined or null are allowed".
        //           || required
        //           || true      | false
        //  nullable || ==========================
        //      true || null      | undefined/null
        //     false || X         | undefined
        // undefined || X         | undefined/null
        var required = mapper.required, nullable = mapper.nullable;
        if (required && nullable && object === undefined) {
            throw new Error(objectName + " cannot be undefined.");
        }
        if (required && !nullable && object == undefined) {
            throw new Error(objectName + " cannot be null or undefined.");
        }
        if (!required && nullable === false && object === null) {
            throw new Error(objectName + " cannot be null.");
        }
        if (object == undefined) {
            payload = object;
        }
        else {
            // Validate Constraints if any
            this.validateConstraints(mapper, object, objectName);
            if (mapperType.match(/^any$/i) !== null) {
                payload = object;
            }
            else if (mapperType.match(/^(Number|String|Boolean|Object|Stream|Uuid)$/i) !== null) {
                payload = serializeBasicTypes(mapperType, objectName, object);
            }
            else if (mapperType.match(/^Enum$/i) !== null) {
                var enumMapper = mapper;
                payload = serializeEnumType(objectName, enumMapper.type.allowedValues, object);
            }
            else if (mapperType.match(/^(Date|DateTime|TimeSpan|DateTimeRfc1123|UnixTime)$/i) !== null) {
                payload = serializeDateTypes(mapperType, object, objectName);
            }
            else if (mapperType.match(/^ByteArray$/i) !== null) {
                payload = serializeByteArrayType(objectName, object);
            }
            else if (mapperType.match(/^Base64Url$/i) !== null) {
                payload = serializeBase64UrlType(objectName, object);
            }
            else if (mapperType.match(/^Sequence$/i) !== null) {
                payload = serializeSequenceType(this, mapper, object, objectName, Boolean(this.isXML), updatedOptions);
            }
            else if (mapperType.match(/^Dictionary$/i) !== null) {
                payload = serializeDictionaryType(this, mapper, object, objectName, Boolean(this.isXML), updatedOptions);
            }
            else if (mapperType.match(/^Composite$/i) !== null) {
                payload = serializeCompositeType(this, mapper, object, objectName, Boolean(this.isXML), updatedOptions);
            }
        }
        return payload;
    };
    /**
     * Deserialize the given object based on its metadata defined in the mapper
     *
     * @param mapper - The mapper which defines the metadata of the serializable object
     * @param responseBody - A valid Javascript entity to be deserialized
     * @param objectName - Name of the deserialized object
     * @param options - Controls behavior of XML parser and builder.
     * @returns A valid deserialized Javascript object
     */
    Serializer.prototype.deserialize = function (mapper, responseBody, objectName, options) {
        var _a, _b, _c;
        if (options === void 0) { options = {}; }
        var updatedOptions = {
            rootName: (_a = options.rootName) !== null && _a !== void 0 ? _a : "",
            includeRoot: (_b = options.includeRoot) !== null && _b !== void 0 ? _b : false,
            xmlCharKey: (_c = options.xmlCharKey) !== null && _c !== void 0 ? _c : _util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_CHARKEY
        };
        if (responseBody == undefined) {
            if (this.isXML && mapper.type.name === "Sequence" && !mapper.xmlIsWrapped) {
                // Edge case for empty XML non-wrapped lists. xml2js can't distinguish
                // between the list being empty versus being missing,
                // so let's do the more user-friendly thing and return an empty list.
                responseBody = [];
            }
            // specifically check for undefined as default value can be a falsey value `0, "", false, null`
            if (mapper.defaultValue !== undefined) {
                responseBody = mapper.defaultValue;
            }
            return responseBody;
        }
        var payload;
        var mapperType = mapper.type.name;
        if (!objectName) {
            objectName = mapper.serializedName;
        }
        if (mapperType.match(/^Composite$/i) !== null) {
            payload = deserializeCompositeType(this, mapper, responseBody, objectName, updatedOptions);
        }
        else {
            if (this.isXML) {
                var xmlCharKey = updatedOptions.xmlCharKey;
                var castResponseBody = responseBody;
                /**
                 * If the mapper specifies this as a non-composite type value but the responseBody contains
                 * both header ("$" i.e., XML_ATTRKEY) and body ("#" i.e., XML_CHARKEY) properties,
                 * then just reduce the responseBody value to the body ("#" i.e., XML_CHARKEY) property.
                 */
                if (castResponseBody[_util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] != undefined &&
                    castResponseBody[xmlCharKey] != undefined) {
                    responseBody = castResponseBody[xmlCharKey];
                }
            }
            if (mapperType.match(/^Number$/i) !== null) {
                payload = parseFloat(responseBody);
                if (isNaN(payload)) {
                    payload = responseBody;
                }
            }
            else if (mapperType.match(/^Boolean$/i) !== null) {
                if (responseBody === "true") {
                    payload = true;
                }
                else if (responseBody === "false") {
                    payload = false;
                }
                else {
                    payload = responseBody;
                }
            }
            else if (mapperType.match(/^(String|Enum|Object|Stream|Uuid|TimeSpan|any)$/i) !== null) {
                payload = responseBody;
            }
            else if (mapperType.match(/^(Date|DateTime|DateTimeRfc1123)$/i) !== null) {
                payload = new Date(responseBody);
            }
            else if (mapperType.match(/^UnixTime$/i) !== null) {
                payload = unixTimeToDate(responseBody);
            }
            else if (mapperType.match(/^ByteArray$/i) !== null) {
                payload = _util_base64__WEBPACK_IMPORTED_MODULE_1__.decodeString(responseBody);
            }
            else if (mapperType.match(/^Base64Url$/i) !== null) {
                payload = base64UrlToByteArray(responseBody);
            }
            else if (mapperType.match(/^Sequence$/i) !== null) {
                payload = deserializeSequenceType(this, mapper, responseBody, objectName, updatedOptions);
            }
            else if (mapperType.match(/^Dictionary$/i) !== null) {
                payload = deserializeDictionaryType(this, mapper, responseBody, objectName, updatedOptions);
            }
        }
        if (mapper.isConstant) {
            payload = mapper.defaultValue;
        }
        return payload;
    };
    return Serializer;
}());

function trimEnd(str, ch) {
    var len = str.length;
    while (len - 1 >= 0 && str[len - 1] === ch) {
        --len;
    }
    return str.substr(0, len);
}
function bufferToBase64Url(buffer) {
    if (!buffer) {
        return undefined;
    }
    if (!(buffer instanceof Uint8Array)) {
        throw new Error("Please provide an input of type Uint8Array for converting to Base64Url.");
    }
    // Uint8Array to Base64.
    var str = _util_base64__WEBPACK_IMPORTED_MODULE_1__.encodeByteArray(buffer);
    // Base64 to Base64Url.
    return trimEnd(str, "=")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
}
function base64UrlToByteArray(str) {
    if (!str) {
        return undefined;
    }
    if (str && typeof str.valueOf() !== "string") {
        throw new Error("Please provide an input of type string for converting to Uint8Array");
    }
    // Base64Url to Base64.
    str = str.replace(/-/g, "+").replace(/_/g, "/");
    // Base64 to Uint8Array.
    return _util_base64__WEBPACK_IMPORTED_MODULE_1__.decodeString(str);
}
function splitSerializeName(prop) {
    var classes = [];
    var partialclass = "";
    if (prop) {
        var subwords = prop.split(".");
        for (var _i = 0, subwords_1 = subwords; _i < subwords_1.length; _i++) {
            var item = subwords_1[_i];
            if (item.charAt(item.length - 1) === "\\") {
                partialclass += item.substr(0, item.length - 1) + ".";
            }
            else {
                partialclass += item;
                classes.push(partialclass);
                partialclass = "";
            }
        }
    }
    return classes;
}
function dateToUnixTime(d) {
    if (!d) {
        return undefined;
    }
    if (typeof d.valueOf() === "string") {
        d = new Date(d);
    }
    return Math.floor(d.getTime() / 1000);
}
function unixTimeToDate(n) {
    if (!n) {
        return undefined;
    }
    return new Date(n * 1000);
}
function serializeBasicTypes(typeName, objectName, value) {
    if (value !== null && value !== undefined) {
        if (typeName.match(/^Number$/i) !== null) {
            if (typeof value !== "number") {
                throw new Error(objectName + " with value " + value + " must be of type number.");
            }
        }
        else if (typeName.match(/^String$/i) !== null) {
            if (typeof value.valueOf() !== "string") {
                throw new Error(objectName + " with value \"" + value + "\" must be of type string.");
            }
        }
        else if (typeName.match(/^Uuid$/i) !== null) {
            if (!(typeof value.valueOf() === "string" && _util_utils__WEBPACK_IMPORTED_MODULE_2__.isValidUuid(value))) {
                throw new Error(objectName + " with value \"" + value + "\" must be of type string and a valid uuid.");
            }
        }
        else if (typeName.match(/^Boolean$/i) !== null) {
            if (typeof value !== "boolean") {
                throw new Error(objectName + " with value " + value + " must be of type boolean.");
            }
        }
        else if (typeName.match(/^Stream$/i) !== null) {
            var objectType = typeof value;
            if (objectType !== "string" &&
                objectType !== "function" &&
                !(value instanceof ArrayBuffer) &&
                !ArrayBuffer.isView(value) &&
                !((typeof Blob === "function" || typeof Blob === "object") && value instanceof Blob)) {
                throw new Error(objectName + " must be a string, Blob, ArrayBuffer, ArrayBufferView, or a function returning NodeJS.ReadableStream.");
            }
        }
    }
    return value;
}
function serializeEnumType(objectName, allowedValues, value) {
    if (!allowedValues) {
        throw new Error("Please provide a set of allowedValues to validate " + objectName + " as an Enum Type.");
    }
    var isPresent = allowedValues.some(function (item) {
        if (typeof item.valueOf() === "string") {
            return item.toLowerCase() === value.toLowerCase();
        }
        return item === value;
    });
    if (!isPresent) {
        throw new Error(value + " is not a valid value for " + objectName + ". The valid values are: " + JSON.stringify(allowedValues) + ".");
    }
    return value;
}
function serializeByteArrayType(objectName, value) {
    var returnValue = "";
    if (value != undefined) {
        if (!(value instanceof Uint8Array)) {
            throw new Error(objectName + " must be of type Uint8Array.");
        }
        returnValue = _util_base64__WEBPACK_IMPORTED_MODULE_1__.encodeByteArray(value);
    }
    return returnValue;
}
function serializeBase64UrlType(objectName, value) {
    var returnValue = "";
    if (value != undefined) {
        if (!(value instanceof Uint8Array)) {
            throw new Error(objectName + " must be of type Uint8Array.");
        }
        returnValue = bufferToBase64Url(value) || "";
    }
    return returnValue;
}
function serializeDateTypes(typeName, value, objectName) {
    if (value != undefined) {
        if (typeName.match(/^Date$/i) !== null) {
            if (!(value instanceof Date ||
                (typeof value.valueOf() === "string" && !isNaN(Date.parse(value))))) {
                throw new Error(objectName + " must be an instanceof Date or a string in ISO8601 format.");
            }
            value =
                value instanceof Date
                    ? value.toISOString().substring(0, 10)
                    : new Date(value).toISOString().substring(0, 10);
        }
        else if (typeName.match(/^DateTime$/i) !== null) {
            if (!(value instanceof Date ||
                (typeof value.valueOf() === "string" && !isNaN(Date.parse(value))))) {
                throw new Error(objectName + " must be an instanceof Date or a string in ISO8601 format.");
            }
            value = value instanceof Date ? value.toISOString() : new Date(value).toISOString();
        }
        else if (typeName.match(/^DateTimeRfc1123$/i) !== null) {
            if (!(value instanceof Date ||
                (typeof value.valueOf() === "string" && !isNaN(Date.parse(value))))) {
                throw new Error(objectName + " must be an instanceof Date or a string in RFC-1123 format.");
            }
            value = value instanceof Date ? value.toUTCString() : new Date(value).toUTCString();
        }
        else if (typeName.match(/^UnixTime$/i) !== null) {
            if (!(value instanceof Date ||
                (typeof value.valueOf() === "string" && !isNaN(Date.parse(value))))) {
                throw new Error(objectName + " must be an instanceof Date or a string in RFC-1123/ISO8601 format " +
                    "for it to be serialized in UnixTime/Epoch format.");
            }
            value = dateToUnixTime(value);
        }
        else if (typeName.match(/^TimeSpan$/i) !== null) {
            if (!_util_utils__WEBPACK_IMPORTED_MODULE_2__.isDuration(value)) {
                throw new Error(objectName + " must be a string in ISO 8601 format. Instead was \"" + value + "\".");
            }
        }
    }
    return value;
}
function serializeSequenceType(serializer, mapper, object, objectName, isXml, options) {
    var _a, _b;
    if (!Array.isArray(object)) {
        throw new Error(objectName + " must be of type Array.");
    }
    var elementType = mapper.type.element;
    if (!elementType || typeof elementType !== "object") {
        throw new Error("element\" metadata for an Array must be defined in the " +
            ("mapper and it must of type \"object\" in " + objectName + "."));
    }
    var tempArray = [];
    for (var i = 0; i < object.length; i++) {
        var serializedValue = serializer.serialize(elementType, object[i], objectName, options);
        if (isXml && elementType.xmlNamespace) {
            var xmlnsKey = elementType.xmlNamespacePrefix
                ? "xmlns:" + elementType.xmlNamespacePrefix
                : "xmlns";
            if (elementType.type.name === "Composite") {
                tempArray[i] = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, serializedValue);
                tempArray[i][_util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] = (_a = {}, _a[xmlnsKey] = elementType.xmlNamespace, _a);
            }
            else {
                tempArray[i] = {};
                tempArray[i][options.xmlCharKey] = serializedValue;
                tempArray[i][_util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] = (_b = {}, _b[xmlnsKey] = elementType.xmlNamespace, _b);
            }
        }
        else {
            tempArray[i] = serializedValue;
        }
    }
    return tempArray;
}
function serializeDictionaryType(serializer, mapper, object, objectName, isXml, options) {
    var _a;
    if (typeof object !== "object") {
        throw new Error(objectName + " must be of type object.");
    }
    var valueType = mapper.type.value;
    if (!valueType || typeof valueType !== "object") {
        throw new Error("\"value\" metadata for a Dictionary must be defined in the " +
            ("mapper and it must of type \"object\" in " + objectName + "."));
    }
    var tempDictionary = {};
    for (var _i = 0, _b = Object.keys(object); _i < _b.length; _i++) {
        var key = _b[_i];
        var serializedValue = serializer.serialize(valueType, object[key], objectName, options);
        // If the element needs an XML namespace we need to add it within the $ property
        tempDictionary[key] = getXmlObjectValue(valueType, serializedValue, isXml, options);
    }
    // Add the namespace to the root element if needed
    if (isXml && mapper.xmlNamespace) {
        var xmlnsKey = mapper.xmlNamespacePrefix ? "xmlns:" + mapper.xmlNamespacePrefix : "xmlns";
        var result = tempDictionary;
        result[_util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] = (_a = {}, _a[xmlnsKey] = mapper.xmlNamespace, _a);
        return result;
    }
    return tempDictionary;
}
/**
 * Resolves the additionalProperties property from a referenced mapper
 * @param serializer - The serializer containing the entire set of mappers
 * @param mapper - The composite mapper to resolve
 * @param objectName - Name of the object being serialized
 */
function resolveAdditionalProperties(serializer, mapper, objectName) {
    var additionalProperties = mapper.type.additionalProperties;
    if (!additionalProperties && mapper.type.className) {
        var modelMapper = resolveReferencedMapper(serializer, mapper, objectName);
        return modelMapper === null || modelMapper === void 0 ? void 0 : modelMapper.type.additionalProperties;
    }
    return additionalProperties;
}
/**
 * Finds the mapper referenced by className
 * @param serializer - The serializer containing the entire set of mappers
 * @param mapper - The composite mapper to resolve
 * @param objectName - Name of the object being serialized
 */
function resolveReferencedMapper(serializer, mapper, objectName) {
    var className = mapper.type.className;
    if (!className) {
        throw new Error("Class name for model \"" + objectName + "\" is not provided in the mapper \"" + JSON.stringify(mapper, undefined, 2) + "\".");
    }
    return serializer.modelMappers[className];
}
/**
 * Resolves a composite mapper's modelProperties.
 * @param serializer - The serializer containing the entire set of mappers
 * @param mapper - The composite mapper to resolve
 */
function resolveModelProperties(serializer, mapper, objectName) {
    var modelProps = mapper.type.modelProperties;
    if (!modelProps) {
        var modelMapper = resolveReferencedMapper(serializer, mapper, objectName);
        if (!modelMapper) {
            throw new Error("mapper() cannot be null or undefined for model \"" + mapper.type.className + "\".");
        }
        modelProps = modelMapper === null || modelMapper === void 0 ? void 0 : modelMapper.type.modelProperties;
        if (!modelProps) {
            throw new Error("modelProperties cannot be null or undefined in the " +
                ("mapper \"" + JSON.stringify(modelMapper) + "\" of type \"" + mapper.type.className + "\" for object \"" + objectName + "\"."));
        }
    }
    return modelProps;
}
function serializeCompositeType(serializer, mapper, object, objectName, isXml, options) {
    var _a, _b;
    if (getPolymorphicDiscriminatorRecursively(serializer, mapper)) {
        mapper = getPolymorphicMapper(serializer, mapper, object, "clientName");
    }
    if (object != undefined) {
        var payload = {};
        var modelProps = resolveModelProperties(serializer, mapper, objectName);
        for (var _i = 0, _c = Object.keys(modelProps); _i < _c.length; _i++) {
            var key = _c[_i];
            var propertyMapper = modelProps[key];
            if (propertyMapper.readOnly) {
                continue;
            }
            var propName = void 0;
            var parentObject = payload;
            if (serializer.isXML) {
                if (propertyMapper.xmlIsWrapped) {
                    propName = propertyMapper.xmlName;
                }
                else {
                    propName = propertyMapper.xmlElementName || propertyMapper.xmlName;
                }
            }
            else {
                var paths = splitSerializeName(propertyMapper.serializedName);
                propName = paths.pop();
                for (var _d = 0, paths_1 = paths; _d < paths_1.length; _d++) {
                    var pathName = paths_1[_d];
                    var childObject = parentObject[pathName];
                    if (childObject == undefined &&
                        (object[key] != undefined || propertyMapper.defaultValue !== undefined)) {
                        parentObject[pathName] = {};
                    }
                    parentObject = parentObject[pathName];
                }
            }
            if (parentObject != undefined) {
                if (isXml && mapper.xmlNamespace) {
                    var xmlnsKey = mapper.xmlNamespacePrefix
                        ? "xmlns:" + mapper.xmlNamespacePrefix
                        : "xmlns";
                    parentObject[_util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, parentObject[_util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY]), (_a = {}, _a[xmlnsKey] = mapper.xmlNamespace, _a));
                }
                var propertyObjectName = propertyMapper.serializedName !== ""
                    ? objectName + "." + propertyMapper.serializedName
                    : objectName;
                var toSerialize = object[key];
                var polymorphicDiscriminator = getPolymorphicDiscriminatorRecursively(serializer, mapper);
                if (polymorphicDiscriminator &&
                    polymorphicDiscriminator.clientName === key &&
                    toSerialize == undefined) {
                    toSerialize = mapper.serializedName;
                }
                var serializedValue = serializer.serialize(propertyMapper, toSerialize, propertyObjectName, options);
                if (serializedValue !== undefined && propName != undefined) {
                    var value = getXmlObjectValue(propertyMapper, serializedValue, isXml, options);
                    if (isXml && propertyMapper.xmlIsAttribute) {
                        // XML_ATTRKEY, i.e., $ is the key attributes are kept under in xml2js.
                        // This keeps things simple while preventing name collision
                        // with names in user documents.
                        parentObject[_util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] = parentObject[_util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] || {};
                        parentObject[_util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY][propName] = serializedValue;
                    }
                    else if (isXml && propertyMapper.xmlIsWrapped) {
                        parentObject[propName] = (_b = {}, _b[propertyMapper.xmlElementName] = value, _b);
                    }
                    else {
                        parentObject[propName] = value;
                    }
                }
            }
        }
        var additionalPropertiesMapper = resolveAdditionalProperties(serializer, mapper, objectName);
        if (additionalPropertiesMapper) {
            var propNames = Object.keys(modelProps);
            var _loop_1 = function (clientPropName) {
                var isAdditionalProperty = propNames.every(function (pn) { return pn !== clientPropName; });
                if (isAdditionalProperty) {
                    payload[clientPropName] = serializer.serialize(additionalPropertiesMapper, object[clientPropName], objectName + '["' + clientPropName + '"]', options);
                }
            };
            for (var clientPropName in object) {
                _loop_1(clientPropName);
            }
        }
        return payload;
    }
    return object;
}
function getXmlObjectValue(propertyMapper, serializedValue, isXml, options) {
    var _a;
    if (!isXml || !propertyMapper.xmlNamespace) {
        return serializedValue;
    }
    var xmlnsKey = propertyMapper.xmlNamespacePrefix
        ? "xmlns:" + propertyMapper.xmlNamespacePrefix
        : "xmlns";
    var xmlNamespace = (_a = {}, _a[xmlnsKey] = propertyMapper.xmlNamespace, _a);
    if (["Composite"].includes(propertyMapper.type.name)) {
        if (serializedValue[_util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY]) {
            return serializedValue;
        }
        else {
            var result_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, serializedValue);
            result_1[_util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] = xmlNamespace;
            return result_1;
        }
    }
    var result = {};
    result[options.xmlCharKey] = serializedValue;
    result[_util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] = xmlNamespace;
    return result;
}
function isSpecialXmlProperty(propertyName, options) {
    return [_util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY, options.xmlCharKey].includes(propertyName);
}
function deserializeCompositeType(serializer, mapper, responseBody, objectName, options) {
    var _a;
    if (getPolymorphicDiscriminatorRecursively(serializer, mapper)) {
        mapper = getPolymorphicMapper(serializer, mapper, responseBody, "serializedName");
    }
    var modelProps = resolveModelProperties(serializer, mapper, objectName);
    var instance = {};
    var handledPropertyNames = [];
    for (var _i = 0, _b = Object.keys(modelProps); _i < _b.length; _i++) {
        var key = _b[_i];
        var propertyMapper = modelProps[key];
        var paths = splitSerializeName(modelProps[key].serializedName);
        handledPropertyNames.push(paths[0]);
        var serializedName = propertyMapper.serializedName, xmlName = propertyMapper.xmlName, xmlElementName = propertyMapper.xmlElementName;
        var propertyObjectName = objectName;
        if (serializedName !== "" && serializedName !== undefined) {
            propertyObjectName = objectName + "." + serializedName;
        }
        var headerCollectionPrefix = propertyMapper.headerCollectionPrefix;
        if (headerCollectionPrefix) {
            var dictionary = {};
            for (var _c = 0, _d = Object.keys(responseBody); _c < _d.length; _c++) {
                var headerKey = _d[_c];
                if (headerKey.startsWith(headerCollectionPrefix)) {
                    dictionary[headerKey.substring(headerCollectionPrefix.length)] = serializer.deserialize(propertyMapper.type.value, responseBody[headerKey], propertyObjectName, options);
                }
                handledPropertyNames.push(headerKey);
            }
            instance[key] = dictionary;
        }
        else if (serializer.isXML) {
            if (propertyMapper.xmlIsAttribute && responseBody[_util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY]) {
                instance[key] = serializer.deserialize(propertyMapper, responseBody[_util_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY][xmlName], propertyObjectName, options);
            }
            else {
                var propertyName = xmlElementName || xmlName || serializedName;
                if (propertyMapper.xmlIsWrapped) {
                    /* a list of <xmlElementName> wrapped by <xmlName>
                      For the xml example below
                        <Cors>
                          <CorsRule>...</CorsRule>
                          <CorsRule>...</CorsRule>
                        </Cors>
                      the responseBody has
                        {
                          Cors: {
                            CorsRule: [{...}, {...}]
                          }
                        }
                      xmlName is "Cors" and xmlElementName is"CorsRule".
                    */
                    var wrapped = responseBody[xmlName];
                    var elementList = (_a = wrapped === null || wrapped === void 0 ? void 0 : wrapped[xmlElementName]) !== null && _a !== void 0 ? _a : [];
                    instance[key] = serializer.deserialize(propertyMapper, elementList, propertyObjectName, options);
                }
                else {
                    var property = responseBody[propertyName];
                    instance[key] = serializer.deserialize(propertyMapper, property, propertyObjectName, options);
                }
            }
        }
        else {
            // deserialize the property if it is present in the provided responseBody instance
            var propertyInstance = void 0;
            var res = responseBody;
            // traversing the object step by step.
            for (var _e = 0, paths_2 = paths; _e < paths_2.length; _e++) {
                var item = paths_2[_e];
                if (!res)
                    break;
                res = res[item];
            }
            propertyInstance = res;
            var polymorphicDiscriminator = mapper.type.polymorphicDiscriminator;
            // checking that the model property name (key)(ex: "fishtype") and the
            // clientName of the polymorphicDiscriminator {metadata} (ex: "fishtype")
            // instead of the serializedName of the polymorphicDiscriminator (ex: "fish.type")
            // is a better approach. The generator is not consistent with escaping '\.' in the
            // serializedName of the property (ex: "fish\.type") that is marked as polymorphic discriminator
            // and the serializedName of the metadata polymorphicDiscriminator (ex: "fish.type"). However,
            // the clientName transformation of the polymorphicDiscriminator (ex: "fishtype") and
            // the transformation of model property name (ex: "fishtype") is done consistently.
            // Hence, it is a safer bet to rely on the clientName of the polymorphicDiscriminator.
            if (polymorphicDiscriminator &&
                key === polymorphicDiscriminator.clientName &&
                propertyInstance == undefined) {
                propertyInstance = mapper.serializedName;
            }
            var serializedValue = void 0;
            // paging
            if (Array.isArray(responseBody[key]) && modelProps[key].serializedName === "") {
                propertyInstance = responseBody[key];
                instance = serializer.deserialize(propertyMapper, propertyInstance, propertyObjectName, options);
            }
            else if (propertyInstance !== undefined || propertyMapper.defaultValue !== undefined) {
                serializedValue = serializer.deserialize(propertyMapper, propertyInstance, propertyObjectName, options);
                instance[key] = serializedValue;
            }
        }
    }
    var additionalPropertiesMapper = mapper.type.additionalProperties;
    if (additionalPropertiesMapper) {
        var isAdditionalProperty = function (responsePropName) {
            for (var clientPropName in modelProps) {
                var paths = splitSerializeName(modelProps[clientPropName].serializedName);
                if (paths[0] === responsePropName) {
                    return false;
                }
            }
            return true;
        };
        for (var responsePropName in responseBody) {
            if (isAdditionalProperty(responsePropName)) {
                instance[responsePropName] = serializer.deserialize(additionalPropertiesMapper, responseBody[responsePropName], objectName + '["' + responsePropName + '"]', options);
            }
        }
    }
    else if (responseBody) {
        for (var _f = 0, _g = Object.keys(responseBody); _f < _g.length; _f++) {
            var key = _g[_f];
            if (instance[key] === undefined &&
                !handledPropertyNames.includes(key) &&
                !isSpecialXmlProperty(key, options)) {
                instance[key] = responseBody[key];
            }
        }
    }
    return instance;
}
function deserializeDictionaryType(serializer, mapper, responseBody, objectName, options) {
    var value = mapper.type.value;
    if (!value || typeof value !== "object") {
        throw new Error("\"value\" metadata for a Dictionary must be defined in the " +
            ("mapper and it must of type \"object\" in " + objectName));
    }
    if (responseBody) {
        var tempDictionary = {};
        for (var _i = 0, _a = Object.keys(responseBody); _i < _a.length; _i++) {
            var key = _a[_i];
            tempDictionary[key] = serializer.deserialize(value, responseBody[key], objectName, options);
        }
        return tempDictionary;
    }
    return responseBody;
}
function deserializeSequenceType(serializer, mapper, responseBody, objectName, options) {
    var element = mapper.type.element;
    if (!element || typeof element !== "object") {
        throw new Error("element\" metadata for an Array must be defined in the " +
            ("mapper and it must of type \"object\" in " + objectName));
    }
    if (responseBody) {
        if (!Array.isArray(responseBody)) {
            // xml2js will interpret a single element array as just the element, so force it to be an array
            responseBody = [responseBody];
        }
        var tempArray = [];
        for (var i = 0; i < responseBody.length; i++) {
            tempArray[i] = serializer.deserialize(element, responseBody[i], objectName + "[" + i + "]", options);
        }
        return tempArray;
    }
    return responseBody;
}
function getPolymorphicMapper(serializer, mapper, object, polymorphicPropertyName) {
    var polymorphicDiscriminator = getPolymorphicDiscriminatorRecursively(serializer, mapper);
    if (polymorphicDiscriminator) {
        var discriminatorName = polymorphicDiscriminator[polymorphicPropertyName];
        if (discriminatorName != undefined) {
            var discriminatorValue = object[discriminatorName];
            if (discriminatorValue != undefined) {
                var typeName = mapper.type.uberParent || mapper.type.className;
                var indexDiscriminator = discriminatorValue === typeName
                    ? discriminatorValue
                    : typeName + "." + discriminatorValue;
                var polymorphicMapper = serializer.modelMappers.discriminators[indexDiscriminator];
                if (polymorphicMapper) {
                    mapper = polymorphicMapper;
                }
            }
        }
    }
    return mapper;
}
function getPolymorphicDiscriminatorRecursively(serializer, mapper) {
    return (mapper.type.polymorphicDiscriminator ||
        getPolymorphicDiscriminatorSafely(serializer, mapper.type.uberParent) ||
        getPolymorphicDiscriminatorSafely(serializer, mapper.type.className));
}
function getPolymorphicDiscriminatorSafely(serializer, typeName) {
    return (typeName &&
        serializer.modelMappers[typeName] &&
        serializer.modelMappers[typeName].type.polymorphicDiscriminator);
}
// TODO: why is this here?
function serializeObject(toSerialize) {
    var castToSerialize = toSerialize;
    if (toSerialize == undefined)
        return undefined;
    if (toSerialize instanceof Uint8Array) {
        toSerialize = _util_base64__WEBPACK_IMPORTED_MODULE_1__.encodeByteArray(toSerialize);
        return toSerialize;
    }
    else if (toSerialize instanceof Date) {
        return toSerialize.toISOString();
    }
    else if (Array.isArray(toSerialize)) {
        var array = [];
        for (var i = 0; i < toSerialize.length; i++) {
            array.push(serializeObject(toSerialize[i]));
        }
        return array;
    }
    else if (typeof toSerialize === "object") {
        var dictionary = {};
        for (var property in toSerialize) {
            dictionary[property] = serializeObject(castToSerialize[property]);
        }
        return dictionary;
    }
    return toSerialize;
}
/**
 * Utility function to create a K:V from a list of strings
 */
function strEnum(o) {
    var result = {};
    for (var _i = 0, o_1 = o; _i < o_1.length; _i++) {
        var key = o_1[_i];
        result[key] = key;
    }
    return result;
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
var MapperType = strEnum([
    "Base64Url",
    "Boolean",
    "ByteArray",
    "Composite",
    "Date",
    "DateTime",
    "DateTimeRfc1123",
    "Dictionary",
    "Enum",
    "Number",
    "Object",
    "Sequence",
    "String",
    "Stream",
    "TimeSpan",
    "UnixTime"
]);
//# sourceMappingURL=serializer.js.map

/***/ }),
/* 92 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeString": () => (/* binding */ encodeString),
/* harmony export */   "encodeByteArray": () => (/* binding */ encodeByteArray),
/* harmony export */   "decodeString": () => (/* binding */ decodeString)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * Encodes a string in base64 format.
 * @param value - The string to encode
 */
function encodeString(value) {
    return btoa(value);
}
/**
 * Encodes a byte array in base64 format.
 * @param value - The Uint8Aray to encode
 */
function encodeByteArray(value) {
    var str = "";
    for (var i = 0; i < value.length; i++) {
        str += String.fromCharCode(value[i]);
    }
    return btoa(str);
}
/**
 * Decodes a base64 string into a byte array.
 * @param value - The base64 string to decode
 */
function decodeString(value) {
    var byteString = atob(value);
    var arr = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        arr[i] = byteString.charCodeAt(i);
    }
    return arr;
}
//# sourceMappingURL=base64.browser.js.map

/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPathStringFromParameter": () => (/* binding */ getPathStringFromParameter),
/* harmony export */   "getPathStringFromParameterPath": () => (/* binding */ getPathStringFromParameterPath)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * Get the path to this parameter's value as a dotted string (a.b.c).
 * @param parameter - The parameter to get the path string for.
 * @returns The path to this parameter's value as a dotted string.
 */
function getPathStringFromParameter(parameter) {
    return getPathStringFromParameterPath(parameter.parameterPath, parameter.mapper);
}
function getPathStringFromParameterPath(parameterPath, mapper) {
    var result;
    if (typeof parameterPath === "string") {
        result = parameterPath;
    }
    else if (Array.isArray(parameterPath)) {
        result = parameterPath.join(".");
    }
    else {
        result = mapper.serializedName;
    }
    return result;
}
//# sourceMappingURL=operationParameter.js.map

/***/ }),
/* 94 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryCollectionFormat": () => (/* binding */ QueryCollectionFormat)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * The format that will be used to join an array of values together for a query parameter value.
 */
var QueryCollectionFormat;
(function (QueryCollectionFormat) {
    QueryCollectionFormat["Csv"] = ",";
    QueryCollectionFormat["Ssv"] = " ";
    QueryCollectionFormat["Tsv"] = "\t";
    QueryCollectionFormat["Pipes"] = "|";
    QueryCollectionFormat["Multi"] = "Multi";
})(QueryCollectionFormat || (QueryCollectionFormat = {}));
//# sourceMappingURL=queryCollectionFormat.js.map

/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStreamResponseStatusCodes": () => (/* binding */ getStreamResponseStatusCodes)
/* harmony export */ });
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Gets the list of status codes for streaming responses.
 * @internal
 */
function getStreamResponseStatusCodes(operationSpec) {
    var result = new Set();
    for (var statusCode in operationSpec.responses) {
        var operationResponse = operationSpec.responses[statusCode];
        if (operationResponse.bodyMapper &&
            operationResponse.bodyMapper.type.name === _serializer__WEBPACK_IMPORTED_MODULE_0__.MapperType.Stream) {
            result.add(Number(statusCode));
        }
    }
    return result;
}
//# sourceMappingURL=operationSpec.js.map

/***/ }),
/* 96 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseXML": () => (/* binding */ parseXML),
/* harmony export */   "stringifyXML": () => (/* binding */ stringifyXML)
/* harmony export */ });
/* harmony import */ var _serializer_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// tslint:disable-next-line:no-null-keyword
var doc = document.implementation.createDocument(null, null, null);
var parser = new DOMParser();
function parseXML(str, opts) {
    var _a, _b, _c;
    if (opts === void 0) { opts = {}; }
    try {
        var updatedOptions = {
            rootName: (_a = opts.rootName) !== null && _a !== void 0 ? _a : "",
            includeRoot: (_b = opts.includeRoot) !== null && _b !== void 0 ? _b : false,
            xmlCharKey: (_c = opts.xmlCharKey) !== null && _c !== void 0 ? _c : _serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_CHARKEY
        };
        var dom = parser.parseFromString(str, "application/xml");
        throwIfError(dom);
        var obj = void 0;
        if (updatedOptions.includeRoot) {
            obj = domToObject(dom, updatedOptions);
        }
        else {
            obj = domToObject(dom.childNodes[0], updatedOptions);
        }
        return Promise.resolve(obj);
    }
    catch (err) {
        return Promise.reject(err);
    }
}
var errorNS;
function getErrorNamespace() {
    var _a;
    if (errorNS === undefined) {
        try {
            errorNS =
                (_a = parser.parseFromString("INVALID", "text/xml").getElementsByTagName("parsererror")[0]
                    .namespaceURI) !== null && _a !== void 0 ? _a : "";
        }
        catch (ignored) {
            // Most browsers will return a document containing <parsererror>, but IE will throw.
            errorNS = "";
        }
    }
    return errorNS;
}
function throwIfError(dom) {
    var parserErrors = dom.getElementsByTagName("parsererror");
    if (parserErrors.length > 0 && getErrorNamespace()) {
        for (var i = 0; i < parserErrors.length; i++) {
            if (parserErrors[i].namespaceURI === errorNS) {
                throw new Error(parserErrors[i].innerHTML);
            }
        }
    }
}
function isElement(node) {
    return !!node.attributes;
}
/**
 * Get the Element-typed version of the provided Node if the provided node is an element with
 * attributes. If it isn't, then undefined is returned.
 */
function asElementWithAttributes(node) {
    return isElement(node) && node.hasAttributes() ? node : undefined;
}
function domToObject(node, options) {
    var result = {};
    var childNodeCount = node.childNodes.length;
    var firstChildNode = node.childNodes[0];
    var onlyChildTextValue = (firstChildNode &&
        childNodeCount === 1 &&
        firstChildNode.nodeType === Node.TEXT_NODE &&
        firstChildNode.nodeValue) ||
        undefined;
    var elementWithAttributes = asElementWithAttributes(node);
    if (elementWithAttributes) {
        result[_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] = {};
        for (var i = 0; i < elementWithAttributes.attributes.length; i++) {
            var attr = elementWithAttributes.attributes[i];
            result[_serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY][attr.nodeName] = attr.nodeValue;
        }
        if (onlyChildTextValue) {
            result[options.xmlCharKey] = onlyChildTextValue;
        }
    }
    else if (childNodeCount === 0) {
        result = "";
    }
    else if (onlyChildTextValue) {
        result = onlyChildTextValue;
    }
    if (!onlyChildTextValue) {
        for (var i = 0; i < childNodeCount; i++) {
            var child = node.childNodes[i];
            // Ignore leading/trailing whitespace nodes
            if (child.nodeType !== Node.TEXT_NODE) {
                var childObject = domToObject(child, options);
                if (!result[child.nodeName]) {
                    result[child.nodeName] = childObject;
                }
                else if (Array.isArray(result[child.nodeName])) {
                    result[child.nodeName].push(childObject);
                }
                else {
                    result[child.nodeName] = [result[child.nodeName], childObject];
                }
            }
        }
    }
    return result;
}
var serializer = new XMLSerializer();
function stringifyXML(content, opts) {
    var _a, _b, _c;
    if (opts === void 0) { opts = {}; }
    var updatedOptions = {
        rootName: (_a = opts.rootName) !== null && _a !== void 0 ? _a : "root",
        includeRoot: (_b = opts.includeRoot) !== null && _b !== void 0 ? _b : false,
        xmlCharKey: (_c = opts.xmlCharKey) !== null && _c !== void 0 ? _c : _serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_CHARKEY
    };
    var dom = buildNode(content, updatedOptions.rootName, updatedOptions)[0];
    return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + serializer.serializeToString(dom));
}
function buildAttributes(attrs) {
    var result = [];
    for (var _i = 0, _a = Object.keys(attrs); _i < _a.length; _i++) {
        var key = _a[_i];
        var attr = doc.createAttribute(key);
        attr.value = attrs[key].toString();
        result.push(attr);
    }
    return result;
}
function buildNode(obj, elementName, options) {
    if (obj === undefined ||
        obj === null ||
        typeof obj === "string" ||
        typeof obj === "number" ||
        typeof obj === "boolean") {
        var elem = doc.createElement(elementName);
        elem.textContent = obj === undefined || obj === null ? "" : obj.toString();
        return [elem];
    }
    else if (Array.isArray(obj)) {
        var result = [];
        for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
            var arrayElem = obj_1[_i];
            for (var _a = 0, _b = buildNode(arrayElem, elementName, options); _a < _b.length; _a++) {
                var child = _b[_a];
                result.push(child);
            }
        }
        return result;
    }
    else if (typeof obj === "object") {
        var elem = doc.createElement(elementName);
        for (var _c = 0, _d = Object.keys(obj); _c < _d.length; _c++) {
            var key = _d[_c];
            if (key === _serializer_common__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY) {
                for (var _e = 0, _f = buildAttributes(obj[key]); _e < _f.length; _e++) {
                    var attr = _f[_e];
                    elem.attributes.setNamedItem(attr);
                }
            }
            else if (key === options.xmlCharKey) {
                elem.textContent = obj[key].toString();
            }
            else {
                for (var _g = 0, _h = buildNode(obj[key], key, options); _g < _h.length; _g++) {
                    var child = _h[_g];
                    elem.appendChild(child);
                }
            }
        }
        return [elem];
    }
    else {
        throw new Error("Illegal value passed to buildObject: " + obj);
    }
}
//# sourceMappingURL=xml.browser.js.map

/***/ }),
/* 97 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateClientRequestIdPolicy": () => (/* binding */ generateClientRequestIdPolicy),
/* harmony export */   "GenerateClientRequestIdPolicy": () => (/* binding */ GenerateClientRequestIdPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _requestPolicy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


function generateClientRequestIdPolicy(requestIdHeaderName) {
    if (requestIdHeaderName === void 0) { requestIdHeaderName = "x-ms-client-request-id"; }
    return {
        create: function (nextPolicy, options) {
            return new GenerateClientRequestIdPolicy(nextPolicy, options, requestIdHeaderName);
        }
    };
}
var GenerateClientRequestIdPolicy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(GenerateClientRequestIdPolicy, _super);
    function GenerateClientRequestIdPolicy(nextPolicy, options, _requestIdHeaderName) {
        var _this = _super.call(this, nextPolicy, options) || this;
        _this._requestIdHeaderName = _requestIdHeaderName;
        return _this;
    }
    GenerateClientRequestIdPolicy.prototype.sendRequest = function (request) {
        if (!request.headers.contains(this._requestIdHeaderName)) {
            request.headers.set(this._requestIdHeaderName, request.requestId);
        }
        return this._nextPolicy.sendRequest(request);
    };
    return GenerateClientRequestIdPolicy;
}(_requestPolicy__WEBPACK_IMPORTED_MODULE_1__.BaseRequestPolicy));

//# sourceMappingURL=generateClientRequestIdPolicy.js.map

/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultUserAgentHeaderName": () => (/* binding */ getDefaultUserAgentHeaderName),
/* harmony export */   "getDefaultUserAgentValue": () => (/* binding */ getDefaultUserAgentValue),
/* harmony export */   "userAgentPolicy": () => (/* binding */ userAgentPolicy),
/* harmony export */   "UserAgentPolicy": () => (/* binding */ UserAgentPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);
/* harmony import */ var _httpHeaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84);
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _msRestUserAgentPolicy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);
/* harmony import */ var _requestPolicy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.





function getRuntimeInfo() {
    var msRestRuntime = {
        key: "core-http",
        value: _util_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.coreHttpVersion
    };
    return [msRestRuntime];
}
function getUserAgentString(telemetryInfo, keySeparator, valueSeparator) {
    if (keySeparator === void 0) { keySeparator = " "; }
    if (valueSeparator === void 0) { valueSeparator = "/"; }
    return telemetryInfo
        .map(function (info) {
        var value = info.value ? "" + valueSeparator + info.value : "";
        return "" + info.key + value;
    })
        .join(keySeparator);
}
var getDefaultUserAgentHeaderName = _msRestUserAgentPolicy__WEBPACK_IMPORTED_MODULE_1__.getDefaultUserAgentKey;
function getDefaultUserAgentValue() {
    var runtimeInfo = getRuntimeInfo();
    var platformSpecificData = (0,_msRestUserAgentPolicy__WEBPACK_IMPORTED_MODULE_1__.getPlatformSpecificData)();
    var userAgent = getUserAgentString(runtimeInfo.concat(platformSpecificData));
    return userAgent;
}
function userAgentPolicy(userAgentData) {
    var key = !userAgentData || userAgentData.key === undefined || userAgentData.key === null
        ? (0,_msRestUserAgentPolicy__WEBPACK_IMPORTED_MODULE_1__.getDefaultUserAgentKey)()
        : userAgentData.key;
    var value = !userAgentData || userAgentData.value === undefined || userAgentData.value === null
        ? getDefaultUserAgentValue()
        : userAgentData.value;
    return {
        create: function (nextPolicy, options) {
            return new UserAgentPolicy(nextPolicy, options, key, value);
        }
    };
}
var UserAgentPolicy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(UserAgentPolicy, _super);
    function UserAgentPolicy(_nextPolicy, _options, headerKey, headerValue) {
        var _this = _super.call(this, _nextPolicy, _options) || this;
        _this._nextPolicy = _nextPolicy;
        _this._options = _options;
        _this.headerKey = headerKey;
        _this.headerValue = headerValue;
        return _this;
    }
    UserAgentPolicy.prototype.sendRequest = function (request) {
        this.addUserAgentHeader(request);
        return this._nextPolicy.sendRequest(request);
    };
    UserAgentPolicy.prototype.addUserAgentHeader = function (request) {
        if (!request.headers) {
            request.headers = new _httpHeaders__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        }
        if (!request.headers.get(this.headerKey) && this.headerValue) {
            request.headers.set(this.headerKey, this.headerValue);
        }
    };
    return UserAgentPolicy;
}(_requestPolicy__WEBPACK_IMPORTED_MODULE_4__.BaseRequestPolicy));

//# sourceMappingURL=userAgentPolicy.js.map

/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultUserAgentKey": () => (/* binding */ getDefaultUserAgentKey),
/* harmony export */   "getPlatformSpecificData": () => (/* binding */ getPlatformSpecificData)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
function getDefaultUserAgentKey() {
    return "x-ms-useragent";
}
function getPlatformSpecificData() {
    var navigator = self.navigator;
    var osInfo = {
        key: "OS",
        value: (navigator.oscpu || navigator.platform).replace(" ", "")
    };
    return [osInfo];
}
//# sourceMappingURL=msRestUserAgentPolicy.browser.js.map

/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultRedirectOptions": () => (/* binding */ DefaultRedirectOptions),
/* harmony export */   "redirectPolicy": () => (/* binding */ redirectPolicy),
/* harmony export */   "RedirectPolicy": () => (/* binding */ RedirectPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);
/* harmony import */ var _requestPolicy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.



/**
 * Methods that are allowed to follow redirects 301 and 302
 */
var allowedRedirect = ["GET", "HEAD"];
var DefaultRedirectOptions = {
    handleRedirects: true,
    maxRetries: 20
};
function redirectPolicy(maximumRetries) {
    if (maximumRetries === void 0) { maximumRetries = 20; }
    return {
        create: function (nextPolicy, options) {
            return new RedirectPolicy(nextPolicy, options, maximumRetries);
        }
    };
}
var RedirectPolicy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(RedirectPolicy, _super);
    function RedirectPolicy(nextPolicy, options, maxRetries) {
        if (maxRetries === void 0) { maxRetries = 20; }
        var _this = _super.call(this, nextPolicy, options) || this;
        _this.maxRetries = maxRetries;
        return _this;
    }
    RedirectPolicy.prototype.sendRequest = function (request) {
        var _this = this;
        return this._nextPolicy
            .sendRequest(request)
            .then(function (response) { return handleRedirect(_this, response, 0); });
    };
    return RedirectPolicy;
}(_requestPolicy__WEBPACK_IMPORTED_MODULE_1__.BaseRequestPolicy));

function handleRedirect(policy, response, currentRetries) {
    var request = response.request, status = response.status;
    var locationHeader = response.headers.get("location");
    if (locationHeader &&
        (status === 300 ||
            (status === 301 && allowedRedirect.includes(request.method)) ||
            (status === 302 && allowedRedirect.includes(request.method)) ||
            (status === 303 && request.method === "POST") ||
            status === 307) &&
        (!policy.maxRetries || currentRetries < policy.maxRetries)) {
        var builder = _url__WEBPACK_IMPORTED_MODULE_2__.URLBuilder.parse(request.url);
        builder.setPath(locationHeader);
        request.url = builder.toString();
        // POST request with Status code 303 should be converted into a
        // redirected GET request if the redirect url is present in the location header
        if (status === 303) {
            request.method = "GET";
            delete request.body;
        }
        return policy._nextPolicy
            .sendRequest(request)
            .then(function (res) { return handleRedirect(policy, res, currentRetries + 1); });
    }
    return Promise.resolve(response);
}
//# sourceMappingURL=redirectPolicy.js.map

/***/ }),
/* 101 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rpRegistrationPolicy": () => (/* binding */ rpRegistrationPolicy),
/* harmony export */   "RPRegistrationPolicy": () => (/* binding */ RPRegistrationPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var _requestPolicy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.



function rpRegistrationPolicy(retryTimeout) {
    if (retryTimeout === void 0) { retryTimeout = 30; }
    return {
        create: function (nextPolicy, options) {
            return new RPRegistrationPolicy(nextPolicy, options, retryTimeout);
        }
    };
}
var RPRegistrationPolicy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(RPRegistrationPolicy, _super);
    function RPRegistrationPolicy(nextPolicy, options, _retryTimeout) {
        if (_retryTimeout === void 0) { _retryTimeout = 30; }
        var _this = _super.call(this, nextPolicy, options) || this;
        _this._retryTimeout = _retryTimeout;
        return _this;
    }
    RPRegistrationPolicy.prototype.sendRequest = function (request) {
        var _this = this;
        return this._nextPolicy
            .sendRequest(request.clone())
            .then(function (response) { return registerIfNeeded(_this, request, response); });
    };
    return RPRegistrationPolicy;
}(_requestPolicy__WEBPACK_IMPORTED_MODULE_1__.BaseRequestPolicy));

function registerIfNeeded(policy, request, response) {
    if (response.status === 409) {
        var rpName = checkRPNotRegisteredError(response.bodyAsText);
        if (rpName) {
            var urlPrefix = extractSubscriptionUrl(request.url);
            return (registerRP(policy, urlPrefix, rpName, request)
                // Autoregistration of ${provider} failed for some reason. We will not return this error
                // instead will return the initial response with 409 status code back to the user.
                // do nothing here as we are returning the original response at the end of this method.
                .catch(function () { return false; })
                .then(function (registrationStatus) {
                if (registrationStatus) {
                    // Retry the original request. We have to change the x-ms-client-request-id
                    // otherwise Azure endpoint will return the initial 409 (cached) response.
                    request.headers.set("x-ms-client-request-id", _util_utils__WEBPACK_IMPORTED_MODULE_2__.generateUuid());
                    return policy._nextPolicy.sendRequest(request.clone());
                }
                return response;
            }));
        }
    }
    return Promise.resolve(response);
}
/**
 * Reuses the headers of the original request and url (if specified).
 * @param originalRequest - The original request
 * @param reuseUrlToo - Should the url from the original request be reused as well. Default false.
 * @returns A new request object with desired headers.
 */
function getRequestEssentials(originalRequest, reuseUrlToo) {
    if (reuseUrlToo === void 0) { reuseUrlToo = false; }
    var reqOptions = originalRequest.clone();
    if (reuseUrlToo) {
        reqOptions.url = originalRequest.url;
    }
    // We have to change the x-ms-client-request-id otherwise Azure endpoint
    // will return the initial 409 (cached) response.
    reqOptions.headers.set("x-ms-client-request-id", _util_utils__WEBPACK_IMPORTED_MODULE_2__.generateUuid());
    // Set content-type to application/json
    reqOptions.headers.set("Content-Type", "application/json; charset=utf-8");
    return reqOptions;
}
/**
 * Validates the error code and message associated with 409 response status code. If it matches to that of
 * RP not registered then it returns the name of the RP else returns undefined.
 * @param body - The response body received after making the original request.
 * @returns The name of the RP if condition is satisfied else undefined.
 */
function checkRPNotRegisteredError(body) {
    var result, responseBody;
    if (body) {
        try {
            responseBody = JSON.parse(body);
        }
        catch (err) {
            // do nothing;
        }
        if (responseBody &&
            responseBody.error &&
            responseBody.error.message &&
            responseBody.error.code &&
            responseBody.error.code === "MissingSubscriptionRegistration") {
            var matchRes = responseBody.error.message.match(/.*'(.*)'/i);
            if (matchRes) {
                result = matchRes.pop();
            }
        }
    }
    return result;
}
/**
 * Extracts the first part of the URL, just after subscription:
 * https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/
 * @param url - The original request url
 * @returns The url prefix as explained above.
 */
function extractSubscriptionUrl(url) {
    var result;
    var matchRes = url.match(/.*\/subscriptions\/[a-f0-9-]+\//gi);
    if (matchRes && matchRes[0]) {
        result = matchRes[0];
    }
    else {
        throw new Error("Unable to extract subscriptionId from the given url - " + url + ".");
    }
    return result;
}
/**
 * Registers the given provider.
 * @param policy - The RPRegistrationPolicy this function is being called against.
 * @param urlPrefix - https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/
 * @param provider - The provider name to be registered.
 * @param originalRequest - The original request sent by the user that returned a 409 response
 * with a message that the provider is not registered.
 * @param callback - The callback that handles the RP registration
 */
function registerRP(policy, urlPrefix, provider, originalRequest) {
    var postUrl = urlPrefix + "providers/" + provider + "/register?api-version=2016-02-01";
    var getUrl = urlPrefix + "providers/" + provider + "?api-version=2016-02-01";
    var reqOptions = getRequestEssentials(originalRequest);
    reqOptions.method = "POST";
    reqOptions.url = postUrl;
    return policy._nextPolicy.sendRequest(reqOptions).then(function (response) {
        if (response.status !== 200) {
            throw new Error("Autoregistration of " + provider + " failed. Please try registering manually.");
        }
        return getRegistrationStatus(policy, getUrl, originalRequest);
    });
}
/**
 * Polls the registration status of the provider that was registered. Polling happens at an interval of 30 seconds.
 * Polling will happen till the registrationState property of the response body is "Registered".
 * @param policy - The RPRegistrationPolicy this function is being called against.
 * @param url - The request url for polling
 * @param originalRequest - The original request sent by the user that returned a 409 response
 * with a message that the provider is not registered.
 * @returns True if RP Registration is successful.
 */
function getRegistrationStatus(policy, url, originalRequest) {
    var reqOptions = getRequestEssentials(originalRequest);
    reqOptions.url = url;
    reqOptions.method = "GET";
    return policy._nextPolicy.sendRequest(reqOptions).then(function (res) {
        var obj = res.parsedBody;
        if (res.parsedBody && obj.registrationState && obj.registrationState === "Registered") {
            return true;
        }
        else {
            return _util_utils__WEBPACK_IMPORTED_MODULE_2__.delay(policy._retryTimeout * 1000)
                .then(function () { return getRegistrationStatus(policy, url, originalRequest); });
        }
    });
}
//# sourceMappingURL=rpRegistrationPolicy.js.map

/***/ }),
/* 102 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exponentialRetryPolicy": () => (/* binding */ exponentialRetryPolicy),
/* harmony export */   "RetryMode": () => (/* binding */ RetryMode),
/* harmony export */   "DefaultRetryOptions": () => (/* binding */ DefaultRetryOptions),
/* harmony export */   "ExponentialRetryPolicy": () => (/* binding */ ExponentialRetryPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56);
/* harmony import */ var _requestPolicy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
/* harmony import */ var _util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _restError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.






function exponentialRetryPolicy(retryCount, retryInterval, maxRetryInterval) {
    return {
        create: function (nextPolicy, options) {
            return new ExponentialRetryPolicy(nextPolicy, options, retryCount, retryInterval, maxRetryInterval);
        }
    };
}
/**
 * Describes the Retry Mode type. Currently supporting only Exponential.
 */
var RetryMode;
(function (RetryMode) {
    RetryMode[RetryMode["Exponential"] = 0] = "Exponential";
})(RetryMode || (RetryMode = {}));
var DefaultRetryOptions = {
    maxRetries: _util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLIENT_RETRY_COUNT,
    retryDelayInMs: _util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLIENT_RETRY_INTERVAL,
    maxRetryDelayInMs: _util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLIENT_MAX_RETRY_INTERVAL
};
/**
 * Instantiates a new "ExponentialRetryPolicyFilter" instance.
 */
var ExponentialRetryPolicy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ExponentialRetryPolicy, _super);
    /**
     * @param nextPolicy - The next RequestPolicy in the pipeline chain.
     * @param options - The options for this RequestPolicy.
     * @param retryCount - The client retry count.
     * @param retryInterval - The client retry interval, in milliseconds.
     * @param minRetryInterval - The minimum retry interval, in milliseconds.
     * @param maxRetryInterval - The maximum retry interval, in milliseconds.
     */
    function ExponentialRetryPolicy(nextPolicy, options, retryCount, retryInterval, maxRetryInterval) {
        var _this = _super.call(this, nextPolicy, options) || this;
        _this.retryCount = (0,_util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_0__.isNumber)(retryCount) ? retryCount : _util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLIENT_RETRY_COUNT;
        _this.retryInterval = (0,_util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_0__.isNumber)(retryInterval) ? retryInterval : _util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLIENT_RETRY_INTERVAL;
        _this.maxRetryInterval = (0,_util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_0__.isNumber)(maxRetryInterval)
            ? maxRetryInterval
            : _util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CLIENT_MAX_RETRY_INTERVAL;
        return _this;
    }
    ExponentialRetryPolicy.prototype.sendRequest = function (request) {
        var _this = this;
        return this._nextPolicy
            .sendRequest(request.clone())
            .then(function (response) { return retry(_this, request, response); })
            .catch(function (error) { return retry(_this, request, error.response, undefined, error); });
    };
    return ExponentialRetryPolicy;
}(_requestPolicy__WEBPACK_IMPORTED_MODULE_2__.BaseRequestPolicy));

function retry(policy, request, response, retryData, requestError) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
        function shouldPolicyRetry(responseParam) {
            var statusCode = responseParam === null || responseParam === void 0 ? void 0 : responseParam.status;
            if (statusCode === undefined ||
                (statusCode < 500 && statusCode !== 408) ||
                statusCode === 501 ||
                statusCode === 505) {
                return false;
            }
            return true;
        }
        var isAborted, res, err_1, err;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    retryData = (0,_util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_0__.updateRetryData)({
                        retryInterval: policy.retryInterval,
                        minRetryInterval: 0,
                        maxRetryInterval: policy.maxRetryInterval
                    }, retryData, requestError);
                    isAborted = request.abortSignal && request.abortSignal.aborted;
                    if (!(!isAborted && (0,_util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_0__.shouldRetry)(policy.retryCount, shouldPolicyRetry, retryData, response))) return [3 /*break*/, 6];
                    _log__WEBPACK_IMPORTED_MODULE_3__.logger.info("Retrying request in " + retryData.retryInterval);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, _util_utils__WEBPACK_IMPORTED_MODULE_4__.delay(retryData.retryInterval)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, policy._nextPolicy.sendRequest(request.clone())];
                case 3:
                    res = _a.sent();
                    return [2 /*return*/, retry(policy, request, res, retryData)];
                case 4:
                    err_1 = _a.sent();
                    return [2 /*return*/, retry(policy, request, response, retryData, err_1)];
                case 5: return [3 /*break*/, 7];
                case 6:
                    if (isAborted || requestError || !response) {
                        err = retryData.error ||
                            new _restError__WEBPACK_IMPORTED_MODULE_5__.RestError("Failed to send the request.", _restError__WEBPACK_IMPORTED_MODULE_5__.RestError.REQUEST_SEND_ERROR, response && response.status, response && response.request, response);
                        throw err;
                    }
                    else {
                        return [2 /*return*/, response];
                    }
                    _a.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=exponentialRetryPolicy.js.map

/***/ }),
/* 103 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CLIENT_RETRY_COUNT": () => (/* binding */ DEFAULT_CLIENT_RETRY_COUNT),
/* harmony export */   "DEFAULT_CLIENT_RETRY_INTERVAL": () => (/* binding */ DEFAULT_CLIENT_RETRY_INTERVAL),
/* harmony export */   "DEFAULT_CLIENT_MAX_RETRY_INTERVAL": () => (/* binding */ DEFAULT_CLIENT_MAX_RETRY_INTERVAL),
/* harmony export */   "DEFAULT_CLIENT_MIN_RETRY_INTERVAL": () => (/* binding */ DEFAULT_CLIENT_MIN_RETRY_INTERVAL),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "shouldRetry": () => (/* binding */ shouldRetry),
/* harmony export */   "updateRetryData": () => (/* binding */ updateRetryData)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var DEFAULT_CLIENT_RETRY_COUNT = 3;
// intervals are in ms
var DEFAULT_CLIENT_RETRY_INTERVAL = 1000 * 30;
var DEFAULT_CLIENT_MAX_RETRY_INTERVAL = 1000 * 90;
var DEFAULT_CLIENT_MIN_RETRY_INTERVAL = 1000 * 3;
function isNumber(n) {
    return typeof n === "number";
}
/**
 * @internal
 * Determines if the operation should be retried.
 *
 * @param retryLimit - Specifies the max number of retries.
 * @param predicate - Initial chekck on whether to retry based on given responses or errors
 * @param retryData -  The retry data.
 * @returns True if the operation qualifies for a retry; false otherwise.
 */
function shouldRetry(retryLimit, predicate, retryData, response, error) {
    if (!predicate(response, error)) {
        return false;
    }
    return retryData.retryCount < retryLimit;
}
/**
 * @internal
 * Updates the retry data for the next attempt.
 *
 * @param retryOptions - specifies retry interval, and its lower bound and upper bound.
 * @param retryData -  The retry data.
 * @param err - The operation"s error, if any.
 */
function updateRetryData(retryOptions, retryData, err) {
    if (retryData === void 0) { retryData = { retryCount: 0, retryInterval: 0 }; }
    if (err) {
        if (retryData.error) {
            err.innerError = retryData.error;
        }
        retryData.error = err;
    }
    // Adjust retry count
    retryData.retryCount++;
    // Adjust retry interval
    var incrementDelta = Math.pow(2, retryData.retryCount - 1) - 1;
    var boundedRandDelta = retryOptions.retryInterval * 0.8 +
        Math.floor(Math.random() * (retryOptions.retryInterval * 0.4));
    incrementDelta *= boundedRandDelta;
    retryData.retryInterval = Math.min(retryOptions.minRetryInterval + incrementDelta, retryOptions.maxRetryInterval);
    return retryData;
}
//# sourceMappingURL=exponentialBackoffStrategy.js.map

/***/ }),
/* 104 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "systemErrorRetryPolicy": () => (/* binding */ systemErrorRetryPolicy),
/* harmony export */   "SystemErrorRetryPolicy": () => (/* binding */ SystemErrorRetryPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var _requestPolicy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
/* harmony import */ var _util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(103);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.




function systemErrorRetryPolicy(retryCount, retryInterval, minRetryInterval, maxRetryInterval) {
    return {
        create: function (nextPolicy, options) {
            return new SystemErrorRetryPolicy(nextPolicy, options, retryCount, retryInterval, minRetryInterval, maxRetryInterval);
        }
    };
}
/**
 * @param retryCount - The client retry count.
 * @param retryInterval - The client retry interval, in milliseconds.
 * @param minRetryInterval - The minimum retry interval, in milliseconds.
 * @param maxRetryInterval - The maximum retry interval, in milliseconds.
 */
var SystemErrorRetryPolicy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SystemErrorRetryPolicy, _super);
    function SystemErrorRetryPolicy(nextPolicy, options, retryCount, retryInterval, minRetryInterval, maxRetryInterval) {
        var _this = _super.call(this, nextPolicy, options) || this;
        _this.retryCount = (0,_util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_1__.isNumber)(retryCount) ? retryCount : _util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_CLIENT_RETRY_COUNT;
        _this.retryInterval = (0,_util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_1__.isNumber)(retryInterval) ? retryInterval : _util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_CLIENT_RETRY_INTERVAL;
        _this.minRetryInterval = (0,_util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_1__.isNumber)(minRetryInterval)
            ? minRetryInterval
            : _util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_CLIENT_MIN_RETRY_INTERVAL;
        _this.maxRetryInterval = (0,_util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_1__.isNumber)(maxRetryInterval)
            ? maxRetryInterval
            : _util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_CLIENT_MAX_RETRY_INTERVAL;
        return _this;
    }
    SystemErrorRetryPolicy.prototype.sendRequest = function (request) {
        var _this = this;
        return this._nextPolicy
            .sendRequest(request.clone())
            .catch(function (error) { return retry(_this, request, error.response, error); });
    };
    return SystemErrorRetryPolicy;
}(_requestPolicy__WEBPACK_IMPORTED_MODULE_2__.BaseRequestPolicy));

function retry(policy, request, operationResponse, err, retryData) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
        function shouldPolicyRetry(_response, error) {
            if (error &&
                error.code &&
                (error.code === "ETIMEDOUT" ||
                    error.code === "ESOCKETTIMEDOUT" ||
                    error.code === "ECONNREFUSED" ||
                    error.code === "ECONNRESET" ||
                    error.code === "ENOENT")) {
                return true;
            }
            return false;
        }
        var nestedErr_1;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    retryData = (0,_util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_1__.updateRetryData)(policy, retryData, err);
                    if (!(0,_util_exponentialBackoffStrategy__WEBPACK_IMPORTED_MODULE_1__.shouldRetry)(policy.retryCount, shouldPolicyRetry, retryData, operationResponse, err)) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _util_utils__WEBPACK_IMPORTED_MODULE_3__.delay(retryData.retryInterval)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, policy._nextPolicy.sendRequest(request.clone())];
                case 3:
                    nestedErr_1 = _a.sent();
                    return [2 /*return*/, retry(policy, request, operationResponse, nestedErr_1, retryData)];
                case 4: return [3 /*break*/, 6];
                case 5:
                    if (err) {
                        // If the operation failed in the end, return all errors instead of just the last one
                        return [2 /*return*/, Promise.reject(retryData.error)];
                    }
                    return [2 /*return*/, operationResponse];
                case 6: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=systemErrorRetryPolicy.js.map

/***/ }),
/* 105 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throttlingRetryPolicy": () => (/* binding */ throttlingRetryPolicy),
/* harmony export */   "ThrottlingRetryPolicy": () => (/* binding */ ThrottlingRetryPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var _requestPolicy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.




var StatusCodes = _util_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.HttpConstants.StatusCodes;
function throttlingRetryPolicy() {
    return {
        create: function (nextPolicy, options) {
            return new ThrottlingRetryPolicy(nextPolicy, options);
        }
    };
}
/**
 * To learn more, please refer to
 * https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-request-limits,
 * https://docs.microsoft.com/en-us/azure/azure-subscription-service-limits and
 * https://docs.microsoft.com/en-us/azure/virtual-machines/troubleshooting/troubleshooting-throttling-errors
 */
var ThrottlingRetryPolicy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ThrottlingRetryPolicy, _super);
    function ThrottlingRetryPolicy(nextPolicy, options, _handleResponse) {
        var _this = _super.call(this, nextPolicy, options) || this;
        _this._handleResponse = _handleResponse || _this._defaultResponseHandler;
        return _this;
    }
    ThrottlingRetryPolicy.prototype.sendRequest = function (httpRequest) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                return [2 /*return*/, this._nextPolicy.sendRequest(httpRequest.clone()).then(function (response) {
                        if (response.status !== StatusCodes.TooManyRequests) {
                            return response;
                        }
                        else {
                            return _this._handleResponse(httpRequest, response);
                        }
                    })];
            });
        });
    };
    ThrottlingRetryPolicy.prototype._defaultResponseHandler = function (httpRequest, httpResponse) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var retryAfterHeader, delayInMs;
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                retryAfterHeader = httpResponse.headers.get(_util_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.HeaderConstants.RETRY_AFTER);
                if (retryAfterHeader) {
                    delayInMs = ThrottlingRetryPolicy.parseRetryAfterHeader(retryAfterHeader);
                    if (delayInMs) {
                        return [2 /*return*/, (0,_util_utils__WEBPACK_IMPORTED_MODULE_2__.delay)(delayInMs).then(function (_) { return _this._nextPolicy.sendRequest(httpRequest); })];
                    }
                }
                return [2 /*return*/, httpResponse];
            });
        });
    };
    ThrottlingRetryPolicy.parseRetryAfterHeader = function (headerValue) {
        var retryAfterInSeconds = Number(headerValue);
        if (Number.isNaN(retryAfterInSeconds)) {
            return ThrottlingRetryPolicy.parseDateRetryAfterHeader(headerValue);
        }
        else {
            return retryAfterInSeconds * 1000;
        }
    };
    ThrottlingRetryPolicy.parseDateRetryAfterHeader = function (headerValue) {
        try {
            var now = Date.now();
            var date = Date.parse(headerValue);
            var diff = date - now;
            return Number.isNaN(diff) ? undefined : diff;
        }
        catch (error) {
            return undefined;
        }
    };
    return ThrottlingRetryPolicy;
}(_requestPolicy__WEBPACK_IMPORTED_MODULE_3__.BaseRequestPolicy));

//# sourceMappingURL=throttlingRetryPolicy.js.map

/***/ }),
/* 106 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deserializationPolicy": () => (/* binding */ deserializationPolicy),
/* harmony export */   "defaultJsonContentTypes": () => (/* binding */ defaultJsonContentTypes),
/* harmony export */   "defaultXmlContentTypes": () => (/* binding */ defaultXmlContentTypes),
/* harmony export */   "DefaultDeserializationOptions": () => (/* binding */ DefaultDeserializationOptions),
/* harmony export */   "DeserializationPolicy": () => (/* binding */ DeserializationPolicy),
/* harmony export */   "deserializeResponseBody": () => (/* binding */ deserializeResponseBody)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _restError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91);
/* harmony import */ var _util_xml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96);
/* harmony import */ var _requestPolicy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74);
/* harmony import */ var _util_serializer_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.






/**
 * Create a new serialization RequestPolicyCreator that will serialized HTTP request bodies as they
 * pass through the HTTP pipeline.
 */
function deserializationPolicy(deserializationContentTypes, parsingOptions) {
    return {
        create: function (nextPolicy, options) {
            return new DeserializationPolicy(nextPolicy, options, deserializationContentTypes, parsingOptions);
        }
    };
}
var defaultJsonContentTypes = ["application/json", "text/json"];
var defaultXmlContentTypes = ["application/xml", "application/atom+xml"];
var DefaultDeserializationOptions = {
    expectedContentTypes: {
        json: defaultJsonContentTypes,
        xml: defaultXmlContentTypes
    }
};
/**
 * A RequestPolicy that will deserialize HTTP response bodies and headers as they pass through the
 * HTTP pipeline.
 */
var DeserializationPolicy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(DeserializationPolicy, _super);
    function DeserializationPolicy(nextPolicy, requestPolicyOptions, deserializationContentTypes, parsingOptions) {
        if (parsingOptions === void 0) { parsingOptions = {}; }
        var _a;
        var _this = _super.call(this, nextPolicy, requestPolicyOptions) || this;
        _this.jsonContentTypes =
            (deserializationContentTypes && deserializationContentTypes.json) || defaultJsonContentTypes;
        _this.xmlContentTypes =
            (deserializationContentTypes && deserializationContentTypes.xml) || defaultXmlContentTypes;
        _this.xmlCharKey = (_a = parsingOptions.xmlCharKey) !== null && _a !== void 0 ? _a : _util_serializer_common__WEBPACK_IMPORTED_MODULE_1__.XML_CHARKEY;
        return _this;
    }
    DeserializationPolicy.prototype.sendRequest = function (request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
            var _this = this;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                return [2 /*return*/, this._nextPolicy.sendRequest(request).then(function (response) {
                        return deserializeResponseBody(_this.jsonContentTypes, _this.xmlContentTypes, response, {
                            xmlCharKey: _this.xmlCharKey
                        });
                    })];
            });
        });
    };
    return DeserializationPolicy;
}(_requestPolicy__WEBPACK_IMPORTED_MODULE_2__.BaseRequestPolicy));

function getOperationResponse(parsedResponse) {
    var result;
    var request = parsedResponse.request;
    var operationSpec = request.operationSpec;
    if (operationSpec) {
        var operationResponseGetter = request.operationResponseGetter;
        if (!operationResponseGetter) {
            result = operationSpec.responses[parsedResponse.status];
        }
        else {
            result = operationResponseGetter(operationSpec, parsedResponse);
        }
    }
    return result;
}
function shouldDeserializeResponse(parsedResponse) {
    var shouldDeserialize = parsedResponse.request.shouldDeserialize;
    var result;
    if (shouldDeserialize === undefined) {
        result = true;
    }
    else if (typeof shouldDeserialize === "boolean") {
        result = shouldDeserialize;
    }
    else {
        result = shouldDeserialize(parsedResponse);
    }
    return result;
}
function deserializeResponseBody(jsonContentTypes, xmlContentTypes, response, options) {
    var _a, _b, _c;
    if (options === void 0) { options = {}; }
    var updatedOptions = {
        rootName: (_a = options.rootName) !== null && _a !== void 0 ? _a : "",
        includeRoot: (_b = options.includeRoot) !== null && _b !== void 0 ? _b : false,
        xmlCharKey: (_c = options.xmlCharKey) !== null && _c !== void 0 ? _c : _util_serializer_common__WEBPACK_IMPORTED_MODULE_1__.XML_CHARKEY
    };
    return parse(jsonContentTypes, xmlContentTypes, response, updatedOptions).then(function (parsedResponse) {
        if (!shouldDeserializeResponse(parsedResponse)) {
            return parsedResponse;
        }
        var operationSpec = parsedResponse.request.operationSpec;
        if (!operationSpec || !operationSpec.responses) {
            return parsedResponse;
        }
        var responseSpec = getOperationResponse(parsedResponse);
        var _a = handleErrorResponse(parsedResponse, operationSpec, responseSpec), error = _a.error, shouldReturnResponse = _a.shouldReturnResponse;
        if (error) {
            throw error;
        }
        else if (shouldReturnResponse) {
            return parsedResponse;
        }
        // An operation response spec does exist for current status code, so
        // use it to deserialize the response.
        if (responseSpec) {
            if (responseSpec.bodyMapper) {
                var valueToDeserialize = parsedResponse.parsedBody;
                if (operationSpec.isXML && responseSpec.bodyMapper.type.name === _serializer__WEBPACK_IMPORTED_MODULE_3__.MapperType.Sequence) {
                    valueToDeserialize =
                        typeof valueToDeserialize === "object"
                            ? valueToDeserialize[responseSpec.bodyMapper.xmlElementName]
                            : [];
                }
                try {
                    parsedResponse.parsedBody = operationSpec.serializer.deserialize(responseSpec.bodyMapper, valueToDeserialize, "operationRes.parsedBody", options);
                }
                catch (innerError) {
                    var restError = new _restError__WEBPACK_IMPORTED_MODULE_4__.RestError("Error " + innerError + " occurred in deserializing the responseBody - " + parsedResponse.bodyAsText, undefined, parsedResponse.status, parsedResponse.request, parsedResponse);
                    throw restError;
                }
            }
            else if (operationSpec.httpMethod === "HEAD") {
                // head methods never have a body, but we return a boolean to indicate presence/absence of the resource
                parsedResponse.parsedBody = response.status >= 200 && response.status < 300;
            }
            if (responseSpec.headersMapper) {
                parsedResponse.parsedHeaders = operationSpec.serializer.deserialize(responseSpec.headersMapper, parsedResponse.headers.rawHeaders(), "operationRes.parsedHeaders", options);
            }
        }
        return parsedResponse;
    });
}
function isOperationSpecEmpty(operationSpec) {
    var expectedStatusCodes = Object.keys(operationSpec.responses);
    return (expectedStatusCodes.length === 0 ||
        (expectedStatusCodes.length === 1 && expectedStatusCodes[0] === "default"));
}
function handleErrorResponse(parsedResponse, operationSpec, responseSpec) {
    var _a;
    var isSuccessByStatus = 200 <= parsedResponse.status && parsedResponse.status < 300;
    var isExpectedStatusCode = isOperationSpecEmpty(operationSpec)
        ? isSuccessByStatus
        : !!responseSpec;
    if (isExpectedStatusCode) {
        if (responseSpec) {
            if (!responseSpec.isError) {
                return { error: null, shouldReturnResponse: false };
            }
        }
        else {
            return { error: null, shouldReturnResponse: false };
        }
    }
    var errorResponseSpec = responseSpec !== null && responseSpec !== void 0 ? responseSpec : operationSpec.responses.default;
    var streaming = ((_a = parsedResponse.request.streamResponseStatusCodes) === null || _a === void 0 ? void 0 : _a.has(parsedResponse.status)) ||
        parsedResponse.request.streamResponseBody;
    var initialErrorMessage = streaming
        ? "Unexpected status code: " + parsedResponse.status
        : parsedResponse.bodyAsText;
    var error = new _restError__WEBPACK_IMPORTED_MODULE_4__.RestError(initialErrorMessage, undefined, parsedResponse.status, parsedResponse.request, parsedResponse);
    // If the item failed but there's no error spec or default spec to deserialize the error,
    // we should fail so we just throw the parsed response
    if (!errorResponseSpec) {
        throw error;
    }
    var defaultBodyMapper = errorResponseSpec.bodyMapper;
    var defaultHeadersMapper = errorResponseSpec.headersMapper;
    try {
        // If error response has a body, try to deserialize it using default body mapper.
        // Then try to extract error code & message from it
        if (parsedResponse.parsedBody) {
            var parsedBody = parsedResponse.parsedBody;
            var parsedError = void 0;
            if (defaultBodyMapper) {
                var valueToDeserialize = parsedBody;
                if (operationSpec.isXML && defaultBodyMapper.type.name === _serializer__WEBPACK_IMPORTED_MODULE_3__.MapperType.Sequence) {
                    valueToDeserialize =
                        typeof parsedBody === "object" ? parsedBody[defaultBodyMapper.xmlElementName] : [];
                }
                parsedError = operationSpec.serializer.deserialize(defaultBodyMapper, valueToDeserialize, "error.response.parsedBody");
            }
            var internalError = parsedBody.error || parsedError || parsedBody;
            error.code = internalError.code;
            if (internalError.message) {
                error.message = internalError.message;
            }
            if (defaultBodyMapper) {
                error.response.parsedBody = parsedError;
            }
        }
        // If error response has headers, try to deserialize it using default header mapper
        if (parsedResponse.headers && defaultHeadersMapper) {
            error.response.parsedHeaders = operationSpec.serializer.deserialize(defaultHeadersMapper, parsedResponse.headers.rawHeaders(), "operationRes.parsedHeaders");
        }
    }
    catch (defaultError) {
        error.message = "Error \"" + defaultError.message + "\" occurred in deserializing the responseBody - \"" + parsedResponse.bodyAsText + "\" for the default response.";
    }
    return { error: error, shouldReturnResponse: false };
}
function parse(jsonContentTypes, xmlContentTypes, operationResponse, opts) {
    var _a;
    var errorHandler = function (err) {
        var msg = "Error \"" + err + "\" occurred while parsing the response body - " + operationResponse.bodyAsText + ".";
        var errCode = err.code || _restError__WEBPACK_IMPORTED_MODULE_4__.RestError.PARSE_ERROR;
        var e = new _restError__WEBPACK_IMPORTED_MODULE_4__.RestError(msg, errCode, operationResponse.status, operationResponse.request, operationResponse);
        return Promise.reject(e);
    };
    var streaming = ((_a = operationResponse.request.streamResponseStatusCodes) === null || _a === void 0 ? void 0 : _a.has(operationResponse.status)) ||
        operationResponse.request.streamResponseBody;
    if (!streaming && operationResponse.bodyAsText) {
        var text_1 = operationResponse.bodyAsText;
        var contentType = operationResponse.headers.get("Content-Type") || "";
        var contentComponents = !contentType
            ? []
            : contentType.split(";").map(function (component) { return component.toLowerCase(); });
        if (contentComponents.length === 0 ||
            contentComponents.some(function (component) { return jsonContentTypes.indexOf(component) !== -1; })) {
            return new Promise(function (resolve) {
                operationResponse.parsedBody = JSON.parse(text_1);
                resolve(operationResponse);
            }).catch(errorHandler);
        }
        else if (contentComponents.some(function (component) { return xmlContentTypes.indexOf(component) !== -1; })) {
            return (0,_util_xml__WEBPACK_IMPORTED_MODULE_5__.parseXML)(text_1, opts)
                .then(function (body) {
                operationResponse.parsedBody = body;
                return operationResponse;
            })
                .catch(errorHandler);
        }
    }
    return Promise.resolve(operationResponse);
}
//# sourceMappingURL=deserializationPolicy.js.map

/***/ }),
/* 107 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultProxySettings": () => (/* binding */ getDefaultProxySettings),
/* harmony export */   "proxyPolicy": () => (/* binding */ proxyPolicy),
/* harmony export */   "ProxyPolicy": () => (/* binding */ ProxyPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _requestPolicy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


var proxyNotSupportedInBrowser = new Error("ProxyPolicy is not supported in browser environment");
function getDefaultProxySettings(_proxyUrl) {
    return undefined;
}
function proxyPolicy(_proxySettings) {
    return {
        create: function (_nextPolicy, _options) {
            throw proxyNotSupportedInBrowser;
        }
    };
}
var ProxyPolicy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(ProxyPolicy, _super);
    function ProxyPolicy(nextPolicy, options) {
        var _this = _super.call(this, nextPolicy, options) || this;
        throw proxyNotSupportedInBrowser;
        return _this;
    }
    ProxyPolicy.prototype.sendRequest = function (_request) {
        throw proxyNotSupportedInBrowser;
    };
    return ProxyPolicy;
}(_requestPolicy__WEBPACK_IMPORTED_MODULE_1__.BaseRequestPolicy));

//# sourceMappingURL=proxyPolicy.browser.js.map

/***/ }),
/* 108 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logPolicy": () => (/* binding */ logPolicy),
/* harmony export */   "LogPolicy": () => (/* binding */ LogPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _requestPolicy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var _util_sanitizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.




function logPolicy(loggingOptions) {
    if (loggingOptions === void 0) { loggingOptions = {}; }
    return {
        create: function (nextPolicy, options) {
            return new LogPolicy(nextPolicy, options, loggingOptions);
        }
    };
}
var LogPolicy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(LogPolicy, _super);
    function LogPolicy(nextPolicy, options, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.logger, logger = _c === void 0 ? _log__WEBPACK_IMPORTED_MODULE_1__.logger.info : _c, _d = _b.allowedHeaderNames, allowedHeaderNames = _d === void 0 ? [] : _d, _e = _b.allowedQueryParameters, allowedQueryParameters = _e === void 0 ? [] : _e;
        var _this = _super.call(this, nextPolicy, options) || this;
        _this.logger = logger;
        _this.sanitizer = new _util_sanitizer__WEBPACK_IMPORTED_MODULE_2__.Sanitizer({ allowedHeaderNames: allowedHeaderNames, allowedQueryParameters: allowedQueryParameters });
        return _this;
    }
    Object.defineProperty(LogPolicy.prototype, "allowedHeaderNames", {
        /**
         * Header names whose values will be logged when logging is enabled. Defaults to
         * Date, traceparent, x-ms-client-request-id, and x-ms-request id.  Any headers
         * specified in this field will be added to that list.  Any other values will
         * be written to logs as "REDACTED".
         * @deprecated Pass these into the constructor instead.
         */
        get: function () {
            return this.sanitizer.allowedHeaderNames;
        },
        /**
         * Header names whose values will be logged when logging is enabled. Defaults to
         * Date, traceparent, x-ms-client-request-id, and x-ms-request id.  Any headers
         * specified in this field will be added to that list.  Any other values will
         * be written to logs as "REDACTED".
         * @deprecated Pass these into the constructor instead.
         */
        set: function (allowedHeaderNames) {
            this.sanitizer.allowedHeaderNames = allowedHeaderNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LogPolicy.prototype, "allowedQueryParameters", {
        /**
         * Query string names whose values will be logged when logging is enabled. By default no
         * query string values are logged.
         * @deprecated Pass these into the constructor instead.
         */
        get: function () {
            return this.sanitizer.allowedQueryParameters;
        },
        /**
         * Query string names whose values will be logged when logging is enabled. By default no
         * query string values are logged.
         * @deprecated Pass these into the constructor instead.
         */
        set: function (allowedQueryParameters) {
            this.sanitizer.allowedQueryParameters = allowedQueryParameters;
        },
        enumerable: false,
        configurable: true
    });
    LogPolicy.prototype.sendRequest = function (request) {
        var _this = this;
        if (!this.logger.enabled)
            return this._nextPolicy.sendRequest(request);
        this.logRequest(request);
        return this._nextPolicy.sendRequest(request).then(function (response) { return _this.logResponse(response); });
    };
    LogPolicy.prototype.logRequest = function (request) {
        this.logger("Request: " + this.sanitizer.sanitize(request));
    };
    LogPolicy.prototype.logResponse = function (response) {
        this.logger("Response status code: " + response.status);
        this.logger("Headers: " + this.sanitizer.sanitize(response.headers));
        return response;
    };
    return LogPolicy;
}(_requestPolicy__WEBPACK_IMPORTED_MODULE_3__.BaseRequestPolicy));

//# sourceMappingURL=logPolicy.js.map

/***/ }),
/* 109 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ndJsonPolicy": () => (/* binding */ ndJsonPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _requestPolicy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// BaseRequestPolicy has a protected constructor.
/* eslint-disable @typescript-eslint/no-useless-constructor */

function ndJsonPolicy() {
    return {
        create: function (nextPolicy, options) {
            return new NdJsonPolicy(nextPolicy, options);
        }
    };
}
/**
 * NdJsonPolicy that formats a JSON array as newline-delimited JSON
 */
var NdJsonPolicy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(NdJsonPolicy, _super);
    /**
     * Creates an instance of KeepAlivePolicy.
     */
    function NdJsonPolicy(nextPolicy, options) {
        return _super.call(this, nextPolicy, options) || this;
    }
    /**
     * Sends a request.
     */
    NdJsonPolicy.prototype.sendRequest = function (request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
            var body;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                // There currently isn't a good way to bypass the serializer
                if (typeof request.body === "string" && request.body.startsWith("[")) {
                    body = JSON.parse(request.body);
                    if (Array.isArray(body)) {
                        request.body = body.map(function (item) { return JSON.stringify(item) + "\n"; }).join("");
                    }
                }
                return [2 /*return*/, this._nextPolicy.sendRequest(request)];
            });
        });
    };
    return NdJsonPolicy;
}(_requestPolicy__WEBPACK_IMPORTED_MODULE_1__.BaseRequestPolicy));
//# sourceMappingURL=ndJsonPolicy.js.map

/***/ }),
/* 110 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultKeepAliveOptions": () => (/* binding */ DefaultKeepAliveOptions),
/* harmony export */   "keepAlivePolicy": () => (/* binding */ keepAlivePolicy),
/* harmony export */   "KeepAlivePolicy": () => (/* binding */ KeepAlivePolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _requestPolicy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


var DefaultKeepAliveOptions = {
    enable: true
};
function keepAlivePolicy(keepAliveOptions) {
    return {
        create: function (nextPolicy, options) {
            return new KeepAlivePolicy(nextPolicy, options, keepAliveOptions || DefaultKeepAliveOptions);
        }
    };
}
/**
 * KeepAlivePolicy is a policy used to control keep alive settings for every request.
 */
var KeepAlivePolicy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(KeepAlivePolicy, _super);
    /**
     * Creates an instance of KeepAlivePolicy.
     *
     * @param nextPolicy -
     * @param options -
     * @param keepAliveOptions -
     */
    function KeepAlivePolicy(nextPolicy, options, keepAliveOptions) {
        var _this = _super.call(this, nextPolicy, options) || this;
        _this.keepAliveOptions = keepAliveOptions;
        return _this;
    }
    /**
     * Sends out request.
     *
     * @param request -
     * @returns
     */
    KeepAlivePolicy.prototype.sendRequest = function (request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                request.keepAlive = this.keepAliveOptions.enable;
                return [2 /*return*/, this._nextPolicy.sendRequest(request)];
            });
        });
    };
    return KeepAlivePolicy;
}(_requestPolicy__WEBPACK_IMPORTED_MODULE_1__.BaseRequestPolicy));

//# sourceMappingURL=keepAlivePolicy.js.map

/***/ }),
/* 111 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tracingPolicy": () => (/* binding */ tracingPolicy),
/* harmony export */   "TracingPolicy": () => (/* binding */ TracingPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var _azure_core_tracing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _azure_core_tracing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(118);
/* harmony import */ var _azure_core_tracing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(167);
/* harmony import */ var _requestPolicy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.




var createSpan = (0,_azure_core_tracing__WEBPACK_IMPORTED_MODULE_0__.createSpanFunction)({
    packagePrefix: "",
    namespace: ""
});
function tracingPolicy(tracingOptions) {
    if (tracingOptions === void 0) { tracingOptions = {}; }
    return {
        create: function (nextPolicy, options) {
            return new TracingPolicy(nextPolicy, options, tracingOptions);
        }
    };
}
var TracingPolicy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(TracingPolicy, _super);
    function TracingPolicy(nextPolicy, options, tracingOptions) {
        var _this = _super.call(this, nextPolicy, options) || this;
        _this.userAgent = tracingOptions.userAgent;
        return _this;
    }
    TracingPolicy.prototype.sendRequest = function (request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var path, span, spanContext, traceParentHeader, traceState, response, serviceRequestId, err_1;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!request.tracingContext) {
                            return [2 /*return*/, this._nextPolicy.sendRequest(request)];
                        }
                        path = _url__WEBPACK_IMPORTED_MODULE_2__.URLBuilder.parse(request.url).getPath() || "/";
                        span = createSpan(path, {
                            tracingOptions: {
                                spanOptions: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, request.spanOptions), { kind: _azure_core_tracing__WEBPACK_IMPORTED_MODULE_3__.SpanKind.CLIENT }),
                                tracingContext: request.tracingContext
                            }
                        }).span;
                        span.setAttributes({
                            "http.method": request.method,
                            "http.url": request.url,
                            requestId: request.requestId
                        });
                        if (this.userAgent) {
                            span.setAttribute("http.user_agent", this.userAgent);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        spanContext = span.context();
                        traceParentHeader = (0,_azure_core_tracing__WEBPACK_IMPORTED_MODULE_4__.getTraceParentHeader)(spanContext);
                        if (traceParentHeader) {
                            request.headers.set("traceparent", traceParentHeader);
                            traceState = spanContext.traceState && spanContext.traceState.serialize();
                            // if tracestate is set, traceparent MUST be set, so only set tracestate after traceparent
                            if (traceState) {
                                request.headers.set("tracestate", traceState);
                            }
                        }
                        return [4 /*yield*/, this._nextPolicy.sendRequest(request)];
                    case 2:
                        response = _a.sent();
                        span.setAttribute("http.status_code", response.status);
                        serviceRequestId = response.headers.get("x-ms-request-id");
                        if (serviceRequestId) {
                            span.setAttribute("serviceRequestId", serviceRequestId);
                        }
                        span.end();
                        return [2 /*return*/, response];
                    case 3:
                        err_1 = _a.sent();
                        span.end();
                        throw err_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return TracingPolicy;
}(_requestPolicy__WEBPACK_IMPORTED_MODULE_5__.BaseRequestPolicy));

//# sourceMappingURL=tracingPolicy.js.map

/***/ }),
/* 112 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSpanFunction": () => (/* binding */ createSpanFunction)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var _src_tracerProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(118);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.



/**
 * Creates a function that can be used to create spans using the global tracer.
 *
 * Usage:
 *
 * ```typescript
 * // once
 * const createSpan = createSpanFunction({ packagePrefix: "Azure.Data.AppConfiguration", namespace: "Microsoft.AppConfiguration" });
 *
 * // in each operation
 * const span = createSpan("deleteConfigurationSetting", operationOptions);
 *    // code...
 * span.end();
 * ```
 *
 * @hidden
 * @param args - allows configuration of the prefix for each span as well as the az.namespace field.
 */
function createSpanFunction(args) {
    return function (operationName, operationOptions) {
        var tracer = (0,_src_tracerProxy__WEBPACK_IMPORTED_MODULE_0__.getTracer)();
        var tracingOptions = (operationOptions === null || operationOptions === void 0 ? void 0 : operationOptions.tracingOptions) || {};
        var spanOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ kind: _interfaces__WEBPACK_IMPORTED_MODULE_2__.SpanKind.INTERNAL }, tracingOptions.spanOptions);
        var spanName = args.packagePrefix ? args.packagePrefix + "." + operationName : operationName;
        var span = tracer.startSpan(spanName, spanOptions, tracingOptions.tracingContext);
        if (args.namespace) {
            span.setAttribute("az.namespace", args.namespace);
        }
        var newSpanOptions = tracingOptions.spanOptions || {};
        if (span.isRecording() && args.namespace) {
            newSpanOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, tracingOptions.spanOptions), { attributes: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, spanOptions.attributes), { "az.namespace": args.namespace }) });
        }
        var newTracingOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, tracingOptions), { spanOptions: newSpanOptions, tracingContext: (0,_interfaces__WEBPACK_IMPORTED_MODULE_2__.setSpan)(tracingOptions.tracingContext || _interfaces__WEBPACK_IMPORTED_MODULE_2__.context.active(), span) });
        var newOperationOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, operationOptions), { tracingOptions: newTracingOptions });
        return {
            span: span,
            updatedOptions: newOperationOptions
        };
    };
}
//# sourceMappingURL=createSpan.js.map

/***/ }),
/* 113 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTracer": () => (/* binding */ setTracer),
/* harmony export */   "getTracer": () => (/* binding */ getTracer)
/* harmony export */ });
/* harmony import */ var _tracers_noop_noOpTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(116);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


var defaultTracer;
function getDefaultTracer() {
    if (!defaultTracer) {
        defaultTracer = new _tracers_noop_noOpTracer__WEBPACK_IMPORTED_MODULE_0__.NoOpTracer();
    }
    return defaultTracer;
}
/**
 * Sets the global tracer, enabling tracing for the Azure SDK.
 * @param tracer - An OpenTelemetry Tracer instance.
 */
function setTracer(tracer) {
    var cache = (0,_utils_cache__WEBPACK_IMPORTED_MODULE_1__.getCache)();
    cache.tracer = tracer;
}
/**
 * Retrieves the active tracer, or returns a
 * no-op implementation if one is not set.
 */
function getTracer() {
    var cache = (0,_utils_cache__WEBPACK_IMPORTED_MODULE_1__.getCache)();
    if (!cache.tracer) {
        return getDefaultTracer();
    }
    return cache.tracer;
}
//# sourceMappingURL=tracerProxy.js.map

/***/ }),
/* 114 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoOpTracer": () => (/* binding */ NoOpTracer)
/* harmony export */ });
/* harmony import */ var _noOpSpan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * A no-op implementation of Tracer that can be used when tracing
 * is disabled.
 */
var NoOpTracer = /** @class */ (function () {
    function NoOpTracer() {
    }
    /**
     * Starts a new Span.
     * @param _name - The name of the span.
     * @param _options - The SpanOptions used during Span creation.
     */
    NoOpTracer.prototype.startSpan = function (_name, _options) {
        return new _noOpSpan__WEBPACK_IMPORTED_MODULE_0__.NoOpSpan();
    };
    /**
     * Returns the current Span from the current context, if available.
     */
    NoOpTracer.prototype.getCurrentSpan = function () {
        return new _noOpSpan__WEBPACK_IMPORTED_MODULE_0__.NoOpSpan();
    };
    /**
     * Executes the given function within the context provided by a Span.
     * @param _span - The span that provides the context.
     * @param fn - The function to be executed.
     */
    NoOpTracer.prototype.withSpan = function (_span, fn) {
        return fn();
    };
    /**
     * Bind a Span as the target's scope
     * @param target - An object to bind the scope.
     * @param _span - A specific Span to use. Otherwise, use the current one.
     */
    NoOpTracer.prototype.bind = function (target, _span) {
        return target;
    };
    return NoOpTracer;
}());

//# sourceMappingURL=noOpTracer.js.map

/***/ }),
/* 115 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoOpSpan": () => (/* binding */ NoOpSpan)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * A no-op implementation of Span that can safely be used without side-effects.
 */
var NoOpSpan = /** @class */ (function () {
    function NoOpSpan() {
    }
    /**
     * Returns the SpanContext associated with this Span.
     */
    NoOpSpan.prototype.context = function () {
        return {
            spanId: "",
            traceId: "",
            traceFlags: 0 /* NONE */
        };
    };
    /**
     * Marks the end of Span execution.
     * @param _endTime - The time to use as the Span's end time. Defaults to
     * the current time.
     */
    NoOpSpan.prototype.end = function (_endTime) {
        /* Noop */
    };
    /**
     * Sets an attribute on the Span
     * @param _key - The attribute key
     * @param _value - The attribute value
     */
    NoOpSpan.prototype.setAttribute = function (_key, _value) {
        return this;
    };
    /**
     * Sets attributes on the Span
     * @param _attributes - The attributes to add
     */
    NoOpSpan.prototype.setAttributes = function (_attributes) {
        return this;
    };
    /**
     * Adds an event to the Span
     * @param _name - The name of the event
     * @param _attributes - The associated attributes to add for this event
     */
    NoOpSpan.prototype.addEvent = function (_name, _attributes) {
        return this;
    };
    /**
     * Sets a status on the span. Overrides the default of SpanStatusCode.OK.
     * @param _status - The status to set.
     */
    NoOpSpan.prototype.setStatus = function (_status) {
        return this;
    };
    /**
     * Updates the name of the Span
     * @param _name - the new Span name
     */
    NoOpSpan.prototype.updateName = function (_name) {
        return this;
    };
    /**
     * Returns whether this span will be recorded
     */
    NoOpSpan.prototype.isRecording = function () {
        return false;
    };
    /**
     * Sets exception as a span event
     * @param exception - the exception the only accepted values are string or Error
     * @param time - the time to set as Span's event time. If not provided,
     *     use the current time.
     */
    NoOpSpan.prototype.recordException = function (_exception, _time) {
        /* do nothing */
    };
    return NoOpSpan;
}());

//# sourceMappingURL=noOpSpan.js.map

/***/ }),
/* 116 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCache": () => (/* binding */ getCache)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// V1 = OpenTelemetry 0.1
// V2 = OpenTelemetry 0.2
// V3 = OpenTelemetry 0.6.1
// V4 = OpenTelemetry 1.0.0-rc.0
var GLOBAL_TRACER_VERSION = 4;
// preview5 shipped with @azure/core-tracing.tracerCache
// and didn't have smart detection for collisions
var GLOBAL_TRACER_SYMBOL = Symbol.for("@azure/core-tracing.tracerCache3");
var cache;
function loadTracerCache() {
    var globalObj = (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
    var existingCache = globalObj[GLOBAL_TRACER_SYMBOL];
    var setGlobalCache = true;
    if (existingCache) {
        if (existingCache.version === GLOBAL_TRACER_VERSION) {
            cache = existingCache;
        }
        else {
            setGlobalCache = false;
            if (existingCache.tracer) {
                throw new Error("Two incompatible versions of @azure/core-tracing have been loaded.\n          This library is " + GLOBAL_TRACER_VERSION + ", existing is " + existingCache.version + ".");
            }
        }
    }
    if (!cache) {
        cache = {
            tracer: undefined,
            version: GLOBAL_TRACER_VERSION
        };
    }
    if (setGlobalCache) {
        globalObj[GLOBAL_TRACER_SYMBOL] = cache;
    }
}
function getCache() {
    if (!cache) {
        loadTracerCache();
    }
    return cache;
}
//# sourceMappingURL=cache.js.map

/***/ }),
/* 117 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGlobalObject": () => (/* binding */ getGlobalObject)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
function getGlobalObject() {
    return self;
}
//# sourceMappingURL=global.browser.js.map

/***/ }),
/* 118 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpanKind": () => (/* binding */ SpanKind),
/* harmony export */   "getSpan": () => (/* binding */ getSpan),
/* harmony export */   "setSpan": () => (/* binding */ setSpan),
/* harmony export */   "setSpanContext": () => (/* binding */ setSpanContext),
/* harmony export */   "getSpanContext": () => (/* binding */ getSpanContext),
/* harmony export */   "context": () => (/* binding */ context),
/* harmony export */   "SpanStatusCode": () => (/* binding */ SpanStatusCode)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * The kind of span.
 */
var SpanKind;
(function (SpanKind) {
    /** Default value. Indicates that the span is used internally. */
    SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */
    SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */
    SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
/**
 * Return the span if one exists
 *
 * @param context - context to get span from
 */
function getSpan(context) {
    return (0,_opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.getSpan)(context);
}
/**
 * Set the span on a context
 *
 * @param context - context to use as parent
 * @param span - span to set active
 */
function setSpan(context, span) {
    return (0,_opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.setSpan)(context, span);
}
/**
 * Wrap span context in a NoopSpan and set as span in a new
 * context
 *
 * @param context - context to set active span on
 * @param spanContext - span context to be wrapped
 */
function setSpanContext(context, spanContext) {
    return (0,_opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.setSpanContext)(context, spanContext);
}
/**
 * Get the span context of the span if it exists.
 *
 * @param context - context to get values from
 */
function getSpanContext(context) {
    return (0,_opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.getSpanContext)(context);
}
/** Entrypoint for context API */
var context = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.context;
/** SpanStatusCode */
var SpanStatusCode;
(function (SpanStatusCode) {
    /**
     * The default status.
     */
    SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */
    SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */
    SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
//# sourceMappingURL=interfaces.js.map

/***/ }),
/* 119 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.diag = exports.propagation = exports.trace = exports.context = exports.isValidSpanId = exports.isValidTraceId = exports.isSpanContextValid = exports.INVALID_SPAN_CONTEXT = exports.INVALID_TRACEID = exports.INVALID_SPANID = void 0;
__exportStar(__webpack_require__(120), exports);
__exportStar(__webpack_require__(125), exports);
__exportStar(__webpack_require__(126), exports);
__exportStar(__webpack_require__(127), exports);
__exportStar(__webpack_require__(130), exports);
__exportStar(__webpack_require__(131), exports);
__exportStar(__webpack_require__(132), exports);
__exportStar(__webpack_require__(133), exports);
__exportStar(__webpack_require__(134), exports);
__exportStar(__webpack_require__(135), exports);
__exportStar(__webpack_require__(136), exports);
__exportStar(__webpack_require__(141), exports);
__exportStar(__webpack_require__(142), exports);
__exportStar(__webpack_require__(143), exports);
__exportStar(__webpack_require__(144), exports);
__exportStar(__webpack_require__(145), exports);
__exportStar(__webpack_require__(146), exports);
__exportStar(__webpack_require__(147), exports);
__exportStar(__webpack_require__(148), exports);
__exportStar(__webpack_require__(149), exports);
__exportStar(__webpack_require__(150), exports);
__exportStar(__webpack_require__(151), exports);
__exportStar(__webpack_require__(140), exports);
__exportStar(__webpack_require__(152), exports);
__exportStar(__webpack_require__(153), exports);
__exportStar(__webpack_require__(154), exports);
var spancontext_utils_1 = __webpack_require__(139);
Object.defineProperty(exports, "INVALID_SPANID", ({ enumerable: true, get: function () { return spancontext_utils_1.INVALID_SPANID; } }));
Object.defineProperty(exports, "INVALID_TRACEID", ({ enumerable: true, get: function () { return spancontext_utils_1.INVALID_TRACEID; } }));
Object.defineProperty(exports, "INVALID_SPAN_CONTEXT", ({ enumerable: true, get: function () { return spancontext_utils_1.INVALID_SPAN_CONTEXT; } }));
Object.defineProperty(exports, "isSpanContextValid", ({ enumerable: true, get: function () { return spancontext_utils_1.isSpanContextValid; } }));
Object.defineProperty(exports, "isValidTraceId", ({ enumerable: true, get: function () { return spancontext_utils_1.isValidTraceId; } }));
Object.defineProperty(exports, "isValidSpanId", ({ enumerable: true, get: function () { return spancontext_utils_1.isValidSpanId; } }));
__exportStar(__webpack_require__(137), exports);
__exportStar(__webpack_require__(155), exports);
__exportStar(__webpack_require__(156), exports);
var context_1 = __webpack_require__(157);
/** Entrypoint for context API */
exports.context = context_1.ContextAPI.getInstance();
var trace_1 = __webpack_require__(163);
/** Entrypoint for trace API */
exports.trace = trace_1.TraceAPI.getInstance();
var propagation_1 = __webpack_require__(164);
/** Entrypoint for propagation API */
exports.propagation = propagation_1.PropagationAPI.getInstance();
var diag_1 = __webpack_require__(165);
/**
 * Entrypoint for Diag API.
 * Defines Diagnostic handler used for internal diagnostic logging operations.
 * The default provides a Noop DiagLogger implementation which may be changed via the
 * diag.setLogger(logger: DiagLogger) function.
 */
exports.diag = diag_1.DiagAPI.instance();
exports.default = {
    trace: exports.trace,
    context: exports.context,
    propagation: exports.propagation,
    diag: exports.diag,
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 120 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.baggageEntryMetadataFromString = exports.createBaggage = void 0;
var baggage_1 = __webpack_require__(121);
var symbol_1 = __webpack_require__(122);
__exportStar(__webpack_require__(123), exports);
__exportStar(__webpack_require__(124), exports);
/**
 * Create a new Baggage with optional entries
 *
 * @param entries An array of baggage entries the new baggage should contain
 */
function createBaggage(entries) {
    if (entries === void 0) { entries = {}; }
    return new baggage_1.BaggageImpl(new Map(Object.entries(entries)));
}
exports.createBaggage = createBaggage;
/**
 * Create a serializable BaggageEntryMetadata object from a string.
 *
 * @param str string metadata. Format is currently not defined by the spec and has no special meaning.
 *
 */
function baggageEntryMetadataFromString(str) {
    if (typeof str !== 'string') {
        // @TODO log diagnostic
        str = '';
    }
    return {
        __TYPE__: symbol_1.baggageEntryMetadataSymbol,
        toString: function () {
            return str;
        },
    };
}
exports.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
//# sourceMappingURL=index.js.map

/***/ }),
/* 121 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaggageImpl = void 0;
var BaggageImpl = /** @class */ (function () {
    function BaggageImpl(entries) {
        this._entries = entries ? new Map(entries) : new Map();
    }
    BaggageImpl.prototype.getEntry = function (key) {
        var entry = this._entries.get(key);
        if (!entry) {
            return undefined;
        }
        return Object.assign({}, entry);
    };
    BaggageImpl.prototype.getAllEntries = function () {
        return Array.from(this._entries.entries()).map(function (_a) {
            var k = _a[0], v = _a[1];
            return [k, v];
        });
    };
    BaggageImpl.prototype.setEntry = function (key, entry) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntry = function (key) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntries = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var newBaggage = new BaggageImpl(this._entries);
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            newBaggage._entries.delete(key);
        }
        return newBaggage;
    };
    BaggageImpl.prototype.clear = function () {
        return new BaggageImpl();
    };
    return BaggageImpl;
}());
exports.BaggageImpl = BaggageImpl;
//# sourceMappingURL=baggage.js.map

/***/ }),
/* 122 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.baggageEntryMetadataSymbol = void 0;
/**
 * Symbol used to make BaggageEntryMetadata an opaque type
 */
exports.baggageEntryMetadataSymbol = Symbol('BaggageEntryMetadata');
//# sourceMappingURL=symbol.js.map

/***/ }),
/* 123 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Baggage.js.map

/***/ }),
/* 124 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Entry.js.map

/***/ }),
/* 125 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Exception.js.map

/***/ }),
/* 126 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Time.js.map

/***/ }),
/* 127 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(128), exports);
__exportStar(__webpack_require__(129), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 128 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DiagConsoleLogger = void 0;
var consoleMap = [
    { n: 'error', c: 'error' },
    { n: 'warn', c: 'warn' },
    { n: 'info', c: 'info' },
    { n: 'debug', c: 'debug' },
    { n: 'verbose', c: 'trace' },
];
/**
 * A simple Immutable Console based diagnostic logger which will output any messages to the Console.
 * If you want to limit the amount of logging to a specific level or lower use the
 * {@link createLogLevelDiagLogger}
 */
var DiagConsoleLogger = /** @class */ (function () {
    function DiagConsoleLogger() {
        function _consoleFunc(funcName) {
            return function () {
                var orgArguments = arguments;
                if (console) {
                    // Some environments only expose the console when the F12 developer console is open
                    var theFunc = console[funcName];
                    if (typeof theFunc !== 'function') {
                        // Not all environments support all functions
                        theFunc = console.log;
                    }
                    // One last final check
                    if (typeof theFunc === 'function') {
                        return theFunc.apply(console, orgArguments);
                    }
                }
            };
        }
        for (var i = 0; i < consoleMap.length; i++) {
            this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
        }
    }
    return DiagConsoleLogger;
}());
exports.DiagConsoleLogger = DiagConsoleLogger;
//# sourceMappingURL=consoleLogger.js.map

/***/ }),
/* 129 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DiagLogLevel = void 0;
/**
 * Defines the available internal logging levels for the diagnostic logger, the numeric values
 * of the levels are defined to match the original values from the initial LogLevel to avoid
 * compatibility/migration issues for any implementation that assume the numeric ordering.
 */
var DiagLogLevel;
(function (DiagLogLevel) {
    /** Diagnostic Logging level setting to disable all logging (except and forced logs) */
    DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
    /** Identifies an error scenario */
    DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
    /** Identifies a warning scenario */
    DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
    /** General informational log message */
    DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
    /** General debug log message */
    DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
    /**
     * Detailed trace level logging should only be used for development, should only be set
     * in a development environment.
     */
    DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
    /** Used to set the logging level to include all logging */
    DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel = exports.DiagLogLevel || (exports.DiagLogLevel = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 130 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NOOP_TEXT_MAP_PROPAGATOR = exports.NoopTextMapPropagator = void 0;
/**
 * No-op implementations of {@link TextMapPropagator}.
 */
var NoopTextMapPropagator = /** @class */ (function () {
    function NoopTextMapPropagator() {
    }
    /** Noop inject function does nothing */
    NoopTextMapPropagator.prototype.inject = function (_context, _carrier) { };
    /** Noop extract function does nothing and returns the input context */
    NoopTextMapPropagator.prototype.extract = function (context, _carrier) {
        return context;
    };
    NoopTextMapPropagator.prototype.fields = function () {
        return [];
    };
    return NoopTextMapPropagator;
}());
exports.NoopTextMapPropagator = NoopTextMapPropagator;
exports.NOOP_TEXT_MAP_PROPAGATOR = new NoopTextMapPropagator();
//# sourceMappingURL=NoopTextMapPropagator.js.map

/***/ }),
/* 131 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultTextMapSetter = exports.defaultTextMapGetter = void 0;
exports.defaultTextMapGetter = {
    get: function (carrier, key) {
        if (carrier == null) {
            return undefined;
        }
        return carrier[key];
    },
    keys: function (carrier) {
        if (carrier == null) {
            return [];
        }
        return Object.keys(carrier);
    },
};
exports.defaultTextMapSetter = {
    set: function (carrier, key, value) {
        if (carrier == null) {
            return;
        }
        carrier[key] = value;
    },
};
//# sourceMappingURL=TextMapPropagator.js.map

/***/ }),
/* 132 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=attributes.js.map

/***/ }),
/* 133 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Event.js.map

/***/ }),
/* 134 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=link_context.js.map

/***/ }),
/* 135 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=link.js.map

/***/ }),
/* 136 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NOOP_TRACER = exports.NoopTracer = void 0;
var context_1 = __webpack_require__(137);
var NoopSpan_1 = __webpack_require__(138);
var spancontext_utils_1 = __webpack_require__(139);
/**
 * No-op implementations of {@link Tracer}.
 */
var NoopTracer = /** @class */ (function () {
    function NoopTracer() {
    }
    // startSpan starts a noop span.
    NoopTracer.prototype.startSpan = function (name, options, context) {
        var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
            return new NoopSpan_1.NoopSpan();
        }
        var parentFromContext = context && context_1.getSpanContext(context);
        if (isSpanContext(parentFromContext) &&
            spancontext_utils_1.isSpanContextValid(parentFromContext)) {
            return new NoopSpan_1.NoopSpan(parentFromContext);
        }
        else {
            return new NoopSpan_1.NoopSpan();
        }
    };
    return NoopTracer;
}());
exports.NoopTracer = NoopTracer;
function isSpanContext(spanContext) {
    return (typeof spanContext === 'object' &&
        typeof spanContext['spanId'] === 'string' &&
        typeof spanContext['traceId'] === 'string' &&
        typeof spanContext['traceFlags'] === 'number');
}
exports.NOOP_TRACER = new NoopTracer();
//# sourceMappingURL=NoopTracer.js.map

/***/ }),
/* 137 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ROOT_CONTEXT = exports.createContextKey = exports.setBaggage = exports.getBaggage = exports.isInstrumentationSuppressed = exports.unsuppressInstrumentation = exports.suppressInstrumentation = exports.getSpanContext = exports.setSpanContext = exports.setSpan = exports.getSpan = void 0;
var NoopSpan_1 = __webpack_require__(138);
/**
 * span key
 */
var SPAN_KEY = createContextKey('OpenTelemetry Context Key SPAN');
/**
 * Shared key for indicating if instrumentation should be suppressed beyond
 * this current scope.
 */
var SUPPRESS_INSTRUMENTATION_KEY = createContextKey('OpenTelemetry Context Key SUPPRESS_INSTRUMENTATION');
/**
 * Baggage key
 */
var BAGGAGE_KEY = createContextKey('OpenTelemetry Baggage Key');
/**
 * Return the span if one exists
 *
 * @param context context to get span from
 */
function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
exports.getSpan = getSpan;
/**
 * Set the span on a context
 *
 * @param context context to use as parent
 * @param span span to set active
 */
function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
exports.setSpan = setSpan;
/**
 * Wrap span context in a NoopSpan and set as span in a new
 * context
 *
 * @param context context to set active span on
 * @param spanContext span context to be wrapped
 */
function setSpanContext(context, spanContext) {
    return setSpan(context, new NoopSpan_1.NoopSpan(spanContext));
}
exports.setSpanContext = setSpanContext;
/**
 * Get the span context of the span if it exists.
 *
 * @param context context to get values from
 */
function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.context();
}
exports.getSpanContext = getSpanContext;
/**
 * Sets value on context to indicate that instrumentation should
 * be suppressed beyond this current scope.
 *
 * @param context context to set the suppress instrumentation value on.
 */
function suppressInstrumentation(context) {
    return context.setValue(SUPPRESS_INSTRUMENTATION_KEY, true);
}
exports.suppressInstrumentation = suppressInstrumentation;
/**
 * Sets value on context to indicate that instrumentation should
 * no-longer be suppressed beyond this current scope.
 *
 * @param context context to set the suppress instrumentation value on.
 */
function unsuppressInstrumentation(context) {
    return context.setValue(SUPPRESS_INSTRUMENTATION_KEY, false);
}
exports.unsuppressInstrumentation = unsuppressInstrumentation;
/**
 * Return current suppress instrumentation value for the given context,
 * if it exists.
 *
 * @param context context check for the suppress instrumentation value.
 */
function isInstrumentationSuppressed(context) {
    return Boolean(context.getValue(SUPPRESS_INSTRUMENTATION_KEY));
}
exports.isInstrumentationSuppressed = isInstrumentationSuppressed;
/**
 * @param {Context} Context that manage all context values
 * @returns {Baggage} Extracted baggage from the context
 */
function getBaggage(context) {
    return context.getValue(BAGGAGE_KEY) || undefined;
}
exports.getBaggage = getBaggage;
/**
 * @param {Context} Context that manage all context values
 * @param {Baggage} baggage that will be set in the actual context
 */
function setBaggage(context, baggage) {
    return context.setValue(BAGGAGE_KEY, baggage);
}
exports.setBaggage = setBaggage;
/** Get a key to uniquely identify a context value */
function createContextKey(description) {
    return Symbol.for(description);
}
exports.createContextKey = createContextKey;
var BaseContext = /** @class */ (function () {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */
    function BaseContext(parentContext) {
        // for minification
        var self = this;
        self._currentContext = parentContext ? new Map(parentContext) : new Map();
        self.getValue = function (key) { return self._currentContext.get(key); };
        self.setValue = function (key, value) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = function (key) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
    return BaseContext;
}());
/** The root context is used as the default parent context when there is no active context */
exports.ROOT_CONTEXT = new BaseContext();
//# sourceMappingURL=context.js.map

/***/ }),
/* 138 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoopSpan = void 0;
var spancontext_utils_1 = __webpack_require__(139);
/**
 * The NoopSpan is the default {@link Span} that is used when no Span
 * implementation is available. All operations are no-op including context
 * propagation.
 */
var NoopSpan = /** @class */ (function () {
    function NoopSpan(_spanContext) {
        if (_spanContext === void 0) { _spanContext = spancontext_utils_1.INVALID_SPAN_CONTEXT; }
        this._spanContext = _spanContext;
    }
    // Returns a SpanContext.
    NoopSpan.prototype.context = function () {
        return this._spanContext;
    };
    // By default does nothing
    NoopSpan.prototype.setAttribute = function (_key, _value) {
        return this;
    };
    // By default does nothing
    NoopSpan.prototype.setAttributes = function (_attributes) {
        return this;
    };
    // By default does nothing
    NoopSpan.prototype.addEvent = function (_name, _attributes) {
        return this;
    };
    // By default does nothing
    NoopSpan.prototype.setStatus = function (_status) {
        return this;
    };
    // By default does nothing
    NoopSpan.prototype.updateName = function (_name) {
        return this;
    };
    // By default does nothing
    NoopSpan.prototype.end = function (_endTime) { };
    // isRecording always returns false for noopSpan.
    NoopSpan.prototype.isRecording = function () {
        return false;
    };
    // By default does nothing
    NoopSpan.prototype.recordException = function (_exception, _time) { };
    return NoopSpan;
}());
exports.NoopSpan = NoopSpan;
//# sourceMappingURL=NoopSpan.js.map

/***/ }),
/* 139 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isSpanContextValid = exports.isValidSpanId = exports.isValidTraceId = exports.INVALID_SPAN_CONTEXT = exports.INVALID_TRACEID = exports.INVALID_SPANID = void 0;
var trace_flags_1 = __webpack_require__(140);
var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
exports.INVALID_SPANID = '0000000000000000';
exports.INVALID_TRACEID = '00000000000000000000000000000000';
exports.INVALID_SPAN_CONTEXT = {
    traceId: exports.INVALID_TRACEID,
    spanId: exports.INVALID_SPANID,
    traceFlags: trace_flags_1.TraceFlags.NONE,
};
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== exports.INVALID_TRACEID;
}
exports.isValidTraceId = isValidTraceId;
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== exports.INVALID_SPANID;
}
exports.isValidSpanId = isValidSpanId;
/**
 * Returns true if this {@link SpanContext} is valid.
 * @return true if this {@link SpanContext} is valid.
 */
function isSpanContextValid(spanContext) {
    return (isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId));
}
exports.isSpanContextValid = isSpanContextValid;
//# sourceMappingURL=spancontext-utils.js.map

/***/ }),
/* 140 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TraceFlags = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TraceFlags;
(function (TraceFlags) {
    /** Represents no flag set. */
    TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */
    TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags = exports.TraceFlags || (exports.TraceFlags = {}));
//# sourceMappingURL=trace_flags.js.map

/***/ }),
/* 141 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NOOP_TRACER_PROVIDER = exports.NoopTracerProvider = void 0;
var NoopTracer_1 = __webpack_require__(136);
/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */
var NoopTracerProvider = /** @class */ (function () {
    function NoopTracerProvider() {
    }
    NoopTracerProvider.prototype.getTracer = function (_name, _version) {
        return NoopTracer_1.NOOP_TRACER;
    };
    return NoopTracerProvider;
}());
exports.NoopTracerProvider = NoopTracerProvider;
exports.NOOP_TRACER_PROVIDER = new NoopTracerProvider();
//# sourceMappingURL=NoopTracerProvider.js.map

/***/ }),
/* 142 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProxyTracer = void 0;
var NoopTracer_1 = __webpack_require__(136);
/**
 * Proxy tracer provided by the proxy tracer provider
 */
var ProxyTracer = /** @class */ (function () {
    function ProxyTracer(_provider, name, version) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
    }
    ProxyTracer.prototype.startSpan = function (name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    };
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */
    ProxyTracer.prototype._getTracer = function () {
        if (this._delegate) {
            return this._delegate;
        }
        var tracer = this._provider.getDelegateTracer(this.name, this.version);
        if (!tracer) {
            return NoopTracer_1.NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
    };
    return ProxyTracer;
}());
exports.ProxyTracer = ProxyTracer;
//# sourceMappingURL=ProxyTracer.js.map

/***/ }),
/* 143 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProxyTracerProvider = void 0;
var ProxyTracer_1 = __webpack_require__(142);
var NoopTracerProvider_1 = __webpack_require__(141);
/**
 * Tracer provider which provides {@link ProxyTracer}s.
 *
 * Before a delegate is set, tracers provided are NoOp.
 *   When a delegate is set, traces are provided from the delegate.
 *   When a delegate is set after tracers have already been provided,
 *   all tracers already provided will use the provided delegate implementation.
 */
var ProxyTracerProvider = /** @class */ (function () {
    function ProxyTracerProvider() {
    }
    /**
     * Get a {@link ProxyTracer}
     */
    ProxyTracerProvider.prototype.getTracer = function (name, version) {
        var _a;
        return ((_a = this.getDelegateTracer(name, version)) !== null && _a !== void 0 ? _a : new ProxyTracer_1.ProxyTracer(this, name, version));
    };
    ProxyTracerProvider.prototype.getDelegate = function () {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NoopTracerProvider_1.NOOP_TRACER_PROVIDER;
    };
    /**
     * Set the delegate tracer provider
     */
    ProxyTracerProvider.prototype.setDelegate = function (delegate) {
        this._delegate = delegate;
    };
    ProxyTracerProvider.prototype.getDelegateTracer = function (name, version) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version);
    };
    return ProxyTracerProvider;
}());
exports.ProxyTracerProvider = ProxyTracerProvider;
//# sourceMappingURL=ProxyTracerProvider.js.map

/***/ }),
/* 144 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Sampler.js.map

/***/ }),
/* 145 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SamplingDecision = void 0;
/**
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 */
var SamplingDecision;
(function (SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */
    SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */
    SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */
    SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision = exports.SamplingDecision || (exports.SamplingDecision = {}));
//# sourceMappingURL=SamplingResult.js.map

/***/ }),
/* 146 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=span_context.js.map

/***/ }),
/* 147 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpanKind = void 0;
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SpanKind;
(function (SpanKind) {
    /** Default value. Indicates that the span is used internally. */
    SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */
    SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */
    SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind = exports.SpanKind || (exports.SpanKind = {}));
//# sourceMappingURL=span_kind.js.map

/***/ }),
/* 148 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=span.js.map

/***/ }),
/* 149 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=SpanOptions.js.map

/***/ }),
/* 150 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpanStatusCode = void 0;
/**
 * An enumeration of status codes.
 */
var SpanStatusCode;
(function (SpanStatusCode) {
    /**
     * The default status.
     */
    SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */
    SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */
    SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode = exports.SpanStatusCode || (exports.SpanStatusCode = {}));
//# sourceMappingURL=status.js.map

/***/ }),
/* 151 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=TimedEvent.js.map

/***/ }),
/* 152 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=trace_state.js.map

/***/ }),
/* 153 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=tracer_provider.js.map

/***/ }),
/* 154 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=tracer.js.map

/***/ }),
/* 155 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoopContextManager = void 0;
var context_1 = __webpack_require__(137);
var NoopContextManager = /** @class */ (function () {
    function NoopContextManager() {
    }
    NoopContextManager.prototype.active = function () {
        return context_1.ROOT_CONTEXT;
    };
    NoopContextManager.prototype.with = function (_context, fn, thisArg) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return fn.call.apply(fn, __spreadArrays([thisArg], args));
    };
    NoopContextManager.prototype.bind = function (target, _context) {
        return target;
    };
    NoopContextManager.prototype.enable = function () {
        return this;
    };
    NoopContextManager.prototype.disable = function () {
        return this;
    };
    return NoopContextManager;
}());
exports.NoopContextManager = NoopContextManager;
//# sourceMappingURL=NoopContextManager.js.map

/***/ }),
/* 156 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),
/* 157 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContextAPI = void 0;
var NoopContextManager_1 = __webpack_require__(155);
var global_utils_1 = __webpack_require__(158);
var API_NAME = 'context';
var NOOP_CONTEXT_MANAGER = new NoopContextManager_1.NoopContextManager();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 */
var ContextAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function ContextAPI() {
    }
    /** Get the singleton instance of the Context API */
    ContextAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new ContextAPI();
        }
        return this._instance;
    };
    /**
     * Set the current context manager. Returns the initialized context manager
     */
    ContextAPI.prototype.setGlobalContextManager = function (contextManager) {
        global_utils_1.registerGlobal(API_NAME, contextManager);
        return contextManager;
    };
    /**
     * Get the currently active context
     */
    ContextAPI.prototype.active = function () {
        return this._getContextManager().active();
    };
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */
    ContextAPI.prototype.with = function (context, fn, thisArg) {
        var _a;
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return (_a = this._getContextManager()).with.apply(_a, __spreadArrays([context, fn, thisArg], args));
    };
    /**
     * Bind a context to a target function or event emitter
     *
     * @param target function or event emitter to bind
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     */
    ContextAPI.prototype.bind = function (target, context) {
        if (context === void 0) { context = this.active(); }
        return this._getContextManager().bind(target, context);
    };
    ContextAPI.prototype._getContextManager = function () {
        return global_utils_1.getGlobal(API_NAME) || NOOP_CONTEXT_MANAGER;
    };
    /** Disable and remove the global context manager */
    ContextAPI.prototype.disable = function () {
        this._getContextManager().disable();
        global_utils_1.unregisterGlobal(API_NAME);
    };
    return ContextAPI;
}());
exports.ContextAPI = ContextAPI;
//# sourceMappingURL=context.js.map

/***/ }),
/* 158 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unregisterGlobal = exports.getGlobal = exports.registerGlobal = void 0;
var __1 = __webpack_require__(119);
var platform_1 = __webpack_require__(159);
var version_1 = __webpack_require__(161);
var semver_1 = __webpack_require__(162);
var major = version_1.VERSION.split('.')[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("io.opentelemetry.js.api." + major);
var _global = platform_1._globalThis;
function registerGlobal(type, instance, allowOverride) {
    var _a;
    if (allowOverride === void 0) { allowOverride = false; }
    _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: version_1.VERSION,
    };
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (!allowOverride && api[type]) {
        // already registered an API of this type
        var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
        __1.diag.error(err.stack || err.message);
        return;
    }
    if (api.version !== version_1.VERSION) {
        // All registered APIs must be of the same version exactly
        var err = new Error('@opentelemetry/api: All API registration versions must match');
        __1.diag.error(err.stack || err.message);
        return;
    }
    api[type] = instance;
}
exports.registerGlobal = registerGlobal;
function getGlobal(type) {
    var _a, _b;
    var globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !semver_1.isCompatible(globalVersion)) {
        return;
    }
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
exports.getGlobal = getGlobal;
function unregisterGlobal(type) {
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) {
        delete api[type];
    }
}
exports.unregisterGlobal = unregisterGlobal;
//# sourceMappingURL=global-utils.js.map

/***/ }),
/* 159 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(160), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 160 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._globalThis = void 0;
/** only globals that common to node and browsers are allowed */
// eslint-disable-next-line node/no-unsupported-features/es-builtins, no-undef
exports._globalThis = typeof globalThis === 'object' ? globalThis : window;
//# sourceMappingURL=globalThis.js.map

/***/ }),
/* 161 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VERSION = void 0;
// this is autogenerated file, see scripts/version-update.js
exports.VERSION = '1.0.0-rc.0';
//# sourceMappingURL=version.js.map

/***/ }),
/* 162 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isCompatible = exports._makeCompatibilityCheck = void 0;
var version_1 = __webpack_require__(161);
var re = /^(\d+)\.(\d+)\.(\d+)(?:-(.*))?$/;
/**
 * Create a function to test an API version to see if it is compatible with the provided ownVersion.
 *
 * The returned function has the following semantics:
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param ownVersion version which should be checked against
 */
function _makeCompatibilityCheck(ownVersion) {
    var acceptedVersions = new Set([ownVersion]);
    var rejectedVersions = new Set();
    var myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) {
        // we cannot guarantee compatibility so we always return noop
        return function () { return false; };
    }
    var ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
    };
    function _reject(v) {
        rejectedVersions.add(v);
        return false;
    }
    function _accept(v) {
        acceptedVersions.add(v);
        return true;
    }
    return function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) {
            return true;
        }
        if (rejectedVersions.has(globalVersion)) {
            return false;
        }
        var globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) {
            // cannot parse other version
            // we cannot guarantee compatibility so we always noop
            return _reject(globalVersion);
        }
        var globalVersionParsed = {
            major: +globalVersionMatch[1],
            minor: +globalVersionMatch[2],
            patch: +globalVersionMatch[3],
        };
        // major versions must match
        if (ownVersionParsed.major !== globalVersionParsed.major) {
            return _reject(globalVersion);
        }
        if (ownVersionParsed.major === 0) {
            if (ownVersionParsed.minor === globalVersionParsed.minor &&
                ownVersionParsed.patch <= globalVersionParsed.patch) {
                return _accept(globalVersion);
            }
            return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) {
            return _accept(globalVersion);
        }
        return _reject(globalVersion);
    };
}
exports._makeCompatibilityCheck = _makeCompatibilityCheck;
/**
 * Test an API version to see if it is compatible with this API.
 *
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param version version of the API requesting an instance of the global API
 */
exports.isCompatible = _makeCompatibilityCheck(version_1.VERSION);
//# sourceMappingURL=semver.js.map

/***/ }),
/* 163 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TraceAPI = void 0;
var ProxyTracerProvider_1 = __webpack_require__(143);
var spancontext_utils_1 = __webpack_require__(139);
var global_utils_1 = __webpack_require__(158);
var API_NAME = 'trace';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 */
var TraceAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function TraceAPI() {
        this._proxyTracerProvider = new ProxyTracerProvider_1.ProxyTracerProvider();
        this.isSpanContextValid = spancontext_utils_1.isSpanContextValid;
    }
    /** Get the singleton instance of the Trace API */
    TraceAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new TraceAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global tracer. Returns the initialized global tracer provider
     */
    TraceAPI.prototype.setGlobalTracerProvider = function (provider) {
        this._proxyTracerProvider.setDelegate(provider);
        global_utils_1.registerGlobal(API_NAME, this._proxyTracerProvider);
        return this._proxyTracerProvider;
    };
    /**
     * Returns the global tracer provider.
     */
    TraceAPI.prototype.getTracerProvider = function () {
        return global_utils_1.getGlobal(API_NAME) || this._proxyTracerProvider;
    };
    /**
     * Returns a tracer from the global tracer provider.
     */
    TraceAPI.prototype.getTracer = function (name, version) {
        return this.getTracerProvider().getTracer(name, version);
    };
    /** Remove the global tracer provider */
    TraceAPI.prototype.disable = function () {
        global_utils_1.unregisterGlobal(API_NAME);
        this._proxyTracerProvider = new ProxyTracerProvider_1.ProxyTracerProvider();
    };
    return TraceAPI;
}());
exports.TraceAPI = TraceAPI;
//# sourceMappingURL=trace.js.map

/***/ }),
/* 164 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PropagationAPI = void 0;
var NoopTextMapPropagator_1 = __webpack_require__(130);
var TextMapPropagator_1 = __webpack_require__(131);
var global_utils_1 = __webpack_require__(158);
var API_NAME = 'propagation';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Propagation API
 */
var PropagationAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function PropagationAPI() {
    }
    /** Get the singleton instance of the Propagator API */
    PropagationAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new PropagationAPI();
        }
        return this._instance;
    };
    /**
     * Set the current propagator. Returns the initialized propagator
     */
    PropagationAPI.prototype.setGlobalPropagator = function (propagator) {
        global_utils_1.registerGlobal(API_NAME, propagator);
        return propagator;
    };
    /**
     * Inject context into a carrier to be propagated inter-process
     *
     * @param context Context carrying tracing data to inject
     * @param carrier carrier to inject context into
     * @param setter Function used to set values on the carrier
     */
    PropagationAPI.prototype.inject = function (context, carrier, setter) {
        if (setter === void 0) { setter = TextMapPropagator_1.defaultTextMapSetter; }
        return this._getGlobalPropagator().inject(context, carrier, setter);
    };
    /**
     * Extract context from a carrier
     *
     * @param context Context which the newly created context will inherit from
     * @param carrier Carrier to extract context from
     * @param getter Function used to extract keys from a carrier
     */
    PropagationAPI.prototype.extract = function (context, carrier, getter) {
        if (getter === void 0) { getter = TextMapPropagator_1.defaultTextMapGetter; }
        return this._getGlobalPropagator().extract(context, carrier, getter);
    };
    /**
     * Return a list of all fields which may be used by the propagator.
     */
    PropagationAPI.prototype.fields = function () {
        return this._getGlobalPropagator().fields();
    };
    /** Remove the global propagator */
    PropagationAPI.prototype.disable = function () {
        global_utils_1.unregisterGlobal(API_NAME);
    };
    PropagationAPI.prototype._getGlobalPropagator = function () {
        return global_utils_1.getGlobal(API_NAME) || NoopTextMapPropagator_1.NOOP_TEXT_MAP_PROPAGATOR;
    };
    return PropagationAPI;
}());
exports.PropagationAPI = PropagationAPI;
//# sourceMappingURL=propagation.js.map

/***/ }),
/* 165 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DiagAPI = void 0;
var logLevelLogger_1 = __webpack_require__(166);
var types_1 = __webpack_require__(129);
var global_utils_1 = __webpack_require__(158);
var API_NAME = 'diag';
/**
 * Singleton object which represents the entry point to the OpenTelemetry internal
 * diagnostic API
 */
var DiagAPI = /** @class */ (function () {
    /**
     * Private internal constructor
     * @private
     */
    function DiagAPI() {
        function _logProxy(funcName) {
            return function () {
                var logger = global_utils_1.getGlobal('diag');
                // shortcut if logger not set
                if (!logger)
                    return;
                return logger[funcName].apply(logger, 
                // work around Function.prototype.apply types
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                arguments);
            };
        }
        // Using self local variable for minification purposes as 'this' cannot be minified
        var self = this;
        // DiagAPI specific functions
        self.setLogger = function (logger, logLevel) {
            var _a;
            if (logLevel === void 0) { logLevel = types_1.DiagLogLevel.INFO; }
            if (logger === self) {
                // There isn't much we can do here.
                // Logging to the console might break the user application.
                // Try to log to self. If a logger was previously registered it will receive the log.
                var err = new Error('Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation');
                self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
                return;
            }
            global_utils_1.registerGlobal('diag', logLevelLogger_1.createLogLevelDiagLogger(logLevel, logger), true);
        };
        self.disable = function () {
            global_utils_1.unregisterGlobal(API_NAME);
        };
        self.verbose = _logProxy('verbose');
        self.debug = _logProxy('debug');
        self.info = _logProxy('info');
        self.warn = _logProxy('warn');
        self.error = _logProxy('error');
    }
    /** Get the singleton instance of the DiagAPI API */
    DiagAPI.instance = function () {
        if (!this._instance) {
            this._instance = new DiagAPI();
        }
        return this._instance;
    };
    return DiagAPI;
}());
exports.DiagAPI = DiagAPI;
//# sourceMappingURL=diag.js.map

/***/ }),
/* 166 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createLogLevelDiagLogger = void 0;
var types_1 = __webpack_require__(129);
function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < types_1.DiagLogLevel.NONE) {
        maxLevel = types_1.DiagLogLevel.NONE;
    }
    else if (maxLevel > types_1.DiagLogLevel.ALL) {
        maxLevel = types_1.DiagLogLevel.ALL;
    }
    // In case the logger is null or undefined
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
        var theFunc = logger[funcName];
        if (typeof theFunc === 'function' && maxLevel >= theLevel) {
            return theFunc.bind(logger);
        }
        return function () { };
    }
    return {
        error: _filterFunc('error', types_1.DiagLogLevel.ERROR),
        warn: _filterFunc('warn', types_1.DiagLogLevel.WARN),
        info: _filterFunc('info', types_1.DiagLogLevel.INFO),
        debug: _filterFunc('debug', types_1.DiagLogLevel.DEBUG),
        verbose: _filterFunc('verbose', types_1.DiagLogLevel.VERBOSE),
    };
}
exports.createLogLevelDiagLogger = createLogLevelDiagLogger;
//# sourceMappingURL=logLevelLogger.js.map

/***/ }),
/* 167 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractSpanContextFromTraceParentHeader": () => (/* binding */ extractSpanContextFromTraceParentHeader),
/* harmony export */   "getTraceParentHeader": () => (/* binding */ getTraceParentHeader)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var VERSION = "00";
/**
 * Generates a `SpanContext` given a `traceparent` header value.
 * @param traceParent - Serialized span context data as a `traceparent` header value.
 * @returns The `SpanContext` generated from the `traceparent` value.
 */
function extractSpanContextFromTraceParentHeader(traceParentHeader) {
    var parts = traceParentHeader.split("-");
    if (parts.length !== 4) {
        return;
    }
    var version = parts[0], traceId = parts[1], spanId = parts[2], traceOptions = parts[3];
    if (version !== VERSION) {
        return;
    }
    var traceFlags = parseInt(traceOptions, 16);
    var spanContext = {
        spanId: spanId,
        traceId: traceId,
        traceFlags: traceFlags
    };
    return spanContext;
}
/**
 * Generates a `traceparent` value given a span context.
 * @param spanContext - Contains context for a specific span.
 * @returns The `spanContext` represented as a `traceparent` value.
 */
function getTraceParentHeader(spanContext) {
    var missingFields = [];
    if (!spanContext.traceId) {
        missingFields.push("traceId");
    }
    if (!spanContext.spanId) {
        missingFields.push("spanId");
    }
    if (missingFields.length) {
        return;
    }
    var flags = spanContext.traceFlags || 0 /* NONE */;
    var hexFlags = flags.toString(16);
    var traceFlags = hexFlags.length === 1 ? "0" + hexFlags : hexFlags;
    // https://www.w3.org/TR/trace-context/#traceparent-header-field-values
    return VERSION + "-" + spanContext.traceId + "-" + spanContext.spanId + "-" + traceFlags;
}
//# sourceMappingURL=traceParentHeader.js.map

/***/ }),
/* 168 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableResponseDecompressionPolicy": () => (/* binding */ disableResponseDecompressionPolicy),
/* harmony export */   "DisableResponseDecompressionPolicy": () => (/* binding */ DisableResponseDecompressionPolicy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _requestPolicy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/*
 * NOTE: When moving this file, please update "browser" section in package.json
 */

var DisbleResponseDecompressionNotSupportedInBrowser = new Error("DisableResponseDecompressionPolicy is not supported in browser environment");
/**
 * {@link DisableResponseDecompressionPolicy} is not supported in browser and attempting
 * to use it will results in error being thrown.
 */
function disableResponseDecompressionPolicy() {
    return {
        create: function (_nextPolicy, _options) {
            throw DisbleResponseDecompressionNotSupportedInBrowser;
        }
    };
}
var DisableResponseDecompressionPolicy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(DisableResponseDecompressionPolicy, _super);
    function DisableResponseDecompressionPolicy(nextPolicy, options) {
        var _this = _super.call(this, nextPolicy, options) || this;
        throw DisbleResponseDecompressionNotSupportedInBrowser;
        return _this;
    }
    DisableResponseDecompressionPolicy.prototype.sendRequest = function (_request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_a) {
                throw DisbleResponseDecompressionNotSupportedInBrowser;
            });
        });
    };
    return DisableResponseDecompressionPolicy;
}(_requestPolicy__WEBPACK_IMPORTED_MODULE_1__.BaseRequestPolicy));

//# sourceMappingURL=disableResponseDecompressionPolicy.browser.js.map

/***/ }),
/* 169 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdentityRestClient": () => (/* binding */ IdentityRestClient),
/* harmony export */   "IdentityRestClientContext": () => (/* reexport safe */ _identityRestClientContext__WEBPACK_IMPORTED_MODULE_0__.IdentityRestClientContext),
/* harmony export */   "IdentityRestModels": () => (/* reexport module object */ _models__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "IdentityRestMappers": () => (/* reexport module object */ _models_mappers__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "CommunicationIdentity": () => (/* reexport safe */ _operations__WEBPACK_IMPORTED_MODULE_4__.CommunicationIdentity)
/* harmony export */ });
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(171);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(175);
/* harmony import */ var _models_mappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(173);
/* harmony import */ var _identityRestClientContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(176);
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */




class IdentityRestClient extends _identityRestClientContext__WEBPACK_IMPORTED_MODULE_0__.IdentityRestClientContext {
    /**
     * Initializes a new instance of the IdentityRestClient class.
     * @param endpoint The communication resource, for example https://my-resource.communication.azure.com
     * @param options The parameter options
     */
    constructor(endpoint, options) {
        super(endpoint, options);
        this.communicationIdentity = new _operations__WEBPACK_IMPORTED_MODULE_1__.CommunicationIdentity(this);
    }
}
// Operation Specifications


//# sourceMappingURL=identityRestClient.js.map

/***/ }),
/* 170 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdentityRestClientContext": () => (/* binding */ IdentityRestClientContext)
/* harmony export */ });
/* harmony import */ var _azure_core_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _azure_core_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98);
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

const packageName = "azure-communication-identity";
const packageVersion = "1.0.0";
class IdentityRestClientContext extends _azure_core_http__WEBPACK_IMPORTED_MODULE_0__.ServiceClient {
    /**
     * Initializes a new instance of the IdentityRestClientContext class.
     * @param endpoint The communication resource, for example https://my-resource.communication.azure.com
     * @param options The parameter options
     */
    constructor(endpoint, options) {
        if (endpoint === undefined) {
            throw new Error("'endpoint' cannot be null");
        }
        // Initializing default values for options
        if (!options) {
            options = {};
        }
        if (!options.userAgent) {
            const defaultUserAgent = _azure_core_http__WEBPACK_IMPORTED_MODULE_1__.getDefaultUserAgentValue();
            options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
        }
        super(undefined, options);
        this.requestContentType = "application/json; charset=utf-8";
        this.baseUri = options.endpoint || "{endpoint}";
        // Parameter assignments
        this.endpoint = endpoint;
        // Assigning values to Constant parameters
        this.apiVersion = options.apiVersion || "2021-03-07";
    }
}
//# sourceMappingURL=identityRestClientContext.js.map

/***/ }),
/* 171 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationIdentity": () => (/* binding */ CommunicationIdentity)
/* harmony export */ });
/* harmony import */ var _azure_core_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _azure_core_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91);
/* harmony import */ var _models_mappers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(173);
/* harmony import */ var _models_parameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(174);
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */



/**
 * Class representing a CommunicationIdentity.
 */
class CommunicationIdentity {
    /**
     * Initialize a new instance of the class CommunicationIdentity class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Create a new identity.
     * @param options The options parameters.
     */
    create(options) {
        const operationOptions = _azure_core_http__WEBPACK_IMPORTED_MODULE_0__.operationOptionsToRequestOptionsBase(options || {});
        return this.client.sendOperationRequest({ options: operationOptions }, createOperationSpec);
    }
    /**
     * Delete the identity, revoke all tokens for the identity and delete all associated data.
     * @param id Identifier of the identity to be deleted.
     * @param options The options parameters.
     */
    delete(id, options) {
        const operationOptions = _azure_core_http__WEBPACK_IMPORTED_MODULE_0__.operationOptionsToRequestOptionsBase(options || {});
        return this.client.sendOperationRequest({ id, options: operationOptions }, deleteOperationSpec);
    }
    /**
     * Revoke all access tokens for the specific identity.
     * @param id Identifier of the identity.
     * @param options The options parameters.
     */
    revokeAccessTokens(id, options) {
        const operationOptions = _azure_core_http__WEBPACK_IMPORTED_MODULE_0__.operationOptionsToRequestOptionsBase(options || {});
        return this.client.sendOperationRequest({ id, options: operationOptions }, revokeAccessTokensOperationSpec);
    }
    /**
     * Issue a new token for an identity.
     * @param id Identifier of the identity to issue token for.
     * @param body Requesting scopes for the new token.
     * @param options The options parameters.
     */
    issueAccessToken(id, body, options) {
        const operationOptions = _azure_core_http__WEBPACK_IMPORTED_MODULE_0__.operationOptionsToRequestOptionsBase(options || {});
        return this.client.sendOperationRequest({ id, body, options: operationOptions }, issueAccessTokenOperationSpec);
    }
}
// Operation Specifications
const serializer = new _azure_core_http__WEBPACK_IMPORTED_MODULE_1__.Serializer(_models_mappers__WEBPACK_IMPORTED_MODULE_2__, /* isXml */ false);
const createOperationSpec = {
    path: "/identities",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.CommunicationIdentityAccessTokenResult
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.CommunicationErrorResponse
        }
    },
    requestBody: _models_parameters__WEBPACK_IMPORTED_MODULE_3__.body,
    queryParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.apiVersion],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.endpoint],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.contentType],
    mediaType: "json",
    serializer
};
const deleteOperationSpec = {
    path: "/identities/{id}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.CommunicationErrorResponse
        }
    },
    queryParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.apiVersion],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.endpoint, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.id],
    serializer
};
const revokeAccessTokensOperationSpec = {
    path: "/identities/{id}/:revokeAccessTokens",
    httpMethod: "POST",
    responses: {
        204: {},
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.CommunicationErrorResponse
        }
    },
    queryParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.apiVersion],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.endpoint, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.id],
    serializer
};
const issueAccessTokenOperationSpec = {
    path: "/identities/{id}/:issueAccessToken",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.CommunicationIdentityAccessToken
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.CommunicationErrorResponse
        }
    },
    requestBody: _models_parameters__WEBPACK_IMPORTED_MODULE_3__.body1,
    queryParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.apiVersion],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.endpoint, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.id],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.contentType],
    mediaType: "json",
    serializer
};
//# sourceMappingURL=communicationIdentity.js.map

/***/ }),
/* 172 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "operationOptionsToRequestOptionsBase": () => (/* binding */ operationOptionsToRequestOptionsBase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);

/**
 * Converts an OperationOptions to a RequestOptionsBase
 *
 * @param opts - OperationOptions object to convert to RequestOptionsBase
 */
function operationOptionsToRequestOptionsBase(opts) {
    var requestOptions = opts.requestOptions, tracingOptions = opts.tracingOptions, additionalOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(opts, ["requestOptions", "tracingOptions"]);
    var result = additionalOptions;
    if (requestOptions) {
        result = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, result), requestOptions);
    }
    if (tracingOptions) {
        result.spanOptions = tracingOptions.spanOptions;
        result.tracingContext = tracingOptions.tracingContext;
    }
    return result;
}
//# sourceMappingURL=operationOptions.js.map

/***/ }),
/* 173 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationIdentityCreateRequest": () => (/* binding */ CommunicationIdentityCreateRequest),
/* harmony export */   "CommunicationIdentityAccessTokenResult": () => (/* binding */ CommunicationIdentityAccessTokenResult),
/* harmony export */   "CommunicationIdentity": () => (/* binding */ CommunicationIdentity),
/* harmony export */   "CommunicationIdentityAccessToken": () => (/* binding */ CommunicationIdentityAccessToken),
/* harmony export */   "CommunicationErrorResponse": () => (/* binding */ CommunicationErrorResponse),
/* harmony export */   "CommunicationError": () => (/* binding */ CommunicationError),
/* harmony export */   "CommunicationIdentityAccessTokenRequest": () => (/* binding */ CommunicationIdentityAccessTokenRequest)
/* harmony export */ });
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
const CommunicationIdentityCreateRequest = {
    type: {
        name: "Composite",
        className: "CommunicationIdentityCreateRequest",
        modelProperties: {
            createTokenWithScopes: {
                serializedName: "createTokenWithScopes",
                type: {
                    name: "Sequence",
                    element: { type: { name: "String" } }
                }
            }
        }
    }
};
const CommunicationIdentityAccessTokenResult = {
    type: {
        name: "Composite",
        className: "CommunicationIdentityAccessTokenResult",
        modelProperties: {
            identity: {
                serializedName: "identity",
                type: {
                    name: "Composite",
                    className: "CommunicationIdentity"
                }
            },
            accessToken: {
                serializedName: "accessToken",
                type: {
                    name: "Composite",
                    className: "CommunicationIdentityAccessToken"
                }
            }
        }
    }
};
const CommunicationIdentity = {
    type: {
        name: "Composite",
        className: "CommunicationIdentity",
        modelProperties: {
            id: {
                serializedName: "id",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const CommunicationIdentityAccessToken = {
    type: {
        name: "Composite",
        className: "CommunicationIdentityAccessToken",
        modelProperties: {
            token: {
                serializedName: "token",
                required: true,
                type: {
                    name: "String"
                }
            },
            expiresOn: {
                serializedName: "expiresOn",
                required: true,
                type: {
                    name: "DateTime"
                }
            }
        }
    }
};
const CommunicationErrorResponse = {
    type: {
        name: "Composite",
        className: "CommunicationErrorResponse",
        modelProperties: {
            error: {
                serializedName: "error",
                type: {
                    name: "Composite",
                    className: "CommunicationError"
                }
            }
        }
    }
};
const CommunicationError = {
    type: {
        name: "Composite",
        className: "CommunicationError",
        modelProperties: {
            code: {
                serializedName: "code",
                required: true,
                type: {
                    name: "String"
                }
            },
            message: {
                serializedName: "message",
                required: true,
                type: {
                    name: "String"
                }
            },
            target: {
                serializedName: "target",
                readOnly: true,
                type: {
                    name: "String"
                }
            },
            details: {
                serializedName: "details",
                readOnly: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: { name: "Composite", className: "CommunicationError" }
                    }
                }
            },
            innerError: {
                serializedName: "innerError",
                type: {
                    name: "Composite",
                    className: "CommunicationError"
                }
            }
        }
    }
};
const CommunicationIdentityAccessTokenRequest = {
    type: {
        name: "Composite",
        className: "CommunicationIdentityAccessTokenRequest",
        modelProperties: {
            scopes: {
                serializedName: "scopes",
                required: true,
                type: {
                    name: "Sequence",
                    element: { type: { name: "String" } }
                }
            }
        }
    }
};
//# sourceMappingURL=mappers.js.map

/***/ }),
/* 174 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentType": () => (/* binding */ contentType),
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "endpoint": () => (/* binding */ endpoint),
/* harmony export */   "apiVersion": () => (/* binding */ apiVersion),
/* harmony export */   "id": () => (/* binding */ id),
/* harmony export */   "body1": () => (/* binding */ body1)
/* harmony export */ });
/* harmony import */ var _models_mappers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

const contentType = {
    parameterPath: ["options", "contentType"],
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Content-Type",
        type: {
            name: "String"
        }
    }
};
const body = {
    parameterPath: ["options", "body"],
    mapper: _models_mappers__WEBPACK_IMPORTED_MODULE_0__.CommunicationIdentityCreateRequest
};
const endpoint = {
    parameterPath: "endpoint",
    mapper: {
        serializedName: "endpoint",
        required: true,
        type: {
            name: "String"
        }
    },
    skipEncoding: true
};
const apiVersion = {
    parameterPath: "apiVersion",
    mapper: {
        defaultValue: "2021-03-07",
        isConstant: true,
        serializedName: "api-version",
        type: {
            name: "String"
        }
    }
};
const id = {
    parameterPath: "id",
    mapper: {
        serializedName: "id",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body1 = {
    parameterPath: "body",
    mapper: _models_mappers__WEBPACK_IMPORTED_MODULE_0__.CommunicationIdentityAccessTokenRequest
};
//# sourceMappingURL=parameters.js.map

/***/ }),
/* 175 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

//# sourceMappingURL=index.js.map

/***/ }),
/* 176 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationIdentity": () => (/* reexport safe */ _communicationIdentity__WEBPACK_IMPORTED_MODULE_0__.CommunicationIdentity)
/* harmony export */ });
/* harmony import */ var _communicationIdentity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

//# sourceMappingURL=index.js.map

/***/ }),
/* 177 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSpan": () => (/* binding */ createSpan)
/* harmony export */ });
/* harmony import */ var _azure_core_tracing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Creates a span using the global tracer.
 * @internal
 */
const createSpan = (0,_azure_core_tracing__WEBPACK_IMPORTED_MODULE_0__.createSpanFunction)({
    packagePrefix: "Azure.Communication",
    namespace: "Microsoft.Communication"
});
//# sourceMappingURL=tracing.js.map

/***/ }),
/* 178 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSpanFunction": () => (/* binding */ createSpanFunction)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_tracerProxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(179);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.



/**
 * Creates a function that can be used to create spans using the global tracer.
 *
 * Usage:
 *
 * ```typescript
 * // once
 * const createSpan = createSpanFunction({ packagePrefix: "Azure.Data.AppConfiguration", namespace: "Microsoft.AppConfiguration" });
 *
 * // in each operation
 * const span = createSpan("deleteConfigurationSetting", operationOptions);
 *    // code...
 * span.end();
 * ```
 *
 * @hidden
 * @param args - allows configuration of the prefix for each span as well as the az.namespace field.
 */
function createSpanFunction(args) {
    return function (operationName, operationOptions) {
        var tracer = (0,_src_tracerProxy__WEBPACK_IMPORTED_MODULE_1__.getTracer)();
        var tracingOptions = (operationOptions === null || operationOptions === void 0 ? void 0 : operationOptions.tracingOptions) || {};
        var spanOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ kind: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.SpanKind.INTERNAL }, tracingOptions.spanOptions);
        var spanName = args.packagePrefix ? args.packagePrefix + "." + operationName : operationName;
        var span = tracer.startSpan(spanName, spanOptions);
        if (args.namespace) {
            span.setAttribute("az.namespace", args.namespace);
        }
        var newSpanOptions = tracingOptions.spanOptions || {};
        if (span.isRecording() && args.namespace) {
            newSpanOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, tracingOptions.spanOptions), { parent: span.context(), attributes: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, spanOptions.attributes), { "az.namespace": args.namespace }) });
        }
        var newTracingOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, tracingOptions), { spanOptions: newSpanOptions });
        var newOperationOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, operationOptions), { tracingOptions: newTracingOptions });
        return {
            span: span,
            updatedOptions: newOperationOptions
        };
    };
}
//# sourceMappingURL=createSpan.js.map

/***/ }),
/* 179 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTracer": () => (/* binding */ setTracer),
/* harmony export */   "getTracer": () => (/* binding */ getTracer)
/* harmony export */ });
/* harmony import */ var _tracers_noop_noOpTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(182);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


var defaultTracer;
function getDefaultTracer() {
    if (!defaultTracer) {
        defaultTracer = new _tracers_noop_noOpTracer__WEBPACK_IMPORTED_MODULE_0__.NoOpTracer();
    }
    return defaultTracer;
}
/**
 * Sets the global tracer, enabling tracing for the Azure SDK.
 * @param tracer - An OpenTelemetry Tracer instance.
 */
function setTracer(tracer) {
    var cache = (0,_utils_cache__WEBPACK_IMPORTED_MODULE_1__.getCache)();
    cache.tracer = tracer;
}
/**
 * Retrieves the active tracer, or returns a
 * no-op implementation if one is not set.
 */
function getTracer() {
    var cache = (0,_utils_cache__WEBPACK_IMPORTED_MODULE_1__.getCache)();
    if (!cache.tracer) {
        return getDefaultTracer();
    }
    return cache.tracer;
}
//# sourceMappingURL=tracerProxy.js.map

/***/ }),
/* 180 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoOpTracer": () => (/* binding */ NoOpTracer)
/* harmony export */ });
/* harmony import */ var _noOpSpan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * A no-op implementation of Tracer that can be used when tracing
 * is disabled.
 */
var NoOpTracer = /** @class */ (function () {
    function NoOpTracer() {
    }
    /**
     * Starts a new Span.
     * @param _name - The name of the span.
     * @param _options - The SpanOptions used during Span creation.
     */
    NoOpTracer.prototype.startSpan = function (_name, _options) {
        return new _noOpSpan__WEBPACK_IMPORTED_MODULE_0__.NoOpSpan();
    };
    /**
     * Returns the current Span from the current context, if available.
     */
    NoOpTracer.prototype.getCurrentSpan = function () {
        return new _noOpSpan__WEBPACK_IMPORTED_MODULE_0__.NoOpSpan();
    };
    /**
     * Executes the given function within the context provided by a Span.
     * @param _span - The span that provides the context.
     * @param fn - The function to be executed.
     */
    NoOpTracer.prototype.withSpan = function (_span, fn) {
        return fn();
    };
    /**
     * Bind a Span as the target's scope
     * @param target - An object to bind the scope.
     * @param _span - A specific Span to use. Otherwise, use the current one.
     */
    NoOpTracer.prototype.bind = function (target, _span) {
        return target;
    };
    return NoOpTracer;
}());

//# sourceMappingURL=noOpTracer.js.map

/***/ }),
/* 181 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoOpSpan": () => (/* binding */ NoOpSpan)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * A no-op implementation of Span that can safely be used without side-effects.
 */
var NoOpSpan = /** @class */ (function () {
    function NoOpSpan() {
    }
    /**
     * Returns the SpanContext associated with this Span.
     */
    NoOpSpan.prototype.context = function () {
        return {
            spanId: "",
            traceId: "",
            traceFlags: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.TraceFlags.NONE
        };
    };
    /**
     * Marks the end of Span execution.
     * @param _endTime - The time to use as the Span's end time. Defaults to
     * the current time.
     */
    NoOpSpan.prototype.end = function (_endTime) {
        /* Noop */
    };
    /**
     * Sets an attribute on the Span
     * @param _key - The attribute key
     * @param _value - The attribute value
     */
    NoOpSpan.prototype.setAttribute = function (_key, _value) {
        return this;
    };
    /**
     * Sets attributes on the Span
     * @param _attributes - The attributes to add
     */
    NoOpSpan.prototype.setAttributes = function (_attributes) {
        return this;
    };
    /**
     * Adds an event to the Span
     * @param _name - The name of the event
     * @param _attributes - The associated attributes to add for this event
     */
    NoOpSpan.prototype.addEvent = function (_name, _attributes) {
        return this;
    };
    /**
     * Sets a status on the span. Overrides the default of CanonicalCode.OK.
     * @param _status - The status to set.
     */
    NoOpSpan.prototype.setStatus = function (_status) {
        return this;
    };
    /**
     * Updates the name of the Span
     * @param _name - the new Span name
     */
    NoOpSpan.prototype.updateName = function (_name) {
        return this;
    };
    /**
     * Returns whether this span will be recorded
     */
    NoOpSpan.prototype.isRecording = function () {
        return false;
    };
    return NoOpSpan;
}());

//# sourceMappingURL=noOpSpan.js.map

/***/ }),
/* 182 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCache": () => (/* binding */ getCache)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(183);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// V1 = OpenTelemetry 0.1
// V2 = OpenTelemetry 0.2
// V3 = OpenTelemetry 0.6.1
var GLOBAL_TRACER_VERSION = 3;
// preview5 shipped with @azure/core-tracing.tracerCache
// and didn't have smart detection for collisions
var GLOBAL_TRACER_SYMBOL = Symbol.for("@azure/core-tracing.tracerCache2");
var cache;
function loadTracerCache() {
    var globalObj = (0,_global__WEBPACK_IMPORTED_MODULE_0__.getGlobalObject)();
    var existingCache = globalObj[GLOBAL_TRACER_SYMBOL];
    var setGlobalCache = true;
    if (existingCache) {
        if (existingCache.version === GLOBAL_TRACER_VERSION) {
            cache = existingCache;
        }
        else {
            setGlobalCache = false;
            if (existingCache.tracer) {
                throw new Error("Two incompatible versions of @azure/core-tracing have been loaded.\n          This library is " + GLOBAL_TRACER_VERSION + ", existing is " + existingCache.version + ".");
            }
        }
    }
    if (!cache) {
        cache = {
            tracer: undefined,
            version: GLOBAL_TRACER_VERSION
        };
    }
    if (setGlobalCache) {
        globalObj[GLOBAL_TRACER_SYMBOL] = cache;
    }
}
function getCache() {
    if (!cache) {
        loadTracerCache();
    }
    return cache;
}
//# sourceMappingURL=cache.js.map

/***/ }),
/* 183 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGlobalObject": () => (/* binding */ getGlobalObject)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
function getGlobalObject() {
    return self;
}
//# sourceMappingURL=global.browser.js.map

/***/ }),
/* 184 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the Microsoft Software License Terms for the Azure Communications Services, Azure CPaaS, AZURE COMMUNICATION SERVICES VOICE AND VIDEO CALLING CLIENT LIBRARY
// See EULA.txt for license information.
!function(e,t){ true?t(exports,__webpack_require__(185),__webpack_require__(68)):0}(this,(function(exports,communicationCommon,logger){"use strict";const BAD_REQUEST=400,UNAUTHORIZED=401,NOT_FOUND=404,METHOD_NOT_ALLOWED=405,REQUEST_TIMEOUT=408,UNPROCESSABLE_ENTITY=422,INTERNAL_ERROR=500,NOT_IMPLEMENTED=501;class CallingCommunicationError extends Error{constructor(e,t,n=!0){if(super(e.message),this._code=0,this._subCode=0,this.name="CallingCommunicationError",t instanceof Error&&(this.message=t.message,this._code=BAD_REQUEST,this.stack=t.stack),t instanceof CallingCommunicationError&&(this._code=t.code,this._subCode=t.subCode,this.message=t.message,this.stack=t.stack),!n)return this.message=""==this.message?"UnknownError":this.message,void(this._code=0==this._code?BAD_REQUEST:this._code);this.message=e.message,this._code=e.code,e.subcode&&(this._subCode=e.subcode)}get code(){return this._code}get subCode(){return this._subCode}}function getMriFromIdentifier(e){const t=communicationCommon.getIdentifierKind(e);switch(t.kind){case"communicationUser":return t.communicationUserId;case"phoneNumber":if(t.rawId)return`${t.rawId}`;if(t.phoneNumber)return`4:${t.phoneNumber}`;throw new CallingCommunicationError({message:"Unable to parse PhoneNumberIdentifier object",code:UNPROCESSABLE_ENTITY});case"microsoftTeamsUser":if(t.rawId)return t.rawId;if(t.microsoftTeamsUserId){if(!t.cloud)return`8:orgid:${t.microsoftTeamsUserId}`;if("public"===t.cloud)return`8:orgid:${t.microsoftTeamsUserId}`;if("dod"===t.cloud)return`8:dod:${t.microsoftTeamsUserId}`;if("gcch"===t.cloud)return`8:gcch:${t.microsoftTeamsUserId}`;if(t.isAnonymous)return`8:teamsvisitor:${t.microsoftTeamsUserId}`}throw new CallingCommunicationError({message:"Unable to parse MicrosoftTeamsUserIdentifier object",code:UNPROCESSABLE_ENTITY});case"unknown":return t.id;default:throw new CallingCommunicationError({message:"Unable to parse Identifier object, please check the syntax",code:UNPROCESSABLE_ENTITY})}}function constructIdentifierKindFromMri(e){return e.startsWith("8:orgid:")?{kind:"microsoftTeamsUser",rawId:e,microsoftTeamsUserId:e.substring(8),isAnonymous:!1,cloud:"public"}:e.startsWith("8:dod:")?{kind:"microsoftTeamsUser",rawId:e,microsoftTeamsUserId:e.substring(6),isAnonymous:!1,cloud:"dod"}:e.startsWith("8:gcch:")?{kind:"microsoftTeamsUser",rawId:e,microsoftTeamsUserId:e.substring(7),isAnonymous:!1,cloud:"gcch"}:e.startsWith("8:teamsvisitor:")?{kind:"microsoftTeamsUser",rawId:e,microsoftTeamsUserId:e.substring(15),isAnonymous:!0}:e.startsWith("4:")?{kind:"phoneNumber",rawId:e,phoneNumber:e.substring(2)}:e.startsWith("8:acs:")||e.startsWith("8:spool:")?{kind:"communicationUser",communicationUserId:e}:{kind:"unknown",id:e}}function isCallingApplication(e){return!!e.startsWith("28:")}function validateIdentifier(e){const t=communicationCommon.getIdentifierKind(e);switch(t.kind){case"communicationUser":if(!t.communicationUserId.startsWith("8:acs:")&&!t.communicationUserId.startsWith("8:spool:"))throw new CallingCommunicationError({message:"Invalid CommunicationUser identifier specified",code:UNPROCESSABLE_ENTITY});return;case"phoneNumber":return;case"microsoftTeamsUser":if(t.rawId&&!t.rawId.startsWith("8:orgid")&&!t.rawId.startsWith("8:dod")&&!t.rawId.startsWith("8:gcch")&&!t.rawId.startsWith("8:teamsvisitor"))throw new CallingCommunicationError({message:"Invalid MicrosoftTeamsUser rawId specified",code:UNPROCESSABLE_ENTITY});if(!t.microsoftTeamsUserId)throw new CallingCommunicationError({message:"Invalid MicrosoftTeamsUser microsoftTeamsUserId specified",code:UNPROCESSABLE_ENTITY});return;case"unknown":if(!t.id)throw new CallingCommunicationError({message:"Invalid identifier specified, please specify an id",code:UNPROCESSABLE_ENTITY});return;default:throw new CallingCommunicationError({message:"Unable to parse Identifier object",code:UNPROCESSABLE_ENTITY})}}function assertIsArrayOfIdentifiers(e,t){if(!(e instanceof Array))throw new CallingCommunicationError({message:"AssertIsArrayOfIdentifiers failed. "+(void 0!==t?`: ${t}`:""),code:UNPROCESSABLE_ENTITY})}var R="object"==typeof Reflect?Reflect:null,ReflectApply=R&&"function"==typeof R.apply?R.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},ReflectOwnKeys;function ProcessEmitWarning(e){console&&console.warn&&console.warn(e)}ReflectOwnKeys=R&&"function"==typeof R.ownKeys?R.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var NumberIsNaN=Number.isNaN||function(e){return e!=e};function EventEmitter(){EventEmitter.init.call(this)}var events=EventEmitter,once_1=once;EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._eventsCount=0,EventEmitter.prototype._maxListeners=void 0;var defaultMaxListeners=10,ExtendedCallOperation;function checkListener(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function _getMaxListeners(e){return void 0===e._maxListeners?EventEmitter.defaultMaxListeners:e._maxListeners}function _addListener(e,t,n,i){var r,o,a;if(checkListener(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),a=o[t]),void 0===a)a=o[t]=n,++e._eventsCount;else if("function"==typeof a?a=o[t]=i?[n,a]:[a,n]:i?a.unshift(n):a.push(n),(r=_getMaxListeners(e))>0&&a.length>r&&!a.warned){a.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=e,s.type=t,s.count=a.length,ProcessEmitWarning(s)}return e}function onceWrapper(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function _onceWrap(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=onceWrapper.bind(i);return r.listener=n,i.wrapFn=r,r}function _listeners(e,t,n){var i=e._events;if(void 0===i)return[];var r=i[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?unwrapListeners(r):arrayClone(r,r.length)}function listenerCount(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function arrayClone(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}function spliceOne(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function unwrapListeners(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}function once(e,t){return new Promise((function(n,i){function r(){void 0!==o&&e.removeListener("error",o),n([].slice.call(arguments))}var o;"error"!==t&&(o=function(n){e.removeListener(t,r),i(n)},e.once("error",o)),e.once(t,r)}))}Object.defineProperty(EventEmitter,"defaultMaxListeners",{enumerable:!0,get:function(){return defaultMaxListeners},set:function(e){if("number"!=typeof e||e<0||NumberIsNaN(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");defaultMaxListeners=e}}),EventEmitter.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},EventEmitter.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||NumberIsNaN(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},EventEmitter.prototype.getMaxListeners=function(){return _getMaxListeners(this)},EventEmitter.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,r=this._events;if(void 0!==r)i=i&&void 0===r.error;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var s=r[e];if(void 0===s)return!1;if("function"==typeof s)ReflectApply(s,this,t);else{var c=s.length,l=arrayClone(s,c);for(n=0;n<c;++n)ReflectApply(l[n],this,t)}return!0},EventEmitter.prototype.addListener=function(e,t){return _addListener(this,e,t,!1)},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.prependListener=function(e,t){return _addListener(this,e,t,!0)},EventEmitter.prototype.once=function(e,t){return checkListener(t),this.on(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.prependOnceListener=function(e,t){return checkListener(t),this.prependListener(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.removeListener=function(e,t){var n,i,r,o,a;if(checkListener(t),void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,r=o;break}if(r<0)return this;0===r?n.shift():spliceOne(n,r),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,a||t)}return this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,o=Object.keys(n);for(i=0;i<o.length;++i)"removeListener"!==(r=o[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},EventEmitter.prototype.listeners=function(e){return _listeners(this,e,!0)},EventEmitter.prototype.rawListeners=function(e){return _listeners(this,e,!1)},EventEmitter.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):listenerCount.call(e,t)},EventEmitter.prototype.listenerCount=listenerCount,EventEmitter.prototype.eventNames=function(){return this._eventsCount>0?ReflectOwnKeys(this._events):[]},events.once=once_1;class BaseCallApiFeature{constructor(e){this.disposed=!1,this.call=e.call,this.callAgent=e.callAgent,this.eventEmitter=new events.EventEmitter}dispose(){this.disposed||(this.eventEmitter.removeAllListeners(),this.disposed=!0)}}!function(e){e.Transfer="Transfer"}(ExtendedCallOperation||(ExtendedCallOperation={}));class FirstPartyCallApiFeature extends BaseCallApiFeature{}var __awaiter=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};class RecordingCallFeatureImpl extends FirstPartyCallApiFeature{constructor(e){super(e),this._impl=new RecordingCallImplOverTsCall(this.eventEmitter)}get name(){return"Recording"}initialize(e,t){this._impl.initialize(e.tsCall,t)}get isRecordingActive(){return this._impl.isRecordingActive}on(e,t){this.eventEmitter.on(e,t)}off(e,t){this.eventEmitter.off(e,t)}dispose(){this.disposed||(this._impl.dispose(),super.dispose())}}class RecordingCallImplOverTsCall{constructor(e){this._eventEmitter=e,this._complianceRecordingBots=new Map,this._recordingBotChangedSubs=new WeakMap,this._isRecordingActive=!1,this._updateIsCallRecorded=e=>{this._isRecordingActive!==e&&(this._isRecordingActive=e,this._logger.info(`Updating isCallRecorded to ${e}`),this._eventEmitter.emit("isRecordingActiveChanged"))},this._isCallingApplication=e=>isCallingApplication(e.id),this._handleRecordingBotRemoved=e=>{var t;this._isComplianceRecordingBot(e)&&this._complianceRecordingBots.delete(e.id),this._isConvenienceRecordingBot(e)&&(this._convenienceRecordingBot=void 0),null===(t=this._recordingBotChangedSubs.get(e))||void 0===t||t.dispose(),this._recordingBotChangedSubs.delete(e),this._updateIsCallRecorded(this._isConvenienceRecordingEnabled()||this._isComplianceRecordingEnabled())},this._isComplianceRecordingEnabled=()=>{let e=!1;try{this._complianceRecordingBots.forEach((t=>{var n;e||(e=!!(null===(n=t.endpoints)||void 0===n?void 0:n.endpointDetails.some((e=>{var t,n,i,r;return"Active"===(null===(r=null===(i=null===(n=null===(t=null==e?void 0:e.endpointMetadata)||void 0===t?void 0:t.__platform)||void 0===n?void 0:n.recording)||void 0===i?void 0:i.compliance)||void 0===r?void 0:r.state)}))))}))}catch(e){this._logger.warn("Unable to read compliance recording state: ",e)}return e},this._handleRecordingBotAdded=e=>{const t=()=>{this._isComplianceRecordingBot(e)&&!this._complianceRecordingBots.has(e.id)&&(this._logger.info("Adding compliance recording bot"),this._complianceRecordingBots.set(e.id,e)),this._isConvenienceRecordingBot(e)&&!this._convenienceRecordingBot&&(this._logger.info("Adding convenience recording bot"),this._convenienceRecordingBot=e),this._updateIsCallRecorded(this._isConvenienceRecordingEnabled()||this._isComplianceRecordingEnabled())};t(),this._recordingBotChangedSubs.set(e,e.changed(t))},this._isComplianceRecordingBot=e=>{var t;try{if(null===(t=e.endpoints)||void 0===t?void 0:t.endpointDetails.some((e=>{var t,n,i;return null===(i=null===(n=null===(t=null==e?void 0:e.endpointMetadata)||void 0===t?void 0:t.__platform)||void 0===n?void 0:n.recording)||void 0===i?void 0:i.compliance})))return!0}catch(e){return!1}return!1},this._isConvenienceRecordingEnabled=()=>{var e,t,n,i;let r=!1;if(!this._convenienceRecordingBot)return r;try{const o=null===(e=this._convenienceRecordingBot.endpoints)||void 0===e?void 0:e.endpointDetails[0];r="Active"===(null===(i=null===(n=null===(t=null==o?void 0:o.endpointMetadata)||void 0===t?void 0:t.processingModes)||void 0===n?void 0:n.recording)||void 0===i?void 0:i.state)}catch(e){this._logger.info("Unable to read convenience recording state: ",e)}return r},this._isConvenienceRecordingBot=e=>"28:bdd75849-e0a6-4cce-8fc1-d7c0d4da43e5"===e.id}get isRecordingActive(){return this._isRecordingActive}initialize(e,t){this._logger=t.createChild((()=>`[RecordingFeature::Call(id='${e.callId}', state='${e.state}')]`)),e.on("participantAdded",(e=>__awaiter(this,void 0,void 0,(function*(){this._isCallingApplication(e)&&this._handleRecordingBotAdded(e)})))),e.on("participantRemoved",(e=>__awaiter(this,void 0,void 0,(function*(){this._isCallingApplication(e)&&this._handleRecordingBotRemoved(e)}))))}dispose(){this._updateIsCallRecorded(!1)}}const terminatedReasonToStringMap={0:"Undefined",1:"Success",2:"NoNgcEndpoint",3:"NetworkError",4:"MediaDroppedError",5:"BadRequest",6:"CallEstablishmentTimeout",7:"CallSetupError",8:"NoPermission",9:"Missed",10:"Declined",11:"Busy",12:"Cancelled",13:"Dropped",14:"PstnInsufficientFunds",15:"PstnSkypeoutAccountBlocked",16:"PstnCouldNotConnectToSkypeProxy",17:"PstnBlockedByUs",18:"PstnBlockedRegulatoryIndia",19:"PstnInvalidNumber",20:"PstnNumberForbidden",21:"PstnCallTerminated",22:"PstnNumberUnavailable",23:"PstnEmergencyCallDenied",24:"CallNotFound",25:"LocalError",26:"NotAcceptableHere",27:"CallForwarded",28:"CallForwardedToVoicemail",29:"SkypeTokenError",30:"CallAccepted",31:"LocalHttpStackError",32:"UnknownError",33:"PstnNoSubscriptionCover",34:"SessionNotFound",35:"SessionTimedOut",36:"PstnCreditExpired",37:"PstnCreditExpiredButEnough",38:"RetargetNotSupported",39:"EnterprisePstnInternalError",40:"EnterprisePstnUnavailable",41:"EnterprisePstnForbidden",42:"EnterprisePstnInvalidNumber",43:"EnterprisePstnMiscError",44:"Kicked",45:"NetworkRequestTimeoutError",46:"CallDoesNotExist",47:"MediaSetupFailure",48:"ServiceUnavailable",49:"SignalingError",50:"ConversationEstablishmentFailed",51:"TemporarilyUnavailable",52:"CannotConnectToNetworkError",53:"MediaRelayWhiteListingIssue",54:"NoSignalingFromPeer",55:"DeniedInLobby",56:"TimedOutInLobby",57:"CallFailedConflict",58:"DevicePermissionDenied",59:"ConfParticipantCountLimitReached",60:"ActionNotAllowed",61:"Abandoned",62:"ForbiddenDueToPolicy",63:"InsufficientCapabilitiesForCallee",64:"UserBlocked",65:"AccessDenied",66:"AnonymousJoinDisabledByPolicy",67:"NoLobbyForBroadcastJoin",68:"NotAllowedDueToInformationBarrier",69:"BroadcastLimitReached",70:"TeamParkPolicyDisabled",71:"B2bJoinDisabledByPolicy",72:"LocationBasedRoutingError",73:"ConfLobbyParticipantCountLimitReached"},convertTerminatedReasonToString=e=>{const t="UnknownError";return"number"==typeof e&&terminatedReasonToStringMap[e]||t},participantStateReasonToStringMap={0:"None",1:"AddingFailed",2:"NoResponse",3:"Declined",4:"NotReachable",5:"Blocked",6:"NotFriendOrAuthorized",7:"CallLimitReached",8:"CallNotFound",9:"NetworkError",10:"MediaDroppedError",11:"OtherError",12:"PstnInsufficientFunds",13:"PstnSkypeoutAccountBlocked",14:"PstnCouldNotConnectToSkypeProxy",15:"PstnBlockedByUs",16:"PstnBlockedRegulatoryIndia",17:"PstnInvalidNumber",18:"PstnNumberForbidden",19:"Busy",20:"PstnCallTerminated",21:"PstnNumberUnavailable",22:"PstnEmergencyCallDenied",23:"Cancelled",24:"Dropped",25:"PstnNoSubscriptionCover",26:"PstnCreditExpired",27:"PstnCreditExpiredButEnough",28:"EnterprisePstnInternalError",29:"EnterprisePstnUnavailable",30:"EnterprisePstnForbidden",31:"EnterprisePstnInvalidNumber",32:"EnterprisePstnMiscError",33:"Kicked",34:"NetworkRequestTimeoutError",35:"CallDoesNotExist",36:"MediaSetupFailure",37:"ServiceUnavailable",38:"SignalingError",39:"ConversationEstablishmentFailed",40:"TemporarilyUnavailable",41:"CannotConnectToNetworkError",42:"NoSignalingFromPeer",43:"ParticipantDoesNotExist",44:"DeniedInLobby",45:"TimedOutInLobby",46:"ConfParticipantCountLimitReached",47:"Abandoned",48:"ActionNotAllowed",49:"ForbiddenDueToPolicy",50:"InsufficientCapabilitiesForCallee",51:"AccessDenied",52:"NoPermission",53:"AnonymousJoinDisabledByPolicy",54:"NoLobbyForBroadcastJoin",55:"NotAllowedDueToInformationBarrier",56:"BroadcastLimitReached",57:"B2bJoinDisabledByPolicy",58:"LocationBasedRoutingError",59:"ConfLobbyParticipantCountLimitReached",60:"LobbyUserLeft"},convertParticipantStateReasonToString=e=>{const t="UnknownError";return"number"==typeof e&&participantStateReasonToStringMap[e]||t};class TransferImpl{constructor(e,t){this._eventEmitter=new events.EventEmitter,this._lastTsTransferState=0,this._getTransferEndReason=(e,t=0)=>{var n;let i=t,r=0,o=e||"Unknown";this._tsCall&&(i=this._tsCall.transferDiagnosticsInfo&&this._tsCall.transferDiagnosticsInfo.callControllerCode||t,r=this._tsCall.transferDiagnosticsInfo&&(null===(n=this._tsCall.transferDiagnosticsInfo)||void 0===n?void 0:n.callControllerSubCode)||0,o=convertTerminatedReasonToString(this._tsCall.terminatedReason));const a={code:i,subCode:r};return this._logger[0===i?"info":"error"](`Transfer end reason=${o}, code=${i}, subCode=${r}`),a},this._state="None",this._logger=t.createChild((()=>"[Transfer]")),this._logger.log("created"),this._tsCall=e,this._lastTsTransferState=this._tsCall.transferState,this.setTransferState(this._tsCall.transferState),this._tsCall.changed((()=>{this._tsCall.transferState!==this._lastTsTransferState&&(this._logger.log(`tsCall transfer state changed=${this._tsCall.transferState}`),this._lastTsTransferState=this._tsCall.transferState,this.setTransferState(this._tsCall.transferState))}))}get state(){return this._state}get error(){return this._error}on(e,t){this._eventEmitter.on(e,t)}off(e,t){this._eventEmitter.off(e,t)}setTransferState(e){let t,n;const i={0:"None",1:"Transferring",2:"Transferring",3:"Transferred",4:"Failed"};i[e]?(t=i[e],"Failed"===t&&(n=this._getTransferEndReason(),this._error=n),this._logger.log(`Mapped ts transfer state:[${e}] to [${t}]`),this._setTransferState(t)):this._logger.warn(`unable to map tsCall state=[${e}] to transfer state`)}_setTransferState(e){e!==this._state&&(this._logger.log(`transfer state changed [${this._state}]=>[${this.state}]`),this._state=e,this._eventEmitter.emit("stateChanged"))}}const loggerKeySymbol=Symbol("loggerKeySymbol");var __awaiter$1=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function syncOperation(e){return operationDecoratorFactory(e||"",!1)}function asyncOperation(e){return operationDecoratorFactory(e||"",!0)}const operationDecoratorFactory=(e,t)=>t?(t,n,i)=>{const r=i.value;return i.value=function(...t){return __awaiter$1(this,void 0,void 0,(function*(){let n;const i=+new Date;tryToLogAcsMessage(this,e,"started");try{n=yield r.apply(this,t),tryToLogAcsMessage(this,e,"succeeded",i)}catch(t){const n=new CallingCommunicationError({message:"",code:0},t,!1);throw tryToLogAcsError(this,e,t,i),n}return n}))},i}:(t,n,i)=>{const r=i.value;return i.value=function(...t){let n;const i=+new Date;tryToLogAcsMessage(this,e,"started",i);try{n=r.apply(this,t),tryToLogAcsMessage(this,e,"succeeded",i)}catch(t){const n=new CallingCommunicationError({message:"",code:0},t,!1);throw tryToLogAcsError(this,e,t,i),n}return n},i};function tryToLogAcsMessage(e,t,n,i){const r=getAcsLogger(e);if(r){const e=i?`in ${(+new Date-i)/1e3}s`:"";r.info(`op:${t}, ${n} ${e}`)}}function tryToLogAcsError(e,t,n,i){const r=getAcsLogger(e);try{if(r){const e=i?`in ${(+new Date-i)/1e3}s`:"";n&&n.code?r.error(`op:${t} failed, message=${n.message}, code=${n.code}${n.subCode?`, subCode=${n.subCode}`:""} ${e}`):r.error(`op:${t} failed, message=${n.message} ${e}`)}}catch(n){}}function getAcsLogger(e){try{const t=Reflect.getMetadata(loggerKeySymbol,e);if(t)return e[t]}catch(e){console.debug("acs: unable to get logger instance")}}var __decorate=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},__metadata=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class TransferCallFeatureImpl extends FirstPartyCallApiFeature{constructor(e){super(e),this._impl=new TransferCallImplOverTsCall(this.eventEmitter)}get name(){return"Transfer"}transfer(e,t){return this._impl.transfer(e,t)}initialize(e,t){this._impl.initialize(e.tsCall,e.callAgent,t)}on(e,t){this.eventEmitter.on(e,t)}off(e,t){this.eventEmitter.off(e,t)}dispose(){this.disposed||(this._impl.dispose(),super.dispose())}}class TransferCallImplOverTsCall{constructor(e){this._eventEmitter=e}initialize(e,t,n){this._logger=n.createChild((()=>`[TransferFeature::Call(id='${e.callId}', state='${e.state}')]`)),this._tsCall=e,e.on("transferRequested",(e=>{try{const n=constructIdentifierKindFromMri(e.transferContext.targetMri);if("communicationUser"!==n.kind&&"phoneNumber"!==n.kind&&"microsoftTeamsUser"!==n.kind)throw new CallingCommunicationError({message:`Invalid target participant type detected:${n.kind}`,code:UNPROCESSABLE_ENTITY});{const i={targetParticipant:n,accept:n=>{let i;try{return i=t.createTransferTargetCall(e.transferContext),i.startCallInternal(n).then((()=>{e.onCompleted(1),this._logger.info("Transfer request has been accepted successfully from transferee.")})).catch((t=>{e.onCompleted(7),this._logger.error("Transfer to target failed at call start")})),i}catch(t){throw e.onCompleted(7),this._logger.error("Transfer to target failed at call create"),new CallingCommunicationError({message:"Transfer to target failed",code:INTERNAL_ERROR},t)}},reject:()=>{e.onCompleted(10),this._logger.info("Transfer request has been decliend by transferee.")}};this._eventEmitter.emit("transferRequested",i)}}catch(t){e.onCompleted(7),this._logger.error(t)}}))}transfer(e,t){if(e.targetParticipant)return this.transferToParticipant(e.targetParticipant,t);if(e.targetCall)return this.transferToCall(e.targetCall,t);throw new CallingCommunicationError({message:"Transfer target is not recognized.",code:UNPROCESSABLE_ENTITY})}transferToParticipant(e,t){let n=getMriFromIdentifier(e);return this._tsCall.callSafeTransfer(n,void 0,t),new TransferImpl(this._tsCall,this._logger)}transferToCall(e,t){throw new CallingCommunicationError({message:"transfer to call is not implemented.",code:NOT_IMPLEMENTED})}dispose(){}}__decorate([syncOperation(ExtendedCallOperation.Transfer),__metadata("design:type",Function),__metadata("design:paramtypes",[Object,Object]),__metadata("design:returntype",Object)],TransferCallImplOverTsCall.prototype,"transfer",null);var __awaiter$2=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};class TranscriptionCallFeatureImpl extends FirstPartyCallApiFeature{constructor(e){super(e),this._impl=new TranscriptionCallImplOverTsCall(this.eventEmitter)}get name(){return"Transcription"}initialize(e,t){this._impl.initialize(e.tsCall,t)}get isTranscriptionActive(){return this._impl.isTranscriptionActive}on(e,t){this.eventEmitter.on(e,t)}off(e,t){this.eventEmitter.off(e,t)}dispose(){this.disposed||(this._impl.dispose(),super.dispose())}}class TranscriptionCallImplOverTsCall{constructor(e){this._eventEmitter=e,this._transcriptionBotChangedSubs=new WeakMap,this._isTranscriptionActive=!1,this._updateIsCallTranscribed=e=>{this._isTranscriptionActive!==e&&(this._isTranscriptionActive=e,this._logger.info(`Updating isTranscriptionActive to ${e}`),this._eventEmitter.emit("isTranscriptionActiveChanged"))},this._isCallingApplication=e=>isCallingApplication(e.id),this._handleTranscriptionBotRemoved=e=>{var t;this._isTranscriptionBot(e)&&(this._transcriptionBot=void 0),null===(t=this._transcriptionBotChangedSubs.get(e))||void 0===t||t.dispose(),this._transcriptionBotChangedSubs.delete(e),this._updateIsCallTranscribed(this._isTranscriptionEnabled())},this._handleTranscriptionBotAdded=e=>{const t=()=>{this._isTranscriptionBot(e)&&!this._transcriptionBot&&(this._logger.info("Adding transcription bot"),this._transcriptionBot=e),this._updateIsCallTranscribed(this._isTranscriptionEnabled())};t(),this._transcriptionBotChangedSubs.set(e,e.changed(t))},this._isTranscriptionEnabled=()=>{var e,t,n,i;let r=!1;if(!this._transcriptionBot)return r;try{const o=null===(e=this._transcriptionBot.endpoints)||void 0===e?void 0:e.endpointDetails[0];r="Active"===(null===(i=null===(n=null===(t=null==o?void 0:o.endpointMetadata)||void 0===t?void 0:t.processingModes)||void 0===n?void 0:n.realTimeTranscript)||void 0===i?void 0:i.state)}catch(e){this._logger.warn("Unable to read transcription state: ",e)}return r},this._isTranscriptionBot=e=>"28:b1902c3e-b9f7-4650-9b23-5772bd429747"===e.id}get isTranscriptionActive(){return this._isTranscriptionActive}initialize(e,t){this._logger=t.createChild((()=>`[TranscriptionFeature::Call(id='${e.callId}', state='${e.state}')]`)),e.on("participantAdded",(e=>__awaiter$2(this,void 0,void 0,(function*(){this._isCallingApplication(e)&&this._handleTranscriptionBotAdded(e)})))),e.on("participantRemoved",(e=>__awaiter$2(this,void 0,void 0,(function*(){this._isCallingApplication(e)&&this._handleTranscriptionBotRemoved(e)}))))}dispose(){this._updateIsCallTranscribed(!1)}}const Features={get Recording(){return RecordingCallFeatureImpl},get Transfer(){return TransferCallFeatureImpl},get Transcription(){return TranscriptionCallFeatureImpl}};var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function createCommonjsModule(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return commonjsRequire(e,null==t?n.path:t)}},n.exports),n.exports}function getAugmentedNamespace(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return e[n]}})})),t}function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Enums=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Unspecified=0]="Unspecified",e[e.String=1]="String",e[e.Int64=2]="Int64",e[e.Double=3]="Double",e[e.Boolean=4]="Boolean",e[e.Date=5]="Date"}(t.AWTPropertyType||(t.AWTPropertyType={})),function(e){e[e.NotSet=0]="NotSet",e[e.DistinguishedName=1]="DistinguishedName",e[e.GenericData=2]="GenericData",e[e.IPV4Address=3]="IPV4Address",e[e.IPv6Address=4]="IPv6Address",e[e.MailSubject=5]="MailSubject",e[e.PhoneNumber=6]="PhoneNumber",e[e.QueryString=7]="QueryString",e[e.SipAddress=8]="SipAddress",e[e.SmtpAddress=9]="SmtpAddress",e[e.Identity=10]="Identity",e[e.Uri=11]="Uri",e[e.Fqdn=12]="Fqdn",e[e.IPV4AddressLegacy=13]="IPV4AddressLegacy"}(t.AWTPiiKind||(t.AWTPiiKind={})),function(e){e[e.NotSet=0]="NotSet",e[e.GenericContent=1]="GenericContent"}(t.AWTCustomerContentKind||(t.AWTCustomerContentKind={})),function(e){e[e.Low=1]="Low",e[e.Normal=2]="Normal",e[e.High=3]="High",e[e.Immediate_sync=5]="Immediate_sync"}(t.AWTEventPriority||(t.AWTEventPriority={})),function(e){e[e.NonRetryableStatus=1]="NonRetryableStatus",e[e.QueueFull=3]="QueueFull"}(t.AWTEventsDroppedReason||(t.AWTEventsDroppedReason={})),function(e){e[e.InvalidEvent=1]="InvalidEvent",e[e.SizeLimitExceeded=2]="SizeLimitExceeded",e[e.KillSwitch=3]="KillSwitch"}(t.AWTEventsRejectedReason||(t.AWTEventsRejectedReason={}))})),Enums$1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Unknown=0]="Unknown",e[e.MSACID=1]="MSACID",e[e.MSAPUID=2]="MSAPUID",e[e.ANID=3]="ANID",e[e.OrgIdCID=4]="OrgIdCID",e[e.OrgIdPUID=5]="OrgIdPUID",e[e.UserObjectId=6]="UserObjectId",e[e.Skype=7]="Skype",e[e.Yammer=8]="Yammer",e[e.EmailAddress=9]="EmailAddress",e[e.PhoneNumber=10]="PhoneNumber",e[e.SipAddress=11]="SipAddress",e[e.MUID=12]="MUID"}(t.AWTUserIdType||(t.AWTUserIdType={})),function(e){e[e.Started=0]="Started",e[e.Ended=1]="Ended"}(t.AWTSessionState||(t.AWTSessionState={}))})),DataModels=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AWT_REAL_TIME="REAL_TIME",t.AWT_NEAR_REAL_TIME="NEAR_REAL_TIME",t.AWT_BEST_EFFORT="BEST_EFFORT"})),microsoft_bond_primitives=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.low=0,this.high=0,this.low=parseInt(e,10),this.low<0&&(this.high=-1)}return e.prototype._Equals=function(t){var n=new e(t);return this.low===n.low&&this.high===n.high},e}();t.Int64=n;var i=function(){function e(e){this.low=0,this.high=0,this.low=parseInt(e,10)}return e.prototype._Equals=function(t){var n=new e(t);return this.low===n.low&&this.high===n.high},e}();t.UInt64=i;var r=function(){function e(){}return e._ToByte=function(e){return this._ToUInt8(e)},e._ToUInt8=function(e){return 255&e},e._ToInt32=function(e){return 2147483647&e|2147483648&e},e._ToUInt32=function(e){return 4294967295&e},e}();t.Number=r})),Utils=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=/[xy]/g,i=null;t.EventNameAndTypeRegex=/^[a-zA-Z]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/,t.EventNameDotRegex=/\./g,t.PropertyNameRegex=/^[a-zA-Z](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/,t.StatsApiKey="a387cfcf60114a43a7699f9fbb49289e-9bceb9fe-1c06-460f-96c5-6a0b247358bc-7238";var r=i,o=i,a=i;function s(e){return"string"==typeof e}function c(e){return"number"==typeof e}function l(e){return"boolean"==typeof e}function u(e){return e instanceof Date}function d(e){return 1e4*(e+621355968e5)}function p(){return!("undefined"==typeof navigator||!navigator.product)&&"ReactNative"===navigator.product}function f(e){return e<10?"0"+e:e.toString()}function h(e){return void 0===e||e===i||""===e}t.numberToBondInt64=function(e){var t=new microsoft_bond_primitives.Int64("0");return t.low=4294967295&e,t.high=Math.floor(e/4294967296),t},t.newGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(n,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))},t.isString=s,t.isNumber=c,t.isBoolean=l,t.isDate=u,t.msToTicks=d,t.getTenantId=function(e){var t=e.indexOf("-");return t>-1?e.substring(0,t):""},t.isBeaconsSupported=function(){return r===i&&(r="undefined"!=typeof navigator&&Boolean(navigator.sendBeacon)),r},t.isUint8ArrayAvailable=function(){return o===i&&(o="undefined"!=typeof Uint8Array&&!function(){if("undefined"!=typeof navigator&&navigator.userAgent){var e=navigator.userAgent.toLowerCase();if((e.indexOf("safari")>=0||e.indexOf("firefox")>=0)&&e.indexOf("chrome")<0)return!0}return!1}()&&!p()),o},t.isPriority=function(e){return!(!c(e)||!(e>=1&&e<=3||5===e))},t.sanitizeProperty=function(e,n){return!t.PropertyNameRegex.test(e)||h(n)?i:(h(n.value)&&(n={value:n,type:Enums.AWTPropertyType.Unspecified}),n.type=function(e,t){switch(t=function(e){if(c(e)&&e>=0&&e<=4)return!0;return!1}(t)?t:Enums.AWTPropertyType.Unspecified){case Enums.AWTPropertyType.Unspecified:return function(e){switch(typeof e){case"string":return Enums.AWTPropertyType.String;case"boolean":return Enums.AWTPropertyType.Boolean;case"number":return Enums.AWTPropertyType.Double;case"object":return u(e)?Enums.AWTPropertyType.Date:i}return i}(e);case Enums.AWTPropertyType.String:return s(e)?t:i;case Enums.AWTPropertyType.Boolean:return l(e)?t:i;case Enums.AWTPropertyType.Date:return u(e)&&NaN!==e.getTime()?t:i;case Enums.AWTPropertyType.Int64:return c(e)&&e%1==0?t:i;case Enums.AWTPropertyType.Double:return c(e)?t:i}return i}(n.value,n.type),n.type?(u(n.value)&&(n.value=d(n.value.getTime())),n.pii>0&&n.cc>0?i:n.pii?function(e){if(c(e)&&e>=0&&e<=13)return!0;return!1}(n.pii)?n:i:n.cc?function(e){if(c(e)&&e>=0&&e<=1)return!0;return!1}(n.cc)?n:i:n):i)},t.getISOString=function(e){return e.getUTCFullYear()+"-"+f(e.getUTCMonth()+1)+"-"+f(e.getUTCDate())+"T"+f(e.getUTCHours())+":"+f(e.getUTCMinutes())+":"+f(e.getUTCSeconds())+"."+function(e){if(e<10)return"00"+e;if(e<100)return"0"+e;return e.toString()}(e.getUTCMilliseconds())+"Z"},t.useXDomainRequest=function(){if(a===i){var e=new XMLHttpRequest;a=void 0===e.withCredentials&&"undefined"!=typeof XDomainRequest}return a},t.isReactNative=p})),AWTEventProperties_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this._event={name:"",properties:{}},e&&this.setName(e)}return e.prototype.setName=function(e){this._event.name=e},e.prototype.getName=function(){return this._event.name},e.prototype.setType=function(e){this._event.type=e},e.prototype.getType=function(){return this._event.type},e.prototype.setTimestamp=function(e){this._event.timestamp=e},e.prototype.getTimestamp=function(){return this._event.timestamp},e.prototype.setEventPriority=function(e){this._event.priority=e},e.prototype.getEventPriority=function(){return this._event.priority},e.prototype.setProperty=function(e,t,n){void 0===n&&(n=Enums.AWTPropertyType.Unspecified);var i={value:t,type:n,pii:Enums.AWTPiiKind.NotSet,cc:Enums.AWTCustomerContentKind.NotSet};null!==(i=Utils.sanitizeProperty(e,i))?this._event.properties[e]=i:delete this._event.properties[e]},e.prototype.setPropertyWithPii=function(e,t,n,i){void 0===i&&(i=Enums.AWTPropertyType.Unspecified);var r={value:t,type:i,pii:n,cc:Enums.AWTCustomerContentKind.NotSet};null!==(r=Utils.sanitizeProperty(e,r))?this._event.properties[e]=r:delete this._event.properties[e]},e.prototype.setPropertyWithCustomerContent=function(e,t,n,i){void 0===i&&(i=Enums.AWTPropertyType.Unspecified);var r={value:t,type:i,pii:Enums.AWTPiiKind.NotSet,cc:n};null!==(r=Utils.sanitizeProperty(e,r))?this._event.properties[e]=r:delete this._event.properties[e]},e.prototype.getPropertyMap=function(){return this._event.properties},e.prototype.getEvent=function(){return this._event},e}();t.default=n})),AWTNotificationManager_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.addNotificationListener=function(e){this.listeners.push(e)},e.removeNotificationListener=function(e){for(var t=this.listeners.indexOf(e);t>-1;)this.listeners.splice(t,1),t=this.listeners.indexOf(e)},e.eventsSent=function(e){for(var t=this,n=function(n){i.listeners[n].eventsSent&&setTimeout((function(){return t.listeners[n].eventsSent(e)}),0)},i=this,r=0;r<this.listeners.length;++r)n(r)},e.eventsDropped=function(e,t){for(var n=this,i=function(i){r.listeners[i].eventsDropped&&setTimeout((function(){return n.listeners[i].eventsDropped(e,t)}),0)},r=this,o=0;o<this.listeners.length;++o)i(o)},e.eventsRetrying=function(e){for(var t=this,n=function(n){i.listeners[n].eventsRetrying&&setTimeout((function(){return t.listeners[n].eventsRetrying(e)}),0)},i=this,r=0;r<this.listeners.length;++r)n(r)},e.eventsRejected=function(e,t){for(var n=this,i=function(i){r.listeners[i].eventsRejected&&setTimeout((function(){return n.listeners[i].eventsRejected(e,t)}),0)},r=this,o=0;o<this.listeners.length;++o)i(o)},e.listeners=[],e}();t.default=n})),AWTStatsManager_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.initialize=function(e){var t=this;this._sendStats=e,this._isInitalized=!0,AWTNotificationManager_1.default.addNotificationListener({eventsSent:function(e){t._addStat("records_sent_count",e.length,e[0].apiKey)},eventsDropped:function(e,n){switch(n){case Enums.AWTEventsDroppedReason.NonRetryableStatus:t._addStat("d_send_fail",e.length,e[0].apiKey),t._addStat("records_dropped_count",e.length,e[0].apiKey);break;case Enums.AWTEventsDroppedReason.QueueFull:t._addStat("d_queue_full",e.length,e[0].apiKey)}},eventsRejected:function(e,n){switch(n){case Enums.AWTEventsRejectedReason.InvalidEvent:t._addStat("r_inv",e.length,e[0].apiKey);break;case Enums.AWTEventsRejectedReason.KillSwitch:t._addStat("r_kl",e.length,e[0].apiKey);break;case Enums.AWTEventsRejectedReason.SizeLimitExceeded:t._addStat("r_size",e.length,e[0].apiKey)}t._addStat("r_count",e.length,e[0].apiKey)},eventsRetrying:null}),setTimeout((function(){return t.flush()}),6e4)},e.teardown=function(){this._isInitalized&&(this.flush(),this._isInitalized=!1)},e.eventReceived=function(t){e._addStat("records_received_count",1,t)},e.flush=function(){var e=this;if(this._isInitalized){for(var t in this._stats)this._stats.hasOwnProperty(t)&&this._sendStats(this._stats[t],t);this._stats={},setTimeout((function(){return e.flush()}),6e4)}},e._addStat=function(e,t,n){if(this._isInitalized&&n!==Utils.StatsApiKey){var i=Utils.getTenantId(n);this._stats[i]||(this._stats[i]={}),this._stats[i][e]?this._stats[i][e]=this._stats[i][e]+t:this._stats[i][e]=t}},e._isInitalized=!1,e._stats={},e}();t.default=n})),bond_const=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e._BT_STOP=0]="_BT_STOP",e[e._BT_STOP_BASE=1]="_BT_STOP_BASE",e[e._BT_BOOL=2]="_BT_BOOL",e[e._BT_DOUBLE=8]="_BT_DOUBLE",e[e._BT_STRING=9]="_BT_STRING",e[e._BT_STRUCT=10]="_BT_STRUCT",e[e._BT_LIST=11]="_BT_LIST",e[e._BT_MAP=13]="_BT_MAP",e[e._BT_INT32=16]="_BT_INT32",e[e._BT_INT64=17]="_BT_INT64"}(t._BondDataType||(t._BondDataType={}))})),microsoft_bond_floatutils=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e._ConvertNumberToArray=function(e,t){if(!e)return t?this._doubleZero:this._floatZero;var n=t?52:23,i=(1<<(t?11:8)-1)-1,r=1-i,o=i,a=e<0?1:0;e=Math.abs(e);for(var s=Math.floor(e),c=e-s,l=2*(i+2)+n,u=new Array(l),d=0;d<l;)u[d++]=0;for(d=i+2;d&&s;)u[--d]=s%2,s=Math.floor(s/2);for(d=i+1;d<l-1&&c>0;)(c*=2)>=1?(u[++d]=1,--c):u[++d]=0;for(var p=0;p<l&&!u[p];)p++;var f=i+1-p,h=p+n;if(u[h+1]){for(d=h;d>p&&(u[d]=1-u[d],!u);--d);d===p&&++f}if(f>o||s)return a?t?this._doubleNegInifinity:this._floatNegInifinity:t?this._doubleInifinity:this._floatInifinity;if(f<r)return t?this._doubleZero:this._floatZero;if(t){var g=0;for(d=0;d<20;++d)g=g<<1|u[++p];for(var m=0;d<52;++d)m=m<<1|u[++p];return[255&m,m>>8&255,m>>16&255,m>>>24,255&(g=a<<31|2147483647&(g|=f+i<<20)),g>>8&255,g>>16&255,g>>>24]}var v=0;for(d=0;d<23;++d)v=v<<1|u[++p];return[255&(v=a<<31|2147483647&(v|=f+i<<23)),v>>8&255,v>>16&255,v>>>24]},e._floatZero=[0,0,0,0],e._doubleZero=[0,0,0,0,0,0,0,0],e._floatInifinity=[0,0,128,127],e._floatNegInifinity=[0,0,128,255],e._doubleInifinity=[0,0,0,0,0,0,240,127],e._doubleNegInifinity=[0,0,0,0,0,0,240,255],e}();t.FloatUtils=n})),microsoft_bond_utils=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e._IsDataViewSupport=function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},e}();t.BrowserChecker=n})),microsoft_bond_encoding=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t._Utf8_GetBytes=function(e){for(var t=[],n=0;n<e.length;++n){var i=e.charCodeAt(n);i<128?t.push(i):i<2048?t.push(192|i>>6,128|63&i):i<55296||i>=57344?t.push(224|i>>12,128|i>>6&63,128|63&i):(i=65536+((1023&i)<<10|1023&e.charCodeAt(++n)),t.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i))}return t},t._Base64_GetString=function(e){for(var t,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=[],r=e.length%3,o=0,a=e.length-r;o<a;o+=3){var s=(e[o]<<16)+(e[o+1]<<8)+e[o+2];i.push([n.charAt((t=s)>>18&63),n.charAt(t>>12&63),n.charAt(t>>6&63),n.charAt(63&t)].join(""))}switch(r){case 1:s=e[e.length-1];i.push(n.charAt(s>>2)),i.push(n.charAt(s<<4&63)),i.push("==");break;case 2:var c=(e[e.length-2]<<8)+e[e.length-1];i.push(n.charAt(c>>10)),i.push(n.charAt(c>>4&63)),i.push(n.charAt(c<<2&63)),i.push("=")}return i.join("")},t._Varint_GetBytes=function(e){for(var t=[];4294967168&e;)t.push(127&e|128),e>>>=7;return t.push(127&e),t},t._Varint64_GetBytes=function(e){for(var t=e.low,n=e.high,i=[];n||4294967168&t;)i.push(127&t|128),t=(127&n)<<25|t>>>7,n>>>=7;return i.push(127&t),i},t._Double_GetBytes=function(e){if(microsoft_bond_utils.BrowserChecker._IsDataViewSupport()){var t=new DataView(new ArrayBuffer(8));t.setFloat64(0,e,!0);for(var n=[],i=0;i<8;++i)n.push(t.getUint8(i));return n}return microsoft_bond_floatutils.FloatUtils._ConvertNumberToArray(e,!0)},t._Zigzag_EncodeZigzag32=function(e){return(e=microsoft_bond_primitives.Number._ToInt32(e))<<1^e>>31},t._Zigzag_EncodeZigzag64=function(e){var t=e.low,n=e.high,i=n<<1|t>>>31,r=t<<1;2147483648&n&&(i=~i,r=~r);var o=new microsoft_bond_primitives.UInt64("0");return o.low=r,o.high=i,o}})),microsoft_bond_io=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this._buffer=[]}return e.prototype._WriteByte=function(e){this._buffer.push(microsoft_bond_primitives.Number._ToByte(e))},e.prototype._Write=function(e,t,n){for(;n--;)this._WriteByte(e[t++])},e.prototype._GetBuffer=function(){return this._buffer},e}();t.MemoryStream=n})),microsoft_bond=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t._BondDataType=bond_const._BondDataType,t._Encoding=microsoft_bond_encoding,t.IO=microsoft_bond_io,t.Int64=microsoft_bond_primitives.Int64,t.UInt64=microsoft_bond_primitives.UInt64,t.Number=microsoft_bond_primitives.Number;var n=function(){function e(e){this._stream=e}return e.prototype._WriteBlob=function(e){this._stream._Write(e,0,e.length)},e.prototype._WriteBool=function(e){this._stream._WriteByte(e?1:0)},e.prototype._WriteContainerBegin=function(e,t){this._WriteUInt8(t),this._WriteUInt32(e)},e.prototype._WriteMapContainerBegin=function(e,t,n){this._WriteUInt8(t),this._WriteUInt8(n),this._WriteUInt32(e)},e.prototype._WriteDouble=function(e){var t=microsoft_bond_encoding._Double_GetBytes(e);this._stream._Write(t,0,t.length)},e.prototype._WriteFieldBegin=function(e,t,n){t<=5?this._stream._WriteByte(e|t<<5):t<=255?(this._stream._WriteByte(192|e),this._stream._WriteByte(t)):(this._stream._WriteByte(224|e),this._stream._WriteByte(t),this._stream._WriteByte(t>>8))},e.prototype._WriteInt32=function(e){e=microsoft_bond_encoding._Zigzag_EncodeZigzag32(e),this._WriteUInt32(e)},e.prototype._WriteInt64=function(e){this._WriteUInt64(microsoft_bond_encoding._Zigzag_EncodeZigzag64(e))},e.prototype._WriteString=function(e){if(""===e)this._WriteUInt32(0);else{var t=microsoft_bond_encoding._Utf8_GetBytes(e);this._WriteUInt32(t.length),this._stream._Write(t,0,t.length)}},e.prototype._WriteStructEnd=function(e){this._WriteUInt8(e?bond_const._BondDataType._BT_STOP_BASE:bond_const._BondDataType._BT_STOP)},e.prototype._WriteUInt32=function(e){var t=microsoft_bond_encoding._Varint_GetBytes(microsoft_bond_primitives.Number._ToUInt32(e));this._stream._Write(t,0,t.length)},e.prototype._WriteUInt64=function(e){var t=microsoft_bond_encoding._Varint64_GetBytes(e);this._stream._Write(t,0,t.length)},e.prototype._WriteUInt8=function(e){this._stream._WriteByte(microsoft_bond_primitives.Number._ToUInt8(e))},e}();t.CompactBinaryProtocolWriter=n})),AWTSerializer_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=2936012,i=function(){function e(){}return e.getPayloadBlob=function(e,t){var i,r=!1,o=new microsoft_bond.IO.MemoryStream,a=new microsoft_bond.CompactBinaryProtocolWriter(o);for(var s in a._WriteFieldBegin(microsoft_bond._BondDataType._BT_MAP,3,null),a._WriteMapContainerBegin(t,microsoft_bond._BondDataType._BT_STRING,microsoft_bond._BondDataType._BT_LIST),e)if(r)i||(i={}),i[s]=e[s],delete e[s];else if(e.hasOwnProperty(s)){a._WriteString(s);var c=e[s];a._WriteContainerBegin(1,microsoft_bond._BondDataType._BT_STRUCT),a._WriteFieldBegin(microsoft_bond._BondDataType._BT_STRING,2,null),a._WriteString("act_default_source"),a._WriteFieldBegin(microsoft_bond._BondDataType._BT_STRING,5,null),a._WriteString(Utils.newGuid()),a._WriteFieldBegin(microsoft_bond._BondDataType._BT_INT64,6,null),a._WriteInt64(Utils.numberToBondInt64(Date.now())),a._WriteFieldBegin(microsoft_bond._BondDataType._BT_LIST,8,null);var l=o._GetBuffer().length+1;a._WriteContainerBegin(e[s].length,microsoft_bond._BondDataType._BT_STRUCT);for(var u=o._GetBuffer().length-l,d=0;d<c.length;++d){var p=o._GetBuffer().length;if(this.writeEvent(c[d],a),o._GetBuffer().length-p>n)AWTNotificationManager_1.default.eventsRejected([c[d]],Enums.AWTEventsRejectedReason.SizeLimitExceeded),c.splice(d--,1),o._GetBuffer().splice(p),this._addNewDataPackageSize(c.length,o,u,l);else if(o._GetBuffer().length>n){o._GetBuffer().splice(p),i||(i={}),e[s]=c.splice(0,d),i[s]=c,this._addNewDataPackageSize(e[s].length,o,u,l),r=!0;break}}a._WriteStructEnd(!1)}return a._WriteStructEnd(!1),{payloadBlob:o._GetBuffer(),remainingRequest:i}},e._addNewDataPackageSize=function(e,t,n,i){for(var r=microsoft_bond._Encoding._Varint_GetBytes(microsoft_bond.Number._ToUInt32(e)),o=0;o<n;++o){if(!(o<r.length)){t._GetBuffer().slice(i+o,n-o);break}t._GetBuffer()[i+o]=r[o]}},e.writeEvent=function(e,t){t._WriteFieldBegin(microsoft_bond._BondDataType._BT_STRING,1,null),t._WriteString(e.id),t._WriteFieldBegin(microsoft_bond._BondDataType._BT_INT64,3,null),t._WriteInt64(Utils.numberToBondInt64(e.timestamp)),t._WriteFieldBegin(microsoft_bond._BondDataType._BT_STRING,5,null),t._WriteString(e.type),t._WriteFieldBegin(microsoft_bond._BondDataType._BT_STRING,6,null),t._WriteString(e.name);var n={},i=0,r={},o=0,a={},s=0,c={},l=0,u={},d=0,p={},f=0,h={},g=0;for(var m in e.properties){if(e.properties.hasOwnProperty(m))if((S=e.properties[m]).cc>0)h[m]=S,g++;else if(S.pii>0)p[m]=S,f++;else switch(S.type){case Enums.AWTPropertyType.String:n[m]=S.value,i++;break;case Enums.AWTPropertyType.Int64:r[m]=S.value,o++;break;case Enums.AWTPropertyType.Double:a[m]=S.value,s++;break;case Enums.AWTPropertyType.Boolean:c[m]=S.value,l++;break;case Enums.AWTPropertyType.Date:u[m]=S.value,d++}}if(i)for(var m in t._WriteFieldBegin(microsoft_bond._BondDataType._BT_MAP,13,null),t._WriteMapContainerBegin(i,microsoft_bond._BondDataType._BT_STRING,microsoft_bond._BondDataType._BT_STRING),n)if(n.hasOwnProperty(m)){var v=n[m];t._WriteString(m),t._WriteString(v.toString())}if(f)for(var m in t._WriteFieldBegin(microsoft_bond._BondDataType._BT_MAP,30,null),t._WriteMapContainerBegin(f,microsoft_bond._BondDataType._BT_STRING,microsoft_bond._BondDataType._BT_STRUCT),p)if(p.hasOwnProperty(m)){var S=p[m];t._WriteString(m),t._WriteFieldBegin(microsoft_bond._BondDataType._BT_INT32,1,null),t._WriteInt32(1),t._WriteFieldBegin(microsoft_bond._BondDataType._BT_INT32,2,null),t._WriteInt32(S.pii),t._WriteFieldBegin(microsoft_bond._BondDataType._BT_STRING,3,null),t._WriteString(S.value.toString()),t._WriteStructEnd(!1)}if(l)for(var m in t._WriteFieldBegin(microsoft_bond._BondDataType._BT_MAP,31,null),t._WriteMapContainerBegin(l,microsoft_bond._BondDataType._BT_STRING,microsoft_bond._BondDataType._BT_BOOL),c)if(c.hasOwnProperty(m)){v=c[m];t._WriteString(m),t._WriteBool(v)}if(d)for(var m in t._WriteFieldBegin(microsoft_bond._BondDataType._BT_MAP,32,null),t._WriteMapContainerBegin(d,microsoft_bond._BondDataType._BT_STRING,microsoft_bond._BondDataType._BT_INT64),u)if(u.hasOwnProperty(m)){v=u[m];t._WriteString(m),t._WriteInt64(Utils.numberToBondInt64(v))}if(o)for(var m in t._WriteFieldBegin(microsoft_bond._BondDataType._BT_MAP,33,null),t._WriteMapContainerBegin(o,microsoft_bond._BondDataType._BT_STRING,microsoft_bond._BondDataType._BT_INT64),r)if(r.hasOwnProperty(m)){v=r[m];t._WriteString(m),t._WriteInt64(Utils.numberToBondInt64(v))}if(s)for(var m in t._WriteFieldBegin(microsoft_bond._BondDataType._BT_MAP,34,null),t._WriteMapContainerBegin(s,microsoft_bond._BondDataType._BT_STRING,microsoft_bond._BondDataType._BT_DOUBLE),a)if(a.hasOwnProperty(m)){v=a[m];t._WriteString(m),t._WriteDouble(v)}if(g)for(var m in t._WriteFieldBegin(microsoft_bond._BondDataType._BT_MAP,36,null),t._WriteMapContainerBegin(g,microsoft_bond._BondDataType._BT_STRING,microsoft_bond._BondDataType._BT_STRUCT),h)if(h.hasOwnProperty(m)){S=h[m];t._WriteString(m),t._WriteFieldBegin(microsoft_bond._BondDataType._BT_INT32,1,null),t._WriteInt32(S.cc),t._WriteFieldBegin(microsoft_bond._BondDataType._BT_STRING,2,null),t._WriteString(S.value.toString()),t._WriteStructEnd(!1)}t._WriteStructEnd(!1)},e.base64Encode=function(e){return microsoft_bond._Encoding._Base64_GetString(e)},e}();t.default=i})),AWTRetryPolicy_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.shouldRetryForStatus=function(e){return!(e>=300&&e<500&&408!==e||501===e||505===e)},e.getMillisToBackoffForRetry=function(e){var t,n=Math.floor(1200*Math.random())+2400;return t=Math.pow(4,e)*n,Math.min(t,12e4)},e}();t.default=n})),AWTKillSwitch_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this._killedTokenDictionary={}}return e.prototype.setKillSwitchTenants=function(e,t){if(e&&t)try{var n=e.split(",");if("this-request-only"===t)return n;for(var i=1e3*parseInt(t,10),r=0;r<n.length;++r)this._killedTokenDictionary[n[r]]=Date.now()+i}catch(e){return[]}return[]},e.prototype.isTenantKilled=function(e){return void 0!==this._killedTokenDictionary[e]&&this._killedTokenDictionary[e]>Date.now()||(delete this._killedTokenDictionary[e],!1)},e}();t.default=n})),AWTClockSkewManager_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.clockSkewRefreshDurationInMins=e,this._reset()}return e.prototype.allowRequestSending=function(){return this._isFirstRequest&&!this._clockSkewSet?(this._isFirstRequest=!1,this._allowRequestSending=!1,!0):this._allowRequestSending},e.prototype.shouldAddClockSkewHeaders=function(){return this._shouldAddClockSkewHeaders},e.prototype.getClockSkewHeaderValue=function(){return this._clockSkewHeaderValue},e.prototype.setClockSkew=function(e){this._clockSkewSet||(e?this._clockSkewHeaderValue=e:this._shouldAddClockSkewHeaders=!1,this._clockSkewSet=!0,this._allowRequestSending=!0)},e.prototype._reset=function(){var e=this;this._isFirstRequest=!0,this._clockSkewSet=!1,this._allowRequestSending=!0,this._shouldAddClockSkewHeaders=!0,this._clockSkewHeaderValue="use-collector-delta",this.clockSkewRefreshDurationInMins>0&&setTimeout((function(){return e._reset()}),6e4*this.clockSkewRefreshDurationInMins)},e}();t.default=n})),Version=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Version="1.8.3",t.FullVersionString="AWT-Web-JS-"+t.Version})),AWTHttpManager_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="POST",i=function(){function e(e,t,i,r,o){var a=this;this._requestQueue=e,this._queueManager=i,this._httpInterface=r,this._urlString="?qsp=true&content-type=application%2Fbond-compact-binary&client-id=NO_AUTH&sdk-version="+Version.FullVersionString,this._killSwitch=new AWTKillSwitch_1.default,this._paused=!1,this._useBeacons=!1,this._activeConnections=0,this._clockSkewManager=new AWTClockSkewManager_1.default(o),Utils.isUint8ArrayAvailable()||(this._urlString+="&content-encoding=base64"),this._urlString=t+this._urlString,this._httpInterface||(this._useBeacons=!Utils.isReactNative(),this._httpInterface={sendPOST:function(e,t,i,r,o,s){try{if(Utils.useXDomainRequest()){var c=new XDomainRequest;c.open(n,e),c.onload=function(){o(200,null)},c.onerror=function(){r(400,null)},c.ontimeout=function(){i(500,null)},c.send(t)}else if(Utils.isReactNative())fetch(e,{body:t,method:n}).then((function(e){var t={};e.headers&&e.headers.forEach((function(e,n){t[n]=e})),o(e.status,t)})).catch((function(e){r(0,{})}));else{var l=new XMLHttpRequest;l.open(n,e,!s),l.onload=function(){o(l.status,a._convertAllHeadersToMap(l.getAllResponseHeaders()))},l.onerror=function(){r(l.status,a._convertAllHeadersToMap(l.getAllResponseHeaders()))},l.ontimeout=function(){i(l.status,a._convertAllHeadersToMap(l.getAllResponseHeaders()))},l.send(t)}}catch(e){r(400,null)}}})}return e.prototype.hasIdleConnection=function(){return this._activeConnections<2},e.prototype.sendQueuedRequests=function(){for(;this.hasIdleConnection()&&!this._paused&&this._requestQueue.length>0&&this._clockSkewManager.allowRequestSending();)this._activeConnections++,this._sendRequest(this._requestQueue.shift(),0,!1);this.hasIdleConnection()&&AWTTransmissionManagerCore_1.default.scheduleTimer()},e.prototype.isCompletelyIdle=function(){return 0===this._activeConnections},e.prototype.teardown=function(){for(;this._requestQueue.length>0;)this._sendRequest(this._requestQueue.shift(),0,!0)},e.prototype.pause=function(){this._paused=!0},e.prototype.resume=function(){this._paused=!1,this.sendQueuedRequests()},e.prototype.removeQueuedRequests=function(){this._requestQueue.length=0},e.prototype.sendSynchronousRequest=function(e,t){this._paused&&(e[t][0].priority=Enums.AWTEventPriority.High),this._activeConnections++,this._sendRequest(e,0,!1,!0)},e.prototype._sendRequest=function(e,t,n,i){var r=this;void 0===i&&(i=!1);try{if(this._paused)return this._activeConnections--,void this._queueManager.addBackRequest(e);var o=0,a="";for(var s in e)e.hasOwnProperty(s)&&(this._killSwitch.isTenantKilled(s)?(AWTNotificationManager_1.default.eventsRejected(e[s],Enums.AWTEventsRejectedReason.KillSwitch),delete e[s]):(a.length>0&&(a+=","),a+=s,o++));if(o>0){var c=AWTSerializer_1.default.getPayloadBlob(e,o);c.remainingRequest&&this._requestQueue.push(c.remainingRequest);var l=this._urlString+"&x-apikey="+a+"&client-time-epoch-millis="+Date.now().toString();this._clockSkewManager.shouldAddClockSkewHeaders()&&(l=l+"&time-delta-to-apply-millis="+this._clockSkewManager.getClockSkewHeaderValue());var u=void 0;for(var s in u=Utils.isUint8ArrayAvailable()?new Uint8Array(c.payloadBlob):AWTSerializer_1.default.base64Encode(c.payloadBlob),e)if(e.hasOwnProperty(s))for(var d=0;d<e[s].length;++d)e[s][d].sendAttempt>0?e[s][d].sendAttempt++:e[s][d].sendAttempt=1;if(this._useBeacons&&n&&Utils.isBeaconsSupported()&&navigator.sendBeacon(l,u))return;this._httpInterface.sendPOST(l,u,(function(s,c){r._retryRequestIfNeeded(s,c,e,o,a,t,n,i)}),(function(s,c){r._retryRequestIfNeeded(s,c,e,o,a,t,n,i)}),(function(s,c){r._retryRequestIfNeeded(s,c,e,o,a,t,n,i)}),n||i)}else n||this._handleRequestFinished(!1,{},n,i)}catch(e){this._handleRequestFinished(!1,{},n,i)}},e.prototype._retryRequestIfNeeded=function(e,t,n,i,r,o,a,s){var c=this,l=!0;if(void 0!==e){if(t){var u=this._killSwitch.setKillSwitchTenants(t["kill-tokens"],t["kill-duration-seconds"]);this._clockSkewManager.setClockSkew(t["time-delta-millis"]);for(var d=0;d<u.length;++d)AWTNotificationManager_1.default.eventsRejected(n[u[d]],Enums.AWTEventsRejectedReason.KillSwitch),delete n[u[d]],i--}else this._clockSkewManager.setClockSkew(null);if(200===e)return void this._handleRequestFinished(!0,n,a,s);(!AWTRetryPolicy_1.default.shouldRetryForStatus(e)||i<=0)&&(l=!1)}if(l)if(s)this._activeConnections--,n[r][0].priority=Enums.AWTEventPriority.High,this._queueManager.addBackRequest(n);else if(o<1){for(var p in n)n.hasOwnProperty(p)&&AWTNotificationManager_1.default.eventsRetrying(n[p]);setTimeout((function(){return c._sendRequest(n,o+1,!1)}),AWTRetryPolicy_1.default.getMillisToBackoffForRetry(o))}else this._activeConnections--,AWTTransmissionManagerCore_1.default.backOffTransmission(),this._queueManager.addBackRequest(n);else this._handleRequestFinished(!1,n,a,s)},e.prototype._handleRequestFinished=function(e,t,n,i){for(var r in e&&AWTTransmissionManagerCore_1.default.clearBackOff(),t)t.hasOwnProperty(r)&&(e?AWTNotificationManager_1.default.eventsSent(t[r]):AWTNotificationManager_1.default.eventsDropped(t[r],Enums.AWTEventsDroppedReason.NonRetryableStatus));this._activeConnections--,i||n||this.sendQueuedRequests()},e.prototype._convertAllHeadersToMap=function(e){var t={};if(e)for(var n=e.split("\n"),i=0;i<n.length;++i){var r=n[i].split(": ");t[r[0]]=r[1]}return t},e}();t.default=i})),AWTRecordBatcher_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){this._outboundQueue=e,this._maxNumberOfEvents=t,this._currentBatch={},this._currentNumEventsInBatch=0}return e.prototype.addEventToBatch=function(e){if(e.priority===Enums.AWTEventPriority.Immediate_sync){var t={};return t[e.apiKey]=[e],t}return this._currentNumEventsInBatch>=this._maxNumberOfEvents&&this.flushBatch(),void 0===this._currentBatch[e.apiKey]&&(this._currentBatch[e.apiKey]=[]),this._currentBatch[e.apiKey].push(e),this._currentNumEventsInBatch++,null},e.prototype.flushBatch=function(){this._currentNumEventsInBatch>0&&(this._outboundQueue.push(this._currentBatch),this._currentBatch={},this._currentNumEventsInBatch=0)},e.prototype.hasBatch=function(){return this._currentNumEventsInBatch>0},e}();t.default=n})),AWTQueueManager_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,n,i){this._queueSizeLimit=t,this._isCurrentlyUploadingNow=!1,this._uploadNowQueue=[],this._shouldDropEventsOnPause=!1,this._paused=!1,this._queueSize=0,this._outboundQueue=[],this._inboundQueues={},this._inboundQueues[Enums.AWTEventPriority.High]=[],this._inboundQueues[Enums.AWTEventPriority.Normal]=[],this._inboundQueues[Enums.AWTEventPriority.Low]=[],this._addEmptyQueues(),this._batcher=new AWTRecordBatcher_1.default(this._outboundQueue,500),this._httpManager=new AWTHttpManager_1.default(this._outboundQueue,e,this,n,i)}return e.prototype.addEvent=function(e){Utils.isPriority(e.priority)||(e.priority=Enums.AWTEventPriority.Normal),e.priority===Enums.AWTEventPriority.Immediate_sync?this._httpManager.sendSynchronousRequest(this._batcher.addEventToBatch(e),e.apiKey):this._queueSize<this._queueSizeLimit||this._dropEventWithPriorityOrLess(e.priority)?this._addEventToProperQueue(e):AWTNotificationManager_1.default.eventsDropped([e],Enums.AWTEventsDroppedReason.QueueFull)},e.prototype.sendEventsForPriorityAndAbove=function(e){this._batchEvents(e),this._httpManager.sendQueuedRequests()},e.prototype.hasEvents=function(){return(this._inboundQueues[Enums.AWTEventPriority.High][0].length>0||this._inboundQueues[Enums.AWTEventPriority.Normal][0].length>0||this._inboundQueues[Enums.AWTEventPriority.Low][0].length>0||this._batcher.hasBatch())&&this._httpManager.hasIdleConnection()},e.prototype.addBackRequest=function(e){if(!this._paused||!this._shouldDropEventsOnPause){for(var t in e)if(e.hasOwnProperty(t))for(var n=0;n<e[t].length;++n)e[t][n].sendAttempt<6?this.addEvent(e[t][n]):AWTNotificationManager_1.default.eventsDropped([e[t][n]],Enums.AWTEventsDroppedReason.NonRetryableStatus);AWTTransmissionManagerCore_1.default.scheduleTimer()}},e.prototype.teardown=function(){this._paused||(this._batchEvents(Enums.AWTEventPriority.Low),this._httpManager.teardown())},e.prototype.uploadNow=function(e){var t=this;this._addEmptyQueues(),this._isCurrentlyUploadingNow?this._uploadNowQueue.push(e):(this._isCurrentlyUploadingNow=!0,setTimeout((function(){return t._uploadNow(e)}),0))},e.prototype.pauseTransmission=function(){this._paused=!0,this._httpManager.pause(),this.shouldDropEventsOnPause&&(this._queueSize-=this._inboundQueues[Enums.AWTEventPriority.High][0].length+this._inboundQueues[Enums.AWTEventPriority.Normal][0].length+this._inboundQueues[Enums.AWTEventPriority.Low][0].length,this._inboundQueues[Enums.AWTEventPriority.High][0]=[],this._inboundQueues[Enums.AWTEventPriority.Normal][0]=[],this._inboundQueues[Enums.AWTEventPriority.Low][0]=[],this._httpManager.removeQueuedRequests())},e.prototype.resumeTransmission=function(){this._paused=!1,this._httpManager.resume()},e.prototype.shouldDropEventsOnPause=function(e){this._shouldDropEventsOnPause=e},e.prototype._removeFirstQueues=function(){this._inboundQueues[Enums.AWTEventPriority.High].shift(),this._inboundQueues[Enums.AWTEventPriority.Normal].shift(),this._inboundQueues[Enums.AWTEventPriority.Low].shift()},e.prototype._addEmptyQueues=function(){this._inboundQueues[Enums.AWTEventPriority.High].push([]),this._inboundQueues[Enums.AWTEventPriority.Normal].push([]),this._inboundQueues[Enums.AWTEventPriority.Low].push([])},e.prototype._addEventToProperQueue=function(e){this._paused&&this._shouldDropEventsOnPause||(this._queueSize++,this._inboundQueues[e.priority][this._inboundQueues[e.priority].length-1].push(e))},e.prototype._dropEventWithPriorityOrLess=function(e){for(var t=Enums.AWTEventPriority.Low;t<=e;){if(this._inboundQueues[t][this._inboundQueues[t].length-1].length>0)return AWTNotificationManager_1.default.eventsDropped([this._inboundQueues[t][this._inboundQueues[t].length-1].shift()],Enums.AWTEventsDroppedReason.QueueFull),!0;t++}return!1},e.prototype._batchEvents=function(e){for(var t=Enums.AWTEventPriority.High;t>=e;){for(;this._inboundQueues[t][0].length>0;){var n=this._inboundQueues[t][0].pop();this._queueSize--,this._batcher.addEventToBatch(n)}t--}this._batcher.flushBatch()},e.prototype._uploadNow=function(e){var t=this;this.hasEvents()&&this.sendEventsForPriorityAndAbove(Enums.AWTEventPriority.Low),this._checkOutboundQueueEmptyAndSent((function(){t._removeFirstQueues(),null!=e&&e(),t._uploadNowQueue.length>0?setTimeout((function(){return t._uploadNow(t._uploadNowQueue.shift())}),0):(t._isCurrentlyUploadingNow=!1,t.hasEvents()&&AWTTransmissionManagerCore_1.default.scheduleTimer())}))},e.prototype._checkOutboundQueueEmptyAndSent=function(e){var t=this;this._httpManager.isCompletelyIdle()?e():setTimeout((function(){return t._checkOutboundQueueEmptyAndSent(e)}),250)},e}();t.default=n})),AWTAutoCollection_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="MicrosoftApplicationsTelemetryDeviceId",i="MicrosoftApplicationsTelemetryFirstLaunchTime",r="MSIE",o="Chrome",a="Firefox",s="Safari",c="Edge",l="Electron",u="SkypeShell",d="PhantomJS",p="Opera",f="Windows",h="Mac OS X",g="Windows Phone",m="Windows RT",v="iOS",S="Android",y="Linux",_="Chrome OS",E=/(windows|win32)/i,T=/ arm;/i,C=/windows\sphone\s\d+\.\d+/i,I=/(macintosh|mac os x)/i,A=/(iPad|iPhone|iPod)(?=.*like Mac OS X)/i,b=/(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,R=/android/i,O=/CrOS/i,P={5.1:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1","10.0":"10"},N="([\\d,.]+)",M="Unknown",w="undefined",D=function(){function e(){}return e.addPropertyStorageOverride=function(e){return!!e&&(this._propertyStorage=e,!0)},e.autoCollect=function(e,t,r){if(this._semanticContext=e,this._disableCookies=t,this._autoCollect(),r||typeof navigator===w||(r=navigator.userAgent||""),this._autoCollectFromUserAgent(r),this._disableCookies&&!this._propertyStorage)return this._deleteCookie(n),void this._deleteCookie(i);(this._propertyStorage||this._areCookiesAvailable&&!this._disableCookies)&&this._autoCollectDeviceId()},e.checkAndSaveDeviceId=function(e){if(e){var t=this._getData(n),r=this._getData(i);t!==e&&(r=Utils.getISOString(new Date)),this._saveData(n,e),this._saveData(i,r),this._setFirstLaunchTime(r)}},e._autoCollectDeviceId=function(){var e=this._getData(n);e||(e=Utils.newGuid()),this._semanticContext.setDeviceId(e)},e._autoCollect=function(){typeof document!==w&&document.documentElement&&this._semanticContext.setAppLanguage(document.documentElement.lang),typeof navigator!==w&&this._semanticContext.setUserLanguage(navigator.userLanguage||navigator.language);var e=(new Date).getTimezoneOffset(),t=e%60,n=(e-t)/60,i="+";n>0&&(i="-"),n=Math.abs(n),t=Math.abs(t),this._semanticContext.setUserTimeZone(i+(n<10?"0"+n:n.toString())+":"+(t<10?"0"+t:t.toString()))},e._autoCollectFromUserAgent=function(e){if(e){var t=this._getBrowserName(e);this._semanticContext.setDeviceBrowserName(t),this._semanticContext.setDeviceBrowserVersion(this._getBrowserVersion(e,t));var n=this._getOsName(e);this._semanticContext.setDeviceOsName(n),this._semanticContext.setDeviceOsVersion(this._getOsVersion(e,n))}},e._getBrowserName=function(e){return this._userAgentContainsString("OPR/",e)?p:this._userAgentContainsString(d,e)?d:this._userAgentContainsString(c,e)?c:this._userAgentContainsString(l,e)?l:this._userAgentContainsString(o,e)?o:this._userAgentContainsString("Trident",e)?r:this._userAgentContainsString(a,e)?a:this._userAgentContainsString(s,e)?s:this._userAgentContainsString(u,e)?u:M},e._setFirstLaunchTime=function(e){if(!isNaN(e)){var t=new Date;t.setTime(parseInt(e,10)),e=Utils.getISOString(t)}this.firstLaunchTime=e},e._userAgentContainsString=function(e,t){return t.indexOf(e)>-1},e._getBrowserVersion=function(e,t){return t===r?this._getIeVersion(e):this._getOtherVersion(t,e)},e._getIeVersion=function(e){var t=e.match(new RegExp(r+" "+N));if(t)return t[1];var n=e.match(new RegExp("rv:([\\d,.]+)"));return n?n[1]:void 0},e._getOtherVersion=function(e,t){e===s&&(e="Version");var n=t.match(new RegExp(e+"/"+N));return n?n[1]:M},e._getOsName=function(e){return e.match(C)?g:e.match(T)?m:e.match(A)?v:e.match(R)?S:e.match(b)?y:e.match(I)?h:e.match(E)?f:e.match(O)?_:M},e._getOsVersion=function(e,t){return t===f?this._getGenericOsVersion(e,"Windows NT"):t===S?this._getGenericOsVersion(e,t):t===h?this._getMacOsxVersion(e):M},e._getGenericOsVersion=function(e,t){var n=e.match(new RegExp(t+" "+N));return n?P[n[1]]?P[n[1]]:n[1]:M},e._getMacOsxVersion=function(e){var t=e.match(new RegExp(h+" ([\\d,_,.]+)"));if(t){var n=t[1].replace(/_/g,".");if(n){var i=this._getDelimiter(n);return i?n.split(i)[0]:n}}return M},e._getDelimiter=function(e){return e.indexOf(".")>-1?".":e.indexOf("_")>-1?"_":null},e._saveData=function(e,t){if(this._propertyStorage)this._propertyStorage.setProperty(e,t);else if(this._areCookiesAvailable){var n=new Date;n.setTime(n.getTime()+31536e6);var i="expires="+n.toUTCString();document.cookie=e+"="+t+"; "+i}},e._getData=function(e){if(this._propertyStorage)return this._propertyStorage.getProperty(e)||"";if(this._areCookiesAvailable){e+="=";for(var t=document.cookie.split(";"),n=0;n<t.length;n++){for(var i=t[n],r=0;" "===i.charAt(r);)r++;if(0===(i=i.substring(r)).indexOf(e))return i.substring(e.length,i.length)}}return""},e._deleteCookie=function(e){this._areCookiesAvailable&&(document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;")},e._disableCookies=!1,e._areCookiesAvailable=typeof document!==w&&typeof document.cookie!==w,e}();t.default=D})),AWTSemanticContext_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="UserInfo.IdType",i=function(){function e(e,t){this._allowDeviceFields=e,this._properties=t}return e.prototype.setAppId=function(e){this._addContext("AppInfo.Id",e)},e.prototype.setAppVersion=function(e){this._addContext("AppInfo.Version",e)},e.prototype.setAppLanguage=function(e){this._addContext("AppInfo.Language",e)},e.prototype.setDeviceId=function(e){this._allowDeviceFields&&(AWTAutoCollection_1.default.checkAndSaveDeviceId(e),this._addContext("DeviceInfo.Id",e))},e.prototype.setDeviceOsName=function(e){this._allowDeviceFields&&this._addContext("DeviceInfo.OsName",e)},e.prototype.setDeviceOsVersion=function(e){this._allowDeviceFields&&this._addContext("DeviceInfo.OsVersion",e)},e.prototype.setDeviceBrowserName=function(e){this._allowDeviceFields&&this._addContext("DeviceInfo.BrowserName",e)},e.prototype.setDeviceBrowserVersion=function(e){this._allowDeviceFields&&this._addContext("DeviceInfo.BrowserVersion",e)},e.prototype.setDeviceMake=function(e){this._allowDeviceFields&&this._addContext("DeviceInfo.Make",e)},e.prototype.setDeviceModel=function(e){this._allowDeviceFields&&this._addContext("DeviceInfo.Model",e)},e.prototype.setUserId=function(e,t,i){if(!isNaN(i)&&null!==i&&i>=0&&i<=12)this._addContext(n,i.toString());else{var r=void 0;switch(t){case Enums.AWTPiiKind.SipAddress:r=Enums$1.AWTUserIdType.SipAddress;break;case Enums.AWTPiiKind.PhoneNumber:r=Enums$1.AWTUserIdType.PhoneNumber;break;case Enums.AWTPiiKind.SmtpAddress:r=Enums$1.AWTUserIdType.EmailAddress;break;default:r=Enums$1.AWTUserIdType.Unknown}this._addContext(n,r.toString())}if(isNaN(t)||null===t||t===Enums.AWTPiiKind.NotSet||t>13)switch(i){case Enums$1.AWTUserIdType.Skype:t=Enums.AWTPiiKind.Identity;break;case Enums$1.AWTUserIdType.EmailAddress:t=Enums.AWTPiiKind.SmtpAddress;break;case Enums$1.AWTUserIdType.PhoneNumber:t=Enums.AWTPiiKind.PhoneNumber;break;case Enums$1.AWTUserIdType.SipAddress:t=Enums.AWTPiiKind.SipAddress;break;default:t=Enums.AWTPiiKind.NotSet}this._addContextWithPii("UserInfo.Id",e,t)},e.prototype.setUserAdvertisingId=function(e){this._addContext("UserInfo.AdvertisingId",e)},e.prototype.setUserTimeZone=function(e){this._addContext("UserInfo.TimeZone",e)},e.prototype.setUserLanguage=function(e){this._addContext("UserInfo.Language",e)},e.prototype._addContext=function(e,t){"string"==typeof t&&this._properties.setProperty(e,t)},e.prototype._addContextWithPii=function(e,t,n){"string"==typeof t&&this._properties.setPropertyWithPii(e,t,n)},e}();t.default=i})),AWTLogManagerSettings_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.logManagerContext=new AWTEventProperties_1.default,e.sessionEnabled=!0,e.loggingEnabled=!1,e.defaultTenantToken="",e.semanticContext=new AWTSemanticContext_1.default(!0,e.logManagerContext),e}();t.default=n})),AWTLogManager_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.initialize=function(e,t){if(void 0===t&&(t={}),!this._isInitialized)return this._isInitialized=!0,AWTLogManagerSettings_1.default.defaultTenantToken=e,this._overrideValuesFromConfig(t),this._config.disableCookiesUsage&&!this._config.propertyStorageOverride&&(AWTLogManagerSettings_1.default.sessionEnabled=!1),AWTAutoCollection_1.default.addPropertyStorageOverride(this._config.propertyStorageOverride),AWTAutoCollection_1.default.autoCollect(AWTLogManagerSettings_1.default.semanticContext,this._config.disableCookiesUsage,this._config.userAgent),AWTTransmissionManagerCore_1.default.initialize(this._config),AWTLogManagerSettings_1.default.loggingEnabled=!0,this._config.enableAutoUserSession&&(this.getLogger().logSession(Enums$1.AWTSessionState.Started),window.addEventListener("beforeunload",this.flushAndTeardown)),this.getLogger()},e.getSemanticContext=function(){return AWTLogManagerSettings_1.default.semanticContext},e.flush=function(e){this._isInitialized&&!this._isDestroyed&&AWTTransmissionManagerCore_1.default.flush(e)},e.flushAndTeardown=function(){this._isInitialized&&!this._isDestroyed&&(this._config.enableAutoUserSession&&this.getLogger().logSession(Enums$1.AWTSessionState.Ended),AWTTransmissionManagerCore_1.default.flushAndTeardown(),AWTLogManagerSettings_1.default.loggingEnabled=!1,this._isDestroyed=!0)},e.pauseTransmission=function(){this._isInitialized&&!this._isDestroyed&&AWTTransmissionManagerCore_1.default.pauseTransmission()},e.resumeTransmision=function(){this._isInitialized&&!this._isDestroyed&&AWTTransmissionManagerCore_1.default.resumeTransmision()},e.setTransmitProfile=function(e){this._isInitialized&&!this._isDestroyed&&AWTTransmissionManagerCore_1.default.setTransmitProfile(e)},e.loadTransmitProfiles=function(e){this._isInitialized&&!this._isDestroyed&&AWTTransmissionManagerCore_1.default.loadTransmitProfiles(e)},e.setContext=function(e,t,n){void 0===n&&(n=Enums.AWTPropertyType.Unspecified),AWTLogManagerSettings_1.default.logManagerContext.setProperty(e,t,n)},e.setContextWithPii=function(e,t,n,i){void 0===i&&(i=Enums.AWTPropertyType.Unspecified),AWTLogManagerSettings_1.default.logManagerContext.setPropertyWithPii(e,t,n,i)},e.setContextWithCustomerContent=function(e,t,n,i){void 0===i&&(i=Enums.AWTPropertyType.Unspecified),AWTLogManagerSettings_1.default.logManagerContext.setPropertyWithCustomerContent(e,t,n,i)},e.getLogger=function(e){var t=e;return t&&t!==AWTLogManagerSettings_1.default.defaultTenantToken||(t=""),this._loggers[t]||(this._loggers[t]=new AWTLogger_1.default(t)),this._loggers[t]},e.addNotificationListener=function(e){AWTNotificationManager_1.default.addNotificationListener(e)},e.removeNotificationListener=function(e){AWTNotificationManager_1.default.removeNotificationListener(e)},e._overrideValuesFromConfig=function(e){e.collectorUri&&(this._config.collectorUri=e.collectorUri),e.cacheMemorySizeLimitInNumberOfEvents>0&&(this._config.cacheMemorySizeLimitInNumberOfEvents=e.cacheMemorySizeLimitInNumberOfEvents),e.httpXHROverride&&e.httpXHROverride.sendPOST&&(this._config.httpXHROverride=e.httpXHROverride),e.propertyStorageOverride&&e.propertyStorageOverride.getProperty&&e.propertyStorageOverride.setProperty&&(this._config.propertyStorageOverride=e.propertyStorageOverride),e.userAgent&&(this._config.userAgent=e.userAgent),e.disableCookiesUsage&&(this._config.disableCookiesUsage=e.disableCookiesUsage),e.canSendStatEvent&&(this._config.canSendStatEvent=e.canSendStatEvent),e.enableAutoUserSession&&"undefined"!=typeof window&&window.addEventListener&&(this._config.enableAutoUserSession=e.enableAutoUserSession),e.clockSkewRefreshDurationInMins>0&&(this._config.clockSkewRefreshDurationInMins=e.clockSkewRefreshDurationInMins)},e._loggers={},e._isInitialized=!1,e._isDestroyed=!1,e._config={collectorUri:"https://browser.pipe.aria.microsoft.com/Collector/3.0/",cacheMemorySizeLimitInNumberOfEvents:1e4,disableCookiesUsage:!1,canSendStatEvent:function(e){return!0},clockSkewRefreshDurationInMins:0},e}();t.default=n})),AWTTransmissionManagerCore_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="awt_stats",i=function(){function e(){}return e.setEventsHandler=function(e){this._eventHandler=e},e.getEventsHandler=function(){return this._eventHandler},e.scheduleTimer=function(){var e=this,t=this._profiles[this._currentProfile][2];this._timeout<0&&t>=0&&!this._paused&&(this._eventHandler.hasEvents()?(0===t&&this._currentBackoffCount>0&&(t=1),this._timeout=setTimeout((function(){return e._batchAndSendEvents()}),t*(1<<this._currentBackoffCount)*1e3)):this._timerCount=0)},e.initialize=function(e){var t=this;this._newEventsAllowed=!0,this._config=e,this._eventHandler=new AWTQueueManager_1.default(e.collectorUri,e.cacheMemorySizeLimitInNumberOfEvents,e.httpXHROverride,e.clockSkewRefreshDurationInMins),this._initializeProfiles(),AWTStatsManager_1.default.initialize((function(e,i){if(t._config.canSendStatEvent(n)){var r=new AWTEventProperties_1.default(n);for(var o in r.setEventPriority(Enums.AWTEventPriority.High),r.setProperty("TenantId",i),e)e.hasOwnProperty(o)&&r.setProperty(o,e[o].toString());AWTLogManager_1.default.getLogger(Utils.StatsApiKey).logEvent(r)}}))},e.setTransmitProfile=function(e){this._currentProfile!==e&&void 0!==this._profiles[e]&&(this.clearTimeout(),this._currentProfile=e,this.scheduleTimer())},e.loadTransmitProfiles=function(e){for(var t in this._resetTransmitProfiles(),e)if(e.hasOwnProperty(t)){if(3!==e[t].length)continue;for(var n=2;n>=0;--n)if(e[t][n]<0){for(var i=n;i>=0;--i)e[t][i]=-1;break}for(n=2;n>0;--n)if(e[t][n]>0&&e[t][n-1]>0){var r=e[t][n-1]/e[t][n];e[t][n-1]=Math.ceil(r)*e[t][n]}this._profiles[t]=e[t]}},e.sendEvent=function(e){this._newEventsAllowed&&(this._currentBackoffCount>0&&e.priority===Enums.AWTEventPriority.Immediate_sync&&(e.priority=Enums.AWTEventPriority.High),this._eventHandler.addEvent(e),this.scheduleTimer())},e.flush=function(e){var t=(new Date).getTime();!this._paused&&this._lastUploadNowCall+3e4<t&&(this._lastUploadNowCall=t,this._timeout>-1&&(clearTimeout(this._timeout),this._timeout=-1),this._eventHandler.uploadNow(e))},e.pauseTransmission=function(){this._paused||(this.clearTimeout(),this._eventHandler.pauseTransmission(),this._paused=!0)},e.resumeTransmision=function(){this._paused&&(this._paused=!1,this._eventHandler.resumeTransmission(),this.scheduleTimer())},e.flushAndTeardown=function(){AWTStatsManager_1.default.teardown(),this._newEventsAllowed=!1,this.clearTimeout(),this._eventHandler.teardown()},e.backOffTransmission=function(){this._currentBackoffCount<4&&(this._currentBackoffCount++,this.clearTimeout(),this.scheduleTimer())},e.clearBackOff=function(){this._currentBackoffCount>0&&(this._currentBackoffCount=0,this.clearTimeout(),this.scheduleTimer())},e._resetTransmitProfiles=function(){this.clearTimeout(),this._initializeProfiles(),this._currentProfile=DataModels.AWT_REAL_TIME,this.scheduleTimer()},e.clearTimeout=function(){this._timeout>0&&(clearTimeout(this._timeout),this._timeout=-1,this._timerCount=0)},e._batchAndSendEvents=function(){var e=Enums.AWTEventPriority.High;this._timerCount++,this._timerCount*this._profiles[this._currentProfile][2]===this._profiles[this._currentProfile][0]?(e=Enums.AWTEventPriority.Low,this._timerCount=0):this._timerCount*this._profiles[this._currentProfile][2]===this._profiles[this._currentProfile][1]&&(e=Enums.AWTEventPriority.Normal),this._eventHandler.sendEventsForPriorityAndAbove(e),this._timeout=-1,this.scheduleTimer()},e._initializeProfiles=function(){this._profiles={},this._profiles[DataModels.AWT_REAL_TIME]=[4,2,1],this._profiles[DataModels.AWT_NEAR_REAL_TIME]=[12,6,3],this._profiles[DataModels.AWT_BEST_EFFORT]=[36,18,9]},e._newEventsAllowed=!1,e._currentProfile=DataModels.AWT_REAL_TIME,e._timeout=-1,e._currentBackoffCount=0,e._paused=!1,e._timerCount=0,e._lastUploadNowCall=0,e}();t.default=i})),AWTLogger_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this._apiKey=e,this._contextProperties=new AWTEventProperties_1.default,this._semanticContext=new AWTSemanticContext_1.default(!1,this._contextProperties),this._sessionStartTime=0,this._createInitId()}return e.prototype.setContext=function(e,t,n){void 0===n&&(n=Enums.AWTPropertyType.Unspecified),this._contextProperties.setProperty(e,t,n)},e.prototype.setContextWithPii=function(e,t,n,i){void 0===i&&(i=Enums.AWTPropertyType.Unspecified),this._contextProperties.setPropertyWithPii(e,t,n,i)},e.prototype.setContextWithCustomerContent=function(e,t,n,i){void 0===i&&(i=Enums.AWTPropertyType.Unspecified),this._contextProperties.setPropertyWithCustomerContent(e,t,n,i)},e.prototype.getSemanticContext=function(){return this._semanticContext},e.prototype.logEvent=function(t){if(AWTLogManagerSettings_1.default.loggingEnabled){this._apiKey||(this._apiKey=AWTLogManagerSettings_1.default.defaultTenantToken,this._createInitId());var n=!0;Utils.isString(t)?t={name:t}:t instanceof AWTEventProperties_1.default&&(t=t.getEvent(),n=!1),AWTStatsManager_1.default.eventReceived(this._apiKey),e._logEvent(e._getInternalEvent(t,this._apiKey,n),this._contextProperties)}},e.prototype.logSession=function(t,n){if(AWTLogManagerSettings_1.default.sessionEnabled){var i={name:"session",type:"session",properties:{}};if(e._addPropertiesToEvent(i,n),i.priority=Enums.AWTEventPriority.High,t===Enums$1.AWTSessionState.Started){if(this._sessionStartTime>0)return;this._sessionStartTime=(new Date).getTime(),this._sessionId=Utils.newGuid(),this.setContext("Session.Id",this._sessionId),i.properties["Session.State"]="Started"}else{if(t!==Enums$1.AWTSessionState.Ended)return;if(0===this._sessionStartTime)return;var r=Math.floor(((new Date).getTime()-this._sessionStartTime)/1e3);i.properties["Session.Id"]=this._sessionId,i.properties["Session.State"]="Ended",i.properties["Session.Duration"]=r.toString(),i.properties["Session.DurationBucket"]=e._getSessionDurationFromTime(r),this._sessionStartTime=0,this.setContext("Session.Id",null),this._sessionId=void 0}i.properties["Session.FirstLaunchTime"]=AWTAutoCollection_1.default.firstLaunchTime,this.logEvent(i)}},e.prototype.getSessionId=function(){return this._sessionId},e.prototype.logFailure=function(t,n,i,r,o){if(t&&n){var a={name:"failure",type:"failure",properties:{}};e._addPropertiesToEvent(a,o),a.properties["Failure.Signature"]=t,a.properties["Failure.Detail"]=n,i&&(a.properties["Failure.Category"]=i),r&&(a.properties["Failure.Id"]=r),a.priority=Enums.AWTEventPriority.High,this.logEvent(a)}},e.prototype.logPageView=function(t,n,i,r,o,a){if(t&&n){var s={name:"pageview",type:"pageview",properties:{}};e._addPropertiesToEvent(s,a),s.properties["PageView.Id"]=t,s.properties["PageView.Name"]=n,i&&(s.properties["PageView.Category"]=i),r&&(s.properties["PageView.Uri"]=r),o&&(s.properties["PageView.ReferrerUri"]=o),this.logEvent(s)}},e.prototype._createInitId=function(){!e._initIdMap[this._apiKey]&&this._apiKey&&(e._initIdMap[this._apiKey]=Utils.newGuid())},e._addPropertiesToEvent=function(e,t){if(t)for(var n in t instanceof AWTEventProperties_1.default&&(t=t.getEvent()),t.name&&(e.name=t.name),t.priority&&(e.priority=t.priority),t.properties)t.properties.hasOwnProperty(n)&&(e.properties[n]=t.properties[n])},e._getSessionDurationFromTime=function(e){return e<0?"Undefined":e<=3?"UpTo3Sec":e<=10?"UpTo10Sec":e<=30?"UpTo30Sec":e<=60?"UpTo60Sec":e<=180?"UpTo3Min":e<=600?"UpTo10Min":e<=1800?"UpTo30Min":"Above30Min"},e._logEvent=function(e,t){e.name&&Utils.isString(e.name)?(e.name=e.name.toLowerCase(),e.name=e.name.replace(Utils.EventNameDotRegex,"_"),e.type&&Utils.isString(e.type)?e.type=e.type.toLowerCase():e.type="custom",Utils.EventNameAndTypeRegex.test(e.name)&&Utils.EventNameAndTypeRegex.test(e.type)?((!Utils.isNumber(e.timestamp)||e.timestamp<0)&&(e.timestamp=(new Date).getTime()),e.properties||(e.properties={}),this._addContextIfAbsent(e,t.getPropertyMap()),this._addContextIfAbsent(e,AWTLogManagerSettings_1.default.logManagerContext.getPropertyMap()),this._setDefaultProperty(e,"EventInfo.InitId",this._getInitId(e.apiKey)),this._setDefaultProperty(e,"EventInfo.Sequence",this._getSequenceId(e.apiKey)),this._setDefaultProperty(e,"EventInfo.SdkVersion",Version.FullVersionString),this._setDefaultProperty(e,"EventInfo.Name",e.name),this._setDefaultProperty(e,"EventInfo.Time",new Date(e.timestamp).toISOString()),Utils.isPriority(e.priority)||(e.priority=Enums.AWTEventPriority.Normal),this._sendEvent(e)):AWTNotificationManager_1.default.eventsRejected([e],Enums.AWTEventsRejectedReason.InvalidEvent)):AWTNotificationManager_1.default.eventsRejected([e],Enums.AWTEventsRejectedReason.InvalidEvent)},e._addContextIfAbsent=function(e,t){if(t)for(var n in t)t.hasOwnProperty(n)&&(e.properties[n]||(e.properties[n]=t[n]))},e._setDefaultProperty=function(e,t,n){e.properties[t]={value:n,pii:Enums.AWTPiiKind.NotSet,type:Enums.AWTPropertyType.String}},e._sendEvent=function(e){AWTTransmissionManagerCore_1.default.sendEvent(e)},e._getInternalEvent=function(e,t,n){if(e.properties=e.properties||{},n)for(var i in e.properties)e.properties.hasOwnProperty(i)&&(e.properties[i]=Utils.sanitizeProperty(i,e.properties[i]),null===e.properties[i]&&delete e.properties[i]);var r=e;return r.id=Utils.newGuid(),r.apiKey=t,r},e._getInitId=function(t){return e._initIdMap[t]},e._getSequenceId=function(t){return void 0===e._sequenceIdMap[t]&&(e._sequenceIdMap[t]=0),(++e._sequenceIdMap[t]).toString()},e._sequenceIdMap={},e._initIdMap={},e}();t.default=n})),AWTTransmissionManager_1=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.setEventsHandler=function(e){AWTTransmissionManagerCore_1.default.setEventsHandler(e)},e.getEventsHandler=function(){return AWTTransmissionManagerCore_1.default.getEventsHandler()},e.scheduleTimer=function(){AWTTransmissionManagerCore_1.default.scheduleTimer()},e}();t.default=n})),AriaSDK=createCommonjsModule((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.AWTPropertyType=Enums.AWTPropertyType,t.AWTPiiKind=Enums.AWTPiiKind,t.AWTEventPriority=Enums.AWTEventPriority,t.AWTEventsDroppedReason=Enums.AWTEventsDroppedReason,t.AWTEventsRejectedReason=Enums.AWTEventsRejectedReason,t.AWTCustomerContentKind=Enums.AWTCustomerContentKind,t.AWTUserIdType=Enums$1.AWTUserIdType,t.AWTSessionState=Enums$1.AWTSessionState,t.AWT_BEST_EFFORT=DataModels.AWT_BEST_EFFORT,t.AWT_NEAR_REAL_TIME=DataModels.AWT_NEAR_REAL_TIME,t.AWT_REAL_TIME=DataModels.AWT_REAL_TIME,t.AWTEventProperties=AWTEventProperties_1.default,t.AWTLogger=AWTLogger_1.default,t.AWTLogManager=AWTLogManager_1.default,t.AWTTransmissionManager=AWTTransmissionManager_1.default,t.AWTSerializer=AWTSerializer_1.default,t.AWTSemanticContext=AWTSemanticContext_1.default,t.AWT_COLLECTOR_URL_UNITED_STATES="https://us.pipe.aria.microsoft.com/Collector/3.0/",t.AWT_COLLECTOR_URL_GERMANY="https://de.pipe.aria.microsoft.com/Collector/3.0/",t.AWT_COLLECTOR_URL_JAPAN="https://jp.pipe.aria.microsoft.com/Collector/3.0/",t.AWT_COLLECTOR_URL_AUSTRALIA="https://au.pipe.aria.microsoft.com/Collector/3.0/",t.AWT_COLLECTOR_URL_EUROPE="https://eu.pipe.aria.microsoft.com/Collector/3.0/",t.AWT_COLLECTOR_URL_USGOV_DOD="https://pf.pipe.aria.microsoft.com/Collector/3.0",t.AWT_COLLECTOR_URL_USGOV_DOJ="https://tb.pipe.aria.microsoft.com/Collector/3.0"}));let PLATFORM_ID="3617";const getPlatformId=()=>PLATFORM_ID,CALL_CONTROLLER_URL="https://api.cc.skype.com/conv/",REGISTRAR_URL="https://edge.skype.com/registrar/prod/v3/registrations",TROUTER_URL="https://go.trouter.skype.com/v4/a",CREATE_STACK_BASE_TIMEOUT=4e4,INITIALIZE_STACK_FOR_USER_TIMEOUT=2e4,INITIALIZE_SIGNALING_TIMEOUT=15e3;let sdkInternalVersion="1.0.1.1_beta",sdkVersion="1.0.1-beta.1";function getSdkInternalVersion(){return sdkInternalVersion}function getSdkVersion(){return sdkVersion}function formatTimeOnBrowser(e){let t="";const n=e.getMilliseconds();return n<10?t="  ":n<100&&(t=" "),`${e.toLocaleDateString()}, ${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}:${e.getMilliseconds()}${t}`}function isNonEmptyArray(e){return Array.isArray(e)&&0!==e.length}class DefaultLogger{constructor(e,t=[]){this._azureLogger=e,this._namespace=t}createChild(e){return new DefaultLogger(this._azureLogger,[...this._namespace,"string"==typeof e?()=>e:e])}createFnLogger(e,t,...n){return this.createChild(this.getPrefix(e,t)+n.join(""))}log(...e){this._azureLogger.verbose(this.getMessage(e))}debug(...e){this._azureLogger.verbose(this.getMessage(e))}info(...e){this._azureLogger.info(this.getMessage(e))}warn(...e){this._azureLogger.warning(this.getMessage(e))}error(...e){this._azureLogger.error(this.getMessage(e))}getMessage(...e){return`${formatTimeOnBrowser(new Date)} ${this.getNamespace()} ${e.join(" ")}`}getNamespace(){return this._namespace.map((e=>e())).join(":")}getPrefix(e,t){let n="";return t&&(n+=`[${t}]`),e&&(n+=`[${e}]`),n}}var __awaiter$3=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))},Events;class TelemetryLogManager{constructor(){this._telemetryLoggers={};const e=logger.createClientLogger("ACS");this._logger=new DefaultLogger(e,[()=>"TelemetryLogManager"])}getLogger(e){const t=e;if(this._telemetryLoggers[t])return this._telemetryLoggers[t];const n=new TelemetryLogger(t);return this._telemetryLoggers[t]=n,n}sendEvent(e,t){var n;try{const i=JSON.parse(JSON.stringify(e));void 0===i.properties&&(i.properties={}),0===(null===(n=null==i?void 0:i.name)||void 0===n?void 0:n.indexOf("mdsc_webrtc"))?i.properties.metrics_AcsResourceId=t||"":i.properties.AcsResourceId=t||"",void 0!==typeof e.priority&&(i.priority=e.priority),i.properties.sdkVersion=getSdkInternalVersion(),i.properties.platformId=getPlatformId();const r=`${getPlatformId()}/${getSdkInternalVersion()}`;i.properties.uiVersion=r,i.properties.ui_version=r,i.properties.Platform_Uiversion=r;this.getLogger(e.tenant).sendEvent(i)}catch(t){this._logger.warn(`Failed to send event ${null==e?void 0:e.name}`)}}flushAllEvents(){return __awaiter$3(this,void 0,void 0,(function*(){const e=[];return Object.keys(this._telemetryLoggers).forEach((t=>{e.push(this._telemetryLoggers[t].flushEvents())})),Promise.all(e).then((()=>{}))}))}}TelemetryLogManager.instance=new TelemetryLogManager,TelemetryLogManager.ACS_CALLING_SDK_TENANT="4cf9ed87f7dc4e148f77855cd1f2fdca-61fb83a7-6672-4264-806f-7aded29f9b49-7618";class TelemetryLogger{constructor(e,t){this._tenantId=e,AriaSDK.AWTLogManager.initialize(this._tenantId),AriaSDK.AWTLogManager.setTransmitProfile(AriaSDK.AWT_BEST_EFFORT),this._logger=AriaSDK.AWTLogManager.getLogger(this._tenantId)}sendEvent(e){this._logger.logEvent(e)}flushEvents(){return new Promise((e=>{AriaSDK.AWTLogManager.flush(e)}))}}!function(e){e.acs_calling_call_started="acs_calling_call_started",e.acs_calling_stack_init="acs_calling_stack_init",e.acs_calling_config_fetched="acs_calling_config_fetched",e.acs_calling_signaling_init="acs_calling_signaling_init",e.acs_calling_call_agent_init="acs_calling_call_agent_init",e.acs_calling_create_view_attempt="acs_calling_create_view_attempt",e.acs_calling_create_view_success="acs_calling_create_view_success",e.acs_calling_create_view_failure="acs_calling_create_view_failure",e.acs_calling_dispose_view_attempt="acs_calling_dispose_view_attempt",e.acs_calling_dispose_view_success="acs_calling_dispose_view_success",e.acs_calling_dispose_view_failure="acs_calling_dispose_view_failure"}(Events||(Events={}));var __awaiter$4=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))},Reflect$1,CallDirection,CallClientOpeartion,CallAgentOperation,CallOperation,CallStackOperation,DeviceManagerOperation,VideoStreamRendererViewOperation,VideoStreamRendererOperation,LocalVideoStreamOperation,PreviewRendererOperation,RemoteVideoStreamOperation,RemoteStreamRendererOperation,LocalStreamRendererOperation,VideoOperationFailureMessages,CallStackErrorMessages;function trackPromise(e){return new Promise(((t,n)=>__awaiter$4(this,void 0,void 0,(function*(){let n={start:performance.now(),end:-1,delta:-1,failed:!0};n.promise=e().then((e=>(n.end=performance.now(),n.delta=n.end-n.start,n.failed=!1,t(n),e)),(e=>(n.end=performance.now(),n.delta=n.end-n.start,n.failed=!0,t(n),Promise.reject(e))))}))))}
/*! *****************************************************************************
    Copyright (C) Microsoft. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */function generateGuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}!function(e){!function(t){var n="object"==typeof commonjsGlobal?commonjsGlobal:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=r(e);function r(e,t){return function(n,i){"function"!=typeof e[n]&&Object.defineProperty(e,n,{configurable:!0,writable:!0,value:i}),t&&t(n,i)}}void 0===n.Reflect?n.Reflect=e:i=r(n.Reflect,i),function(e){var t=Object.prototype.hasOwnProperty,n="function"==typeof Symbol,i=n&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",r=n&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",o="function"==typeof Object.create,a={__proto__:[]}instanceof Array,s=!o&&!a,c={create:o?function(){return ie(Object.create(null))}:a?function(){return ie({__proto__:null})}:function(){return ie({})},has:s?function(e,n){return t.call(e,n)}:function(e,t){return t in e},get:s?function(e,n){return t.call(e,n)?e[n]:void 0}:function(e,t){return e[t]}},l=Object.getPrototypeOf(Function),u="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,d=u||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?ee():Map,p=u||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?te():Set,f=new(u||"function"!=typeof WeakMap?ne():WeakMap);function h(e,t,n,i){if(k(n)){if(!W(e))throw new TypeError;if(!K(t))throw new TypeError;return I(e,t)}if(!W(e))throw new TypeError;if(!U(t))throw new TypeError;if(!U(i)&&!k(i)&&!F(i))throw new TypeError;return F(i)&&(i=void 0),A(e,t,n=V(n),i)}function g(e,t){function n(n,i){if(!U(n))throw new TypeError;if(!k(i)&&!z(i))throw new TypeError;M(e,t,n,i)}return n}function m(e,t,n,i){if(!U(n))throw new TypeError;return k(i)||(i=V(i)),M(e,t,n,i)}function v(e,t,n){if(!U(t))throw new TypeError;return k(n)||(n=V(n)),R(e,t,n)}function S(e,t,n){if(!U(t))throw new TypeError;return k(n)||(n=V(n)),O(e,t,n)}function y(e,t,n){if(!U(t))throw new TypeError;return k(n)||(n=V(n)),P(e,t,n)}function _(e,t,n){if(!U(t))throw new TypeError;return k(n)||(n=V(n)),N(e,t,n)}function E(e,t){if(!U(e))throw new TypeError;return k(t)||(t=V(t)),w(e,t)}function T(e,t){if(!U(e))throw new TypeError;return k(t)||(t=V(t)),D(e,t)}function C(e,t,n){if(!U(t))throw new TypeError;k(n)||(n=V(n));var i=b(t,n,!1);if(k(i))return!1;if(!i.delete(e))return!1;if(i.size>0)return!0;var r=f.get(t);return r.delete(n),r.size>0||f.delete(t),!0}function I(e,t){for(var n=e.length-1;n>=0;--n){var i=(0,e[n])(t);if(!k(i)&&!F(i)){if(!K(i))throw new TypeError;t=i}}return t}function A(e,t,n,i){for(var r=e.length-1;r>=0;--r){var o=(0,e[r])(t,n,i);if(!k(o)&&!F(o)){if(!U(o))throw new TypeError;i=o}}return i}function b(e,t,n){var i=f.get(e);if(k(i)){if(!n)return;i=new d,f.set(e,i)}var r=i.get(t);if(k(r)){if(!n)return;r=new d,i.set(t,r)}return r}function R(e,t,n){if(O(e,t,n))return!0;var i=Z(t);return!F(i)&&R(e,i,n)}function O(e,t,n){var i=b(t,n,!1);return!k(i)&&H(i.has(e))}function P(e,t,n){if(O(e,t,n))return N(e,t,n);var i=Z(t);return F(i)?void 0:P(e,i,n)}function N(e,t,n){var i=b(t,n,!1);if(!k(i))return i.get(e)}function M(e,t,n,i){b(n,i,!0).set(e,t)}function w(e,t){var n=D(e,t),i=Z(e);if(null===i)return n;var r=w(i,t);if(r.length<=0)return n;if(n.length<=0)return r;for(var o=new p,a=[],s=0,c=n;s<c.length;s++){var l=c[s];o.has(l)||(o.add(l),a.push(l))}for(var u=0,d=r;u<d.length;u++){l=d[u];o.has(l)||(o.add(l),a.push(l))}return a}function D(e,t){var n=[],i=b(e,t,!1);if(k(i))return n;for(var r=Y(i.keys()),o=0;;){var a=Q(r);if(!a)return n.length=o,n;var s=$(a);try{n[o]=s}catch(e){try{X(r)}finally{throw e}}o++}}function L(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6}}function k(e){return void 0===e}function F(e){return null===e}function x(e){return"symbol"==typeof e}function U(e){return"object"==typeof e?null!==e:"function"==typeof e}function j(e,t){switch(L(e)){case 0:case 1:case 2:case 3:case 4:case 5:return e}var n=3===t?"string":5===t?"number":"default",r=J(e,i);if(void 0!==r){var o=r.call(e,n);if(U(o))throw new TypeError;return o}return B(e,"default"===n?"number":n)}function B(e,t){if("string"===t){var n=e.toString;if(q(n))if(!U(r=n.call(e)))return r;if(q(i=e.valueOf))if(!U(r=i.call(e)))return r}else{var i;if(q(i=e.valueOf))if(!U(r=i.call(e)))return r;var r,o=e.toString;if(q(o))if(!U(r=o.call(e)))return r}throw new TypeError}function H(e){return!!e}function G(e){return""+e}function V(e){var t=j(e,3);return x(t)?t:G(t)}function W(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function q(e){return"function"==typeof e}function K(e){return"function"==typeof e}function z(e){switch(L(e)){case 3:case 4:return!0;default:return!1}}function J(e,t){var n=e[t];if(null!=n){if(!q(n))throw new TypeError;return n}}function Y(e){var t=J(e,r);if(!q(t))throw new TypeError;var n=t.call(e);if(!U(n))throw new TypeError;return n}function $(e){return e.value}function Q(e){var t=e.next();return!t.done&&t}function X(e){var t=e.return;t&&t.call(e)}function Z(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===l)return t;if(t!==l)return t;var n=e.prototype,i=n&&Object.getPrototypeOf(n);if(null==i||i===Object.prototype)return t;var r=i.constructor;return"function"!=typeof r||r===e?t:r}function ee(){var e={},t=[],n=function(){function e(e,t,n){this._index=0,this._keys=e,this._values=t,this._selector=n}return e.prototype["@@iterator"]=function(){return this},e.prototype[r]=function(){return this},e.prototype.next=function(){var e=this._index;if(e>=0&&e<this._keys.length){var n=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:n,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),e},e.prototype.return=function(e){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:e,done:!0}},e}();return function(){function t(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(t.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._find(e,!1)>=0},t.prototype.get=function(e){var t=this._find(e,!1);return t>=0?this._values[t]:void 0},t.prototype.set=function(e,t){var n=this._find(e,!0);return this._values[n]=t,this},t.prototype.delete=function(t){var n=this._find(t,!1);if(n>=0){for(var i=this._keys.length,r=n+1;r<i;r++)this._keys[r-1]=this._keys[r],this._values[r-1]=this._values[r];return this._keys.length--,this._values.length--,t===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},t.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},t.prototype.keys=function(){return new n(this._keys,this._values,i)},t.prototype.values=function(){return new n(this._keys,this._values,o)},t.prototype.entries=function(){return new n(this._keys,this._values,a)},t.prototype["@@iterator"]=function(){return this.entries()},t.prototype[r]=function(){return this.entries()},t.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),this._cacheIndex<0&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},t}();function i(e,t){return e}function o(e,t){return t}function a(e,t){return[e,t]}}function te(){return function(){function e(){this._map=new d}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[r]=function(){return this.keys()},e}()}function ne(){var e=16,n=c.create(),i=r();return function(){function e(){this._key=r()}return e.prototype.has=function(e){var t=o(e,!1);return void 0!==t&&c.has(t,this._key)},e.prototype.get=function(e){var t=o(e,!1);return void 0!==t?c.get(t,this._key):void 0},e.prototype.set=function(e,t){return o(e,!0)[this._key]=t,this},e.prototype.delete=function(e){var t=o(e,!1);return void 0!==t&&delete t[this._key]},e.prototype.clear=function(){this._key=r()},e}();function r(){var e;do{e="@@WeakMap@@"+l()}while(c.has(n,e));return n[e]=!0,e}function o(e,n){if(!t.call(e,i)){if(!n)return;Object.defineProperty(e,i,{value:c.create()})}return e[i]}function a(e,t){for(var n=0;n<t;++n)e[n]=255*Math.random()|0;return e}function s(e){return"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(e)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(e)):a(new Uint8Array(e),e):a(new Array(e),e)}function l(){var t=s(e);t[6]=79&t[6]|64,t[8]=191&t[8]|128;for(var n="",i=0;i<e;++i){var r=t[i];4!==i&&6!==i&&8!==i||(n+="-"),r<16&&(n+="0"),n+=r.toString(16).toLowerCase()}return n}}function ie(e){return e.__=void 0,delete e.__,e}e("decorate",h),e("metadata",g),e("defineMetadata",m),e("hasMetadata",v),e("hasOwnMetadata",S),e("getMetadata",y),e("getOwnMetadata",_),e("getMetadataKeys",E),e("getOwnMetadataKeys",T),e("deleteMetadata",C)}(i)}()}(Reflect$1||(Reflect$1={})),function(e){e.Outgoing="Outgoing",e.Incoming="Incoming",e.TransferOutgoing="TransferOutgoing"}(CallDirection||(CallDirection={})),function(e){e.CreateCallAgent="CreateCallAgent",e.GetDeviceManager="GetDeviceManager",e.GetSDKVersion="GetSDKVersion"}(CallClientOpeartion||(CallClientOpeartion={})),function(e){e.StartCall="StartCall",e.Join="Join",e.HandlePushNotifications="HandlePushNotification",e.Initialize="Initialize",e.Dispose="Dispose",e.CreateCall="CreateCall"}(CallAgentOperation||(CallAgentOperation={})),function(e){e.Call="Call",e.StartCall="StartCall",e.CallGroup="CallGroup",e.JoinGroup="JoinGroup",e.Accept="Accept",e.Reject="Reject",e.Mute="Mute",e.Unmute="Unmute",e.SendDtmf="SendDtmf",e.HangUp="HangUp",e.StartVideo="StartVideo",e.StopVideo="StopVideo",e.AddParticipant="AddParticipant",e.RemoveParticipant="RemoveParticipant",e.Hold="Hold",e.Resume="Resume",e.StartScreenShare="StartScreenShare",e.StopScreenShare="StopScreenShare",e.Transfer="Transfer",e.BindToCall="BindToCall"}(CallOperation||(CallOperation={})),function(e){e.CreateStackBase="CreateStackBase",e.GetDeviceManager="GetDeviceManager",e.InitializeStackForUser="InitializeStackForUser",e.InitializeEcsBase="InitializeEcsBase",e.InitializeEcsForUser="InitializeEcsForUser",e.Dispose="Dispose"}(CallStackOperation||(CallStackOperation={})),function(e){e.GetDeviceManager="GetDeviceManager",e.GetCameras="GetCameras",e.GetMicrophones="GetMicrophones",e.GetSpeakers="GetSpeakers",e.GetCamera="GetCamera",e.SelectCamera="SelectCamera",e.GetSelectedMicrophone="GetSelectedMicrophone",e.SelectMicrophone="SelectMicrophone",e.GetSelectedSpeaker="GetSelectedSpeaker",e.SelectSpeaker="SelectSpeaker",e.RenderPreviewVideo="RenderPreviewVideo",e.AskDevicePermission="AskDevicePermission"}(DeviceManagerOperation||(DeviceManagerOperation={})),function(e){e.Dispose="Dispose",e.UpdateScalingMode="UpdateScalingMode",e.Render="Render",e.RenderRemoteStream="RenderRemoteStream",e.RenderLocalStream="RenderLocalStream"}(VideoStreamRendererViewOperation||(VideoStreamRendererViewOperation={})),function(e){e.Dispose="Dispose",e.CreateView="CreateView"}(VideoStreamRendererOperation||(VideoStreamRendererOperation={})),function(e){e.SwitchSource="SwitchSource",e.Render="Render"}(LocalVideoStreamOperation||(LocalVideoStreamOperation={})),function(e){e.SwitchVideo="SwitchVideo"}(LocalVideoStreamOperation||(LocalVideoStreamOperation={})),function(e){e.SetScalingMode="SetScalingMode",e.Start="Start",e.Stop="Stop",e.SwitchDevice="SwitchDevice",e.Dispose="Dispose"}(PreviewRendererOperation||(PreviewRendererOperation={})),function(e){e.Render="Render"}(RemoteVideoStreamOperation||(RemoteVideoStreamOperation={})),function(e){e.Start="Start",e.Resume="Resume",e.Pause="Pause",e.SetScalingMode="SetScalingMode",e.Dispose="Dispose"}(RemoteStreamRendererOperation||(RemoteStreamRendererOperation={})),function(e){e.Start="Start",e.Resume="Resume",e.Pause="Pause",e.SetScalingMode="SetScalingMode",e.Dispose="Dispose"}(LocalStreamRendererOperation||(LocalStreamRendererOperation={})),function(e){e.SourceUnavailableError="SourceUnavailableError",e.PermissionDeniedError="permissionDeniedError",e.UnknownFailureForVideoOperation="UnknownFailureForVideoOperation"}(VideoOperationFailureMessages||(VideoOperationFailureMessages={})),function(e){e.BrowserNotSupported="BrowserNotSupported",e.IncompatibleVersions="IncompatibleVersions"}(CallStackErrorMessages||(CallStackErrorMessages={}));class VideoDeviceInfoImpl{constructor(e,t,n,i){this._name=e,this._id=t,this._deviceType=n,this.deviceManager=i}get name(){return this._name}get id(){return this._id}get deviceType(){return this._deviceType}}function loggerProperty(e,t){Reflect.defineMetadata(loggerKeySymbol,t,e)}function toTsScalingMode(e){switch(e){case"Crop":return 1;case"Fit":return 2;case"Stretch":return 0;default:return 1}}function defer(){let e,t,n=!0;const i=new Promise(((n,i)=>{e=n,t=i}));return{isPending:()=>n,promise:i,resolve:t=>{n&&(e(t),n=!1)},reject:e=>{n&&(t(e),n=!1)},dispose:()=>{i=void 0}}}function assertNotNull(e,t){if(null===e)throw new CallingCommunicationError({message:"AssertNotNull failed. "+(void 0!==t?`: ${t}`:""),code:BAD_REQUEST})}function assertIsObject(e,t){if("object"!=typeof e)throw new CallingCommunicationError({message:"AssertIsObject failed. "+(void 0!==t?`: ${t}`:""),code:BAD_REQUEST})}function parseJWT(e){let[,t]=null==e?void 0:e.split(".");if(void 0===t)throw new CallingCommunicationError({message:"Invalid token",code:BAD_REQUEST});return t=t.replace(/-/g,"+").replace(/_/g,"/"),JSON.parse(decodeURIComponent(escape(atob(t))))}function logErrorAndThrow(e,t,n){const i=e;throw n.error(i),new CallingCommunicationError({message:i,code:t})}function handleVideoOperationFailure(e,t){let n=400,i=t||`Video operation failure ${VideoOperationFailureMessages.UnknownFailureForVideoOperation}`;if(t&&t.type)switch(t.type){case VideoOperationFailureMessages.SourceUnavailableError:i=`Video operation failure ${VideoOperationFailureMessages.SourceUnavailableError}`,n=412;break;case VideoOperationFailureMessages.PermissionDeniedError:i=`Video operation failure ${VideoOperationFailureMessages.PermissionDeniedError}`,n=403;break;default:i=`Video operation failure ${VideoOperationFailureMessages.UnknownFailureForVideoOperation}`,n=500}throw e.error(`Video operation failure, message=${i}, code=${n}`),new CallingCommunicationError({message:i,code:n})}var __decorate$1=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},__metadata$1=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__awaiter$5=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};class LocalVideoStream{constructor(e){if(this._disposed=!1,!(e instanceof VideoDeviceInfoImpl))throw new CallingCommunicationError({message:"Failed to create local video stream, source was not of type VideoDeviceInfo",code:UNPROCESSABLE_ENTITY});const t=logger.createClientLogger("ACS");this.logger=new DefaultLogger(t,[()=>`LocalVideoStream:${e.id}`]),this.logger.info("created"),this._source=e,this._mediaStreamType="Video"}get source(){return this._source}get mediaStreamType(){return this._mediaStreamType}switchSource(e){return __awaiter$5(this,void 0,void 0,(function*(){const t=this.logger.createFnLogger(LocalVideoStreamOperation.SwitchSource);if(!(e instanceof VideoDeviceInfoImpl))throw new CallingCommunicationError({message:"Failed to switch source, source was not of type VideoDeviceInfo",code:UNPROCESSABLE_ENTITY});if(this._source===e)throw new CallingCommunicationError({message:"Unable to switch to the same source",code:BAD_REQUEST});try{e.deviceManager.getTsDeviceManager().selectDevices({camera:e.id}),this._source=e}catch(e){handleVideoOperationFailure(t,e)}}))}dispose(){this.logger.log("dispose"),this._disposed?this.logger.log("already disposed"):this._disposed=!0}}__decorate$1([loggerProperty,__metadata$1("design:type",Object)],LocalVideoStream.prototype,"logger",void 0),__decorate$1([asyncOperation(LocalVideoStreamOperation.SwitchSource),__metadata$1("design:type",Function),__metadata$1("design:paramtypes",[Object]),__metadata$1("design:returntype",Promise)],LocalVideoStream.prototype,"switchSource",null);class CallingEventEmitter extends events.EventEmitter{constructor(e){super(),this._logger=e}on(e,t){return this._logger.info(`event:subscribe to ${e.toString()}`),super.on(e,t)}once(e,t){return this._logger.info(`event:subscribe once to ${e.toString()}`),super.once(e,t)}off(e,t){return this._logger.info(`event:unsubscribed ${e.toString()}`),super.off(e,t)}emit(e,...t){return this._logger.info(`event:emit ${e.toString()}`),super.emit(e,...t)}}var __decorate$2=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},__metadata$2=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class RemoteVideoStreamImpl{constructor(e,t,n,i){this._isAvailable=!1,this._mediaStreamType="Video",this._disposed=!1,this._renderers=[],this._setIsAvailable=e=>{e!==this.isAvailable&&(this._isAvailable=!!e,this.logger.log(`isAvailable changed to=${this._isAvailable}`),this._eventEmitter.emit("isAvailableChanged",this._isAvailable))},this._setType=e=>{0===e.type?this._mediaStreamType="Video":1===e.type&&(this._mediaStreamType="ScreenSharing")},this._disposeRenderer=e=>{this.logger.log("disposing renderer");try{e.dispose(),this.logger.log("renderer disposed")}catch(e){this.logger.log("failed to dispose renderer")}},this.tsStream=e,this._setType(this.tsStream),this.logger=t.createChild((()=>`Stream:{id=${this.tsStream.id}}:{type=${this._mediaStreamType}}`)),this._eventEmitter=new CallingEventEmitter(this.logger),this._setIsAvailable(this.tsStream.isAvailable),this._streamChangedHandler=this.tsStream.changed((()=>this._setIsAvailable(this.tsStream.isAvailable))),this._call=n,this._callAgent=i,this.logger.info("created")}get id(){return this.tsStream.id}get isAvailable(){return this._isAvailable}get mediaStreamType(){return this._mediaStreamType}getStreamMetadata(){var e,t;return{callId:null===(e=this._call)||void 0===e?void 0:e.id,acsResourceId:null===(t=this._callAgent)||void 0===t?void 0:t.getAcsResourceId()}}on(e,t){if("isAvailableChanged"!==e)throw new CallingCommunicationError({message:`Not able to subscribe to event ${e}, unknown event name`,code:UNPROCESSABLE_ENTITY});this._eventEmitter.on(e,t)}off(e,t){if("isAvailableChanged"!==e)throw new CallingCommunicationError({message:`Not able to unsubscribe event ${e}, unknown event name`,code:UNPROCESSABLE_ENTITY});this._eventEmitter.off(e,t)}registerRenderer(e){this._renderers.push(e)}unregisterRenderer(e){const t=this._renderers.indexOf(e);-1!==t&&this._renderers.splice(t,1)}dispose(){this.logger.log("dispose"),this._disposed?this.logger.log("already disposed"):(this._disposed=!0,this._setIsAvailable(!1),this._streamChangedHandler&&this._streamChangedHandler.dispose(),this._renderers.forEach((e=>this._disposeRenderer(e))),this._renderers=[],this._eventEmitter.removeAllListeners())}}__decorate$2([loggerProperty,__metadata$2("design:type",Object)],RemoteVideoStreamImpl.prototype,"logger",void 0);var __decorate$3=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},__metadata$3=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class RemoteParticipantImpl{constructor(e,t,n,i){this._mappedStreams=new Map,this._state="Idle",this._lastTsParticipantState=0,this._isMuted=!1,this._isSpeaking=!1,this._displayName="",this.acsToTsStreamType=e=>"Video"===e?0:"ScreenSharing"===e?1:void 0,this._identifier=e,this.logger=t.createChild((()=>`RemoteParticipant{${this._identifier.kind}}`)),this._eventEmitter=new CallingEventEmitter(this.logger),this._callAgent=i,this._call=n,this.logger.log("created")}get identifier(){return this._identifier}get state(){return this._state}get videoStreams(){return[...this._mappedStreams.values()]}get isMuted(){return this._isMuted}get isSpeaking(){return this._isSpeaking}get callEndReason(){return this._callEndReason}get displayName(){return this._displayName}on(e,t){if("stateChanged"!==e&&"isMutedChanged"!==e&&"isSpeakingChanged"!==e&&"displayNameChanged"!==e&&"videoStreamsUpdated"!==e)throw new CallingCommunicationError({message:`Not able to subscribe to event ${e}, unknown event name`,code:UNPROCESSABLE_ENTITY});this._eventEmitter.on(e,t)}off(e,t){if("stateChanged"!==e&&"isMutedChanged"!==e&&"isSpeakingChanged"!==e&&"displayNameChanged"!==e&&"videoStreamsUpdated"!==e)throw new CallingCommunicationError({message:`Not able to unsubscribe event ${e}, unknown event name`,code:UNPROCESSABLE_ENTITY});this._eventEmitter.off(e,t)}dispose(){this.logger.log("dispose"),this._participantChangedHandler&&this._participantChangedHandler.dispose(),this._mappedStreams.forEach((e=>e.dispose())),this._mappedStreams.clear(),this._eventEmitter.removeAllListeners()}get tsRemoteParticipant(){return this._tsParticipant}setCallEndReason(e){this._callEndReason=e}observeParticipant(e){this._tsParticipant||(this._tsParticipant=e,this._displayName=e.displayName,this._participantChangedHandler=this._tsParticipant.changed((()=>{if(this._tsParticipant&&this._tsParticipant.state!==this._lastTsParticipantState&&(this._lastTsParticipantState=this._tsParticipant.state,this._mapTsParticipantState(this._tsParticipant.state)),this._mapStreams(),this._tsParticipant&&this._tsParticipant.isServerMuted!==this._isMuted&&(this._isMuted=this._tsParticipant.isServerMuted,this._eventEmitter.emit("isMutedChanged")),this._tsParticipant&&this._tsParticipant.displayName!==this._displayName&&(this._displayName=e.displayName,this._eventEmitter.emit("displayNameChanged")),this._tsParticipant){const e=0!==this._tsParticipant.voiceLevel;e!==this._isSpeaking&&(this._isSpeaking=e,this._eventEmitter.emit("isSpeakingChanged"))}})),this._mapTsParticipantState(this._tsParticipant.state),this._mapStreams())}setParticipantState(e){e!==this._state&&(this.logger.log(`state changed ${this._state}=>${this.state}`),this._state=e,this._eventEmitter.emit("stateChanged",this._state))}_mapTsParticipantState(e){let t;const n={0:"Idle",1:"Connecting",2:"Ringing",3:"Connected",4:"Disconnected",5:"Hold",7:"InLobby",6:"EarlyMedia"};n[e]?(t=n[e],this.logger.log(`mapped tsParticipant ${e}=>${this._state}`),this.setParticipantState(t)):this.logger.log(`unable to map tsCall state=${e} to call state`),"Disconnected"===this._state&&this.dispose()}_mapStreams(){const e=[],t=[],n=e=>{this._mappedStreams.set(e.id,e)},i=e=>{const t=this._mappedStreams.get(e.id);t&&(this.logger.log(`stream removed, type==${t.mediaStreamType} id=${e.id}`),this._mappedStreams.delete(e.id),t.dispose())},r=n=>{if(this._tsParticipant)if(isNonEmptyArray(this._tsParticipant.streams&&this._tsParticipant.streams[n])){let i=[];this._tsParticipant&&(i=this._tsParticipant.streams[n]),i.forEach((t=>{if(!this._mappedStreams.get(t.id)){const n=new RemoteVideoStreamImpl(t,this.logger,this._call,this._callAgent);this.logger.log(`stream created, type==${n.mediaStreamType} id=${t.id}`),e.push(n)}})),this._mappedStreams.forEach((e=>{if(this.acsToTsStreamType(e.mediaStreamType)===n){i.some((t=>t.id===e.id))||t.push(e)}}))}else this._mappedStreams.forEach((e=>{this.acsToTsStreamType(e.mediaStreamType)===n&&t.push(e)}))};r(0),r(1),(e.length>0||t.length>0)&&(e.forEach(n),t.forEach(i),this._eventEmitter.emit("videoStreamsUpdated",{added:e,removed:t}))}}__decorate$3([loggerProperty,__metadata$3("design:type",Object)],RemoteParticipantImpl.prototype,"logger",void 0);var __decorate$4=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},__metadata$4=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__awaiter$6=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};class CallImpl{constructor(e,t,n){this._callAgent=t,this._lastTsCallState=0,this._state="None",this._isMuted=!1,this._isServerMuted=!1,this._isMicrophoneMuted=!1,this._isScreenSharingOn=!1,this._disposed=!1,this._extensionInstances=new Map,this._localVideoStreams=[],this._remoteParticipants=[],this._getCallEndReason=()=>{let e=0,t=0,n="Unknown";this.tsCall&&(e=this.tsCall.callEndDiagnosticsInfo&&this.tsCall.callEndDiagnosticsInfo.callControllerCode||0,t=this.tsCall.callEndDiagnosticsInfo&&this.tsCall.callEndDiagnosticsInfo.callControllerSubCode||0,n=convertTerminatedReasonToString(this.tsCall.terminatedReason));const i={code:e,subCode:t};return this.logger[0===e?"info":"error"](`Call end reason=${n}, code=${e}, subCode=${t}`),i},this._handleCallOperationFailure=e=>{let t,n=0,i=0;return this.tsCall&&(n=this.tsCall.callEndDiagnosticsInfo?this.tsCall.callEndDiagnosticsInfo.callControllerCode||INTERNAL_ERROR:0,i=this.tsCall.callEndDiagnosticsInfo&&this.tsCall.callEndDiagnosticsInfo.callControllerSubCode||0),t=convertTerminatedReasonToString(e),this.logger.error(`Call operation failure=${t}, code=${n}, subCode=${i}`),new CallingCommunicationError({message:t,code:n,subcode:i},e)},this._handleParticipantOperationFailure=e=>{const t=convertParticipantStateReasonToString(e);return this.logger.error(`Participant operation failure=${t}`),new CallingCommunicationError({message:t,code:INTERNAL_ERROR,subcode:0},e)},this._handleMuteChanges=()=>{const e=!!(+this._isMicrophoneMuted|+this._isServerMuted);this._isMuted!=e&&(this.logger.info(`isMuted changed from ${this._isMuted} to ${e}`),this._isMuted=e,this._eventEmitter.emit("isMutedChanged"))},this._handleCallingApplicationIdentifier=e=>{this._isClosedCaptionsBot(e)&&this.logger.info("Handle participant: Ignore closed captions application")},this._isClosedCaptionsBot=e=>"28:b1902c3e-b9f7-4650-9b23-5772bd429747"===e.id,this._id=e.callId,this.tsCall=n,this._direction=e.isIncoming?"Incoming":"Outgoing",this.logger=this._callAgent.logger.createChild((()=>`Call:${this._id}:${this._state}`)),this._eventEmitter=new CallingEventEmitter(this.logger)}api(e){if(!this._extensionInstances.has(e)){const t=new e({call:this,callAgent:this._callAgent});if(t instanceof FirstPartyCallApiFeature){const e={tsCall:this.tsCall,callAgent:this._callAgent,call:this};t.initialize(e,this.logger)}return this._extensionInstances.set(e,t),t}return this._extensionInstances.get(e)}get id(){return this._id}get callerInfo(){return{identifier:this._callerIdentity,displayName:this._callerDisplayName}}get state(){return this._state}get direction(){return this._direction}get isMuted(){return this._isMuted}get isScreenSharingOn(){return this._isScreenSharingOn}get callEndReason(){return this._callEndReason}get localVideoStreams(){return this._localVideoStreams}get remoteParticipants(){return this._remoteParticipants}bindTsCall(){var e,t,n;"Incoming"===this.direction&&(this._callerIdentity=constructIdentifierKindFromMri(this.tsCall.callerMri),this._callerDisplayName=null===(e=this.tsCall.participants.find((e=>e.id===this.tsCall.callerMri)))||void 0===e?void 0:e.displayName),this._lastTsCallState=this.tsCall.state,this.mapTsCallState(this.tsCall.state),this.tsCall.changed((()=>{this.tsCall.callId!==this._id&&(this.logger.log(`tsCall callId changed=${this.tsCall.callId}`),this._id=this.tsCall.callId,this._eventEmitter.emit("idChanged")),this.tsCall.state!==this._lastTsCallState&&(this.logger.log(`tsCall state changed=${this.tsCall.state}`),this._lastTsCallState=this.tsCall.state,this.mapTsCallState(this.tsCall.state)),this._isScreenSharingOn!==this.tsCall.isScreenSharingOn&&(this.logger.log(`tsCall isScreenSharingOn changed=${this.tsCall.isScreenSharingOn}`),this._isScreenSharingOn=this.tsCall.isScreenSharingOn,this._eventEmitter.emit("isScreenSharingOnChanged")),this._isMicrophoneMuted!==this.tsCall.isMuted&&(this.logger.log(`tsCall _isMicrophoneMuted changed=${this.tsCall.isMuted}`),this._isMicrophoneMuted=this.tsCall.isMuted,this._handleMuteChanges())})),this._isServerMuted=this.tsCall.isServerMuted,this.tsCall.on("serverMutedChanged",(()=>{this.tsCall.isServerMuted!==this._isServerMuted&&(this.logger.log(`tsCall isServerMuted changed=${this.tsCall.isServerMuted}`),this._isServerMuted=this.tsCall.isServerMuted,this._handleMuteChanges())})),this.tsCall.on("participantAdded",(e=>__awaiter$6(this,void 0,void 0,(function*(){this.logger.debug("tsCall participant added");const t=constructIdentifierKindFromMri(e.id);if(isCallingApplication(e.id))return this.logger.info("Add participant: Handle calling application"),void this._handleCallingApplicationIdentifier(e);this._handleRemoteRingingForOutgoingCall(e);try{const n=this.getOrCreateRemoteParticipant(t);n.observeParticipant(e),this._eventEmitter.emit("remoteParticipantsUpdated",{added:[n],removed:[]})}catch(e){this.logger.log("unable to map call participant to ACS user")}})))),this.logger.debug(`tsCall current participant count=${null===(n=null===(t=this.tsCall)||void 0===t?void 0:t.participants)||void 0===n?void 0:n.length}`),this.tsCall.participants.forEach((e=>{const t=constructIdentifierKindFromMri(e.id),n=this.getOrCreateRemoteParticipant(t);this._handleRemoteRingingForOutgoingCall(e),n.observeParticipant(e)})),this.tsCall.on("participantRemoved",(e=>__awaiter$6(this,void 0,void 0,(function*(){if(this.logger.debug("tsCall participant removed"),isCallingApplication(e.id))return void this.logger.info("Remove participant: Ignore calling application");const t=e.id;if(t){const n=this._remoteParticipants.find((e=>getMriFromIdentifier(e.identifier)===t));n?(0!==e.stateReason&&n.setCallEndReason(this._getTsParticipantCallEndReason(e)),this._remoteParticipants.splice(this._remoteParticipants.indexOf(n),1),this._eventEmitter.emit("remoteParticipantsUpdated",{added:[],removed:[n]})):this.logger.log("unable to find participant to remove")}}))))}_getTsParticipantCallEndReason(e){let t=0,n=0,i="Unknown";return e&&(t=e.callEndDiagnosticsInfo&&e.callEndDiagnosticsInfo.callControllerCode||0,n=e.callEndDiagnosticsInfo&&e.callEndDiagnosticsInfo.callControllerSubCode||0,i=convertParticipantStateReasonToString(e.stateReason)),this.logger[0===t?"info":"error"](`Participant call end reason=${i}, code=${t}, subCode=${n}`),{code:t,subCode:n}}startCallInternal(e){var t;return __awaiter$6(this,void 0,void 0,(function*(){const n=this.getLocalVideoStreamFromCallOptions(e);let i=!!(null===(t=null==e?void 0:e.audioOptions)||void 0===t?void 0:t.muted);void 0===i&&(i=!1),this._isMicrophoneMuted=i;let r;(null==e?void 0:e.alternateCallerId)&&(r=getMriFromIdentifier(e.alternateCallerId)),this.setLocalVideoStream(n);try{yield this.tsCall.start({withVideo:!!n,muted:i,ringOthers:true,alternateId:r})}catch(e){this.removeLocalVideoStream(n);const t=this._handleCallOperationFailure(e);throw this.logger.error(`Failed to start the call, code=${null==t?void 0:t.code}, subCode=${null==t?void 0:t.subCode}`),t}}))}accept(e={}){return __awaiter$6(this,void 0,void 0,(function*(){if(1!==this.tsCall.state)throw new CallingCommunicationError({message:'Call cannot be accepted because call state is not "Notified"',code:BAD_REQUEST});const t=this.getLocalVideoStreamFromCallOptions(e);return this.setLocalVideoStream(t),this.tsCall.accept({withVideo:!!t}).catch((e=>{this._handleCallOperationFailure(e)})),this}))}reject(){return __awaiter$6(this,void 0,void 0,(function*(){if(1!==this.tsCall.state)throw new CallingCommunicationError({message:'Call cannot be rejected because call state is not "Notified"',code:BAD_REQUEST});return this.tsCall.reject().catch((e=>{throw this._handleCallOperationFailure(e)}))}))}mute(){return __awaiter$6(this,void 0,void 0,(function*(){return this.tsCall.mute().catch((e=>{throw this.logger.error("Failed to mute microphone"),new CallingCommunicationError({message:"Failed to mute microphone",code:BAD_REQUEST})}))}))}unmute(){return __awaiter$6(this,void 0,void 0,(function*(){return this.tsCall.unmute().catch((e=>{throw this.logger.error("Failed to unmute microphone"),new CallingCommunicationError({message:"Failed to unmute microphone",code:BAD_REQUEST},e)}))}))}sendDtmf(e){return __awaiter$6(this,void 0,void 0,(function*(){const t=this._toDtmfTone(e);return this.tsCall.sendDtmfTone(t).catch((e=>{throw this.logger.error("Failed to send DTMF tone"),new CallingCommunicationError({message:"Failed to send DTMF tone",code:BAD_REQUEST})}))}))}startVideo(e){return __awaiter$6(this,void 0,void 0,(function*(){const t=this.logger.createFnLogger(CallOperation.StartVideo);if(!e)throw new CallingCommunicationError({message:"Failed to start video, localVideoStream cannot be null",code:BAD_REQUEST});if(!(e instanceof LocalVideoStream))throw new CallingCommunicationError({message:"Failed to start video, localVideoStream is not an instance of LocalVideoStream",code:BAD_REQUEST});if(this.tsCall.isVideoOn)throw new CallingCommunicationError({message:"Failed to start video, local video is already on",code:BAD_REQUEST});if(this.localVideoStreams[0])throw new CallingCommunicationError({message:"Local video is already on, stop it first",code:BAD_REQUEST});this.setLocalVideoStream(e);try{t.info("start video"),yield this.tsCall.startVideo(),t.info("video started")}catch(n){this.removeLocalVideoStream(e),this._eventEmitter.emit("localVideoStreamsUpdated",{added:[],removed:[e]}),handleVideoOperationFailure(t,n)}}))}stopVideo(e){return __awaiter$6(this,void 0,void 0,(function*(){const t=this.logger.createFnLogger(CallOperation.StopVideo);if(!this.tsCall.isVideoOn)throw new CallingCommunicationError({message:"Failed to stop video, local video is already off",code:BAD_REQUEST});if(this.localVideoStreams[0]!==e)throw new CallingCommunicationError({message:"Invalid LocalVideoStream, this LocalVideoStream is not being sent",code:BAD_REQUEST});try{t.info("stop video"),yield this.tsCall.stopVideo(),t.info("video stopped"),this.removeLocalVideoStream(e)}catch(e){handleVideoOperationFailure(t,e)}}))}addParticipant(e,t){let n;if((null==t?void 0:t.alternateCallerId)&&(validateIdentifier(t.alternateCallerId),n=getMriFromIdentifier(t.alternateCallerId)),validateIdentifier(e),this._remoteParticipants.find((t=>getMriFromIdentifier(t.identifier)===getMriFromIdentifier(e))))throw new CallingCommunicationError({message:`${communicationCommon.getIdentifierKind(e).kind} is already in the call`,code:BAD_REQUEST});const i=this.getOrCreateRemoteParticipant(constructIdentifierKindFromMri(getMriFromIdentifier(e)));return this.tsCall.addParticipant(getMriFromIdentifier(e),{alternateId:n}).catch((t=>{if(this._remoteParticipants.find((t=>getMriFromIdentifier(t.identifier)===getMriFromIdentifier(e)))){this._remoteParticipants.splice(this._remoteParticipants.indexOf(i));const e=this._handleParticipantOperationFailure(t);i.setCallEndReason({code:e.code,subCode:e.subCode}),this._eventEmitter.emit("remoteParticipantsUpdated",{added:[],removed:[i]})}})),i}removeParticipant(e,t){return __awaiter$6(this,void 0,void 0,(function*(){validateIdentifier(e);try{yield this.tsCall.removeParticipant(getMriFromIdentifier(e))}catch(e){throw this._handleParticipantOperationFailure(e)}}))}hold(){return __awaiter$6(this,void 0,void 0,(function*(){return this.tsCall.hold().catch((e=>{throw this.logger.error("Failed to hold call"),new CallingCommunicationError({message:"Failed to hold call",code:BAD_REQUEST})}))}))}resume(){return __awaiter$6(this,void 0,void 0,(function*(){return this.tsCall.unhold().catch((e=>{throw this.logger.error("Failed to resume call"),new CallingCommunicationError({message:"Failed to resume call",code:BAD_REQUEST})}))}))}hangUp(e){return __awaiter$6(this,void 0,void 0,(function*(){return this.tsCall.stop(null==e?void 0:e.forEveryone).catch((e=>{throw this._handleCallOperationFailure(e)}))}))}startScreenSharing(){return __awaiter$6(this,void 0,void 0,(function*(){return this.tsCall.startScreenSharing().catch((e=>{throw this.logger.error("Failed to start screen share"),new CallingCommunicationError({message:"Failed to start screen share",code:BAD_REQUEST})}))}))}stopScreenSharing(){return __awaiter$6(this,void 0,void 0,(function*(){return this.tsCall.stopScreenSharing().catch((e=>{throw this.logger.error("Failed to stop screen share"),new CallingCommunicationError({message:"Failed to stop screen share",code:BAD_REQUEST})}))}))}on(e,t){if("stateChanged"!==e&&"idChanged"!==e&&"isMutedChanged"!==e&&"isScreenSharingOnChanged"!==e&&"remoteParticipantsUpdated"!==e&&"localVideoStreamsUpdated"!==e)throw new CallingCommunicationError({message:`Not able to subscribe to event ${e}, unknown event name`,code:UNPROCESSABLE_ENTITY});this._eventEmitter.on(e,t)}off(e,t){if("stateChanged"!==e&&"idChanged"!==e&&"isMutedChanged"!==e&&"isScreenSharingOnChanged"!==e&&"remoteParticipantsUpdated"!==e&&"localVideoStreamsUpdated"!==e)throw new CallingCommunicationError({message:`Not able to unsubscribe event ${e}, unknown event name`,code:UNPROCESSABLE_ENTITY});this._eventEmitter.off(e,t)}dispose(){if(!this._disposed){for(let[,e]of this._extensionInstances)e.dispose();this._eventEmitter.removeAllListeners(),this._disposed=!0}}mapTsCallState(e){let t;const n={0:"None",2:"Connecting",3:"Connected",4:"LocalHold",5:"RemoteHold",10:"InLobby",9:"EarlyMedia",6:"Disconnecting",7:"Disconnected"};if(n[e]){if(t=n[e],"Disconnected"===t){this._callEndReason=this._getCallEndReason(),this._remoteParticipants.forEach((e=>{e.setParticipantState("Disconnected"),e.tsRemoteParticipant?e.setCallEndReason(this._getTsParticipantCallEndReason(e.tsRemoteParticipant)):e.setCallEndReason(this._callEndReason)}));let e=this._remoteParticipants.map((e=>e));this._remoteParticipants=[],this._eventEmitter.emit("remoteParticipantsUpdated",{added:[],removed:e}),this.localVideoStreams[0]&&this.removeLocalVideoStream(this.localVideoStreams[0])}this.logger.log(`Mapped tsCall state:${e} to ${t}`),this._setCallState(t)}else this.logger.log(`Unable to map tsCall state \`${e}\`, to ACS Call state`)}_setCallState(e){e!==this._state&&(this.logger.log(`state changed from ${this._state} to ${this.state}`),this._state=e,this._eventEmitter.emit("stateChanged"))}_handleRemoteRingingForOutgoingCall(e){e.changed((()=>{2===e.state&&"Connected"!==this._state&&"Outgoing"==this._direction&&this._setCallState("Ringing")}))}getOrCreateRemoteParticipant(e){let t=this._remoteParticipants.find((t=>getMriFromIdentifier(t.identifier)===getMriFromIdentifier(e)));return t||(t=new RemoteParticipantImpl(e,this.logger,this,this._callAgent),this._remoteParticipants.push(t)),t}_toDtmfTone(e){switch(e){case"Num0":return 0;case"Num1":return 1;case"Num2":return 2;case"Num3":return 3;case"Num4":return 4;case"Num5":return 5;case"Num6":return 6;case"Num7":return 7;case"Num8":return 8;case"Num9":return 9;case"Star":return 10;case"Pound":return 11;case"A":return 12;case"B":return 13;case"C":return 14;case"D":return 15;case"Flash":return 16;default:throw new CallingCommunicationError({message:"Invalid value passed to DtfmTone",code:UNPROCESSABLE_ENTITY})}}getLocalVideoStreamFromCallOptions(e){var t,n,i;let r;if(Array.isArray(null===(t=null==e?void 0:e.videoOptions)||void 0===t?void 0:t.localVideoStreams)){if(1!==(null===(n=null==e?void 0:e.videoOptions)||void 0===n?void 0:n.localVideoStreams.length))throw new CallingCommunicationError({message:"Only single LocalVideoStream is supported currently",code:BAD_REQUEST});if(r=null===(i=null==e?void 0:e.videoOptions)||void 0===i?void 0:i.localVideoStreams[0],!(r instanceof LocalVideoStream))throw new CallingCommunicationError({message:`${r[0]} is not an instance of LocalVideoStream`,code:UNPROCESSABLE_ENTITY})}return r}setLocalVideoStream(e){if(!this._callAgent.tsStack)throw new CallingCommunicationError({message:"Failed to process video because of internal call stack error",code:INTERNAL_ERROR});e&&(this._localVideoStreams.push(e),this._callAgent.tsStack.getDeviceManager().selectDevices({camera:e.source.id}),this._eventEmitter.emit("localVideoStreamsUpdated",{added:[e],removed:[]}))}removeLocalVideoStream(e){if(e){if(0===this._localVideoStreams.splice(this._localVideoStreams.indexOf(e),1).length)return void this.logger.warn("Stream not found, failed to remove stream from localVideoStreams collection");this._eventEmitter.emit("localVideoStreamsUpdated",{added:[],removed:[e]})}}}__decorate$4([loggerProperty,__metadata$4("design:type",Object)],CallImpl.prototype,"logger",void 0),__decorate$4([syncOperation(CallOperation.BindToCall),__metadata$4("design:type",Function),__metadata$4("design:paramtypes",[]),__metadata$4("design:returntype",void 0)],CallImpl.prototype,"bindTsCall",null),__decorate$4([asyncOperation(CallOperation.Mute),__metadata$4("design:type",Function),__metadata$4("design:paramtypes",[]),__metadata$4("design:returntype",Promise)],CallImpl.prototype,"mute",null),__decorate$4([asyncOperation(CallOperation.Unmute),__metadata$4("design:type",Function),__metadata$4("design:paramtypes",[]),__metadata$4("design:returntype",Promise)],CallImpl.prototype,"unmute",null),__decorate$4([asyncOperation(CallOperation.SendDtmf),__metadata$4("design:type",Function),__metadata$4("design:paramtypes",[String]),__metadata$4("design:returntype",Promise)],CallImpl.prototype,"sendDtmf",null),__decorate$4([asyncOperation(CallOperation.StartVideo),__metadata$4("design:type",Function),__metadata$4("design:paramtypes",[LocalVideoStream]),__metadata$4("design:returntype",Promise)],CallImpl.prototype,"startVideo",null),__decorate$4([asyncOperation(CallOperation.StopVideo),__metadata$4("design:type",Function),__metadata$4("design:paramtypes",[LocalVideoStream]),__metadata$4("design:returntype",Promise)],CallImpl.prototype,"stopVideo",null),__decorate$4([syncOperation(CallOperation.AddParticipant),__metadata$4("design:type",Function),__metadata$4("design:paramtypes",[Object,Object]),__metadata$4("design:returntype",Object)],CallImpl.prototype,"addParticipant",null),__decorate$4([asyncOperation(CallOperation.RemoveParticipant),__metadata$4("design:type",Function),__metadata$4("design:paramtypes",[Object,Object]),__metadata$4("design:returntype",Promise)],CallImpl.prototype,"removeParticipant",null),__decorate$4([asyncOperation(CallOperation.Hold),__metadata$4("design:type",Function),__metadata$4("design:paramtypes",[]),__metadata$4("design:returntype",Promise)],CallImpl.prototype,"hold",null),__decorate$4([asyncOperation(CallOperation.Resume),__metadata$4("design:type",Function),__metadata$4("design:paramtypes",[]),__metadata$4("design:returntype",Promise)],CallImpl.prototype,"resume",null),__decorate$4([asyncOperation(CallOperation.HangUp),__metadata$4("design:type",Function),__metadata$4("design:paramtypes",[Object]),__metadata$4("design:returntype",Promise)],CallImpl.prototype,"hangUp",null),__decorate$4([asyncOperation(CallOperation.StartScreenShare),__metadata$4("design:type",Function),__metadata$4("design:paramtypes",[]),__metadata$4("design:returntype",Promise)],CallImpl.prototype,"startScreenSharing",null),__decorate$4([asyncOperation(CallOperation.StopScreenShare),__metadata$4("design:type",Function),__metadata$4("design:paramtypes",[]),__metadata$4("design:returntype",Promise)],CallImpl.prototype,"stopScreenSharing",null);var lodash=createCommonjsModule((function(e,t){(function(){var n,i="Expected a function",r="__lodash_hash_undefined__",o="__lodash_placeholder__",a=16,s=32,c=64,l=128,u=256,d=1/0,p=9007199254740991,f=NaN,h=4294967295,g=[["ary",l],["bind",1],["bindKey",2],["curry",8],["curryRight",a],["flip",512],["partial",s],["partialRight",c],["rearg",u]],m="[object Arguments]",v="[object Array]",S="[object Boolean]",y="[object Date]",_="[object Error]",E="[object Function]",T="[object GeneratorFunction]",C="[object Map]",I="[object Number]",A="[object Object]",b="[object Promise]",R="[object RegExp]",O="[object Set]",P="[object String]",N="[object Symbol]",M="[object WeakMap]",w="[object ArrayBuffer]",D="[object DataView]",L="[object Float32Array]",k="[object Float64Array]",F="[object Int8Array]",x="[object Int16Array]",U="[object Int32Array]",j="[object Uint8Array]",B="[object Uint8ClampedArray]",H="[object Uint16Array]",G="[object Uint32Array]",V=/\b__p \+= '';/g,W=/\b(__p \+=) '' \+/g,q=/(__e\(.*?\)|\b__t\)) \+\n'';/g,K=/&(?:amp|lt|gt|quot|#39);/g,z=/[&<>"']/g,J=RegExp(K.source),Y=RegExp(z.source),$=/<%-([\s\S]+?)%>/g,Q=/<%([\s\S]+?)%>/g,X=/<%=([\s\S]+?)%>/g,Z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/,te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ne=/[\\^$.*+?()[\]{}|]/g,ie=RegExp(ne.source),re=/^\s+|\s+$/g,oe=/^\s+/,ae=/\s+$/,se=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ce=/\{\n\/\* \[wrapped with (.+)\] \*/,le=/,? & /,ue=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,de=/\\(\\)?/g,pe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,fe=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,me=/^\[object .+?Constructor\]$/,ve=/^0o[0-7]+$/i,Se=/^(?:0|[1-9]\d*)$/,ye=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,_e=/($^)/,Ee=/['\n\r\u2028\u2029\\]/g,Te="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ce="\\u2700-\\u27bf",Ie="a-z\\xdf-\\xf6\\xf8-\\xff",Ae="A-Z\\xc0-\\xd6\\xd8-\\xde",be="\\ufe0e\\ufe0f",Re="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Oe="['’]",Pe="[\\ud800-\\udfff]",Ne="["+Re+"]",Me="["+Te+"]",we="\\d+",De="[\\u2700-\\u27bf]",Le="["+Ie+"]",ke="[^\\ud800-\\udfff"+Re+we+Ce+Ie+Ae+"]",Fe="\\ud83c[\\udffb-\\udfff]",xe="[^\\ud800-\\udfff]",Ue="(?:\\ud83c[\\udde6-\\uddff]){2}",je="[\\ud800-\\udbff][\\udc00-\\udfff]",Be="["+Ae+"]",He="(?:"+Le+"|"+ke+")",Ge="(?:"+Be+"|"+ke+")",Ve="(?:['’](?:d|ll|m|re|s|t|ve))?",We="(?:['’](?:D|LL|M|RE|S|T|VE))?",qe="(?:"+Me+"|"+Fe+")"+"?",Ke="[\\ufe0e\\ufe0f]?",ze=Ke+qe+("(?:\\u200d(?:"+[xe,Ue,je].join("|")+")"+Ke+qe+")*"),Je="(?:"+[De,Ue,je].join("|")+")"+ze,Ye="(?:"+[xe+Me+"?",Me,Ue,je,Pe].join("|")+")",$e=RegExp(Oe,"g"),Qe=RegExp(Me,"g"),Xe=RegExp(Fe+"(?="+Fe+")|"+Ye+ze,"g"),Ze=RegExp([Be+"?"+Le+"+"+Ve+"(?="+[Ne,Be,"$"].join("|")+")",Ge+"+"+We+"(?="+[Ne,Be+He,"$"].join("|")+")",Be+"?"+He+"+"+Ve,Be+"+"+We,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",we,Je].join("|"),"g"),et=RegExp("[\\u200d\\ud800-\\udfff"+Te+be+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],it=-1,rt={};rt[L]=rt[k]=rt[F]=rt[x]=rt[U]=rt[j]=rt[B]=rt[H]=rt[G]=!0,rt[m]=rt[v]=rt[w]=rt[S]=rt[D]=rt[y]=rt[_]=rt[E]=rt[C]=rt[I]=rt[A]=rt[R]=rt[O]=rt[P]=rt[M]=!1;var ot={};ot[m]=ot[v]=ot[w]=ot[D]=ot[S]=ot[y]=ot[L]=ot[k]=ot[F]=ot[x]=ot[U]=ot[C]=ot[I]=ot[A]=ot[R]=ot[O]=ot[P]=ot[N]=ot[j]=ot[B]=ot[H]=ot[G]=!0,ot[_]=ot[E]=ot[M]=!1;var at={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},st=parseFloat,ct=parseInt,lt="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,ut="object"==typeof self&&self&&self.Object===Object&&self,dt=lt||ut||Function("return this")(),pt=t&&!t.nodeType&&t,ft=pt&&e&&!e.nodeType&&e,ht=ft&&ft.exports===pt,gt=ht&&lt.process,mt=function(){try{var e=ft&&ft.require&&ft.require("util").types;return e||gt&&gt.binding&&gt.binding("util")}catch(e){}}(),vt=mt&&mt.isArrayBuffer,St=mt&&mt.isDate,yt=mt&&mt.isMap,_t=mt&&mt.isRegExp,Et=mt&&mt.isSet,Tt=mt&&mt.isTypedArray;function Ct(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function It(e,t,n,i){for(var r=-1,o=null==e?0:e.length;++r<o;){var a=e[r];t(i,a,n(a),e)}return i}function At(e,t){for(var n=-1,i=null==e?0:e.length;++n<i&&!1!==t(e[n],n,e););return e}function bt(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Rt(e,t){for(var n=-1,i=null==e?0:e.length;++n<i;)if(!t(e[n],n,e))return!1;return!0}function Ot(e,t){for(var n=-1,i=null==e?0:e.length,r=0,o=[];++n<i;){var a=e[n];t(a,n,e)&&(o[r++]=a)}return o}function Pt(e,t){return!!(null==e?0:e.length)&&jt(e,t,0)>-1}function Nt(e,t,n){for(var i=-1,r=null==e?0:e.length;++i<r;)if(n(t,e[i]))return!0;return!1}function Mt(e,t){for(var n=-1,i=null==e?0:e.length,r=Array(i);++n<i;)r[n]=t(e[n],n,e);return r}function wt(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e}function Dt(e,t,n,i){var r=-1,o=null==e?0:e.length;for(i&&o&&(n=e[++r]);++r<o;)n=t(n,e[r],r,e);return n}function Lt(e,t,n,i){var r=null==e?0:e.length;for(i&&r&&(n=e[--r]);r--;)n=t(n,e[r],r,e);return n}function kt(e,t){for(var n=-1,i=null==e?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var Ft=Vt("length");function xt(e,t,n){var i;return n(e,(function(e,n,r){if(t(e,n,r))return i=n,!1})),i}function Ut(e,t,n,i){for(var r=e.length,o=n+(i?1:-1);i?o--:++o<r;)if(t(e[o],o,e))return o;return-1}function jt(e,t,n){return t==t?function(e,t,n){var i=n-1,r=e.length;for(;++i<r;)if(e[i]===t)return i;return-1}(e,t,n):Ut(e,Ht,n)}function Bt(e,t,n,i){for(var r=n-1,o=e.length;++r<o;)if(i(e[r],t))return r;return-1}function Ht(e){return e!=e}function Gt(e,t){var n=null==e?0:e.length;return n?Kt(e,t)/n:f}function Vt(e){return function(t){return null==t?n:t[e]}}function Wt(e){return function(t){return null==e?n:e[t]}}function qt(e,t,n,i,r){return r(e,(function(e,r,o){n=i?(i=!1,e):t(n,e,r,o)})),n}function Kt(e,t){for(var i,r=-1,o=e.length;++r<o;){var a=t(e[r]);a!==n&&(i=i===n?a:i+a)}return i}function zt(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}function Jt(e){return function(t){return e(t)}}function Yt(e,t){return Mt(t,(function(t){return e[t]}))}function $t(e,t){return e.has(t)}function Qt(e,t){for(var n=-1,i=e.length;++n<i&&jt(t,e[n],0)>-1;);return n}function Xt(e,t){for(var n=e.length;n--&&jt(t,e[n],0)>-1;);return n}function Zt(e,t){for(var n=e.length,i=0;n--;)e[n]===t&&++i;return i}var en=Wt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tn=Wt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nn(e){return"\\"+at[e]}function rn(e){return et.test(e)}function on(e){var t=-1,n=Array(e.size);return e.forEach((function(e,i){n[++t]=[i,e]})),n}function an(e,t){return function(n){return e(t(n))}}function sn(e,t){for(var n=-1,i=e.length,r=0,a=[];++n<i;){var s=e[n];s!==t&&s!==o||(e[n]=o,a[r++]=n)}return a}function cn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function ln(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function un(e){return rn(e)?function(e){var t=Xe.lastIndex=0;for(;Xe.test(e);)++t;return t}(e):Ft(e)}function dn(e){return rn(e)?function(e){return e.match(Xe)||[]}(e):function(e){return e.split("")}(e)}var pn=Wt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var fn=function e(t){var Te,Ce=(t=null==t?dt:fn.defaults(dt.Object(),t,fn.pick(dt,nt))).Array,Ie=t.Date,Ae=t.Error,be=t.Function,Re=t.Math,Oe=t.Object,Pe=t.RegExp,Ne=t.String,Me=t.TypeError,we=Ce.prototype,De=be.prototype,Le=Oe.prototype,ke=t["__core-js_shared__"],Fe=De.toString,xe=Le.hasOwnProperty,Ue=0,je=(Te=/[^.]+$/.exec(ke&&ke.keys&&ke.keys.IE_PROTO||""))?"Symbol(src)_1."+Te:"",Be=Le.toString,He=Fe.call(Oe),Ge=dt._,Ve=Pe("^"+Fe.call(xe).replace(ne,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=ht?t.Buffer:n,qe=t.Symbol,Ke=t.Uint8Array,ze=We?We.allocUnsafe:n,Je=an(Oe.getPrototypeOf,Oe),Ye=Oe.create,Xe=Le.propertyIsEnumerable,et=we.splice,at=qe?qe.isConcatSpreadable:n,lt=qe?qe.iterator:n,ut=qe?qe.toStringTag:n,pt=function(){try{var e=fo(Oe,"defineProperty");return e({},"",{}),e}catch(e){}}(),ft=t.clearTimeout!==dt.clearTimeout&&t.clearTimeout,gt=Ie&&Ie.now!==dt.Date.now&&Ie.now,mt=t.setTimeout!==dt.setTimeout&&t.setTimeout,Ft=Re.ceil,Wt=Re.floor,hn=Oe.getOwnPropertySymbols,gn=We?We.isBuffer:n,mn=t.isFinite,vn=we.join,Sn=an(Oe.keys,Oe),yn=Re.max,_n=Re.min,En=Ie.now,Tn=t.parseInt,Cn=Re.random,In=we.reverse,An=fo(t,"DataView"),bn=fo(t,"Map"),Rn=fo(t,"Promise"),On=fo(t,"Set"),Pn=fo(t,"WeakMap"),Nn=fo(Oe,"create"),Mn=Pn&&new Pn,wn={},Dn=Bo(An),Ln=Bo(bn),kn=Bo(Rn),Fn=Bo(On),xn=Bo(Pn),Un=qe?qe.prototype:n,jn=Un?Un.valueOf:n,Bn=Un?Un.toString:n;function Hn(e){if(is(e)&&!Ka(e)&&!(e instanceof qn)){if(e instanceof Wn)return e;if(xe.call(e,"__wrapped__"))return Ho(e)}return new Wn(e)}var Gn=function(){function e(){}return function(t){if(!ns(t))return{};if(Ye)return Ye(t);e.prototype=t;var i=new e;return e.prototype=n,i}}();function Vn(){}function Wn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}function qn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function zn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function Jn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function Yn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Jn;++t<n;)this.add(e[t])}function $n(e){var t=this.__data__=new zn(e);this.size=t.size}function Qn(e,t){var n=Ka(e),i=!n&&qa(e),r=!n&&!i&&$a(e),o=!n&&!i&&!r&&ds(e),a=n||i||r||o,s=a?zt(e.length,Ne):[],c=s.length;for(var l in e)!t&&!xe.call(e,l)||a&&("length"==l||r&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||_o(l,c))||s.push(l);return s}function Xn(e){var t=e.length;return t?e[Yi(0,t-1)]:n}function Zn(e,t){return xo(Nr(e),ci(t,0,e.length))}function ei(e){return xo(Nr(e))}function ti(e,t,i){(i!==n&&!Ga(e[t],i)||i===n&&!(t in e))&&ai(e,t,i)}function ni(e,t,i){var r=e[t];xe.call(e,t)&&Ga(r,i)&&(i!==n||t in e)||ai(e,t,i)}function ii(e,t){for(var n=e.length;n--;)if(Ga(e[n][0],t))return n;return-1}function ri(e,t,n,i){return fi(e,(function(e,r,o){t(i,e,n(e),o)})),i}function oi(e,t){return e&&Mr(t,Ds(t),e)}function ai(e,t,n){"__proto__"==t&&pt?pt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function si(e,t){for(var i=-1,r=t.length,o=Ce(r),a=null==e;++i<r;)o[i]=a?n:Os(e,t[i]);return o}function ci(e,t,i){return e==e&&(i!==n&&(e=e<=i?e:i),t!==n&&(e=e>=t?e:t)),e}function li(e,t,i,r,o,a){var s,c=1&t,l=2&t,u=4&t;if(i&&(s=o?i(e,r,o,a):i(e)),s!==n)return s;if(!ns(e))return e;var d=Ka(e);if(d){if(s=function(e){var t=e.length,n=new e.constructor(t);t&&"string"==typeof e[0]&&xe.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(e),!c)return Nr(e,s)}else{var p=mo(e),f=p==E||p==T;if($a(e))return Ir(e,c);if(p==A||p==m||f&&!o){if(s=l||f?{}:So(e),!c)return l?function(e,t){return Mr(e,go(e),t)}(e,function(e,t){return e&&Mr(t,Ls(t),e)}(s,e)):function(e,t){return Mr(e,ho(e),t)}(e,oi(s,e))}else{if(!ot[p])return o?e:{};s=function(e,t,n){var i=e.constructor;switch(t){case w:return Ar(e);case S:case y:return new i(+e);case D:return function(e,t){var n=t?Ar(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case L:case k:case F:case x:case U:case j:case B:case H:case G:return br(e,n);case C:return new i;case I:case P:return new i(e);case R:return function(e){var t=new e.constructor(e.source,fe.exec(e));return t.lastIndex=e.lastIndex,t}(e);case O:return new i;case N:return r=e,jn?Oe(jn.call(r)):{}}var r}(e,p,c)}}a||(a=new $n);var h=a.get(e);if(h)return h;a.set(e,s),cs(e)?e.forEach((function(n){s.add(li(n,t,i,n,e,a))})):rs(e)&&e.forEach((function(n,r){s.set(r,li(n,t,i,r,e,a))}));var g=d?n:(u?l?oo:ro:l?Ls:Ds)(e);return At(g||e,(function(n,r){g&&(n=e[r=n]),ni(s,r,li(n,t,i,r,e,a))})),s}function ui(e,t,i){var r=i.length;if(null==e)return!r;for(e=Oe(e);r--;){var o=i[r],a=t[o],s=e[o];if(s===n&&!(o in e)||!a(s))return!1}return!0}function di(e,t,r){if("function"!=typeof e)throw new Me(i);return Do((function(){e.apply(n,r)}),t)}function pi(e,t,n,i){var r=-1,o=Pt,a=!0,s=e.length,c=[],l=t.length;if(!s)return c;n&&(t=Mt(t,Jt(n))),i?(o=Nt,a=!1):t.length>=200&&(o=$t,a=!1,t=new Yn(t));e:for(;++r<s;){var u=e[r],d=null==n?u:n(u);if(u=i||0!==u?u:0,a&&d==d){for(var p=l;p--;)if(t[p]===d)continue e;c.push(u)}else o(t,d,i)||c.push(u)}return c}Hn.templateSettings={escape:$,evaluate:Q,interpolate:X,variable:"",imports:{_:Hn}},Hn.prototype=Vn.prototype,Hn.prototype.constructor=Hn,Wn.prototype=Gn(Vn.prototype),Wn.prototype.constructor=Wn,qn.prototype=Gn(Vn.prototype),qn.prototype.constructor=qn,Kn.prototype.clear=function(){this.__data__=Nn?Nn(null):{},this.size=0},Kn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Kn.prototype.get=function(e){var t=this.__data__;if(Nn){var i=t[e];return i===r?n:i}return xe.call(t,e)?t[e]:n},Kn.prototype.has=function(e){var t=this.__data__;return Nn?t[e]!==n:xe.call(t,e)},Kn.prototype.set=function(e,t){var i=this.__data__;return this.size+=this.has(e)?0:1,i[e]=Nn&&t===n?r:t,this},zn.prototype.clear=function(){this.__data__=[],this.size=0},zn.prototype.delete=function(e){var t=this.__data__,n=ii(t,e);return!(n<0)&&(n==t.length-1?t.pop():et.call(t,n,1),--this.size,!0)},zn.prototype.get=function(e){var t=this.__data__,i=ii(t,e);return i<0?n:t[i][1]},zn.prototype.has=function(e){return ii(this.__data__,e)>-1},zn.prototype.set=function(e,t){var n=this.__data__,i=ii(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this},Jn.prototype.clear=function(){this.size=0,this.__data__={hash:new Kn,map:new(bn||zn),string:new Kn}},Jn.prototype.delete=function(e){var t=uo(this,e).delete(e);return this.size-=t?1:0,t},Jn.prototype.get=function(e){return uo(this,e).get(e)},Jn.prototype.has=function(e){return uo(this,e).has(e)},Jn.prototype.set=function(e,t){var n=uo(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this},Yn.prototype.add=Yn.prototype.push=function(e){return this.__data__.set(e,r),this},Yn.prototype.has=function(e){return this.__data__.has(e)},$n.prototype.clear=function(){this.__data__=new zn,this.size=0},$n.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},$n.prototype.get=function(e){return this.__data__.get(e)},$n.prototype.has=function(e){return this.__data__.has(e)},$n.prototype.set=function(e,t){var n=this.__data__;if(n instanceof zn){var i=n.__data__;if(!bn||i.length<199)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new Jn(i)}return n.set(e,t),this.size=n.size,this};var fi=Lr(Ei),hi=Lr(Ti,!0);function gi(e,t){var n=!0;return fi(e,(function(e,i,r){return n=!!t(e,i,r)})),n}function mi(e,t,i){for(var r=-1,o=e.length;++r<o;){var a=e[r],s=t(a);if(null!=s&&(c===n?s==s&&!us(s):i(s,c)))var c=s,l=a}return l}function vi(e,t){var n=[];return fi(e,(function(e,i,r){t(e,i,r)&&n.push(e)})),n}function Si(e,t,n,i,r){var o=-1,a=e.length;for(n||(n=yo),r||(r=[]);++o<a;){var s=e[o];t>0&&n(s)?t>1?Si(s,t-1,n,i,r):wt(r,s):i||(r[r.length]=s)}return r}var yi=kr(),_i=kr(!0);function Ei(e,t){return e&&yi(e,t,Ds)}function Ti(e,t){return e&&_i(e,t,Ds)}function Ci(e,t){return Ot(t,(function(t){return Za(e[t])}))}function Ii(e,t){for(var i=0,r=(t=_r(t,e)).length;null!=e&&i<r;)e=e[jo(t[i++])];return i&&i==r?e:n}function Ai(e,t,n){var i=t(e);return Ka(e)?i:wt(i,n(e))}function bi(e){return null==e?e===n?"[object Undefined]":"[object Null]":ut&&ut in Oe(e)?function(e){var t=xe.call(e,ut),i=e[ut];try{e[ut]=n;var r=!0}catch(e){}var o=Be.call(e);r&&(t?e[ut]=i:delete e[ut]);return o}(e):function(e){return Be.call(e)}(e)}function Ri(e,t){return e>t}function Oi(e,t){return null!=e&&xe.call(e,t)}function Pi(e,t){return null!=e&&t in Oe(e)}function Ni(e,t,i){for(var r=i?Nt:Pt,o=e[0].length,a=e.length,s=a,c=Ce(a),l=1/0,u=[];s--;){var d=e[s];s&&t&&(d=Mt(d,Jt(t))),l=_n(d.length,l),c[s]=!i&&(t||o>=120&&d.length>=120)?new Yn(s&&d):n}d=e[0];var p=-1,f=c[0];e:for(;++p<o&&u.length<l;){var h=d[p],g=t?t(h):h;if(h=i||0!==h?h:0,!(f?$t(f,g):r(u,g,i))){for(s=a;--s;){var m=c[s];if(!(m?$t(m,g):r(e[s],g,i)))continue e}f&&f.push(g),u.push(h)}}return u}function Mi(e,t,i){var r=null==(e=Po(e,t=_r(t,e)))?e:e[jo(Xo(t))];return null==r?n:Ct(r,e,i)}function wi(e){return is(e)&&bi(e)==m}function Di(e,t,i,r,o){return e===t||(null==e||null==t||!is(e)&&!is(t)?e!=e&&t!=t:function(e,t,i,r,o,a){var s=Ka(e),c=Ka(t),l=s?v:mo(e),u=c?v:mo(t),d=(l=l==m?A:l)==A,p=(u=u==m?A:u)==A,f=l==u;if(f&&$a(e)){if(!$a(t))return!1;s=!0,d=!1}if(f&&!d)return a||(a=new $n),s||ds(e)?no(e,t,i,r,o,a):function(e,t,n,i,r,o,a){switch(n){case D:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case w:return!(e.byteLength!=t.byteLength||!o(new Ke(e),new Ke(t)));case S:case y:case I:return Ga(+e,+t);case _:return e.name==t.name&&e.message==t.message;case R:case P:return e==t+"";case C:var s=on;case O:var c=1&i;if(s||(s=cn),e.size!=t.size&&!c)return!1;var l=a.get(e);if(l)return l==t;i|=2,a.set(e,t);var u=no(s(e),s(t),i,r,o,a);return a.delete(e),u;case N:if(jn)return jn.call(e)==jn.call(t)}return!1}(e,t,l,i,r,o,a);if(!(1&i)){var h=d&&xe.call(e,"__wrapped__"),g=p&&xe.call(t,"__wrapped__");if(h||g){var E=h?e.value():e,T=g?t.value():t;return a||(a=new $n),o(E,T,i,r,a)}}if(!f)return!1;return a||(a=new $n),function(e,t,i,r,o,a){var s=1&i,c=ro(e),l=c.length,u=ro(t).length;if(l!=u&&!s)return!1;var d=l;for(;d--;){var p=c[d];if(!(s?p in t:xe.call(t,p)))return!1}var f=a.get(e),h=a.get(t);if(f&&h)return f==t&&h==e;var g=!0;a.set(e,t),a.set(t,e);var m=s;for(;++d<l;){var v=e[p=c[d]],S=t[p];if(r)var y=s?r(S,v,p,t,e,a):r(v,S,p,e,t,a);if(!(y===n?v===S||o(v,S,i,r,a):y)){g=!1;break}m||(m="constructor"==p)}if(g&&!m){var _=e.constructor,E=t.constructor;_==E||!("constructor"in e)||!("constructor"in t)||"function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E||(g=!1)}return a.delete(e),a.delete(t),g}(e,t,i,r,o,a)}(e,t,i,r,Di,o))}function Li(e,t,i,r){var o=i.length,a=o,s=!r;if(null==e)return!a;for(e=Oe(e);o--;){var c=i[o];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++o<a;){var l=(c=i[o])[0],u=e[l],d=c[1];if(s&&c[2]){if(u===n&&!(l in e))return!1}else{var p=new $n;if(r)var f=r(u,d,l,e,t,p);if(!(f===n?Di(d,u,3,r,p):f))return!1}}return!0}function ki(e){return!(!ns(e)||(t=e,je&&je in t))&&(Za(e)?Ve:me).test(Bo(e));var t}function Fi(e){return"function"==typeof e?e:null==e?oc:"object"==typeof e?Ka(e)?Gi(e[0],e[1]):Hi(e):hc(e)}function xi(e){if(!Ao(e))return Sn(e);var t=[];for(var n in Oe(e))xe.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Ui(e){if(!ns(e))return function(e){var t=[];if(null!=e)for(var n in Oe(e))t.push(n);return t}(e);var t=Ao(e),n=[];for(var i in e)("constructor"!=i||!t&&xe.call(e,i))&&n.push(i);return n}function ji(e,t){return e<t}function Bi(e,t){var n=-1,i=Ja(e)?Ce(e.length):[];return fi(e,(function(e,r,o){i[++n]=t(e,r,o)})),i}function Hi(e){var t=po(e);return 1==t.length&&t[0][2]?Ro(t[0][0],t[0][1]):function(n){return n===e||Li(n,e,t)}}function Gi(e,t){return To(e)&&bo(t)?Ro(jo(e),t):function(i){var r=Os(i,e);return r===n&&r===t?Ps(i,e):Di(t,r,3)}}function Vi(e,t,i,r,o){e!==t&&yi(t,(function(a,s){if(o||(o=new $n),ns(a))!function(e,t,i,r,o,a,s){var c=Mo(e,i),l=Mo(t,i),u=s.get(l);if(u)return void ti(e,i,u);var d=a?a(c,l,i+"",e,t,s):n,p=d===n;if(p){var f=Ka(l),h=!f&&$a(l),g=!f&&!h&&ds(l);d=l,f||h||g?Ka(c)?d=c:Ya(c)?d=Nr(c):h?(p=!1,d=Ir(l,!0)):g?(p=!1,d=br(l,!0)):d=[]:as(l)||qa(l)?(d=c,qa(c)?d=ys(c):ns(c)&&!Za(c)||(d=So(l))):p=!1}p&&(s.set(l,d),o(d,l,r,a,s),s.delete(l));ti(e,i,d)}(e,t,s,i,Vi,r,o);else{var c=r?r(Mo(e,s),a,s+"",e,t,o):n;c===n&&(c=a),ti(e,s,c)}}),Ls)}function Wi(e,t){var i=e.length;if(i)return _o(t+=t<0?i:0,i)?e[t]:n}function qi(e,t,n){t=t.length?Mt(t,(function(e){return Ka(e)?function(t){return Ii(t,1===e.length?e[0]:e)}:e})):[oc];var i=-1;return t=Mt(t,Jt(lo())),function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(Bi(e,(function(e,n,r){return{criteria:Mt(t,(function(t){return t(e)})),index:++i,value:e}})),(function(e,t){return function(e,t,n){var i=-1,r=e.criteria,o=t.criteria,a=r.length,s=n.length;for(;++i<a;){var c=Rr(r[i],o[i]);if(c)return i>=s?c:c*("desc"==n[i]?-1:1)}return e.index-t.index}(e,t,n)}))}function Ki(e,t,n){for(var i=-1,r=t.length,o={};++i<r;){var a=t[i],s=Ii(e,a);n(s,a)&&er(o,_r(a,e),s)}return o}function zi(e,t,n,i){var r=i?Bt:jt,o=-1,a=t.length,s=e;for(e===t&&(t=Nr(t)),n&&(s=Mt(e,Jt(n)));++o<a;)for(var c=0,l=t[o],u=n?n(l):l;(c=r(s,u,c,i))>-1;)s!==e&&et.call(s,c,1),et.call(e,c,1);return e}function Ji(e,t){for(var n=e?t.length:0,i=n-1;n--;){var r=t[n];if(n==i||r!==o){var o=r;_o(r)?et.call(e,r,1):pr(e,r)}}return e}function Yi(e,t){return e+Wt(Cn()*(t-e+1))}function $i(e,t){var n="";if(!e||t<1||t>p)return n;do{t%2&&(n+=e),(t=Wt(t/2))&&(e+=e)}while(t);return n}function Qi(e,t){return Lo(Oo(e,t,oc),e+"")}function Xi(e){return Xn(Gs(e))}function Zi(e,t){var n=Gs(e);return xo(n,ci(t,0,n.length))}function er(e,t,i,r){if(!ns(e))return e;for(var o=-1,a=(t=_r(t,e)).length,s=a-1,c=e;null!=c&&++o<a;){var l=jo(t[o]),u=i;if("__proto__"===l||"constructor"===l||"prototype"===l)return e;if(o!=s){var d=c[l];(u=r?r(d,l,c):n)===n&&(u=ns(d)?d:_o(t[o+1])?[]:{})}ni(c,l,u),c=c[l]}return e}var tr=Mn?function(e,t){return Mn.set(e,t),e}:oc,nr=pt?function(e,t){return pt(e,"toString",{configurable:!0,enumerable:!1,value:nc(t),writable:!0})}:oc;function ir(e){return xo(Gs(e))}function rr(e,t,n){var i=-1,r=e.length;t<0&&(t=-t>r?0:r+t),(n=n>r?r:n)<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var o=Ce(r);++i<r;)o[i]=e[i+t];return o}function or(e,t){var n;return fi(e,(function(e,i,r){return!(n=t(e,i,r))})),!!n}function ar(e,t,n){var i=0,r=null==e?i:e.length;if("number"==typeof t&&t==t&&r<=2147483647){for(;i<r;){var o=i+r>>>1,a=e[o];null!==a&&!us(a)&&(n?a<=t:a<t)?i=o+1:r=o}return r}return sr(e,t,oc,n)}function sr(e,t,i,r){var o=0,a=null==e?0:e.length;if(0===a)return 0;for(var s=(t=i(t))!=t,c=null===t,l=us(t),u=t===n;o<a;){var d=Wt((o+a)/2),p=i(e[d]),f=p!==n,h=null===p,g=p==p,m=us(p);if(s)var v=r||g;else v=u?g&&(r||f):c?g&&f&&(r||!h):l?g&&f&&!h&&(r||!m):!h&&!m&&(r?p<=t:p<t);v?o=d+1:a=d}return _n(a,4294967294)}function cr(e,t){for(var n=-1,i=e.length,r=0,o=[];++n<i;){var a=e[n],s=t?t(a):a;if(!n||!Ga(s,c)){var c=s;o[r++]=0===a?0:a}}return o}function lr(e){return"number"==typeof e?e:us(e)?f:+e}function ur(e){if("string"==typeof e)return e;if(Ka(e))return Mt(e,ur)+"";if(us(e))return Bn?Bn.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function dr(e,t,n){var i=-1,r=Pt,o=e.length,a=!0,s=[],c=s;if(n)a=!1,r=Nt;else if(o>=200){var l=t?null:$r(e);if(l)return cn(l);a=!1,r=$t,c=new Yn}else c=t?[]:s;e:for(;++i<o;){var u=e[i],d=t?t(u):u;if(u=n||0!==u?u:0,a&&d==d){for(var p=c.length;p--;)if(c[p]===d)continue e;t&&c.push(d),s.push(u)}else r(c,d,n)||(c!==s&&c.push(d),s.push(u))}return s}function pr(e,t){return null==(e=Po(e,t=_r(t,e)))||delete e[jo(Xo(t))]}function fr(e,t,n,i){return er(e,t,n(Ii(e,t)),i)}function hr(e,t,n,i){for(var r=e.length,o=i?r:-1;(i?o--:++o<r)&&t(e[o],o,e););return n?rr(e,i?0:o,i?o+1:r):rr(e,i?o+1:0,i?r:o)}function gr(e,t){var n=e;return n instanceof qn&&(n=n.value()),Dt(t,(function(e,t){return t.func.apply(t.thisArg,wt([e],t.args))}),n)}function mr(e,t,n){var i=e.length;if(i<2)return i?dr(e[0]):[];for(var r=-1,o=Ce(i);++r<i;)for(var a=e[r],s=-1;++s<i;)s!=r&&(o[r]=pi(o[r]||a,e[s],t,n));return dr(Si(o,1),t,n)}function vr(e,t,i){for(var r=-1,o=e.length,a=t.length,s={};++r<o;){var c=r<a?t[r]:n;i(s,e[r],c)}return s}function Sr(e){return Ya(e)?e:[]}function yr(e){return"function"==typeof e?e:oc}function _r(e,t){return Ka(e)?e:To(e,t)?[e]:Uo(_s(e))}var Er=Qi;function Tr(e,t,i){var r=e.length;return i=i===n?r:i,!t&&i>=r?e:rr(e,t,i)}var Cr=ft||function(e){return dt.clearTimeout(e)};function Ir(e,t){if(t)return e.slice();var n=e.length,i=ze?ze(n):new e.constructor(n);return e.copy(i),i}function Ar(e){var t=new e.constructor(e.byteLength);return new Ke(t).set(new Ke(e)),t}function br(e,t){var n=t?Ar(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Rr(e,t){if(e!==t){var i=e!==n,r=null===e,o=e==e,a=us(e),s=t!==n,c=null===t,l=t==t,u=us(t);if(!c&&!u&&!a&&e>t||a&&s&&l&&!c&&!u||r&&s&&l||!i&&l||!o)return 1;if(!r&&!a&&!u&&e<t||u&&i&&o&&!r&&!a||c&&i&&o||!s&&o||!l)return-1}return 0}function Or(e,t,n,i){for(var r=-1,o=e.length,a=n.length,s=-1,c=t.length,l=yn(o-a,0),u=Ce(c+l),d=!i;++s<c;)u[s]=t[s];for(;++r<a;)(d||r<o)&&(u[n[r]]=e[r]);for(;l--;)u[s++]=e[r++];return u}function Pr(e,t,n,i){for(var r=-1,o=e.length,a=-1,s=n.length,c=-1,l=t.length,u=yn(o-s,0),d=Ce(u+l),p=!i;++r<u;)d[r]=e[r];for(var f=r;++c<l;)d[f+c]=t[c];for(;++a<s;)(p||r<o)&&(d[f+n[a]]=e[r++]);return d}function Nr(e,t){var n=-1,i=e.length;for(t||(t=Ce(i));++n<i;)t[n]=e[n];return t}function Mr(e,t,i,r){var o=!i;i||(i={});for(var a=-1,s=t.length;++a<s;){var c=t[a],l=r?r(i[c],e[c],c,i,e):n;l===n&&(l=e[c]),o?ai(i,c,l):ni(i,c,l)}return i}function wr(e,t){return function(n,i){var r=Ka(n)?It:ri,o=t?t():{};return r(n,e,lo(i,2),o)}}function Dr(e){return Qi((function(t,i){var r=-1,o=i.length,a=o>1?i[o-1]:n,s=o>2?i[2]:n;for(a=e.length>3&&"function"==typeof a?(o--,a):n,s&&Eo(i[0],i[1],s)&&(a=o<3?n:a,o=1),t=Oe(t);++r<o;){var c=i[r];c&&e(t,c,r,a)}return t}))}function Lr(e,t){return function(n,i){if(null==n)return n;if(!Ja(n))return e(n,i);for(var r=n.length,o=t?r:-1,a=Oe(n);(t?o--:++o<r)&&!1!==i(a[o],o,a););return n}}function kr(e){return function(t,n,i){for(var r=-1,o=Oe(t),a=i(t),s=a.length;s--;){var c=a[e?s:++r];if(!1===n(o[c],c,o))break}return t}}function Fr(e){return function(t){var i=rn(t=_s(t))?dn(t):n,r=i?i[0]:t.charAt(0),o=i?Tr(i,1).join(""):t.slice(1);return r[e]()+o}}function xr(e){return function(t){return Dt(Zs(qs(t).replace($e,"")),e,"")}}function Ur(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=Gn(e.prototype),i=e.apply(n,t);return ns(i)?i:n}}function jr(e){return function(t,i,r){var o=Oe(t);if(!Ja(t)){var a=lo(i,3);t=Ds(t),i=function(e){return a(o[e],e,o)}}var s=e(t,i,r);return s>-1?o[a?t[s]:s]:n}}function Br(e){return io((function(t){var r=t.length,o=r,a=Wn.prototype.thru;for(e&&t.reverse();o--;){var s=t[o];if("function"!=typeof s)throw new Me(i);if(a&&!c&&"wrapper"==so(s))var c=new Wn([],!0)}for(o=c?o:r;++o<r;){var l=so(s=t[o]),u="wrapper"==l?ao(s):n;c=u&&Co(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?c[so(u[0])].apply(c,u[3]):1==s.length&&Co(s)?c[l]():c.thru(s)}return function(){var e=arguments,n=e[0];if(c&&1==e.length&&Ka(n))return c.plant(n).value();for(var i=0,o=r?t[i].apply(this,e):n;++i<r;)o=t[i].call(this,o);return o}}))}function Hr(e,t,i,r,o,a,s,c,u,d){var p=t&l,f=1&t,h=2&t,g=24&t,m=512&t,v=h?n:Ur(e);return function n(){for(var l=arguments.length,S=Ce(l),y=l;y--;)S[y]=arguments[y];if(g)var _=co(n),E=Zt(S,_);if(r&&(S=Or(S,r,o,g)),a&&(S=Pr(S,a,s,g)),l-=E,g&&l<d){var T=sn(S,_);return Jr(e,t,Hr,n.placeholder,i,S,T,c,u,d-l)}var C=f?i:this,I=h?C[e]:e;return l=S.length,c?S=No(S,c):m&&l>1&&S.reverse(),p&&u<l&&(S.length=u),this&&this!==dt&&this instanceof n&&(I=v||Ur(I)),I.apply(C,S)}}function Gr(e,t){return function(n,i){return function(e,t,n,i){return Ei(e,(function(e,r,o){t(i,n(e),r,o)})),i}(n,e,t(i),{})}}function Vr(e,t){return function(i,r){var o;if(i===n&&r===n)return t;if(i!==n&&(o=i),r!==n){if(o===n)return r;"string"==typeof i||"string"==typeof r?(i=ur(i),r=ur(r)):(i=lr(i),r=lr(r)),o=e(i,r)}return o}}function Wr(e){return io((function(t){return t=Mt(t,Jt(lo())),Qi((function(n){var i=this;return e(t,(function(e){return Ct(e,i,n)}))}))}))}function qr(e,t){var i=(t=t===n?" ":ur(t)).length;if(i<2)return i?$i(t,e):t;var r=$i(t,Ft(e/un(t)));return rn(t)?Tr(dn(r),0,e).join(""):r.slice(0,e)}function Kr(e){return function(t,i,r){return r&&"number"!=typeof r&&Eo(t,i,r)&&(i=r=n),t=gs(t),i===n?(i=t,t=0):i=gs(i),function(e,t,n,i){for(var r=-1,o=yn(Ft((t-e)/(n||1)),0),a=Ce(o);o--;)a[i?o:++r]=e,e+=n;return a}(t,i,r=r===n?t<i?1:-1:gs(r),e)}}function zr(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=Ss(t),n=Ss(n)),e(t,n)}}function Jr(e,t,i,r,o,a,l,u,d,p){var f=8&t;t|=f?s:c,4&(t&=~(f?c:s))||(t&=-4);var h=[e,t,o,f?a:n,f?l:n,f?n:a,f?n:l,u,d,p],g=i.apply(n,h);return Co(e)&&wo(g,h),g.placeholder=r,ko(g,e,t)}function Yr(e){var t=Re[e];return function(e,n){if(e=Ss(e),(n=null==n?0:_n(ms(n),292))&&mn(e)){var i=(_s(e)+"e").split("e");return+((i=(_s(t(i[0]+"e"+(+i[1]+n)))+"e").split("e"))[0]+"e"+(+i[1]-n))}return t(e)}}var $r=On&&1/cn(new On([,-0]))[1]==d?function(e){return new On(e)}:uc;function Qr(e){return function(t){var n=mo(t);return n==C?on(t):n==O?ln(t):function(e,t){return Mt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Xr(e,t,r,d,p,f,h,g){var m=2&t;if(!m&&"function"!=typeof e)throw new Me(i);var v=d?d.length:0;if(v||(t&=-97,d=p=n),h=h===n?h:yn(ms(h),0),g=g===n?g:ms(g),v-=p?p.length:0,t&c){var S=d,y=p;d=p=n}var _=m?n:ao(e),E=[e,t,r,d,p,S,y,f,h,g];if(_&&function(e,t){var n=e[1],i=t[1],r=n|i,a=r<131,s=i==l&&8==n||i==l&&n==u&&e[7].length<=t[8]||384==i&&t[7].length<=t[8]&&8==n;if(!a&&!s)return e;1&i&&(e[2]=t[2],r|=1&n?0:4);var c=t[3];if(c){var d=e[3];e[3]=d?Or(d,c,t[4]):c,e[4]=d?sn(e[3],o):t[4]}(c=t[5])&&(d=e[5],e[5]=d?Pr(d,c,t[6]):c,e[6]=d?sn(e[5],o):t[6]);(c=t[7])&&(e[7]=c);i&l&&(e[8]=null==e[8]?t[8]:_n(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=r}(E,_),e=E[0],t=E[1],r=E[2],d=E[3],p=E[4],!(g=E[9]=E[9]===n?m?0:e.length:yn(E[9]-v,0))&&24&t&&(t&=-25),t&&1!=t)T=8==t||t==a?function(e,t,i){var r=Ur(e);return function o(){for(var a=arguments.length,s=Ce(a),c=a,l=co(o);c--;)s[c]=arguments[c];var u=a<3&&s[0]!==l&&s[a-1]!==l?[]:sn(s,l);return(a-=u.length)<i?Jr(e,t,Hr,o.placeholder,n,s,u,n,n,i-a):Ct(this&&this!==dt&&this instanceof o?r:e,this,s)}}(e,t,g):t!=s&&33!=t||p.length?Hr.apply(n,E):function(e,t,n,i){var r=1&t,o=Ur(e);return function t(){for(var a=-1,s=arguments.length,c=-1,l=i.length,u=Ce(l+s),d=this&&this!==dt&&this instanceof t?o:e;++c<l;)u[c]=i[c];for(;s--;)u[c++]=arguments[++a];return Ct(d,r?n:this,u)}}(e,t,r,d);else var T=function(e,t,n){var i=1&t,r=Ur(e);return function t(){return(this&&this!==dt&&this instanceof t?r:e).apply(i?n:this,arguments)}}(e,t,r);return ko((_?tr:wo)(T,E),e,t)}function Zr(e,t,i,r){return e===n||Ga(e,Le[i])&&!xe.call(r,i)?t:e}function eo(e,t,i,r,o,a){return ns(e)&&ns(t)&&(a.set(t,e),Vi(e,t,n,eo,a),a.delete(t)),e}function to(e){return as(e)?n:e}function no(e,t,i,r,o,a){var s=1&i,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;var u=a.get(e),d=a.get(t);if(u&&d)return u==t&&d==e;var p=-1,f=!0,h=2&i?new Yn:n;for(a.set(e,t),a.set(t,e);++p<c;){var g=e[p],m=t[p];if(r)var v=s?r(m,g,p,t,e,a):r(g,m,p,e,t,a);if(v!==n){if(v)continue;f=!1;break}if(h){if(!kt(t,(function(e,t){if(!$t(h,t)&&(g===e||o(g,e,i,r,a)))return h.push(t)}))){f=!1;break}}else if(g!==m&&!o(g,m,i,r,a)){f=!1;break}}return a.delete(e),a.delete(t),f}function io(e){return Lo(Oo(e,n,zo),e+"")}function ro(e){return Ai(e,Ds,ho)}function oo(e){return Ai(e,Ls,go)}var ao=Mn?function(e){return Mn.get(e)}:uc;function so(e){for(var t=e.name+"",n=wn[t],i=xe.call(wn,t)?n.length:0;i--;){var r=n[i],o=r.func;if(null==o||o==e)return r.name}return t}function co(e){return(xe.call(Hn,"placeholder")?Hn:e).placeholder}function lo(){var e=Hn.iteratee||ac;return e=e===ac?Fi:e,arguments.length?e(arguments[0],arguments[1]):e}function uo(e,t){var n,i,r=e.__data__;return("string"==(i=typeof(n=t))||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==n:null===n)?r["string"==typeof t?"string":"hash"]:r.map}function po(e){for(var t=Ds(e),n=t.length;n--;){var i=t[n],r=e[i];t[n]=[i,r,bo(r)]}return t}function fo(e,t){var i=function(e,t){return null==e?n:e[t]}(e,t);return ki(i)?i:n}var ho=hn?function(e){return null==e?[]:(e=Oe(e),Ot(hn(e),(function(t){return Xe.call(e,t)})))}:vc,go=hn?function(e){for(var t=[];e;)wt(t,ho(e)),e=Je(e);return t}:vc,mo=bi;function vo(e,t,n){for(var i=-1,r=(t=_r(t,e)).length,o=!1;++i<r;){var a=jo(t[i]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++i!=r?o:!!(r=null==e?0:e.length)&&ts(r)&&_o(a,r)&&(Ka(e)||qa(e))}function So(e){return"function"!=typeof e.constructor||Ao(e)?{}:Gn(Je(e))}function yo(e){return Ka(e)||qa(e)||!!(at&&e&&e[at])}function _o(e,t){var n=typeof e;return!!(t=null==t?p:t)&&("number"==n||"symbol"!=n&&Se.test(e))&&e>-1&&e%1==0&&e<t}function Eo(e,t,n){if(!ns(n))return!1;var i=typeof t;return!!("number"==i?Ja(n)&&_o(t,n.length):"string"==i&&t in n)&&Ga(n[t],e)}function To(e,t){if(Ka(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!us(e))||(ee.test(e)||!Z.test(e)||null!=t&&e in Oe(t))}function Co(e){var t=so(e),n=Hn[t];if("function"!=typeof n||!(t in qn.prototype))return!1;if(e===n)return!0;var i=ao(n);return!!i&&e===i[0]}(An&&mo(new An(new ArrayBuffer(1)))!=D||bn&&mo(new bn)!=C||Rn&&mo(Rn.resolve())!=b||On&&mo(new On)!=O||Pn&&mo(new Pn)!=M)&&(mo=function(e){var t=bi(e),i=t==A?e.constructor:n,r=i?Bo(i):"";if(r)switch(r){case Dn:return D;case Ln:return C;case kn:return b;case Fn:return O;case xn:return M}return t});var Io=ke?Za:Sc;function Ao(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Le)}function bo(e){return e==e&&!ns(e)}function Ro(e,t){return function(i){return null!=i&&(i[e]===t&&(t!==n||e in Oe(i)))}}function Oo(e,t,i){return t=yn(t===n?e.length-1:t,0),function(){for(var n=arguments,r=-1,o=yn(n.length-t,0),a=Ce(o);++r<o;)a[r]=n[t+r];r=-1;for(var s=Ce(t+1);++r<t;)s[r]=n[r];return s[t]=i(a),Ct(e,this,s)}}function Po(e,t){return t.length<2?e:Ii(e,rr(t,0,-1))}function No(e,t){for(var i=e.length,r=_n(t.length,i),o=Nr(e);r--;){var a=t[r];e[r]=_o(a,i)?o[a]:n}return e}function Mo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var wo=Fo(tr),Do=mt||function(e,t){return dt.setTimeout(e,t)},Lo=Fo(nr);function ko(e,t,n){var i=t+"";return Lo(e,function(e,t){var n=t.length;if(!n)return e;var i=n-1;return t[i]=(n>1?"& ":"")+t[i],t=t.join(n>2?", ":" "),e.replace(se,"{\n/* [wrapped with "+t+"] */\n")}(i,function(e,t){return At(g,(function(n){var i="_."+n[0];t&n[1]&&!Pt(e,i)&&e.push(i)})),e.sort()}(function(e){var t=e.match(ce);return t?t[1].split(le):[]}(i),n)))}function Fo(e){var t=0,i=0;return function(){var r=En(),o=16-(r-i);if(i=r,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(n,arguments)}}function xo(e,t){var i=-1,r=e.length,o=r-1;for(t=t===n?r:t;++i<t;){var a=Yi(i,o),s=e[a];e[a]=e[i],e[i]=s}return e.length=t,e}var Uo=function(e){var t=Fa(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(te,(function(e,n,i,r){t.push(i?r.replace(de,"$1"):n||e)})),t}));function jo(e){if("string"==typeof e||us(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Bo(e){if(null!=e){try{return Fe.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Ho(e){if(e instanceof qn)return e.clone();var t=new Wn(e.__wrapped__,e.__chain__);return t.__actions__=Nr(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Go=Qi((function(e,t){return Ya(e)?pi(e,Si(t,1,Ya,!0)):[]})),Vo=Qi((function(e,t){var i=Xo(t);return Ya(i)&&(i=n),Ya(e)?pi(e,Si(t,1,Ya,!0),lo(i,2)):[]})),Wo=Qi((function(e,t){var i=Xo(t);return Ya(i)&&(i=n),Ya(e)?pi(e,Si(t,1,Ya,!0),n,i):[]}));function qo(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var r=null==n?0:ms(n);return r<0&&(r=yn(i+r,0)),Ut(e,lo(t,3),r)}function Ko(e,t,i){var r=null==e?0:e.length;if(!r)return-1;var o=r-1;return i!==n&&(o=ms(i),o=i<0?yn(r+o,0):_n(o,r-1)),Ut(e,lo(t,3),o,!0)}function zo(e){return(null==e?0:e.length)?Si(e,1):[]}function Jo(e){return e&&e.length?e[0]:n}var Yo=Qi((function(e){var t=Mt(e,Sr);return t.length&&t[0]===e[0]?Ni(t):[]})),$o=Qi((function(e){var t=Xo(e),i=Mt(e,Sr);return t===Xo(i)?t=n:i.pop(),i.length&&i[0]===e[0]?Ni(i,lo(t,2)):[]})),Qo=Qi((function(e){var t=Xo(e),i=Mt(e,Sr);return(t="function"==typeof t?t:n)&&i.pop(),i.length&&i[0]===e[0]?Ni(i,n,t):[]}));function Xo(e){var t=null==e?0:e.length;return t?e[t-1]:n}var Zo=Qi(ea);function ea(e,t){return e&&e.length&&t&&t.length?zi(e,t):e}var ta=io((function(e,t){var n=null==e?0:e.length,i=si(e,t);return Ji(e,Mt(t,(function(e){return _o(e,n)?+e:e})).sort(Rr)),i}));function na(e){return null==e?e:In.call(e)}var ia=Qi((function(e){return dr(Si(e,1,Ya,!0))})),ra=Qi((function(e){var t=Xo(e);return Ya(t)&&(t=n),dr(Si(e,1,Ya,!0),lo(t,2))})),oa=Qi((function(e){var t=Xo(e);return t="function"==typeof t?t:n,dr(Si(e,1,Ya,!0),n,t)}));function aa(e){if(!e||!e.length)return[];var t=0;return e=Ot(e,(function(e){if(Ya(e))return t=yn(e.length,t),!0})),zt(t,(function(t){return Mt(e,Vt(t))}))}function sa(e,t){if(!e||!e.length)return[];var i=aa(e);return null==t?i:Mt(i,(function(e){return Ct(t,n,e)}))}var ca=Qi((function(e,t){return Ya(e)?pi(e,t):[]})),la=Qi((function(e){return mr(Ot(e,Ya))})),ua=Qi((function(e){var t=Xo(e);return Ya(t)&&(t=n),mr(Ot(e,Ya),lo(t,2))})),da=Qi((function(e){var t=Xo(e);return t="function"==typeof t?t:n,mr(Ot(e,Ya),n,t)})),pa=Qi(aa);var fa=Qi((function(e){var t=e.length,i=t>1?e[t-1]:n;return i="function"==typeof i?(e.pop(),i):n,sa(e,i)}));function ha(e){var t=Hn(e);return t.__chain__=!0,t}function ga(e,t){return t(e)}var ma=io((function(e){var t=e.length,i=t?e[0]:0,r=this.__wrapped__,o=function(t){return si(t,e)};return!(t>1||this.__actions__.length)&&r instanceof qn&&_o(i)?((r=r.slice(i,+i+(t?1:0))).__actions__.push({func:ga,args:[o],thisArg:n}),new Wn(r,this.__chain__).thru((function(e){return t&&!e.length&&e.push(n),e}))):this.thru(o)}));var va=wr((function(e,t,n){xe.call(e,n)?++e[n]:ai(e,n,1)}));var Sa=jr(qo),ya=jr(Ko);function _a(e,t){return(Ka(e)?At:fi)(e,lo(t,3))}function Ea(e,t){return(Ka(e)?bt:hi)(e,lo(t,3))}var Ta=wr((function(e,t,n){xe.call(e,n)?e[n].push(t):ai(e,n,[t])}));var Ca=Qi((function(e,t,n){var i=-1,r="function"==typeof t,o=Ja(e)?Ce(e.length):[];return fi(e,(function(e){o[++i]=r?Ct(t,e,n):Mi(e,t,n)})),o})),Ia=wr((function(e,t,n){ai(e,n,t)}));function Aa(e,t){return(Ka(e)?Mt:Bi)(e,lo(t,3))}var ba=wr((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));var Ra=Qi((function(e,t){if(null==e)return[];var n=t.length;return n>1&&Eo(e,t[0],t[1])?t=[]:n>2&&Eo(t[0],t[1],t[2])&&(t=[t[0]]),qi(e,Si(t,1),[])})),Oa=gt||function(){return dt.Date.now()};function Pa(e,t,i){return t=i?n:t,t=e&&null==t?e.length:t,Xr(e,l,n,n,n,n,t)}function Na(e,t){var r;if("function"!=typeof t)throw new Me(i);return e=ms(e),function(){return--e>0&&(r=t.apply(this,arguments)),e<=1&&(t=n),r}}var Ma=Qi((function(e,t,n){var i=1;if(n.length){var r=sn(n,co(Ma));i|=s}return Xr(e,i,t,n,r)})),wa=Qi((function(e,t,n){var i=3;if(n.length){var r=sn(n,co(wa));i|=s}return Xr(t,i,e,n,r)}));function Da(e,t,r){var o,a,s,c,l,u,d=0,p=!1,f=!1,h=!0;if("function"!=typeof e)throw new Me(i);function g(t){var i=o,r=a;return o=a=n,d=t,c=e.apply(r,i)}function m(e){return d=e,l=Do(S,t),p?g(e):c}function v(e){var i=e-u;return u===n||i>=t||i<0||f&&e-d>=s}function S(){var e=Oa();if(v(e))return y(e);l=Do(S,function(e){var n=t-(e-u);return f?_n(n,s-(e-d)):n}(e))}function y(e){return l=n,h&&o?g(e):(o=a=n,c)}function _(){var e=Oa(),i=v(e);if(o=arguments,a=this,u=e,i){if(l===n)return m(u);if(f)return Cr(l),l=Do(S,t),g(u)}return l===n&&(l=Do(S,t)),c}return t=Ss(t)||0,ns(r)&&(p=!!r.leading,s=(f="maxWait"in r)?yn(Ss(r.maxWait)||0,t):s,h="trailing"in r?!!r.trailing:h),_.cancel=function(){l!==n&&Cr(l),d=0,o=u=a=l=n},_.flush=function(){return l===n?c:y(Oa())},_}var La=Qi((function(e,t){return di(e,1,t)})),ka=Qi((function(e,t,n){return di(e,Ss(t)||0,n)}));function Fa(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Me(i);var n=function(){var i=arguments,r=t?t.apply(this,i):i[0],o=n.cache;if(o.has(r))return o.get(r);var a=e.apply(this,i);return n.cache=o.set(r,a)||o,a};return n.cache=new(Fa.Cache||Jn),n}function xa(e){if("function"!=typeof e)throw new Me(i);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Fa.Cache=Jn;var Ua=Er((function(e,t){var n=(t=1==t.length&&Ka(t[0])?Mt(t[0],Jt(lo())):Mt(Si(t,1),Jt(lo()))).length;return Qi((function(i){for(var r=-1,o=_n(i.length,n);++r<o;)i[r]=t[r].call(this,i[r]);return Ct(e,this,i)}))})),ja=Qi((function(e,t){var i=sn(t,co(ja));return Xr(e,s,n,t,i)})),Ba=Qi((function(e,t){var i=sn(t,co(Ba));return Xr(e,c,n,t,i)})),Ha=io((function(e,t){return Xr(e,u,n,n,n,t)}));function Ga(e,t){return e===t||e!=e&&t!=t}var Va=zr(Ri),Wa=zr((function(e,t){return e>=t})),qa=wi(function(){return arguments}())?wi:function(e){return is(e)&&xe.call(e,"callee")&&!Xe.call(e,"callee")},Ka=Ce.isArray,za=vt?Jt(vt):function(e){return is(e)&&bi(e)==w};function Ja(e){return null!=e&&ts(e.length)&&!Za(e)}function Ya(e){return is(e)&&Ja(e)}var $a=gn||Sc,Qa=St?Jt(St):function(e){return is(e)&&bi(e)==y};function Xa(e){if(!is(e))return!1;var t=bi(e);return t==_||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!as(e)}function Za(e){if(!ns(e))return!1;var t=bi(e);return t==E||t==T||"[object AsyncFunction]"==t||"[object Proxy]"==t}function es(e){return"number"==typeof e&&e==ms(e)}function ts(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=p}function ns(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function is(e){return null!=e&&"object"==typeof e}var rs=yt?Jt(yt):function(e){return is(e)&&mo(e)==C};function os(e){return"number"==typeof e||is(e)&&bi(e)==I}function as(e){if(!is(e)||bi(e)!=A)return!1;var t=Je(e);if(null===t)return!0;var n=xe.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Fe.call(n)==He}var ss=_t?Jt(_t):function(e){return is(e)&&bi(e)==R};var cs=Et?Jt(Et):function(e){return is(e)&&mo(e)==O};function ls(e){return"string"==typeof e||!Ka(e)&&is(e)&&bi(e)==P}function us(e){return"symbol"==typeof e||is(e)&&bi(e)==N}var ds=Tt?Jt(Tt):function(e){return is(e)&&ts(e.length)&&!!rt[bi(e)]};var ps=zr(ji),fs=zr((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Ja(e))return ls(e)?dn(e):Nr(e);if(lt&&e[lt])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[lt]());var t=mo(e);return(t==C?on:t==O?cn:Gs)(e)}function gs(e){return e?(e=Ss(e))===d||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ms(e){var t=gs(e),n=t%1;return t==t?n?t-n:t:0}function vs(e){return e?ci(ms(e),0,h):0}function Ss(e){if("number"==typeof e)return e;if(us(e))return f;if(ns(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ns(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(re,"");var n=ge.test(e);return n||ve.test(e)?ct(e.slice(2),n?2:8):he.test(e)?f:+e}function ys(e){return Mr(e,Ls(e))}function _s(e){return null==e?"":ur(e)}var Es=Dr((function(e,t){if(Ao(t)||Ja(t))Mr(t,Ds(t),e);else for(var n in t)xe.call(t,n)&&ni(e,n,t[n])})),Ts=Dr((function(e,t){Mr(t,Ls(t),e)})),Cs=Dr((function(e,t,n,i){Mr(t,Ls(t),e,i)})),Is=Dr((function(e,t,n,i){Mr(t,Ds(t),e,i)})),As=io(si);var bs=Qi((function(e,t){e=Oe(e);var i=-1,r=t.length,o=r>2?t[2]:n;for(o&&Eo(t[0],t[1],o)&&(r=1);++i<r;)for(var a=t[i],s=Ls(a),c=-1,l=s.length;++c<l;){var u=s[c],d=e[u];(d===n||Ga(d,Le[u])&&!xe.call(e,u))&&(e[u]=a[u])}return e})),Rs=Qi((function(e){return e.push(n,eo),Ct(Fs,n,e)}));function Os(e,t,i){var r=null==e?n:Ii(e,t);return r===n?i:r}function Ps(e,t){return null!=e&&vo(e,t,Pi)}var Ns=Gr((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Be.call(t)),e[t]=n}),nc(oc)),Ms=Gr((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Be.call(t)),xe.call(e,t)?e[t].push(n):e[t]=[n]}),lo),ws=Qi(Mi);function Ds(e){return Ja(e)?Qn(e):xi(e)}function Ls(e){return Ja(e)?Qn(e,!0):Ui(e)}var ks=Dr((function(e,t,n){Vi(e,t,n)})),Fs=Dr((function(e,t,n,i){Vi(e,t,n,i)})),xs=io((function(e,t){var n={};if(null==e)return n;var i=!1;t=Mt(t,(function(t){return t=_r(t,e),i||(i=t.length>1),t})),Mr(e,oo(e),n),i&&(n=li(n,7,to));for(var r=t.length;r--;)pr(n,t[r]);return n}));var Us=io((function(e,t){return null==e?{}:function(e,t){return Ki(e,t,(function(t,n){return Ps(e,n)}))}(e,t)}));function js(e,t){if(null==e)return{};var n=Mt(oo(e),(function(e){return[e]}));return t=lo(t),Ki(e,n,(function(e,n){return t(e,n[0])}))}var Bs=Qr(Ds),Hs=Qr(Ls);function Gs(e){return null==e?[]:Yt(e,Ds(e))}var Vs=xr((function(e,t,n){return t=t.toLowerCase(),e+(n?Ws(t):t)}));function Ws(e){return Xs(_s(e).toLowerCase())}function qs(e){return(e=_s(e))&&e.replace(ye,en).replace(Qe,"")}var Ks=xr((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),zs=xr((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Js=Fr("toLowerCase");var Ys=xr((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));var $s=xr((function(e,t,n){return e+(n?" ":"")+Xs(t)}));var Qs=xr((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Xs=Fr("toUpperCase");function Zs(e,t,i){return e=_s(e),(t=i?n:t)===n?function(e){return tt.test(e)}(e)?function(e){return e.match(Ze)||[]}(e):function(e){return e.match(ue)||[]}(e):e.match(t)||[]}var ec=Qi((function(e,t){try{return Ct(e,n,t)}catch(e){return Xa(e)?e:new Ae(e)}})),tc=io((function(e,t){return At(t,(function(t){t=jo(t),ai(e,t,Ma(e[t],e))})),e}));function nc(e){return function(){return e}}var ic=Br(),rc=Br(!0);function oc(e){return e}function ac(e){return Fi("function"==typeof e?e:li(e,1))}var sc=Qi((function(e,t){return function(n){return Mi(n,e,t)}})),cc=Qi((function(e,t){return function(n){return Mi(e,n,t)}}));function lc(e,t,n){var i=Ds(t),r=Ci(t,i);null!=n||ns(t)&&(r.length||!i.length)||(n=t,t=e,e=this,r=Ci(t,Ds(t)));var o=!(ns(n)&&"chain"in n&&!n.chain),a=Za(e);return At(r,(function(n){var i=t[n];e[n]=i,a&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__),r=n.__actions__=Nr(this.__actions__);return r.push({func:i,args:arguments,thisArg:e}),n.__chain__=t,n}return i.apply(e,wt([this.value()],arguments))})})),e}function uc(){}var dc=Wr(Mt),pc=Wr(Rt),fc=Wr(kt);function hc(e){return To(e)?Vt(jo(e)):function(e){return function(t){return Ii(t,e)}}(e)}var gc=Kr(),mc=Kr(!0);function vc(){return[]}function Sc(){return!1}var yc=Vr((function(e,t){return e+t}),0),_c=Yr("ceil"),Ec=Vr((function(e,t){return e/t}),1),Tc=Yr("floor");var Cc,Ic=Vr((function(e,t){return e*t}),1),Ac=Yr("round"),bc=Vr((function(e,t){return e-t}),0);return Hn.after=function(e,t){if("function"!=typeof t)throw new Me(i);return e=ms(e),function(){if(--e<1)return t.apply(this,arguments)}},Hn.ary=Pa,Hn.assign=Es,Hn.assignIn=Ts,Hn.assignInWith=Cs,Hn.assignWith=Is,Hn.at=As,Hn.before=Na,Hn.bind=Ma,Hn.bindAll=tc,Hn.bindKey=wa,Hn.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ka(e)?e:[e]},Hn.chain=ha,Hn.chunk=function(e,t,i){t=(i?Eo(e,t,i):t===n)?1:yn(ms(t),0);var r=null==e?0:e.length;if(!r||t<1)return[];for(var o=0,a=0,s=Ce(Ft(r/t));o<r;)s[a++]=rr(e,o,o+=t);return s},Hn.compact=function(e){for(var t=-1,n=null==e?0:e.length,i=0,r=[];++t<n;){var o=e[t];o&&(r[i++]=o)}return r},Hn.concat=function(){var e=arguments.length;if(!e)return[];for(var t=Ce(e-1),n=arguments[0],i=e;i--;)t[i-1]=arguments[i];return wt(Ka(n)?Nr(n):[n],Si(t,1))},Hn.cond=function(e){var t=null==e?0:e.length,n=lo();return e=t?Mt(e,(function(e){if("function"!=typeof e[1])throw new Me(i);return[n(e[0]),e[1]]})):[],Qi((function(n){for(var i=-1;++i<t;){var r=e[i];if(Ct(r[0],this,n))return Ct(r[1],this,n)}}))},Hn.conforms=function(e){return function(e){var t=Ds(e);return function(n){return ui(n,e,t)}}(li(e,1))},Hn.constant=nc,Hn.countBy=va,Hn.create=function(e,t){var n=Gn(e);return null==t?n:oi(n,t)},Hn.curry=function e(t,i,r){var o=Xr(t,8,n,n,n,n,n,i=r?n:i);return o.placeholder=e.placeholder,o},Hn.curryRight=function e(t,i,r){var o=Xr(t,a,n,n,n,n,n,i=r?n:i);return o.placeholder=e.placeholder,o},Hn.debounce=Da,Hn.defaults=bs,Hn.defaultsDeep=Rs,Hn.defer=La,Hn.delay=ka,Hn.difference=Go,Hn.differenceBy=Vo,Hn.differenceWith=Wo,Hn.drop=function(e,t,i){var r=null==e?0:e.length;return r?rr(e,(t=i||t===n?1:ms(t))<0?0:t,r):[]},Hn.dropRight=function(e,t,i){var r=null==e?0:e.length;return r?rr(e,0,(t=r-(t=i||t===n?1:ms(t)))<0?0:t):[]},Hn.dropRightWhile=function(e,t){return e&&e.length?hr(e,lo(t,3),!0,!0):[]},Hn.dropWhile=function(e,t){return e&&e.length?hr(e,lo(t,3),!0):[]},Hn.fill=function(e,t,i,r){var o=null==e?0:e.length;return o?(i&&"number"!=typeof i&&Eo(e,t,i)&&(i=0,r=o),function(e,t,i,r){var o=e.length;for((i=ms(i))<0&&(i=-i>o?0:o+i),(r=r===n||r>o?o:ms(r))<0&&(r+=o),r=i>r?0:vs(r);i<r;)e[i++]=t;return e}(e,t,i,r)):[]},Hn.filter=function(e,t){return(Ka(e)?Ot:vi)(e,lo(t,3))},Hn.flatMap=function(e,t){return Si(Aa(e,t),1)},Hn.flatMapDeep=function(e,t){return Si(Aa(e,t),d)},Hn.flatMapDepth=function(e,t,i){return i=i===n?1:ms(i),Si(Aa(e,t),i)},Hn.flatten=zo,Hn.flattenDeep=function(e){return(null==e?0:e.length)?Si(e,d):[]},Hn.flattenDepth=function(e,t){return(null==e?0:e.length)?Si(e,t=t===n?1:ms(t)):[]},Hn.flip=function(e){return Xr(e,512)},Hn.flow=ic,Hn.flowRight=rc,Hn.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,i={};++t<n;){var r=e[t];i[r[0]]=r[1]}return i},Hn.functions=function(e){return null==e?[]:Ci(e,Ds(e))},Hn.functionsIn=function(e){return null==e?[]:Ci(e,Ls(e))},Hn.groupBy=Ta,Hn.initial=function(e){return(null==e?0:e.length)?rr(e,0,-1):[]},Hn.intersection=Yo,Hn.intersectionBy=$o,Hn.intersectionWith=Qo,Hn.invert=Ns,Hn.invertBy=Ms,Hn.invokeMap=Ca,Hn.iteratee=ac,Hn.keyBy=Ia,Hn.keys=Ds,Hn.keysIn=Ls,Hn.map=Aa,Hn.mapKeys=function(e,t){var n={};return t=lo(t,3),Ei(e,(function(e,i,r){ai(n,t(e,i,r),e)})),n},Hn.mapValues=function(e,t){var n={};return t=lo(t,3),Ei(e,(function(e,i,r){ai(n,i,t(e,i,r))})),n},Hn.matches=function(e){return Hi(li(e,1))},Hn.matchesProperty=function(e,t){return Gi(e,li(t,1))},Hn.memoize=Fa,Hn.merge=ks,Hn.mergeWith=Fs,Hn.method=sc,Hn.methodOf=cc,Hn.mixin=lc,Hn.negate=xa,Hn.nthArg=function(e){return e=ms(e),Qi((function(t){return Wi(t,e)}))},Hn.omit=xs,Hn.omitBy=function(e,t){return js(e,xa(lo(t)))},Hn.once=function(e){return Na(2,e)},Hn.orderBy=function(e,t,i,r){return null==e?[]:(Ka(t)||(t=null==t?[]:[t]),Ka(i=r?n:i)||(i=null==i?[]:[i]),qi(e,t,i))},Hn.over=dc,Hn.overArgs=Ua,Hn.overEvery=pc,Hn.overSome=fc,Hn.partial=ja,Hn.partialRight=Ba,Hn.partition=ba,Hn.pick=Us,Hn.pickBy=js,Hn.property=hc,Hn.propertyOf=function(e){return function(t){return null==e?n:Ii(e,t)}},Hn.pull=Zo,Hn.pullAll=ea,Hn.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?zi(e,t,lo(n,2)):e},Hn.pullAllWith=function(e,t,i){return e&&e.length&&t&&t.length?zi(e,t,n,i):e},Hn.pullAt=ta,Hn.range=gc,Hn.rangeRight=mc,Hn.rearg=Ha,Hn.reject=function(e,t){return(Ka(e)?Ot:vi)(e,xa(lo(t,3)))},Hn.remove=function(e,t){var n=[];if(!e||!e.length)return n;var i=-1,r=[],o=e.length;for(t=lo(t,3);++i<o;){var a=e[i];t(a,i,e)&&(n.push(a),r.push(i))}return Ji(e,r),n},Hn.rest=function(e,t){if("function"!=typeof e)throw new Me(i);return Qi(e,t=t===n?t:ms(t))},Hn.reverse=na,Hn.sampleSize=function(e,t,i){return t=(i?Eo(e,t,i):t===n)?1:ms(t),(Ka(e)?Zn:Zi)(e,t)},Hn.set=function(e,t,n){return null==e?e:er(e,t,n)},Hn.setWith=function(e,t,i,r){return r="function"==typeof r?r:n,null==e?e:er(e,t,i,r)},Hn.shuffle=function(e){return(Ka(e)?ei:ir)(e)},Hn.slice=function(e,t,i){var r=null==e?0:e.length;return r?(i&&"number"!=typeof i&&Eo(e,t,i)?(t=0,i=r):(t=null==t?0:ms(t),i=i===n?r:ms(i)),rr(e,t,i)):[]},Hn.sortBy=Ra,Hn.sortedUniq=function(e){return e&&e.length?cr(e):[]},Hn.sortedUniqBy=function(e,t){return e&&e.length?cr(e,lo(t,2)):[]},Hn.split=function(e,t,i){return i&&"number"!=typeof i&&Eo(e,t,i)&&(t=i=n),(i=i===n?h:i>>>0)?(e=_s(e))&&("string"==typeof t||null!=t&&!ss(t))&&!(t=ur(t))&&rn(e)?Tr(dn(e),0,i):e.split(t,i):[]},Hn.spread=function(e,t){if("function"!=typeof e)throw new Me(i);return t=null==t?0:yn(ms(t),0),Qi((function(n){var i=n[t],r=Tr(n,0,t);return i&&wt(r,i),Ct(e,this,r)}))},Hn.tail=function(e){var t=null==e?0:e.length;return t?rr(e,1,t):[]},Hn.take=function(e,t,i){return e&&e.length?rr(e,0,(t=i||t===n?1:ms(t))<0?0:t):[]},Hn.takeRight=function(e,t,i){var r=null==e?0:e.length;return r?rr(e,(t=r-(t=i||t===n?1:ms(t)))<0?0:t,r):[]},Hn.takeRightWhile=function(e,t){return e&&e.length?hr(e,lo(t,3),!1,!0):[]},Hn.takeWhile=function(e,t){return e&&e.length?hr(e,lo(t,3)):[]},Hn.tap=function(e,t){return t(e),e},Hn.throttle=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new Me(i);return ns(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Da(e,t,{leading:r,maxWait:t,trailing:o})},Hn.thru=ga,Hn.toArray=hs,Hn.toPairs=Bs,Hn.toPairsIn=Hs,Hn.toPath=function(e){return Ka(e)?Mt(e,jo):us(e)?[e]:Nr(Uo(_s(e)))},Hn.toPlainObject=ys,Hn.transform=function(e,t,n){var i=Ka(e),r=i||$a(e)||ds(e);if(t=lo(t,4),null==n){var o=e&&e.constructor;n=r?i?new o:[]:ns(e)&&Za(o)?Gn(Je(e)):{}}return(r?At:Ei)(e,(function(e,i,r){return t(n,e,i,r)})),n},Hn.unary=function(e){return Pa(e,1)},Hn.union=ia,Hn.unionBy=ra,Hn.unionWith=oa,Hn.uniq=function(e){return e&&e.length?dr(e):[]},Hn.uniqBy=function(e,t){return e&&e.length?dr(e,lo(t,2)):[]},Hn.uniqWith=function(e,t){return t="function"==typeof t?t:n,e&&e.length?dr(e,n,t):[]},Hn.unset=function(e,t){return null==e||pr(e,t)},Hn.unzip=aa,Hn.unzipWith=sa,Hn.update=function(e,t,n){return null==e?e:fr(e,t,yr(n))},Hn.updateWith=function(e,t,i,r){return r="function"==typeof r?r:n,null==e?e:fr(e,t,yr(i),r)},Hn.values=Gs,Hn.valuesIn=function(e){return null==e?[]:Yt(e,Ls(e))},Hn.without=ca,Hn.words=Zs,Hn.wrap=function(e,t){return ja(yr(t),e)},Hn.xor=la,Hn.xorBy=ua,Hn.xorWith=da,Hn.zip=pa,Hn.zipObject=function(e,t){return vr(e||[],t||[],ni)},Hn.zipObjectDeep=function(e,t){return vr(e||[],t||[],er)},Hn.zipWith=fa,Hn.entries=Bs,Hn.entriesIn=Hs,Hn.extend=Ts,Hn.extendWith=Cs,lc(Hn,Hn),Hn.add=yc,Hn.attempt=ec,Hn.camelCase=Vs,Hn.capitalize=Ws,Hn.ceil=_c,Hn.clamp=function(e,t,i){return i===n&&(i=t,t=n),i!==n&&(i=(i=Ss(i))==i?i:0),t!==n&&(t=(t=Ss(t))==t?t:0),ci(Ss(e),t,i)},Hn.clone=function(e){return li(e,4)},Hn.cloneDeep=function(e){return li(e,5)},Hn.cloneDeepWith=function(e,t){return li(e,5,t="function"==typeof t?t:n)},Hn.cloneWith=function(e,t){return li(e,4,t="function"==typeof t?t:n)},Hn.conformsTo=function(e,t){return null==t||ui(e,t,Ds(t))},Hn.deburr=qs,Hn.defaultTo=function(e,t){return null==e||e!=e?t:e},Hn.divide=Ec,Hn.endsWith=function(e,t,i){e=_s(e),t=ur(t);var r=e.length,o=i=i===n?r:ci(ms(i),0,r);return(i-=t.length)>=0&&e.slice(i,o)==t},Hn.eq=Ga,Hn.escape=function(e){return(e=_s(e))&&Y.test(e)?e.replace(z,tn):e},Hn.escapeRegExp=function(e){return(e=_s(e))&&ie.test(e)?e.replace(ne,"\\$&"):e},Hn.every=function(e,t,i){var r=Ka(e)?Rt:gi;return i&&Eo(e,t,i)&&(t=n),r(e,lo(t,3))},Hn.find=Sa,Hn.findIndex=qo,Hn.findKey=function(e,t){return xt(e,lo(t,3),Ei)},Hn.findLast=ya,Hn.findLastIndex=Ko,Hn.findLastKey=function(e,t){return xt(e,lo(t,3),Ti)},Hn.floor=Tc,Hn.forEach=_a,Hn.forEachRight=Ea,Hn.forIn=function(e,t){return null==e?e:yi(e,lo(t,3),Ls)},Hn.forInRight=function(e,t){return null==e?e:_i(e,lo(t,3),Ls)},Hn.forOwn=function(e,t){return e&&Ei(e,lo(t,3))},Hn.forOwnRight=function(e,t){return e&&Ti(e,lo(t,3))},Hn.get=Os,Hn.gt=Va,Hn.gte=Wa,Hn.has=function(e,t){return null!=e&&vo(e,t,Oi)},Hn.hasIn=Ps,Hn.head=Jo,Hn.identity=oc,Hn.includes=function(e,t,n,i){e=Ja(e)?e:Gs(e),n=n&&!i?ms(n):0;var r=e.length;return n<0&&(n=yn(r+n,0)),ls(e)?n<=r&&e.indexOf(t,n)>-1:!!r&&jt(e,t,n)>-1},Hn.indexOf=function(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var r=null==n?0:ms(n);return r<0&&(r=yn(i+r,0)),jt(e,t,r)},Hn.inRange=function(e,t,i){return t=gs(t),i===n?(i=t,t=0):i=gs(i),function(e,t,n){return e>=_n(t,n)&&e<yn(t,n)}(e=Ss(e),t,i)},Hn.invoke=ws,Hn.isArguments=qa,Hn.isArray=Ka,Hn.isArrayBuffer=za,Hn.isArrayLike=Ja,Hn.isArrayLikeObject=Ya,Hn.isBoolean=function(e){return!0===e||!1===e||is(e)&&bi(e)==S},Hn.isBuffer=$a,Hn.isDate=Qa,Hn.isElement=function(e){return is(e)&&1===e.nodeType&&!as(e)},Hn.isEmpty=function(e){if(null==e)return!0;if(Ja(e)&&(Ka(e)||"string"==typeof e||"function"==typeof e.splice||$a(e)||ds(e)||qa(e)))return!e.length;var t=mo(e);if(t==C||t==O)return!e.size;if(Ao(e))return!xi(e).length;for(var n in e)if(xe.call(e,n))return!1;return!0},Hn.isEqual=function(e,t){return Di(e,t)},Hn.isEqualWith=function(e,t,i){var r=(i="function"==typeof i?i:n)?i(e,t):n;return r===n?Di(e,t,n,i):!!r},Hn.isError=Xa,Hn.isFinite=function(e){return"number"==typeof e&&mn(e)},Hn.isFunction=Za,Hn.isInteger=es,Hn.isLength=ts,Hn.isMap=rs,Hn.isMatch=function(e,t){return e===t||Li(e,t,po(t))},Hn.isMatchWith=function(e,t,i){return i="function"==typeof i?i:n,Li(e,t,po(t),i)},Hn.isNaN=function(e){return os(e)&&e!=+e},Hn.isNative=function(e){if(Io(e))throw new Ae("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return ki(e)},Hn.isNil=function(e){return null==e},Hn.isNull=function(e){return null===e},Hn.isNumber=os,Hn.isObject=ns,Hn.isObjectLike=is,Hn.isPlainObject=as,Hn.isRegExp=ss,Hn.isSafeInteger=function(e){return es(e)&&e>=-9007199254740991&&e<=p},Hn.isSet=cs,Hn.isString=ls,Hn.isSymbol=us,Hn.isTypedArray=ds,Hn.isUndefined=function(e){return e===n},Hn.isWeakMap=function(e){return is(e)&&mo(e)==M},Hn.isWeakSet=function(e){return is(e)&&"[object WeakSet]"==bi(e)},Hn.join=function(e,t){return null==e?"":vn.call(e,t)},Hn.kebabCase=Ks,Hn.last=Xo,Hn.lastIndexOf=function(e,t,i){var r=null==e?0:e.length;if(!r)return-1;var o=r;return i!==n&&(o=(o=ms(i))<0?yn(r+o,0):_n(o,r-1)),t==t?function(e,t,n){for(var i=n+1;i--;)if(e[i]===t)return i;return i}(e,t,o):Ut(e,Ht,o,!0)},Hn.lowerCase=zs,Hn.lowerFirst=Js,Hn.lt=ps,Hn.lte=fs,Hn.max=function(e){return e&&e.length?mi(e,oc,Ri):n},Hn.maxBy=function(e,t){return e&&e.length?mi(e,lo(t,2),Ri):n},Hn.mean=function(e){return Gt(e,oc)},Hn.meanBy=function(e,t){return Gt(e,lo(t,2))},Hn.min=function(e){return e&&e.length?mi(e,oc,ji):n},Hn.minBy=function(e,t){return e&&e.length?mi(e,lo(t,2),ji):n},Hn.stubArray=vc,Hn.stubFalse=Sc,Hn.stubObject=function(){return{}},Hn.stubString=function(){return""},Hn.stubTrue=function(){return!0},Hn.multiply=Ic,Hn.nth=function(e,t){return e&&e.length?Wi(e,ms(t)):n},Hn.noConflict=function(){return dt._===this&&(dt._=Ge),this},Hn.noop=uc,Hn.now=Oa,Hn.pad=function(e,t,n){e=_s(e);var i=(t=ms(t))?un(e):0;if(!t||i>=t)return e;var r=(t-i)/2;return qr(Wt(r),n)+e+qr(Ft(r),n)},Hn.padEnd=function(e,t,n){e=_s(e);var i=(t=ms(t))?un(e):0;return t&&i<t?e+qr(t-i,n):e},Hn.padStart=function(e,t,n){e=_s(e);var i=(t=ms(t))?un(e):0;return t&&i<t?qr(t-i,n)+e:e},Hn.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),Tn(_s(e).replace(oe,""),t||0)},Hn.random=function(e,t,i){if(i&&"boolean"!=typeof i&&Eo(e,t,i)&&(t=i=n),i===n&&("boolean"==typeof t?(i=t,t=n):"boolean"==typeof e&&(i=e,e=n)),e===n&&t===n?(e=0,t=1):(e=gs(e),t===n?(t=e,e=0):t=gs(t)),e>t){var r=e;e=t,t=r}if(i||e%1||t%1){var o=Cn();return _n(e+o*(t-e+st("1e-"+((o+"").length-1))),t)}return Yi(e,t)},Hn.reduce=function(e,t,n){var i=Ka(e)?Dt:qt,r=arguments.length<3;return i(e,lo(t,4),n,r,fi)},Hn.reduceRight=function(e,t,n){var i=Ka(e)?Lt:qt,r=arguments.length<3;return i(e,lo(t,4),n,r,hi)},Hn.repeat=function(e,t,i){return t=(i?Eo(e,t,i):t===n)?1:ms(t),$i(_s(e),t)},Hn.replace=function(){var e=arguments,t=_s(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Hn.result=function(e,t,i){var r=-1,o=(t=_r(t,e)).length;for(o||(o=1,e=n);++r<o;){var a=null==e?n:e[jo(t[r])];a===n&&(r=o,a=i),e=Za(a)?a.call(e):a}return e},Hn.round=Ac,Hn.runInContext=e,Hn.sample=function(e){return(Ka(e)?Xn:Xi)(e)},Hn.size=function(e){if(null==e)return 0;if(Ja(e))return ls(e)?un(e):e.length;var t=mo(e);return t==C||t==O?e.size:xi(e).length},Hn.snakeCase=Ys,Hn.some=function(e,t,i){var r=Ka(e)?kt:or;return i&&Eo(e,t,i)&&(t=n),r(e,lo(t,3))},Hn.sortedIndex=function(e,t){return ar(e,t)},Hn.sortedIndexBy=function(e,t,n){return sr(e,t,lo(n,2))},Hn.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var i=ar(e,t);if(i<n&&Ga(e[i],t))return i}return-1},Hn.sortedLastIndex=function(e,t){return ar(e,t,!0)},Hn.sortedLastIndexBy=function(e,t,n){return sr(e,t,lo(n,2),!0)},Hn.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var n=ar(e,t,!0)-1;if(Ga(e[n],t))return n}return-1},Hn.startCase=$s,Hn.startsWith=function(e,t,n){return e=_s(e),n=null==n?0:ci(ms(n),0,e.length),t=ur(t),e.slice(n,n+t.length)==t},Hn.subtract=bc,Hn.sum=function(e){return e&&e.length?Kt(e,oc):0},Hn.sumBy=function(e,t){return e&&e.length?Kt(e,lo(t,2)):0},Hn.template=function(e,t,i){var r=Hn.templateSettings;i&&Eo(e,t,i)&&(t=n),e=_s(e),t=Cs({},t,r,Zr);var o,a,s=Cs({},t.imports,r.imports,Zr),c=Ds(s),l=Yt(s,c),u=0,d=t.interpolate||_e,p="__p += '",f=Pe((t.escape||_e).source+"|"+d.source+"|"+(d===X?pe:_e).source+"|"+(t.evaluate||_e).source+"|$","g"),h="//# sourceURL="+(xe.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++it+"]")+"\n";e.replace(f,(function(t,n,i,r,s,c){return i||(i=r),p+=e.slice(u,c).replace(Ee,nn),n&&(o=!0,p+="' +\n__e("+n+") +\n'"),s&&(a=!0,p+="';\n"+s+";\n__p += '"),i&&(p+="' +\n((__t = ("+i+")) == null ? '' : __t) +\n'"),u=c+t.length,t})),p+="';\n";var g=xe.call(t,"variable")&&t.variable;g||(p="with (obj) {\n"+p+"\n}\n"),p=(a?p.replace(V,""):p).replace(W,"$1").replace(q,"$1;"),p="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var m=ec((function(){return be(c,h+"return "+p).apply(n,l)}));if(m.source=p,Xa(m))throw m;return m},Hn.times=function(e,t){if((e=ms(e))<1||e>p)return[];var n=h,i=_n(e,h);t=lo(t),e-=h;for(var r=zt(i,t);++n<e;)t(n);return r},Hn.toFinite=gs,Hn.toInteger=ms,Hn.toLength=vs,Hn.toLower=function(e){return _s(e).toLowerCase()},Hn.toNumber=Ss,Hn.toSafeInteger=function(e){return e?ci(ms(e),-9007199254740991,p):0===e?e:0},Hn.toString=_s,Hn.toUpper=function(e){return _s(e).toUpperCase()},Hn.trim=function(e,t,i){if((e=_s(e))&&(i||t===n))return e.replace(re,"");if(!e||!(t=ur(t)))return e;var r=dn(e),o=dn(t);return Tr(r,Qt(r,o),Xt(r,o)+1).join("")},Hn.trimEnd=function(e,t,i){if((e=_s(e))&&(i||t===n))return e.replace(ae,"");if(!e||!(t=ur(t)))return e;var r=dn(e);return Tr(r,0,Xt(r,dn(t))+1).join("")},Hn.trimStart=function(e,t,i){if((e=_s(e))&&(i||t===n))return e.replace(oe,"");if(!e||!(t=ur(t)))return e;var r=dn(e);return Tr(r,Qt(r,dn(t))).join("")},Hn.truncate=function(e,t){var i=30,r="...";if(ns(t)){var o="separator"in t?t.separator:o;i="length"in t?ms(t.length):i,r="omission"in t?ur(t.omission):r}var a=(e=_s(e)).length;if(rn(e)){var s=dn(e);a=s.length}if(i>=a)return e;var c=i-un(r);if(c<1)return r;var l=s?Tr(s,0,c).join(""):e.slice(0,c);if(o===n)return l+r;if(s&&(c+=l.length-c),ss(o)){if(e.slice(c).search(o)){var u,d=l;for(o.global||(o=Pe(o.source,_s(fe.exec(o))+"g")),o.lastIndex=0;u=o.exec(d);)var p=u.index;l=l.slice(0,p===n?c:p)}}else if(e.indexOf(ur(o),c)!=c){var f=l.lastIndexOf(o);f>-1&&(l=l.slice(0,f))}return l+r},Hn.unescape=function(e){return(e=_s(e))&&J.test(e)?e.replace(K,pn):e},Hn.uniqueId=function(e){var t=++Ue;return _s(e)+t},Hn.upperCase=Qs,Hn.upperFirst=Xs,Hn.each=_a,Hn.eachRight=Ea,Hn.first=Jo,lc(Hn,(Cc={},Ei(Hn,(function(e,t){xe.call(Hn.prototype,t)||(Cc[t]=e)})),Cc),{chain:!1}),Hn.VERSION="4.17.20",At(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Hn[e].placeholder=Hn})),At(["drop","take"],(function(e,t){qn.prototype[e]=function(i){i=i===n?1:yn(ms(i),0);var r=this.__filtered__&&!t?new qn(this):this.clone();return r.__filtered__?r.__takeCount__=_n(i,r.__takeCount__):r.__views__.push({size:_n(i,h),type:e+(r.__dir__<0?"Right":"")}),r},qn.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),At(["filter","map","takeWhile"],(function(e,t){var n=t+1,i=1==n||3==n;qn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:n}),t.__filtered__=t.__filtered__||i,t}})),At(["head","last"],(function(e,t){var n="take"+(t?"Right":"");qn.prototype[e]=function(){return this[n](1).value()[0]}})),At(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");qn.prototype[e]=function(){return this.__filtered__?new qn(this):this[n](1)}})),qn.prototype.compact=function(){return this.filter(oc)},qn.prototype.find=function(e){return this.filter(e).head()},qn.prototype.findLast=function(e){return this.reverse().find(e)},qn.prototype.invokeMap=Qi((function(e,t){return"function"==typeof e?new qn(this):this.map((function(n){return Mi(n,e,t)}))})),qn.prototype.reject=function(e){return this.filter(xa(lo(e)))},qn.prototype.slice=function(e,t){e=ms(e);var i=this;return i.__filtered__&&(e>0||t<0)?new qn(i):(e<0?i=i.takeRight(-e):e&&(i=i.drop(e)),t!==n&&(i=(t=ms(t))<0?i.dropRight(-t):i.take(t-e)),i)},qn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},qn.prototype.toArray=function(){return this.take(h)},Ei(qn.prototype,(function(e,t){var i=/^(?:filter|find|map|reject)|While$/.test(t),r=/^(?:head|last)$/.test(t),o=Hn[r?"take"+("last"==t?"Right":""):t],a=r||/^find/.test(t);o&&(Hn.prototype[t]=function(){var t=this.__wrapped__,s=r?[1]:arguments,c=t instanceof qn,l=s[0],u=c||Ka(t),d=function(e){var t=o.apply(Hn,wt([e],s));return r&&p?t[0]:t};u&&i&&"function"==typeof l&&1!=l.length&&(c=u=!1);var p=this.__chain__,f=!!this.__actions__.length,h=a&&!p,g=c&&!f;if(!a&&u){t=g?t:new qn(this);var m=e.apply(t,s);return m.__actions__.push({func:ga,args:[d],thisArg:n}),new Wn(m,p)}return h&&g?e.apply(this,s):(m=this.thru(d),h?r?m.value()[0]:m.value():m)})})),At(["pop","push","shift","sort","splice","unshift"],(function(e){var t=we[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|shift)$/.test(e);Hn.prototype[e]=function(){var e=arguments;if(i&&!this.__chain__){var r=this.value();return t.apply(Ka(r)?r:[],e)}return this[n]((function(n){return t.apply(Ka(n)?n:[],e)}))}})),Ei(qn.prototype,(function(e,t){var n=Hn[t];if(n){var i=n.name+"";xe.call(wn,i)||(wn[i]=[]),wn[i].push({name:t,func:n})}})),wn[Hr(n,2).name]=[{name:"wrapper",func:n}],qn.prototype.clone=function(){var e=new qn(this.__wrapped__);return e.__actions__=Nr(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Nr(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Nr(this.__views__),e},qn.prototype.reverse=function(){if(this.__filtered__){var e=new qn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},qn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Ka(e),i=t<0,r=n?e.length:0,o=function(e,t,n){var i=-1,r=n.length;for(;++i<r;){var o=n[i],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=_n(t,e+a);break;case"takeRight":e=yn(e,t-a)}}return{start:e,end:t}}(0,r,this.__views__),a=o.start,s=o.end,c=s-a,l=i?s:a-1,u=this.__iteratees__,d=u.length,p=0,f=_n(c,this.__takeCount__);if(!n||!i&&r==c&&f==c)return gr(e,this.__actions__);var h=[];e:for(;c--&&p<f;){for(var g=-1,m=e[l+=t];++g<d;){var v=u[g],S=v.iteratee,y=v.type,_=S(m);if(2==y)m=_;else if(!_){if(1==y)continue e;break e}}h[p++]=m}return h},Hn.prototype.at=ma,Hn.prototype.chain=function(){return ha(this)},Hn.prototype.commit=function(){return new Wn(this.value(),this.__chain__)},Hn.prototype.next=function(){this.__values__===n&&(this.__values__=hs(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?n:this.__values__[this.__index__++]}},Hn.prototype.plant=function(e){for(var t,i=this;i instanceof Vn;){var r=Ho(i);r.__index__=0,r.__values__=n,t?o.__wrapped__=r:t=r;var o=r;i=i.__wrapped__}return o.__wrapped__=e,t},Hn.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof qn){var t=e;return this.__actions__.length&&(t=new qn(this)),(t=t.reverse()).__actions__.push({func:ga,args:[na],thisArg:n}),new Wn(t,this.__chain__)}return this.thru(na)},Hn.prototype.toJSON=Hn.prototype.valueOf=Hn.prototype.value=function(){return gr(this.__wrapped__,this.__actions__)},Hn.prototype.first=Hn.prototype.head,lt&&(Hn.prototype[lt]=function(){return this}),Hn}();ft?((ft.exports=fn)._=fn,pt._=fn):dt._=fn}).call(commonjsGlobal)})),AufLog=createCommonjsModule((function(e,t){function n(e,t){var n=0;return e.replace(/%[dixs%]/g,(function(e){var i=0;if("%"!==e[i++])return"";var r=e[i++];return"%"===r?"%":"s"===r||"d"===r||"i"===r?t[n++]:"x"===r?t[n++].toString(16):e}))}
/*!
     *  AufLog.ts
     *  AUF
     *
     *  Created by Johan Blumenberg on 2016-12-29
     *  Copyright 2016 Microsoft. All rights reserved.
     *
     */
Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Trace=10]="Trace",e[e.Debug6=16]="Debug6",e[e.Debug5=18]="Debug5",e[e.Debug4=20]="Debug4",e[e.Debug3=30]="Debug3",e[e.Debug2=40]="Debug2",e[e.Debug1=50]="Debug1",e[e.Warning=60]="Warning",e[e.Error=70]="Error",e[e.Fatal=80]="Fatal",e[e.MetaData=90]="MetaData"}(t.LogLevel||(t.LogLevel={})),function(e){e[e.UseDefault=0]="UseDefault",e[e.Compress=1]="Compress",e[e.Disabled=2]="Disabled"}(t.LogFileCompression||(t.LogFileCompression={})),function(e){e[e.Raw=0]="Raw",e[e.Base64=1]="Base64"}(t.LogFileEncoding||(t.LogFileEncoding={})),function(e){e[e.Unencrypted=0]="Unencrypted",e[e.Encrypted=1]="Encrypted"}(t.LogFileEncryption||(t.LogFileEncryption={})),function(e){e[e.PEM=0]="PEM",e[e.DER=1]="DER",e[e.BER=2]="BER"}(t.CertStoreFormat||(t.CertStoreFormat={})),function(e){e[e.InsertFront=8]="InsertFront"}(t.AppenderFlags||(t.AppenderFlags={})),t.vsprintf=n,t.sprintf=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return n(e,t)}})),LogFactory_1=createCommonjsModule((function(e,t){
/*!
     *  LogFactory.ts
     *  AUF
     *
     *  Created by Johan Blumenberg on 2016-12-29
     *  Copyright 2016 Microsoft. All rights reserved.
     *
     */
var n,i,r=commonjsGlobal&&commonjsGlobal.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});function o(e){if(null===e)return-1;for(var t=0,n=e.length-1;n>=0;n--)t=37*t+e.charCodeAt(n)|0;var i="__auf_literal:";for(n=i.length-1;n>=0;n--)t=37*t+i.charCodeAt(n)|0;return t}Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Unsafe=0]="Unsafe",e[e.Safe=1]="Safe",e[e.Inherited_Unsafe=2]="Inherited_Unsafe",e[e.Inherited_Safe=3]="Inherited_Safe",e[e.Blacklisted_Unsafe=4]="Blacklisted_Unsafe"}(i||(i={}));var a,s=function(){function e(e,t){this._level=AufLog.LogLevel.Debug4,this._threshold=255,this._safe=i.Inherited_Unsafe,this._name=e,t&&(this._level=t.level(),this._safe=t.safe()?i.Inherited_Safe:i.Inherited_Unsafe,this._extendedInfo=t.extendedInfo())}return e.prototype.name=function(){return this._name},e.prototype.safe=function(){return this._safe===i.Safe||this._safe===i.Inherited_Safe},e.prototype.safety=function(){return this._safe},e.prototype.setSafety=function(e){this._safe=e},e.prototype.description=function(){return this._desc},e.prototype.setDescription=function(e){this._desc=e},e.prototype.level=function(){return this._level},e.prototype.setLevel=function(e){a.setLevel(this,e)},e.prototype._setLevel=function(e){this._level=e},e.prototype._setThreshold=function(e){this._threshold=e},e.prototype.isEnabled=function(e){return this._threshold<=e},e.prototype.setExtendedInfo=function(e){this._extendedInfo=e},e.prototype.extendedInfo=function(){return this._extendedInfo},e.prototype.trace=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.log.apply(a,[this,AufLog.LogLevel.Trace,o(e),e].concat(t))},e.prototype.debug6=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.log.apply(a,[this,AufLog.LogLevel.Debug6,o(e),e].concat(t))},e.prototype.debug5=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.log.apply(a,[this,AufLog.LogLevel.Debug5,o(e),e].concat(t))},e.prototype.debug4=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.log.apply(a,[this,AufLog.LogLevel.Debug4,o(e),e].concat(t))},e.prototype.debug3=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.log.apply(a,[this,AufLog.LogLevel.Debug3,o(e),e].concat(t))},e.prototype.debug2=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.log.apply(a,[this,AufLog.LogLevel.Debug2,o(e),e].concat(t))},e.prototype.debug1=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.log.apply(a,[this,AufLog.LogLevel.Debug1,o(e),e].concat(t))},e.prototype.warn=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.log.apply(a,[this,AufLog.LogLevel.Warning,o(e),e].concat(t))},e.prototype.error=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.log.apply(a,[this,AufLog.LogLevel.Error,o(e),e].concat(t))},e.prototype.fatal=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.log.apply(a,[this,AufLog.LogLevel.Fatal,o(e),e].concat(t))},e.prototype.meta=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.log.apply(a,[this,AufLog.LogLevel.MetaData,o(e),e].concat(t))},e}(),c=function(){function e(){}return e.instance=function(){return a},e.levelToString=function(e){return e<=AufLog.LogLevel.Trace?"TRACE":e<=AufLog.LogLevel.Debug6?"DEBUG6":e<=AufLog.LogLevel.Debug5?"DEBUG5":e<=AufLog.LogLevel.Debug4?"DEBUG4":e<=AufLog.LogLevel.Debug3?"DEBUG3":e<=AufLog.LogLevel.Debug2?"DEBUG2":e<=AufLog.LogLevel.Debug1?"DEBUG1":e<=AufLog.LogLevel.Warning?"WARN":e<=AufLog.LogLevel.Error?"ERROR":e<=AufLog.LogLevel.Fatal?"FATAL":(AufLog.LogLevel.MetaData,"META")},e.levelFromString=function(e){return this._levelFromString[e]||parseInt(e,10)},e}();function l(e,t){for(var n=t.name();n.length>0;){if(e[n])return e[n];var i=n.lastIndexOf(".");n=i<0?"":n.substr(0,i)}return e[""]?e[""]:AufLog.LogLevel.Debug4}function u(e,t){var n=255;return t.forEach((function(t){var i=255;t.appender.levels()?i=Math.min(i,l(t.appender.levels(),e)):t.appender.receiveAll()||(i=Math.min(i,e.level())),n=Math.min(n,i)})),n}function d(e,t,n){return!!e.appender.receiveAll()||(e.appender.levels()?n>=l(e.appender.levels(),t):n>=t.level())}c._levelFromString={TRACE:AufLog.LogLevel.Trace,DEBUG6:AufLog.LogLevel.Debug6,DEBUG5:AufLog.LogLevel.Debug5,DEBUG4:AufLog.LogLevel.Debug4,DEBUG3:AufLog.LogLevel.Debug3,DEBUG2:AufLog.LogLevel.Debug2,DEBUG1:AufLog.LogLevel.Debug1,WARN:AufLog.LogLevel.Warning,ERROR:AufLog.LogLevel.Error,FATAL:AufLog.LogLevel.Fatal,META:AufLog.LogLevel.MetaData},t.LogFactory=c;var p=function(e){function t(){var t=e.call(this)||this;return t._nextId=0,t._appenders=[],t._components={},t._componentBlacklist=[],t._components[""]=new s("",null),t}return r(t,e),t.prototype.toHex=function(e){return(4294967296+e).toString(16).substr(-8)},t.prototype.addAppender=function(e,t){void 0===t&&(t=0);var n=this._nextId++;return t&AufLog.AppenderFlags.InsertFront?this._appenders.unshift({appender:e,handle:n}):this._appenders.push({appender:e,handle:n}),this.recalcComponentThresholds(),n},t.prototype.removeAppender=function(e){for(var t=0;t<this._appenders.length;t++)if(this._appenders[t].handle===e){this._appenders.splice(t,1);break}this.recalcComponentThresholds()},t.prototype.log=function(e,t,n,i){for(var r=[],o=4;o<arguments.length;o++)r[o-4]=arguments[o];try{if(e.isEnabled(t)){var a={timestamp:(new Date).getTime(),component:e,level:t};this._appenders.forEach((function(o){d(o,e,t)&&o.appender.log(a,n,i,r)}))}}catch(e){}},t.prototype.parent=function(e){for(;;){var t=e.lastIndexOf(".");if(e=t>=0?e.substr(0,t):"",this._components[e])return this._components[e]}},t.prototype.children=function(e){var t=[];for(var n in this._components)this.parent(n).name()===e&&t.push(this._components[n]);return t},t.prototype.component=function(e){if(this._components[e])return this._components[e];var t=new s(e,this.parent(e));this._components[e]=t;var n=u(t,this._appenders);return t._setThreshold(n),t},t.prototype.rootComponent=function(){return this.component("")},t.prototype.setSafetyRecursive=function(e,t){var n=this;this.children(e).forEach((function(e){e.safety()!==i.Inherited_Safe&&e.safety()!==i.Inherited_Unsafe||(e.setSafety(t),n.setSafetyRecursive(e.name(),t))}))},t.prototype.declareComponentSafe=function(e,t){var n=this.component(e);-1!==this._componentBlacklist.indexOf(n.name())?n.setSafety(i.Blacklisted_Unsafe):n.setSafety(t?i.Safe:i.Unsafe),this.setSafetyRecursive(e,t?i.Inherited_Safe:i.Inherited_Unsafe)},t.prototype.declareComponentDescription=function(e,t){this.component(e).setDescription(t)},t.prototype.setExtendedInfoRecursive=function(e,t){var n=this;this.children(e).forEach((function(e){void 0===e.extendedInfo()&&(e.setExtendedInfo(t),n.setExtendedInfoRecursive(e.name(),t))}))},t.prototype.declareComponentExtendedInfo=function(e,t){var n=this.component(e);n.setExtendedInfo(t),this.setExtendedInfoRecursive(n.name(),t)},t.prototype.recalcComponentThresholds=function(){for(var e in this._components){var t=this._components[e],n=u(t,this._appenders);t._setThreshold(n)}},t.prototype.setLevel=function(e,t){if(""===e.name())for(var n in this._components){(o=this._components[n])._setLevel(t);var i=u(o,this._appenders);o._setThreshold(i)}else{var r=e.name()+".";e._setLevel(t);i=u(e,this._appenders);for(var n in e._setThreshold(i),this._components){var o;if((o=this._components[n]).name().substr(0,r.length)===r){o._setLevel(t);var a=u(o,this._appenders);o._setThreshold(a)}}}},t.prototype.setComponentBlacklist=function(e){for(var t in this._componentBlacklist=e,this._components){var n=this._components[t];-1!==this._componentBlacklist.indexOf(n.name())&&n.setSafety(i.Blacklisted_Unsafe)}},t}(c);a=new p})),SyncTasks=createCommonjsModule((function(e,t){function n(e){return null!=e&&"function"==typeof e.then}function i(e){return null!=e&&"function"==typeof e.cancel}function r(e,n){if(!t.config.catchExceptions)return e();try{return e()}catch(e){return n(e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.config={exceptionsToConsole:!0,catchExceptions:!0,traceEnabled:!1,exceptionHandler:void 0,unhandledErrorHandler:function(e){throw e}},t.fromThenable=function(e){var t=u();return e.then((function(e){t.resolve(e)}),(function(e){t.reject(e)})),t.promise().thenAsync((function(e){return e}))};var o,a=[],s="undefined"!=typeof setImmediate;function c(e){a.push(e),1===a.length&&(s?setImmediate(l):setTimeout(l,0))}function l(){var e=a;a=[];for(var t=0;t<e.length;t++)e[t]()}function u(){return new o.SyncTask}function d(e){return(new o.SyncTask).resolve(e).promise()}function p(e){var t=u(),r=!1;return t.onCancel((function(t){e.forEach((function(e){i(e)&&o.SyncTask.cancelOtherInternal(e,t)}))})),e.forEach((function(e){n(e)?e.then((function(e){r||(r=!0,t.resolve(e))}),(function(e){r||(r=!0,t.reject(e))})):r||(r=!0,t.resolve(e))})),t.promise()}t.asyncCallback=c,function(e){var o=function(){function e(){this._completedSuccess=!1,this._completedFail=!1,this._traceEnabled=!1,this._cancelCallbacks=[],this._wasCanceled=!1,this._wasExplicitlyCanceled=!1,this._resolving=!1,this._storedCallbackSets=[],this._mustHandleError=!0}return e.prototype._addCallbackSet=function(t,n){var i=this,r=new e;return r.onCancel((function(e){t.wasCanceled=!0,t.cancelContext=e,i._cancelInternal(e)})),t.task=r,this._storedCallbackSets.push(t),n?this._mustHandleError=!1:r._mustHandleError=!1,this._resolving||(this._completedSuccess?this._resolveSuccesses():this._completedFail&&this._resolveFailures()),r.promise()},e.prototype.onCancel=function(e){return this._completedSuccess||this._completedFail||(this._wasCanceled?e(this._cancelContext):this._cancelCallbacks.push(e)),this},e.prototype.then=function(e,t){return this._addCallbackSet({successFunc:e,failFunc:t},!0)},e.prototype.thenAsync=function(e,t){return this._addCallbackSet({successFunc:e,failFunc:t,asyncCallback:!0},!0)},e.prototype.catch=function(e){return this._addCallbackSet({failFunc:e},!0)},e.prototype.always=function(e){return this._addCallbackSet({successFunc:e,failFunc:e},!0)},e.prototype.setTracingEnabled=function(e){return this._traceEnabled=e,this},e.prototype.finally=function(e){return this._addCallbackSet({successFunc:e,failFunc:e},!1),this},e.prototype.done=function(e){return this._addCallbackSet({successFunc:e},!1),this},e.prototype.fail=function(e){return this._addCallbackSet({failFunc:e},!1),this},e.prototype.resolve=function(e){return this._checkState(!0),this._completedSuccess=!0,this._storedResolution=e,this._cancelCallbacks=[],this._resolveSuccesses(),this},e.prototype.reject=function(t){return this._checkState(!1),this._completedFail=!0,this._storedErrResolution=t,this._cancelCallbacks=[],this._resolveFailures(),e._enforceErrorHandled(this),this},e.prototype._checkState=function(e){if(this._completedSuccess||this._completedFail){this._completeStack&&console.error(this._completeStack.message,this._completeStack.stack);var n="Failed to "+(e?"resolve":"reject")+": the task is already "+(this._completedSuccess?"resolved":"rejected");throw new Error(n)}(t.config.traceEnabled||this._traceEnabled)&&(this._completeStack=new Error("resolve"))},e._enforceErrorHandled=function(n){n._mustHandleError&&(e._rejectedTasks.push(n),e._enforceErrorHandledTimer||(e._enforceErrorHandledTimer=setTimeout((function(){e._enforceErrorHandledTimer=void 0;var n=e._rejectedTasks;e._rejectedTasks=[],n.forEach((function(e,n){e._mustHandleError&&t.config.unhandledErrorHandler(e._storedErrResolution)}))}),0)))},e.prototype.cancel=function(e){if(this._wasExplicitlyCanceled)throw new Error("Already Canceled");this._wasExplicitlyCanceled=!0,this._cancelInternal(e)},e.prototype._cancelInternal=function(e){var t=this;if(!this._wasCanceled){this._wasCanceled=!0,this._cancelContext=e;var n=this._cancelCallbacks;this._cancelCallbacks=[],n.length>0&&n.forEach((function(e){t._completedSuccess||t._completedFail||e(t._cancelContext)}))}},e.cancelOtherInternal=function(e,t){var n=e;n._storedCallbackSets&&n._cancelInternal?n._cancelInternal(t):e.cancel(t)},e.prototype.promise=function(){return this},e.prototype._resolveSuccesses=function(){var e=this;for(this._resolving=!0;this._storedCallbackSets.length;){var t=this._storedCallbackSets;this._storedCallbackSets=[],t.forEach((function(t){t.asyncCallback?c((function(){return e._resolveSuccessCallback(t)})):e._resolveSuccessCallback(t)}))}this._resolving=!1},e.prototype._resolveSuccessCallback=function(t){var o=this;t.successFunc?r((function(){var r=t.successFunc(o._storedResolution);i(r)&&(t.wasCanceled?e.cancelOtherInternal(r,t.cancelContext):t.task.onCancel((function(t){return e.cancelOtherInternal(r,t)}))),n(r)?r.then((function(e){t.task.resolve(e)}),(function(e){t.task.reject(e)})):t.task.resolve(r)}),(function(e){o._handleException(e,"SyncTask caught exception in success block: "+e.toString()),t.task.reject(e)})):t.task.resolve(this._storedResolution)},e.prototype._resolveFailures=function(){var e=this;for(this._resolving=!0;this._storedCallbackSets.length;){var t=this._storedCallbackSets;this._storedCallbackSets=[],t.forEach((function(t){t.asyncCallback?c((function(){return e._resolveFailureCallback(t)})):e._resolveFailureCallback(t)}))}this._resolving=!1},e.prototype._resolveFailureCallback=function(t){var o=this;t.failFunc?r((function(){var r=t.failFunc(o._storedErrResolution);i(r)&&(t.wasCanceled?e.cancelOtherInternal(r,t.cancelContext):t.task.onCancel((function(t){return e.cancelOtherInternal(r,t)}))),n(r)?r.then((function(e){t.task.resolve(e)}),(function(e){t.task.reject(e)})):t.task.resolve(r)}),(function(e){o._handleException(e,"SyncTask caught exception in failure block: "+e.toString()),t.task.reject(e)})):t.task.reject(this._storedErrResolution)},e.prototype._handleException=function(e,n){t.config.exceptionsToConsole&&console.error(n),t.config.exceptionHandler&&t.config.exceptionHandler(e)},e.prototype.toEs6Promise=function(){var e=this;return new Promise((function(t,n){return e.then(t,n)}))},e._rejectedTasks=[],e}();e.SyncTask=o}(o||(o={})),t.all=function(e){if(0===e.length)return d([]);var t,r=u(),a=e.length,s=Array(e.length);r.onCancel((function(t){e.forEach((function(e){i(e)&&o.SyncTask.cancelOtherInternal(e,t)}))}));var c=function(){0==--a&&(void 0!==t?r.reject(t):r.resolve(s))};return e.forEach((function(e,i){n(e)?e.then((function(e){s[i]=e,c()}),(function(e){void 0===t&&(t=void 0===e||e),c()})):(s[i]=e,c())})),r.promise()},t.Defer=u,t.Resolved=d,t.Rejected=function(e){return(new o.SyncTask).reject(e).promise()},t.race=p,t.raceTimer=function(e,t){var n=u(),i=setTimeout((function(){n.resolve({timedOut:!0})}),t);return p([e.then((function(e){return clearTimeout(i),{timedOut:!1,result:e}})),n.promise()])}})),Appenders=createCommonjsModule((function(e,t){
/*!
     *  Appenders.ts
     *  AUF
     *
     *  Created by Johan Blumenberg on 2016-12-29
     *  Copyright 2016 Microsoft. All rights reserved.
     *
     */
var n,i=commonjsGlobal&&commonjsGlobal.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e){this._formatter=e||new c}return e.prototype.formatter=function(){return this._formatter},e.prototype.receiveAll=function(){return!1},e.prototype.levels=function(){return null},e}();function a(e){return(4294967296+e).toString(16).substr(-8)}function s(e,t){return(1e12+e).toString(10).substr(-t)}t.AbstractLogAppender=o,function(e){e[e.Timestamp=1]="Timestamp",e[e.Component=4]="Component",e[e.Level=8]="Level",e[e.FullDate=32]="FullDate",e[e.LogId=64]="LogId"}(r=t.SLF_Flags||(t.SLF_Flags={}));var c=function(){function e(e){void 0===e&&(e=4294967295),this._flags=e}return e.prototype.format=function(e,t,n,i){var o="";if(this._flags&r.FullDate)o+=new Date(e.timestamp).toISOString()+" ";else if(this._flags&r.Timestamp){var c=new Date(e.timestamp);o+=s(c.getHours(),2)+":"+s(c.getMinutes(),2)+":"+s(c.getSeconds(),2)+"."+s(c.getMilliseconds(),2)+" "}return this._flags&r.LogId&&(o+="[#"+a(t)+"-"+(e.component.safe()?"S":"u")+"] "),this._flags&r.Level&&(o+="["+LogFactory_1.LogFactory.levelToString(e.level)+"] "),this._flags&r.Component&&(o+="["+e.component.name()+"] "),n||""===n?o+AufLog.vsprintf(n,i):o+a(t)+": "+i.join(" ")},e}();t.StandardLogFormatter=c;var l=console,u=console.log||function(){},d=console.info||u,p=console.warn||d,f=console.error||p,h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.log=function(e,t,n,i){i=i.slice(0);var r=e.level<=AufLog.LogLevel.Debug3?u:e.level<=AufLog.LogLevel.Debug1?d:e.level<=AufLog.LogLevel.Warning?p:f;if(-1===t){var o=this.formatter().format(e,t,"",[]);"string"==typeof i[0]&&(o+=i.shift()),r.apply(l,[o].concat(i))}else{for(var a=void 0,s=[];a=n.match(/\s*%@\s*$/);)n=n.substr(0,n.length-a[0].length),s.unshift(i.pop());o=this.formatter().format(e,t,n,i);r.apply(l,[o].concat(s))}},t}(o);t.ConsoleAppender=h;var g=function(){function e(e){this._chained=e}return e.prototype.log=function(e,t,n,i){this._chained.log(e,t,n,i)},e.prototype.receiveAll=function(){return this._chained.receiveAll()},e.prototype.levels=function(){return this._chained.levels()},e}();t.ChainedLogAppender=g;var m=function(e){function t(t,n){var i=e.call(this,t)||this;return i._levels=n,i}return i(t,e),t.prototype.levels=function(){return this._levels},t}(g);t.wrapAppenderWithLogLevels=function(e,t){return new m(e,t)}})),RootToolsManager=createCommonjsModule((function(e,t){
/*!
     *  RootToolsManager.ts
     *  AUF
     *
     *  Created by Johan Blumenberg on 2016-12-29
     *  Copyright 2016 Microsoft. All rights reserved.
     *
     */
var n,i=commonjsGlobal&&commonjsGlobal.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var r=LogFactory_1.LogFactory.instance().component("RootToolsManager");LogFactory_1.LogFactory.instance().declareComponentSafe("RootToolsManager",!0);var o;!function(e){e[e.InternalBuild=0]="InternalBuild",e[e.PublicBuild=1]="PublicBuild"}(o=t.BuildType||(t.BuildType={}));var a=o.InternalBuild;function s(e,t){var n=[];for(var i in e)n.push(t(i,e[i]));return n}function c(e,t,n){if(null==e)return null==t||0===t.length;if(null==t)return null==e||0===e.length;if(e.length===t.length){for(var i=0;i<e.length;i++)if(!n(e[i],t[i]))return!1;return!0}return!1}function l(e,t){return null==e?null==t:null==t?null==e:e.arg===t.arg&&e.op===t.op&&e.value===t.value}function u(e,t){return null==e?null==t||0===t.logId:null==t?null==e||0===e.logId:e.logId===t.logId&&e.name===t.name&&c(e.matchers,t.matchers,l)}function d(e,t){return null==e?null==t:null==t?null==e:e.component===t.component&&e.parsedLevel===t.level}function p(e,t){return null==e?null==t:null==t?null==e:e.component===t.component&&e.level===t.level}function f(e){for(var t=[],n=0;n<e.length;n++)"string"==typeof e[n]||"number"==typeof e[n]?t.push(e[n]):t.push(JSON.stringify(e[n]));return t}t.setBuildType=function(e){var t=a;return a=e,t};var h=function(e){function t(t,n,i){var r=e.call(this)||this;return r._unmetConditions=[],r._rtMan=t,r._triggerCallback=n,r._ecsConfig=i,r.resetConditions(),r}return i(t,e),t.prototype.config=function(){return this._ecsConfig},t.prototype.configEquals=function(e){return this._ecsConfig.includeUnsafe===e.includeUnsafe&&this._ecsConfig.mutualSubmissionType===e.mutualSubmissionType&&this._ecsConfig.name===e.name&&this._ecsConfig.reenableAfterTriggering===e.reenableAfterTriggering&&this._ecsConfig.experimentTarget===e.experimentTarget&&u(this._ecsConfig.resetCondition,e.resetCondition)&&c(this._ecsConfig.conditions,e.conditions,u)&&c(this._ecsConfig.filters,e.filters,p)},t.prototype.nativeConfigEquals=function(e){return this._ecsConfig.includeUnsafe===e.includeUnsafe&&this._ecsConfig.name===e.name&&this._ecsConfig.reenableAfterTriggering===e.reenableAfterTriggering&&u(this._ecsConfig.resetCondition,e.resetCondition)&&c(this._ecsConfig.conditions,e.conditions,u)&&c(this._ecsConfig.filters,e.filters,d)},t.prototype.needReset=function(e){return!this.configEquals(e)},t.prototype.resetConditions=function(){this._unmetConditions=[];for(var e=0;e<this._ecsConfig.conditions.length;e++)this._unmetConditions.push(e)},t.prototype.matcherMatches=function(e,t){if(e.arg>=t.length)return!1;var n=t[e.arg],i="string"==typeof n?e.value:parseInt(e.value,10);return"="===e.op||"=="===e.op?n===i:"!="===e.op?n!==i:"<"===e.op?n<i:"<="===e.op?n<=i:">"===e.op?n>i:">="===e.op?n>=i:"CONTAINS"===e.op.toUpperCase()&&(""+n).indexOf(e.value)>=0},t.prototype.conditionMatches=function(e,t,n){if(t!==e.logId)return!1;if(e.matchers)for(var i=0;i<e.matchers.length;i++)if(!this.matcherMatches(e.matchers[i],n))return!1;return!0},t.prototype.log=function(e,t,n,i){if(0!==this._unmetConditions.length&&e.component!==r){var o=this._ecsConfig;o.resetCondition&&this.conditionMatches(o.resetCondition,t,i)&&(r.debug4("LogTrigger %s: resetCondition met",o.name),this.resetConditions());for(var a=0;a<this._unmetConditions.length;a++){var s=this._unmetConditions[a];if(this.conditionMatches(o.conditions[s],t,i)){r.debug4("LogTrigger %s: condition %s met",o.name,o.conditions[s].name),this._unmetConditions.splice(a,1);break}}0===this._unmetConditions.length&&(r.debug1("LogTrigger %s has triggered, trying to send the log",o.name),this._triggerCallback.call(this._rtMan,o),o.reenableAfterTriggering&&this.resetConditions())}},t.prototype.receiveAll=function(){return!0},t}(Appenders.AbstractLogAppender),g=function(e){function t(t,n,i){var r=e.call(this)||this;return r._circularBuffer=[],r._circularBufferMaxSize=0,r._onBufferOverflow=null,r._circularBuffer=[],r._circularBufferMaxSize=n,r._includeUnsafe=t,r._onBufferOverflow=i||function(){return r._circularBuffer.shift()},r}return i(t,e),t.prototype.log=function(e,t,n,i){if((this._includeUnsafe||e.component.safe())&&!(this._circularBuffer.length>this._circularBufferMaxSize)){var r={md:e,logId:t,messages:f(i)};this._circularBuffer.push(r),this._circularBuffer.length>this._circularBufferMaxSize&&this._onBufferOverflow()}},t.prototype.visitReverseOrder=function(e){for(var t=this._circularBuffer.length-1;t>=0;t--){var n=this._circularBuffer[t];if(!e(n.md,n.logId,n.messages))return}},t.prototype.visitForwardOrder=function(e){for(var t=0;t<this._circularBuffer.length;t++){var n=this._circularBuffer[t];if(!e(n.md,n.logId,n.messages))return}},t.prototype.needReset=function(e,t){return e!==this._includeUnsafe||t!==this._circularBufferMaxSize},t.prototype.dumpLogBuffer=function(e,t,n){var i=this,r=new m(e.reverse),o=e.filter.map((function(e){return{component:"root"===e.component?"":e.component,parsedLevel:e.level}})),a=n||{matchedLines:0,totalLines:0};return(e.reverse?this.visitReverseOrder:this.visitForwardOrder).apply(this,[function(e,n,s){return a.totalLines++,i.filterMatches(e,n,s,o)&&(a.matchedLines++,r.log(e.component,e.timestamp,e.level,n,s)),!t||r._data.length<t}]),r.close(),r.data()},t.prototype.filterMatches=function(e,t,n,i){for(var r=0;r<i.length;r++)if((""===i[r].component||e.component.name()===i[r].component||e.component.name().substr(0,i[r].component.length)===i[r].component&&"."===e.component.name().charAt(i[r].component.length))&&e.level>=i[r].parsedLevel)return!0;return!1},t.prototype.clear=function(){this._circularBuffer=[]},t.prototype.size=function(){return this._circularBuffer.length},t.prototype.empty=function(){return 0===this.size()},t.prototype.capacity=function(){return this._circularBufferMaxSize},t}(Appenders.AbstractLogAppender);t.CircularBuffer=g;var m=function(){function e(e){this._reverse=e,this._first=!0,this._pending=[],this._components={},this._componentCount=0,this._lastts=0,this._base64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",this._data="ULOG2"+String.fromCharCode(33)+String.fromCharCode(32),this._data+=e?String.fromCharCode(34):String.fromCharCode(32),this._data+=String.fromCharCode(32)}return e.prototype._add8=function(e){if(this._pending.push(255&e),3===this._pending.length){var t=(this._pending[0]<<16)+(this._pending[1]<<8)+(this._pending[2]<<0),n=this._base64chars[t>>18&63]+this._base64chars[t>>12&63]+this._base64chars[t>>6&63]+this._base64chars[t>>0&63];this._data+=n,this._pending=[]}},e.prototype._add16=function(e){this._add8(e>>8&255),this._add8(e>>0&255)},e.prototype._add32=function(e){this._add8(e>>24&255),this._add8(e>>16&255),this._add8(e>>8&255),this._add8(e>>0&255)},e.prototype._add64=function(e){this._add32(e/4294967296|0),this._add32(0|e)},e.prototype._addS=function(e){for(var t=0;t<e.length;t++)this._add8(e.charCodeAt(t));this._add8(0)},e.prototype._close=function(){for(;this._pending.length;)this._add8(0)},e.prototype.log=function(e,t,n,i,r){var o=this._components[e.name()];o||(o=++this._componentCount,this._components[e.name()]=o,this._add8(2),this._add16(o),this._addS(e.name()),this._addS(""),this._addS(""),this._add8(e.safe()?1:0));var a=128;this._first&&(a|=2);var s=t-this._lastts;this._lastts=t,s>-128&&s<128&&(a|=1),this._add8(a),1&a?this._add8(s):this._add64(1e3*t),this._first&&(this._add32(1),this._add8(0),this._add16(0)),this._add16(o),this._add8(n),this._add32(i),this._add8(r.length);for(var c=0;c<r.length;c++)this._add8(8),this._addS(""+r[c]);this._first=!1},e.prototype.close=function(){this._add8(7),this._close()},e.prototype.data=function(){return this._data},e.prototype.empty=function(){return this._first},e}(),v=function(e){function t(t,n,i,r){var o=e.call(this)||this;return o._capacity=t,o._onBufferOverflow=n,o._enableThrottling=i,o._maxVerbosityLevel=r,o._outputFormatter=new m(!1),o._linesStored=0,o._throttling=!1,o._linesThrottled=0,o}return i(t,e),t.prototype.log=function(e,t,n,i){this._maxVerbosityLevel&&e.level<this._maxVerbosityLevel||(this._throttling?this._linesThrottled++:(this._linesStored++,this._outputFormatter.log(e.component,e.timestamp,e.level,t,f(i))),this._linesStored>this._capacity&&(this._enableThrottling?this._throttling||(this._throttling=!0):this._onBufferOverflow()))},t.prototype.dumpAndReset=function(){if(this._outputFormatter.empty())return"";this._linesThrottled>0&&this._outputFormatter.log(r,(new Date).getTime(),AufLog.LogLevel.Fatal,-1,["RooToolsManager: Log buffer overflow! "+this._linesThrottled+" lines thrown away"]),this._outputFormatter.close();var e=this._outputFormatter.data();return this.clearBuffer(),e},t.prototype.empty=function(){return this._outputFormatter.empty()},t.prototype.clearBuffer=function(){this._outputFormatter=new m(!1),this._linesStored=0,this._linesThrottled=0,this._throttling=!1},t.prototype.capacity=function(){return this._capacity},t.prototype.throttlingEnabled=function(){return this._enableThrottling},t.prototype.size=function(){return this._linesStored},t.prototype.maxVerbosityLevel=function(){return this._maxVerbosityLevel},t}(Appenders.AbstractLogAppender);function S(e){return"Native"===e||"JavaScript"===e||"Mixed"===e}t.DumperBuffer=v;var y=function(){function e(){this._maxUploadSize=0,this._jsToNativeBuffer=null,this._jsToNativeBufferHandle=null,this._jsToNativeFlushTimer=null,this._jsToNativeFlushInterval=0,this._triggers={},this._defaultBuffers=[{size:2097152,level:AufLog.LogLevel.Debug4}],this._defaultKillswitch={blacklist:[],whitelist:[]},this._defaultBlacklists={component:[],logline:[]},this._localLogLevels={},this._defaultExperimentTarget="Mixed",this._BRBCallback=null}return e.prototype.setDelegate=function(e){this._glue=e,this.registerListeners()},e.prototype.isDelegateSet=function(){return null!=this._glue},e.prototype.setNativeFunctions=function(e){this._native&&this._native.log_config.removeLogTriggerListener(this),this._native=e,this._native&&this._native.log_config.addLogTriggerListener(this)},e.prototype.applyLogLevels=function(){var e={};for(var t in this._localLogLevels)e[t]=this._localLogLevels[t];e[""]=e.root||AufLog.LogLevel.Debug4,delete e.root;var n=s(e,(function(e,t){return{component:e,level:t}}));n.sort((function(e,t){return e.component.length-t.component.length})),n.forEach((function(e){return LogFactory_1.LogFactory.instance().component(e.component).setLevel(e.level)})),this._native&&this._native.log_config.setLogLevelConfig(n)},e.prototype.setLocalLogLevelConfig=function(e){this._localLogLevels=e,this.applyLogLevels()},e.prototype.parseMatcher=function(e){return null==e||null==e.arg||null==e.op||null==e.value?null:{arg:e.arg,op:e.op,value:e.value}},e.prototype.parseCondition=function(e){if(null==e||null==e.logId)return null;if(e.matchers&&!(e.matchers instanceof Array))return null;var t,n={name:e.name||(t=e.logId,(4294967296+t).toString(16).substr(-8)),logId:e.logId,matchers:[]};if(e.matchers&&e.matchers.length)for(var i=0,r=e.matchers;i<r.length;i++){var o=r[i],a=this.parseMatcher(o);a&&n.matchers.push(a)}return n},e.prototype.parseFilter=function(e){return null==e||null==e.component||0===e.component.length?null:{component:e.component,level:e.level,parsedLevel:LogFactory_1.LogFactory.levelFromString(e.level)}},e.prototype.parseConfig=function(e,t,n){if(null==e)return null;if(!(e.conditions instanceof Array)||0==e.conditions.length)return null;if(!(e.filters instanceof Array)||0==e.filters.length)return null;if(e.resetCondition&&!this.parseCondition(e.resetCondition))return null;for(var i={name:e.name||t+"->"+n,ecsNs:t,reenableAfterTriggering:e.reenableAfterTriggering||!1,mutualSubmissionType:e.mutualSubmissionType||"",includeUnsafe:a!==o.PublicBuild&&(e.includeUnsafe||!1),experimentTarget:S(e.experimentTarget)&&e.experimentTarget||this._defaultExperimentTarget,conditions:[],resetCondition:null==e.resetCondition?e.resetCondition:this.parseCondition(e.resetCondition),filters:[]},r=0,s=e.conditions;r<s.length;r++){var c=s[r],l=this.parseCondition(c);l&&i.conditions.push(l)}for(var u=0,d=e.filters;u<d.length;u++){var p=d[u],f=this.parseFilter(p);f&&i.filters.push(f)}return 0===i.conditions.length?null:i},e.prototype.isExperimentListed=function(e,t,n,i){return!!e&&(!(!i||!e.some((function(e){return"*"===e.namespace})))||e.some((function(e){return e.namespace===t&&(e.experiment===n||"*"==e.experiment)})))},e.prototype.isExperimentAllowed=function(e,t,n){return!this.isExperimentListed(e.blacklist,t,n,!0)||this.isExperimentListed(e.whitelist,t,n,!1)},e.prototype.findTrigger=function(e,t){for(var n in e)if(e[n].configEquals(t))return n;return null},e.prototype.findTriggerByNativeConfig=function(e,t){for(var n in e)if(e[n].nativeConfigEquals(t))return n;return null},e.prototype.OnEcsChange=function(){var e=this;function t(e,n,i){return n<e.length?i(e[n]).then((function(){return t(e,n+1,i)})):SyncTasks.Resolved()}return null==this._glue?SyncTasks.Resolved():this._glue.fetchEcsConfig("SkypeRootTools","ULBaseline").then((function(n){r.debug4("Reloading ULBaseline config - new config: %@",n),n||(r.warn("No ULBaseline config"),n={}),e._maxUploadSize=n.logUpload&&n.logUpload.maxSize||1024;var i=[],o=e._triggers;e._triggers={};var a=(n.logUpload&&n.logUpload.maxSize||1024)/100,c=n.circularBuffer&&n.circularBuffer.enabled,l=n.circularBuffer&&n.circularBuffer.buffers||e._defaultBuffers,u=n.circularBuffer&&n.circularBuffer.storeUnsafe;e._defaultExperimentTarget=S(n.defaultExperimentTarget)&&n.defaultExperimentTarget||"Mixed";var d=n.killswitch||e._defaultKillswitch,p=n.blacklists||e._defaultBlacklists;p.component.length>0&&LogFactory_1.LogFactory.instance().setComponentBlacklist(p.component);var f={};(n.componentLevels||[]).forEach((function(e){return f[e.component]=e.level})),t(n.configPaths||[],0,(function(t){return e._glue.fetchEcsConfig(t.ns,t.key).then((function(n){var a=n instanceof Array?n:[n];r.debug4("Reloading ECS config for %s->%s - new config: %@",t.ns,t.key,a);for(var s=0,l=a;s<l.length;s++){var p=l[s];if(null!=p){var h=e.parseConfig(p,t.ns,t.key);if(null!=h)if("JavaScript"===h.experimentTarget||"Mixed"===h.experimentTarget)if(r.debug2("Parsed ECS config for %s->%s - %@",t.ns,t.key,h),e.isExperimentAllowed(d,t.ns,h.name)){r.debug2("Allowing %s->%s:%s according to killswitch",t.ns,t.key,h.name),c=!0;var g=e.findTrigger(o,h);null!=g?(r.debug2("Triggers updated, keeping trigger %s",h.name),e._triggers[g]=o[g],delete o[g]):i.push(h),h.filters&&h.filters.forEach((function(e){return f[e.component]=Math.min(f[e.component]||255,e.parsedLevel)})),h.includeUnsafe&&(u=!0)}else r.debug2("Disallowing %s->%s according to killswitch",t.ns,t.key);else r.debug4("Skipping %s->%s, targeted for %s",t.ns,t.key,h);else r.error("Failed to parse ECS config for %s->%s",t.ns,t.key)}}}))})).always((function(){for(var t in e.applyLogLevels(),o)r.debug2("Triggers updated, removing trigger %s",o[t].config().name),LogFactory_1.LogFactory.instance().removeAppender(+t);if(i.forEach((function(t){r.debug2("Triggers updated, adding trigger %s",t.name);var n=new h(e,e._triggered,t),i=LogFactory_1.LogFactory.instance().addAppender(n);e._triggers[String(i)]=n})),f[""]=f.root||AufLog.LogLevel.Debug4,delete f.root,!e._circularBuffer||c&&!e._circularBuffer.needReset(u,a)?e._circularBuffer&&(Object.keys(o).length>0||i.length>0?(r.debug2("Buffer updated, reapplying log levels, removing log levels wrapper"),LogFactory_1.LogFactory.instance().removeAppender(e._circularBufferHandle),e._circularBufferHandle=null):r.debug2("Buffer updated, no change")):(r.debug2("Buffer updated, removing existing buffer"),LogFactory_1.LogFactory.instance().removeAppender(e._circularBufferHandle),e._circularBuffer=null,e._circularBufferHandle=null),c&&(e._circularBuffer||(r.debug2("Buffer updated, adding new buffer (storeUnsafe=%d,maxSize=%s)",u,a),e._circularBuffer=new g(u,a)),null==e._circularBufferHandle&&(r.debug2("Creating log level wrapper"),e._circularBufferHandle=LogFactory_1.LogFactory.instance().addAppender(Appenders.wrapAppenderWithLogLevels(e._circularBuffer,f),AufLog.AppenderFlags.InsertFront))),e._native){var n=s(f,(function(e,t){return{component:e,level:t}}));n.sort((function(e,t){return e.component.length-t.component.length})),e._native.log_config.setLogBufferConfig(c,{storeUnsafe:u,buffers:l},n);var d=[];for(var p in e._triggers){var m=e._triggers[p].config();d.push({name:m.name,ecsNs:m.ecsNs,conditions:m.conditions,resetCondition:m.resetCondition,includeUnsafe:m.includeUnsafe,reenableAfterTriggering:m.reenableAfterTriggering,filters:m.filters.map((function(e){return{component:e.component,level:e.parsedLevel}})),dumpFile:!1,metadata:{}})}e._native.log_config.setLogTriggerConfig(d,{})}}))}))},e.prototype._send=function(e,t){null!=this._glue&&(this._glue.sendTelemetry("638b8ba2bae14e07aa5d73ddb5d5e5c5-297b8412-5df3-4a83-83c4-7b76c6c5d3f0-7104",{logTriggerName:e.name,logEcsNs:e.ecsNs,logdata:t}),r.debug4("LogSender::send, sent %d bytes",t.length))},e.prototype.triggered=function(e,t){},e.prototype.triggeredPartially=function(e,t,n,i,r){var o=this.findTriggerByNativeConfig(this._triggers,e);if(o){var a={level:t.level,component:LogFactory_1.LogFactory.instance().component(t.component),timestamp:t.timestamp};this._triggers[o].log(a,n,i,r)}},e.prototype.reset=function(e){var t=this.findTriggerByNativeConfig(this._triggers,e);t&&this._triggers[t].resetConditions()},e.prototype.dumpLogBuffer=function(e,t){if(this._circularBuffer){var n={matchedLines:0,totalLines:0},i=this._circularBuffer.dumpLogBuffer(e,this._maxUploadSize,n);if(r.debug4("dumpLogBuffer: dumped %d of %d lines, size of payload: %d",n.matchedLines,n.totalLines,null!=i?i.length:0),this._native){var o=SyncTasks.Defer();return this._native.log_config.mergeAndDumpLogBuffer(i,e,t,(function(e){return o.resolve(e)})),o.promise()}return SyncTasks.Resolved(i)}return r.warn("dumpLogBuffer: no log buffer enabled"),SyncTasks.Rejected()},e.prototype._triggered=function(e){var t=this,n={compression:AufLog.LogFileCompression.Compress,encoding:AufLog.LogFileEncoding.Base64,encryption:AufLog.LogFileEncryption.Encrypted,maxRotations:0,maxSize:this._maxUploadSize,reverse:!0},i={includeUnsafe:e.includeUnsafe,filter:e.filters.map((function(e){return{component:e.component,level:e.parsedLevel}})),reverse:!0};this.dumpLogBuffer(i,n).then((function(n){return t._send(e,n)}))},e.prototype.sendBRBEvent=function(e){try{if(r.debug2("sendBRBEvent %s",JSON.stringify(e)),null!=this._glue&&"function"==typeof this._glue.sendLoggingEventToNative){var t={eventType:"uploadBRB",mutualSubmissionType:"call",payload:e};this._glue.sendLoggingEventToNative(JSON.stringify(t),"")}}catch(e){r.error("sendBRBEvent %s: %s",e.name,e.message)}},e.prototype.setBRBCallback=function(e){r.debug2("setBRBCallback"),null!=this._glue?"function"==typeof this._glue.setNativeLoggingEventCallback?this._BRBCallback=e:r.warn("setBRBCallback: RootToolsManagerDelegate missing setNativeLoggingEventCallback method"):r.warn("setBRBCallback: RootToolsManagerDelegate is not set")},e.prototype.registerListeners=function(){var e=this;null!=this._glue&&"function"==typeof this._glue.setNativeLoggingEventCallback?this._glue.setNativeLoggingEventCallback((function(t,n){return e.handleNativeLoggingEvent(t,n)})):r.warn("registerListeners: RootToolsManagerDelegate missing setNativeLoggingEventCallback method")},e.prototype.handleNativeLoggingEvent=function(e,t){try{r.debug2("Native Log event message: %s aux: %s",e,t);var n=JSON.parse(e);if(n.eventType&&"uploadBRB"===n.eventType){if("function"!=typeof this._BRBCallback)return void r.warn("BRBCallback not set, ignoring native event");r.debug4("Sending BRB callback: %@",n.payload),this._BRBCallback(n.payload)}else n.eventType&&"jsLogFileConfiguration"===n.eventType&&this.handleLogFileConfigEvent(n)}catch(e){r.error("handleNativeLoggingEvent %s: %s",e.name,e.message)}},e.prototype.handleLogFileConfigEvent=function(e){if(e.payload){var t=e.payload;if(t.enabled){if(t.chunkSize&&t.flushInterval){var n={chunkSize:t.chunkSize,flushInterval:t.flushInterval,enableThrottling:t.enableThrottling,maxVerbosityLevel:t.maxVerbosityLevel};this.startJsToNativeLogging(n)}}else this.flushDisableJsToNativeLogging()}},e.prototype.logExternalForDDL=function(e,t){try{if(r.debug2("logExternalForDDL %s %s",e,t),null!=this._glue&&"function"==typeof this._glue.sendLoggingEventToNative){var n={eventType:"logInSClog",payload:{message:e,parameters:t}};this._glue.sendLoggingEventToNative(JSON.stringify(n),"")}else r.warn("ignoring logExternalForDDL, delegate misconfigured")}catch(e){r.error("logExternalForDDL %s: %s",e.name,e.message)}},e.prototype.startJsToNativeLogging=function(e){var t=this,n=e.chunkSize,i=e.flushInterval,o=e.enableThrottling,a=this._getVerbosityLevelFromConfig(e.maxVerbosityLevel);if(this._jsToNativeBuffer){if(this._jsToNativeBuffer.capacity()===n&&this._jsToNativeFlushInterval===i&&this._jsToNativeBuffer.throttlingEnabled()===o&&this._jsToNativeBuffer.maxVerbosityLevel()===a)return void r.debug1("Same JS2Native settings received - doing nothing");r.debug1("Reapplying js to native settings"),this.flushDisableJsToNativeLogging()}this._jsToNativeBuffer=new v(n,(function(){t.onJsToNativeBufferReady(t._jsToNativeBuffer)}),o,a),this.setJsToNativeFlushTimeout(i),this._jsToNativeFlushInterval=i,this._jsToNativeBufferHandle=LogFactory_1.LogFactory.instance().addAppender(this._jsToNativeBuffer)},e.prototype._getVerbosityLevelFromConfig=function(e){return e?LogFactory_1.LogFactory.levelFromString(e):null},e.prototype.flushDisableJsToNativeLogging=function(){this._jsToNativeBuffer&&this.onJsToNativeBufferReady(this._jsToNativeBuffer),this.plainDisableJsToNativeLogging()},e.prototype.plainDisableJsToNativeLogging=function(){this.clearJsToNativeFlushTimeout(),this._jsToNativeBufferHandle&&(LogFactory_1.LogFactory.instance().removeAppender(this._jsToNativeBufferHandle),this._jsToNativeBufferHandle=0,this._jsToNativeBuffer=null,r.debug1("Disabling forwarding JS logs to native"))},e.prototype.onJsToNativeBufferReady=function(e){null!=this._glue&&"function"==typeof this._glue.sendLoggingEventToNative?(this.clearJsToNativeFlushTimeout(),this.dumpJsToNativeBuffer(e),this.setJsToNativeFlushTimeout(this._jsToNativeFlushInterval)):this.plainDisableJsToNativeLogging()},e.prototype.dumpJsToNativeBuffer=function(e){if(!e.empty()){var t=e.dumpAndReset();this._glue.sendLoggingEventToNative(JSON.stringify({eventType:"writeLogData"}),t)}},e.prototype.clearJsToNativeFlushTimeout=function(){this._jsToNativeFlushTimer&&(clearTimeout(this._jsToNativeFlushTimer),this._jsToNativeFlushTimer=null)},e.prototype.setJsToNativeFlushTimeout=function(e){var t=this;!this._jsToNativeFlushTimer&&e&&(this._jsToNativeFlushTimer=setTimeout((function(){t._jsToNativeFlushTimer=null,t.onJsToNativeBufferReady(t._jsToNativeBuffer)}),e))},e.prototype.stopAsyncOperations=function(){this.flushDisableJsToNativeLogging()},e}();t.RootToolsManager=new y})),pii_1=createCommonjsModule((function(e,t){
/*!
     *  pii.ts
     *  AUF
     *
     *  Created by Johan Blumenberg on 2017-01-16
     *  Copyright 2017 Microsoft. All rights reserved.
     *
     */
Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e},i=!0,r=n,o={},a=0;var s,c=/^([0-9][0-9]?):([^<>\*\{\}&'\"\/\\?^`|~\s]+)$/;!function(e){e[e.MSA=1]="MSA",e[e.S4B_Bridge=2]="S4B_Bridge",e[e.PSTN=4]="PSTN",e[e.SkypeId=8]="SkypeId",e[e.Thread=19]="Thread",e[e.LegacyShortCircuit=20]="LegacyShortCircuit",e[e.OneToOneTextMessage=21]="OneToOneTextMessage",e[e.GroupTextMessage=22]="GroupTextMessage",e[e.Bot=28]="Bot",e[e.InternalSkype=48]="InternalSkype"}(s||(s={}));var l=[s.Thread,s.InternalSkype,s.Bot];t.enableAnonymization=function(e){i=e},t.useTagger=function(e){r=e||n},function(e){function t(e){return i?e?o[e]||function(e){return o[e]="u"+ ++a}(e):null:e}e.UserName=function(e){var n=t(e);return r(n)},e.Mri=function(e){var n,i=e.match(c);if(i){var o=Number(i[1]),a=i[2];n=-1!=l.indexOf(o)?e:o+":"+t(a)}else n=t(e);return r(n)},e.Omit=function(e){var t;return t=i?"number"==typeof e?19229:"string"==typeof e?e.charAt(0)+"...":null:e,r(t)}}(t.pii||(t.pii={}))})),js=createCommonjsModule((function(e,t){
/*!
     *  index.ts
     *  AUF
     *
     *  Created by Johan Blumenberg on 2016-12-29
     *  Copyright 2016 Microsoft. All rights reserved.
     *
     */
function n(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),n(AufLog),n(LogFactory_1),n(RootToolsManager),n(Appenders),n(pii_1)})),skypeCallingPluginless_bundle=createCommonjsModule((function(e,t){var n,i;window,e.exports=(n=lodash,i=js,function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=144)}([function(e,t,n){var i=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);function o(e,t){for(var n in e)e.hasOwnProperty(n)&&t(e[n],n)}function a(e){return e?e.toString===Object.prototype.toString?JSON.stringify(e):e.toString():""+e}t.forOwn=o,t.forOwnRec=function e(t,n){for(var i in t)t.hasOwnProperty(i)&&("object"==typeof t[i]?e(t[i],n):n(t[i],i,t))},t.average=function(e){var t=0;return e.forEach((function(e){return t+=e})),t/=e.length},t.find=function(e,t){var n;return e.some((function(i,r){return!!t(i,r,e)&&(n=i,!0)})),n},t.findIndex=function(e,t){var n;return e.some((function(i,r){return!!t(i,r,e)&&(n=r,!0)})),n},t.remove=function(e,t){for(var n=!1,i=e.length;i-- >0;)t(e[i],i,e)&&(e.splice(i,1),n=!0);return n},t.compareArraysBy=function(e,t,n){var i=[];return e.forEach((function(e){t.some((function(t){return n(e,t)}))||i.push(e)})),0==i.length&&e.length===t.length},t.values=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t},t.assign=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},t.isEmpty=function(e){return!Object.keys(e).length},t.keys=function(e){return Object.keys(e)},t.shallowClone=function(e){var t={};return o(e,(function(e,n){t[n]=e})),t},t.deepClone=function e(t){var n;if(!t||"object"!=typeof t)return t;if(t instanceof Date)return(n=new Date).setTime(t.getTime()),n;if(t instanceof Array){n=[];for(var i=0,r=t.length;i<r;i++)n[i]=e(t[i]);return n}if(t instanceof Object)return n={},o(t,(function(t,i){n[i]=e(t)})),n;throw new Error("Unable to copy: "+t)},t.removeUndefinedFields=function(e){Object.keys(e).forEach((function(t){void 0===e[t]&&delete e[t]}))},t.uniqueId=function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return e()+e()+e()+"4"+e().substring(1)+"b"+e().substring(1)+e()+e()+e()},t.deepEqual=function e(t,n){var i,r=typeof t;if(t===n)return!0;if(r!==typeof n||"object"!==r&&"function"!==r)return!1;if(null===t||null===n)return t===n;if(t instanceof Date&&n instanceof Date)return+t==+n;if(t instanceof Map&&n instanceof Map)return function(e,t){var n;if(e.size!==t.size)return!1;var i=!0;return e.forEach((function(e,r){((n=t.get(r))!==e||void 0===n&&!t.has(r))&&(i=!1)})),i}(t,n);for(i in t)if(!(i in n)||!e(t[i],n[i]))return!1;for(i in n)if(!(i in t)||!e(t[i],n[i]))return!1;return!0},t.weakCompareObject=function(e,t){return JSON.stringify(e)===JSON.stringify(t)},t.getMaxSubstring=function(e,t){return t.reduce((function(t,n){var i=e.includes(n)?n.length:0;return t.length<i?n:t}),"")},t.throwIfNotSupported=function(e,t){if(-1===t.indexOf(e))throw{detail:e+" mediaContent.contentType is not supported",type:r.default.MEDIA_ERROR.incompatibleOffer}},t.throwIfFeatureNotSupported=function(e,t){e.forEach((function(e){if(""!==e&&-1!==t.findIndex((function(t){return t===e})))throw{detail:"Required feature '"+e+"' is not acceptable.",type:r.default.MEDIA_ERROR.incompatibleOffer}}))},t.stringifyObject=a,t.noop=Function.prototype,t.mapToString=function(e){var t={};return e.forEach((function(e,n){t[n.toString()]=e})),JSON.stringify(t)},t.getClosestValue=function(e,t,n,i){void 0===i&&(i=0);for(var r=1;r<e.length;r++)if(e[r-1]+i<t&&t<=e[r]+i)return n?e[r]:e[r-1];return e[0]},t.isInRange=function(e,t,n){return t<=e&&e<=n},t.getFrom=function(e){for(var t,n,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];try{for(var a=i(r),s=a.next();!s.done;s=a.next()){var c=s.value;if(c.hasOwnProperty(e))return c[e]}}catch(e){t={error:e}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}},t.subtractFrom=function(e,t){return e.filter((function(e){return!t.some((function(t){return t===e}))}))},t.getLongestCommonContiguousSubstring=function(e,t){if(e===t)return e;for(var n=0,i=0,r="",o=0;o<e.length&&!(r.length>e.length-o);o++){var a=o;i-n>r.length&&(r=e.substring(n,i),o=i-1),n=o,i=o;for(var s=0;s<t.length;s++)a<e.length&&t[s]===e[a++]?i=a:(a=o,i-n>r.length&&(r=e.substring(n,i),o=i-1),n=o,i=o)}return r},t.levenshteinDistance=function(e,t){for(var n=new Array(e.length+1),i=0;i<e.length+1;i++){n[i]=new Array(t.length+1);for(var r=0;r<t.length+1;r++)n[i][r]=0}for(i=1;i<e.length+1;i++)n[i][0]=i;for(i=1;i<t.length+1;i++)n[0][i]=i;for(i=1;i<e.length+1;i++)for(r=1;r<t.length+1;r++){var o=1;e[i-1]===t[r-1]&&(o=0),n[i][r]=Math.min(n[i-1][r]+1,n[i][r-1]+1,n[i-1][r-1]+o)}return n[e.length][t.length]},t.getAvarageVolume=function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n];return Math.round(t/e.length)},t.scrubDeviceLabelPii=function(e,t){if(""===e)return"";if(e.length<3)return e;var n=[],i=e.match(/\(([0-9a-fA-F]+:[0-9a-fA-F]+)\)/);i&&n.push(i[1]);var r=e.match(/\((\w+)\)/);r&&n.push(r[1]);try{for(var o=new RegExp("("+t.join("|")+")","gi"),s=o.exec(e);s;)n.push(s[1]),s=o.exec(e)}catch(e){n.push("Error: "+a(e))}return 0===n.length?"unknown":n.join(" ")}},function(e,t,n){n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return _}));var i=n(11),r=n(5),o=(i.f,null),a=!1,s=123456789,c=987654321;function l(e){e<0&&(e>>>=0),s=123456789+e&4294967295,c=987654321-e&4294967295,a=!0}function u(){l(4294967296*Math.random()^(new Date).getTime())}function d(e,t){return typeof e===t}function p(e){return d(e,i.f)||void 0===e}function f(e){return p(e)||null===e}function h(e,t){return e&&Object[i.e].hasOwnProperty.call(e,t)}function g(e){return d(e,i.d)}function m(e){return d(e,i.c)}function v(e,t,n,i){void 0===i&&(i=!1);var r=!1;if(!f(e))try{f(e.addEventListener)?f(e.attachEvent)||(e.attachEvent("on"+t,n),r=!0):(e.addEventListener(t,n,i),r=!0)}catch(e){}return r}function S(e,t,n,i){if(void 0===i&&(i=!1),!f(e))try{f(e.removeEventListener)?f(e.detachEvent)||e.detachEvent("on"+t,n):e.removeEventListener(t,n,i)}catch(e){}}function y(e,t){if(e&&g(e))for(var n in e)h(e,n)&&t.call(e,n,e[n])}var _=function(){function e(){}return e.isDate=function(e){return"[object Date]"===Object[i.e].toString.call(e)},e.isArray=function(e){return"[object Array]"===Object[i.e].toString.call(e)},e.isError=function(e){return"[object Error]"===Object[i.e].toString.call(e)},e.isString=function(e){return d(e,"string")},e.isNumber=function(e){return d(e,"number")},e.isBoolean=function(e){return d(e,"boolean")},e.disableCookies=function(){e._canUseCookies=!1},e.newGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(E,(function(t){var n=0|e.randomValue(15);return("x"===t?n:3&n|8).toString(16)}))},e.toISOString=function(t){if(e.isDate(t)){var n=function(e){var t=String(e);return 1===t.length&&(t="0"+t),t};return t.getUTCFullYear()+"-"+n(t.getUTCMonth()+1)+"-"+n(t.getUTCDate())+"T"+n(t.getUTCHours())+":"+n(t.getUTCMinutes())+":"+n(t.getUTCSeconds())+"."+String((t.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"}},e.arrForEach=function(e,t,n){for(var i=e.length,r=0;r<i;r++)r in e&&t.call(n||e,e[r],r,e)},e.arrIndexOf=function(e,t,n){for(var i=e.length,r=n||0,o=Math.max(r>=0?r:i-Math.abs(r),0);o<i;o++)if(o in e&&e[o]===t)return o;return-1},e.arrMap=function(e,t,n){for(var i=e.length,r=n||e,o=new Array(i),a=0;a<i;a++)a in e&&(o[a]=t.call(r,e[a],e));return o},e.arrReduce=function(e,t,n){var i,r=e.length,o=0;if(arguments.length>=3)i=arguments[2];else{for(;o<r&&!(o in e);)o++;i=e[o++]}for(;o<r;)o in e&&(i=t(i,e[o],o,e)),o++;return i},e.strTrim=function(t){return e.isString(t)?t.replace(/^\s+|\s+$/g,""):t},e.objKeys=function(e){var t=!{toString:null}.propertyIsEnumerable("toString");if(!(m(e)||g(e)&&null!==e))throw new TypeError("objKeys called on non-object");var n=[];for(var i in e)h(e,i)&&n.push(i);if(t)for(var r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],o=r.length,a=0;a<o;a++)h(e,r[a])&&n.push(r[a]);return n},e.objDefineAccessors=function(e,t,n,i){var r=Object.defineProperty;if(r)try{var o={enumerable:!0,configurable:!0};return n&&(o.get=n),i&&(o.set=i),r(e,t,o),!0}catch(e){}return!1},e.addEventHandler=function(e,t){var n=!1,i=Object(r.k)();i&&(n=v(i,e,t),n=v(i.body,e,t)||n);var o=Object(r.c)();return o&&(n=T.Attach(o,e,t)||n),n},e.dateNow=function(){var e=Date;return e.now?e.now():(new e).getTime()},e.perfNow=function(){var t=Object(r.j)();return t&&t.now?t.now():e.dateNow()},e.newId=function(t){void 0===t&&(t=22);for(var n=e.random32()>>>0,i=0,r="";r.length<t;)i++,r+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(63&n),n>>>=6,5===i&&(n=(e.random32()<<2&4294967295|3&n)>>>0,i=0);return r},e.isIE=function(){if(null===o){var e=((Object(r.i)()||{}).userAgent||"").toLowerCase();o=-1!==e.indexOf("msie")||-1!==e.indexOf("trident/")}return o},e.randomValue=function(t){return t>0?Math.floor(e.random32()/4294967295*(t+1))>>>0:0},e.random32=function(t){var n,i=Object(r.b)()||Object(r.h)();return i&&i.getRandomValues?n=4294967295&i.getRandomValues(new Uint32Array(1))[0]:e.isIE()?(a||u(),n=4294967295&e.mwcRandom32()):n=Math.floor(4294967296*Math.random()|0),t||(n>>>=0),n},e.mwcRandomSeed=function(e){e?l(e):u()},e.mwcRandom32=function(e){var t=((c=36969*(65535&c)+(c>>16)&4294967295)<<16)+(65535&(s=18e3*(65535&s)+(s>>16)&4294967295))>>>0&4294967295|0;return e||(t>>>=0),t},e.generateW3CId=function(){for(var t,n=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],i="",r=0;r<4;r++)i+=n[15&(t=e.random32())]+n[t>>4&15]+n[t>>8&15]+n[t>>12&15]+n[t>>16&15]+n[t>>20&15]+n[t>>24&15]+n[t>>28&15];var o=n[8+(3&e.random32())|0];return i.substr(0,8)+i.substr(9,4)+"4"+i.substr(13,3)+o+i.substr(16,3)+i.substr(19,12)},e.isTypeof=d,e.isUndefined=p,e.isNullOrUndefined=f,e.hasOwnProperty=h,e.isFunction=m,e.isObject=g,e.objCreate=i.b,e}(),E=/[xy]/g,T=function(){function e(){}return e.Attach=v,e.AttachEvent=v,e.Detach=S,e.DetachEvent=S,e}()},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default={MEDIA_STATE:{send:"sendonly",receive:"recvonly",sendReceive:"sendrecv",inactive:"inactive"},MEDIA_DIRECTION:{SEND:"send",RECV:"recv"},MEDIA_DEVICE_KIND:{audioInput:"audioinput",audioOutput:"audiooutput",videoInput:"videoinput",compositeAudio:"compositeAudio"},MEDIA_DEVICE:{camera:"camera",microphone:"microphone",speaker:"speaker",compositeAudio:"compositeAudio",defaultId:"default",communicationsId:"communications",defaultDeviceLabel:"Default"},MEDIA_ERROR:{constraintNotSatisfiedError:"ConstraintNotSatisfiedError",iceConnectionError:"iceConnectionError",srtpError:"srtpError",permissionDeniedError:"permissionDeniedError",internalError:"internalError",sourceUnavailableError:"SourceUnavailableError",devicesNotFoundError:"DevicesNotFoundError",noDeviceSelected:"noDeviceSelected",noNetworkError:"noNetworkError",incompatibleOffer:"IncompatibleOffer",mediaStreamRequestError:"MediaStreamRequestError",extensionNotFoundError:"ExtensionNotFoundError",sharingCancelledError:"SharingCancelledError",permissionDeniedBySystemError:"PermissionsDeniedBySystem",chromeRuntimeNotDefinedError:"ChromeRuntimeNotDefinedError",mediaStreamRequestTimedOut:"MediaStreamRequestTimedout"},HISTOGRAM_BATCH:{seconds1to3:2,seconds3to5:4,seconds5to8:7,seconds8to15:14,seconds15to60:59,seconds60toMax:1e6},RENEGOTIATION_ERROR:{local:"local",glare:"glare",signaling:"signaling",media:"media",escalation:"escalation"},MSI:{unsubscribe:-1,subscribeAny:-2},MEDIA_LABEL:{audio:"main-audio",video:"main-video",sharing:"applicationsharing-video",data:"data"},MEDIA_TYPE:{audio:"audio",video:"video",sharing:"sharing",data:"x-data",dataChannel:"application"},MODALITY:{audio:"audio",video:"video",sharing:"sharing",data:"data"},ICE_TRANSPORT_POLICY:{all:"all",relay:"relay"},EXTENSION_TYPE:{dominantSpeakerHistory:"dominantSpeakerHistory",videoStreamControl:"videoStreamControl"},RENDERER_TYPE:{video:"video",sharing:"sharing"},CONTENT_TYPE:{SDP:"application/sdp"},ALLOWED_CONTENT_TYPES:{SDP_ONLY:["application/sdp"],SDP_NGC:["application/sdp","application/sdp-ngc-0.5","application/sdp-ngc-1.0"]},STREAMING_STATE:{created:"created",started:"started",active:"active",inactive:"inactive",stopped:"stopped",removed:"removed",failed:"failed"},TIME_INTERVAL:{SEC_1:1},DISPLAY_SOURCE_ID:"display",SYSTEM_AUDIO_SOURCE_ID:"system",MULTIPLE_RECV_STREAMS:"multipleVideoStreams",PROFILES:{udpTlsRtpSavpf:"UDP/TLS/RTP/SAVPF",rtpSavpf:"RTP/SAVPF",rtpSavp:"RTP/SAVP",udpDtlsSctp:"UDP/DTLS/SCTP"},REPORTING_PROFILE:{RT_PROFILE:"REAL_TIME",BE_PROFILE:"BEST_EFFORT",NRT_PROFILE:"NEAR_REAL_TIME"},PAYLOAD_TYPE:{DATA_CHANNEL:"webrtc-datachannel"},VIDEO_CAPABILITIES:{MAX_FS_PATH:"max-fs",MAX_MBPS_PATH:"max-mbps",MAX_FPS_PATH:"max-fps",MAX_BR_PATH:"max-br",SSRC_PATH:"ssrc",KEYFRAME_PATH:"KeyFrame",MAX_WIDTH:"max-width",MAX_HEIGHT:"max-height"},TRANSPORT_CC:{EXT_URI:"http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01",ATTRIBUTE:"transport-cc"}}},function(e,t,n){n.r(t),n.d(t,"Version",(function(){return c})),n.d(t,"FullVersionString",(function(){return l})),n.d(t,"strUndefined",(function(){return u})),n.d(t,"strObject",(function(){return d})),n.d(t,"arrForEach",(function(){return E})),n.d(t,"arrIndexOf",(function(){return T})),n.d(t,"arrMap",(function(){return C})),n.d(t,"arrReduce",(function(){return I})),n.d(t,"objKeys",(function(){return A})),n.d(t,"toISOString",(function(){return b})),n.d(t,"isReactNative",(function(){return R})),n.d(t,"isString",(function(){return O})),n.d(t,"isNumber",(function(){return P})),n.d(t,"isBoolean",(function(){return N})),n.d(t,"isFunction",(function(){return M})),n.d(t,"isArray",(function(){return w})),n.d(t,"isObject",(function(){return D})),n.d(t,"strTrim",(function(){return L})),n.d(t,"isDocumentObjectAvailable",(function(){return k})),n.d(t,"isWindowObjectAvailable",(function(){return F})),n.d(t,"isValueAssigned",(function(){return x})),n.d(t,"getTenantId",(function(){return U})),n.d(t,"isBeaconsSupported",(function(){return j})),n.d(t,"isUint8ArrayAvailable",(function(){return B})),n.d(t,"isLatency",(function(){return H})),n.d(t,"sanitizeProperty",(function(){return G})),n.d(t,"getISOString",(function(){return V})),n.d(t,"useXDomainRequest",(function(){return W})),n.d(t,"getCommonSchemaMetaData",(function(){return q})),n.d(t,"cookieAvailable",(function(){return K})),n.d(t,"disallowsSameSiteNone",(function(){return z})),n.d(t,"setCookie",(function(){return J})),n.d(t,"deleteCookie",(function(){return Y})),n.d(t,"getCookie",(function(){return $})),n.d(t,"createGuid",(function(){return Q})),n.d(t,"extend",(function(){return X})),n.d(t,"getTime",(function(){return Z})),n.d(t,"isValueKind",(function(){return te})),n.d(t,"isArrayValid",(function(){return ne})),n.d(t,"objDefineAccessors",(function(){return ie})),n.d(t,"addPageUnloadEventListener",(function(){return re})),n.d(t,"setProcessTelemetryTimings",(function(){return oe})),n.d(t,"addEventHandler",(function(){return ae})),n.d(t,"getCrypto",(function(){return se})),n.d(t,"objForEachKey",(function(){return ce})),n.d(t,"getFieldValueType",(function(){return le})),n.d(t,"strEndsWith",(function(){return ue}));var i,r=n(11),o=n(13),a=n(1),s=n(5),c="3.0.1",l="1DS-Web-JS-"+c,u="undefined",d="object",p=((i={})[0]=o.c.Unspecified,i[2]=o.c.Double,i[1]=o.c.String,i[3]=o.c.Bool,i[4098]=o.c.Double,i[4097]=o.c.String,i[4099]=o.c.Bool,i),f=null,h=a.a.isUndefined,g=a.a.isNullOrUndefined;function m(e){return!h(e)}var v,S=a.a.hasOwnProperty,y=null,_=null,E=a.a.arrForEach,T=a.a.arrIndexOf,C=a.a.arrMap,I=a.a.arrReduce,A=a.a.objKeys,b=a.a.toISOString,R=s.n,O=a.a.isString,P=a.a.isNumber,N=a.a.isBoolean,M=a.a.isFunction,w=a.a.isArray,D=a.a.isObject,L=a.a.strTrim,k=Boolean(Object(s.c)()),F=Boolean(Object(s.k)());function x(e){return!(g(e)||""===e)}function U(e){if(e){var t=e.indexOf("-");if(t>-1)return e.substring(0,t)}return""}function j(){return null===y&&(y=Object(s.m)()&&Boolean(Object(s.i)().sendBeacon)),y}function B(){return null===_&&(_=m(Uint8Array)&&!function(){var e=Object(s.i)();if(m(e)&&e.userAgent){var t=e.userAgent.toLowerCase();if((t.indexOf("safari")>=0||t.indexOf("firefox")>=0)&&t.indexOf("chrome")<0)return!0}return!1}()&&!R()),_}function H(e){return!!(e&&P(e)&&e>=1&&e<=3)}function G(e,t,n){if(!O(e)||g(t)||""===t)return null;if(O(t)||P(t)||N(t)||w(t))t={value:t};else if("object"!=typeof t||t.hasOwnProperty("value")){if(g(t.value)||""===t.value||!O(t.value)&&!P(t.value)&&!N(t.value)&&!w(t.value))return null}else t={value:n?JSON.stringify(t):t};if(w(t.value)&&!ne(t.value))return null;if(!g(t.kind)){if(w(t.value)||!te(t.kind))return null;t.value=t.value.toString()}return t}function V(e){return e.getUTCFullYear()+"-"+ee(e.getUTCMonth()+1)+"-"+ee(e.getUTCDate())+"T"+ee(e.getUTCHours())+":"+ee(e.getUTCMinutes())+":"+ee(e.getUTCSeconds())+"."+function(e){return e<10?"00"+e:e<100?"0"+e:e.toString()}(e.getUTCMilliseconds())+"Z"}function W(){if(void 0!==typeof XMLHttpRequest){var e=Object(s.e)("XMLHttpRequest");if(e){var t=new e;return Boolean(h(t.withCredentials)&&void 0!==typeof XDomainRequest)}}}function q(e,t,n){var i=-1;if(!h(e))if(t>0&&(32===t?i=8192:t<=13&&(i=t<<5)),function(e){return!!(P(e)&&e>=0&&e<=9)}(n))-1===i&&(i=0),i|=n;else{var r=p[le(e)]||-1;-1!==i&&-1!==r?i|=r:r===o.c.Double&&(i=r)}return i}function K(){if(void 0===v){v=!1;try{var e=Object(s.c)(),t=Object(s.i)();e&&!h(e.cookie)&&t&&t.cookieEnabled&&(v=!0)}catch(e){}}return v}function z(e){return!!O(e)&&(-1!==e.indexOf("CPU iPhone OS 12")||-1!==e.indexOf("iPad; CPU OS 12")||-1!==e.indexOf("Macintosh; Intel Mac OS X 10_14")&&-1!==e.indexOf("Version/")&&-1!==e.indexOf("Safari")||!(-1===e.indexOf("Macintosh; Intel Mac OS X 10_14")||!ue(e,"AppleWebKit/605.1.15 (KHTML, like Gecko)"))||-1!==e.indexOf("Chrome/5")||-1!==e.indexOf("Chrome/6")||-1!==e.indexOf("UnrealEngine")&&-1===e.indexOf("Chrome")||-1!==e.indexOf("UCBrowser/12")||-1!==e.indexOf("UCBrowser/11"))}function J(e,t,n){if(K()){var i="",r=Object(s.g)();r&&"https:"===r.protocol&&(i=";secure",null===f&&(f=z((Object(s.i)()||{}).userAgent)),f||(t+=";SameSite=None"));var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var a="; expires="+o.toUTCString();Object(s.c)().cookie=e+"="+t+a+"; path=/"+i}}function Y(e){J(e,"",-1)}function $(e){if(K()){e+="=";for(var t=decodeURIComponent((Object(s.c)()||{}).cookie||"").split(";"),n=0;n<t.length;n++){for(var i=t[n],r=0;" "===i.charAt(r);)r++;if(0===(i=i.substring(r)).indexOf(e))return i.substring(e.length,i.length)}}return""}function Q(e){void 0===e&&(e="D");var t=a.a.newGuid();return"B"===e?t="{"+t+"}":"P"===e?t="("+t+")":"N"===e&&(t=t.replace(/-/g,"")),t}function X(e,t,n,i,r){var o={},a=!1,s=0,c=arguments.length,l=arguments;for("[object Boolean]"===Object.prototype.toString.call(l[0])&&(a=l[0],s++);s<c;s++)e=l[s],ce(e,(function(e,t){a&&t&&D(t)?o[e]=X(!0,o[e],t):o[e]=t}));return o}var Z=a.a.perfNow;function ee(e){return e<10?"0"+e:e.toString()}function te(e){return!(!P(e)||!(e>=o.e.NotSet&&e<=o.e.Pii_IPV4AddressLegacy||e===o.e.CustomerContent_GenericContent))}function ne(e){return e.length>0}var ie=a.a.objDefineAccessors;function re(e){var t=ae("beforeunload",e);return t=ae("unload",e)||t,ae("pagehide",e)||t}function oe(e,t){var n=e;n.timings=n.timings||{},n.timings.processTelemetryStart=n.timings.processTelemetryStart||{},n.timings.processTelemetryStart[t]=Z()}var ae=a.a.addEventHandler,se=s.b,ce=a.b;function le(e){var t=0;if(null!=e){var n=typeof e;"string"===n?t=1:"number"===n?t=2:"boolean"===n?t=3:n===r.d&&(t=4,w(e)?(t=4096,e.length>0&&(t|=le(e[0]))):S(e,"value")&&(t=8192|le(e.value)))}return t}function ue(e,t){return void 0!==e&&void 0!==t&&-1!==e.indexOf(t,e.length-t.length)}},function(e,t,n){
/*!
     * Microsoft Dynamic Proto Utility, 1.1.0
     * Copyright (c) Microsoft and contributors. All rights reserved.
     */
/*!
     *  AufLog.ts
     *  AUF
     *
     *  Created by Johan Blumenberg on 2016-12-29
     *  Copyright 2016 Microsoft. All rights reserved.
     *
     */
function i(e,t){var n=0;return e.replace(/%[dixs%]/g,(function(e){var i=0;if("%"!==e[i++])return"";var r=e[i++];return"%"===r?"%":"s"===r||"d"===r||"i"===r?t[n++]:"x"===r?t[n++].toString(16):e}))}Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Trace=10]="Trace",e[e.Debug6=16]="Debug6",e[e.Debug5=18]="Debug5",e[e.Debug4=20]="Debug4",e[e.Debug3=30]="Debug3",e[e.Debug2=40]="Debug2",e[e.Debug1=50]="Debug1",e[e.Warning=60]="Warning",e[e.Error=70]="Error",e[e.Fatal=80]="Fatal",e[e.MetaData=90]="MetaData"}(t.LogLevel||(t.LogLevel={})),function(e){e[e.UseDefault=0]="UseDefault",e[e.Compress=1]="Compress",e[e.Disabled=2]="Disabled"}(t.LogFileCompression||(t.LogFileCompression={})),function(e){e[e.Raw=0]="Raw",e[e.Base64=1]="Base64"}(t.LogFileEncoding||(t.LogFileEncoding={})),function(e){e[e.Unencrypted=0]="Unencrypted",e[e.Encrypted=1]="Encrypted"}(t.LogFileEncryption||(t.LogFileEncryption={})),function(e){e[e.PEM=0]="PEM",e[e.DER=1]="DER",e[e.BER=2]="BER"}(t.CertStoreFormat||(t.CertStoreFormat={})),function(e){e[e.InsertFront=8]="InsertFront"}(t.AppenderFlags||(t.AppenderFlags={})),t.vsprintf=i,t.sprintf=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return i(e,t)}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=n(30);function r(e){return"string"==typeof e?i.pii.Mri(e):i.pii.Omit(e)}t.scrubMriOrOmit=r,t.scrubMriOrOmitList=function(e){return e.forEach(r)},t.mriOrId=function(e){return e&&i.pii.Mri(e)},t.getLoggableThreadId=function(e){var t=function(e){return e&&"99:"===e.substr(0,3)?i.pii.Omit(e):e}(e);return t&&t.substr(0,8)}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e=this;this.msElapsed=0,this.isPaused=!1,this.startTime=(new Date).getTime(),this.pause=function(){e.isPaused||(e.msElapsed+=(new Date).getTime()-e.startTime,e.isPaused=!0)},this.resume=function(){e.isPaused&&(e.isPaused=!1,e.startTime=(new Date).getTime())},this.duration=function(){return e.isPaused?e.msElapsed:e.msElapsed+(new Date).getTime()-e.startTime},this.durationInMinutes=function(){var t=e.duration()/6e4;return Math.ceil(t)},this.durationInSeconds=function(){var t=e.duration()/1e3;return Math.ceil(t)}};t.Stopwatch=i,t.build=function(){return new i}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),r=n(0),o=function(){function e(e){this.id=e.id,this.displayName=e.displayName||" ",this.languageId=e.languageId||null,this.endpointDetails=e.endpointDetails||[],this.acceptedBy=e.acceptedBy,this.role=e.role,this.tenantId=e.tenantId,this.isLobby=e.isLobby,this.meetingRole=e.meetingRole,this.participantId=e.participantId,this.publishedStates=e.publishedStates}return e.isInLobby=function(e,t){for(var n=0,i=e;n<i.length;n++){var r=i[n];if(r.endpointId===t&&r.isLobby)return!0}return!1},e.isServerMuted=function(e,t){for(var n=0,i=e;n<i.length;n++){var r=i[n];if(r.endpointId===t&&r.mediaStreams){for(var o=0,a=r.mediaStreams;o<a.length;o++){var s=a[o];if("audio"===s.type)return void 0!==s.serverMuted&&s.serverMuted}break}}return!1},e.isParticipantServerMuted=function(e){for(var t=0,n=e;t<n.length;t++){var i=n[t];if(i.mediaStreams)for(var r=0,o=i.mediaStreams;r<o.length;r++){var a=o[r];if("audio"===a.type&&!0===a.serverMuted)return!0}}return!1},e.fromWireParticipant=function(t){return r.assertNotNull(t,"invalid wireParticipant"),r.assertNotNullOrEmpty(t.id,"participant must have valid Id"),new e({id:t.id,displayName:t.displayName,languageId:t.languageId,acceptedBy:t.acceptedBy})},e.getPluginlessStateTypeFromWire=function(e){switch(e){case"raiseHands":return"raiseHands";case"ufd":return"ufd";case"attendeeModalitiesUnrestricted":return"attendeeModalitiesUnrestricted";case"attendeeAudioRestricted":return"attendeeAudioRestricted";case"attendeeVideoRestricted":return"attendeeVideoRestricted";case"attendeeVideoUnrestricted":return"attendeeVideoUnrestricted";case"spotlight":return"spotlight";case"manageBreakoutRooms":return"manageBreakoutRooms";default:throw"Invalid state type when converting PublishType to PublishStateType."}},e.findOrCreateTypeState=function(e,t){var n=t.typeStates.findIndex((function(t){return t.type===e}));if(-1===n){var i={participantStates:[],type:e};t.typeStates.push(i),n=t.typeStates.length-1}return n},e.processPublishedStates=function(e,t){var n=this,r={typeStates:[]};r.typeStates=[];var o=e;return i.forEach(o,(function(e){var i=n.findOrCreateTypeState(n.getPluginlessStateTypeFromWire(e.stateType),r),o={id:t,publishedState:{content:e.content,stateId:e.stateId,typeRank:e.typeRank}};r.typeStates[i].participantStates.push(o)})),r},e.fromRosterEndpoints=function(e){var t=!1,n=!1,i=!1;return{endpointDetails:Object.keys(e).map((function(r){var o,a,s=[],c=!1,l=0;if(e[r].call&&(t=!0,s=e[r].call.mediaStreams||null,l=e[r].call.serverMuteVersion||0,a=e[r].call.appliedInteractivityLevel||"unknown"),e[r].lwj&&(n=!0,o=e[r].lwj.lwjSessionInformation||null),e[r].lobby&&(c=!0,i=!0,s=e[r].lobby.mediaStreams||null,o=e[r].lobby.lwjSessionInformation||null),!e[r].capabilities&&e[r].endpointCapabilities){var u=e[r].endpointCapabilities;e[r].capabilities={implicitCallback:16&u?"enabled":"disabled",cloudAudioVideoConference:1&u?"enabled":"disabled",cloudScreenSharing:2&u?"enabled":"disabled",hostlessConference:4&u?"enabled":"disabled",autoJoinOnConflict:32&u?"enabled":"disabled",serverMuteUnmute:64&u?"enabled":"disabled",supportsCompressedServicePayload:128&u?"enabled":"disabled",cloudMerge:8&u?"enabled":"disabled"}}return{endpointId:r,participantId:e[r].participantId||null,clientVersion:e[r].clientVersion||null,endpointMetadata:e[r].endpointMetadata||null,originalId:e[r].originalId||null,contentSharing:e[r].contentSharing||null,capabilities:e[r].capabilities||null,endpointType:e[r].endpointType||"default",deviceType:e[r].deviceType||void 0,clientEndpointCapabilities:e[r].clientEndpointCapabilities||void 0,mediaStreams:s,serverMuteVersion:l,lwjSessionInformation:o,isLobby:c,endpointState:e[r].endpointState||null,publishedStates:e[r].publishedStates||null,callLinks:e[r].callLinks||null,appliedInteractivityLevel:a||"unknown"}})),participantHasCallModality:t,participantHasLightWeightMeetingModality:n,participantIsInLobby:i}},e.fromRoster=function(t){r.assertNotNull(t,"invalid rosterParticipant "+JSON.stringify(t)),r.assertNotNullOrEmpty(t.details.id,"participant must have valid Id");var n=t.endpoints,i=this.fromRosterEndpoints(n),o=i.endpointDetails,a=i.participantHasCallModality,s=i.participantHasLightWeightMeetingModality,c=i.participantIsInLobby;return a||s||c?((a||s)&&(c=!1),new e({id:t.details.id,displayName:t.details.displayName,languageId:t.details.languageId,role:t.role||"",tenantId:t.details.tenantId||"",endpointDetails:o||[],acceptedBy:t.acceptedBy||"",isLobby:c,meetingRole:t.meetingRole,participantId:t.details.participantId,publishedStates:t.publishedStates||null})):null},e.fromRosterSearchResults=function(e){r.assertNotNull(e,"invalid rosterParticipant "+JSON.stringify(e)),r.assertNotNullOrEmpty(e.details.id,"participant must have valid Id");var t=e.endpoints,n=this.fromRosterEndpoints(t),i=n.endpointDetails,o=n.participantHasCallModality,a=n.participantHasLightWeightMeetingModality,s=n.participantIsInLobby,c=0;o||a?c=3:s&&(c=10);var l=t[0]?t[0].participantId:"";return{id:e.details.id,state:c,tenantId:e.details.tenantId||"",displayName:e.details.displayName,role:e.role||"",meetingRole:e.meetingRole,isServerMuted:this.isParticipantServerMuted(i),publishedStates:this.processPublishedStates(e.publishedStates,l),endpoints:i||[]}},e}();t.default=o},function(e,t,n){e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Desktop=1]="Desktop",e[e.Mobile=2]="Mobile",e[e.Tablet=8]="Tablet"}(t.DeviceType||(t.DeviceType={})),function(e){e[e.Unknown=0]="Unknown",e[e.Connected=2]="Connected",e[e.Disconnected=3]="Disconnected",e[e.Switching=9]="Switching"}(t.TrouterState||(t.TrouterState={})),function(e){e[e.None=0]="None",e[e.Mute=1]="Mute",e[e.Unmute=2]="Unmute"}(t.CommandUrlPresence||(t.CommandUrlPresence={}))},function(e,t,n){
/*!
     *  LogFactory.ts
     *  AUF
     *
     *  Created by Johan Blumenberg on 2016-12-29
     *  Copyright 2016 Microsoft. All rights reserved.
     *
     */
var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(8);function s(e){if(null===e)return-1;for(var t=0,n=e.length-1;n>=0;n--)t=37*t+e.charCodeAt(n)|0;var i="__auf_literal:";for(n=i.length-1;n>=0;n--)t=37*t+i.charCodeAt(n)|0;return t}!function(e){e[e.Unsafe=0]="Unsafe",e[e.Safe=1]="Safe",e[e.Inherited_Unsafe=2]="Inherited_Unsafe",e[e.Inherited_Safe=3]="Inherited_Safe",e[e.Blacklisted_Unsafe=4]="Blacklisted_Unsafe"}(o||(o={}));var c,l=function(){function e(e,t){this._level=a.LogLevel.Debug4,this._threshold=255,this._safe=o.Inherited_Unsafe,this._name=e,t&&(this._level=t.level(),this._safe=t.safe()?o.Inherited_Safe:o.Inherited_Unsafe,this._extendedInfo=t.extendedInfo())}return e.prototype.name=function(){return this._name},e.prototype.safe=function(){return this._safe===o.Safe||this._safe===o.Inherited_Safe},e.prototype.safety=function(){return this._safe},e.prototype.setSafety=function(e){this._safe=e},e.prototype.description=function(){return this._desc},e.prototype.setDescription=function(e){this._desc=e},e.prototype.level=function(){return this._level},e.prototype.setLevel=function(e){c.setLevel(this,e)},e.prototype._setLevel=function(e){this._level=e},e.prototype._setThreshold=function(e){this._threshold=e},e.prototype.isEnabled=function(e){return this._threshold<=e},e.prototype.setExtendedInfo=function(e){this._extendedInfo=e},e.prototype.extendedInfo=function(){return this._extendedInfo},e.prototype.trace=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.log.apply(c,[this,a.LogLevel.Trace,s(e),e].concat(t))},e.prototype.debug6=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.log.apply(c,[this,a.LogLevel.Debug6,s(e),e].concat(t))},e.prototype.debug5=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.log.apply(c,[this,a.LogLevel.Debug5,s(e),e].concat(t))},e.prototype.debug4=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.log.apply(c,[this,a.LogLevel.Debug4,s(e),e].concat(t))},e.prototype.debug3=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.log.apply(c,[this,a.LogLevel.Debug3,s(e),e].concat(t))},e.prototype.debug2=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.log.apply(c,[this,a.LogLevel.Debug2,s(e),e].concat(t))},e.prototype.debug1=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.log.apply(c,[this,a.LogLevel.Debug1,s(e),e].concat(t))},e.prototype.warn=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.log.apply(c,[this,a.LogLevel.Warning,s(e),e].concat(t))},e.prototype.error=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.log.apply(c,[this,a.LogLevel.Error,s(e),e].concat(t))},e.prototype.fatal=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.log.apply(c,[this,a.LogLevel.Fatal,s(e),e].concat(t))},e.prototype.meta=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.log.apply(c,[this,a.LogLevel.MetaData,s(e),e].concat(t))},e}(),u=function(){function e(){}return e.instance=function(){return c},e.levelToString=function(e){return e<=a.LogLevel.Trace?"TRACE":e<=a.LogLevel.Debug6?"DEBUG6":e<=a.LogLevel.Debug5?"DEBUG5":e<=a.LogLevel.Debug4?"DEBUG4":e<=a.LogLevel.Debug3?"DEBUG3":e<=a.LogLevel.Debug2?"DEBUG2":e<=a.LogLevel.Debug1?"DEBUG1":e<=a.LogLevel.Warning?"WARN":e<=a.LogLevel.Error?"ERROR":e<=a.LogLevel.Fatal?"FATAL":(a.LogLevel.MetaData,"META")},e.levelFromString=function(e){return this._levelFromString[e]||parseInt(e,10)},e}();function d(e,t){for(var n=t.name();n.length>0;){if(e[n])return e[n];var i=n.lastIndexOf(".");n=i<0?"":n.substr(0,i)}return e[""]?e[""]:a.LogLevel.Debug4}function p(e,t){var n=255;return t.forEach((function(t){var i=255;t.appender.levels()?i=Math.min(i,d(t.appender.levels(),e)):t.appender.receiveAll()||(i=Math.min(i,e.level())),n=Math.min(n,i)})),n}function f(e,t,n){return!!e.appender.receiveAll()||(e.appender.levels()?n>=d(e.appender.levels(),t):n>=t.level())}u._levelFromString={TRACE:a.LogLevel.Trace,DEBUG6:a.LogLevel.Debug6,DEBUG5:a.LogLevel.Debug5,DEBUG4:a.LogLevel.Debug4,DEBUG3:a.LogLevel.Debug3,DEBUG2:a.LogLevel.Debug2,DEBUG1:a.LogLevel.Debug1,WARN:a.LogLevel.Warning,ERROR:a.LogLevel.Error,FATAL:a.LogLevel.Fatal,META:a.LogLevel.MetaData},t.LogFactory=u;var h=function(e){function t(){var t=e.call(this)||this;return t._nextId=0,t._appenders=[],t._components={},t._componentBlacklist=[],t._components[""]=new l("",null),t}return r(t,e),t.prototype.toHex=function(e){return(4294967296+e).toString(16).substr(-8)},t.prototype.addAppender=function(e,t){void 0===t&&(t=0);var n=this._nextId++;return t&a.AppenderFlags.InsertFront?this._appenders.unshift({appender:e,handle:n}):this._appenders.push({appender:e,handle:n}),this.recalcComponentThresholds(),n},t.prototype.removeAppender=function(e){for(var t=0;t<this._appenders.length;t++)if(this._appenders[t].handle===e){this._appenders.splice(t,1);break}this.recalcComponentThresholds()},t.prototype.log=function(e,t,n,i){for(var r=[],o=4;o<arguments.length;o++)r[o-4]=arguments[o];try{if(e.isEnabled(t)){var a={timestamp:(new Date).getTime(),component:e,level:t};this._appenders.forEach((function(o){f(o,e,t)&&o.appender.log(a,n,i,r)}))}}catch(e){}},t.prototype.parent=function(e){for(;;){var t=e.lastIndexOf(".");if(e=t>=0?e.substr(0,t):"",this._components[e])return this._components[e]}},t.prototype.children=function(e){var t=[];for(var n in this._components)this.parent(n).name()===e&&t.push(this._components[n]);return t},t.prototype.component=function(e){if(this._components[e])return this._components[e];var t=new l(e,this.parent(e));this._components[e]=t;var n=p(t,this._appenders);return t._setThreshold(n),t},t.prototype.rootComponent=function(){return this.component("")},t.prototype.setSafetyRecursive=function(e,t){var n=this;this.children(e).forEach((function(e){e.safety()!==o.Inherited_Safe&&e.safety()!==o.Inherited_Unsafe||(e.setSafety(t),n.setSafetyRecursive(e.name(),t))}))},t.prototype.declareComponentSafe=function(e,t){var n=this.component(e);-1!==this._componentBlacklist.indexOf(n.name())?n.setSafety(o.Blacklisted_Unsafe):n.setSafety(t?o.Safe:o.Unsafe),this.setSafetyRecursive(e,t?o.Inherited_Safe:o.Inherited_Unsafe)},t.prototype.declareComponentDescription=function(e,t){this.component(e).setDescription(t)},t.prototype.setExtendedInfoRecursive=function(e,t){var n=this;this.children(e).forEach((function(e){void 0===e.extendedInfo()&&(e.setExtendedInfo(t),n.setExtendedInfoRecursive(e.name(),t))}))},t.prototype.declareComponentExtendedInfo=function(e,t){var n=this.component(e);n.setExtendedInfo(t),this.setExtendedInfoRecursive(n.name(),t)},t.prototype.recalcComponentThresholds=function(){for(var e in this._components){var t=this._components[e],n=p(t,this._appenders);t._setThreshold(n)}},t.prototype.setLevel=function(e,t){if(""===e.name())for(var n in this._components){(o=this._components[n])._setLevel(t);var i=p(o,this._appenders);o._setThreshold(i)}else{var r=e.name()+".";for(var n in e._setLevel(t),i=p(e,this._appenders),e._setThreshold(i),this._components){var o;if((o=this._components[n]).name().substr(0,r.length)===r){o._setLevel(t);var a=p(o,this._appenders);o._setThreshold(a)}}}},t.prototype.setComponentBlacklist=function(e){for(var t in this._componentBlacklist=e,this._components){var n=this._components[t];-1!==this._componentBlacklist.indexOf(n.name())&&n.setSafety(o.Blacklisted_Unsafe)}},t}(u);c=new h},function(e,t,n){e.exports=function(e,t,n,i){for(var r=65535&e|0,o=e>>>16&65535|0,a=0;0!==n;){n-=a=n>2e3?2e3:n;do{o=o+(r=r+t[i++]|0)|0}while(--a);r%=65521,o%=65521}return r|o<<16|0}},function(e,t,n){var i=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var i=0;i<8;i++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();e.exports=function(e,t,n,r){var o=i,a=r+n;e^=-1;for(var s=r;s<a;s++)e=e>>>8^o[255&(e^t[s])];return-1^e}},function(e,t,n){var i=n(6),r=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch(e){r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){o=!1}for(var a=new i.Buf8(256),s=0;s<256;s++)a[s]=s>=252?6:s>=248?5:s>=240?4:s>=224?3:s>=192?2:1;function c(e,t){if(t<65534&&(e.subarray&&o||!e.subarray&&r))return String.fromCharCode.apply(null,i.shrinkBuf(e,t));for(var n="",a=0;a<t;a++)n+=String.fromCharCode(e[a]);return n}a[254]=a[254]=1,t.string2buf=function(e){var t,n,r,o,a,s=e.length,c=0;for(o=0;o<s;o++)55296==(64512&(n=e.charCodeAt(o)))&&o+1<s&&56320==(64512&(r=e.charCodeAt(o+1)))&&(n=65536+(n-55296<<10)+(r-56320),o++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=new i.Buf8(c),a=0,o=0;a<c;o++)55296==(64512&(n=e.charCodeAt(o)))&&o+1<s&&56320==(64512&(r=e.charCodeAt(o+1)))&&(n=65536+(n-55296<<10)+(r-56320),o++),n<128?t[a++]=n:n<2048?(t[a++]=192|n>>>6,t[a++]=128|63&n):n<65536?(t[a++]=224|n>>>12,t[a++]=128|n>>>6&63,t[a++]=128|63&n):(t[a++]=240|n>>>18,t[a++]=128|n>>>12&63,t[a++]=128|n>>>6&63,t[a++]=128|63&n);return t},t.buf2binstring=function(e){return c(e,e.length)},t.binstring2buf=function(e){for(var t=new i.Buf8(e.length),n=0,r=t.length;n<r;n++)t[n]=e.charCodeAt(n);return t},t.buf2string=function(e,t){var n,i,r,o,s=t||e.length,l=new Array(2*s);for(i=0,n=0;n<s;)if((r=e[n++])<128)l[i++]=r;else if((o=a[r])>4)l[i++]=65533,n+=o-1;else{for(r&=2===o?31:3===o?15:7;o>1&&n<s;)r=r<<6|63&e[n++],o--;o>1?l[i++]=65533:r<65536?l[i++]=r:(r-=65536,l[i++]=55296|r>>10&1023,l[i++]=56320|1023&r)}return c(l,i)},t.utf8border=function(e,t){var n;for((t=t||e.length)>e.length&&(t=e.length),n=t-1;n>=0&&128==(192&e[n]);)n--;return n<0||0===n?t:n+a[e[n]]>t?n:t}},function(e,t,n){e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},function(e,t,n){e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=n(50);function r(e,t){return null==e?t:e}t.default=function(e){e.cloudScreenSharingFlag="disabled"===e.cloudScreenSharingFlag?e.cloudScreenSharingFlag:"enabled",e.isWebRtcEnabled="undefined"==typeof RTCIceGatherer,e.shouldServiceSendNGCUpgradeMessages=r(e.shouldServiceSendNGCUpgradeMessages,!0),e.isGVCOutgoingEnabled=r(e.isGVCOutgoingEnabled,!0),e.handleRosterFromCreateAndJoin=r(e.handleRosterFromCreateAndJoin,!0),e.supportsCompressedServicePayload=r(e.supportsCompressedServicePayload,!0),e.supportsSynchronousTrouterResponse=r(e.supportsSynchronousTrouterResponse,!0),e.supportsHostlessGroupCalls=r(e.supportsHostlessGroupCalls,!0),e.doHostlessCalling=r(e.doHostlessCalling,!1),e.brokerExclusively=r(e.brokerExclusively,!1),e.brokerEnabledOutgoing=r(e.brokerEnabledOutgoing,!0),e.brokerEnabledIncoming=r(e.brokerEnabledIncoming,!0),e.brokerRequestBatching=r(e.brokerRequestBatching,!0),e.handleMediaOfferFromPushNotification=r(e.handleMediaOfferFromPushNotification,!0),e.handleNewOfferRequest=r(e.handleNewOfferRequest,!1),e.autoJoinOnConflict=r(e.autoJoinOnConflict,!0),e.endConflictedCall=r(e.endConflictedCall,!1),e.autoResolveConflictedCall=r(e.autoResolveConflictedCall,!1),e.shouldServiceSendCallEventMessages=r(e.shouldServiceSendCallEventMessages,!1),e.handleUnmuteMuteFromResponse=r(e.handleUnmuteMuteFromResponse,!1),e.forceTrouterReconnectOnNetworkOnline=r(e.forceTrouterReconnectOnNetworkOnline,!0),e.attemptHttpRequestWithCachedSkypetoken=r(e.attemptHttpRequestWithCachedSkypetoken,!0),e.useInternalHttpDispatcher=r(e.useInternalHttpDispatcher,!1),e.enableTokenCache=r(e.enableTokenCache,!1),e.enableTokenPrefetch=r(e.enableTokenPrefetch,!1),e.hedgeDelayMs=r(e.hedgeDelayMs,3e3),e.hedgeMaxParallelAttempts=r(e.hedgeMaxParallelAttempts,3),e.useInternalHttpDispatcher&&(e.httpRequestDispatcher=new i.HttpRequestDispatcher(e.logger)),e.overrideDisplayName=r(e.overrideDisplayName,!1),e.enableDeltaRosterWeb=r(e.enableDeltaRosterWeb,!1),e.processSelfDataFromSubscribeResponse=r(e.processSelfDataFromSubscribeResponse,!0),e.enableMusicOnHoldV2=r(e.enableMusicOnHoldV2,!1),e.enablePstnMasking=r(e.enablePstnMasking,!0)}},function(e,t,n){e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}}},function(e,t,n){var i=n(3);function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(i.isURLSearchParams(t))o=t.toString();else{var a=[];i.forEach(t,(function(e,t){null!=e&&(i.isArray(e)?t+="[]":e=[e],i.forEach(e,(function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},function(e,t,n){e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){(function(t){var i=n(3),r=n(57),o={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n(26)),s),transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),i.forEach(["post","put","patch"],(function(e){c.headers[e]=i.merge(o)})),e.exports=c}).call(this,n(25))},function(e,t){var n,i,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var c,l=[],u=!1,d=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&f())}function f(){if(!u){var e=s(p);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||u||s(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,n){var i=n(3),r=n(58),o=n(22),a=n(60),s=n(63),c=n(64),l=n(27);e.exports=function(e){return new Promise((function(t,u){var d=e.data,p=e.headers;i.isFormData(d)&&delete p["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",g=e.auth.password||"";p.Authorization="Basic "+btoa(h+":"+g)}var m=a(e.baseURL,e.url);if(f.open(e.method.toUpperCase(),o(m,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in f?s(f.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:n,config:e,request:f};r(t,u,i),f=null}},f.onabort=function(){f&&(u(l("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){u(l("Network Error",e,null,f)),f=null},f.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),u(l(t,e,"ECONNABORTED",f)),f=null},i.isStandardBrowserEnv()){var v=n(66),S=(e.withCredentials||c(m))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;S&&(p[e.xsrfHeaderName]=S)}if("setRequestHeader"in f&&i.forEach(p,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete p[t]:f.setRequestHeader(t,e)})),i.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),e.responseType)try{f.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){f&&(f.abort(),u(e),f=null)})),void 0===d&&(d=null),f.send(d)}))}},function(e,t,n){var i=n(59);e.exports=function(e,t,n,r,o){var a=new Error(e);return i(a,t,n,r,o)}},function(e,t,n){var i=n(3);e.exports=function(e,t){t=t||{};var n={},r=["url","method","params","data"],o=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];i.forEach(r,(function(e){void 0!==t[e]&&(n[e]=t[e])})),i.forEach(o,(function(r){i.isObject(t[r])?n[r]=i.deepMerge(e[r],t[r]):void 0!==t[r]?n[r]=t[r]:i.isObject(e[r])?n[r]=i.deepMerge(e[r]):void 0!==e[r]&&(n[r]=e[r])})),i.forEach(a,(function(i){void 0!==t[i]?n[i]=t[i]:void 0!==e[i]&&(n[i]=e[i])}));var s=r.concat(o).concat(a),c=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return i.forEach(c,(function(i){void 0!==t[i]?n[i]=t[i]:void 0!==e[i]&&(n[i]=e[i])})),n}},function(e,t,n){function i(e){this.message=e}i.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},i.prototype.__CANCEL__=!0,e.exports=i},function(e,t,n){
/*!
     *  index.ts
     *  AUF
     *
     *  Created by Johan Blumenberg on 2016-12-29
     *  Copyright 2016 Microsoft. All rights reserved.
     *
     */
function i(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),i(n(8)),i(n(14)),i(n(71)),i(n(32)),i(n(75))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){
/*!
     *  Appenders.ts
     *  AUF
     *
     *  Created by Johan Blumenberg on 2016-12-29
     *  Copyright 2016 Microsoft. All rights reserved.
     *
     */
var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(8),s=n(14),c=function(){function e(e){this._formatter=e||new d}return e.prototype.formatter=function(){return this._formatter},e.prototype.receiveAll=function(){return!1},e.prototype.levels=function(){return null},e}();function l(e){return(4294967296+e).toString(16).substr(-8)}function u(e,t){return(1e12+e).toString(10).substr(-t)}t.AbstractLogAppender=c,function(e){e[e.Timestamp=1]="Timestamp",e[e.Component=4]="Component",e[e.Level=8]="Level",e[e.FullDate=32]="FullDate",e[e.LogId=64]="LogId"}(o=t.SLF_Flags||(t.SLF_Flags={}));var d=function(){function e(e){void 0===e&&(e=4294967295),this._flags=e}return e.prototype.format=function(e,t,n,i){var r="";if(this._flags&o.FullDate)r+=new Date(e.timestamp).toISOString()+" ";else if(this._flags&o.Timestamp){var c=new Date(e.timestamp);r+=u(c.getHours(),2)+":"+u(c.getMinutes(),2)+":"+u(c.getSeconds(),2)+"."+u(c.getMilliseconds(),2)+" "}return this._flags&o.LogId&&(r+="[#"+l(t)+"-"+(e.component.safe()?"S":"u")+"] "),this._flags&o.Level&&(r+="["+s.LogFactory.levelToString(e.level)+"] "),this._flags&o.Component&&(r+="["+e.component.name()+"] "),n||""===n?r+a.vsprintf(n,i):r+l(t)+": "+i.join(" ")},e}();t.StandardLogFormatter=d;var p=console,f=console.log||function(){},h=console.info||f,g=console.warn||h,m=console.error||g,v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.log=function(e,t,n,i){i=i.slice(0);var r=e.level<=a.LogLevel.Debug3?f:e.level<=a.LogLevel.Debug1?h:e.level<=a.LogLevel.Warning?g:m;if(-1===t){var o=this.formatter().format(e,t,"",[]);"string"==typeof i[0]&&(o+=i.shift()),r.apply(p,[o].concat(i))}else{for(var s=void 0,c=[];s=n.match(/\s*%@\s*$/);)n=n.substr(0,n.length-s[0].length),c.unshift(i.pop());o=this.formatter().format(e,t,n,i),r.apply(p,[o].concat(c))}},t}(c);t.ConsoleAppender=v;var S=function(){function e(e){this._chained=e}return e.prototype.log=function(e,t,n,i){this._chained.log(e,t,n,i)},e.prototype.receiveAll=function(){return this._chained.receiveAll()},e.prototype.levels=function(){return this._chained.levels()},e}();t.ChainedLogAppender=S;var y=function(e){function t(t,n){var i=e.call(this,t)||this;return i._levels=n,i}return r(t,e),t.prototype.levels=function(){return this._levels},t}(S);t.wrapAppenderWithLogLevels=function(e,t){return new y(e,t)}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.isStringBase64=function(e){if(!e)return!1;try{return atob(e),!0}catch(e){return!1}},t.isPromiseLike=function(e){return!!e&&"function"==typeof e.then}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this.piiScrubber=this.getPiiScrubber(e)}return e.prototype.scrubParticipantsList=function(e){var t=this,n=[];return Array.isArray(e)&&e.forEach((function(e){return n.push(t.scrubMriOrOmit(e))})),n},e.prototype.scrubMriOrOmit=function(e){return"string"==typeof e?this.piiScrubber.mri(e):this.piiScrubber.omit(e)},e.prototype.getPiiScrubber=function(e){return e&&"function"==typeof e.omit&&"function"==typeof e.mri?e:{omit:function(){return"<pii:omit/>"},mri:function(){return"<pii:mri/>"}}},e}();t.default=i},function(e,t,n){var i,r=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.asap=function(e){return new Promise((function(t){t(e())}))};var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t}(Error);t.TimeoutError=o;var a=function(){function e(){}return e.build=function(e,t){return new s(e,t)},e}();t.TimerFactory=a;var s=function(){function e(e,t){this.ontimeout=e,this.name=t}return e.prototype.start=function(e){var t=this;if(this.timeoutId)throw new Error("Timer "+this.name+" already started");return this.timeoutId=window.setTimeout((function(){return t.ontimeout()}),e),this},e.prototype.stop=function(){if(!this.timeoutId)throw new Error("Timer "+this.name+" is not defined");clearTimeout(this.timeoutId),this.timeoutId=null},e}();t.Timer=s,t.defer=function(){var e,t;return{promise:new Promise((function(n,i){e=n,t=i})),resolve:e,reject:t}},t.timedDefer=function(e,t){var n,i;void 0===t&&(t="deferred timed out after "+e+"ms");var r={promise:new Promise((function(e,t){n=function(t){a.stop(),e(t)},i=function(e){a.stop(),t(e)}})),resolve:n,reject:i},a=new s((function(){return r.reject(new o(t))}),"timedDefer");return a.start(e),r}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=n(2),o=n(0);t.getPayload=function(e,t,n,a){o.assertNotNull(e,"signalingSession cannot be null");var s=n.groupId?{id:n.groupId}:null,c=n.threadId?{threadId:n.threadId,messageId:n.messageId||null}:null,l=[],u={};t&&t.length>0?(l=t.map((function(e){return{id:e.id,assertedId:e.assertedId,displayName:e.displayName,participantId:e.participantId}})),u={addParticipantSuccess:r.get(e,i.URL_PATH.CONV_ADD_PARTICIPANT_SUCCESS),addParticipantFailure:r.get(e,i.URL_PATH.CONV_ADD_PARTICIPANT_FAILURE)}):u={addModalitySuccess:r.get(e,i.URL_PATH.CONV_ADD_MODALITY_SUCCESS),addModalityFailure:r.get(e,i.URL_PATH.CONV_ADD_MODALITY_FAILURE)};var d={payload:{disableUnmute:n&&n.disableUnmute,participants:{from:{id:e.participantManager.localParticipant.id,displayName:e.participantManager.localParticipant.displayName,endpointId:e.participantManager.localParticipant.endpointId,participantId:e.participantManager.localParticipant.participantId,languageId:e.participantManager.localParticipant.languageId},to:l},participantInvitationData:n.additionalData,replacementDetails:a,groupContext:s,groupChat:c,links:u}};return n&&n.alternateId&&(d.payload.participants.from.alternateId=n.alternateId),d}},function(e,t){var n=e.exports={v:[{name:"version",reg:/^(\d*)$/}],o:[{name:"origin",reg:/^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,names:["username","sessionId","sessionVersion","netType","ipVer","address"],format:"%s %s %d %s IP%d %s"}],s:[{name:"name"}],i:[{name:"description"}],u:[{name:"uri"}],e:[{name:"email"}],p:[{name:"phone"}],z:[{name:"timezones"}],r:[{name:"repeats"}],t:[{name:"timing",reg:/^(\d*) (\d*)/,names:["start","stop"],format:"%d %d"}],c:[{name:"connection",reg:/^IN IP(\d) (\S*)/,names:["version","ip"],format:"IN IP%d %s"}],b:[{push:"bandwidth",reg:/^(TIAS|AS|CT|RR|RS):(\d*)/,names:["type","limit"],format:"%s:%s"}],m:[{reg:/^(\S*) (\d*) ([\w/]*)(?: (.*))?/,names:["type","port","protocol","payloads"],format:"%s %d %s %s"}],a:[{push:"rtp",reg:/^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,names:["payload","codec","rate","encoding"],format:function(e){return e.encoding?"rtpmap:%d %s/%s/%s":e.rate?"rtpmap:%d %s/%s":"rtpmap:%d %s"}},{push:"fmtp",reg:/^fmtp:(\d*) ([\S| ]*)/,names:["payload","config"],format:"fmtp:%d %s"},{name:"control",reg:/^control:(.*)/,format:"control:%s"},{name:"rtcp",reg:/^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,names:["port","netType","ipVer","address"],format:function(e){return null!=e.address?"rtcp:%d %s IP%d %s":"rtcp:%d"}},{push:"rtcpFbXMessage",reg:/^rtcp-fb:(\*|\d*) x-message ([\S| ]*)/,names:["payload","param"],format:function(e){return"rtcp-fb:"+("*"===e.payload?"%s":"%d")+" x-message %s"}},{push:"rtcpFbTrrInt",reg:/^rtcp-fb:(\*|\d*) trr-int (\d*)/,names:["payload","value"],format:"rtcp-fb:%d trr-int %d"},{push:"rtcpFb",reg:/^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,names:["payload","type","subtype"],format:function(e){return null!=e.subtype?"rtcp-fb:%s %s %s":"rtcp-fb:%s %s"}},{push:"ext",reg:/^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,names:["value","direction","encrypt-uri","uri","config"],format:function(e){return"extmap:%d"+(e.direction?"/%s":"%v")+(e["encrypt-uri"]?" %s":"%v")+" %s"+(e.config?" %s":"")}},{name:"extmapAllowMixed",reg:/^(extmap-allow-mixed)/},{push:"cryptoscale",reg:/^cryptoscale:(\d*) (client|server) ([\w_]*) (\S*)(?: (\S*))?/,names:["id","flavor","suite","config","sessionConfig"],format:function(e){return null!=e.sessionConfig?"cryptoscale:%d %s %s %s %s":"cryptoscale:%d %s %s %s"}},{push:"crypto",reg:/^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,names:["id","suite","config","sessionConfig"],format:function(e){return null!=e.sessionConfig?"crypto:%d %s %s %s":"crypto:%d %s %s"}},{name:"setup",reg:/^setup:(\w*)/,format:"setup:%s"},{name:"connectionType",reg:/^connection:(new|existing)/,format:"connection:%s"},{name:"mid",reg:/^mid:([^\s]*)/,format:"mid:%s"},{name:"msid",reg:/^msid:(.*)/,format:"msid:%s"},{name:"ptime",reg:/^ptime:(\d*(?:\.\d*)*)/,format:"ptime:%d"},{name:"maxptime",reg:/^maxptime:(\d*(?:\.\d*)*)/,format:"maxptime:%d"},{name:"direction",reg:/^(sendrecv|recvonly|sendonly|inactive)/},{name:"icelite",reg:/^(ice-lite)/},{name:"iceUfrag",reg:/^ice-ufrag:(\S*)/,format:"ice-ufrag:%s"},{name:"icePwd",reg:/^ice-pwd:(\S*)/,format:"ice-pwd:%s"},{name:"fingerprint",reg:/^fingerprint:(\S*) (\S*)/,names:["type","hash"],format:"fingerprint:%s %s"},{push:"candidates",reg:/^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,names:["foundation","component","transport","priority","ip","port","type","raddr","rport","tcptype","generation","network-id","network-cost"],format:function(e){var t="candidate:%s %d %s %d %s %d typ %s";return t+=null!=e.raddr?" raddr %s rport %d":"%v%v",t+=null!=e.tcptype?" tcptype %s":"%v",null!=e.generation&&(t+=" generation %d"),(t+=null!=e["network-id"]?" network-id %d":"%v")+(null!=e["network-cost"]?" network-cost %d":"%v")}},{push:"xCandidatesIpv6",reg:/^x-candidate-ipv6:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?/,names:["foundation","component","transport","priority","ip","port","type","raddr","rport","tcptype","generation"],format:function(e){var t="candidate:%s %d %s %d %s %d typ %s";return t+=null!=e.raddr?" raddr %s rport %d":"%v%v",t+=null!=e.tcptype?" tcptype %s":"%v",null!=e.generation&&(t+=" generation %d"),t}},{name:"endOfCandidates",reg:/^(end-of-candidates)/},{name:"remoteCandidates",reg:/^remote-candidates:(.*)/,format:"remote-candidates:%s"},{name:"iceOptions",reg:/^ice-options:(\S*)/,format:"ice-options:%s"},{push:"ssrcs",reg:/^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,names:["id","attribute","value"],format:function(e){var t="ssrc:%d";return null!=e.attribute&&(t+=" %s",null!=e.value&&(t+=":%s")),t}},{push:"ssrcGroups",reg:/^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,names:["semantics","ssrcs"],format:"ssrc-group:%s %s"},{name:"msidSemantic",reg:/^msid-semantic:\s?(\w*) (\S*)/,names:["semantic","token"],format:"msid-semantic: %s %s"},{push:"groups",reg:/^group:(\w*) (.*)/,names:["type","mids"],format:"group:%s %s"},{name:"rtcpMux",reg:/^(rtcp-mux)/},{name:"rtcpRsize",reg:/^(rtcp-rsize)/},{name:"sctpmap",reg:/^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,names:["sctpmapNumber","app","maxMessageSize"],format:function(e){return null!=e.maxMessageSize?"sctpmap:%s %s %s":"sctpmap:%s %s"}},{name:"xGoogleFlag",reg:/^x-google-flag:([^\s]*)/,format:"x-google-flag:%s"},{push:"rids",reg:/^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,names:["id","direction","params"],format:function(e){return e.params?"rid:%s %s %s":"rid:%s %s"}},{push:"imageattrs",reg:new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),names:["pt","dir1","attrs1","dir2","attrs2"],format:function(e){return"imageattr:%s %s %s"+(e.dir2?" %s %s":"")}},{name:"simulcast",reg:new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),names:["dir1","list1","dir2","list2"],format:function(e){return"simulcast:%s %s"+(e.dir2?" %s %s":"")}},{name:"simulcast_03",reg:/^simulcast:[\s\t]+([\S+\s\t]+)$/,names:["value"],format:"simulcast: %s"},{name:"framerate",reg:/^framerate:(\d+(?:$|\.\d+))/,format:"framerate:%s"},{name:"sourceFilter",reg:/^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,names:["filterMode","netType","addressTypes","destAddress","srcList"],format:"source-filter: %s %s %s %s %s"},{name:"bundleOnly",reg:/^(bundle-only)/},{name:"label",reg:/^label:(.+)/,format:"label:%s"},{name:"sctpPort",reg:/^sctp-port:(\d+)$/,format:"sctp-port:%s"},{name:"maxMessageSize",reg:/^max-message-size:(\d+)$/,format:"max-message-size:%s"},{push:"tsRefClocks",reg:/^ts-refclk:([^\s=]*)(?:=(\S*))?/,names:["clksrc","clksrcExt"],format:function(e){return"ts-refclk:%s"+(null!=e.clksrcExt?"=%s":"")}},{name:"mediaClk",reg:/^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,names:["id","mediaClockName","mediaClockValue","rateNumerator","rateDenominator"],format:function(e){var t="mediaclk:";return t+=null!=e.id?"id=%s %s":"%v%s",t+=null!=e.mediaClockValue?"=%s":"",(t+=null!=e.rateNumerator?" rate=%s":"")+(null!=e.rateDenominator?"/%s":"")}},{name:"keywords",reg:/^keywds:(.+)$/,format:"keywds:%s"},{name:"content",reg:/^content:(.+)/,format:"content:%s"},{name:"bfcpFloorCtrl",reg:/^floorctrl:(c-only|s-only|c-s)/,format:"floorctrl:%s"},{name:"bfcpConfId",reg:/^confid:(\d+)/,format:"confid:%s"},{name:"bfcpUserId",reg:/^userid:(\d+)/,format:"userid:%s"},{name:"bfcpFloorId",reg:/^floorid:(.+) (?:m-stream|mstrm):(.+)/,names:["id","mStream"],format:"floorid:%s mstrm:%s"},{name:"xMediaBw",reg:/^x-mediabw:(\S*) send=(\d*);recv=(\d*)/,names:["label","sendBw","receiveBw"],format:"x-mediabw:%s send=%d;recv=%d"},{name:"xSsrcRange",reg:/^x-ssrc-range:(\d*)-(\d*)/,names:["ssrcMin","ssrcMax"],format:"x-ssrc-range:%d-%d"},{name:"xSource",reg:/^x-source:(\S*)/,format:"x-source:%s"},{name:"xSourceStreamId",reg:/^x-source-streamid:(\S*)/,format:"x-source-streamid:%s"},{name:"xCaps",reg:/^x-caps:(\d*) (\S*)/,names:["payloadType","value"],format:"x-caps:%d %s"},{name:"signalingFbXMessage",reg:/^x-signaling-fb:(\*|\d*) x-message ([\S| ]*)/,names:["payload","param"],format:function(e){return"x-signaling-fb:"+("*"===e.payload?"%s":"%d")+" x-message %s"}},{push:"xMediaSettings",reg:/^x-mediasettings:([\S| ]*)/,names:["settings"],format:"x-mediasettings:%s"},{push:"invalid",names:["value"]}]};Object.keys(n).forEach((function(e){n[e].forEach((function(e){e.reg||(e.reg=/(.*)/),e.format||(e.format="%s")}))}))},function(e,t,n){e.exports=n(39)},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=n(11),r=n(13);t.CommandUrlPresence=r.CommandUrlPresence,t.DeviceType=r.DeviceType,t.TrouterState=r.TrouterState;var o=n(1);t.CA_CONSTANTS=o.default;var a=n(5);t.TM_CONSTANTS=a.default;var s=n(49);t.IncomingNotificationMessageHandler=s.default;var c=n(20);t.setDefaultsForSignalingConfig=c.default;var l=n(76);t.SignalingAgent=l.default;var u=n(152);t.SkypeConCoreTelemetryManager=u.default,t.createParticipant=function(e){return new i.default(e)}},function(e,t,n){var i={};(0,n(6).assign)(i,n(41),n(44),n(19)),e.exports=i},function(e,t,n){var i=n(42),r=n(6),o=n(17),a=n(12),s=n(18),c=Object.prototype.toString;function l(e){if(!(this instanceof l))return new l(e);this.options=r.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var n=i.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(0!==n)throw new Error(a[n]);if(t.header&&i.deflateSetHeader(this.strm,t.header),t.dictionary){var u;if(u="string"==typeof t.dictionary?o.string2buf(t.dictionary):"[object ArrayBuffer]"===c.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,0!==(n=i.deflateSetDictionary(this.strm,u)))throw new Error(a[n]);this._dict_set=!0}}function u(e,t){var n=new l(t);if(n.push(e,!0),n.err)throw n.msg||a[n.err];return n.result}l.prototype.push=function(e,t){var n,a,s=this.strm,l=this.options.chunkSize;if(this.ended)return!1;a=t===~~t?t:!0===t?4:0,"string"==typeof e?s.input=o.string2buf(e):"[object ArrayBuffer]"===c.call(e)?s.input=new Uint8Array(e):s.input=e,s.next_in=0,s.avail_in=s.input.length;do{if(0===s.avail_out&&(s.output=new r.Buf8(l),s.next_out=0,s.avail_out=l),1!==(n=i.deflate(s,a))&&0!==n)return this.onEnd(n),this.ended=!0,!1;0!==s.avail_out&&(0!==s.avail_in||4!==a&&2!==a)||("string"===this.options.to?this.onData(o.buf2binstring(r.shrinkBuf(s.output,s.next_out))):this.onData(r.shrinkBuf(s.output,s.next_out)))}while((s.avail_in>0||0===s.avail_out)&&1!==n);return 4===a?(n=i.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,0===n):2!==a||(this.onEnd(0),s.avail_out=0,!0)},l.prototype.onData=function(e){this.chunks.push(e)},l.prototype.onEnd=function(e){0===e&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=r.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},t.Deflate=l,t.deflate=u,t.deflateRaw=function(e,t){return(t=t||{}).raw=!0,u(e,t)},t.gzip=function(e,t){return(t=t||{}).gzip=!0,u(e,t)}},function(e,t,n){var i,r=n(6),o=n(43),a=n(15),s=n(16),c=n(12);function l(e,t){return e.msg=c[t],t}function u(e){return(e<<1)-(e>4?9:0)}function d(e){for(var t=e.length;--t>=0;)e[t]=0}function p(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),0!==n&&(r.arraySet(e.output,t.pending_buf,t.pending_out,n,e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,0===t.pending&&(t.pending_out=0))}function f(e,t){o._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,p(e.strm)}function h(e,t){e.pending_buf[e.pending++]=t}function g(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function m(e,t){var n,i,r=e.max_chain_length,o=e.strstart,a=e.prev_length,s=e.nice_match,c=e.strstart>e.w_size-262?e.strstart-(e.w_size-262):0,l=e.window,u=e.w_mask,d=e.prev,p=e.strstart+258,f=l[o+a-1],h=l[o+a];e.prev_length>=e.good_match&&(r>>=2),s>e.lookahead&&(s=e.lookahead);do{if(l[(n=t)+a]===h&&l[n+a-1]===f&&l[n]===l[o]&&l[++n]===l[o+1]){o+=2,n++;do{}while(l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&l[++o]===l[++n]&&o<p);if(i=258-(p-o),o=p-258,i>a){if(e.match_start=t,a=i,i>=s)break;f=l[o+a-1],h=l[o+a]}}}while((t=d[t&u])>c&&0!=--r);return a<=e.lookahead?a:e.lookahead}function v(e){var t,n,i,o,c,l,u,d,p,f,h=e.w_size;do{if(o=e.window_size-e.lookahead-e.strstart,e.strstart>=h+(h-262)){r.arraySet(e.window,e.window,h,h,0),e.match_start-=h,e.strstart-=h,e.block_start-=h,t=n=e.hash_size;do{i=e.head[--t],e.head[t]=i>=h?i-h:0}while(--n);t=n=h;do{i=e.prev[--t],e.prev[t]=i>=h?i-h:0}while(--n);o+=h}if(0===e.strm.avail_in)break;if(l=e.strm,u=e.window,d=e.strstart+e.lookahead,p=o,f=void 0,(f=l.avail_in)>p&&(f=p),n=0===f?0:(l.avail_in-=f,r.arraySet(u,l.input,l.next_in,f,d),1===l.state.wrap?l.adler=a(l.adler,u,f,d):2===l.state.wrap&&(l.adler=s(l.adler,u,f,d)),l.next_in+=f,l.total_in+=f,f),e.lookahead+=n,e.lookahead+e.insert>=3)for(c=e.strstart-e.insert,e.ins_h=e.window[c],e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+3-1])&e.hash_mask,e.prev[c&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=c,c++,e.insert--,!(e.lookahead+e.insert<3)););}while(e.lookahead<262&&0!==e.strm.avail_in)}function S(e,t){for(var n,i;;){if(e.lookahead<262){if(v(e),e.lookahead<262&&0===t)return 1;if(0===e.lookahead)break}if(n=0,e.lookahead>=3&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==n&&e.strstart-n<=e.w_size-262&&(e.match_length=m(e,n)),e.match_length>=3)if(i=o._tr_tally(e,e.strstart-e.match_start,e.match_length-3),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=3){e.match_length--;do{e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart}while(0!=--e.match_length);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else i=o._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(i&&(f(e,!1),0===e.strm.avail_out))return 1}return e.insert=e.strstart<2?e.strstart:2,4===t?(f(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(f(e,!1),0===e.strm.avail_out)?1:2}function y(e,t){for(var n,i,r;;){if(e.lookahead<262){if(v(e),e.lookahead<262&&0===t)return 1;if(0===e.lookahead)break}if(n=0,e.lookahead>=3&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=2,0!==n&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-262&&(e.match_length=m(e,n),e.match_length<=5&&(1===e.strategy||3===e.match_length&&e.strstart-e.match_start>4096)&&(e.match_length=2)),e.prev_length>=3&&e.match_length<=e.prev_length){r=e.strstart+e.lookahead-3,i=o._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-3),e.lookahead-=e.prev_length-1,e.prev_length-=2;do{++e.strstart<=r&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+3-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart)}while(0!=--e.prev_length);if(e.match_available=0,e.match_length=2,e.strstart++,i&&(f(e,!1),0===e.strm.avail_out))return 1}else if(e.match_available){if((i=o._tr_tally(e,0,e.window[e.strstart-1]))&&f(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return 1}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(i=o._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<2?e.strstart:2,4===t?(f(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(f(e,!1),0===e.strm.avail_out)?1:2}function _(e,t,n,i,r){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=i,this.func=r}function E(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new r.Buf16(1146),this.dyn_dtree=new r.Buf16(122),this.bl_tree=new r.Buf16(78),d(this.dyn_ltree),d(this.dyn_dtree),d(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new r.Buf16(16),this.heap=new r.Buf16(573),d(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new r.Buf16(573),d(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function T(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=2,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?42:113,e.adler=2===t.wrap?0:1,t.last_flush=0,o._tr_init(t),0):l(e,-2)}function C(e){var t,n=T(e);return 0===n&&((t=e.state).window_size=2*t.w_size,d(t.head),t.max_lazy_match=i[t.level].max_lazy,t.good_match=i[t.level].good_length,t.nice_match=i[t.level].nice_length,t.max_chain_length=i[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=2,t.match_available=0,t.ins_h=0),n}function I(e,t,n,i,o,a){if(!e)return-2;var s=1;if(-1===t&&(t=6),i<0?(s=0,i=-i):i>15&&(s=2,i-=16),o<1||o>9||8!==n||i<8||i>15||t<0||t>9||a<0||a>4)return l(e,-2);8===i&&(i=9);var c=new E;return e.state=c,c.strm=e,c.wrap=s,c.gzhead=null,c.w_bits=i,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=o+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+3-1)/3),c.window=new r.Buf8(2*c.w_size),c.head=new r.Buf16(c.hash_size),c.prev=new r.Buf16(c.w_size),c.lit_bufsize=1<<o+6,c.pending_buf_size=4*c.lit_bufsize,c.pending_buf=new r.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=a,c.method=n,C(e)}i=[new _(0,0,0,0,(function(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){if(e.lookahead<=1){if(v(e),0===e.lookahead&&0===t)return 1;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var i=e.block_start+n;if((0===e.strstart||e.strstart>=i)&&(e.lookahead=e.strstart-i,e.strstart=i,f(e,!1),0===e.strm.avail_out))return 1;if(e.strstart-e.block_start>=e.w_size-262&&(f(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(f(e,!0),0===e.strm.avail_out?3:4):(e.strstart>e.block_start&&(f(e,!1),e.strm.avail_out),1)})),new _(4,4,8,4,S),new _(4,5,16,8,S),new _(4,6,32,32,S),new _(4,4,16,16,y),new _(8,16,32,32,y),new _(8,16,128,128,y),new _(8,32,128,256,y),new _(32,128,258,1024,y),new _(32,258,258,4096,y)],t.deflateInit=function(e,t){return I(e,t,8,15,8,0)},t.deflateInit2=I,t.deflateReset=C,t.deflateResetKeep=T,t.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?-2:(e.state.gzhead=t,0):-2},t.deflate=function(e,t){var n,r,a,c;if(!e||!e.state||t>5||t<0)return e?l(e,-2):-2;if(r=e.state,!e.output||!e.input&&0!==e.avail_in||666===r.status&&4!==t)return l(e,0===e.avail_out?-5:-2);if(r.strm=e,n=r.last_flush,r.last_flush=t,42===r.status)if(2===r.wrap)e.adler=0,h(r,31),h(r,139),h(r,8),r.gzhead?(h(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),h(r,255&r.gzhead.time),h(r,r.gzhead.time>>8&255),h(r,r.gzhead.time>>16&255),h(r,r.gzhead.time>>24&255),h(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),h(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(h(r,255&r.gzhead.extra.length),h(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(e.adler=s(e.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(h(r,0),h(r,0),h(r,0),h(r,0),h(r,0),h(r,9===r.level?2:r.strategy>=2||r.level<2?4:0),h(r,3),r.status=113);else{var m=8+(r.w_bits-8<<4)<<8;m|=(r.strategy>=2||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(m|=32),m+=31-m%31,r.status=113,g(r,m),0!==r.strstart&&(g(r,e.adler>>>16),g(r,65535&e.adler)),e.adler=1}if(69===r.status)if(r.gzhead.extra){for(a=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>a&&(e.adler=s(e.adler,r.pending_buf,r.pending-a,a)),p(e),a=r.pending,r.pending!==r.pending_buf_size));)h(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>a&&(e.adler=s(e.adler,r.pending_buf,r.pending-a,a)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(e.adler=s(e.adler,r.pending_buf,r.pending-a,a)),p(e),a=r.pending,r.pending===r.pending_buf_size)){c=1;break}c=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,h(r,c)}while(0!==c);r.gzhead.hcrc&&r.pending>a&&(e.adler=s(e.adler,r.pending_buf,r.pending-a,a)),0===c&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(e.adler=s(e.adler,r.pending_buf,r.pending-a,a)),p(e),a=r.pending,r.pending===r.pending_buf_size)){c=1;break}c=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,h(r,c)}while(0!==c);r.gzhead.hcrc&&r.pending>a&&(e.adler=s(e.adler,r.pending_buf,r.pending-a,a)),0===c&&(r.status=103)}else r.status=103;if(103===r.status&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&p(e),r.pending+2<=r.pending_buf_size&&(h(r,255&e.adler),h(r,e.adler>>8&255),e.adler=0,r.status=113)):r.status=113),0!==r.pending){if(p(e),0===e.avail_out)return r.last_flush=-1,0}else if(0===e.avail_in&&u(t)<=u(n)&&4!==t)return l(e,-5);if(666===r.status&&0!==e.avail_in)return l(e,-5);if(0!==e.avail_in||0!==r.lookahead||0!==t&&666!==r.status){var S=2===r.strategy?function(e,t){for(var n;;){if(0===e.lookahead&&(v(e),0===e.lookahead)){if(0===t)return 1;break}if(e.match_length=0,n=o._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(f(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(f(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(f(e,!1),0===e.strm.avail_out)?1:2}(r,t):3===r.strategy?function(e,t){for(var n,i,r,a,s=e.window;;){if(e.lookahead<=258){if(v(e),e.lookahead<=258&&0===t)return 1;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=3&&e.strstart>0&&(i=s[r=e.strstart-1])===s[++r]&&i===s[++r]&&i===s[++r]){a=e.strstart+258;do{}while(i===s[++r]&&i===s[++r]&&i===s[++r]&&i===s[++r]&&i===s[++r]&&i===s[++r]&&i===s[++r]&&i===s[++r]&&r<a);e.match_length=258-(a-r),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=3?(n=o._tr_tally(e,1,e.match_length-3),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=o._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(f(e,!1),0===e.strm.avail_out))return 1}return e.insert=0,4===t?(f(e,!0),0===e.strm.avail_out?3:4):e.last_lit&&(f(e,!1),0===e.strm.avail_out)?1:2}(r,t):i[r.level].func(r,t);if(3!==S&&4!==S||(r.status=666),1===S||3===S)return 0===e.avail_out&&(r.last_flush=-1),0;if(2===S&&(1===t?o._tr_align(r):5!==t&&(o._tr_stored_block(r,0,0,!1),3===t&&(d(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),p(e),0===e.avail_out))return r.last_flush=-1,0}return 4!==t?0:r.wrap<=0?1:(2===r.wrap?(h(r,255&e.adler),h(r,e.adler>>8&255),h(r,e.adler>>16&255),h(r,e.adler>>24&255),h(r,255&e.total_in),h(r,e.total_in>>8&255),h(r,e.total_in>>16&255),h(r,e.total_in>>24&255)):(g(r,e.adler>>>16),g(r,65535&e.adler)),p(e),r.wrap>0&&(r.wrap=-r.wrap),0!==r.pending?0:1)},t.deflateEnd=function(e){var t;return e&&e.state?42!==(t=e.state.status)&&69!==t&&73!==t&&91!==t&&103!==t&&113!==t&&666!==t?l(e,-2):(e.state=null,113===t?l(e,-3):0):-2},t.deflateSetDictionary=function(e,t){var n,i,o,s,c,l,u,p,f=t.length;if(!e||!e.state)return-2;if(2===(s=(n=e.state).wrap)||1===s&&42!==n.status||n.lookahead)return-2;for(1===s&&(e.adler=a(e.adler,t,f,0)),n.wrap=0,f>=n.w_size&&(0===s&&(d(n.head),n.strstart=0,n.block_start=0,n.insert=0),p=new r.Buf8(n.w_size),r.arraySet(p,t,f-n.w_size,n.w_size,0),t=p,f=n.w_size),c=e.avail_in,l=e.next_in,u=e.input,e.avail_in=f,e.next_in=0,e.input=t,v(n);n.lookahead>=3;){i=n.strstart,o=n.lookahead-2;do{n.ins_h=(n.ins_h<<n.hash_shift^n.window[i+3-1])&n.hash_mask,n.prev[i&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=i,i++}while(--o);n.strstart=i,n.lookahead=2,v(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=2,n.match_available=0,e.next_in=l,e.input=u,e.avail_in=c,n.wrap=s,0},t.deflateInfo="pako deflate (from Nodeca project)"},function(e,t,n){var i=n(6);function r(e){for(var t=e.length;--t>=0;)e[t]=0}var o=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],a=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],c=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],l=new Array(576);r(l);var u=new Array(60);r(u);var d=new Array(512);r(d);var p=new Array(256);r(p);var f=new Array(29);r(f);var h,g,m,v=new Array(30);function S(e,t,n,i,r){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=i,this.max_length=r,this.has_stree=e&&e.length}function y(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function _(e){return e<256?d[e]:d[256+(e>>>7)]}function E(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function T(e,t,n){e.bi_valid>16-n?(e.bi_buf|=t<<e.bi_valid&65535,E(e,e.bi_buf),e.bi_buf=t>>16-e.bi_valid,e.bi_valid+=n-16):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)}function C(e,t,n){T(e,n[2*t],n[2*t+1])}function I(e,t){var n=0;do{n|=1&e,e>>>=1,n<<=1}while(--t>0);return n>>>1}function A(e,t,n){var i,r,o=new Array(16),a=0;for(i=1;i<=15;i++)o[i]=a=a+n[i-1]<<1;for(r=0;r<=t;r++){var s=e[2*r+1];0!==s&&(e[2*r]=I(o[s]++,s))}}function b(e){var t;for(t=0;t<286;t++)e.dyn_ltree[2*t]=0;for(t=0;t<30;t++)e.dyn_dtree[2*t]=0;for(t=0;t<19;t++)e.bl_tree[2*t]=0;e.dyn_ltree[512]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function R(e){e.bi_valid>8?E(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function O(e,t,n,i){var r=2*t,o=2*n;return e[r]<e[o]||e[r]===e[o]&&i[t]<=i[n]}function P(e,t,n){for(var i=e.heap[n],r=n<<1;r<=e.heap_len&&(r<e.heap_len&&O(t,e.heap[r+1],e.heap[r],e.depth)&&r++,!O(t,i,e.heap[r],e.depth));)e.heap[n]=e.heap[r],n=r,r<<=1;e.heap[n]=i}function N(e,t,n){var i,r,s,c,l=0;if(0!==e.last_lit)do{i=e.pending_buf[e.d_buf+2*l]<<8|e.pending_buf[e.d_buf+2*l+1],r=e.pending_buf[e.l_buf+l],l++,0===i?C(e,r,t):(C(e,(s=p[r])+256+1,t),0!==(c=o[s])&&T(e,r-=f[s],c),C(e,s=_(--i),n),0!==(c=a[s])&&T(e,i-=v[s],c))}while(l<e.last_lit);C(e,256,t)}function M(e,t){var n,i,r,o=t.dyn_tree,a=t.stat_desc.static_tree,s=t.stat_desc.has_stree,c=t.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=573,n=0;n<c;n++)0!==o[2*n]?(e.heap[++e.heap_len]=l=n,e.depth[n]=0):o[2*n+1]=0;for(;e.heap_len<2;)o[2*(r=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[r]=0,e.opt_len--,s&&(e.static_len-=a[2*r+1]);for(t.max_code=l,n=e.heap_len>>1;n>=1;n--)P(e,o,n);r=c;do{n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],P(e,o,1),i=e.heap[1],e.heap[--e.heap_max]=n,e.heap[--e.heap_max]=i,o[2*r]=o[2*n]+o[2*i],e.depth[r]=(e.depth[n]>=e.depth[i]?e.depth[n]:e.depth[i])+1,o[2*n+1]=o[2*i+1]=r,e.heap[1]=r++,P(e,o,1)}while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],function(e,t){var n,i,r,o,a,s,c=t.dyn_tree,l=t.max_code,u=t.stat_desc.static_tree,d=t.stat_desc.has_stree,p=t.stat_desc.extra_bits,f=t.stat_desc.extra_base,h=t.stat_desc.max_length,g=0;for(o=0;o<=15;o++)e.bl_count[o]=0;for(c[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;n<573;n++)(o=c[2*c[2*(i=e.heap[n])+1]+1]+1)>h&&(o=h,g++),c[2*i+1]=o,i>l||(e.bl_count[o]++,a=0,i>=f&&(a=p[i-f]),s=c[2*i],e.opt_len+=s*(o+a),d&&(e.static_len+=s*(u[2*i+1]+a)));if(0!==g){do{for(o=h-1;0===e.bl_count[o];)o--;e.bl_count[o]--,e.bl_count[o+1]+=2,e.bl_count[h]--,g-=2}while(g>0);for(o=h;0!==o;o--)for(i=e.bl_count[o];0!==i;)(r=e.heap[--n])>l||(c[2*r+1]!==o&&(e.opt_len+=(o-c[2*r+1])*c[2*r],c[2*r+1]=o),i--)}}(e,t),A(o,l,e.bl_count)}function w(e,t,n){var i,r,o=-1,a=t[1],s=0,c=7,l=4;for(0===a&&(c=138,l=3),t[2*(n+1)+1]=65535,i=0;i<=n;i++)r=a,a=t[2*(i+1)+1],++s<c&&r===a||(s<l?e.bl_tree[2*r]+=s:0!==r?(r!==o&&e.bl_tree[2*r]++,e.bl_tree[32]++):s<=10?e.bl_tree[34]++:e.bl_tree[36]++,s=0,o=r,0===a?(c=138,l=3):r===a?(c=6,l=3):(c=7,l=4))}function D(e,t,n){var i,r,o=-1,a=t[1],s=0,c=7,l=4;for(0===a&&(c=138,l=3),i=0;i<=n;i++)if(r=a,a=t[2*(i+1)+1],!(++s<c&&r===a)){if(s<l)do{C(e,r,e.bl_tree)}while(0!=--s);else 0!==r?(r!==o&&(C(e,r,e.bl_tree),s--),C(e,16,e.bl_tree),T(e,s-3,2)):s<=10?(C(e,17,e.bl_tree),T(e,s-3,3)):(C(e,18,e.bl_tree),T(e,s-11,7));s=0,o=r,0===a?(c=138,l=3):r===a?(c=6,l=3):(c=7,l=4)}}r(v);var L=!1;function k(e,t,n,r){T(e,0+(r?1:0),3),function(e,t,n,r){R(e),E(e,n),E(e,~n),i.arraySet(e.pending_buf,e.window,t,n,e.pending),e.pending+=n}(e,t,n)}t._tr_init=function(e){L||(function(){var e,t,n,i,r,c=new Array(16);for(n=0,i=0;i<28;i++)for(f[i]=n,e=0;e<1<<o[i];e++)p[n++]=i;for(p[n-1]=i,r=0,i=0;i<16;i++)for(v[i]=r,e=0;e<1<<a[i];e++)d[r++]=i;for(r>>=7;i<30;i++)for(v[i]=r<<7,e=0;e<1<<a[i]-7;e++)d[256+r++]=i;for(t=0;t<=15;t++)c[t]=0;for(e=0;e<=143;)l[2*e+1]=8,e++,c[8]++;for(;e<=255;)l[2*e+1]=9,e++,c[9]++;for(;e<=279;)l[2*e+1]=7,e++,c[7]++;for(;e<=287;)l[2*e+1]=8,e++,c[8]++;for(A(l,287,c),e=0;e<30;e++)u[2*e+1]=5,u[2*e]=I(e,5);h=new S(l,o,257,286,15),g=new S(u,a,0,30,15),m=new S(new Array(0),s,0,19,7)}(),L=!0),e.l_desc=new y(e.dyn_ltree,h),e.d_desc=new y(e.dyn_dtree,g),e.bl_desc=new y(e.bl_tree,m),e.bi_buf=0,e.bi_valid=0,b(e)},t._tr_stored_block=k,t._tr_flush_block=function(e,t,n,i){var r,o,a=0;e.level>0?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,n=4093624447;for(t=0;t<=31;t++,n>>>=1)if(1&n&&0!==e.dyn_ltree[2*t])return 0;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return 1;for(t=32;t<256;t++)if(0!==e.dyn_ltree[2*t])return 1;return 0}(e)),M(e,e.l_desc),M(e,e.d_desc),a=function(e){var t;for(w(e,e.dyn_ltree,e.l_desc.max_code),w(e,e.dyn_dtree,e.d_desc.max_code),M(e,e.bl_desc),t=18;t>=3&&0===e.bl_tree[2*c[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),r=e.opt_len+3+7>>>3,(o=e.static_len+3+7>>>3)<=r&&(r=o)):r=o=n+5,n+4<=r&&-1!==t?k(e,t,n,i):4===e.strategy||o===r?(T(e,2+(i?1:0),3),N(e,l,u)):(T(e,4+(i?1:0),3),function(e,t,n,i){var r;for(T(e,t-257,5),T(e,n-1,5),T(e,i-4,4),r=0;r<i;r++)T(e,e.bl_tree[2*c[r]+1],3);D(e,e.dyn_ltree,t-1),D(e,e.dyn_dtree,n-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),N(e,e.dyn_ltree,e.dyn_dtree)),b(e),i&&R(e)},t._tr_tally=function(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,0===t?e.dyn_ltree[2*n]++:(e.matches++,t--,e.dyn_ltree[2*(p[n]+256+1)]++,e.dyn_dtree[2*_(t)]++),e.last_lit===e.lit_bufsize-1},t._tr_align=function(e){T(e,2,3),C(e,256,l),function(e){16===e.bi_valid?(E(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},function(e,t,n){var i=n(45),r=n(6),o=n(17),a=n(19),s=n(12),c=n(18),l=n(48),u=Object.prototype.toString;function d(e){if(!(this instanceof d))return new d(e);this.options=r.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var n=i.inflateInit2(this.strm,t.windowBits);if(n!==a.Z_OK)throw new Error(s[n]);if(this.header=new l,i.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=o.string2buf(t.dictionary):"[object ArrayBuffer]"===u.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(n=i.inflateSetDictionary(this.strm,t.dictionary))!==a.Z_OK))throw new Error(s[n])}function p(e,t){var n=new d(t);if(n.push(e,!0),n.err)throw n.msg||s[n.err];return n.result}d.prototype.push=function(e,t){var n,s,c,l,d,p=this.strm,f=this.options.chunkSize,h=this.options.dictionary,g=!1;if(this.ended)return!1;s=t===~~t?t:!0===t?a.Z_FINISH:a.Z_NO_FLUSH,"string"==typeof e?p.input=o.binstring2buf(e):"[object ArrayBuffer]"===u.call(e)?p.input=new Uint8Array(e):p.input=e,p.next_in=0,p.avail_in=p.input.length;do{if(0===p.avail_out&&(p.output=new r.Buf8(f),p.next_out=0,p.avail_out=f),(n=i.inflate(p,a.Z_NO_FLUSH))===a.Z_NEED_DICT&&h&&(n=i.inflateSetDictionary(this.strm,h)),n===a.Z_BUF_ERROR&&!0===g&&(n=a.Z_OK,g=!1),n!==a.Z_STREAM_END&&n!==a.Z_OK)return this.onEnd(n),this.ended=!0,!1;p.next_out&&(0!==p.avail_out&&n!==a.Z_STREAM_END&&(0!==p.avail_in||s!==a.Z_FINISH&&s!==a.Z_SYNC_FLUSH)||("string"===this.options.to?(c=o.utf8border(p.output,p.next_out),l=p.next_out-c,d=o.buf2string(p.output,c),p.next_out=l,p.avail_out=f-l,l&&r.arraySet(p.output,p.output,c,l,0),this.onData(d)):this.onData(r.shrinkBuf(p.output,p.next_out)))),0===p.avail_in&&0===p.avail_out&&(g=!0)}while((p.avail_in>0||0===p.avail_out)&&n!==a.Z_STREAM_END);return n===a.Z_STREAM_END&&(s=a.Z_FINISH),s===a.Z_FINISH?(n=i.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===a.Z_OK):s!==a.Z_SYNC_FLUSH||(this.onEnd(a.Z_OK),p.avail_out=0,!0)},d.prototype.onData=function(e){this.chunks.push(e)},d.prototype.onEnd=function(e){e===a.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=r.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},t.Inflate=d,t.inflate=p,t.inflateRaw=function(e,t){return(t=t||{}).raw=!0,p(e,t)},t.ungzip=p},function(e,t,n){var i=n(6),r=n(15),o=n(16),a=n(46),s=n(47);function c(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function l(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new i.Buf16(320),this.work=new i.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function u(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=1,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new i.Buf32(852),t.distcode=t.distdyn=new i.Buf32(592),t.sane=1,t.back=-1,0):-2}function d(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,u(e)):-2}function p(e,t){var n,i;return e&&e.state?(i=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?-2:(null!==i.window&&i.wbits!==t&&(i.window=null),i.wrap=n,i.wbits=t,d(e))):-2}function f(e,t){var n,i;return e?(i=new l,e.state=i,i.window=null,0!==(n=p(e,t))&&(e.state=null),n):-2}var h,g,m=!0;function v(e){if(m){var t;for(h=new i.Buf32(512),g=new i.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(s(1,e.lens,0,288,h,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;s(2,e.lens,0,32,g,0,e.work,{bits:5}),m=!1}e.lencode=h,e.lenbits=9,e.distcode=g,e.distbits=5}function S(e,t,n,r){var o,a=e.state;return null===a.window&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new i.Buf8(a.wsize)),r>=a.wsize?(i.arraySet(a.window,t,n-a.wsize,a.wsize,0),a.wnext=0,a.whave=a.wsize):((o=a.wsize-a.wnext)>r&&(o=r),i.arraySet(a.window,t,n-r,o,a.wnext),(r-=o)?(i.arraySet(a.window,t,n-r,r,0),a.wnext=r,a.whave=a.wsize):(a.wnext+=o,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=o))),0}t.inflateReset=d,t.inflateReset2=p,t.inflateResetKeep=u,t.inflateInit=function(e){return f(e,15)},t.inflateInit2=f,t.inflate=function(e,t){var n,l,u,d,p,f,h,g,m,y,_,E,T,C,I,A,b,R,O,P,N,M,w,D,L=0,k=new i.Buf8(4),F=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return-2;12===(n=e.state).mode&&(n.mode=13),p=e.next_out,u=e.output,h=e.avail_out,d=e.next_in,l=e.input,f=e.avail_in,g=n.hold,m=n.bits,y=f,_=h,M=0;e:for(;;)switch(n.mode){case 1:if(0===n.wrap){n.mode=13;break}for(;m<16;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}if(2&n.wrap&&35615===g){n.check=0,k[0]=255&g,k[1]=g>>>8&255,n.check=o(n.check,k,2,0),g=0,m=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&g)<<8)+(g>>8))%31){e.msg="incorrect header check",n.mode=30;break}if(8!=(15&g)){e.msg="unknown compression method",n.mode=30;break}if(m-=4,N=8+(15&(g>>>=4)),0===n.wbits)n.wbits=N;else if(N>n.wbits){e.msg="invalid window size",n.mode=30;break}n.dmax=1<<N,e.adler=n.check=1,n.mode=512&g?10:12,g=0,m=0;break;case 2:for(;m<16;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}if(n.flags=g,8!=(255&n.flags)){e.msg="unknown compression method",n.mode=30;break}if(57344&n.flags){e.msg="unknown header flags set",n.mode=30;break}n.head&&(n.head.text=g>>8&1),512&n.flags&&(k[0]=255&g,k[1]=g>>>8&255,n.check=o(n.check,k,2,0)),g=0,m=0,n.mode=3;case 3:for(;m<32;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}n.head&&(n.head.time=g),512&n.flags&&(k[0]=255&g,k[1]=g>>>8&255,k[2]=g>>>16&255,k[3]=g>>>24&255,n.check=o(n.check,k,4,0)),g=0,m=0,n.mode=4;case 4:for(;m<16;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}n.head&&(n.head.xflags=255&g,n.head.os=g>>8),512&n.flags&&(k[0]=255&g,k[1]=g>>>8&255,n.check=o(n.check,k,2,0)),g=0,m=0,n.mode=5;case 5:if(1024&n.flags){for(;m<16;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}n.length=g,n.head&&(n.head.extra_len=g),512&n.flags&&(k[0]=255&g,k[1]=g>>>8&255,n.check=o(n.check,k,2,0)),g=0,m=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&((E=n.length)>f&&(E=f),E&&(n.head&&(N=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),i.arraySet(n.head.extra,l,d,E,N)),512&n.flags&&(n.check=o(n.check,l,E,d)),f-=E,d+=E,n.length-=E),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(0===f)break e;E=0;do{N=l[d+E++],n.head&&N&&n.length<65536&&(n.head.name+=String.fromCharCode(N))}while(N&&E<f);if(512&n.flags&&(n.check=o(n.check,l,E,d)),f-=E,d+=E,N)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(0===f)break e;E=0;do{N=l[d+E++],n.head&&N&&n.length<65536&&(n.head.comment+=String.fromCharCode(N))}while(N&&E<f);if(512&n.flags&&(n.check=o(n.check,l,E,d)),f-=E,d+=E,N)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;m<16;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}if(g!==(65535&n.check)){e.msg="header crc mismatch",n.mode=30;break}g=0,m=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;m<32;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}e.adler=n.check=c(g),g=0,m=0,n.mode=11;case 11:if(0===n.havedict)return e.next_out=p,e.avail_out=h,e.next_in=d,e.avail_in=f,n.hold=g,n.bits=m,2;e.adler=n.check=1,n.mode=12;case 12:if(5===t||6===t)break e;case 13:if(n.last){g>>>=7&m,m-=7&m,n.mode=27;break}for(;m<3;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}switch(n.last=1&g,m-=1,3&(g>>>=1)){case 0:n.mode=14;break;case 1:if(v(n),n.mode=20,6===t){g>>>=2,m-=2;break e}break;case 2:n.mode=17;break;case 3:e.msg="invalid block type",n.mode=30}g>>>=2,m-=2;break;case 14:for(g>>>=7&m,m-=7&m;m<32;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}if((65535&g)!=(g>>>16^65535)){e.msg="invalid stored block lengths",n.mode=30;break}if(n.length=65535&g,g=0,m=0,n.mode=15,6===t)break e;case 15:n.mode=16;case 16:if(E=n.length){if(E>f&&(E=f),E>h&&(E=h),0===E)break e;i.arraySet(u,l,d,E,p),f-=E,d+=E,h-=E,p+=E,n.length-=E;break}n.mode=12;break;case 17:for(;m<14;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}if(n.nlen=257+(31&g),g>>>=5,m-=5,n.ndist=1+(31&g),g>>>=5,m-=5,n.ncode=4+(15&g),g>>>=4,m-=4,n.nlen>286||n.ndist>30){e.msg="too many length or distance symbols",n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;m<3;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}n.lens[F[n.have++]]=7&g,g>>>=3,m-=3}for(;n.have<19;)n.lens[F[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,w={bits:n.lenbits},M=s(0,n.lens,0,19,n.lencode,0,n.work,w),n.lenbits=w.bits,M){e.msg="invalid code lengths set",n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;A=(L=n.lencode[g&(1<<n.lenbits)-1])>>>16&255,b=65535&L,!((I=L>>>24)<=m);){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}if(b<16)g>>>=I,m-=I,n.lens[n.have++]=b;else{if(16===b){for(D=I+2;m<D;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}if(g>>>=I,m-=I,0===n.have){e.msg="invalid bit length repeat",n.mode=30;break}N=n.lens[n.have-1],E=3+(3&g),g>>>=2,m-=2}else if(17===b){for(D=I+3;m<D;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}m-=I,N=0,E=3+(7&(g>>>=I)),g>>>=3,m-=3}else{for(D=I+7;m<D;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}m-=I,N=0,E=11+(127&(g>>>=I)),g>>>=7,m-=7}if(n.have+E>n.nlen+n.ndist){e.msg="invalid bit length repeat",n.mode=30;break}for(;E--;)n.lens[n.have++]=N}}if(30===n.mode)break;if(0===n.lens[256]){e.msg="invalid code -- missing end-of-block",n.mode=30;break}if(n.lenbits=9,w={bits:n.lenbits},M=s(1,n.lens,0,n.nlen,n.lencode,0,n.work,w),n.lenbits=w.bits,M){e.msg="invalid literal/lengths set",n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,w={bits:n.distbits},M=s(2,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,w),n.distbits=w.bits,M){e.msg="invalid distances set",n.mode=30;break}if(n.mode=20,6===t)break e;case 20:n.mode=21;case 21:if(f>=6&&h>=258){e.next_out=p,e.avail_out=h,e.next_in=d,e.avail_in=f,n.hold=g,n.bits=m,a(e,_),p=e.next_out,u=e.output,h=e.avail_out,d=e.next_in,l=e.input,f=e.avail_in,g=n.hold,m=n.bits,12===n.mode&&(n.back=-1);break}for(n.back=0;A=(L=n.lencode[g&(1<<n.lenbits)-1])>>>16&255,b=65535&L,!((I=L>>>24)<=m);){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}if(A&&0==(240&A)){for(R=I,O=A,P=b;A=(L=n.lencode[P+((g&(1<<R+O)-1)>>R)])>>>16&255,b=65535&L,!(R+(I=L>>>24)<=m);){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}g>>>=R,m-=R,n.back+=R}if(g>>>=I,m-=I,n.back+=I,n.length=b,0===A){n.mode=26;break}if(32&A){n.back=-1,n.mode=12;break}if(64&A){e.msg="invalid literal/length code",n.mode=30;break}n.extra=15&A,n.mode=22;case 22:if(n.extra){for(D=n.extra;m<D;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}n.length+=g&(1<<n.extra)-1,g>>>=n.extra,m-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;A=(L=n.distcode[g&(1<<n.distbits)-1])>>>16&255,b=65535&L,!((I=L>>>24)<=m);){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}if(0==(240&A)){for(R=I,O=A,P=b;A=(L=n.distcode[P+((g&(1<<R+O)-1)>>R)])>>>16&255,b=65535&L,!(R+(I=L>>>24)<=m);){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}g>>>=R,m-=R,n.back+=R}if(g>>>=I,m-=I,n.back+=I,64&A){e.msg="invalid distance code",n.mode=30;break}n.offset=b,n.extra=15&A,n.mode=24;case 24:if(n.extra){for(D=n.extra;m<D;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}n.offset+=g&(1<<n.extra)-1,g>>>=n.extra,m-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg="invalid distance too far back",n.mode=30;break}n.mode=25;case 25:if(0===h)break e;if(E=_-h,n.offset>E){if((E=n.offset-E)>n.whave&&n.sane){e.msg="invalid distance too far back",n.mode=30;break}E>n.wnext?(E-=n.wnext,T=n.wsize-E):T=n.wnext-E,E>n.length&&(E=n.length),C=n.window}else C=u,T=p-n.offset,E=n.length;E>h&&(E=h),h-=E,n.length-=E;do{u[p++]=C[T++]}while(--E);0===n.length&&(n.mode=21);break;case 26:if(0===h)break e;u[p++]=n.length,h--,n.mode=21;break;case 27:if(n.wrap){for(;m<32;){if(0===f)break e;f--,g|=l[d++]<<m,m+=8}if(_-=h,e.total_out+=_,n.total+=_,_&&(e.adler=n.check=n.flags?o(n.check,u,_,p-_):r(n.check,u,_,p-_)),_=h,(n.flags?g:c(g))!==n.check){e.msg="incorrect data check",n.mode=30;break}g=0,m=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;m<32;){if(0===f)break e;f--,g+=l[d++]<<m,m+=8}if(g!==(4294967295&n.total)){e.msg="incorrect length check",n.mode=30;break}g=0,m=0}n.mode=29;case 29:M=1;break e;case 30:M=-3;break e;case 31:return-4;case 32:default:return-2}return e.next_out=p,e.avail_out=h,e.next_in=d,e.avail_in=f,n.hold=g,n.bits=m,(n.wsize||_!==e.avail_out&&n.mode<30&&(n.mode<27||4!==t))&&S(e,e.output,e.next_out,_-e.avail_out)?(n.mode=31,-4):(y-=e.avail_in,_-=e.avail_out,e.total_in+=y,e.total_out+=_,n.total+=_,n.wrap&&_&&(e.adler=n.check=n.flags?o(n.check,u,_,e.next_out-_):r(n.check,u,_,e.next_out-_)),e.data_type=n.bits+(n.last?64:0)+(12===n.mode?128:0)+(20===n.mode||15===n.mode?256:0),(0===y&&0===_||4===t)&&0===M&&(M=-5),M)},t.inflateEnd=function(e){if(!e||!e.state)return-2;var t=e.state;return t.window&&(t.window=null),e.state=null,0},t.inflateGetHeader=function(e,t){var n;return e&&e.state?0==(2&(n=e.state).wrap)?-2:(n.head=t,t.done=!1,0):-2},t.inflateSetDictionary=function(e,t){var n,i=t.length;return e&&e.state?0!==(n=e.state).wrap&&11!==n.mode?-2:11===n.mode&&r(1,t,i,0)!==n.check?-3:S(e,t,i,i)?(n.mode=31,-4):(n.havedict=1,0):-2},t.inflateInfo="pako inflate (from Nodeca project)"},function(e,t,n){e.exports=function(e,t){var n,i,r,o,a,s,c,l,u,d,p,f,h,g,m,v,S,y,_,E,T,C,I,A,b;n=e.state,i=e.next_in,A=e.input,r=i+(e.avail_in-5),o=e.next_out,b=e.output,a=o-(t-e.avail_out),s=o+(e.avail_out-257),c=n.dmax,l=n.wsize,u=n.whave,d=n.wnext,p=n.window,f=n.hold,h=n.bits,g=n.lencode,m=n.distcode,v=(1<<n.lenbits)-1,S=(1<<n.distbits)-1;e:do{h<15&&(f+=A[i++]<<h,h+=8,f+=A[i++]<<h,h+=8),y=g[f&v];t:for(;;){if(f>>>=_=y>>>24,h-=_,0==(_=y>>>16&255))b[o++]=65535&y;else{if(!(16&_)){if(0==(64&_)){y=g[(65535&y)+(f&(1<<_)-1)];continue t}if(32&_){n.mode=12;break e}e.msg="invalid literal/length code",n.mode=30;break e}E=65535&y,(_&=15)&&(h<_&&(f+=A[i++]<<h,h+=8),E+=f&(1<<_)-1,f>>>=_,h-=_),h<15&&(f+=A[i++]<<h,h+=8,f+=A[i++]<<h,h+=8),y=m[f&S];n:for(;;){if(f>>>=_=y>>>24,h-=_,!(16&(_=y>>>16&255))){if(0==(64&_)){y=m[(65535&y)+(f&(1<<_)-1)];continue n}e.msg="invalid distance code",n.mode=30;break e}if(T=65535&y,h<(_&=15)&&(f+=A[i++]<<h,(h+=8)<_&&(f+=A[i++]<<h,h+=8)),(T+=f&(1<<_)-1)>c){e.msg="invalid distance too far back",n.mode=30;break e}if(f>>>=_,h-=_,T>(_=o-a)){if((_=T-_)>u&&n.sane){e.msg="invalid distance too far back",n.mode=30;break e}if(C=0,I=p,0===d){if(C+=l-_,_<E){E-=_;do{b[o++]=p[C++]}while(--_);C=o-T,I=b}}else if(d<_){if(C+=l+d-_,(_-=d)<E){E-=_;do{b[o++]=p[C++]}while(--_);if(C=0,d<E){E-=_=d;do{b[o++]=p[C++]}while(--_);C=o-T,I=b}}}else if(C+=d-_,_<E){E-=_;do{b[o++]=p[C++]}while(--_);C=o-T,I=b}for(;E>2;)b[o++]=I[C++],b[o++]=I[C++],b[o++]=I[C++],E-=3;E&&(b[o++]=I[C++],E>1&&(b[o++]=I[C++]))}else{C=o-T;do{b[o++]=b[C++],b[o++]=b[C++],b[o++]=b[C++],E-=3}while(E>2);E&&(b[o++]=b[C++],E>1&&(b[o++]=b[C++]))}break}}break}}while(i<r&&o<s);i-=E=h>>3,f&=(1<<(h-=E<<3))-1,e.next_in=i,e.next_out=o,e.avail_in=i<r?r-i+5:5-(i-r),e.avail_out=o<s?s-o+257:257-(o-s),n.hold=f,n.bits=h}},function(e,t,n){var i=n(6),r=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],a=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(e,t,n,c,l,u,d,p){var f,h,g,m,v,S,y,_,E,T=p.bits,C=0,I=0,A=0,b=0,R=0,O=0,P=0,N=0,M=0,w=0,D=null,L=0,k=new i.Buf16(16),F=new i.Buf16(16),x=null,U=0;for(C=0;C<=15;C++)k[C]=0;for(I=0;I<c;I++)k[t[n+I]]++;for(R=T,b=15;b>=1&&0===k[b];b--);if(R>b&&(R=b),0===b)return l[u++]=20971520,l[u++]=20971520,p.bits=1,0;for(A=1;A<b&&0===k[A];A++);for(R<A&&(R=A),N=1,C=1;C<=15;C++)if(N<<=1,(N-=k[C])<0)return-1;if(N>0&&(0===e||1!==b))return-1;for(F[1]=0,C=1;C<15;C++)F[C+1]=F[C]+k[C];for(I=0;I<c;I++)0!==t[n+I]&&(d[F[t[n+I]]++]=I);if(0===e?(D=x=d,S=19):1===e?(D=r,L-=257,x=o,U-=257,S=256):(D=a,x=s,S=-1),w=0,I=0,C=A,v=u,O=R,P=0,g=-1,m=(M=1<<R)-1,1===e&&M>852||2===e&&M>592)return 1;for(;;){y=C-P,d[I]<S?(_=0,E=d[I]):d[I]>S?(_=x[U+d[I]],E=D[L+d[I]]):(_=96,E=0),f=1<<C-P,A=h=1<<O;do{l[v+(w>>P)+(h-=f)]=y<<24|_<<16|E|0}while(0!==h);for(f=1<<C-1;w&f;)f>>=1;if(0!==f?(w&=f-1,w+=f):w=0,I++,0==--k[C]){if(C===b)break;C=t[n+d[I]]}if(C>R&&(w&m)!==g){for(0===P&&(P=R),v+=A,N=1<<(O=C-P);O+P<b&&!((N-=k[O+P])<=0);)O++,N<<=1;if(M+=1<<O,1===e&&M>852||2===e&&M>592)return 1;l[g=w&m]=R<<24|O<<16|v-u|0}}return 0!==w&&(l[v+w]=C-P<<24|64<<16|0),p.bits=R,0}},function(e,t,n){e.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=function(){function e(e){var t=this;this.handleMessage=function(e){if(!t.isMessageForExistingCall(e))return{isHandled:!1};if(e.url.search(new RegExp("/"+i.default.URL_BASE.CALLAGENT+"/","i"))>-1){var n=t.signalingAgent.handleIncomingNotification(e);return"number"==typeof n?{isHandled:!0,resultCode:n}:{isHandled:!0,resultCode:n.resultCode,responseBody:n.responseBody,responseHeaders:n.responseHeaders}}return{isHandled:!1}},this.signalingAgent=e}return e.prototype.isMessageForExistingCall=function(e){return!e.eventId},e}();t.default=r},function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(a,s)}c((i=i.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(51),a=n(69),s=n(70),c=n(4),l=n(33),u=function(){function e(e){e&&"function"==typeof e.createChild?this.logger=e.createChild("RequestDispatcher"):this.logger=new s.TsCallingLogger("JS.TsCalling.RequestDispatcher",!1)}return e.prototype.getRequestOptions=function(e,t,n,i,r){return{headers:t||{},timeout:i,payload:n||null,responseType:r}},e.prototype.getAsync=function(e,t){return this.sendRequest(e,t,"GET")},e.prototype.postAsync=function(e,t){return this.sendRequest(e,t,"POST")},e.prototype.putAsync=function(e,t){return this.sendRequest(e,t,"PUT")},e.prototype.removeAsync=function(e,t){return this.sendRequest(e,t,"DELETE")},e.prototype.sendRequest=function(e,t,n){return void 0===t&&(t={headers:{}}),i(this,void 0,void 0,(function(){var i,s,u,d,p,f;return r(this,(function(r){switch(r.label){case 0:(i=this.logger.createChild("["+(t.causeId||a.generateCauseId())+"][Request]")).info("sending, "+n+"-"+e),s=Date.now(),t.headers=t.headers||{},t.headers["content-type"]||(t.headers["content-type"]=t.contentType||"application/json"),r.label=1;case 1:return r.trys.push([1,3,,4]),d=o.default.request({url:e,method:n,headers:t.headers||{},timeout:"number"==typeof t.timeout?t.timeout:45e3,data:t.payload||"",responseType:t.responseType||t.dataType||"json",withCredentials:(h=t.withCredentials,void 0!==h&&h),cancelToken:new o.default.CancelToken((function(e){u=e}))}),l.isPromiseLike(t.timeout)&&t.timeout.then((function(){i.info("Aborting pending request"),u()}),(function(){i.info("Timeout promise rejected, ignoring")})),[4,d];case 2:return p=r.sent(),i.info("success, status="+p.status),[2,{response:p.data,request:p.request,duration:Date.now()-s}];case 3:if(f=r.sent(),i.info("failed"),o.default.isCancel(f))throw i.info("response="+c.safeJsonStringify(f.response)),{aborted:!0};throw f.response?i.info("response="+c.safeJsonStringify(f.response)):f.request?i.info("no response, request="+c.safeJsonStringify(f.request)):i.info("request not made, error="+c.safeJsonStringify(f)),f||new Error("Request failed");case 4:return[2]}var h}))}))},e}();t.HttpRequestDispatcher=u},function(e,t,n){e.exports=n(52)},function(e,t,n){var i=n(3),r=n(21),o=n(53),a=n(28);function s(e){var t=new o(e),n=r(o.prototype.request,t);return i.extend(n,o.prototype,t),i.extend(n,t),n}var c=s(n(24));c.Axios=o,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n(29),c.CancelToken=n(67),c.isCancel=n(23),c.all=function(e){return Promise.all(e)},c.spread=n(68),e.exports=c,e.exports.default=c},function(e,t,n){var i=n(3),r=n(22),o=n(54),a=n(55),s=n(28);function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},i.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}})),i.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){var i=n(3);function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){i.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},function(e,t,n){var i=n(3),r=n(56),o=n(23),a=n(24);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=i.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),i.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=r(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(s(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){var i=n(3);e.exports=function(e,t,n){return i.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t,n){var i=n(3);e.exports=function(e,t){i.forEach(e,(function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])}))}},function(e,t,n){var i=n(27);e.exports=function(e,t,n){var r=n.config.validateStatus;!r||r(n.status)?e(n):t(i("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){e.exports=function(e,t,n,i,r){return e.config=t,n&&(e.code=n),e.request=i,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){var i=n(61),r=n(62);e.exports=function(e,t){return e&&!i(t)?r(e,t):t}},function(e,t,n){e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){var i=n(3),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,a={};return e?(i.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=i.trim(e.substr(0,o)).toLowerCase(),n=i.trim(e.substr(o+1)),t){if(a[t]&&r.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},function(e,t,n){var i=n(3),r=n(65);e.exports=i.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var i=e;if(r(e))throw new Error("URL contains XSS injection attempt");return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=i.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){e.exports=function(e){return/(\b)(on\w+)=|javascript|(<\s*)(\/*)script/gi.test(e)}},function(e,t,n){var i=n(3);e.exports=i.isStandardBrowserEnv()?{write:function(e,t,n,r,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),i.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),i.isString(r)&&s.push("path="+r),i.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){var i=n(29);function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new i(e),t(n.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},function(e,t,n){e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.generateCauseId=function(){for(var e="abcdef0123456789".length,t="",n=0;n<8;n++)t+="abcdef0123456789".charAt(Math.floor(Math.random()*e));return t},t.validateCauseId=function(e){return new RegExp("^[a-f0-9]{8}$").test(e)&&8===e.length}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=n(30),r=n(7),o=function(){function e(e,t,n){void 0===n&&(n=""),this.ulLogComponent=e,this.ulSafeComponent=t,this._getPrefix=r.isFunction(n)?n:function(){return n},this.logComponent=i.LogFactory.instance().component(this.ulLogComponent),i.LogFactory.instance().declareComponentSafe(this.ulLogComponent,t)}return e.prototype.createChild=function(t){var n=this,i=r.isFunction(t)?t:function(){return t};return new e(this.ulLogComponent,this.ulSafeComponent,(function(){return n._getPrefix()?n._getPrefix()+"/"+i():i()}))},e.prototype.log=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._apply((function(t){return e.logComponent.debug2(null,t)}),t)},e.prototype.debug=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._apply((function(t){return e.logComponent.debug4(null,t)}),t)},e.prototype.info=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._apply((function(t){return e.logComponent.debug1(null,t)}),t)},e.prototype.warn=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._apply((function(t){return e.logComponent.warn(null,t)}),t)},e.prototype.error=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];this._apply((function(t){return e.logComponent.error(null,t)}),t)},e.prototype._apply=function(e,t){void 0===t&&(t=[]),this._addPrefix(t),e(t.map((function(e){return e instanceof DOMException?e.toString():e})).map((function(e){return r.isObject(e)?JSON.stringify(e):e})).join(", "))},e.prototype._addPrefix=function(e){if(e&&e[0]){var t=this._getPrefix()+" "+e[0];e[0]=t}},e}();t.TsCallingLogger=o},function(e,t,n){
/*!
     *  RootToolsManager.ts
     *  AUF
     *
     *  Created by Johan Blumenberg on 2016-12-29
     *  Copyright 2016 Microsoft. All rights reserved.
     *
     */
var i,r=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(72),s=n(14),c=n(8),l=n(32),u=s.LogFactory.instance().component("RootToolsManager");s.LogFactory.instance().declareComponentSafe("RootToolsManager",!0),function(e){e[e.InternalBuild=0]="InternalBuild",e[e.PublicBuild=1]="PublicBuild"}(o=t.BuildType||(t.BuildType={}));var d=o.InternalBuild;function p(e,t){var n=[];for(var i in e)n.push(t(i,e[i]));return n}function f(e,t,n){if(null==e)return null==t||0===t.length;if(null==t)return null==e||0===e.length;if(e.length===t.length){for(var i=0;i<e.length;i++)if(!n(e[i],t[i]))return!1;return!0}return!1}function h(e,t){return null==e?null==t:null==t?null==e:e.arg===t.arg&&e.op===t.op&&e.value===t.value}function g(e,t){return null==e?null==t||0===t.logId:null==t?null==e||0===e.logId:e.logId===t.logId&&e.name===t.name&&f(e.matchers,t.matchers,h)}function m(e,t){return null==e?null==t:null==t?null==e:e.component===t.component&&e.parsedLevel===t.level}function v(e,t){return null==e?null==t:null==t?null==e:e.component===t.component&&e.level===t.level}function S(e){for(var t=[],n=0;n<e.length;n++)"string"==typeof e[n]||"number"==typeof e[n]?t.push(e[n]):t.push(JSON.stringify(e[n]));return t}t.setBuildType=function(e){var t=d;return d=e,t};var y=function(e){function t(t,n,i){var r=e.call(this)||this;return r._unmetConditions=[],r._rtMan=t,r._triggerCallback=n,r._ecsConfig=i,r.resetConditions(),r}return r(t,e),t.prototype.config=function(){return this._ecsConfig},t.prototype.configEquals=function(e){return this._ecsConfig.includeUnsafe===e.includeUnsafe&&this._ecsConfig.mutualSubmissionType===e.mutualSubmissionType&&this._ecsConfig.name===e.name&&this._ecsConfig.reenableAfterTriggering===e.reenableAfterTriggering&&this._ecsConfig.experimentTarget===e.experimentTarget&&g(this._ecsConfig.resetCondition,e.resetCondition)&&f(this._ecsConfig.conditions,e.conditions,g)&&f(this._ecsConfig.filters,e.filters,v)},t.prototype.nativeConfigEquals=function(e){return this._ecsConfig.includeUnsafe===e.includeUnsafe&&this._ecsConfig.name===e.name&&this._ecsConfig.reenableAfterTriggering===e.reenableAfterTriggering&&g(this._ecsConfig.resetCondition,e.resetCondition)&&f(this._ecsConfig.conditions,e.conditions,g)&&f(this._ecsConfig.filters,e.filters,m)},t.prototype.needReset=function(e){return!this.configEquals(e)},t.prototype.resetConditions=function(){this._unmetConditions=[];for(var e=0;e<this._ecsConfig.conditions.length;e++)this._unmetConditions.push(e)},t.prototype.matcherMatches=function(e,t){if(e.arg>=t.length)return!1;var n=t[e.arg],i="string"==typeof n?e.value:parseInt(e.value,10);return"="===e.op||"=="===e.op?n===i:"!="===e.op?n!==i:"<"===e.op?n<i:"<="===e.op?n<=i:">"===e.op?n>i:">="===e.op?n>=i:"CONTAINS"===e.op.toUpperCase()&&(""+n).indexOf(e.value)>=0},t.prototype.conditionMatches=function(e,t,n){if(t!==e.logId)return!1;if(e.matchers)for(var i=0;i<e.matchers.length;i++)if(!this.matcherMatches(e.matchers[i],n))return!1;return!0},t.prototype.log=function(e,t,n,i){if(0!==this._unmetConditions.length&&e.component!==u){var r=this._ecsConfig;r.resetCondition&&this.conditionMatches(r.resetCondition,t,i)&&(u.debug4("LogTrigger %s: resetCondition met",r.name),this.resetConditions());for(var o=0;o<this._unmetConditions.length;o++){var a=this._unmetConditions[o];if(this.conditionMatches(r.conditions[a],t,i)){u.debug4("LogTrigger %s: condition %s met",r.name,r.conditions[a].name),this._unmetConditions.splice(o,1);break}}0===this._unmetConditions.length&&(u.debug1("LogTrigger %s has triggered, trying to send the log",r.name),this._triggerCallback.call(this._rtMan,r),r.reenableAfterTriggering&&this.resetConditions())}},t.prototype.receiveAll=function(){return!0},t}(l.AbstractLogAppender),_=function(e){function t(t,n,i){var r=e.call(this)||this;return r._circularBuffer=[],r._circularBufferMaxSize=0,r._onBufferOverflow=null,r._circularBuffer=[],r._circularBufferMaxSize=n,r._includeUnsafe=t,r._onBufferOverflow=i||function(){return r._circularBuffer.shift()},r}return r(t,e),t.prototype.log=function(e,t,n,i){if((this._includeUnsafe||e.component.safe())&&!(this._circularBuffer.length>this._circularBufferMaxSize)){var r={md:e,logId:t,messages:S(i)};this._circularBuffer.push(r),this._circularBuffer.length>this._circularBufferMaxSize&&this._onBufferOverflow()}},t.prototype.visitReverseOrder=function(e){for(var t=this._circularBuffer.length-1;t>=0;t--){var n=this._circularBuffer[t];if(!e(n.md,n.logId,n.messages))return}},t.prototype.visitForwardOrder=function(e){for(var t=0;t<this._circularBuffer.length;t++){var n=this._circularBuffer[t];if(!e(n.md,n.logId,n.messages))return}},t.prototype.needReset=function(e,t){return e!==this._includeUnsafe||t!==this._circularBufferMaxSize},t.prototype.dumpLogBuffer=function(e,t,n){var i=this,r=new E(e.reverse),o=e.filter.map((function(e){return{component:"root"===e.component?"":e.component,parsedLevel:e.level}})),a=n||{matchedLines:0,totalLines:0};return(e.reverse?this.visitReverseOrder:this.visitForwardOrder).apply(this,[function(e,n,s){return a.totalLines++,i.filterMatches(e,n,s,o)&&(a.matchedLines++,r.log(e.component,e.timestamp,e.level,n,s)),!t||r._data.length<t}]),r.close(),r.data()},t.prototype.filterMatches=function(e,t,n,i){for(var r=0;r<i.length;r++)if((""===i[r].component||e.component.name()===i[r].component||e.component.name().substr(0,i[r].component.length)===i[r].component&&"."===e.component.name().charAt(i[r].component.length))&&e.level>=i[r].parsedLevel)return!0;return!1},t.prototype.clear=function(){this._circularBuffer=[]},t.prototype.size=function(){return this._circularBuffer.length},t.prototype.empty=function(){return 0===this.size()},t.prototype.capacity=function(){return this._circularBufferMaxSize},t}(l.AbstractLogAppender);t.CircularBuffer=_;var E=function(){function e(e){this._reverse=e,this._first=!0,this._pending=[],this._components={},this._componentCount=0,this._lastts=0,this._base64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",this._data="ULOG2"+String.fromCharCode(33)+String.fromCharCode(32),this._data+=e?String.fromCharCode(34):String.fromCharCode(32),this._data+=String.fromCharCode(32)}return e.prototype._add8=function(e){if(this._pending.push(255&e),3===this._pending.length){var t=(this._pending[0]<<16)+(this._pending[1]<<8)+(this._pending[2]<<0),n=this._base64chars[t>>18&63]+this._base64chars[t>>12&63]+this._base64chars[t>>6&63]+this._base64chars[t>>0&63];this._data+=n,this._pending=[]}},e.prototype._add16=function(e){this._add8(e>>8&255),this._add8(e>>0&255)},e.prototype._add32=function(e){this._add8(e>>24&255),this._add8(e>>16&255),this._add8(e>>8&255),this._add8(e>>0&255)},e.prototype._add64=function(e){this._add32(e/4294967296|0),this._add32(0|e)},e.prototype._addS=function(e){for(var t=0;t<e.length;t++)this._add8(e.charCodeAt(t));this._add8(0)},e.prototype._close=function(){for(;this._pending.length;)this._add8(0)},e.prototype.log=function(e,t,n,i,r){var o=this._components[e.name()];o||(o=++this._componentCount,this._components[e.name()]=o,this._add8(2),this._add16(o),this._addS(e.name()),this._addS(""),this._addS(""),this._add8(e.safe()?1:0));var a=128;this._first&&(a|=2);var s=t-this._lastts;this._lastts=t,s>-128&&s<128&&(a|=1),this._add8(a),1&a?this._add8(s):this._add64(1e3*t),this._first&&(this._add32(1),this._add8(0),this._add16(0)),this._add16(o),this._add8(n),this._add32(i),this._add8(r.length);for(var c=0;c<r.length;c++)this._add8(8),this._addS(""+r[c]);this._first=!1},e.prototype.close=function(){this._add8(7),this._close()},e.prototype.data=function(){return this._data},e.prototype.empty=function(){return this._first},e}(),T=function(e){function t(t,n,i,r){var o=e.call(this)||this;return o._capacity=t,o._onBufferOverflow=n,o._enableThrottling=i,o._maxVerbosityLevel=r,o._outputFormatter=new E(!1),o._linesStored=0,o._throttling=!1,o._linesThrottled=0,o}return r(t,e),t.prototype.log=function(e,t,n,i){this._maxVerbosityLevel&&e.level<this._maxVerbosityLevel||(this._throttling?this._linesThrottled++:(this._linesStored++,this._outputFormatter.log(e.component,e.timestamp,e.level,t,S(i))),this._linesStored>this._capacity&&(this._enableThrottling?this._throttling||(this._throttling=!0):this._onBufferOverflow()))},t.prototype.dumpAndReset=function(){if(this._outputFormatter.empty())return"";this._linesThrottled>0&&this._outputFormatter.log(u,(new Date).getTime(),c.LogLevel.Fatal,-1,["RooToolsManager: Log buffer overflow! "+this._linesThrottled+" lines thrown away"]),this._outputFormatter.close();var e=this._outputFormatter.data();return this.clearBuffer(),e},t.prototype.empty=function(){return this._outputFormatter.empty()},t.prototype.clearBuffer=function(){this._outputFormatter=new E(!1),this._linesStored=0,this._linesThrottled=0,this._throttling=!1},t.prototype.capacity=function(){return this._capacity},t.prototype.throttlingEnabled=function(){return this._enableThrottling},t.prototype.size=function(){return this._linesStored},t.prototype.maxVerbosityLevel=function(){return this._maxVerbosityLevel},t}(l.AbstractLogAppender);function C(e){return"Native"===e||"JavaScript"===e||"Mixed"===e}t.DumperBuffer=T;var I=function(){function e(){this._maxUploadSize=0,this._jsToNativeBuffer=null,this._jsToNativeBufferHandle=null,this._jsToNativeFlushTimer=null,this._jsToNativeFlushInterval=0,this._triggers={},this._defaultBuffers=[{size:2097152,level:c.LogLevel.Debug4}],this._defaultKillswitch={blacklist:[],whitelist:[]},this._defaultBlacklists={component:[],logline:[]},this._localLogLevels={},this._defaultExperimentTarget="Mixed",this._BRBCallback=null}return e.prototype.setDelegate=function(e){this._glue=e,this.registerListeners()},e.prototype.isDelegateSet=function(){return null!=this._glue},e.prototype.setNativeFunctions=function(e){this._native&&this._native.log_config.removeLogTriggerListener(this),this._native=e,this._native&&this._native.log_config.addLogTriggerListener(this)},e.prototype.applyLogLevels=function(){var e={};for(var t in this._localLogLevels)e[t]=this._localLogLevels[t];e[""]=e.root||c.LogLevel.Debug4,delete e.root;var n=p(e,(function(e,t){return{component:e,level:t}}));n.sort((function(e,t){return e.component.length-t.component.length})),n.forEach((function(e){return s.LogFactory.instance().component(e.component).setLevel(e.level)})),this._native&&this._native.log_config.setLogLevelConfig(n)},e.prototype.setLocalLogLevelConfig=function(e){this._localLogLevels=e,this.applyLogLevels()},e.prototype.parseMatcher=function(e){return null==e||null==e.arg||null==e.op||null==e.value?null:{arg:e.arg,op:e.op,value:e.value}},e.prototype.parseCondition=function(e){if(null==e||null==e.logId)return null;if(e.matchers&&!(e.matchers instanceof Array))return null;var t,n={name:e.name||(t=e.logId,(4294967296+t).toString(16).substr(-8)),logId:e.logId,matchers:[]};if(e.matchers&&e.matchers.length)for(var i=0,r=e.matchers;i<r.length;i++){var o=r[i],a=this.parseMatcher(o);a&&n.matchers.push(a)}return n},e.prototype.parseFilter=function(e){return null==e||null==e.component||0===e.component.length?null:{component:e.component,level:e.level,parsedLevel:s.LogFactory.levelFromString(e.level)}},e.prototype.parseConfig=function(e,t,n){if(null==e)return null;if(!(e.conditions instanceof Array)||0==e.conditions.length)return null;if(!(e.filters instanceof Array)||0==e.filters.length)return null;if(e.resetCondition&&!this.parseCondition(e.resetCondition))return null;for(var i={name:e.name||t+"->"+n,ecsNs:t,reenableAfterTriggering:e.reenableAfterTriggering||!1,mutualSubmissionType:e.mutualSubmissionType||"",includeUnsafe:d!==o.PublicBuild&&(e.includeUnsafe||!1),experimentTarget:C(e.experimentTarget)&&e.experimentTarget||this._defaultExperimentTarget,conditions:[],resetCondition:null==e.resetCondition?e.resetCondition:this.parseCondition(e.resetCondition),filters:[]},r=0,a=e.conditions;r<a.length;r++){var s=a[r],c=this.parseCondition(s);c&&i.conditions.push(c)}for(var l=0,u=e.filters;l<u.length;l++){var p=u[l],f=this.parseFilter(p);f&&i.filters.push(f)}return 0===i.conditions.length?null:i},e.prototype.isExperimentListed=function(e,t,n,i){return!!e&&(!(!i||!e.some((function(e){return"*"===e.namespace})))||e.some((function(e){return e.namespace===t&&(e.experiment===n||"*"==e.experiment)})))},e.prototype.isExperimentAllowed=function(e,t,n){return!this.isExperimentListed(e.blacklist,t,n,!0)||this.isExperimentListed(e.whitelist,t,n,!1)},e.prototype.findTrigger=function(e,t){for(var n in e)if(e[n].configEquals(t))return n;return null},e.prototype.findTriggerByNativeConfig=function(e,t){for(var n in e)if(e[n].nativeConfigEquals(t))return n;return null},e.prototype.OnEcsChange=function(){var e=this;return null==this._glue?a.Resolved():this._glue.fetchEcsConfig("SkypeRootTools","ULBaseline").then((function(t){u.debug4("Reloading ULBaseline config - new config: %@",t),t||(u.warn("No ULBaseline config"),t={}),e._maxUploadSize=t.logUpload&&t.logUpload.maxSize||1024;var n=[],i=e._triggers;e._triggers={};var r=(t.logUpload&&t.logUpload.maxSize||1024)/100,o=t.circularBuffer&&t.circularBuffer.enabled,d=t.circularBuffer&&t.circularBuffer.buffers||e._defaultBuffers,f=t.circularBuffer&&t.circularBuffer.storeUnsafe;e._defaultExperimentTarget=C(t.defaultExperimentTarget)&&t.defaultExperimentTarget||"Mixed";var h=t.killswitch||e._defaultKillswitch,g=t.blacklists||e._defaultBlacklists;g.component.length>0&&s.LogFactory.instance().setComponentBlacklist(g.component);var m={};(t.componentLevels||[]).forEach((function(e){return m[e.component]=e.level})),function e(t,n,i){return n<t.length?i(t[n]).then((function(){return e(t,n+1,i)})):a.Resolved()}(t.configPaths||[],0,(function(t){return e._glue.fetchEcsConfig(t.ns,t.key).then((function(r){var a=r instanceof Array?r:[r];u.debug4("Reloading ECS config for %s->%s - new config: %@",t.ns,t.key,a);for(var s=0,c=a;s<c.length;s++){var l=c[s];if(null!=l){var d=e.parseConfig(l,t.ns,t.key);if(null!=d)if("JavaScript"===d.experimentTarget||"Mixed"===d.experimentTarget)if(u.debug2("Parsed ECS config for %s->%s - %@",t.ns,t.key,d),e.isExperimentAllowed(h,t.ns,d.name)){u.debug2("Allowing %s->%s:%s according to killswitch",t.ns,t.key,d.name),o=!0;var p=e.findTrigger(i,d);null!=p?(u.debug2("Triggers updated, keeping trigger %s",d.name),e._triggers[p]=i[p],delete i[p]):n.push(d),d.filters&&d.filters.forEach((function(e){return m[e.component]=Math.min(m[e.component]||255,e.parsedLevel)})),d.includeUnsafe&&(f=!0)}else u.debug2("Disallowing %s->%s according to killswitch",t.ns,t.key);else u.debug4("Skipping %s->%s, targeted for %s",t.ns,t.key,d);else u.error("Failed to parse ECS config for %s->%s",t.ns,t.key)}}}))})).always((function(){for(var t in e.applyLogLevels(),i)u.debug2("Triggers updated, removing trigger %s",i[t].config().name),s.LogFactory.instance().removeAppender(+t);if(n.forEach((function(t){u.debug2("Triggers updated, adding trigger %s",t.name);var n=new y(e,e._triggered,t),i=s.LogFactory.instance().addAppender(n);e._triggers[String(i)]=n})),m[""]=m.root||c.LogLevel.Debug4,delete m.root,!e._circularBuffer||o&&!e._circularBuffer.needReset(f,r)?e._circularBuffer&&(Object.keys(i).length>0||n.length>0?(u.debug2("Buffer updated, reapplying log levels, removing log levels wrapper"),s.LogFactory.instance().removeAppender(e._circularBufferHandle),e._circularBufferHandle=null):u.debug2("Buffer updated, no change")):(u.debug2("Buffer updated, removing existing buffer"),s.LogFactory.instance().removeAppender(e._circularBufferHandle),e._circularBuffer=null,e._circularBufferHandle=null),o&&(e._circularBuffer||(u.debug2("Buffer updated, adding new buffer (storeUnsafe=%d,maxSize=%s)",f,r),e._circularBuffer=new _(f,r)),null==e._circularBufferHandle&&(u.debug2("Creating log level wrapper"),e._circularBufferHandle=s.LogFactory.instance().addAppender(l.wrapAppenderWithLogLevels(e._circularBuffer,m),c.AppenderFlags.InsertFront))),e._native){var a=p(m,(function(e,t){return{component:e,level:t}}));a.sort((function(e,t){return e.component.length-t.component.length})),e._native.log_config.setLogBufferConfig(o,{storeUnsafe:f,buffers:d},a);var h=[];for(var g in e._triggers){var v=e._triggers[g].config();h.push({name:v.name,ecsNs:v.ecsNs,conditions:v.conditions,resetCondition:v.resetCondition,includeUnsafe:v.includeUnsafe,reenableAfterTriggering:v.reenableAfterTriggering,filters:v.filters.map((function(e){return{component:e.component,level:e.parsedLevel}})),dumpFile:!1,metadata:{}})}e._native.log_config.setLogTriggerConfig(h,{})}}))}))},e.prototype._send=function(e,t){null!=this._glue&&(this._glue.sendTelemetry("638b8ba2bae14e07aa5d73ddb5d5e5c5-297b8412-5df3-4a83-83c4-7b76c6c5d3f0-7104",{logTriggerName:e.name,logEcsNs:e.ecsNs,logdata:t}),u.debug4("LogSender::send, sent %d bytes",t.length))},e.prototype.triggered=function(e,t){},e.prototype.triggeredPartially=function(e,t,n,i,r){var o=this.findTriggerByNativeConfig(this._triggers,e);if(o){var a={level:t.level,component:s.LogFactory.instance().component(t.component),timestamp:t.timestamp};this._triggers[o].log(a,n,i,r)}},e.prototype.reset=function(e){var t=this.findTriggerByNativeConfig(this._triggers,e);t&&this._triggers[t].resetConditions()},e.prototype.dumpLogBuffer=function(e,t){if(this._circularBuffer){var n={matchedLines:0,totalLines:0},i=this._circularBuffer.dumpLogBuffer(e,this._maxUploadSize,n);if(u.debug4("dumpLogBuffer: dumped %d of %d lines, size of payload: %d",n.matchedLines,n.totalLines,null!=i?i.length:0),this._native){var r=a.Defer();return this._native.log_config.mergeAndDumpLogBuffer(i,e,t,(function(e){return r.resolve(e)})),r.promise()}return a.Resolved(i)}return u.warn("dumpLogBuffer: no log buffer enabled"),a.Rejected()},e.prototype._triggered=function(e){var t=this,n={compression:c.LogFileCompression.Compress,encoding:c.LogFileEncoding.Base64,encryption:c.LogFileEncryption.Encrypted,maxRotations:0,maxSize:this._maxUploadSize,reverse:!0},i={includeUnsafe:e.includeUnsafe,filter:e.filters.map((function(e){return{component:e.component,level:e.parsedLevel}})),reverse:!0};this.dumpLogBuffer(i,n).then((function(n){return t._send(e,n)}))},e.prototype.sendBRBEvent=function(e){try{if(u.debug2("sendBRBEvent %s",JSON.stringify(e)),null!=this._glue&&"function"==typeof this._glue.sendLoggingEventToNative){var t={eventType:"uploadBRB",mutualSubmissionType:"call",payload:e};this._glue.sendLoggingEventToNative(JSON.stringify(t),"")}}catch(e){u.error("sendBRBEvent %s: %s",e.name,e.message)}},e.prototype.setBRBCallback=function(e){u.debug2("setBRBCallback"),null!=this._glue?"function"==typeof this._glue.setNativeLoggingEventCallback?this._BRBCallback=e:u.warn("setBRBCallback: RootToolsManagerDelegate missing setNativeLoggingEventCallback method"):u.warn("setBRBCallback: RootToolsManagerDelegate is not set")},e.prototype.registerListeners=function(){var e=this;null!=this._glue&&"function"==typeof this._glue.setNativeLoggingEventCallback?this._glue.setNativeLoggingEventCallback((function(t,n){return e.handleNativeLoggingEvent(t,n)})):u.warn("registerListeners: RootToolsManagerDelegate missing setNativeLoggingEventCallback method")},e.prototype.handleNativeLoggingEvent=function(e,t){try{u.debug2("Native Log event message: %s aux: %s",e,t);var n=JSON.parse(e);if(n.eventType&&"uploadBRB"===n.eventType){if("function"!=typeof this._BRBCallback)return void u.warn("BRBCallback not set, ignoring native event");u.debug4("Sending BRB callback: %@",n.payload),this._BRBCallback(n.payload)}else n.eventType&&"jsLogFileConfiguration"===n.eventType&&this.handleLogFileConfigEvent(n)}catch(e){u.error("handleNativeLoggingEvent %s: %s",e.name,e.message)}},e.prototype.handleLogFileConfigEvent=function(e){if(e.payload){var t=e.payload;if(t.enabled){if(t.chunkSize&&t.flushInterval){var n={chunkSize:t.chunkSize,flushInterval:t.flushInterval,enableThrottling:t.enableThrottling,maxVerbosityLevel:t.maxVerbosityLevel};this.startJsToNativeLogging(n)}}else this.flushDisableJsToNativeLogging()}},e.prototype.logExternalForDDL=function(e,t){try{if(u.debug2("logExternalForDDL %s %s",e,t),null!=this._glue&&"function"==typeof this._glue.sendLoggingEventToNative){var n={eventType:"logInSClog",payload:{message:e,parameters:t}};this._glue.sendLoggingEventToNative(JSON.stringify(n),"")}else u.warn("ignoring logExternalForDDL, delegate misconfigured")}catch(e){u.error("logExternalForDDL %s: %s",e.name,e.message)}},e.prototype.startJsToNativeLogging=function(e){var t=this,n=e.chunkSize,i=e.flushInterval,r=e.enableThrottling,o=this._getVerbosityLevelFromConfig(e.maxVerbosityLevel);if(this._jsToNativeBuffer){if(this._jsToNativeBuffer.capacity()===n&&this._jsToNativeFlushInterval===i&&this._jsToNativeBuffer.throttlingEnabled()===r&&this._jsToNativeBuffer.maxVerbosityLevel()===o)return void u.debug1("Same JS2Native settings received - doing nothing");u.debug1("Reapplying js to native settings"),this.flushDisableJsToNativeLogging()}this._jsToNativeBuffer=new T(n,(function(){t.onJsToNativeBufferReady(t._jsToNativeBuffer)}),r,o),this.setJsToNativeFlushTimeout(i),this._jsToNativeFlushInterval=i,this._jsToNativeBufferHandle=s.LogFactory.instance().addAppender(this._jsToNativeBuffer)},e.prototype._getVerbosityLevelFromConfig=function(e){return e?s.LogFactory.levelFromString(e):null},e.prototype.flushDisableJsToNativeLogging=function(){this._jsToNativeBuffer&&this.onJsToNativeBufferReady(this._jsToNativeBuffer),this.plainDisableJsToNativeLogging()},e.prototype.plainDisableJsToNativeLogging=function(){this.clearJsToNativeFlushTimeout(),this._jsToNativeBufferHandle&&(s.LogFactory.instance().removeAppender(this._jsToNativeBufferHandle),this._jsToNativeBufferHandle=0,this._jsToNativeBuffer=null,u.debug1("Disabling forwarding JS logs to native"))},e.prototype.onJsToNativeBufferReady=function(e){null!=this._glue&&"function"==typeof this._glue.sendLoggingEventToNative?(this.clearJsToNativeFlushTimeout(),this.dumpJsToNativeBuffer(e),this.setJsToNativeFlushTimeout(this._jsToNativeFlushInterval)):this.plainDisableJsToNativeLogging()},e.prototype.dumpJsToNativeBuffer=function(e){if(!e.empty()){var t=e.dumpAndReset();this._glue.sendLoggingEventToNative(JSON.stringify({eventType:"writeLogData"}),t)}},e.prototype.clearJsToNativeFlushTimeout=function(){this._jsToNativeFlushTimer&&(clearTimeout(this._jsToNativeFlushTimer),this._jsToNativeFlushTimer=null)},e.prototype.setJsToNativeFlushTimeout=function(e){var t=this;!this._jsToNativeFlushTimer&&e&&(this._jsToNativeFlushTimer=setTimeout((function(){t._jsToNativeFlushTimer=null,t.onJsToNativeBufferReady(t._jsToNativeBuffer)}),e))},e.prototype.stopAsyncOperations=function(){this.flushDisableJsToNativeLogging()},e}();t.RootToolsManager=new I},function(e,t,n){(function(e){function n(e){return null!=e&&"function"==typeof e.then}function i(e){return null!=e&&"function"==typeof e.cancel}function r(e,n){if(!t.config.catchExceptions)return e();try{return e()}catch(e){return n(e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.config={exceptionsToConsole:!0,catchExceptions:!0,traceEnabled:!1,exceptionHandler:void 0,unhandledErrorHandler:function(e){throw e}},t.fromThenable=function(e){var t=u();return e.then((function(e){t.resolve(e)}),(function(e){t.reject(e)})),t.promise().thenAsync((function(e){return e}))};var o,a=[],s=void 0!==e;function c(t){a.push(t),1===a.length&&(s?e(l):setTimeout(l,0))}function l(){var e=a;a=[];for(var t=0;t<e.length;t++)e[t]()}function u(){return new o.SyncTask}function d(e){return(new o.SyncTask).resolve(e).promise()}function p(e){var t=u(),r=!1;return t.onCancel((function(t){e.forEach((function(e){i(e)&&o.SyncTask.cancelOtherInternal(e,t)}))})),e.forEach((function(e){n(e)?e.then((function(e){r||(r=!0,t.resolve(e))}),(function(e){r||(r=!0,t.reject(e))})):r||(r=!0,t.resolve(e))})),t.promise()}t.asyncCallback=c,function(e){var o=function(){function e(){this._completedSuccess=!1,this._completedFail=!1,this._traceEnabled=!1,this._cancelCallbacks=[],this._wasCanceled=!1,this._wasExplicitlyCanceled=!1,this._resolving=!1,this._storedCallbackSets=[],this._mustHandleError=!0}return e.prototype._addCallbackSet=function(t,n){var i=this,r=new e;return r.onCancel((function(e){t.wasCanceled=!0,t.cancelContext=e,i._cancelInternal(e)})),t.task=r,this._storedCallbackSets.push(t),n?this._mustHandleError=!1:r._mustHandleError=!1,this._resolving||(this._completedSuccess?this._resolveSuccesses():this._completedFail&&this._resolveFailures()),r.promise()},e.prototype.onCancel=function(e){return this._completedSuccess||this._completedFail||(this._wasCanceled?e(this._cancelContext):this._cancelCallbacks.push(e)),this},e.prototype.then=function(e,t){return this._addCallbackSet({successFunc:e,failFunc:t},!0)},e.prototype.thenAsync=function(e,t){return this._addCallbackSet({successFunc:e,failFunc:t,asyncCallback:!0},!0)},e.prototype.catch=function(e){return this._addCallbackSet({failFunc:e},!0)},e.prototype.always=function(e){return this._addCallbackSet({successFunc:e,failFunc:e},!0)},e.prototype.setTracingEnabled=function(e){return this._traceEnabled=e,this},e.prototype.finally=function(e){return this._addCallbackSet({successFunc:e,failFunc:e},!1),this},e.prototype.done=function(e){return this._addCallbackSet({successFunc:e},!1),this},e.prototype.fail=function(e){return this._addCallbackSet({failFunc:e},!1),this},e.prototype.resolve=function(e){return this._checkState(!0),this._completedSuccess=!0,this._storedResolution=e,this._cancelCallbacks=[],this._resolveSuccesses(),this},e.prototype.reject=function(t){return this._checkState(!1),this._completedFail=!0,this._storedErrResolution=t,this._cancelCallbacks=[],this._resolveFailures(),e._enforceErrorHandled(this),this},e.prototype._checkState=function(e){if(this._completedSuccess||this._completedFail){this._completeStack&&console.error(this._completeStack.message,this._completeStack.stack);var n="Failed to "+(e?"resolve":"reject")+": the task is already "+(this._completedSuccess?"resolved":"rejected");throw new Error(n)}(t.config.traceEnabled||this._traceEnabled)&&(this._completeStack=new Error("resolve"))},e._enforceErrorHandled=function(n){n._mustHandleError&&(e._rejectedTasks.push(n),e._enforceErrorHandledTimer||(e._enforceErrorHandledTimer=setTimeout((function(){e._enforceErrorHandledTimer=void 0;var n=e._rejectedTasks;e._rejectedTasks=[],n.forEach((function(e,n){e._mustHandleError&&t.config.unhandledErrorHandler(e._storedErrResolution)}))}),0)))},e.prototype.cancel=function(e){if(this._wasExplicitlyCanceled)throw new Error("Already Canceled");this._wasExplicitlyCanceled=!0,this._cancelInternal(e)},e.prototype._cancelInternal=function(e){var t=this;if(!this._wasCanceled){this._wasCanceled=!0,this._cancelContext=e;var n=this._cancelCallbacks;this._cancelCallbacks=[],n.length>0&&n.forEach((function(e){t._completedSuccess||t._completedFail||e(t._cancelContext)}))}},e.cancelOtherInternal=function(e,t){var n=e;n._storedCallbackSets&&n._cancelInternal?n._cancelInternal(t):e.cancel(t)},e.prototype.promise=function(){return this},e.prototype._resolveSuccesses=function(){var e=this;for(this._resolving=!0;this._storedCallbackSets.length;){var t=this._storedCallbackSets;this._storedCallbackSets=[],t.forEach((function(t){t.asyncCallback?c((function(){return e._resolveSuccessCallback(t)})):e._resolveSuccessCallback(t)}))}this._resolving=!1},e.prototype._resolveSuccessCallback=function(t){var o=this;t.successFunc?r((function(){var r=t.successFunc(o._storedResolution);i(r)&&(t.wasCanceled?e.cancelOtherInternal(r,t.cancelContext):t.task.onCancel((function(t){return e.cancelOtherInternal(r,t)}))),n(r)?r.then((function(e){t.task.resolve(e)}),(function(e){t.task.reject(e)})):t.task.resolve(r)}),(function(e){o._handleException(e,"SyncTask caught exception in success block: "+e.toString()),t.task.reject(e)})):t.task.resolve(this._storedResolution)},e.prototype._resolveFailures=function(){var e=this;for(this._resolving=!0;this._storedCallbackSets.length;){var t=this._storedCallbackSets;this._storedCallbackSets=[],t.forEach((function(t){t.asyncCallback?c((function(){return e._resolveFailureCallback(t)})):e._resolveFailureCallback(t)}))}this._resolving=!1},e.prototype._resolveFailureCallback=function(t){var o=this;t.failFunc?r((function(){var r=t.failFunc(o._storedErrResolution);i(r)&&(t.wasCanceled?e.cancelOtherInternal(r,t.cancelContext):t.task.onCancel((function(t){return e.cancelOtherInternal(r,t)}))),n(r)?r.then((function(e){t.task.resolve(e)}),(function(e){t.task.reject(e)})):t.task.resolve(r)}),(function(e){o._handleException(e,"SyncTask caught exception in failure block: "+e.toString()),t.task.reject(e)})):t.task.reject(this._storedErrResolution)},e.prototype._handleException=function(e,n){t.config.exceptionsToConsole&&console.error(n),t.config.exceptionHandler&&t.config.exceptionHandler(e)},e.prototype.toEs6Promise=function(){var e=this;return new Promise((function(t,n){return e.then(t,n)}))},e._rejectedTasks=[],e}();e.SyncTask=o}(o||(o={})),t.all=function(e){if(0===e.length)return d([]);var t,r=u(),a=e.length,s=Array(e.length);r.onCancel((function(t){e.forEach((function(e){i(e)&&o.SyncTask.cancelOtherInternal(e,t)}))}));var c=function(){0==--a&&(void 0!==t?r.reject(t):r.resolve(s))};return e.forEach((function(e,i){n(e)?e.then((function(e){s[i]=e,c()}),(function(e){void 0===t&&(t=void 0===e||e),c()})):(s[i]=e,c())})),r.promise()},t.Defer=u,t.Resolved=d,t.Rejected=function(e){return(new o.SyncTask).reject(e).promise()},t.race=p,t.raceTimer=function(e,t){var n=u(),i=setTimeout((function(){n.resolve({timedOut:!0})}),t);return p([e.then((function(e){return clearTimeout(i),{timedOut:!1,result:e}})),n.promise()])}}).call(this,n(73).setImmediate)},function(e,t,n){(function(e){var i=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(r.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new o(r.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(74),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(31))},function(e,t,n){(function(e,t){!function(e,n){if(!e.setImmediate){var i,r,o,a,s,c=1,l={},u=!1,d=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?i=function(e){t.nextTick((function(){h(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),i=function(t){e.postMessage(a+t,"*")}):e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){h(e.data)},i=function(e){o.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(r=d.documentElement,i=function(e){var t=d.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):i=function(e){setTimeout(h,0,e)},p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return l[c]=r,i(c),c++},p.clearImmediate=f}function f(e){delete l[e]}function h(e){if(u)setTimeout(h,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{f(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(31),n(25))},function(e,t,n){
/*!
     *  pii.ts
     *  AUF
     *
     *  Created by Johan Blumenberg on 2017-01-16
     *  Copyright 2017 Microsoft. All rights reserved.
     *
     */
/*!
     * 1DS JS SDK Properties plugin, 3.0.1
     * Copyright (c) Microsoft and contributors. All rights reserved.
     * (Microsoft Internal Only)
     */function C(e,t,n,i){var o="",a="",s=Object(h.c)();if(s){i&&(o=";domain="+i);var c=Object(h.g)();c&&"https:"===c.protocol&&(a=";secure",null===T&&(T=Object(r.disallowsSameSiteNone)((Object(h.i)()||{}).userAgent)),T||(n+=";SameSite=None")),Object(r.cookieAvailable)()&&(s.cookie=t+"="+n+o+";path=/"+a)}}function I(){return void 0===S&&(S=!!b(y.LocalStorage)),S}function A(){return I()?b(y.LocalStorage):null}function b(e){var t,n,i=null;try{var o=Object(h.d)();if(!o)return null;n=new Date,(i=e===y.LocalStorage?o.localStorage:o.sessionStorage)&&Object(r.isFunction)(i.setItem)&&(i.setItem(n,n),t=i.getItem(n)!==n,i.removeItem(n),t&&(i=null))}catch(e){i=null}return i}!function(e){e[e.LocalStorage=0]="LocalStorage",e[e.SessionStorage=1]="SessionStorage"}(y||(y={})),i.a.isDate;var R=i.a.toISOString,O=function(){function e(t,n,o){if(this._logger=o,!t.disableCookiesUsage&&Object(r.cookieAvailable)()){var a=Object(r.getCookie)("MUID");if(a&&this.setLocalId("t:"+a),n.enableApplicationInsightsUser){var s=Object(r.getCookie)(e.userCookieName);if(s){var c=s.split(e.cookieSeparator);c.length>0&&(this.id=c[0])}if(!this.id){this.id=i.a.newId(t&&!i.a.isUndefined(t.idLength)?t.idLength:22);var l=new Date,u=R(l);this.accountAcquisitionDate=u,l.setTime(l.getTime()+31536e6);var d=[this.id,u],p=n.cookieDomain?n.cookieDomain:void 0;C(this._logger,e.userCookieName,d.join(e.cookieSeparator)+";expires="+l.toUTCString(),p)}}}if("undefined"!=typeof navigator){var f=navigator;this.locale=f.userLanguage||f.language}}return e.prototype.getLocalId=function(){if(this._customLocalId)return this._customLocalId;var e=Object(r.getCookie)("MUID");e&&this.setLocalId("t:"+e)},e.prototype.setLocalId=function(e){this._customLocalId=e},e.cookieSeparator="|",e.userCookieName="ai_user",e._staticInit=void Object(r.objDefineAccessors)(e.prototype,"localId",e.prototype.getLocalId,e.prototype.setLocalId),e}(),P="MSIE",N="Chrome",M="Firefox",w="Safari",D="Edge",L="Electron",k="SkypeShell",F="PhantomJS",x="Opera",U=function(){function e(e){this._propertiesConfig=e;var t=Object(h.g)();if(t){var n=t.hostname;n&&(this.domain="file:"===t.protocol?"local":n)}var i="undefined"!=typeof navigator?navigator.userAgent:"";if(e.userAgent&&(i=e.userAgent),e.populateBrowserInfo){if(i){var r=this._getBrowserName(i);this.browser=r,this.browserVer=this._getBrowserVersion(i,r)}var o=this._getScreenResolution();this.screenRes=o.w+"X"+o.h}}return e.prototype.getUserConsent=function(){return this._propertiesConfig.userConsented||!!Object(r.getCookie)(this._propertiesConfig.userConsentCookieName||"MSCC")},e.prototype.getUserConsentDetails=function(){try{if(this._propertiesConfig.callback&&this._propertiesConfig.callback.userConsentDetails){var e=this._propertiesConfig.callback.userConsentDetails();if(e)return JSON.stringify({Required:!!e.Required&&e.Required,Analytics:!!e.Analytics&&e.Analytics,SocialMedia:!!e.SocialMedia&&e.SocialMedia,Advertising:!!e.Advertising&&e.Advertising})}}catch(e){}return null},e.prototype._getBrowserName=function(e){return this._userAgentContainsString("OPR/",e)?x:this._userAgentContainsString(F,e)?F:this._userAgentContainsString(D,e)?D:this._userAgentContainsString(L,e)?L:this._userAgentContainsString(N,e)?N:this._userAgentContainsString("Trident",e)?P:this._userAgentContainsString(M,e)?M:this._userAgentContainsString(w,e)?w:this._userAgentContainsString(k,e)?k:"Unknown"},e.prototype._userAgentContainsString=function(e,t){return t.indexOf(e)>-1},e.prototype._getBrowserVersion=function(e,t){return t===P?this._getIeVersion(e):this._getOtherVersion(t,e)},e.prototype._getIeVersion=function(e){var t=e.match(new RegExp(P+" ([\\d,.]+)"));if(t)return t[1];var n=e.match(new RegExp("rv:([\\d,.]+)"));return n?n[1]:void 0},e.prototype._getOtherVersion=function(e,t){e===w&&(e="Version");var n=t.match(new RegExp(e+"/([\\d,.]+)"));return n?n[1]:"Unknown"},e.prototype._getScreenResolution=function(){var e={h:0,w:0},t=Object(h.k)();return t&&t.screen&&(e.h=screen.height,e.w=screen.width),e},e._staticInit=void Object(r.objDefineAccessors)(e.prototype,"userConsent",e.prototype.getUserConsent),e}(),j="Windows",B="Mac OS X",H="Android",G=/(windows|win32)/i,V=/ arm;/i,W=/windows\sphone\s\d+\.\d+/i,q=/(macintosh|mac os x)/i,K=/(ipad|iphone|ipod)(?=.*like mac os x)/i,z=/(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,J=/android/i,Y=/CrOS/i,$={5.1:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1","10.0":"10"},Q=function(){function e(e){var t="undefined"!=typeof navigator?navigator.userAgent:"";if(e.userAgent&&(t=e.userAgent),t&&e.populateOperatingSystemInfo){var n=this._getOsName(t.toLowerCase());this.name=n,this.ver=this._getOsVersion(t,n)}}return e.prototype._getOsName=function(e){return e.match(W)?"Windows Phone":e.match(V)?"Windows RT":e.match(G)?j:e.match(K)?"iOS":e.match(J)?H:e.match(z)?"Linux":-1!==e.indexOf("x11")?"Unix":-1!==e.indexOf("blackberry")?"BlackBerry":-1!==e.indexOf("symbian")?"Symbian":-1!==e.indexOf("nokia")?"Nokia":e.match(q)?B:e.match(Y)?"Chrome OS":"Unknown"},e.prototype._getOsVersion=function(e,t){return t===j?this._getGenericOsVersion(e,"Windows NT"):t===H?this._getGenericOsVersion(e,t):t===B?this._getMacOsxVersion(e):"Unknown"},e.prototype._getGenericOsVersion=function(e,t){var n=e.match(new RegExp(t+" ([\\d,.]+)"));return n?$[n[1]]?$[n[1]]:n[1]:"Unknown"},e.prototype._getMacOsxVersion=function(e){var t=e.match(new RegExp(B+" ([\\d,_,.]+)"));if(t){var n=t[1].replace(/_/g,".");if(n){var i=this._getDelimiter(n);return i?n.split(i)[0]:n}}return"Unknown"},e.prototype._getDelimiter=function(e){return e.indexOf(".")>-1?".":e.indexOf("_")>-1?"_":null},e}(),X=function(){function e(e){e.serviceName&&(this.serviceName=e.serviceName)}return e.prototype.getMsfpc=function(){return Object(r.getCookie)("MSFPC")},e.prototype.getAnid=function(){return Object(r.getCookie)("ANON").slice(0,34)},e._staticInit=(Object(r.objDefineAccessors)(e.prototype,"msfpc",e.prototype.getMsfpc),void Object(r.objDefineAccessors)(e.prototype,"anid",e.prototype.getAnid)),e}(),Z=function(e){this.popSample=100,this.eventFlags=0,e.hashIdentifiers&&(this.eventFlags=1048576|this.eventFlags),e.dropIdentifiers&&(this.eventFlags=2097152|this.eventFlags)},ee=function(){var e=(new Date).getTimezoneOffset(),t=e%60,n=(e-t)/60,i="+";n>0&&(i="-"),n=Math.abs(n),t=Math.abs(t),this.tz=i+(n<10?"0"+n:n.toString())+":"+(t<10?"0"+t:t.toString())},te=function(){},ne=function(){function e(){}return e.prototype.setId=function(e){this.customId=e},e.prototype.getId=function(){return Object(r.isString)(this.customId)?this.customId:this.automaticId},e._staticInit=void Object(r.objDefineAccessors)(e.prototype,"id",e.prototype.getId,e.prototype.setId),e}(),ie=function(e,t,n,r){if(e.enableApplicationInsightsTrace){this.traceId=t||i.a.generateW3CId(),this.parentId=n,this.name=r;var o=Object(h.g)();o&&o.pathname&&(this.name=o.pathname)}},re=function(){function e(){}return e.id="id",e.ver="ver",e.appName="name",e.locale="locale",e.expId="expId",e.env="env",e}(),oe=function(){function e(){}return e.domain="domain",e.browser="browser",e.browserVer="browserVer",e.screenRes="screenRes",e.userConsent="userConsent",e.consentDetails="consentDetails",e}(),ae=function(){function e(){}return e.locale="locale",e.localId="localId",e.id="id",e}(),se=function(){function e(){}return e.osName="name",e.ver="ver",e}(),ce=function(){function e(){}return e.ver="ver",e.seq="seq",e.installId="installId",e.epoch="epoch",e}(),le=function(){function e(){}return e.msfpc="msfpc",e.anid="anid",e.serviceName="serviceName",e}(),ue=function(){function e(){}return e.popSample="popSample",e.eventFlags="eventFlags",e}(),de=function(){function e(){}return e.tz="tz",e}(),pe=function(){function e(){}return e.sessionId="sesId",e}(),fe=function(){function e(){}return e.localId="localId",e.deviceClass="deviceClass",e.make="make",e.model="model",e}(),he=function(){function e(){}return e.role="role",e.roleInstance="roleInstance",e.roleVer="roleVer",e}(),ge=function(){function e(){}return e.traceId="traceID",e.traceName="name",e.parentId="parentID",e}(),me=function(){function e(){}return e.UserExt="user",e.DeviceExt="device",e.TraceExt="trace",e.WebExt="web",e.AppExt="app",e.OSExt="os",e.SdkExt="sdk",e.IntWebExt="intweb",e.UtcExt="utc",e.LocExt="loc",e.CloudExt="cloud",e}(),ve="MicrosoftApplicationsTelemetryDeviceId",Se=function(){function e(e){if(this._sequenceId=0,this._propertyStorage=e.propertyStorageOverride,this.seq=this._sequenceId,this.epoch=(new Date).getTime().toString(),!e.disableCookiesUsage&&Object(r.cookieAvailable)()||this._propertyStorage){var t=this._getData(ve);t||(t=i.a.newGuid()),this._saveData(ve,t),this.installId=t}else Object(r.deleteCookie)(ve)}return e.prototype.getSequenceId=function(){return++this._sequenceId},e.prototype._saveData=function(e,t){var n=this._propertyStorage;n?n.setProperty(e,t):Object(r.setCookie)(e,t,365)},e.prototype._getData=function(e){return this._propertyStorage?this._propertyStorage.getProperty(e)||"":Object(r.getCookie)(e)},e}(),ye=function(){function e(t,n){var o,s,u;Object(d.a)(e,this,(function(d){var p,f={sessionRenewalMs:(p=t).sessionRenewalMs&&function(){return p.sessionRenewalMs},sessionExpirationMs:p.sessionExpirationMs&&function(){return p.sessionExpirationMs},cookieDomain:p.cookieDomain&&function(){return p.cookieDomain},namePrefix:p.namePrefix&&function(){return p.namePrefix},sessionAsGuid:function(){return p.sessionAsGuid},idLength:function(){return p.idLength?p.idLength:22}};function h(e){var t=d.automaticSession,n=e.split("|");n.length>0&&t.setId(n[0]);try{if(n.length>1){var i=+n[1];t.acquisitionDate=+new Date(i),t.acquisitionDate=t.acquisitionDate>0?t.acquisitionDate:0}if(n.length>2){var r=+n[2];t.renewalDate=+new Date(r),t.renewalDate=t.renewalDate>0?t.renewalDate:0}}catch(e){s.throwInternal(c.a.CRITICAL,l.f.ErrorParsingAISessionCookie,"Error parsing ai_session cookie, session will be reset: "+e)}0===t.renewalDate&&s.throwInternal(c.a.WARNING,l.f.SessionRenewalDateIsZero,"AI session renewal date is 0, session will be reset.")}function g(){var e=d.automaticSession,t=(new Date).getTime(),n=d.config.sessionAsGuid();!i.a.isUndefined(n)&&n?i.a.isBoolean(n)?e.setId(Object(r.createGuid)()):e.setId(Object(r.createGuid)(n)):e.setId(i.a.newId(f&&f.idLength?f.idLength():22)),e.acquisitionDate=t,e.renewalDate=t,m(e.getId(),e.acquisitionDate,e.renewalDate),I()||s.throwInternal(c.a.WARNING,l.f.BrowserDoesNotSupportLocalStorage,"Browser does not support local storage. Session durations will be inaccurate.")}function m(e,t,n){var i=t+d.config.sessionExpirationMs(),r=n+d.config.sessionRenewalMs(),a=new Date,s=[e,t,n];i<r?a.setTime(i):a.setTime(r);var c=d.config.cookieDomain?d.config.cookieDomain():null;C(0,u(),s.join("|")+";expires="+a.toUTCString(),c),o=(new Date).getTime()}s=i.a.isNullOrUndefined(n)?new a.a:n,i.a.isFunction(t.sessionExpirationMs)||(f.sessionExpirationMs=function(){return e.acquisitionSpan}),i.a.isFunction(t.sessionRenewalMs)||(f.sessionRenewalMs=function(){return e.renewalSpan}),d.config=f,u=function(){return d.config.namePrefix&&d.config.namePrefix()?e.cookieNameConst+d.config.namePrefix():e.cookieNameConst},d.automaticSession=new ne,d.update=function(){d.automaticSession.getId()||function(){var e=Object(r.getCookie)(u());if(e&&i.a.isFunction(e.split))h(e);else{var t=function(e,t){var n=A();if(null!==n)try{return n.getItem(t)}catch(t){S=!1,e.throwInternal(c.a.CRITICAL,l.f.BrowserCannotReadLocalStorage,"Browser failed read of local storage. "+t)}return null}(s,u());t&&h(t)}d.automaticSession.getId()||g()}();var t=d.automaticSession,n=d.config,a=(new Date).getTime(),p=a-t.acquisitionDate>n.sessionExpirationMs(),f=a-t.renewalDate>n.sessionRenewalMs();p||f?g():(!o||a-o>e.cookieUpdateInterval)&&(t.renewalDate=a,m(t.getId(),t.acquisitionDate,t.renewalDate))},d.backup=function(){var e,t,n,i=d.automaticSession;e=i.getId(),t=i.acquisitionDate,n=i.renewalDate,function(e,t,n){var i=A();if(null!==i)try{i.setItem(t,n)}catch(t){S=!1,e.throwInternal(c.a.CRITICAL,l.f.BrowserCannotWriteLocalStorage,"Browser failed write to local storage. "+t)}}(s,u(),[e,t,n].join("|"))}}))}return e.acquisitionSpan=864e5,e.renewalSpan=18e5,e.cookieUpdateInterval=6e4,e.cookieNameConst="ai_session",e}(),_e=r.isString,Ee=function(){function e(e,t,n){this.app=new _(t),this.cloud=new E,this.user=new O(e,t,n&&n.logger),this.os=new Q(t),this.web=new U(t),this.sdk=new Se(e),this.intWeb=new X(t),this.utc=new Z(t),this.loc=new ee,this.device=new te,this.telemetryTrace=new ie(t),this.sessionManager=new ye(t,n&&n.logger),this.session=new ne}return e.prototype.getSessionId=function(){var e=this.session;if(e&&_e(e.customId))return e.customId;var t=this.sessionManager;t.update();var n=t.automaticSession;if(n){var i=n.getId();i&&_e(i)&&(e.automaticId=i)}return e.automaticId},e.prototype.applyApplicationContext=function(e){var t=this.app;_e(t.id)&&(e.ext[me.AppExt][re.id]=t.id),_e(t.ver)&&(e.ext[me.AppExt][re.ver]=t.ver),_e(t.name)&&(e.ext[me.AppExt][re.appName]=t.name),_e(t.locale)&&(e.ext[me.AppExt][re.locale]=t.locale);var n=t.getExpId();_e(n)&&(e.ext[me.AppExt][re.expId]=n),_e(t.env)&&(e.ext[me.AppExt][re.env]=t.env)},e.prototype.applyUserContext=function(e){var t=this.user,n=t.getLocalId();_e(n)&&(e.ext[me.UserExt][ae.localId]=n),_e(t.locale)&&(e.ext[me.UserExt][ae.locale]=t.locale),_e(t.id)&&(e.ext[me.UserExt][ae.id]=t.id)},e.prototype.applyWebContext=function(e){var t=this.web;_e(t.domain)&&(e.ext[me.WebExt][oe.domain]=t.domain),_e(t.browser)&&(e.ext[me.WebExt][oe.browser]=t.browser),_e(t.browserVer)&&(e.ext[me.WebExt][oe.browserVer]=t.browserVer),_e(t.screenRes)&&(e.ext[me.WebExt][oe.screenRes]=t.screenRes),e.ext[me.WebExt][oe.userConsent]=t.getUserConsent(),e.ext[me.WebExt][oe.consentDetails]=t.getUserConsentDetails()},e.prototype.applyOsContext=function(e){var t=this.os;_e(t.name)&&(e.ext[me.OSExt][se.osName]=t.name),_e(t.ver)&&(e.ext[me.OSExt][se.ver]=t.ver)},e.prototype.applySdkContext=function(e){var t=this.sdk;e.ext[me.SdkExt][ce.seq]=t.getSequenceId(),e.ext[me.SdkExt][ce.epoch]=t.epoch,_e(t.installId)&&(e.ext[me.SdkExt][ce.installId]=t.installId)},e.prototype.applyIntWebContext=function(e){var t=this.intWeb,n=t.getMsfpc();_e(n)&&(e.ext[me.IntWebExt][le.msfpc]=n);var i=t.getAnid();_e(i)&&(e.ext[me.IntWebExt][le.anid]=i),_e(t.serviceName)&&(e.ext[me.IntWebExt][le.serviceName]=t.serviceName)},e.prototype.applyUtcContext=function(e){var t=this.utc;e.ext[me.UtcExt][ue.popSample]=t.popSample,t.eventFlags>0&&(e.ext[me.UtcExt][ue.eventFlags]=t.eventFlags)},e.prototype.applyLocContext=function(e){e.ext[me.LocExt][de.tz]=this.loc.tz},e.prototype.applySessionContext=function(e){e.ext[me.AppExt][pe.sessionId]=this.getSessionId()},e.prototype.applyDeviceContext=function(e){var t=this.device;_e(t.localId)&&(e.ext[me.DeviceExt][fe.localId]=t.localId),_e(t.make)&&(e.ext[me.DeviceExt][fe.make]=t.make),_e(t.model)&&(e.ext[me.DeviceExt][fe.model]=t.model),_e(t.deviceClass)&&(e.ext[me.DeviceExt][fe.deviceClass]=t.deviceClass)},e.prototype.applyCloudContext=function(e){var t=this.cloud;_e(t.role)&&(e.ext[me.CloudExt][he.role]=t.role),_e(t.roleInstance)&&(e.ext[me.CloudExt][he.roleInstance]=t.roleInstance),_e(t.roleVer)&&(e.ext[me.CloudExt][he.roleVer]=t.roleVer)},e.prototype.applyAITraceContext=function(e){var t=this.telemetryTrace;_e(t.traceId)&&(e.ext[me.TraceExt][ge.traceId]=t.traceId),_e(t.name)&&(e.ext[me.TraceExt][ge.traceName]=t.name),_e(t.parentId)&&(e.ext[me.TraceExt][ge.parentId]=t.parentId)},e}(),Te=function(e){function t(){var n,i=e.call(this)||this;i.identifier="SystemPropertiesCollector",i.priority=3,i.version="3.0.1";var o={};return Object(d.a)(t,i,(function(t,a){t.initialize=function(r,o,a){e.prototype.initialize.call(i,r,o,a),n=new Ee(r,t._getTelCtx().getExtCfg(t.identifier),o)},t.processTelemetry=function(e,i){Object(r.setProcessTelemetryTimings)(e,t.identifier),i=t._getTelCtx(i);var a,s,c=e.ext=e.ext?e.ext:{};e.data=e.data?e.data:{},c[me.AppExt]=c[me.AppExt]||{},c[me.UserExt]=c[me.UserExt]||{},c[me.WebExt]=c[me.WebExt]||{},c[me.OSExt]=c[me.OSExt]||{},c[me.SdkExt]=c[me.SdkExt]||{},c[me.IntWebExt]=c[me.IntWebExt]||{},c[me.UtcExt]=c[me.UtcExt]||{},c[me.LocExt]=c[me.LocExt]||{},c[me.DeviceExt]=c[me.DeviceExt]||{},c[me.TraceExt]=c[me.TraceExt]||{},c[me.CloudExt]=c[me.CloudExt]||{},n.applyApplicationContext(e),n.applyUserContext(e),n.applyWebContext(e),n.applyOsContext(e),n.applySdkContext(e),n.applyIntWebContext(e),n.applyUtcContext(e),n.applyLocContext(e),n.applySessionContext(e),n.applyDeviceContext(e),n.applyAITraceContext(e),n.applyCloudContext(e),p.a.arrForEach(p.a.objKeys(c),(function(e){0===p.a.objKeys(c[e]).length&&delete c[e]})),a=o,s=e.data,a&&Object(r.objForEachKey)(a,(function(e,t){s[e]||(s[e]=t)})),t.processNext(e,i)},t.getPropertiesContext=function(){return n},t.setProperty=function(e,t){o[e]=t}})),i}return __extends(t,e),t}(f.a),Ce=n(63),Ie="REAL_TIME",Ae="NEAR_REAL_TIME",be="BEST_EFFORT",Re=function(){function e(t,n){var r=n?[].concat(n):[],o=i.a.isNullOrUndefined;this.iKey=function(){return t},this.count=function(){return r.length},this.events=function(){return r},this.addEvents=function(e,t){return void 0===t&&(t=!0),e&&e.length>0?(r=t?r.concat(e):e.concat(r),e.length):0},this.split=function(n,i){var a=new e(t);if(n<r.length){var s=r.length-n;o(i)||(s=i<s?i:s),a.addEvents(r.splice(n,s),!0)}return a}}return e.create=function(t,n){return new e(t,n)},e}(),Oe=Math.min(2e6,65e3),Pe=/\./,Ne=function e(t,n,o,a){var c=!!a,l=n,u={};Object(d.a)(e,this,(function(e){function n(e,t,i,a,s,d){Object(r.objForEachKey)(e,(function(e,p){var f=null;if(Object(r.isValueAssigned)(p)){var h=i,g=e,m=s,v=t;if(c&&!a&&Pe.test(e)){var S=e.split("."),y=S.length;if(y>1){m&&(m=m.slice());for(var _=0;_<y-1;_++){var E=S[_];v=v[E]=v[E]||{},h+="."+E,m&&m.push(E)}g=S[y-1]}}if(f=a&&function(e,t){var n=u[e];return void 0===n&&(n=!1,(0===e.indexOf("ext.metadata")||0===e.indexOf("ext.web"))&&(n=!0),u[e]=n),n}(h)||!l||!l.handleField(h,g)?Object(r.sanitizeProperty)(g,p,o):l.value(h,g,p,o)){var T=f.value;if(v[g]=T,d&&d(m,g,f),Object(r.isObject)(T)&&!Object(r.isArray)(T)){var C=m;C&&(C=C.slice()).push(g),n(p,T,h+"."+g,a,C,d)}}}}))}e.createPayload=function(e,t,n,i){return{apiKeys:[],payloadBlob:"",overflow:null,sizeExceed:[],batches:[],numEvents:0,retryCnt:e,isTeardown:t,isSync:n,isBeacon:i}},e.appendPayload=function(n,r,o){var a=n&&r&&!n.overflow;return a&&Object(s.b)(t,(function(){return"Serializer:appendPayload"}),(function(){for(var t=r.events(),a=n.payloadBlob,s=n.numEvents,c=!1,l=[],u=n.isBeacon,d=u?65e3:3984588,p=u?Oe:2e6,f=0,h=0;f<t.length;){var g=t[f];if(g){if(s>=o){n.overflow=r.split(f);break}var m=e.getEventBlob(g);if(m.length<=p){var v=m.length;if(a.length+v>d){n.overflow=r.split(f);break}a&&(a+="\n"),a+=m,++h>20&&(a.substr(0,1),h=0),c=!0,s++}else l.concat(t.slice(f,1))}f++}if(l&&l.length>0&&n.sizeExceed.push(Re.create(r.iKey(),l)),c){n.batches.push(r),n.payloadBlob=a,n.numEvents=s;var S=r.iKey();-1===i.a.arrIndexOf(n.apiKeys,S)&&n.apiKeys.push(S)}}),(function(){return{payload:n,theBatch:{iKey:r.iKey(),evts:r.events()},max:o}})),a},e.getEventBlob=function(e){return Object(s.b)(t,(function(){return"Serializer.getEventBlob"}),(function(){var t={name:e.name,time:e.time,ver:e.ver,iKey:"o:"+Object(r.getTenantId)(e.iKey)},i={},o=e.ext;o&&(t.ext=i,Object(r.objForEachKey)(o,(function(e,t){n(t,i[e]={},"ext."+e,!0,null,null)})));var a=t.data={baseType:e.baseType},s=a.baseData={};return n(e.baseData,s,"baseData",!1,["baseData"],(function(e,t,n){Me(i,e,t,n)})),n(e.data,a,"data",!1,[],(function(e,t,n){Me(i,e,t,n)})),JSON.stringify(t)}),(function(){return{item:e}}))}}))};function Me(e,t,n,i){if(i&&e){var o=Object(r.getCommonSchemaMetaData)(i.value,i.kind,i.propertyType);if(o>-1){var a=e.metadata;a||(a=e.metadata={f:{}});var s=a.f;s||(s=a.f={}),Object(r.arrForEach)(t,(function(e){s[e]||(s[e]={f:{}});var t=s[e].f;t||(t=s[e].f={}),s=t})),s=s[n]={},Object(r.isArray)(i.value)?s.a={t:o}:s.t=o}}}
/*!
     * 1DS JS SDK POST plugin, 3.0.1
     * Copyright (c) Microsoft and contributors. All rights reserved.
     * (Microsoft Internal Only)
/*!
     * @overview es6-promise - a tiny implementation of Promises/A+.
     * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
     * @license   Licensed under MIT license
     *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
     * @version   4.0.5
     */


/***/ }),
/* 185 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AzureCommunicationTokenCredential": () => (/* reexport safe */ _communicationTokenCredential__WEBPACK_IMPORTED_MODULE_0__.AzureCommunicationTokenCredential),
/* harmony export */   "createCommunicationAccessKeyCredentialPolicy": () => (/* reexport safe */ _credential__WEBPACK_IMPORTED_MODULE_1__.createCommunicationAccessKeyCredentialPolicy),
/* harmony export */   "createCommunicationAuthPolicy": () => (/* reexport safe */ _credential__WEBPACK_IMPORTED_MODULE_1__.createCommunicationAuthPolicy),
/* harmony export */   "isKeyCredential": () => (/* reexport safe */ _credential__WEBPACK_IMPORTED_MODULE_1__.isKeyCredential),
/* harmony export */   "parseClientArguments": () => (/* reexport safe */ _credential__WEBPACK_IMPORTED_MODULE_1__.parseClientArguments),
/* harmony export */   "parseConnectionString": () => (/* reexport safe */ _credential__WEBPACK_IMPORTED_MODULE_1__.parseConnectionString),
/* harmony export */   "getIdentifierKind": () => (/* reexport safe */ _identifierModels__WEBPACK_IMPORTED_MODULE_2__.getIdentifierKind),
/* harmony export */   "isCommunicationUserIdentifier": () => (/* reexport safe */ _identifierModels__WEBPACK_IMPORTED_MODULE_2__.isCommunicationUserIdentifier),
/* harmony export */   "isMicrosoftTeamsUserIdentifier": () => (/* reexport safe */ _identifierModels__WEBPACK_IMPORTED_MODULE_2__.isMicrosoftTeamsUserIdentifier),
/* harmony export */   "isPhoneNumberIdentifier": () => (/* reexport safe */ _identifierModels__WEBPACK_IMPORTED_MODULE_2__.isPhoneNumberIdentifier),
/* harmony export */   "isUnknownIdentifier": () => (/* reexport safe */ _identifierModels__WEBPACK_IMPORTED_MODULE_2__.isUnknownIdentifier),
/* harmony export */   "deserializeCommunicationIdentifier": () => (/* reexport safe */ _identifierModelSerializer__WEBPACK_IMPORTED_MODULE_3__.deserializeCommunicationIdentifier),
/* harmony export */   "serializeCommunicationIdentifier": () => (/* reexport safe */ _identifierModelSerializer__WEBPACK_IMPORTED_MODULE_3__.serializeCommunicationIdentifier)
/* harmony export */ });
/* harmony import */ var _communicationTokenCredential__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _credential__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(193);
/* harmony import */ var _identifierModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _identifierModelSerializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(195);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.





//# sourceMappingURL=index.js.map

/***/ }),
/* 186 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AzureCommunicationTokenCredential": () => (/* binding */ AzureCommunicationTokenCredential)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71);
/* harmony import */ var _tokenParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(188);
/* harmony import */ var _staticTokenCredential__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _autoRefreshTokenCredential__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(192);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.




/**
 * The CommunicationTokenCredential implementation with support for proactive token refresh.
 */
class AzureCommunicationTokenCredential {
    constructor(tokenOrRefreshOptions) {
        this.disposed = false;
        if (typeof tokenOrRefreshOptions === "string") {
            this.tokenCredential = new _staticTokenCredential__WEBPACK_IMPORTED_MODULE_0__.StaticTokenCredential((0,_tokenParser__WEBPACK_IMPORTED_MODULE_1__.parseToken)(tokenOrRefreshOptions));
        }
        else {
            this.tokenCredential = new _autoRefreshTokenCredential__WEBPACK_IMPORTED_MODULE_2__.AutoRefreshTokenCredential(tokenOrRefreshOptions);
        }
    }
    /**
     * Gets an `AccessToken` for the user. Throws if already disposed.
     * @param abortSignal - An implementation of `AbortSignalLike` to cancel the operation.
     */
    getToken(options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.throwIfDisposed();
            const token = yield this.tokenCredential.getToken(options);
            this.throwIfDisposed();
            return token;
        });
    }
    /**
     * Disposes the CommunicationTokenCredential and cancels any internal auto-refresh operation.
     */
    dispose() {
        this.disposed = true;
        this.tokenCredential.dispose();
    }
    throwIfDisposed() {
        if (this.disposed) {
            throw new Error("User credential is disposed");
        }
    }
}
//# sourceMappingURL=communicationTokenCredential.js.map

/***/ }),
/* 187 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticTokenCredential": () => (/* binding */ StaticTokenCredential)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * StaticTokenCredential
 */
class StaticTokenCredential {
    constructor(token) {
        this.token = token;
    }
    getToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return this.token;
        });
    }
    dispose() {
        /* intentionally empty */
    }
}
//# sourceMappingURL=staticTokenCredential.js.map

/***/ }),
/* 188 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseToken": () => (/* binding */ parseToken)
/* harmony export */ });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const parseToken = (token) => {
    const { exp } = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);
    return {
        token,
        expiresOnTimestamp: exp * 1000
    };
};
//# sourceMappingURL=tokenParser.js.map

/***/ }),
/* 189 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var base64_url_decode = __webpack_require__(190);

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;


/***/ }),
/* 190 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var atob = __webpack_require__(191);

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};


/***/ }),
/* 191 */
/***/ ((module) => {

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ }),
/* 192 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoRefreshTokenCredential": () => (/* binding */ AutoRefreshTokenCredential)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony import */ var _tokenParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(188);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


const expiredToken = { token: "", expiresOnTimestamp: -10 };
const minutesToMs = (minutes) => minutes * 1000 * 60;
const defaultRefreshingInterval = minutesToMs(10);
class AutoRefreshTokenCredential {
    constructor(refreshArgs) {
        this.refreshingIntervalInMs = defaultRefreshingInterval;
        this.activeTokenFetching = null;
        this.activeTokenUpdating = null;
        this.disposed = false;
        const { tokenRefresher, token, refreshProactively } = refreshArgs;
        this.refresh = tokenRefresher;
        this.currentToken = token ? (0,_tokenParser__WEBPACK_IMPORTED_MODULE_0__.parseToken)(token) : expiredToken;
        this.refreshProactively = refreshProactively !== null && refreshProactively !== void 0 ? refreshProactively : false;
        if (this.refreshProactively) {
            this.scheduleRefresh();
        }
    }
    getToken(options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.isCurrentTokenExpiringSoon) {
                return this.currentToken;
            }
            const updatePromise = this.updateTokenAndReschedule(options === null || options === void 0 ? void 0 : options.abortSignal);
            if (!this.isCurrentTokenValid) {
                yield updatePromise;
            }
            return this.currentToken;
        });
    }
    dispose() {
        this.disposed = true;
        this.activeTokenFetching = null;
        this.activeTokenUpdating = null;
        this.currentToken = expiredToken;
        if (this.activeTimeout) {
            clearTimeout(this.activeTimeout);
        }
    }
    updateTokenAndReschedule(abortSignal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (this.activeTokenUpdating) {
                return this.activeTokenUpdating;
            }
            this.activeTokenUpdating = this.refreshTokenAndReschedule(abortSignal);
            try {
                yield this.activeTokenUpdating;
            }
            finally {
                this.activeTokenUpdating = null;
            }
        });
    }
    refreshTokenAndReschedule(abortSignal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.currentToken = yield this.refreshToken(abortSignal);
            if (this.refreshProactively) {
                this.scheduleRefresh();
            }
        });
    }
    refreshToken(abortSignal) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (!this.activeTokenFetching) {
                    this.activeTokenFetching = this.refresh(abortSignal);
                }
                return (0,_tokenParser__WEBPACK_IMPORTED_MODULE_0__.parseToken)(yield this.activeTokenFetching);
            }
            finally {
                this.activeTokenFetching = null;
            }
        });
    }
    scheduleRefresh() {
        if (this.disposed) {
            return;
        }
        if (this.activeTimeout) {
            clearTimeout(this.activeTimeout);
        }
        const timespanInMs = this.currentToken.expiresOnTimestamp - Date.now() - this.refreshingIntervalInMs;
        this.activeTimeout = setTimeout(() => this.updateTokenAndReschedule(), timespanInMs);
    }
    get isCurrentTokenValid() {
        return this.currentToken && Date.now() < this.currentToken.expiresOnTimestamp;
    }
    get isCurrentTokenExpiringSoon() {
        return (!this.currentToken ||
            Date.now() >= this.currentToken.expiresOnTimestamp - this.refreshingIntervalInMs);
    }
}
//# sourceMappingURL=autoRefreshTokenCredential.js.map

/***/ }),
/* 193 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCommunicationAccessKeyCredentialPolicy": () => (/* reexport safe */ _communicationAccessKeyCredentialPolicy__WEBPACK_IMPORTED_MODULE_0__.createCommunicationAccessKeyCredentialPolicy),
/* harmony export */   "createCommunicationAuthPolicy": () => (/* reexport safe */ _communicationAuthPolicy__WEBPACK_IMPORTED_MODULE_1__.createCommunicationAuthPolicy),
/* harmony export */   "isKeyCredential": () => (/* reexport safe */ _clientArguments__WEBPACK_IMPORTED_MODULE_2__.isKeyCredential),
/* harmony export */   "parseClientArguments": () => (/* reexport safe */ _clientArguments__WEBPACK_IMPORTED_MODULE_2__.parseClientArguments),
/* harmony export */   "parseConnectionString": () => (/* reexport safe */ _connectionString__WEBPACK_IMPORTED_MODULE_3__.parseConnectionString)
/* harmony export */ });
/* harmony import */ var _communicationAccessKeyCredentialPolicy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _communicationAuthPolicy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var _clientArguments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var _connectionString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.




//# sourceMappingURL=index.js.map

/***/ }),
/* 194 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCommunicationUserIdentifier": () => (/* binding */ isCommunicationUserIdentifier),
/* harmony export */   "isPhoneNumberIdentifier": () => (/* binding */ isPhoneNumberIdentifier),
/* harmony export */   "isMicrosoftTeamsUserIdentifier": () => (/* binding */ isMicrosoftTeamsUserIdentifier),
/* harmony export */   "isUnknownIdentifier": () => (/* binding */ isUnknownIdentifier),
/* harmony export */   "getIdentifierKind": () => (/* binding */ getIdentifierKind)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * Tests an Identifier to determine whether it implements CommunicationUserIdentifier.
 *
 * @param identifier - The assumed CommunicationUserIdentifier to be tested.
 */
const isCommunicationUserIdentifier = (identifier) => {
    return typeof identifier.communicationUserId === "string";
};
/**
 * Tests an Identifier to determine whether it implements PhoneNumberIdentifier.
 *
 * @param identifier - The assumed PhoneNumberIdentifier to be tested.
 */
const isPhoneNumberIdentifier = (identifier) => {
    return typeof identifier.phoneNumber === "string";
};
/**
 * Tests an Identifier to determine whether it implements MicrosoftTeamsUserIdentifier.
 *
 * @param identifier - The assumed available to be tested.
 */
const isMicrosoftTeamsUserIdentifier = (identifier) => {
    return typeof identifier.microsoftTeamsUserId === "string";
};
/**
 * Tests an Identifier to determine whether it implements UnknownIdentifier.
 *
 * @param identifier - The assumed UnknownIdentifier to be tested.
 */
const isUnknownIdentifier = (identifier) => {
    return typeof identifier.id === "string";
};
/**
 * Returns the CommunicationIdentifierKind for a given CommunicationIdentifier. Returns undefined if the kind couldn't be inferred.
 *
 * @param identifier - The identifier whose kind is to be inferred.
 */
const getIdentifierKind = (identifier) => {
    if (isCommunicationUserIdentifier(identifier)) {
        return Object.assign(Object.assign({}, identifier), { kind: "communicationUser" });
    }
    if (isPhoneNumberIdentifier(identifier)) {
        return Object.assign(Object.assign({}, identifier), { kind: "phoneNumber" });
    }
    if (isMicrosoftTeamsUserIdentifier(identifier)) {
        return Object.assign(Object.assign({}, identifier), { kind: "microsoftTeamsUser" });
    }
    return Object.assign(Object.assign({}, identifier), { kind: "unknown" });
};
//# sourceMappingURL=identifierModels.js.map

/***/ }),
/* 195 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeCommunicationIdentifier": () => (/* binding */ serializeCommunicationIdentifier),
/* harmony export */   "deserializeCommunicationIdentifier": () => (/* binding */ deserializeCommunicationIdentifier)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _identifierModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(194);
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


const addRawIdIfExisting = (identifier, rawId) => {
    return rawId === undefined ? identifier : Object.assign(Object.assign({}, identifier), { rawId: rawId });
};
const assertNotNullOrUndefined = (obj, prop) => {
    const subObjName = Object.keys(obj)[0];
    const subObj = obj[subObjName];
    if (prop in subObj) {
        return subObj[prop];
    }
    throw new Error(`Property ${prop} is required for identifier of type ${subObjName}.`);
};
const assertMaximumOneNestedModel = (identifier) => {
    const { rawId: _rawId } = identifier, props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(identifier, ["rawId"]);
    const keys = Object.keys(props);
    if (keys.length > 1) {
        throw new Error(`Only one of the properties in ${JSON.stringify(keys)} should be present.`);
    }
};
/**
 * @hidden
 * Translates a CommunicationIdentifier to its serialized format for sending a request.
 * @param identifier - The CommunicationIdentifier to be serialized.
 */
const serializeCommunicationIdentifier = (identifier) => {
    var _a, _b;
    const identifierKind = (0,_identifierModels__WEBPACK_IMPORTED_MODULE_1__.getIdentifierKind)(identifier);
    switch (identifierKind.kind) {
        case "communicationUser":
            return { communicationUser: { id: identifierKind.communicationUserId } };
        case "phoneNumber":
            return addRawIdIfExisting({ phoneNumber: { value: identifierKind.phoneNumber } }, identifierKind.rawId);
        case "microsoftTeamsUser":
            return addRawIdIfExisting({
                microsoftTeamsUser: {
                    userId: identifierKind.microsoftTeamsUserId,
                    isAnonymous: (_a = identifierKind.isAnonymous) !== null && _a !== void 0 ? _a : false,
                    cloud: (_b = identifierKind.cloud) !== null && _b !== void 0 ? _b : "public"
                }
            }, identifierKind.rawId);
        case "unknown":
            return { rawId: identifierKind.id };
        default:
            throw new Error(`Can't serialize an identifier with kind ${identifierKind.kind}`);
    }
};
/**
 * @hidden
 * Translates the serialized format of a communication identifier to CommunicationIdentifier.
 * @param serializedIdentifier - The SerializedCommunicationIdentifier to be deserialized.
 */
const deserializeCommunicationIdentifier = (serializedIdentifier) => {
    assertMaximumOneNestedModel(serializedIdentifier);
    const { communicationUser, microsoftTeamsUser, phoneNumber } = serializedIdentifier;
    if (communicationUser) {
        return {
            kind: "communicationUser",
            communicationUserId: assertNotNullOrUndefined({ communicationUser }, "id")
        };
    }
    if (phoneNumber) {
        return {
            kind: "phoneNumber",
            phoneNumber: assertNotNullOrUndefined({ phoneNumber }, "value"),
            rawId: assertNotNullOrUndefined({ phoneNumber: serializedIdentifier }, "rawId")
        };
    }
    if (microsoftTeamsUser) {
        return {
            kind: "microsoftTeamsUser",
            microsoftTeamsUserId: assertNotNullOrUndefined({ microsoftTeamsUser }, "userId"),
            isAnonymous: assertNotNullOrUndefined({ microsoftTeamsUser }, "isAnonymous"),
            cloud: assertNotNullOrUndefined({ microsoftTeamsUser }, "cloud"),
            rawId: assertNotNullOrUndefined({ microsoftTeamsUser: serializedIdentifier }, "rawId")
        };
    }
    return {
        kind: "unknown",
        id: assertNotNullOrUndefined({ unknown: serializedIdentifier }, "rawId")
    };
};
//# sourceMappingURL=identifierModelSerializer.js.map

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const { CommunicationIdentityClient } = __webpack_require__(1);
const { CallClient, CallAgent, Renderer, LocalVideoStream} = __webpack_require__(184);
const { AzureCommunicationTokenCredential }  = __webpack_require__(185);

 const url = "https://pade.chat:5443/acs/api/openlink/config";	
  
async function main() {
  console.log("openlink-v2.js");
  const creds = await navigator.credentials.get({password: true});
  const token;
  
  if (creds)
  {
	token = await getToken(creds);	  
	console.log("Issued token from stored creds:", token);	  
  }
  else {
	const id = prompt("Username");	
	
	if (id)
	{
		const assertion = await startAuthn(id);
		const password = await finishAuthn(id, assertion);
		
		if (!password) password = prompt("Password");
		
		if (password)
		{
			creds = {password: {id, password}};
			token = await getToken(creds);	
			console.log("Issued token from new creds:", token);	

			if (token)
			{
				const credentials = await navigator.credentials.create(creds);
				await navigator.credentials.store(credentials);
				
				const cred = await startRegister(creds);
				const resp = await finishRegister(creds, cred);	
				console.log("web authn registration response", resp);	
			}
		}
	}
}
async function webAuthn(id)
{
	console.debug("webAuthn step 1", id);
	const response = await fetch(url + "/authenticate/start/" + id);
	const options =  await response.json();
		
	options.publicKeyCredentialRequestOptions.allowCredentials.forEach(function (listItem) 
	{
		listItem.id = bufferDecode(listItem.id)
	});

	options.publicKeyCredentialRequestOptions.challenge = bufferDecode(options.publicKeyCredentialRequestOptions.challenge);						
	const assertion = await navigator.credentials.get({publicKey: options.publicKeyCredentialRequestOptions});	
	console.debug("webAuthn step 2", assertion, assertion.id, assertion.type);	
	
	const credential = {};
	credential.id =     assertion.id;
	credential.type =   assertion.type;
	credential.rawId =  bufferEncode(assertion.rawId);

	if (assertion.response) {
		const clientDataJSON = bufferEncode(assertion.response.clientDataJSON);
		const authenticatorData = bufferEncode(assertion.response.authenticatorData);
		const signature = bufferEncode(assertion.response.signature);
		const userHandle = bufferEncode(assertion.response.userHandle);
		credential.response = {clientDataJSON, authenticatorData,	signature, userHandle};
		if (!credential.clientExtensionResults) credential.clientExtensionResults = {};						  
	}
	console.debug("webAuthn step 3", credential);
	const response = await fetch(url + "/authenticate/finish/" + id, {method: "POST", body: JSON.stringify(credential)});
	console.debug("webAuthn step 4", response);
	return credential.id;
}


async function webRegister(creds)
{
	console.debug("webRegister step 1", creds);
	const authorization = "Basic " + btoa(creds.id + ":" + creds.password);
	const response = await fetch(url + "/register/start", {method: "POST", headers: {authorization}});	
	const credentialCreationOptions =  await response.json();
		
	if (credentialCreationOptions.excludeCredentials) 
	{
		credentialCreationOptions.excludeCredentials.forEach(function (listItem) 
		{
			listItem.id = bufferDecode(listItem.id)
		});
	}
	
	credentialCreationOptions.challenge = bufferDecode(credentialCreationOptions.challenge);
	credentialCreationOptions.user.id = bufferDecode(credentialCreationOptions.user.id);
	const cred = await navigator.credentials.create({publicKey: credentialCreationOptions});	
	console.debug("webRegister step 2", creds, cred);
	
	const credential = {};
	credential.id =     cred.id;
	credential.rawId =  bufferEncode(cred.rawId);
	credential.type =   cred.type;

	if (cred.response) {
	  const clientDataJSON = bufferEncode(cred.response.clientDataJSON);
	  const attestationObject = bufferEncode(cred.response.attestationObject);
	  credential.response = {clientDataJSON, attestationObject};
	  if (!credential.clientExtensionResults) credential.clientExtensionResults = {};
	}

	const authorization = "Basic " + btoa(creds.id + ":" + creds.password);
	console.debug("webRegister step 3", credential);		
	const response = await fetch(url + "/register/finish", {method: "POST", headers: {authorization}, body: JSON.stringify(credential)});	
	console.debug("webRegister step 4", response);	
	return response;
}

async function getToken(creds)
{
  const authorization = "Basic " + btoa(creds.id + ":" + creds.password);
  const response = await fetch(url, {method: "GET", headers: {authorization}});
  const config = await response.json();
  
  if (config.acs_endpoint)
  {
	const client = new CommunicationIdentityClient(config.acs_endpoint);
	const scopes = ["voip"];

	if (!config.acs_user_endpoint)
	{
		const user = await client.createUser();	
		console.log("Created user endpoint", user);		
		config.acs_user_endpoint = user.communicationUserId;	
		const options = {method: "POST", headers: {authorization}, body: config.acs_user_endpoint };			
		const response = await fetch(url + "/acs_user_endpoint", options);
	}

	return client.getToken({communicationUserId: config.acs_user_endpoint}, scopes);
  }	
}

main().catch((error) => {
  console.error("Encountered an error while issuing token: ");
  console.error("Request: \n", error.request);
  console.error("\nResponse: \n", error.response);
  console.error(error);
});

function bufferDecode(e) 
{
	const t = "==".slice(0, (4 - e.length % 4) % 4),
		n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
		r = atob(n),
		o = new ArrayBuffer(r.length),
		c = new Uint8Array(o);
	for (let e = 0; e < r.length; e++) c[e] = r.charCodeAt(e);
	return o
}

function bufferEncode(e) 
{
	const t = new Uint8Array(e);
	let n = "";
	for (const e of t) n += String.fromCharCode(e);
	return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
})();

/******/ })()
;