newTrial("test",
    newText("word", "hello world")
      .center()
      .settings.css("font-size", "24px")
      .print()
    ,
    newText("spacer1","<br><br>").print()
    ,
    newScale("likert", 7)
      .center()
      .labelsPosition("top")
      .before(newText("left", "positive&nbsp;").settings.css("margin-right", "20px"))
      .after(newText("right", "&nbsp;negative").settings.css("margin-left", "20px"))
      .log()
      .print()
    ,
    newText("error", "Please enter a rating.")
      .center()
      .settings.css("color", "red")
      .settings.css("margin-top", "10px")
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
        getScale("likert").test.selected()
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
