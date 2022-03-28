console.log('hey! plugin js code executed')
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
          ver=1.0.1
          messages:
            - test
            -
          hasReturn: false
          tooltip: test
          
`
createBlocksFromYAML(yml)
