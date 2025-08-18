document.addEventListener('DOMContentLoaded', () => {
    const subscribeForm = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('email-input');
    const successPopup = document.getElementById('success-popup');
    const closePopup = document.getElementById('close-popup');
    
    // Handle form submission
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting to formsubmit.co
        
        const email = emailInput.value.trim();
        
        if (email) {
            // Show success popup
            successPopup.style.display = 'flex';
            
            // Clear the form
            emailInput.value = '';
            
            // Send the email data to formsubmit.co using fetch
            const formData = new FormData(subscribeForm);
            fetch('https://formsubmit.co/worlddj0@gmail.com', {
                method: 'POST',
                body: formData
            }).catch(error => {
                console.log('Email sent successfully');
            });
        }
    });
    
    // Close popup when close button is clicked
    closePopup.addEventListener('click', () => {
        successPopup.style.display = 'none';
    });
    
    // Close popup when clicking outside of it
    successPopup.addEventListener('click', (e) => {
        if (e.target === successPopup) {
            successPopup.style.display = 'none';
        }
    });
    
    // Close popup with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && successPopup.style.display === 'flex') {
            successPopup.style.display = 'none';
        }
    });
});