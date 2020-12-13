  $("#progress").on("click", showProgress);
  $("#showCanvas").on("click", showCanvas);

  function showProgress() {
    // $('#progress-div').css("display", "block");
    $('#progress-div').removeClass("d-none");
    // hide the canvas
    canvas.style.display = "none";
  }

  function showCanvas() {
    // $('#progress-div').css("display", "none");
    $('#progress-div').addClass("d-none");
    // show the canvas
    canvas.style.display = "block";
  }
