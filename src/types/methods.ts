import { Type as t, type Static } from '@sinclair/typebox'

const ParametersModel = t.Array(t.Object({ 
    name: t.String(), 
    in: t.String(), 
    required: t.Boolean(), 
    type: t.String() 
}))

const ResponsesModel = t.Union([
    t.Object({ schema: t.Object({ $ref: t.String() }) }),
    t.Object({ $ref: t.String() })
])

const DataModel = t.Object({ 
    summary: t.String(),
    description: t.String(),
    operationId: t.String(),
    parameters: t.Optional(ParametersModel),
    responses: t.Record(t.String(), ResponsesModel)
})

const PathsModel = t.Record(
    t.String(), 
    t.Object({ get: DataModel })
)

const MethodsModel = t.Object({
    paths: PathsModel
})

type PathsType = Static<typeof PathsModel>

type DataType = Static<typeof DataModel>

type ParametersType = Static<typeof ParametersModel>

export { MethodsModel, type PathsType, type DataType, type ParametersType }