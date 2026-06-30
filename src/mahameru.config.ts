import type { Config } from 'mahameru'

const config: Config = async (defaultConfig) => {
    return {
        name: "MahameruJS",
        port: 3000
    }
}

export default config
