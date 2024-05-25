const newCommentHandler = async (event) => {
    event.preventDefault();

    const postId = document.querySelector('#post-id').value.trim();
    const content = document.querySelector('#comment-text').value.trim();

    if (content) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ 
                postId,
                content,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            document.location.replace('/login')
        }
    }

};

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', newCommentHandler);