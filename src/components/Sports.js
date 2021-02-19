import { Route, NavLink, useRouteMatch, Switch } from "react-router-dom";
import sportsData from '../data/sportsData'
import Sport from '../components/Sport'

export default function Sports() {
  let { url, path } = useRouteMatch();
  const links = sportsData.map(sport => (
    <li key={sport.id}>
      <NavLink to={`${url}/${sport.id}`}>{sport.title}</NavLink>
    </li>
))


  return (
    <div>
      <h2>Sports</h2>
      <ul>{links}</ul>
          <Route path={`${path}/:id`}
            render={(props) => {
              const sport = sportsData.find(sport => sport.id === Number(props.match.params.id))
              return (
                <Sport {...props} sport={sport} />
              )
            }}
          />
        </div>
        );
}
