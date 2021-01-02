import { Schema, Entity, Attribute } from '../../@types/schema'
import react from 'react'
import Gun from 'gun/gun'

interface State {
  schema: Schema
}

const order: Entity = {
  $id: 'http://localhost:3000/schena/order',
  name: 'Order',
}

const item: Entity = {
  $id: 'http://localhost:3000/schena/item',
  name: 'Item',
}
const loadedSchema: Schema = {
  entities: {},
}

loadedSchema.entities[order.$id] = order
loadedSchema.entities[item.$id] = item
if (process.browser) {
  localStorage.clear()
  const gun = Gun<State>()
  console.log('********** cleared local storage ************')
  gun.get('schema').put(loadedSchema)

  gun
    .get('schema')
    .get('entities')
    .map()
    .once((value, key) => {
      return value
    })
}

interface SchemaContextType {
  schema: Schema
  selectedItem: Schema | Entity | Attribute
}

export function getInitialSchemaContext(): SchemaContextType {
  return {
    schema: loadedSchema,
    selectedItem: order,
  }
}

export const SchemaContext = react.createContext({
  schema: undefined,
  selectedItem: undefined,
})

export const SchemaProvider = SchemaContext.Provider
