
# className
Managing html class names in React
## install
  npm i classname
 
## bind
  in component class
```js

  import classNames from 'classNames/bind'
  ...
  const cx = className.bind(styles)
  const {loading} = this.state
  
```
  in render 
```html
  return <button className={cx("button,{loading})} />
```
