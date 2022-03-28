console.log('hey! plugin js code executed')

let yml = `
---
  initilize:
    color: ff0000
    icon: text.svg
    blocks:
      - initiliaze:
          shadows:
            - 1
          args:
            a: statement
          function: initiliaze
          code: > 
            func initiliaze(a) {
              print(a)
            }



          
          messages:
            - initialize
            - initialize section
            - update section
          hasReturn: false
          tooltip: test
          
`
createBlocksFromYAML(yml)
