$(document).ready(function () {
    var current_note = null;
    var notes = [{
            name: "AAAAAAAAAAAAAAAAA",
              content: "11"
            },
            {
                name: "BBBBBBB bb bbb bbbbbb",
                content: "22"
            },
            {
                name: "Ccccccccccccccc",
                content: "33"
            },
            {
                name: "ddd dddddddd dddd",
                content: "44"
            }];

    var $name = $('#name');
    var $content = $('#content');
    var $search = $('#search');

    for (var i = 0; i < notes.length; i++) {
        var $li = $("<li>");
        $('#list').append($li.text(notes[i].name).val(i)
        );
    }
    $('#wrap_list').click(function(e){
        var target = $(e.target);
        if (target.is("li")) {
            var note = notes[target.val()];
            current_note = target.val();
            $name.val(note.name);
            $content.text(note.content)
        }
    });
    $('#create').click(function() {
        if ($name.val() != "")
        {
            var elem = {
                name: $name.val(),
                content: $content.text()
            };
            notes.push(elem);
            var $li = $("<li>");
            $('#list').append($li.text(elem.name).val(notes.length - 1)
            );
            current_note = notes.length - 1;
        }
    });
    $search.change(function() {
        console.log(12);
        var items = $("li");
        items.show();
        for (var i = 0; i < items.length; i++) {
            if ($(items[i]).text().indexOf($search.val()) == -1) {
                $(items[i]).hide();
            }
        }
    });
    $name.change(function() {
        notes[current_note].name = $name.val();
        $($('ul').children()[current_note]).text($name.val());
    });
    $content.change(function() {
        notes[current_note].name = $content.val();
    });

});




