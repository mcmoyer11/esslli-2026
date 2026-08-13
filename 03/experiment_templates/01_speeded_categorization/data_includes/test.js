newTrial( "test",
    newVar("accuracy", 0)
        .global()
    ,
    newImage("cross","cross.png")
        .center()
        .print()
    ,
    newTimer("wait",500)
        .start()
        .wait()
    ,
    getImage("cross")
        .remove()
    ,
    newText("word", "hello world")
        .settings.css("font-size","70")
        .center()
        .print()
    ,
    newVar("RT")
        .global()
        .set( v => Date.now() )
    ,
    newText("<br> <br> <br> <br>")
        .center()
        .print()
    ,
    newCanvas( 'myCanvas', 700, 500)
        .settings.add( 100, 50, 
                newText("F <br> positive")
                    .settings.css("font-size","30")
                    )
        .settings.add( 500, 50, 
                newText("J <br> negative")
                    .settings.css("font-size","30")
                )
        .center()
        .print()
    ,
    newSelector()
        .add( newText("positive"), newText("negative") )
        .center()
        .print()
        .keys("F", "J")
        .log()
        .wait()
    ,
    getVar("RT")
        .set( v => Date.now() - v )
            
    )
    .log( "ReactionTime" , getVar("RT"))
    .log( "Word" , row.Word )