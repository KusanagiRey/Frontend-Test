const form = document.getElementById('submit');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const company = document.getElementById('company');
const jobTitle = document.getElementById('job_title');
const email = document.getElementById('email');

form.addEventListener('click', (e) => {
   e.preventDefault(); 
    
   if(checkInputs()){
    console.log(firstName.value + "\n" 
        + lastName.value + "\n" 
        + company.value + "\n" 
        + jobTitle.value + "\n"
        + email.value);
   }
});

function checkInputs(){
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const companyValue = company.value.trim();
    const jobTitleValue = jobTitle.value.trim();
    const emailValue = email.value.trim();

    let validCount = 0;

    if(firstNameValue === ''){
      setErrorFor(firstName);
    }else{
        setSuccessFor(firstName);
        validCount++;
    }

    if(lastNameValue === ''){
        setErrorFor(lastName);
    }else{
        setSuccessFor(lastName);
        validCount++;
    }

    if(companyValue === ''){
        setErrorFor(company);
    }else{
        setSuccessFor(company);
        validCount++;
    }

    if(jobTitleValue === ''){
        setErrorFor(jobTitle);
    }else{
        setSuccessFor(jobTitle);
        validCount++;
    }

    if(emailValue === ''){
        setErrorFor(email);
    }else if(!isEmail(emailValue)){
        setErrorFor(email);
    }else{
        setSuccessFor(email);
        validCount++;
    }

    if(validCount == 5){
        return 1;
    }else{
        return 0;
    }
}

function setErrorFor(input){
    input.classList.add('error');
}

function setSuccessFor(input){
    input.classList.remove('error');
}

function isEmail(email){
    return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(email);
}

const feedbackForm = document.getElementById('send');
const feedbackName = document.getElementById('feedback_name');
const feedbackEmail = document.getElementById('feedback_email');
const feedbackMessage = document.getElementById('feedback_message');

feedbackForm.addEventListener('click', (e) => {
    e.preventDefault(); 
     
    if(checkFeedback()){
        console.log(feedbackName.value + "\n" 
            + feedbackEmail.value + "\n" 
            + feedbackMessage.value);
       }
 });

 function checkFeedback(){
    const feedbackNameValue = feedbackName.value.trim();
    const feedbackEmailValue = feedbackEmail.value.trim();
    const feedbackMessageValue = feedbackMessage.value.trim();

    let validCount = 0;

    if(feedbackNameValue === ''){
      setErrorFor(feedbackName);
    }else{
        setSuccessFor(feedbackName);
        validCount++;
    }

    if(feedbackEmailValue === ''){
        setErrorFor(feedbackEmail);
    }else if(!isEmail(feedbackEmailValue)){
        setErrorFor(feedbackEmail);
    }else{
        setSuccessFor(feedbackEmail);
        validCount++;
    }

    if(feedbackMessageValue === ''){
        setErrorFor(feedbackMessage);
      }else{
          setSuccessFor(feedbackMessage);
          validCount++;
      }

    if(validCount == 3){
        return 1;
    }else{
        return 0;
    }
}