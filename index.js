// Get control of elements
const viewMoreBtn = document.getElementById('view-more-btn')
const blogGridCellArr = Array.from(document.getElementsByClassName("blog-grid-link"))
const overlay = document.getElementById('overlay')
const menuContainer = document.getElementById('menu-container')
const blogItemArr = Array.from(document.getElementsByClassName('blog-item-container'))
let blogExpansionFlag = false
const expansionArrowContainer = document.getElementById('expansion-arrow-container')


// Function to run once page is loaded
handleWindowSizeChange()

// Event Listener for CLICK action
document.addEventListener("click", function(event){
    if(event.target.id === 'view-more-btn'){
        handleViewMore()
    }
    else if (event.target.id === 'bar-icon'){
        openOverlay()
    }
    else if(event.target.id === 'x-btn' || event.target.id === 'overlay')
    {
        closeOverlay()
    }
    else if (event.target.dataset.id ==='blog-expansion'){
        handleBlogExpansion()
    }
})

// Event Listener when window is resized
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

function openOverlay() {
    overlay.style.display = 'block'
    menuContainer.style.display = 'block'
}

function closeOverlay() {
    overlay.style.display = 'none'
    menuContainer.style.display = 'none'
}

function handleBlogExpansion() {
    if(!blogExpansionFlag){
        blogItemArr.forEach( blogItem => blogItem.style.display = 'block')
        expansionArrowContainer.innerHTML = `<i class="fa-solid fa-angle-up" data-id="blog-expansion">`
    } else {
        blogItemArr.forEach( blogItem => blogItem.style.display = 'none')
        expansionArrowContainer.innerHTML = `<i class="fa-solid fa-angle-down" data-id="blog-expansion">`
    }
    blogExpansionFlag = !blogExpansionFlag
}

function handleWindowSizeChange(){
    
    if(window.innerWidth >= 480) {
        // Hide bars icon
        document.querySelectorAll('.main-nav a').forEach(elem => elem.style.display = 'block')
        document.getElementById('bar-icon').style.display = 'none'
        closeOverlay()
    } 
    else {
        // Show bars icon
        document.querySelectorAll('.main-nav a').forEach(elem => elem.style.display = 'none')
        document.getElementById('bar-icon').style.display = 'block'   
    }

    if(window.innerWidth >= 768) {
        //Expand into 6 grid display
        for (let i = 3; i < 6; i++ ){
            blogGridCellArr[i].style.display = 'block'
        }
    }
    else {
        // Collapse into 3 grid display
        for (let i = 3; i < blogGridCellArr.length; i++ ){
            blogGridCellArr[i].style.display = 'none'
            viewMoreBtn.style.display = 'inline-block'
        }
    }
}
