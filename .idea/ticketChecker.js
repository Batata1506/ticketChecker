// Check if the element exists
const element = document.querySelector('h4.css-1xixvph.eh8fd905');
const logoThere = document.querySelector('div.css-s5y73v.e1ee23lg0');

if (!logoThere) {
    // If the element exists, simulate a click on it
    element.click();

    setTimeout(() => {
        document.querySelector('button.css-17jso0u.e1dvqv261').click();

        setTimeout(()=> {
            document.querySelector('button.css-obhtex.e1dvqv261').click();s
        },1500)
    }, 1000)

} else {
    // If the element doesn't exist, refresh the page
    setTimeout( ()=> {

        location.reload();
    }, 5000)

}




