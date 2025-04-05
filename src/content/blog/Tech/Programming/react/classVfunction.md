---
title:  'React Components: Class vs Function'
description: 'This is a comparison of using React component classes vs Function components'
category: "REACT"
---


If you started using React a while ago then you probably learned how to make components using classes. The new trend seems to be to use functions. 

Which is better and which is right?

You can use either but with the introduction of hooks functions have taken a hold.

## Component Classes

```javascript
import React, {Component} from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { data: props.data };
    }
    render() {
        return (
            <div>
                {this.state.data}
            </div>
        );
    }
}
```
This is an example of a component class called MyComponent. It shows the skeleton of how the component class works. While there are other functions such as `componentDidMount` and `componentDidUpdate`, we are looking at the basics here.

If you are familiar with programming then you probably already know that this does something that a function can't. This class has a **constructor**. A **constructor** is a function that executes when the class is created. In the case of this component it is used to take in the **props** and set the state accordingly.

The benefit of having a constructor is that it allows us to pass in properties when our component is made. It can also be used to initialize anything else the component might need. 

The `render` function is a special function that we define. It returns *JSX* to define the *DOM* of the component. 

Overall, the class component is simple and easy to throw together. The complication is when you have a complex app that has many components that need to share state information. This is when we run into the dreaded `prop drilling`.

## Prop Drilling

Let's say we have a component inside a component inside a component. That gives us a parent child situation that has depth. If we want to have access to the parent's information in the innermost child component then how do we access it? Well first we need to pass the values as props from parent to child. Then we do it again. This looks a little something like this:

```js
import React, { Component } from 'react';

class Parent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        <div>
            <childCompA data = this.props.data />
        </div>
    };
}

function childCompA(props) {
    return(
        <div>
            <childCompB data = props.data />
        </div>
    );
}

function childCompB(props) {
    return(
        <div>
            <childCompB data = props.data />
        </div>
    );
}

```
For simplicity I used functions for the child components. 

While the data in `childCompB` is successfully passed down from the parent, it is inconvenient to have to pass the value through each component. This requires us to design each component with that data in mind. This also means we have several points of possible failure. Forget to refactor a part of one component and all of a sudden your app is broken. 

So what's the solution?

---


## Component Functions

---

As is life, trends tend to take a hold of how we live. The modern trend, at least as of writing this, is to use function components instead of Class components. Why is that? Well, it is simpler for one. With the introduction of hooks, more on that later, we can write the same component with less code and less complexity. As we know KISS, Keep It Simple Stupid or Keep It Stupid Simple, is the best way to design most things. The lack of complexity makes it easy to follow and the shorter code means getting right to the point.

With function components we simply write our JSX we want rendered in the return value of the component. Once returned, assuming the JSX is valid, we can have our component rendered the same as if we had a render() function in a class. Since this is JavaScript we can add functions to our function if necessary and we can pass in props . We can then use the useState() hook to set and get state data. Let's take a look. 

```javascript

function Viewer() {
  const [blogContent, setBlogContent] = useState('')

  return (
    <div>
      <div id="side-panel">
        <ul>
          {
            blogList.map( blog => {
              return (<li> <button type='button' id={blog + '-btn'} >{blog}</button></li>)
            })
            
          }
        </ul>
      </div>
      <div id="blog-content">
      </div>
    </div>
  )
}
```
