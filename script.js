document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    console.log('Feedback submitted:', data);
    
    document.getElementById('feedbackForm').classList.add('hidden');
    document.getElementById('responseMessage').classList.remove('hidden');
});