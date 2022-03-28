console.log('hey! plugin js code executed')
//ver=8
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
           //var Rifts = pc.createScript('rifts');

// initialize code called once per entity
//Rifts.prototype.initialize = function() {

//};

// update code called every frame
//Rifts.prototype.update = function(dt) {

//};
            
           }




          
          messages:
            - create script

          hasReturn: false
          tooltip: test
          
`
createBlocksFromYAML(yml)
