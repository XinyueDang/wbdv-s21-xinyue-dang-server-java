(function () {
    var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $removeBtn, $editBtn, $createBtn, $updateBtn;
    var $userRowTemplate, $tbody;

    var userService = new AdminUserServiceClient();
    $(main);
    function main() {
        usernameFld = $("#usernameFld")
        passwordFld = $("#passwordFld")
        firstNameFld = $("#firstNameFld")
        lastNameFld = $("#lastNameFld")
        roleFld = $("#roleFld")

        createBtn = $(".wbdv-create")
        createBtn.click(createUser)
        updateBtn = $(".wbdv-update")
        updateBtn.click(updateUser)
        tbody = $(".wbdv-tbody")
//
//          courseService.findAllCourses()
//            .then(function (actualCoursesFromServer) {
//              courses = actualCoursesFromServer
//              renderCourses(courses)
//            })
    }
    var users = [];
    function createUser() {
        var user = {};
        user.username = usernameFld.val();
        user.password = '';
        user.firstName = firstNameFld.val();
        user.lastName = lastNameFld.val();
        user.role = roleFld.val();

        /*userService.createUser(user)
            .then(function (actualUser) {
              users.push(actualUser)
              renderUsers(users)
            })*/
        users.push(user)
        renderUsers(users)
    }

    function deleteUser(event) {
        console.log(event)
        var deleteBtn = jQuery(event.target)
        var theClass = deleteBtn.attr("class")
        var theIndex = deleteBtn.attr("id")
        var theId = users[theIndex]._id
//        courseService.deleteCourse(theId)
//          .then(function (status) {
//           courses.splice(theIndex, 1)
//           renderCourses(courses)
//           })
        users.splice(theIndex, 1)
        renderUsers(users)
    }

    var selectedUser = null
    function selectUser(event) {
        console.log(event)

        var selectBtn = $(event.target)
        var theClass = selectBtn.attr("class")
        var theIndex = selectBtn.attr("id")
        var theId = users[theIndex]._id
        //var theId = selectBtn.attr("id")
        selectedUser = users.find(user => user._id === theId)
        console.log(selectedUser)
        usernameFld.val(selectedUser.username);
        firstNameFld.val(selectedUser.firstName);
        lastNameFld.val(selectedUser.lastName);
        roleFld.val(selectedUser.role);
    }

    function updateUser() {
        selectedUser.username = usernameFld.val();
        selectedUser.password = '';
        selectedUser.firstName = firstNameFld.val();
        selectedUser.lastName = lastNameFld.val();
        selectedUser.role = roleFld.val();

        /*userService.updateCourse(selectedCourse._id, selectedCourse)
          .then(function (status) {
            var index = courses.findIndex(course => course._id === selectedCourse._id)
            courses[index] = selectedCourse
            renderCourses(courses)
          })*/
        var index = users.findIndex(user => user._id === selectedUser._id)
        users[index] = selectedUser
        renderUsers(users)
    }

    function renderUsers(users) {
          tbody.empty();
          for (var i = 0; i < users.length; i++) {
            var user = users[i]
            tbody
              .append(`
            <tr>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.role}</td>
                <td>
                    <span class="pull-right">
                       <i class="fa-lg fa fa-times wbdv-remove" id="${i}"></i>
                          &nbsp;
                       <i class="fa-lg fa fa-pencil wbdv-edit" id="${i}"></i>
                    </span>
                </td>
            </tr>
          `)
          }
          jQuery(".wbdv-remove")
            .click(deleteUser)
          jQuery(".wbdv-edit")
            .click(selectUser)
    }
//    function findAllUsers() { … } // optional - might not need this
//    function findUserById() { … } // optional - might not need this
})();