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
import metadata from "./block.json";
const { attributes, name } = metadata;
// import save from './save';
import './styles/style.scss';
import './styles/editor.scss';


const settings = {
	title: __('Post per Category', 'new-block-example'),
	description: __('List of posts depends on category.', 'new-block-example'),
	category: typeof registerBlockCollection === 'function' ? 'design' : 'new-block-example',
	icon,
	keywords: [
		__('Post', 'new-block-example'),
		__('Category', 'new-block-example'),
		__('New Block Example', 'new-block-example'),
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
	save: () => null,
};

export { name, settings };

// const {
//   i18n: { __ },
//   blocks: { registerBlockType },
//   element: { createElement: e, Fragment },
//   data: { useSelect },
//   components: {
//     TextareaControl,
//     PanelBody,
//     RangeControl,
//     ToggleControl,
//     Button,
//     FocalPointPicker,
//     Notice,
//     TextControl,
//     RadioControl,
//   },
//   blockEditor: { MediaUpload, InnerBlocks, InspectorControls, ColorPalette },
// } = window.wp;

// registerBlockType("new-block-example/posts-per-category", {
//   title: "Post per Category",
//   icon: "smiley",
//   category: "common",
//   attributes,
//   edit,
//   save: () => null,
// });
