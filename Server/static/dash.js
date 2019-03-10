// document.getElementById('note-text').onkeydown = function (e) {
//     console.log('hello');
//     if (e.keyCode == 13) {
//         if (document.getElementById('note-text').innerText == '') {
//             var temp = new Date().toLocaleTimeString();
//             document.getElementsByClassName('notes-list') += '   <div class='container-fluid'><div class='row'><span class='new badge left-align' data-badge-caption=''>' + temp + '</span><p class='ml-3 right-align ' style='text-align: justify'>' + document.getElementById('note-text').innerText + '</p></div></div>'
//         }
//     }
// };

// function runn(){
//     var temp = new Date().toLocaleTimeString();
//     document.getElementsByClassName('notes-list') += '   <div class='container-fluid'><div class='row'><span class='new badge left-align' data-badge-caption=''>' + temp + '</span><p class='ml-3 right-align ' style='text-align: justify'>' + document.getElementById('note-text').innerText + '</p></div></div>'
//     console.log('asdfasd')

// }

// $('.dropdown-trigger').dropdown();

var client = new XMLHttpRequest();
client.open('GET', '/datadump', false);
client.send();
console.log(client.responseText);

init = JSON.parse(responseText)
init.


var socket = io.connect('http://34.73.208.146');



socket.on('frontend new message', onmessage);
var increment = 0;
function onmessage(data) {
    console.log(data)
    var obj = JSON.parse(data)
    document.getElementsByClassName('emergencies')[0].innerHTML = "<a class='list-group-item list-group-item-action list-group-item-danger collapsed' data-toggle='collapse' href='#val"+increment+"' role='button'>"+obj.name+"<span class='mr-3'></span><div class='collapse' id='val"+increment+"'><div class='card card-body mt-2 mb-3 mx-3'>"+obj.timestamp+": "+obj.message+"</div></div></a>" + document.getElementsByClassName('emergencies')[0].innerHTML;
    document.getElementById('mappy').contentWindow.location.reload();
    var ifr = document.getElementById('mappy');
    ifr.src = ifr.src;
}

