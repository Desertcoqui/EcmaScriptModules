import {readFile, writeFile} from 'fs/promises'
import {nebraska} from "./second.mjs"
//template.html file
//utf-8 allows us not to have to use the toString method when calling the html file
let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')

const data = {
    title: 'Planning the move',
    body: 'Find the living space'
}

 for (const [k,v] of Object.entries(data)){
template = template.replace(`{${k}}`, v)
 } 

 //writing template.html to index.html
 await writeFile (new URL ('index.html', import.meta.url), template)

console.log(template)

nebraska()