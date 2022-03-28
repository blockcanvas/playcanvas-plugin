console.log('hey! plugin js code executed')
//ver=14
let yml = `
---
  playcanvas:
    color: ff0000
    icon: text.svg
    blocks:
      - initiliaze1:
          shadows:
            - 1
          args:
            a: statement
          function: initiliaze1
          code: >
            func initiliaze1(a) {
              var Script = pc.createScript('script');
            }
           


  
        




          
          messages:
            - create initialize 1

          hasReturn: false
          tooltip: test
    

          
`
createBlocksFromYAML(yml)
