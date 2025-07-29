import Features from "./components/Features";
import FileUpload from "./components/FileUpload";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col gap-8">
      <Header />
      <Features />
      <FileUpload />
    </div>
  );
}

export default App;
