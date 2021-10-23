// $(function(){
//     console.log("hello")
//     $.get("res/json/posts.json", function(posts){
//         console.log("hello")
//         for (post of posts){
//             let div = $('<div class = "post">');
//             let userId = $('<h2>').text(post.userId);
//             let title = $('<h1>').text(post.title);
//             let body = $('<p>').text(post.body);
//             div.append(userId);
//             div.append(title);
//             div.append(body);
//             $('body').append(div);
//         }
//     })
// });

$(function(){
    $.get("https://private-8275d-wad21posts1.apiary-mock.com/posts", function(posts){
        let divPostContainer = $('<div id="posts_container">');
        for (post of posts){
            console.log("hello")

            let divPost = $('<div class = "post">');
            let divHeader = $('<div class = "post_header">');
            let divauthorName = $('<div class = "name">');
            let divdatetime = $('<div class="dateTime">');
            let divPicture = $('<div class="picture">');
            let divauthorIcon = $('<div class = "icon">');
            let divPostText = $('<div class="post_text">');
            let divPostBottom = $('<div class="post_bottom">');


            let iconUrl = post.author.iconurl;
            let name = $('<p>').text(post.author.name);
            let datetime = $('<p>').text(post.datetime);
            let picture =  post.photo.url;
            let postText = $('<p>').text(post.text);
            let button = $('<button>');
            let buttonImg =  post.Button.url;

            
            divauthorName.append(name);
            divdatetime.append(datetime);

            divauthorIcon.append('<img src="' + iconUrl + '" alt="Author">');
            divPicture.append('<img src="' + picture + '" alt="Post image">');
            divPostText.append(postText)
            button.append('<img src="' + buttonImg + '" alt="Post image">');
            divPostBottom.append(button)
            
            divHeader.append(divauthorIcon);
            divHeader.append(divauthorName);
            divHeader.append(divdatetime);

            divPost.append(divHeader);
            divPost.append(divPicture);
            divPost.append(divPostText);
            divPost.append(divPostBottom);

            divPostContainer.append(divPost);
            
        }
        $('body').append(divPostContainer);
    })
});