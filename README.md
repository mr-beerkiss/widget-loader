# Widget Loader

A very basic example that shows a widget with corresponding JS/CSS files could be loaded through a central loader.js 
file.  The idea is that the JS/CSS files could be fingerprinted to allow very long cache times, and the loader.js file
would be on a very short cache time.  Since the loader is tiny, and if used with etags it would allow for efficient 
caching.

Furthermore, since the loader.js file is responsible for loading the widget depedencies, the application that uses
loader.js doesn't need to know anything about the nature or structure of the files are that needed to enable
the widget to work.  This enables further cache optimisations by splitting out bundles into parts that change often
and parts change less often (eg application and vendor bundles).

Loader.js uses a CustomEvent to indicate to the application that the widget is fully loaded and ready to go.  This
example is very trivial and more smarts would be required to ensure the widget is actually ready but this serves as a
start.  Additionally, CustomEvents allow you to pass an object in the `detail` field of the event.  In this example
I've used a closure to lock down the functionality the widget and only expose the API that I would like `main.js` to 
see/use.  

For example, the `el` variable defined on line 3 of JS v2 and higher cannot be accessed via the global scope because
it is enclosed.

