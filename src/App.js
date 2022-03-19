import { useState } from "react";
import "./App.css";
import Blog from "./Compnonents/Blogs/Blog";

function App() {
  return (
    <div className="App">
      <h2 style={style}>Hello Bro</h2>
      <article className="blog">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, in unde?
        Similique consequatur nobis assumenda eius pariatur ipsa quas commodi
        sunt est illum deserunt eum quos, nostrum expedita quod reiciendis omnis
        enim? Eveniet reprehenderit corrupti itaque cupiditate cum, recusandae
        quo impedit, velit laboriosam, magnam sapiente neque? Explicabo
        perspiciatis dicta cupiditate architecto, fugiat voluptatem quidem
        laudantium ipsa expedita aliquid voluptate ut harum ad nemo unde
        suscipit consectetur libero quisquam tempore. Iure consequuntur ex totam
        excepturi molestiae sapiente impedit sint voluptas dignissimos, nobis
        hic obcaecati maiores debitis aut, deserunt repellendus. Culpa adipisci
        eius saepe ut inventore sint, neque dolore voluptas! Fuga, dolorem?
        <p style={{ color: "red", padding: "5px" }}>What's up Bro!</p>
      </article>
      <Mobile></Mobile>
      <Blog></Blog>
    </div>
  );
}
const style = {
  backgroundColor: "lime",
  color: "white",
  padding: "5px",
};

function Mobile() {
  const [decreaseBattery, setDecreaseBattery] = useState(100);
  const downBattery = () => {
    if (decreaseBattery <= 0) {
      return decreaseBattery;
    } else {
      setDecreaseBattery(decreaseBattery - 10);
    }
  };
  return (
    <div className="mobile">
      <h2>Battery</h2>
      <h3>{decreaseBattery}%</h3>
      <button onClick={downBattery}>Battery Down</button>
    </div>
  );
}
export default App;
