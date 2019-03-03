#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path')

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
    ['IS_PROD=true'],
    {
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