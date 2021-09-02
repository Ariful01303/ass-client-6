
 




const searchBooks=()=>{
    const searchFild=document.getElementById('input-fild');
    const searchText=searchFild.value;
    document.getElementById('spiner-box').style.display="block";
    searchFild.value=''
     
       document.getElementById("error-message").innerText="";
      const url=`http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res=>res.json())
    
    .then(data=>displaySearch(data.docs))
   
}

const displaySearch =books=>{
  
  const first30Books=books.slice(0,30)
  if(first30Books.length===0){
    document.getElementById("error-message").innerText="Please Enter correct Name of Books";
  }
  document.getElementById('num').innerText=books.length;
  // console.log(books)
    const divFild=document.getElementById('div-box')
    divFild.innerHTML=""
    first30Books.forEach(book=>{
     
      
        const div=document.createElement('div')
        div.classList.add("col-md-3")
        const imgUrl=`http://covers.openlibrary.org/b/id/${book.cover_i?book.cover_i:''}-M.jpg`
        div.innerHTML=`
        <div class="shadow rounded p-2 m-2 " style="width: 16rem; height:30rem;">
        <img class="img-fluid mx-4" src="${imgUrl}">
        <div class="mt-2 text-center"
          <h2>Book name: ${book.title ? book.title:''}</h2>
          <h5>Author name: ${book.author_name ? book.author_name:''}</h5>
          <h5>First publish Year: ${book.first_publish_year ? book.first_publish_year:''}</h5>

             <p>Publisher: ${book.publisher ? book.publisher:''}</p>

        </div>
        </div>
        `
        divFild.appendChild(div )
    });
    document.getElementById('spiner-box').style.display="none";

    }
   
