import "./App.css";
import UseStateHook from "./components/use-state-hook";
import UseEffectHook from "./components/use-effect-hook";
import UseRefHook from "./components/use-ref-hook";
import UseContextHook from "./components/use-context-hook";
import UseReducerHook from "./components/use-reducer-hook";
import UseMemoAndCallbackHook from "./components/use-memo-and-context-hook";
import UseImperativeHandleHook from "./components/use-imperative-handle-hook";
import UseEffectPolyFillComponent from './components/use-effect-polyfill';

function App() {
  return (
    <div>
      <h2>Hooks Interview Questions in React</h2>
      <UseStateHook />
      <UseEffectHook />
      <UseEffectPolyFillComponent />
      <UseRefHook />
      <UseContextHook />
      <UseReducerHook />
      <UseMemoAndCallbackHook />
      <UseImperativeHandleHook />
    </div>
  );
}

export default App;
