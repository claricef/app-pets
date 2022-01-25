import { Switch, Route, BrowserRouter} from 'react-router-dom';
import New from './pages/Pet/new';
import Show from './pages/Pet/show';

const Routes  =  () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/new" component={New} />
                <Route exact path="/show" component={Show}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;  