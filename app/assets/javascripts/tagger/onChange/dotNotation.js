$(function() {

    $("#dotNotation").change(function(e){
        if (e.target.value == previousDotValue) {}
        else {
            blankCurrentAlignment();
            previousDotValue = $('#dotNotation').val();
            document.getElementById('itemURL').value = '';
            document.getElementById('description').value = '';
            document.getElementById('description').value = 'Loading (please wait)....';
            document.getElementById('addButton').setAttribute("class","btn btn-success disabled");
            document.getElementById('deleteButton').setAttribute("class","btn btn-warning disabled");
            for (i = 0; i < alignmentArray.length; i++) {
                if ($('#dotNotation').val() ==  alignmentArray[i].title) {
                    document.getElementById('itemURL').value = alignmentArray[i].url;
                    document.getElementById('itemGUID').value = alignmentArray[i].guid;
                    $.ajax({
                        async: false,
                        url: 'http://anyorigin.com/get?url='+alignmentArray[i].description+'&callback=?',
                        dataType: "json",
                        success: function(data){
                            var newTitle = $(data.contents).filter('title').text();
                            if (newTitle != ''){
                                var tempDivLength = newTitle.length;
                                document.getElementById('description').value = newTitle;
                                document.getElementById('addButton').setAttribute("class","btn btn-success");
                                document.getElementById('deleteButton').setAttribute("class","btn btn-warning disabled");
                            }
                            if (newTitle == ''){
                                document.getElementById('description').value = 'No Description Available';
                                document.getElementById('addButton').setAttribute("class","btn btn-success");
                                document.getElementById('deleteButton').setAttribute("class","btn btn-warning disabled");
                            }

                        }
                    });
                }
            }
        }
    });

});