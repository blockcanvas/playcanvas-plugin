let yml = `
---
//ver=0.0.2
  blockcanvas: #name of the category
    color: ff0000 #color of the category
    icon: text.svg #icon of the category
    blocks:
      - playcanvasinit: #there is a block that we call it test
          shadows:
            - 1 #it has one shadow(Whenever no other value is present in the input, this value fills it)
          args:
            a: statement #we have two inputs one of them gives a normal value and the other one gives a program, a statement(as a lambda function)
          function: init #the function that we call when this block is used. you can see definition of it in the next line
          code: >
var Script = pc.createScript('script');

// initialize code called once per entity
Script.prototype.initialize = function() {

};

// update code called every frame
Script.prototype.update = function(dt) {

};
          messages: #The messages we want to appear on the block (we put them before inputs)
            - playcanvasinit
            -
          hasReturn: false #is it a block that returns something (ellipse ones)
          tooltip: test #the tooltip of the block
`
createBlocksFromYAML(yml)
