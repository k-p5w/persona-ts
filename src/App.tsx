import React from 'react';
import './App.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PinnedSubheaderList from './View';
import OppositeContentTimeline from './timeline';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        ここはヘッダー
      </header>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <PinnedSubheaderList />
        </Grid>
        <Grid item xs={12}>
          <OppositeContentTimeline />
        </Grid>
      </Grid>


    </div>
  );
}

export default App;
