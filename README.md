# Easy Reveal

## How to use

You need to include jQuery and the Easy Reveal script at the end of your body tag.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js/jquery.easy-reveal.js"></script>
```
You need to add the link to the Easy Reveal stylesheet in your head tag.

```html
  <link rel="stylesheet" href="css/easy-reveal.css">
```

Add the data attribute easy-reveal to the element you want to animate with the value of the wanted animation.

```html
  <h1 data-easy-reveal="fade-in-up">Yeah! i'm Animated on scroll</h1>
```


**And *Voila*!**

### Animations

Here is the list of aviable animations

| animations       | description                                           |
| ---------------- | ----------------------------------------------------- |
| fade-in-up       | default value, the element fade in and slides up 10px |
| fade-in-down     | the element fade in and slides down 10px              |
| fade-in-left     | the element fade in and slides left 10px              |
| fade-in-right    | the element fade in and slides right 10px             |
| fade-in-rotate-x | the element fade in and rotates on x axis             |
| fade-in-rotate-y | the element fade in and rotates on y axis             |
