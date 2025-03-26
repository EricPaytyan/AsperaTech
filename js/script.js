const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const statusMessage = document.getElementById("statusMessage");
    const submitBtn = document.querySelector('.submitBtn');
    const formInputs = document.querySelectorAll('.formInput');
    
    formInputs.forEach(formInput => formInput.disabled = true);
    submitBtn.disabled = true;
    submitBtn.textContent = 'Отправка...';

    try {
        const response = await fetch("https://formsubmit.co/paytyaneric@gmail.com", {
            method: "POST",
            body: formData
        });
        
        
        if (response.ok) {
            statusMessage.style.display = "block"; 
            form.reset(); 

            setTimeout(() => {
                statusMessage.style.display = 'none';
            }, 5000)
        } else {
            alert("Ошибка при отправке. Попробуйте снова.");
        }
    } catch (error) {
        alert("Ошибка соединения!");
    } finally {
        formInputs.forEach(formInput => formInput.disabled = false);
        submitBtn.disabled = false;
        submitBtn.textContent = 'Отправить';
    }
})