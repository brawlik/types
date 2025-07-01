import type { ParametersType } from "../types/methods"
import { isPrimitive, primitives } from "./properties"

export function generateParams(parameters: ParametersType, method: string) {
    let code = ''
    
    for (const key in parameters) {
        const parameter = parameters[key]

        if (!parameter) continue

        const type = parameter.type
        const required = parameter.required ? '' : '?'

        if (isPrimitive(type)) {
            code += `    ${parameter.name + required}: ${primitives[type]}\n`
        }
    }

    return `export interface ${method}Params {\n` +
            code +
           '}\n\n'
}