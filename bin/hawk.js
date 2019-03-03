const { spawn } = require('child_process');
const path = require('path')

const os = process.platform

let target = path.resolve(__dirname + '/hawk-linux')

if (os === 'darwin') {
    target = path.resolve(__dirname + '/hawk-macos')
}

if (os === 'win32') {
    target = path.resolve(__dirname + '/hawk-win.exe')
}

const child = spawn(target, {
    stdio: [
        0,
        'pipe',
    ]
})

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
})

child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
})

child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
})