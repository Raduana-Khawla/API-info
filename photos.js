function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhoto(data))
 }
 loadPhotos();
 function displayPhoto(photos){
     const photoContainer=document.getElementById('photo');
     for(const photo of photos){
         const div =document.createElement('div');
         div.innerHTML=`
     <p>${photo.url}</p>`;
      photoContainer.appendChild(div);

     }
 }
 // url: "https://via.placeholder.com/600/92c952"