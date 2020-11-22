import {
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core/styles";
import React from "react";
import { Link, Route, useHistory } from "react-router-dom";
import { AppToolbar } from "../../@components/AppToolbar";
import './style.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      padding: 8
    }
  })
);

const Framework = (props: any) => {
  const handleClose = () => {
    props.history.push(props.basePath);
  };

  return (
    <div className="w3-modal" style={{ display: 'block' }}>
      <div className="w3-modal-content">
        <div className="w3-container" style={{ padding: 30 }}>
          <p>Details for framework: {props.name}</p>
          <p>Some text. Some text. Some text.</p>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>

    </div>
  );
};

export const HomePage = (props: any) => {
  const classes = useStyles();
  const navigation = useHistory();
  const basePath = props.match.path;

  return (
    <div className={classes.root}>
      <AppToolbar navigation={navigation} title="TypeScript React Boilerplate" hasBackButton={false} />

      <div>
        <>
          <Route path={`${basePath}/:name`}
            render={props => <Framework name={props.match.params.name} basePath={basePath} {...props} />} />

          <h3>Frameworks</h3>
          <ul>
            <li><Link to={`${basePath}/react`}>React JS</Link></li>
            <li><Link to={`${basePath}/angular`}>Angular JS</Link></li>
            <li><Link to={`${basePath}/vue`}>Vue JS</Link></li>
          </ul>
        </>
      </div >
    </div >
  );
};
