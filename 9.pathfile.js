// const os= require('os')

// console.log(os.cpus()); // Output: Array dengan detail setiap core CPU
// console.log(os.cpus().length); // Output: Jumlah core CPU
// console.log(os.totalmem()); // Output: Total memori dalam bytes
// console.log(os.freemem()); // Output: Memori yang tersedia dalam bytes
// console.log(os.hostname()); // Output: Nama host komputer
// console.log(os.userInfo()); // Output: Informasi tentang pengguna saat ini
// console.log(os.uptime()); // Output: Waktu sejak komputer menyala (dalam detik)
// console.log(os.homedir()); // Output: Path direktori home pengguna
// console.log(os.tmpdir()); // Output: Path direktori sementara sistem
// console.log(os.networkInterfaces()); 
// // Output: Detail interface jaringan (IP address, MAC, dll.)
const path = require('path')

console.log(path.sep)

const filePath = path.join("/content/","subfolder")

console.log(filePath)
const base = path.basename(filePath);
console.log(base);
const baseDua = path.basename(filePathDua);
console.log(baseDua)

const filePathDua = path.join("/jeri/","subjeri")
console.log(filePathDua)

const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute)

const {readFileSync,writeFileSync} = require('fs')

//membuat array baru
