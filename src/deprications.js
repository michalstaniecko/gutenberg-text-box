import classnames from 'classnames';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import blockData from './block.json';

const v1 = {
	supports: { ...blockData.supports },
	attributes: {
		...blockData.attributes,
		text: {
			type: 'string',
			source: 'html',
			selector: 'h4',
		},
	},
	save: ( { attributes } ) => {
		const { text, alignment, shadow, shadowOpacity } = attributes;

		const classes = classnames( `text-box-align-${ alignment }`, {
			'has-shadow': shadow,
			[ `shadow-opacity-${ shadowOpacity }` ]: shadow && shadowOpacity,
		} );

		return (
			<RichText.Content
				{ ...useBlockProps.save( {
					className: classes,
				} ) }
				tagName={ 'h4' }
				value={ text }
			/>
		);
	},
};
export default v1;
