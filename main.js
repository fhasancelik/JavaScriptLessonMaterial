const container = document.querySelector(".container");
//console.log(container)

const count=document.querySelector('#count')
//console.log(count)

const amount=document.querySelector('#amount')
//console.log(amount)

const select=document.querySelector('#movie')
//console.log(select)

const seats=document.querySelectorAll('.seat:not(.reserve)')

//console.log(seats)


function calculateTotal(){

    let selectedCount=container.querySelectorAll('.seat.select').length
    //console.log(selectedCount)
    count.innerText=selectedCount
    
    let price=select.value;
    //console.log(price)

    amount.innerText=selectedCount*price

    const selectedSeats=container.querySelectorAll('.seat.select')    
    //console.log(selectedSeats)

    const selectedSeatArr=[];

    const seatsArr=[]

    selectedSeats.forEach((seat)=>{
selectedSeatArr.push(seat)
    })

    //console.log(selectedSeatArr)

    seats.forEach((seat)=>{
        seatsArr.push(seat)
    })

    let selectedSeatIndexs=selectedSeatArr.map((selectedSeat)=>{
        return seatsArr.indexOf(selectedSeat)
    })

   // console.log(selectedSeatIndexs)

   saveToLocalStorage(selectedSeatIndexs)



}

const getFromLocalStorage=()=>{
    const selectedSeats=JSON.parse(localStorage.getItem('selectedSeats')
    )
    //console.log(selectedSeats)

if(selectedSeats != null && selectedSeats.length > 0 ){
    seats.forEach((seat,index)=>{
        if(selectedSeats.indexOf(index) > -1){
            seat.classList.add('select')
        }
    })
}
 









    const selectedMovieIndexx=JSON.parse(localStorage.getItem('selectedMovieIndex'
    )
    
    )
    //console.log(selectedMovieIndexx)
    

if(selectedMovieIndexx !=null){
    select.selectedIndex=selectedMovieIndexx
}

}

const saveToLocalStorage=(indeks)=>{
    localStorage.setItem('selectedSeats',JSON.stringify(indeks))


localStorage.setItem('selectedMovieIndex',select.selectedIndex)


}

container.addEventListener("click", function (event) {
  const seat = event.target.classList.contains("seat");
  const reserveSeat = event.target.classList.contains("reserve");
  if (seat && !reserveSeat) {
    //console.log(event.target);
    event.target.classList.toggle('select')

calculateTotal()



  }
});
select.addEventListener('change',function(e){
calculateTotal()
})

getFromLocalStorage()