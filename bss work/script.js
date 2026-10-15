$(document).ready(function () {
    // Bee table: clicking a bee row toggles the details row directly beneath it.
    $(".bee-details").hide();

    $(".bee-row").on("click", function () {
        $(this).next(".bee-details").toggle();
        const isExpanded = $(this).next(".bee-details").is(":visible");
        $(this).attr("aria-expanded", isExpanded);
    });

    // Allow keyboard users to expand bee details with Enter or Space.
    $(".bee-row").on("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            $(this).trigger("click");
        }
    });

    // Fields tabs: show the content section that matches the clicked tab.
    $(".field-tab").on("click", function () {
        const fieldName = $(this).data("field");

        $(".field-content").hide();
        $("#" + fieldName).show();

        $(".field-tab")
            .removeClass("active")
            .attr("aria-selected", "false");

        $(this)
            .addClass("active")
            .attr("aria-selected", "true");
    });
});
// Switch between bee rarity tabs
$(".bee-tab").on("click", function () {
    // Get the rarity from the clicked button
    let rarity = $(this).data("rarity");

    // Update which tab looks active
    $(".bee-tab")
        .removeClass("active")
        .attr("aria-selected", "false");

    $(this)
        .addClass("active")
        .attr("aria-selected", "true");

    // Show only the selected rarity section
    $(".bee-content").prop("hidden", true);
    $("#" + rarity).prop("hidden", false);
});
