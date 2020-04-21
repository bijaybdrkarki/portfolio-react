import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/home/home";
import About from "./components/about/about"
import Codestation from "./components/codestation/codestation"
import Connect from "./components/connect/connect"
import Resume from "./components/resume/resume"
import Projects from "./components/projects/projects"

const App = ()=> {
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/codestation" component={Codestation} />
        <Route path="/about" component={About} />
        <Route path="/connect" component={Connect} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} /> 
      </Switch>
    </Router>
  )
  
}

export default App;


// useEffect(()=>{
//   replyServer();
  
// },[]);
// const [response, setresponse] = useState("");
// const [fromserver, setFromserver] = useState("");
// const [post, setpost]= useState("");
// //get request to the server
// const replyServer = async ()=> { 
//   const data =  await fetch('/api/hello')
//   const reply = await data.json();
//   setresponse(reply.express);   
// }
// //send post request to server
// const handleSubmit = async e => {
//   e.preventDefault();
//   const request = {
//     method: 'POST',
//     headers: {'Content-Type':'application/json'},
//     body: JSON.stringify({'p':post})
//   };
//   await fetch('/api/world', request)
//   .then(res => res.text())
//     .then(text => setFromserver(text))
//   .catch(err => console.log(`err occured ${err}`))  
// }
// return (
//   <div className="App">
//     <p>the response from server test: {response}</p>
//     <form onSubmit={handleSubmit}>
//         <p>
//           <strong>Post to Server:</strong>
//         </p>
//         <input
//           type="text"
//           value={post}
//           onChange={e => setpost(e.target.value)}
//         />
//         <button type="submit" >Submit</button>
//       </form>
//       <p>{fromserver}</p>
//   </div>
// );