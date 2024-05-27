document.addEventListener('DOMContentLoaded', () =>{
const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#newPost-title').value.trim();
    const content = document.querySelector('#newPost-content').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                content,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('new post creation failed');
        }
    }
 
}


//event listener
document.querySelector('.newPost-form').addEventListener('submit', newPostHandler);
});