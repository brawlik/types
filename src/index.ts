import { parse } from 'yaml'

import { fixBadRefs, generateCode } from './entities/objects'

import { SchemaModel } from './types'

import { Value } from '@sinclair/typebox/value'
import type { Static, TSchema } from '@sinclair/typebox'

async function loadYaml<T extends TSchema>(path: string, schema: T): Promise<Static<T>> {
    const text = await Bun.file(path).text()
    const yaml = parse(text)

    Value.Assert(schema, yaml)
    
    return yaml
}

const schema = await loadYaml('swagger.yaml', SchemaModel)
const battleSchema = await loadYaml('fixBattle.yaml', SchemaModel)

const definitions = schema.definitions
const battleDefinitions = battleSchema.definitions

const code: string[] = []

code.push(fixBadRefs())
generateCode(code, definitions)
generateCode(code, battleDefinitions)

await Bun.write(`./out/index.d.ts`, code.join('\n\n'))
