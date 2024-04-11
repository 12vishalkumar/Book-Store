//******************* Importing the required libararies **********************
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';


//******************** Best selller function of the books ********************
const NytBestsellers = ({ searchObj, setSearchObj, history }) => {
	const [list, setList] = useState(null);
	const [nfList, setnfList] = useState(null);
	useEffect(() => {
		fetch(
			`https://d1krvzwx5oquy1.cloudfront.net/books.json?api-key=${process.env.REACT_APP_NYT_KEY}`
		)
		.then((res) => res.json())
		.then((res) => {
			setList(res);
		})
		.catch(console.error);
		fetch(
			`https://d1krvzwx5oquy1.cloudfront.net/books.json?api-key=${process.env.REACT_APP_NYT_KEY}`
		)
		.then((res) => res.json())
		.then((res) => {
			setnfList(res);
		})
		.catch(console.error);
	}, []);
	const handleClick = (bestseller) => {
		setSearchObj({
			...searchObj,
			title: bestseller.title,
			author: bestseller.author,
			isbn: bestseller.primary_isbn13,
		});
		history.push('/books');
	};

	if (!list) {
		return (
			<div className='margin'>
				<p>Book List not Found</p>
			</div>
		);
	}

	if (!nfList) {
		return (
			<div className='margin'>
				<p>Book List not Found</p>
			</div>
		);
	}

	//*********************** Return the best selling books **********************
	return (
		<div className='margin'>
			<div className='authors'>
				<h4>The New York Times Best Sellers</h4>
				<h2>Best Sellers: Fiction</h2>
				<Carousel>
					{list.results.books.map((bestseller, i) => {
						return (
							<Carousel.Item key={i} onClick={() => handleClick(bestseller)}>
								<span>{bestseller.rank} </span>
								<img
									className='nyt-img'
									src={bestseller.book_image}
									alt='First slide'
								/>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
			<br />
			<div className='authors'>
				<h4>The New York Times Best Sellers</h4>
				<h2>Best Sellers: Non-Fiction</h2>
				<Carousel>
					{nfList.results.books.map((bestseller, i) => {
						return (
							<Carousel.Item key={i} onClick={() => handleClick(bestseller)}>
								<span>{bestseller.rank} </span>
								<img
									className='nyt-img'
									src={bestseller.book_image}
									alt='First slide'
								/>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};

export default NytBestsellers;