# :sparkles: Easy Reveal

## How to use

You need to include jQuery and the Easy Reveal script at the end of your body tag.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js/jquery.easy-reveal.min.js"></script>
```
You need to add the link to the Easy Reveal stylesheet in your head tag.

```html
  <link rel="stylesheet" href="css/easy-reveal.min.css">
```

Add the data attribute easy-reveal to the element you want to animate with the value of the wanted animation.

```html
  <h1 data-easy-reveal="fade-in-up">Yeah! i'm Animated on scroll</h1>
```

**And *Voila*!**<br>
You can check the [demo page here](https://istuffs.github.io/easy-reveal/)


### Animations

Here is the list of available animations

| animations       | description                                           |
| ---------------- | ----------------------------------------------------- |
| fade-in-up       | default value, the element fade in and slides up 10px |
| fade-in-down     | the element fade in and slides down 10px              |
| fade-in-left     | the element fade in and slides left 10px              |
| fade-in-right    | the element fade in and slides right 10px             |
| fade-in-rotate-x | the element fade in and rotates on x axis             |
| fade-in-rotate-y | the element fade in and rotates on y axis             |


### Customisation

You can edit the **offset percentage** of the page that will fire the animation.
To do so go to the `jquery.easy-reveal.js` file and edit the variable (*it has to be an integer*).
The default value is 30%

```js
/* PARAMETERS */
  var offset   = 50; //int in %
```
