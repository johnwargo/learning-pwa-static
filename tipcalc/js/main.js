// @ts-check

// https://flaviocopes.com/how-to-format-number-as-currency-javascript/
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

function updateTipAmounts() {
    // grab the meal cost from the page
    let mealCost = document.getElementById("mealCost").value;
    // Populate the table with tip amounts
    document.getElementById('tip10').innerHTML = formatter.format(mealCost * 0.10);
    document.getElementById('tip15').innerHTML = formatter.format(mealCost * 0.15);
    document.getElementById('tip18').innerHTML = formatter.format(mealCost * 0.18);
    document.getElementById('tip20').innerHTML = formatter.format(mealCost * 0.20);
    document.getElementById('tip22').innerHTML = formatter.format(mealCost * 0.22);
}

console.log('Start');
// Create an object we'll use to hold the a reference to the PWA install
// event
let deferredPrompt;
// Now add an event listener to respond to the event. Right before the browser
// installs the PWA, it fires the beforeinstallprompt event. Here, we'll manage
// the installation ourselves
window.addEventListener('beforeinstallprompt', (event)=>{
    console.log('Event: beforeinstallprompt')
    // don't allow the browser to do its install, we want to do it when the user
    // taps the install button
    event.preventDefault();
    // stash the event object so we can use it later (when the user taps the 
    // install button)
    deferredPrompt = event;
    // Now unhide the Install button
    document.getElementById('installButton').style.display = 'block';
});
console.log('End');