PennController.ResetPrefix(null);
DebugOff();

Sequence(
        
    "test",
        
    "demo",
    SendResults(),
    "end"
    // "prolific","bye"
    );


// What is in Header happens at the beginning of every single trial
Header(
    //We will use this global Var element later to store the participant's name
    newVar("ParticipantName")
       .global()
   ,
   // Define a global Group variable
    newVar("Group")
        .global()
    ,
    newTimer(250)
       .start()
       .wait()
);


newTrial( "welcome" ,
    // newImage("paris-labs.png")
    //     .size( 400,100 )      // Resize the image to 150x250px
    //     .center()
    //     .print()
    // ,
    newText("<b>WELCOME</b>")
        .settings.css("font-size","30")
        .center()
        .print()
    ,
    newButton("next", "Continue")
        .center()
        .print()
        .wait()
    );


// End screen
PennController("end",
    newText("Thank you for your participation!<br><br>")
        .center()
        .print()
        ,
    newText("link",'<a href="https://app.prolific.com/submissions/complete?cc=CHFTNE6M">Click here if you do not automatically redirect.</a><br><br>')
        .center()
        .print()
    ,
    newText("Or, enter this completion code: CHFTNE6M")
        .center()
        .print()
    ,
    newKey("end", " ")
        .wait()
).setOption("countsForProgressBar", false);

// Send results at the end of the experiment
PennController.SendResults("send");
// PennController.Finish();
    
