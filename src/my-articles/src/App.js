import bootstrap from "bootstrap";
import AddArticle from "./AddArticle";
import Articles from "./Articles";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <Articles />
        </div>
        <div className="col-md-4">
          <AddArticle />
        </div>
      </div>
    </div>
  );
}

export default App;
