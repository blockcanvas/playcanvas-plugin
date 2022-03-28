console.log('hey! plugin js code executed')
ver=6
let yml = `
---
  playcanvas:
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
           var Script = pc.createScript('script');

// initialize code called once per entity
Script.prototype.initialize = function() {

};

// update code called every frame
Script.prototype.update = function(dt) {

};

           }




          
          messages:
            - create script

          hasReturn: false
          tooltip: test
          
`
createBlocksFromYAML(yml)
