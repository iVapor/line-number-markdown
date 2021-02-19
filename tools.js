var log = console.log.bind(console)

//1.Control DOM
var eleSelector = function(selector) {
    var element = document.querySelector(selector)
    if (element == null) {
        var s = `Can't find element,maybe selector ${selector} doesn't found out. Or JS doesn't put in body.`
        alert(s)
    } else {
        return element
    }
}

var eleSelectorAll = function(selector) {
    var elements = document.querySelectorAll(selector)
    if (elements.length == 0) {
        var s = `Can't find element,maybe selector ${selector} doesn't found out. Or JS doesn't put in body.`
        alert(s)
    } else {
        return elements
    }
}
var appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

var bindEleEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}