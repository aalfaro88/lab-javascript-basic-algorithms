console.log("Iteration 1: Names and Input".toUpperCase())

let hacker1 = "Alberto"
console.log("The driver's name is ",hacker1)
let hacker2 = "Juan"
console.log("The navigator's name is ",hacker2)

console.log("")
console.log("Iteration 2: Conditionals".toUpperCase())

let hacker1Length = hacker1.length
let hacker2Length = hacker2.length

if (hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1Length} characters`)
}
else if (hacker2.length>hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`)
}
else{console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)}

console.log("")
console.log("Iteration 3: Loops".toUpperCase())

nameDriverCap =""
for (let i = 0;i<hacker1Length;i++){
  nameDriverCap+=hacker1[i].toUpperCase()+" "
}

console.log(nameDriverCap)

nameNavRev=""
for (let i = hacker2Length-1;i>=0;i--){
  nameNavRev+=hacker2[i]
}

console.log(nameNavRev)

if(hacker1<hacker2){
  console.log("The driver's name goes first.")
}
else if(hacker2>hacker1){
  console.log("Yo, the navigator goes first, definitely.")
}
else(console.log("What?! You both have the same name?"))

console.log("")
console.log("Bonus Time!".toUpperCase())
console.log("")
console.log("Bonus 1".toUpperCase())

let longText=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum mauris sit amet neque malesuada hendrerit. Curabitur pretium neque nisi, et tristique odio tincidunt ac. Maecenas lacinia, diam ac sodales commodo, augue risus luctus justo, in luctus lectus nibh ac magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla mauris velit, imperdiet ut mollis sit amet, cursus quis libero. Aliquam eleifend mi vel eleifend efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Praesent vel nisi volutpat nunc tincidunt dignissim eu sed metus. Aenean volutpat nulla at felis aliquam, eu tincidunt odio dapibus. Nulla finibus, dolor quis efficitur lobortis, elit justo posuere lectus, quis congue leo ante tempus lacus. Aliquam ut eros enim. Aliquam vel velit sed ligula vulputate commodo. Aliquam quam urna, ullamcorper in suscipit a, scelerisque eu felis. Suspendisse arcu mauris, auctor aliquet semper eu, consequat ut libero. Duis elementum aliquet hendrerit. Nulla viverra dolor sit amet dui blandit gravida. Etiam mollis ex quis sapien feugiat, sit amet posuere mauris commodo. Quisque ac purus maximus, sollicitudin urna id, commodo purus. Nulla ultricies ultricies eros, non mattis arcu consectetur sit amet. Vivamus nec molestie nisl, in mollis leo. Vivamus dignissim, massa nec pretium laoreet, nulla diam scelerisque tellus, nec accumsan enim massa ut eros.

Integer scelerisque interdum dapibus. Phasellus ac arcu et velit scelerisque dictum. Nunc hendrerit tellus vitae felis mattis cursus. Nam sed justo nisi. Duis varius augue mauris, nec faucibus lorem lobortis a. In quis gravida sem. Integer dictum nulla ut eros rutrum, at malesuada massa convallis. Sed pharetra neque tellus, eu blandit lacus elementum imperdiet. Sed iaculis dolor in mauris lobortis, eget aliquet elit gravida.`

let wordCount=0
for (let i = 0;i<longText.length;i++){
  if (longText[i]===" "){
    wordCount+=1
  }
}
console.log(wordCount)

let etCount=0
for (let i = 0;i<longText.length;i++){
  if (longText[i-1]===" "&&longText[i]==="e"&&longText[i+1]==="t"&&longText[i+2]===" "){
    etCount+=1
  }
}
console.log(etCount)

console.log("")
console.log("Bonus 2".toUpperCase())

phraseToCheck="No 'x' in Nixon"
word1=""
word2=""

for(let i=0;i<phraseToCheck.length;i++){
  if(phraseToCheck[i]!=" "&&phraseToCheck[i]!="!"&&phraseToCheck[i]!="?"&&phraseToCheck[i]!="'"){
    word1+=phraseToCheck[i].toLowerCase()
  }
}

for(let i=phraseToCheck.length-1;i>=0;i--){
  if(phraseToCheck[i]!=" "&&phraseToCheck[i]!="!"&&phraseToCheck[i]!="?"&&phraseToCheck[i]!="'"){
    word2+=phraseToCheck[i].toLowerCase()
  }
}

if(word1===word2){
  console.log("Your phrase or word is a Palindrome")
}
else{console.log("Your phrase or word is NOT a Palindrome")}

console.log("Word1: ",word2)
console.log("Word2: ",word1)
