import type { DefinitionType, PropertiesType } from '../types'
import { isPrimitive, primitives } from './properties'

export function generateType(name: string, data: PropertiesType): string {
    let code = ''

    if ('items' in data) {
        const items = data.items

        if (items) {
            if ('$ref' in items) {
                const ref = items.$ref
    
                const m = ref.split('/')[2]
    
                if (m) {
                    code += `${m}[]`
                }
    
                return `export type ${name} = ${code}\n\n`
            }
    
            if ('type' in items) {
                const { enum: values, type } = items
    
                if (type && values) {
                    const unionTypes = values
                        .map((i) => `'${i}'`)
                        .join(' | ')
    
                    return `export type ${name} = ${unionTypes}\n\n`
                }
            }
        }
    }

    if ('properties' in data) {
        for (let key in data.properties) {
            const attribute = data.properties[key]

            const charCode = key.charCodeAt(0)
            if (charCode > 47 && charCode < 58) {
                key = "'" + key + "'"
            }

            if (!attribute) continue

            if ('type' in attribute) {
                const type = attribute.type

                if (type && isPrimitive(type)) {
                    const t = primitives[type]
                    code += `   ${key}: ${t}\n`
                }
            }

            if ('$ref' in attribute) {
                const ref = attribute.$ref.split('/')[2]

                if (ref) {
                    code += `   ${key}: ${ref}\n`
                }
            }
        }
    }

    return `export interface ${name} {\n` +
           code +
           '}\n\n'
}

export function fixBadRefs() {
    return 'export type List = unknown[]\n\n' +
           'export type JsonLocalizedName = string\n\n'
}

export function generateCode(definitions: DefinitionType) {
    let code = '' 

    for (const key in definitions) {
        const def = definitions[key]
        if (!def || !('items' in def || 'properties' in def)) continue

        code += generateType(key, def)
    }

    code = code.trimEnd()

    return code
}