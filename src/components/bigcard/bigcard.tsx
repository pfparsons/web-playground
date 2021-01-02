import { types } from 'util'

export type CardRow = {
  key: string
  value: number
}

export type CardProps = {
  title: string
  subtitle: string
  rows: CardRow[]
}

export default function BigCard(props: CardProps): JSX.Element {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {props.title}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{props.subtitle}</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {props.rows.map((row: CardRow) => {
            return (
              <div key={row.key} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  {row.key}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {row.value}
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </div>
  )
}
