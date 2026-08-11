newTrial("test",
    newText("word", "hello world")
      .center()
      .settings.css("font-size", "24px")
      .print()
    ,
    newText("spacer1","<br><br>").print()
    ,
    newScale("slider", 100)
        .slider()
        .center()
        .before(
            newText("left", "completely&nbsp;<br> negative&nbsp;")
                .css("margin-right", "20px")
                .css('font-family', 'Helvetica, sans-serif')
                )
        .after(
            newText("right", "&nbsp;completely <br>&nbsp;positive")
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
    newHtml("checkbox_html", `
      <label style="user-select:none; cursor:pointer; margin-top: 15px; display:inline-block;">
        <input type="checkbox" id="not_fit_checkbox" style="margin-right: 6px; vertical-align: middle;">
        This scale doesn't really fit this word's meaning
      </label>
    `)
      .center()
      .print()
    ,
    newButton("Next")
        .center()
        .print()
        .wait(
            getScale("slider").test.selected()
                .failure(getText("error").visible())
        )
    ,
    // Capture and log checkbox value explicitly
    newVar("notFit")
      .set(() => {
        const checkbox = document.getElementById("not_fit_checkbox");
        return checkbox && checkbox.checked ? "yes" : "no";
      })
      .log()
  );
