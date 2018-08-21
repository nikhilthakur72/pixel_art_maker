// Select color input
// Select size input
$(document).ready(function() {
    //enter the valid color picker or the color you want to choose
    let color = $("#colorPicker");
    var height_one = $("#inputHeight");
    var width_one = $("#inputWeight");
    const table = document.getElementById('pixelCanvas');
    $("#Submit").click(function(sub)
        //use sub as a function to submit in the code
        {
            sub.preventDefault();
            makeGrid();
        });

    function makeGrid() {
        //make the function of grid in which we take height and width	
        table.innerHTML = '';
        let height = height_one.val();
        let width = width_one.val();
        let Colorsss = function(second) {
            second.addEventListener('click', function() {
                second.style.backgroundColor = color.val();
            });
        }
        for (let i = 0; i <
            height; ++i) {
            let row = table.insertRow(i);
            for (var j = 0; j <
                width; ++j) {
                let last = row.insertCell(j);
                last.addEventListener('click', Colorsss(last));
                //use last as a function to make the color 
            }
        }
    }
});