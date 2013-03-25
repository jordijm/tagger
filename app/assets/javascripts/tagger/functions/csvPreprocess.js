/*
 * Copyright 2012-2013 inBloom, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Helper function for preprocessing the nested CSV strings used in places like the education tab
//  to correctly capitalize things, then trim spaces
function csvPreprocess(str) {
    console.log('before: '+str);

    foo = (str + '').replace(/^([a-z])|\s+([a-z])|,+([a-z])/g, function($1) {
        return $1.toUpperCase();
    }).replace(/^\s+/,'').replace(/\s+$/,'').replace(/\s+,/g,',').replace(/,\s+/g,',');

    console.log('after: '+foo);
    return foo
}