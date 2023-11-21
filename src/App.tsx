import "./App.scss";
import { usePrepareHook } from "./helper";

function App() {
  const { isPressed, keyInfos } = usePrepareHook();

  return (
    <div className="container">
      {isPressed ? (
        <>
          <div className="circle">13</div>
          <div className="key-infos">
            {keyInfos.map((item) => (
              <div className="key-info">
                <div className="label">{item.label}</div>
                <div className="value">{item.value}</div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="message-button">Press any key</div>
      )}
    </div>
  );
}

export default App;
