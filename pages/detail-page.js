// Check if name and comment is correct
function doesNotPassAllValidations(name, msg){
    if (!name && !msg)  {
        alert("You forgot to fill in your name and message!");
        return null;
    } else if (!name && msg){
        alert('You forgot to fill in your name!')
        return null;
    } else if (name && !msg){
        alert('What did you want to write about the album?')
        return null;
    } else {
        if (msg.length > 280) {
            alert('Your message is way to long.')
            return null;
        } else {
            return true;
        }
    }
}

// Returs first letter of name in capital letter
function capitalizeFirstLetter (name){
    return name.charAt(0).toUpperCase() + name.slice(1);
}


function submitComment() {
        // Receivig the input
        const inputField = document.getElementById('name');
        const name = inputField.value;
        const textArea = document.getElementById('msg');
        const msg = textArea.value;

    
        if (doesNotPassAllValidations(name, msg))  {
            // Creating the elements needed for the comment
            const comment = document.createElement('section')
            const h3 = document.createElement('h3')
            const p = document.createElement('p')
        
            // Assigning input to the required elements
            h3.innerHTML = `${capitalizeFirstLetter(name)} said:`
            p.innerHTML = msg
            comment.classList.add('comment')
            comment.appendChild(h3)
            comment.appendChild(p)

            // Create new element.
            const commentSection = document.getElementById('comments');
            commentSection.appendChild(comment);

            // Reset the intput value of inputField and textArea.  
            inputField.value = null
            textArea.value = null
            } else {
                return null;
            }
            
        }  



