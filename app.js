'use strict'
let form = document.getElementById('movieForm') ;
let tableHead = document.getElementById('tablehead') ;

let allMovie = [] ;
function Movie(mName ,category ,mYear ,path ){
    this.mName = mName ;
    this.category = category ;
    this.mYear = mYear ; 
    this.path = path ;
    allMovie.push(this)
}
 
function eventHandler(event){
    event.preventDefault() ;
    let mName = event.target.mName.value ;
    let category = event.target.category.value ;
    let mYear = event.target.mYear.value ;
    if(category === "Action"){
        this.path = 'img/action.png' ;
    }elseif( category === "Adventure")
    {
        this.path = 'img/adventure.png' ;
    }elseif( category === " Animation")
    {
        this.path = 'img/animation.png' ;
    }elseif( category === " Comedy")
    {
        this.path = 'img/comedy.png' ;
    }elseif( category === "Detective")
    {
        this.path = 'img/detective.png' ;
    }elseif( category === "Fantasy")
    {
        this.path = 'img/fantasy.png' ;
    }elseif( category === " History")
    {
        this.path = 'img/history.png' ;
    }elseif( category === "Horror")
    {
        this.path = 'img/horror.png' ;
    }elseif( category === "Musical")
     { this.path = 'img/musical.png' ;}elseif( category === "Pirate")
     { this.path = 'img/pirate.png' ;} elseif( category === "Romantic")
     { this.path = 'img/Romantic.png' ;}elseif( category === "SCI-FI")
     { this.path = 'img/sci-fi.png' ;}elseif( category === "War")
     { this.path = 'img/war.png'}
     else{
         this.path = 'img/westren.png' ;
     }


    let newMovie = new Movie(mName,category,mYear,path) ;
    setLocalStorag(); 
    render() ;

}
 form.addEventListener('submit' ,eventHandler) ;


  function setLocalStorag() {
      localStorage.setItem('movie' ,JSON.stringify(allMovie)) ;
  }

  Movie.prototype.render = function(){ 
      tableHead.textContent = "" ;
      let tHead = document.createElement('th') ;
      tableHead.appendChild(tHead) ;
      tHead.textContent = this.path ;

      let tHead1 = document.createElement( 'th ') ;
      tableHead.appendChild( tHead1) ;
      tHead1.textContent =this.mName ;

      let tHead2 = document.createElement( 'th ') ;
      tableHead.appendChild( tHead2) ;
      tHead2.textContent =this.mYear ;

  }


  let clear = document.getElementById('clearList') ;
  clear.addEventListener('click' ,clearAll())

function clearAll(){
    localStorage.clear() ;
    window.location.reload() ;
}




   function getData(){
       let data = JSON.parse(localStorage.getItem('movie')) ;
       if(data)
       { for (let i = 0; i < data.length; i++) {
          let newlist =new Movie( data[i].mName , data[i].category ,data[i].mYear)
           
       }
       newlist.render() ;
    }
   }
   getData() ;