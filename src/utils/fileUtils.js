const fs = require('node:fs/promises')

async function readJSON(path) {
    try {
        const data = await fs.readFile(path, 'utf-8')
        return JSON.parse(data)
    } catch(err) {
        throw err
    }
}

async function writeJSON(path, content) {
    try {
        await fs.writeFile(path, JSON.stringify(content))
    } catch(err) {
        throw err
    }
}

module.exports = {readJSON, writeJSON}