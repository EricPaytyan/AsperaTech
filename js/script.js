function form() {
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
}
form();


function tab() {
    document.addEventListener("DOMContentLoaded", function () {
        const tabLinks = document.querySelectorAll(".tabLink");
        const tabContents = document.querySelectorAll(".tabContent");
        const labels = document.querySelectorAll('label')
    
        function activateTab(index) {
            tabContents.forEach((tabContent, i) => {
                if(i === index) {
                    tabContent.classList.add('active');
                    labels[i].style.opacity = '1';
                } else {
                    tabContent.classList.remove('active');
                    labels[i].style.opacity = '0.4';
                }
            });
        }
    
        tabLinks.forEach((tabLink, index) => {
            tabLink.addEventListener("change", () => activateTab(index));
        });
    
        // Активируем первую вкладку при загрузке
        activateTab(0);
    });
}
tab();
