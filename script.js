    // Search bar
    $("#searchBar").on("keyup", function () {
        let searchQuery = $(this).val().toLowerCase();
        $("#contactsTableBody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(searchQuery) > -1);
        });
    });

    // Add new contact

    $("#addContact").click(function () {
        $("table tbody").append(`<tr><td><input type="checkbox" name="select"></td><td>` + $("#firstName").val() + "</td><td>" + $("#lastName").val() + "</td><td>" + $("#number").val() + "</td><td>" + $("#address").val() + "</td></tr>");
    });

    // Delete selected contacts
    
    $("#deleteContacts").click(function () {
        $("table tbody").find(`input[type="checkbox"]`).each(function () {
                if ($(this).is(":checked")) {
                    $(this).closest("tr").remove();
                }
            });
    });