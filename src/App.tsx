import React, { useState } from "react";
import { useStore } from "./Store/UseStore";
import { observer } from "mobx-react";
import { AppRouter } from "./Routes/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

const App = observer(() => {
  const [loaded, setLoaded] = useState(false);
  const store = useStore();

  return (
    <Router>
      <AppRouter />
    </Router>
  );
});

export default App;
