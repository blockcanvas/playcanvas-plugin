console.log('hey! plugin js code executed')
ver=1.0.1
let yml = `
---
  initilize:
    color: ff0000
    icon: text.svg
    blocks:
      - initilize:
          shadows:
            - 1
          args:
            a: statement
          function: initilize
          code: >
            func test(a, b) {
              print(a)
              b!()
            }
          
          messages:
            - initalize
            -
          hasReturn: false
          tooltip: test
          
`
createBlocksFromYAML(yml)
