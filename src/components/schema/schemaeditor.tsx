import { JsonForms } from '@jsonforms/react'
import { Generate } from '@jsonforms/core'
import axios from 'axios'
import { ConfigContext } from '../config/configcontext'
import { materialRenderers, materialCells } from '@jsonforms/material-renderers'
import { useState, useContext, useEffect } from 'react'

export const SchemaEditor = (): JSX.Element => {
  const [schema, setSchema] = useState({})
  const [loaded, setLoaded] = useState(false)
  const config = useContext(ConfigContext)

  useEffect(() => {
    if (!loaded) {
      const url = config.schemaBaseUrl + 'attribute.json'
      axios
        .get(url)
        .then((response) => response.data)
        .then((resp) => setSchema(resp))
    }
    setLoaded(true)
  })
  //const uiSchema = Generate.uiSchema(schema)
  return (
    <div>
      <JsonForms
        schema={schema}
        data={{}}
        renderers={materialRenderers}
        cells={materialCells}
      />
    </div>
  )
}
