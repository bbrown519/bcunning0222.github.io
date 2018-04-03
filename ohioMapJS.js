"use strict";









//global variables:
var geojson;
var map;
// control that shows state info on hover
var info = L.control();

window.onload = function () {
    renderMyMap();
    buildC();
}
function renderMyMap() {

    map = L.map('map').setView([40, -83], 7);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 8,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mapbox.light'
    }).addTo(map);

// info is declared as a global varialbe, outside the function assigned to the window.onload  
info.addTo(map);

    //geojson is declared as a global varialbe, outside the function assigned to the window.onload  
    //if(document.getElementById("age").checked === true){ 
        
    //}
}
setInterval(function  buildC(){
    geojson = L.geoJson(statesData, {
        style: style,
        onEachFeature: onEachFeature
        ,filter: function(feature,layer){
            return (feature.properties.A===ASelect)
        }
   
    }).addTo(map);
    
    renderMyMap();
},100)

//When adding the info
info.onAdd = function (map) {
    //"this" returns to info. 
    this._div = L.DomUtil.create('div', 'info');
    //the following line calls info.update(props) function. Again, this refers to 'info' here
    this.update();
    return this._div;
};
//Update the info based on what state user has clicked on
info.update = function (props) {
    this._div.innerHTML = '<h4>the age is (1-7) </h4>' + (props ?
        '<b>' + props.A + '</b><br />' + props.A + ' Years old'
        : 'Hover over a state'+'the county selected='+ASelect);
};

// get color depending on population density value
// this is an example from lab 5 doesn't effect the map as of now 
//but could take some info from this
function getColor(d) {
    var Ccolor = '';

    if (d === 0){
        Ccolor = 'red'
    }
    if (d === 1){
        Ccolor = 'green'
    }
    if (d === 2){
        Ccolor = 'yellow'
    }
    if (d === 3){
        Ccolor = 'blue'
    }
    if (d === 4){
        Ccolor = 'skyblue'
    }
    if (d === 5){
        Ccolor = 'grey'
    }
    if (d === 6){
        Ccolor = 'orange'
    }
    if (d === 7){
        Ccolor = 'purple'
    }
    return Ccolor
}

function style(feature) {
    return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 1,
        fillColor: getColor(feature.properties.A)
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7
    });


    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);

}


function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
    //e.target will get us to the layer
}
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight
    });
}
