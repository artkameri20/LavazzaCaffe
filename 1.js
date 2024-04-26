 const product = [
            {
                id: 0,
                image: 'images/strawberry.jpeg',
                title: 'strawberry cake' ,
                price: 6,
            
            },
            {
                id: 1,
                image: 'images/banana.jpeg',
                title: 'banana cake',
                price: 6,
            },
            {
                id: 2,
                image: 'images/blueberry.jpeg',
                title: 'blueberry cake',
                price: 6,
            },
            {
                id: 3,
                image: 'images/snickers.jpeg',
                title: 'snickers cake',
                price: 6,
            },
            {
                id: 4,
                image: 'images/chocolate.jpeg',
                title: 'chocolate cake',
                price: 6,
            },
            {
                id: 5,
                image: 'images/oreo.jpeg',
                title: 'oreo cake',
                price: 6,
            },
             {
                id: 6,
                image: 'images/trileqe.jpeg',
                title: 'trileqe cake',
                price: 7,
            },
             {
                id: 7,
                image: 'images/capucciono.jpeg',
                title: 'capuccino coffe',
                price: 4,
            },
             {
                id: 8,
                image: 'images/ice.jpeg',
                title: 'ice coffe',
                price: 4,
            },
             {
                id: 9,
                image: 'images/ecpresso.jpeg',
                title: 'ecpresso coffe',
                price: 4,
            },
             {
                id: 10,
                image: 'images/maciatoo.jpeg',
                title: 'maciatoo coffe',
                price: 4,
            },
        ];

        const categories = [...new Set(product.map((item) => { return item }))]

        document.getElementById('searchBar').addEventListener('keyup', (e) => {
            const searchData = e.target.value.toLowerCase();
            const filteredData = categories.filter((item) => {
                return (
                    item.title.toLowerCase().includes(searchData)
                )
            })
            displayItem(filteredData)
        });

        const displayItem = (items) => {
            document.getElementById('root').innerHTML = items.map((item) => {
                var { image, title, price } = item;
                return (
                    `<div class='box'>
                        <div class='img-box'>
                            <img class='images' src=${image}></img>
                        </div> 
                        <div class='bottom'>
                            <p>${title}</p>
                            <h2>$ ${price}.00</h2>
                        <button>Add to cart</button>
                        </div>
                    </div>`
                )
            }).join('')
        };
        displayItem(categories);
