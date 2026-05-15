import {placeholderPropertyObj} from './properties/placeholderPropertyObj.js'
import {propertyForSaleArr} from './properties/propertyForSalArr.js'


function getPropertyHtml(pro_obj = placeholderPropertyObj){ 
        
    const propertyHtml = pro_obj.map(element => {

        const {propertyLocation, priceGBP, roomsM2, comment, image, alt} = element

        const houseSize = roomsM2.reduce((total, current) => {return total + current}, 0 )

        return `<section class="card">
                    <img src="./images/${image}" alt='${alt}'>
                    <div class="card-right">
                        <h2>${propertyLocation}</h2>
                        <h3>${priceGBP}</h3>
                        <p>${houseSize} m&sup2</p>
                        <h3>Total size in sqaure meters </h3>
                    </div>
                </section>`

    }).join('')
    
    return propertyHtml
}

document.getElementById("cards-container").innerHTML = getPropertyHtml(propertyForSaleArr)



