const domContainer = document.querySelector("#root");
const Increment = () => {
  const [counter,setcounter]=React.useState(0);
  return(
    <div id="abc">
        <h1 id="">{counter}</h1>
        <div>
            <button id="btn" onClick={()=>{setcounter(counter-1)}}>Decrement-</button>
            <button id="btn" onClick={()=>{setcounter(counter+1)}}>Increment+</button>
        </div>
    </div>
  )
};

ReactDOM.render(
    <div>
        <Increment />
         <Increment />
    </div>
    ,domContainer);