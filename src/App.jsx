import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Msg
        name="Adhini"
        pic="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      />
      <Msg
        name="Paari"
        pic="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      />
      <Msg
        name="Vaishu"
        pic="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
    </div>
  );
}
// // //using destructuring
function Msg({ pic, name }) {
  return (
    <div>
      <img className="pic" src={pic} alt={name} />
      <h1>
        Hello all, This is <span className="username">{name}</span>😍😎
      </h1>
    </div>
  );
}
// ------------------------------------------------------
// // //using props(properties(arguments called as props in react))
// function Msg(props) {
//   // console.log(props);
//   // let names = props.name;
//   return (
//     <div>
//       <img className="pic" src={props.pic} alt={props.name} />
//       <h1>
//         Hello all, This is <span className="username">{props.name}</span>😍😎
//       </h1>
//     </div>
//   );
// }
