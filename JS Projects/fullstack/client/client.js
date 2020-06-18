const form = document.querySelector('form');
const loading = document.querySelector('.loading');
const API_URL = 'http://localhost:5000/submit';
const pageElements = document.querySelector('.posts')

loading.style.display = '';

listContent();

loading.style.display = 'none';

form.addEventListener('submit',(event) => {
    event.preventDefault();
    const formdata = new FormData(form);
    const name = formdata.get('name');
    const content = formdata.get('cont');
    const data = {
        name,
        content
    };
    form.style.display = 'none';
    loading.style.display = '';
    fetch(API_URL,{
        method:'POST',
        body: JSON.stringify(data),
        headers:{
            'content-type': 'application/json'
        }
    }).then(response => response.json())
    .then(() => {
        form.reset();
        loading.style.display = 'none';
        form.style.display = '';
        listContent();
    })
    
})

function listContent(){
    pageElements.innerHTML = '';
    const POSTS_API = 'http://localhost:5000/items';
    fetch(POSTS_API)
        .then(response => response.json())
        .then(posts => {
            posts.reverse();
            posts.forEach(post => {
                const div = document.createElement('div');
                div.className = 'items';
                const header = document.createElement('h3');
                header.textContent = post.name;
                
                const content = document.createElement('p');
                content.textContent = post.content;

                const date = document.createElement('small');
                date.textContent = new Date(post.created);

                div.appendChild(header);
                div.appendChild(content);
                div.appendChild(date);
                pageElements.appendChild(div);
            })
        })
}
