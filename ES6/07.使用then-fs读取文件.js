import thenFs from 'then-fs'

thenFs.readFile('./ES6/files/1.txt', 'utf8').then(r1 => {
    console.log(r1);
}, err1 => {
    console.log(err1.message);
})
thenFs.readFile('./ES6/files/2.txt', 'utf8').then(r2 => {
    console.log(r2);
}, err2 => {
    console.log(err1.message);
})
thenFs.readFile('./ES6/files/3.txt', 'utf8').then(r3 => {
    console.log(r3);
}, err1 => {
    console.log(err3.message);
})

// 缺陷是无法保证读取文件完成的顺序