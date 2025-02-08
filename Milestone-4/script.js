document.getElementById("Resume-Form")?.addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    const name = document.getElementById("name").value;
    const cnic = document.getElementById("cnic").value;
    const email = document.getElementById("email").value;
    const cellNo = document.getElementById("cell").value;
    const address = document.getElementById("address").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    // Get the uploaded image file
    const fileInput = document.getElementById("picture");
    const file = fileInput.files ? fileInput.files[0] : null;
    let imageUrl = null;

    if (file) {
        const reader = new FileReader();
        reader.onloadend = function () {
            imageUrl = reader.result;
            displayResume(imageUrl); 
        };
        reader.readAsDataURL(file);
    } else {
        displayResume(imageUrl); 
    }

    
    function displayResume(imageUrl) {
        const resumeDisplay = document.getElementById("resume-display");
        if (resumeDisplay) {
            resumeDisplay.innerHTML = ''; 

            
            const resumeContent = `
                <h2>${name}</h2>
                ${imageUrl ? `<img src="${imageUrl}" alt="Profile Picture" style="width: 150px; border-radius: 50%;">` : ''}
                <p><strong>CNIC:</strong> ${cnic}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Cell No:</strong> ${cellNo}</p>
                <p><strong>Address:</strong> ${address}</p>

                <h3>Education:</h3>
                <p>${education}</p>

                <h3>Experience:</h3>
                <p>${experience}</p>

                <h3>Skills:</h3>
                <p>${skills}</p>
            `;

            resumeDisplay.innerHTML = resumeContent;
        }
    }
});
