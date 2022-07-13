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
        // console.log(currentTime)

        // loop over time blocks
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("block")[1])
            // console.log(timeBlock)

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
    $("#block9 .description").val(localStorage.getItem("block9"))
    $("#block10 .description").val(localStorage.getItem("block10"))
    $("#block11 .description").val(localStorage.getItem("block11"))
    $("#block12 .description").val(localStorage.getItem("block12"))
    $("#block13 .description").val(localStorage.getItem("block13"))
    $("#block14 .description").val(localStorage.getItem("block14"))
    $("#block15 .description").val(localStorage.getItem("block15"))
    $("#block16 .description").val(localStorage.getItem("block16"))
    $("#block17 .description").val(localStorage.getItem("block17"))

    timeChecker()
})