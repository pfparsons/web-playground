import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import { useContext } from 'react'
import { Schema } from '../../@types/schema'
import { SchemaContext } from './schemacontext'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

export const EntitySelector = (): JSX.Element => {
  const schemaContext = useContext(SchemaContext)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <List>
        {Object.keys(schemaContext.schema.entities).map((entityId) => (
          <ListItem
            key={entityId}
            selected={entityId == schemaContext.selectedItem.$id}
            button
          >
            <ListItemText
              primary={schemaContext.schema.entities[entityId].name}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
