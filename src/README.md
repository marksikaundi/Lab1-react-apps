#### 5. Now let’s start adding a component to the page. When the server is running, any change made to the files is automatically picked up by the server.
The code in App.js will show as given below.
```
function App() {
  return (
    <div >
      Hello World!
    </div>
  );
}

export default App;
```


#### 6. It is a function component. Let’s make changes to the code to accept the color as props.

Replace the content of App.js with the following code.

```
function App(props) {
  const colorStyle = {
    color:props.color,
    fontSize:props.size+"px"
  }
  return (
    <div>
      <div style={colorStyle}>
      Hello World!
      </div>
    </div>
  );
}

export default App;
```
We have made changes to App.js to make it a component which will take some style setting as props. We now have to set the properties.

#### 7. To set the props of the App component, we will make changes in index.js. Replace the content of index.js with the code given below.

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App color="green" size="20"/>
  </React.StrictMode>,
  document.getElementById('root')
);
```
As can be seen in the code we are passing the color and size.

#### 8. Now when you refresh the broswer rendering, it will be rerendered with the style.

Practice Exercise
Add other styling to the components.

#### 9. Now let’s change the same to a class component instead of a function component. Replace the App.js code with the following code.
```
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const colorStyle = {
    color:this.props.color,
    fontSize:this.props.size+"px"
    }
    return (
      <div>
        <div style={colorStyle}>
        Hello World!
        </div>
      </div>
    );
  }
}

export default App;
```

10. Refresh the page that was rendered earlier to see how different it is. You will observe that nothing has changed. All that we have done is replaced the function component with class component. So the props can be passed to both function and class components.

11. Let’s set the props from outside and maintain the state of the component inside. The state we will maintain is the number of times the button was clicked. Replace the code in App.js with the following code and save it. Refresh the page that is rendered.
```
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { counter:0 }

  incrementCounter = ()=> {
    this.setState({counter:this.state.counter+1});
  }

  render() {
    const colorStyle = { color:this.props.color,fontSize:this.props.size+"px"}
    return (
      <div style={colorStyle}>
        React Component
        <br /><br />
        <button onClick={this.incrementCounter}>Click Me!</button>
        <br /><br />
        {this.state.counter}
      </div>
    );
  }
}

export default App;
```

You will see that the counter state is being refreshed everytime the button is clicked.

12. To stop the server, go to the main command window and press Ctrl+c to stop the server.

#### Lab week 1