/**
* WordPress dependencies
*/
const { __, _x } = wp.i18n;
const { registerBlockCollection } = wp.blocks;

/**
 * Internal dependencies
 */
import icon from './icon';
import edit from './edit';
import metadata from './block.json';
import save from './save';
import './styles/style.scss';
import './styles/editor.scss';

/**
 * Register block
 */
const { attributes, name } = metadata;

const settings = {
	title: __('New Card', 'new-block-example'),
	description: __('Insert a card to highlight important content such as quotes or special notices. The card has a box style format that can be customised.', 'new-block-example'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'new-block-example',
	icon,
	keywords: [
		__('card', 'new-block-example'),
		__('container', 'new-block-example'),
		__('wrapper', 'new-block-example'),
		__('box', 'new-block-example'),
		__('aino blocks', 'new-block-example'),
	],
	supports: {
		align: ['wide', 'full'],
	},
	attributes,
	example: {
		attributes: {
			borderRadius: '20',
			shadowName: 'shadow-a',
			paddingTop: '9',
			paddingBottom: '9',
			paddingLeft: '9',
			paddingRight: '9',
		},
		innerBlocks: [
			{
				name: 'core/paragraph',
				attributes: {
					content: __( 'You can include any kind of block inside a card. It is a great block to be used on coloured backgrounds.', 'new-block-example' ),
				},
			},
		],
	},
	edit,
	save,
};

export { name, settings };
