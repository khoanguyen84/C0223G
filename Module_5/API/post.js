function renderPostList() {
    $.ajax({
        "url": 'https://js-post-api.herokuapp.com/api/posts',
        "method": "get",
        success: function (data) {
            let htmls = data.map(function (post, index) {
                return `
                <div class="col-md-6 mb-4">
                    <div class="card">
                        <img src="${post.imageUrl}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text fs-6">${post.description}</p>
                            <div class="card-text fst-italic">
                                <span class="fw-bolder">Author: ${post.author}</span>
                                <span>Create date: ${new Date(post.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
                `
            })
            $('#post-list').append(htmls.join(''));
        }
    })
}

function openCreatePostModal() {
    $('#create-post-modal').modal('show');
}

renderPostList();

$(document).ready(function () {
    $('#loadingDiv')
        .hide()  // Hide it initially
        .ajaxStart(function () {
            $(this).show();
        })
        .ajaxStop(function () {
            $(this).hide();
        })
})
