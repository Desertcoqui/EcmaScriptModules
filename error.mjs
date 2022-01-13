import {readFile} from 'fs/promises'


//catches error -lets code continue without breaking the app

   const result = readFile(new URL ('app.mjs', import.meta.url), 'utf-8')  
.catch (e =>{
    console.log("Yes we know there is can error, but carry on")
}) 