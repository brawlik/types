import type { DataType, PathsType } from '../types/methods'

import { capitalizeFirstLetter } from '../utils'

import { generateParams } from './params'

function generateMethod(method: DataType, params: string) {
    let code = ''
    const response = method.responses['200']

    if (response && 'schema' in response) {
        const returnType = response.schema.$ref.split('/')[2]

        code += `        Params.${params}Params,\n`
        code += `        Objects.${returnType}\n`
    }

    return `    ${method.operationId}: CallAPI<\n` +
           code +
           '    >\n\n'
}

export function generateMethodsCode(methods: PathsType) {
    let methodsCode = ''
    let paramsCode = ''

    methodsCode += 
        `import type * as Objects from './index'\n` +       
        `import type * as Params from './params'\n` +
        `import type { CallAPI } from './utils'\n\n` +
        `export interface APIMethods {\n`

    for (const key in methods) {
        const method = methods[key]?.get

        if (!method || !method.parameters) continue
        
        const parametersName = capitalizeFirstLetter(method.operationId)

        paramsCode += generateParams(
            method.parameters,
            parametersName
        )

        methodsCode += generateMethod(method, parametersName)
    }

    paramsCode = paramsCode.trimEnd()
    methodsCode = methodsCode.trimEnd()

    methodsCode += '\n}'
    return { methodsCode, paramsCode }
}