import type { Static, TSchema } from "@sinclair/typebox"

import { Value } from "@sinclair/typebox/value"

import { parse } from "yaml"

export function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export async function loadYaml<T extends TSchema>(path: string, schema: T): Promise<Static<T>> {
    const text = await Bun.file(path).text()
    const yaml = parse(text)

    Value.Assert(schema, yaml)

    return yaml
}