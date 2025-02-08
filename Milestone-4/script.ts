// This function listens for the form submission and generates the resume
document.getElementById("Resume-Form")?.addEventListener("submit", function (event) {
    event.preventDefault();  

    
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const cnic = (document.getElementById("phone no") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const cellNo = (document.getElementById("cell no") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;

    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    
    const fileInput = document.getElementById("picture") as HTMLInputElement;
    const file = fileInput.files ? fileInput.files[0] : null;
    let imageUrl: string | null = null;

    if (file) {
        const reader = new FileReader();
        reader.onloadend = function () {
            imageUrl = reader.result as string;
            displayResume(imageUrl); 
        };
        reader.readAsDataURL(file);
    } else {
        displayResume(imageUrl); 
    }

    
    function displayResume(imageUrl: string | null) {
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
