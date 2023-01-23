Chapter 08 Let’s Get Classy

\1) How do we create Nested routes react-router-dom Configuration?

`             `We just need to create a children for that router path like

`   `{

`        `path: "/about",

`        `element: <Aboutus />,

`        `children: [

`          `{

`            `path: "profile",

`            `element: <Profile />,

`          `},

`        `],

`      `},

\2) What is the order life cycle methods call in class based component?

`                `First of all the render phase i.e. constructor will call, after that render method will call and then our commit phase will call i.e. like componentDidMount.

`                                                          `![A Deep Dive into React Lifecycle Methods | by Viduni Wickramarachchi |  Enlear Academy](Aspose.Words.4ac2fe58-7b8a-45eb-b5f8-0ccb95eb9ac8.001.png)           

\3) Why we do use componentDidMount?

`                     `ComponentDidMount will run after the component render. This is where you run statement that requires that the component is already placed in DOM.

\4) Why we do use componentWillUnmount? Show Some Example.

`                     `ComponentWillUnmount method allows us to execute the react code when the component gets destroyed and unmounted form the dom. All the cleanups such as invalidating timers, canceling the network request.

this.timer = setInterval(() => {

`      `console.log("Count");

`    `}, 1000);

Now here if we don’t use the componentWillUnmount then this setInterval will run after every       second whether we are on the same page or in another page like home, contact. So our app performance will be affected, so for avoiding this we will use componentWillUnmount.

componentWillUnmount() {

`    `clearInterval(this.timer);

`  `}

\5) Why we do use super(props) in constructor?

`             `Super() will call or refer the constructor of the parents class. It’s allows us to use some variables from the parent class.

\6)  Why can’t we have a callback function of useEffect async?

`             `Because React’s useEffect hook expects a cleanup function retuned from it which is called when the component unmount.         
