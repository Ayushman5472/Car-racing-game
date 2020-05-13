class Form {
    constructor(){

    }
display(){
    var title = createElement('h2')
    title.html("Car Racing Game")
    title.position(230,10)
    var input = createInput("name")
    var button = createButton("submit")
    var greeting = createElement("h3")
    input.position(230,160)
    button.position(230,250)
    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name = input.value()
        playercount=playercount+1
        player.update(name)
        player.updateCount(playercount)
        greeting.html("Hi "+ name)
        greeting.position(250,160)
    })
}    
}