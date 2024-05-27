document.addEventListener('DOMContentLoaded', () =>{

    const editPostForm = async function (event) {
        event.preventDefault();

        const title = document.querySelector('#editPost-title').value.trim();
        const content = document.querySelector('#editPost-content').value.trim();

        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                content,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to edit post!');
        }
    };
    const deletePostHandler = async function () {
        const postId = post.dataValues.id;
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
        alert('Failed to delete');
    }
}



document.querySelector('#save-post').addEventListener('submit', editPostForm);
document.querySelector('#delete-post').addEventListener('click', deletePostHandler);
});