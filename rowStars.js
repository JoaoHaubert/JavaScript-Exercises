
showStars(5);

function showStars(rows){
    for (let row = 1; row <= rows; row++){
        let star = ''
        for(let i =0; i < row; i++) 
            star +='*'
            console.log(star)
    }
      
    
}