import classnames from 'classnames';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import blockData from './../block.json';
// eslint-disable-next-line import/no-extraneous-dependencies
import { omit } from 'underscore';

omit( '', '' );

const v2 = {
	supports: { ...blockData.supports },
	attributes: {
		...omit( blockData.attributes, [ 'textAlignment' ] ),
		alignment: {
			type: 'string',
			default: 'left',
		},
	},
	migrate: ( attributes ) => {
		return {
			...omit( attributes, 'alignment' ),
			textAlignment: attributes.alignment,
		};
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
				tagName={ 'p' }
				value={ text }
			/>
		);
	},
};
export default v2;
