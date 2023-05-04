// const people = [
//   {
//     id: 1,
//     poster: "https://picsum.photos/id/59/200/300",
//     title: "My Frist",
//   },
//   {
//     id: 2,
//     poster: "https://picsum.photos/id/60/200/300",
//     title: "My Frist",
//   },
//   {
//     id: 3,
//     poster: "https://picsum.photos/id/66/200/300",
//     title: "My Frist",
//   },
// ];

import newPepole from "./data/Data";
import mp from "./assets/mpplayer.mp4";
import logo from "./assets/logo.png";
import "./app.css";

function App() {
  const listItems = newPepole.map((person) => {
    return (
      <div key={person.id} className="card">
        <video controls poster={person.poster}>
          <source src={mp} />
        </video>
        <p>{person.title}</p>
        <p className="chname">
          {person.channelname}
          <span className="check"> &#9989;</span>
        </p>
        <p className="viwe">
          {person.viweCnt}
          <span>{person.time}</span>
        </p>
      </div>
    );
  });
  return (
    <div className="main">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="playercard">{listItems}</div>
    </div>
  );
}
export default App;
