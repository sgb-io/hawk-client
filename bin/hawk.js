#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path')

const {
    EMAIL,
    AUTH_TOKEN,
    IS_CI,
} = process.env
const os = process.platform

let target = path.resolve(__dirname + '/hawk-javascript-linux')

if (os === 'darwin') {
    target = path.resolve(__dirname + '/hawk-javascript-macos')
}

if (os === 'win32') {
    target = path.resolve(__dirname + '/hawk-javascript-win.exe')
}

const child = spawn(
    target,
    {
        env: {
            NODE_ENV: 'production',
            IS_CI,
            EMAIL,
            AUTH_TOKEN,
        },
        stdio: [
            0,
            'pipe',
        ]
    }
)

child.stdout.on('data', (data) => {
    console.log(data.toString())
})

child.stderr.on('data', (data) => {
    console.log(data.toString())
})

child.on('error', (data) => {
    console.log(data.toString())
})