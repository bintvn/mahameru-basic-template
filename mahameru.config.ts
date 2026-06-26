import type { MahameruConfigFunction } from 'mahameru'
import { toKebabCase } from 'porterman/string-helper'

const config: MahameruConfigFunction = async (defaultConfig) => {
    return {
        name: toKebabCase('MahameruJS Node Backend Framework'),
        port: 3000,
    }
}

export default config
