newTrial("test",
        newText("leadIn", "<i>Please imagine that Sally asked the following question:</i>")
            .center()
            .css("font-size", "20px")
            .css('font-family', 'Helvetica, sans-serif')
            .print()
        ,
        newText("spacer0", "<br><br>").print()
        ,
        newText("target", "\"Was what Tom did last week cowardly?\"")
            .center()
            .css("font-size", "24px")
            .css('font-family', 'Helvetica, sans-serif')
            .print()
        ,
        newText("spacer1", "<br><br><br>").print()
        ,
        newText("question", "<b>Is Sally certain that Tom did something cowardly?</b>")
            .center()
            .css("font-size", "20px")
            .css('font-family', 'Helvetica, sans-serif')
            .print()
        ,
        
        newText("spacer2", "<br><br>").print()
        ,
        newScale("slider", 100)
            .slider()
            .center()
            .before(
                newText("left", "&nbsp;definitely <br>&nbsp;no")
                    .css("margin-right", "20px")
                    .css('font-family', 'Helvetica, sans-serif')
                )
            .after(
                newText("right", "&nbsp;definitely <br>&nbsp;yes")
                    .css("margin-left", "20px")
                    .css('font-family', 'Helvetica, sans-serif')
                )
            .log()
            .print()
        ,
        newText("error", "Please move the slider.")
            .center()
            .css("color", "red")
            .css("margin-top", "10px")
            .css('font-family', 'Helvetica, sans-serif')
            .hidden()
            .print()
        ,
        newButton("Next")
            .center()
            .print()
            .wait(
                getScale("slider").test.selected()
                    .failure(getText("error").visible())
            )
    )
    // .log("TrialNumber", row.TrialNumber)
    // .log("TrialType", row.TrialType)
    // .log("Word", row.Word)

