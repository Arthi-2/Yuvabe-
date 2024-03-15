

   fetch('https://doty-cms-backend-fwbywqemba-uc.a.run.app//api/contents?populate=*',{
    headers: {Authorization: 'Bearer a5e5102c84036eff4fb65a1db8a88b43fd4dd5e3e63aa7305c39d514c871e07fc551b3a4ef69466409c0d977205e081032f8a6c52fe89c2e921c528f457729e756accabd623243ac7f70f344adb283ef90e901184c17e52b2010a08e24b5325796dbefd63b94951cf00654ef702fe596347ee5cfeb68992d93a86586fa739735'}
  }) 


.then(response => { 
	if (!response.ok) { 
	throw new Error('Network response was not ok'); 
	} 
	return response.json(); 
}) 


.then(apiResponse => { 
  console.log(apiResponse)

	for(i=0; i<apiResponse.data.length; i++)
    {   
        item = apiResponse.data[i];
        
        let video_id = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

        console.log('id' + item.id);
        console.log('title' + item.title);
       
        console.log('short_description' + item.attributes.short_description);
  
        console.log('long_description' + item.attributes.long_description);

        console.log('video_url' + item.attributes.video_url);

        contentdiv = document.createElement('div');
        contentdiv.innerHTML = `

          <h2>ID:</h2><h4>${item.id}</h4>

          <h2>TITLE:</h2> <h4>${item.attributes.title}</h4>

          <h2>SHORT DESCRIPTION:</h2> <p>${item.attributes.short_description}</p>
          
          <h2>LONG DESCRIPTION:</h2> <p>${item.attributes.long_description}</p>
  
          <h2>VIDEO:</h2><iframe src="https://www.youtube.com/embed/${item.attributes.video_url.match(video_id)[1]}"></iframe>
         

        `; 

        contentcontainer.appendChild(contentdiv);
      }

    })

    .catch(error => { 
      console.error('There was a problem with the fetch operation:', error); 
    }); 
    
   
          
 
   