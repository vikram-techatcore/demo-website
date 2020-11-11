var productDetails = [
	{
		name: 'Laptop',
		price: '$3000',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Mobile',
		price: '$343500',
		manu: 'HTC',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Laptop',
		price: '$3000',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Laptop',
		price: '$3000',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Laptop',
		price: '$3000',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Laptop',
		price: '$3000',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Laptop',
		price: '$3000',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Mobile',
		price: '$343500',
		manu: 'HTC',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Laptop',
		price: '$3000',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Laptop',
		price: '$3000',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Laptop',
		price: '$3000',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Laptop',
		price: '$3000',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Laptop',
		price: '$3000',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Mobile',
		price: '$343500',
		manu: 'HTC',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Laptop',
		price: '$3000',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Laptop',
		price: '$3000',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Laptop',
		price: '$3000',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	},
	{
		name: 'Laptop',
		price: '$3000',
		manu: 'Samsung',
		image: 'https://rukminim1.flixcart.com/image/416/416/jhgl5e80/computer/j/c/q/asus-na-laptop-original-imaf5h69pz9fexc4.jpeg?q=70'
	}
];


function showProductData(productData) {
	var mainDiv = document.createElement("div");
	mainDiv.setAttribute("class", "block");
	var ulTag = document.createElement("ul");

	
	var pImg = document.createElement("span");
	pImg.setAttribute("class","prodImg")
	var img = document.createElement("img");
	img.setAttribute("src", productData.image,)
	pImg.append(img);
	ulTag.append(pImg);

	var li1 = document.createElement("li");
	li1.innerHTML =  'product Name: ';
	var span1 = document.createElement("span");
	span1.innerHTML = productData.name;
	li1.append(span1);
	ulTag.append(li1);

	var li2 = document.createElement("li");
	li2.innerHTML = 'Product Price';
	var span2 = document.createElement("span");
	span2.innerHTML = productData.price;
	li2.append(span2);
	ulTag.append(li2);

	var li3 = document.createElement("li");
	li3.innerHTML = 'Product Manufacturer';
	var span3 = document.createElement("span");
	span3.innerHTML = productData.manu;
	li3.append(span3);
	ulTag.append(li3);

	mainDiv.append(ulTag);

	document.querySelector('.main_container').append(mainDiv);


}

var count = 0;
function loadProductData() {
	count++;
	for (var i = 0 ; i < productDetails.length; i++) {

		showProductData(productDetails[i]);
	}
}

loadProductData();