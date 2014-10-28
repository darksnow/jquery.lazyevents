jquery.lazyevents
=================
Certain JavaScript events fire a lot. Specifically the `move` and `resize` events. So much so that they can overwhelm a slower browser, especially if the event is used to run a lot of code. This has led many people to create little snippets of code to only do the complex operations every so often rather than every time the event fires.

This plugin fires a **lazy** version of those events every so often rather than every event, considerably reducing the load on slower browsers, most notably mobile.

Usage
-----
To include this in a project simply add the plugin in a script tag after you include jQuery, just like any other jQuery plugin.

To use with jQuery simply bind to the **lazy** event rather than the real event. The lazy events use the same name as the real events with lazy prepended, so rather than

        $().on('resize', function(e){});

you would use

        $().on('lazyresize', function(e){});

Simple as that.

Configuration
-------------
To set any of the configuration options (see below) include a `<script>` tag before including the plugin. Any config settings included in the JavaScript `LazyEventConfig` object will override the defaults.

Option|Default|Purpose
---|---|---
**`timeout`**|`250`|How often the lazy events can fire in milliseconds
**`realEvents`**|`['scroll', 'resize']`|JavaScript array containing the names of the real events to track
**`prefix`**|`'lazy'`|The string that gets prepended to the real event names to distinguish the lazy versions

        var LazyEventConfig = {
          timeout: 250,
          realEvents: ['scroll', 'resize', 'mousemove'],
          prefix: 'lazy'
        };


