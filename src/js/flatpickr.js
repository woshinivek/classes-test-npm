import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/material_green.css";

flatpickr("#datePicker", {
  onChange: function (selectedDates, dateStr, instance) {
    console.log("instance", instance);
    console.log("dateStr", dateStr);
    console.log("selectedDates", selectedDates);
  },
});
