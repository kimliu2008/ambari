/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var App = require('app');

App.MainViewsView = Em.View.extend({

  tagName: "iframe",

  classNames: ["views_sizes"],

  attributeBindings: ['src','seamless'],

  seamless: "seamless",

  src: function() {
    return window.location.origin + this.get('views')[1].link;
  }.property("views"),

  views: [{
      name: "filebrowser",
      link: "/views/FILE_BROWSER/FILEBROWSER_1/#/?path=/"
    },
    {
      name: "pig",
      link: "/views/PIG/PIG_1/"
  }]

});