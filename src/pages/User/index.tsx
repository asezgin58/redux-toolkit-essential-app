import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import List from "./List";
import Detail from "./Detail";

/**
 * Component File Description
 */
const User = () => {
    const match: any = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}`}>
                <Redirect to={`${match.url}/list`}/>
            </Route>
            <Route path={`${match.url}/list`} component={List}/>
            <Route path={`${match.url}/detail/:id`} component={Detail}/>
        </Switch>
    )
};

export default User;