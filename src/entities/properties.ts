export function isPrimitive(type: string) {
    return (
        type == 'string' ||
        type == 'integer' ||
        type == 'boolean'
    )
}

export const primitives = { string: 'string', integer: 'number', boolean: 'boolean' }
