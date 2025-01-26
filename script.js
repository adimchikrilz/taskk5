document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('adoption-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual submission
        
        // Basic validation
        const name = document.getElementById('name').value;
        const animal = document.getElementById('animal-select').value;
        const reason = document.getElementById('adoption-reason').value;
        
        if (name.trim() === '') {
            alert('Please enter your name');
            return;
        }
        
        if (animal === '') {
            alert('Please select an animal');
            return;
        }
        
        if (reason.trim() === '') {
            alert('Please provide a reason for adoption');
            return;
        }
        
        alert('Adoption request submitted successfully!');
        form.reset(); // Reset form after submission
    });
});
