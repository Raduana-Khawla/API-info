function albums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => albumOFPhotos(data))
}
albums();
function albumOFPhotos(albums){
const albumContainer= document.getElementById('album');
for(const album of albums){
    const div=document.createElement('div');
    div.style.textAlign='center';
    div.innerHTML=`<p>${album.title}</p>`;
    albumContainer.appendChild(div);
}
}