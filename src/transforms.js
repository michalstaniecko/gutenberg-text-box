import { createBlock } from '@wordpress/blocks';

export default {
	from: [
		{
			type: 'block',
			blocks: [ 'core/paragraph' ],
			transform: ( { content, align } ) => {
				return createBlock( 'blocks-course/text-box', {
					text: content,
					alignment: align,
				} );
			},
		},
		{
			type: 'enter',
			regExp: /textbox/i,
			transform: () => {
				return createBlock( 'blocks-course/text-box', {
					shadow: true,
				} );
			},
		},
		{
			type: 'prefix',
			prefix: 'textbox',
			transform: () => {
				return createBlock( 'blocks-course/text-box', {
					shadow: true,
					shadowOpacity: 90,
				} );
			},
		},
	],
	to: [
		{
			type: 'block',
			blocks: [ 'core/paragraph' ],
			isMatch: ( { text } ) => {
				return !! text;
			},
			transform: ( { text, alignment } ) => {
				return createBlock( 'core/paragraph', {
					content: text,
					align: alignment,
				} );
			},
		},
	],
};
