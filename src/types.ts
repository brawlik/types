import { Type as t, type Static } from '@sinclair/typebox'

const PropertyModel = t.Union([
    t.Object({ type: t.String(), enum: t.Optional(t.Array(t.String())) }),
    t.Object({ $ref: t.String() }),
])

const PropertiesModel = t.Intersect([
    t.Object({ type: t.String() }),
    t.Union([
        t.Object({ properties: t.Optional(t.Record(t.String(), PropertyModel)) }),
        t.Object({ items: t.Optional(PropertyModel) })
    ])
])

const DefinitionModel = t.Record(t.String(), PropertiesModel)

const SchemaModel = t.Object({
    definitions: DefinitionModel
})

type PropertiesType = Static<typeof PropertiesModel>

type DefinitionType = Static<typeof DefinitionModel>

export { type PropertiesType, type DefinitionType, PropertiesModel, SchemaModel }