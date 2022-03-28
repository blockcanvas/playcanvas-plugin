console.log('hey! plugin js code executed')
//ver=12
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
           var Script = pc.createScript('script');


  
        




          
          messages:
            - create script

          hasReturn: false
          tooltip: test
    

          
`
createBlocksFromYAML(yml)
