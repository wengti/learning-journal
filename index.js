const viewMoreBtn = document.getElementById('view-more-btn')
const blogGridCellArr = Array.from(document.getElementsByClassName("blog-grid-link"))

handleWindowSizeChange()

document.addEventListener("click", function(event){
    if(event.target.id === 'view-more-btn'){
        handleViewMore()
    }
})

window.addEventListener('resize', function(){
    handleWindowSizeChange()
})


function handleViewMore() {
    // Find the first hidden blog cells
    const firstHiddenIndex = blogGridCellArr.findIndex( 
        blogGridCell => blogGridCell.style.display === 'none'
    )

    // Show 3 more blog cells
    for (let i=firstHiddenIndex; i<firstHiddenIndex+3; i++) {
        blogGridCellArr[i].style.display = 'block'
    }

    // If all blog cells have been shown, remove view-more btn
    if (firstHiddenIndex + 3 === blogGridCellArr.length){
        viewMoreBtn.style.display = 'none'
    }
}

function handleWindowSizeChange(){
    if(window.innerWidth >= 768) {
        for (let i = 3; i < 6; i++ ){
            blogGridCellArr[i].style.display = 'block'
        }
    } else {
        for (let i = 3; i < blogGridCellArr.length; i++ ){
            blogGridCellArr[i].style.display = 'none'
            viewMoreBtn.style.display = 'inline-block'
        }
    }
}
