import ClickSpark from '../components/ClickSpark';

export default function App() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <ClickSpark>
        <h1>🚀 Welcome to My Portfolio</h1>
      </ClickSpark>

      <p>This is my React app’s main page.</p>

      <a href="/threejs-project/index.html" style={{ fontSize: "1.5rem" }}>
        Go to Space Journey
      </a>
    </div>
  );
}
