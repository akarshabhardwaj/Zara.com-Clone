import React from "react";

let Womens = [
    {
        id: 1,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910025.jpg?plain&size=400x400',
        name: 'Cutter & Buck Ladies CB DryTec Edge Full Zip Jacket',
        price: 8000,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 2,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910016.jpg?plain&size=400x400',
        name: 'Cutter & Buck Ladies CB DryTec Edge Full Zip Jacke',
        price: 3600,
        shipping: 'Sold by Cutter & Buck',
        star: 4
    },
    {
        id: 3,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940909972.jpg?plain&size=400x400',
        name: 'Clique Ladies Stora Jacket ',
        price: 6000,
        shipping: 'Sold by Cutter & Buck',
        star: 4
    },
    {
        id: 4,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910044.jpg?plain&size=400x400',
        name: 'Clique Helsa Sport Colorblock Lady Full Zip Jacket',
        price: 4300,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 5,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1939500299.jpg?plain&size=400x400',
        name: 'Altitude Quilted Jacket',
        price: 16400,
        shipping: 'Sold by Cutter & Buck',
        star: 4
    },
    {
        id: 6,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910047.jpg?plain&size=400x400',
        name: 'Clique Ladies Kingsland Jacket',
        price: 5800,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 7,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/273200/273200/products/1935901540.jpg?plain&size=400x400',
        name: 'PINKO Womens Sabrina Destroyed Raw Hem Skinny Jeans',
        price: 5600,
        shipping: 'Sold by Ranch and Home',
        star: 3
    },
    {
        id: 8,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/290000/292000/292019/products/1932761893.jpg?plain&size=400x400',
        name: 'Cowgirl Tuff Western Jeans Womens Breathe Bootcut Relax Light JBRL',
        price: 8100,
        shipping: 'Sold by LUX LAIR',
        star: 3
    },
    {
        id: 9,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/290000/292000/292019/products/1932761210.jpg?plain&size=400x400',
        name: 'CBUK Mens Swish Full-Zip Jeans',
        price: 6400,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 10,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1936329597.jpg?plain&size=400x400',
        name: 'Cowgirl Tuff Western Bib Overall Women Fleece Lined Winter Dark JTWBI',
        price: 7900,
        shipping: 'Sold by BOBBI + BRICKA',
        star: 3
    },
    {
        id: 11,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/273200/273200/products/1921892767.jpg?plain&size=400x400',
        name: 'LEVIS Womens Blue Straight Leg, Classic Fit Denim Jeans',
        price: 2400,
        shipping: 'Sold by BOBBI + BRICKA',
        star: 3
    },
    {
        id: 12,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/273200/273200/products/1935600568.jpg?plain&size=400x400',
        name: 'LEVIS Womens Blue Straight Leg, Classic Fit Denim Jeans',
        price: 4800,
        shipping: 'Sold by JC Penny',
        star: 4
    },
    {
        id: 13,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/280000/285800/285857/products/1939697102.jpg?plain&size=400x400',
        name: 'CBUK Womens Swish Full-Zip jacket',
        price: 4400,
        shipping: 'Sold by Cutter & Buck',
        star: 1
    },
    {
        id: 14,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/240000/245300/245346/products/1900553453.jpg?plain&size=400x400',
        name: 'True Religion Womens Tony Denim Destory Skinny Jeans',
        price: 1600,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 15,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1943601108.jpg?plain&size=400x400',
        name: 'Cutter & Buck Womens Big & Tall CB DryTec Northgate Polo Shirt',
        price: 2000,
        shipping: 'Sold by Cutter and Buck',
        star: 3
    },
    {
        id: 16,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910038.jpg?plain&size=400x400',
        name: 'Cutter & Buck Womens Big & Tall CB DryTec Northgate Polo Shirt',
        price: 8000,
        shipping: 'Sold by Cutter and Buck',
        star: 3
    },
    {
        id: 17,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1939530742.jpg?plain&size=400x400',
        name: 'Cutter & Buck Versatech Multi Check Stretch Womens Big and Tall',
        price: 7500,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 18,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910014.jpg?plain&size=400x400',
        name: 'True Religion Womens Tony Denim Destory Skinny Shirt',
        price: 7800,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 19,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940909963.jpg?plain&size=400x400',
        name: 'True Religion Womens Tony Denim Destory Skinny Shirt',
        price: 1600,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 20,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1951836745.jpg?plain&size=400x400',
        name: 'True Religion Womens Tony Denim Destory Skinny Shirt',
        price: 6600,
        shipping: 'Sold by BHFO',
        star: 5
    },
    {
        id: 21,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1951836750.jpg?plain&size=400x400',
        name: 'True Religion Womens Tony Pink Destory Skinny Shirt',
        price: 1600,
        shipping: 'Sold by BHFO',
        star: 1
    },
    {
        id: 22,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/260000/264900/264928/products/1901073237.jpg?plain&size=400x400',
        name: 'Le Suit Womens Petite Pleated-Hem Skirt Suit ',
        price: 20000,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 23,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/260000/264900/264928/products/1793404153.jpg?plain&size=400x400',
        name: 'Womens Burgundy Le Suit Womens Petite Pleated-Hem Skirt Suit ',
        price: 16000,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 24,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/250000/252500/252590/products/1871750233.jpg?plain&size=400x400',
        name: 'Womens Belted Wool Look Blazer - Brown - 1',
        price: 14400,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 25,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/250000/252500/252590/products/1865702130.jpg?plain&size=400x400',
        name: 'Womens Belted Wool Look Blazer - Black - 88',
        price: 2100,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 26,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/240000/248200/248295/products/1905294173.jpg?plain&size=400x400',
        name: 'Club Monaco Fashion Blazer',
        price: 26000,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 27,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1923609965.jpg?plain&size=400x400',
        name: 'Club Monaco Fashion Blazer',
        price: 13600,
        shipping: 'Sold by BHFO',
        star: 1
    },
    {
        id: 28,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/250000/253200/253251/products/1938914710.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Womens Wacam Pullover Sweater, Style',
        price: 3500,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 29,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/260000/269300/269358/products/1909824272.jpg?plain&size=400x400',
        name: 'DC Comics Superman and Supergirl Symbol Crop Top Sweater',
        price: 2600,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 30,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/270000/273200/273200/products/1932139463.jpg?plain&size=400x400',
        name: 'BB Dakota by Steve Madden Womens Knit Right In V-Neck Cardigan Sweater',
        price: 1000,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 31,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1944335527.jpg?plain&size=400x400',
        name: 'Karen Scott Petite Curved-Hem Neps Pullover Sweater, Created for Macys ',
        price: 3500,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 32,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/270000/273200/273200/products/1871424805.jpg?plain&size=400x400',
        name: 'Diane Von Furstenberg Womens Jess Ribbed Lightweight Crewneck Sweater',
        price: 1560,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 33,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/280000/288000/288080/products/1894373587.jpg?plain&size=400x400',
        name: 'Leopard Cardigan Top Quality Women ',
        price: 4800,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 34,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1922848179.jpg?plain&size=400x400',
        name: 'BRoxy Juniors Faraway Shades Pullover Sweater',
        price: 13200,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 35,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/280000/288000/288080/products/1892927825.jpg?plain&size=400x400',
        name: 'Draped Cardigan - Navy Top Quality Women',
        price: 1320,
        shipping: 'Sold by BHFO',
        star: 2
    }
] 

function Women(){
    return (
        <h1>WOMENS PAGE</h1>
    )
}
export default Women