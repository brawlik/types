import { generateMethodsCode } from './entities/methods'
import { fixBadRefs, generateCode } from './entities/objects'

import { GeneralModel, ObjectsModel } from './types'

import { loadYaml } from './utils'

const schema = await loadYaml('swagger.yaml', GeneralModel)
const battleSchema = await loadYaml('fixBattle.yaml', ObjectsModel)

const definitions = schema.definitions
const battleDefinitions = battleSchema.definitions
const methods = schema.paths

let code = ''

code += fixBadRefs()
code += generateCode(battleDefinitions)
code += generateCode(definitions)

const { methodsCode, paramsCode } = generateMethodsCode(methods)

await Bun.write(`./out/params.d.ts`, paramsCode)
await Bun.write(`./out/methods.d.ts`, methodsCode)
await Bun.write(`./out/index.d.ts`, code)
