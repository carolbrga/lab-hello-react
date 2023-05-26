import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

export default function Icons() {
  return (
    <div className="icons">
      <div >
        <img width={120} src={icon1} />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs</p>
      </div>

      <div >
        <img width={120} src={icon2} />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state</p>
      </div>

      <div >
        <img width={120} src={icon3} />
        <h2>Single-Way</h2>
        <p>A set of immutable values that are passed to the component's</p>
      </div>

      <div >
        <img width={120} src={icon4} />
        <h2>JSX</h2>
        <p>Statically-typed designed to run on modern browsers.</p>
      </div>
    </div>
  );
}
