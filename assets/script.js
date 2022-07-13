var today = moment().format("dddd, MMMM Do, YYYY")
$("#currentDay").text(today)

$(document).ready(function () {
    // on click save time and text 
    $(".saveBtn").on("click", function () {
        // grab time and text
        var time = $(this).parent().attr("id")
        var text = $(this).siblings(".description").val()

        // validate entry
        if (!text) {
            alert("No text found!")
            return
        } else {
            // save into local storage array
            localStorage.setItem(time, text)
            $("#localStorage").text("Task saved! \u2713")
        }
    })
   
    function timeChecker() {
        // get current number of hours
        var currentTime = moment().hour()

        // loop over time blocks
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1])

            // Check the time and current state
            if (timeBlock < currentTime) {
                $(this).removeClass("future")
                $(this).removeClass("present")
                $(this).addClass("past")
            }
            else if (timeBlock === currentTime) {
                $(this).removeClass("past")
                $(this).removeClass("future")
                $(this).addClass("present")
            }
            else {
                $(this).removeClass("present")
                $(this).removeClass("past")
                $(this).addClass("future")
            }
        })
    }

    // Get item from local storage if any
    $("#nineAm .description").val(localStorage.getItem("nineAm"));
    $("#tenAm .description").val(localStorage.getItem("tenAm"));
    $("#elevenAm .description").val(localStorage.getItem("elevenAm"));
    $("#twelvePm .description").val(localStorage.getItem("twelvePm"));
    $("#onePm .description").val(localStorage.getItem("onePm"));
    $("#twoPm .description").val(localStorage.getItem("twoPm"));
    $("#threePm .description").val(localStorage.getItem("threePm"));
    $("#fourPm .description").val(localStorage.getItem("fourPm"));
    $("#fivePm .description").val(localStorage.getItem("fivePm"));

    timeChecker();
})