// get elements in to HTML\\

                                        // SignUp Elements Get Elements 
                                        
 const firstName = document.querySelector("#firstName") ;
// console.log(firstName) ;
 const surName = document.querySelector("#surName") ;
// console.log(surName) ;
const signUpEmail = document.querySelector("#email-MobNum") ;
// console.log(signUpEmail) ;
const userMobNum = document.querySelector("#userMobNum") ;
// console.log(userMobNum) ;
const signUpPassword = document.querySelector("#new-Password") ;
// console.log(signUpPassword) ;
const genderMale = document.querySelector("#gender-male")
// console.log(genderMale)
const genderFemale = document.querySelector("#gender-female")
// console.log(genderFemale)
const genderCustom = document.querySelector("#gender-custom")
// console.log(genderCustom)
const signUpDate = document.querySelector("#date")
// console.log(signUpDate)
const signUpMonth = document.querySelector("#month")
// console.log(signUpMonth)
const signUpYear = document.querySelector("#year")
// console.log(signUpYear)
const signupBtn = document.querySelector("#signup-btn")
// console.log(signupBtn)

// YE SHOW PASSWORD ICON KA HAI!
const showPasswordBtn = document.querySelector("#showPassword")
// console.log(showPasswordBtn)

// YE  OVERLAY HATAnay ki id ko bula na 
const overlay = document.querySelector("#staticBackdrop")
// console.log(overlay)


// date, month, year declare variable 
let signUpdate ;
let signUpmonth ;
let signUpyear ;
let signUpgender;
                                          // Login Elements Get Elements 

  const loginEmailAddress = document.querySelector("#loginEmailAddress")
//   console.log(loginEmailAddress)
  const loginPassword = document.querySelector("#loginPassword")
//   console.log(loginPassword)
  const loginBtn = document.querySelector("#loginBtn")
//   console.log(loginBtn)
  
//                                           user data in array 
UserDataInArray = JSON.parse(localStorage.getItem("UsersData")) || [];

                                      // Add event listener on signup btn
                                      
signupBtn.addEventListener("click",signup)

                              // Add event listener on login btn
                              
 loginBtn.addEventListener("click",login)

//                                Add event listener on  showPasswordBtn 

showPasswordBtn.addEventListener("click",showPassword)



//                                       Get Date ,year , month and gender  function 

function getDateHandler(date) {
    console.log(date, "dateHandler working")
    signUpdate = date
    signUpDate.innerHTML = date;
}
function getMonthHandler(month) {
    console.log(month, "monthHandler working")
    signUpmonth = month
    signUpMonth.innerHTML = month;
}
function getYearHandler(year) {
    console.log(year, "yearHandler working")
    signUpyear = year
    signUpYear.innerHTML = year;
}
function getGenderHandler(gender) {
    console.log(gender, "genderHandler working")
    signUpgender = gender
}

// Password Show or Not Function

function showPassword(){
    // console.log(signUpPassword.value)
if(signUpPassword.type ==="password"){
    signUpPassword.type = "text"
}else{
    signUpPassword.type === "text"
    signUpPassword.type ="password"
}
} 



//                                                 Login Function 

function login (){
    
    // AA BHI RAHAY HAIN YE DONO    ⇓
    // console.log(loginEmailAddress.value)
    // console.log(loginPassword.value)

    if(!loginEmailAddress.value || !loginPassword.value) {
        return alert("please type or write Email && password to login")
    }
    const userFound = UserDataInArray.filter((user) => {

        console.log("user Email filter value",user.signUpEmail)
        return user.signUpEmail === loginEmailAddress.value
    })
    
    // console.log(userFound," ===> user Found in login")


    if(!userFound.length) return alert("This user is not registered , kindly create account first ")


    // console.log( loginPassword.value,"login password  ")
    // console.log( userFound.signUpPassword,"from local storage")

    if(userFound[0].signUpPassword === loginPassword.value){
        alert("Welcome To login")

        localStorage.setItem("loginUser", JSON.stringify(userFound[0]))

        window.location.href ="./dashborad/dashboard.html";
    }else{
        alert("password is incorrect")
    }
}
//                                               Signup Function 

function signup (){

    const userFound = UserDataInArray.filter((user)=>{
        console.log("user email in our email; input", signUpEmail.value)
       return user.signUpEmail == signUpEmail.value
    })
    
    if(userFound.length) return alert("Email Address already in use")

    // console.log("user mil gaya ",userFound)

    overlay.classList.toggle('show')

    if(firstName.value !== "" && surName.value !== "" && signUpEmail.value !== "" && signUpPassword !== "" && userMobNum !== "" && signUpdate !== undefined && signUpmonth !== undefined && signUpyear !== undefined && signUpgender !== undefined) {
        if(signUpPassword.value.length < 8) return  alert("Password kam sai kam 8 characters ka dalo");

        
        const objects ={
            firstName : firstName.value,
            surName : surName.value,
            signUpEmail : signUpEmail.value,
            userMobNum : userMobNum.value,
            signUpPassword : signUpPassword.value,
            gender : signUpgender,
            userDate : new Date (`${signUpyear}-${signUpmonth}-${signUpdate}`)
        }
        // console.log(objects)

        UserDataInArray.push(objects)
        // console.log(UserDataInArray)

       localStorage.setItem("UsersData",JSON.stringify(UserDataInArray))
        alert("Thanks For Connecting Us ")
        
        firstName.value = ""
        surName.value = ""
        signUpEmail.value = ""
        userMobNum.value = "" 
        signUpPassword.value = ""
        signUpDate.innerHTML  = "Date"
        signUpMonth.innerHTML = "Month" 
        signUpYear.innerHTML  = "Year"

    }else {
        alert("Please Fill all fields To connect us")

       
        
    }
}















