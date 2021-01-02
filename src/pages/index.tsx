import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

import {
  Container,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Grid,
} from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { SchemaEditor } from '../components/schema/schemaeditor'
import { EntitySelector } from '../components/schema/entityselector'
import {
  getInitialSchemaContext,
  SchemaContext,
  SchemaProvider,
} from '../components/schema/schemacontext'

const drawerWidth = 140

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      width: '100%',
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      height: '100%',
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
)

export default function Home(): JSX.Element {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SchemaContext.Provider value={getInitialSchemaContext()}>
        <Container>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6">Modeler</Typography>
            </Toolbar>
          </AppBar>
        </Container>
        <Container maxWidth="sm">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            <div className={classes.toolbar} />
            <EntitySelector />
          </Drawer>
        </Container>
        <div className={classes.toolbar} />

        <main className="content">
          <Container>
                <Grid container direction="row" alignItems="center" justify="center" spacing={3}>
                  <Grid item>
                    <Card>
                      <CardContent>
                        <SchemaEditor />
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
            </Container>
        </main>
      </SchemaContext.Provider>
    </div>
  )
}
