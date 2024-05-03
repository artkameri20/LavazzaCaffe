 const product = [
            {
                id: 0,
                image: 'images/strawberry.jpeg',
                title: 'strawberry cake' ,
                
            
            },
            {
                id: 1,
                image: 'images/banana.jpeg',
                title: 'banana cake',
             
            },
            {
                id: 2,
                image: 'images/blueberry.jpeg',
                title: 'blueberry cake',
               
            },
            {
                id: 3,
                image: 'images/snickers.jpeg',
                title: 'snickers cake',
               
            },
            {
                id: 4,
                image: 'images/chocolate.jpeg',
                title: 'chocolate cake',
                
            },
            {
                id: 5,
                image: 'images/oreo.jpeg',
                title: 'oreo cake',
               
            },
             {
                id: 6,
                image: 'images/trileqe.jpeg',
                title: 'trileqe cake',
                
            },
             {
                id: 7,
                image: 'images/capucciono.jpeg',
                title: 'capuccino coffe',
              
            },
             {
                id: 8,
                image: 'images/ice.jpeg',
                title: 'ice coffe',
              
            },
             {
                id: 9,
                image: 'images/ecpresso.jpeg',
                title: 'ecpresso coffe',
               
            },
             {
                id: 10,
                image: 'images/maciatoo.jpeg',
                title: 'maciatoo coffe',
                
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
                           
                        
                        </div>
                    </div>`
                )
            }).join('')
        };
        displayItem(categories);
