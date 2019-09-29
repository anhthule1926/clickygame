import React from 'react';
import "./Item.css";

const Item = ({name, image, onClick}) =>
			<img 
				className="click-item"
				src={image}
				alt={name}
				name={name}
				onClick={ () => onClick(name) }
			/>;


export default Item;
