console.log('hey! plugin js code executed')
ver=4
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
           func test(a, b) {
              var Rifts = pc.createScript('rifts');

              // initialize code called once per entity
              Rifts.prototype.initialize = function() {

              };

              // update code called every frame
              Rifts.prototype.update = function(dt) {

              };
           }




          
          messages:
            - initialize
            - initialize section
            - update section
          hasReturn: false
          tooltip: test
          
`
createBlocksFromYAML(yml)
