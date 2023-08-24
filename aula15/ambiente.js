let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é o ${num}`)

num[5] = 6
console.log(`Nosso vetor agora é o ${num}`)

num.push(7)
console.log(`Nosso vetor por ultimo é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vertor é ${num[0]}`)

num.sort()
console.log(`Nosso vetor agora é o ${num}`)

/* for(let pos=0; pos<num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// Buscar valores dentro de um vetor vetores

let pos = num.indexOf(7)
console.log(`O valor 8 está na posição ${pos}`)
