import React from 'react';
import './App.css';


function App() {
  
  return (
    <div>
      <p>hello world</p>
    </div>
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