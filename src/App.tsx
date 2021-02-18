import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Home, Author, User} from "./pages";
import Route from './_route';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/author" component={Author}/>
                <Route path="/users" component={User}/>
            </Switch>
        </Router>
    );
};

export default App;