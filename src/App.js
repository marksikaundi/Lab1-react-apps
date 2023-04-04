// function App() {
//   return <div>Hello World!</div>;
// }

// export default App;
//It is a function component. Let’s make changes to the code to accept the color as props.

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