//l7-better-workflow-tsconfig

// use tsc --init to initialize the tsconfig file

// this lesson focuses on the tsconfif file and making tsc only compile files in the src folder by modifying the tsconfig file -> changing the file
// to compile files in the rootDir we set it to ("root": "./src",)
// and compile the files in root dir to ("outDir": "./public",)

// now if we compile the the program will include files athat are outside the src folder when it compiles files
// we can fix this by putting ("include": ["src"]) at the end of the tsconfig file 
//use tsc -w to watch changes in all the src files
console.log('test');
