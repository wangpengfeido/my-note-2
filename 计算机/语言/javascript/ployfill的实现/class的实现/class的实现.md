# class 的实现

```javascript
function f() {}
f.prototype.constructor === f; // true
f.prototype.constructor.prototype === f.prototype; // true
```
