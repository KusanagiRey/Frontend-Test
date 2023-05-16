const form=document.getElementById("submit"),firstName=document.getElementById("first_name"),lastName=document.getElementById("last_name"),company=document.getElementById("company"),jobTitle=document.getElementById("job_title"),email=document.getElementById("email");function checkInputs(){const e=firstName.value.trim(),t=lastName.value.trim(),a=company.value.trim(),r=jobTitle.value.trim(),s=email.value.trim();let c=0;return""===e?setErrorFor(firstName):(setSuccessFor(firstName),c++),""===t?setErrorFor(lastName):(setSuccessFor(lastName),c++),""===a?setErrorFor(company):(setSuccessFor(company),c++),""===r?setErrorFor(jobTitle):(setSuccessFor(jobTitle),c++),""===s?setErrorFor(email):isEmail(s)?(setSuccessFor(email),c++):setErrorFor(email),5==c?1:0}function setErrorFor(e){e.classList.add("error")}function setSuccessFor(e){e.classList.remove("error")}function isEmail(e){return/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(e)}form.addEventListener("click",(e=>{e.preventDefault(),checkInputs()&&console.log(firstName.value+"\n"+lastName.value+"\n"+company.value+"\n"+jobTitle.value+"\n"+email.value)}));const feedbackForm=document.getElementById("send"),feedbackName=document.getElementById("feedback_name"),feedbackEmail=document.getElementById("feedback_email"),feedbackMessage=document.getElementById("feedback_message");function checkFeedback(){const e=feedbackName.value.trim(),t=feedbackEmail.value.trim(),a=feedbackMessage.value.trim();let r=0;return""===e?setErrorFor(feedbackName):(setSuccessFor(feedbackName),r++),""===t?setErrorFor(feedbackEmail):isEmail(t)?(setSuccessFor(feedbackEmail),r++):setErrorFor(feedbackEmail),""===a?setErrorFor(feedbackMessage):(setSuccessFor(feedbackMessage),r++),3==r?1:0}feedbackForm.addEventListener("click",(e=>{e.preventDefault(),checkFeedback()&&console.log(feedbackName.value+"\n"+feedbackEmail.value+"\n"+feedbackMessage.value)}));