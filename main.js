async function apiCall(url) {


    //add api call logic here
   let res = await fetch(url)

   let data = await res.json();

   return data;

}


function appendArticles(articles, main) {

    //add append logic here
    articles.map((elem,index) =>{
        let box = document.createElement('div')
        box.setAttribute('id','box')

        box.addEventListener('click',()=>{
            localStorage.setItem('article',JSON.stringify(articles[index]))
            window.location.href='news.html'
        })

        let image_div= document.createElement('div');
        image_div.setAttribute('id','image')

        let image = document.createElement('img')
        image.src = elem.urlToImage;
        
        image_div.append(image)
        let title_div = document.createElement('div')

        let head = document.createElement('h4')
        head.textContent=elem.title
       
         title_div.append(head)
        box.append(image_div,title_div)

        main.append(box)


    })
 

}

export { apiCall, appendArticles }