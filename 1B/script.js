$(document).ready(function () {
    $("#btnAddStudent").click(function () {       //event handling
        function getStudentData() {
            let student = {
                firstName: $("#firstName").val(),
                lastName: $("#lastName").val(),
                gender: $("input[name='gender']:checked").val()
            };
            if ($("#firstName").val() === "" || $("#lastName").val() === "") {  //validation
                alert("Please fill in all required fields.");
                return;
            }
            return student;
        }
        function storeDataToLocalStorage() {
            if (!localStorage.getItem("student")) {
                localStorage.setItem("student", JSON.stringify(getStudentData()));
            } else {
                localStorage.removeItem("student");
                localStorage.setItem("student", JSON.stringify(getStudentData()));
            }
        }
        storeDataToLocalStorage();
        window.location.href="display.html"
    });
});