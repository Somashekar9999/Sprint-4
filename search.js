function storeSearchterm(term,fix) {

   async function donow(){
       let res =  await fetch(`https://shrouded-earth-23381.herokuapp.com/api/search/?q=${term}`);

       let data = await res.json();
      
       console.log(data);
       data.map(elem =>{
        let box = document.createElement('div')
          box.setAttribute('id','box')
  
          let image_div= document.createElement('div');
          image_div.setAttribute('id','image')
  
          let image = document.createElement('img')
          image.src = elem.urlToImage;
          
          image_div.append(image)
          let title_div = document.createElement('div')
  
          let head = document.createElement('h4')
          head.textContent=elem.title
          
          let des = document.createElement('p')
          des.textContent=elem.description;

           title_div.append(head,des)
          box.append(image_div,title_div)
  
          fix.append(box)
      })
   }
   
   donow();
   
}

export default storeSearchterm