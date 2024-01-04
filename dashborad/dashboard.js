
//                                       JavaScript in dasboard gets all elements 

const logoutBtn = document.querySelector('#logoutBtn');
// console.log(logoutBtn)
const profileBtn = document.querySelector('#profileBtn');
// console.log(profileBtn)

const postBtn = document.querySelector("#postAddImage")
// console.log(postBtn)
const postArea = document.querySelector('#postArea')
// console.log(postArea)
const postInputArea = document.querySelector('#input-text')
// console.log  ("post input value ====>", postInputArea.value)
const userName = document.querySelector('.User_name')
// console.log  (userName)


//                   get Data Into localstorage
const getLoginUser = JSON.parse(localStorage.getItem('loginUser'))
// console.log(getLoginUser)

// userName.forEach((user)=>{
//     return  user.textContent = `${UsersData.firstName} ${UsersData.lastName}`
// })


// Array In get Value from local storage
const loginUserData   =JSON.parse(localStorage.getItem("loginUserData")) || [];
console.log(loginUserData)


//           forEach  on loginUsersData
loginUserData.forEach((item)=>{

    let div = document.createElement('div')
    div.setAttribute('class','container shadow mt-3 p-3 mb-5 bg-body rounded')
    div.innerHTML = item.post
    postArea.appendChild(div)

})
//                                               Post btn add eventlistener

postBtn.addEventListener("click", post)

//                                               Profile btn add eventlistener

profileBtn.addEventListener("click", profile)
//                                               logout btn add eventlistener

logoutBtn.addEventListener("click", logout)



//                                                  function to Post Add Image 
function post() {
    let div = document.createElement('div')
    div.setAttribute('class', 'container shadow mt-3 p-3 mb-5 bg-body rounded')

    div.innerHTML = `  <div class="row">
                            <div class="col">
                                <div class="full-box">
                                    <h6 class="account-title-name  ">
                                        <img src="https://scontent.fkhi4-3.fna.fbcdn.net/v/t39.30808-6/344859260_9764027536941505_5188833060278820647_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH7vxBxRC8BIXXDfKxmKp_QIQqlHeM23VkhCqUd4zbdWUQP10T73idj9leNJ4HhuNE3NEJ2L2biQphwS3SpwqfO&_nc_ohc=Ev9NJMTiCH8AX9tS5LP&_nc_oc=AQm3HNrP-TdlBksGX79ATJtssRpdwujV4v09mFkqiz8fflH_efOIfbCadtWmLeq6I70&_nc_zt=23&_nc_ht=scontent.fkhi4-3.fna&oh=00_AfBVdO1b8Yk6YnFz6w6L08gRX270M3_UhUPeWLMuTQEWvg&oe=648F185F"
                                            alt="" width="35px" class="rounded-circle">
                                        <span class="user-name ps-2 "> <a href="../profile/profile.html"
                                                class="text-dark User_name">Muhammad Hasan Ashraf</a> </span> <br>
                                    </h6>
                                    <span class="time ps-5 fs-6 mb-0"><a href="" class="text-dark">${new Date().toLocaleTimeString()}</a> <i
                                            class="fa-solid fa-globe"></i></span>
                                    <div class="description ps-2">
                                        ${postInputArea.value}
                                    </div>
                                    <div class="post">
                                        <img src="./assets/edit underwater.jpg " alt="" class="" ">
                                    </div>
                                    <div class="like-share d-flex justify-content-around align-items-center">
                                        <div class="lik-box ">
                                            <img src="./assets/Edit like thumbsup.jpg" alt="" width="30px">
                                            <span class="like-text"> <strong>Like</strong></span>
                                        </div>
                                        <div class="comment-box ">
                                            <img src="./assets/comment.png" alt="" width="40px">
                                            <span> <strong>Comment</strong></span>
                                        </div>
                                        <div class="share-box">
                                            <img src="./assets/Share edit.jpg" alt="" width="55px">
                                            <span> <strong>Share</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>`

    postArea.prepend(div)

    const postObject = {
        signUpEmail : getLoginUser.signUpEmail,
        post : div.innerHTML,
        date :new Date(),
        time :new Date().toLocaleTimeString()
    }
    
    loginUserData.unshift(postObject)
    // console.log(loginUserData)
    localStorage.setItem('loginUserData',JSON.stringify(loginUserData))

    postInputArea.value  = " "

}
//                                                  function to logout 

function logout() {
    window.location.href = "../index.html"
}
//                                                  function to Profile 

function profile() {
    window.location.href = "/profile/profile.html";
}