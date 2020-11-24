# jquery.this.object.js
Returns jquery objects as this instead of dom elements


```javascript
// Rather than declare a jquery object for a "on" callback for "this", it does it automatically
// For example:

$("div").on("click", function(e)
{
  let _this = $(this);
  
  _this.html("foo").css("background-color", "red");
});

// Gets converted to this


$("div").on("click", function(e)
{
  // this is now a jquery object bound to the element, rather than the dom element
  this.html("foo").css("background-color", "red");
});

```
