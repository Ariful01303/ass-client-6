const searchBooks=()=>{
    const searchFild=document.getElementById('input-fild');
    const searchText=searchFild.value;
    
    searchFild.value=''
      const url=`https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data=>displaySearch(data.docs))
}
const displaySearch =books=>{
    const divFild=document.getElementById('div-box')
    books.forEach(book=>{
      
        const div=document.createElement('div')
        div.classList.add("col-md-4")
        const imgUrl=`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        div.innerHTML=`
        <div class="shadow rounded p-3 m-2 style="width: 18rem; height:30rem;">
        <img class="img-fluid" src="${imgUrl}">
          <h2>${book.title}</h2>
          <p>'${book.author_name}'</p>
        
        `
        divFild.appendChild(div)
    })

    }
   