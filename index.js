const fs=require('fs');
const os = require('os')
const calc=require('./calc');

// console.log("Addition Is : ",calc.add(20,4));
// console.log("Subtraction Is : ",calc.sub(20,4));
// console.log("Multiplication Is : ",calc.mul(20,4));
// console.log("Divison Is : ",calc.div(20,4));
// console.log("Modulus Is : ",calc.modulus(20,4));
// 
// Get the CPU architecture
// console.log('CPU Architecture:', os.arch());

// // Get the amount of free system memory in bytes
// console.log('Free Memory (bytes):', os.freemem());

// // Get the path to the current user's home directory
// console.log('Home Directory:', os.homedir());

// // Get the hostname of the operating system
// console.log('Hostname:', os.hostname());

// // Get information about network interfaces
// console.log('Network Interfaces:', os.networkInterfaces());

// // Get the operating system platform (e.g., 'linux', 'darwin', 'win32')
// console.log('OS Platform:', os.platform());

// // Get the operating system release
// console.log('OS Release:', os.release());

// // Get the total amount of system memory in bytes
// console.log('Total Memory (bytes):', os.totalmem());

// // Get the system uptime in seconds
// console.log('System Uptime (seconds):', os.uptime());

// // Get information about each CPU/core
// console.log('CPU Information:', os.cpus());

console.log(os.cpus());
