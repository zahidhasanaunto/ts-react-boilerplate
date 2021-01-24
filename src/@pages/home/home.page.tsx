import {
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useWorker } from "react-hooks-worker";
import { Link, Route, useHistory } from "react-router-dom";
import { AppToolbar } from "../../@components/AppToolbar";
// import CalcFib from "../../CalcFib";
import './style.scss';

const calcFib: any = (x: number) => {

  let res = x
  for (let i = x; i < 100; i++) {
    res = i
    // console.log(res);
  }

  return res;
};

const CalcFib: React.FC<{ count: number }> = ({ count }) => {
  console.log('Started');

  const { result, error } = useWorker(calcFib, count);

  if (error) return <div>Error:{error}</div>;

  if (result) {
    console.log('Ended');
  }

  return <div>Result:{result}</div>;
};

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
          <div>
            <button onClick={() => { alert('hi') }}>TEST</button>
          </div>
          <div>
            <CalcFib count={5} />
          </div>
        </>
      </div >
    </div >
  );
};
