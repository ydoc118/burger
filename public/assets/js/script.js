$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id);
        var newDevoured = $(this).data("newdevoured");

        var newlyDevoured = {
            devoured: newDevoured
        };
        console.log(newlyDevoured);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newlyDevoured
        }).then(
                location.reload()
            )
        });

    $(".create-form").on("submit", event => {
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burg").val().trim(),
          devoured: 0
        };
    
        $.ajax("/api/burgers/", {
          type: "POST",
          data: newBurger
        }).then(
                location.reload() 
            );
        });

    $(".delete").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id)

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            location.reload()
        )
    })    
})