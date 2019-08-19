function delegatEvent(fromElement, eventName, targetSelector, callback) {

    fromElement.addEventListener(eventName, event => {

        let targetList = [...event.currentTarget.querySelectorAll(targetSelector)];

        if (targetList.includes(event.target)) {
            callback(event);
        }
    })

}

const trackListElem = document.querySelector(".track-list");

delegatEvent(trackListElem, "click", ".track", (event) => {
    console.log(`playing ${event.target.innerText}`);

});