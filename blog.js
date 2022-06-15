let tampungData = []
//console.log(tampungData);

function addBlog(e) {
    e.preventDefault()
    // menangkap dom
    let projectName = document.querySelector('.inputblog').value
    let projectStartDate = document.querySelector('.start-date').value
    let projectEndDate = document.querySelector('.end-date').value 
    let descrip = document.querySelector('.inputblogcontent').value
    let nodejs = document.getElementById('input-nodejs').checked
    let git = document.getElementById('input-git').checked
    let reactjs = document.getElementById('input-reactjs').checked
    let mage = document.querySelector('.inputblogmage').files
    mage = URL.createObjectURL(mage[0])
    // menangkap dom


    //kondisi untuk checkbox (checked)
    if (nodejs) {
        nodejs = document.getElementById('input-nodejs').value
    } else {
        nodejs = 'Belum dicentang'
    }

    if (git) {
        git = document.getElementById('input-git').value
    } else {
        git = 'Belum dicentang'
    }

    if (reactjs) {
        reactjs = document.getElementById('input-reactjs').value
    } else {
        reactjs = 'Belum dicentang'
    }
    //kondisi untuk checkbox (checked)

    // menampung tangkapan dom
    let total = {
        projectName,
        projectStartDate,
        projectEndDate,
        descrip,
        nodejs,
        git,
        reactjs,
        mage
    }
    // menampung tangkapan dom

    tampungData.push(total)
    console.log(tampungData)
    renderBlog()
}

/* function waktu (start, end) {
    let timeStart = new Date()
    let timeEnd = new Date()
    let timePostStart = start
    let timePostEnd = end
    let gabungstart = timeStart + timePostStart
    let gabungEnd = timeEnd + timePostEnd
    let distance = gabungEnd - gabungstart
}
waktu(projectStartDate, projectEndDate); */


function renderBlog() {
    document.getElementById('contents').innerHTML = ''

    for(let i=0; i < tampungData.length; i++) {
        document.getElementById('contents').innerHTML += `
        <div class= "item-blog-list">
        <div class="blog-list-item"> 
            <div class="blog-image"></div>
            <img src="${tampungData[i].mage}" alt="...">

            <div class="blog-content">
            
            <h1>
                <a href="blog-detail.html" target="_blank">${tampungData[i].projectName}</a>
            </h1>
            <div class="detail-blog-content">
                12 Jul 2021 22:30 WIB | Bambang
                
            </div>
            <p>
                ${tampungData[i].descrip}
            </p>
            <i class="fa-brands fa-${tampungData[i].nodejs}"></i>
            <i class="fa-brands fa-${tampungData[i].git}"></i>
            <i class="fa-brands fa-${tampungData[i].reactjs}"></i>

            <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
            </div>
        </div>
        </div>
        
    </div>
        `
    }
}
