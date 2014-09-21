JavaScript Stylesheet
======================

Write styles in JavaScript for simpler component distribution.

Why JSS?
--------

When you build generic components you want to ship with some default
styles. Asking people to include some CSS file into their build or
prescribe some sort of loader can be cumbersome.

What if all they had to do was call a function to get your styles? No
loader/bundler prescriptions (like browserify or webpack) or SASS or
anything. Just a function.

This might be a terrible idea. If you already have done this and know
its terrible, please open an issue titled "Delete this repository".

Usage
-----

```js
jss({
  '.any-selector': {
    'font-size': '20px',
    color: 'blue'
  }
});
```

It's just JavaScript™, so you can use variables, etc. Check out the
example.

If you're shipping a component, you might attach a function to it that
your consumers call that will inject the CSS, and then they call it
before initializing their application.

```js
var MyAmazingWidget = Embularactymerbone.createComponent({
  // something amazing
});

MyAmazingWidget.injectCSS = function() {
  jss({
    // you know what to do
  });
};
```

Implementation
--------------

JSS takes your style declarations, parses them into CSS, and then
injects it into a shared `<style/>` tag at the top of `<head/>`. This
way consumers of your component can override your styles just like they
do native stuff.

Limitations
-----------

- You'll probably get some FOUC if you do this with server side
  rendering in React.

- Injecting large numbers of styles could have bad performance, this is
  not intended for use with your application styles, just components
  that need a dozen lines or so to look half decent.

