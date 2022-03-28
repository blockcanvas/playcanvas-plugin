console.log('hey! plugin js code executed')
let yml = `
---
  initilize:
    color: ff0000
    icon: text.svg
    blocks:
      - test:
          shadows:
            - 1
          args:
            a: value
            b: statement
          function: test
          code: >
            func test(a, b) {
              print(a)
              b!()
            }
          messages:
            - test
            -
          hasReturn: false
          tooltip: test
`
createBlocksFromYAML(yml)
