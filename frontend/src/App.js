import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { restoreUser } from "./store/session";
import Navigation from "./components/Navigation/Navigation";
import SpotView from "./components/SpotView";
import SpotPage from "./components/SpotPage/SpotPage";
import EditSpotForm from "./components/EditSpotForm/EditSpotForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // check if backend has attempted to restore the user
    dispatch(restoreUser())
      .then(() => setIsLoaded(true))
      .catch(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path='/spots/:spotId'>
          <SpotPage />
        </Route>
        <Route path='/spots/:spotId/edit'>
          <EditSpotForm />
        </Route>
        <Route exact path='/'>
          <SpotView />
        </Route>
        <Route>
          <h1 style={{ marginLeft: '5rem' }}>Page Not Found</h1>
        </Route>
      </Switch>

    </>
  );
}

export default App;
